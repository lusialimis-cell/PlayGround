import * as THREE from 'three';
import { furTexture, skinTexture, makeTextTexture } from './textures.js';
import { clamp, damp, dampAngle, groundY, lerp, terrainSlope } from './utils.js';

const _dir = new THREE.Vector3();
const _slope = new THREE.Vector3();
const LAB_DOOR_HALF = 1.65;

export class Player {
  constructor(scene, callbacks = {}) {
    this.scene = scene;
    this.callbacks = callbacks;
    this.root = new THREE.Group();
    this.root.name = 'ApePlayer';
    scene.add(this.root);
    this.position = new THREE.Vector3(0, 0, 3.5);
    this.velocity = new THREE.Vector3();
    this.verticalVelocity = 0;
    this.radius = 0.38;
    this.health = 100;
    this.maxHealth = 100;
    this.stamina = 100;
    this.fear = 0;
    this.yaw = Math.PI;
    this.visualYaw = Math.PI;
    this.onGround = true;
    this.sprinting = false;
    this.crouching = false;
    this.moving = false;
    this.speed = 0;
    this.noise = 0;
    this.noisePulse = 0;
    this.inside = true;
    this.hurtCooldown = 0;
    this.invulnerable = 0;
    this.dead = false;
    this.stepAccum = 0;
    this.animPhase = 0;
    this.quadBlend = 0;
    this.crouchBlend = 0;
    this.walkBlend = 0;
    this.breath = Math.random() * 10;
    this.materials = this.createMaterials();
    this.rig = this.buildModel();
    this.root.add(this.rig);
    this.createShadow();
    this.syncTransform();
  }

  createMaterials() {
    const fur = furTexture();
    return {
      fur: new THREE.MeshStandardMaterial({ map: fur, color: 0xa78665, roughness: 0.95, metalness: 0.02 }),
      furDark: new THREE.MeshStandardMaterial({ map: fur, color: 0x665443, roughness: 0.98 }),
      furLight: new THREE.MeshStandardMaterial({ map: fur, color: 0xbf966e, roughness: 0.94 }),
      skin: new THREE.MeshStandardMaterial({ map: skinTexture(), color: 0xd1a57d, roughness: 0.9 }),
      skinDark: new THREE.MeshStandardMaterial({ map: skinTexture(), color: 0x8f684e, roughness: 0.92 }),
      eye: new THREE.MeshBasicMaterial({ color: 0xf1bd63, toneMapped: false }),
      pupil: new THREE.MeshBasicMaterial({ color: 0x0c0906 }),
      harness: new THREE.MeshStandardMaterial({ color: 0x8b7736, roughness: 0.78, metalness: 0.18 }),
      harnessDark: new THREE.MeshStandardMaterial({ color: 0x3d3f2b, roughness: 0.85 }),
      metal: new THREE.MeshStandardMaterial({ color: 0x53625a, roughness: 0.5, metalness: 0.7 }),
      led: new THREE.MeshBasicMaterial({ color: 0x9ef46a, toneMapped: false }),
      ledAmber: new THREE.MeshBasicMaterial({ color: 0xffa94d, toneMapped: false }),
      patch: new THREE.MeshBasicMaterial({
        map: makeTextTexture('AP', { width: 64, height: 64, size: 34, color: '#d5c982', bg: '#3a3523' }),
        toneMapped: false,
      }),
      pack: new THREE.MeshStandardMaterial({ color: 0x35422f, roughness: 0.9 }),
    };
  }

