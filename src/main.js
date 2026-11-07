import * as THREE from 'three';
import './style.css';

const $ = (s) => document.querySelector(s);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const rand = (() => { let s = 735921; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; })();
const worldEl = $('#world');
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x758578);
scene.fog = new THREE.FogExp2(0x899487, 0.0125);
const camera = new THREE.PerspectiveCamera(72, innerWidth / innerHeight, 0.08, 600);
const renderer = new THREE.WebGLRenderer({ canvas: worldEl, antialias: false, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.4) * .78);
renderer.setSize(innerWidth, innerHeight, false);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.12;

const hemi = new THREE.HemisphereLight(0xb9c7ae, 0x27342a, 2.0); scene.add(hemi);
const sun = new THREE.DirectionalLight(0xffd5a1, 3.2); sun.position.set(-46, 75, 35); sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048); sun.shadow.camera.left = -80; sun.shadow.camera.right = 80; sun.shadow.camera.top = 80; sun.shadow.camera.bottom = -80; sun.shadow.bias = -0.0004; scene.add(sun);
const fill = new THREE.DirectionalLight(0x8db7a1, 1.05); fill.position.set(45, 28, -40); scene.add(fill);
const ambient = new THREE.PointLight(0x94b99b, 35, 40, 2); ambient.position.set(0, 8, 0); scene.add(ambient);

const mat = (color, roughness=.94, extra={}) => new THREE.MeshStandardMaterial({ color, roughness, ...extra });
const mats = {
  bark: [mat(0x403b2e),mat(0x514839),mat(0x343b2d)],
  leaves: [mat(0x415b3d),mat(0x60754a),mat(0x344c3a),mat(0x758052),mat(0x4d6745)],
  rock: [mat(0x55584b),mat(0x686452),mat(0x414a40)],
  fern: mat(0x627747), moss: mat(0x4b6945),
  ape: mat(0x493a30), apeLight: mat(0x77614a), face: mat(0x28251f), eye: mat(0xe4b980, .45, { emissive:0x49351d, emissiveIntensity:.35 }),
  mossman: mat(0x526b3e), warden: mat(0x333f34), crystal: mat(0x90d3a1,.35,{emissive:0x316c46,emissiveIntensity:1.2}),
  water: new THREE.MeshStandardMaterial({color:0x273b34,roughness:.22,metalness:.12,transparent:true,opacity:.77}),
  metal: mat(0x5c5b47,.65,{metalness:.38}),
};

function heightAt(x,z){
  const broad = Math.sin(x*.042+1.2)*2.1 + Math.cos(z*.036-.8)*2.5 + Math.sin((x+z)*.021)*1.5;
  const ridge = Math.sin(x*.015)*Math.cos(z*.018)*5.5;
  const hill1 = Math.exp(-((x-38)**2+(z+28)**2)/850)*8;
  const hill2 = Math.exp(-((x+55)**2+(z-39)**2)/1300)*6;
  const valley = -Math.exp(-((x+15)**2+(z-10)**2)/450)*3.2;
  return broad+ridge+hill1+hill2+valley;
}
function makeTerrain(){
  const n=200, size=500, pos=[], colors=[], idx=[];
  const c1=new THREE.Color(0x405441), c2=new THREE.Color(0x64704e), c3=new THREE.Color(0x343f35), c4=new THREE.Color(0x6a7055);
  for(let z=0;z<=n;z++)for(let x=0;x<=n;x++){
    const wx=x/n*size-size/2, wz=z/n*size-size/2, y=heightAt(wx,wz);
    pos.push(wx,y,wz);
    const micro=(Math.sin(wx*1.7+Math.sin(wz*2))*.08+Math.cos(wz*1.4)*.045+rand()*.035);
    const t=clamp(.45+y*.023+micro,0,1); let col=c1.clone().lerp(c2,t);
    if(y< -1.5)col.lerp(c3,.43); if(y>7)col.lerp(c4,.35);
    colors.push(col.r,col.g,col.b);
  }
  for(let z=0;z<n;z++)for(let x=0;x<n;x++){const a=z*(n+1)+x,b=a+n+1; if((x+z)%2){idx.push(a,b,a+1,b,b+1,a+1)}else{idx.push(a,b,b+1,a,a+1,b+1)}}
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));g.setIndex(idx);g.computeVertexNormals();
  const m=new THREE.MeshStandardMaterial({vertexColors:true,roughness:1});const mesh=new THREE.Mesh(g,m);mesh.receiveShadow=true;mesh.position.y=-.12;scene.add(mesh);
}
makeTerrain();

