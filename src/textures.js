import * as THREE from 'three';

let seed = 0x5eed1234;
export function rand() {
  seed ^= seed << 13; seed ^= seed >>> 17; seed ^= seed << 5;
  return ((seed >>> 0) / 4294967296);
}
export function randRange(a, b) { return a + (b - a) * rand(); }
export function hash2(x, z) {
  const s = Math.sin(x * 127.1 + z * 311.7) * 43758.5453;
  return s - Math.floor(s);
}

function canvas(size, draw) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  g.imageSmoothingEnabled = false;
  draw(g, size);
  return c;
}

function tex(size, draw, { repeat = [1, 1], transparent = false } = {}) {
  const c = canvas(size, draw);
  const t = new THREE.CanvasTexture(c);
  t.magFilter = THREE.NearestFilter;
  t.minFilter = THREE.NearestMipmapNearestFilter;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeat[0], repeat[1]);
  t.anisotropy = 1;
  if (!transparent) t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function noiseFill(g, size, base, variance, alpha = 1) {
  g.fillStyle = base;
  g.fillRect(0, 0, size, size);
  const img = g.getImageData(0, 0, size, size);
  for (let i = 0; i < img.data.length; i += 4) {
    const n = (rand() - 0.5) * variance;
    img.data[i] = Math.max(0, Math.min(255, img.data[i] + n));
    img.data[i + 1] = Math.max(0, Math.min(255, img.data[i + 1] + n));
    img.data[i + 2] = Math.max(0, Math.min(255, img.data[i + 2] + n));
  }
  g.putImageData(img, 0, 0);
}

function grime(g, size, count = 40, alpha = 0.2) {
  for (let i = 0; i < count; i++) {
    const x = Math.floor(rand() * size);
    const y = Math.floor(rand() * size);
    const w = 1 + Math.floor(rand() * 4);
    const h = 1 + Math.floor(rand() * 6);
    g.fillStyle = `rgba(10,14,9,${alpha * (0.4 + rand() * 0.6)})`;
    g.fillRect(x, y, w, h);
  }
}

function panelLines(g, size, cell, color = 'rgba(8,12,10,.55)') {
  g.strokeStyle = color; g.lineWidth = 1;
  for (let i = 0; i <= size; i += cell) {
    g.beginPath(); g.moveTo(i + .5, 0); g.lineTo(i + .5, size); g.stroke();
    g.beginPath(); g.moveTo(0, i + .5); g.lineTo(size, i + .5); g.stroke();
  }
}

function rivets(g, size, step = 16, inset = 5, color = 'rgba(175,190,168,.28)') {
  g.fillStyle = color;
  for (let y = inset; y < size; y += step) {
    for (let x = inset; x < size; x += step) {
      g.fillRect(x, y, 1, 1);
    }
  }
}

function hazardStripe(g, x, y, w, h, reverse = false) {
  g.save();
  g.beginPath(); g.rect(x, y, w, h); g.clip();
  g.fillStyle = '#c9a441';
  g.fillRect(x, y, w, h);
  g.fillStyle = '#17170e';
  const step = 12;
  for (let i = -h; i < w + h; i += step) {
    g.beginPath();
    if (!reverse) {
      g.moveTo(x + i, y + h); g.lineTo(x + i + h, y); g.lineTo(x + i + h + 6, y); g.lineTo(x + i + 6, y + h);
    } else {
      g.moveTo(x + i, y); g.lineTo(x + i + h, y + h); g.lineTo(x + i + h + 6, y + h); g.lineTo(x + i + 6, y);
    }
    g.closePath(); g.fill();
  }
  g.restore();
}

/* ------------------------------------------------------------------ */
export const T = {};

T.wall = tex(96, (g, s) => {
  noiseFill(g, s, '#3a423c', 22);
  panelLines(g, s, 32);
  g.fillStyle = 'rgba(20,30,23,.55)';
  g.fillRect(0, 0, s, 4); g.fillRect(0, s - 6, s, 6);
  g.fillStyle = 'rgba(154,178,145,.12)';
  g.fillRect(0, 0, s, 1);
  // stencilled bands
  g.fillStyle = 'rgba(86,104,78,.28)';
  g.fillRect(0, 40, s, 5);
  rivets(g, s, 16, 4);
  grime(g, s, 55, .24);
  for (let i = 0; i < 6; i++) {
    g.fillStyle = 'rgba(121,142,109,.10)';
    g.fillRect(Math.floor(rand() * s), Math.floor(rand() * s), 1 + rand() * 12, 1);
  }
}, { repeat: [2, 1] });

