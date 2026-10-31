import * as THREE from 'three';
import { groundY } from './utils.js';

/**
 * Lightweight voxel debris with per-cell gravity, bounce and decay. Used for
 * footfall grit, hydraulic dust, core shards and atmospheric particles.
 */
export class VoxelDebris {
  constructor(scene, max = 150) {
    this.max = max;
    this.scene = scene;
    this.mesh = new THREE.InstancedMesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, metalness: 0.02 }),
      max,
    );
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(max * 3), 3);
    this.mesh.instanceColor.setUsage(THREE.DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    this.mesh.castShadow = false;
    this.mesh.receiveShadow = true;
    scene.add(this.mesh);
    this.items = [];
    this.cursor = 0;
    this.dummy = new THREE.Object3D();
    this.color = new THREE.Color();
    for (let i = 0; i < max; i += 1) {
      this.items.push({
        active: false,
        pos: new THREE.Vector3(),
        vel: new THREE.Vector3(),
        rot: new THREE.Vector3(),
        rotVel: new THREE.Vector3(),
        size: 0.08,
        life: 0,
        maxLife: 1,
        sleeping: false,
      });
      this.dummy.position.set(0, -100, 0);
      this.dummy.scale.setScalar(0);
      this.dummy.updateMatrix();
      this.mesh.setMatrixAt(i, this.dummy.matrix);
      this.mesh.setColorAt(i, this.color.setHex(0x777766));
    }
    this.mesh.instanceMatrix.needsUpdate = true;
  }

  spawnBurst(position, options = {}) {
    const count = options.count ?? 8;
    const palette = options.colors ?? [0x5a5639, 0x3c4d2d, 0x78724f, 0x2b3e25];
    const power = options.power ?? 2.2;
    const size = options.size ?? 0.07;
    const spread = options.spread ?? 0.45;
    for (let i = 0; i < count; i += 1) {
      const item = this.items[this.cursor];
      this.cursor = (this.cursor + 1) % this.max;
      item.active = true;
      item.pos.set(
        position.x + (Math.random() - 0.5) * spread,
        position.y + (options.height ?? 0.08) + Math.random() * 0.18,
        position.z + (Math.random() - 0.5) * spread,
      );
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * power + (options.forward ? power * 0.55 : 0.1);
      item.vel.set(
        Math.cos(angle) * speed * (options.dir?.x ?? 0) + Math.cos(angle) * Math.random() * 0.6,
        Math.random() * power * 0.7 + (options.up ?? 0.6),
        Math.sin(angle) * speed * (options.dir?.z ?? 0) + Math.sin(angle) * Math.random() * 0.6,
      );
      if (options.dir) {
        item.vel.x += options.dir.x * speed * 0.5;
        item.vel.z += options.dir.z * speed * 0.5;
      }
      item.rot.set(Math.random() * 3, Math.random() * 3, Math.random() * 3);
      item.rotVel.set((Math.random() - 0.5) * 9, (Math.random() - 0.5) * 9, (Math.random() - 0.5) * 9);
      item.size = size * (0.6 + Math.random() * 0.9);
      item.life = 0;
      item.maxLife = options.life ?? 1.8 + Math.random() * 1.4;
      item.sleeping = false;
      item.gravity = options.gravity ?? 13;
      this.color.setHex(palette[Math.floor(Math.random() * palette.length)]);
      this.mesh.setColorAt(this.items.indexOf(item), this.color);
    }
    this.mesh.instanceColor.needsUpdate = true;
  }

  spawnShards(position, count = 18) {
    this.spawnBurst(position, {
      count,
      colors: [0x9dffe0, 0x62e5c1, 0xd7fff4, 0x38b89c],
      power: 4.4,
      size: 0.1,
      spread: 0.3,
      up: 1.3,
      gravity: 10,
      life: 2.1,
    });
  }

  update(dt) {
    let dirty = false;
    for (let i = 0; i < this.items.length; i += 1) {
      const item = this.items[i];
      if (!item.active) continue;
      dirty = true;
      item.life += dt;
      if (!item.sleeping) {
        item.vel.y -= item.gravity * dt;
        item.pos.addScaledVector(item.vel, dt);
        item.rot.addScaledVector(item.rotVel, dt);
        const g = groundY(item.pos.x, item.pos.z) + item.size * 0.35;
        if (item.pos.y < g) {
          item.pos.y = g;
          if (Math.abs(item.vel.y) > 0.7) {
            item.vel.y *= -0.28;
            item.vel.x *= 0.55;
            item.vel.z *= 0.55;
            item.rotVel.multiplyScalar(0.6);
          } else {
            item.sleeping = true;
          }
        }
      }
      const fade = Math.min(1, item.life / 0.12) * Math.max(0, 1 - item.life / item.maxLife);
      const scale = item.size * (0.5 + fade * 0.5);
      this.dummy.position.copy(item.pos);
      this.dummy.rotation.set(item.rot.x, item.rot.y, item.rot.z);
      this.dummy.scale.setScalar(Math.max(0.001, scale));
      this.dummy.updateMatrix();
      this.mesh.setMatrixAt(i, this.dummy.matrix);
      if (item.life >= item.maxLife) {
        item.active = false;
        this.dummy.scale.setScalar(0);
        this.dummy.updateMatrix();
        this.mesh.setMatrixAt(i, this.dummy.matrix);
      }
    }
    if (dirty) this.mesh.instanceMatrix.needsUpdate = true;
  }
}