const treeSpots=[];
function makeForest(){
  const trunkG=new THREE.CylinderGeometry(.28,.48,1,7,1), trunkI=new THREE.InstancedMesh(trunkG,mats.bark[0],1900); trunkI.castShadow=true;trunkI.receiveShadow=true;
  const canopyG=[new THREE.IcosahedronGeometry(1,0),new THREE.DodecahedronGeometry(1,0),new THREE.IcosahedronGeometry(1.1,0)];
  const canopyI=canopyG.map((g,i)=>{const a=new THREE.InstancedMesh(g,mats.leaves[i],2800);a.castShadow=true;a.receiveShadow=true;scene.add(a);return a;});
  const dummy=new THREE.Object3D();let ti=0,ci=[0,0,0];
  for(let i=0;i<1900;i++){
    let x,z; let attempt=0;
    do{x=(rand()-.5)*470;z=(rand()-.5)*470;attempt++;}while(attempt<18&&((x*x+z*z)<210||Math.abs(x)<12&&Math.abs(z)<18));
    const y=heightAt(x,z), tall=4.5+rand()*5.5, width=.75+rand()*.7; treeSpots.push({x,z,r:1.2+width*.3});
    dummy.position.set(x,y+tall/2,z);dummy.scale.set(width,tall,width);dummy.rotation.y=rand()*6.28;dummy.updateMatrix();trunkI.setMatrixAt(ti++,dummy.matrix);
    const crownY=y+tall*.72;
    for(let k=0;k<4;k++){
      const v=rand(), gidx=(i+k)%3, spread=width*(1.15+rand()*.6);
      dummy.position.set(x+(rand()-.5)*spread*1.5,crownY+(rand()-.5)*tall*.25,z+(rand()-.5)*spread*1.5);
      const s=(1.15+rand()*1.25)*width;dummy.scale.set(s*(.85+rand()*.45),s*(.7+rand()*.45),s*(.9+rand()*.45));dummy.rotation.set(rand()*.7,rand()*6.28,rand()*.7);dummy.updateMatrix();canopyI[gidx].setMatrixAt(ci[gidx]++,dummy.matrix);
    }
  }
  trunkI.count=ti;trunkI.instanceMatrix.needsUpdate=true;scene.add(trunkI);
  canopyI.forEach((a,i)=>{a.count=ci[i];a.instanceMatrix.needsUpdate=true;});
  // Layers of blocky understory, fallen timber, and rock cover.
  const fernG=new THREE.IcosahedronGeometry(1,0), fernI=new THREE.InstancedMesh(fernG,mats.fern,900);fernI.castShadow=true;
  const rockI=new THREE.InstancedMesh(new THREE.DodecahedronGeometry(1,0),mats.rock[0],360);rockI.castShadow=true;rockI.receiveShadow=true;
  for(let i=0;i<230;i++){const x=(rand()-.5)*185,z=(rand()-.5)*185,y=heightAt(x,z),s=.45+rand()*1.1;dummy.position.set(x,y+s*.25,z);dummy.scale.set(s*1.5,s*.8,s);dummy.rotation.set(rand()*.3,rand()*6,rand()*.3);dummy.updateMatrix();fernI.setMatrixAt(i,dummy.matrix);}
  for(let i=0;i<95;i++){let x=(rand()-.5)*185,z=(rand()-.5)*185;const y=heightAt(x,z),s=.5+rand()*1.7;dummy.position.set(x,y+s*.3,z);dummy.scale.set(s,s*.7,s*.8);dummy.rotation.set(rand()*.5,rand()*6,rand()*.5);dummy.updateMatrix();rockI.setMatrixAt(i,dummy.matrix);}
  scene.add(fernI,rockI);
  // Fern clumps and leaf fans as low-poly geometry around clearings.
  const fernGeo=new THREE.ConeGeometry(.12,1,4,1);const fernMat=mat(0x506743);
  for(let i=0;i<180;i++){
    const x=(rand()-.5)*186,z=(rand()-.5)*186,y=heightAt(x,z),group=new THREE.Group();group.position.set(x,y,z);
    for(let j=0;j<5;j++){const f=new THREE.Mesh(fernGeo,fernMat);f.position.set((rand()-.5)*.8,.35,(rand()-.5)*.8);f.rotation.z=(rand()-.5)*.8;f.rotation.x=(rand()-.5)*.7;f.scale.set(.5+rand()*.7,.6+rand()*.8,.5+rand()*.5);f.castShadow=true;group.add(f)}scene.add(group);
  }
}
makeForest();

function makeWater(){
  const pond=new THREE.Mesh(new THREE.CircleGeometry(5.5,9),mats.water);pond.rotation.x=-Math.PI/2;pond.position.set(-17,heightAt(-17,11)+.02,11);pond.scale.set(1.4,.75,1);scene.add(pond);
  const edge=new THREE.Mesh(new THREE.TorusGeometry(5.4,.12,3,14),mat(0x44583e));edge.rotation.x=Math.PI/2;edge.position.set(-17,heightAt(-17,11)+.03,11);edge.scale.set(1.4,1,1);scene.add(edge);
  const logMat=mat(0x493d2d);for(let i=0;i<12;i++){const x=(rand()-.5)*130,z=(rand()-.5)*130;if(x*x+z*z<400)continue;const log=new THREE.Mesh(new THREE.CylinderGeometry(.18,.22,2.4+rand()*3,6),logMat);log.position.set(x,heightAt(x,z)+.22,z);log.rotation.z=Math.PI/2+(rand()-.5)*.25;log.rotation.y=rand()*2;log.castShadow=true;scene.add(log)}
  // Distinctly artificial, abandoned field equipment in a mossy basin.
  const drum=new THREE.Mesh(new THREE.CylinderGeometry(.72,.72,1.8,8),mats.metal);drum.position.set(19,heightAt(19,-27)+.9,-27);drum.rotation.z=.18;drum.castShadow=true;scene.add(drum);
  const band=new THREE.Mesh(new THREE.CylinderGeometry(.74,.74,.15,8),mat(0x9b593e));band.position.set(19,heightAt(19,-27)+1.2,-27);scene.add(band);
  const antenna=new THREE.Mesh(new THREE.CylinderGeometry(.035,.05,4,5),mat(0x47483d));antenna.position.set(22,heightAt(22,-29)+2,-29);antenna.rotation.z=.1;antenna.castShadow=true;scene.add(antenna);
  const beacon=new THREE.PointLight(0xdd754a,3,12,2);beacon.position.set(22,heightAt(22,-29)+3.6,-29);scene.add(beacon);
}
makeWater();

