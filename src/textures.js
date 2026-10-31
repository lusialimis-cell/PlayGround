import * as THREE from 'three';
import { RNG, clamp } from './utils.js';

const textureCache = new Map();

function makeTexture(key, w, h, draw, options = {}) {
  if (textureCache.has(key)) return textureCache.get(key);
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  draw(ctx, w, h);
  const texture = new THREE.CanvasTexture(canvas);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = options.mip === false ? THREE.NearestFilter : THREE.NearestMipmapNearestFilter;
  texture.generateMipmaps = options.mip !== false;
  texture.wrapS = options.wrap === false ? THREE.ClampToEdgeWrapping : THREE.RepeatWrapping;
  texture.wrapT = options.wrap === false ? THREE.ClampToEdgeWrapping : THREE.RepeatWrapping;
  texture.repeat.set(options.repeat?.[0] ?? 1, options.repeat?.[1] ?? 1);
  texture.colorSpace = options.data ? THREE.NoColorSpace : THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  textureCache.set(key, texture);
  return texture;
}

function px(ctx, x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

function noiseSpeckle(ctx, w, h, rng, colors, count) {
  for (let i = 0; i < count; i += 1) {
    ctx.fillStyle = colors[Math.floor(rng.next() * colors.length)];
    ctx.globalAlpha = rng.range(0.06, 0.28);
    ctx.fillRect(Math.floor(rng.range(0, w)), Math.floor(rng.range(0, h)), 1, 1);
  }
  ctx.globalAlpha = 1;
}

export function metalWallTexture() {
  return makeTexture('metalWall', 64, 64, (ctx, w, h) => {
    const rng = new RNG(7142);
    px(ctx, 0, 0, w, h, '#26332e');
    for (let y = 0; y < 2; y += 1) {
      for (let x = 0; x < 2; x += 1) {
        const ox = x * 32;
        const oy = y * 32;
        px(ctx, ox + 1, oy + 1, 30, 30, '#34433c');
        px(ctx, ox + 2, oy + 2, 28, 2, '#43544b');
        px(ctx, ox + 2, oy + 3, 2, 26, '#3d4e45');
        px(ctx, ox + 2, oy + 29, 28, 1, '#1b2621');
        px(ctx, ox + 29, oy + 2, 1, 28, '#1b2621');
        for (const [rx, ry] of [[5, 5], [25, 5], [5, 25], [25, 25]]) {
          px(ctx, ox + rx, oy + ry, 2, 2, '#718078');
          px(ctx, ox + rx, oy + ry + 1, 1, 1, '#1a231f');
        }
      }
    }
    noiseSpeckle(ctx, w, h, rng, ['#6f8069', '#18231d', '#8b9b7b'], 240);
    // fine grime streaks
    for (let i = 0; i < 11; i += 1) {
      const x = Math.floor(rng.range(0, w));
      const y = Math.floor(rng.range(0, h * 0.7));
      ctx.globalAlpha = rng.range(0.05, 0.16);
      px(ctx, x, y, 1, Math.floor(rng.range(2, 12)), '#0e1712');
    }
    ctx.globalAlpha = 1;
  }, { repeat: [1, 1] });
}

export function metalFloorTexture() {
  return makeTexture('metalFloor', 64, 64, (ctx, w, h) => {
    const rng = new RNG(9031);
    px(ctx, 0, 0, w, h, '#232e29');
    for (let y = 0; y < 4; y += 1) {
      for (let x = 0; x < 4; x += 1) {
        const ox = x * 16;
        const oy = y * 16;
        px(ctx, ox + 1, oy + 1, 15, 15, '#303d37');
        px(ctx, ox + 2, oy + 2, 13, 1, '#425149');
        px(ctx, ox + 2, oy + 14, 13, 1, '#1b2520');
        px(ctx, ox + 14, oy + 2, 1, 13, '#1b2520');
        // diamond tread pixels
        px(ctx, ox + 5, oy + 5, 4, 1, '#49594f');
        px(ctx, ox + 8, oy + 6, 1, 4, '#49594f');
        px(ctx, ox + 11, oy + 10, 3, 1, '#202b25');
        px(ctx, ox + 10, oy + 11, 1, 3, '#202b25');
        for (const [rx, ry] of [[3, 3], [12, 3], [3, 12], [12, 12]]) {
          px(ctx, ox + rx, oy + ry, 1, 1, '#667569');
        }
      }
    }
    noiseSpeckle(ctx, w, h, rng, ['#798772', '#101813', '#8a7e5d'], 200);
  }, { repeat: [4, 4] });
}

export function ceilingTexture() {
  return makeTexture('ceiling', 64, 64, (ctx, w, h) => {
    const rng = new RNG(144);
    px(ctx, 0, 0, w, h, '#1d2823');
    for (let y = 0; y < 2; y += 1) {
      for (let x = 0; x < 4; x += 1) {
        px(ctx, x * 16 + 1, y * 32 + 1, 14, 30, '#29352f');
        px(ctx, x * 16 + 2, y * 32 + 2, 12, 1, '#36443b');
        px(ctx, x * 16 + 2, y * 32 + 29, 12, 1, '#141d19');
        px(ctx, x * 16 + 13, y * 32 + 2, 1, 28, '#141d19');
      }
    }
    noiseSpeckle(ctx, w, h, rng, ['#5b6c5e', '#0a100c'], 110);
  }, { repeat: [4, 4] });
}

export function hazardTexture() {
  return makeTexture('hazard', 64, 32, (ctx, w, h) => {
    px(ctx, 0, 0, w, h, '#171a12');
    ctx.fillStyle = '#b59e3d';
    for (let i = -h; i < w + h; i += 16) {
      ctx.beginPath();
      ctx.moveTo(i, h);
      ctx.lineTo(i + h, 0);
      ctx.lineTo(i + h + 7, 0);
      ctx.lineTo(i + 7, h);
      ctx.closePath();
      ctx.fill();
    }
    const rng = new RNG(86);
    noiseSpeckle(ctx, w, h, rng, ['#27301b', '#d0b951', '#5a542a'], 90);
  }, { repeat: [1, 1] });
}

export function concreteTexture() {
  return makeTexture('concrete', 64, 64, (ctx, w, h) => {
    const rng = new RNG(288);
    px(ctx, 0, 0, w, h, '#4a4c42');
    for (let i = 0; i < 400; i += 1) {
      ctx.fillStyle = rng.pick(['#56584a', '#3d4037', '#606152', '#34362f']);
      ctx.globalAlpha = rng.range(0.2, 0.55);
      ctx.fillRect(Math.floor(rng.range(0, w)), Math.floor(rng.range(0, h)), rng.range(1, 4), rng.range(1, 3));
    }
    ctx.globalAlpha = 0.3;
    for (let i = 0; i < 4; i += 1) {
      px(ctx, 0, 15 + i * 16, w, 1, '#34352f');
    }
    ctx.globalAlpha = 1;
  }, { repeat: [2, 2] });
}

export function terrainTexture() {
  return makeTexture('terrain', 128, 128, (ctx, w, h) => {
    const rng = new RNG(4019);
    px(ctx, 0, 0, w, h, '#364a2b');
    for (let i = 0; i < 4000; i += 1) {
      const c = rng.pick(['#2d4126', '#405c2f', '#4a6535', '#293b22', '#3c522b', '#596b39', '#22331d']);
      ctx.globalAlpha = rng.range(0.26, 0.9);
      ctx.fillStyle = c;
      const x = Math.floor(rng.range(0, w));
      const y = Math.floor(rng.range(0, h));
      const s = rng.next() > 0.88 ? rng.int(2, 5) : 1;
      ctx.fillRect(x, y, s, rng.next() > 0.76 ? s : 1);
    }
    ctx.globalAlpha = 0.3;
    for (let i = 0; i < 13; i += 1) {
      const x = Math.floor(rng.range(0, w));
      const y = Math.floor(rng.range(0, h));
      for (let j = 0; j < 5; j += 1) {
        px(ctx, x + j * 2, y + j * 3, 2, 2, '#1d2a18');
      }
    }
    ctx.globalAlpha = 1;
  }, { repeat: [38, 38] });
}


export function dirtTexture() {
  return makeTexture('dirt', 64, 64, (ctx, w, h) => {
    const rng = new RNG(1771);
    px(ctx, 0, 0, w, h, '#4a4030');
    for (let i = 0; i < 1500; i += 1) {
      px(ctx, rng.int(0, w - 1), rng.int(0, h - 1), rng.int(1, 3), 1, rng.pick(['#5c503b', '#3b3428', '#695b42', '#302b22', '#77684b']));
    }
    ctx.globalAlpha = 0.22;
    for (let i = 0; i < 18; i += 1) px(ctx, rng.int(0, w), rng.int(0, h), rng.int(2, 7), 1, '#25231b');
    ctx.globalAlpha = 1;
  }, { repeat: [8, 8] });
}

export function barkTexture() {
  return makeTexture('bark', 32, 64, (ctx, w, h) => {
    const rng = new RNG(522);
    px(ctx, 0, 0, w, h, '#40382b');
    for (let x = 0; x < w; x += 3) {
      const c = rng.pick(['#584d37', '#322c22', '#66583e', '#2b271e']);
      px(ctx, x, 0, 1, h, c);
      if (rng.next() > 0.5) px(ctx, x + 1, rng.range(0, h), 1, rng.range(2, 16), '#271f17');
    }
    for (let i = 0; i < 80; i += 1) {
      px(ctx, rng.int(0, w - 1), rng.int(0, h - 1), 1, 2, rng.pick(['#7b6a49', '#1f1c16']));
    }
  }, { repeat: [1, 1] });
}

export function leafTexture() {
  return makeTexture('leaf', 32, 32, (ctx, w, h) => {
    const rng = new RNG(828);
    px(ctx, 0, 0, w, h, '#2c421f');
    for (let i = 0; i < 130; i += 1) {
      px(ctx, rng.int(0, w - 1), rng.int(0, h - 1), rng.int(1, 3), rng.int(1, 3), rng.pick(['#3f5927', '#4f6c2c', '#334a22', '#5f7834', '#26391b']));
    }
    ctx.globalAlpha = 0.36;
    for (let i = 0; i < 9; i += 1) {
      px(ctx, rng.int(0, w), rng.int(0, h), rng.int(3, 8), 1, '#182513');
    }
    ctx.globalAlpha = 1;
  }, { repeat: [2, 2] });
}

export function furTexture() {
  return makeTexture('fur', 32, 32, (ctx, w, h) => {
    const rng = new RNG(9812);
    px(ctx, 0, 0, w, h, '#3b2b20');
    for (let i = 0; i < 600; i += 1) {
      px(ctx, rng.int(0, w - 1), rng.int(0, h - 1), 1, rng.int(1, 3), rng.pick(['#4d3928', '#2d2119', '#604833', '#392a1f', '#71563b']));
    }
    ctx.globalAlpha = 0.3;
    for (let i = 0; i < 25; i += 1) {
      px(ctx, rng.int(0, w - 1), rng.int(0, h - 1), 1, rng.int(2, 5), '#1d1611');
    }
    ctx.globalAlpha = 1;
  }, { repeat: [2, 2] });
}

export function skinTexture() {
  return makeTexture('skin', 32, 32, (ctx, w, h) => {
    const rng = new RNG(5112);
    px(ctx, 0, 0, w, h, '#8c7159');
    for (let i = 0; i < 250; i += 1) {
      px(ctx, rng.int(0, w - 1), rng.int(0, h - 1), rng.int(1, 2), 1, rng.pick(['#9d8167', '#79614d', '#b09278', '#654d3d']));
    }
    ctx.globalAlpha = 0.35;
    for (let i = 0; i < 8; i += 1) {
      px(ctx, rng.int(0, w - 1), rng.int(0, h - 1), rng.int(3, 6), 1, '#513d30');
    }
    ctx.globalAlpha = 1;
  }, { repeat: [1, 1] });
}

export function mossSkinTexture() {
  return makeTexture('mossSkin', 64, 64, (ctx, w, h) => {
    const rng = new RNG(6078);
    px(ctx, 0, 0, w, h, '#45602d');
    for (let i = 0; i < 1500; i += 1) {
      const x = rng.int(0, w - 1);
      const y = rng.int(0, h - 1);
      px(ctx, x, y, rng.int(1, 2), 1, rng.pick(['#527139', '#3d5628', '#668445', '#34491f', '#73944f']));
    }
    // Dense organic moss patches and dark radial stripes.
    for (let i = 0; i < 16; i += 1) {
      const x = rng.int(0, w - 1);
      const y = rng.int(0, h - 1);
      const c = rng.pick(['#27803f', '#1e6d36', '#2b8f47', '#19592c']);
      ctx.globalAlpha = rng.range(0.3, 0.8);
      for (let j = 0; j < 10; j += 1) {
        px(ctx, (x + rng.int(-5, 5) + w) % w, (y + rng.int(-2, 2) + h) % h, rng.int(1, 3), 1, c);
      }
    }
    ctx.globalAlpha = 1;
    for (let i = 0; i < 8; i += 1) {
      let x = rng.int(0, w - 1);
      let y = rng.int(0, h - 1);
      for (let j = 0; j < 26; j += 1) {
        px(ctx, (x + w) % w, (y + h) % h, 2, 1, rng.pick(['#1c3d20', '#234b28', '#16371b']));
        x += rng.int(-1, 2);
        y += rng.int(0, 1);
      }
    }
  }, { repeat: [1, 1] });
}

export function mossmanFaceTexture() {
  return makeTexture('mossFace', 64, 64, (ctx, w, h) => {
    const rng = new RNG(9914);
    px(ctx, 0, 0, w, h, '#3d5528');
    for (let i = 0; i < 700; i += 1) {
      px(ctx, rng.int(0, w - 1), rng.int(0, h - 1), 1, 1, rng.pick(['#4b6631', '#32491f', '#5a753b']));
    }
    // Wide mouth cavity low on the face, full of misaligned teeth.
    px(ctx, 9, 39, 46, 17, '#0b0d07');
    px(ctx, 13, 42, 39, 11, '#240a07');
    for (let i = 0; i < 11; i += 1) {
      const x = 12 + i * 4;
      px(ctx, x, 39, 3, 5 - (i % 2), '#b7ad82');
      px(ctx, x, 49, 2, 5, '#837b58');
    }
    for (let i = 0; i < 45; i += 1) {
      px(ctx, rng.int(11, 53), rng.int(41, 53), 1, 1, '#4e1c14');
    }
    // No eyes, no sockets: only continuous moss-covered bone plates.
    px(ctx, 10, 17, 18, 3, '#547238');
    px(ctx, 36, 17, 18, 3, '#547238');
    px(ctx, 13, 20, 11, 1, '#2f441f');
    px(ctx, 40, 20, 11, 1, '#2f441f');
    for (let i = 0; i < 6; i += 1) {
      px(ctx, 16 + i * 6, 22, 1, 9, '#203017');
    }
    noiseSpeckle(ctx, w, h, rng, ['#78984a', '#1b2912'], 100);
  }, { repeat: [1, 1], wrap: false });
}

export function screenTexture(variant = 0) {
  return makeTexture(`screen${variant}`, 128, 80, (ctx, w, h) => {
    px(ctx, 0, 0, w, h, '#061b13');
    ctx.fillStyle = '#0c2b1e';
    for (let y = 0; y < h; y += 3) ctx.fillRect(0, y, w, 1);
    ctx.fillStyle = variant === 0 ? '#7bf2c8' : variant === 1 ? '#e3c06a' : '#89dd83';
    ctx.font = 'bold 9px monospace';
    ctx.fillText(variant === 0 ? 'BIO-LINK // ACTIVE' : variant === 1 ? 'WARNING: M-08' : 'AIRLOCK CONTROL', 7, 12);
    ctx.font = '7px monospace';
    const lines = variant === 0
      ? ['SUBJECT: APE-PRIME', 'HEART RATE  084', 'ECHO MAP   OK', 'DOME SEAL  3/4', '> AWAITING INPUT']
      : variant === 1
        ? ['CONTAINMENT LOST', 'OPTICAL ORGANS: 0', 'ACOUSTIC GAIN: 98%', 'DO NOT SPEAK', '> RUN PROTOCOL']
        : ['DOOR A-1  99.8', 'DOOR B-2  99.8', 'DOOR C-3  99.8', 'DOOR D-4  99.8', '> HYD SYS READY'];
    lines.forEach((line, i) => ctx.fillText(line, 7, 26 + i * 9));
    ctx.fillStyle = 'rgba(117, 239, 194, .18)';
    for (let y = 0; y < h; y += 4) ctx.fillRect(0, y, w, 1);
    // tiny graph
    ctx.strokeStyle = variant === 1 ? '#e7a35b' : '#78ecc2';
    ctx.beginPath();
    for (let x = 0; x < 42; x += 2) {
      const y = 64 + Math.sin(x * 0.62) * 4 + Math.sin(x * 0.19) * 3;
      if (x === 0) ctx.moveTo(82 + x, y);
      else ctx.lineTo(82 + x, y);
    }
    ctx.stroke();
  }, { repeat: [1, 1], wrap: false });
}

export function warningTexture() {
  return makeTexture('warning', 128, 128, (ctx, w, h) => {
    px(ctx, 0, 0, w, h, '#c0a33b');
    ctx.fillStyle = '#171811';
    for (let i = 0; i < 6; i += 1) {
      ctx.fillRect(0, i * 22, w, 7);
    }
    ctx.fillStyle = '#171811';
    ctx.beginPath();
    ctx.moveTo(64, 22);
    ctx.lineTo(109, 100);
    ctx.lineTo(19, 100);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#d8bd4e';
    ctx.font = 'bold 55px monospace';
    ctx.fillText('!', 56, 92);
    ctx.font = 'bold 10px monospace';
    ctx.fillStyle = '#171811';
    ctx.fillText('BIOHAZARD', 31, 118);
  }, { repeat: [1, 1], wrap: false });
}

export function rustTexture() {
  return makeTexture('rust', 32, 32, (ctx, w, h) => {
    const rng = new RNG(155);
    px(ctx, 0, 0, w, h, '#4e4938');
    for (let i = 0; i < 380; i += 1) {
      px(ctx, rng.int(0, w - 1), rng.int(0, h - 1), rng.int(1, 3), rng.int(1, 2), rng.pick(['#695b3d', '#332d22', '#806a43', '#583f27']));
    }
    ctx.globalAlpha = 0.3;
    for (let i = 0; i < 20; i += 1) px(ctx, rng.int(0, w), rng.int(0, h), 1, rng.int(2, 8), '#18140e');
    ctx.globalAlpha = 1;
  }, { repeat: [1, 1] });
}

export function metalPanelTexture() {
  return makeTexture('metalPanel', 32, 32, (ctx, w, h) => {
    const rng = new RNG(411);
    px(ctx, 0, 0, w, h, '#4f5d55');
    px(ctx, 1, 1, 30, 30, '#596961');
    px(ctx, 2, 2, 28, 1, '#75857b');
    px(ctx, 2, 29, 28, 1, '#2d3933');
    px(ctx, 29, 2, 1, 28, '#2d3933');
    for (const [x, y] of [[4, 4], [27, 4], [4, 27], [27, 27]]) px(ctx, x, y, 1, 1, '#9aa79b');
    for (let i = 0; i < 16; i += 1) px(ctx, rng.int(2, 29), rng.int(2, 29), 1, 1, rng.pick(['#38443d', '#829086']));
  }, { repeat: [1, 1] });
}

export function containerTexture() {
  return makeTexture('container', 32, 32, (ctx, w, h) => {
    const rng = new RNG(711);
    px(ctx, 0, 0, w, h, '#716b34');
    for (let y = 0; y < h; y += 8) {
      px(ctx, 0, y, w, 1, '#8a8342');
      px(ctx, 0, y + 7, w, 1, '#403f1e');
    }
    for (let x = 0; x < w; x += 16) {
      px(ctx, x, 0, 1, h, '#403f1e');
      px(ctx, x + 2, 0, 1, h, '#9d9347');
    }
    px(ctx, 8, 10, 16, 9, '#2d2d18');
    ctx.fillStyle = '#b8ac5b';
    ctx.font = 'bold 6px monospace';
    ctx.fillText('BIO-09', 9, 17);
    noiseSpeckle(ctx, w, h, rng, ['#a39a4b', '#2d2a15'], 70);
  }, { repeat: [1, 1] });
}

export function crateTexture() {
  return makeTexture('crate', 32, 32, (ctx, w, h) => {
    px(ctx, 0, 0, w, h, '#544631');
    px(ctx, 2, 2, 28, 28, '#66563c');
    px(ctx, 2, 2, 28, 2, '#7d6a48');
    px(ctx, 2, 28, 28, 2, '#352d20');
    px(ctx, 2, 2, 2, 28, '#7d6a48');
    px(ctx, 28, 2, 2, 28, '#352d20');
    ctx.fillStyle = '#8a7853';
    ctx.font = 'bold 7px monospace';
    ctx.fillText('AP-09', 8, 18);
  }, { repeat: [1, 1] });
}

export function glowTexture() {
  return makeTexture('glow', 64, 64, (ctx, w, h) => {
    const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.18, 'rgba(210,255,190,0.75)');
    g.addColorStop(0.5, 'rgba(120,240,190,0.18)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  }, { wrap: false, mip: false });
}

export function coreTexture() {
  return makeTexture('core', 32, 32, (ctx, w, h) => {
    px(ctx, 0, 0, w, h, '#0a201b');
    px(ctx, 11, 4, 10, 24, '#6be7c5');
    px(ctx, 13, 6, 6, 20, '#b4ffea');
    px(ctx, 8, 10, 16, 12, '#41bfa1');
    for (let y = 3; y < 29; y += 5) px(ctx, 9, y, 14, 1, '#d3fff2');
    for (let x = 6; x < 27; x += 5) px(ctx, x, 9, 1, 14, '#2c9d84');
  }, { repeat: [1, 1], wrap: false });
}

export function makeTextTexture(text, options = {}) {
  const value = String(text);
  const w = options.width ?? 256;
  const h = options.height ?? 64;
  const color = options.color ?? '#d8e4b5';
  const bg = options.bg ?? '#0b1510';
  const size = options.size ?? 18;
  return makeTexture(`text:${value}:${w}:${h}:${color}:${bg}:${size}`, w, h, (ctx) => {
    px(ctx, 0, 0, w, h, bg);
    ctx.fillStyle = color;
    ctx.font = `bold ${size}px monospace`;
    ctx.textAlign = options.align ?? 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(value, options.align === 'left' ? 10 : w / 2, h / 2);
    if (options.subtle) {
      ctx.fillStyle = 'rgba(255,255,255,.06)';
      for (let y = 0; y < h; y += 4) ctx.fillRect(0, y, w, 1);
    }
  }, { repeat: [1, 1], wrap: false });
}

export function disposeTextures() {
  for (const texture of textureCache.values()) texture.dispose();
  textureCache.clear();
}

export { clamp };
