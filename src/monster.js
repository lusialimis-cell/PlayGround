import * as THREE from 'three';

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const damp = (a, b, lambda, dt) => a + (b - a) * (1 - Math.exp(-lambda * dt));
const wrapAngle = a => ((a + Math.PI * 3) % (Math.PI * 2)) - Math.PI;

function box(w, h, d, mat, x, y, z) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z);
  m.castShadow = true; m.receiveShadow = true;
  return m;
}

export class Monster {
  constructor(scene, world, spawn = { x: 112, z: 88 }) {
    this.scene = scene;
    this.world = world;
    this.pos = new THREE.Vector3(spawn.x, world.groundAt(spawn.x, spawn.z), spawn.z);
    this.yaw = -2.2;
    this.radius = 0.95;
    this.speed = 0;
    this.maxSpeed = 33 / 3.6; // 9.17 m/s
    this.state = 'wander';
    this.stateTime = 0;
    this.lastHeard = new THREE.Vector3().copy(this.pos);
    this.lastHeardAge = 99;
    this.searchTimer = 0;
    this.attackCd = 0;
    this.roarCd = 6;
    this.stepTravel = 0;
    this.stuck = 0;
    this.wanderTimer = 0;
    this.wanderTarget = this.pickWanderTarget();
    this.attackAnim = 0;
    this.attackAnimTime = 0;
    this.huntingAnnounced = false;
    this.distanceToPlayer = 999;
    this.threat = 0;
    this.pan = 0;
    this.enraged = false;
    this.phase = Math.random() * 10;
    this.trailTimer = 0;
    this.breathTimer = 0;
    this.buildModel();
  }