// A procedural, deliberately stylized survivor and two sound-hunting entities.
function capsule(parent, radius, length, material, position, scale=[1,1,1]) {
  const mesh = new THREE.Mesh(new THREE.CapsuleGeometry(radius,length,3,6),material);
  mesh.position.set(...position); mesh.scale.set(...scale); mesh.castShadow=true; mesh.receiveShadow=true; parent.add(mesh); return mesh;
}
function sphere(parent, size, material, position, scale=[1,1,1]) {
  const mesh=new THREE.Mesh(new THREE.IcosahedronGeometry(size,1),material);mesh.position.set(...position);mesh.scale.set(...scale);mesh.castShadow=true;parent.add(mesh);return mesh;
}
function createCharacter(kind='player') {
  const root=new THREE.Group(), rig=new THREE.Group();root.add(rig);
  const isPlayer=kind==='player', isMoss=kind==='mossman', torsoMat=isPlayer?mats.ape:isMoss?mats.mossman:mats.warden;
  const torso=sphere(rig,isPlayer?.54:isMoss?.83:.62,torsoMat,[0,isPlayer?.95:1.35,0],[.82,1.05,.63]);
  sphere(rig,isPlayer?.36:isMoss?.54:.4,isPlayer?mats.apeLight:torsoMat,[0,isPlayer?1.58:2.08,.04],[.95,.9,.9]);
  const face=sphere(rig,isPlayer?.24:.28,mats.face,[0,isPlayer?1.61:2.12,.34],[1,.72,.56]);
  if(isPlayer){
    // Eye sockets are sculptural, not glowing: these figures navigate by sound.
    for(const side of [-1,1])sphere(rig,.067,mats.eye,[side*.115,1.7,.54],[.7,.55,.35]);
  } else {
    // Smooth blind face; Warden carries angular xenon growths on the hands.
    const mouth=new THREE.Mesh(new THREE.BoxGeometry(.24,.055,.05),mat(0x171b16));mouth.position.set(0,isMoss?2.02:2.01,.57);rig.add(mouth);
    if(!isMoss)for(const side of [-1,1]){const crystal=sphere(rig,.17,mats.crystal,[side*.6,.5,.05],[.45,1.5,.4]);crystal.rotation.z=side*.45;}
  }
  const limbs=[];
  for(const side of [-1,1]){
    const arm=capsule(rig,isPlayer?.16:.22,isPlayer?.48:.6,torsoMat,[side*(isPlayer?.42:.57),isPlayer?1.05:1.4,.02],[1,1,.9]);arm.rotation.z=side*-.38;limbs.push(arm);
    const leg=capsule(rig,isPlayer?.19:.25,isPlayer?.34:.53,torsoMat,[side*.29,isPlayer?.4:.58,-.06],[1,1,.9]);leg.rotation.z=side*.12;limbs.push(leg);
    const hand=sphere(rig,isPlayer?.14:.23,isPlayer?mats.apeLight:torsoMat,[side*(isPlayer?.48:.68),isPlayer?.67:.68,.13],[1,.75,1.15]);
    if(!isPlayer&&!isMoss){const spike=sphere(rig,.11,mats.crystal,[side*.72,.54,.24],[.45,1.7,.45]);spike.rotation.z=side*-.5;}
  }
  const height=isPlayer?2.1:isMoss?2.8:1.9;
  root.userData={rig,torso,limbs,kind,height,phase:rand()*8};return root;
}
const player=createCharacter('player'); scene.add(player);
player.position.set(0,heightAt(0,0),0);
const predators=[
 {name:'MOSSMAN',kind:'mossman',group:createCharacter('mossman'),speed:9.15,hear:60,turn:.5,state:'wander',target:new THREE.Vector3(24,0,20),lastHeard:0,attackCooldown:0,ability:'SPORE TRAIL'},
 {name:'WARDEN',kind:'warden',group:createCharacter('warden'),speed:8.55,hear:86,turn:.75,state:'wander',target:new THREE.Vector3(-33,0,-28),lastHeard:0,attackCooldown:0,ability:'XENON HANDS'}
];
predators.forEach((p,i)=>{p.group.position.set(i? -42:39,heightAt(i?-42:39,i?-31:28),i?-31:28);scene.add(p.group);});
// Cooperative survival echoes for solo play; local-room is a shared same-browser session, not internet matchmaking.
const bots=[];
for(let i=0;i<2;i++){const bot=createCharacter('player');bot.scale.setScalar(.78);bot.position.set(i?7:-8,heightAt(i?7:-8,i?10:-7),i?10:-7);scene.add(bot);bots.push({...bot.userData,group:bot,phase:i*3,state:'roam',goal:new THREE.Vector3((rand()-.5)*95,0,(rand()-.5)*95),alert:0});}