  addBox(parent, w, h, d, x, y, z, material, cast = true) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
    mesh.position.set(x, y, z);
    mesh.castShadow = cast;
    mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  }

  makeLimb(length, thickness, material, handMaterial) {
    const group = new THREE.Group();
    const upper = this.addBox(group, thickness, length, thickness, 0, -length / 2, 0, material);
    const elbow = new THREE.Group();
    elbow.position.y = -length;
    group.add(elbow);
    const lower = this.addBox(elbow, thickness * 0.82, length * 0.92, thickness * 0.82, 0, -length * 0.46, 0, material);
    const hand = this.addBox(elbow, thickness * 1.02, length * 0.2, thickness * 0.92, 0, -length * 0.98, 0.03, handMaterial);
    return { group, elbow, upper, lower, hand };
  }

  buildModel() {
    const m = this.materials;
    const rig = new THREE.Group();
    rig.name = 'ApeRig';

    const pelvis = this.addBox(rig, 0.56, 0.38, 0.4, 0, 0.92, 0, m.fur);
    this.addBox(rig, 0.49, 0.12, 0.42, 0, 1.08, 0, m.furDark);

    const torso = new THREE.Group();
    torso.position.set(0, 0.94, 0);
    rig.add(torso);
    this.torso = torso;
    this.addBox(torso, 0.64, 0.54, 0.44, 0, 0.35, 0, m.fur);
    this.addBox(torso, 0.82, 0.48, 0.47, 0, 0.65, 0, m.fur);
    this.addBox(torso, 0.58, 0.23, 0.46, 0, 0.28, 0.015, m.furDark);
    // Chest fur tufts.
    for (let i = 0; i < 6; i += 1) {
      this.addBox(torso, 0.1 + (i % 2) * 0.06, 0.2, 0.08, -0.18 + i * 0.07, 0.56 + Math.sin(i * 2) * 0.05, 0.25, m.furLight, false);
    }
    // Harness straps and a field pack.
    this.addBox(torso, 0.08, 0.58, 0.49, -0.24, 0.42, 0, m.harness, false);
    this.addBox(torso, 0.08, 0.58, 0.49, 0.24, 0.42, 0, m.harness, false);
    this.addBox(torso, 0.66, 0.09, 0.48, 0, 0.2, 0, m.harness, false);
    this.addBox(torso, 0.42, 0.12, 0.06, 0, 0.37, 0.27, m.harnessDark, false);
    this.addBox(torso, 0.1, 0.05, 0.03, -0.13, 0.37, 0.305, m.led, false);
    this.addBox(torso, 0.1, 0.05, 0.03, 0.0, 0.37, 0.305, m.ledAmber, false);
    this.addBox(torso, 0.52, 0.55, 0.24, 0, 0.53, -0.34, m.pack);
    this.addBox(torso, 0.36, 0.1, 0.25, 0, 0.83, -0.37, m.harnessDark);
    this.addBox(torso, 0.13, 0.13, 0.02, -0.13, 0.55, -0.475, m.led, false);
    this.addBox(torso, 0.14, 0.14, 0.015, 0.1, 0.55, -0.477, m.patch, false);

    // Head and face.
    const head = new THREE.Group();
    head.position.set(0, 0.94, 0.015);
    torso.add(head);
    this.head = head;
    this.addBox(head, 0.47, 0.44, 0.45, 0, 0, 0, m.furDark);
    this.addBox(head, 0.5, 0.14, 0.46, 0, 0.19, 0, m.fur);
    this.addBox(head, 0.35, 0.24, 0.18, 0, -0.05, 0.28, m.skin);
    this.addBox(head, 0.27, 0.1, 0.1, 0, 0.02, 0.38, m.skinDark);
    this.addBox(head, 0.09, 0.05, 0.06, -0.07, -0.04, 0.39, m.skinDark, false);
    this.addBox(head, 0.09, 0.05, 0.06, 0.07, -0.04, 0.39, m.skinDark, false);
    // Brow, eyes, ears.
    this.addBox(head, 0.47, 0.09, 0.18, 0, 0.18, 0.22, m.furDark, false);
    for (const side of [-1, 1]) {
      this.addBox(head, 0.075, 0.075, 0.03, side * 0.115, 0.105, 0.229, m.eye, false);
      this.addBox(head, 0.035, 0.04, 0.02, side * 0.115, 0.1, 0.247, m.pupil, false);
      this.addBox(head, 0.13, 0.19, 0.08, side * 0.285, 0.02, 0.0, m.furDark);
    }
    // Pixel scars and headset.
    this.addBox(head, 0.05, 0.15, 0.02, -0.16, 0.06, 0.229, m.furLight, false);
    this.addBox(head, 0.07, 0.25, 0.36, 0.3, 0.08, 0, m.harnessDark);
    this.addBox(head, 0.09, 0.09, 0.06, 0.3, 0.08, 0.18, m.led, false);
    this.addBox(head, 0.035, 0.28, 0.035, 0.29, 0.0, -0.14, m.metal, false);
    this.addBox(head, 0.16, 0.05, 0.05, 0.22, -0.13, -0.06, m.metal, false);

    // Arms: long and powerful.
    this.arms = [];
    for (const side of [-1, 1]) {
      const shoulder = new THREE.Group();
      shoulder.position.set(side * 0.48, 0.66, 0);
      torso.add(shoulder);
      this.addBox(shoulder, 0.26, 0.30, 0.34, 0, 0.02, 0, m.fur);
      const arm = this.makeLimb(0.48, 0.25, m.fur, m.skin);
      arm.group.position.y = -0.04;
      shoulder.add(arm.group);
      // Forearm fur drift.
      this.addBox(arm.elbow, 0.18, 0.34, 0.14, side * 0.11, -0.28, 0, m.furDark, false);
      this.arms.push({ side, shoulder, ...arm });
    }

    // Legs.
    this.legs = [];
    for (const side of [-1, 1]) {
      const hip = new THREE.Group();
      hip.position.set(side * 0.19, 0.85, 0);
      rig.add(hip);
      const leg = this.makeLimb(0.43, 0.25, m.fur, m.skin);
      hip.add(leg.group);
      this.addBox(leg.elbow, 0.22, 0.16, 0.34, 0, -0.47, 0.07, m.skinDark);
      this.legs.push({ side, hip, ...leg });
    }

    // Tail.
    this.tail = new THREE.Group();
    this.tail.position.set(0, 1.02, -0.22);
    rig.add(this.tail);
    this.addBox(this.tail, 0.1, 0.28, 0.1, 0, -0.09, -0.02, m.furDark);
    this.addBox(this.tail, 0.12, 0.12, 0.12, 0, -0.25, -0.02, m.fur);

    // Wrist computer.
    this.addBox(this.arms[0].elbow, 0.2, 0.12, 0.22, 0, -0.56, 0.02, m.metal);
    this.addBox(this.arms[0].elbow, 0.14, 0.05, 0.17, 0, -0.56, 0.14, m.led, false);

    rig.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
    return rig;
  }

  createShadow() {
    const geo = new THREE.CircleGeometry(0.55, 12);
    const mat = new THREE.MeshBasicMaterial({ color: 0x020402, transparent: true, opacity: 0.38, depthWrite: false });
    this.shadow = new THREE.Mesh(geo, mat);
    this.shadow.rotation.x = -Math.PI / 2;
    this.shadow.renderOrder = 2;
    this.scene.add(this.shadow);
  }

  syncTransform() {
    this.root.position.copy(this.position);
    this.root.rotation.y = this.visualYaw;
    this.shadow.position.set(this.position.x, groundY(this.position.x, this.position.z) + 0.025, this.position.z);
    this.shadow.material.opacity = this.inside ? 0.23 : 0.34;
  }

  collidesAt(x, z, lab, jungle) {
    const r = this.radius;
    if (Math.abs(x) > 246 || Math.abs(z) > 246) return true;
    for (const c of lab.colliders) {
      if (!c.active) continue;
      if (x + r > c.minX && x - r < c.maxX && z + r > c.minZ && z - r < c.maxZ) return true;
    }
    if (!lab.isInside(x, z, -0.3)) {
      if (jungle.collidesAt(x, z, r)) return true;
    }
    return false;
  }

  update(dt, input, lab, jungle, enemies = []) {
    if (this.dead) {
      this.updateAnimation(dt, lab);
      return;
    }
    this.hurtCooldown = Math.max(0, this.hurtCooldown - dt);
    this.invulnerable = Math.max(0, this.invulnerable - dt);
    const move = input.move;
    const hasInput = move.lengthSq() > 0.01;
    const canSprint = !this.crouching && this.stamina > 2 && hasInput;
    this.sprinting = !!input.sprint && canSprint;
    this.crouching = !!input.crouch;

    const targetSpeed = this.crouching
      ? 1.28
      : this.sprinting
        ? 6.85
        : hasInput ? 3.15 : 0;

    if (hasInput) {
      _dir.set(move.x, 0, move.z).normalize();
      this.yaw = Math.atan2(_dir.x, _dir.z);
    }
    const desiredVX = hasInput ? _dir.x * targetSpeed : 0;
    const desiredVZ = hasInput ? _dir.z * targetSpeed : 0;
    const accel = hasInput ? (this.sprinting ? 9.5 : 12) : 15;
    this.velocity.x = damp(this.velocity.x, desiredVX, accel, dt);
    this.velocity.z = damp(this.velocity.z, desiredVZ, accel, dt);
    const trueSpeed = Math.hypot(this.velocity.x, this.velocity.z);
    this.speed = trueSpeed;
    this.moving = trueSpeed > 0.12;

    if (this.sprinting) {
      this.stamina = Math.max(0, this.stamina - dt * 16.5);
    } else {
      this.stamina = Math.min(100, this.stamina + dt * (this.crouching ? 15 : 10));
    }
    if (this.stamina <= 0.2) this.sprinting = false;

    // Horizontal movement resolved separately for sliding collision response.
    const nx = this.position.x + this.velocity.x * dt;
    if (!this.collidesAt(nx, this.position.z, lab, jungle)) {
      this.position.x = nx;
    } else {
      this.velocity.x *= 0.18;
    }
    const nz = this.position.z + this.velocity.z * dt;
    if (!this.collidesAt(this.position.x, nz, lab, jungle)) {
      this.position.z = nz;
    } else {
      this.velocity.z *= 0.18;
    }
    // Character separation.
    for (const enemy of enemies) {
      if (!enemy || enemy.dead) continue;
      const dx = this.position.x - enemy.position.x;
      const dz = this.position.z - enemy.position.z;
      const d = Math.hypot(dx, dz);
      const min = 0.7 + enemy.radius;
      if (d > 0.001 && d < min) {
        this.position.x = enemy.position.x + (dx / d) * min;
        this.position.z = enemy.position.z + (dz / d) * min;
      }
    }

    const terrain = groundY(this.position.x, this.position.z);
    const isLabFloor = lab.isInside(this.position.x, this.position.z, 0.15);
    const floor = isLabFloor ? 0 : terrain;
    const wasInside = this.inside;
    this.inside = isLabFloor;
    if (wasInside !== this.inside) this.callbacks.onZoneChanged?.(this.inside);

    // Vertical: small gravity, step-up over terrain, jump.
    if (input.jump && this.onGround && this.stamina > 4) {
      this.verticalVelocity = 4.1;
      this.onGround = false;
      this.stamina = Math.max(0, this.stamina - 3);
      this.callbacks.onJump?.();
    }
    if (!this.onGround) {
      this.verticalVelocity -= 17.5 * dt;
      this.position.y += this.verticalVelocity * dt;
      if (this.position.y <= floor) {
        this.position.y = floor;
        this.verticalVelocity = 0;
        this.onGround = true;
        this.callbacks.onLand?.();
      }
    } else {
      // Follow hilly terrain smoothly, but snap up small steps.
      const target = floor;
      if (target > this.position.y + 0.8) {
        this.position.y = damp(this.position.y, target, 15, dt);
      } else {
        this.position.y = damp(this.position.y, target, 22, dt);
        if (Math.abs(this.position.y - target) < 0.015) this.position.y = target;
      }
    }

    // Walking cadence & sound.
    const stride = this.sprinting ? 1.05 : this.crouching ? 1.55 : 1.45;
    if (this.moving && this.onGround) {
      this.stepAccum += trueSpeed * dt;
      if (this.stepAccum >= stride) {
        this.stepAccum = 0;
        const loudness = this.sprinting ? 1 : this.crouching ? 0.16 : 0.48;
        const radius = this.sprinting ? 62 : this.crouching ? 7 : 29;
        this.callbacks.onFootstep?.({
          position: this.position.clone(),
          type: this.sprinting ? 'sprint' : this.crouching ? 'crouch' : 'walk',
          surface: isLabFloor ? 'metal' : 'dirt',
          loudness: loudness * (isLabFloor ? 1.35 : 1),
          radius: radius * (isLabFloor ? 1.22 : 1),
        });
      }
    }

    // Noise meter (0..1) and pulse.
    const noiseBase = this.sprinting ? 1 : this.crouching ? 0.13 : this.moving ? 0.5 : 0.06;
    this.noise = damp(this.noise, noiseBase, 6, dt);
    this.noisePulse += dt * (2 + this.noise * 5);

    // Fear rises near the predator.
    let closest = 999;
    for (const enemy of enemies) {
      if (enemy && !enemy.dead) closest = Math.min(closest, this.position.distanceTo(enemy.position));
    }
    const fearTarget = this.inside ? 0 : clamp(1 - (closest - 5) / 90, 0, 1);
    this.fear = damp(this.fear, fearTarget, 0.7, dt);

    this.visualYaw = dampAngle(this.visualYaw, this.yaw, this.onGround ? 13 : 5, dt);
    this.updateAnimation(dt, lab);
    this.syncTransform();
  }

  updateAnimation(dt, lab) {
    this.animPhase += dt * (1.1 + this.speed * 1.72);
    const targetQuad = this.sprinting && this.speed > 4.2 ? 1 : 0;
    const targetCrouch = this.crouching ? 1 : 0;
    const targetWalk = this.moving ? 1 : 0;
    this.quadBlend = damp(this.quadBlend, targetQuad, 7, dt);
    this.crouchBlend = damp(this.crouchBlend, targetCrouch, 8, dt);
    this.walkBlend = damp(this.walkBlend, targetWalk, 8, dt);
    const q = this.quadBlend;
    const c = this.crouchBlend;
    const breathe = Math.sin(this.breath + performance.now() * 0.0015) * 0.008;
    const speedFactor = clamp(this.speed / 6.6, 0, 1);
    const phase = this.animPhase * (1 + speedFactor * 0.25);
    const swing = (0.18 + speedFactor * 0.62) * this.walkBlend;
    const quadSwing = (0.55 + speedFactor * 0.5) * q;

    this.rig.position.y = -0.45 * q - 0.25 * c + (this.onGround ? 0 : 0.03);
    this.rig.rotation.x = -0.13 * q;
    this.torso.rotation.x = 0.06 + 1.02 * q + 0.3 * c + (this.onGround ? 0 : 0.16);
    this.torso.rotation.z = Math.sin(phase) * 0.035 * this.walkBlend * (1 - q);
    this.torso.position.y = 0.94 + breathe;
    this.head.rotation.x = -0.86 * q - 0.12 * c + Math.sin(phase * 2 + 1) * 0.02 * q;
    this.head.rotation.y = Math.sin(performance.now() * 0.0007) * 0.06 * (1 - this.walkBlend);
    this.tail.rotation.x = 0.15 + q * 0.65 + Math.sin(phase * 1.2) * 0.09;
    this.tail.rotation.z = Math.sin(phase * 0.8) * 0.1 * (1 - q);

    for (const arm of this.arms) {
      const sign = arm.side;
      if (q > 0.01) {
        const s = Math.sin(phase + (arm.side < 0 ? 0 : Math.PI));
        arm.shoulder.rotation.x = lerp(-sign * 0.05 + swing * s, -0.92 + quadSwing * s, q);
        arm.shoulder.rotation.z = lerp(sign * 0.03, sign * 0.17, q);
        arm.elbow.rotation.x = lerp(-0.18 - swing * 0.15, -0.72 - Math.max(0, s) * 0.36, q);
      } else {
        const s = Math.sin(phase + (arm.side < 0 ? 0 : Math.PI));
        arm.shoulder.rotation.x = -0.04 + swing * s - c * 0.22;
        arm.shoulder.rotation.z = sign * (0.03 + c * 0.07);
        arm.elbow.rotation.x = -0.17 - Math.max(0, -s) * 0.22 - c * 0.14;
      }
    }
    for (const leg of this.legs) {
      const s = Math.sin(phase + (leg.side < 0 ? Math.PI : 0));
      if (q > 0.01) {
        leg.hip.rotation.x = lerp(-s * swing * 0.9, -quadSwing * s * 0.9, q);
        leg.elbow.rotation.x = lerp(0.08 + Math.max(0, s) * 0.38, 0.34 + Math.max(0, -s) * 0.42, q);
      } else {
        leg.hip.rotation.x = -s * swing * 0.82;
        leg.elbow.rotation.x = 0.08 + Math.max(0, s) * 0.34 + c * 0.62;
        leg.hip.rotation.z = leg.side * c * 0.08;
      }
    }
    // Idle stance: knees bent, knuckles slightly out.
    this.legs[0].elbow.rotation.x += c * 0.16;
    this.legs[1].elbow.rotation.x += c * 0.16;

    // Slope tilt while on hilly terrain.
    if (!this.inside && this.onGround) {
      terrainSlope(this.position.x, this.position.z, _slope);
      this.rig.rotation.z = damp(this.rig.rotation.z, -_slope.x * 0.32, 5, dt);
      this.rig.rotation.x = damp(this.rig.rotation.x, -0.13 * q + _slope.z * 0.18, 5, dt);
    } else {
      this.rig.rotation.z = damp(this.rig.rotation.z, 0, 7, dt);
      this.rig.rotation.x = damp(this.rig.rotation.x, -0.13 * q, 7, dt);
    }
    this.rig.visible = !this.hidden;
  }

  setHidden(hidden) {
    this.hidden = hidden;
    this.rig.visible = !hidden;
  }

  applyDamage(amount, source = null) {
    if (this.dead || this.invulnerable > 0) return false;
    this.health = Math.max(0, this.health - amount);
    this.invulnerable = 0.65;
    this.callbacks.onDamage?.(amount, source);
    if (this.health <= 0) {
      this.dead = true;
      this.callbacks.onDeath?.(source);
    }
    return true;
  }

  heal(amount) {
    this.health = Math.min(this.maxHealth, this.health + amount);
  }

  reset() {
    this.position.set(0, 0, 3.5);
    this.velocity.set(0, 0, 0);
    this.verticalVelocity = 0;
    this.yaw = Math.PI;
    this.visualYaw = Math.PI;
    this.health = 100;
    this.stamina = 100;
    this.fear = 0;
    this.dead = false;
    this.inside = true;
    this.onGround = true;
    this.stepAccum = 0;
    this.noise = 0;
    this.rig.visible = true;
    this.syncTransform();
  }
}
