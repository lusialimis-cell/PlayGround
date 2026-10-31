import { clamp, randRange } from './utils.js';

/**
 * Fully procedural WebAudio soundscape. No sample files: every footstep,
 * hydraulic hiss, insect chirp and growl is synthesized in the browser.
 */
export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.ready = false;
    this.master = null;
    this.musicBus = null;
    this.fxBus = null;
    this.reverb = null;
    this.noiseBuffer = null;
    this.ambient = {};
    this.inside = true;
    this.nextBug = 1.5;
    this.growlCooldown = 0;
    this.heartCooldown = 0;
    this.dead = false;
    this.muted = false;
  }

  async init() {
    if (this.ready) {
      if (this.ctx.state === 'suspended') await this.ctx.resume();
      return;
    }
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    this.ctx = new AudioCtx();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.78;
    const limiter = this.ctx.createDynamicsCompressor();
    limiter.threshold.value = -14;
    limiter.knee.value = 22;
    limiter.ratio.value = 4;
    limiter.attack.value = 0.004;
    limiter.release.value = 0.24;
    this.master.connect(limiter);
    limiter.connect(this.ctx.destination);

    this.musicBus = this.ctx.createGain();
    this.musicBus.gain.value = 0.8;
    this.musicBus.connect(this.master);
    this.fxBus = this.ctx.createGain();
    this.fxBus.gain.value = 0.95;
    this.fxBus.connect(this.master);

    await this.buildReverb();
    this.noiseBuffer = this.createNoiseBuffer(4);
    this.startAmbience();
    this.ready = true;
    this.setEnvironment(true, true);
    if (this.ctx.state === 'suspended') await this.ctx.resume();
  }

  async buildReverb() {
    const len = this.ctx.sampleRate * 2.5;
    const impulse = this.ctx.createBuffer(2, len, this.ctx.sampleRate);
    for (let channel = 0; channel < 2; channel += 1) {
      const data = impulse.getChannelData(channel);
      for (let i = 0; i < len; i += 1) {
        const t = i / len;
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, 3.7) * 0.58;
      }
    }
    this.reverb = this.ctx.createConvolver();
    this.reverb.buffer = impulse;
    const wet = this.ctx.createGain();
    wet.gain.value = 0.24;
    this.reverb.connect(wet);
    wet.connect(this.master);
  }

  createNoiseBuffer(seconds = 2) {
    const len = Math.floor(this.ctx.sampleRate * seconds);
    const buffer = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i += 1) {
      const white = Math.random() * 2 - 1;
      last = 0.985 * last + 0.015 * white;
      data[i] = white * 0.6 + last * 1.8;
    }
    return buffer;
  }

  noiseSource(duration = 1, loop = false) {
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    src.loop = loop;
    src.playbackRate.value = randRange(Math.random, 0.92, 1.06);
    if (!loop) src.start(this.ctx.currentTime, Math.random() * 2, duration);
    return src;
  }

  startAmbience() {
    const t = this.ctx.currentTime;
    const makeDrone = (freq, gain, type) => {
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = type;
      osc.frequency.value = freq;
      g.gain.value = 0;
      osc.connect(g);
      g.connect(this.musicBus);
      osc.start(t);
      return { osc, gain: g };
    };
    this.ambient.drone1 = makeDrone(41, 0.035, 'sine');
    this.ambient.drone2 = makeDrone(57.8, 0.018, 'triangle');
    this.ambient.drone3 = makeDrone(82.4, 0.009, 'sine');

    // Outdoor wind: filtered noise.
    const wind = this.noiseSource(1, true);
    const windFilter = this.ctx.createBiquadFilter();
    windFilter.type = 'lowpass';
    windFilter.frequency.value = 460;
    windFilter.Q.value = 0.4;
    const windGain = this.ctx.createGain();
    windGain.gain.value = 0;
    wind.connect(windFilter);
    windFilter.connect(windGain);
    windGain.connect(this.musicBus);
    wind.start(t);
    this.ambient.wind = { source: wind, gain: windGain, filter: windFilter };

    // Interior ventilation rumble.
    const vent = this.ctx.createOscillator();
    const ventG = this.ctx.createGain();
    vent.type = 'sawtooth';
    vent.frequency.value = 31;
    ventG.gain.value = 0;
    vent.connect(ventG);
    ventG.connect(this.musicBus);
    vent.start(t);
    this.ambient.vent = { osc: vent, gain: ventG };

    // Slow LFO breathing on wind.
    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    lfo.frequency.value = 0.075;
    lfoGain.gain.value = 120;
    lfo.connect(lfoGain);
    lfoGain.connect(windFilter.frequency);
    lfo.start(t);
    this.ambient.lfo = lfo;

    this.setEnvironment(true, true);
  }

  setEnvironment(inside, instant = false) {
    if (!this.ready) return;
    this.inside = inside;
    const now = this.ctx.currentTime;
    const time = instant ? 0.01 : 2.2;
    const set = (param, value) => {
      param.cancelScheduledValues(now);
      param.setTargetAtTime(value, now, time / 3);
    };
    set(this.ambient.drone1.gain.gain, inside ? 0.035 : 0.018);
    set(this.ambient.drone2.gain.gain, inside ? 0.018 : 0.011);
    set(this.ambient.drone3.gain.gain, inside ? 0.009 : 0.006);
    set(this.ambient.wind.gain.gain, inside ? 0.012 : 0.052);
    set(this.ambient.vent.gain.gain, inside ? 0.011 : 0.001);
  }

  setMuted(muted) {
    this.muted = muted;
    if (!this.ready) return;
    this.master.gain.setTargetAtTime(muted ? 0 : 0.78, this.ctx.currentTime, 0.1);
  }

  update(dt, state = {}) {
    if (!this.ready || this.dead) return;
    this.nextBug -= dt;
    if (!this.inside && this.nextBug <= 0) {
      this.bugChirp();
      this.nextBug = randRange(Math.random, 1.1, 5.2);
    }
    this.growlCooldown -= dt;
    if (state.threat > 0.35 && this.growlCooldown <= 0) {
      this.growl(state.threat * (state.distance ? clamp(1 - state.distance / 95, 0.1, 1) : 1));
      this.growlCooldown = randRange(Math.random, 3.4, 6.8);
    }
    this.heartCooldown -= dt;
    if (state.heart > 0.1 && this.heartCooldown <= 0) {
      this.heartbeat(state.heart);
      this.heartCooldown = 0.86 - state.heart * 0.28;
    }
  }

  bugChirp() {
    if (!this.ready) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const pan = this.ctx.createStereoPanner();
    osc.type = 'sine';
    const base = randRange(Math.random, 2800, 4900);
    osc.frequency.setValueAtTime(base, now);
    osc.frequency.setValueAtTime(base * 1.28, now + 0.035);
    osc.frequency.setValueAtTime(base * 0.9, now + 0.07);
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(randRange(Math.random, 0.003, 0.011), now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.11);
    pan.pan.value = randRange(Math.random, -0.9, 0.9);
    osc.connect(gain);
    gain.connect(pan);
    pan.connect(this.fxBus);
    osc.start(now);
    osc.stop(now + 0.13);
  }

  footstep(surface = 'dirt', intensity = 1) {
    if (!this.ready) return;
    const now = this.ctx.currentTime;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    src.playbackRate.value = randRange(Math.random, 0.7, 1.16);
    const filter = this.ctx.createBiquadFilter();
    filter.type = surface === 'metal' ? 'bandpass' : 'lowpass';
    filter.frequency.value = surface === 'metal' ? randRange(Math.random, 480, 900) : randRange(Math.random, 260, 430);
    filter.Q.value = surface === 'metal' ? 1.2 : 0.6;
    const gain = this.ctx.createGain();
    const level = 0.07 * intensity;
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(level, now + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);
    src.connect(filter);
    filter.connect(gain);
    gain.connect(this.fxBus);
    gain.connect(this.reverb);
    src.start(now, Math.random() * 2, 0.16);
    if (surface === 'metal') {
      const ping = this.ctx.createOscillator();
      const pg = this.ctx.createGain();
      ping.type = 'sine';
      ping.frequency.value = randRange(Math.random, 140, 240);
      pg.gain.setValueAtTime(level * 0.22, now);
      pg.gain.exponentialRampToValueAtTime(0.0001, now + 0.2);
      ping.connect(pg);
      pg.connect(this.fxBus);
      ping.start(now);
      ping.stop(now + 0.22);
    }
  }

  hydraulic(open = true) {
    if (!this.ready) return;
    const now = this.ctx.currentTime;
    const duration = 2.5;
    // Pressurized hiss.
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    src.loop = true;
    const bp = this.ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.setValueAtTime(open ? 1800 : 1100, now);
    bp.frequency.linearRampToValueAtTime(open ? 2600 : 1800, now + 0.4);
    bp.frequency.exponentialRampToValueAtTime(open ? 700 : 950, now + duration);
    bp.Q.value = 0.7;
    const hissGain = this.ctx.createGain();
    hissGain.gain.setValueAtTime(0, now);
    hissGain.gain.linearRampToValueAtTime(0.055, now + 0.06);
    hissGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    src.connect(bp);
    bp.connect(hissGain);
    hissGain.connect(this.fxBus);
    hissGain.connect(this.reverb);
    src.start(now, Math.random() * 2);
    src.stop(now + duration + 0.1);

    // Low hydraulic motor.
    const motor = this.ctx.createOscillator();
    const motorGain = this.ctx.createGain();
    motor.type = 'sawtooth';
    motor.frequency.setValueAtTime(open ? 38 : 46, now);
    motor.frequency.linearRampToValueAtTime(open ? 52 : 62, now + 0.8);
    motor.frequency.linearRampToValueAtTime(open ? 42 : 48, now + duration);
    motorGain.gain.setValueAtTime(0, now);
    motorGain.gain.linearRampToValueAtTime(0.025, now + 0.15);
    motorGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    const lp = this.ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 210;
    motor.connect(lp);
    lp.connect(motorGain);
    motorGain.connect(this.fxBus);
    motor.start(now);
    motor.stop(now + duration);

    // End clunk.
    const clunk = this.ctx.createOscillator();
    const cg = this.ctx.createGain();
    clunk.type = 'triangle';
    clunk.frequency.setValueAtTime(72, now + duration - 0.18);
    clunk.frequency.exponentialRampToValueAtTime(32, now + duration);
    cg.gain.setValueAtTime(0, now + duration - 0.2);
    cg.gain.linearRampToValueAtTime(0.09, now + duration - 0.15);
    cg.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    clunk.connect(cg);
    cg.connect(this.fxBus);
    clunk.start(now + duration - 0.22);
    clunk.stop(now + duration + 0.05);
  }

  switchClick() {
    if (!this.ready) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(900, now);
    osc.frequency.exponentialRampToValueAtTime(180, now + 0.035);
    gain.gain.setValueAtTime(0.04, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);
    osc.connect(gain);
    gain.connect(this.fxBus);
    osc.start(now);
    osc.stop(now + 0.07);
  }

  pickup() {
    if (!this.ready) return;
    const now = this.ctx.currentTime;
    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = i % 2 ? 'sine' : 'triangle';
      osc.frequency.value = f;
      const at = now + i * 0.07;
      gain.gain.setValueAtTime(0, at);
      gain.gain.linearRampToValueAtTime(0.04, at + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, at + 0.45);
      osc.connect(gain);
      gain.connect(this.fxBus);
      osc.start(at);
      osc.stop(at + 0.5);
    });
  }

  terminal() {
    if (!this.ready) return;
    const now = this.ctx.currentTime;
    for (let i = 0; i < 3; i += 1) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.value = 880 + i * 220;
      const at = now + i * 0.12;
      gain.gain.setValueAtTime(0.018, at);
      gain.gain.exponentialRampToValueAtTime(0.0001, at + 0.09);
      osc.connect(gain);
      gain.connect(this.fxBus);
      osc.start(at);
      osc.stop(at + 0.1);
    }
  }

  heartbeat(intensity = 1) {
    if (!this.ready) return;
    const now = this.ctx.currentTime;
    for (let i = 0; i < 2; i += 1) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      const at = now + i * 0.15;
      osc.frequency.setValueAtTime(55, at);
      osc.frequency.exponentialRampToValueAtTime(32, at + 0.14);
      gain.gain.setValueAtTime(0, at);
      gain.gain.linearRampToValueAtTime(0.04 * intensity, at + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, at + 0.3);
      osc.connect(gain);
      gain.connect(this.fxBus);
      osc.start(at);
      osc.stop(at + 0.34);
    }
  }

  growl(intensity = 0.7) {
    if (!this.ready) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();
    osc.type = 'sawtooth';
    osc2.type = 'square';
    osc.frequency.setValueAtTime(34 + Math.random() * 9, now);
    osc.frequency.linearRampToValueAtTime(46 + Math.random() * 8, now + 0.5);
    osc.frequency.linearRampToValueAtTime(31, now + 1.2);
    osc2.frequency.value = 51;
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(180, now);
    filter.frequency.linearRampToValueAtTime(380, now + 0.35);
    filter.frequency.linearRampToValueAtTime(130, now + 1.2);
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.035 * intensity, now + 0.12);
    gain.gain.linearRampToValueAtTime(0.02 * intensity, now + 0.7);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.3);
    osc.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(this.fxBus);
    gain.connect(this.reverb);
    osc.start(now);
    osc2.start(now);
    osc.stop(now + 1.32);
    osc2.stop(now + 1.32);
  }

  roar() {
    if (!this.ready) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const noise = this.ctx.createBufferSource();
    noise.buffer = this.noiseBuffer;
    const noiseFilter = this.ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.value = 420;
    noiseFilter.Q.value = 0.8;
    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.06, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.3);
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.fxBus);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1100, now);
    filter.frequency.exponentialRampToValueAtTime(270, now + 1.1);
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.12, now + 0.06);
    gain.gain.linearRampToValueAtTime(0.09, now + 0.8);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);
    osc.type = 'sawtooth';
    osc2.type = 'square';
    osc.frequency.setValueAtTime(58, now);
    osc.frequency.linearRampToValueAtTime(88, now + 0.2);
    osc.frequency.linearRampToValueAtTime(42, now + 1.2);
    osc2.frequency.setValueAtTime(70, now);
    osc2.frequency.linearRampToValueAtTime(106, now + 0.2);
    osc2.frequency.linearRampToValueAtTime(50, now + 1.2);
    osc.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(this.fxBus);
    gain.connect(this.reverb);
    osc.start(now);
    osc2.start(now);
    noise.start(now, Math.random(), 1.5);
    osc.stop(now + 1.55);
    osc2.stop(now + 1.55);
  }

  impact() {
    if (!this.ready) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(110, now);
    osc.frequency.exponentialRampToValueAtTime(32, now + 0.4);
    filter.type = 'lowpass';
    filter.frequency.value = 380;
    gain.gain.setValueAtTime(0.16, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.55);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.fxBus);
    osc.start(now);
    osc.stop(now + 0.58);
    const noise = this.noiseSource(0.34);
    const nf = this.ctx.createBiquadFilter();
    nf.type = 'lowpass';
    nf.frequency.value = 1000;
    const ng = this.ctx.createGain();
    ng.gain.value = 0.12;
    noise.connect(nf);
    nf.connect(ng);
    ng.connect(this.fxBus);
  }

  ui(up = true) {
    if (!this.ready) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'square';
    osc.frequency.value = up ? 660 : 420;
    gain.gain.setValueAtTime(0.012, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);
    osc.connect(gain);
    gain.connect(this.fxBus);
    osc.start(now);
    osc.stop(now + 0.07);
  }

  alarm() {
    if (!this.ready) return;
    const now = this.ctx.currentTime;
    for (let i = 0; i < 2; i += 1) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(320, now + i * 0.48);
      osc.frequency.linearRampToValueAtTime(620, now + i * 0.48 + 0.28);
      osc.frequency.linearRampToValueAtTime(320, now + i * 0.48 + 0.46);
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 1200;
      gain.gain.setValueAtTime(0.03, now + i * 0.48);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.48 + 0.46);
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.fxBus);
      osc.start(now + i * 0.48);
      osc.stop(now + i * 0.48 + 0.48);
    }
  }

  death() {
    if (!this.ready) return;
    this.dead = true;
    this.roar();
    const now = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(now);
    this.master.gain.setValueAtTime(0.78, now);
    this.master.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);
    this.ambient.drone1.gain.gain.setTargetAtTime(0.001, now, 0.6);
    this.ambient.wind.gain.gain.setTargetAtTime(0.001, now, 0.6);
  }

  victory() {
    if (!this.ready) return;
    const now = this.ctx.currentTime;
    [329.63, 392, 493.88, 659.25, 783.99].forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.value = f;
      const at = now + i * 0.16;
      gain.gain.setValueAtTime(0, at);
      gain.gain.linearRampToValueAtTime(0.035, at + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, at + 1.2);
      osc.connect(gain);
      gain.connect(this.fxBus);
      osc.start(at);
      osc.stop(at + 1.3);
    });
  }

  reset() {
    this.dead = false;
    if (!this.ready) return;
    const now = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(now);
    this.master.gain.setTargetAtTime(0.78, now, 0.2);
    this.setEnvironment(true, true);
  }
}