  buildModel() {
    const base = new THREE.MeshLambertMaterial({ color: 0x3f5c2b, flatShading: true, emissive: 0x071006 });
    const base2 = new THREE.MeshLambertMaterial({ color: 0x4d6d31, flatShading: true, emissive: 0x060d05 });
    const dark = new THREE.MeshLambertMaterial({ color: 0x1a331b, flatShading: true });
    const stripe = new THREE.MeshLambertMaterial({ color: 0x173a1b, flatShading: true, emissive: 0x020803 });
    const belly = new THREE.MeshLambertMaterial({ color: 0x6d8342, flatShading: true });
    const skin = new THREE.MeshLambertMaterial({ color: 0x4b5931, flatShading: true });
    const mouthMat = new THREE.MeshBasicMaterial({ color: 0x190504 });
    const toothMat = new THREE.MeshLambertMaterial({ color: 0xc6bd95, flatShading: true });
    const eyeSocket = new THREE.MeshBasicMaterial({ color: 0x081107 });
    this.mats = { base, base2, dark, stripe, belly, skin };

    const model = new THREE.Group();
    this.model = model;
    this.scene.add(model);

    const body = new THREE.Group();
    body.position.y = 1.52;
    model.add(body);
    this.body = body;
    const torso = box(1.32, 1.22, 0.86, base, 0, 0.16, 0);
    body.add(torso);
    // massive shoulders
    const shoulders = box(1.62, 0.44, 0.92, base2, 0, 0.62, 0);
    body.add(shoulders);
    const chest = box(0.84, 0.6, 0.12, belly, 0, 0.12, 0.44);
    body.add(chest);
    // moss stripes wrapping torso
    for (let i = 0; i < 7; i++) {
      const s = box(0.95 + Math.random() * 0.35, 0.1 + Math.random() * 0.12, 0.9, stripe, (Math.random() - .5) * .2, .6 - i * .2, 0);
      s.scale.x = 1.02 + Math.random() * 0.05;
      body.add(s);
    }
    // moss clumps
    for (let i = 0; i < 16; i++) {
      const c = box(0.08 + Math.random() * .16, 0.06 + Math.random() * .12, 0.08 + Math.random() * .14, base2,
        (Math.random() - .5) * 1.2, (Math.random() - .5) * 1.1, .44 + Math.random() * .05);
      body.add(c);
    }
    // spine ridge
    for (let i = 0; i < 5; i++) {
      const sp = box(0.14, 0.24 + i * .03, 0.18, dark, 0, 0.72 - i * .24, -0.46);
      body.add(sp);
    }

    const head = new THREE.Group();
    head.position.set(0, 0.92, 0.12);
    body.add(head);
    this.head = head;
    const skull = box(0.78, 0.6, 0.68, base, 0, 0.1, 0);
    head.add(skull);
    const crown = box(0.84, 0.2, 0.7, base2, 0, 0.4, -0.02);
    head.add(crown);
    // eyeless pits
    for (const s of [-1, 1]) {
      const pit = box(0.18, 0.12, 0.035, eyeSocket, s * 0.2, 0.22, 0.345);
      head.add(pit);
      const ridge = box(0.26, 0.07, 0.07, stripe, s * 0.2, 0.32, 0.34);
      head.add(ridge);
      const cheek = box(0.2, 0.3, 0.1, skin, s * 0.32, -0.05, 0.34);
      head.add(cheek);
    }
    const muzzle = box(0.52, 0.25, 0.2, skin, 0, -0.16, 0.37);
    head.add(muzzle);
    const mouthPivot = new THREE.Group();
    mouthPivot.position.set(0, -0.19, 0.46);
    head.add(mouthPivot);
    this.mouthPivot = mouthPivot;
    const mouth = box(0.58, 0.15, 0.09, mouthMat, 0, -0.04, 0);
    mouthPivot.add(mouth);
    this.mouth = mouth;
    for (let i = 0; i < 8; i++) {
      const tooth = box(0.05, 0.07, 0.04, toothMat, -0.24 + i * 0.068, 0.015, 0.055);
      mouthPivot.add(tooth);
    }
    for (let i = 0; i < 7; i++) {
      const tooth = box(0.045, 0.06, 0.035, toothMat, -0.2 + i * 0.067, -0.105, 0.06);
      mouthPivot.add(tooth);
    }
    // jaw lower
    const jaw = box(0.54, 0.14, 0.16, skin, 0, -0.15, 0.04);
    mouthPivot.add(jaw);
    this.jaw = jaw;

    const makeArm = side => {
      const shoulder = new THREE.Group();
      shoulder.position.set(side * 0.88, 0.55, 0);
      body.add(shoulder);
      const upper = box(0.38, 0.9, 0.42, base, 0, -0.42, 0);
      shoulder.add(upper);
      const elbow = new THREE.Group();
      elbow.position.y = -0.86;
      shoulder.add(elbow);
      const fore = box(0.32, 0.85, 0.36, base2, 0, -0.4, 0);
      elbow.add(fore);
      const hand = box(0.38, 0.4, 0.45, skin, 0, -0.92, 0.03);
      elbow.add(hand);
      for (let i = 0; i < 4; i++) {
        const finger = box(0.07, 0.3, 0.1, skin, -0.13 + i * 0.09, -1.16, 0.1);
        elbow.add(finger);
      }
      // moss stripes on arm
      for (let i = 0; i < 4; i++) {
        const st = box(0.4, 0.07, 0.44, stripe, 0, -0.2 - i * 0.22, 0);
        shoulder.add(st);
      }
      for (let i = 0; i < 5; i++) {
        const m = box(0.1, 0.09, 0.08, base2, (Math.random() - .5) * .25, -Math.random() * .85, .18 + Math.random() * .06);
        shoulder.add(m);
      }
      return { shoulder, elbow };
    };
    this.armL = makeArm(-1);
    this.armR = makeArm(1);

    const makeLeg = side => {
      const hip = new THREE.Group();
      hip.position.set(side * 0.38, 1.26, 0);
      model.add(hip);
      const thigh = box(0.46, 0.82, 0.5, base, 0, -0.35, 0);
      hip.add(thigh);
      const knee = new THREE.Group();
      knee.position.y = -0.76;
      hip.add(knee);
      const shin = box(0.36, 0.7, 0.38, base2, 0, -0.32, 0);
      knee.add(shin);
      const foot = box(0.44, 0.22, 0.68, skin, 0, -0.68, 0.14);
      knee.add(foot);
      for (let i = 0; i < 3; i++) {
        const toe = box(0.1, 0.09, 0.16, skin, -0.13 + i * 0.13, -0.72, 0.5);
        knee.add(toe);
      }
      return { hip, knee };
    };
    this.legL = makeLeg(-1);
    this.legR = makeLeg(1);

    // hanging moss vines
    this.vines = [];
    for (let i = 0; i < 8; i++) {
      const v = box(0.035, 0.4 + Math.random() * .6, 0.035, base2, (Math.random() - .5) * 1.4, 0.2 + Math.random() * .4, -0.45);
      body.add(v); this.vines.push(v);
    }

    // faint green bio-glow to read in the dark
    const glow = new THREE.PointLight(0x62b24a, 2.2, 5, 2);
    glow.position.set(0, 1.8, 0.2);
    model.add(glow);
    this.glow = glow;

    // flies around the head
    const flyCount = 10;
    const geo = new THREE.BufferGeometry();
    const arr = new Float32Array(flyCount * 3);
    geo.setAttribute('position', new THREE.BufferAttribute(arr, 3));
    this.flyGeo = geo;
    this.flyBase = [];
    for (let i = 0; i < flyCount; i++) this.flyBase.push({ a: Math.random() * 6.28, r: .5 + Math.random() * 1.1, y: 1.7 + Math.random() * 1.4, s: .4 + Math.random() * 1.2 });
    this.flies = new THREE.Points(geo, new THREE.PointsMaterial({ color: 0xc6e58a, size: .09, transparent: true, opacity: .7, depthWrite: false, blending: THREE.AdditiveBlending }));
    this.scene.add(this.flies);

    // Normalize the rig to the dossier height: 2.8 m, feet exactly on the ground.
    model.position.set(0, 0, 0);
    model.updateMatrixWorld(true);
    const bounds = new THREE.Box3().setFromObject(model);
    const rigHeight = bounds.max.y - bounds.min.y;
    const rig = new THREE.Group();
    while (model.children.length) rig.add(model.children[0]);
    const rigScale = 2.8 / rigHeight;
    rig.scale.setScalar(rigScale);
    rig.position.y = -bounds.min.y * rigScale;
    model.add(rig);

    model.position.copy(this.pos);
    model.rotation.y = this.yaw;
    model.updateMatrixWorld(true);
  }

