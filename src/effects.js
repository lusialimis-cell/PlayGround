import * as THREE from 'three';
import { glowGreen } from './textures.js';

const MAX = 900;

export class Effects {
  constructor(scene) {
    this.scene = scene;
    this.particles = [];
    this.pos = new Float32Array(MAX * 3);
    this.col = new Float32Array(MAX * 3);
    this.geo = new THREE.BufferGeometry();
    this.geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    this.geo.setAttribute('color', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage));
    for (let i = 0; i < MAX; i++) {
      this.pos[i * 3 + 1] = -9999;
      this.particles.push({ active: false, vx: 0, vy: 0, vz: 0, life: 0, max: 1, grav: 0, drag: 1 });
    }
    this.points = new THREE.Points(this.geo, new THREE.PointsMaterial({
      size: .15, sizeAttenuation: true, vertexColors: true, transparent: true, opacity: .95,
      depthWrite: false, blending: THREE.AdditiveBlending,
    }));
    this.points.frustumCulled = false;
    scene.add(this.points);
    this.cursor = 0;

    this.buildRain();
    this.buildMotes();
  }

  buildRain() {
    const count = 780;
    this.rainCount = count;
    this.rainDrops = [];
    const pos = new Float32Array(count * 6);
    this.rainGeo = new THREE.BufferGeometry();
    this.rainGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage));
    this.rainMat = new THREE.LineBasicMaterial({ color: 0x91b4ad, transparent: true, opacity: .22, depthWrite: false, fog: true });
    this.rain = new THREE.LineSegments(this.rainGeo, this.rainMat);
    this.rain.frustumCulled = false;
    this.scene.add(this.rain);
    for (let i = 0; i < count; i++) {
      this.rainDrops.push({ x: 0, y: 0, z: 0, speed: 18 + Math.random() * 16, len: .5 + Math.random() * .9 });
    }
    this.rainInit = false;
  }

  buildMotes() {
    const count = 150;
    const pos = new Float32Array(count * 3);
    this.moteBase = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - .5) * 14, y = .3 + Math.random() * 4.6, z = (Math.random() - .5) * 14;
      pos[i * 3] = x; pos[i * 3 + 1] = y; pos[i * 3 + 2] = z;
      this.moteBase.push({ x, y, z, phase: Math.random() * 6.28, speed: .1 + Math.random() * .3 });
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.motes = new THREE.Points(geo, new THREE.PointsMaterial({
      map: glowGreen, color: 0xcde7ac, size: .075, transparent: true, opacity: .32,
      depthWrite: false, blending: THREE.AdditiveBlending,
    }));
    this.scene.add(this.motes);
  }

  emit(x, y, z, color, { count = 1, speed = 1, up = 1, spread = 1, life = .8, grav = -1, drag = .96, size } = {}) {
    const c = new THREE.Color(color);
    for (let n = 0; n < count; n++) {
      const i = this.cursor;
      this.cursor = (this.cursor + 1) % MAX;
      const p = this.particles[i];
      p.active = true;
      p.vx = (Math.random() - .5) * speed * spread;
      p.vy = Math.random() * speed * up;
      p.vz = (Math.random() - .5) * speed * spread;
      p.life = life * (.6 + Math.random() * .7);
      p.max = p.life;
      p.grav = grav;
      p.drag = drag;
      this.pos[i * 3] = x + (Math.random() - .5) * .3;
      this.pos[i * 3 + 1] = y + (Math.random() - .5) * .3;
      this.pos[i * 3 + 2] = z + (Math.random() - .5) * .3;
      const jitter = .7 + Math.random() * .5;
      this.col[i * 3] = c.r * jitter;
      this.col[i * 3 + 1] = c.g * jitter;
      this.col[i * 3 + 2] = c.b * jitter;
    }
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.color.needsUpdate = true;
  }

  burst(pos, color, count = 30, speed = 2.5) {
    this.emit(pos.x, pos.y, pos.z, color, { count, speed, up: 1.2, spread: 1, life: 1.15, grav: -2.2, drag: .965 });
  }
  impact(pos, color = 0xaa3a22, count = 16) {
    this.emit(pos.x, pos.y, pos.z, color, { count, speed: 2.2, up: .8, spread: 1, life: .55, grav: -6, drag: .94 });
  }
  dust(pos, count = 4) {
    this.emit(pos.x, pos.y + .15, pos.z, 0x5c6249, { count, speed: .45, up: .5, spread: 1.4, life: .9, grav: -.15, drag: .94 });
  }
  spore(pos, yaw) {
    const x = pos.x - Math.sin(yaw) * 1.1 + (Math.random() - .5) * 1.2;
    const z = pos.z - Math.cos(yaw) * 1.1 + (Math.random() - .5) * 1.2;
    this.emit(x, pos.y + .5 + Math.random() * 1.9, z, 0x88c45c, { count: 2, speed: .22, up: .3, spread: 1, life: 1.8, grav: .02, drag: .99 });
  }
  steam(pos, count = 6, color = 0xa8bcac) {
    this.emit(pos.x, pos.y, pos.z, color, { count, speed: .9, up: .8, spread: 1.2, life: 1.2, grav: .18, drag: .97 });
  }
  sparks(pos, color = 0xffc46a, count = 8) {
    this.emit(pos.x, pos.y, pos.z, color, { count, speed: 3.4, up: .7, spread: 1.2, life: .5, grav: -7, drag: .96 });
  }

  update(dt, time, player, indoors) {
    const pos = this.geo.attributes.position.array;
    const col = this.geo.attributes.color.array;
    for (let i = 0; i < MAX; i++) {
      const p = this.particles[i];
      if (!p.active) continue;
      p.life -= dt;
      if (p.life <= 0) { p.active = false; pos[i * 3 + 1] = -9999; continue; }
      const d = Math.pow(p.drag, dt * 60);
      p.vx *= d; p.vz *= d; p.vy = p.vy * d + p.grav * dt;
      pos[i * 3] += p.vx * dt;
      pos[i * 3 + 1] += p.vy * dt;
      pos[i * 3 + 2] += p.vz * dt;
      const a = Math.min(1, p.life / (p.max * .4));
      col[i * 3] *= (0.98 + a * .02);
    }
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.color.needsUpdate = true;

    // motes
    if (player) {
      const inside = indoors;
      this.motes.visible = inside;
      if (inside) {
        const arr = this.motes.geometry.attributes.position.array;
        for (let i = 0; i < this.moteBase.length; i++) {
          const b = this.moteBase[i];
          arr[i * 3] = b.x + Math.sin(time * b.speed + b.phase) * .42;
          arr[i * 3 + 1] = b.y + Math.sin(time * b.speed * .7 + b.phase * 2) * .22;
          arr[i * 3 + 2] = b.z + Math.cos(time * b.speed * .8 + b.phase) * .42;
        }
        this.motes.geometry.attributes.position.needsUpdate = true;
      }
    }

    // rain
    this.rain.visible = !indoors;
    if (!indoors && player) {
      const arr = this.rainGeo.attributes.position.array;
      if (!this.rainInit) {
        for (const d of this.rainDrops) {
          d.x = player.pos.x + (Math.random() - .5) * 70;
          d.z = player.pos.z + (Math.random() - .5) * 70;
          d.y = player.pos.y + Math.random() * 24;
        }
        this.rainInit = true;
      }
      for (let i = 0; i < this.rainDrops.length; i++) {
        const d = this.rainDrops[i];
        d.y -= d.speed * dt;
        d.x += dt * 2.2;
        if (d.y < player.pos.y - 1 || Math.abs(d.x - player.pos.x) > 38 || Math.abs(d.z - player.pos.z) > 38) {
          d.x = player.pos.x + (Math.random() - .5) * 68;
          d.z = player.pos.z + (Math.random() - .5) * 68;
          d.y = player.pos.y + 16 + Math.random() * 12;
        }
        arr[i * 6] = d.x; arr[i * 6 + 1] = d.y; arr[i * 6 + 2] = d.z;
        arr[i * 6 + 3] = d.x - .04; arr[i * 6 + 4] = d.y - d.len; arr[i * 6 + 5] = d.z;
      }
      this.rainGeo.attributes.position.needsUpdate = true;
    }
  }
}
