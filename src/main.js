import * as THREE from 'three';
import { World } from './world.js';
import { Player } from './player.js';
import { Monster } from './monster.js';
import { Effects } from './effects.js';
import { GameAudio } from './audio.js';

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const damp = (a, b, l, dt) => a + (b - a) * (1 - Math.exp(-l * dt));
const wrapDeg = d => ((d + 540) % 360) - 180;
const fmtTime = s => {
  const m = Math.floor(s / 60), ss = Math.floor(s % 60);
  return `${String(m).padStart(2, '0')}:${String(ss).padStart(2, '0')}`;
};

class Game {
  constructor() {
    this.clock = new THREE.Clock();
    this.time = 0;
    this.playTime = 0;
    this.state = 'title';
    this.started = false;
    this.sensitivity = 1;
    this.invertY = false;
    this.locked = false;
    this.dragging = false;
    this.noiseEvents = [];
    this.rocks = [];
    this.coresCollected = 0;
    this.ascentTimer = 0;
    this.shakeAmt = 0;
    this.shakeTime = 0;
    this.flash = 0;
    this.lightningTimer = 10 + Math.random() * 15;
    this.thunderTimer = 0;
    this.introRoar = 26;
    this.monsterAlertTimer = 0;
    this.toastCooldown = 0;
    this.throwCd = 0;
    this.jumpQueued = false;
    this.keys = new Set();
    this.crouchToggle = false;
    this.touchRun = false;
    this.touchCrouch = false;
    this.joy = { x: 0, y: 0, active: false };
    this.isMobile = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    this.mobileLayout = this.isMobile || innerWidth < 900;
    this.lastPrompt = null;

    this.dom = this.collectDom();
    this.initRenderer();
    this.initScene();
    this.initCompass();
    this.bindEvents();
    this.updateObjective();
    this.updateHud(true);
    this.dom.loadingVeil.classList.add('done');
    this.renderer.render(this.scene, this.camera);
    window.__APE = this;
    this.animate();
  }

  collectDom() {
    const $ = id => document.getElementById(id);
    return {
      canvas: $('game'),
      start: $('startScreen'), startBtn: $('startBtn'),
      pause: $('pauseScreen'), resumeBtn: $('resumeBtn'), restartBtn: $('restartBtn'),
      note: $('noteScreen'), noteKicker: $('noteKicker'), noteTitle: $('noteTitle'), noteBody: $('noteBody'), noteClose: $('noteClose'), noteIndex: $('noteIndex'),
      death: $('deathScreen'), deathStats: $('deathStats'), retryBtn: $('retryBtn'),
      win: $('winScreen'), winStats: $('winStats'), againBtn: $('againBtn'),
      hud: $('hud'), objectiveTitle: $('objectiveTitle'), objectiveDetail: $('objectiveDetail'),
      corePips: Array.from(document.querySelectorAll('#corePips .pip')),
      trackerLabel: $('trackerLabel'), trackerDist: $('trackerDist'), trackerBearing: $('trackerBearing'),
      compassTape: $('compassTape'), compassCaret: $('compassCaret'),
      healthFill: $('healthFill'), healthNum: $('healthNum'), staminaFill: $('staminaFill'), staminaNum: $('staminaNum'),
      lampIcon: $('lampIcon'), lampText: $('lampText'),
      noisePips: Array.from(document.querySelectorAll('#noisePips i')),
      threatCard: $('threatCard'), threatBars: Array.from(document.querySelectorAll('#threatBars i')), threatWord: $('threatWord'),
      prompt: $('prompt'), promptLabel: $('promptLabel'),
      toasts: $('toasts'), monsterBanner: $('monsterBanner'), monsterBannerText: $('monsterBannerText'),
      crosshair: $('crosshair'), reticleHint: $('reticleHint'),
      damage: $('damageFlash'), white: $('whiteFlash'),
      mobile: $('mobileControls'), joystick: $('joystick'), stick: $('stick'), lookPad: $('lookPad'),
      touchInteract: $('touchInteract'), touchJump: $('touchJump'), touchCrouch: $('touchCrouch'),
      touchRun: $('touchRun'), touchView: $('touchView'), touchThrow: $('touchThrow'), touchLamp: $('touchLamp'),
      pauseBtn: $('pauseBtn'), muteBtn: $('muteBtn'), pauseMute: $('pauseMute'), sensitivity: $('sensitivity'),
      invertY: $('invertY'), viewMode: $('viewMode'), lockHint: $('lockHint'), loadingVeil: $('loadingVeil'),
    };
  }

  initRenderer() {
    const renderer = new THREE.WebGLRenderer({ canvas: this.dom.canvas, antialias: false, powerPreference: 'high-performance', stencil: false });
    renderer.setClearColor(0x050908, 1);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 2.4;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer = renderer;
    this.resize();
  }

