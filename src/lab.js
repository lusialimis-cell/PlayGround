import * as THREE from 'three';
import {
  barkTexture,
  ceilingTexture,
  containerTexture,
  coreTexture,
  crateTexture,
  hazardTexture,
  makeTextTexture,
  metalFloorTexture,
  metalPanelTexture,
  metalWallTexture,
  rustTexture,
  screenTexture,
  warningTexture,
} from './textures.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { clamp, easeInOutCubic } from './utils.js';

const _v = new THREE.Vector3();

function box(parent, {
  w = 1, h = 1, d = 1, x = 0, y = 0, z = 0, material, cast = true, receive = true, rotY = 0,
}) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
  mesh.position.set(x, y, z);
  mesh.rotation.y = rotY;
  mesh.castShadow = cast;
  mesh.receiveShadow = receive;
  parent.add(mesh);
  return mesh;
}

function plane(parent, {
  w = 1, h = 1, x = 0, y = 0, z = 0, material, rotX = 0, rotY = 0, rotZ = 0,
}) {
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), material);
  mesh.position.set(x, y, z);
  mesh.rotation.set(rotX, rotY, rotZ);
  parent.add(mesh);
  return mesh;
}

export class Laboratory {
  constructor(scene, callbacks = {}) {
    this.scene = scene;
    this.callbacks = callbacks;
    this.group = new THREE.Group();
    this.group.name = 'LaboratoryLobby';
    scene.add(this.group);
    this.doors = [];
    this.interactables = [];
    this.colliders = [];
    this.emissives = [];
    this.lights = [];
    this.elapsed = 0;
    this.materials = this.createMaterials();
    this.buildRoom();
    this.buildDoors();
    this.buildLabDetails();
    this.buildTerminal();
    this.mergeDoorPanels();
    this.mergeStaticGeometry();
  }

  createMaterials() {
    const wall = metalWallTexture();
    const floor = metalFloorTexture();
    const ceiling = ceilingTexture();
    const hazard = hazardTexture();
    const panel = metalPanelTexture();
    const rust = rustTexture();
    const warning = warningTexture();

    return {
      wall: new THREE.MeshStandardMaterial({ map: wall, color: 0x9ba79e, roughness: 0.82, metalness: 0.48 }),
      wallDark: new THREE.MeshStandardMaterial({ map: wall, color: 0x65726a, roughness: 0.8, metalness: 0.42 }),
      floor: new THREE.MeshStandardMaterial({ map: floor, color: 0xa3aea4, roughness: 0.72, metalness: 0.5 }),
      ceiling: new THREE.MeshStandardMaterial({ map: ceiling, color: 0x7f8c83, roughness: 0.9, metalness: 0.2 }),
      trim: new THREE.MeshStandardMaterial({ color: 0x101a16, roughness: 0.65, metalness: 0.55 }),
      steel: new THREE.MeshStandardMaterial({ map: panel, color: 0x9aaba1, roughness: 0.46, metalness: 0.8 }),
      steelDark: new THREE.MeshStandardMaterial({ color: 0x26332d, roughness: 0.48, metalness: 0.72 }),
      rust: new THREE.MeshStandardMaterial({ map: rust, color: 0x9b8d73, roughness: 0.94, metalness: 0.22 }),
      hazard: new THREE.MeshStandardMaterial({ map: hazard, color: 0xe0c758, roughness: 0.8, metalness: 0.25 }),
      warning: new THREE.MeshBasicMaterial({ map: warning, color: 0xd5bb59, transparent: false }),
      crate: new THREE.MeshStandardMaterial({ map: crateTexture(), color: 0xad9872, roughness: 0.93 }),
      container: new THREE.MeshStandardMaterial({ map: containerTexture(), color: 0xbab073, roughness: 0.7, metalness: 0.35 }),
      glass: new THREE.MeshPhysicalMaterial({
        color: 0x9ed6bc,
        transparent: true,
        opacity: 0.22,
        roughness: 0.15,
        metalness: 0.1,
        side: THREE.DoubleSide,
      }),
      screen0: new THREE.MeshBasicMaterial({ map: screenTexture(0), toneMapped: false }),
      screen1: new THREE.MeshBasicMaterial({ map: screenTexture(1), toneMapped: false }),
      screen2: new THREE.MeshBasicMaterial({ map: screenTexture(2), toneMapped: false }),
      cyanGlow: new THREE.MeshBasicMaterial({ color: 0x79ffe0, toneMapped: false }),
      greenGlow: new THREE.MeshBasicMaterial({ color: 0x9fe36a, toneMapped: false }),
      amberGlow: new THREE.MeshBasicMaterial({ color: 0xffb35c, toneMapped: false }),
      redGlow: new THREE.MeshBasicMaterial({ color: 0xff5038, toneMapped: false }),
      fluid: new THREE.MeshStandardMaterial({
        color: 0x5bc992,
        emissive: 0x2fae75,
        emissiveIntensity: 0.9,
        transparent: true,
        opacity: 0.55,
        roughness: 0.25,
        metalness: 0.1,
      }),
      cable: new THREE.MeshStandardMaterial({ color: 0x121c17, roughness: 0.9 }),
      paper: new THREE.MeshStandardMaterial({ map: makeTextTexture('M-08', { width: 128, height: 64, size: 21, color: '#22301f', bg: '#cfc9a3' }), roughness: 1 }),
      screenLabel: [
        'SECTOR 09 // LOBBY',
        'AUTHORIZED PERSONNEL ONLY',
        'CONTAINMENT PROTOCOL',
        'BIOHAZARD LEVEL 5',
      ].map((text) => new THREE.MeshBasicMaterial({
        map: makeTextTexture(text, { width: 512, height: 80, size: 30, color: '#c4d9a0', bg: '#07100a', subtle: true }),
        toneMapped: false,
      })),
    };
  }

