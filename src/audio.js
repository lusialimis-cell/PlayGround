/* Fully procedural audio: no sample files, everything synthesised at runtime. */
const finite = (v, fallback = 0) => (Number.isFinite(v) ? v : fallback);
const clamp01 = v => Math.max(0, Math.min(1, v));

export class GameAudio {
  constructor() {
    this.ctx = null;
    this.ok = false;
    this.muted = false;
    this.master = null;
    this.reverb = null;
    this.noiseBuffer = null;
    this.ambient = {};
    this.heartTimer = 0;
    this.insectTimer = 2;
    this.paused = false;
    this.threat = 0;
    this.tension = null;
  }

  init() {
    if (this.ctx) { this.ctx.resume?.(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    try {
      const ctx = this.ctx = new AC();
      this.master = ctx.createGain();
      this.master.gain.value = 0.85;
      this.master.connect(ctx.destination);

      const len = Math.floor(ctx.sampleRate * 1.8);
      const ir = ctx.createBuffer(2, len, ctx.sampleRate);
      for (let ch = 0; ch < 2; ch++) {
        const d = ir.getChannelData(ch);
        for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3.2);
      }
      this.reverb = ctx.createConvolver();
      this.reverb.buffer = ir;
      const rg = ctx.createGain(); rg.gain.value = 0.3;
      this.reverb.connect(rg); rg.connect(this.master);

      const nlen = Math.floor(ctx.sampleRate * 2.5);
      const nb = ctx.createBuffer(1, nlen, ctx.sampleRate);
      const nd = nb.getChannelData(0);
      for (let i = 0; i < nlen; i++) nd[i] = Math.random() * 2 - 1;
      this.noiseBuffer = nb;

      // Low jungle wind / cave bed
      const src = ctx.createBufferSource(); src.buffer = nb; src.loop = true;
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 380; lp.Q.value = 0.8;
      const windGain = ctx.createGain(); windGain.gain.value = 0.028;
      src.connect(lp); lp.connect(windGain); windGain.connect(this.master);
      src.start();
      this.ambient.wind = windGain;

      // Electrical hum
      const hum = ctx.createOscillator(); hum.type = 'sawtooth'; hum.frequency.value = 50;
      const humLp = ctx.createBiquadFilter(); humLp.type = 'lowpass'; humLp.frequency.value = 115;
      const humGain = ctx.createGain(); humGain.gain.value = 0.005;
      hum.connect(humLp); humLp.connect(humGain); humGain.connect(this.master); hum.start();
      this.ambient.hum = humGain;

      // Rain bed
      const rain = ctx.createBufferSource(); rain.buffer = nb; rain.loop = true;
      const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 1200;
      const lp2 = ctx.createBiquadFilter(); lp2.type = 'lowpass'; lp2.frequency.value = 6200;
      const rainGain = ctx.createGain(); rainGain.gain.value = 0.0;
      rain.connect(hp); hp.connect(lp2); lp2.connect(rainGain); rainGain.connect(this.master);
      rain.start();
      this.ambient.rain = rainGain;

      // Sub-bass tension drone
      const osc = ctx.createOscillator(); osc.type = 'sine'; osc.frequency.value = 31;
      const osc2 = ctx.createOscillator(); osc2.type = 'triangle'; osc2.frequency.value = 46.2;
      const dg = ctx.createGain(); dg.gain.value = 0;
      osc.connect(dg); osc2.connect(dg); dg.connect(this.master); osc.start(); osc2.start();
      this.tension = { gain: dg, osc, osc2 };

      this.ok = true;
    } catch (err) {
      console.warn('Audio unavailable', err);
    }
  }

  resume() { this.ctx?.resume?.(); }
  setPaused(p) {
    this.paused = p;
    if (!this.ctx) return;
    if (p) this.ctx.suspend?.(); else this.ctx.resume?.();
  }
  setMuted(m) {
    this.muted = m;
    if (this.master) {
      const t = finite(this.ctx.currentTime, 0);
      this.master.gain.setTargetAtTime(m ? 0 : 0.85, t, 0.05);
    }
  }
  toggleMute() { this.setMuted(!this.muted); return this.muted; }

  _env(gainNode, t0, attack, hold, release) {
    const g = gainNode.gain;
    g.cancelScheduledValues(t0);
    g.setValueAtTime(0.0001, t0);
    g.exponentialRampToValueAtTime(Math.max(0.0002, 1), t0 + attack);
    g.setValueAtTime(1, t0 + attack + hold);
    g.exponentialRampToValueAtTime(0.0001, t0 + attack + hold + release);
  }

  _tone({ freq = 220, endFreq = null, dur = 0.25, type = 'sine', gain = 0.1, attack = 0.005, hold = 0.05, release = null, pan = 0, send = 0 }) {
    if (!this.ok || this.muted) return;
    freq = Math.max(1, finite(freq, 220));
    endFreq = endFreq == null ? null : Math.max(1, finite(endFreq, freq));
    gain = Math.max(0, finite(gain, 0.1));
    attack = Math.max(0.001, finite(attack, 0.005));
    hold = Math.max(0, finite(hold, 0.05));
    const rawDur = finite(dur, 0.25);
    dur = Math.max(attack + hold + 0.01, rawDur);
    release = release == null ? null : Math.max(0.01, finite(release, Math.max(0.02, dur - attack - hold)));
    pan = finite(pan, 0);
    send = Math.max(0, finite(send, 0));
    const ctx = this.ctx, t = finite(ctx.currentTime, 0);
    const o = ctx.createOscillator(); o.type = type; o.frequency.setValueAtTime(freq, t);
    if (endFreq) o.frequency.exponentialRampToValueAtTime(Math.max(1, endFreq), t + dur);
    const g = ctx.createGain();
    this._env(g, t, attack, hold, release ?? Math.max(0.02, dur - attack - hold));
    g.gain.value = 0; g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0001, gain), t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    let node = o;
    if (pan) { const p = ctx.createStereoPanner(); p.pan.value = Math.max(-1, Math.min(1, pan)); node.connect(p); node = p; }
    node.connect(g); g.connect(this.master);
    if (send) { const s = ctx.createGain(); s.gain.value = send; g.connect(s); s.connect(this.reverb); }
    o.start(t); o.stop(t + dur + 0.05);
  }