T.wallClean = tex(96, (g, s) => {
  noiseFill(g, s, '#46524a', 16);
  panelLines(g, s, 24, 'rgba(12,18,14,.5)');
  g.fillStyle = 'rgba(185,255,99,.08)';
  g.fillRect(0, 24, s, 2);
  rivets(g, s, 12, 3, 'rgba(190,210,180,.22)');
  grime(g, s, 24, .13);
}, { repeat: [2, 1] });

T.floor = tex(96, (g, s) => {
  noiseFill(g, s, '#313832', 18);
  for (let y = 0; y < s; y += 24) {
    for (let x = 0; x < s; x += 24) {
      const off = ((x / 24) + (y / 24)) % 2;
      g.fillStyle = off ? 'rgba(255,255,255,.018)' : 'rgba(0,0,0,.09)';
      g.fillRect(x, y, 24, 24);
    }
  }
  panelLines(g, s, 24, 'rgba(7,11,8,.8)');
  g.fillStyle = 'rgba(150,170,140,.16)';
  for (let y = 7; y < s; y += 24) for (let x = 7; x < s; x += 24) g.fillRect(x, y, 2, 2);
  // scratches
  for (let i = 0; i < 30; i++) {
    g.fillStyle = `rgba(${rand() > .5 ? '150,160,140' : '15,18,13'},${.1 + rand() * .18})`;
    g.fillRect(rand() * s, rand() * s, 1 + rand() * 10, 1);
  }
  grime(g, s, 80, .26);
}, { repeat: [8, 8] });

T.ceiling = tex(64, (g, s) => {
  noiseFill(g, s, '#292f2b', 16);
  panelLines(g, s, 32, 'rgba(8,12,9,.6)');
  rivets(g, s, 16, 3, 'rgba(150,163,140,.16)');
  grime(g, s, 30, .3);
}, { repeat: [4, 4] });

T.door = tex(96, (g, s) => {
  noiseFill(g, s, '#4a514a', 20);
  panelLines(g, s, 24, 'rgba(6,9,7,.7)');
  g.fillStyle = 'rgba(20,26,21,.5)'; g.fillRect(0, 0, 4, s); g.fillRect(s - 4, 0, 4, s);
  hazardStripe(g, 0, s - 18, s, 18);
  g.fillStyle = 'rgba(8,10,8,.85)'; g.fillRect(0, s - 19, s, 2);
  g.fillStyle = 'rgba(188,209,177,.22)'; g.fillRect(8, 8, s - 16, 2);
  rivets(g, s, 14, 5, 'rgba(200,215,190,.24)');
  grime(g, s, 50, .25);
});

T.hazard = tex(64, (g, s) => {
  hazardStripe(g, 0, 0, s, s);
  noiseFill(g, s, 'rgba(0,0,0,0)', 30);
  grime(g, s, 22, .3);
}, { repeat: [2, 1] });

T.concrete = tex(96, (g, s) => {
  noiseFill(g, s, '#5c5d50', 26);
  panelLines(g, s, 48, 'rgba(26,28,22,.32)');
  for (let i = 0; i < 14; i++) {
    g.fillStyle = 'rgba(30,34,26,.25)';
    g.fillRect(rand() * s, rand() * s, 2 + rand() * 6, 1 + rand() * 3);
  }
  grime(g, s, 55, .28);
}, { repeat: [2, 2] });

T.crate = tex(64, (g, s) => {
  noiseFill(g, s, '#4c4634', 18);
  g.strokeStyle = 'rgba(20,19,12,.7)'; g.lineWidth = 2;
  g.strokeRect(2, 2, s - 4, s - 4);
  g.beginPath(); g.moveTo(3, 3); g.lineTo(s - 3, s - 3); g.stroke();
  hazardStripe(g, 0, s * .42, s, 8);
  g.fillStyle = 'rgba(190,205,175,.18)';
  for (let i = 7; i < s; i += 14) g.fillRect(i, 2, 1, 1);
  grime(g, s, 30, .3);
});