/**
 * Expanding ground rings that visualize acoustic pulses. Mossman is blind;
 * this is the shape of the world to him.
 */
export class SoundWaves {
  constructor(scene, max = 10) {
    this.scene = scene;
    this.items = [];
    for (let i = 0; i < max; i += 1) {
      const mat = new THREE.MeshBasicMaterial({
        color: 0xb9e68d,
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      const mesh = new THREE.Mesh(new THREE.RingGeometry(0.92, 1, 40), mat);
      mesh.rotation.x = -Math.PI / 2;
      mesh.visible = false;
      mesh.renderOrder = 3;
      scene.add(mesh);
      this.items.push({ mesh, life: 0, maxLife: 1, startRadius: 0.5, endRadius: 10, active: false });
    }
    this.cursor = 0;
  }

  pulse(position, radius = 12, color = 0xb9e68d, duration = 1.1, yOffset = 0.04) {
    const item = this.items[this.cursor];
    this.cursor = (this.cursor + 1) % this.items.length;
    item.active = true;
    item.life = 0;
    item.maxLife = duration;
    item.startRadius = 0.6;
    item.endRadius = radius;
    item.mesh.position.set(position.x, groundY(position.x, position.z) + yOffset, position.z);
    item.mesh.material.color.setHex(color);
    item.mesh.material.opacity = 0.7;
    item.mesh.scale.setScalar(0.6);
    item.mesh.visible = true;
  }

  update(dt) {
    for (const item of this.items) {
      if (!item.active) continue;
      item.life += dt;
      const t = Math.min(1, item.life / item.maxLife);
      const ease = 1 - (1 - t) ** 2;
      const r = item.startRadius + (item.endRadius - item.startRadius) * ease;
      item.mesh.scale.setScalar(r);
      item.mesh.material.opacity = 0.65 * (1 - t) ** 1.7;
      if (t >= 1) {
        item.active = false;
        item.mesh.visible = false;
      }
    }
  }
}

export class CameraShake {
  constructor() {
    this.amount = 0;
    this.time = 0;
  }
  add(amount) {
    this.amount = Math.max(this.amount, amount);
  }
  update(dt) {
    this.amount = Math.max(0, this.amount - dt * 1.7);
    this.time += dt;
  }
  offset(vector) {
    if (this.amount <= 0.001) return vector.set(0, 0, 0);
    const t = this.time * 35;
    return vector.set(
      Math.sin(t * 1.13) * this.amount * 0.05,
      Math.cos(t * 1.77) * this.amount * 0.05,
      Math.sin(t * 0.83) * this.amount * 0.03,
    );
  }
}