  _noise({ dur = 0.25, gain = 0.1, type = 'bandpass', freq = 900, q = 0.8, endFreq = null, pan = 0, send = 0, attack = 0.004 }) {
    if (!this.ok || this.muted) return;
    freq = Math.max(20, finite(freq, 900));
    endFreq = endFreq == null ? null : Math.max(20, finite(endFreq, freq));
    gain = Math.max(0, finite(gain, 0.1));
    q = Math.max(0.0001, finite(q, 0.8));
    attack = Math.max(0.001, finite(attack, 0.004));
    dur = Math.max(attack + 0.01, finite(dur, 0.25));
    pan = finite(pan, 0);
    send = Math.max(0, finite(send, 0));
    const ctx = this.ctx, t = finite(ctx.currentTime, 0);
    const src = ctx.createBufferSource(); src.buffer = this.noiseBuffer;
    src.playbackRate.value = 0.8 + Math.random() * 0.4;
    const f = ctx.createBiquadFilter(); f.type = type; f.frequency.setValueAtTime(freq, t); f.Q.value = q;
    if (endFreq) f.frequency.exponentialRampToValueAtTime(Math.max(20, endFreq), t + dur);
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0001, gain), t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    let node = f;
    if (pan) { const p = ctx.createStereoPanner(); p.pan.value = Math.max(-1, Math.min(1, pan)); node.connect(p); node = p; }
    src.connect(f); node.connect(g); g.connect(this.master);
    if (send) { const s = ctx.createGain(); s.gain.value = send; g.connect(s); s.connect(this.reverb); }
    src.start(t); src.stop(t + dur + 0.05);
  }

  step(kind = 'walk', pan = 0) {
    if (kind === 'crouch') {
      this._noise({ dur: 0.1, gain: 0.022, type: 'lowpass', freq: 420, pan });
      return;
    }
    const loud = kind === 'sprint' ? 0.1 : 0.058;
    this._noise({ dur: 0.13, gain: loud, type: 'bandpass', freq: 430 + Math.random() * 240, q: 1.2, pan, send: 0.08 });
    this._tone({ freq: 73, endFreq: 46, dur: 0.11, type: 'sine', gain: loud * 0.65, pan });
    if (kind === 'sprint') this._noise({ dur: 0.09, gain: 0.04, type: 'highpass', freq: 1800, pan });
  }

  monsterStep(vol = 0.15, pan = 0) {
    this._tone({ freq: 48, endFreq: 30, dur: 0.32, type: 'sine', gain: vol * 0.8, pan, send: 0.16 });
    this._noise({ dur: 0.2, gain: vol * 0.2, type: 'lowpass', freq: 260, pan, send: 0.15 });
  }

  monsterRoar(pan = 0, volume = 1) {
    if (!this.ok || this.muted) return;
    this._tone({ freq: 130, endFreq: 42, dur: 1.55, type: 'sawtooth', gain: 0.16 * volume, pan, send: 0.55, attack: 0.06, hold: 0.3, release: 1.1 });
    this._tone({ freq: 64, endFreq: 29, dur: 1.8, type: 'square', gain: 0.075 * volume, pan, send: 0.5, attack: 0.05, hold: 0.5, release: 1.2 });
    this._noise({ dur: 1.4, gain: 0.1 * volume, type: 'bandpass', freq: 380, endFreq: 140, q: 0.6, pan, send: 0.7 });
    this._noise({ dur: 0.4, gain: 0.045 * volume, type: 'highpass', freq: 1600, pan });
  }

  door(open = true, pan = 0) {
    this._noise({ dur: 1.5, gain: 0.055, type: 'highpass', freq: 2100, endFreq: open ? 900 : 1700, pan, send: 0.22, attack: 0.12 });
    this._tone({ freq: open ? 38 : 52, endFreq: 31, dur: 1.35, type: 'sawtooth', gain: 0.075, pan, send: 0.3, attack: 0.2, hold: 0.3, release: 0.8 });
    this._tone({ freq: 880, endFreq: 440, dur: 0.14, type: 'square', gain: 0.022, pan });
  }

  pickup() {
    this._tone({ freq: 880, dur: 0.16, type: 'square', gain: 0.035 });
    setTimeout(() => this._tone({ freq: 1320, dur: 0.25, type: 'triangle', gain: 0.045, send: 0.3 }), 90);
    setTimeout(() => this._tone({ freq: 1760, dur: 0.35, type: 'sine', gain: 0.025, send: 0.4 }), 190);
  }

  ui(ok = true) {
    this._tone({ freq: ok ? 760 : 180, endFreq: ok ? 940 : 130, dur: 0.08, type: 'square', gain: 0.02 });
  }

  heal() {
    this._tone({ freq: 300, endFreq: 600, dur: 0.35, type: 'sine', gain: 0.035, send: 0.2 });
  }

  throwRock() {
    this._noise({ dur: 0.28, gain: 0.035, type: 'bandpass', freq: 500, endFreq: 1600, q: 0.7 });
  }

  impact(pan = 0) {
    this._noise({ dur: 0.13, gain: 0.055, type: 'bandpass', freq: 1300, endFreq: 400, q: 1.1, pan, send: 0.2 });
    this._tone({ freq: 190, endFreq: 90, dur: 0.1, type: 'square', gain: 0.025, pan });
  }

  hit(pan = 0) {
    this._noise({ dur: 0.55, gain: 0.16, type: 'lowpass', freq: 700, endFreq: 180, pan, send: 0.35 });
    this._tone({ freq: 110, endFreq: 38, dur: 0.6, type: 'sawtooth', gain: 0.14, pan });
    this._tone({ freq: 1400, endFreq: 700, dur: 0.18, type: 'square', gain: 0.035, pan });
  }

  death() {
    this._tone({ freq: 120, endFreq: 24, dur: 3.5, type: 'sawtooth', gain: 0.14, send: 0.8, attack: 0.1, hold: 1.2, release: 2 });
    this._noise({ dur: 3.0, gain: 0.08, type: 'lowpass', freq: 500, endFreq: 60, send: 0.7 });
    this._tone({ freq: 900, endFreq: 900, dur: 0.4, type: 'square', gain: 0.02 });
  }

  win() {
    const notes = [261.6, 329.6, 392, 523.2, 659.2, 784];
    notes.forEach((f, i) => setTimeout(() => {
      this._tone({ freq: f, dur: 0.55, type: 'triangle', gain: 0.045, send: 0.45, attack: 0.02 });
      this._tone({ freq: f / 2, dur: 0.7, type: 'sine', gain: 0.03, send: 0.35 });
    }, i * 140));
  }

  alarm() {
    for (let i = 0; i < 2; i++) {
      setTimeout(() => {
        this._tone({ freq: 620, endFreq: 420, dur: 0.38, type: 'square', gain: 0.025, send: 0.2 });
        this._tone({ freq: 310, endFreq: 210, dur: 0.4, type: 'sawtooth', gain: 0.018, send: 0.2 });
      }, i * 520);
    }
  }

  heartbeat(volume = 0.08) {
    this._tone({ freq: 52, endFreq: 38, dur: 0.17, type: 'sine', gain: volume, send: 0.05 });
    setTimeout(() => this._tone({ freq: 44, endFreq: 30, dur: 0.22, type: 'sine', gain: volume * 0.7 }), 155);
  }

  update(dt, { threat = 0, indoors = false, raining = false, paused = false } = {}) {
    if (!this.ok || paused) return;
    this.threat = clamp01(finite(threat, 0));
    threat = this.threat;
    dt = Math.max(0, finite(dt, 0));
    const ctx = this.ctx;
    const t = finite(ctx.currentTime, 0);
    if (this.ambient.rain) this.ambient.rain.gain.setTargetAtTime(raining && !indoors ? 0.036 : 0.003, t, 0.25);
    if (this.ambient.hum) this.ambient.hum.gain.setTargetAtTime(indoors ? 0.008 : 0.0, t, 0.2);
    if (this.ambient.wind) this.ambient.wind.gain.setTargetAtTime(indoors ? 0.012 : 0.03, t, 0.4);
    if (this.tension) {
      this.tension.gain.gain.setTargetAtTime(threat > 0.15 ? 0.018 + threat * 0.035 : 0.0, t, 0.35);
      this.tension.osc.frequency.setTargetAtTime(28 + threat * 10, t, 0.5);
      this.tension.osc2.frequency.setTargetAtTime(43 + threat * 15, t, 0.5);
    }
    this.heartTimer -= dt;
    if (threat > 0.22 && this.heartTimer <= 0) {
      this.heartbeat(0.025 + threat * 0.07);
      this.heartTimer = Math.max(0.38, 1.35 - threat * 0.85) * (0.85 + Math.random() * 0.25);
    }
    this.insectTimer -= dt;
    if (this.insectTimer <= 0 && !indoors) {
      this.insectTimer = 2 + Math.random() * 5;
      const f = 2600 + Math.random() * 2600;
      for (let i = 0; i < 3; i++) {
        setTimeout(() => this._tone({ freq: f + i * 120, dur: 0.05, type: 'sine', gain: 0.008, pan: (Math.random() * 2 - 1) * .8 }), i * 70);
      }
    }
  }
}
