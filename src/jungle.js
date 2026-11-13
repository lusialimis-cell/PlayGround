import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import {
  barkTexture,
  concreteTexture,
  coreTexture,
  crateTexture,
  dirtTexture,
  glowTexture,
  hazardTexture,
  leafTexture,
  makeTextTexture,
  metalPanelTexture,
  mossSkinTexture,
  rustTexture,
  terrainTexture,
  warningTexture,
} from './textures.js';
import { RNG, clamp, terrainHeight, terrainSlope } from './utils.js';

const yAxis = new THREE.Vector3(0, 1, 0);
const tmpColor = new THREE.Color();
const tmpMat = new THREE.Matrix4();
const tmpQuat = new THREE.Quaternion();
const tmpScale = new THREE.Vector3(1, 1, 1);
const tmpPos = new THREE.Vector3();
const UP = new THREE.Vector3(0, 1, 0);

function addBoxGeo(list, w, h, d, x, y, z, rx = 0, ry = 0, rz = 0) {
  const geo = new THREE.BoxGeometry(w, h, d);
  tmpQuat.setFromEuler(new THREE.Euler(rx, ry, rz));
  tmpPos.set(x, y, z);
  tmpScale.set(1, 1, 1);
  tmpMat.compose(tmpPos, tmpQuat, tmpScale);
  geo.applyMatrix4(tmpMat);
  list.push(geo);
  return geo;
}

function addCylinderGeo(list, radiusTop, radiusBottom, height, segments, x, y, z, rx = 0, ry = 0, rz = 0) {
  const geo = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, segments);
  tmpQuat.setFromEuler(new THREE.Euler(rx, ry, rz));
  tmpPos.set(x, y, z);
  tmpScale.set(1, 1, 1);
  tmpMat.compose(tmpPos, tmpQuat, tmpScale);
  geo.applyMatrix4(tmpMat);
  list.push(geo);
  return geo;
}

export class Jungle {
  constructor(scene, lab) {
    this.scene = scene;
    this.lab = lab;
    this.group = new THREE.Group();
    this.group.name = 'JungleReserve';
    scene.add(this.group);
    this.detailGroup = new THREE.Group();
    this.detailGroup.name = 'StaticLandmarks';
    this.group.add(this.detailGroup);
    this.treeColliders = [];
    this.rockColliders = [];
    this.cores = [];
    this.elapsed = 0;
    this.materials = this.createMaterials();
    this.buildTerrain();
    this.buildPaths();
    this.buildExteriorBunker();
    this.buildForest();
    this.buildLandmarks();
    this.mergeStaticDetails();
    this.buildCores();
    this.buildAtmosphere();
  }

  createMaterials() {
    return {
      terrain: new THREE.MeshStandardMaterial({
        map: terrainTexture(),
        vertexColors: true,
        color: 0xa2b58a,
        roughness: 0.96,
        metalness: 0.02,
      }),
      dirt: new THREE.MeshStandardMaterial({ map: dirtTexture(), color: 0xbfa97f, roughness: 1, polygonOffset: true, polygonOffsetFactor: -1 }),
      bark: new THREE.MeshStandardMaterial({ map: barkTexture(), color: 0xa88e66, roughness: 0.98, metalness: 0.02 }),
      leafDark: new THREE.MeshStandardMaterial({ map: leafTexture(), color: 0x5d7d45, roughness: 0.9, metalness: 0.02 }),
      leafMid: new THREE.MeshStandardMaterial({ map: leafTexture(), color: 0x78944e, roughness: 0.9, metalness: 0.02 }),
      leafLight: new THREE.MeshStandardMaterial({ map: leafTexture(), color: 0x93a95b, roughness: 0.9, metalness: 0.02 }),
      rock: new THREE.MeshStandardMaterial({ color: 0x596253, roughness: 1, flatShading: true }),
      rockMoss: new THREE.MeshStandardMaterial({ color: 0x4b5f43, roughness: 1, flatShading: true }),
      concrete: new THREE.MeshStandardMaterial({ map: concreteTexture(), color: 0x8d8f7f, roughness: 0.96 }),
      metal: new THREE.MeshStandardMaterial({ map: metalPanelTexture(), color: 0x849288, roughness: 0.58, metalness: 0.7 }),
      rust: new THREE.MeshStandardMaterial({ map: rustTexture(), color: 0x9b8467, roughness: 0.88, metalness: 0.26 }),
      hazard: new THREE.MeshStandardMaterial({ map: hazardTexture(), color: 0xc6b74c, roughness: 0.8 }),
      crate: new THREE.MeshStandardMaterial({ map: crateTexture(), color: 0x9e8963, roughness: 1 }),
      stone: new THREE.MeshStandardMaterial({ color: 0x62695b, roughness: 0.98, flatShading: true }),
      stoneMoss: new THREE.MeshStandardMaterial({ color: 0x4e6046, roughness: 1, flatShading: true }),
      moss: new THREE.MeshStandardMaterial({ map: mossSkinTexture(), color: 0x5d7f46, roughness: 1 }),
      core: new THREE.MeshStandardMaterial({
        map: coreTexture(),
        color: 0xb6fff0,
        emissive: 0x45e3bd,
        emissiveMap: coreTexture(),
        emissiveIntensity: 3.5,
        roughness: 0.2,
        metalness: 0.3,
      }),
      coreCage: new THREE.MeshStandardMaterial({ color: 0x2b3b33, roughness: 0.5, metalness: 0.8 }),
      cyanGlow: new THREE.MeshBasicMaterial({ color: 0x7bffdc, transparent: true, opacity: 0.62, toneMapped: false, side: THREE.DoubleSide }),
      cyanGlowSoft: new THREE.MeshBasicMaterial({ color: 0x51d8b8, transparent: true, opacity: 0.09, toneMapped: false, side: THREE.DoubleSide, depthWrite: false }),
      redGlow: new THREE.MeshBasicMaterial({ color: 0xff4938, toneMapped: false }),
      amberGlow: new THREE.MeshBasicMaterial({ color: 0xffb65f, toneMapped: false }),
      sign: (text) => new THREE.MeshBasicMaterial({
        map: makeTextTexture(text, { width: 512, height: 96, size: 32, color: '#bfd29b', bg: '#10160e', subtle: true }),
        toneMapped: false,
      }),
      warning: new THREE.MeshBasicMaterial({ map: warningTexture(), toneMapped: false }),
    };
  }