const input={forward:0,right:0,sprint:false,crouch:false};
let yaw=0,pitch=-.12,velocity=new THREE.Vector3(),stamina=100,health=100,noise=0,mode='solo',started=false,paused=false,dead=false,elapsed=0,gameClock=0,lastNoise=0,lastAttack=0,toastTimer=0,mouseLocked=false;
const cameraTarget=new THREE.Vector3(),camPos=new THREE.Vector3(),moveDir=new THREE.Vector3(),forward=new THREE.Vector3(),right=new THREE.Vector3();
const playerRadius=.65;
function tell(text,duration=2600){const el=$('#toast');el.textContent=text;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),duration);}
function emitNoise(amount,source=player.position){noise=Math.max(noise,amount);lastNoise=elapsed;for(const p of predators){const d=source.distanceTo(p.group.position);if(d<p.hear*(amount+.25)){p.target.set(source.x,heightAt(source.x,source.z),source.z);p.lastHeard=elapsed;p.state=d<18?'charge':'investigate';}}}
function setMode(next){mode=next;document.querySelectorAll('.mode-option').forEach(b=>b.classList.toggle('active',b.dataset.mode===mode));$('#room-note').textContent=mode==='solo'?'Intelligent echoes wander nearby.':'Same-device room preview • 2 survivors';$('#session-label').textContent=mode==='solo'?'SOLO / ECHOES ACTIVE':'LOCAL ROOM / 3 SURVIVORS';}
function gameStart(){
 if(started){paused=false;$('#pause-overlay').classList.add('hidden');return;}
 started=true;dead=false;$('#title-screen').classList.add('leaving');$('#game-ui').classList.remove('hidden');
 $('#loading').classList.remove('done');$('#loading').style.display='flex';requestAnimationFrame(()=>$('#loading .loading-track i').style.width='100%');
 setTimeout(()=>{$('#loading').classList.add('done');setTimeout(()=>$('#loading').style.display='none',650);},650);
 tell('THE CANOPY IS LISTENING. MOVE QUIETLY.',4200);
 if(innerWidth>720&&worldEl.requestPointerLock)worldEl.requestPointerLock();
}
function leaveGame(){started=false;paused=false;$('#game-ui').classList.add('hidden');$('#pause-overlay').classList.add('hidden');$('#title-screen').classList.remove('leaving');if(document.pointerLockElement)document.exitPointerLock();if(typeof resetGame==='function')resetGame();}
function setPause(value){paused=value;$('#pause-overlay').classList.toggle('hidden',!paused);if(!paused&&innerWidth>720&&worldEl.requestPointerLock)worldEl.requestPointerLock();else if(paused&&document.pointerLockElement)document.exitPointerLock();}
function terrainCollision(pos){
  pos.x=clamp(pos.x,-97,97);pos.z=clamp(pos.z,-97,97);
  for(const t of treeSpots){const dx=pos.x-t.x,dz=pos.z-t.z,d=Math.hypot(dx,dz),min=playerRadius+t.r;if(d<min&&d>.001){pos.x=t.x+dx/d*min;pos.z=t.z+dz/d*min;}}
  pos.y=heightAt(pos.x,pos.z);return pos;
}
function updateCamera(dt){
  const h=player.position.y+(input.crouch?.85:1.2);
  cameraTarget.set(player.position.x,h,player.position.z);
  const dist=5.8, horiz=Math.cos(pitch)*dist;
  const desired=new THREE.Vector3(cameraTarget.x+Math.sin(yaw)*horiz,cameraTarget.y+Math.sin(pitch)*dist+1.05,cameraTarget.z+Math.cos(yaw)*horiz);
  // Sphere-like ray probe keeps the over-shoulder camera out of trunks and canopy.
  const rayDir=new THREE.Vector3().subVectors(desired,cameraTarget).normalize();let nearest=dist+1.2;
  for(const tree of treeSpots){const relX=tree.x-cameraTarget.x,relZ=tree.z-cameraTarget.z,t=relX*rayDir.x+relZ*rayDir.z;if(t>.3&&t<nearest){const px=cameraTarget.x+rayDir.x*t-tree.x,pz=cameraTarget.z+rayDir.z*t-tree.z;if(px*px+pz*pz<(tree.r+.28)**2)nearest=t;}}
  if(nearest<dist+1.2)desired.lerpVectors(cameraTarget,desired,Math.max(.18,(nearest-.45)/(dist+1.2)));
  camPos.lerp(desired,1-Math.exp(-dt*8));camera.position.copy(camPos);camera.lookAt(cameraTarget.x-Math.sin(yaw)*.65,cameraTarget.y+.35,cameraTarget.z-Math.cos(yaw)*.65);
}
function updatePlayer(dt){
  forward.set(-Math.sin(yaw),0,-Math.cos(yaw));right.set(Math.cos(yaw),0,-Math.sin(yaw));moveDir.set(0,0,0).addScaledVector(forward,input.forward).addScaledVector(right,input.right);if(moveDir.lengthSq()>1)moveDir.normalize();
  const moving=moveDir.lengthSq()>.01,sprinting=input.sprint&&stamina>1&&!input.crouch&&moving,speed=input.crouch?1.25:sprinting?6.0:3.05;
  if(sprinting)stamina=Math.max(0,stamina-dt*20);else stamina=Math.min(100,stamina+dt*(input.crouch?11:7));
  const accel=1-Math.exp(-dt*(moving?9:5));velocity.x=lerp(velocity.x,moveDir.x*speed,accel);velocity.z=lerp(velocity.z,moveDir.z*speed,accel);
  const candidate=player.position.clone().addScaledVector(velocity,dt);terrainCollision(candidate);player.position.copy(candidate);
  if(moving){player.rotation.y=Math.atan2(moveDir.x,moveDir.z);player.userData.phase+=dt*(sprinting?13:input.crouch?3:7);}
  const phase=player.userData.phase, amount=moving?Math.sin(phase)*.34:Math.sin(elapsed*1.6)*.025;
  player.userData.rig.position.y=amount+(input.crouch?-.4:0);
  player.userData.limbs.forEach((limb,i)=>{limb.rotation.x=moving?Math.sin(phase+(i%2)*Math.PI)*.65:0;});
  const noiseTarget=moving?(input.crouch?.12:sprinting?.95:.36):.06;noise=Math.max(noiseTarget,noise-dt*.24);
  if(moving&&elapsed-lastNoise>(sprinting?.38:input.crouch?2.1:.82)){emitNoise(input.crouch?.2:sprinting?1:.48);lastNoise=elapsed;}
  camera.fov=lerp(camera.fov,Number($('#fov-slider').value),1-Math.exp(-dt*3));camera.updateProjectionMatrix();
}

