import * as THREE from 'three';
import { mossSkinTexture, mossmanFaceTexture, makeTextTexture } from './textures.js';
import { angleDelta, clamp, damp, dampAngle, groundY, lerp } from './utils.js';

const _target = new THREE.Vector3();
const _desired = new THREE.Vector3();
const _temp = new THREE.Vector3();

export class Mossman {
  constructor(scene, callbacks = {}) {
    this.scene = scene;
    this.callbacks = callbacks;
    this.root = new THREE.Group();
    this.root.name = 'Mossman';
    scene.add(this.root);
    this.position = new THREE.Vector3(92, groundY(92, -74), -74);
    this.velocity = new THREE.Vector3();
    this.yaw = Math.PI * 0.6;
    this.visualYaw = this.yaw;
    this.speed = 0;
    this.radius = 1.05;
    this.height = 2.8;
    this.state = 'patrol';
    this.stateTimer = 0;
    this.lastHeard = new THREE.Vector3(92, 0, -74);
    this.lastHeardAge = 999;
    this.patrolTarget = new THREE.Vector3(92, 0, -74);
    this.suspicion = 0;
    this.aggression = 1;
    this.attackCooldown = 0;
    this.attackTimer = 0;
    this.roarCooldown = 0;
    this.stepAccum = 0;
    this.animPhase = 0;
    this.jawOpen = 0;
    this.chaseDuration = 0;
    this.searchAngle = 0;
    this.blockedTime = 0;
    this.avoidBias = 0;
    this.dead = false;
    this.elapsed = 0;
    this.spawnPoint = this.position.clone();
    this.materials = this.createMaterials();
    this.rig = this.buildModel();
    this.root.add(this.rig);
    this.createShadow();
    this.choosePatrolTarget();
    this.syncTransform();
  }

  createMaterials() {
    return {
      moss: new THREE.MeshStandardMaterial({ map: mossSkinTexture(), color: 0x93b47b, roughness: 0.98, metalness: 0 }),
      mossDark: new THREE.MeshStandardMaterial({ map: mossSkinTexture(), color: 0x527547, roughness: 1 }),
      mossDeep: new THREE.MeshStandardMaterial({ color: 0x203b25, roughness: 1 }),
      stripe: new THREE.MeshStandardMaterial({ color: 0x184b2b, roughness: 1 }),
      stripeLight: new THREE.MeshStandardMaterial({ color: 0x2a6a39, roughness: 1 }),
      face: new THREE.MeshStandardMaterial({ map: mossmanFaceTexture(), color: 0xa1b57d, roughness: 0.96 }),
      mouth: new THREE.MeshBasicMaterial({ color: 0x100504 }),
      gum: new THREE.MeshStandardMaterial({ color: 0x4c1814, roughness: 0.75 }),
      teeth: new THREE.MeshStandardMaterial({ color: 0xc7c09a, roughness: 0.65 }),
      claw: new THREE.MeshStandardMaterial({ color: 0x1b2116, roughness: 0.52 }),
      mossTuft: new THREE.MeshStandardMaterial({ map: mossSkinTexture(), color: 0x476d35, roughness: 1 }),
    };
  }

