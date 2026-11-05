import * as THREE from 'three';

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const damp = (a, b, lambda, dt) => a + (b - a) * (1 - Math.exp(-lambda * dt));

function limbBox(w, h, d, mat, x, y, z) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z);
  m.castShadow = true;
  return m;
}

export class Player {
  constructor(scene, world) {
    this.world = world;
    this.scene = scene;
    this.pos = new THREE.Vector3(world.spawn.x, world.groundAt(world.spawn.x, world.spawn.z), world.spawn.z);
    this.yaw = world.spawn.yaw;
    this.pitch = -0.03;
    this.radius = 0.48;
    this.height = 2.05;
    this.vel = new THREE.Vector3();
    this.vy = 0;
    this.grounded = true;
    this.health = 100;
    this.stamina = 100;
    this.maxHealth = 100;
    this.maxStamina = 100;
    this.crouchBlend = 0;
    this.quadBlend = 0;
    this.walkPhase = 0;
    this.stepTimer = 0;
    this.noise = 0;
    this.speedNow = 0;
    this.analog = 0;
    this.moving = false;
    this.sprinting = false;
    this.crouching = false;
    this.viewMode = 'third';
    this.lampOn = true;
    this.invuln = 0;
    this.hurtTimer = 0;
    this.exhausted = false;
    this.modelYaw = this.yaw;
    this.bob = 0;
    this.landTimer = 0;
    this.distanceWalked = 0;
    this.dead = false;
    this.buildModel();
    this.buildLamp();
  }