// Three lost field transmitters can be recovered, then carried back to the crash-site beacon.
const artifacts=[];
const artifactSpots=[new THREE.Vector3(-56,0,-50),new THREE.Vector3(62,0,-46),new THREE.Vector3(48,0,66)];
const beaconSpot=new THREE.Vector3(19,0,-27);
function addMarker(position,index){
  const group=new THREE.Group();group.position.set(position.x,heightAt(position.x,position.z),position.z);
  const base=new THREE.Mesh(new THREE.CylinderGeometry(.42,.58,.22,7),mat(0x514f3b));base.position.y=.12;base.castShadow=true;group.add(base);
  const core=new THREE.Mesh(new THREE.OctahedronGeometry(.48,0),mats.crystal);core.position.y=.92;core.rotation.y=index*1.1;core.castShadow=true;group.add(core);
  const ring=new THREE.Mesh(new THREE.TorusGeometry(.8,.045,4,12),mat(0xb7d79a,.4,{emissive:0x536e3d,emissiveIntensity:.6}));ring.rotation.x=Math.PI/2;ring.position.y=.14;group.add(ring);
  const light=new THREE.PointLight(0x8dd79b,1.8,9,2);light.position.y=1.2;group.add(light);scene.add(group);
  artifacts.push({group,core,ring,position:group.position,found:false,index});
}
artifactSpots.forEach(addMarker);
const beacon=new THREE.Group();beacon.position.set(beaconSpot.x,heightAt(beaconSpot.x,beaconSpot.z),beaconSpot.z);
const beaconBase=new THREE.Mesh(new THREE.CylinderGeometry(1.05,1.35,.45,8),mats.metal);beaconBase.position.y=.22;beaconBase.castShadow=true;beacon.add(beaconBase);
const beaconPillar=new THREE.Mesh(new THREE.CylinderGeometry(.13,.25,3.8,6),mats.bark[0]);beaconPillar.position.y=2.2;beaconPillar.castShadow=true;beacon.add(beaconPillar);
const beaconOrb=new THREE.Mesh(new THREE.OctahedronGeometry(.62,0),mats.crystal);beaconOrb.position.y=4.2;beacon.add(beaconOrb);
const beaconLamp=new THREE.PointLight(0x8de2a1,2.4,18,2);beaconLamp.position.y=4;beacon.add(beaconLamp);scene.add(beacon);

const objective=document.createElement('div');objective.className='objective-card';objective.innerHTML='<span class="objective-kicker">RECOVERY ORDER</span><b id="objective-title">FIND THE TRANSMITTERS</b><span id="objective-detail">0 / 3 FIELD RELAYS</span><small>FOLLOW THE GREEN SIGNALS ON YOUR MAP</small>';$('#game-ui').append(objective);
const interactHint=document.createElement('div');interactHint.className='interact-hint';$('#game-ui').append(interactHint);
const endOverlay=document.createElement('div');endOverlay.className='end-overlay hidden';endOverlay.innerHTML='<div class="end-card"><span class="eyebrow" id="end-eyebrow">FIELD REPORT</span><h2 id="end-title">SIGNAL RECOVERED</h2><p id="end-copy"></p><button class="play-button" id="again-button"><span>PLAY AGAIN</span><span class="button-arrow">↗</span></button><button class="text-button" id="end-menu">RETURN TO MENU</button></div>';$('#game-ui').append(endOverlay);
let recovered=0,ended=false,interactionCooldown=0,attackFlash=0;
function updateObjective(){
  $('#objective-title').textContent=recovered===3?'RETURN TO THE BEACON':'FIND THE TRANSMITTERS';
  $('#objective-detail').textContent=recovered===3?'3 / 3 RELAYS · BEACON ACTIVE':`${recovered} / 3 FIELD RELAYS`;
  $('#status-text').textContent=recovered===3?'BEACON ACTIVE':noise>.65?'SOUND CARRIED':'UNOBSERVED';
}
function interact(){
  if(!started||paused||dead||ended||interactionCooldown>0)return;
  interactionCooldown=.35;
  const nearby=artifacts.find(a=>!a.found&&player.position.distanceTo(a.position)<3.1);
  if(nearby){nearby.found=true;nearby.group.visible=false;recovered++;updateObjective();emitNoise(.48);tell(`FIELD RELAY ${recovered} OF 3 RECOVERED.`,2200);return;}
  if(recovered===3&&player.position.distanceTo(beacon.position)<4){finishGame(true);return;}
  tell('NOTHING WITHIN REACH.',900);
}
function finishGame(won){
  if(ended)return;ended=true;paused=true;$('#end-eyebrow').textContent=won?'TRANSMISSION ESTABLISHED':'FIELD REPORT · LOST CONTACT';$('#end-title').textContent=won?'YOU MADE IT OUT':'THE CANOPY KEPT YOU';$('#end-copy').textContent=won?`All three relays are online. The signal got through. Field time: ${formatTime(elapsed)}.`:'Your signal has gone quiet. The forest is still listening.';endOverlay.classList.remove('hidden');if(document.pointerLockElement)document.exitPointerLock();
}
function formatTime(seconds){const m=Math.floor(seconds/60),s=Math.floor(seconds%60);return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;}