  pickWanderTarget(anchor = this.pos) {
    const a = Math.random() * Math.PI * 2;
    const r = 18 + Math.random() * 70;
    const x = clamp(anchor.x + Math.cos(a) * r, -235, 235);
    const z = clamp(anchor.z + Math.sin(a) * r, -235, 235);
    return new THREE.Vector3(x, 0, z);
  }

  hear(pos, strength, game, predelay = 0) {
    const spread = 3 + (1 - strength) * 11;
    this.lastHeard.set(
      pos.x + (Math.random() - .5) * spread,
      0,
      pos.z + (Math.random() - .5) * spread
    );
    this.lastHeardAge = 0;
    if (this.state !== 'hunt') {
      this.state = 'hunt';
      this.stateTime = 0;
      if (game) {
        const dist = this.pos.distanceTo(pos);
        if (dist < 95) this.roar(game, dist);
        if (dist < 110) game.onMonsterAlert?.();
      }
    }
  }

  roar(game, dist = 30) {
    if (!game || this.roarCd > 0) return;
    this.roarCd = 7 + Math.random() * 5;
    const pan = this.pan;
    const vol = clamp(1.25 - dist / 150, .18, 1);
    game.audio.monsterRoar(pan, vol);
    game.onMonsterRoar?.(dist);
  }

