import * as THREE from 'three';
import { mergeGeometries } from '../vendor/addons/BufferGeometryUtils.js';
import {
  T, glowGreen, glowCyan, glowAmber, glowRed, rand, randRange, hash2,
} from './textures.js';

const LAB = 7.5;
const DOOR_HALF = 1.7;
const WALL_H = 5.3;
const WALL_T = 0.6;
const DOOR_H = 3.35;

const smooth = t => t * t * (3 - 2 * t);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;

function valueNoise(x, z) {
  const ix = Math.floor(x), iz = Math.floor(z);
  const fx = smooth(x - ix), fz = smooth(z - iz);
  const a = hash2(ix, iz), b = hash2(ix + 1, iz), c = hash2(ix, iz + 1), d = hash2(ix + 1, iz + 1);
  return lerp(lerp(a, b, fx), lerp(c, d, fx), fz);
}
function fbm(x, z) {
  return valueNoise(x, z) * 0.55 + valueNoise(x * 2.13 + 10, z * 2.13 - 4) * 0.28 + valueNoise(x * 4.7 - 7, z * 4.7 + 3) * 0.17;
}
function rawHeight(x, z) {
  const h = (fbm(x * 0.012 + 20, z * 0.012) - 0.48) * 10.5
    + (fbm(x * 0.034 - 8, z * 0.034 + 11) - 0.5) * 3.4
    + Math.sin(x * 0.047 + z * 0.031) * 0.45;
  const ridge = Math.max(0, 1 - Math.hypot(x - 155, z + 120) / 175);
  return h + ridge * 7;
}

const SITE_DEFS = [
  { x: 78, z: -58, name: 'RUIN 07', code: 'ISO-01', hue: 0x7dffe0, note: 3 },
  { x: -96, z: 36, name: 'SINKHOLE 03', code: 'ISO-02', hue: 0xb9ff63, note: 4 },
  { x: 34, z: 116, name: 'RELAY 12', code: 'ISO-03', hue: 0xffd06a, note: 5 },
];

export class World {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    scene.add(this.group);
    this.colliders = [];
    this.circles = [];
    this.cameraBlockers = [];
    this.interactables = [];
    this.doors = [];
    this.labLights = [];
    this.cores = [];
    this.medkits = [];
    this.notes = [];
    this.time = 0;
    this.coreCount = 0;
    this.ascentActive = false;
    this.ascentReady = false;
    this.liftReadyNotified = false;
    this.flicker = [];
    this.movingParticles = [];