  buildTerrain() {
    const size = 500;
    const segments = 220;
    const geometry = new THREE.PlaneGeometry(size, size, segments, segments);
    geometry.rotateX(-Math.PI / 2);
    const pos = geometry.attributes.position;
    const colors = new Float32Array(pos.count * 3);
    const rng = new RNG(74471);
    const slope = new THREE.Vector3();
    for (let i = 0; i < pos.count; i += 1) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const h = terrainHeight(x, z);
      pos.setY(i, h);
      terrainSlope(x, z, slope);
      const steep = 1 - clamp(slope.y, 0, 1);
      const tint = 0.82 + rng.next() * 0.22;
      tmpColor.setRGB(
        (0.72 + steep * 0.3 + (tint - 1) * 0.2) * tint,
        (0.8 + (tint - 1) * 0.12) * tint,
        (0.54 + steep * 0.12) * tint,
      );
      colors[i * 3] = tmpColor.r;
      colors[i * 3 + 1] = tmpColor.g;
      colors[i * 3 + 2] = tmpColor.b;
    }
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.computeVertexNormals();
    const terrain = new THREE.Mesh(geometry, this.materials.terrain);
    terrain.receiveShadow = true;
    terrain.castShadow = false;
    terrain.name = 'ReserveTerrain';
    this.group.add(terrain);
    this.terrain = terrain;