  update(dt, time, player, game) {
    if (player.dead) { this.updateModel(dt, 0); return; }
    const toPlayer = new THREE.Vector3(player.pos.x - this.pos.x, 0, player.pos.z - this.pos.z);
    const dist = toPlayer.length();
    this.distanceToPlayer = dist;
    const dirToPlayer = Math.atan2(toPlayer.x, toPlayer.z);
    this.pan = Math.sin(wrapAngle(dirToPlayer - player.yaw));

    this.attackCd = Math.max(0, this.attackCd - dt);
    this.roarCd = Math.max(0, this.roarCd - dt);
    this.lastHeardAge += dt;
    this.stateTime += dt;
    this.attackAnim = Math.max(0, this.attackAnim - dt);

    // acoustic detection from continuous player noise
    const noiseRange = (this.enraged ? 10 : 8) + (this.enraged ? 76 : 62) * player.noise;
    if (player.noise > 0.06 && dist < noiseRange) {
      this.hear(player.pos, player.noise, game);
    }
    // discrete noise events (doors, rocks, cores)
    if (game?.noiseEvents) {
      for (const ev of game.noiseEvents) {
        if (ev.heard || ev.age > 2.4) continue;
        const d = Math.hypot(ev.pos.x - this.pos.x, ev.pos.z - this.pos.z);
        if (d < 18 + 118 * ev.strength) {
          ev.heard = true;
          this.hear(ev.pos, ev.strength, game);
        }
      }
    }
    // near breathing detection, even when still
    if (dist < (player.crouchBlend > .5 ? 5.5 : 3.1) + (this.enraged ? 3 : 0) && player.health > 0) {
      this.lastHeard.copy(player.pos);
      this.lastHeardAge = 0;
      if (this.state !== 'hunt') {
        this.state = 'hunt'; this.stateTime = 0;
        if (game) { this.roar(game, dist); game.onMonsterAlert?.(); }
      }
    }

    if (this.state === 'hunt') {
      if (this.lastHeardAge < 1.15) {
        // pursue predicted player position with slight auditory error
        this.lastHeard.lerp(new THREE.Vector3(player.pos.x, 0, player.pos.z), Math.min(1, dt * (this.enraged ? 4.2 : 2.8)));
      } else {
        this.state = 'search';
        this.stateTime = 0;
        this.searchTimer = 7 + Math.random() * 4;
      }
    } else if (this.state === 'search') {
      this.searchTimer -= dt;
      if (this.searchTimer <= 0 || this.lastHeardAge > 14) {
        this.state = 'wander';
        this.stateTime = 0;
        this.wanderTimer = 0;
        this.wanderTarget = this.pickWanderTarget(this.pos);
      }
    } else {
      // wander
      this.wanderTimer -= dt;
      const dTarget = Math.hypot(this.wanderTarget.x - this.pos.x, this.wanderTarget.z - this.pos.z);
      if (dTarget < 4 || this.wanderTimer <= 0) {
        this.wanderTarget = this.pickWanderTarget(this.pos);
        this.wanderTimer = 11 + Math.random() * 16;
      }
    }

    // choose a movement target
    let target = this.wanderTarget;
    let desiredSpeed = 1.9;
    if (this.state === 'hunt') {
      target = this.lastHeard;
      desiredSpeed = this.maxSpeed;
      if (this.lastHeardAge > 2.5) desiredSpeed = this.maxSpeed * .55;
    } else if (this.state === 'search') {
      target = this.lastHeard;
      const dT = Math.hypot(target.x - this.pos.x, target.z - this.pos.z);
      if (dT < 3.5) {
        // circle / sniff around the last heard point
        const ang = time * .7 + this.phase;
        target = new THREE.Vector3(this.lastHeard.x + Math.cos(ang) * 4.5, 0, this.lastHeard.z + Math.sin(ang) * 4.5);
        desiredSpeed = 2.2;
      } else desiredSpeed = 4.2;
    }

    const dx = target.x - this.pos.x, dz = target.z - this.pos.z;
    const targetYaw = Math.atan2(dx, dz);
    const diff = wrapAngle(targetYaw - this.yaw);
    const speedRatio = clamp(this.speed / this.maxSpeed, 0, 1);
    // 50% turning resistance: high speed = wide sweeps
    const turnRate = (1.85 - speedRatio * 0.925) * (this.enraged ? 1.08 : 1);
    this.yaw += clamp(diff, -turnRate * dt, turnRate * dt);
    // slow down to turn
    if (Math.abs(diff) > 1.2 && this.speed > 4) desiredSpeed *= .55;

    this.speed = damp(this.speed, desiredSpeed, desiredSpeed > this.speed ? 2.2 : 4.5, dt);
    const step = this.speed * dt;
    const prevX = this.pos.x, prevZ = this.pos.z;
    this.pos.x += Math.sin(this.yaw) * step;
    this.pos.z += Math.cos(this.yaw) * step;

    // obstacle avoidance by probing ahead
    const probe = new THREE.Vector3(this.pos.x + Math.sin(this.yaw) * (1.4 + this.speed * .18), 0, this.pos.z + Math.cos(this.yaw) * (1.4 + this.speed * .18));
    const test = probe.clone();
    const blocked = this.world.resolveCollisions(test, this.radius);
    if (blocked) {
      const side = Math.sin(time * 2.1 + this.phase) > 0 ? 1 : -1;
      this.yaw += side * 1.9 * dt;
      this.pos.x -= Math.sin(this.yaw) * step * .2;
      this.pos.z -= Math.cos(this.yaw) * step * .2;
    }
    this.world.resolveCollisions(this.pos, this.radius);
    const actual = Math.hypot(this.pos.x - prevX, this.pos.z - prevZ);
    if (actual < step * .18) {
      this.stuck += dt;
      if (this.stuck > 1.2) {
        this.yaw += (Math.random() - .5) * 2.2;
        if (this.state === 'hunt') {
          this.state = 'search'; this.searchTimer = 5; this.stateTime = 0;
          this.stuck = 0;
        }
      }
    } else this.stuck = Math.max(0, this.stuck - dt * 2);
    this.pos.y = damp(this.pos.y, this.world.groundAt(this.pos.x, this.pos.z), 12, dt);

    // attack
    const facingPlayer = Math.abs(wrapAngle(dirToPlayer - this.yaw)) < .82;
    if (dist < 3.7 && this.attackCd <= 0 && facingPlayer && this.state !== 'wander') {
      this.attackCd = 2.5;
      this.attackAnim = .8;
      if (game) {
        game.audio.monsterRoar(this.pan, 1.2);
        player.takeDamage(46, this.pos, game);
        game.effects?.impact(new THREE.Vector3(player.pos.x, player.pos.y + 1.2, player.pos.z), 0x9b2a14, 18);
      }
    }

    // footfalls
    this.stepTravel += actual;
    const stride = this.speed > 5 ? 1.65 : 2.2;
    if (this.stepTravel > stride) {
      this.stepTravel = 0;
      if (game && dist < 55) game.audio.monsterStep(clamp(.3 - dist / 220, .02, .2), this.pan);
      if (game && dist < 80) game.effects?.dust(new THREE.Vector3(this.pos.x, this.pos.y + .1, this.pos.z), 3);
    }

    // spore trail
    this.trailTimer -= dt;
    if (this.trailTimer <= 0) {
      this.trailTimer = .35 + Math.random() * .4;
      if (game && dist < 75) game.effects?.spore(this.pos, this.yaw);
    }

    // ambient roars / breath
    if (this.state === 'hunt' && this.roarCd <= 0 && dist < 45) this.roar(game, dist);
    if (this.state === 'wander' && this.roarCd <= 0 && dist < 70 && Math.random() < dt * .05) this.roar(game, dist);
    this.breathTimer -= dt;
    if (dist < 14 && this.breathTimer <= 0) {
      this.breathTimer = 2.6 + Math.random() * 2;
      if (game) game.audio._noise({ dur: .6, gain: clamp(.03 - dist / 700, .004, .025), type: 'bandpass', freq: 320, endFreq: 120, q: 1.4, pan: this.pan });
    }

    // threat for HUD
    const threatRange = this.state === 'hunt' ? 68 : 25;
    this.threat = clamp(1 - dist / threatRange, 0, 1);
    if (this.state === 'hunt') this.threat = clamp(this.threat + .22, 0, 1);
    if (dist < 4) this.threat = 1;

    this.updateModel(dt, actual / Math.max(dt, .001));
    this.model.position.copy(this.pos);
    this.model.rotation.y = this.yaw;

    // flies
    const arr = this.flyGeo.attributes.position.array;
    for (let i = 0; i < this.flyBase.length; i++) {
      const b = this.flyBase[i];
      const a = b.a + time * b.s;
      arr[i * 3] = Math.cos(a) * b.r;
      arr[i * 3 + 1] = b.y + Math.sin(time * 2 + b.a) * .3;
      arr[i * 3 + 2] = Math.sin(a) * b.r;
    }
    this.flyGeo.attributes.position.needsUpdate = true;
    this.flies.position.copy(this.pos);
    this.glow.intensity = this.state === 'hunt' ? 3.0 : 1.8 + Math.sin(time * 1.4) * .3;
  }

