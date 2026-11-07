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
function leaveGame(){started=false;paused=false;$('#game-ui').classList.add('hidden');$('#pause-overlay').classList.add('hidden');$('#title-screen').classList.remove('leaving');if(document.pointerLockElement)document.exitPointerLock();}
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