    // A ring of distant, silhouetted high terrain outside the playable bounds.
    const rimGeo = new THREE.RingGeometry(248, 470, 64, 8);
    rimGeo.rotateX(-Math.PI / 2);
    const rimPos = rimGeo.attributes.position;
    for (let i = 0; i < rimPos.count; i += 1) {
      const x = rimPos.getX(i);
      const z = rimPos.getZ(i);
      const d = Math.hypot(x, z);
      if (d > 252) rimPos.setY(i, 1.5 + Math.sin(x * 0.03) * 3 + Math.cos(z * 0.04) * 4 + (d - 250) * 0.045);
      else rimPos.setY(i, terrainHeight(x, z));
    }
    rimGeo.computeVertexNormals();
    const rim = new THREE.Mesh(rimGeo, new THREE.MeshStandardMaterial({ color: 0x263323, roughness: 1, side: THREE.DoubleSide }));
    rim.receiveShadow = true;
    this.group.add(rim);
  }

  buildPaths() {
    const material = this.materials.dirt;
    const routes = [
      { x: 0, z: -9, dx: 0, dz: -1 },
      { x: 0, z: 9, dx: 0, dz: 1 },
      { x: 9, z: 0, dx: 1, dz: 0 },
      { x: -9, z: 0, dx: -1, dz: 0 },
    ];
    const rng = new RNG(2331);
    const verts = [];
    const uvs = [];
    const indices = [];
    for (const route of routes) {
      let cursor = verts.length / 3;
      const px = -route.dz;
      const pz = route.dx;
      const length = 61;
      const steps = 80;
      for (let i = 0; i <= steps; i += 1) {
        const t = (i / steps) * length;
        const wobble = Math.sin(t * 0.19 + route.dx * 3.1) * 1.5 + Math.sin(t * 0.067) * 2.2;
        const cx = route.x + route.dx * t + px * wobble;
        const cz = route.z + route.dz * t + pz * wobble;
        const width = 2.9 + Math.sin(t * 0.11) * 0.7 + rng.range(-0.2, 0.2);
        for (const side of [-1, 1]) {
          const x = cx + px * side * width * 0.5;
          const z = cz + pz * side * width * 0.5;
          const y = terrainHeight(x, z) + 0.035;
          verts.push(x, y, z);
          uvs.push(i / steps * 8, side < 0 ? 0 : 1);
        }
        if (i < steps) {
          const a = cursor + i * 2;
          indices.push(a, a + 2, a + 1, a + 1, a + 2, a + 3);
        }
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geo.setIndex(indices);
    geo.computeVertexNormals();
    const mesh = new THREE.Mesh(geo, material);
    mesh.receiveShadow = true;
    this.group.add(mesh);
  }

  buildExteriorBunker() {
    const m = this.materials;
    const g = new THREE.Group();
    g.name = 'BunkerExterior';
    this.detailGroup.add(g);
    // Concrete cap and earth-stained retaining structure.
    const slab = new THREE.Mesh(new THREE.BoxGeometry(16.9, 0.65, 16.9), m.concrete);
    slab.position.y = 4.82;
    slab.castShadow = true;
    slab.receiveShadow = true;
    g.add(slab);
    for (let i = 0; i < 5; i += 1) {
      const lip = new THREE.Mesh(new THREE.BoxGeometry(17.0, 0.1, 0.3), m.stoneMoss);
      lip.position.set(0, 4.5 + i * 0.06, -8.45);
      lip.rotation.x = 0.02;
      g.add(lip);
    }
    // Buttress columns.
    for (const sx of [-1, 1]) {
      for (const sz of [-1, 1]) {
        const col = new THREE.Mesh(new THREE.BoxGeometry(1.15, 5.3, 1.15), m.concrete);
        col.position.set(sx * 7.9, 2.55, sz * 7.9);
        col.castShadow = true;
        col.receiveShadow = true;
        g.add(col);
        const moss = new THREE.Mesh(new THREE.BoxGeometry(1.18, 0.75, 1.18), m.moss);
        moss.position.set(sx * 7.9, 0.5, sz * 7.9);
        g.add(moss);
      }
    }
    // Ventilation stacks and roof equipment.
    const vents = [
      [-4.9, 5.2, -4.4, 0.8, 2.4, 0.8],
      [4.4, 5.15, -3.8, 1.3, 2.0, 1.3],
      [3.2, 5.2, 5.1, 0.7, 2.7, 0.7],
      [-3.8, 5.12, 4.6, 1.0, 1.8, 1.0],
    ];
    for (const [x, y, z, w, h, d] of vents) {
      const vent = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m.rust);
      vent.position.set(x, y, z);
      vent.castShadow = true;
      g.add(vent);
      const cap = new THREE.Mesh(new THREE.BoxGeometry(w + 0.2, 0.15, d + 0.2), m.metal);
      cap.position.set(x, y + h / 2, z);
      g.add(cap);
      for (let i = 0; i < 4; i += 1) {
        const slat = new THREE.Mesh(new THREE.BoxGeometry(w + 0.08, 0.05, d + 0.08), m.rust);
        slat.position.set(x, y - h / 2 + 0.4 + i * 0.28, z);
        g.add(slat);
      }
    }
    // Big antenna on roof.
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.12, 9, 5), m.metal);
    mast.position.set(-5.8, 9.1, -1.2);
    g.add(mast);
    for (let i = 0; i < 4; i += 1) {
      const cross = new THREE.Mesh(new THREE.BoxGeometry(1.5 - i * 0.18, 0.05, 0.05), m.metal);
      cross.position.set(-5.8, 7.5 + i * 1.1, -1.2);
      g.add(cross);
    }
    const beacon = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.18, 0.18), m.redGlow);
    beacon.position.set(-5.8, 13.7, -1.2);
    beacon.userData.keepUnmerged = true;
    g.add(beacon);
    this.beacon = beacon;
    const beaconLight = new THREE.PointLight(0xff3d29, 4, 15, 2);
    beaconLight.position.copy(beacon.position);
    g.add(beaconLight);
    this.beaconLight = beaconLight;

    // Exterior flood fixtures over each door.
    const doorDefs = [
      { x: 0, z: -8.0, ry: 0 },
      { x: 0, z: 8.0, ry: Math.PI },
      { x: 8.0, z: 0, ry: Math.PI / 2 },
      { x: -8.0, z: 0, ry: -Math.PI / 2 },
    ];
    for (const def of doorDefs) {
      const fixture = new THREE.Group();
      fixture.position.set(def.x, 3.9, def.z);
      fixture.rotation.y = def.ry;
      const housing = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.22, 0.28), m.metal);
      housing.rotation.x = 0.4;
      fixture.add(housing);
      const lens = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.12, 0.04), m.amberGlow);
      lens.position.set(0, -0.02, 0.16);
      lens.rotation.x = 0.4;
      fixture.add(lens);
      this.group.add(fixture);
    }

    // Weathered APE PROJECT facade plates.
    const plaque = new THREE.Mesh(new THREE.PlaneGeometry(4.6, 0.75), m.sign('APE PROJECT // SITE 09'));
    plaque.position.set(0, 4.08, -8.36);
    plaque.rotation.y = Math.PI;
    g.add(plaque);
    const plaque2 = new THREE.Mesh(new THREE.PlaneGeometry(3.8, 0.6), m.sign('BIOHAZARD CONTAINMENT'));
    plaque2.position.set(0, 4.05, 8.36);
    g.add(plaque2);
    const sidePlaque = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 0.55), m.sign('DEEP RESERVE ACCESS'));
    sidePlaque.position.set(8.36, 4.02, 0);
    sidePlaque.rotation.y = Math.PI / 2;
    g.add(sidePlaque);

    // Ground aprons.
    for (const def of doorDefs) {
      const apron = new THREE.Mesh(new THREE.BoxGeometry(def.ry === 0 || def.ry === Math.PI ? 5.2 : 2.8, 0.08, def.ry === 0 || def.ry === Math.PI ? 2.8 : 5.2), m.concrete);
      apron.position.set(def.x * 1.18, 0.02, def.z * 1.18);
      apron.receiveShadow = true;
      g.add(apron);
      const stripes = new THREE.Mesh(new THREE.BoxGeometry(def.ry === 0 || def.ry === Math.PI ? 4.5 : 2.2, 0.012, def.ry === 0 || def.ry === Math.PI ? 2.2 : 4.5), m.hazard);
      stripes.position.set(def.x * 1.18, 0.08, def.z * 1.18);
      g.add(stripes);
    }
  }

  buildForest() {
    const rng = new RNG(99173);
    const barkGeos = [];
    const leafDark = [];
    const leafMid = [];
    const leafLight = [];
    const trunkColliders = [];

    const addTree = (x, z, scale = 1) => {
      const ground = terrainHeight(x, z);
      const height = rng.range(5.2, 11.2) * scale;
      const trunkW = rng.range(0.52, 1.18) * scale;
      addBoxGeo(barkGeos, trunkW, height, trunkW, x, ground + height / 2, z, rng.range(-0.04, 0.04), rng.range(0, Math.PI), rng.range(-0.04, 0.04));
      // Root flares.
      for (let i = 0; i < 4; i += 1) {
        const a = (i / 4) * Math.PI * 2 + rng.range(-0.3, 0.3);
        addBoxGeo(barkGeos, trunkW * 0.4, trunkW * 0.9, trunkW * 1.8, x + Math.cos(a) * trunkW * 0.7, ground + trunkW * 0.32, z + Math.sin(a) * trunkW * 0.7, 0, -a, 0.65);
      }
      // Branches reaching into the canopy.
      for (let i = 0; i < 4; i += 1) {
        const a = rng.range(0, Math.PI * 2);
        const len = rng.range(1.4, 3.1) * scale;
        const by = ground + height * rng.range(0.62, 0.94);
        addBoxGeo(barkGeos, 0.13 * scale, len, 0.13 * scale, x + Math.cos(a) * len * 0.46, by, z + Math.sin(a) * len * 0.46, Math.PI / 2 * 0.86, -a + Math.PI / 2, 0);
      }
      const canopyBase = ground + height * rng.range(0.82, 1.02);
      const canopyR = rng.range(2.5, 4.7) * scale;
      const clusters = rng.int(7, 12);
      for (let i = 0; i < clusters; i += 1) {
        const a = rng.range(0, Math.PI * 2);
        const rad = rng.range(0, canopyR);
        const cx = x + Math.cos(a) * rad;
        const cz = z + Math.sin(a) * rad;
        const cy = canopyBase + rng.range(-0.3, 3.1) * scale;
        const size = rng.range(1.1, 2.6) * scale;
        const r = rng.next();
        const arr = r < 0.33 ? leafDark : r < 0.7 ? leafMid : leafLight;
        addBoxGeo(arr, size, size * rng.range(0.55, 0.95), size, cx, cy, cz, rng.range(-0.15, 0.15), rng.range(0, Math.PI), rng.range(-0.15, 0.15));
        if (size > 1.9) {
          addBoxGeo(arr, size * 0.7, size * 0.6, size * 0.7, cx + rng.range(-0.5, 0.5), cy + rng.range(-0.7, 0.5), cz + rng.range(-0.5, 0.5), 0, rng.range(0, Math.PI), 0);
        }
      }
      // Hanging pixel vines.
      if (rng.next() > 0.5) {
        for (let i = 0; i < rng.int(1, 3); i += 1) {
          const vx = x + rng.range(-canopyR, canopyR);
          const vz = z + rng.range(-canopyR, canopyR);
          const len = rng.range(1.4, 4.3) * scale;
          addBoxGeo(leafDark, 0.08, len, 0.08, vx, canopyBase - len / 2, vz, 0, 0, 0);
          addBoxGeo(leafMid, 0.4, 0.18, 0.4, vx, canopyBase - len, vz, 0, rng.range(0, Math.PI), 0);
        }
      }
      trunkColliders.push({ x, z, radius: Math.max(0.38, trunkW * 0.68) });
    };

    let attempts = 0;
    while (trunkColliders.length < 285 && attempts < 2400) {
      attempts += 1;
      const x = rng.range(-238, 238);
      const z = rng.range(-238, 238);
      const d = Math.hypot(x, z);
      if (d < 21) continue;
      if (Math.abs(x) < 5.5 && Math.abs(z) < 90) continue;
      if (Math.abs(z) < 5.5 && Math.abs(x) < 90) continue;
      if (d > 240) continue;
      // Thin clearings around the old field relics.
      if (this.nearPoint(x, z, -116, 73, 12) || this.nearPoint(x, z, 142, -94, 12) || this.nearPoint(x, z, 47, 173, 12)) continue;
      // Some natural clustering leaves open tracking fields.
      const density = 1 - Math.max(0, Math.sin(x * 0.031) * Math.cos(z * 0.027)) * 0.5;
      if (rng.next() > density * 0.84) continue;
      addTree(x, z, rng.range(0.72, 1.5));
    }

    const makeMerged = (list, material, cast = true) => {
      if (!list.length) return null;
      const merged = mergeGeometries(list, false);
      const mesh = new THREE.Mesh(merged, material);
      mesh.castShadow = cast;
      mesh.receiveShadow = true;
      this.group.add(mesh);
      for (const geo of list) geo.dispose();
      return mesh;
    };
    makeMerged(barkGeos, this.materials.bark, true);
    makeMerged(leafDark, this.materials.leafDark, true);
    makeMerged(leafMid, this.materials.leafMid, true);
    makeMerged(leafLight, this.materials.leafLight, true);
    this.treeColliders = trunkColliders;

    this.buildUndergrowth(rng);
    this.buildRocks(rng);
  }

  buildUndergrowth(rng) {
    const bush = [];
    const fern = [];
    const reed = [];
    const leafMats = [this.materials.leafDark, this.materials.leafMid, this.materials.leafLight];
    for (let i = 0; i < 750; i += 1) {
      const x = rng.range(-238, 238);
      const z = rng.range(-238, 238);
      const d = Math.hypot(x, z);
      if (d < 12 || d > 242) continue;
      if (Math.abs(x) < 3.5 && Math.abs(z) < 85) continue;
      if (Math.abs(z) < 3.5 && Math.abs(x) < 85) continue;
      const y = terrainHeight(x, z);
      const arr = rng.next() < 0.45 ? bush : rng.next() < 0.7 ? fern : reed;
      const s = rng.range(0.35, 1.25);
      if (arr === bush) {
        const count = rng.int(2, 5);
        for (let j = 0; j < count; j += 1) {
          addBoxGeo(bush, rng.range(0.4, 1.1) * s, rng.range(0.3, 0.8) * s, rng.range(0.4, 1.0) * s, x + rng.range(-0.45, 0.45) * s, y + rng.range(0.18, 0.42) * s, z + rng.range(-0.45, 0.45) * s, 0, rng.range(0, Math.PI), 0);
        }
      } else if (arr === fern) {
        for (let j = 0; j < 5; j += 1) {
          const a = (j / 5) * Math.PI * 2 + rng.range(-0.3, 0.3);
          addBoxGeo(fern, 0.08, rng.range(0.5, 1.2) * s, 0.6 * s, x + Math.cos(a) * 0.3 * s, y + 0.3 * s, z + Math.sin(a) * 0.3 * s, 0.28, a, 0.62);
        }
      } else {
        for (let j = 0; j < 3; j += 1) {
          addBoxGeo(reed, 0.05, rng.range(0.8, 1.7) * s, 0.05, x + rng.range(-0.3, 0.3) * s, y + 0.5 * s, z + rng.range(-0.3, 0.3) * s, rng.range(-0.15, 0.15), 0, rng.range(-0.15, 0.15));
        }
      }
    }
    for (const [list, mat] of [[bush, leafMats[0]], [fern, leafMats[1]], [reed, leafMats[2]]]) {
      if (!list.length) continue;
      const merged = mergeGeometries(list, false);
      const mesh = new THREE.Mesh(merged, mat);
      mesh.castShadow = false;
      mesh.receiveShadow = true;
      this.group.add(mesh);
      for (const g of list) g.dispose();
    }
  }

  buildRocks(rng) {
    const rockGeos = [];
    const mossGeos = [];
    for (let i = 0; i < 165; i += 1) {
      const x = rng.range(-240, 240);
      const z = rng.range(-240, 240);
      const d = Math.hypot(x, z);
      if (d < 14 || d > 240) continue;
      if (Math.abs(x) < 4 && Math.abs(z) < 70) continue;
      if (Math.abs(z) < 4 && Math.abs(x) < 70) continue;
      const y = terrainHeight(x, z);
      const s = rng.range(0.35, 2.2);
      const geo = new THREE.DodecahedronGeometry(s, 0);
      geo.scale(1, rng.range(0.5, 0.9), rng.range(0.75, 1.2));
      geo.rotateY(rng.range(0, Math.PI));
      geo.translate(x, y + s * 0.32, z);
      rockGeos.push(geo);
      if (rng.next() > 0.52) {
        const mossGeo = new THREE.DodecahedronGeometry(s * 0.98, 0);
        mossGeo.scale(1.04, 0.3, 1.06);
        mossGeo.translate(x, y + s * 0.72, z);
        mossGeos.push(mossGeo);
      }
      if (s > 1.0) this.rockColliders.push({ x, z, radius: s * 0.8 });
    }
    for (const [list, mat] of [[rockGeos, this.materials.rock], [mossGeos, this.materials.rockMoss]]) {
      if (!list.length) continue;
      const merged = mergeGeometries(list, false);
      const mesh = new THREE.Mesh(merged, mat);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      this.group.add(mesh);
      for (const g of list) g.dispose();
    }
  }

  nearPoint(x, z, px, pz, r) {
    return Math.hypot(x - px, z - pz) < r;
  }

  buildLandmarks() {
    this.buildWatchtower(-128, 83);
    this.buildCrashSite(154, -105);
    this.buildShrine(37, 184);
  }

  buildWatchtower(x, z) {
    const m = this.materials;
    const y = terrainHeight(x, z);
    const g = new THREE.Group();
    g.position.set(x, y, z);
    this.detailGroup.add(g);
    for (const sx of [-1, 1]) {
      for (const sz of [-1, 1]) {
        const leg = new THREE.Mesh(new THREE.BoxGeometry(0.42, 7.5, 0.42), m.rust);
        leg.position.set(sx * 2.1, 3.75, sz * 2.1);
        leg.rotation.z = sx * 0.055;
        leg.rotation.x = -sz * 0.055;
        leg.castShadow = true;
        g.add(leg);
        for (let i = 0; i < 4; i += 1) {
          const brace = new THREE.Mesh(new THREE.BoxGeometry(0.1, 1.9, 0.1), m.rust);
          brace.position.set(sx * 1.8, 1.05 + i * 1.7, sz * 1.8);
          brace.rotation.z = sx * 0.55;
          g.add(brace);
        }
      }
    }
    const deck = new THREE.Mesh(new THREE.BoxGeometry(6.2, 0.35, 6.2), m.concrete);
    deck.position.y = 7.25;
    deck.castShadow = true;
    deck.receiveShadow = true;
    g.add(deck);
    for (let i = 0; i < 17; i += 1) {
      const railX = -3 + i * 0.375;
      const r1 = new THREE.Mesh(new THREE.BoxGeometry(0.07, 1.25, 0.07), m.rust);
      r1.position.set(railX, 8.03, 3.02);
      g.add(r1);
      const r2 = new THREE.Mesh(new THREE.BoxGeometry(0.07, 1.25, 0.07), m.rust);
      r2.position.set(railX, 8.03, -3.02);
      g.add(r2);
    }
    const rails = [
      [6.2, 0.08, 0.08, 0, 8.62, 3.02],
      [6.2, 0.08, 0.08, 0, 8.62, -3.02],
      [0.08, 0.08, 6.2, 3.02, 8.62, 0],
      [0.08, 0.08, 6.2, -3.02, 8.62, 0],
    ];
    for (const [w, h, d, x2, y2, z2] of rails) {
      const rail = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m.rust);
      rail.position.set(x2, y2, z2);
      g.add(rail);
    }
    // Shack on tower.
    const shack = new THREE.Mesh(new THREE.BoxGeometry(4.6, 2.4, 3.6), m.rust);
    shack.position.set(0, 8.55, -0.6);
    shack.castShadow = true;
    g.add(shack);
    const roof = new THREE.Mesh(new THREE.BoxGeometry(5.2, 0.22, 4.2), m.metal);
    roof.position.set(0, 9.9, -0.6);
    roof.rotation.z = 0.035;
    g.add(roof);
    const window = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 0.8), new THREE.MeshBasicMaterial({ color: 0x171d12, toneMapped: false }));
    window.position.set(0, 8.7, 1.22);
    g.add(window);
    const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.06, 5.8, 5), m.metal);
    antenna.position.set(1.2, 12.7, -1);
    g.add(antenna);
    const warningLight = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.16, 0.16), m.redGlow);
    warningLight.position.set(1.2, 15.6, -1);
    g.add(warningLight);
    const light = new THREE.PointLight(0xff4630, 4, 12, 2);
    light.position.copy(warningLight.position);
    g.add(light);

    // Core pedestal at tower base.
    const ax0 = x + 3.7;
    const az0 = z + 2.0;
    this.coreAnchor0 = new THREE.Vector3(ax0, terrainHeight(ax0, az0), az0);
    // Dead crates.
    for (let i = 0; i < 3; i += 1) {
      const crate = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.8, 0.8), m.crate);
      crate.position.set(-2.8 + i * 0.9, 0.4, 3.6);
      crate.rotation.y = i * 0.3;
      crate.castShadow = true;
      g.add(crate);
    }
  }

  buildCrashSite(x, z) {
    const m = this.materials;
    const y = terrainHeight(x, z);
    const g = new THREE.Group();
    g.position.set(x, y, z);
    g.rotation.y = -0.62;
    this.detailGroup.add(g);
    const fuselage = new THREE.Mesh(new THREE.CylinderGeometry(1.85, 2.1, 10.5, 8), m.metal);
    fuselage.rotation.z = Math.PI / 2;
    fuselage.rotation.y = 0.02;
    fuselage.position.set(0, 1.5, 0);
    fuselage.castShadow = true;
    fuselage.receiveShadow = true;
    g.add(fuselage);
    const nose = new THREE.Mesh(new THREE.ConeGeometry(1.82, 3.4, 8), m.rust);
    nose.rotation.z = -Math.PI / 2;
    nose.position.set(6.75, 1.55, 0);
    g.add(nose);
    // Broken wing.
    const wing = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.3, 10.8), m.metal);
    wing.position.set(-1.4, 1.4, -3.1);
    wing.rotation.z = 0.32;
    wing.rotation.y = -0.18;
    wing.castShadow = true;
    g.add(wing);
    const wing2 = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.25, 5.4), m.rust);
    wing2.position.set(1.6, 0.42, 5.0);
    wing2.rotation.z = -0.16;
    wing2.rotation.y = 0.5;
    g.add(wing2);
    // Tail and engine pods.
    const tail = new THREE.Mesh(new THREE.BoxGeometry(3.8, 0.25, 2.6), m.metal);
    tail.position.set(-5.1, 2.25, 0);
    tail.rotation.z = 0.18;
    g.add(tail);
    for (const sz of [-1, 1]) {
      const engine = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.8, 2.9, 7), m.rust);
      engine.rotation.z = Math.PI / 2;
      engine.position.set(-1.5, 0.9, sz * 3.5);
      g.add(engine);
    }
    // Torn hull gash.
    const gash = new THREE.Mesh(new THREE.BoxGeometry(2.8, 1.2, 0.05), new THREE.MeshBasicMaterial({ color: 0x0a100a }));
    gash.position.set(1.2, 1.55, 2.02);
    g.add(gash);
    // Cargo and debris.
    for (let i = 0; i < 11; i += 1) {
      const s = 0.25 + Math.random() * 0.65;
      const debris = new THREE.Mesh(new THREE.BoxGeometry(s, s * 0.7, s * 1.3), i % 3 ? m.metal : m.rust);
      debris.position.set(-4 + Math.random() * 10, 0.2 + Math.random() * 0.3, -5 + Math.random() * 9);
      debris.rotation.set(Math.random(), Math.random() * 3, Math.random());
      debris.castShadow = true;
      g.add(debris);
    }
    const fire = new THREE.Mesh(new THREE.ConeGeometry(0.7, 2.2, 6), new THREE.MeshBasicMaterial({ color: 0xff8c3c, transparent: true, opacity: 0.65, toneMapped: false }));
    fire.position.set(-4.0, 0.7, 2.8);
    fire.userData.keepUnmerged = true;
    g.add(fire);
    const fireLight = new THREE.PointLight(0xff6d2e, 8, 14, 2);
    fireLight.position.copy(fire.position);
    g.add(fireLight);
    this.fire = fire;
    this.fireLight = fireLight;
    const ax1 = x + 3.6;
    const az1 = z + 2.2;
    this.coreAnchor1 = new THREE.Vector3(ax1, terrainHeight(ax1, az1), az1);
    const hazard = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 1.0), m.sign('WRECK // 09'));
    hazard.position.set(0, 2.8, 2.08);
    hazard.rotation.y = -0.15;
    g.add(hazard);
  }

  buildShrine(x, z) {
    const m = this.materials;
    const y = terrainHeight(x, z);
    const g = new THREE.Group();
    g.position.set(x, y, z);
    this.detailGroup.add(g);
    // Ancient stepped plinth.
    const steps = [[8.4, 0.5, 8.4], [7.2, 0.55, 7.2], [5.9, 0.65, 5.9]];
    steps.forEach(([w, h, d], i) => {
      const step = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), i % 2 ? m.stoneMoss : m.stone);
      step.position.y = h / 2 + i * 0.58;
      step.castShadow = true;
      step.receiveShadow = true;
      g.add(step);
    });
    for (let i = 0; i < 7; i += 1) {
      const a = (i / 7) * Math.PI * 2;
      const px = Math.cos(a) * 5.0;
      const pz = Math.sin(a) * 5.0;
      const h = 2.8 + (i % 3) * 0.7;
      const pillar = new THREE.Mesh(new THREE.BoxGeometry(0.65, h, 0.65), i % 2 ? m.stone : m.stoneMoss);
      pillar.position.set(px, 1.9 + h / 2, pz);
      pillar.rotation.y = a;
      pillar.castShadow = true;
      g.add(pillar);
      const cap = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.24, 0.95), m.stoneMoss);
      cap.position.set(px, 1.9 + h, pz);
      cap.rotation.y = a;
      g.add(cap);
    }
    // Central monolith.
    const obelisk = new THREE.Mesh(new THREE.BoxGeometry(1.35, 4.6, 1.35), m.stoneMoss);
    obelisk.position.y = 4.0;
    obelisk.castShadow = true;
    g.add(obelisk);
    const glyph = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 1.7), new THREE.MeshBasicMaterial({
      map: makeTextTexture('M', { width: 64, height: 128, size: 64, color: '#92b986', bg: '#243023' }),
      toneMapped: false,
    }));
    glyph.position.set(0, 4.2, 0.69);
    g.add(glyph);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(2.2, 0.08, 5, 24), m.cyanGlow);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 1.9;
    g.add(ring);
    this.coreAnchor2 = new THREE.Vector3(x, terrainHeight(x, z), z);
    // Overgrowth.
    for (let i = 0; i < 9; i += 1) {
      const bush = new THREE.Mesh(new THREE.BoxGeometry(0.3 + Math.random() * 0.8, 0.25 + Math.random() * 0.5, 0.3 + Math.random() * 0.8), m.moss);
      bush.position.set(-6 + Math.random() * 12, 0.3, -6 + Math.random() * 12);
      g.add(bush);
    }
  }

  mergeStaticDetails() {
    this.detailGroup.updateMatrixWorld(true);
    const byMaterial = new Map();
    const remove = [];
    const traverse = (object, locked) => {
      const keep = locked || object.userData.keepUnmerged;
      if (object !== this.detailGroup && object.isMesh && !keep) {
        const material = object.material;
        if (material && !Array.isArray(material)) {
          const key = material.uuid;
          if (!byMaterial.has(key)) byMaterial.set(key, { material, geometries: [], cast: false, receive: false });
          const bucket = byMaterial.get(key);
          const geo = object.geometry.clone();
          geo.applyMatrix4(object.matrixWorld);
          bucket.geometries.push(geo);
          bucket.cast = bucket.cast || object.castShadow;
          bucket.receive = bucket.receive || object.receiveShadow;
          remove.push(object);
        }
      }
      for (const child of object.children) traverse(child, keep);
    };
    traverse(this.detailGroup, false);
    for (const object of remove) {
      object.parent.remove(object);
      object.geometry.dispose();
    }
    for (const bucket of byMaterial.values()) {
      if (!bucket.geometries.length) continue;
      const merged = mergeGeometries(bucket.geometries, false);
      if (!merged) continue;
      const mesh = new THREE.Mesh(merged, bucket.material);
      mesh.castShadow = bucket.cast;
      mesh.receiveShadow = bucket.receive;
      this.detailGroup.add(mesh);
      for (const geo of bucket.geometries) geo.dispose();
    }
  }

  buildCores() {
    const anchors = [
      { pos: this.coreAnchor0.clone(), landmark: 'WATCHTOWER' },
      { pos: this.coreAnchor1.clone(), landmark: 'CRASH SITE' },
      { pos: this.coreAnchor2.clone(), landmark: 'SUNKEN SHRINE' },
    ];
    anchors.forEach((anchor, index) => {
      const group = new THREE.Group();
      group.position.copy(anchor.pos);
      this.group.add(group);
      const isShrine = index === 2;
      const baseY = isShrine ? 1.9 : 0;
      // Pedestal.
      const ped = new THREE.Mesh(new THREE.BoxGeometry(1.45, isShrine ? 0.3 : 1.0, 1.45), this.materials.coreCage);
      ped.position.y = baseY + 0.5;
      ped.castShadow = true;
      group.add(ped);
      const collar = new THREE.Mesh(new THREE.BoxGeometry(1.02, 0.12, 1.02), this.materials.cyanGlow);
      collar.position.y = baseY + 1.04;
      group.add(collar);
      // Crystal made of stacked voxels.
      const crystal = new THREE.Group();
      crystal.position.y = baseY + 1.65;
      group.add(crystal);
      for (let i = 0; i < 5; i += 1) {
        const w = 0.24 + (i === 2 ? 0.18 : 0);
        const coreBox = new THREE.Mesh(new THREE.BoxGeometry(w, 0.27, w), this.materials.core);
        coreBox.position.y = (i - 2) * 0.22;
        coreBox.rotation.y = i * 0.35;
        crystal.add(coreBox);
      }
      const cage = new THREE.Group();
      crystal.add(cage);
      for (const angle of [0, Math.PI / 2]) {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(0.52, 0.022, 4, 16), this.materials.coreCage);
        ring.rotation.x = Math.PI / 2;
        ring.rotation.z = angle;
        cage.add(ring);
      }
      // Light pillar and ground rings.
      const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.7, 34, 8, 1, true), this.materials.cyanGlowSoft);
      beam.position.y = baseY + 18;
      group.add(beam);
      const beamCore = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.15, 22, 5, 1, true), new THREE.MeshBasicMaterial({ color: 0x73ffd7, transparent: true, opacity: 0.25, toneMapped: false, depthWrite: false, side: THREE.DoubleSide }));
      beamCore.position.y = baseY + 11;
      group.add(beamCore);
      const groundRing = new THREE.Mesh(new THREE.RingGeometry(1.7, 1.82, 24), this.materials.cyanGlow);
      groundRing.rotation.x = -Math.PI / 2;
      groundRing.position.y = baseY + 0.03;
      group.add(groundRing);
      const groundRing2 = new THREE.Mesh(new THREE.RingGeometry(2.6, 2.64, 32), this.materials.cyanGlowSoft);
      groundRing2.rotation.x = -Math.PI / 2;
      groundRing2.position.y = baseY + 0.04;
      group.add(groundRing2);
      const light = new THREE.PointLight(0x66ffd5, 18, 14, 2);
      light.position.y = baseY + 1.8;
      group.add(light);

      const core = {
        index,
        landmark: anchor.landmark,
        group,
        crystal,
        beam,
        beamCore,
        groundRing,
        light,
        position: new THREE.Vector3(anchor.pos.x, anchor.pos.y + baseY + 1.65, anchor.pos.z),
      };
      this.cores.push(core);
    });
  }

  buildAtmosphere() {
    const count = 720;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    const rng = new RNG(88012);
    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = rng.range(-44, 44);
      positions[i * 3 + 1] = rng.range(0.25, 13);
      positions[i * 3 + 2] = rng.range(-44, 44);
      speeds[i] = rng.range(0.05, 0.3);
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
      map: glowTexture(),
      color: 0xb5d678,
      transparent: true,
      opacity: 0.46,
      size: 0.18,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const points = new THREE.Points(geometry, material);
    points.frustumCulled = false;
    this.scene.add(points);
    this.motes = { points, speeds };
  }

  update(dt, time, playerPos) {
    this.elapsed += dt;
    if (this.beacon) {
      const on = Math.sin(time * 3.2) > 0.65;
      this.beacon.visible = on;
      this.beaconLight.intensity = on ? 4 : 0.2;
    }
    if (this.fire) {
      this.fire.scale.y = 0.8 + Math.sin(time * 11.7) * 0.2 + Math.sin(time * 23.1) * 0.1;
      this.fire.scale.x = 0.85 + Math.sin(time * 9.1) * 0.1;
      this.fireLight.intensity = 6 + Math.sin(time * 17.3) * 2 + Math.sin(time * 31.1) * 1;
    }
    for (const core of this.cores) {
      core.crystal.rotation.y += dt * 0.85;
      core.crystal.position.y += Math.sin(time * 1.7 + core.index) * 0.0008;
      core.light.intensity = 16 + Math.sin(time * 3.3 + core.index) * 4;
      core.groundRing.rotation.z += dt * 0.35;
    }
    // Camera-local drifting spores.
    if (this.motes) {
      const points = this.motes.points;
      points.position.set(playerPos.x, Math.max(0, playerPos.y - 0.8), playerPos.z);
      const pos = points.geometry.attributes.position;
      for (let i = 0; i < pos.count; i += 1) {
        let x = pos.getX(i) + Math.sin(time * 0.2 + i) * dt * 0.18;
        let y = pos.getY(i) + this.motes.speeds[i] * dt * 0.34;
        let z = pos.getZ(i) + Math.cos(time * 0.17 + i * 1.7) * dt * 0.14;
        if (x > 45) x = -45;
        if (z > 45) z = -45;
        if (y > 13) y = 0.2;
        pos.setXYZ(i, x, y, z);
      }
      pos.needsUpdate = true;
    }
  }

  collidesAt(x, z, radius = 0.4) {
    if (Math.abs(x) > 246 || Math.abs(z) > 246) return true;
    for (const tree of this.treeColliders) {
      const dx = x - tree.x;
      const dz = z - tree.z;
      if (dx * dx + dz * dz < (tree.radius + radius) ** 2) return true;
    }
    for (const rock of this.rockColliders) {
      const dx = x - rock.x;
      const dz = z - rock.z;
      if (dx * dx + dz * dz < (rock.radius + radius) ** 2) return true;
    }
    return false;
  }
}