    this.siteDefs = SITE_DEFS.map(s => ({ ...s, y: rawHeight(s.x, s.z) }));
    this._materials();
    this.buildSky();
    this.buildTerrain();
    this.buildLab();
    this.buildJungle();
    this.buildSites();
    this.buildLift();
    this.buildFireflies();
    this.spawn = { x: 0, z: 3.9, yaw: Math.PI };
    this.updateInteractablePositions();
  }

  /* ------------------------------------------------------------------ */
  _materials() {
    const lam = (opts) => new THREE.MeshLambertMaterial(opts);
    this.mats = {
      wall: lam({ map: T.wall }),
      wallClean: lam({ map: T.wallClean }),
      floor: lam({ map: T.floor }),
      ceiling: lam({ map: T.ceiling }),
      door: lam({ map: T.door }),
      hazard: lam({ map: T.hazard }),
      concrete: lam({ map: T.concrete }),
      crate: lam({ map: T.crate }),
      metal: lam({ map: T.metal }),
      darkMetal: lam({ color: 0x252d27 }),
      steel: lam({ color: 0x515b52 }),
      black: lam({ color: 0x111713 }),
      rubber: lam({ color: 0x151a16 }),
      bark: lam({ map: T.bark }),
      moss: lam({ map: T.moss }),
      leafA: lam({ color: 0x365f2d, flatShading: true }),
      leafB: lam({ color: 0x2b5029, flatShading: true }),
      leafC: lam({ color: 0x486f33, flatShading: true }),
      glass: new THREE.MeshLambertMaterial({ color: 0x8fd6bf, transparent: true, opacity: 0.16, depthWrite: false }),
      liquid: new THREE.MeshLambertMaterial({ color: 0x4cab58, emissive: 0x1c5c2e, emissiveIntensity: 1.2, transparent: true, opacity: 0.72 }),
      screen: new THREE.MeshBasicMaterial({ map: T.screen, toneMapped: false }),
      screenRed: new THREE.MeshBasicMaterial({ map: T.screenRed, toneMapped: false }),
      sign: new THREE.MeshBasicMaterial({ map: T.sign, toneMapped: false }),
      sign2: new THREE.MeshBasicMaterial({ map: T.sign2, toneMapped: false }),
      cable: lam({ color: 0x141a15 }),
      orange: lam({ color: 0xb5682c }),
      yellow: lam({ color: 0xc8a53d }),
    };
    this.mats.glass.side = THREE.DoubleSide;
  }

  /* ------------------------------------------------------------------ */
  buildSky() {
    const skyGeo = new THREE.SphereGeometry(440, 24, 16);
    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, fog: false,
      uniforms: {
        top: { value: new THREE.Color(0x020807) },
        mid: { value: new THREE.Color(0x0a1812) },
        low: { value: new THREE.Color(0x1d2f24) },
      },
      vertexShader: `varying vec3 vP; void main(){ vP=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
      fragmentShader: `varying vec3 vP; uniform vec3 top,mid,low;
        void main(){
          float h=clamp(vP.y*0.72+0.28,0.0,1.0);
          vec3 c=mix(low,mid,smoothstep(0.0,0.35,h));
          c=mix(c,top,smoothstep(0.32,1.0,h));
          float glow=pow(max(0.0,1.0-abs(vP.y-0.12)*3.0),5.0);
          c+=vec3(0.035,0.055,0.038)*glow;
          gl_FragColor=vec4(c,1.0);
        }`,
    });
    this.scene.add(new THREE.Mesh(skyGeo, skyMat));

    const starCount = 650;
    const pos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const a = rand() * Math.PI * 2;
      const y = 0.12 + rand() * 0.86;
      const r = Math.sqrt(1 - y * y);
      pos[i * 3] = Math.cos(a) * r * 420;
      pos[i * 3 + 1] = y * 420;
      pos[i * 3 + 2] = Math.sin(a) * r * 420;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const stars = new THREE.Points(g, new THREE.PointsMaterial({
      color: 0xa9c4b2, size: 1.5, sizeAttenuation: false, transparent: true, opacity: 0.5, fog: false, depthWrite: false,
    }));
    this.scene.add(stars);

    const moon = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowCyan, color: 0xbcd8d2, transparent: true, opacity: 0.9, fog: false, depthWrite: false }));
    moon.position.set(-190, 260, -290);
    moon.scale.setScalar(58);
    this.scene.add(moon);
    const disc = new THREE.Mesh(new THREE.CircleGeometry(9, 20), new THREE.MeshBasicMaterial({ color: 0xdbe9dd, fog: false }));
    disc.position.copy(moon.position).multiplyScalar(0.986);
    disc.lookAt(0, 0, 0);
    this.scene.add(disc);

    this.scene.fog = new THREE.FogExp2(0x08120d, 0.0095);

    const hemi = new THREE.HemisphereLight(0x77998a, 0x08110a, 0.85);
    this.scene.add(hemi);
    const amb = new THREE.AmbientLight(0x22352a, 0.65);
    this.scene.add(amb);

    this.moonLight = new THREE.DirectionalLight(0xa8c8c0, 1.6);
    this.moonLight.position.set(-45, 78, -35);
    this.moonLight.castShadow = true;
    this.moonLight.shadow.mapSize.set(1024, 1024);
    this.moonLight.shadow.camera.near = 2;
    this.moonLight.shadow.camera.far = 220;
    const sc = this.moonLight.shadow.camera;
    sc.left = -55; sc.right = 55; sc.top = 55; sc.bottom = -55;
    this.moonLight.shadow.bias = -0.0006;
    this.moonLight.shadow.normalBias = 0.04;
    this.scene.add(this.moonLight);
    this.scene.add(this.moonLight.target);

    const fill = new THREE.DirectionalLight(0x2b5b45, 0.32);
    fill.position.set(40, 25, 60);
    this.scene.add(fill);
  }

  /* ------------------------------------------------------------------ */
  buildTerrain() {
    const geo = new THREE.PlaneGeometry(500, 500, 150, 150);
    geo.rotateX(-Math.PI / 2);
    const p = geo.attributes.position;
    const colors = new Float32Array(p.count * 3);
    const c = new THREE.Color();
    const low = new THREE.Color(0x22341f);
    const mid = new THREE.Color(0x30492a);
    const high = new THREE.Color(0x455a32);
    const dirt = new THREE.Color(0x3c3827);
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i), z = p.getZ(i);
      const h = this.heightAt(x, z);
      p.setY(i, h);
      const n = fbm(x * 0.07 + 3, z * 0.07 - 9);
      const m = fbm(x * 0.013 - 13, z * 0.013 + 4);
      if (n > 0.62) c.copy(dirt).lerp(mid, (n - 0.62) * 2.1);
      else if (h > 1.8) c.copy(mid).lerp(high, clamp((h - 1.8) / 5, 0, 1) * 0.7 + m * 0.12);
      else c.copy(low).lerp(mid, clamp(m * 1.2 + n * 0.25, 0, 1));
      const shade = 0.84 + hash2(x * 0.7, z * 0.9) * 0.25;
      colors[i * 3] = c.r * shade;
      colors[i * 3 + 1] = c.g * shade;
      colors[i * 3 + 2] = c.b * shade;
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.computeVertexNormals();
    const mat = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true });
    const terrain = new THREE.Mesh(geo, mat);
    terrain.receiveShadow = true;
    this.group.add(terrain);
    this.terrain = terrain;

    // Dark distant ridgeline silhouettes
    const coneGeo = new THREE.ConeGeometry(1, 1, 5);
    const ridgeMat = new THREE.MeshLambertMaterial({ color: 0x0a1510, flatShading: true });
    for (let i = 0; i < 34; i++) {
      const a = (i / 34) * Math.PI * 2 + rand() * 0.06;
      const r = 245 + rand() * 35;
      const h = 22 + rand() * 45;
      const m = new THREE.Mesh(coneGeo, ridgeMat);
      m.position.set(Math.cos(a) * r, h * 0.5 - 3, Math.sin(a) * r);
      m.scale.set(16 + rand() * 24, h, 16 + rand() * 24);
      m.rotation.y = rand() * Math.PI;
      this.group.add(m);
    }
  }

  heightAt(x, z) {
    let h = rawHeight(x, z);
    const dLab = Math.hypot(x, z);
    h *= smooth(clamp((dLab - 17) / 25, 0, 1));
    for (const s of this.siteDefs) {
      const d = Math.hypot(x - s.x, z - s.z);
      if (d < 10.5) h = lerp(s.y, h, smooth(clamp((d - 6.2) / 4.3, 0, 1)));
    }
    return h;
  }

  groundAt(x, z) {
    if (Math.abs(x) < LAB + 0.4 && Math.abs(z) < LAB + 0.4) return 0.045;
    return this.heightAt(x, z) + 0.015;
  }

  insideLab(x, z) {
    return Math.abs(x) < LAB - 0.1 && Math.abs(z) < LAB - 0.1;
  }

  /* ------------------------------------------------------------------ */
  addBoxCollider(minX, maxX, minZ, maxZ, tag = 'solid') {
    const c = { minX, maxX, minZ, maxZ, enabled: true, tag };
    this.colliders.push(c);
    return c;
  }
  addCircleCollider(x, z, r) { this.circles.push({ x, z, r }); }

  addBoxMesh(w, h, d, mat, x, y, z, ry = 0, parent = this.group) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    m.position.set(x, y, z);
    m.rotation.y = ry;
    m.castShadow = true; m.receiveShadow = true;
    parent.add(m);
    return m;
  }

  /* ------------------------------------------------------------------ */
  buildLab() {
    const g = new THREE.Group();
    this.lab = g;
    this.group.add(g);
    const M = this.mats;

    // floor and roof
    const floor = this.addBoxMesh(16, 0.22, 16, M.floor, 0, -0.11, 0, 0, g);
    floor.receiveShadow = true; floor.castShadow = false;
    this.addBoxMesh(16.6, 0.42, 16.6, M.concrete, 0, WALL_H + 0.24, 0, 0, g);
    this.addBoxMesh(16.8, 0.18, 16.8, M.darkMetal, 0, WALL_H + 0.46, 0, 0, g);

    // ceiling inner
    const ceil = new THREE.Mesh(new THREE.PlaneGeometry(15.8, 15.8), M.ceiling);
    ceil.rotation.x = Math.PI / 2;
    ceil.position.y = WALL_H - 0.02;
    ceil.receiveShadow = true;
    g.add(ceil);

    const wallSeg = (cx, cz, sx, sz) => {
      const m = this.addBoxMesh(sx, WALL_H, sz, M.wall, cx, WALL_H / 2, cz, 0, g);
      this.cameraBlockers.push(m);
      return m;
    };
    // North / south walls with door gap
    wallSeg(-(DOOR_HALF + (LAB + WALL_T / 2 - DOOR_HALF) / 2), -LAB, (LAB + WALL_T / 2 - DOOR_HALF), WALL_T);
    wallSeg((DOOR_HALF + (LAB + WALL_T / 2 - DOOR_HALF) / 2), -LAB, (LAB + WALL_T / 2 - DOOR_HALF), WALL_T);
    wallSeg(-(DOOR_HALF + (LAB + WALL_T / 2 - DOOR_HALF) / 2), LAB, (LAB + WALL_T / 2 - DOOR_HALF), WALL_T);
    wallSeg((DOOR_HALF + (LAB + WALL_T / 2 - DOOR_HALF) / 2), LAB, (LAB + WALL_T / 2 - DOOR_HALF), WALL_T);
    // East / west walls
    wallSeg(-LAB, -(DOOR_HALF + (LAB + WALL_T / 2 - DOOR_HALF) / 2), WALL_T, (LAB + WALL_T / 2 - DOOR_HALF));
    wallSeg(-LAB, (DOOR_HALF + (LAB + WALL_T / 2 - DOOR_HALF) / 2), WALL_T, (LAB + WALL_T / 2 - DOOR_HALF));
    wallSeg(LAB, -(DOOR_HALF + (LAB + WALL_T / 2 - DOOR_HALF) / 2), WALL_T, (LAB + WALL_T / 2 - DOOR_HALF));
    wallSeg(LAB, (DOOR_HALF + (LAB + WALL_T / 2 - DOOR_HALF) / 2), WALL_T, (LAB + WALL_T / 2 - DOOR_HALF));

    // headers above doors
    for (let i = 0; i < 4; i++) {
      const horiz = i < 2;
      const s = i < 2 ? (i === 0 ? -1 : 1) : (i === 2 ? -1 : 1);
      const hx = horiz ? 0 : s * LAB;
      const hz = horiz ? s * LAB : 0;
      const m = this.addBoxMesh(horiz ? DOOR_HALF * 2 + 0.3 : WALL_T, WALL_H - DOOR_H, horiz ? WALL_T : DOOR_HALF * 2 + 0.3, M.wall, hx, DOOR_H + (WALL_H - DOOR_H) / 2, hz, 0, g);
      this.cameraBlockers.push(m);
    }

    // colliders for walls
    const wallW = LAB + WALL_T / 2 - DOOR_HALF;
    this.addBoxCollider(-LAB - WALL_T / 2, -DOOR_HALF, -LAB - WALL_T / 2, -LAB + WALL_T / 2, 'wall');
    this.addBoxCollider(DOOR_HALF, LAB + WALL_T / 2, -LAB - WALL_T / 2, -LAB + WALL_T / 2, 'wall');
    this.addBoxCollider(-LAB - WALL_T / 2, -DOOR_HALF, LAB - WALL_T / 2, LAB + WALL_T / 2, 'wall');
    this.addBoxCollider(DOOR_HALF, LAB + WALL_T / 2, LAB - WALL_T / 2, LAB + WALL_T / 2, 'wall');
    this.addBoxCollider(-LAB - WALL_T / 2, -LAB + WALL_T / 2, -LAB - WALL_T / 2, -DOOR_HALF, 'wall');
    this.addBoxCollider(-LAB - WALL_T / 2, -LAB + WALL_T / 2, DOOR_HALF, LAB + WALL_T / 2, 'wall');
    this.addBoxCollider(LAB - WALL_T / 2, LAB + WALL_T / 2, -LAB - WALL_T / 2, -DOOR_HALF, 'wall');
    this.addBoxCollider(LAB - WALL_T / 2, LAB + WALL_T / 2, DOOR_HALF, LAB + WALL_T / 2, 'wall');

    // corner ribs and pipes
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      this.addBoxMesh(0.34, WALL_H, 0.34, M.steel, sx * (LAB - 0.1), WALL_H / 2, sz * (LAB - 0.1), 0, g);
    }
    for (const sz of [-1, 1]) {
      const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 14.8, 6), M.darkMetal);
      pipe.rotation.z = Math.PI / 2;
      pipe.position.set(0, WALL_H - 0.55, sz * 5.8);
      pipe.castShadow = true;
      g.add(pipe);
      const pipe2 = pipe.clone(); pipe2.position.y = WALL_H - 0.85; pipe2.position.x = 0.35; g.add(pipe2);
    }
    for (let x = -6; x <= 6; x += 4) {
      const cable = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 14, 4), M.cable);
      cable.rotation.z = Math.PI / 2;
      cable.position.set(0, WALL_H - 0.34, x);
      g.add(cable);
    }

    // ceiling light fixtures
    const lightPositions = [[-3.7, -3.8], [3.7, -3.8], [-3.7, 3.3], [3.7, 3.3]];
    lightPositions.forEach(([x, z], idx) => {
      this.addBoxMesh(2.2, 0.16, 0.55, M.darkMetal, x, WALL_H - 0.12, z, 0, g);
      const glow = this.addBoxMesh(1.9, 0.05, 0.34, new THREE.MeshBasicMaterial({ color: 0xd8efc0, toneMapped: false }), x, WALL_H - 0.21, z, 0, g);
      glow.castShadow = false;
      if (idx < 2) {
        const l = new THREE.PointLight(0xd7e9bb, 44, 12, 2);
        l.position.set(x, WALL_H - 0.55, z);
        g.add(l);
        this.labLights.push({ light: l, base: 44, fixture: glow, phase: rand() * 20, flicker: idx === 1 });
      }
    });
    this.ambientLabLight = new THREE.PointLight(0x4f8d5a, 18, 15, 2);
    this.ambientLabLight.position.set(0, 2.5, 0);
    g.add(this.ambientLabLight);

    // door frames and doors
    const doorInfo = [
      { id: 0, name: 'NORTH', group: new THREE.Vector3(0, 0, -LAB), ry: 0, axis: 'x' },
      { id: 1, name: 'SOUTH', group: new THREE.Vector3(0, 0, LAB), ry: Math.PI, axis: 'x' },
      { id: 2, name: 'EAST', group: new THREE.Vector3(LAB, 0, 0), ry: -Math.PI / 2, axis: 'z' },
      { id: 3, name: 'WEST', group: new THREE.Vector3(-LAB, 0, 0), ry: Math.PI / 2, axis: 'z' },
    ];
    for (const info of doorInfo) this.buildDoor(info, g);

    // floor hazard markings at doors
    for (const info of doorInfo) {
      const mark = new THREE.Mesh(new THREE.PlaneGeometry(DOOR_HALF * 2, 0.75), M.hazard);
      mark.rotation.x = -Math.PI / 2;
      mark.rotation.z = info.ry;
      mark.position.copy(info.group);
      mark.position.y = 0.012;
      mark.position.add(new THREE.Vector3(Math.sin(info.ry) * 1.35, 0, Math.cos(info.ry) * 1.35));
      mark.receiveShadow = true;
      g.add(mark);
    }

    // signage
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(3.7, 0.93), M.sign);
    sign.position.set(0, 4.36, -LAB + WALL_T / 2 + 0.012);
    g.add(sign);
    const danger = new THREE.Mesh(new THREE.PlaneGeometry(1.75, 0.88), M.sign2);
    danger.position.set(-LAB + WALL_T / 2 + 0.014, 3.55, 4.3);
    danger.rotation.y = Math.PI / 2;
    g.add(danger);

    this.buildLabProps(g);
  }

  buildDoor(info, g) {
    const M = this.mats;
    const group = new THREE.Group();
    group.position.copy(info.group);
    group.rotation.y = info.ry;
    g.add(group);
    this.lab.add(group);

    // frame
    for (const sx of [-1, 1]) {
      this.addBoxMesh(0.38, DOOR_H + 0.35, WALL_T + 0.14, M.steel, sx * (DOOR_HALF + 0.18), (DOOR_H + 0.35) / 2, 0, 0, group);
    }
    this.addBoxMesh((DOOR_HALF + 0.37) * 2, 0.4, WALL_T + 0.14, M.steel, 0, DOOR_H + 0.2, 0, 0, group);
    this.addBoxMesh((DOOR_HALF + 0.4) * 2, 0.1, WALL_T + 0.2, M.hazard, 0, DOOR_H + 0.44, 0, 0, group);

    // door panels
    const panelGeo = new THREE.BoxGeometry(DOOR_HALF + 0.01, DOOR_H, 0.22);
    const panels = [];
    for (const side of [-1, 1]) {
      const p = new THREE.Mesh(panelGeo, M.door);
      p.position.set(side * (DOOR_HALF / 2), DOOR_H / 2, 0);
      p.castShadow = true; p.receiveShadow = true;
      group.add(p);
      panels.push(p);
      this.cameraBlockers.push(p);
    }
    // central seam
    this.addBoxMesh(0.08, DOOR_H, 0.25, M.darkMetal, 0, DOOR_H / 2, 0, 0, group);

    // hydraulic ram above door
    const ram = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 2.7, 7), M.steel);
    ram.rotation.z = Math.PI / 2;
    ram.position.set(0, DOOR_H + 0.72, 0.28);
    group.add(ram);
    const ram2 = ram.clone(); ram2.position.z = -0.28; group.add(ram2);
    const glowMat = new THREE.MeshBasicMaterial({ color: 0xff6040, toneMapped: false });
    const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.09, 6, 5), glowMat);
    lamp.position.set(DOOR_HALF + 0.52, DOOR_H + 0.1, 0.35);
    group.add(lamp);

    // number plate and exit sign
    const num = new THREE.Mesh(new THREE.PlaneGeometry(0.62, 0.31), new THREE.MeshBasicMaterial({ map: T.doorNum[info.id], toneMapped: false }));
    num.position.set(DOOR_HALF + 0.56, 2.2, 0.39);
    group.add(num);
    const exit = new THREE.Mesh(new THREE.PlaneGeometry(0.82, 0.41), new THREE.MeshBasicMaterial({ map: T.exit, toneMapped: false, transparent: true }));
    exit.position.set(0, DOOR_H + 0.62, 0.42);
    group.add(exit);

    // switch panels inside and outside
    const panelMats = [];
    const makeSwitch = (x, y, z, face, exterior) => {
      const sw = new THREE.Group();
      sw.position.set(x, y, z);
      sw.rotation.y = face;
      group.add(sw);
      this.addBoxMesh(0.34, 0.46, 0.13, M.darkMetal, 0, 0, 0, 0, sw);
      const face2 = this.addBoxMesh(0.24, 0.3, 0.035, M.metal, 0, 0.02, 0.08, 0, sw);
      const ledMat = new THREE.MeshBasicMaterial({ color: exterior ? 0xffc95a : 0xff6040, toneMapped: false });
      const led = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.055, 0.02), ledMat);
      led.position.set(0, 0.16, 0.11); sw.add(led);
      const lever = this.addBoxMesh(0.11, 0.13, 0.05, M.orange, 0, -0.08, 0.11, 0, sw);
      lever.userData.lever = true;
      return { sw, ledMat, led, lever, exterior };
    };
    const inside = makeSwitch(-2.22, 1.38, WALL_T / 2 + 0.086, 0, false);
    const outside = makeSwitch(-2.22, 1.38, -WALL_T / 2 - 0.086, Math.PI, true);

    // switch plates on wall (the switch groups sit on either side of the door plane)
    inside.sw.position.z = WALL_T / 2 + 0.09;
    outside.sw.position.z = -WALL_T / 2 - 0.09;

    const door = {
      ...info, group, panels, lampMat: glowMat, inside, outside,
      open: 0, target: 0, moving: false, collider: null, soundPlayed: false,
    };
    this.doors.push(door);

    // collider for the door itself
    const horiz = info.id < 2;
    const cz = info.group.z, cx = info.group.x;
    if (horiz) door.collider = this.addBoxCollider(-DOOR_HALF, DOOR_HALF, cz - WALL_T / 2, cz + WALL_T / 2, 'door');
    else door.collider = this.addBoxCollider(cx - WALL_T / 2, cx + WALL_T / 2, -DOOR_HALF, DOOR_HALF, 'door');

    const makeSwitchInteract = (entry, exterior) => {
      const obj = {
        id: `door-${info.id}-${exterior ? 'out' : 'in'}`,
        kind: 'door', door, pos: new THREE.Vector3(), radius: 1.85,
        label: () => `${exterior ? 'EXT. RELEASE' : 'DOOR ' + String(info.id + 1).padStart(2, '0')} // ${door.target > 0.5 ? 'SEAL' : 'OPEN'} HYDRAULIC`,
        onUse: (game) => this.toggleDoor(door, game),
      };
      obj.local = new THREE.Vector3(-2.22, 1.38, exterior ? -WALL_T / 2 - 0.35 : WALL_T / 2 + 0.35);
      obj.group = group;
      this.interactables.push(obj);
      return obj;
    };
    makeSwitchInteract(inside, false);
    makeSwitchInteract(outside, true);
    door.switchInteract = this.interactables[this.interactables.length - 2];
  }

  buildLabProps(g) {
    const M = this.mats;
    // benches
    const bench = (x, z, rot) => {
      const bg = new THREE.Group();
      bg.position.set(x, 0, z); bg.rotation.y = rot; g.add(bg);
      this.addBoxMesh(2.5, 0.13, 0.9, M.steel, 0, 1.02, 0, 0, bg);
      this.addBoxMesh(2.5, 0.05, 0.95, M.darkMetal, 0, 0.95, 0, 0, bg);
      for (const sx of [-1.05, 1.05]) for (const sz of [-0.34, 0.34]) this.addBoxMesh(0.08, 1, 0.08, M.darkMetal, sx, 0.5, sz, 0, bg);
      this.addBoxMesh(2.3, 0.04, 0.76, M.metal, 0, 1.095, 0, 0, bg);
      // glassware
      const glassMat = M.glass;
      for (let i = 0; i < 5; i++) {
        const b = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.075, 0.26 + rand() * 0.1, 6), glassMat);
        b.position.set(-0.85 + i * 0.42, 1.25, -0.15 + rand() * 0.3);
        bg.add(b);
        const liq = new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.062, 0.1 + rand() * 0.08, 6), i % 2 ? M.liquid : new THREE.MeshLambertMaterial({ color: 0x8fca45, emissive: 0x2d5317 }));
        liq.position.copy(b.position); liq.position.y -= 0.04; bg.add(liq);
      }
      const rack = this.addBoxMesh(0.7, 0.22, 0.2, M.metal, 0.55, 1.18, 0.24, 0, bg);
      rack.castShadow = true;
      // collider axis-aware
      if (Math.abs(rot) < 0.1) this.addBoxCollider(x - 1.35, x + 1.35, z - 0.55, z + 0.55, 'prop');
      else this.addBoxCollider(x - 0.55, x + 0.55, z - 1.35, z + 1.35, 'prop');
    };
    bench(-6.25, -4.15, Math.PI / 2);
    bench(-6.25, 4.15, Math.PI / 2);
    bench(6.25, -4.15, Math.PI / 2);
    bench(6.25, 4.15, Math.PI / 2);

    // wall shelves with jars
    const shelf = (x, z, rot) => {
      const s = new THREE.Group(); s.position.set(x, 0, z); s.rotation.y = rot; g.add(s);
      for (let l = 0; l < 3; l++) {
        this.addBoxMesh(2.7, 0.08, 0.62, M.steel, 0, 0.95 + l * 0.7, 0, 0, s);
        for (let i = 0; i < 4; i++) {
          const jar = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.3, 6), i % 2 ? M.glass : M.liquid);
          jar.position.set(-0.9 + i * 0.6, 1.13 + l * 0.7, 0);
          s.add(jar);
        }
      }
      for (const sx of [-1.3, 1.3]) this.addBoxMesh(0.07, 2.55, 0.07, M.darkMetal, sx, 1.27, 0, 0, s);
      if (Math.abs(rot) < 0.1) this.addBoxCollider(x - 1.4, x + 1.4, z - 0.42, z + 0.42, 'prop');
      else this.addBoxCollider(x - 0.42, x + 0.42, z - 1.4, z + 1.4, 'prop');
    };
    shelf(-4.9, 6.72, 0);
    shelf(4.9, 6.72, 0);

    // wall terminals
    const terminal = (x, z, rot, red = false) => {
      const t = new THREE.Group(); t.position.set(x, 0, z); t.rotation.y = rot; g.add(t);
      this.addBoxMesh(1.5, 0.75, 0.6, M.darkMetal, 0, 0.78, 0, 0, t);
      this.addBoxMesh(1.3, 0.08, 0.72, M.metal, 0, 1.15, 0, 0, t);
      const scr = new THREE.Mesh(new THREE.PlaneGeometry(1.15, 0.56), red ? M.screenRed : M.screen);
      scr.position.set(0, 1.65, -0.26); t.add(scr);
      this.addBoxMesh(1.28, 0.7, 0.07, M.black, 0, 1.65, -0.31, 0, t);
      const glow = new THREE.PointLight(red ? 0xff5038 : 0x6bffc4, 4, 3.5, 2);
      glow.position.set(0, 1.5, 0.15); t.add(glow);
      if (Math.abs(rot) < 0.1) this.addBoxCollider(x - 0.8, x + 0.8, z - 0.36, z + 0.36, 'prop');
      else this.addBoxCollider(x - 0.36, x + 0.36, z - 0.8, z + 0.8, 'prop');
    };
    terminal(7.12, 2.3, -Math.PI / 2);
    terminal(-7.12, -2.6, Math.PI / 2, true);

    // containment tank
    this.buildTank(5.25, 6.1, g);

    // main console
    this.buildConsole(g);

    // storage crates
    const cratePositions = [[-3.1, -6.55, .4], [-1.9, -6.6, .1], [3.1, 6.4, -.25], [1.7, 6.5, .1]];
    for (const [x, z, r] of cratePositions) {
      const c = this.addBoxMesh(0.85, 0.85 + rand() * 0.4, 0.85, M.crate, x, 0.5, z, r, g);
      if (rand() > .55) this.addBoxMesh(0.62, 0.6, 0.62, M.crate, x + .2, 1.25, z - .1, r + .2, g);
      this.addBoxCollider(x - .58, x + .58, z - .58, z + .58, 'prop');
    }

    // barrels
    for (const [x, z] of [[-3.2, 5.8], [3.8, -6.5]]) {
      const b = new THREE.Mesh(new THREE.CylinderGeometry(.36, .36, .95, 8), M.orange);
      b.position.set(x, .48, z); b.castShadow = true; g.add(b);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(.37, .025, 3, 8), M.darkMetal);
      ring.rotation.x = Math.PI / 2; ring.position.set(x, .75, z); g.add(ring);
      this.addBoxCollider(x - .42, x + .42, z - .42, z + .42, 'prop');
    }

    // floor decal ring around lift
    const ring = new THREE.Mesh(new THREE.RingGeometry(1.9, 2.08, 24), new THREE.MeshBasicMaterial({ color: 0x6ff8d2, transparent: true, opacity: .2, side: THREE.DoubleSide, toneMapped: false }));
    ring.rotation.x = -Math.PI / 2; ring.position.y = .014; g.add(ring);

    // lab notes
    this.addNote(1, 'DR. VOSS — LOG 44', 'We moved the last three isotope cores into the field array today. The storm took the north relay before dawn. Mossman was already outside the perimeter by then — I know because it stopped moving when the hydraulic door cycled.\n\nIt cannot see us. It hears the world instead. Every footstep is a flare. Every door is a scream.\n\nIf you are reading this, the sanctuary is still sealed. Open one door. Slip out low and slow. Do not run until you are past the clearing.', new THREE.Vector3(-6.9, 1.1, -1.2), g);
    this.addNote(2, 'MOSS.MAN — FIELD PROTOCOL', 'SUBJECT: MOSS.MAN // APEX BIOLOGICAL ARRAY\n\nHeight 2.8 m. No ocular organs. The auditory cortex has grown through the entire skull plate. It does not track by sight; it builds a moving map from sound.\n\nAvoid sprinting. Crouch when it vocalises. A thrown stone can move its attention elsewhere.\n\nIf it charges: do not run in a straight line. Its mass resists turns by roughly half at speed.', new THREE.Vector3(5.4, 1.08, -5.5), g);
  }

  addNote(id, title, body, pos, parent) {
    const px = pos.x - (parent.position?.x || 0);
    const pz = pos.z - (parent.position?.z || 0);
    const pad = this.addBoxMesh(0.34, 0.025, 0.25, this.mats.screen, px, pos.y + 0.02, pz, rand() * 2, parent);
    pad.castShadow = false;
    const it = {
      id: 'note-' + id, kind: 'note', pos: new THREE.Vector3(pos.x, pos.y, pos.z), radius: 2.0,
      label: () => 'READ: ' + title,
      onUse: (game) => game.openNote({ id, title, body }),
    };
    this.interactables.push(it);
    this.notes.push({ id, title, body });
  }

  buildConsole(g) {
    const M = this.mats;
    const c = new THREE.Group();
    c.position.set(4.75, 0, -6.15);
    g.add(c);
    this.addBoxMesh(2.15, 1.05, 0.85, M.darkMetal, 0, 0.53, 0, 0, c);
    this.addBoxMesh(2.3, 0.1, 1.0, M.steel, 0, 1.09, 0, 0, c);
    const screen = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 0.72), M.screen);
    screen.position.set(0, 1.52, 0.28);
    screen.rotation.x = -0.25;
    c.add(screen);
    this.addBoxMesh(1.78, 0.9, 0.08, M.black, 0, 1.52, 0.23, 0, c);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.38, 0.025, 4, 20), new THREE.MeshBasicMaterial({ color: 0x6ff8d2, transparent: true, opacity: .55, toneMapped: false }));
    ring.rotation.x = Math.PI / 2; ring.position.set(0, 1.2, 0.62); c.add(ring);
    this.consoleRing = ring;
    this.consoleSockets = [];
    for (let i = 0; i < 3; i++) {
      const sock = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.05, 8), new THREE.MeshBasicMaterial({ color: 0x2c3a30, toneMapped: false }));
      sock.position.set(-0.55 + i * 0.55, 1.155, 0.48);
      c.add(sock);
      this.consoleSockets.push(sock);
    }
    const glow = new THREE.PointLight(0x6ff8d2, 5, 3.5, 2);
    glow.position.set(0, 1.5, 0.4); c.add(glow);
    this.consoleGlow = glow;
    this.addBoxCollider(3.62, 5.9, -6.65, -5.6, 'prop');
    this.consoleInteract = {
      id: 'console', kind: 'console', pos: new THREE.Vector3(4.75, 1.1, -5.25), radius: 2.3,
      label: () => this.coreCount < 3 ? `MAIN TERMINAL // ${this.coreCount}/3 CORES` : (this.ascentActive ? 'ASCENT SEQUENCE ACTIVE' : 'INSERT CORES // ASCENT'),
      onUse: (game) => this.useConsole(game),
    };
    this.interactables.push(this.consoleInteract);
  }

  buildTank(x, z, g) {
    const M = this.mats;
    const t = new THREE.Group(); t.position.set(x, 0, z); g.add(t);
    this.addBoxMesh(2.25, 0.32, 2.25, M.darkMetal, 0, 0.16, 0, 0, t);
    const glass = new THREE.Mesh(new THREE.CylinderGeometry(.92, .98, 3.3, 12, 1, true), M.glass);
    glass.position.y = 1.95; t.add(glass);
    const liquid = new THREE.Mesh(new THREE.CylinderGeometry(.86, .9, 2.55, 12), M.liquid);
    liquid.position.y = 1.58; t.add(liquid);
    // silhouette
    const sil = new THREE.Group(); sil.position.y = 1.65; t.add(sil);
    const silMat = new THREE.MeshLambertMaterial({ color: 0x1f3a25, emissive: 0x112a18, emissiveIntensity: .8 });
    this.addBoxMesh(.42, .65, .3, silMat, 0, .2, 0, 0, sil);
    this.addBoxMesh(.3, .28, .26, silMat, 0, .67, .02, 0, sil);
    for (const s of [-1, 1]) {
      this.addBoxMesh(.13, .62, .14, silMat, s * .34, .25, 0, 0, sil);
      this.addBoxMesh(.15, .58, .16, silMat, s * .16, -.32, 0, 0, sil);
    }
    const top = new THREE.Mesh(new THREE.CylinderGeometry(1.02, 1.02, .18, 12), M.steel);
    top.position.y = 3.68; t.add(top);
    for (let i = 0; i < 3; i++) {
      const bar = new THREE.Mesh(new THREE.TorusGeometry(.98, .035, 4, 14), M.darkMetal);
      bar.rotation.x = Math.PI / 2; bar.position.y = .62 + i * 1.12; t.add(bar);
    }
    const pl = new THREE.PointLight(0x45ca63, 15, 6, 2);
    pl.position.set(0, 1.7, 0); t.add(pl);
    this.tankLight = pl;
    this.addBoxCollider(x - 1.05, x + 1.05, z - 1.05, z + 1.05, 'prop');
    // bubbles
    this.bubbles = [];
    for (let i = 0; i < 9; i++) {
      const b = new THREE.Mesh(new THREE.SphereGeometry(.018 + rand() * .025, 4, 3), new THREE.MeshBasicMaterial({ color: 0xa9ffd0, transparent: true, opacity: .6 }));
      b.position.set(x + (rand() - .5) * 1.1, .5 + rand() * 2.5, z + (rand() - .5) * 1.1);
      b.userData.speed = .18 + rand() * .4;
      g.add(b); this.bubbles.push(b);
    }
  }

  /* ------------------------------------------------------------------ */
  buildJungle() {
    const treePositions = [];
    let tries = 0;
    while (treePositions.length < 170 && tries < 4000) {
      tries++;
      const a = rand() * Math.PI * 2;
      const r = 24 + Math.pow(rand(), 0.62) * 218;
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      if (Math.hypot(x, z) < 22) continue;
      if (this.siteDefs.some(s => Math.hypot(x - s.x, z - s.z) < 11)) continue;
      if (treePositions.some(p => Math.hypot(p.x - x, p.z - z) < 6.5)) continue;
      treePositions.push({
        x, z, y: this.heightAt(x, z), h: 6.5 + rand() * 11.5, r: .75 + rand() * .8,
        type: Math.floor(rand() * 3), rot: rand() * Math.PI * 2,
      });
    }
    this.trees = treePositions;

    const trunkGeo = new THREE.CylinderGeometry(.16, .34, 1, 5);
    trunkGeo.translate(0, .5, 0);
    const trunkMesh = new THREE.InstancedMesh(trunkGeo, new THREE.MeshLambertMaterial({ map: T.bark, color: 0xffffff }), treePositions.length);
    trunkMesh.castShadow = true; trunkMesh.receiveShadow = true;
    const leafGeo = new THREE.BoxGeometry(1, 1, 1);
    const leafMesh = new THREE.InstancedMesh(leafGeo, new THREE.MeshLambertMaterial({ color: 0xffffff, flatShading: true }), treePositions.length * 5);
    leafMesh.castShadow = true; leafMesh.receiveShadow = true;
    const matrix = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const e = new THREE.Euler();
    const pos = new THREE.Vector3();
    const scl = new THREE.Vector3();
    const color = new THREE.Color();
    let li = 0;
    const leafPalette = [0x31582a, 0x2a4d27, 0x3c6730, 0x244522, 0x446f32];
    treePositions.forEach((t, i) => {
      const trunkH = t.h * .72;
      e.set(0, t.rot, 0); q.setFromEuler(e);
      pos.set(t.x, t.y, t.z); scl.set(t.r, trunkH, t.r);
      matrix.compose(pos, q, scl);
      trunkMesh.setMatrixAt(i, matrix);
      trunkMesh.setColorAt(i, color.setRGB(.75 + rand() * .25, .72 + rand() * .25, .68 + rand() * .25));
      const clusters = 5;
      for (let c = 0; c < clusters; c++) {
        const ang = t.rot + c * 2.3 + rand();
        const rr = c === 0 ? 0 : 1.1 + rand() * 1.7;
        const cy = t.y + trunkH * (0.72 + rand() * 0.42);
        pos.set(t.x + Math.cos(ang) * rr, cy, t.z + Math.sin(ang) * rr);
        const w = (2.1 + rand() * 2.8) * (c === 0 ? 1.15 : 1);
        scl.set(w, w * (0.65 + rand() * .35), w);
        e.set(rand() * .5, rand() * Math.PI, rand() * .5); q.setFromEuler(e);
        matrix.compose(pos, q, scl);
        leafMesh.setMatrixAt(li, matrix);
        leafMesh.setColorAt(li, color.setHex(leafPalette[Math.floor(rand() * leafPalette.length)]).multiplyScalar(.85 + rand() * .3));
        li++;
      }
      this.addCircleCollider(t.x, t.z, .48 * t.r + .25);
    });
    leafMesh.count = li;
    if (trunkMesh.instanceColor) trunkMesh.instanceColor.needsUpdate = true;
    if (leafMesh.instanceColor) leafMesh.instanceColor.needsUpdate = true;
    this.group.add(trunkMesh, leafMesh);

    // ferns
    const p1 = new THREE.PlaneGeometry(1.6, 1.25);
    p1.translate(0, .62, 0);
    const p2 = p1.clone(); p2.rotateY(Math.PI / 2);
    const fernGeo = mergeGeometries([p1, p2]);
    const fernMat = new THREE.MeshLambertMaterial({ map: T.fern, transparent: true, alphaTest: .42, side: THREE.DoubleSide, depthWrite: true });
    const ferns = new THREE.InstancedMesh(fernGeo, fernMat, 300);
    for (let i = 0; i < 300; i++) {
      let x, z;
      do { x = (rand() - .5) * 480; z = (rand() - .5) * 480; } while (Math.hypot(x, z) < 15 || Math.abs(x) > 245 || Math.abs(z) > 245);
      const y = this.heightAt(x, z);
      pos.set(x, y, z);
      e.set(0, rand() * Math.PI * 2, 0); q.setFromEuler(e);
      const s = .55 + rand() * 1.3;
      scl.set(s, s * (.8 + rand() * .6), s);
      matrix.compose(pos, q, scl);
      ferns.setMatrixAt(i, matrix);
      ferns.setColorAt(i, color.setRGB(.75 + rand() * .2, .85 + rand() * .2, .65 + rand() * .2));
    }
    ferns.receiveShadow = true;
    if (ferns.instanceColor) ferns.instanceColor.needsUpdate = true;
    this.group.add(ferns);

    // rocks
    const rockGeo = new THREE.DodecahedronGeometry(1, 0);
    const rocks = new THREE.InstancedMesh(rockGeo, new THREE.MeshLambertMaterial({ color: 0x4a4d42, flatShading: true }), 95);
    rocks.castShadow = true; rocks.receiveShadow = true;
    for (let i = 0; i < 95; i++) {
      let x, z;
      do { x = (rand() - .5) * 470; z = (rand() - .5) * 470; } while (Math.hypot(x, z) < 16 || Math.abs(x) > 242 || Math.abs(z) > 242);
      const y = this.heightAt(x, z);
      const s = .35 + rand() * 1.3;
      pos.set(x, y + s * .3, z);
      e.set(rand(), rand() * Math.PI, rand()); q.setFromEuler(e);
      scl.set(s * (1 + rand() * .8), s * (.5 + rand() * .4), s * (1 + rand() * .6));
      matrix.compose(pos, q, scl);
      rocks.setMatrixAt(i, matrix);
      rocks.setColorAt(i, color.setRGB(.7 + rand() * .3, .72 + rand() * .28, .68 + rand() * .25));
      if (s > 1.05) this.addCircleCollider(x, z, s * .75);
    }
    if (rocks.instanceColor) rocks.instanceColor.needsUpdate = true;
    this.group.add(rocks);

    // fallen logs
    for (let i = 0; i < 11; i++) {
      let x, z;
      do { x = (rand() - .5) * 400; z = (rand() - .5) * 400; } while (Math.hypot(x, z) < 25 || this.siteDefs.some(s => Math.hypot(x - s.x, z - s.z) < 9));
      const y = this.heightAt(x, z);
      const len = 4 + rand() * 5;
      const log = new THREE.Mesh(new THREE.CylinderGeometry(.3, .38, len, 6), this.mats.bark);
      log.rotation.z = Math.PI / 2;
      log.rotation.y = rand() * Math.PI;
      log.position.set(x, y + .3, z);
      log.castShadow = true; log.receiveShadow = true;
      this.group.add(log);
      this.addCircleCollider(x, z, 1.0);
    }

    // mossy retaining wall / bunker shell around the lab
    const shellMat = this.mats.concrete;
    for (const [x, z, w, d] of [[0, 0, 18.2, 1], [0, 0, 1, 18.2]]) {
      // corner buttresses
    }
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      this.addBoxMesh(1.4, 2.2, 1.4, shellMat, sx * 8.6, .2, sz * 8.6, 0, this.group);
    }
    // antenna / vents
    const vent = new THREE.Mesh(new THREE.CylinderGeometry(.35, .42, 2.3, 7), this.mats.steel);
    vent.position.set(4.8, WALL_H + 1.5, -5.6); this.group.add(vent);
    const ventTop = new THREE.Mesh(new THREE.CylinderGeometry(.6, .5, .25, 7), this.mats.darkMetal);
    ventTop.position.set(4.8, WALL_H + 2.7, -5.6); this.group.add(ventTop);
    for (let i = 0; i < 3; i++) {
      const mast = new THREE.Mesh(new THREE.CylinderGeometry(.035, .05, 5 + i, 4), this.mats.steel);
      mast.position.set(-5.5 + i * 1.4, WALL_H + 2.9, 5.5);
      this.group.add(mast);
      const tip = new THREE.Mesh(new THREE.SphereGeometry(.09, 4, 4), new THREE.MeshBasicMaterial({ color: i === 1 ? 0xff6040 : 0x6ff8d2, toneMapped: false }));
      tip.position.set(mast.position.x, WALL_H + 5.4 + i * .5, 5.5); this.group.add(tip);
    }

    // warm door canopies outside
    for (const door of this.doors) {
      const angle = door.ry;
      const nx = -Math.sin(angle), nz = -Math.cos(angle);
      const cx = door.group.position.x + nx * 1.1;
      const cz = door.group.position.z + nz * 1.1;
      const can = this.addBoxMesh(Math.abs(nx) > .5 ? 1.6 : 3.2, .16, Math.abs(nz) > .5 ? 1.6 : 3.2, this.mats.darkMetal, door.group.position.x + nx * .55, 3.7, door.group.position.z + nz * .55, angle, this.group);
      const lamp = new THREE.Mesh(new THREE.SphereGeometry(.11, 6, 5), new THREE.MeshBasicMaterial({ color: 0xffc95a, toneMapped: false }));
      lamp.position.set(cx, 3.55, cz); this.group.add(lamp);
      const pl = new THREE.PointLight(0xffc95a, 6, 6, 2);
      pl.position.set(cx, 3.35, cz); this.group.add(pl);
    }
  }

  /* ------------------------------------------------------------------ */
  buildSites() {
    const M = this.mats;
    this.siteDefs.forEach((site, idx) => {
      const y = site.y;
      const sg = new THREE.Group();
      sg.position.set(site.x, 0, site.z);
      this.group.add(sg);

      // pad
      const pad = this.addBoxMesh(6.8, .18, 6.8, M.concrete, 0, y + .05, 0, 0, sg);
      pad.receiveShadow = true;
      const edge = this.addBoxMesh(6.95, .06, 6.95, M.hazard, 0, y + .15, 0, 0, sg);
      edge.receiveShadow = true;
      // broken walls / antenna
      const wallA = this.addBoxMesh(3.2, 1.9, .35, M.concrete, -1.5, y + 1.0, -2.6, 0, sg);
      wallA.rotation.y = .05;
      const wallB = this.addBoxMesh(.35, 1.4, 2.5, M.concrete, 2.6, y + .75, -1.5, 0, sg);
      wallB.rotation.y = -.1;
      const mast = new THREE.Mesh(new THREE.CylinderGeometry(.12, .18, 6.5, 5), M.steel);
      mast.position.set(-2.1, y + 3.5, 1.8); sg.add(mast);
      const dish = new THREE.Mesh(new THREE.ConeGeometry(.75, .3, 8, 1, true), M.steel);
      dish.rotation.x = Math.PI; dish.rotation.z = .6; dish.position.set(-2.1, y + 6.4, 1.8); sg.add(dish);
      // crates
      this.addBoxMesh(.9, .9, .9, M.crate, 2.2, y + .55, 2.1, .2, sg);
      this.addBoxMesh(.6, .55, .65, M.crate, 1.55, y + .36, 2.35, -.4, sg);
      this.addBoxCollider(site.x, site.x + 3.0, site.z + 1.4, site.z + 3.0, 'prop');
      // lights
      const pylon = new THREE.Mesh(new THREE.BoxGeometry(.16, 2.6, .16), M.darkMetal);
      pylon.position.set(2.8, y + 1.3, -2.8); sg.add(pylon);
      const beacon = new THREE.Mesh(new THREE.SphereGeometry(.13, 6, 5), new THREE.MeshBasicMaterial({ color: site.hue, toneMapped: false }));
      beacon.position.set(2.8, y + 2.66, -2.8); sg.add(beacon);
      // beam
      const beamMat = new THREE.MeshBasicMaterial({ color: site.hue, transparent: true, opacity: .12, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false, toneMapped: false });
      const beam = new THREE.Mesh(new THREE.CylinderGeometry(.16, .9, 38, 8, 1, true), beamMat);
      beam.position.set(0, y + 19, 0);
      sg.add(beam);
      const beam2 = new THREE.Mesh(new THREE.CylinderGeometry(.05, .26, 38, 6, 1, true), beamMat.clone());
      beam2.material.opacity = .26;
      beam2.position.copy(beam.position);
      sg.add(beam2);

      const coreGroup = new THREE.Group();
      coreGroup.position.set(0, y + 1.3, 0);
      sg.add(coreGroup);
      const coreMat = new THREE.MeshLambertMaterial({ color: site.hue, emissive: site.hue, emissiveIntensity: 1.2 });
      const core = new THREE.Mesh(new THREE.CylinderGeometry(.24, .3, .85, 8), coreMat);
      core.castShadow = true; coreGroup.add(core);
      const coreGlow = new THREE.Mesh(new THREE.SphereGeometry(.55, 8, 6), new THREE.MeshBasicMaterial({ color: site.hue, transparent: true, opacity: .12, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }));
      coreGroup.add(coreGlow);
      for (let r = 0; r < 3; r++) {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(.34 + r * .08, .025, 4, 14), new THREE.MeshBasicMaterial({ color: site.hue, toneMapped: false }));
        ring.rotation.x = Math.PI / 2; ring.position.y = -.25 + r * .25; coreGroup.add(ring);
      }
      const coreLight = new THREE.PointLight(site.hue, 12, 8, 2);
      coreGroup.add(coreLight);
      const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowCyan, color: site.hue, transparent: true, opacity: .75, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
      sprite.scale.setScalar(2.6); coreGroup.add(sprite);

      const coreObj = {
        idx, site, group: sg, coreGroup, beam, beam2, coreLight, beacon, core, collected: false, baseY: y + 1.3,
      };
      this.cores.push(coreObj);
      const it = {
        id: 'core-' + idx, kind: 'core', pos: new THREE.Vector3(site.x, y + 1.3, site.z), radius: 2.7,
        label: () => `RECOVER ${site.code} — ISOTOPE CORE`,
        onUse: (game) => this.collectCore(coreObj, game),
      };
      coreObj.interact = it;
      this.interactables.push(it);

      // medkit at one site
      if (idx !== 0) this.addMedkit(site.x - 2.1, y, site.z + 2.0, sg);

      // site note
      if (site.note === 3) {
        this.addNote(3, 'FIELD LOG — RELAY 07', 'The cores are warm even through the case. Voss says they keep the lift aligned to the surface shaft; without all three the ascent shears off the rails.\n\nSomething has been circling the relay for six hours. It never looks at the floodlights. It only listens.\n\nI am going to leave the beacon running. If you can hear the rain, you are close.', new THREE.Vector3(site.x + 1.2, y + 1.1, site.z - 1.9), sg);
      }
      if (site.note === 4) {
        this.addNote(4, 'FIELD LOG — SINKHOLE 03', 'We lost the second survey team here. Their radios were still transmitting when we found the camp — no bodies, no blood. Just footprints in a wide, patient circle.\n\nThe Mossman does not hunt with its eyes. It waits for the jungle to tell it where you are.\n\nWalk softly. Throw a stone if you must. Never let it hear you twice from the same place.', new THREE.Vector3(site.x + 1.5, y + 1.1, site.z - 1.6), sg);
      }
      if (site.note === 5) {
        this.addNote(5, 'FIELD LOG — RELAY 12', 'Last core. Last chance.\n\nIf you are the one reading this, do not try to fight it. Get back to the lab. Feed the terminal. Take the lift.\n\nAnd if the doors are closed when you get there — use the exterior release. It is on the left side of every frame, just like the inside switch.\n\n— VOSS', new THREE.Vector3(site.x - 1.4, y + 1.1, site.z - 1.6), sg);
      }
    });
  }

  addMedkit(x, y, z, parent) {
    const M = this.mats;
    const g = new THREE.Group();
    g.position.set(x - (parent.position?.x || 0), y + .35, z - (parent.position?.z || 0));
    parent.add(g);
    this.addBoxMesh(.62, .34, .42, new THREE.MeshLambertMaterial({ color: 0x24352a, emissive: 0x0f2417 }), 0, 0, 0, 0, g);
    const crossMat = new THREE.MeshBasicMaterial({ color: 0x9dff8f, toneMapped: false });
    this.addBoxMesh(.3, .07, .02, crossMat, 0, .02, .22, 0, g);
    this.addBoxMesh(.08, .3, .02, crossMat, 0, .02, .22, 0, g);
    const glow = new THREE.PointLight(0x7dffb0, 2.3, 2.4, 2); glow.position.set(0, .4, 0); g.add(glow);
    const obj = { group: g, used: false };
    const it = {
      id: 'medkit-' + x + '-' + z, kind: 'medkit', pos: new THREE.Vector3(x, y + .4, z), radius: 2.1,
      label: () => 'USE FIELD TRAUMA KIT',
      onUse: (game) => {
        if (obj.used) return;
        obj.used = true; g.visible = false; it.enabled = false;
        game.heal(48);
        game.toast('TRAUMA KIT', 'Wounds sealed. Keep moving.', 'good');
      },
    };
    g.userData.medkit = obj;
    this.interactables.push(it);
    this.medkits.push(obj);
  }

  buildLift() {
    const M = this.mats;
    const g = new THREE.Group(); g.position.set(0, 0, 0); this.lab.add(g); this.liftGroup = g;
    const base = new THREE.Mesh(new THREE.CylinderGeometry(1.65, 1.75, .14, 12), M.darkMetal);
    base.position.y = .07; base.receiveShadow = true; g.add(base);
    const inner = new THREE.Mesh(new THREE.CylinderGeometry(1.35, 1.35, .03, 12), M.metal);
    inner.position.y = .15; g.add(inner);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.48, .05, 4, 24), new THREE.MeshBasicMaterial({ color: 0x6ff8d2, transparent: true, opacity: .32, toneMapped: false }));
    ring.rotation.x = Math.PI / 2; ring.position.y = .17; g.add(ring);
    this.liftRing = ring;
    const chevrons = new THREE.Mesh(new THREE.RingGeometry(1.1, 1.3, 6), new THREE.MeshBasicMaterial({ color: 0xd8b148, transparent: true, opacity: .16, side: THREE.DoubleSide, toneMapped: false }));
    chevrons.rotation.x = -Math.PI / 2; chevrons.position.y = .16; g.add(chevrons);
    this.liftChevrons = chevrons;
    // ceiling hatch panels
    this.hatch = [];
    for (const s of [-1, 1]) {
      const p = new THREE.Mesh(new THREE.BoxGeometry(1.8, .12, 3.2), this.mats.darkMetal);
      p.position.set(s * .9, WALL_H - .12, 0); g.add(p); this.hatch.push(p);
      const hz = new THREE.Mesh(new THREE.BoxGeometry(.1, .02, 3.2), new THREE.MeshBasicMaterial({ color: 0x6ff8d2, toneMapped: false }));
      hz.position.set(s * .9, WALL_H - .19, 0); g.add(hz);
    }
    // lift beam
    const beamMat = new THREE.MeshBasicMaterial({ color: 0x7dffe0, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, toneMapped: false });
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(1.18, 1.45, 4.7, 16, 1, true), beamMat);
    beam.position.y = 2.5; g.add(beam); this.liftBeam = beam;
    const light = new THREE.PointLight(0x6ff8d2, 0, 10, 2);
    light.position.set(0, 2.2, 0); g.add(light); this.liftLight = light;
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(1.4, .47), new THREE.MeshBasicMaterial({ map: T.liftSign, toneMapped: false }));
    sign.position.set(0, 3.8, -1.7); g.add(sign);
    this.liftInteract = {
      id: 'lift', kind: 'lift', pos: new THREE.Vector3(0, .4, 0), radius: 2.1,
      label: () => this.ascentReady ? 'ENTER ASCENT LIFT // SURFACE' : (this.ascentActive ? 'ASCENT LIFT // ARRIVING' : 'ASCENT LIFT // OFFLINE'),
      enabled: false,
      onUse: (game) => { if (this.ascentReady) game.finishGame(); },
    };
    this.interactables.push(this.liftInteract);
  }

  buildFireflies() {
    const count = 110;
    const pos = new Float32Array(count * 3);
    this.fireflyBase = [];
    for (let i = 0; i < count; i++) {
      let x, z;
      do { x = (rand() - .5) * 420; z = (rand() - .5) * 420; } while (Math.hypot(x, z) < 18);
      const y = this.heightAt(x, z) + .5 + rand() * 3;
      pos[i * 3] = x; pos[i * 3 + 1] = y; pos[i * 3 + 2] = z;
      this.fireflyBase.push({ x, y, z, phase: rand() * Math.PI * 2, speed: .35 + rand() * .6 });
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({ map: glowGreen, color: 0xb9ff63, size: .5, sizeAttenuation: true, transparent: true, opacity: .66, depthWrite: false, blending: THREE.AdditiveBlending });
    this.fireflies = new THREE.Points(geo, mat);
    this.group.add(this.fireflies);

    // distant mist planes
    const mistMat = new THREE.MeshBasicMaterial({ color: 0x4d7159, transparent: true, opacity: .035, depthWrite: false, side: THREE.DoubleSide, fog: true });
    for (let i = 0; i < 18; i++) {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(32 + rand() * 40, 7 + rand() * 8), mistMat);
      const a = rand() * Math.PI * 2, r = 35 + rand() * 170;
      m.position.set(Math.cos(a) * r, this.heightAt(Math.cos(a) * r, Math.sin(a) * r) + 3.5, Math.sin(a) * r);
      m.lookAt(Math.cos(a) * r * 0.01, m.position.y, Math.sin(a) * r * 0.01);
      this.group.add(m);
    }
  }

  /* ------------------------------------------------------------------ */
  updateInteractablePositions() {
    for (const it of this.interactables) {
      if (it.local && it.group) {
        it.group.updateMatrixWorld();
        it.pos.copy(it.local).applyMatrix4(it.group.matrixWorld);
      }
      if (it.kind === 'core' && it.coreGroup) {
        it.pos.copy(it.pos);
      }
    }
  }

  getInteractable(playerPos) {
    this.updateInteractablePositions();
    let best = null, bestD = Infinity;
    for (const it of this.interactables) {
      if (it.enabled === false) continue;
      if (it.collected) continue;
      const dx = it.pos.x - playerPos.x, dz = it.pos.z - playerPos.z;
      const d = Math.hypot(dx, dz);
      if (d > it.radius) continue;
      if (Math.abs(it.pos.y - (playerPos.y + 1)) > 2.4) continue;
      if (d < bestD) { best = it; bestD = d; }
    }
    return best;
  }

  toggleDoor(door, game) {
    door.target = door.target > 0.5 ? 0 : 1;
    door.moving = true;
    door.soundPlayed = false;
    const opening = door.target > 0.5;
    if (game) {
      game.audio.door(opening, this.panFor(door.group.position, game.player?.pos));
      game.emitNoise(door.group.position, 1.0, 'hydraulic');
      game.toast(`HYDRAULIC DOOR 0${door.id + 1}`, opening ? `PRESSURE RELEASED // ${door.name} FRAME OPEN` : `SEALING // ${door.name} FRAME`, opening ? 'good' : 'warn');
    }
    if (opening) {
      // physically nudge the player/monster aside if standing in the doorway
    }
  }

  openAllDoors(game) {
    for (const d of this.doors) if (d.target < .5) this.toggleDoor(d, game);
  }

  panFor(pos, playerPos) {
    if (!playerPos) return 0;
    const dx = pos.x - playerPos.x, dz = pos.z - playerPos.z;
    const camYaw = Math.atan2(dx, dz);
    return clamp(Math.sin(camYaw) * .6, -0.8, 0.8);
  }

  collectCore(core, game) {
    if (core.collected) return;
    core.collected = true;
    this.coreCount++;
    core.interact.enabled = false;
    core.coreGroup.visible = false;
    core.beam.visible = false;
    core.beam2.visible = false;
    core.coreLight.intensity = 0;
    core.beacon.material.color.setHex(0x3c4a3e);
    this.consoleSockets[core.idx].material.color.setHex(core.site.hue);
    this.consoleSockets[core.idx].material.needsUpdate = true;
    if (game) {
      game.audio.pickup();
      game.emitNoise(core.site, 0.7, 'core');
      game.onCoreCollected(core);
      game.effects?.burst(new THREE.Vector3(core.site.x, core.baseY, core.site.z), core.site.hue, 44, 2.6);
    }
  }

  useConsole(game) {
    if (this.coreCount < 3) {
      game.audio.ui(false);
      game.toast('TERMINAL LOCKED', `ISOTOPE ARRAY INCOMPLETE — ${this.coreCount}/3 CORES INSTALLED. FOLLOW THE BEACONS.`, 'warn');
      return;
    }
    if (this.ascentActive) {
      game.audio.ui(false);
      game.toast('ASCENT IN PROGRESS', this.ascentReady ? 'THE LIFT IS READY. STEP ONTO THE PAD.' : 'EMERGENCY SHAFT PRESSURISING — HOLD POSITION.', 'warn');
      return;
    }
    this.beginAscent(game);
  }

  beginAscent(game) {
    this.ascentActive = true;
    this.ascentStart = this.time;
    this.ascentReadyAt = this.time + 13;
    this.consoleRing.material.color.setHex(0xff6040);
    this.consoleGlow.color.setHex(0xff6040);
    this.mats.screen.map = T.screenRed; // shared material: main console goes red
    this.mats.screen.needsUpdate = true;
    this.ambientLabLight.color.setHex(0xff4020);
    this.ambientLabLight.intensity = 25;
    if (game) {
      game.audio.alarm();
      game.audio.monsterRoar(0, .6);
      game.emitNoise(new THREE.Vector3(0, 0, 0), 1.4, 'ascent');
      game.onAscentBegin();
    }
  }

  update(dt, time, player, game) {
    this.time = time;

    // doors
    for (const d of this.doors) {
      const prev = d.open;
      const dir = d.target > .5 ? 1 : -1;
      d.open = clamp(d.open + dir * dt / 2.6, 0, 1);
      const amount = smooth(d.open);
      const off = amount * 1.72;
      d.panels[0].position.x = -(DOOR_HALF / 2) - off;
      d.panels[1].position.x = (DOOR_HALF / 2) + off;
      const ledColor = d.open > .08 ? 0x8dff6b : (d.target > .5 ? 0xffc95a : 0xff6040);
      d.lampMat.color.setHex(ledColor);
      d.inside.ledMat.color.setHex(d.open > .08 ? 0x8dff6b : 0xffc95a);
      d.outside.ledMat.color.setHex(d.open > .08 ? 0x8dff6b : 0xffc95a);
      d.inside.lever.rotation.x = lerp(0, -0.5, amount);
      d.outside.lever.rotation.x = lerp(0, -0.5, amount);
      if (Math.abs(prev - d.open) > 0.002) {
        d.collider.enabled = d.open < 0.52;
        if (!d.soundPlayed && d.open > 0.02) {
          d.soundPlayed = true;
        }
      }
      // panel camera blockers move with meshes (raycaster uses matrixWorld)
    }

    // lab lights flicker
    for (const L of this.labLights) {
      const f = L.flicker ? (0.78 + Math.sin(time * 17 + L.phase) * .04 + (Math.sin(time * 3.7 + L.phase) > .96 ? -.55 : 0)) : 1;
      L.light.intensity = L.base * f;
      L.fixture.material.color.setRGB(0.85 * f, 0.94 * f, 0.75 * f);
    }
    if (this.ascentActive) {
      const pulse = .78 + Math.sin(time * 7) * .22;
      this.ambientLabLight.intensity = 20 * pulse;
    }
    this.consoleRing.rotation.z = time * .7;
    this.consoleRing.position.y = 1.2 + Math.sin(time * 2.2) * .03;

    // tank bubbles
    for (const b of this.bubbles) {
      b.position.y += b.userData.speed * dt;
      if (b.position.y > 3.45) b.position.y = .55;
      b.material.opacity = .18 + .4 * Math.sin(time * 3 + b.userData.speed * 10) ** 2;
    }
    this.tankLight.intensity = 11 + Math.sin(time * 1.4) * 2.5;

    // cores bob
    for (const c of this.cores) {
      if (c.collected) continue;
      c.coreGroup.position.y = c.baseY + Math.sin(time * 1.7 + c.idx) * .11;
      c.coreGroup.rotation.y += dt * .7;
      c.beam.material.opacity = .09 + Math.sin(time * 1.2 + c.idx) * .035;
      c.beam2.material.opacity = .2 + Math.sin(time * 2.0 + c.idx) * .06;
      c.beacon.material.color.setHex(c.site.hue);
    }

    // lift sequence
    if (this.ascentActive) {
      const p = clamp((time - this.ascentStart) / 13, 0, 1);
      const hatch = smooth(clamp((p - .1) / .55, 0, 1));
      this.hatch[0].position.x = -.9 - hatch * 1.65;
      this.hatch[1].position.x = .9 + hatch * 1.65;
      this.liftRing.material.opacity = .32 + p * .55 + Math.sin(time * 8) * .12;
      this.liftChevrons.rotation.z += dt * (.6 + p * 2);
      this.liftChevrons.material.opacity = .16 + p * .35;
      this.liftBeam.material.opacity = p * .2 + Math.sin(time * 6) * .035 * p;
      this.liftLight.intensity = p * 24;
      if (!this.ascentReady && time >= this.ascentReadyAt) {
        this.ascentReady = true;
        this.liftInteract.enabled = true;
        if (game && !this.liftReadyNotified) {
          this.liftReadyNotified = true;
          game.onLiftReady();
        }
      }
    } else {
      this.liftRing.material.opacity = .18 + Math.sin(time * 1.5) * .05;
      this.liftChevrons.rotation.z += dt * .15;
    }

    // fireflies drift
    if (this.fireflies) {
      const arr = this.fireflies.geometry.attributes.position.array;
      for (let i = 0; i < this.fireflyBase.length; i++) {
        const b = this.fireflyBase[i];
        arr[i * 3] = b.x + Math.sin(time * b.speed + b.phase) * 1.2;
        arr[i * 3 + 1] = b.y + Math.sin(time * b.speed * 1.4 + b.phase * 2) * .55;
        arr[i * 3 + 2] = b.z + Math.cos(time * b.speed * .7 + b.phase) * 1.2;
      }
      this.fireflies.geometry.attributes.position.needsUpdate = true;
    }

    // moon light follows player for local shadows
    if (player) {
      this.moonLight.position.set(player.pos.x - 45, player.pos.y + 78, player.pos.z - 35);
      this.moonLight.target.position.set(player.pos.x, player.pos.y, player.pos.z);
      this.moonLight.target.updateMatrixWorld();
    }
  }

  resolveCollisions(pos, radius, options = {}) {
    const boundaries = options.boundary !== false;
    if (boundaries) {
      pos.x = clamp(pos.x, -248, 248);
      pos.z = clamp(pos.z, -248, 248);
    }
    let hit = false;
    for (const c of this.colliders) {
      if (!c.enabled) continue;
      const cx = clamp(pos.x, c.minX, c.maxX);
      const cz = clamp(pos.z, c.minZ, c.maxZ);
      const dx = pos.x - cx, dz = pos.z - cz;
      const d2 = dx * dx + dz * dz;
      if (d2 < radius * radius) {
        if (d2 < 1e-8) {
          // inside box: push toward nearest face
          const dl = pos.x - c.minX, dr = c.maxX - pos.x, dn = pos.z - c.minZ, ds = c.maxZ - pos.z;
          const m = Math.min(dl, dr, dn, ds);
          if (m === dl) pos.x = c.minX - radius;
          else if (m === dr) pos.x = c.maxX + radius;
          else if (m === dn) pos.z = c.minZ - radius;
          else pos.z = c.maxZ + radius;
        } else {
          const d = Math.sqrt(d2);
          pos.x = cx + dx / d * radius;
          pos.z = cz + dz / d * radius;
        }
        hit = true;
      }
    }
    for (const c of this.circles) {
      const dx = pos.x - c.x, dz = pos.z - c.z;
      const rr = radius + c.r;
      const d2 = dx * dx + dz * dz;
      if (d2 < rr * rr && d2 > 1e-8) {
        const d = Math.sqrt(d2);
        pos.x = c.x + dx / d * rr;
        pos.z = c.z + dz / d * rr;
        hit = true;
      }
    }
    return hit;
  }

  nearbyTrees(pos, radius) {
    const out = [];
    for (const t of this.trees) {
      const dx = t.x - pos.x, dz = t.z - pos.z;
      if (dx * dx + dz * dz < radius * radius) out.push(t);
    }
    return out;
  }
}