const keys=new Set();
function keyDown(e){
  const k=e.key.toLowerCase();keys.add(k);
  if([' ','arrowup','arrowdown','arrowleft','arrowright'].includes(k))e.preventDefault();
  if(k==='escape'&&started&&!ended){setPause(!paused);return;}
  if((k==='e'||k===' ')&&!e.repeat)interact();
  if(k==='c'&&!e.repeat)input.crouch=!input.crouch;
}
function keyUp(e){keys.delete(e.key.toLowerCase());}
window.addEventListener('keydown',keyDown);window.addEventListener('keyup',keyUp);window.addEventListener('blur',()=>{keys.clear();input.forward=input.right=0;input.sprint=false;});
function syncKeys(){
  if(touchActive)return;
  input.forward=(keys.has('w')||keys.has('arrowup')?1:0)-(keys.has('s')||keys.has('arrowdown')?1:0);
  input.right=(keys.has('d')||keys.has('arrowright')?1:0)-(keys.has('a')||keys.has('arrowleft')?1:0);
  input.sprint=keys.has('shift');
}
let touchActive=false;
worldEl.addEventListener('click',()=>{if(started&&!paused&&!ended&&innerWidth>720&&!document.pointerLockElement)worldEl.requestPointerLock?.();});
document.addEventListener('pointerlockchange',()=>{mouseLocked=document.pointerLockElement===worldEl;});
document.addEventListener('mousemove',e=>{if(mouseLocked&&started&&!paused){yaw-=e.movementX*.0022;pitch=clamp(pitch-e.movementY*.0018,-.52,.38);}});
worldEl.addEventListener('touchstart',e=>{if(innerWidth<=720&&started&&!paused){const t=e.changedTouches[0];lookTouch={x:t.clientX,y:t.clientY};}},{passive:true});
let lookTouch=null;
worldEl.addEventListener('touchmove',e=>{if(lookTouch&&innerWidth<=720&&started&&!paused){const t=e.changedTouches[0];yaw-=(t.clientX-lookTouch.x)*.006;pitch=clamp(pitch-(t.clientY-lookTouch.y)*.004,-.5,.35);lookTouch={x:t.clientX,y:t.clientY};}},{passive:true});
worldEl.addEventListener('touchend',()=>lookTouch=null,{passive:true});
const joystick=$('#joystick'),stick=joystick.querySelector('.stick');let joyPointer=null;
joystick.addEventListener('pointerdown',e=>{joyPointer=e.pointerId;touchActive=true;joystick.setPointerCapture(e.pointerId);updateJoystick(e);});
joystick.addEventListener('pointermove',e=>{if(e.pointerId===joyPointer)updateJoystick(e);});
function updateJoystick(e){const r=joystick.getBoundingClientRect(),dx=e.clientX-(r.left+r.width/2),dy=e.clientY-(r.top+r.height/2),max=r.width*.34,d=Math.hypot(dx,dy),scale=Math.min(1,max/(d||1));input.right=dx*scale/max;input.forward=-dy*scale/max;stick.style.transform=`translate(${dx*scale}px,${dy*scale}px)`;}
function releaseJoystick(){joyPointer=null;input.forward=input.right=0;stick.style.transform='';touchActive=false;}
joystick.addEventListener('pointerup',releaseJoystick);joystick.addEventListener('pointercancel',releaseJoystick);
$('#mobile-run').addEventListener('pointerdown',e=>{e.preventDefault();input.sprint=true;});['pointerup','pointercancel','pointerleave'].forEach(ev=>$('#mobile-run').addEventListener(ev,()=>input.sprint=false));
$('#mobile-crouch').addEventListener('click',()=>{input.crouch=!input.crouch;$('#mobile-crouch').classList.toggle('active',input.crouch);});
const mobileInteract=document.createElement('button');mobileInteract.id='mobile-interact';mobileInteract.textContent='USE';$('.mobile-actions').append(mobileInteract);mobileInteract.addEventListener('click',interact);