  resize() {
    const w = innerWidth, h = innerHeight;
    this.mobileLayout = this.isMobile || w < 900;
    const ratio = Math.min(devicePixelRatio || 1, this.mobileLayout ? 1.25 : 1.2);
    const scale = this.mobileLayout ? .82 : .62;
    this.renderer.setPixelRatio(ratio * scale);
    this.renderer.setSize(w, h, false);
    if (this.camera) {
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
    }
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, .06, 620);
    this.camera.position.set(0, 2.8, 6);
    this.world = new World(this.scene);
    this.player = new Player(this.scene, this.world);
    this.monster = new Monster(this.scene, this.world, { x: 116, z: 92 });
    this.effects = new Effects(this.scene);
    this.audio = new GameAudio();
    this.raycaster = new THREE.Raycaster();
    this.cameraPos = new THREE.Vector3();
    this.cameraTarget = new THREE.Vector3();
    this.camDir = new THREE.Vector3();
  }

  initCompass() {
    const tape = this.dom.compassTape;
    tape.innerHTML = '';
    this.compassTicks = [];
    for (let a = 0; a < 360; a += 15) {
      const t = document.createElement('div');
      t.className = 'compass-tick' + (a % 45 === 0 ? ' major' : '');
      tape.appendChild(t);
      this.compassTicks.push({ el: t, bearing: a });
    }
    const cards = [['N', 0], ['E', 90], ['S', 180], ['W', 270]];
    this.compassCards = cards.map(([label, bearing]) => {
      const el = document.createElement('div');
      el.className = 'compass-card' + (label === 'N' ? ' n' : '');
      el.textContent = label;
      tape.appendChild(el);
      return { el, bearing };
    });
    this.objMark = document.createElement('div');
    this.objMark.className = 'compass-mark';
    tape.appendChild(this.objMark);
    this.homeMark = document.createElement('div');
    this.homeMark.className = 'compass-mark lab';
    tape.appendChild(this.homeMark);
  }

  /* ---------------------------------------------------------------- */
  bindEvents() {
    const canvas = this.dom.canvas;
    addEventListener('resize', () => this.resize());
    addEventListener('contextmenu', e => e.preventDefault());

    this.dom.startBtn.addEventListener('click', () => this.startGame());
    this.dom.resumeBtn.addEventListener('click', () => this.resumeGame());
    this.dom.restartBtn.addEventListener('click', () => location.reload());
    this.dom.retryBtn.addEventListener('click', () => location.reload());
    this.dom.againBtn.addEventListener('click', () => location.reload());
    this.dom.noteClose.addEventListener('click', () => this.closeNote());
    this.dom.pauseBtn.addEventListener('click', () => this.pauseGame());
    this.dom.muteBtn.addEventListener('click', () => this.toggleMute());
    this.dom.pauseMute.addEventListener('click', () => this.toggleMute());
    this.dom.sensitivity.addEventListener('input', () => { this.sensitivity = Number(this.dom.sensitivity.value); });
    this.dom.invertY.addEventListener('click', () => {
      this.invertY = !this.invertY;
      this.dom.invertY.textContent = this.invertY ? 'ON' : 'OFF';
      this.dom.invertY.classList.toggle('on', this.invertY);
    });
    this.dom.viewMode.addEventListener('click', () => this.toggleView());

    canvas.addEventListener('click', () => {
      if (this.state === 'playing' && !this.isMobile && document.pointerLockElement !== canvas) {
        this.requestLock();
      }
    });
    canvas.addEventListener('mousedown', e => {
      if (e.button === 0) this.dragging = true;
    });
    addEventListener('mouseup', () => { this.dragging = false; });
    addEventListener('mousemove', e => {
      if (this.state !== 'playing') return;
      const locked = document.pointerLockElement === canvas;
      if (!locked && !this.dragging) return;
      const mx = e.movementX || 0, my = e.movementY || 0;
      this.applyLook(mx, my, locked ? 1 : .85);
    });
    document.addEventListener('pointerlockchange', () => {
      this.locked = document.pointerLockElement === canvas;
      this.updateLockHint();
    });
    document.addEventListener('pointerlockerror', () => { this.locked = false; this.updateLockHint(); });

    addEventListener('keydown', e => this.onKeyDown(e));
    addEventListener('keyup', e => this.onKeyUp(e));
    addEventListener('blur', () => { if (this.state === 'playing') this.pauseGame(); });

    this.setupTouch();
  }

  requestLock() {
    try {
      const p = this.dom.canvas.requestPointerLock?.();
      if (p?.catch) p.catch(() => {});
    } catch { /* pointer lock can be denied in embedded contexts */ }
  }

  updateLockHint() {
    const show = this.state === 'playing' && !this.locked && !this.isMobile;
    this.dom.lockHint.classList.toggle('hidden', !show);
  }

  startGame() {
    if (this.started) return;
    this.started = true;
    this.state = 'playing';
    this.audio.init();
    this.audio.resume();
    this.dom.start.classList.add('hidden');
    this.dom.mobile.classList.toggle('hidden', !this.mobileLayout);
    this.dom.hud.style.opacity = '1';
    this.updateLockHint();
    if (!this.isMobile) this.requestLock();
    this.player.setView('third');
    this.dom.viewMode.textContent = 'THIRD PERSON';
    this.toast('DIRECTIVE 01', 'Three isotope cores are active in the jungle. Follow the columns of light.', 'good', 6500);
    setTimeout(() => { if (this.state === 'playing') this.toast('LAB ACCESS', 'Use the switch beside a door. Press E. The exterior release is on the left of every frame.', 'warn', 7000); }, 5200);
    setTimeout(() => { if (this.state === 'playing') this.toast('ACOUSTIC HAZARD', 'Moss.Man is blind. Sprinting is loud. Crouch when you hear it breathe.', 'danger', 7000); }, 11000);
    this.audio.ui();
  }

  pauseGame() {
    if (this.state !== 'playing') return;
    this.state = 'paused';
    this.dom.pause.classList.remove('hidden');
    this.dom.mobile.classList.add('hidden');
    this.audio.setPaused(true);
    if (document.pointerLockElement) document.exitPointerLock?.();
    this.updateLockHint();
    this.audio.ui(false);
  }

  resumeGame() {
    if (this.state !== 'paused') return;
    this.state = 'playing';
    this.dom.pause.classList.add('hidden');
    this.dom.mobile.classList.toggle('hidden', !this.mobileLayout);
    this.audio.setPaused(false);
    this.audio.resume();
    if (!this.isMobile) this.requestLock();
    this.updateLockHint();
    this.audio.ui();
  }

  openNote(note) {
    if (this.state !== 'playing') return;
    this.state = 'note';
    this.dom.noteKicker.textContent = 'RECOVERED DATAPAD';
    this.dom.noteTitle.textContent = note.title;
    this.dom.noteBody.textContent = note.body;
    this.dom.noteIndex.textContent = String(note.id).padStart(2, '0');
    this.dom.note.classList.remove('hidden');
    this.dom.mobile.classList.add('hidden');
    if (document.pointerLockElement) document.exitPointerLock?.();
    this.audio.ui();
  }

  closeNote() {
    if (this.state !== 'note') return;
    this.state = 'playing';
    this.dom.note.classList.add('hidden');
    this.dom.mobile.classList.toggle('hidden', !this.mobileLayout);
    if (!this.isMobile) this.requestLock();
    this.audio.ui();
  }

  onKeyDown(e) {
    if (e.repeat) {
      if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ShiftLeft', 'ShiftRight', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) this.keys.add(e.code);
      return;
    }
    this.keys.add(e.code);
    if (this.state === 'title' && (e.code === 'Enter' || e.code === 'Space')) { e.preventDefault(); this.startGame(); return; }
    if ((this.state === 'dead' || this.state === 'win') && e.code === 'KeyR') { location.reload(); return; }
    if (this.state === 'note') {
      if (e.code === 'KeyE' || e.code === 'Escape') this.closeNote();
      return;
    }
    if (this.state === 'paused') {
      if (e.code === 'KeyP' || e.code === 'Escape') this.resumeGame();
      return;
    }
    if (this.state !== 'playing') return;
    switch (e.code) {
      case 'KeyE': this.tryInteract(); break;
      case 'KeyQ': this.throwRock(); break;
      case 'KeyF': this.toggleLamp(); break;
      case 'KeyV': this.toggleView(); break;
      case 'KeyC': this.crouchToggle = !this.crouchToggle; this.dom.touchCrouch.classList.toggle('on', this.crouchToggle); break;
      case 'KeyM': this.toggleMute(); break;
      case 'KeyP':
      case 'Escape': this.pauseGame(); break;
      case 'Space': e.preventDefault(); this.jumpQueued = true; break;
      default: break;
    }
  }

  onKeyUp(e) { this.keys.delete(e.code); }

  applyLook(dx, dy, mult = 1) {
    const s = 0.00225 * this.sensitivity * mult;
    this.player.yaw -= dx * s;
    this.player.pitch += (this.invertY ? 1 : -1) * dy * s;
    this.player.pitch = clamp(this.player.pitch, -1.12, 1.05);
  }

  toggleMute() {
    if (!this.audio.ok && this.audio.ctx) return;
    if (!this.audio.ctx) { this.audio.init(); }
    const muted = this.audio.toggleMute();
    this.dom.muteBtn.textContent = muted ? '×' : '♪';
    this.dom.muteBtn.classList.toggle('off', muted);
    this.dom.pauseMute.textContent = muted ? 'OFF' : 'ON';
    this.dom.pauseMute.classList.toggle('on', !muted);
  }

  toggleView() {
    const mode = this.player.viewMode === 'third' ? 'first' : 'third';
    this.player.setView(mode);
    this.dom.viewMode.textContent = mode === 'third' ? 'THIRD PERSON' : 'FIRST PERSON';
    this.toast('CAMERA', mode === 'third' ? 'Third-person tracking restored.' : 'First-person view. The ape body is now your own.', 'good', 2200);
    this.audio.ui();
  }

  toggleLamp() {
    this.player.lampOn = !this.player.lampOn;
    this.dom.lampText.textContent = this.player.lampOn ? 'HEADLAMP ON' : 'HEADLAMP OFF';
    this.dom.lampIcon.style.color = this.player.lampOn ? 'var(--cyan)' : '#5a6b59';
    this.audio.ui(this.player.lampOn);
  }

  /* ---------------------------------------------------------------- */
  setupTouch() {
    const joy = this.dom.joystick;
    let joyId = null;
    const updateJoy = (e) => {
      const r = joy.getBoundingClientRect();
      const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      let dx = (e.clientX - cx) / (r.width * .42);
      let dy = (e.clientY - cy) / (r.height * .42);
      const len = Math.hypot(dx, dy);
      if (len > 1) { dx /= len; dy /= len; }
      this.joy.x = dx; this.joy.y = dy;
      this.dom.stick.style.transform = `translate(${dx * 35}px, ${dy * 35}px)`;
    };
    joy.addEventListener('pointerdown', e => {
      e.preventDefault(); joyId = e.pointerId; joy.setPointerCapture(joyId); this.joy.active = true; updateJoy(e);
    });
    joy.addEventListener('pointermove', e => { if (e.pointerId === joyId) { e.preventDefault(); updateJoy(e); } });
    const endJoy = e => {
      if (e.pointerId !== joyId) return;
      joyId = null; this.joy.active = false; this.joy.x = 0; this.joy.y = 0;
      this.dom.stick.style.transform = 'translate(0,0)';
    };
    joy.addEventListener('pointerup', endJoy);
    joy.addEventListener('pointercancel', endJoy);

    const pad = this.dom.lookPad;
    let lookId = null, lx = 0, ly = 0;
    pad.addEventListener('pointerdown', e => {
      e.preventDefault(); lookId = e.pointerId; pad.setPointerCapture(lookId); lx = e.clientX; ly = e.clientY;
    });
    pad.addEventListener('pointermove', e => {
      if (e.pointerId !== lookId || this.state !== 'playing') return;
      e.preventDefault();
      const dx = e.clientX - lx, dy = e.clientY - ly;
      lx = e.clientX; ly = e.clientY;
      this.applyLook(dx, dy, 1.35);
    });
    const endLook = e => { if (e.pointerId === lookId) lookId = null; };
    pad.addEventListener('pointerup', endLook);
    pad.addEventListener('pointercancel', endLook);

    this.dom.touchInteract.addEventListener('click', () => this.tryInteract());
    this.dom.touchJump.addEventListener('click', () => { this.jumpQueued = true; });
    this.dom.touchCrouch.addEventListener('click', () => {
      this.touchCrouch = !this.touchCrouch;
      this.dom.touchCrouch.classList.toggle('on', this.touchCrouch);
    });
    this.dom.touchRun.addEventListener('click', () => {
      this.touchRun = !this.touchRun;
      this.dom.touchRun.classList.toggle('on', this.touchRun);
    });
    this.dom.touchView.addEventListener('click', () => this.toggleView());
    this.dom.touchThrow.addEventListener('click', () => this.throwRock());
    this.dom.touchLamp.addEventListener('click', () => this.toggleLamp());
  }

  /* ---------------------------------------------------------------- */
  input() {
    if (this.state !== 'playing') return { forward: 0, strafe: 0, sprint: false, crouch: false, jump: false };
    const k = this.keys;
    let forward = 0, strafe = 0;
    if (k.has('KeyW') || k.has('ArrowUp')) forward += 1;
    if (k.has('KeyS') || k.has('ArrowDown')) forward -= 1;
    if (k.has('KeyD') || k.has('ArrowRight')) strafe += 1;
    if (k.has('KeyA') || k.has('ArrowLeft')) strafe -= 1;
    forward += -this.joy.y;
    strafe += this.joy.x;
    const len = Math.hypot(forward, strafe);
    if (len > 1) { forward /= len; strafe /= len; }
    return {
      forward, strafe,
      sprint: !!(k.has('ShiftLeft') || k.has('ShiftRight') || this.touchRun),
      crouch: !!(this.crouchToggle || this.touchCrouch),
      jump: this.jumpQueued,
      mag: Math.min(1, len),
    };
  }

  tryInteract() {
    if (this.state === 'note') { this.closeNote(); return; }
    if (this.state !== 'playing') return;
    const it = this.world.getInteractable(this.player.pos);
    if (!it) { this.audio.ui(false); return; }
    this.audio.ui();
    it.onUse(this);
    this.promptRefresh = 0;
  }

  emitNoise(pos, strength = .5, type = 'noise') {
    this.noiseEvents.push({ pos: new THREE.Vector3(pos.x, pos.y || 0, pos.z), strength, type, age: 0, heard: false });
    if (this.noiseEvents.length > 12) this.noiseEvents.shift();
  }

  onFootstep(pos, strength) {
    this.effects.dust(new THREE.Vector3(pos.x, pos.y + .05, pos.z), this.player.sprinting ? 4 : 2);
  }

  onCoreCollected(core) {
    this.coresCollected++;
    this.updateObjective();
    this.toast('ISOTOPE CORE SECURED', `${core.site.code} recovered — ${this.coresCollected}/3. ${this.coresCollected < 3 ? 'The next beacon is live.' : 'Return to the lab terminal.'}`, 'good', 5200);
    if (this.coresCollected >= 3) {
      setTimeout(() => {
        if (this.state !== 'playing') return;
        this.toast('ARRAY COMPLETE', 'All three cores are stable. The ascent terminal is waiting in the lab.', 'warn', 6500);
        this.monster.enraged = true;
        this.monster.hear(this.player.pos, 1, this);
      }, 1200);
    }
  }

  onAscentBegin() {
    this.ascentTimer = 13;
    this.updateObjective();
    this.toast('EMERGENCY ASCENT', 'Shaft pressurising. The lift will arrive in 13 seconds. Hold the lab.', 'warn', 6000);
    this.monster.enraged = true;
    this.monster.hear(this.player.pos, 1.2, this);
    this.shake(.5, .6);
  }

  onLiftReady() {
    this.ascentTimer = 0;
    this.updateObjective();
    this.toast('ASCENT LIFT ONLINE', 'Step onto the centre pad and use the lift.', 'good', 6000);
    this.audio.alarm();
  }

  finishGame() {
    if (this.state === 'win') return;
    this.state = 'win';
    this.dom.mobile.classList.add('hidden');
    this.dom.hud.style.opacity = '0';
    this.dom.hud.style.transition = 'opacity .8s ease';
    if (document.pointerLockElement) document.exitPointerLock?.();
    this.audio.win();
    this.flash = 1;
    this.dom.winStats.innerHTML = `<span>TIME <b>${fmtTime(this.playTime)}</b></span><span>CORES <b>3 / 3</b></span><span>JUNGLE <b>500 × 500 M</b></span>`;
    setTimeout(() => this.dom.win.classList.remove('hidden'), 260);
    this.updateLockHint();
  }

  onDeath() {
    if (this.state !== 'playing') return;
    this.state = 'dead';
    this.dom.mobile.classList.add('hidden');
    this.dom.hud.style.opacity = '0';
    this.dom.hud.style.transition = 'opacity 1s ease';
    if (document.pointerLockElement) document.exitPointerLock?.();
    this.audio.death();
    this.dom.deathStats.innerHTML = `<span>LIFE <b>00:00</b></span><span>CORES <b>${this.coresCollected} / 3</b></span><span>TIME <b>${fmtTime(this.playTime)}</b></span>`;
    setTimeout(() => this.dom.death.classList.remove('hidden'), 500);
    this.updateLockHint();
  }

  onMonsterAlert() {
    this.monsterAlertTimer = 4;
    this.dom.monsterBannerText.textContent = 'IT HEARD YOU. BREAK LINE OF SOUND.';
    this.audio.ui(false);
    if (this.toastCooldown <= 0) {
      this.toast('ACOUSTIC CONTACT', 'Moss.Man is tracking your sound. Stop, crouch, or throw a stone.', 'danger', 4500);
      this.toastCooldown = 9;
    }
  }

  onMonsterRoar(dist) {
    if (dist < 40) this.shake(clamp(.65 - dist / 80, .12, .55), .7);
  }

  heal(amount) {
    this.player.heal(amount);
    this.player.health = Math.min(100, this.player.health);
    this.audio.heal();
    this.effects.burst(new THREE.Vector3(this.player.pos.x, this.player.pos.y + 1.2, this.player.pos.z), 0x8dff7c, 22, 1.3);
  }

  shake(amount, time) {
    this.shakeAmt = Math.max(this.shakeAmt, amount);
    this.shakeTime = Math.max(this.shakeTime, time);
  }

  damageFlash() {
    this.dom.damage.style.opacity = '1';
    setTimeout(() => { this.dom.damage.style.opacity = '0'; }, 180);
  }

  throwRock() {
    if (this.state !== 'playing' || this.throwCd > 0) return;
    this.throwCd = .9;
    const eye = this.player.getEyePosition();
    const dir = this.player.getLookDir();
    const geo = new THREE.DodecahedronGeometry(.11, 0);
    const mat = new THREE.MeshLambertMaterial({ color: 0x5c5b4b, flatShading: true });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(eye).addScaledVector(dir, .6);
    mesh.castShadow = true;
    this.scene.add(mesh);
    const vel = dir.clone().multiplyScalar(19);
    vel.y += 2.2;
    this.rocks.push({ mesh, vel, life: 4, bounced: false });
    this.audio.throwRock();
    this.noiseEvents.push({ pos: eye.clone(), strength: .1, type: 'throw', age: -0.1, heard: false });
    this.toast('STONE THROWN', 'The impact will pull its attention.', 'good', 1600);
  }

  updateRocks(dt) {
    for (let i = this.rocks.length - 1; i >= 0; i--) {
      const r = this.rocks[i];
      r.life -= dt;
      r.vel.y -= 19 * dt;
      r.mesh.position.addScaledVector(r.vel, dt);
      r.mesh.rotation.x += dt * 8; r.mesh.rotation.z += dt * 5;
      const g = this.world.groundAt(r.mesh.position.x, r.mesh.position.z);
      const hitWall = (() => {
        const p = r.mesh.position;
        for (const c of this.world.colliders) {
          if (!c.enabled) continue;
          if (p.x > c.minX && p.x < c.maxX && p.z > c.minZ && p.z < c.maxZ && p.y < 3.4) return true;
        }
        return false;
      })();
      if (r.mesh.position.y <= g + .12 || hitWall || r.life <= 0) {
        const pos = r.mesh.position.clone();
        this.effects.impact(pos, 0x77745d, 9);
        this.audio.impact();
        if (pos.y > g - .5) {
          this.emitNoise(pos, .9, 'rock');
        }
        this.scene.remove(r.mesh);
        r.mesh.geometry.dispose();
        r.mesh.material.dispose();
        this.rocks.splice(i, 1);
      }
    }
  }

  updateObjective() {
    let title, detail;
    if (this.state === 'win') { title = 'SURFACE REACHED'; detail = 'INCIDENT CLOSED'; }
    else if (this.coresCollected < 3) {
      title = 'RECOVER ISOTOPE CORES';
      detail = `${this.coresCollected} / 3 RECOVERED — FOLLOW THE BEACONS`;
    } else if (!this.world.ascentActive) {
      title = 'RETURN TO THE MAIN TERMINAL';
      detail = 'ISOTOPE ARRAY COMPLETE — RETURN TO THE LAB';
    } else if (!this.world.ascentReady) {
      title = 'RIDE THE ASCENT LIFT';
      detail = `EMERGENCY SHAFT PRESSURISING — ${Math.max(0, Math.ceil(this.ascentTimer))} S`;
    } else {
      title = 'ESCAPE THE APE PROJECT';
      detail = 'LIFT LOCKED — STEP ONTO THE CENTRE PAD';
    }
    this.dom.objectiveTitle.textContent = title;
    this.dom.objectiveDetail.textContent = detail;
    this.dom.corePips.forEach((p, i) => p.classList.toggle('filled', i < this.coresCollected));
  }

  /* ---------------------------------------------------------------- */
  toast(title, body, type = 'good', dur = 4000) {
    const el = document.createElement('div');
    el.className = 'toast ' + (type === 'good' ? '' : type);
    const b = document.createElement('b'); b.textContent = title;
    el.appendChild(b);
    el.appendChild(document.createTextNode(body));
    this.dom.toasts.appendChild(el);
    while (this.dom.toasts.children.length > 4) this.dom.toasts.firstChild.remove();
    setTimeout(() => {
      el.style.transition = 'opacity .4s, transform .4s';
      el.style.opacity = '0';
      el.style.transform = 'translateX(10px)';
      setTimeout(() => el.remove(), 450);
    }, dur);
  }

  updateCompass() {
    const heading = ((180 - THREE.MathUtils.radToDeg(this.player.yaw)) % 360 + 360) % 360;
    for (const t of this.compassTicks) {
      const rel = wrapDeg(t.bearing - heading);
      t.el.style.left = (50 + rel / 1.8) + '%';
      t.el.style.opacity = Math.abs(rel) > 100 ? '0' : (t.bearing % 45 === 0 ? '.75' : '.4');
    }
    for (const c of this.compassCards) {
      const rel = wrapDeg(c.bearing - heading);
      c.el.style.left = (50 + rel / 1.8) + '%';
      c.el.style.display = Math.abs(rel) > 100 ? 'none' : 'block';
    }

    let target = null, label = '';
    if (this.coresCollected < 3) {
      const remaining = this.world.cores.filter(c => !c.collected);
      let best = null, bd = Infinity;
      for (const c of remaining) {
        const d = Math.hypot(c.site.x - this.player.pos.x, c.site.z - this.player.pos.z);
        if (d < bd) { bd = d; best = c; }
      }
      if (best) { target = new THREE.Vector3(best.site.x, 0, best.site.z); label = 'NEAREST BEACON'; }
    } else if (!this.world.ascentActive || !this.world.ascentReady) {
      target = new THREE.Vector3(4.75, 0, -5.25);
      label = 'MAIN TERMINAL';
      if (this.world.ascentActive) label = 'ASCENT LIFT';
    } else {
      target = new THREE.Vector3(0, 0, 0);
      label = 'ASCENT LIFT';
    }

    if (target) {
      const dx = target.x - this.player.pos.x, dz = target.z - this.player.pos.z;
      const dist = Math.hypot(dx, dz);
      const bearing = (Math.atan2(dx, -dz) * 180 / Math.PI + 360) % 360;
      const rel = wrapDeg(bearing - heading);
      this.dom.trackerLabel.textContent = label;
      this.dom.trackerDist.textContent = Math.round(dist) + ' M';
      this.dom.trackerBearing.textContent = 'BRG ' + String(Math.round(bearing)).padStart(3, '0') + '°';
      this.objMark.style.display = Math.abs(rel) > 100 ? 'none' : 'block';
      this.objMark.style.left = (50 + rel / 1.8) + '%';
      this.objMark.style.background = label.includes('LIFT') ? 'var(--cyan)' : 'var(--amber)';
      this.objMark.style.boxShadow = `0 0 10px ${label.includes('LIFT') ? 'var(--cyan)' : 'var(--amber)'}`;
    } else {
      this.dom.trackerLabel.textContent = 'NO SIGNAL';
      this.dom.trackerDist.textContent = '—';
      this.dom.trackerBearing.textContent = '—';
      this.objMark.style.display = 'none';
    }

    const distHome = Math.hypot(this.player.pos.x, this.player.pos.z);
    if (distHome > 12 && this.coresCollected < 3) {
      const bearing = (Math.atan2(-this.player.pos.x, this.player.pos.z) * 180 / Math.PI + 360) % 360;
      const rel = wrapDeg(bearing - heading);
      this.homeMark.style.display = Math.abs(rel) > 100 ? 'none' : 'block';
      this.homeMark.style.left = (50 + rel / 1.8) + '%';
    } else this.homeMark.style.display = 'none';
  }

  updateHud(force = false) {
    const p = this.player, m = this.monster;
    const hp = clamp(p.health, 0, 100);
    this.dom.healthFill.style.width = hp + '%';
    this.dom.healthFill.classList.toggle('warn', hp <= 55 && hp > 28);
    this.dom.healthFill.classList.toggle('crit', hp <= 28);
    this.dom.healthNum.textContent = String(Math.ceil(hp));
    this.dom.staminaFill.style.width = p.stamina + '%';
    this.dom.staminaFill.classList.toggle('low', p.stamina < 25);
    this.dom.staminaNum.textContent = String(Math.ceil(p.stamina));
    this.dom.lampText.textContent = p.lampOn ? 'HEADLAMP ON' : 'HEADLAMP OFF';
    this.dom.lampIcon.style.color = p.lampOn ? 'var(--cyan)' : '#5a6b59';
    const noiseLit = Math.round(p.noise * 8);
    this.dom.noisePips.forEach((el, i) => el.classList.toggle('on', i < noiseLit));
    this.dom.noisePips.forEach((el, i) => el.style.opacity = i < noiseLit ? '1' : '.35');

    const threat = m.threat;
    this.dom.threatBars.forEach((el, i) => {
      const on = i < Math.round(threat * 8);
      el.classList.toggle('on', on);
      el.style.height = on ? (5 + i * 1.15) + 'px' : '3px';
    });
    const hot = threat > .48;
    this.dom.threatCard.classList.toggle('hot', hot);
    this.dom.crosshair.classList.toggle('hot', hot);
    let word = 'SILENT';
    if (threat > .82) word = 'IMMINENT';
    else if (threat > .58) word = 'HUNTING';
    else if (threat > .34) word = 'NEAR';
    else if (threat > .12) word = 'LISTENING';
    else if (threat > .02) word = 'DISTANT';
    this.dom.threatWord.textContent = word;

    const banner = m.state === 'hunt' && m.distanceToPlayer < 48 && this.state === 'playing';
    this.dom.monsterBanner.classList.toggle('show', banner || this.monsterAlertTimer > 0);
    if (banner) {
      this.dom.monsterBannerText.textContent = m.distanceToPlayer < 16 ? 'IT IS ON YOU. RUN. DO NOT RUN STRAIGHT.' : 'IT IS TRACKING YOUR SOUND. GO QUIET.';
    }
    this.updateCompass();
  }

  updatePrompt() {
    if (this.state !== 'playing') {
      this.dom.prompt.classList.remove('show');
      return;
    }
    const it = this.world.getInteractable(this.player.pos);
    if (it) {
      const label = typeof it.label === 'function' ? it.label() : it.label;
      this.dom.promptLabel.textContent = label;
      this.dom.prompt.classList.add('show');
      this.dom.reticleHint.classList.remove('show');
    } else {
      this.dom.prompt.classList.remove('show');
      const nearLift = Math.hypot(this.player.pos.x, this.player.pos.z) < 3 && this.world.ascentActive && !this.world.ascentReady;
      this.dom.reticleHint.textContent = nearLift ? 'LIFT ARRIVING...' : '';
      this.dom.reticleHint.classList.toggle('show', nearLift);
    }
  }

  updateCamera(dt) {
    const p = this.player;
    const cam = this.camera;
    if (this.state === 'title') {
      const t = this.time * .075;
      const r = 5.6;
      cam.position.set(Math.sin(t) * r, 2.85 + Math.sin(t * .6) * .18, Math.cos(t) * r + 1.1);
      cam.lookAt(0, 1.55, -1.2);
      cam.fov = 67;
      cam.updateProjectionMatrix();
      return;
    }

    let targetFov = 70 + (p.sprinting ? 4.2 : 0) + (p.crouchBlend * -2);
    cam.fov = damp(cam.fov, targetFov, 6, dt);
    cam.updateProjectionMatrix();

    const dir = p.getLookDir();
    if (p.viewMode === 'first') {
      const eye = p.getEyePosition();
      const sway = Math.sin(p.walkPhase * 2) * .035 * (p.analog * .8 + .2);
      const strafe = Math.sin(p.walkPhase) * .018 * p.analog;
      eye.y += sway;
      eye.x += Math.cos(p.yaw) * strafe;
      eye.z -= Math.sin(p.yaw) * strafe;
      cam.position.copy(eye);
      this.applyCameraShake();
      cam.lookAt(cam.position.clone().add(dir));
      cam.rotation.z += Math.sin(p.walkPhase) * .004 * p.analog;
    } else {
      const target = p.getTarget();
      const crouchOffset = p.crouchBlend * .2;
      const dist = (5.15 - p.crouchBlend * .55) * (this.mobileLayout ? 1.06 : 1);
      const desired = target.clone().addScaledVector(dir, -dist);
      desired.y += crouchOffset;
      this.scene.updateMatrixWorld();
      const toCam = desired.clone().sub(target);
      const len = toCam.length();
      toCam.normalize();
      this.raycaster.set(target, toCam);
      this.raycaster.far = len;
      const hits = this.raycaster.intersectObjects(this.world.cameraBlockers, false);
      let actualDist = len;
      if (hits.length) actualDist = Math.max(1.1, hits[0].distance - .28);
      const camPos = target.clone().addScaledVector(toCam, actualDist);
      const floor = this.world.groundAt(camPos.x, camPos.z) + .38;
      if (camPos.y < floor) camPos.y = floor;
      if (this.world.insideLab(camPos.x, camPos.z)) camPos.y = Math.min(camPos.y, 4.95);
      cam.position.copy(camPos);
      this.applyCameraShake();
      cam.lookAt(target.clone().addScaledVector(dir, 4));
    }

    this.shakeAmt = Math.max(0, this.shakeAmt - dt * 2.3);
    this.shakeTime = Math.max(0, this.shakeTime - dt);
  }

  applyCameraShake() {
    if (this.shakeTime <= 0) return;
    const a = this.shakeAmt * (this.shakeTime > 0 ? 1 : 0);
    this.camera.position.x += (Math.random() - .5) * a * .35;
    this.camera.position.y += (Math.random() - .5) * a * .35;
    this.camera.position.z += (Math.random() - .5) * a * .35;
    this.camera.rotation.z += (Math.random() - .5) * a * .03;
  }

  /* ---------------------------------------------------------------- */
  update(dt) {
    this.time += dt;
    this.toastCooldown = Math.max(0, this.toastCooldown - dt);
    this.throwCd = Math.max(0, this.throwCd - dt);
    this.monsterAlertTimer = Math.max(0, this.monsterAlertTimer - dt);
    const playing = this.state === 'playing';
    const simActive = playing;
    const inside = this.world.insideLab(this.player.pos.x, this.player.pos.z) && this.player.pos.y < 4.8;

    if (playing) this.playTime += dt;

    if (simActive) {
      const input = this.input();
      this.player.update(dt, input, this);
      this.jumpQueued = false;
      this.world.update(dt, this.time, this.player, this);
      this.monster.update(dt, this.time, this.player, this);
      this.updateRocks(dt);
      this.effects.update(dt, this.time, this.player, inside);

      for (const ev of this.noiseEvents) ev.age += dt;
      this.noiseEvents = this.noiseEvents.filter(ev => ev.age < 4.2);

      // monster proximity can make the camera flinch
      if (this.monster.distanceToPlayer < 18 && this.monster.state === 'hunt') this.shake(Math.max(this.shakeAmt, .08), .1);

      // ascent countdown UI
      if (this.world.ascentActive && !this.world.ascentReady) {
        this.ascentTimer = Math.max(0, 13 - (this.time - this.world.ascentStart));
        this.updateObjective();
      }

      // intro roar
      this.introRoar -= dt;
      if (this.introRoar <= 0) {
        this.introRoar = 999;
        this.audio.monsterRoar(0, .45);
        this.toast('DISTANT VOCALISATION', 'Something huge just exhaled in the tree line.', 'warn', 6000);
      }

      // weather
      this.lightningTimer -= dt;
      if (!inside && this.lightningTimer <= 0) {
        this.lightningTimer = 14 + Math.random() * 20;
        this.flash = 1;
        this.thunderTimer = .4 + Math.random() * 1.4;
      }
      if (this.thunderTimer > 0) {
        this.thunderTimer -= dt;
        if (this.thunderTimer <= 0) {
          this.audio._noise({ dur: 2.4, gain: .09, type: 'lowpass', freq: 440, endFreq: 60, send: .5 });
          this.audio._tone({ freq: 62, endFreq: 30, dur: 2.2, type: 'sine', gain: .045, send: .5 });
        }
      }

      this.updatePrompt();
      this.updateHud();

      this.audio.update(dt, {
        threat: this.monster.threat,
        indoors: inside,
        raining: !inside,
        paused: false,
      });
    } else if (this.state === 'title') {
      this.world.update(dt, this.time, this.player, null);
      this.player.updateModel(dt, 0);
      this.effects.update(dt, this.time, this.player, true);
      this.monster.updateModel(dt, 0);
      this.monster.model.position.copy(this.monster.pos);
      this.monster.model.rotation.y = this.monster.yaw;
    } else if (this.state === 'dead' || this.state === 'win') {
      this.effects.update(dt, this.time, this.player, inside);
    }

    this.flash = Math.max(0, this.flash - dt * 2.6);
    this.dom.white.style.opacity = String(this.flash * .55);
    this.updateCamera(dt);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    const dt = Math.min(this.clock.getDelta(), .05);
    this.update(dt);
    this.render();
  }
}

new Game();
