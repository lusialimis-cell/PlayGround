import * as THREE from 'three';
import { createLaboratory } from './lab.js';
import { Jungle } from './jungle.js';
import { Player } from './player.js';
import { Mossman } from './mossman.js';
import { UI } from './ui.js';
import { AudioEngine } from './audio.js';
import { VoxelDebris, SoundWaves, CameraShake } from './effects.js';
import { clamp, damp, formatTime } from './utils.js';

const _forward = new THREE.Vector3();
const _right = new THREE.Vector3();
const _move = new THREE.Vector3();
const _camDir = new THREE.Vector3();
const _desiredCam = new THREE.Vector3();
const _target = new THREE.Vector3();
const _look = new THREE.Vector3();
const _shake = new THREE.Vector3();
const _sample = new THREE.Vector3();
const _camRight = new THREE.Vector3();
const _worldUp = new THREE.Vector3(0, 1, 0);

class ApeProject {
  constructor() {
    this.ui = new UI();
    this.canvas = document.getElementById('game-canvas');
    this.audio = new AudioEngine();
    this.clock = new THREE.Clock();
    this.state = 'boot';
    this.keys = new Set();
    this.camYaw = 0;
    this.orbitPitch = 0.24;
    this.cameraMode = 'third';
    this.pointerLocked = false;
    this.hadPointerLock = false;
    this.suppressPause = false;
    this.mouseDrag = false;
    this.isTouch = window.matchMedia('(pointer: coarse)').matches;
    this.touchMove = { x: 0, y: 0, active: false };
    this.touchSprint = false;
    this.crouchToggle = false;
    this.jumpQueued = false;
    this.currentInteractable = null;
    this.runTime = 0;
    this.runStartedAt = 0;
    this.deathTime = 0;
    this.deathDuration = 3.4;
    this.introAngle = 0;
    this.introCamera = new THREE.Vector3();
    this.firstOutside = false;
    this.firstChase = false;
    this.firstLurk = false;
    this.heardCooldown = 0;
    this.chaseCount = 0;
    this.doorsTouched = 0;
    this.lastCoreToast = 0;
    this.snapCamera = true;
    this.fpBob = 0;
    this.effects = {};
    this.frameId = 0;
    this.shake = new CameraShake();
    this.resize = this.resize.bind(this);
    this.animate = this.animate.bind(this);
    window.addEventListener('resize', this.resize);
    this.bindUI();
    this.boot();
  }

  async boot() {
    try {
      this.initRenderer();
      this.initScene();
      this.ui.setLoading(12, 'CARVING VOXEL TERRAIN // 012');
      await this.frameWait();
      this.effects.voxels = new VoxelDebris(this.scene, 160);
      this.effects.waves = new SoundWaves(this.scene, 10);
      await this.frameWait();
      this.ui.setLoading(28, 'FORGING SUBTERRANEAN LOBBY // 028');
      this.lab = createLaboratory(this.scene, {
        onHydraulic: (door, open) => this.onHydraulic(door, open),
      });
      this.ui.setLoading(48, 'GROWING 500 × 500 M RESERVE // 048');
      await this.frameWait();
      this.jungle = new Jungle(this.scene, this.lab);
      this.ui.setLoading(68, 'ASSEMBLING APE-PRIME RIG // 068');
      await this.frameWait();
      this.player = new Player(this.scene, {
        onFootstep: (event) => this.onFootstep(event),
        onDamage: (amount, source) => this.onPlayerDamage(amount, source),
        onDeath: (source) => this.onPlayerDeath(source),
        onZoneChanged: (inside) => this.onZoneChanged(inside),
        onJump: () => this.onJump(),
        onLand: () => this.onLand(),
      });
      this.ui.setLoading(82, 'WAKING SUBJECT M-08 // 082');
      await this.frameWait();
      this.mossman = new Mossman(this.scene, {
        onRoar: (position, previous) => this.onMossmanRoar(position, previous),
        onAlert: (info) => this.onMossmanAlert(info),
        onStateChange: (next, previous, reason) => this.onMossmanState(next, previous, reason),
        onHear: (info) => this.onMossmanHear(info),
        onStep: (info) => this.onMossmanStep(info),
        onAttack: (info) => this.onMossmanAttack(info),
        onHit: (info) => this.onMossmanHit(info),
      });
      this.ui.setLoading(94, 'CALIBRATING ACOUSTIC ARRAY // 094');
      await this.frameWait();
      this.buildFpArms();
      this.ui.setLoading(100, 'LINK ESTABLISHED // AWAITING OPERATOR');
      this.resize();
      this.snapIntroCamera();
      this.state = 'title';
      this.ui.showStart();
      this.ui.hideLoading();
      document.body.classList.add('ready');
      window.__APE_PROJECT__ = this;
      this.clock.start();
      requestAnimationFrame(this.animate);
    } catch (error) {
      console.error(error);
      this.ui.setLoading(100, 'LINK FAILURE // CHECK WEBGL SUPPORT');
      const status = document.getElementById('loading-status');
      if (status) status.textContent = `LINK FAILURE: ${error.message}`;
    }
  }

  frameWait() {
    return new Promise((resolve) => requestAnimationFrame(() => setTimeout(resolve, 20)));
  }