function updatePredators(dt){
  for(const p of predators){
    p.attackCooldown=Math.max(0,p.attackCooldown-dt);
    const distance=p.group.position.distanceTo(player.position),heardRecently=elapsed-p.lastHeard<15;
    if(p.state==='wander'&&distance<11){p.state='charge';p.target.copy(player.position);}
    if(p.state==='investigate'&&heardRecently&&distance<20)p.state='charge';
    if(p.state==='charge'&&distance>p.hear*1.35&&elapsed-p.lastHeard>10)p.state='investigate';
    if((p.state==='charge'||(p.state==='investigate'&&heardRecently))&&distance<2.1&&p.attackCooldown<=0){
      health=Math.max(0,health-(p.kind==='mossman'?17:13));p.attackCooldown=1.05;attackFlash=.28;emitNoise(.8);tell(`${p.name} STRUCK YOU. BREAK LINE OF SIGHT.`,1700);
      if(health<=0){finishGame(false);break;}
    }
    let target=p.target;
    if(p.state==='charge'){target=player.position;p.target.copy(player.position);}
    else if(p.state==='wander'&&p.group.position.distanceTo(p.target)<2){p.target.set((rand()-.5)*155,0,(rand()-.5)*155);p.target.y=heightAt(p.target.x,p.target.z);}
    else if(p.state==='investigate'&&!heardRecently){p.state='wander';}
    const dx=target.x-p.group.position.x,dz=target.z-p.group.position.z,d=Math.hypot(dx,dz);
    if(d>.15){const speed=p.speed*(p.state==='charge'?1:.45),step=Math.min(d,speed*dt);p.group.position.x+=dx/d*step;p.group.position.z+=dz/d*step;p.group.rotation.y=Math.atan2(dx,dz);p.group.position.y=heightAt(p.group.position.x,p.group.position.z);p.group.userData.phase+=dt*(p.state==='charge'?10:4);p.group.userData.rig.position.y=Math.sin(p.group.userData.phase)*.08;p.group.userData.limbs.forEach((limb,i)=>limb.rotation.x=Math.sin(p.group.userData.phase+(i%2)*Math.PI)*.42);}
  }
}
function updateBots(dt){
  bots.forEach((b,i)=>{
    const g=b.group;
    if(g.position.distanceTo(b.goal)<2||rand()<dt*.015)b.goal.set((rand()-.5)*150,0,(rand()-.5)*150);
    const dx=b.goal.x-g.position.x,dz=b.goal.z-g.position.z,d=Math.hypot(dx,dz);
    if(d>.4){g.position.x+=dx/d*dt*2.35;g.position.z+=dz/d*dt*2.35;g.rotation.y=Math.atan2(dx,dz);g.position.y=heightAt(g.position.x,g.position.z);g.userData.phase+=dt*5;g.userData.rig.position.y=Math.sin(g.userData.phase)*.1;g.userData.limbs.forEach((limb,j)=>limb.rotation.x=Math.sin(g.userData.phase+(j%2)*Math.PI)*.35);}
    const threat=predators.find(p=>p.group.position.distanceTo(g.position)<18);if(threat&&rand()<dt*.35)emitNoise(.42,g.position);
  });
}
function updateWorldObjects(dt){
  artifacts.forEach(a=>{if(!a.found){a.core.rotation.y+=dt*.65;a.core.position.y=.92+Math.sin(elapsed*2+a.index)*.12;a.ring.rotation.z+=dt*.3;}});
  beaconOrb.rotation.y+=dt*.8;beaconOrb.position.y=4.2+Math.sin(elapsed*1.8)*.16;
  interactionCooldown=Math.max(0,interactionCooldown-dt);attackFlash=Math.max(0,attackFlash-dt);
  let nearest=null,nearestD=999;
  artifacts.filter(a=>!a.found).forEach(a=>{const d=player.position.distanceTo(a.position);if(d<nearestD){nearest=a;nearestD=d;}});
  if(recovered===3){nearest=beacon;nearestD=player.position.distanceTo(beacon.position);}
  if(nearest&&nearestD<4.2){interactHint.textContent=nearestD<3.1?'[ E ]  RECOVER FIELD RELAY':'FIELD RELAY NEARBY';interactHint.classList.add('visible');if(innerWidth<=720)mobileInteract.classList.add('visible');}
  else{interactHint.classList.remove('visible');mobileInteract.classList.remove('visible');}
  if(nearestD<3.1&&input.interact){input.interact=false;interact();}
}
function updateHUD(dt){
  const h=Math.round(health),s=Math.round(stamina),n=Math.round(noise*100);
  $('#health-fill').style.width=`${h}%`;$('#health-value').textContent=String(h).padStart(3,'0');
  $('#stamina-fill').style.width=`${s}%`;$('#stamina-value').textContent=String(s).padStart(3,'0');
  $('#noise-fill').style.width=`${n}%`;$('#noise-value').textContent=n>70?'HIGH':n>35?'MED':'LOW';
  $('#degrees').textContent=`${String(Math.round(((yaw*180/Math.PI%360)+360)%360)).padStart(3,'0')}°`;
  const bearing=((yaw*180/Math.PI%360)+360)%360;$('#bearing').textContent=['N','NE','E','SE','S','SW','W','NW'][Math.round(bearing/45)%8];
  $('#map-coord').textContent=`${Math.round(player.position.x+100)} / ${Math.round(player.position.z+100)}`;
  $('#time-readout').textContent=`${formatClock(elapsed)}  ·  ${noise>.7?'DISTURBED':'CLEARING'}`;
  const threat=predators.map(p=>({p,d:p.group.position.distanceTo(player.position)})).sort((a,b)=>a.d-b.d)[0];
  const threatEl=$('#threat');if(threat&&threat.d<62){threatEl.classList.remove('hidden');$('#threat-name').textContent=threat.p.state==='charge'?`${threat.p.name} IS CLOSING`:'SOMETHING HEARD YOU';$('#threat-distance').textContent=`${threat.p.state==='charge'?'CLOSING':'TRACKING'} — ${Math.round(threat.d)} M`;threatEl.style.setProperty('--danger',`${Math.max(0,1-threat.d/62)}`);}else threatEl.classList.add('hidden');
  $('#game-ui').classList.toggle('under-attack',attackFlash>0);
  drawMap();
}
function formatClock(seconds){const total=(6*60+42+Math.floor(seconds/60))%(12*60),h=Math.floor(total/60),m=total%60;return `${String(h||12).padStart(2,'0')}:${String(m).padStart(2,'0')} AM`;}
const mapCanvas=$('#minimap'),mapCtx=mapCanvas.getContext('2d');
function drawMap(){
  const c=mapCtx,w=mapCanvas.width,h=mapCanvas.height;c.clearRect(0,0,w,h);c.fillStyle='#18251d';c.fillRect(0,0,w,h);
  c.strokeStyle='rgba(190,205,170,.10)';c.lineWidth=1;for(let i=20;i<w;i+=20){c.beginPath();c.moveTo(i,0);c.lineTo(i,h);c.stroke();c.beginPath();c.moveTo(0,i);c.lineTo(w,i);c.stroke();}
  const px=(x)=>w/2+x*.52,py=(z)=>h/2+z*.52;
  c.fillStyle='#527b53';artifacts.forEach(a=>{if(!a.found){c.beginPath();c.arc(px(a.position.x),py(a.position.z),3,0,Math.PI*2);c.fill();}});
  c.fillStyle='#d57a4a';predators.forEach(p=>{const x=px(p.group.position.x),y=py(p.group.position.z);if(x>0&&x<w&&y>0&&y<h){c.beginPath();c.arc(x,y,2.4,0,Math.PI*2);c.fill();}});
  c.fillStyle='#d9c292';c.beginPath();c.arc(px(beacon.position.x),py(beacon.position.z),2.5,0,Math.PI*2);c.fill();
  c.save();c.translate(px(player.position.x),py(player.position.z));c.rotate(-yaw);c.fillStyle='#eff0dc';c.beginPath();c.moveTo(0,-5);c.lineTo(3.2,3);c.lineTo(0,1.8);c.lineTo(-3.2,3);c.closePath();c.fill();c.restore();
}