T.bark = tex(48, (g, s) => {
  noiseFill(g, s, '#3b2f24', 24);
  for (let x = 0; x < s; x += 3) {
    g.fillStyle = `rgba(${20 + rand() * 20},${16 + rand() * 14},${10 + rand() * 10},${.3 + rand() * .35})`;
    g.fillRect(x, 0, 1 + Math.floor(rand() * 2), s);
  }
  for (let i = 0; i < 10; i++) {
    g.fillStyle = 'rgba(90,92,55,.23)';
    g.fillRect(rand() * s, rand() * s, 1 + rand() * 2, 3 + rand() * 10);
  }
}, { repeat: [1, 2] });

T.metal = tex(64, (g, s) => {
  noiseFill(g, s, '#3d453f', 20);
  panelLines(g, s, 16, 'rgba(9,12,9,.55)');
  rivets(g, s, 8, 2, 'rgba(200,220,190,.2)');
  grime(g, s, 24, .25);
});

T.moss = tex(64, (g, s) => {
  noiseFill(g, s, '#2f4c23', 34);
  for (let i = 0; i < 90; i++) {
    const c = rand() > .5 ? 'rgba(91,140,48,.55)' : 'rgba(35,71,26,.55)';
    g.fillStyle = c;
    g.fillRect(rand() * s, rand() * s, 1 + rand() * 4, 1 + rand() * 3);
  }
});

T.fern = tex(64, (g, s) => {
  g.clearRect(0, 0, s, s);
  const cx = s / 2;
  g.strokeStyle = 'rgba(52,96,38,.9)'; g.lineWidth = 1;
  g.beginPath(); g.moveTo(cx, s); g.lineTo(cx, 4); g.stroke();
  for (let i = 0; i < 10; i++) {
    const y = 10 + i * 5;
    const w = 5 + i * 1.7;
    g.fillStyle = i % 2 ? 'rgba(70,123,45,.9)' : 'rgba(51,102,39,.95)';
    g.beginPath(); g.moveTo(cx, y); g.lineTo(cx - w, y - 4); g.lineTo(cx - w * .4, y + 1); g.closePath(); g.fill();
    g.beginPath(); g.moveTo(cx, y); g.lineTo(cx + w, y - 4); g.lineTo(cx + w * .4, y + 1); g.closePath(); g.fill();
  }
}, { transparent: true });

T.broadleaf = tex(64, (g, s) => {
  g.clearRect(0, 0, s, s);
  for (let i = 0; i < 22; i++) {
    const x = rand() * s, y = rand() * s, r = 3 + rand() * 8;
    g.fillStyle = rand() > .6 ? 'rgba(64,116,47,.92)' : 'rgba(37,82,35,.95)';
    g.beginPath();
    for (let p = 0; p < 6; p++) {
      const a = p / 6 * Math.PI * 2;
      g.lineTo(x + Math.cos(a) * r, y + Math.sin(a) * r * .7);
    }
    g.closePath(); g.fill();
  }
}, { transparent: true });

T.screen = tex(128, (g, s) => {
  g.fillStyle = '#06120d'; g.fillRect(0, 0, s, s);
  g.fillStyle = 'rgba(95,255,188,.1)';
  for (let y = 0; y < s; y += 4) g.fillRect(0, y, s, 1);
  g.font = '7px monospace'; g.fillStyle = '#6bffc4';
  g.fillText('MOSS PROTOCOL', 8, 14);
  g.fillStyle = 'rgba(107,255,196,.55)';
  for (let i = 0; i < 13; i++) {
    const w = 15 + rand() * 70;
    g.fillRect(8, 23 + i * 6, w, 2);
  }
  g.fillStyle = '#ffc95a'; g.fillText('HEARING ARRAY', 8, 118);
  g.fillStyle = 'rgba(255,201,90,.55)';
  g.fillRect(8, 122, 60 + rand() * 40, 2);
});