  buildModel() {
    const fur = new THREE.MeshLambertMaterial({ color: 0x2d2b22, flatShading: true });
    const fur2 = new THREE.MeshLambertMaterial({ color: 0x3d392b, flatShading: true });
    const furDark = new THREE.MeshLambertMaterial({ color: 0x1d1c16, flatShading: true });
    const skin = new THREE.MeshLambertMaterial({ color: 0x67553e, flatShading: true });
    const skinDark = new THREE.MeshLambertMaterial({ color: 0x3d3327, flatShading: true });
    this.furMats = { fur, fur2, furDark, skin };
    const model = new THREE.Group();
    this.model = model;
    this.scene.add(model);

    const bodyPivot = new THREE.Group();
    bodyPivot.position.y = 1.08;
    model.add(bodyPivot);
    this.bodyPivot = bodyPivot;

    const torso = limbBox(0.92, 0.95, 0.58, fur, 0, 0.18, 0);
    bodyPivot.add(torso);
    const chest = limbBox(0.7, 0.55, 0.1, skin, 0, 0.26, 0.3);
    bodyPivot.add(chest);
    // pixel fur clumps
    for (let i = 0; i < 12; i++) {
      const s = 0.12 + Math.random() * 0.16;
      const p = limbBox(s, s * 1.6, s, i % 3 ? fur2 : furDark, (Math.random() - .5) * .85, (Math.random() - .5) * .8, (Math.random() - .5) * .55);
      torso.add(p);
    }
    const back = limbBox(0.6, 0.3, 0.38, skinDark, 0, 0.55, -0.12);
    bodyPivot.add(back);

    const headPivot = new THREE.Group();
    headPivot.position.set(0, 0.82, 0.14);
    bodyPivot.add(headPivot);
    this.headPivot = headPivot;
    this.head = limbBox(0.62, 0.54, 0.58, fur2, 0, 0.1, 0);
    headPivot.add(this.head);
    const face = limbBox(0.5, 0.32, 0.18, skinDark, 0, 0.02, 0.32);
    headPivot.add(face);
    const muzzle = limbBox(0.38, 0.2, 0.24, skin, 0, -0.06, 0.38);
    headPivot.add(muzzle);
    const nose = limbBox(0.13, 0.08, 0.05, furDark, 0, 0.01, 0.51);
    headPivot.add(nose);
    for (const s of [-1, 1]) {
      const eye = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.07, 0.035), new THREE.MeshBasicMaterial({ color: 0xc1ff84, toneMapped: false }));
      eye.position.set(s * 0.16, 0.18, 0.305);
      headPivot.add(eye);
      const brow = limbBox(0.16, 0.06, 0.08, furDark, s * 0.16, 0.25, 0.3);
      headPivot.add(brow);
      const ear = limbBox(0.14, 0.16, 0.08, fur, s * 0.33, 0.2, 0.02);
      headPivot.add(ear);
    }

    const makeArm = (side) => {
      const shoulder = new THREE.Group();
      shoulder.position.set(side * 0.53, 0.58, 0);
      bodyPivot.add(shoulder);
      const upper = limbBox(0.26, 0.7, 0.3, fur, 0, -0.3, 0);
      shoulder.add(upper);
      const elbow = new THREE.Group();
      elbow.position.y = -0.64;
      shoulder.add(elbow);
      const fore = limbBox(0.22, 0.62, 0.25, fur2, 0, -0.29, 0);
      elbow.add(fore);
      const hand = limbBox(0.24, 0.22, 0.28, skinDark, 0, -0.63, 0.03);
      elbow.add(hand);
      for (let i = 0; i < 3; i++) {
        const knuckle = limbBox(0.05, 0.14, 0.2, skin, -0.07 + i * 0.07, -0.72, 0.07);
        elbow.add(knuckle);
      }
      return { shoulder, elbow };
    };
    this.armL = makeArm(-1);
    this.armR = makeArm(1);

    const makeLeg = (side) => {
      const hip = new THREE.Group();
      hip.position.set(side * 0.26, 1.02, 0);
      model.add(hip);
      const thigh = limbBox(0.3, 0.58, 0.34, fur2, 0, -0.25, 0);
      hip.add(thigh);
      const knee = new THREE.Group();
      knee.position.y = -0.54;
      hip.add(knee);
      const shin = limbBox(0.24, 0.5, 0.27, fur, 0, -0.24, 0);
      knee.add(shin);
      const foot = limbBox(0.3, 0.16, 0.46, furDark, 0, -0.5, 0.12);
      knee.add(foot);
      return { hip, knee };
    };
    this.legL = makeLeg(-1);
    this.legR = makeLeg(1);

    // back ridge / spine plates
    for (let i = 0; i < 4; i++) {
      const plate = limbBox(0.18, 0.16, 0.12, skinDark, 0, 0.55 - i * 0.16, -0.3 + i * 0.05);
      bodyPivot.add(plate);
    }

    model.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });

    // Keep the feet on the terrain regardless of animation posture.
    model.position.set(0, 0, 0);
    model.updateMatrixWorld(true);
    const bounds = new THREE.Box3().setFromObject(model);
    const rig = new THREE.Group();
    while (model.children.length) rig.add(model.children[0]);
    rig.position.y = -bounds.min.y;
    model.add(rig);

    model.position.copy(this.pos);
    model.rotation.y = this.yaw;
  }

  buildLamp() {
    const spot = new THREE.SpotLight(0xfff0c8, 105, 34, Math.PI / 7.2, 0.55, 1.35);
    spot.castShadow = false;
    spot.position.set(0, 1.7, 0);
    spot.target.position.set(0, 0, 6);
    this.scene.add(spot);
    this.scene.add(spot.target);
    const warm = new THREE.PointLight(0xffd9a0, 4.5, 7, 2);
    warm.position.set(0, 1.5, 0);
    this.scene.add(warm);
    this.lamp = spot;
    this.lampGlow = warm;
  }

  setView(mode) {
    this.viewMode = mode;
  }

  update(dt, input, game) {
    if (this.dead) return;
    const world = this.world;
    this.invuln = Math.max(0, this.invuln - dt);
    this.hurtTimer = Math.max(0, this.hurtTimer - dt);
    this.landTimer = Math.max(0, this.landTimer - dt);

    const forwardInput = input.forward || 0;
    const strafeInput = input.strafe || 0;
    const mag = Math.min(1, Math.hypot(forwardInput, strafeInput));
    this.analog = mag;
    this.crouching = !!input.crouch;
    const wantSprint = !!input.sprint && !this.crouching && mag > 0.15;

    if (this.stamina <= 0.5) this.exhausted = true;
    if (this.exhausted && this.stamina > 32) this.exhausted = false;
    this.sprinting = wantSprint && !this.exhausted && this.stamina > 0.5;
    this.crouchBlend = damp(this.crouchBlend, this.crouching ? 1 : 0, 12, dt);

    let targetSpeed;
    if (this.crouching) targetSpeed = 1.75;
    else if (this.sprinting) targetSpeed = 6.85;
    else targetSpeed = 3.45;
    targetSpeed *= mag;

    const f = new THREE.Vector3(Math.sin(this.yaw), 0, Math.cos(this.yaw));
    const r = new THREE.Vector3(-Math.cos(this.yaw), 0, Math.sin(this.yaw));
    const wish = new THREE.Vector3().addScaledVector(f, forwardInput).addScaledVector(r, strafeInput);
    if (wish.lengthSq() > 1) wish.normalize();
    this.moving = wish.lengthSq() > 0.001;

    const targetVel = wish.multiplyScalar(targetSpeed);
    const accel = this.grounded ? 16 : 4;
    this.vel.x = damp(this.vel.x, targetVel.x, accel, dt);
    this.vel.z = damp(this.vel.z, targetVel.z, accel, dt);
    if (!this.moving && this.grounded) {
      this.vel.x = damp(this.vel.x, 0, 20, dt);
      this.vel.z = damp(this.vel.z, 0, 20, dt);
    }

    // knockback
    if (this.hurtTimer > 0) {
      this.vel.x *= 0.965;
      this.vel.z *= 0.965;
    }

    const beforeX = this.pos.x, beforeZ = this.pos.z;
    this.pos.x += this.vel.x * dt;
    this.pos.z += this.vel.z * dt;
    world.resolveCollisions(this.pos, this.radius);

    // outside the lab, prevent walking through the sealed shell corners
    const ground = world.groundAt(this.pos.x, this.pos.z);

    if (input.jump && this.grounded && !this.crouching) {
      this.vy = 4.8;
      this.grounded = false;
      if (game) game.audio.step('sprint');
    }
    if (!this.grounded) {
      this.vy -= 14.5 * dt;
      this.pos.y += this.vy * dt;
      if (this.pos.y <= ground) {
        this.pos.y = ground;
        if (this.vy < -4) this.landTimer = 0.2;
        this.vy = 0;
        this.grounded = true;
      }
    } else {
      this.pos.y = damp(this.pos.y, ground, 18, dt);
      if (Math.abs(this.pos.y - ground) > 0.55) { this.grounded = false; this.vy = 0; }
    }

    const dx = this.pos.x - beforeX, dz = this.pos.z - beforeZ;
    const dist = Math.hypot(dx, dz);
    this.speedNow = dt > 0 ? dist / dt : 0;
    this.distanceWalked += dist;
    const actualSpeedRatio = clamp(this.speedNow / 6.85, 0, 1);

    // stamina
    if (this.sprinting && this.moving && this.grounded) this.stamina = Math.max(0, this.stamina - 23 * dt);
    else this.stamina = Math.min(this.maxStamina, this.stamina + (this.crouching ? 20 : 14) * dt);

    // noise signature
    let noiseTarget = 0.02;
    if (this.moving && this.grounded) {
      if (this.crouching) noiseTarget = 0.13 + actualSpeedRatio * .07;
      else if (this.sprinting) noiseTarget = 0.92 + actualSpeedRatio * .08;
      else noiseTarget = 0.45 + actualSpeedRatio * .1;
    } else if (!this.grounded) noiseTarget = 0.25;
    this.noise = damp(this.noise, noiseTarget, 7, dt);

    // footsteps
    if (this.grounded && this.moving) {
      const stride = this.sprinting ? 1.55 : (this.crouching ? 1.05 : 1.5);
      this.stepTimer -= dist;
      if (this.stepTimer <= 0) {
        this.stepTimer = stride;
        if (game) {
          game.audio.step(this.crouching ? 'crouch' : (this.sprinting ? 'sprint' : 'walk'));
          if (!this.crouching) game.onFootstep?.(this.pos, this.sprinting ? .55 : .28);
        }
        this.bob = this.sprinting ? .3 : .18;
      }
    } else {
      this.stepTimer = Math.min(this.stepTimer, 0.15);
    }
    this.bob = damp(this.bob, 0, 9, dt);

    // model facing
    const modelTargetYaw = this.moving ? Math.atan2(this.vel.x, this.vel.z) : this.modelYaw;
    let dyaw = ((modelTargetYaw - this.modelYaw + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
    this.modelYaw += dyaw * Math.min(1, dt * 10);
    this.updateModel(dt, actualSpeedRatio);

    // lamp
    this.lamp.visible = this.lampOn;
    this.lampGlow.visible = this.lampOn;
    const eye = this.getEyePosition();
    const look = this.getLookDir();
    this.lamp.position.copy(eye).addScaledVector(look, 0.2);
    this.lamp.target.position.copy(eye).addScaledVector(look, 14);
    this.lamp.target.position.y -= 1.2;
    this.lampGlow.position.copy(eye);
    this.lampGlow.position.y -= 0.4;

    this.health = Math.min(this.maxHealth, this.health + (this.hurtTimer <= 0 && this.health < 35 ? 1.5 * dt : 0));
  }

  updateModel(dt, speedRatio) {
    const crouch = this.crouchBlend;
    const quadTarget = (this.sprinting && this.moving) ? 1 : 0;
    this.quadBlend = damp(this.quadBlend, quadTarget, 6, dt);
    const quad = this.quadBlend;
    const run = clamp(this.speedNow / 6.85, 0, 1);
    const phaseSpeed = this.sprinting ? 13.5 : (this.crouching ? 5.2 : 8.1);
    if (this.moving) this.walkPhase += dt * phaseSpeed * Math.max(.25, run + this.crouching * .3);
    else this.walkPhase += dt * 1.2;

    const swing = Math.sin(this.walkPhase) * (this.moving ? (0.38 + run * 0.62) : 0.03);
    const swing2 = Math.cos(this.walkPhase) * (this.moving ? (0.3 + run * 0.5) : 0.02);

    this.model.position.copy(this.pos);
    this.model.rotation.y = this.modelYaw;

    // torso posture
    this.bodyPivot.position.y = 1.08 - crouch * 0.38 - quad * 0.43 + Math.abs(swing) * 0.03 + (this.grounded ? 0 : 0.05);
    this.bodyPivot.rotation.x = crouch * 0.32 + quad * 0.92 + (this.grounded ? 0 : -0.08);
    this.bodyPivot.rotation.z = swing2 * 0.045;
    this.headPivot.rotation.x = -crouch * 0.2 - quad * 0.55 + Math.sin(this.walkPhase * 2) * 0.015;
    this.headPivot.rotation.y = this.moving ? 0 : Math.sin(this.walkPhase * .35) * .15;

    // arms: quadruped reaches forward/down, upright swings opposite legs
    const armBase = quad * 1.16 - crouch * 0.1;
    this.armL.shoulder.rotation.x = -swing * (1 - quad * .45) + armBase;
    this.armR.shoulder.rotation.x = swing * (1 - quad * .45) + armBase;
    this.armL.shoulder.rotation.z = -0.08 - quad * 0.15;
    this.armR.shoulder.rotation.z = 0.08 + quad * 0.15;
    this.armL.elbow.rotation.x = -0.15 - quad * 0.25 - Math.max(0, swing) * 0.4;
    this.armR.elbow.rotation.x = -0.15 - quad * 0.25 - Math.max(0, -swing) * 0.4;

    this.legL.hip.rotation.x = swing * 0.8 + quad * 0.1;
    this.legR.hip.rotation.x = -swing * 0.8 + quad * 0.1;
    this.legL.knee.rotation.x = Math.max(0, -swing) * 0.9 + crouch * 0.75 + quad * .25;
    this.legR.knee.rotation.x = Math.max(0, swing) * 0.9 + crouch * 0.75 + quad * .25;
    this.legL.hip.rotation.z = -0.03; this.legR.hip.rotation.z = 0.03;

    if (!this.grounded) {
      this.legL.hip.rotation.x = 0.45; this.legR.hip.rotation.x = -0.25;
      this.legL.knee.rotation.x = 0.85; this.legR.knee.rotation.x = 0.55;
      this.armL.shoulder.rotation.x = -0.7; this.armR.shoulder.rotation.x = -0.7;
    }
    if (this.landTimer > 0) {
      this.bodyPivot.position.y -= this.landTimer * .25;
    }

    // headlamp cone origin already separate
    this.model.visible = this.viewMode === 'third' && !this.dead;
  }

  getEyePosition() {
    const crouch = this.crouchBlend;
    return new THREE.Vector3(this.pos.x, this.pos.y + 2.02 - crouch * 0.34, this.pos.z);
  }

  getLookDir(out = new THREE.Vector3()) {
    const cp = Math.cos(this.pitch);
    return out.set(Math.sin(this.yaw) * cp, Math.sin(this.pitch), Math.cos(this.yaw) * cp).normalize();
  }

  getTarget(out = new THREE.Vector3()) {
    const eye = this.getEyePosition();
    return out.set(eye.x, eye.y - 0.17, eye.z);
  }

  takeDamage(amount, fromPos, game) {
    if (this.dead || this.invuln > 0) return;
    this.health = Math.max(0, this.health - amount);
    this.invuln = 1.15;
    this.hurtTimer = 1.0;
    const dx = this.pos.x - fromPos.x, dz = this.pos.z - fromPos.z;
    const d = Math.hypot(dx, dz) || 1;
    this.vel.x += dx / d * 7.5;
    this.vel.z += dz / d * 7.5;
    if (game) {
      game.audio.hit();
      game.shake(0.9, 0.7);
      game.damageFlash();
      if (this.health <= 0) {
        this.dead = true;
        game.onDeath();
      }
    }
  }

  heal(amount) {
    this.health = Math.min(this.maxHealth, this.health + amount);
  }
}