let audioContext=null,ambienceGain=null,soundOn=false;
function toggleSound(){
  soundOn=!soundOn;$('#sound-button').classList.toggle('active',soundOn);
  if(!audioContext){const Ctx=window.AudioContext||window.webkitAudioContext;if(Ctx){audioContext=new Ctx();const osc=audioContext.createOscillator(),gain=audioContext.createGain(),filter=audioContext.createBiquadFilter();osc.type='sine';osc.frequency.value=56;filter.type='lowpass';filter.frequency.value=180;gain.gain.value=0;osc.connect(filter).connect(gain).connect(audioContext.destination);osc.start();ambienceGain=gain;}}
  if(audioContext){audioContext.resume();ambienceGain.gain.setTargetAtTime(soundOn?.035:0,audioContext.currentTime,.18);}
  if(soundOn)tell('AMBIENT MONITORING ON.',1200);
}
$('#play-button').addEventListener('click',gameStart);$('#resume-button').addEventListener('click',()=>setPause(false));$('#leave-button').addEventListener('click',leaveGame);$('#pause-leave').addEventListener('click',leaveGame);
$('#sound-button').addEventListener('click',toggleSound);$('#settings-button').addEventListener('click',()=>$('#settings-panel').classList.toggle('hidden'));$('#close-settings').addEventListener('click',()=>$('#settings-panel').classList.add('hidden'));
$('#fov-slider').addEventListener('input',e=>$('#fov-value').textContent=`${e.target.value}°`);
$('#pixel-slider').addEventListener('input',e=>{const value=Number(e.target.value);$('#pixel-value').textContent=value>.85?'ULTRA':value>.68?'HIGH':'LOW';renderer.setPixelRatio(Math.min(devicePixelRatio,1.4)*value);renderer.setSize(innerWidth,innerHeight,false);});
document.querySelectorAll('.mode-option').forEach(button=>button.addEventListener('click',()=>setMode(button.dataset.mode)));
$('#again-button').addEventListener('click',()=>{resetGame();gameStart();});$('#end-menu').addEventListener('click',leaveGame);
function resetGame(){
  health=100;stamina=100;noise=0;elapsed=0;recovered=0;ended=false;dead=false;paused=false;velocity.set(0,0,0);player.position.set(0,heightAt(0,0),0);player.userData.rig.position.set(0,0,0);yaw=0;pitch=-.12;
  artifacts.forEach(a=>{a.found=false;a.group.visible=true;});predators.forEach((p,i)=>{p.group.position.set(i?-42:39,heightAt(i?-42:39,i?-31:28),i?-31:28);p.state='wander';p.target.set(i?-33:24,0,i?-28:20);p.lastHeard=0;p.attackCooldown=0;});$('#end-overlay');endOverlay.classList.add('hidden');$('#pause-overlay').classList.add('hidden');updateObjective();
}
function resize(){camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight,false);}
window.addEventListener('resize',resize);

let previous=performance.now();
function frame(now){
  requestAnimationFrame(frame);const dt=Math.min(.05,(now-previous)/1000||0);previous=now;
  syncKeys();
  if(started&&!paused&&!ended){elapsed+=dt;updatePlayer(dt);updatePredators(dt);updateBots(dt);updateWorldObjects(dt);updateObjective();updateHUD(dt);}
  else if(!started){updateWorldObjects(dt);}
  if(!started||(!paused&&!ended))updateCamera(dt);
  renderer.render(scene,camera);
}
updateObjective();updateCamera(1);requestAnimationFrame(frame);