  initRenderer() {
    const renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: false,
      powerPreference: 'high-performance',
      alpha: false,
      stencil: false,
    });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.03;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.autoClear = true;
    this.renderer = renderer;
    this.camera = new THREE.PerspectiveCamera(62, 1, 0.07, 760);
    this.camera.position.set(4.8, 2.6, 5.2);
    this.camera.lookAt(0, 1.5, 0.2);
  }

  initScene() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0b1410);
    scene.fog = new THREE.FogExp2(0x1c2b22, 0.0088);
    this.scene = scene;

    const hemi = new THREE.HemisphereLight(0x9bbd8a, 0x121b12, 1.25);
    scene.add(hemi);
    this.hemi = hemi;

    const sun = new THREE.DirectionalLight(0xffd0a0, 2.15);
    sun.position.set(55, 85, 32);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    sun.shadow.camera.near = 1;
    sun.shadow.camera.far = 220;
    sun.shadow.camera.left = -68;
    sun.shadow.camera.right = 68;
    sun.shadow.camera.top = 68;
    sun.shadow.camera.bottom = -68;
    sun.shadow.bias = -0.0005;
    sun.shadow.normalBias = 0.03;
    scene.add(sun);
    scene.add(sun.target);
    this.sun = sun;

    const fill = new THREE.DirectionalLight(0x6da990, 0.48);
    fill.position.set(-60, 34, -30);
    scene.add(fill);

    this.buildSky();
    this.buildFlashlight();
  }

  buildSky() {
    const skyGeo = new THREE.SphereGeometry(520, 32, 18);
    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      uniforms: {
        topColor: { value: new THREE.Color(0x061017) },
        horizonColor: { value: new THREE.Color(0x3a4f39) },
        sunColor: { value: new THREE.Color(0x7e825e) },
      },
      vertexShader: `
        varying vec3 vWorld;
        void main() {
          vec4 world = modelMatrix * vec4(position, 1.0);
          vWorld = world.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 horizonColor;
        uniform vec3 sunColor;
        varying vec3 vWorld;
        void main() {
          vec3 dir = normalize(vWorld);
          float h = clamp(dir.y * 1.35 + 0.08, 0.0, 1.0);
          vec3 col = mix(horizonColor, topColor, pow(h, 0.67));
          float glow = pow(max(0.0, dot(dir, normalize(vec3(-0.45, 0.3, -0.84)))), 18.0);
          col += sunColor * glow * 0.25;
          float dither = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
          col += (dither - 0.5) * 0.014;
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });
    this.sky = new THREE.Mesh(skyGeo, skyMat);
    this.scene.add(this.sky);

    // Low, fog-dimmed moon.
    const moon = new THREE.Mesh(
      new THREE.SphereGeometry(7.2, 16, 10),
      new THREE.MeshBasicMaterial({ color: 0xbac59c, fog: false, toneMapped: false }),
    );
    moon.position.set(-180, 205, -330);
    this.scene.add(moon);
    this.moon = moon;

    const starCount = 340;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i += 1) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI * 0.24;
      const r = 430;
      starPos[i * 3] = Math.cos(theta) * Math.sin(phi + 0.12) * r;
      starPos[i * 3 + 1] = Math.cos(phi) * r * 0.85 + 50;
      starPos[i * 3 + 2] = Math.sin(theta) * Math.sin(phi + 0.12) * r;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xc8d5ae, size: 1.2, sizeAttenuation: false, fog: false, transparent: true, opacity: 0.62 }));
    stars.frustumCulled = false;
    this.scene.add(stars);
  }

  buildFlashlight() {
    const spot = new THREE.SpotLight(0xffe2b0, 0, 46, 0.52, 0.62, 1.6);
    spot.position.set(0, 2, 0);
    this.scene.add(spot);
    this.scene.add(spot.target);
    this.flashlight = spot;
    this.flashlightOn = false;
  }

  buildFpArms() {
    const group = new THREE.Group();
    group.position.set(0, -0.28, -0.48);
    const furMat = new THREE.MeshStandardMaterial({ color: 0x3b2d21, roughness: 0.95 });
    const skinMat = new THREE.MeshStandardMaterial({ color: 0x9f7959, roughness: 0.9 });
    for (const side of [-1, 1]) {
      const arm = new THREE.Group();
      arm.position.set(side * 0.26, 0, 0);
      const upper = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.27, 0.09), furMat);
      upper.position.set(0, -0.06, 0.07);
      upper.rotation.x = -0.65;
      upper.rotation.z = side * 0.16;
      arm.add(upper);
      const hand = new THREE.Mesh(new THREE.BoxGeometry(0.115, 0.12, 0.12), skinMat);
      hand.position.set(side * -0.025, 0.015, -0.06);
      arm.add(hand);
      group.add(arm);
    }
    this.camera.add(group);
    this.fpArms = group;
    this.fpArms.visible = false;
  }

  bindUI() {
    document.getElementById('start-btn').addEventListener('click', () => this.startSession());
    document.getElementById('resume-btn').addEventListener('click', () => this.resume());
    document.getElementById('restart-btn').addEventListener('click', () => this.restartRun());
    document.getElementById('retry-btn').addEventListener('click', () => this.restartRun());
    document.getElementById('map-close').addEventListener('click', () => this.closeMap());
    window.addEventListener('keydown', (event) => this.onKeyDown(event));
    window.addEventListener('keyup', (event) => this.keys.delete(event.code));
    window.addEventListener('mousemove', (event) => this.onMouseMove(event));
    window.addEventListener('mouseup', () => { this.mouseDrag = false; });
    this.canvas.addEventListener('mousedown', (event) => {
      if (this.state !== 'playing') return;
      if (event.button === 0 && !this.pointerLocked && !this.isTouch) {
        this.mouseDrag = true;
        this.requestPointerLock();
      }
    });
    document.addEventListener('pointerlockchange', () => {
      this.pointerLocked = document.pointerLockElement === this.canvas;
      if (this.pointerLocked) {
        this.hadPointerLock = true;
      } else if (this.hadPointerLock && this.state === 'playing' && !this.suppressPause) {
        this.pause();
      }
      this.suppressPause = false;
    });
    this.bindTouch();
    document.addEventListener('contextmenu', (event) => event.preventDefault());
    window.addEventListener('blur', () => {
      if (this.state === 'playing') this.pause();
    });
  }

  bindTouch() {
    const joy = this.ui.el.joyZone;
    const knob = this.ui.el.joyKnob;
    const look = document.getElementById('look-zone');
    let joyId = null;
    let lookId = null;
    let lookX = 0;
    let lookY = 0;
    const maxR = 38;
    const setJoy = (event) => {
      const rect = joy.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      let dx = event.clientX - cx;
      let dy = event.clientY - cy;
      const d = Math.hypot(dx, dy);
      if (d > maxR) {
        dx = (dx / d) * maxR;
        dy = (dy / d) * maxR;
      }
      knob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
      this.touchMove.x = dx / maxR;
      this.touchMove.y = dy / maxR;
      this.touchMove.active = true;
    };
    const resetJoy = () => {
      joyId = null;
      this.touchMove.x = 0;
      this.touchMove.y = 0;
      this.touchMove.active = false;
      knob.style.transform = 'translate(-50%, -50%)';
    };
    joy.addEventListener('pointerdown', (event) => {
      joyId = event.pointerId;
      joy.setPointerCapture(event.pointerId);
      setJoy(event);
    });
    joy.addEventListener('pointermove', (event) => {
      if (joyId === event.pointerId) setJoy(event);
    });
    joy.addEventListener('pointerup', resetJoy);
    joy.addEventListener('pointercancel', resetJoy);
    look.addEventListener('pointerdown', (event) => {
      lookId = event.pointerId;
      lookX = event.clientX;
      lookY = event.clientY;
      look.setPointerCapture(event.pointerId);
    });
    look.addEventListener('pointermove', (event) => {
      if (lookId !== event.pointerId) return;
      const dx = event.clientX - lookX;
      const dy = event.clientY - lookY;
      lookX = event.clientX;
      lookY = event.clientY;
      this.camYaw -= dx * 0.006;
      this.orbitPitch = clamp(this.orbitPitch + dy * 0.004, 0.02, 1.05);
    });
    look.addEventListener('pointerup', () => { lookId = null; });
    look.addEventListener('pointercancel', () => { lookId = null; });
    const sprintBtn = this.ui.el.btnSprint;
    sprintBtn.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      this.touchSprint = true;
      sprintBtn.classList.add('on');
    });
    const stopSprint = () => {
      this.touchSprint = false;
      sprintBtn.classList.remove('on');
    };
    sprintBtn.addEventListener('pointerup', stopSprint);
    sprintBtn.addEventListener('pointercancel', stopSprint);
    this.ui.el.btnCrouch.addEventListener('click', () => this.toggleCrouch());
    this.ui.el.btnCamera.addEventListener('click', () => this.toggleCamera());
    this.ui.el.btnInteract.addEventListener('click', () => this.tryInteract());
    this.ui.el.btnLight.addEventListener('click', () => this.toggleFlashlight());
    this.ui.el.btnMap.addEventListener('click', () => {
      if (this.state === 'playing') this.openMap();
      else if (this.state === 'map') this.closeMap();
    });
    this.ui.el.btnPause.addEventListener('click', () => this.pause());
  }

  resize() {
    if (!this.renderer) return;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const targetWidth = Math.min(width, 960);
    const scale = targetWidth / width;
    const rw = Math.max(320, Math.round(width * scale));
    const rh = Math.max(180, Math.round(height * scale));
    this.renderer.setSize(rw, rh, false);
    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    if (this.ui) this.ui.resize();
  }

  snapIntroCamera() {
    this.camera.fov = 54;
    this.camera.updateProjectionMatrix();
    this.camera.position.set(4.8, 2.55, 5.25);
    this.camera.lookAt(0, 1.45, 0.2);
  }

  startSession() {
    if (this.state !== 'title') return;
    this.audio.init();
    this.state = 'playing';
    this.runStartedAt = performance.now();
    this.runTime = 0;
    this.ui.hideStart();
    this.ui.setCameraMode('third');
    this.camera.fov = 62;
    this.camera.updateProjectionMatrix();
    this.snapCamera = true;
    this.crouchToggle = false;
    this.player.setHidden(false);
    this.fpArms.visible = false;
    if (!this.isTouch) this.requestPointerLock();
    this.ui.toast('BIOMETRIC LINK ESTABLISHED // APE-PRIME ONLINE');
    setTimeout(() => {
      if (this.state === 'playing') {
        this.ui.subtitle('No mission. No destination. The reserve is yours to wander.', 6200);
      }
    }, 1000);
  }

  requestPointerLock() {
    if (!this.canvas.requestPointerLock || this.isTouch) return;
    try {
      const result = this.canvas.requestPointerLock({ unadjustedMovement: true });
      if (result && result.catch) result.catch(() => {});
    } catch (error) {
      // Pointer lock unavailable (iframe, permissions). Mouse drag remains.
    }
  }

  pause() {
    if (this.state !== 'playing') return;
    this.state = 'paused';
    this.ui.showPause(true);
    this.touchSprint = false;
    if (document.pointerLockElement) document.exitPointerLock();
    if (this.audio.ctx && this.audio.ctx.state === 'running') this.audio.ctx.suspend();
  }

  resume() {
    if (this.state !== 'paused') return;
    this.state = 'playing';
    this.ui.showPause(false);
    if (this.audio.ctx && this.audio.ctx.state === 'suspended') this.audio.ctx.resume();
    this.requestPointerLock();
  }

  openMap() {
    if (this.state !== 'playing') return;
    this.state = 'map';
    this.suppressPause = true;
    if (this.pointerLocked) document.exitPointerLock();
    this.ui.setMap(true);
    this.ui.drawMap(this.player, this.mossman, this.camYaw, true);
    this.audio.ui(false);
  }

  closeMap() {
    if (this.state !== 'map') return;
    this.state = 'playing';
    this.ui.setMap(false);
    this.audio.ui(true);
    this.requestPointerLock();
  }

  toggleCrouch() {
    this.crouchToggle = !this.crouchToggle;
    this.ui.el.btnCrouch.classList.toggle('on', this.crouchToggle);
    this.audio.ui(this.crouchToggle);
  }

  toggleCamera() {
    if (this.state !== 'playing') return;
    this.cameraMode = this.cameraMode === 'third' ? 'first' : 'third';
    this.snapCamera = true;
    this.ui.setCameraMode(this.cameraMode);
    this.ui.toast(this.cameraMode === 'first' ? 'OPTIC FEED // FIRST PERSON' : 'OPTIC FEED // THIRD PERSON', '', 1800);
    this.audio.ui(true);
  }

  toggleFlashlight() {
    this.flashlightOn = !this.flashlightOn;
    this.audio.ui(this.flashlightOn);
    this.ui.toast(this.flashlightOn ? 'FIELD LAMP // ON' : 'FIELD LAMP // OFF', '', 1400);
  }

  onKeyDown(event) {
    const code = event.code;
    if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ShiftLeft', 'ShiftRight', 'Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'KeyE', 'KeyC', 'KeyV', 'KeyF', 'KeyM', 'Tab'].includes(code)) {
      event.preventDefault();
    }
    if (code === 'KeyM') {
      if (this.state === 'playing') this.openMap();
      else if (this.state === 'map') this.closeMap();
      return;
    }
    if (code === 'Escape') {
      if (this.state === 'map') this.closeMap();
      else if (this.state === 'playing') this.pause();
      return;
    }
    if (this.state !== 'playing') return;
    if (event.repeat) {
      this.keys.add(code);
      return;
    }
    this.keys.add(code);
    if (code === 'KeyE') this.tryInteract();
    if (code === 'KeyV') this.toggleCamera();
    if (code === 'KeyF') this.toggleFlashlight();
    if (code === 'KeyC') this.toggleCrouch();
    if (code === 'Space') this.jumpQueued = true;
  }

  onMouseMove(event) {
    if (this.state !== 'playing') return;
    if (!this.pointerLocked && !this.mouseDrag) return;
    const dx = event.movementX || 0;
    const dy = event.movementY || 0;
    this.camYaw -= dx * 0.0023;
    this.orbitPitch = clamp(this.orbitPitch + dy * 0.0018, 0.02, 1.05);
  }

  getInput() {
    _forward.set(-Math.sin(this.camYaw), 0, -Math.cos(this.camYaw));
    _right.set(Math.cos(this.camYaw), 0, -Math.sin(this.camYaw));
    let forwardAmount = 0;
    let rightAmount = 0;
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) forwardAmount += 1;
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) forwardAmount -= 1;
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) rightAmount += 1;
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) rightAmount -= 1;
    if (this.touchMove.active) {
      forwardAmount += -this.touchMove.y;
      rightAmount += this.touchMove.x;
    }
    _move.set(0, 0, 0).addScaledVector(_forward, forwardAmount).addScaledVector(_right, rightAmount);
    if (_move.lengthSq() > 1) _move.normalize();
    return {
      move: _move,
      sprint: this.keys.has('ShiftLeft') || this.keys.has('ShiftRight') || this.touchSprint,
      crouch: this.crouchToggle,
      jump: this.jumpQueued,
    };
  }

  tryInteract() {
    if (this.state !== 'playing') return;
    const item = this.currentInteractable;
    if (!item) return;
    if (item.kind === 'door') {
      this.audio.switchClick();
      this.doorsTouched += 1;
    }
    item.action();
    if (this.state === 'playing') this.updateInteraction();
  }

  onHydraulic(door, open) {
    this.audio.hydraulic(open);
    this.ui.toast(`HYDRAULIC ${door.label} // ${open ? 'OPENING' : 'CLOSING'}`, '', 2400);
    const position = new THREE.Vector3(door.pos.x, 0.2, door.pos.z);
    this.effects.waves.pulse(position, 18, open ? 0xe4c270 : 0x9fcf8b, 1.4);
    this.effects.voxels.spawnBurst(position, {
      count: 18,
      colors: [0x7f8c7a, 0x59645b, 0xa8b89b, 0x3d4a3c],
      power: 2.4,
      size: 0.075,
      spread: 2.4,
      up: 1.2,
      gravity: 10,
      life: 2.5,
    });
    if (this.mossman) {
      this.mossman.hearNoise({
        position: new THREE.Vector3(door.pos.x, 0, door.pos.z),
        type: 'door',
        loudness: 1,
        radius: 138,
      });
    }
    if (this.state === 'playing') {
      this.ui.alert(
        `HYDRAULIC EVENT // ${door.label}`,
        'SUBJECT M-08 CAN HEAR THE PISTONS',
        3200,
      );
    }
  }

  onPlayerDamage(amount, source) {
    this.ui.showDamage();
    this.audio.impact();
    this.shake.add(1.2);
    this.ui.toast(`TRAUMA // ${Math.round(amount)} DAMAGE`, 'danger', 2000);
    if (this.player.health < 35) this.ui.alert('VITALS CRITICAL', 'SEEK THE LABORATORY', 2600);
  }

  onPlayerDeath(source) {
    if (this.state === 'dead') return;
    this.state = 'dead';
    this.deathTime = performance.now();
    this.deathCameraStart = this.camera.position.clone();
    this.deathFocus = this.player.position.clone().add(new THREE.Vector3(0, 0.9, 0));
    this.deathAttacker = source?.position?.clone?.() || this.deathFocus.clone();
    this.deathYaw = this.player.yaw;
    if (document.pointerLockElement) document.exitPointerLock();
    this.audio.death();
    this.shake.add(2.4);
    this.ui.showDamage();
    this.ui.setInteract(null);
    this.player.moving = false;
    this.player.speed = 0;
    this.player.rig.rotation.x = -0.22;
    this.player.torso.rotation.x = 0.38;
    this.player.head.rotation.x = -0.25;
    this.player.arms.forEach((arm) => { arm.shoulder.rotation.x = -0.75; arm.elbow.rotation.x = -0.9; });
    setTimeout(() => {
      if (this.state !== 'dead') return;
      this.ui.showDeath('The jungle went quiet. The last thing you heard was your own pulse.');
    }, this.deathDuration * 1000);
  }

  onZoneChanged(inside) {
    this.audio.setEnvironment(inside);
    if (!inside && !this.firstOutside) {
      this.firstOutside = true;
      this.ui.toast('EXTERIOR LINK // GREEN VEIL', '', 3000);
      this.ui.subtitle('The air is hot and wet. The canopy swallows every sound except your own.', 5200);
      setTimeout(() => {
        if (this.state === 'playing' && !this.player.inside) {
          this.ui.subtitle('The jungle stretches far beyond the lab. Watch for movement between the trees.', 4000);
        }
      }, 5500);
    } else if (inside) {
      this.ui.toast('SANCTUARY // HYDRAULIC SEALS IN RANGE', 'core', 2600);
    }
    this.ui.setZone(this.getZoneName());
  }

  onJump() {
    this.audio.footstep('dirt', 0.4);
  }

  onLand() {
    this.effects.voxels.spawnBurst(this.player.position, { count: 6, power: 1.4, size: 0.06, up: 0.6, life: 1.2 });
  }

  onFootstep(event) {
    this.audio.footstep(event.surface, event.loudness);
    if (this.mossman) this.mossman.hearNoise(event);
    if (event.surface === 'dirt') {
      this.effects.voxels.spawnBurst(event.position, {
        count: this.player.sprinting ? 7 : 3,
        colors: [0x554f38, 0x3d4d2c, 0x6f6846, 0x2e3b25],
        power: this.player.sprinting ? 2.2 : 1.1,
        size: 0.055,
        spread: 0.4,
        up: this.player.sprinting ? 0.9 : 0.4,
        life: 1.2,
      });
    } else if (Math.random() > 0.5) {
      this.effects.voxels.spawnBurst(event.position, {
        count: 2,
        colors: [0x8d968c, 0x667269, 0xb3b6a7],
        power: 0.7,
        size: 0.04,
        up: 0.25,
        life: 0.8,
      });
    }
    // A quiet visual echo of a loud step; Mossman uses the same signal.
    if (this.player.sprinting && !this.player.inside && Math.random() > 0.56) {
      this.effects.waves.pulse(event.position, 8.5, 0xbfd87f, 0.9);
    }
  }

  onMossmanRoar(position, previous) {
    const distance = this.player.position.distanceTo(position);
    if (distance < 115) {
      this.audio.roar();
      this.shake.add(clamp(1 - distance / 130, 0.2, 0.9));
    }
    if (previous !== 'chase' && previous !== 'attack') {
      this.ui.alert('SUBJECT M-08 VOCALIZING', 'THE SOUND IS COMING CLOSER', 3400);
    }
  }

  onMossmanAlert(info) {
    // Reserved for proximity warnings.
  }

  onMossmanState(next, previous, reason) {
    if (next === 'chase') {
      this.chaseCount += 1;
      if (!this.firstChase) {
        this.firstChase = true;
        this.ui.subtitle('IT HEARD YOU. It is blind, but it knows exactly where you were.', 4800);
      }
      this.ui.alert('SUBJECT M-08 IS HUNTING', 'BREAK LINE OF HEARING // DO NOT STOP', 3800);
      this.ui.toast('ACOUSTIC LOCK // M-08 IN PURSUIT', 'danger', 3800);
    } else if (next === 'lurk') {
      if (!this.firstLurk) {
        this.firstLurk = true;
        this.ui.subtitle('It is at the wall. It cannot cross the seal. Its breathing rattles the metal.', 5200);
      }
      this.ui.alert('CONTACT AT THE THRESHOLD', 'DO NOT OPEN THE DOOR', 4000);
    } else if (next === 'search' && previous === 'chase') {
      this.ui.toast('ACOUSTIC LOCK LOST // IT IS SEARCHING', '', 3000);
    }
  }

  onMossmanHear(info) {
    if (this.state !== 'playing') return;
    this.heardCooldown = Math.max(0, this.heardCooldown - 0);
    const now = performance.now();
    if (!this.lastHeardAlert || now - this.lastHeardAlert > 5800) {
      this.lastHeardAlert = now;
      this.ui.alert('ACOUSTIC CONTACT', 'SUBJECT M-08 IS LISTENING', 2600);
      this.ui.toast('IT HEARD THAT', 'warn', 2200);
    }
  }

  onMossmanStep(info) {
    const distance = this.player.position.distanceTo(info.position);
    if (distance < 58) this.audio.footstep('dirt', 0.42 + (1 - distance / 58) * 0.5);
    this.effects.voxels.spawnBurst(info.position, {
      count: this.mossman.state === 'chase' ? 4 : 2,
      colors: [0x45552f, 0x24351e, 0x5a6a39],
      power: 1.3,
      size: 0.075,
      up: 0.4,
      life: 1.1,
    });
  }

  onMossmanAttack(info) {
    this.audio.roar();
    this.ui.alert('M-08 // MAUL', 'MOVE', 1200);
  }

  onMossmanHit(info) {
    this.ui.showDamage();
    this.shake.add(2);
    this.audio.impact();
  }

  updateTitle(dt, time) {
    this.introAngle += dt * 0.055;
    const angle = 0.72 + Math.sin(this.introAngle) * 0.55;
    const radius = 5.3 + Math.sin(this.introAngle * 0.7) * 0.25;
    this.camera.position.set(Math.sin(angle) * radius, 2.55 + Math.sin(time * 0.13) * 0.18, Math.cos(angle) * radius);
    this.camera.lookAt(0, 1.35, 0.2);
    this.lab.update(dt);
    this.jungle.update(dt, time, this.player.position);
    this.player.updateAnimation(dt, this.lab);
    this.player.syncTransform();
    this.effects.voxels.update(dt);
    this.effects.waves.update(dt);
    const t = performance.now() * 0.001;
    this.player.breath = t;
  }

  updatePlaying(dt, time) {
    this.runTime = (performance.now() - this.runStartedAt) / 1000;
    const input = this.getInput();
    this.player.update(dt, input, this.lab, this.jungle, [this.mossman]);
    this.jumpQueued = false;
    this.mossman.update(dt, this.player, this.lab, this.jungle);
    if (this.state !== 'playing') return;
    this.lab.update(dt);
    this.jungle.update(dt, time, this.player.position);
    this.effects.voxels.update(dt);
    this.effects.waves.update(dt);
    this.shake.update(dt);
    this.updateCamera(dt, time);
    this.updateInteraction();
    this.updateSun();
    this.updateFlashlight();
    this.updateHUD(dt, time);
    this.audio.update(dt, {
      threat: this.mossman.state === 'chase' ? 1 : this.mossman.state === 'lurk' ? 0.8 : this.mossman.suspicion * 0.5,
      distance: this.player.position.distanceTo(this.mossman.position),
      heart: clamp((this.player.fear * 0.85 + (this.player.health < 35 ? 0.35 : 0)) * (this.player.inside ? 0.25 : 1), 0, 1),
    });
  }

  updateCamera(dt, time) {
    if (this.state === 'dead') {
      const elapsed = Math.max(0, (performance.now() - this.deathTime) / 1000);
      const t = clamp(elapsed / this.deathDuration, 0, 1);
      const ease = t * t * (3 - 2 * t);
      const attackerSide = this.deathAttacker.clone().sub(this.deathFocus);
      attackerSide.y = 0;
      if (attackerSide.lengthSq() < 0.01) attackerSide.set(Math.sin(this.deathYaw), 0, Math.cos(this.deathYaw));
      attackerSide.normalize();
      const closeShot = this.deathFocus.clone().addScaledVector(attackerSide, 2.8 - ease * 0.7);
      closeShot.y += 1.15 - ease * 0.25;
      closeShot.x += Math.sin(elapsed * 1.4) * 0.035;
      this.camera.position.copy(this.deathCameraStart).lerp(closeShot, ease);
      const lookAt = this.deathFocus.clone().lerp(this.deathAttacker, Math.min(0.28, ease * 0.28));
      this.camera.lookAt(lookAt);
      return;
    }
    const isFirst = this.cameraMode === 'first';
    if (isFirst) {
      this.player.setHidden(true);
      this.fpArms.visible = true;
      const bobSpeed = this.player.speed;
      this.fpBob += dt * (1.4 + bobSpeed * 1.4);
      const bob = this.player.moving && this.player.onGround ? Math.sin(this.fpBob * 2.1) * 0.017 * clamp(bobSpeed / 4, 0, 1.4) : 0;
      this.camera.position.set(this.player.position.x, this.player.position.y + 1.62 + bob, this.player.position.z);
      const lookPitch = 0.22 - this.orbitPitch;
      _camDir.set(
        -Math.sin(this.camYaw) * Math.cos(lookPitch),
        Math.sin(lookPitch),
        -Math.cos(this.camYaw) * Math.cos(lookPitch),
      ).normalize();
      _target.copy(this.camera.position).addScaledVector(_camDir, 12);
      this.camera.lookAt(_target);
      this.fpArms.position.y = -0.28 + bob * 1.3;
      this.fpArms.rotation.z = Math.sin(this.fpBob * 1.05) * 0.008;
      this.camera.fov = damp(this.camera.fov, this.player.sprinting ? 69 : this.player.crouching ? 58 : 62, 6, dt);
      this.camera.updateProjectionMatrix();
      return;
    }
    this.player.setHidden(false);
    this.fpArms.visible = false;
    const crouchOffset = this.player.crouching ? -0.32 : 0;
    _target.set(this.player.position.x, this.player.position.y + 1.18 + crouchOffset, this.player.position.z);
    // Over-the-shoulder framing keeps the ape from masking the interaction
    // point and gives the lobby a more cinematic silhouette.
    _camRight.set(Math.cos(this.camYaw), 0, -Math.sin(this.camYaw));
    const portrait = this.camera.aspect < 0.8;
    const shoulder = this.player.inside ? (portrait ? 0.68 : 0.46) : (portrait ? 0.9 : 0.62);
    _target.addScaledVector(_camRight, shoulder);
    const distance = this.player.inside
      ? (portrait ? 3.55 : 3.05)
      : this.player.crouching ? 3.7 : (portrait ? 5.2 : 4.35);
    const cp = Math.cos(this.orbitPitch) * distance;
    _desiredCam.set(
      _target.x + Math.sin(this.camYaw) * cp,
      _target.y + Math.sin(this.orbitPitch) * distance,
      _target.z + Math.cos(this.camYaw) * cp,
    );
    // Camera collision: shorten the boom if the line crosses solid geometry.
    let maxT = 1;
    for (let t = 0.18; t <= 1; t += 0.075) {
      const sx = _target.x + (_desiredCam.x - _target.x) * t;
      const sz = _target.z + (_desiredCam.z - _target.z) * t;
      if (this.cameraBlockedAt(sx, sz)) {
        maxT = Math.max(0.16, t - 0.1);
        break;
      }
    }
    _desiredCam.lerpVectors(_target, _desiredCam, maxT);
    const minY = (this.player.inside ? 0.25 : this.player.position.y + 0.35);
    _desiredCam.y = Math.max(_desiredCam.y, minY);
    if (this.player.inside) _desiredCam.y = Math.min(_desiredCam.y, 4.15);
    const speed = this.snapCamera ? 200 : 12;
    this.camera.position.lerp(_desiredCam, 1 - Math.exp(-speed * dt));
    if (this.snapCamera) this.snapCamera = false;
    _look.copy(_target);
    // Subtle aim lead in the direction of travel.
    if (this.player.moving) {
      _look.x += Math.sin(this.player.visualYaw) * this.player.speed * 0.045;
      _look.z += Math.cos(this.player.visualYaw) * this.player.speed * 0.045;
    }
    this.shake.offset(_shake);
    this.camera.position.add(_shake);
    this.camera.lookAt(_look);
    this.camera.fov = damp(this.camera.fov, this.player.sprinting ? 66 : portrait ? 68 : 61, 4, dt);
    this.camera.updateProjectionMatrix();
  }

  cameraBlockedAt(x, z) {
    for (const c of this.lab.colliders) {
      if (!c.active) continue;
      if (x > c.minX && x < c.maxX && z > c.minZ && z < c.maxZ) return true;
    }
    if (!this.lab.isInside(x, z, -0.4)) {
      for (const tree of this.jungle.treeColliders) {
        const dx = x - tree.x;
        const dz = z - tree.z;
        if (dx * dx + dz * dz < (tree.radius + 0.22) ** 2) return true;
      }
    }
    return false;
  }

  updateFlashlight() {
    this.camera.getWorldDirection(_camDir);
    this.flashlight.position.copy(this.camera.position);
    this.flashlight.target.position.copy(this.camera.position).addScaledVector(_camDir, 24);
    this.flashlight.intensity = damp(this.flashlight.intensity, this.flashlightOn ? 52 : 0, 12, 0.016);
  }

  updateSun() {
    const p = this.player.position;
    this.sun.position.set(p.x + 58, p.y + 88, p.z + 32);
    this.sun.target.position.set(p.x, p.y, p.z);
    this.sun.target.updateMatrixWorld();
  }

  updateInteraction() {
    const chest = this.player.position.clone();
    chest.y += 0.85;
    this.camera.getWorldDirection(_camDir);
    const labItem = this.lab.getNearestInteractable(chest, _camDir);
    // The switch must be comprehensible from outside too; use facing only
    // as a soft preference, never as a hard gate.
    this.currentInteractable = labItem;
    this.ui.setInteract(labItem);
    this.ui.el.crosshair.classList.toggle('hot', !!labItem);
  }

  updateHUD(dt, time) {
    this.ui.setVitals(this.player);
    // Bearing of the view direction, with north (-Z) at zero degrees.
    const compassHeading = (Math.atan2(-Math.sin(this.camYaw), Math.cos(this.camYaw)) * 180) / Math.PI;
    this.ui.setCompass(((compassHeading % 360) + 360) % 360, this.player, this.mossman, this.camYaw);
    this.ui.setZone(this.getZoneName());
    this.ui.setThreat(this.mossman.getThreatInfo(this.player), this.player, this.camYaw, time);
    if (this.ui.mapOpen) this.ui.drawMap(this.player, this.mossman, this.camYaw);
    // Alert buffer cooldown.
    if (this.heardCooldown > 0) this.heardCooldown -= dt;
  }

  getZoneName() {
    if (this.player.inside) return 'LABORATORY LOBBY // SECURE';
    const p = this.player.position;
    for (const core of this.jungle.cores) {
      if (p.distanceTo(core.position) < 30) return `${core.landmark} // CLEARING`;
    }
    const d = Math.hypot(p.x, p.z);
    if (d < 26) return 'BUNKER APRON // GREEN VEIL';
    if (p.z < -50 && Math.abs(p.x) < 80) return 'NORTHERN TRACKING FIELD';
    if (p.z > 80) return 'SUNKEN SHRINE APPROACH';
    if (p.x > 80) return 'IMPACT SCAR // EASTERN RIDGE';
    if (p.x < -80) return 'WATCHTOWER BASIN';
    return d > 170 ? 'DEEP RESERVE // OLD GROWTH' : 'GREEN VEIL // SPARSE JUNGLE';
  }

  restartRun() {
    if (!this.player) return;
    this.state = 'playing';
    this.runStartedAt = performance.now();
    this.runTime = 0;
    this.crouchToggle = false;
    this.jumpQueued = false;
    this.chaseCount = 0;
    this.doorsTouched = 0;
    this.firstOutside = false;
    this.firstChase = false;
    this.firstLurk = false;
    this.currentInteractable = null;
    this.player.reset();
    this.mossman.reset();
    this.lab.resetDoors();
    this.effects.voxels.items.forEach((item) => { item.active = false; });
    this.effects.waves.items.forEach((item) => { item.active = false; item.mesh.visible = false; });
    this.ui.hideDeath();
    this.ui.showPause(false);
    this.ui.setMap(false);
    this.ui.setInteract(null);
    this.ui.el.btnCrouch.classList.remove('on');
    this.ui.fadeBlack(false, 500);
    this.audio.reset();
    this.audio.setEnvironment(true, true);
    this.camYaw = 0;
    this.orbitPitch = 0.24;
    this.cameraMode = 'third';
    this.ui.setCameraMode('third');
    this.player.setHidden(false);
    this.snapCamera = true;
    if (!this.isTouch) this.requestPointerLock();
    this.ui.toast('SESSION RESET // BIOMETRIC LINK RESTORED', '', 2800);
  }

  animate() {
    this.frameId = requestAnimationFrame(this.animate);
    const dt = Math.min(this.clock.getDelta(), 0.05);
    const time = performance.now() * 0.001;
    if (this.state === 'title') {
      this.updateTitle(dt, time);
    } else if (this.state === 'playing') {
      this.updatePlaying(dt, time);
      this.ui.setCameraMode(this.cameraMode);
    } else if (this.state === 'dead') {
      this.effects.voxels.update(dt);
      this.effects.waves.update(dt);
      this.lab.update(dt * 0.15);
      this.player.syncTransform();
      this.updateCamera(dt, time);
      this.shake.update(dt);
    } else if (this.state === 'map') {
      this.lab.update(dt * 0.1);
      this.jungle.update(dt * 0.1, time, this.player.position);
      this.ui.drawMap(this.player, this.mossman, this.camYaw);
    }
    this.renderer.render(this.scene, this.camera);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new ApeProject();
});