  updateModel(dt, movedSpeed) {
    const t = performance.now() * .001;
    const walking = this.speed > .15;
    const run = clamp(this.speed / this.maxSpeed, 0, 1);
    const breathing = Math.sin(t * 1.6 + this.phase) * .02;
    const charge = this.state === 'hunt' ? clamp(run, 0, 1) : 0;
    const phase = t * (3.2 + run * 7.5) + this.phase;

    this.body.position.y = 1.52 - charge * .28 + (walking ? Math.abs(Math.sin(phase)) * .045 : 0);
    this.body.rotation.x = charge * .55 + (walking ? Math.sin(phase * 2) * .02 : breathing);
    this.body.rotation.z = walking ? Math.sin(phase) * .035 * (1 - charge * .4) : breathing;

    const swing = Math.sin(phase) * (walking ? (.34 + run * .52) : .015);
    const armBase = -0.12 + charge * 0.66;
    this.armL.shoulder.rotation.x = -swing + armBase;
    this.armR.shoulder.rotation.x = swing + armBase;
    this.armL.shoulder.rotation.z = -0.16 - charge * .12;
    this.armR.shoulder.rotation.z = 0.16 + charge * .12;
    this.armL.elbow.rotation.x = -0.25 - charge * .4 - Math.max(0, swing) * .45;
    this.armR.elbow.rotation.x = -0.25 - charge * .4 - Math.max(0, -swing) * .45;

    // attack smear
    if (this.attackAnim > 0) {
      const p = 1 - this.attackAnim / .8;
      const swipe = Math.sin(p * Math.PI);
      this.armR.shoulder.rotation.x = -1.8 + p * 3.2;
      this.armR.shoulder.rotation.z = .2 + swipe * .9;
      this.armL.shoulder.rotation.x = -1.2 + p * 2.2;
    }

    this.legL.hip.rotation.x = swing * .88 + charge * .2;
    this.legR.hip.rotation.x = -swing * .88 + charge * .2;
    this.legL.knee.rotation.x = Math.max(0, -swing) * 1.0 + charge * .25;
    this.legR.knee.rotation.x = Math.max(0, swing) * 1.0 + charge * .25;

    this.head.rotation.x = -charge * .32 + Math.sin(t * .9) * .02;
    this.head.rotation.y = this.state === 'search' ? Math.sin(t * .95) * .55 : Math.sin(t * .35) * .07;
    this.head.rotation.z = Math.sin(t * .5) * .02;

    // mouth widens when hunting/attacking
    const open = .55 + charge * .7 + (this.attackAnim > 0 ? Math.sin((1 - this.attackAnim / .8) * Math.PI) * .8 : 0) + Math.sin(t * 2.4 + this.phase) * .08;
    this.mouth.scale.y = 1 + open;
    this.jaw.position.y = -0.15 - open * .09;
    this.jaw.scale.y = 1 + open * .3;

    for (let i = 0; i < this.vines.length; i++) {
      const v = this.vines[i];
      v.rotation.x = Math.sin(t * 1.2 + i) * .12 + charge * .2;
      v.rotation.z = Math.cos(t * .9 + i * 2) * .1;
    }
  }

  getPanForListener(player) {
    const dx = this.pos.x - player.pos.x, dz = this.pos.z - player.pos.z;
    const ang = Math.atan2(dx, dz);
    return Math.sin(wrapAngle(ang - player.yaw));
  }
}