  addBox(parent, w, h, d, x, y, z, material, cast = true, rx = 0, ry = 0, rz = 0) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
    mesh.position.set(x, y, z);
    mesh.rotation.set(rx, ry, rz);
    mesh.castShadow = cast;
    mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  }

  addStripe(parent, w, h, d, x, y, z, rx = 0, ry = 0, rz = 0) {
    const mesh = this.addBox(parent, w, h, d, x, y, z, this.materials.stripe, false, rx, ry, rz);
    return mesh;
  }

  makeLimb(length, thickness, material, endMaterial) {
    const group = new THREE.Group();
    const upper = this.addBox(group, thickness, length, thickness, 0, -length / 2, 0, material);
    const elbow = new THREE.Group();
    elbow.position.y = -length;
    group.add(elbow);
    const lower = this.addBox(elbow, thickness * 0.85, length * 0.92, thickness * 0.85, 0, -length * 0.46, 0, material);
    const end = this.addBox(elbow, thickness * 1.04, length * 0.21, thickness * 1.0, 0, -length * 0.98, 0.025, endMaterial);
    return { group, elbow, upper, lower, end };
  }

  buildModel() {
    const m = this.materials;
    const rig = new THREE.Group();
    rig.name = 'MossmanRig';

    // Huge pelvis and torso.
    const pelvis = this.addBox(rig, 0.92, 0.5, 0.62, 0, 1.38, 0, m.moss);
    this.addBox(rig, 0.82, 0.18, 0.64, 0, 1.61, 0, m.mossDark);

    const torso = new THREE.Group();
    torso.position.set(0, 1.48, 0);
    rig.add(torso);
    this.torso = torso;
    this.addBox(torso, 1.02, 0.62, 0.66, 0, 0.31, 0, m.moss);
    this.addBox(torso, 1.55, 0.62, 0.8, 0, 0.69, 0, m.moss);
    this.addBox(torso, 1.24, 0.26, 0.72, 0, 0.19, 0.02, m.mossDark);
    // Broad shoulder shelves.
    for (const side of [-1, 1]) {
      this.addBox(torso, 0.56, 0.42, 0.74, side * 0.76, 0.82, 0, m.moss);
      this.addBox(torso, 0.42, 0.16, 0.55, side * 0.8, 1.01, 0, m.mossDark);
    }
    // Winding dark-green moss stripes.
    for (let i = 0; i < 7; i += 1) {
      const y = 0.32 + i * 0.09;
      this.addStripe(torso, 0.9 - i * 0.04, 0.035, 0.7, Math.sin(i * 2.1) * 0.06, y, 0.01, 0, 0, (i % 2 ? 1 : -1) * (0.18 + i * 0.015));
    }
    for (let i = 0; i < 8; i += 1) {
      this.addStripe(torso, 1.1 - i * 0.07, 0.028, 0.06, 0, 0.72 - i * 0.055, 0.39, 0, 0, (i % 2 ? 1 : -1) * 0.06);
    }
    this.addStripe(torso, 1.2, 0.06, 0.05, 0, 0.87, 0.385, 0, 0, 0.1);
    // Moss tufts / organic overgrowth.
    for (let i = 0; i < 16; i += 1) {
      this.addBox(torso, 0.15 + Math.random() * 0.3, 0.08 + Math.random() * 0.18, 0.12 + Math.random() * 0.24,
        -0.7 + Math.random() * 1.4, 0.25 + Math.random() * 0.75, -0.34 + Math.random() * 0.12,
        m.mossTuft, false);
    }
    // Back mass / hunched spine.
    this.addBox(torso, 0.88, 0.62, 0.36, 0, 0.62, -0.44, m.mossDark);
    for (let i = 0; i < 5; i += 1) {
      this.addBox(torso, 0.5 - i * 0.04, 0.12, 0.12, 0, 0.9 - i * 0.13, -0.62, m.mossDeep, false);
    }

    // Head, eyeless face, and massive mouth.
    const head = new THREE.Group();
    head.position.set(0, 1.02, 0.07);
    torso.add(head);
    this.head = head;
    this.addBox(head, 0.72, 0.56, 0.6, 0, 0, 0, m.mossDark);
    this.addBox(head, 0.66, 0.2, 0.64, 0, 0.31, -0.01, m.moss);
    this.addBox(head, 0.58, 0.39, 0.12, 0, -0.02, 0.31, m.face);
    // Brow ridge but no eyes whatsoever.
    this.addBox(head, 0.64, 0.1, 0.17, 0, 0.22, 0.28, m.mossDeep);
    this.addBox(head, 0.46, 0.07, 0.09, 0, 0.16, 0.35, m.mossDeep);
    // Wide mouth cavity.
    this.addBox(head, 0.52, 0.16, 0.05, 0, -0.12, 0.365, m.mouth, false);
    // Top teeth.
    for (let i = 0; i < 9; i += 1) {
      this.addBox(head, 0.042, 0.075, 0.04, -0.2 + i * 0.05, -0.06, 0.39, m.teeth, false);
    }
    // Lower jaw rig.
    const jaw = new THREE.Group();
    jaw.position.set(0, -0.17, 0.16);
    head.add(jaw);
    this.jaw = jaw;
    this.addBox(jaw, 0.56, 0.16, 0.16, 0, -0.05, 0.18, m.mossDark);
    this.addBox(jaw, 0.46, 0.08, 0.06, 0, 0.01, 0.265, m.gum, false);
    for (let i = 0; i < 8; i += 1) {
      this.addBox(jaw, 0.035, 0.06, 0.035, -0.17 + i * 0.048, 0.045, 0.28, m.teeth, false);
    }
    // Cracked, mossy brow plates.
    this.addStripe(head, 0.32, 0.025, 0.05, -0.12, 0.1, 0.36, 0, 0, -0.1);
    this.addStripe(head, 0.22, 0.025, 0.05, 0.18, 0.1, 0.36, 0, 0, 0.12);
    // Cheek tufts.
    for (const side of [-1, 1]) {
      this.addBox(head, 0.15, 0.18, 0.2, side * 0.35, -0.16, 0.18, m.mossTuft, false);
      this.addBox(head, 0.08, 0.3, 0.34, side * 0.36, 0.02, -0.03, m.mossDark);
    }
    this.mouthLight = new THREE.PointLight(0xff4e2c, 0.5, 2.2, 2);
    this.mouthLight.position.set(0, -0.1, 0.6);
    head.add(this.mouthLight);

    // Long, heavy arms.
    this.arms = [];
    for (const side of [-1, 1]) {
      const shoulder = new THREE.Group();
      shoulder.position.set(side * 0.88, 0.8, 0);
      torso.add(shoulder);
      this.addBox(shoulder, 0.5, 0.58, 0.62, 0, -0.02, 0, m.moss);
      const arm = this.makeLimb(0.76, 0.4, m.moss, m.mossDark);
      arm.group.position.y = -0.12;
      shoulder.add(arm.group);
      // Wrist/knuckle.
      this.addBox(arm.elbow, 0.46, 0.26, 0.36, 0, -0.77, 0.05, m.mossDark);
      for (let f = 0; f < 3; f += 1) {
        this.addBox(arm.elbow, 0.08, 0.16, 0.09, -0.12 + f * 0.12, -0.9, 0.14, m.claw, false, 0.15);
      }
      for (let i = 0; i < 4; i += 1) {
        this.addStripe(arm.group, 0.41, 0.03, 0.4, 0, -0.16 - i * 0.13, 0, 0, 0, 0.35);
      }
      for (let i = 0; i < 3; i += 1) {
        this.addBox(arm.group, 0.08, 0.28 + Math.random() * 0.22, 0.1, side * 0.22, -0.2 - i * 0.17, -0.05, m.mossTuft, false);
      }
      this.arms.push({ side, shoulder, ...arm });
    }

    // Legs.
    this.legs = [];
    for (const side of [-1, 1]) {
      const hip = new THREE.Group();
      hip.position.set(side * 0.31, 1.27, 0);
      rig.add(hip);
      const leg = this.makeLimb(0.62, 0.42, m.moss, m.mossDark);
      hip.add(leg.group);
      this.addBox(leg.elbow, 0.4, 0.16, 0.62, 0, -0.57, 0.11, m.mossDark);
      for (let f = 0; f < 3; f += 1) {
        this.addBox(leg.elbow, 0.1, 0.15, 0.13, -0.13 + f * 0.13, -0.58, 0.32, m.claw, false, 0.35);
      }
      for (let i = 0; i < 4; i += 1) {
        this.addStripe(leg.group, 0.43, 0.03, 0.42, 0, -0.1 - i * 0.13, 0, 0, 0, -0.3);
      }
      this.legs.push({ side, hip, ...leg });
    }

    // Hanging moss around the shoulders.
    for (let i = 0; i < 15; i += 1) {
      const side = i % 2 ? -1 : 1;
      this.addBox(torso, 0.05, 0.18 + Math.random() * 0.5, 0.05,
        side * (0.45 + Math.random() * 0.55), 0.55 - Math.random() * 0.18, -0.2 + Math.random() * 0.5,
        m.mossTuft, false);
    }

    rig.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
    return rig;
  }

  createShadow() {
    const geo = new THREE.CircleGeometry(1.15, 12);
    const mat = new THREE.MeshBasicMaterial({ color: 0x020402, transparent: true, opacity: 0.58, depthWrite: false });
    this.shadow = new THREE.Mesh(geo, mat);
    this.shadow.rotation.x = -Math.PI / 2;
    this.scene.add(this.shadow);
  }

  syncTransform() {
    this.root.position.copy(this.position);
    this.root.rotation.y = this.visualYaw;
    this.shadow.position.set(this.position.x, groundY(this.position.x, this.position.z) + 0.03, this.position.z);
  }

  setState(next, reason = '') {
    if (this.state === next) return;
    const previous = this.state;
    this.state = next;
    this.stateTimer = 0;
    if (next === 'chase') {
      this.chaseDuration = 0;
      if (this.roarCooldown <= 0) {
        this.roarCooldown = 7;
        this.callbacks.onRoar?.(this.position, previous);
      }
    }
    if (next === 'alert') {
      this.callbacks.onAlert?.({ position: this.position.clone(), previous, reason });
    }
    this.callbacks.onStateChange?.(next, previous, reason);
  }

  choosePatrolTarget() {
    const angle = Math.random() * Math.PI * 2;
    const radius = 70 + Math.random() * 120;
    let x = Math.cos(angle) * radius;
    let z = Math.sin(angle) * radius;
    if (Math.hypot(x, z) < 35) {
      x *= 2.1;
      z *= 2.1;
    }
    this.patrolTarget.set(clamp(x, -220, 220), 0, clamp(z, -220, 220));
    this.stateTimer = 0;
  }

  hearNoise(event) {
    if (this.dead) return;
    const distance = this.position.distanceTo(event.position);
    const radius = event.radius * this.aggression;
    if (distance > radius) return;
    const loudness = clamp(event.loudness * (1 - distance / radius), 0, 1);
    this.lastHeard.copy(event.position);
    this.lastHeardAge = 0;
    this.suspicion = clamp(this.suspicion + loudness * 1.45 + 0.12, 0, 1);

    if (this.state === 'patrol' || this.state === 'investigate' || this.state === 'search') {
      if ((event.type === 'door' && distance < 90) || (event.type === 'sprint' && loudness > 0.32) || (event.type === 'sprint' && distance < 55)) {
        this.setState('chase', event.type);
      } else if (this.state !== 'chase') {
        this.setState('investigate', event.type);
        this.stateTimer = 0;
      }
    }
    if (this.state === 'chase' && loudness > 0.2) {
      // Keep a fresh fix on the running target.
      this.lastHeard.copy(event.position);
      this.lastHeardAge = 0;
    }
    this.callbacks.onHear?.({ event, distance, loudness });
  }

  escalate() {
    this.aggression = Math.min(1.55, this.aggression + 0.18);
    this.suspicion = Math.min(1, this.suspicion + 0.4);
  }

  isBlocked(x, z, lab, jungle) {
    const r = this.radius;
    if (Math.abs(x) > 244 || Math.abs(z) > 244) return true;
    // The laboratory is a true sanctuary: Mossman cannot cross its footprint.
    if (lab.isInside(x, z, -1.0)) return true;
    for (const c of lab.colliders) {
      if (!c.active) continue;
      if (x + r > c.minX && x - r < c.maxX && z + r > c.minZ && z - r < c.maxZ) return true;
    }
    if (!lab.isInside(x, z, 0.3) && jungle.collidesAt(x, z, r)) return true;
    return false;
  }

  moveTowards(target, dt, targetSpeed, lab, jungle, playerInside) {
    _desired.copy(target).sub(this.position);
    _desired.y = 0;
    const dist = _desired.length();
    if (dist < 0.01) return 0;
    _desired.normalize();
    const desiredYaw = Math.atan2(_desired.x, _desired.z);
    const speedRatio = clamp(this.speed / 9.17, 0, 1);
    const maxTurn = 1.65 - speedRatio * 0.9;
    let delta = angleDelta(this.yaw, desiredYaw);
    delta = clamp(delta, -maxTurn * dt, maxTurn * dt);
    this.yaw += delta;
    // Momentum with deliberate, heavy inertia.
    const accel = targetSpeed > this.speed ? 3.2 : 4.2;
    this.speed = damp(this.speed, targetSpeed, accel, dt);
    _temp.set(Math.sin(this.yaw), 0, Math.cos(this.yaw)).multiplyScalar(this.speed);
    this.velocity.x = damp(this.velocity.x, _temp.x + this.avoidBias * this.speed * 0.35, 3, dt);
    this.velocity.z = damp(this.velocity.z, _temp.z + this.avoidBias * this.speed * 0.35, 3, dt);

    let nx = this.position.x + this.velocity.x * dt;
    let nz = this.position.z + this.velocity.z * dt;
    let blocked = false;
    if (!this.isBlocked(nx, this.position.z, lab, jungle)) {
      this.position.x = nx;
    } else {
      blocked = true;
      this.velocity.x *= -0.08;
      this.avoidBias = this.avoidBias || (Math.random() > 0.5 ? 1 : -1);
    }
    if (!this.isBlocked(this.position.x, nz, lab, jungle)) {
      this.position.z = nz;
    } else {
      blocked = true;
      this.velocity.z *= -0.08;
      this.avoidBias = this.avoidBias || (Math.random() > 0.5 ? 1 : -1);
    }
    if (blocked) {
      this.blockedTime += dt;
      if (this.blockedTime > 0.45) {
        this.avoidBias = this.avoidBias > 0 ? -1 : 1;
        this.blockedTime = 0;
      }
      // If pressed against the lab with a player inside, wait and roar.
      if (playerInside && lab.isInside(this.position.x, this.position.z, -2.0)) {
        this.setState('lurk', 'sanctuary');
      }
    } else {
      this.blockedTime = Math.max(0, this.blockedTime - dt * 0.5);
      if (this.state !== 'lurk') this.avoidBias = damp(this.avoidBias, 0, 2.5, dt);
    }
    this.position.y = groundY(this.position.x, this.position.z);
    return dist;
  }

  update(dt, player, lab, jungle) {
    if (this.dead) return;
    this.elapsed += dt;
    this.stateTimer += dt;
    this.lastHeardAge += dt;
    this.attackCooldown = Math.max(0, this.attackCooldown - dt);
    this.roarCooldown = Math.max(0, this.roarCooldown - dt);
    this.suspicion = Math.max(0, this.suspicion - dt * (this.state === 'chase' ? 0.018 : 0.04));
    const playerInside = player.inside;
    const distance = this.position.distanceTo(player.position);
    const hearingThreshold = playerInside ? 5 : 13;

    // Breathing, footsteps and the player's close-range presence can give
    // them away even without a deliberate noise event.
    if (!playerInside && distance < hearingThreshold && player.noise > 0.04) {
      this.lastHeard.copy(player.position);
      this.lastHeardAge = 0;
      this.suspicion = Math.min(1, this.suspicion + dt * 0.6);
    }
    if (!playerInside && distance < 6.5) {
      this.lastHeard.copy(player.position);
      this.lastHeardAge = 0;
      if (this.state !== 'chase' && this.state !== 'attack') this.setState('chase', 'proximity');
    }

    if (this.state === 'patrol') {
      const d = this.moveTowards(this.patrolTarget, dt, 2.15, lab, jungle, playerInside);
      if (d < 4 || this.stateTimer > 24) this.choosePatrolTarget();
      if (this.state === 'patrol' && this.suspicion > 0.6) this.setState('investigate', 'suspicion');
    } else if (this.state === 'investigate') {
      const target = this.lastHeardAge < 7 ? this.lastHeard : this.patrolTarget;
      const d = this.moveTowards(target, dt, 4.25 + this.aggression * 0.5, lab, jungle, playerInside);
      if (d < 3.4 || this.stateTimer > 28) {
        this.setState('search', 'arrived');
        this.searchAngle = this.yaw;
      }
    } else if (this.state === 'chase') {
      this.chaseDuration += dt;
      // Blind pursuit: it runs to the freshest acoustic fix, not the player's
      // live position. A silent, stationary player can break the lock.
      let target = this.lastHeard.clone();
      const lead = clamp(this.lastHeardAge * 0.8, 0, 4.6);
      if (this.lastHeardAge < 2.1) {
        target.x += Math.sin(player.yaw) * lead * 0.4;
        target.z += Math.cos(player.yaw) * lead * 0.4;
      }
      if (playerInside) {
        // Circle the bunker, denied entry.
        const dLab = Math.hypot(this.position.x, this.position.z);
        const angle = Math.atan2(this.position.z, this.position.x) + dt * 0.3;
        target.set(Math.cos(angle) * 12.5, 0, Math.sin(angle) * 12.5);
        if (dLab < 11.4) this.setState('lurk', 'sanctuary');
      }
      const d = this.moveTowards(target, dt, 9.17, lab, jungle, playerInside);
      if (playerInside && lab.isInside(this.position.x, this.position.z, -1.5)) this.setState('lurk', 'sanctuary');
      if (this.lastHeardAge > 8.5 || (d < 2.2 && this.lastHeardAge > 4.5)) {
        this.setState('search', 'lost');
        this.searchAngle = this.yaw;
      }
      if (distance < 2.65 && !playerInside) this.startAttack(player);
    } else if (this.state === 'search') {
      this.searchAngle += dt * 0.85;
      const sp = this.position;
      const target = _target.set(sp.x + Math.sin(this.searchAngle) * 3.8, 0, sp.z + Math.cos(this.searchAngle) * 3.8);
      this.moveTowards(target, dt, 1.55, lab, jungle, playerInside);
      if (this.stateTimer > 7.5) {
        this.setState('patrol', 'search exhausted');
        this.choosePatrolTarget();
      }
    } else if (this.state === 'lurk') {
      this.speed = damp(this.speed, 0, 6, dt);
      this.velocity.multiplyScalar(Math.exp(-4 * dt));
      const angle = Math.atan2(-this.position.z, -this.position.x);
      this.yaw = dampAngle(this.yaw, angle, 1.5, dt);
      if (!playerInside) {
        this.setState('investigate', 'player emerged');
        this.lastHeard.copy(player.position);
        this.lastHeardAge = 0;
      }
    } else if (this.state === 'attack') {
      this.attackTimer += dt;
      this.speed = damp(this.speed, 0, 8, dt);
      this.jawOpen = damp(this.jawOpen, 1, 12, dt);
      if (this.attackTimer > 0.38 && this.attackTimer < 0.48 && distance < 3.2 && !playerInside) {
        if (player.applyDamage(34, this)) {
          this.callbacks.onHit?.(this.position);
        }
      }
      if (this.attackTimer > 1.15) {
        this.setState(distance < 14 && !playerInside ? 'chase' : 'search', 'attack recovered');
        this.searchAngle = this.yaw;
      }
    }

    // Barge the player aside if overlap occurs.
    if (!playerInside && distance < 1.8) {
      const dx = player.position.x - this.position.x;
      const dz = player.position.z - this.position.z;
      const len = Math.hypot(dx, dz) || 1;
      player.position.x += (dx / len) * (1.8 - distance) * 0.2;
      player.position.z += (dz / len) * (1.8 - distance) * 0.2;
    }

    if (distance < 75) {
      this.stepAccum += this.speed * dt;
      const stride = this.state === 'chase' ? 1.75 : 2.3;
      if (this.stepAccum > stride && this.speed > 0.5) {
        this.stepAccum = 0;
        this.callbacks.onStep?.({ position: this.position.clone(), intensity: this.state === 'chase' ? 1 : 0.45 });
      }
    }

    this.visualYaw = dampAngle(this.visualYaw, this.yaw, this.state === 'chase' ? 5.5 : 4.5, dt);
    this.updateAnimation(dt, player);
    this.syncTransform();
  }

  startAttack(player) {
    if (this.attackCooldown > 0) return;
    this.attackCooldown = 1.9;
    this.attackTimer = 0;
    this.setState('attack', 'maul');
    this.callbacks.onAttack?.({ position: this.position.clone() });
  }

  updateAnimation(dt, player) {
    const speedFactor = clamp(this.speed / 9.17, 0, 1);
    this.animPhase += dt * (1.0 + this.speed * 1.38);
    const phase = this.animPhase;
    const stride = (0.2 + speedFactor * 0.9) * clamp(this.speed / 2, 0, 1);
    const lope = this.state === 'chase' ? 1 : 0;
    this.rig.position.y = Math.sin(phase * 2) * 0.025 * speedFactor;
    this.rig.rotation.x = 0.04 + lope * 0.1;
    this.torso.rotation.x = 0.08 + lope * 0.18 + Math.sin(phase * 2) * 0.015 * speedFactor;
    this.torso.rotation.z = Math.sin(phase) * 0.06 * speedFactor;
    this.head.rotation.x = -0.04 + Math.sin(phase * 2 + 1) * 0.025 * speedFactor + (this.state === 'search' ? 0.08 : 0);
    this.head.rotation.y = this.state === 'search' ? Math.sin(this.elapsed * 1.7) * 0.42 : Math.sin(phase * 0.5) * 0.03;
    const jawTarget = this.state === 'attack' || this.state === 'chase' ? 0.45 + Math.sin(phase * 2) * 0.18 : 0.08 + Math.sin(this.elapsed * 0.8) * 0.03;
    this.jawOpen = damp(this.jawOpen, jawTarget, 8, dt);
    this.jaw.rotation.x = this.jawOpen;
    this.mouthLight.intensity = 0.2 + this.jawOpen * 0.9;

    for (const arm of this.arms) {
      const sign = arm.side;
      const s = Math.sin(phase + (sign < 0 ? 0 : Math.PI));
      arm.shoulder.rotation.x = 0.15 + s * stride * 0.85 + lope * 0.2;
      arm.shoulder.rotation.z = sign * (0.09 + speedFactor * 0.13);
      arm.elbow.rotation.x = -0.25 - Math.max(0, -s) * 0.35 * speedFactor - lope * 0.2;
      if (this.state === 'attack' && this.attackTimer < 0.5) {
        arm.shoulder.rotation.x = -1.35 + this.attackTimer * 1.4;
        arm.elbow.rotation.x = -0.2;
      }
    }
    for (const leg of this.legs) {
      const s = Math.sin(phase + (leg.side < 0 ? Math.PI : 0));
      leg.hip.rotation.x = -s * stride * 0.78;
      leg.elbow.rotation.x = 0.15 + Math.max(0, s) * 0.55 * speedFactor;
    }
    // Barely perceptible breathing.
    this.torso.scale.setScalar(1 + Math.sin(this.elapsed * 1.8) * 0.006);
    this.materials.moss.emissive = this.materials.moss.emissive || new THREE.Color(0x000000);
  }

  getThreatInfo(player) {
    return {
      state: this.state,
      distance: this.position.distanceTo(player.position),
      suspicion: this.suspicion,
      lastHeard: this.lastHeard,
      lastHeardAge: this.lastHeardAge,
      position: this.position,
      visible: this.state === 'chase' || this.state === 'attack' || this.state === 'lurk',
    };
  }

  reset() {
    this.position.copy(this.spawnPoint);
    this.velocity.set(0, 0, 0);
    this.state = 'patrol';
    this.stateTimer = 0;
    this.speed = 0;
    this.suspicion = 0;
    this.aggression = 1;
    this.lastHeardAge = 999;
    this.dead = false;
    this.choosePatrolTarget();
    this.syncTransform();
  }
}