T.screenRed = tex(128, (g, s) => {
  g.fillStyle = '#160604'; g.fillRect(0, 0, s, s);
  g.fillStyle = 'rgba(255,90,60,.08)';
  for (let y = 0; y < s; y += 4) g.fillRect(0, y, s, 1);
  g.font = 'bold 10px monospace'; g.fillStyle = '#ff6c50';
  g.fillText('CONTAINMENT BREACH', 7, 20);
  g.font = '7px monospace';
  g.fillStyle = 'rgba(255,108,80,.5)';
  for (let i = 0; i < 12; i++) g.fillRect(7, 31 + i * 7, 20 + rand() * 85, 2);
});

T.sign = (() => {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = '#141a13'; g.fillRect(0, 0, 512, 128);
  g.strokeStyle = 'rgba(185,255,99,.4)'; g.lineWidth = 4; g.strokeRect(4, 4, 504, 120);
  g.fillStyle = '#b9ff63';
  g.font = 'bold 62px monospace';
  g.fillText('PROJECT MOSS', 26, 70);
  g.fillStyle = '#6c8c67'; g.font = '20px monospace';
  g.fillText('BIOCONTAINMENT // SITE 07', 28, 102);
  const t = new THREE.CanvasTexture(c);
  t.magFilter = THREE.NearestFilter; t.minFilter = THREE.LinearMipmapLinearFilter;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
})();

T.sign2 = (() => {
  const c = document.createElement('canvas');
  c.width = 256; c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = '#161207'; g.fillRect(0, 0, 256, 128);
  hazardStripe(g, 0, 0, 256, 14);
  hazardStripe(g, 0, 114, 256, 14);
  g.fillStyle = '#ffca5c'; g.font = 'bold 24px monospace';
  g.fillText('DANGER', 18, 56);
  g.fillStyle = '#d8b77a'; g.font = '12px monospace';
  g.fillText('ACOUSTIC APEX', 19, 78);
  g.fillText('NO EYE CONTACT', 19, 94);
  const t = new THREE.CanvasTexture(c);
  t.magFilter = THREE.NearestFilter; t.minFilter = THREE.LinearMipmapLinearFilter;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
})();

function labelTexture(text, color = '#b9ff63', bg = '#0a140c', w = 128, h = 64) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const g = c.getContext('2d');
  g.fillStyle = bg; g.fillRect(0, 0, w, h);
  g.strokeStyle = color; g.lineWidth = 2; g.strokeRect(2, 2, w - 4, h - 4);
  g.fillStyle = color; g.font = `bold ${Math.floor(h * 0.46)}px monospace`;
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(text, w / 2, h / 2 + 1);
  const t = new THREE.CanvasTexture(c);
  t.magFilter = THREE.NearestFilter; t.minFilter = THREE.LinearMipmapLinearFilter;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
T.exit = labelTexture('EXIT', '#b9ff63');
T.doorNum = [1, 2, 3, 4].map(n => labelTexture('0' + n, '#ffc95a'));
T.liftSign = labelTexture('ASCENT', '#6ff8d2', '#071411', 192, 64);

T.coreFace = tex(64, (g, s) => {
  g.fillStyle = '#0a1c18'; g.fillRect(0, 0, s, s);
  for (let r = 0; r < 4; r++) {
    g.strokeStyle = `rgba(111,248,210,${.3 + r * .14})`; g.lineWidth = 2;
    g.strokeRect(5 + r * 5, 5 + r * 5, s - 10 - r * 10, s - 10 - r * 10);
  }
  g.fillStyle = '#a6ffe6'; g.fillRect(28, 10, 8, 44);
  g.fillStyle = 'rgba(111,248,210,.3)'; g.fillRect(10, 28, 44, 8);
});

export function makeGlowTexture(color = '#b9ff63') {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, color);
  grad.addColorStop(.18, color);
  grad.addColorStop(.55, 'rgba(120,255,150,.25)');
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = grad; g.fillRect(0, 0, 64, 64);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.magFilter = THREE.LinearFilter;
  return t;
}

export const glowGreen = makeGlowTexture('#c8ff8a');
export const glowCyan = makeGlowTexture('#7dffe0');
export const glowAmber = makeGlowTexture('#ffd06a');
export const glowRed = makeGlowTexture('#ff6040');

export function makeSignMaterial(map) {
  return new THREE.MeshBasicMaterial({ map, toneMapped: false });
}