  buildRoom() {
    const m = this.materials;
    const wallH = 4.5;
    const half = 7.5;
    const thick = 0.32;
    const doorW = 3.15;

    // Floor and ceiling.
    box(this.group, { w: 15, h: 0.16, d: 15, y: -0.08, material: m.floor, cast: false });
    box(this.group, { w: 15, h: 0.2, d: 15, y: wallH + 0.1, material: m.ceiling, cast: false });
    this.buildFloorMarkings();

    const wallPositions = [
      { axis: 'x', sign: -1, center: -half, len: 15, door: 'N' },
      { axis: 'x', sign: 1, center: half, len: 15, door: 'S' },
      { axis: 'z', sign: -1, center: -half, len: 15, door: 'W' },
      { axis: 'z', sign: 1, center: half, len: 15, door: 'E' },
    ];

    // For north/south walls the long axis is X. For east/west it is Z.
    for (const doorAxis of ['N', 'S', 'E', 'W']) {
      const northSouth = doorAxis === 'N' || doorAxis === 'S';
      const sideLen = (15 - doorW) / 2;
      const sign = (doorAxis === 'N' || doorAxis === 'W') ? -1 : 1;
      const offset = sign * half;
      for (const dir of [-1, 1]) {
        const center = dir * (doorW / 2 + sideLen / 2);
        if (northSouth) {
          box(this.group, { w: sideLen, h: wallH, d: thick, x: center, y: wallH / 2, z: offset, material: m.wall });
          this.colliders.push({ minX: center - sideLen / 2, maxX: center + sideLen / 2, minZ: offset - thick / 2, maxZ: offset + thick / 2, kind: 'wall' });
        } else {
          box(this.group, { w: thick, h: wallH, d: sideLen, x: offset, y: wallH / 2, z: center, material: m.wall });
          this.colliders.push({ minX: offset - thick / 2, maxX: offset + thick / 2, minZ: center - sideLen / 2, maxZ: center + sideLen / 2, kind: 'wall' });
        }
      }
      // Header above the door.
      if (northSouth) {
        box(this.group, { w: doorW, h: wallH - 3.65, d: thick, x: 0, y: 3.65 + (wallH - 3.65) / 2, z: offset, material: m.wallDark });
      } else {
        box(this.group, { w: thick, h: wallH - 3.65, d: doorW, x: offset, y: 3.65 + (wallH - 3.65) / 2, z: 0, material: m.wallDark });
      }
      // Wall base trim.
      for (const dir of [-1, 1]) {
        const center = dir * (doorW / 2 + sideLen / 2);
        if (northSouth) {
          box(this.group, { w: sideLen, h: 0.22, d: 0.39, x: center, y: 0.11, z: offset, material: m.trim });
          box(this.group, { w: sideLen, h: 0.1, d: 0.38, x: center, y: 3.38, z: offset, material: m.hazard });
        } else {
          box(this.group, { w: 0.39, h: 0.22, d: sideLen, x: offset, y: 0.11, z: center, material: m.trim });
          box(this.group, { w: 0.38, h: 0.1, d: sideLen, x: offset, y: 3.38, z: center, material: m.hazard });
        }
      }
    }

    // Structural ribs.
    for (let i = -3; i <= 3; i += 1) {
      const x = i * 2.15;
      const z = i * 2.15;
      if (Math.abs(x) > 6.3 || Math.abs(z) > 6.3) continue;
      box(this.group, { w: 0.1, h: 0.08, d: 14.5, x, y: 4.35, z: 0, material: m.trim, cast: false });
    }

    // Ceiling light housings.
    const housingMat = m.steelDark;
    for (const z of [-3.7, 0, 3.7]) {
      box(this.group, { w: 5.2, h: 0.12, d: 0.56, x: 0, y: 4.37, z, material: housingMat, cast: false });
      const glow = box(this.group, { w: 4.95, h: 0.055, d: 0.34, x: 0, y: 4.285, z, material: m.cyanGlow, cast: false, receive: false });
      this.emissives.push(glow);
    }
    // Pipes.
    for (const x of [-6.4, -5.9, 6.1, 6.6]) {
      const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 14.4, 6), m.steelDark);
      pipe.rotation.x = Math.PI / 2;
      pipe.position.set(x, 4.13, 0);
      pipe.castShadow = true;
      this.group.add(pipe);
    }
    for (const z of [-6.3, -5.8, 5.9]) {
      const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 14.4, 5), m.rust);
      pipe.rotation.z = Math.PI / 2;
      pipe.position.set(0, 4.16, z);
      this.group.add(pipe);
    }

    // Wall displays and labels.
    const labelA = plane(this.group, {
      w: 2.4, h: 0.38, x: -4.2, y: 3.62, z: -7.32,
      material: m.screenLabel[0],
    });
    labelA.rotation.y = 0;
    plane(this.group, { w: 0.92, h: 0.92, x: -6.95, y: 2.45, z: -4.9, material: m.warning, rotY: Math.PI / 2 });
    plane(this.group, { w: 1.8, h: 0.34, x: 4.5, y: 3.62, z: -7.32, material: m.screenLabel[1] });
    plane(this.group, { w: 1.8, h: 0.34, x: -4.4, y: 3.62, z: 7.32, material: m.screenLabel[2], rotY: Math.PI });
    plane(this.group, { w: 1.7, h: 0.32, x: 7.32, y: 3.62, z: -4.1, material: m.screenLabel[3], rotY: -Math.PI / 2 });
    plane(this.group, { w: 1.3, h: 0.3, x: -7.32, y: 2.95, z: 4.4, material: m.screenLabel[1], rotY: Math.PI / 2 });

    this.addLighting();
  }

  buildFloorMarkings() {
    const m = this.materials;
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x8a9d54, transparent: true, opacity: 0.28, side: THREE.DoubleSide });
    const ring = new THREE.Mesh(new THREE.RingGeometry(2.55, 2.63, 48), ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.008;
    this.group.add(ring);
    const ring2 = new THREE.Mesh(new THREE.RingGeometry(1.82, 1.86, 48), ringMat);
    ring2.rotation.x = -Math.PI / 2;
    ring2.position.y = 0.009;
    this.group.add(ring2);
    const hazardMat = m.hazard;
    for (const [x, z, w, d] of [[0, -5.2, 3.2, 0.12], [0, 5.2, 3.2, 0.12], [-5.2, 0, 0.12, 3.2], [5.2, 0, 0.12, 3.2]]) {
      box(this.group, { w, h: 0.012, d, x, y: 0.01, z, material: hazardMat, cast: false });
    }
    // Painted AP-09 insignia.
    const decal = new THREE.Mesh(new THREE.CircleGeometry(1.35, 8), new THREE.MeshBasicMaterial({ color: 0x7f8f4c, transparent: true, opacity: 0.075 }));
    decal.rotation.x = -Math.PI / 2;
    decal.position.set(0, 0.006, 0.8);
    this.group.add(decal);
  }

  addLighting() {
    const lightSpecs = [
      { pos: [0, 4.18, -3.7], color: 0xb5ffe1, intensity: 24, distance: 8.5 },
      { pos: [0, 4.18, 3.7], color: 0xa8f5d4, intensity: 22, distance: 8.5 },
      { pos: [-4.5, 3.3, 0], color: 0x7fdcb8, intensity: 10, distance: 7 },
      { pos: [4.5, 3.3, 1.2], color: 0xa7df93, intensity: 9, distance: 6 },
      { pos: [0, 1.3, 0.8], color: 0x6deac3, intensity: 7, distance: 5 },
    ];
    for (const spec of lightSpecs) {
      const light = new THREE.PointLight(spec.color, spec.intensity, spec.distance, 1.7);
      light.position.set(...spec.pos);
      this.group.add(light);
      this.lights.push(light);
    }
    const fill = new THREE.PointLight(0xffc889, 9, 7, 2);
    fill.position.set(0, 3, 6.2);
    this.group.add(fill);
    this.lights.push(fill);
  }

  buildDoors() {
    const defs = [
      { id: 'N', label: 'B-1', name: 'NORTH AIRLOCK', pos: new THREE.Vector3(0, 0, -7.5), outward: new THREE.Vector3(0, 0, -1), angle: 0 },
      { id: 'S', label: 'B-2', name: 'SOUTH AIRLOCK', pos: new THREE.Vector3(0, 0, 7.5), outward: new THREE.Vector3(0, 0, 1), angle: Math.PI },
      { id: 'E', label: 'B-3', name: 'EAST AIRLOCK', pos: new THREE.Vector3(7.5, 0, 0), outward: new THREE.Vector3(1, 0, 0), angle: Math.PI / 2 },
      { id: 'W', label: 'B-4', name: 'WEST AIRLOCK', pos: new THREE.Vector3(-7.5, 0, 0), outward: new THREE.Vector3(-1, 0, 0), angle: -Math.PI / 2 },
    ];
    for (const def of defs) this.doors.push(this.buildDoor(def));
  }

  buildDoor(def) {
    const m = this.materials;
    const group = new THREE.Group();
    group.position.copy(def.pos);
    group.rotation.y = def.angle;
    this.group.add(group);

    const doorW = 3.15;
    const doorH = 3.62;
    const left = new THREE.Vector3(-def.outward.z, 0, def.outward.x).multiplyScalar(-1);

    // Heavy frame with bolts.
    for (const side of [-1, 1]) {
      box(group, { w: 0.42, h: 3.86, d: 0.58, x: side * 1.79, y: 1.93, z: 0, material: m.steelDark });
      for (let i = 0; i < 10; i += 1) {
        box(group, { w: 0.075, h: 0.075, d: 0.03, x: side * 1.79, y: 0.42 + i * 0.33, z: 0.31, material: m.steel, cast: false });
      }
    }
    box(group, { w: 4.0, h: 0.5, d: 0.58, x: 0, y: 3.86, z: 0, material: m.steelDark });
    box(group, { w: 3.47, h: 0.1, d: 0.64, x: 0, y: 3.55, z: 0, material: m.hazard, cast: false });
    box(group, { w: 0.38, h: 0.07, d: 0.7, x: 0, y: 4.12, z: 0, material: m.trim });

    // Door slabs.
    const panelMat = m.steel;
    const panelDark = m.steelDark;
    const panels = [];
    for (const side of [-1, 1]) {
      const panelGroup = new THREE.Group();
      panelGroup.position.x = side * 0.75;
      panelGroup.userData.keepUnmerged = true;
      group.add(panelGroup);
      const slab = box(panelGroup, { w: 1.51, h: 3.42, d: 0.26, y: 1.72, material: panelMat });
      for (const y of [0.55, 1.7, 2.74]) {
        box(panelGroup, { w: 1.4, h: 0.11, d: 0.32, y, material: panelDark });
        box(panelGroup, { w: 1.23, h: 0.035, d: 0.33, y: y + 0.1, material: m.hazard, cast: false });
      }
      // Piston rails.
      box(panelGroup, { w: 0.16, h: 2.65, d: 0.35, x: side * 0.52, y: 1.72, material: panelDark });
      box(panelGroup, { w: 0.055, h: 2.25, d: 0.38, x: side * 0.52, y: 1.72, material: m.cyanGlow, cast: false });
      const lightMat = m.redGlow.clone();
      const indicator = box(panelGroup, { w: 0.12, h: 0.12, d: 0.03, x: side * 0.27, y: 3.18, z: 0.16, material: lightMat, cast: false });
      panels.push({ group: panelGroup, side, indicator, baseX: side * 0.75 });
    }
    // Hydraulic roof pistons.
    for (const side of [-1, 1]) {
      const piston = box(group, { w: 0.15, h: 0.3, d: 0.8, x: side * 0.85, y: 3.72, z: 0.1, material: m.rust });
      piston.rotation.x = 0.1;
      box(group, { w: 0.1, h: 0.1, d: 0.9, x: side * 0.85, y: 3.7, z: 0.42, material: m.steel, cast: false });
    }

    // Tactile control switch, mounted on the LEFT side as viewed from inside.
    // Door groups are rotated into place, so the physical left position and
    // inward face are resolved into the group's local coordinate system.
    const northSouth = def.outward.x === 0;
    const switchGroup = new THREE.Group();
    switchGroup.position.set(northSouth ? -2.18 : 2.18, 1.35, northSouth ? 0.29 : -0.29);
    switchGroup.rotation.y = northSouth ? 0 : Math.PI;
    switchGroup.userData.keepUnmerged = true;
    group.add(switchGroup);

    box(switchGroup, { w: 0.42, h: 0.66, d: 0.16, material: m.steelDark });
    box(switchGroup, { w: 0.34, h: 0.5, d: 0.19, material: m.steel });
    const leverPivot = new THREE.Group();
    leverPivot.position.set(0, 0.08, 0.14);
    switchGroup.add(leverPivot);
    box(leverPivot, { w: 0.06, h: 0.28, d: 0.06, y: -0.12, material: m.rust });
    box(leverPivot, { w: 0.11, h: 0.085, d: 0.15, y: -0.26, material: m.hazard });
    const swLightMat = m.greenGlow.clone();
    const swLight = box(switchGroup, { w: 0.075, h: 0.075, d: 0.04, x: 0.13, y: 0.22, z: 0.11, material: swLightMat, cast: false });
    const swRing = new THREE.Mesh(new THREE.RingGeometry(0.1, 0.12, 12), new THREE.MeshBasicMaterial({ color: 0x81e16d, side: THREE.DoubleSide, transparent: true, opacity: 0.6 }));
    swRing.position.set(0.13, 0.22, 0.12);
    switchGroup.add(swRing);

    // Label plate.
    const labelTexture = makeTextTexture(`AIRLOCK ${def.label}`, { width: 256, height: 64, size: 22, color: '#b9d391', bg: '#111b13', subtle: true });
    plane(switchGroup, { w: 0.5, h: 0.14, y: 0.45, z: 0.085, material: new THREE.MeshBasicMaterial({ map: labelTexture, toneMapped: false }) });

    // Exterior hazard chevrons.
    const outsideSign = new THREE.Mesh(new THREE.PlaneGeometry(1.35, 0.27), new THREE.MeshBasicMaterial({
      map: makeTextTexture('MOSS PROJECT', { width: 512, height: 80, size: 30, color: '#bcce8c', bg: '#13170e' }),
      toneMapped: false,
    }));
    outsideSign.position.set(0, 3.1, -0.37);
    outsideSign.rotation.y = Math.PI;
    group.add(outsideSign);

    // Collider blocking the doorway when closed.
    const collider = {
      minX: def.pos.x - (def.outward.x !== 0 ? 0.4 : 1.6),
      maxX: def.pos.x + (def.outward.x !== 0 ? 0.4 : 1.6),
      minZ: def.pos.z - (def.outward.z !== 0 ? 0.4 : 1.6),
      maxZ: def.pos.z + (def.outward.z !== 0 ? 0.4 : 1.6),
      kind: 'door',
      active: true,
    };
    this.colliders.push(collider);

    const door = {
      ...def,
      group,
      panels,
      leverPivot,
      swLight,
      swRing,
      collider,
      progress: 0,
      target: 0,
      state: 'closed',
      busy: false,
      moveTime: 0,
      switchPosition: new THREE.Vector3(),
      switchGroup,
      indicatorMaterials: panels.map((p) => p.indicator.material),
    };
    switchGroup.getWorldPosition(door.switchPosition);
    const worldSwitch = new THREE.Vector3();
    switchGroup.getWorldPosition(worldSwitch);
    door.switchPosition.copy(worldSwitch);
    door.interactable = {
      id: `door-${def.id}`,
      kind: 'door',
      label: `HYDRAULIC DOOR ${def.label}`,
      action: () => this.toggleDoor(door),
      position: worldSwitch,
      range: 2.1,
      door,
    };
    this.interactables.push(door.interactable);
    return door;
  }

  buildLabDetails() {
    const m = this.materials;

    // Workbenches and shelving along north wall corners.
    this.addShelf(-5.3, -6.8, 0, 0.98);
    this.addShelf(5.3, -6.8, 0, 0.98);
    this.addShelf(-6.85, 4.2, Math.PI / 2, 0.9);
    this.addShelf(6.85, 4.2, -Math.PI / 2, 0.9);
    this.addShelf(-6.85, -4.1, Math.PI / 2, 0.9);
    this.addShelf(6.85, -4.1, -Math.PI / 2, 0.9);

    // Specimen tanks in the corners.
    this.addSpecimenTank(-5.7, 4.9, 0.82);
    this.addSpecimenTank(5.7, 4.9, -0.7);
    this.addSpecimenTank(5.9, -4.8, -1.2);

    // Server racks at east/west.
    this.addServerRack(-7.0, -1.3, Math.PI / 2, 0);
    this.addServerRack(7.0, 1.4, -Math.PI / 2, 1);
    this.addServerRack(-7.0, 1.25, Math.PI / 2, 2);
    this.addServerRack(7.0, -1.45, -Math.PI / 2, 2);

    // Crates and equipment.
    this.addCrateStack(-4.2, 5.8);
    this.addCrateStack(4.2, 5.7);
    this.addCrate(2.9, -5.9, 0.62, 0.12);
    this.addCrate(-3.7, -5.7, 0.55, -0.22);
    box(this.group, { w: 1.0, h: 0.85, d: 0.7, x: -2.9, y: 0.425, z: -6.25, material: m.rust });
    box(this.group, { w: 1.06, h: 0.06, d: 0.76, x: -2.9, y: 0.89, z: -6.25, material: m.steel });
    box(this.group, { w: 0.4, h: 0.1, d: 0.2, x: -2.9, y: 0.68, z: -5.88, material: m.screen0, cast: false });

    // Wheeled lab cart.
    this.addCart(3.55, -3.4, 0.25);

    // Central holographic command table.
    this.addHoloTable();

    // Loose cables.
    for (let i = 0; i < 8; i += 1) {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-6.9 + i * 0.1, 0.02, -6.0 + i * 0.8),
        new THREE.Vector3(-5.5 + Math.sin(i) * 0.4, 0.015, -5.5 + i * 0.6),
        new THREE.Vector3(-4.4, 0.015, -4.9 + i * 0.5),
      ]);
      const geo = new THREE.TubeGeometry(curve, 10, 0.026, 4, false);
      const cable = new THREE.Mesh(geo, m.cable);
      cable.receiveShadow = true;
      this.group.add(cable);
    }

    // Safety signage.
    plane(this.group, { w: 0.55, h: 0.75, x: -6.7, y: 2.1, z: -7.31, material: new THREE.MeshBasicMaterial({ map: warningTexture(), toneMapped: false }) });

    // Wall-mounted speakers for acoustic surveillance.
    for (const [x, z, ry] of [[-2.5, -7.33, 0], [2.5, -7.33, 0], [7.33, 2.5, -Math.PI / 2], [-7.33, -2.5, Math.PI / 2]]) {
      const speaker = new THREE.Group();
      speaker.position.set(x, 3.25, z);
      speaker.rotation.y = ry;
      box(speaker, { w: 0.48, h: 0.7, d: 0.16, material: m.steelDark });
      box(speaker, { w: 0.32, h: 0.42, d: 0.05, y: 0.06, z: 0.11, material: m.trim, cast: false });
      box(speaker, { w: 0.28, h: 0.034, d: 0.02, y: 0.06, z: 0.145, material: m.steel, cast: false });
      this.group.add(speaker);
    }

    // Puddles / wet floor.
    const puddleMat = new THREE.MeshPhysicalMaterial({ color: 0x263e35, roughness: 0.1, metalness: 0.4, transparent: true, opacity: 0.5 });
    for (const [x, z, s] of [[-2.2, 2.6, 0.75], [2.9, 3.9, 0.5], [1.1, -3.4, 0.4]]) {
      const puddle = new THREE.Mesh(new THREE.CircleGeometry(s, 7), puddleMat);
      puddle.rotation.x = -Math.PI / 2;
      puddle.position.set(x, 0.015, z);
      puddle.scale.y = 0.6;
      this.group.add(puddle);
    }
  }

  addShelf(x, z, rotY, scale = 1) {
    const m = this.materials;
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rotY;
    g.scale.setScalar(scale);
    this.group.add(g);
    const w = 2.5;
    const h = 2.15;
    const d = 0.55;
    for (const side of [-1, 1]) {
      box(g, { w: 0.08, h, d, x: side * (w / 2 - 0.06), y: h / 2, material: m.steelDark });
      box(g, { w: 0.09, h: 0.06, d: d + 0.08, x: side * (w / 2 + 0.01), y: 0.03, material: m.trim });
    }
    for (let i = 0; i < 4; i += 1) {
      const y = 0.35 + i * 0.58;
      box(g, { w, h: 0.055, d, y, material: m.steel });
      box(g, { w: w - 0.14, h: 0.015, d: d - 0.08, y: y + 0.035, material: m.rust, cast: false });
      // Bottles and boxes.
      const rng = Math.random;
      for (let j = 0; j < 4; j += 1) {
        const bx = -0.75 + j * 0.5 + (rng() - 0.5) * 0.12;
        if (rng() > 0.35) {
          const glass = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.07, 0.22 + rng() * 0.12, 6), m.glass);
          glass.position.set(bx, y + 0.16, -0.05);
          glass.castShadow = true;
          g.add(glass);
          const fluid = new THREE.Mesh(new THREE.CylinderGeometry(0.038, 0.052, 0.12, 6), m.fluid);
          fluid.position.set(bx, y + 0.105, -0.05);
          g.add(fluid);
        } else {
          box(g, { w: 0.22, h: 0.22 + rng() * 0.1, d: 0.22, x: bx, y: y + 0.14, z: 0, material: m.container });
        }
      }
      for (let j = 0; j < 2; j += 1) {
        box(g, { w: 0.17, h: 0.12, d: 0.3, x: -0.8 + j * 0.6, y: y + 0.1, z: 0.06, material: m.steelDark });
      }
    }
    // A top specimen jar.
    const jar = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.16, 0.55, 8), m.glass);
    jar.position.set(0.55, 2.45, 0);
    g.add(jar);
    const jarFluid = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.13, 0.4, 8), m.fluid);
    jarFluid.position.set(0.55, 2.4, 0);
    g.add(jarFluid);
    box(g, { w: 0.28, h: 0.08, d: 0.28, x: 0.55, y: 2.75, z: 0, material: m.steel });
  }

  addSpecimenTank(x, z, rotY) {
    const m = this.materials;
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rotY;
    this.group.add(g);
    box(g, { w: 1.1, h: 0.45, d: 1.1, y: 0.225, material: m.steelDark });
    box(g, { w: 0.88, h: 1.9, d: 0.88, y: 1.38, material: m.glass });
    box(g, { w: 1.0, h: 0.16, d: 1.0, y: 2.38, material: m.steelDark });
    box(g, { w: 0.92, h: 1.7, d: 0.92, y: 1.38, material: m.fluid });
    // Suspended organic silhouette.
    const body = new THREE.Mesh(new THREE.DodecahedronGeometry(0.26, 0), new THREE.MeshStandardMaterial({ color: 0x324a2a, roughness: 0.8 }));
    body.scale.set(0.8, 1.6, 0.7);
    body.position.y = 1.45;
    g.add(body);
    box(g, { w: 0.06, h: 1.1, d: 0.06, y: 2.2, material: m.cable, cast: false });
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.34, 0.38, 16), m.cyanGlow);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.47;
    g.add(ring);
  }

  addServerRack(x, z, rotY, variant) {
    const m = this.materials;
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rotY;
    this.group.add(g);
    box(g, { w: 1.25, h: 2.15, d: 0.65, y: 1.075, material: m.steelDark });
    box(g, { w: 1.13, h: 1.9, d: 0.7, y: 1.08, material: m.steel });
    for (let i = 0; i < 7; i += 1) {
      box(g, { w: 0.93, h: 0.19, d: 0.05, y: 0.35 + i * 0.25, z: 0.37, material: i % 3 === 0 ? m.screen0 : m.trim, cast: false });
      for (let j = 0; j < 3; j += 1) {
        const led = box(g, { w: 0.028, h: 0.028, d: 0.02, x: -0.3 + j * 0.11, y: 0.41 + i * 0.25, z: 0.41, material: j === 1 ? m.greenGlow : m.redGlow, cast: false });
        if (i === 3 && j === 1) led.material = m.cyanGlow;
      }
    }
    const screen = plane(g, { w: 0.92, h: 0.5, x: 0, y: 2.58, z: 0, material: variant === 1 ? m.screen1 : m.screen0 });
    screen.rotation.x = -0.08;
    box(g, { w: 1.04, h: 0.56, d: 0.1, y: 2.58, z: -0.04, material: m.steelDark });
    // Keyboard.
    box(g, { w: 0.65, h: 0.035, d: 0.22, x: 0, y: 0.93, z: 0.47, material: m.trim, cast: false });
  }

  addCrate(x, z, size, rotY) {
    const m = this.materials;
    const g = new THREE.Group();
    g.position.set(x, size / 2, z);
    g.rotation.y = rotY;
    this.group.add(g);
    box(g, { w: size, h: size, d: size, material: m.crate });
    box(g, { w: size + 0.03, h: 0.07, d: size + 0.03, y: size * 0.28, material: m.steelDark, cast: false });
    box(g, { w: size + 0.03, h: 0.07, d: size + 0.03, y: -size * 0.28, material: m.steelDark, cast: false });
    // Stencil.
    const label = new THREE.MeshBasicMaterial({ map: makeTextTexture('AP-09', { width: 128, height: 64, size: 32, color: '#25271a', bg: '#a79a6c' }), toneMapped: false });
    plane(g, { w: size * 0.55, h: size * 0.19, z: size / 2 + 0.006, y: 0.04, material: label });
  }

  addCrateStack(x, z) {
    const m = this.materials;
    const sizes = [[0.9, 0, 0], [0.72, 0.02, 0.82], [0.58, -0.06, 1.5]];
    for (const [s, ox, oy] of sizes) {
      const g = new THREE.Group();
      g.position.set(x + ox, s / 2 + oy, z);
      this.group.add(g);
      box(g, { w: s, h: s, d: s, material: m.crate });
      box(g, { w: s + 0.02, h: 0.06, d: s + 0.02, y: s * 0.28, material: m.steelDark, cast: false });
    }
    box(this.group, { w: 0.85, h: 0.08, d: 0.6, x: x + 0.1, y: 1.87, z, material: m.steel });
    box(this.group, { w: 0.3, h: 0.18, d: 0.22, x: x + 0.1, y: 1.99, z, material: m.container });
  }

  addCart(x, z, rotY) {
    const m = this.materials;
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rotY;
    this.group.add(g);
    box(g, { w: 1.2, h: 0.08, d: 0.72, y: 0.9, material: m.steel });
    box(g, { w: 1.0, h: 0.04, d: 0.55, y: 0.66, material: m.steel });
    for (const sx of [-1, 1]) {
      for (const sz of [-1, 1]) {
        box(g, { w: 0.05, h: 0.85, d: 0.05, x: sx * 0.52, y: 0.45, z: sz * 0.3, material: m.steelDark });
        const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.07, 8), m.cable);
        wheel.rotation.z = Math.PI / 2;
        wheel.position.set(sx * 0.52, 0.13, sz * 0.34);
        g.add(wheel);
      }
    }
    for (let i = 0; i < 4; i += 1) {
      const vial = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.22, 6), m.glass);
      vial.position.set(-0.3 + i * 0.19, 1.06, 0.05);
      g.add(vial);
      const fill = new THREE.Mesh(new THREE.CylinderGeometry(0.038, 0.038, 0.1, 6), i % 2 ? m.fluid : m.amberGlow);
      fill.position.set(-0.3 + i * 0.19, 1.02, 0.05);
      g.add(fill);
    }
    box(g, { w: 0.3, h: 0.035, d: 0.22, x: 0.05, y: 0.95, z: 0.01, material: m.trim, cast: false });
  }

  addHoloTable() {
    const m = this.materials;
    const g = new THREE.Group();
    g.position.set(0, 0, 0.75);
    this.group.add(g);
    const base = new THREE.Mesh(new THREE.CylinderGeometry(1.08, 1.25, 0.22, 8), m.steelDark);
    base.position.y = 0.11;
    base.castShadow = true;
    base.receiveShadow = true;
    g.add(base);
    box(g, { w: 1.86, h: 0.08, d: 1.86, y: 0.79, material: m.steel });
    box(g, { w: 1.7, h: 0.045, d: 1.7, y: 0.84, material: m.trim, cast: false });
    for (const sx of [-1, 1]) {
      box(g, { w: 0.18, h: 0.62, d: 0.65, x: sx * 0.72, y: 0.46, material: m.steelDark });
      box(g, { w: 0.05, h: 0.54, d: 0.4, x: sx * 0.72, y: 0.44, z: 0.28, material: m.screen0, cast: false });
    }
    // Holographic terrain projection.
    const holoGroup = new THREE.Group();
    holoGroup.position.y = 0.98;
    holoGroup.userData.keepUnmerged = true;
    g.add(holoGroup);
    const holoMat = new THREE.MeshBasicMaterial({ color: 0x75f8d2, transparent: true, opacity: 0.33, side: THREE.DoubleSide, depthWrite: false, wireframe: true });
    const holo = new THREE.Mesh(new THREE.CircleGeometry(0.72, 20), holoMat);
    holo.rotation.x = -Math.PI / 2;
    holoGroup.add(holo);
    for (let i = 0; i < 5; i += 1) {
      const ring = new THREE.Mesh(new THREE.RingGeometry(0.16 + i * 0.12, 0.17 + i * 0.12, 20), holoMat);
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = 0.01 + i * 0.035;
      holoGroup.add(ring);
    }
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.58, 0.38, 0.65, 12, 1, true), new THREE.MeshBasicMaterial({ color: 0x63e9c4, transparent: true, opacity: 0.05, side: THREE.DoubleSide, depthWrite: false }));
    beam.position.y = 0.35;
    holoGroup.add(beam);
    const holoLight = new THREE.PointLight(0x65f5cf, 4, 3, 2);
    holoLight.position.y = 1.1;
    g.add(holoLight);
    this.holo = holoGroup;
    this.holoBase = holoGroup.position.y;
    // Small floating motes above the table are handled by atmosphere.
  }

  buildTerminal() {
    const m = this.materials;
    const g = new THREE.Group();
    g.position.set(0, 0, 2.34);
    this.group.add(g);
    box(g, { w: 0.82, h: 1.2, d: 0.48, y: 0.6, material: m.steelDark });
    box(g, { w: 0.72, h: 0.42, d: 0.03, y: 0.92, z: 0.25, material: m.screen0, cast: false });
    box(g, { w: 0.64, h: 0.04, d: 0.28, y: 0.72, z: 0.35, material: m.trim, cast: false });
    for (let i = 0; i < 3; i += 1) box(g, { w: 0.04, h: 0.04, d: 0.02, x: -0.18 + i * 0.18, y: 0.79, z: 0.47, material: i === 0 ? m.greenGlow : m.redGlow, cast: false });
    const light = new THREE.PointLight(0x63e2bc, 2.2, 2.1, 2);
    light.position.set(0, 1.1, 0.4);
    g.add(light);
    this.terminalPosition = new THREE.Vector3(0, 1, 2.8);
    this.terminalInteractable = {
      id: 'terminal',
      kind: 'terminal',
      label: 'RESERVE TERMINAL',
      action: () => this.callbacks.onTerminal?.(),
      position: this.terminalPosition,
      range: 2.25,
    };
    this.interactables.push(this.terminalInteractable);
    this.terminalScreen = g.children.find((c) => c.material === m.screen0);
    if (this.terminalScreen) this.terminalScreen.userData.keepUnmerged = true;
  }

  /**
   * Door panels travel together, so their trim, rails and plating can share a
   * handful of merged meshes. The status indicator stays separate because its
   * material colour is animated per door.
   */
  mergeDoorPanels() {
    for (const door of this.doors) {
      for (const panel of door.panels) {
        const group = panel.group;
        const byMaterial = new Map();
        const remove = [];
        for (const child of group.children) {
          if (!child.isMesh || child === panel.indicator) continue;
          const material = child.material;
          if (!material || Array.isArray(material)) continue;
          child.updateMatrix();
          const key = material.uuid;
          if (!byMaterial.has(key)) byMaterial.set(key, { material, geometries: [], cast: false });
          const bucket = byMaterial.get(key);
          const geo = child.geometry.clone();
          geo.applyMatrix4(child.matrix);
          bucket.geometries.push(geo);
          bucket.cast = bucket.cast || child.castShadow;
          remove.push(child);
        }
        for (const child of remove) {
          group.remove(child);
          child.geometry.dispose();
        }
        for (const bucket of byMaterial.values()) {
          const merged = mergeGeometries(bucket.geometries, false);
          if (!merged) continue;
          const mesh = new THREE.Mesh(merged, bucket.material);
          mesh.castShadow = bucket.cast;
          mesh.receiveShadow = true;
          group.add(mesh);
          for (const geo of bucket.geometries) geo.dispose();
        }
      }
    }
  }

  mergeStaticGeometry() {
    this.group.updateMatrixWorld(true);
    const byMaterial = new Map();
    const remove = [];
    const traverse = (object, locked) => {
      const keep = locked || object.userData.keepUnmerged;
      if (object !== this.group && object.isMesh && !keep) {
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
    traverse(this.group, false);
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
      this.group.add(mesh);
      for (const geo of bucket.geometries) geo.dispose();
    }
  }

  setTerminalObjective(text) {
    if (this.terminalScreen) {
      this.terminalScreen.material = new THREE.MeshBasicMaterial({
        map: makeTextTexture(text, { width: 256, height: 128, size: 18, color: '#80f3cf', bg: '#051812', subtle: true }),
        toneMapped: false,
      });
    }
  }

  toggleDoor(door) {
    if (door.busy) return;
    door.target = door.target > 0.5 ? 0 : 1;
    door.state = door.target > 0.5 ? 'opening' : 'closing';
    door.busy = true;
    door.moveTime = 0;
    this.callbacks.onHydraulic?.(door, door.target > 0.5);
  }

  getNearestInteractable(position, cameraDir = null) {
    let best = null;
    let bestScore = Infinity;
    for (const item of this.interactables) {
      if (item.kind === 'door' && item.door.busy) continue;
      const d = position.distanceTo(item.position);
      if (d > item.range) continue;
      let score = d;
      if (cameraDir) {
        _v.copy(item.position).sub(position).normalize();
        const facing = cameraDir.dot(_v);
        if (facing < 0.25 && d > 1.1) score += 10;
      }
      if (score < bestScore) {
        bestScore = score;
        best = item;
      }
    }
    return best;
  }

  isInside(x, z, margin = 0) {
    return Math.abs(x) < 7.5 - margin && Math.abs(z) < 7.5 - margin;
  }

  isInDoorway(x, z, padding = 0.4) {
    for (const door of this.doors) {
      if (Math.abs(door.pos.x) > 7.2) {
        if (Math.abs(z) < 1.75 + padding && Math.abs(x - door.pos.x) < 1.4) return true;
      } else if (Math.abs(x) < 1.75 + padding && Math.abs(z - door.pos.z) < 1.4) return true;
    }
    return false;
  }

  update(dt) {
    this.elapsed += dt;
    const t = this.elapsed;
    for (const door of this.doors) {
      if (door.busy) {
        door.moveTime += dt;
        const duration = 2.9;
        const raw = clamp(door.moveTime / duration, 0, 1);
        const eased = easeInOutCubic(raw);
        door.progress = door.target > 0.5 ? eased : 1 - eased;
        if (raw >= 1) {
          door.progress = door.target;
          door.state = door.target > 0.5 ? 'open' : 'closed';
          door.busy = false;
        }
      }
      const p = door.progress;
      for (const panel of door.panels) {
        panel.group.position.x = panel.baseX + panel.side * 1.48 * p;
      }
      const indicatorColor = p > 0.9 ? 0x76ff9e : p > 0.05 ? 0xffb35c : 0xff5038;
      for (const mat of door.indicatorMaterials) mat.color.setHex(indicatorColor);
      door.swLight.material.color.setHex(p > 0.9 ? 0x76ff9e : 0xff5038);
      door.leverPivot.rotation.x = THREE.MathUtils.damp(door.leverPivot.rotation.x, door.target > 0.5 ? -0.9 : 0, 8, dt);
      const sway = Math.sin(t * 2.3 + door.pos.x) * 0.01;
      door.swRing.scale.setScalar(1 + sway);
      door.collider.active = p < 0.52;
    }
    if (this.holo) {
      this.holo.rotation.y += dt * 0.17;
      this.holo.position.y = this.holoBase + Math.sin(t * 1.2) * 0.035;
    }
    // Emissive strips flicker very subtly.
    const flicker = 0.92 + Math.sin(t * 11.3) * 0.015 + Math.sin(t * 3.1) * 0.04;
    this.materials.cyanGlow.color.setRGB(0.47 * flicker, 1 * flicker, 0.86 * flicker);
  }

  resetDoors() {
    for (const door of this.doors) {
      door.progress = 0;
      door.target = 0;
      door.state = 'closed';
      door.busy = false;
      door.moveTime = 0;
      door.collider.active = true;
      door.leverPivot.rotation.x = 0;
      for (const panel of door.panels) panel.group.position.x = panel.baseX;
      for (const mat of door.indicatorMaterials) mat.color.setHex(0xff5038);
      door.swLight.material.color.setHex(0xff5038);
    }
    this.setTerminalObjective('M-08 // LOCAL SYSTEMS');
  }

  isDoorOpenAt(x, z) {
    for (const door of this.doors) {
      if (Math.abs(door.pos.x) > 7.2) {
        if (Math.abs(z) < 2.1 && Math.abs(x - door.pos.x) < 1.5) return door.progress > 0.5;
      } else if (Math.abs(x) < 2.1 && Math.abs(z - door.pos.z) < 1.5) return door.progress > 0.5;
    }
    return false;
  }
}

export function createLaboratory(scene, callbacks) {
  return new Laboratory(scene, callbacks);
}
