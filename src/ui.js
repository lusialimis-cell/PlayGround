import { clamp, terrainHeight } from './utils.js';

const dirNames = { 0: 'N', 45: 'NE', 90: 'E', 135: 'SE', 180: 'S', 225: 'SW', 270: 'W', 315: 'NW' };
const markerLabels = {};

export class UI {
  constructor() {
    this.el = {
      loading: document.getElementById('loading'),
      loadingFill: document.getElementById('loading-fill'),
      loadingStatus: document.getElementById('loading-status'),
      start: document.getElementById('start-screen'),
      startBtn: document.getElementById('start-btn'),
      hud: document.getElementById('hud'),
      brand: document.querySelector('.brand-copy'),
      compassStrip: document.getElementById('compass-strip'),
      compassDeg: document.getElementById('compass-deg'),
      zoneLabel: document.getElementById('zone-label'),
      markerRow: document.getElementById('marker-row'),
      healthFill: document.getElementById('health-fill'),
      staminaFill: document.getElementById('stamina-fill'),
      noiseFill: document.getElementById('noise-fill'),
      healthValue: document.getElementById('health-value'),
      staminaValue: document.getElementById('stamina-value'),
      noiseValue: document.getElementById('noise-value'),
      stanceLabel: document.getElementById('stance-label'),
      threatPanel: document.querySelector('.threat-panel'),
      threatCanvas: document.getElementById('proximity-canvas'),
      threatState: document.getElementById('threat-state'),
      threatDistance: document.getElementById('threat-distance'),
      threatLight: document.getElementById('threat-light'),
      threatVignette: document.getElementById('threat-vignette'),
      damageFlash: document.getElementById('damage-flash'),
      interactWrap: document.getElementById('interact-wrap'),
      interactLabel: document.getElementById('interact-label'),
      interactAction: document.getElementById('interact-action'),
      alertBanner: document.getElementById('alert-banner'),
      toasts: document.getElementById('toasts'),
      subtitle: document.getElementById('subtitle'),
      mapOverlay: document.getElementById('map-overlay'),
      mapCanvas: document.getElementById('map-canvas'),
      mapClose: document.getElementById('map-close'),
      mapCoords: document.getElementById('map-coords'),
      pause: document.getElementById('pause-overlay'),
      death: document.getElementById('death-overlay'),
      deathDetail: document.getElementById('death-detail'),
      screenFade: document.getElementById('screen-fade'),
      crosshair: document.getElementById('crosshair'),
      touch: document.getElementById('touch-controls'),
      joyZone: document.getElementById('joy-zone'),
      joyKnob: document.getElementById('joy-knob'),
      btnInteract: document.getElementById('btn-interact'),
      btnCrouch: document.getElementById('btn-crouch'),
      btnSprint: document.getElementById('btn-sprint'),
      btnCamera: document.getElementById('btn-camera'),
      btnMap: document.getElementById('btn-map'),
      btnLight: document.getElementById('btn-light'),
      btnPause: document.getElementById('btn-pause'),
    };
    this.mapCtx = this.el.mapCanvas.getContext('2d');
    this.threatCtx = this.el.threatCanvas.getContext('2d');
    this.mapOpen = false;
    this.toastTimer = 0;
    this.alertTimer = 0;
    this.subtitleTimer = 0;
    this.fadeTimer = 0;
    this.lastVitals = {};
    this.lastObjective = null;
    this.compassWidth = 0;
    this.mapTerrain = null;
    this.lastMapTime = 0;
    this.lastThreat = 0;
    this.createCompass();
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  createCompass() {
    const frag = document.createDocumentFragment();
    this.compassLabels = [];
    for (let deg = -360; deg <= 720; deg += 15) {
      const label = document.createElement('i');
      const norm = ((deg % 360) + 360) % 360;
      const name = dirNames[norm];
      if (name) {
        label.textContent = name;
        label.classList.add('cardinal');
      } else {
        label.textContent = deg % 30 === 0 ? String(Math.abs(deg) % 360).padStart(3, '0') : '·';
      }
      frag.appendChild(label);
      this.compassLabels.push({ el: label, deg });
    }
    this.el.compassStrip.appendChild(frag);
  }

  resize() {
    this.compassWidth = this.el.compassStrip.parentElement.clientWidth;
    this.compassWidth = Math.max(100, this.compassWidth);
  }

  setLoading(progress, status) {
    if (progress !== undefined) this.el.loadingFill.style.width = `${clamp(progress, 0, 100)}%`;
    if (status) this.el.loadingStatus.textContent = status;
  }

  hideLoading() {
    this.el.loading.classList.add('done');
  }

  hideStart() {
    this.el.start.classList.add('out');
    this.el.hud.classList.remove('is-hidden');
  }

  showStart() {
    this.el.start.classList.remove('out');
    this.el.hud.classList.add('is-hidden');
  }

  fadeBlack(black, duration = 600) {
    clearTimeout(this.fadeTimer);
    this.el.screenFade.classList.toggle('black', black);
    if (!black) {
      this.fadeTimer = setTimeout(() => {
        this.el.screenFade.style.pointerEvents = 'none';
      }, duration);
    } else {
      this.el.screenFade.style.pointerEvents = 'auto';
    }
  }

  toast(message, type = '', duration = 3800) {
    const node = document.createElement('div');
    node.className = `toast ${type}`;
    node.textContent = message;
    this.el.toasts.appendChild(node);
    setTimeout(() => {
      node.classList.add('fade');
      setTimeout(() => node.remove(), 450);
    }, duration);
    while (this.el.toasts.children.length > 4) this.el.toasts.firstChild.remove();
  }

  alert(label = 'AUDITORY EVENT DETECTED', sub = 'SUBJECT M-08 IS LISTENING', duration = 2600) {
    const b = this.el.alertBanner.querySelector('b');
    const s = this.el.alertBanner.querySelector('small');
    b.textContent = label;
    s.textContent = sub;
    this.el.alertBanner.classList.add('show');
    clearTimeout(this.alertTimer);
    this.alertTimer = setTimeout(() => this.el.alertBanner.classList.remove('show'), duration);
  }

  subtitle(text, duration = 5000) {
    this.el.subtitle.textContent = text;
    this.el.subtitle.classList.add('show');
    clearTimeout(this.subtitleTimer);
    this.subtitleTimer = setTimeout(() => this.el.subtitle.classList.remove('show'), duration);
  }

  showDamage() {
    this.el.damageFlash.classList.add('active');
    setTimeout(() => this.el.damageFlash.classList.remove('active'), 120);
  }

  setInteract(item, door = null) {
    if (!item) {
      this.el.interactWrap.classList.remove('show');
      return;
    }
    this.el.interactWrap.classList.add('show');
    if (item.kind === 'term' || item.kind === 'terminal') {
      this.el.interactLabel.textContent = 'SITE TERMINAL // LOCAL SYSTEMS';
      this.el.interactAction.textContent = 'INSPECT TERMINAL';
    } else if (item.kind === 'core') {
      this.el.interactLabel.textContent = item.label;
      this.el.interactAction.textContent = 'COLLECT SPECIMEN';
    } else if (item.kind === 'door') {
      const d = door || item.door;
      this.el.interactLabel.textContent = `${item.label} // LEFT SWITCH`;
      this.el.interactAction.textContent = d.busy ? 'HYDRAULIC CYCLE IN PROGRESS' : d.target > 0.5 ? 'CLOSE HYDRAULIC DOOR' : 'OPEN HYDRAULIC DOOR';
    } else {
      this.el.interactLabel.textContent = item.label || 'INTERACT';
      this.el.interactAction.textContent = 'ACTIVATE';
    }
  }

  setVitals(player) {
    const hp = Math.round(player.health);
    const sp = Math.round(player.stamina);
    const noise = player.noise;
    if (this.lastVitals.hp !== hp) this.el.healthValue.textContent = String(hp).padStart(3, '0');
    if (this.lastVitals.sp !== sp) this.el.staminaValue.textContent = String(sp).padStart(3, '0');
    this.el.healthFill.style.width = `${player.health}%`;
    this.el.staminaFill.style.width = `${player.stamina}%`;
    this.el.staminaFill.style.background = sp < 20 ? 'linear-gradient(90deg,#7f321f,#df7b43)' : '';
    this.el.noiseFill.style.width = `${Math.max(6, Math.round(noise * 100))}%`;
    const noiseLabel = noise > 0.8 ? 'CRITICAL' : noise > 0.45 ? 'HIGH' : noise > 0.2 ? 'LOW' : 'SILENT';
    if (this.lastVitals.noise !== noiseLabel) this.el.noiseValue.textContent = noiseLabel;
    const stance = player.crouching ? 'CROUCHED' : player.sprinting ? 'QUADRUPED SPRINT' : player.moving ? 'UPRIGHT WALK' : 'UPRIGHT';
    if (this.lastVitals.stance !== stance) this.el.stanceLabel.textContent = stance;
    this.lastVitals = { hp, sp, noise: noiseLabel, stance };
    const noiseColor = noise > 0.8 ? '#e15946' : noise > 0.45 ? '#e9b95f' : '#76f5d0';
    this.el.noiseFill.style.background = `linear-gradient(90deg, #647f3f, ${noiseColor})`;
  }

  setCompass(heading, player, jungle, mossman, cameraYaw) {
    const norm = ((heading % 360) + 360) % 360;
    this.el.compassDeg.textContent = `${String(Math.round(norm)).padStart(3, '0')}°`;
    const labelWidth = 56;
    const centerIndex = (norm + 360) / 15;
    const x = this.compassWidth / 2 - (centerIndex * labelWidth + labelWidth / 2);
    this.el.compassStrip.style.transform = `translateX(${x}px)`;
    // Marker row: nearest core bearing and predator fix.
    const markers = [];
    if (jungle) {
      const remaining = jungle.cores.filter((c) => !c.collected);
      if (remaining.length) {
        let nearest = remaining[0];
        let nd = Infinity;
        for (const c of remaining) {
          const d = player.position.distanceTo(c.position);
          if (d < nd) {
            nd = d;
            nearest = c;
          }
        }
        const bearing = this.bearing(player.position, nearest.position, cameraYaw);
        const side = bearing < 0 ? '◂' : '▸';
        markers.push(`${side} ${nearest.landmark} ${Math.round(nd)}M`);
      }
    }
    if (mossman) {
      const info = mossman.getThreatInfo(player);
      if (info.distance < 85 || info.state === 'chase' || info.state === 'lurk' || info.suspicion > 0.5) {
        const bearing = this.bearing(player.position, info.position, cameraYaw);
        const side = bearing < 0 ? '◂' : '▸';
        markers.push(`<i class="warn"></i> M-08 ${side} ${Math.round(info.distance)}M`);
      }
    }
    const html = markers.map((m) => `<span>${m}</span>`).join('');
    if (html !== markerLabels.value) {
      markerLabels.value = html;
      this.el.markerRow.innerHTML = html;
    }
  }

  bearing(from, to, cameraYaw) {
    const fx = -Math.sin(cameraYaw);
    const fz = -Math.cos(cameraYaw);
    const rx = Math.cos(cameraYaw);
    const rz = -Math.sin(cameraYaw);
    const dx = to.x - from.x;
    const dz = to.z - from.z;
    return dx * rx + dz * rz;
  }

  setZone(label) {
    if (this.lastVitals.zone === label) return;
    this.lastVitals.zone = label;
    this.el.zoneLabel.textContent = label;
  }

  setThreat(info, player, cameraYaw, time) {
    const distance = info.distance;
    const active = info.state === 'chase' || info.state === 'attack' || info.state === 'lurk' || (info.state === 'investigate' && distance < 60);
    this.el.threatVignette.classList.toggle('active', active && distance < 90);
    this.el.threatLight.classList.toggle('hot', active);
    const labels = {
      patrol: 'NO CONTACT',
      investigate: 'ACOUSTIC CONTACT',
      search: 'SEARCHING',
      chase: 'HUNTING YOU',
      attack: 'CONTACT',
      lurk: 'AT THE THRESHOLD',
    };
    const stateLabel = labels[info.state] || 'NO CONTACT';
    if (this.el.threatState.textContent !== stateLabel) this.el.threatState.textContent = stateLabel;
    const distanceLabel = info.state === 'patrol' && distance > 120 ? '-- M' : `${Math.round(distance)} M`;
    if (this.el.threatDistance.textContent !== distanceLabel) this.el.threatDistance.textContent = distanceLabel;
    if (time - this.lastThreat > 0.05) {
      this.lastThreat = time;
      this.drawThreat(info, player, cameraYaw, time);
    }
  }

  drawThreat(info, player, cameraYaw, time) {
    const ctx = this.threatCtx;
    const w = 220;
    const h = 110;
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(3,12,7,0.32)';
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = 'rgba(159,193,116,0.12)';
    ctx.lineWidth = 1;
    for (let i = 1; i < 4; i += 1) {
      ctx.beginPath();
      ctx.arc(w / 2, h - 6, 20 + i * 23, Math.PI * 1.08, Math.PI * 1.92);
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.moveTo(10, h - 6);
    ctx.lineTo(w - 10, h - 6);
    ctx.stroke();
    // Bearing relative to look direction.
    const dx = info.position.x - player.position.x;
    const dz = info.position.z - player.position.z;
    const rel = Math.atan2(dx, -dz) + cameraYaw;
    const angle = -Math.PI / 2 + rel;
    const d = clamp(info.distance / 130, 0, 1);
    const px = w / 2 + Math.cos(angle) * d * 92;
    const py = h - 6 + Math.sin(angle) * d * 85;
    const hot = info.state === 'chase' || info.state === 'attack' || info.state === 'lurk';
    const delayed = info.state === 'investigate' || info.state === 'search';
    if (hot || delayed || info.suspicion > 0.35) {
      const pulse = 2.5 + Math.sin(time * (hot ? 13 : 5)) * 1.2;
      ctx.fillStyle = hot ? '#e15946' : 'rgba(225,137,70,0.7)';
      ctx.beginPath();
      ctx.arc(px, py, pulse, 0, Math.PI * 2);
      ctx.fill();
      if (hot) {
        ctx.strokeStyle = 'rgba(225,89,70,0.45)';
        ctx.beginPath();
        ctx.arc(px, py, 8 + Math.sin(time * 3) * 3, 0, Math.PI * 2);
        ctx.stroke();
      }
    }
    // Player center notch.
    ctx.fillStyle = '#c9e76c';
    ctx.fillRect(w / 2 - 2, h - 10, 4, 7);
    ctx.fillStyle = 'rgba(197,220,160,0.32)';
    ctx.font = '7px monospace';
    ctx.fillText('HEARING ARRAY', 7, 12);
    ctx.fillText('N', w / 2 - 2, 12);
  }

  setMap(open) {
    this.mapOpen = open;
    this.el.mapOverlay.classList.toggle('show', open);
  }

  drawMap(player, jungle, mossman, cameraYaw, force = false) {
    if (!this.mapOpen && !force) return;
    const now = performance.now();
    if (!force && now - this.lastMapTime < 180) return;
    this.lastMapTime = now;
    const ctx = this.mapCtx;
    const w = this.el.mapCanvas.width;
    const h = this.el.mapCanvas.height;
    if (!this.mapTerrain) this.buildMapTerrain(w, h);
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(this.mapTerrain, 0, 0);
    // Grid.
    ctx.strokeStyle = 'rgba(165,196,128,0.08)';
    ctx.lineWidth = 1;
    for (let i = 1; i < 10; i += 1) {
      ctx.beginPath();
      ctx.moveTo((i * w) / 10, 0);
      ctx.lineTo((i * w) / 10, h);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, (i * h) / 10);
      ctx.lineTo(w, (i * h) / 10);
      ctx.stroke();
    }
    const toMap = (x, z) => [w / 2 + (x / 500) * w, h / 2 + (z / 500) * h];
    // Trail spokes.
    ctx.strokeStyle = 'rgba(192,169,117,0.24)';
    ctx.lineWidth = 7;
    ctx.setLineDash([12, 10]);
    for (const [x, z] of [[0, -120], [0, 120], [120, 0], [-120, 0]]) {
      const [mx, mz] = toMap(x, z);
      ctx.beginPath();
      ctx.moveTo(w / 2, h / 2);
      ctx.lineTo(mx, mz);
      ctx.stroke();
    }
    ctx.setLineDash([]);
    // Lab footprint.
    const labPx = (15 / 500) * w;
    ctx.fillStyle = 'rgba(157,175,160,0.78)';
    ctx.fillRect(w / 2 - labPx / 2, h / 2 - labPx / 2, labPx, labPx);
    ctx.strokeStyle = '#c9e76c';
    ctx.lineWidth = 2;
    ctx.strokeRect(w / 2 - labPx / 2, h / 2 - labPx / 2, labPx, labPx);
    ctx.fillStyle = '#c9e76c';
    ctx.font = 'bold 13px monospace';
    ctx.fillText('LAB', w / 2 - 13, h / 2 + 5);
    // Cores.
    for (const core of jungle.cores) {
      if (core.collected) continue;
      const [x, z] = toMap(core.position.x, core.position.z);
      ctx.fillStyle = '#76f5d0';
      ctx.fillRect(x - 3, z - 3, 6, 6);
      ctx.strokeStyle = 'rgba(118,245,208,0.28)';
      ctx.beginPath();
      ctx.arc(x, z, 13 + Math.sin(now * 0.003 + core.index) * 3, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillStyle = 'rgba(151,229,197,0.66)';
      ctx.font = '10px monospace';
      ctx.fillText(`CORE 0${core.index + 1}`, x + 11, z + 4);
    }
    // Player.
    const [px, pz] = toMap(player.position.x, player.position.z);
    ctx.save();
    ctx.translate(px, pz);
    ctx.rotate(Math.PI - player.yaw);
    ctx.fillStyle = '#d8f77e';
    ctx.beginPath();
    ctx.moveTo(0, -11);
    ctx.lineTo(7, 8);
    ctx.lineTo(0, 4);
    ctx.lineTo(-7, 8);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
    ctx.strokeStyle = 'rgba(201,231,108,0.25)';
    ctx.beginPath();
    ctx.arc(px, pz, 18, 0, Math.PI * 2);
    ctx.stroke();
    // Mossman only if close enough / visible.
    const info = mossman.getThreatInfo(player);
    if (info.distance < 95 || info.state === 'chase' || info.state === 'lurk' || info.suspicion > 0.65) {
      const [mx, mz] = toMap(info.position.x, info.position.z);
      ctx.fillStyle = '#e15946';
      ctx.beginPath();
      ctx.arc(mx, mz, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = 'rgba(225,89,70,0.4)';
      ctx.beginPath();
      ctx.arc(mx, mz, 13 + Math.sin(now * 0.008) * 4, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillStyle = 'rgba(235,150,126,0.7)';
      ctx.font = '10px monospace';
      ctx.fillText('M-08', mx + 11, mz + 4);
    }
    // Directional north and border.
    ctx.fillStyle = 'rgba(217,234,187,0.55)';
    ctx.font = 'bold 15px monospace';
    ctx.fillText('N', w / 2 - 5, 21);
    ctx.strokeStyle = 'rgba(195,223,150,0.32)';
    ctx.lineWidth = 2;
    ctx.strokeRect(1, 1, w - 2, h - 2);
    if (player) {
      this.el.mapCoords.textContent = `X ${String(Math.round(player.position.x)).padStart(4, '0')} / Z ${String(Math.round(player.position.z)).padStart(4, '0')}`;
    }
  }

  buildMapTerrain(w, h) {
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    const cell = 8;
    for (let y = 0; y < h; y += cell) {
      for (let x = 0; x < w; x += cell) {
        const wx = ((x + cell / 2) / w - 0.5) * 500;
        const wz = ((y + cell / 2) / h - 0.5) * 500;
        const ht = terrainHeight(wx, wz);
        const v = clamp(0.16 + ht / 42, 0.04, 0.46);
        const moss = clamp(0.3 + ht / 55, 0.12, 0.56);
        ctx.fillStyle = `rgb(${Math.floor(12 + v * 40)}, ${Math.floor(25 + moss * 54)}, ${Math.floor(18 + v * 30)})`;
        ctx.fillRect(x, y, cell, cell);
        if (ht > 7 && (x + y) % 32 === 0) {
          ctx.fillStyle = 'rgba(137,159,104,0.1)';
          ctx.fillRect(x, y, cell, cell);
        }
      }
    }
    // Contour speckle.
    ctx.globalAlpha = 0.15;
    for (let i = 0; i < 250; i += 1) {
      ctx.fillStyle = i % 3 ? '#779057' : '#233f25';
      ctx.fillRect(Math.floor(Math.random() * w), Math.floor(Math.random() * h), 2, 2);
    }
    ctx.globalAlpha = 1;
    this.mapTerrain = canvas;
  }

  showPause(show) {
    this.el.pause.classList.toggle('show', show);
  }

  showDeath(detail) {
    if (detail) this.el.deathDetail.textContent = detail;
    this.el.death.classList.add('show');
  }

  hideDeath() {
    this.el.death.classList.remove('show');
  }

  setCameraMode(mode) {
    this.el.crosshair.style.opacity = mode === 'first' ? '0.9' : '0.42';
  }

  setTouchVisible(visible) {
    this.el.touch.style.display = visible ? 'block' : 'none';
  }
}
