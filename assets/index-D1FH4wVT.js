(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Va="169",zl=0,bo=1,Hl=2,Fc=1,Oc=2,mn=3,Un=0,Pe=1,gn=2,Ln=0,Ai=1,wo=2,Ro=3,Co=4,Gl=5,$n=100,Vl=101,kl=102,Wl=103,Xl=104,ql=200,Yl=201,Kl=202,$l=203,js=204,Qs=205,Jl=206,Zl=207,jl=208,Ql=209,th=210,eh=211,nh=212,ih=213,rh=214,ta=0,ea=1,na=2,Ci=3,ia=4,ra=5,sa=6,aa=7,Bc=0,sh=1,ah=2,Dn=0,oh=1,ch=2,lh=3,zc=4,hh=5,uh=6,dh=7,Hc=300,Pi=301,Li=302,oa=303,ca=304,ns=306,la=1e3,jn=1001,ha=1002,Re=1003,fh=1004,fr=1005,Je=1006,ms=1007,Qn=1008,Mn=1009,Gc=1010,Vc=1011,er=1012,ka=1013,ti=1014,sn=1015,rr=1016,Wa=1017,Xa=1018,Di=1020,kc=35902,Wc=1021,Xc=1022,je=1023,qc=1024,Yc=1025,bi=1026,Ii=1027,qa=1028,Ya=1029,Kc=1030,Ka=1031,$a=1033,zr=33776,Hr=33777,Gr=33778,Vr=33779,ua=35840,da=35841,fa=35842,pa=35843,ma=36196,ga=37492,_a=37496,va=37808,xa=37809,Ma=37810,Sa=37811,ya=37812,Ea=37813,Ta=37814,Aa=37815,ba=37816,wa=37817,Ra=37818,Ca=37819,Pa=37820,La=37821,kr=36492,Da=36494,Ia=36495,$c=36283,Ua=36284,Na=36285,Fa=36286,ph=3200,mh=3201,Jc=0,gh=1,Pn="",$e="srgb",Bn="srgb-linear",Ja="display-p3",is="display-p3-linear",qr="linear",se="srgb",Yr="rec709",Kr="p3",oi=7680,Po=519,_h=512,vh=513,xh=514,Zc=515,Mh=516,Sh=517,yh=518,Eh=519,Lo=35044,Do="300 es",_n=2e3,$r=2001;class Oi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gs=Math.PI/180,Oa=180/Math.PI;function sr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Me[i&255]+Me[i>>8&255]+Me[i>>16&255]+Me[i>>24&255]+"-"+Me[t&255]+Me[t>>8&255]+"-"+Me[t>>16&15|64]+Me[t>>24&255]+"-"+Me[e&63|128]+Me[e>>8&255]+"-"+Me[e>>16&255]+Me[e>>24&255]+Me[n&255]+Me[n>>8&255]+Me[n>>16&255]+Me[n>>24&255]).toLowerCase()}function xe(i,t,e){return Math.max(t,Math.min(e,i))}function Th(i,t){return(i%t+t)%t}function _s(i,t,e){return(1-e)*i+e*t}function Hi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function we(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class dt{constructor(t=0,e=0){dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class It{constructor(t,e,n,r,s,a,o,c,l){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l)}set(t,e,n,r,s,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],p=n[5],g=n[8],x=r[0],d=r[3],m=r[6],E=r[1],S=r[4],T=r[7],U=r[2],w=r[5],b=r[8];return s[0]=a*x+o*E+c*U,s[3]=a*d+o*S+c*w,s[6]=a*m+o*T+c*b,s[1]=l*x+h*E+f*U,s[4]=l*d+h*S+f*w,s[7]=l*m+h*T+f*b,s[2]=u*x+p*E+g*U,s[5]=u*d+p*S+g*w,s[8]=u*m+p*T+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*s*h+n*o*c+r*s*l-r*a*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=h*a-o*l,u=o*c-h*s,p=l*s-a*c,g=e*f+n*u+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=f*x,t[1]=(r*l-h*n)*x,t[2]=(o*n-r*a)*x,t[3]=u*x,t[4]=(h*e-r*c)*x,t[5]=(r*s-o*e)*x,t[6]=p*x,t[7]=(n*c-l*e)*x,t[8]=(a*e-n*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(vs.makeScale(t,e)),this}rotate(t){return this.premultiply(vs.makeRotation(-t)),this}translate(t,e){return this.premultiply(vs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const vs=new It;function jc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Jr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ah(){const i=Jr("canvas");return i.style.display="block",i}const Io={};function Wr(i){i in Io||(Io[i]=!0,console.warn(i))}function bh(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function wh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Rh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Uo=new It().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),No=new It().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Gi={[Bn]:{transfer:qr,primaries:Yr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[$e]:{transfer:se,primaries:Yr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[is]:{transfer:qr,primaries:Kr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(No),fromReference:i=>i.applyMatrix3(Uo)},[Ja]:{transfer:se,primaries:Kr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(No),fromReference:i=>i.applyMatrix3(Uo).convertLinearToSRGB()}},Ch=new Set([Bn,is]),Yt={enabled:!0,_workingColorSpace:Bn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ch.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Gi[t].toReference,r=Gi[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Gi[i].primaries},getTransfer:function(i){return i===Pn?qr:Gi[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Gi[t].luminanceCoefficients)}};function wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ci;class Ph{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ci===void 0&&(ci=Jr("canvas")),ci.width=t.width,ci.height=t.height;const n=ci.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ci}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Jr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=wi(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(wi(e[n]/255)*255):e[n]=wi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Lh=0;class Qc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=sr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ms(r[a].image)):s.push(Ms(r[a]))}else s=Ms(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ms(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ph.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dh=0;class Te extends Oi{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,n=jn,r=jn,s=Je,a=Qn,o=je,c=Mn,l=Te.DEFAULT_ANISOTROPY,h=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=sr(),this.name="",this.source=new Qc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case la:t.x=t.x-Math.floor(t.x);break;case jn:t.x=t.x<0?0:1;break;case ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case la:t.y=t.y-Math.floor(t.y);break;case jn:t.y=t.y<0?0:1;break;case ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=Hc;Te.DEFAULT_ANISOTROPY=1;class Qt{constructor(t=0,e=0,n=0,r=1){Qt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],p=c[5],g=c[9],x=c[2],d=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(g-d)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(g+d)<.1&&Math.abs(l+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,T=(p+1)/2,U=(m+1)/2,w=(h+u)/4,b=(f+x)/4,L=(g+d)/4;return S>T&&S>U?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=w/n,s=b/n):T>U?T<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),n=w/r,s=L/r):U<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),n=b/s,r=L/s),this.set(n,r,s,e),this}let E=Math.sqrt((d-g)*(d-g)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(d-g)/E,this.y=(f-x)/E,this.z=(u-h)/E,this.w=Math.acos((l+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ih extends Oi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Qt(0,0,t,e),this.scissorTest=!1,this.viewport=new Qt(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Te(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Qc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends Ih{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class tl extends Te{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Re,this.minFilter=Re,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uh extends Te{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Re,this.minFilter=Re,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ar{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let c=n[r+0],l=n[r+1],h=n[r+2],f=n[r+3];const u=s[a+0],p=s[a+1],g=s[a+2],x=s[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(f!==x||c!==u||l!==p||h!==g){let d=1-o;const m=c*u+l*p+h*g+f*x,E=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const U=Math.sqrt(S),w=Math.atan2(U,m*E);d=Math.sin(d*w)/U,o=Math.sin(o*w)/U}const T=o*E;if(c=c*d+u*T,l=l*d+p*T,h=h*d+g*T,f=f*d+x*T,d===1-o){const U=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=U,l*=U,h*=U,f*=U}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],h=n[r+3],f=s[a],u=s[a+1],p=s[a+2],g=s[a+3];return t[e]=o*g+h*f+c*p-l*u,t[e+1]=c*g+h*u+l*f-o*p,t[e+2]=l*g+h*p+o*u-c*f,t[e+3]=h*g-o*f-c*u-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(r/2),f=o(s/2),u=c(n/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=u*h*f+l*p*g,this._y=l*p*f-u*h*g,this._z=l*h*g+u*p*f,this._w=l*h*f-u*p*g;break;case"YXZ":this._x=u*h*f+l*p*g,this._y=l*p*f-u*h*g,this._z=l*h*g-u*p*f,this._w=l*h*f+u*p*g;break;case"ZXY":this._x=u*h*f-l*p*g,this._y=l*p*f+u*h*g,this._z=l*h*g+u*p*f,this._w=l*h*f-u*p*g;break;case"ZYX":this._x=u*h*f-l*p*g,this._y=l*p*f+u*h*g,this._z=l*h*g-u*p*f,this._w=l*h*f+u*p*g;break;case"YZX":this._x=u*h*f+l*p*g,this._y=l*p*f+u*h*g,this._z=l*h*g-u*p*f,this._w=l*h*f-u*p*g;break;case"XZY":this._x=u*h*f-l*p*g,this._y=l*p*f-u*h*g,this._z=l*h*g+u*p*f,this._w=l*h*f+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(h-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-r*o,this._w=a*h-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),f=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=a*f+this._w*u,this._x=n*f+this._x*u,this._y=r*f+this._y*u,this._z=s*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*n),h=2*(o*e-s*r),f=2*(s*n-a*e);return this.x=e+c*l+a*f-o*h,this.y=n+c*h+o*l-s*f,this.z=r+c*f+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ss.copy(this).projectOnVector(t),this.sub(Ss)}reflect(t){return this.sub(Ss.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ss=new R,Fo=new ar;class ri{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,qe):qe.fromBufferAttribute(s,a),qe.applyMatrix4(t.matrixWorld),this.expandByPoint(qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pr.copy(n.boundingBox)),pr.applyMatrix4(t.matrixWorld),this.union(pr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qe),qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vi),mr.subVectors(this.max,Vi),li.subVectors(t.a,Vi),hi.subVectors(t.b,Vi),ui.subVectors(t.c,Vi),En.subVectors(hi,li),Tn.subVectors(ui,hi),Hn.subVectors(li,ui);let e=[0,-En.z,En.y,0,-Tn.z,Tn.y,0,-Hn.z,Hn.y,En.z,0,-En.x,Tn.z,0,-Tn.x,Hn.z,0,-Hn.x,-En.y,En.x,0,-Tn.y,Tn.x,0,-Hn.y,Hn.x,0];return!ys(e,li,hi,ui,mr)||(e=[1,0,0,0,1,0,0,0,1],!ys(e,li,hi,ui,mr))?!1:(gr.crossVectors(En,Tn),e=[gr.x,gr.y,gr.z],ys(e,li,hi,ui,mr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ln=[new R,new R,new R,new R,new R,new R,new R,new R],qe=new R,pr=new ri,li=new R,hi=new R,ui=new R,En=new R,Tn=new R,Hn=new R,Vi=new R,mr=new R,gr=new R,Gn=new R;function ys(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Gn.fromArray(i,s);const o=r.x*Math.abs(Gn.x)+r.y*Math.abs(Gn.y)+r.z*Math.abs(Gn.z),c=t.dot(Gn),l=e.dot(Gn),h=n.dot(Gn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Nh=new ri,ki=new R,Es=new R;class or{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Nh.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ki.subVectors(t,this.center);const e=ki.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(ki,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Es.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ki.copy(t.center).add(Es)),this.expandByPoint(ki.copy(t.center).sub(Es))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hn=new R,Ts=new R,_r=new R,An=new R,As=new R,vr=new R,bs=new R;class Fh{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hn.copy(this.origin).addScaledVector(this.direction,e),hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Ts.copy(t).add(e).multiplyScalar(.5),_r.copy(e).sub(t).normalize(),An.copy(this.origin).sub(Ts);const s=t.distanceTo(e)*.5,a=-this.direction.dot(_r),o=An.dot(this.direction),c=-An.dot(_r),l=An.lengthSq(),h=Math.abs(1-a*a);let f,u,p,g;if(h>0)if(f=a*c-o,u=a*o-c,g=s*h,f>=0)if(u>=-g)if(u<=g){const x=1/h;f*=x,u*=x,p=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=s,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*c)+l;else u=-s,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-s,-c),s),p=u*(u+2*c)+l):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+u*(u+2*c)+l);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ts).addScaledVector(_r,u),p}intersectSphere(t,e){hn.subVectors(t.center,this.origin);const n=hn.dot(this.direction),r=hn.dot(hn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,r=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,r=(t.min.x-u.x)*l),h>=0?(s=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,hn)!==null}intersectTriangle(t,e,n,r,s){As.subVectors(e,t),vr.subVectors(n,t),bs.crossVectors(As,vr);let a=this.direction.dot(bs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;An.subVectors(this.origin,t);const c=o*this.direction.dot(vr.crossVectors(An,vr));if(c<0)return null;const l=o*this.direction.dot(As.cross(An));if(l<0||c+l>a)return null;const h=-o*An.dot(bs);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(t,e,n,r,s,a,o,c,l,h,f,u,p,g,x,d){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l,h,f,u,p,g,x,d)}set(t,e,n,r,s,a,o,c,l,h,f,u,p,g,x,d){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=f,m[14]=u,m[3]=p,m[7]=g,m[11]=x,m[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/di.setFromMatrixColumn(t,0).length(),s=1/di.setFromMatrixColumn(t,1).length(),a=1/di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const u=a*h,p=a*f,g=o*h,x=o*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=p+g*l,e[5]=u-x*l,e[9]=-o*c,e[2]=x-u*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){const u=c*h,p=c*f,g=l*h,x=l*f;e[0]=u+x*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=x+u*o,e[10]=a*c}else if(t.order==="ZXY"){const u=c*h,p=c*f,g=l*h,x=l*f;e[0]=u-x*o,e[4]=-a*f,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const u=a*h,p=a*f,g=o*h,x=o*f;e[0]=c*h,e[4]=g*l-p,e[8]=u*l+x,e[1]=c*f,e[5]=x*l+u,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const u=a*c,p=a*l,g=o*c,x=o*l;e[0]=c*h,e[4]=x-u*f,e[8]=g*f+p,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*f+g,e[10]=u-x*f}else if(t.order==="XZY"){const u=a*c,p=a*l,g=o*c,x=o*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+x,e[5]=a*h,e[9]=p*f-g,e[2]=g*f-p,e[6]=o*h,e[10]=x*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Oh,t,Bh)}lookAt(t,e,n){const r=this.elements;return Ue.subVectors(t,e),Ue.lengthSq()===0&&(Ue.z=1),Ue.normalize(),bn.crossVectors(n,Ue),bn.lengthSq()===0&&(Math.abs(n.z)===1?Ue.x+=1e-4:Ue.z+=1e-4,Ue.normalize(),bn.crossVectors(n,Ue)),bn.normalize(),xr.crossVectors(Ue,bn),r[0]=bn.x,r[4]=xr.x,r[8]=Ue.x,r[1]=bn.y,r[5]=xr.y,r[9]=Ue.y,r[2]=bn.z,r[6]=xr.z,r[10]=Ue.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],p=n[13],g=n[2],x=n[6],d=n[10],m=n[14],E=n[3],S=n[7],T=n[11],U=n[15],w=r[0],b=r[4],L=r[8],W=r[12],_=r[1],y=r[5],B=r[9],z=r[13],k=r[2],$=r[6],H=r[10],J=r[14],V=r[3],ct=r[7],lt=r[11],vt=r[15];return s[0]=a*w+o*_+c*k+l*V,s[4]=a*b+o*y+c*$+l*ct,s[8]=a*L+o*B+c*H+l*lt,s[12]=a*W+o*z+c*J+l*vt,s[1]=h*w+f*_+u*k+p*V,s[5]=h*b+f*y+u*$+p*ct,s[9]=h*L+f*B+u*H+p*lt,s[13]=h*W+f*z+u*J+p*vt,s[2]=g*w+x*_+d*k+m*V,s[6]=g*b+x*y+d*$+m*ct,s[10]=g*L+x*B+d*H+m*lt,s[14]=g*W+x*z+d*J+m*vt,s[3]=E*w+S*_+T*k+U*V,s[7]=E*b+S*y+T*$+U*ct,s[11]=E*L+S*B+T*H+U*lt,s[15]=E*W+S*z+T*J+U*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],p=t[14],g=t[3],x=t[7],d=t[11],m=t[15];return g*(+s*c*f-r*l*f-s*o*u+n*l*u+r*o*p-n*c*p)+x*(+e*c*p-e*l*u+s*a*u-r*a*p+r*l*h-s*c*h)+d*(+e*l*f-e*o*p-s*a*f+n*a*p+s*o*h-n*l*h)+m*(-r*o*h-e*c*f+e*o*u+r*a*f-n*a*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],p=t[11],g=t[12],x=t[13],d=t[14],m=t[15],E=f*d*l-x*u*l+x*c*p-o*d*p-f*c*m+o*u*m,S=g*u*l-h*d*l-g*c*p+a*d*p+h*c*m-a*u*m,T=h*x*l-g*f*l+g*o*p-a*x*p-h*o*m+a*f*m,U=g*f*c-h*x*c-g*o*u+a*x*u+h*o*d-a*f*d,w=e*E+n*S+r*T+s*U;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return t[0]=E*b,t[1]=(x*u*s-f*d*s-x*r*p+n*d*p+f*r*m-n*u*m)*b,t[2]=(o*d*s-x*c*s+x*r*l-n*d*l-o*r*m+n*c*m)*b,t[3]=(f*c*s-o*u*s-f*r*l+n*u*l+o*r*p-n*c*p)*b,t[4]=S*b,t[5]=(h*d*s-g*u*s+g*r*p-e*d*p-h*r*m+e*u*m)*b,t[6]=(g*c*s-a*d*s-g*r*l+e*d*l+a*r*m-e*c*m)*b,t[7]=(a*u*s-h*c*s+h*r*l-e*u*l-a*r*p+e*c*p)*b,t[8]=T*b,t[9]=(g*f*s-h*x*s-g*n*p+e*x*p+h*n*m-e*f*m)*b,t[10]=(a*x*s-g*o*s+g*n*l-e*x*l-a*n*m+e*o*m)*b,t[11]=(h*o*s-a*f*s-h*n*l+e*f*l+a*n*p-e*o*p)*b,t[12]=U*b,t[13]=(h*x*r-g*f*r+g*n*u-e*x*u-h*n*d+e*f*d)*b,t[14]=(g*o*r-a*x*r-g*n*c+e*x*c+a*n*d-e*o*d)*b,t[15]=(a*f*r-h*o*r+h*n*c-e*f*c-a*n*u+e*o*u)*b,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+n,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,h=a+a,f=o+o,u=s*l,p=s*h,g=s*f,x=a*h,d=a*f,m=o*f,E=c*l,S=c*h,T=c*f,U=n.x,w=n.y,b=n.z;return r[0]=(1-(x+m))*U,r[1]=(p+T)*U,r[2]=(g-S)*U,r[3]=0,r[4]=(p-T)*w,r[5]=(1-(u+m))*w,r[6]=(d+E)*w,r[7]=0,r[8]=(g+S)*b,r[9]=(d-E)*b,r[10]=(1-(u+x))*b,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=di.set(r[0],r[1],r[2]).length();const a=di.set(r[4],r[5],r[6]).length(),o=di.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Ye.copy(this);const l=1/s,h=1/a,f=1/o;return Ye.elements[0]*=l,Ye.elements[1]*=l,Ye.elements[2]*=l,Ye.elements[4]*=h,Ye.elements[5]*=h,Ye.elements[6]*=h,Ye.elements[8]*=f,Ye.elements[9]*=f,Ye.elements[10]*=f,e.setFromRotationMatrix(Ye),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=_n){const c=this.elements,l=2*s/(e-t),h=2*s/(n-r),f=(e+t)/(e-t),u=(n+r)/(n-r);let p,g;if(o===_n)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===$r)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=_n){const c=this.elements,l=1/(e-t),h=1/(n-r),f=1/(a-s),u=(e+t)*l,p=(n+r)*h;let g,x;if(o===_n)g=(a+s)*f,x=-2*f;else if(o===$r)g=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const di=new R,Ye=new ee,Oh=new R(0,0,0),Bh=new R(1,1,1),bn=new R,xr=new R,Ue=new R,Oo=new ee,Bo=new ar;class an{constructor(t=0,e=0,n=0,r=an.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],f=r[2],u=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Oo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Oo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bo.setFromEuler(this),this.setFromQuaternion(Bo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class el{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zh=0;const zo=new R,fi=new ar,un=new ee,Mr=new R,Wi=new R,Hh=new R,Gh=new ar,Ho=new R(1,0,0),Go=new R(0,1,0),Vo=new R(0,0,1),ko={type:"added"},Vh={type:"removed"},pi={type:"childadded",child:null},ws={type:"childremoved",child:null};class _e extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();const t=new R,e=new an,n=new ar,r=new R(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ee},normalMatrix:{value:new It}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new el,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.multiply(fi),this}rotateOnWorldAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.premultiply(fi),this}rotateX(t){return this.rotateOnAxis(Ho,t)}rotateY(t){return this.rotateOnAxis(Go,t)}rotateZ(t){return this.rotateOnAxis(Vo,t)}translateOnAxis(t,e){return zo.copy(t).applyQuaternion(this.quaternion),this.position.add(zo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ho,t)}translateY(t){return this.translateOnAxis(Go,t)}translateZ(t){return this.translateOnAxis(Vo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Mr.copy(t):Mr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(Wi,Mr,this.up):un.lookAt(Mr,Wi,this.up),this.quaternion.setFromRotationMatrix(un),r&&(un.extractRotation(r.matrixWorld),fi.setFromRotationMatrix(un),this.quaternion.premultiply(fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ko),pi.child=t,this.dispatchEvent(pi),pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vh),ws.child=t,this.dispatchEvent(ws),ws.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),un.multiply(t.parent.matrixWorld)),t.applyMatrix4(un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ko),pi.child=t,this.dispatchEvent(pi),pi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,t,Hh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,Gh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}_e.DEFAULT_UP=new R(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ke=new R,dn=new R,Rs=new R,fn=new R,mi=new R,gi=new R,Wo=new R,Cs=new R,Ps=new R,Ls=new R,Ds=new Qt,Is=new Qt,Us=new Qt;class Ze{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Ke.subVectors(t,e),r.cross(Ke);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Ke.subVectors(r,e),dn.subVectors(n,e),Rs.subVectors(t,e);const a=Ke.dot(Ke),o=Ke.dot(dn),c=Ke.dot(Rs),l=dn.dot(dn),h=dn.dot(Rs),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const u=1/f,p=(l*c-o*h)*u,g=(a*h-o*c)*u;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(t,e,n,r,s,a,o,c){return this.getBarycoord(t,e,n,r,fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,fn.x),c.addScaledVector(a,fn.y),c.addScaledVector(o,fn.z),c)}static getInterpolatedAttribute(t,e,n,r,s,a){return Ds.setScalar(0),Is.setScalar(0),Us.setScalar(0),Ds.fromBufferAttribute(t,e),Is.fromBufferAttribute(t,n),Us.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Ds,s.x),a.addScaledVector(Is,s.y),a.addScaledVector(Us,s.z),a}static isFrontFacing(t,e,n,r){return Ke.subVectors(n,e),dn.subVectors(t,e),Ke.cross(dn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),Ke.cross(dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ze.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Ze.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;mi.subVectors(r,n),gi.subVectors(s,n),Cs.subVectors(t,n);const c=mi.dot(Cs),l=gi.dot(Cs);if(c<=0&&l<=0)return e.copy(n);Ps.subVectors(t,r);const h=mi.dot(Ps),f=gi.dot(Ps);if(h>=0&&f<=h)return e.copy(r);const u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(mi,a);Ls.subVectors(t,s);const p=mi.dot(Ls),g=gi.dot(Ls);if(g>=0&&p<=g)return e.copy(s);const x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(gi,o);const d=h*g-p*f;if(d<=0&&f-h>=0&&p-g>=0)return Wo.subVectors(s,r),o=(f-h)/(f-h+(p-g)),e.copy(r).addScaledVector(Wo,o);const m=1/(d+x+u);return a=x*m,o=u*m,e.copy(n).addScaledVector(mi,a).addScaledVector(gi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const nl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function Ns(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Yt.workingColorSpace){if(t=Th(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Ns(a,s,t+1/3),this.g=Ns(a,s,t),this.b=Ns(a,s,t-1/3)}return Yt.toWorkingColorSpace(this,r),this}setStyle(t,e=$e){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){const n=nl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}copyLinearToSRGB(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return Yt.fromWorkingColorSpace(Se.copy(this),t),Math.round(xe(Se.r*255,0,255))*65536+Math.round(xe(Se.g*255,0,255))*256+Math.round(xe(Se.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Se.copy(this),e);const n=Se.r,r=Se.g,s=Se.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Se.copy(this),e),t.r=Se.r,t.g=Se.g,t.b=Se.b,t}getStyle(t=$e){Yt.fromWorkingColorSpace(Se.copy(this),t);const e=Se.r,n=Se.g,r=Se.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(wn),this.setHSL(wn.h+t,wn.s+e,wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(wn),t.getHSL(Sr);const n=_s(wn.h,Sr.h,e),r=_s(wn.s,Sr.s,e),s=_s(wn.l,Sr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Se=new Ut;Ut.NAMES=nl;let kh=0;class cr extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=sr(),this.name="",this.type="Material",this.blending=Ai,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=js,this.blendDst=Qs,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Po,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oi,this.stencilZFail=oi,this.stencilZPass=oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==js&&(n.blendSrc=this.blendSrc),this.blendDst!==Qs&&(n.blendDst=this.blendDst),this.blendEquation!==$n&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ci&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Po&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class il extends cr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new R,yr=new dt;class tn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Lo,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)yr.fromBufferAttribute(this,e),yr.applyMatrix3(t),this.setXY(e,yr.x,yr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Hi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hi(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hi(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hi(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),r=we(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),r=we(r,this.array),s=we(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Lo&&(t.usage=this.usage),t}}class rl extends tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class sl extends tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ce extends tn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Wh=0;const Ve=new ee,Fs=new _e,_i=new R,Ne=new ri,Xi=new ri,ge=new R;class He extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=sr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jc(t)?sl:rl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new It().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ve.makeRotationFromQuaternion(t),this.applyMatrix4(Ve),this}rotateX(t){return Ve.makeRotationX(t),this.applyMatrix4(Ve),this}rotateY(t){return Ve.makeRotationY(t),this.applyMatrix4(Ve),this}rotateZ(t){return Ve.makeRotationZ(t),this.applyMatrix4(Ve),this}translate(t,e,n){return Ve.makeTranslation(t,e,n),this.applyMatrix4(Ve),this}scale(t,e,n){return Ve.makeScale(t,e,n),this.applyMatrix4(Ve),this}lookAt(t){return Fs.lookAt(t),Fs.updateMatrix(),this.applyMatrix4(Fs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ce(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Ne.setFromBufferAttribute(s),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,Ne.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,Ne.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(Ne.min),this.boundingBox.expandByPoint(Ne.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new or);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(Ne.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Xi.setFromBufferAttribute(o),this.morphTargetsRelative?(ge.addVectors(Ne.min,Xi.min),Ne.expandByPoint(ge),ge.addVectors(Ne.max,Xi.max),Ne.expandByPoint(ge)):(Ne.expandByPoint(Xi.min),Ne.expandByPoint(Xi.max))}Ne.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)ge.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(ge));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ge.fromBufferAttribute(o,l),c&&(_i.fromBufferAttribute(t,l),ge.add(_i)),r=Math.max(r,n.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new R,c[L]=new R;const l=new R,h=new R,f=new R,u=new dt,p=new dt,g=new dt,x=new R,d=new R;function m(L,W,_){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,W),f.fromBufferAttribute(n,_),u.fromBufferAttribute(s,L),p.fromBufferAttribute(s,W),g.fromBufferAttribute(s,_),h.sub(l),f.sub(l),p.sub(u),g.sub(u);const y=1/(p.x*g.y-g.x*p.y);isFinite(y)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(y),d.copy(f).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(y),o[L].add(x),o[W].add(x),o[_].add(x),c[L].add(d),c[W].add(d),c[_].add(d))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let L=0,W=E.length;L<W;++L){const _=E[L],y=_.start,B=_.count;for(let z=y,k=y+B;z<k;z+=3)m(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const S=new R,T=new R,U=new R,w=new R;function b(L){U.fromBufferAttribute(r,L),w.copy(U);const W=o[L];S.copy(W),S.sub(U.multiplyScalar(U.dot(W))).normalize(),T.crossVectors(w,W);const y=T.dot(c[L])<0?-1:1;a.setXYZW(L,S.x,S.y,S.z,y)}for(let L=0,W=E.length;L<W;++L){const _=E[L],y=_.start,B=_.count;for(let z=y,k=y+B;z<k;z+=3)b(t.getX(z+0)),b(t.getX(z+1)),b(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const r=new R,s=new R,a=new R,o=new R,c=new R,l=new R,h=new R,f=new R;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),x=t.getX(u+1),d=t.getX(u+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),a.fromBufferAttribute(e,d),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,d),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let u=0,p=e.count;u<p;u+=3)r.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,f=o.normalized,u=new l.constructor(c.length*h);let p=0,g=0;for(let x=0,d=c.length;x<d;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*h;for(let m=0;m<h;m++)u[g++]=l[p++]}return new tn(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new He,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,n);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,f=l.length;h<f;h++){const u=l[h],p=t(u,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){const p=l[f];h.push(p.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],f=s[l];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xo=new ee,Vn=new Fh,Er=new or,qo=new R,Tr=new R,Ar=new R,br=new R,Os=new R,wr=new R,Yo=new R,Rr=new R;class te extends _e{constructor(t=new He,e=new il){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){wr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],f=s[c];h!==0&&(Os.fromBufferAttribute(f,t),a?wr.addScaledVector(Os,h):wr.addScaledVector(Os.sub(e),h))}e.add(wr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(s),Vn.copy(t.ray).recast(t.near),!(Er.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(Er,qo)===null||Vn.origin.distanceToSquared(qo)>(t.far-t.near)**2))&&(Xo.copy(s).invert(),Vn.copy(t.ray).applyMatrix4(Xo),!(n.boundingBox!==null&&Vn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const d=u[g],m=a[d.materialIndex],E=Math.max(d.start,p.start),S=Math.min(o.count,Math.min(d.start+d.count,p.start+p.count));for(let T=E,U=S;T<U;T+=3){const w=o.getX(T),b=o.getX(T+1),L=o.getX(T+2);r=Cr(this,m,t,n,l,h,f,w,b,L),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let d=g,m=x;d<m;d+=3){const E=o.getX(d),S=o.getX(d+1),T=o.getX(d+2);r=Cr(this,a,t,n,l,h,f,E,S,T),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const d=u[g],m=a[d.materialIndex],E=Math.max(d.start,p.start),S=Math.min(c.count,Math.min(d.start+d.count,p.start+p.count));for(let T=E,U=S;T<U;T+=3){const w=T,b=T+1,L=T+2;r=Cr(this,m,t,n,l,h,f,w,b,L),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let d=g,m=x;d<m;d+=3){const E=d,S=d+1,T=d+2;r=Cr(this,a,t,n,l,h,f,E,S,T),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}}}function Xh(i,t,e,n,r,s,a,o){let c;if(t.side===Pe?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,t.side===Un,o),c===null)return null;Rr.copy(o),Rr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Rr);return l<e.near||l>e.far?null:{distance:l,point:Rr.clone(),object:i}}function Cr(i,t,e,n,r,s,a,o,c,l){i.getVertexPosition(o,Tr),i.getVertexPosition(c,Ar),i.getVertexPosition(l,br);const h=Xh(i,t,e,n,Tr,Ar,br,Yo);if(h){const f=new R;Ze.getBarycoord(Yo,Tr,Ar,br,f),r&&(h.uv=Ze.getInterpolatedAttribute(r,o,c,l,f,new dt)),s&&(h.uv1=Ze.getInterpolatedAttribute(s,o,c,l,f,new dt)),a&&(h.normal=Ze.getInterpolatedAttribute(a,o,c,l,f,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new R,materialIndex:0};Ze.getNormal(Tr,Ar,br,u.normal),h.face=u,h.barycoord=f}return h}class Bi extends He{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],f=[];let u=0,p=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,r,a,2),g("x","z","y",1,-1,t,n,-e,r,a,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(f,2));function g(x,d,m,E,S,T,U,w,b,L,W){const _=T/b,y=U/L,B=T/2,z=U/2,k=w/2,$=b+1,H=L+1;let J=0,V=0;const ct=new R;for(let lt=0;lt<H;lt++){const vt=lt*y-z;for(let Vt=0;Vt<$;Vt++){const Kt=Vt*_-B;ct[x]=Kt*E,ct[d]=vt*S,ct[m]=k,l.push(ct.x,ct.y,ct.z),ct[x]=0,ct[d]=0,ct[m]=w>0?1:-1,h.push(ct.x,ct.y,ct.z),f.push(Vt/b),f.push(1-lt/L),J+=1}}for(let lt=0;lt<L;lt++)for(let vt=0;vt<b;vt++){const Vt=u+vt+$*lt,Kt=u+vt+$*(lt+1),X=u+(vt+1)+$*(lt+1),j=u+(vt+1)+$*lt;c.push(Vt,Kt,j),c.push(Kt,X,j),V+=6}o.addGroup(p,V,W),p+=V,u+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ui(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ee(i){const t={};for(let e=0;e<i.length;e++){const n=Ui(i[e]);for(const r in n)t[r]=n[r]}return t}function qh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function al(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const Yh={clone:Ui,merge:Ee};var Kh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$h=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends cr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kh,this.fragmentShader=$h,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ui(t.uniforms),this.uniformsGroups=qh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ol extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=_n}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rn=new R,Ko=new dt,$o=new dt;class Oe extends ol{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Oa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(gs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Oa*2*Math.atan(Math.tan(gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z)}getViewSize(t,e){return this.getViewBounds(t,Ko,$o),e.subVectors($o,Ko)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(gs*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const vi=-90,xi=1;class Jh extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Oe(vi,xi,t,e);r.layers=this.layers,this.add(r);const s=new Oe(vi,xi,t,e);s.layers=this.layers,this.add(s);const a=new Oe(vi,xi,t,e);a.layers=this.layers,this.add(a);const o=new Oe(vi,xi,t,e);o.layers=this.layers,this.add(o);const c=new Oe(vi,xi,t,e);c.layers=this.layers,this.add(c);const l=new Oe(vi,xi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===_n)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===$r)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(f,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class cl extends Te{constructor(t,e,n,r,s,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Pi,super(t,e,n,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zh extends ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new cl(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Bi(5,5,5),s=new Nn({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pe,blending:Ln});s.uniforms.tEquirect.value=e;const a=new te(r,s),o=e.minFilter;return e.minFilter===Qn&&(e.minFilter=Je),new Jh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const Bs=new R,jh=new R,Qh=new It;class Yn{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Bs.subVectors(n,e).cross(jh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Bs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Qh.getNormalMatrix(t),r=this.coplanarPoint(Bs).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kn=new or,Pr=new R;class Za{constructor(t=new Yn,e=new Yn,n=new Yn,r=new Yn,s=new Yn,a=new Yn){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_n){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],h=r[5],f=r[6],u=r[7],p=r[8],g=r[9],x=r[10],d=r[11],m=r[12],E=r[13],S=r[14],T=r[15];if(n[0].setComponents(c-s,u-l,d-p,T-m).normalize(),n[1].setComponents(c+s,u+l,d+p,T+m).normalize(),n[2].setComponents(c+a,u+h,d+g,T+E).normalize(),n[3].setComponents(c-a,u-h,d-g,T-E).normalize(),n[4].setComponents(c-o,u-f,d-x,T-S).normalize(),e===_n)n[5].setComponents(c+o,u+f,d+x,T+S).normalize();else if(e===$r)n[5].setComponents(o,f,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(t){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Pr.x=r.normal.x>0?t.max.x:t.min.x,Pr.y=r.normal.y>0?t.max.y:t.min.y,Pr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Pr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ll(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function tu(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,f=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const h=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,h);else{f.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<f.length;p++){const g=f[u],x=f[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,f[u]=x)}f.length=u+1;for(let p=0,g=f.length;p<g;p++){const x=f[p];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class rs extends He{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(r),l=o+1,h=c+1,f=t/o,u=e/c,p=[],g=[],x=[],d=[];for(let m=0;m<h;m++){const E=m*u-a;for(let S=0;S<l;S++){const T=S*f-s;g.push(T,-E,0),x.push(0,0,1),d.push(S/o),d.push(1-m/c)}}for(let m=0;m<c;m++)for(let E=0;E<o;E++){const S=E+l*m,T=E+l*(m+1),U=E+1+l*(m+1),w=E+1+l*m;p.push(S,T,w),p.push(T,U,w)}this.setIndex(p),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(x,3)),this.setAttribute("uv",new ce(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rs(t.width,t.height,t.widthSegments,t.heightSegments)}}var eu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,iu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ru=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,su=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,au=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ou=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,hu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,du=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Su=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Eu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Tu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Au=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ru=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Du=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Iu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Uu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ou=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ku=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Yu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ku=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$u=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ju=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ju=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Qu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,td=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ed=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,id=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ad=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,od=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ld=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ud=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,md=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_d=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ed=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Td=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ad=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Pd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ld=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Id=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ud=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Od=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$d=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ef=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,af=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,of=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,df=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ff=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_f=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Mf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ef=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Af=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Pf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Df=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,If=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Dt={alphahash_fragment:eu,alphahash_pars_fragment:nu,alphamap_fragment:iu,alphamap_pars_fragment:ru,alphatest_fragment:su,alphatest_pars_fragment:au,aomap_fragment:ou,aomap_pars_fragment:cu,batching_pars_vertex:lu,batching_vertex:hu,begin_vertex:uu,beginnormal_vertex:du,bsdfs:fu,iridescence_fragment:pu,bumpmap_pars_fragment:mu,clipping_planes_fragment:gu,clipping_planes_pars_fragment:_u,clipping_planes_pars_vertex:vu,clipping_planes_vertex:xu,color_fragment:Mu,color_pars_fragment:Su,color_pars_vertex:yu,color_vertex:Eu,common:Tu,cube_uv_reflection_fragment:Au,defaultnormal_vertex:bu,displacementmap_pars_vertex:wu,displacementmap_vertex:Ru,emissivemap_fragment:Cu,emissivemap_pars_fragment:Pu,colorspace_fragment:Lu,colorspace_pars_fragment:Du,envmap_fragment:Iu,envmap_common_pars_fragment:Uu,envmap_pars_fragment:Nu,envmap_pars_vertex:Fu,envmap_physical_pars_fragment:Yu,envmap_vertex:Ou,fog_vertex:Bu,fog_pars_vertex:zu,fog_fragment:Hu,fog_pars_fragment:Gu,gradientmap_pars_fragment:Vu,lightmap_pars_fragment:ku,lights_lambert_fragment:Wu,lights_lambert_pars_fragment:Xu,lights_pars_begin:qu,lights_toon_fragment:Ku,lights_toon_pars_fragment:$u,lights_phong_fragment:Ju,lights_phong_pars_fragment:Zu,lights_physical_fragment:ju,lights_physical_pars_fragment:Qu,lights_fragment_begin:td,lights_fragment_maps:ed,lights_fragment_end:nd,logdepthbuf_fragment:id,logdepthbuf_pars_fragment:rd,logdepthbuf_pars_vertex:sd,logdepthbuf_vertex:ad,map_fragment:od,map_pars_fragment:cd,map_particle_fragment:ld,map_particle_pars_fragment:hd,metalnessmap_fragment:ud,metalnessmap_pars_fragment:dd,morphinstance_vertex:fd,morphcolor_vertex:pd,morphnormal_vertex:md,morphtarget_pars_vertex:gd,morphtarget_vertex:_d,normal_fragment_begin:vd,normal_fragment_maps:xd,normal_pars_fragment:Md,normal_pars_vertex:Sd,normal_vertex:yd,normalmap_pars_fragment:Ed,clearcoat_normal_fragment_begin:Td,clearcoat_normal_fragment_maps:Ad,clearcoat_pars_fragment:bd,iridescence_pars_fragment:wd,opaque_fragment:Rd,packing:Cd,premultiplied_alpha_fragment:Pd,project_vertex:Ld,dithering_fragment:Dd,dithering_pars_fragment:Id,roughnessmap_fragment:Ud,roughnessmap_pars_fragment:Nd,shadowmap_pars_fragment:Fd,shadowmap_pars_vertex:Od,shadowmap_vertex:Bd,shadowmask_pars_fragment:zd,skinbase_vertex:Hd,skinning_pars_vertex:Gd,skinning_vertex:Vd,skinnormal_vertex:kd,specularmap_fragment:Wd,specularmap_pars_fragment:Xd,tonemapping_fragment:qd,tonemapping_pars_fragment:Yd,transmission_fragment:Kd,transmission_pars_fragment:$d,uv_pars_fragment:Jd,uv_pars_vertex:Zd,uv_vertex:jd,worldpos_vertex:Qd,background_vert:tf,background_frag:ef,backgroundCube_vert:nf,backgroundCube_frag:rf,cube_vert:sf,cube_frag:af,depth_vert:of,depth_frag:cf,distanceRGBA_vert:lf,distanceRGBA_frag:hf,equirect_vert:uf,equirect_frag:df,linedashed_vert:ff,linedashed_frag:pf,meshbasic_vert:mf,meshbasic_frag:gf,meshlambert_vert:_f,meshlambert_frag:vf,meshmatcap_vert:xf,meshmatcap_frag:Mf,meshnormal_vert:Sf,meshnormal_frag:yf,meshphong_vert:Ef,meshphong_frag:Tf,meshphysical_vert:Af,meshphysical_frag:bf,meshtoon_vert:wf,meshtoon_frag:Rf,points_vert:Cf,points_frag:Pf,shadow_vert:Lf,shadow_frag:Df,sprite_vert:If,sprite_frag:Uf},et={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},rn={basic:{uniforms:Ee([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:Ee([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:Ee([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:Ee([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:Ee([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:Ee([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:Ee([et.points,et.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:Ee([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:Ee([et.common,et.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:Ee([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:Ee([et.sprite,et.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:Ee([et.common,et.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:Ee([et.lights,et.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};rn.physical={uniforms:Ee([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};const Lr={r:0,b:0,g:0},Wn=new an,Nf=new ee;function Ff(i,t,e,n,r,s,a){const o=new Ut(0);let c=s===!0?0:1,l,h,f=null,u=0,p=null;function g(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?e:t).get(S)),S}function x(E){let S=!1;const T=g(E);T===null?m(o,c):T&&T.isColor&&(m(T,1),S=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(E,S){const T=g(S);T&&(T.isCubeTexture||T.mapping===ns)?(h===void 0&&(h=new te(new Bi(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Ui(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Wn.copy(S.backgroundRotation),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Nf.makeRotationFromEuler(Wn)),h.material.toneMapped=Yt.getTransfer(T.colorSpace)!==se,(f!==T||u!==T.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,f=T,u=T.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new te(new rs(2,2),new Nn({name:"BackgroundMaterial",uniforms:Ui(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(T.colorSpace)!==se,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||u!==T.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,f=T,u=T.version,p=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function m(E,S){E.getRGB(Lr,al(i)),n.buffers.color.setClear(Lr.r,Lr.g,Lr.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(E,S=1){o.set(E),c=S,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,m(o,c)},render:x,addToRenderList:d}}function Of(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let s=r,a=!1;function o(_,y,B,z,k){let $=!1;const H=f(z,B,y);s!==H&&(s=H,l(s.object)),$=p(_,z,B,k),$&&g(_,z,B,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,T(_,y,B,z),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function f(_,y,B){const z=B.wireframe===!0;let k=n[_.id];k===void 0&&(k={},n[_.id]=k);let $=k[y.id];$===void 0&&($={},k[y.id]=$);let H=$[z];return H===void 0&&(H=u(c()),$[z]=H),H}function u(_){const y=[],B=[],z=[];for(let k=0;k<e;k++)y[k]=0,B[k]=0,z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:B,attributeDivisors:z,object:_,attributes:{},index:null}}function p(_,y,B,z){const k=s.attributes,$=y.attributes;let H=0;const J=B.getAttributes();for(const V in J)if(J[V].location>=0){const lt=k[V];let vt=$[V];if(vt===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(vt=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(vt=_.instanceColor)),lt===void 0||lt.attribute!==vt||vt&&lt.data!==vt.data)return!0;H++}return s.attributesNum!==H||s.index!==z}function g(_,y,B,z){const k={},$=y.attributes;let H=0;const J=B.getAttributes();for(const V in J)if(J[V].location>=0){let lt=$[V];lt===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(lt=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(lt=_.instanceColor));const vt={};vt.attribute=lt,lt&&lt.data&&(vt.data=lt.data),k[V]=vt,H++}s.attributes=k,s.attributesNum=H,s.index=z}function x(){const _=s.newAttributes;for(let y=0,B=_.length;y<B;y++)_[y]=0}function d(_){m(_,0)}function m(_,y){const B=s.newAttributes,z=s.enabledAttributes,k=s.attributeDivisors;B[_]=1,z[_]===0&&(i.enableVertexAttribArray(_),z[_]=1),k[_]!==y&&(i.vertexAttribDivisor(_,y),k[_]=y)}function E(){const _=s.newAttributes,y=s.enabledAttributes;for(let B=0,z=y.length;B<z;B++)y[B]!==_[B]&&(i.disableVertexAttribArray(B),y[B]=0)}function S(_,y,B,z,k,$,H){H===!0?i.vertexAttribIPointer(_,y,B,k,$):i.vertexAttribPointer(_,y,B,z,k,$)}function T(_,y,B,z){x();const k=z.attributes,$=B.getAttributes(),H=y.defaultAttributeValues;for(const J in $){const V=$[J];if(V.location>=0){let ct=k[J];if(ct===void 0&&(J==="instanceMatrix"&&_.instanceMatrix&&(ct=_.instanceMatrix),J==="instanceColor"&&_.instanceColor&&(ct=_.instanceColor)),ct!==void 0){const lt=ct.normalized,vt=ct.itemSize,Vt=t.get(ct);if(Vt===void 0)continue;const Kt=Vt.buffer,X=Vt.type,j=Vt.bytesPerElement,gt=X===i.INT||X===i.UNSIGNED_INT||ct.gpuType===ka;if(ct.isInterleavedBufferAttribute){const ht=ct.data,Pt=ht.stride,Tt=ct.offset;if(ht.isInstancedInterleavedBuffer){for(let Ot=0;Ot<V.locationSize;Ot++)m(V.location+Ot,ht.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Ot=0;Ot<V.locationSize;Ot++)d(V.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let Ot=0;Ot<V.locationSize;Ot++)S(V.location+Ot,vt/V.locationSize,X,lt,Pt*j,(Tt+vt/V.locationSize*Ot)*j,gt)}else{if(ct.isInstancedBufferAttribute){for(let ht=0;ht<V.locationSize;ht++)m(V.location+ht,ct.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let ht=0;ht<V.locationSize;ht++)d(V.location+ht);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let ht=0;ht<V.locationSize;ht++)S(V.location+ht,vt/V.locationSize,X,lt,vt*j,vt/V.locationSize*ht*j,gt)}}else if(H!==void 0){const lt=H[J];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(V.location,lt);break;case 3:i.vertexAttrib3fv(V.location,lt);break;case 4:i.vertexAttrib4fv(V.location,lt);break;default:i.vertexAttrib1fv(V.location,lt)}}}}E()}function U(){L();for(const _ in n){const y=n[_];for(const B in y){const z=y[B];for(const k in z)h(z[k].object),delete z[k];delete y[B]}delete n[_]}}function w(_){if(n[_.id]===void 0)return;const y=n[_.id];for(const B in y){const z=y[B];for(const k in z)h(z[k].object),delete z[k];delete y[B]}delete n[_.id]}function b(_){for(const y in n){const B=n[y];if(B[_.id]===void 0)continue;const z=B[_.id];for(const k in z)h(z[k].object),delete z[k];delete B[_.id]}}function L(){W(),a=!0,s!==r&&(s=r,l(s.object))}function W(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:W,dispose:U,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:d,disableUnusedAttributes:E}}function Bf(i,t,e){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,f){f!==0&&(i.drawArraysInstanced(n,l,h,f),e.update(h,n,f))}function o(l,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,f);let p=0;for(let g=0;g<f;g++)p+=h[g];e.update(p,n,1)}function c(l,h,f,u){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=h[x];for(let x=0;x<u.length;x++)e.update(g,n,u[x])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function zf(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==je&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const L=b===rr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Mn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==sn&&!L)}function c(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){const b=t.get("EXT_clip_control");b.clipControlEXT(b.LOWER_LEFT_EXT,b.ZERO_TO_ONE_EXT)}const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:d,maxAttributes:m,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:T,vertexTextures:U,maxSamples:w}}function Hf(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new Yn,o=new It,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||n!==0||r;return r=u,n=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,p){const g=f.clippingPlanes,x=f.clipIntersection,d=f.clipShadows,m=i.get(f);if(!r||g===null||g.length===0||s&&!d)s?h(null):l();else{const E=s?0:n,S=E*4;let T=m.clippingState||null;c.value=T,T=h(g,u,S,p);for(let U=0;U!==S;++U)T[U]=e[U];m.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,p,g){const x=f!==null?f.length:0;let d=null;if(x!==0){if(d=c.value,g!==!0||d===null){const m=p+x*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(d===null||d.length<m)&&(d=new Float32Array(m));for(let S=0,T=p;S!==x;++S,T+=4)a.copy(f[S]).applyMatrix4(E,o),a.normal.toArray(d,T),d[T+3]=a.constant}c.value=d,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,d}}function Gf(i){let t=new WeakMap;function e(a,o){return o===oa?a.mapping=Pi:o===ca&&(a.mapping=Li),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===oa||o===ca)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Zh(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",r),e(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class hl extends ol{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ei=4,Jo=[.125,.215,.35,.446,.526,.582],Jn=20,zs=new hl,Zo=new Ut;let Hs=null,Gs=0,Vs=0,ks=!1;const Kn=(1+Math.sqrt(5))/2,Mi=1/Kn,jo=[new R(-Kn,Mi,0),new R(Kn,Mi,0),new R(-Mi,0,Kn),new R(Mi,0,Kn),new R(0,Kn,-Mi),new R(0,Kn,Mi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class Qo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Hs=this._renderer.getRenderTarget(),Gs=this._renderer.getActiveCubeFace(),Vs=this._renderer.getActiveMipmapLevel(),ks=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Hs,Gs,Vs),this._renderer.xr.enabled=ks,t.scissorTest=!1,Dr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Pi||t.mapping===Li?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Hs=this._renderer.getRenderTarget(),Gs=this._renderer.getActiveCubeFace(),Vs=this._renderer.getActiveMipmapLevel(),ks=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:rr,format:je,colorSpace:Bn,depthBuffer:!1},r=tc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vf(s)),this._blurMaterial=kf(s,t,e)}return r}_compileMaterial(t){const e=new te(this._lodPlanes[0],t);this._renderer.compile(e,zs)}_sceneToCubeUV(t,e,n,r){const o=new Oe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(Zo),h.toneMapping=Dn,h.autoClear=!1;const p=new il({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),g=new te(new Bi,p);let x=!1;const d=t.background;d?d.isColor&&(p.color.copy(d),t.background=null,x=!0):(p.color.copy(Zo),x=!0);for(let m=0;m<6;m++){const E=m%3;E===0?(o.up.set(0,c[m],0),o.lookAt(l[m],0,0)):E===1?(o.up.set(0,0,c[m]),o.lookAt(0,l[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,l[m]));const S=this._cubeSize;Dr(r,E*S,m>2?S:0,S,S),h.setRenderTarget(r),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Pi||t.mapping===Li;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ec());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new te(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;Dr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,zs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=jo[(r-s-1)%jo.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new te(this._lodPlanes[r],l),u=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Jn-1),x=s/g,d=isFinite(s)?1+Math.floor(h*x):Jn;d>Jn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Jn}`);const m=[];let E=0;for(let b=0;b<Jn;++b){const L=b/x,W=Math.exp(-L*L/2);m.push(W),b===0?E+=W:b<d&&(E+=2*W)}for(let b=0;b<m.length;b++)m[b]=m[b]/E;u.envMap.value=t.texture,u.samples.value=d,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:S}=this;u.dTheta.value=g,u.mipInt.value=S-n;const T=this._sizeLods[r],U=3*T*(r>S-Ei?r-S+Ei:0),w=4*(this._cubeSize-T);Dr(e,U,w,3*T,2*T),c.setRenderTarget(e),c.render(f,zs)}}function Vf(i){const t=[],e=[],n=[];let r=i;const s=i-Ei+1+Jo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>i-Ei?c=Jo[a-i+Ei-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,g=6,x=3,d=2,m=1,E=new Float32Array(x*g*p),S=new Float32Array(d*g*p),T=new Float32Array(m*g*p);for(let w=0;w<p;w++){const b=w%3*2/3-1,L=w>2?0:-1,W=[b,L,0,b+2/3,L,0,b+2/3,L+1,0,b,L,0,b+2/3,L+1,0,b,L+1,0];E.set(W,x*g*w),S.set(u,d*g*w);const _=[w,w,w,w,w,w];T.set(_,m*g*w)}const U=new He;U.setAttribute("position",new tn(E,x)),U.setAttribute("uv",new tn(S,d)),U.setAttribute("faceIndex",new tn(T,m)),t.push(U),r>Ei&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function tc(i,t,e){const n=new ei(i,t,e);return n.texture.mapping=ns,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Dr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function kf(i,t,e){const n=new Float32Array(Jn),r=new R(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function ec(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function nc(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function ja(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Wf(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===oa||c===ca,h=c===Pi||c===Li;if(l||h){let f=t.get(o);const u=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new Qo(i)),f=l?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return l&&p&&p.height>0||h&&p&&r(p)?(e===null&&(e=new Qo(i)),f=l?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Xf(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Wr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function qf(i,t,e,n){const r={},s=new WeakMap;function a(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const x=u.morphAttributes[g];for(let d=0,m=x.length;d<m;d++)t.remove(x[d])}u.removeEventListener("dispose",a),delete r[u.id];const p=s.get(u);p&&(t.remove(p),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,e.memory.geometries++),u}function c(f){const u=f.attributes;for(const g in u)t.update(u[g],i.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const x=p[g];for(let d=0,m=x.length;d<m;d++)t.update(x[d],i.ARRAY_BUFFER)}}function l(f){const u=[],p=f.index,g=f.attributes.position;let x=0;if(p!==null){const E=p.array;x=p.version;for(let S=0,T=E.length;S<T;S+=3){const U=E[S+0],w=E[S+1],b=E[S+2];u.push(U,w,w,b,b,U)}}else if(g!==void 0){const E=g.array;x=g.version;for(let S=0,T=E.length/3-1;S<T;S+=3){const U=S+0,w=S+1,b=S+2;u.push(U,w,w,b,b,U)}}else return;const d=new(jc(u)?sl:rl)(u,1);d.version=x;const m=s.get(f);m&&t.remove(m),s.set(f,d)}function h(f){const u=s.get(f);if(u){const p=f.index;p!==null&&u.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function Yf(i,t,e){let n;function r(u){n=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function c(u,p){i.drawElements(n,p,s,u*a),e.update(p,n,1)}function l(u,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,u*a,g),e.update(p,n,g))}function h(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,u,0,g);let d=0;for(let m=0;m<g;m++)d+=p[m];e.update(d,n,1)}function f(u,p,g,x){if(g===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<u.length;m++)l(u[m]/a,p[m],x[m]);else{d.multiDrawElementsInstancedWEBGL(n,p,0,s,u,0,x,0,g);let m=0;for(let E=0;E<g;E++)m+=p[E];for(let E=0;E<x.length;E++)e.update(m,n,x[E])}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Kf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function $f(i,t,e){const n=new WeakMap,r=new Qt;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let _=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var p=_;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,d=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let T=0;g===!0&&(T=1),x===!0&&(T=2),d===!0&&(T=3);let U=o.attributes.position.count*T,w=1;U>t.maxTextureSize&&(w=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const b=new Float32Array(U*w*4*f),L=new tl(b,U,w,f);L.type=sn,L.needsUpdate=!0;const W=T*4;for(let y=0;y<f;y++){const B=m[y],z=E[y],k=S[y],$=U*w*4*y;for(let H=0;H<B.count;H++){const J=H*W;g===!0&&(r.fromBufferAttribute(B,H),b[$+J+0]=r.x,b[$+J+1]=r.y,b[$+J+2]=r.z,b[$+J+3]=0),x===!0&&(r.fromBufferAttribute(z,H),b[$+J+4]=r.x,b[$+J+5]=r.y,b[$+J+6]=r.z,b[$+J+7]=0),d===!0&&(r.fromBufferAttribute(k,H),b[$+J+8]=r.x,b[$+J+9]=r.y,b[$+J+10]=r.z,b[$+J+11]=k.itemSize===4?r.w:1)}}u={count:f,texture:L,size:new dt(U,w)},n.set(o,u),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let d=0;d<l.length;d++)g+=l[d];const x=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function Jf(i,t,e,n){let r=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,f=t.get(c,h);if(r.get(f)!==l&&(t.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;r.get(u)!==l&&(u.update(),r.set(u,l))}return f}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}class ul extends Te{constructor(t,e,n,r,s,a,o,c,l,h=bi){if(h!==bi&&h!==Ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===bi&&(n=ti),n===void 0&&h===Ii&&(n=Di),super(null,r,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Re,this.minFilter=c!==void 0?c:Re,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const dl=new Te,ic=new ul(1,1),fl=new tl,pl=new Uh,ml=new cl,rc=[],sc=[],ac=new Float32Array(16),oc=new Float32Array(9),cc=new Float32Array(4);function zi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=rc[r];if(s===void 0&&(s=new Float32Array(r),rc[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ss(i,t){let e=sc[t];e===void 0&&(e=new Int32Array(t),sc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Zf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function jf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2fv(this.addr,t),me(e,t)}}function Qf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;i.uniform3fv(this.addr,t),me(e,t)}}function tp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4fv(this.addr,t),me(e,t)}}function ep(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;cc.set(n),i.uniformMatrix2fv(this.addr,!1,cc),me(e,n)}}function np(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;oc.set(n),i.uniformMatrix3fv(this.addr,!1,oc),me(e,n)}}function ip(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;ac.set(n),i.uniformMatrix4fv(this.addr,!1,ac),me(e,n)}}function rp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function sp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2iv(this.addr,t),me(e,t)}}function ap(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3iv(this.addr,t),me(e,t)}}function op(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4iv(this.addr,t),me(e,t)}}function cp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function lp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2uiv(this.addr,t),me(e,t)}}function hp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3uiv(this.addr,t),me(e,t)}}function up(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4uiv(this.addr,t),me(e,t)}}function dp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ic.compareFunction=Zc,s=ic):s=dl,e.setTexture2D(t||s,r)}function fp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||pl,r)}function pp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||ml,r)}function mp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||fl,r)}function gp(i){switch(i){case 5126:return Zf;case 35664:return jf;case 35665:return Qf;case 35666:return tp;case 35674:return ep;case 35675:return np;case 35676:return ip;case 5124:case 35670:return rp;case 35667:case 35671:return sp;case 35668:case 35672:return ap;case 35669:case 35673:return op;case 5125:return cp;case 36294:return lp;case 36295:return hp;case 36296:return up;case 35678:case 36198:case 36298:case 36306:case 35682:return dp;case 35679:case 36299:case 36307:return fp;case 35680:case 36300:case 36308:case 36293:return pp;case 36289:case 36303:case 36311:case 36292:return mp}}function _p(i,t){i.uniform1fv(this.addr,t)}function vp(i,t){const e=zi(t,this.size,2);i.uniform2fv(this.addr,e)}function xp(i,t){const e=zi(t,this.size,3);i.uniform3fv(this.addr,e)}function Mp(i,t){const e=zi(t,this.size,4);i.uniform4fv(this.addr,e)}function Sp(i,t){const e=zi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function yp(i,t){const e=zi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ep(i,t){const e=zi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Tp(i,t){i.uniform1iv(this.addr,t)}function Ap(i,t){i.uniform2iv(this.addr,t)}function bp(i,t){i.uniform3iv(this.addr,t)}function wp(i,t){i.uniform4iv(this.addr,t)}function Rp(i,t){i.uniform1uiv(this.addr,t)}function Cp(i,t){i.uniform2uiv(this.addr,t)}function Pp(i,t){i.uniform3uiv(this.addr,t)}function Lp(i,t){i.uniform4uiv(this.addr,t)}function Dp(i,t,e){const n=this.cache,r=t.length,s=ss(e,r);pe(n,s)||(i.uniform1iv(this.addr,s),me(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||dl,s[a])}function Ip(i,t,e){const n=this.cache,r=t.length,s=ss(e,r);pe(n,s)||(i.uniform1iv(this.addr,s),me(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||pl,s[a])}function Up(i,t,e){const n=this.cache,r=t.length,s=ss(e,r);pe(n,s)||(i.uniform1iv(this.addr,s),me(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||ml,s[a])}function Np(i,t,e){const n=this.cache,r=t.length,s=ss(e,r);pe(n,s)||(i.uniform1iv(this.addr,s),me(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||fl,s[a])}function Fp(i){switch(i){case 5126:return _p;case 35664:return vp;case 35665:return xp;case 35666:return Mp;case 35674:return Sp;case 35675:return yp;case 35676:return Ep;case 5124:case 35670:return Tp;case 35667:case 35671:return Ap;case 35668:case 35672:return bp;case 35669:case 35673:return wp;case 5125:return Rp;case 36294:return Cp;case 36295:return Pp;case 36296:return Lp;case 35678:case 36198:case 36298:case 36306:case 35682:return Dp;case 35679:case 36299:case 36307:return Ip;case 35680:case 36300:case 36308:case 36293:return Up;case 36289:case 36303:case 36311:case 36292:return Np}}class Op{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=gp(e.type)}}class Bp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fp(e.type)}}class zp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const Ws=/(\w+)(\])?(\[|\.)?/g;function lc(i,t){i.seq.push(t),i.map[t.id]=t}function Hp(i,t,e){const n=i.name,r=n.length;for(Ws.lastIndex=0;;){const s=Ws.exec(n),a=Ws.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){lc(e,l===void 0?new Op(o,i,t):new Bp(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new zp(o),lc(e,f)),e=f}}}class Xr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);Hp(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function hc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Gp=37297;let Vp=0;function kp(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Wp(i){const t=Yt.getPrimaries(Yt.workingColorSpace),e=Yt.getPrimaries(i);let n;switch(t===e?n="":t===Kr&&e===Yr?n="LinearDisplayP3ToLinearSRGB":t===Yr&&e===Kr&&(n="LinearSRGBToLinearDisplayP3"),i){case Bn:case is:return[n,"LinearTransferOETF"];case $e:case Ja:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function uc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+kp(i.getShaderSource(t),a)}else return r}function Xp(i,t){const e=Wp(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function qp(i,t){let e;switch(t){case oh:e="Linear";break;case ch:e="Reinhard";break;case lh:e="Cineon";break;case zc:e="ACESFilmic";break;case uh:e="AgX";break;case dh:e="Neutral";break;case hh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ir=new R;function Yp(){Yt.getLuminanceCoefficients(Ir);const i=Ir.x.toFixed(4),t=Ir.y.toFixed(4),e=Ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ji).join(`
`)}function $p(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Jp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ji(i){return i!==""}function dc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Zp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ba(i){return i.replace(Zp,Qp)}const jp=new Map;function Qp(i,t){let e=Dt[t];if(e===void 0){const n=jp.get(t);if(n!==void 0)e=Dt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ba(e)}const tm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pc(i){return i.replace(tm,em)}function em(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function mc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function nm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Oc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mn&&(t="SHADOWMAP_TYPE_VSM"),t}function im(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Pi:case Li:t="ENVMAP_TYPE_CUBE";break;case ns:t="ENVMAP_TYPE_CUBE_UV";break}return t}function rm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Li:t="ENVMAP_MODE_REFRACTION";break}return t}function sm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Bc:t="ENVMAP_BLENDING_MULTIPLY";break;case sh:t="ENVMAP_BLENDING_MIX";break;case ah:t="ENVMAP_BLENDING_ADD";break}return t}function am(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function om(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=nm(e),l=im(e),h=rm(e),f=sm(e),u=am(e),p=Kp(e),g=$p(s),x=r.createProgram();let d,m,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ji).join(`
`),d.length>0&&(d+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ji).join(`
`),m.length>0&&(m+=`
`)):(d=[mc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ji).join(`
`),m=[mc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Dn?"#define TONE_MAPPING":"",e.toneMapping!==Dn?Dt.tonemapping_pars_fragment:"",e.toneMapping!==Dn?qp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,Xp("linearToOutputTexel",e.outputColorSpace),Yp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ji).join(`
`)),a=Ba(a),a=dc(a,e),a=fc(a,e),o=Ba(o),o=dc(o,e),o=fc(o,e),a=pc(a),o=pc(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,d=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,m=["#define varying in",e.glslVersion===Do?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Do?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=E+d+a,T=E+m+o,U=hc(r,r.VERTEX_SHADER,S),w=hc(r,r.FRAGMENT_SHADER,T);r.attachShader(x,U),r.attachShader(x,w),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function b(y){if(i.debug.checkShaderErrors){const B=r.getProgramInfoLog(x).trim(),z=r.getShaderInfoLog(U).trim(),k=r.getShaderInfoLog(w).trim();let $=!0,H=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,U,w);else{const J=uc(r,U,"vertex"),V=uc(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+B+`
`+J+`
`+V)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(z===""||k==="")&&(H=!1);H&&(y.diagnostics={runnable:$,programLog:B,vertexShader:{log:z,prefix:d},fragmentShader:{log:k,prefix:m}})}r.deleteShader(U),r.deleteShader(w),L=new Xr(r,x),W=Jp(r,x)}let L;this.getUniforms=function(){return L===void 0&&b(this),L};let W;this.getAttributes=function(){return W===void 0&&b(this),W};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(x,Gp)),_},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vp++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=U,this.fragmentShader=w,this}let cm=0;class lm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new hm(t),e.set(t,n)),n}}class hm{constructor(t){this.id=cm++,this.code=t,this.usedTimes=0}}function um(i,t,e,n,r,s,a){const o=new el,c=new lm,l=new Set,h=[],f=r.logarithmicDepthBuffer,u=r.reverseDepthBuffer,p=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,y,B,z,k){const $=z.fog,H=k.geometry,J=_.isMeshStandardMaterial?z.environment:null,V=(_.isMeshStandardMaterial?e:t).get(_.envMap||J),ct=V&&V.mapping===ns?V.image.height:null,lt=x[_.type];_.precision!==null&&(g=r.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const vt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Vt=vt!==void 0?vt.length:0;let Kt=0;H.morphAttributes.position!==void 0&&(Kt=1),H.morphAttributes.normal!==void 0&&(Kt=2),H.morphAttributes.color!==void 0&&(Kt=3);let X,j,gt,ht;if(lt){const be=rn[lt];X=be.vertexShader,j=be.fragmentShader}else X=_.vertexShader,j=_.fragmentShader,c.update(_),gt=c.getVertexShaderID(_),ht=c.getFragmentShaderID(_);const Pt=i.getRenderTarget(),Tt=k.isInstancedMesh===!0,Ot=k.isBatchedMesh===!0,Zt=!!_.map,Bt=!!_.matcap,C=!!V,Le=!!_.aoMap,Nt=!!_.lightMap,Ht=!!_.bumpMap,bt=!!_.normalMap,ie=!!_.displacementMap,Ct=!!_.emissiveMap,A=!!_.metalnessMap,v=!!_.roughnessMap,N=_.anisotropy>0,Y=_.clearcoat>0,Z=_.dispersion>0,q=_.iridescence>0,xt=_.sheen>0,nt=_.transmission>0,ut=N&&!!_.anisotropyMap,Gt=Y&&!!_.clearcoatMap,Q=Y&&!!_.clearcoatNormalMap,ft=Y&&!!_.clearcoatRoughnessMap,wt=q&&!!_.iridescenceMap,Rt=q&&!!_.iridescenceThicknessMap,pt=xt&&!!_.sheenColorMap,Ft=xt&&!!_.sheenRoughnessMap,Lt=!!_.specularMap,ne=!!_.specularColorMap,P=!!_.specularIntensityMap,st=nt&&!!_.transmissionMap,G=nt&&!!_.thicknessMap,K=!!_.gradientMap,it=!!_.alphaMap,at=_.alphaTest>0,zt=!!_.alphaHash,ue=!!_.extensions;let Ae=Dn;_.toneMapped&&(Pt===null||Pt.isXRRenderTarget===!0)&&(Ae=i.toneMapping);const kt={shaderID:lt,shaderType:_.type,shaderName:_.name,vertexShader:X,fragmentShader:j,defines:_.defines,customVertexShaderID:gt,customFragmentShaderID:ht,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Ot,batchingColor:Ot&&k._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&k.instanceColor!==null,instancingMorph:Tt&&k.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Pt===null?i.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:Bn,alphaToCoverage:!!_.alphaToCoverage,map:Zt,matcap:Bt,envMap:C,envMapMode:C&&V.mapping,envMapCubeUVHeight:ct,aoMap:Le,lightMap:Nt,bumpMap:Ht,normalMap:bt,displacementMap:p&&ie,emissiveMap:Ct,normalMapObjectSpace:bt&&_.normalMapType===gh,normalMapTangentSpace:bt&&_.normalMapType===Jc,metalnessMap:A,roughnessMap:v,anisotropy:N,anisotropyMap:ut,clearcoat:Y,clearcoatMap:Gt,clearcoatNormalMap:Q,clearcoatRoughnessMap:ft,dispersion:Z,iridescence:q,iridescenceMap:wt,iridescenceThicknessMap:Rt,sheen:xt,sheenColorMap:pt,sheenRoughnessMap:Ft,specularMap:Lt,specularColorMap:ne,specularIntensityMap:P,transmission:nt,transmissionMap:st,thicknessMap:G,gradientMap:K,opaque:_.transparent===!1&&_.blending===Ai&&_.alphaToCoverage===!1,alphaMap:it,alphaTest:at,alphaHash:zt,combine:_.combine,mapUv:Zt&&d(_.map.channel),aoMapUv:Le&&d(_.aoMap.channel),lightMapUv:Nt&&d(_.lightMap.channel),bumpMapUv:Ht&&d(_.bumpMap.channel),normalMapUv:bt&&d(_.normalMap.channel),displacementMapUv:ie&&d(_.displacementMap.channel),emissiveMapUv:Ct&&d(_.emissiveMap.channel),metalnessMapUv:A&&d(_.metalnessMap.channel),roughnessMapUv:v&&d(_.roughnessMap.channel),anisotropyMapUv:ut&&d(_.anisotropyMap.channel),clearcoatMapUv:Gt&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:Q&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&d(_.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&d(_.sheenRoughnessMap.channel),specularMapUv:Lt&&d(_.specularMap.channel),specularColorMapUv:ne&&d(_.specularColorMap.channel),specularIntensityMapUv:P&&d(_.specularIntensityMap.channel),transmissionMapUv:st&&d(_.transmissionMap.channel),thicknessMapUv:G&&d(_.thicknessMap.channel),alphaMapUv:it&&d(_.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(bt||N),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!H.attributes.uv&&(Zt||it),fog:!!$,useFog:_.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:u,skinning:k.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Vt,morphTextureStride:Kt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ae,decodeVideoTexture:Zt&&_.map.isVideoTexture===!0&&Yt.getTransfer(_.map.colorSpace)===se,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===gn,flipSided:_.side===Pe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ue&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&_.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return kt.vertexUv1s=l.has(1),kt.vertexUv2s=l.has(2),kt.vertexUv3s=l.has(3),l.clear(),kt}function E(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const B in _.defines)y.push(B),y.push(_.defines[B]);return _.isRawShaderMaterial===!1&&(S(y,_),T(y,_),y.push(i.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function S(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function T(_,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.alphaToCoverage&&o.enable(20),_.push(o.mask)}function U(_){const y=x[_.type];let B;if(y){const z=rn[y];B=Yh.clone(z.uniforms)}else B=_.uniforms;return B}function w(_,y){let B;for(let z=0,k=h.length;z<k;z++){const $=h[z];if($.cacheKey===y){B=$,++B.usedTimes;break}}return B===void 0&&(B=new om(i,y,_,s),h.push(B)),B}function b(_){if(--_.usedTimes===0){const y=h.indexOf(_);h[y]=h[h.length-1],h.pop(),_.destroy()}}function L(_){c.remove(_)}function W(){c.dispose()}return{getParameters:m,getProgramCacheKey:E,getUniforms:U,acquireProgram:w,releaseProgram:b,releaseShaderCache:L,programs:h,dispose:W}}function dm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function fm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function gc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _c(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(f,u,p,g,x,d){let m=i[t];return m===void 0?(m={id:f.id,object:f,geometry:u,material:p,groupOrder:g,renderOrder:f.renderOrder,z:x,group:d},i[t]=m):(m.id=f.id,m.object=f,m.geometry=u,m.material=p,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=x,m.group=d),t++,m}function o(f,u,p,g,x,d){const m=a(f,u,p,g,x,d);p.transmission>0?n.push(m):p.transparent===!0?r.push(m):e.push(m)}function c(f,u,p,g,x,d){const m=a(f,u,p,g,x,d);p.transmission>0?n.unshift(m):p.transparent===!0?r.unshift(m):e.unshift(m)}function l(f,u){e.length>1&&e.sort(f||fm),n.length>1&&n.sort(u||gc),r.length>1&&r.sort(u||gc)}function h(){for(let f=t,u=i.length;f<u;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function pm(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new _c,i.set(n,[a])):r>=s.length?(a=new _c,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function mm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Ut};break;case"SpotLight":e={position:new R,direction:new R,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function gm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let _m=0;function vm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function xm(i){const t=new mm,e=gm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const r=new R,s=new ee,a=new ee;function o(l){let h=0,f=0,u=0;for(let W=0;W<9;W++)n.probe[W].set(0,0,0);let p=0,g=0,x=0,d=0,m=0,E=0,S=0,T=0,U=0,w=0,b=0;l.sort(vm);for(let W=0,_=l.length;W<_;W++){const y=l[W],B=y.color,z=y.intensity,k=y.distance,$=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)h+=B.r*z,f+=B.g*z,u+=B.b*z;else if(y.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(y.sh.coefficients[H],z);b++}else if(y.isDirectionalLight){const H=t.get(y);if(H.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const J=y.shadow,V=e.get(y);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=y.shadow.matrix,E++}n.directional[p]=H,p++}else if(y.isSpotLight){const H=t.get(y);H.position.setFromMatrixPosition(y.matrixWorld),H.color.copy(B).multiplyScalar(z),H.distance=k,H.coneCos=Math.cos(y.angle),H.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),H.decay=y.decay,n.spot[x]=H;const J=y.shadow;if(y.map&&(n.spotLightMap[U]=y.map,U++,J.updateMatrices(y),y.castShadow&&w++),n.spotLightMatrix[x]=J.matrix,y.castShadow){const V=e.get(y);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=$,T++}x++}else if(y.isRectAreaLight){const H=t.get(y);H.color.copy(B).multiplyScalar(z),H.halfWidth.set(y.width*.5,0,0),H.halfHeight.set(0,y.height*.5,0),n.rectArea[d]=H,d++}else if(y.isPointLight){const H=t.get(y);if(H.color.copy(y.color).multiplyScalar(y.intensity),H.distance=y.distance,H.decay=y.decay,y.castShadow){const J=y.shadow,V=e.get(y);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=y.shadow.matrix,S++}n.point[g]=H,g++}else if(y.isHemisphereLight){const H=t.get(y);H.skyColor.copy(y.color).multiplyScalar(z),H.groundColor.copy(y.groundColor).multiplyScalar(z),n.hemi[m]=H,m++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=et.LTC_FLOAT_1,n.rectAreaLTC2=et.LTC_FLOAT_2):(n.rectAreaLTC1=et.LTC_HALF_1,n.rectAreaLTC2=et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const L=n.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==x||L.rectAreaLength!==d||L.hemiLength!==m||L.numDirectionalShadows!==E||L.numPointShadows!==S||L.numSpotShadows!==T||L.numSpotMaps!==U||L.numLightProbes!==b)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=d,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=T+U-w,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=b,L.directionalLength=p,L.pointLength=g,L.spotLength=x,L.rectAreaLength=d,L.hemiLength=m,L.numDirectionalShadows=E,L.numPointShadows=S,L.numSpotShadows=T,L.numSpotMaps=U,L.numLightProbes=b,n.version=_m++)}function c(l,h){let f=0,u=0,p=0,g=0,x=0;const d=h.matrixWorldInverse;for(let m=0,E=l.length;m<E;m++){const S=l[m];if(S.isDirectionalLight){const T=n.directional[f];T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(d),f++}else if(S.isSpotLight){const T=n.spot[p];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(d),p++}else if(S.isRectAreaLight){const T=n.rectArea[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(d),a.identity(),s.copy(S.matrixWorld),s.premultiply(d),a.extractRotation(s),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const T=n.point[u];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(d),u++}else if(S.isHemisphereLight){const T=n.hemi[x];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(d),x++}}}return{setup:o,setupView:c,state:n}}function vc(i){const t=new xm(i),e=[],n=[];function r(h){l.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Mm(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new vc(i),t.set(r,[o])):s>=a.length?(o=new vc(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Sm extends cr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ph,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ym extends cr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Em=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Am(i,t,e){let n=new Za;const r=new dt,s=new dt,a=new Qt,o=new Sm({depthPacking:mh}),c=new ym,l={},h=e.maxTextureSize,f={[Un]:Pe,[Pe]:Un,[gn]:gn},u=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:Em,fragmentShader:Tm}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new He;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new te(g,u),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fc;let m=this.type;this.render=function(w,b,L){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||w.length===0)return;const W=i.getRenderTarget(),_=i.getActiveCubeFace(),y=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Ln),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const z=m!==mn&&this.type===mn,k=m===mn&&this.type!==mn;for(let $=0,H=w.length;$<H;$++){const J=w[$],V=J.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ct=V.getFrameExtents();if(r.multiply(ct),s.copy(V.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ct.x),r.x=s.x*ct.x,V.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ct.y),r.y=s.y*ct.y,V.mapSize.y=s.y)),V.map===null||z===!0||k===!0){const vt=this.type!==mn?{minFilter:Re,magFilter:Re}:{};V.map!==null&&V.map.dispose(),V.map=new ei(r.x,r.y,vt),V.map.texture.name=J.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const lt=V.getViewportCount();for(let vt=0;vt<lt;vt++){const Vt=V.getViewport(vt);a.set(s.x*Vt.x,s.y*Vt.y,s.x*Vt.z,s.y*Vt.w),B.viewport(a),V.updateMatrices(J,vt),n=V.getFrustum(),T(b,L,V.camera,J,this.type)}V.isPointLightShadow!==!0&&this.type===mn&&E(V,L),V.needsUpdate=!1}m=this.type,d.needsUpdate=!1,i.setRenderTarget(W,_,y)};function E(w,b){const L=t.update(x);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ei(r.x,r.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(b,null,L,u,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(b,null,L,p,x,null)}function S(w,b,L,W){let _=null;const y=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(y!==void 0)_=y;else if(_=L.isPointLight===!0?c:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const B=_.uuid,z=b.uuid;let k=l[B];k===void 0&&(k={},l[B]=k);let $=k[z];$===void 0&&($=_.clone(),k[z]=$,b.addEventListener("dispose",U)),_=$}if(_.visible=b.visible,_.wireframe=b.wireframe,W===mn?_.side=b.shadowSide!==null?b.shadowSide:b.side:_.side=b.shadowSide!==null?b.shadowSide:f[b.side],_.alphaMap=b.alphaMap,_.alphaTest=b.alphaTest,_.map=b.map,_.clipShadows=b.clipShadows,_.clippingPlanes=b.clippingPlanes,_.clipIntersection=b.clipIntersection,_.displacementMap=b.displacementMap,_.displacementScale=b.displacementScale,_.displacementBias=b.displacementBias,_.wireframeLinewidth=b.wireframeLinewidth,_.linewidth=b.linewidth,L.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const B=i.properties.get(_);B.light=L}return _}function T(w,b,L,W,_){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&_===mn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const z=t.update(w),k=w.material;if(Array.isArray(k)){const $=z.groups;for(let H=0,J=$.length;H<J;H++){const V=$[H],ct=k[V.materialIndex];if(ct&&ct.visible){const lt=S(w,ct,W,_);w.onBeforeShadow(i,w,b,L,z,lt,V),i.renderBufferDirect(L,null,z,lt,w,V),w.onAfterShadow(i,w,b,L,z,lt,V)}}}else if(k.visible){const $=S(w,k,W,_);w.onBeforeShadow(i,w,b,L,z,$,null),i.renderBufferDirect(L,null,z,$,w,null),w.onAfterShadow(i,w,b,L,z,$,null)}}const B=w.children;for(let z=0,k=B.length;z<k;z++)T(B[z],b,L,W,_)}function U(w){w.target.removeEventListener("dispose",U);for(const L in l){const W=l[L],_=w.target.uuid;_ in W&&(W[_].dispose(),delete W[_])}}}const bm={[ta]:ea,[na]:sa,[ia]:aa,[Ci]:ra,[ea]:ta,[sa]:na,[aa]:ia,[ra]:Ci};function wm(i){function t(){let P=!1;const st=new Qt;let G=null;const K=new Qt(0,0,0,0);return{setMask:function(it){G!==it&&!P&&(i.colorMask(it,it,it,it),G=it)},setLocked:function(it){P=it},setClear:function(it,at,zt,ue,Ae){Ae===!0&&(it*=ue,at*=ue,zt*=ue),st.set(it,at,zt,ue),K.equals(st)===!1&&(i.clearColor(it,at,zt,ue),K.copy(st))},reset:function(){P=!1,G=null,K.set(-1,0,0,0)}}}function e(){let P=!1,st=!1,G=null,K=null,it=null;return{setReversed:function(at){st=at},setTest:function(at){at?gt(i.DEPTH_TEST):ht(i.DEPTH_TEST)},setMask:function(at){G!==at&&!P&&(i.depthMask(at),G=at)},setFunc:function(at){if(st&&(at=bm[at]),K!==at){switch(at){case ta:i.depthFunc(i.NEVER);break;case ea:i.depthFunc(i.ALWAYS);break;case na:i.depthFunc(i.LESS);break;case Ci:i.depthFunc(i.LEQUAL);break;case ia:i.depthFunc(i.EQUAL);break;case ra:i.depthFunc(i.GEQUAL);break;case sa:i.depthFunc(i.GREATER);break;case aa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=at}},setLocked:function(at){P=at},setClear:function(at){it!==at&&(i.clearDepth(at),it=at)},reset:function(){P=!1,G=null,K=null,it=null}}}function n(){let P=!1,st=null,G=null,K=null,it=null,at=null,zt=null,ue=null,Ae=null;return{setTest:function(kt){P||(kt?gt(i.STENCIL_TEST):ht(i.STENCIL_TEST))},setMask:function(kt){st!==kt&&!P&&(i.stencilMask(kt),st=kt)},setFunc:function(kt,be,cn){(G!==kt||K!==be||it!==cn)&&(i.stencilFunc(kt,be,cn),G=kt,K=be,it=cn)},setOp:function(kt,be,cn){(at!==kt||zt!==be||ue!==cn)&&(i.stencilOp(kt,be,cn),at=kt,zt=be,ue=cn)},setLocked:function(kt){P=kt},setClear:function(kt){Ae!==kt&&(i.clearStencil(kt),Ae=kt)},reset:function(){P=!1,st=null,G=null,K=null,it=null,at=null,zt=null,ue=null,Ae=null}}}const r=new t,s=new e,a=new n,o=new WeakMap,c=new WeakMap;let l={},h={},f=new WeakMap,u=[],p=null,g=!1,x=null,d=null,m=null,E=null,S=null,T=null,U=null,w=new Ut(0,0,0),b=0,L=!1,W=null,_=null,y=null,B=null,z=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,H=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(J)[1]),$=H>=1):J.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),$=H>=2);let V=null,ct={};const lt=i.getParameter(i.SCISSOR_BOX),vt=i.getParameter(i.VIEWPORT),Vt=new Qt().fromArray(lt),Kt=new Qt().fromArray(vt);function X(P,st,G,K){const it=new Uint8Array(4),at=i.createTexture();i.bindTexture(P,at),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<G;zt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,it):i.texImage2D(st+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,it);return at}const j={};j[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),gt(i.DEPTH_TEST),s.setFunc(Ci),Nt(!1),Ht(bo),gt(i.CULL_FACE),C(Ln);function gt(P){l[P]!==!0&&(i.enable(P),l[P]=!0)}function ht(P){l[P]!==!1&&(i.disable(P),l[P]=!1)}function Pt(P,st){return h[P]!==st?(i.bindFramebuffer(P,st),h[P]=st,P===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=st),P===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=st),!0):!1}function Tt(P,st){let G=u,K=!1;if(P){G=f.get(st),G===void 0&&(G=[],f.set(st,G));const it=P.textures;if(G.length!==it.length||G[0]!==i.COLOR_ATTACHMENT0){for(let at=0,zt=it.length;at<zt;at++)G[at]=i.COLOR_ATTACHMENT0+at;G.length=it.length,K=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,K=!0);K&&i.drawBuffers(G)}function Ot(P){return p!==P?(i.useProgram(P),p=P,!0):!1}const Zt={[$n]:i.FUNC_ADD,[Vl]:i.FUNC_SUBTRACT,[kl]:i.FUNC_REVERSE_SUBTRACT};Zt[Wl]=i.MIN,Zt[Xl]=i.MAX;const Bt={[ql]:i.ZERO,[Yl]:i.ONE,[Kl]:i.SRC_COLOR,[js]:i.SRC_ALPHA,[th]:i.SRC_ALPHA_SATURATE,[jl]:i.DST_COLOR,[Jl]:i.DST_ALPHA,[$l]:i.ONE_MINUS_SRC_COLOR,[Qs]:i.ONE_MINUS_SRC_ALPHA,[Ql]:i.ONE_MINUS_DST_COLOR,[Zl]:i.ONE_MINUS_DST_ALPHA,[eh]:i.CONSTANT_COLOR,[nh]:i.ONE_MINUS_CONSTANT_COLOR,[ih]:i.CONSTANT_ALPHA,[rh]:i.ONE_MINUS_CONSTANT_ALPHA};function C(P,st,G,K,it,at,zt,ue,Ae,kt){if(P===Ln){g===!0&&(ht(i.BLEND),g=!1);return}if(g===!1&&(gt(i.BLEND),g=!0),P!==Gl){if(P!==x||kt!==L){if((d!==$n||S!==$n)&&(i.blendEquation(i.FUNC_ADD),d=$n,S=$n),kt)switch(P){case Ai:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wo:i.blendFunc(i.ONE,i.ONE);break;case Ro:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Co:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ro:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Co:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}m=null,E=null,T=null,U=null,w.set(0,0,0),b=0,x=P,L=kt}return}it=it||st,at=at||G,zt=zt||K,(st!==d||it!==S)&&(i.blendEquationSeparate(Zt[st],Zt[it]),d=st,S=it),(G!==m||K!==E||at!==T||zt!==U)&&(i.blendFuncSeparate(Bt[G],Bt[K],Bt[at],Bt[zt]),m=G,E=K,T=at,U=zt),(ue.equals(w)===!1||Ae!==b)&&(i.blendColor(ue.r,ue.g,ue.b,Ae),w.copy(ue),b=Ae),x=P,L=!1}function Le(P,st){P.side===gn?ht(i.CULL_FACE):gt(i.CULL_FACE);let G=P.side===Pe;st&&(G=!G),Nt(G),P.blending===Ai&&P.transparent===!1?C(Ln):C(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),r.setMask(P.colorWrite);const K=P.stencilWrite;a.setTest(K),K&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ie(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?gt(i.SAMPLE_ALPHA_TO_COVERAGE):ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(P){W!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),W=P)}function Ht(P){P!==zl?(gt(i.CULL_FACE),P!==_&&(P===bo?i.cullFace(i.BACK):P===Hl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ht(i.CULL_FACE),_=P}function bt(P){P!==y&&($&&i.lineWidth(P),y=P)}function ie(P,st,G){P?(gt(i.POLYGON_OFFSET_FILL),(B!==st||z!==G)&&(i.polygonOffset(st,G),B=st,z=G)):ht(i.POLYGON_OFFSET_FILL)}function Ct(P){P?gt(i.SCISSOR_TEST):ht(i.SCISSOR_TEST)}function A(P){P===void 0&&(P=i.TEXTURE0+k-1),V!==P&&(i.activeTexture(P),V=P)}function v(P,st,G){G===void 0&&(V===null?G=i.TEXTURE0+k-1:G=V);let K=ct[G];K===void 0&&(K={type:void 0,texture:void 0},ct[G]=K),(K.type!==P||K.texture!==st)&&(V!==G&&(i.activeTexture(G),V=G),i.bindTexture(P,st||j[P]),K.type=P,K.texture=st)}function N(){const P=ct[V];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xt(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function nt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Gt(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ft(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function wt(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Rt(P){Vt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Vt.copy(P))}function pt(P){Kt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Kt.copy(P))}function Ft(P,st){let G=c.get(st);G===void 0&&(G=new WeakMap,c.set(st,G));let K=G.get(P);K===void 0&&(K=i.getUniformBlockIndex(st,P.name),G.set(P,K))}function Lt(P,st){const K=c.get(st).get(P);o.get(st)!==K&&(i.uniformBlockBinding(st,K,P.__bindingPointIndex),o.set(st,K))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},V=null,ct={},h={},f=new WeakMap,u=[],p=null,g=!1,x=null,d=null,m=null,E=null,S=null,T=null,U=null,w=new Ut(0,0,0),b=0,L=!1,W=null,_=null,y=null,B=null,z=null,Vt.set(0,0,i.canvas.width,i.canvas.height),Kt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:gt,disable:ht,bindFramebuffer:Pt,drawBuffers:Tt,useProgram:Ot,setBlending:C,setMaterial:Le,setFlipSided:Nt,setCullFace:Ht,setLineWidth:bt,setPolygonOffset:ie,setScissorTest:Ct,activeTexture:A,bindTexture:v,unbindTexture:N,compressedTexImage2D:Y,compressedTexImage3D:Z,texImage2D:ft,texImage3D:wt,updateUBOMapping:Ft,uniformBlockBinding:Lt,texStorage2D:Gt,texStorage3D:Q,texSubImage2D:q,texSubImage3D:xt,compressedTexSubImage2D:nt,compressedTexSubImage3D:ut,scissor:Rt,viewport:pt,reset:ne}}function xc(i,t,e,n){const r=Rm(n);switch(e){case Wc:return i*t;case qc:return i*t;case Yc:return i*t*2;case qa:return i*t/r.components*r.byteLength;case Ya:return i*t/r.components*r.byteLength;case Kc:return i*t*2/r.components*r.byteLength;case Ka:return i*t*2/r.components*r.byteLength;case Xc:return i*t*3/r.components*r.byteLength;case je:return i*t*4/r.components*r.byteLength;case $a:return i*t*4/r.components*r.byteLength;case zr:case Hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Gr:case Vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case da:case pa:return Math.max(i,16)*Math.max(t,8)/4;case ua:case fa:return Math.max(i,8)*Math.max(t,8)/2;case ma:case ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ma:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Sa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ya:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ea:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Aa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ba:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case wa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Pa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case La:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case kr:case Da:case Ia:return Math.ceil(i/4)*Math.ceil(t/4)*16;case $c:case Ua:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Na:case Fa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Rm(i){switch(i){case Mn:case Gc:return{byteLength:1,components:1};case er:case Vc:case rr:return{byteLength:2,components:1};case Wa:case Xa:return{byteLength:2,components:4};case ti:case ka:case sn:return{byteLength:4,components:1};case kc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Cm(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new dt,h=new WeakMap;let f;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,v){return p?new OffscreenCanvas(A,v):Jr("canvas")}function x(A,v,N){let Y=1;const Z=Ct(A);if((Z.width>N||Z.height>N)&&(Y=N/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const q=Math.floor(Y*Z.width),xt=Math.floor(Y*Z.height);f===void 0&&(f=g(q,xt));const nt=v?g(q,xt):f;return nt.width=q,nt.height=xt,nt.getContext("2d").drawImage(A,0,0,q,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+q+"x"+xt+")."),nt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function d(A){return A.generateMipmaps&&A.minFilter!==Re&&A.minFilter!==Je}function m(A){i.generateMipmap(A)}function E(A,v,N,Y,Z=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=v;if(v===i.RED&&(N===i.FLOAT&&(q=i.R32F),N===i.HALF_FLOAT&&(q=i.R16F),N===i.UNSIGNED_BYTE&&(q=i.R8)),v===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.R8UI),N===i.UNSIGNED_SHORT&&(q=i.R16UI),N===i.UNSIGNED_INT&&(q=i.R32UI),N===i.BYTE&&(q=i.R8I),N===i.SHORT&&(q=i.R16I),N===i.INT&&(q=i.R32I)),v===i.RG&&(N===i.FLOAT&&(q=i.RG32F),N===i.HALF_FLOAT&&(q=i.RG16F),N===i.UNSIGNED_BYTE&&(q=i.RG8)),v===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.RG8UI),N===i.UNSIGNED_SHORT&&(q=i.RG16UI),N===i.UNSIGNED_INT&&(q=i.RG32UI),N===i.BYTE&&(q=i.RG8I),N===i.SHORT&&(q=i.RG16I),N===i.INT&&(q=i.RG32I)),v===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.RGB8UI),N===i.UNSIGNED_SHORT&&(q=i.RGB16UI),N===i.UNSIGNED_INT&&(q=i.RGB32UI),N===i.BYTE&&(q=i.RGB8I),N===i.SHORT&&(q=i.RGB16I),N===i.INT&&(q=i.RGB32I)),v===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),N===i.UNSIGNED_INT&&(q=i.RGBA32UI),N===i.BYTE&&(q=i.RGBA8I),N===i.SHORT&&(q=i.RGBA16I),N===i.INT&&(q=i.RGBA32I)),v===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),v===i.RGBA){const xt=Z?qr:Yt.getTransfer(Y);N===i.FLOAT&&(q=i.RGBA32F),N===i.HALF_FLOAT&&(q=i.RGBA16F),N===i.UNSIGNED_BYTE&&(q=xt===se?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function S(A,v){let N;return A?v===null||v===ti||v===Di?N=i.DEPTH24_STENCIL8:v===sn?N=i.DEPTH32F_STENCIL8:v===er&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ti||v===Di?N=i.DEPTH_COMPONENT24:v===sn?N=i.DEPTH_COMPONENT32F:v===er&&(N=i.DEPTH_COMPONENT16),N}function T(A,v){return d(A)===!0||A.isFramebufferTexture&&A.minFilter!==Re&&A.minFilter!==Je?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function U(A){const v=A.target;v.removeEventListener("dispose",U),b(v),v.isVideoTexture&&h.delete(v)}function w(A){const v=A.target;v.removeEventListener("dispose",w),W(v)}function b(A){const v=n.get(A);if(v.__webglInit===void 0)return;const N=A.source,Y=u.get(N);if(Y){const Z=Y[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&L(A),Object.keys(Y).length===0&&u.delete(N)}n.remove(A)}function L(A){const v=n.get(A);i.deleteTexture(v.__webglTexture);const N=A.source,Y=u.get(N);delete Y[v.__cacheKey],a.memory.textures--}function W(A){const v=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let Z=0;Z<v.__webglFramebuffer[Y].length;Z++)i.deleteFramebuffer(v.__webglFramebuffer[Y][Z]);else i.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)i.deleteFramebuffer(v.__webglFramebuffer[Y]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const N=A.textures;for(let Y=0,Z=N.length;Y<Z;Y++){const q=n.get(N[Y]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(N[Y])}n.remove(A)}let _=0;function y(){_=0}function B(){const A=_;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),_+=1,A}function z(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function k(A,v){const N=n.get(A);if(A.isVideoTexture&&bt(A),A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){const Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Kt(N,A,v);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+v)}function $(A,v){const N=n.get(A);if(A.version>0&&N.__version!==A.version){Kt(N,A,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+v)}function H(A,v){const N=n.get(A);if(A.version>0&&N.__version!==A.version){Kt(N,A,v);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+v)}function J(A,v){const N=n.get(A);if(A.version>0&&N.__version!==A.version){X(N,A,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+v)}const V={[la]:i.REPEAT,[jn]:i.CLAMP_TO_EDGE,[ha]:i.MIRRORED_REPEAT},ct={[Re]:i.NEAREST,[fh]:i.NEAREST_MIPMAP_NEAREST,[fr]:i.NEAREST_MIPMAP_LINEAR,[Je]:i.LINEAR,[ms]:i.LINEAR_MIPMAP_NEAREST,[Qn]:i.LINEAR_MIPMAP_LINEAR},lt={[_h]:i.NEVER,[Eh]:i.ALWAYS,[vh]:i.LESS,[Zc]:i.LEQUAL,[xh]:i.EQUAL,[yh]:i.GEQUAL,[Mh]:i.GREATER,[Sh]:i.NOTEQUAL};function vt(A,v){if(v.type===sn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Je||v.magFilter===ms||v.magFilter===fr||v.magFilter===Qn||v.minFilter===Je||v.minFilter===ms||v.minFilter===fr||v.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,V[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,V[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,V[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ct[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ct[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,lt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Re||v.minFilter!==fr&&v.minFilter!==Qn||v.type===sn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Vt(A,v){let N=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",U));const Y=v.source;let Z=u.get(Y);Z===void 0&&(Z={},u.set(Y,Z));const q=z(v);if(q!==A.__cacheKey){Z[q]===void 0&&(Z[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Z[q].usedTimes++;const xt=Z[A.__cacheKey];xt!==void 0&&(Z[A.__cacheKey].usedTimes--,xt.usedTimes===0&&L(v)),A.__cacheKey=q,A.__webglTexture=Z[q].texture}return N}function Kt(A,v,N){let Y=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=i.TEXTURE_3D);const Z=Vt(A,v),q=v.source;e.bindTexture(Y,A.__webglTexture,i.TEXTURE0+N);const xt=n.get(q);if(q.version!==xt.__version||Z===!0){e.activeTexture(i.TEXTURE0+N);const nt=Yt.getPrimaries(Yt.workingColorSpace),ut=v.colorSpace===Pn?null:Yt.getPrimaries(v.colorSpace),Gt=v.colorSpace===Pn||nt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let Q=x(v.image,!1,r.maxTextureSize);Q=ie(v,Q);const ft=s.convert(v.format,v.colorSpace),wt=s.convert(v.type);let Rt=E(v.internalFormat,ft,wt,v.colorSpace,v.isVideoTexture);vt(Y,v);let pt;const Ft=v.mipmaps,Lt=v.isVideoTexture!==!0,ne=xt.__version===void 0||Z===!0,P=q.dataReady,st=T(v,Q);if(v.isDepthTexture)Rt=S(v.format===Ii,v.type),ne&&(Lt?e.texStorage2D(i.TEXTURE_2D,1,Rt,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,Rt,Q.width,Q.height,0,ft,wt,null));else if(v.isDataTexture)if(Ft.length>0){Lt&&ne&&e.texStorage2D(i.TEXTURE_2D,st,Rt,Ft[0].width,Ft[0].height);for(let G=0,K=Ft.length;G<K;G++)pt=Ft[G],Lt?P&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,pt.width,pt.height,ft,wt,pt.data):e.texImage2D(i.TEXTURE_2D,G,Rt,pt.width,pt.height,0,ft,wt,pt.data);v.generateMipmaps=!1}else Lt?(ne&&e.texStorage2D(i.TEXTURE_2D,st,Rt,Q.width,Q.height),P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,ft,wt,Q.data)):e.texImage2D(i.TEXTURE_2D,0,Rt,Q.width,Q.height,0,ft,wt,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Lt&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,Rt,Ft[0].width,Ft[0].height,Q.depth);for(let G=0,K=Ft.length;G<K;G++)if(pt=Ft[G],v.format!==je)if(ft!==null)if(Lt){if(P)if(v.layerUpdates.size>0){const it=xc(pt.width,pt.height,v.format,v.type);for(const at of v.layerUpdates){const zt=pt.data.subarray(at*it/pt.data.BYTES_PER_ELEMENT,(at+1)*it/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,at,pt.width,pt.height,1,ft,zt,0,0)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,pt.width,pt.height,Q.depth,ft,pt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,Rt,pt.width,pt.height,Q.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?P&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,pt.width,pt.height,Q.depth,ft,wt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,G,Rt,pt.width,pt.height,Q.depth,0,ft,wt,pt.data)}else{Lt&&ne&&e.texStorage2D(i.TEXTURE_2D,st,Rt,Ft[0].width,Ft[0].height);for(let G=0,K=Ft.length;G<K;G++)pt=Ft[G],v.format!==je?ft!==null?Lt?P&&e.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,G,Rt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?P&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,pt.width,pt.height,ft,wt,pt.data):e.texImage2D(i.TEXTURE_2D,G,Rt,pt.width,pt.height,0,ft,wt,pt.data)}else if(v.isDataArrayTexture)if(Lt){if(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,Rt,Q.width,Q.height,Q.depth),P)if(v.layerUpdates.size>0){const G=xc(Q.width,Q.height,v.format,v.type);for(const K of v.layerUpdates){const it=Q.data.subarray(K*G/Q.data.BYTES_PER_ELEMENT,(K+1)*G/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,ft,wt,it)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ft,wt,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,Q.width,Q.height,Q.depth,0,ft,wt,Q.data);else if(v.isData3DTexture)Lt?(ne&&e.texStorage3D(i.TEXTURE_3D,st,Rt,Q.width,Q.height,Q.depth),P&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ft,wt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,Q.width,Q.height,Q.depth,0,ft,wt,Q.data);else if(v.isFramebufferTexture){if(ne)if(Lt)e.texStorage2D(i.TEXTURE_2D,st,Rt,Q.width,Q.height);else{let G=Q.width,K=Q.height;for(let it=0;it<st;it++)e.texImage2D(i.TEXTURE_2D,it,Rt,G,K,0,ft,wt,null),G>>=1,K>>=1}}else if(Ft.length>0){if(Lt&&ne){const G=Ct(Ft[0]);e.texStorage2D(i.TEXTURE_2D,st,Rt,G.width,G.height)}for(let G=0,K=Ft.length;G<K;G++)pt=Ft[G],Lt?P&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,ft,wt,pt):e.texImage2D(i.TEXTURE_2D,G,Rt,ft,wt,pt);v.generateMipmaps=!1}else if(Lt){if(ne){const G=Ct(Q);e.texStorage2D(i.TEXTURE_2D,st,Rt,G.width,G.height)}P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,wt,Q)}else e.texImage2D(i.TEXTURE_2D,0,Rt,ft,wt,Q);d(v)&&m(Y),xt.__version=q.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function X(A,v,N){if(v.image.length!==6)return;const Y=Vt(A,v),Z=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+N);const q=n.get(Z);if(Z.version!==q.__version||Y===!0){e.activeTexture(i.TEXTURE0+N);const xt=Yt.getPrimaries(Yt.workingColorSpace),nt=v.colorSpace===Pn?null:Yt.getPrimaries(v.colorSpace),ut=v.colorSpace===Pn||xt===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Gt=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,ft=[];for(let K=0;K<6;K++)!Gt&&!Q?ft[K]=x(v.image[K],!0,r.maxCubemapSize):ft[K]=Q?v.image[K].image:v.image[K],ft[K]=ie(v,ft[K]);const wt=ft[0],Rt=s.convert(v.format,v.colorSpace),pt=s.convert(v.type),Ft=E(v.internalFormat,Rt,pt,v.colorSpace),Lt=v.isVideoTexture!==!0,ne=q.__version===void 0||Y===!0,P=Z.dataReady;let st=T(v,wt);vt(i.TEXTURE_CUBE_MAP,v);let G;if(Gt){Lt&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,st,Ft,wt.width,wt.height);for(let K=0;K<6;K++){G=ft[K].mipmaps;for(let it=0;it<G.length;it++){const at=G[it];v.format!==je?Rt!==null?Lt?P&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,it,0,0,at.width,at.height,Rt,at.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,it,Ft,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,it,0,0,at.width,at.height,Rt,pt,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,it,Ft,at.width,at.height,0,Rt,pt,at.data)}}}else{if(G=v.mipmaps,Lt&&ne){G.length>0&&st++;const K=Ct(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,st,Ft,K.width,K.height)}for(let K=0;K<6;K++)if(Q){Lt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ft[K].width,ft[K].height,Rt,pt,ft[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ft,ft[K].width,ft[K].height,0,Rt,pt,ft[K].data);for(let it=0;it<G.length;it++){const zt=G[it].image[K].image;Lt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,it+1,0,0,zt.width,zt.height,Rt,pt,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,it+1,Ft,zt.width,zt.height,0,Rt,pt,zt.data)}}else{Lt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Rt,pt,ft[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ft,Rt,pt,ft[K]);for(let it=0;it<G.length;it++){const at=G[it];Lt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,it+1,0,0,Rt,pt,at.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,it+1,Ft,Rt,pt,at.image[K])}}}d(v)&&m(i.TEXTURE_CUBE_MAP),q.__version=Z.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function j(A,v,N,Y,Z,q){const xt=s.convert(N.format,N.colorSpace),nt=s.convert(N.type),ut=E(N.internalFormat,xt,nt,N.colorSpace);if(!n.get(v).__hasExternalTextures){const Q=Math.max(1,v.width>>q),ft=Math.max(1,v.height>>q);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,q,ut,Q,ft,v.depth,0,xt,nt,null):e.texImage2D(Z,q,ut,Q,ft,0,xt,nt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Ht(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Z,n.get(N).__webglTexture,0,Nt(v)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Z,n.get(N).__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(A,v,N){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){const Y=v.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,q=S(v.stencilBuffer,Z),xt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=Nt(v);Ht(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,q,v.width,v.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,q,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,A)}else{const Y=v.textures;for(let Z=0;Z<Y.length;Z++){const q=Y[Z],xt=s.convert(q.format,q.colorSpace),nt=s.convert(q.type),ut=E(q.internalFormat,xt,nt,q.colorSpace),Gt=Nt(v);N&&Ht(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,ut,v.width,v.height):Ht(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,ut,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ut,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),k(v.depthTexture,0);const Y=n.get(v.depthTexture).__webglTexture,Z=Nt(v);if(v.depthTexture.format===bi)Ht(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0);else if(v.depthTexture.format===Ii)Ht(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Pt(A){const v=n.get(A),N=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const Y=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=Y}if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");ht(v.__webglFramebuffer,A)}else if(N){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=i.createRenderbuffer(),gt(v.__webglDepthbuffer[Y],A,!1);else{const Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),gt(v.__webglDepthbuffer,A,!1);else{const Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,Z)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(A,v,N){const Y=n.get(A);v!==void 0&&j(Y.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Pt(A)}function Ot(A){const v=A.texture,N=n.get(A),Y=n.get(v);A.addEventListener("dispose",w);const Z=A.textures,q=A.isWebGLCubeRenderTarget===!0,xt=Z.length>1;if(xt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=v.version,a.memory.textures++),q){N.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[nt]=[];for(let ut=0;ut<v.mipmaps.length;ut++)N.__webglFramebuffer[nt][ut]=i.createFramebuffer()}else N.__webglFramebuffer[nt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let nt=0;nt<v.mipmaps.length;nt++)N.__webglFramebuffer[nt]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(xt)for(let nt=0,ut=Z.length;nt<ut;nt++){const Gt=n.get(Z[nt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Ht(A)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let nt=0;nt<Z.length;nt++){const ut=Z[nt];N.__webglColorRenderbuffer[nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[nt]);const Gt=s.convert(ut.format,ut.colorSpace),Q=s.convert(ut.type),ft=E(ut.internalFormat,Gt,Q,ut.colorSpace,A.isXRRenderTarget===!0),wt=Nt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,ft,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,N.__webglColorRenderbuffer[nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),gt(N.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),vt(i.TEXTURE_CUBE_MAP,v);for(let nt=0;nt<6;nt++)if(v.mipmaps&&v.mipmaps.length>0)for(let ut=0;ut<v.mipmaps.length;ut++)j(N.__webglFramebuffer[nt][ut],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ut);else j(N.__webglFramebuffer[nt],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);d(v)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let nt=0,ut=Z.length;nt<ut;nt++){const Gt=Z[nt],Q=n.get(Gt);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),vt(i.TEXTURE_2D,Gt),j(N.__webglFramebuffer,A,Gt,i.COLOR_ATTACHMENT0+nt,i.TEXTURE_2D,0),d(Gt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let nt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(nt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(nt,Y.__webglTexture),vt(nt,v),v.mipmaps&&v.mipmaps.length>0)for(let ut=0;ut<v.mipmaps.length;ut++)j(N.__webglFramebuffer[ut],A,v,i.COLOR_ATTACHMENT0,nt,ut);else j(N.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,nt,0);d(v)&&m(nt),e.unbindTexture()}A.depthBuffer&&Pt(A)}function Zt(A){const v=A.textures;for(let N=0,Y=v.length;N<Y;N++){const Z=v[N];if(d(Z)){const q=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,xt=n.get(Z).__webglTexture;e.bindTexture(q,xt),m(q),e.unbindTexture()}}}const Bt=[],C=[];function Le(A){if(A.samples>0){if(Ht(A)===!1){const v=A.textures,N=A.width,Y=A.height;let Z=i.COLOR_BUFFER_BIT;const q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(A),nt=v.length>1;if(nt)for(let ut=0;ut<v.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ut=0;ut<v.length;ut++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),nt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[ut]);const Gt=n.get(v[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,N,Y,0,0,N,Y,Z,i.NEAREST),c===!0&&(Bt.length=0,C.length=0,Bt.push(i.COLOR_ATTACHMENT0+ut),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Bt.push(q),C.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Bt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),nt)for(let ut=0;ut<v.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,xt.__webglColorRenderbuffer[ut]);const Gt=n.get(v[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Nt(A){return Math.min(r.maxSamples,A.samples)}function Ht(A){const v=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function bt(A){const v=a.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function ie(A,v){const N=A.colorSpace,Y=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||N!==Bn&&N!==Pn&&(Yt.getTransfer(N)===se?(Y!==je||Z!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}function Ct(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=y,this.setTexture2D=k,this.setTexture2DArray=$,this.setTexture3D=H,this.setTextureCube=J,this.rebindTextures=Tt,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=j,this.useMultisampledRTT=Ht}function Pm(i,t){function e(n,r=Pn){let s;const a=Yt.getTransfer(r);if(n===Mn)return i.UNSIGNED_BYTE;if(n===Wa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===kc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gc)return i.BYTE;if(n===Vc)return i.SHORT;if(n===er)return i.UNSIGNED_SHORT;if(n===ka)return i.INT;if(n===ti)return i.UNSIGNED_INT;if(n===sn)return i.FLOAT;if(n===rr)return i.HALF_FLOAT;if(n===Wc)return i.ALPHA;if(n===Xc)return i.RGB;if(n===je)return i.RGBA;if(n===qc)return i.LUMINANCE;if(n===Yc)return i.LUMINANCE_ALPHA;if(n===bi)return i.DEPTH_COMPONENT;if(n===Ii)return i.DEPTH_STENCIL;if(n===qa)return i.RED;if(n===Ya)return i.RED_INTEGER;if(n===Kc)return i.RG;if(n===Ka)return i.RG_INTEGER;if(n===$a)return i.RGBA_INTEGER;if(n===zr||n===Hr||n===Gr||n===Vr)if(a===se)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===zr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===zr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ua||n===da||n===fa||n===pa)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ua)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===da)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ma||n===ga||n===_a)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ma||n===ga)return a===se?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===_a)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===va||n===xa||n===Ma||n===Sa||n===ya||n===Ea||n===Ta||n===Aa||n===ba||n===wa||n===Ra||n===Ca||n===Pa||n===La)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===va)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xa)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ma)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sa)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ya)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ea)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ta)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Aa)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ba)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wa)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ra)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ca)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pa)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===La)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===kr||n===Da||n===Ia)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===kr)return a===se?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Da)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ia)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$c||n===Ua||n===Na||n===Fa)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===kr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ua)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Na)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Di?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Lm extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class vn extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dm={type:"move"};class Xs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const x of t.hand.values()){const d=e.getJointPose(x,n),m=this._getHandJoint(l,x);d!==null&&(m.matrix.fromArray(d.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=d.radius),m.visible=d!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,g=.005;l.inputState.pinching&&u>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dm)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new vn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Im=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Um=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Nm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Te,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Nn({vertexShader:Im,fragmentShader:Um,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new te(new rs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fm extends Oi{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,u=null,p=null,g=null;const x=new Nm,d=e.getContextAttributes();let m=null,E=null;const S=[],T=[],U=new dt;let w=null;const b=new Oe;b.layers.enable(1),b.viewport=new Qt;const L=new Oe;L.layers.enable(2),L.viewport=new Qt;const W=[b,L],_=new Lm;_.layers.enable(1),_.layers.enable(2);let y=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let j=S[X];return j===void 0&&(j=new Xs,S[X]=j),j.getTargetRaySpace()},this.getControllerGrip=function(X){let j=S[X];return j===void 0&&(j=new Xs,S[X]=j),j.getGripSpace()},this.getHand=function(X){let j=S[X];return j===void 0&&(j=new Xs,S[X]=j),j.getHandSpace()};function z(X){const j=T.indexOf(X.inputSource);if(j===-1)return;const gt=S[j];gt!==void 0&&(gt.update(X.inputSource,X.frame,l||a),gt.dispatchEvent({type:X.type,data:X.inputSource}))}function k(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",$);for(let X=0;X<S.length;X++){const j=T[X];j!==null&&(T[X]=null,S[X].disconnect(j))}y=null,B=null,x.reset(),t.setRenderTarget(m),p=null,u=null,f=null,r=null,E=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",k),r.addEventListener("inputsourceschange",$),d.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(U),r.renderState.layers===void 0){const j={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,j),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new ei(p.framebufferWidth,p.framebufferHeight,{format:je,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let j=null,gt=null,ht=null;d.depth&&(ht=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=d.stencil?Ii:bi,gt=d.stencil?Di:ti);const Pt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:s};f=new XRWebGLBinding(r,e),u=f.createProjectionLayer(Pt),r.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),E=new ei(u.textureWidth,u.textureHeight,{format:je,type:Mn,depthTexture:new ul(u.textureWidth,u.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Kt.setContext(r),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function $(X){for(let j=0;j<X.removed.length;j++){const gt=X.removed[j],ht=T.indexOf(gt);ht>=0&&(T[ht]=null,S[ht].disconnect(gt))}for(let j=0;j<X.added.length;j++){const gt=X.added[j];let ht=T.indexOf(gt);if(ht===-1){for(let Tt=0;Tt<S.length;Tt++)if(Tt>=T.length){T.push(gt),ht=Tt;break}else if(T[Tt]===null){T[Tt]=gt,ht=Tt;break}if(ht===-1)break}const Pt=S[ht];Pt&&Pt.connect(gt)}}const H=new R,J=new R;function V(X,j,gt){H.setFromMatrixPosition(j.matrixWorld),J.setFromMatrixPosition(gt.matrixWorld);const ht=H.distanceTo(J),Pt=j.projectionMatrix.elements,Tt=gt.projectionMatrix.elements,Ot=Pt[14]/(Pt[10]-1),Zt=Pt[14]/(Pt[10]+1),Bt=(Pt[9]+1)/Pt[5],C=(Pt[9]-1)/Pt[5],Le=(Pt[8]-1)/Pt[0],Nt=(Tt[8]+1)/Tt[0],Ht=Ot*Le,bt=Ot*Nt,ie=ht/(-Le+Nt),Ct=ie*-Le;if(j.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ct),X.translateZ(ie),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Pt[10]===-1)X.projectionMatrix.copy(j.projectionMatrix),X.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const A=Ot+ie,v=Zt+ie,N=Ht-Ct,Y=bt+(ht-Ct),Z=Bt*Zt/v*A,q=C*Zt/v*A;X.projectionMatrix.makePerspective(N,Y,Z,q,A,v),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ct(X,j){j===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(j.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let j=X.near,gt=X.far;x.texture!==null&&(x.depthNear>0&&(j=x.depthNear),x.depthFar>0&&(gt=x.depthFar)),_.near=L.near=b.near=j,_.far=L.far=b.far=gt,(y!==_.near||B!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),y=_.near,B=_.far);const ht=X.parent,Pt=_.cameras;ct(_,ht);for(let Tt=0;Tt<Pt.length;Tt++)ct(Pt[Tt],ht);Pt.length===2?V(_,b,L):_.projectionMatrix.copy(b.projectionMatrix),lt(X,_,ht)};function lt(X,j,gt){gt===null?X.matrix.copy(j.matrixWorld):(X.matrix.copy(gt.matrixWorld),X.matrix.invert(),X.matrix.multiply(j.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(j.projectionMatrix),X.projectionMatrixInverse.copy(j.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Oa*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(X){c=X,u!==null&&(u.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let vt=null;function Vt(X,j){if(h=j.getViewerPose(l||a),g=j,h!==null){const gt=h.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let ht=!1;gt.length!==_.cameras.length&&(_.cameras.length=0,ht=!0);for(let Tt=0;Tt<gt.length;Tt++){const Ot=gt[Tt];let Zt=null;if(p!==null)Zt=p.getViewport(Ot);else{const C=f.getViewSubImage(u,Ot);Zt=C.viewport,Tt===0&&(t.setRenderTargetTextures(E,C.colorTexture,u.ignoreDepthValues?void 0:C.depthStencilTexture),t.setRenderTarget(E))}let Bt=W[Tt];Bt===void 0&&(Bt=new Oe,Bt.layers.enable(Tt),Bt.viewport=new Qt,W[Tt]=Bt),Bt.matrix.fromArray(Ot.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(Ot.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(Zt.x,Zt.y,Zt.width,Zt.height),Tt===0&&(_.matrix.copy(Bt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ht===!0&&_.cameras.push(Bt)}const Pt=r.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){const Tt=f.getDepthInformation(gt[0]);Tt&&Tt.isValid&&Tt.texture&&x.init(t,Tt,r.renderState)}}for(let gt=0;gt<S.length;gt++){const ht=T[gt],Pt=S[gt];ht!==null&&Pt!==void 0&&Pt.update(ht,j,l||a)}vt&&vt(X,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const Kt=new ll;Kt.setAnimationLoop(Vt),this.setAnimationLoop=function(X){vt=X},this.dispose=function(){}}}const Xn=new an,Om=new ee;function Bm(i,t){function e(d,m){d.matrixAutoUpdate===!0&&d.updateMatrix(),m.value.copy(d.matrix)}function n(d,m){m.color.getRGB(d.fogColor.value,al(i)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function r(d,m,E,S,T){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(d,m):m.isMeshToonMaterial?(s(d,m),f(d,m)):m.isMeshPhongMaterial?(s(d,m),h(d,m)):m.isMeshStandardMaterial?(s(d,m),u(d,m),m.isMeshPhysicalMaterial&&p(d,m,T)):m.isMeshMatcapMaterial?(s(d,m),g(d,m)):m.isMeshDepthMaterial?s(d,m):m.isMeshDistanceMaterial?(s(d,m),x(d,m)):m.isMeshNormalMaterial?s(d,m):m.isLineBasicMaterial?(a(d,m),m.isLineDashedMaterial&&o(d,m)):m.isPointsMaterial?c(d,m,E,S):m.isSpriteMaterial?l(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map,e(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.bumpMap&&(d.bumpMap.value=m.bumpMap,e(m.bumpMap,d.bumpMapTransform),d.bumpScale.value=m.bumpScale,m.side===Pe&&(d.bumpScale.value*=-1)),m.normalMap&&(d.normalMap.value=m.normalMap,e(m.normalMap,d.normalMapTransform),d.normalScale.value.copy(m.normalScale),m.side===Pe&&d.normalScale.value.negate()),m.displacementMap&&(d.displacementMap.value=m.displacementMap,e(m.displacementMap,d.displacementMapTransform),d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,d.emissiveMapTransform)),m.specularMap&&(d.specularMap.value=m.specularMap,e(m.specularMap,d.specularMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const E=t.get(m),S=E.envMap,T=E.envMapRotation;S&&(d.envMap.value=S,Xn.copy(T),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),d.envMapRotation.value.setFromMatrix4(Om.makeRotationFromEuler(Xn)),d.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap&&(d.lightMap.value=m.lightMap,d.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,d.lightMapTransform)),m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,d.aoMapTransform))}function a(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,m.map&&(d.map.value=m.map,e(m.map,d.mapTransform))}function o(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function c(d,m,E,S){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*E,d.scale.value=S*.5,m.map&&(d.map.value=m.map,e(m.map,d.uvTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function l(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map,e(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function h(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function f(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function u(d,m){d.metalness.value=m.metalness,m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,d.metalnessMapTransform)),d.roughness.value=m.roughness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,d.roughnessMapTransform)),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function p(d,m,E){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,d.sheenColorMapTransform)),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,d.sheenRoughnessMapTransform))),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,d.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(d.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Pe&&d.clearcoatNormalScale.value.negate())),m.dispersion>0&&(d.dispersion.value=m.dispersion),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,d.iridescenceMapTransform)),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=E.texture,d.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,d.transmissionMapTransform)),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(d.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(d.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,d.specularColorMapTransform)),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,m){m.matcap&&(d.matcap.value=m.matcap)}function x(d,m){const E=t.get(m).light;d.referencePosition.value.setFromMatrixPosition(E.matrixWorld),d.nearDistance.value=E.shadow.camera.near,d.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function zm(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,S){const T=S.program;n.uniformBlockBinding(E,T)}function l(E,S){let T=r[E.id];T===void 0&&(g(E),T=h(E),r[E.id]=T,E.addEventListener("dispose",d));const U=S.program;n.updateUBOMapping(E,U);const w=t.render.frame;s[E.id]!==w&&(u(E),s[E.id]=w)}function h(E){const S=f();E.__bindingPointIndex=S;const T=i.createBuffer(),U=E.__size,w=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,U,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,T),T}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(E){const S=r[E.id],T=E.uniforms,U=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let w=0,b=T.length;w<b;w++){const L=Array.isArray(T[w])?T[w]:[T[w]];for(let W=0,_=L.length;W<_;W++){const y=L[W];if(p(y,w,W,U)===!0){const B=y.__offset,z=Array.isArray(y.value)?y.value:[y.value];let k=0;for(let $=0;$<z.length;$++){const H=z[$],J=x(H);typeof H=="number"||typeof H=="boolean"?(y.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,B+k,y.__data)):H.isMatrix3?(y.__data[0]=H.elements[0],y.__data[1]=H.elements[1],y.__data[2]=H.elements[2],y.__data[3]=0,y.__data[4]=H.elements[3],y.__data[5]=H.elements[4],y.__data[6]=H.elements[5],y.__data[7]=0,y.__data[8]=H.elements[6],y.__data[9]=H.elements[7],y.__data[10]=H.elements[8],y.__data[11]=0):(H.toArray(y.__data,k),k+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,y.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,S,T,U){const w=E.value,b=S+"_"+T;if(U[b]===void 0)return typeof w=="number"||typeof w=="boolean"?U[b]=w:U[b]=w.clone(),!0;{const L=U[b];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return U[b]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function g(E){const S=E.uniforms;let T=0;const U=16;for(let b=0,L=S.length;b<L;b++){const W=Array.isArray(S[b])?S[b]:[S[b]];for(let _=0,y=W.length;_<y;_++){const B=W[_],z=Array.isArray(B.value)?B.value:[B.value];for(let k=0,$=z.length;k<$;k++){const H=z[k],J=x(H),V=T%U,ct=V%J.boundary,lt=V+ct;T+=ct,lt!==0&&U-lt<J.storage&&(T+=U-lt),B.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=T,T+=J.storage}}}const w=T%U;return w>0&&(T+=U-w),E.__size=T,E.__cache={},this}function x(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function d(E){const S=E.target;S.removeEventListener("dispose",d);const T=a.indexOf(S.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function m(){for(const E in r)i.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:c,update:l,dispose:m}}class Hm{constructor(t={}){const{canvas:e=Ah(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const p=new Uint32Array(4),g=new Int32Array(4);let x=null,d=null;const m=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$e,this.toneMapping=Dn,this.toneMappingExposure=1;const S=this;let T=!1,U=0,w=0,b=null,L=-1,W=null;const _=new Qt,y=new Qt;let B=null;const z=new Ut(0);let k=0,$=e.width,H=e.height,J=1,V=null,ct=null;const lt=new Qt(0,0,$,H),vt=new Qt(0,0,$,H);let Vt=!1;const Kt=new Za;let X=!1,j=!1;const gt=new ee,ht=new ee,Pt=new R,Tt=new Qt,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Zt=!1;function Bt(){return b===null?J:1}let C=n;function Le(M,D){return e.getContext(M,D)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Va}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",it,!1),e.addEventListener("webglcontextcreationerror",at,!1),C===null){const D="webgl2";if(C=Le(D,M),C===null)throw Le(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Nt,Ht,bt,ie,Ct,A,v,N,Y,Z,q,xt,nt,ut,Gt,Q,ft,wt,Rt,pt,Ft,Lt,ne,P;function st(){Nt=new Xf(C),Nt.init(),Lt=new Pm(C,Nt),Ht=new zf(C,Nt,t,Lt),bt=new wm(C),Ht.reverseDepthBuffer&&bt.buffers.depth.setReversed(!0),ie=new Kf(C),Ct=new dm,A=new Cm(C,Nt,bt,Ct,Ht,Lt,ie),v=new Gf(S),N=new Wf(S),Y=new tu(C),ne=new Of(C,Y),Z=new qf(C,Y,ie,ne),q=new Jf(C,Z,Y,ie),Rt=new $f(C,Ht,A),Q=new Hf(Ct),xt=new um(S,v,N,Nt,Ht,ne,Q),nt=new Bm(S,Ct),ut=new pm,Gt=new Mm(Nt),wt=new Ff(S,v,N,bt,q,u,c),ft=new Am(S,q,Ht),P=new zm(C,ie,Ht,bt),pt=new Bf(C,Nt,ie),Ft=new Yf(C,Nt,ie),ie.programs=xt.programs,S.capabilities=Ht,S.extensions=Nt,S.properties=Ct,S.renderLists=ut,S.shadowMap=ft,S.state=bt,S.info=ie}st();const G=new Fm(S,C);this.xr=G,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const M=Nt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Nt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(M){M!==void 0&&(J=M,this.setSize($,H,!1))},this.getSize=function(M){return M.set($,H)},this.setSize=function(M,D,F=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=M,H=D,e.width=Math.floor(M*J),e.height=Math.floor(D*J),F===!0&&(e.style.width=M+"px",e.style.height=D+"px"),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set($*J,H*J).floor()},this.setDrawingBufferSize=function(M,D,F){$=M,H=D,J=F,e.width=Math.floor(M*F),e.height=Math.floor(D*F),this.setViewport(0,0,M,D)},this.getCurrentViewport=function(M){return M.copy(_)},this.getViewport=function(M){return M.copy(lt)},this.setViewport=function(M,D,F,O){M.isVector4?lt.set(M.x,M.y,M.z,M.w):lt.set(M,D,F,O),bt.viewport(_.copy(lt).multiplyScalar(J).round())},this.getScissor=function(M){return M.copy(vt)},this.setScissor=function(M,D,F,O){M.isVector4?vt.set(M.x,M.y,M.z,M.w):vt.set(M,D,F,O),bt.scissor(y.copy(vt).multiplyScalar(J).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(M){bt.setScissorTest(Vt=M)},this.setOpaqueSort=function(M){V=M},this.setTransparentSort=function(M){ct=M},this.getClearColor=function(M){return M.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(M=!0,D=!0,F=!0){let O=0;if(M){let I=!1;if(b!==null){const tt=b.texture.format;I=tt===$a||tt===Ka||tt===Ya}if(I){const tt=b.texture.type,rt=tt===Mn||tt===ti||tt===er||tt===Di||tt===Wa||tt===Xa,mt=wt.getClearColor(),_t=wt.getClearAlpha(),Et=mt.r,At=mt.g,Mt=mt.b;rt?(p[0]=Et,p[1]=At,p[2]=Mt,p[3]=_t,C.clearBufferuiv(C.COLOR,0,p)):(g[0]=Et,g[1]=At,g[2]=Mt,g[3]=_t,C.clearBufferiv(C.COLOR,0,g))}else O|=C.COLOR_BUFFER_BIT}D&&(O|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),F&&(O|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",it,!1),e.removeEventListener("webglcontextcreationerror",at,!1),ut.dispose(),Gt.dispose(),Ct.dispose(),v.dispose(),N.dispose(),q.dispose(),ne.dispose(),P.dispose(),xt.dispose(),G.dispose(),G.removeEventListener("sessionstart",vo),G.removeEventListener("sessionend",xo),zn.stop()};function K(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function it(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const M=ie.autoReset,D=ft.enabled,F=ft.autoUpdate,O=ft.needsUpdate,I=ft.type;st(),ie.autoReset=M,ft.enabled=D,ft.autoUpdate=F,ft.needsUpdate=O,ft.type=I}function at(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function zt(M){const D=M.target;D.removeEventListener("dispose",zt),ue(D)}function ue(M){Ae(M),Ct.remove(M)}function Ae(M){const D=Ct.get(M).programs;D!==void 0&&(D.forEach(function(F){xt.releaseProgram(F)}),M.isShaderMaterial&&xt.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,F,O,I,tt){D===null&&(D=Ot);const rt=I.isMesh&&I.matrixWorld.determinant()<0,mt=Nl(M,D,F,O,I);bt.setMaterial(O,rt);let _t=F.index,Et=1;if(O.wireframe===!0){if(_t=Z.getWireframeAttribute(F),_t===void 0)return;Et=2}const At=F.drawRange,Mt=F.attributes.position;let $t=At.start*Et,re=(At.start+At.count)*Et;tt!==null&&($t=Math.max($t,tt.start*Et),re=Math.min(re,(tt.start+tt.count)*Et)),_t!==null?($t=Math.max($t,0),re=Math.min(re,_t.count)):Mt!=null&&($t=Math.max($t,0),re=Math.min(re,Mt.count));const le=re-$t;if(le<0||le===1/0)return;ne.setup(I,O,mt,F,_t);let De,Xt=pt;if(_t!==null&&(De=Y.get(_t),Xt=Ft,Xt.setIndex(De)),I.isMesh)O.wireframe===!0?(bt.setLineWidth(O.wireframeLinewidth*Bt()),Xt.setMode(C.LINES)):Xt.setMode(C.TRIANGLES);else if(I.isLine){let St=O.linewidth;St===void 0&&(St=1),bt.setLineWidth(St*Bt()),I.isLineSegments?Xt.setMode(C.LINES):I.isLineLoop?Xt.setMode(C.LINE_LOOP):Xt.setMode(C.LINE_STRIP)}else I.isPoints?Xt.setMode(C.POINTS):I.isSprite&&Xt.setMode(C.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Xt.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Nt.get("WEBGL_multi_draw"))Xt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const St=I._multiDrawStarts,ve=I._multiDrawCounts,qt=I._multiDrawCount,Xe=_t?Y.get(_t).bytesPerElement:1,ai=Ct.get(O).currentProgram.getUniforms();for(let Ie=0;Ie<qt;Ie++)ai.setValue(C,"_gl_DrawID",Ie),Xt.render(St[Ie]/Xe,ve[Ie])}else if(I.isInstancedMesh)Xt.renderInstances($t,le,I.count);else if(F.isInstancedBufferGeometry){const St=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,ve=Math.min(F.instanceCount,St);Xt.renderInstances($t,le,ve)}else Xt.render($t,le)};function kt(M,D,F){M.transparent===!0&&M.side===gn&&M.forceSinglePass===!1?(M.side=Pe,M.needsUpdate=!0,dr(M,D,F),M.side=Un,M.needsUpdate=!0,dr(M,D,F),M.side=gn):dr(M,D,F)}this.compile=function(M,D,F=null){F===null&&(F=M),d=Gt.get(F),d.init(D),E.push(d),F.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),M!==F&&M.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),d.setupLights();const O=new Set;return M.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const tt=I.material;if(tt)if(Array.isArray(tt))for(let rt=0;rt<tt.length;rt++){const mt=tt[rt];kt(mt,F,I),O.add(mt)}else kt(tt,F,I),O.add(tt)}),E.pop(),d=null,O},this.compileAsync=function(M,D,F=null){const O=this.compile(M,D,F);return new Promise(I=>{function tt(){if(O.forEach(function(rt){Ct.get(rt).currentProgram.isReady()&&O.delete(rt)}),O.size===0){I(M);return}setTimeout(tt,10)}Nt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let be=null;function cn(M){be&&be(M)}function vo(){zn.stop()}function xo(){zn.start()}const zn=new ll;zn.setAnimationLoop(cn),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(M){be=M,G.setAnimationLoop(M),M===null?zn.stop():zn.start()},G.addEventListener("sessionstart",vo),G.addEventListener("sessionend",xo),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(D),D=G.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,D,b),d=Gt.get(M,E.length),d.init(D),E.push(d),ht.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Kt.setFromProjectionMatrix(ht),j=this.localClippingEnabled,X=Q.init(this.clippingPlanes,j),x=ut.get(M,m.length),x.init(),m.push(x),G.enabled===!0&&G.isPresenting===!0){const tt=S.xr.getDepthSensingMesh();tt!==null&&us(tt,D,-1/0,S.sortObjects)}us(M,D,0,S.sortObjects),x.finish(),S.sortObjects===!0&&x.sort(V,ct),Zt=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Zt&&wt.addToRenderList(x,M),this.info.render.frame++,X===!0&&Q.beginShadows();const F=d.state.shadowsArray;ft.render(F,M,D),X===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=x.opaque,I=x.transmissive;if(d.setupLights(),D.isArrayCamera){const tt=D.cameras;if(I.length>0)for(let rt=0,mt=tt.length;rt<mt;rt++){const _t=tt[rt];So(O,I,M,_t)}Zt&&wt.render(M);for(let rt=0,mt=tt.length;rt<mt;rt++){const _t=tt[rt];Mo(x,M,_t,_t.viewport)}}else I.length>0&&So(O,I,M,D),Zt&&wt.render(M),Mo(x,M,D);b!==null&&(A.updateMultisampleRenderTarget(b),A.updateRenderTargetMipmap(b)),M.isScene===!0&&M.onAfterRender(S,M,D),ne.resetDefaultState(),L=-1,W=null,E.pop(),E.length>0?(d=E[E.length-1],X===!0&&Q.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function us(M,D,F,O){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)F=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Kt.intersectsSprite(M)){O&&Tt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ht);const rt=q.update(M),mt=M.material;mt.visible&&x.push(M,rt,mt,F,Tt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Kt.intersectsObject(M))){const rt=q.update(M),mt=M.material;if(O&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Tt.copy(M.boundingSphere.center)):(rt.boundingSphere===null&&rt.computeBoundingSphere(),Tt.copy(rt.boundingSphere.center)),Tt.applyMatrix4(M.matrixWorld).applyMatrix4(ht)),Array.isArray(mt)){const _t=rt.groups;for(let Et=0,At=_t.length;Et<At;Et++){const Mt=_t[Et],$t=mt[Mt.materialIndex];$t&&$t.visible&&x.push(M,rt,$t,F,Tt.z,Mt)}}else mt.visible&&x.push(M,rt,mt,F,Tt.z,null)}}const tt=M.children;for(let rt=0,mt=tt.length;rt<mt;rt++)us(tt[rt],D,F,O)}function Mo(M,D,F,O){const I=M.opaque,tt=M.transmissive,rt=M.transparent;d.setupLightsView(F),X===!0&&Q.setGlobalState(S.clippingPlanes,F),O&&bt.viewport(_.copy(O)),I.length>0&&ur(I,D,F),tt.length>0&&ur(tt,D,F),rt.length>0&&ur(rt,D,F),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function So(M,D,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[O.id]===void 0&&(d.state.transmissionRenderTarget[O.id]=new ei(1,1,{generateMipmaps:!0,type:Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float")?rr:Mn,minFilter:Qn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const tt=d.state.transmissionRenderTarget[O.id],rt=O.viewport||_;tt.setSize(rt.z,rt.w);const mt=S.getRenderTarget();S.setRenderTarget(tt),S.getClearColor(z),k=S.getClearAlpha(),k<1&&S.setClearColor(16777215,.5),S.clear(),Zt&&wt.render(F);const _t=S.toneMapping;S.toneMapping=Dn;const Et=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),d.setupLightsView(O),X===!0&&Q.setGlobalState(S.clippingPlanes,O),ur(M,F,O),A.updateMultisampleRenderTarget(tt),A.updateRenderTargetMipmap(tt),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let Mt=0,$t=D.length;Mt<$t;Mt++){const re=D[Mt],le=re.object,De=re.geometry,Xt=re.material,St=re.group;if(Xt.side===gn&&le.layers.test(O.layers)){const ve=Xt.side;Xt.side=Pe,Xt.needsUpdate=!0,yo(le,F,O,De,Xt,St),Xt.side=ve,Xt.needsUpdate=!0,At=!0}}At===!0&&(A.updateMultisampleRenderTarget(tt),A.updateRenderTargetMipmap(tt))}S.setRenderTarget(mt),S.setClearColor(z,k),Et!==void 0&&(O.viewport=Et),S.toneMapping=_t}function ur(M,D,F){const O=D.isScene===!0?D.overrideMaterial:null;for(let I=0,tt=M.length;I<tt;I++){const rt=M[I],mt=rt.object,_t=rt.geometry,Et=O===null?rt.material:O,At=rt.group;mt.layers.test(F.layers)&&yo(mt,D,F,_t,Et,At)}}function yo(M,D,F,O,I,tt){M.onBeforeRender(S,D,F,O,I,tt),M.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),I.onBeforeRender(S,D,F,O,M,tt),I.transparent===!0&&I.side===gn&&I.forceSinglePass===!1?(I.side=Pe,I.needsUpdate=!0,S.renderBufferDirect(F,D,O,I,M,tt),I.side=Un,I.needsUpdate=!0,S.renderBufferDirect(F,D,O,I,M,tt),I.side=gn):S.renderBufferDirect(F,D,O,I,M,tt),M.onAfterRender(S,D,F,O,I,tt)}function dr(M,D,F){D.isScene!==!0&&(D=Ot);const O=Ct.get(M),I=d.state.lights,tt=d.state.shadowsArray,rt=I.state.version,mt=xt.getParameters(M,I.state,tt,D,F),_t=xt.getProgramCacheKey(mt);let Et=O.programs;O.environment=M.isMeshStandardMaterial?D.environment:null,O.fog=D.fog,O.envMap=(M.isMeshStandardMaterial?N:v).get(M.envMap||O.environment),O.envMapRotation=O.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,Et===void 0&&(M.addEventListener("dispose",zt),Et=new Map,O.programs=Et);let At=Et.get(_t);if(At!==void 0){if(O.currentProgram===At&&O.lightsStateVersion===rt)return To(M,mt),At}else mt.uniforms=xt.getUniforms(M),M.onBeforeCompile(mt,S),At=xt.acquireProgram(mt,_t),Et.set(_t,At),O.uniforms=mt.uniforms;const Mt=O.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Mt.clippingPlanes=Q.uniform),To(M,mt),O.needsLights=Ol(M),O.lightsStateVersion=rt,O.needsLights&&(Mt.ambientLightColor.value=I.state.ambient,Mt.lightProbe.value=I.state.probe,Mt.directionalLights.value=I.state.directional,Mt.directionalLightShadows.value=I.state.directionalShadow,Mt.spotLights.value=I.state.spot,Mt.spotLightShadows.value=I.state.spotShadow,Mt.rectAreaLights.value=I.state.rectArea,Mt.ltc_1.value=I.state.rectAreaLTC1,Mt.ltc_2.value=I.state.rectAreaLTC2,Mt.pointLights.value=I.state.point,Mt.pointLightShadows.value=I.state.pointShadow,Mt.hemisphereLights.value=I.state.hemi,Mt.directionalShadowMap.value=I.state.directionalShadowMap,Mt.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Mt.spotShadowMap.value=I.state.spotShadowMap,Mt.spotLightMatrix.value=I.state.spotLightMatrix,Mt.spotLightMap.value=I.state.spotLightMap,Mt.pointShadowMap.value=I.state.pointShadowMap,Mt.pointShadowMatrix.value=I.state.pointShadowMatrix),O.currentProgram=At,O.uniformsList=null,At}function Eo(M){if(M.uniformsList===null){const D=M.currentProgram.getUniforms();M.uniformsList=Xr.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function To(M,D){const F=Ct.get(M);F.outputColorSpace=D.outputColorSpace,F.batching=D.batching,F.batchingColor=D.batchingColor,F.instancing=D.instancing,F.instancingColor=D.instancingColor,F.instancingMorph=D.instancingMorph,F.skinning=D.skinning,F.morphTargets=D.morphTargets,F.morphNormals=D.morphNormals,F.morphColors=D.morphColors,F.morphTargetsCount=D.morphTargetsCount,F.numClippingPlanes=D.numClippingPlanes,F.numIntersection=D.numClipIntersection,F.vertexAlphas=D.vertexAlphas,F.vertexTangents=D.vertexTangents,F.toneMapping=D.toneMapping}function Nl(M,D,F,O,I){D.isScene!==!0&&(D=Ot),A.resetTextureUnits();const tt=D.fog,rt=O.isMeshStandardMaterial?D.environment:null,mt=b===null?S.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Bn,_t=(O.isMeshStandardMaterial?N:v).get(O.envMap||rt),Et=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,At=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Mt=!!F.morphAttributes.position,$t=!!F.morphAttributes.normal,re=!!F.morphAttributes.color;let le=Dn;O.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(le=S.toneMapping);const De=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Xt=De!==void 0?De.length:0,St=Ct.get(O),ve=d.state.lights;if(X===!0&&(j===!0||M!==W)){const Ge=M===W&&O.id===L;Q.setState(O,M,Ge)}let qt=!1;O.version===St.__version?(St.needsLights&&St.lightsStateVersion!==ve.state.version||St.outputColorSpace!==mt||I.isBatchedMesh&&St.batching===!1||!I.isBatchedMesh&&St.batching===!0||I.isBatchedMesh&&St.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&St.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&St.instancing===!1||!I.isInstancedMesh&&St.instancing===!0||I.isSkinnedMesh&&St.skinning===!1||!I.isSkinnedMesh&&St.skinning===!0||I.isInstancedMesh&&St.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&St.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&St.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&St.instancingMorph===!1&&I.morphTexture!==null||St.envMap!==_t||O.fog===!0&&St.fog!==tt||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==Q.numPlanes||St.numIntersection!==Q.numIntersection)||St.vertexAlphas!==Et||St.vertexTangents!==At||St.morphTargets!==Mt||St.morphNormals!==$t||St.morphColors!==re||St.toneMapping!==le||St.morphTargetsCount!==Xt)&&(qt=!0):(qt=!0,St.__version=O.version);let Xe=St.currentProgram;qt===!0&&(Xe=dr(O,D,I));let ai=!1,Ie=!1,ds=!1;const he=Xe.getUniforms(),yn=St.uniforms;if(bt.useProgram(Xe.program)&&(ai=!0,Ie=!0,ds=!0),O.id!==L&&(L=O.id,Ie=!0),ai||W!==M){Ht.reverseDepthBuffer?(gt.copy(M.projectionMatrix),wh(gt),Rh(gt),he.setValue(C,"projectionMatrix",gt)):he.setValue(C,"projectionMatrix",M.projectionMatrix),he.setValue(C,"viewMatrix",M.matrixWorldInverse);const Ge=he.map.cameraPosition;Ge!==void 0&&Ge.setValue(C,Pt.setFromMatrixPosition(M.matrixWorld)),Ht.logarithmicDepthBuffer&&he.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&he.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),W!==M&&(W=M,Ie=!0,ds=!0)}if(I.isSkinnedMesh){he.setOptional(C,I,"bindMatrix"),he.setOptional(C,I,"bindMatrixInverse");const Ge=I.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),he.setValue(C,"boneTexture",Ge.boneTexture,A))}I.isBatchedMesh&&(he.setOptional(C,I,"batchingTexture"),he.setValue(C,"batchingTexture",I._matricesTexture,A),he.setOptional(C,I,"batchingIdTexture"),he.setValue(C,"batchingIdTexture",I._indirectTexture,A),he.setOptional(C,I,"batchingColorTexture"),I._colorsTexture!==null&&he.setValue(C,"batchingColorTexture",I._colorsTexture,A));const fs=F.morphAttributes;if((fs.position!==void 0||fs.normal!==void 0||fs.color!==void 0)&&Rt.update(I,F,Xe),(Ie||St.receiveShadow!==I.receiveShadow)&&(St.receiveShadow=I.receiveShadow,he.setValue(C,"receiveShadow",I.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(yn.envMap.value=_t,yn.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&D.environment!==null&&(yn.envMapIntensity.value=D.environmentIntensity),Ie&&(he.setValue(C,"toneMappingExposure",S.toneMappingExposure),St.needsLights&&Fl(yn,ds),tt&&O.fog===!0&&nt.refreshFogUniforms(yn,tt),nt.refreshMaterialUniforms(yn,O,J,H,d.state.transmissionRenderTarget[M.id]),Xr.upload(C,Eo(St),yn,A)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Xr.upload(C,Eo(St),yn,A),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&he.setValue(C,"center",I.center),he.setValue(C,"modelViewMatrix",I.modelViewMatrix),he.setValue(C,"normalMatrix",I.normalMatrix),he.setValue(C,"modelMatrix",I.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Ge=O.uniformsGroups;for(let ps=0,Bl=Ge.length;ps<Bl;ps++){const Ao=Ge[ps];P.update(Ao,Xe),P.bind(Ao,Xe)}}return Xe}function Fl(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function Ol(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(M,D,F){Ct.get(M.texture).__webglTexture=D,Ct.get(M.depthTexture).__webglTexture=F;const O=Ct.get(M);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||Nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,D){const F=Ct.get(M);F.__webglFramebuffer=D,F.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,F=0){b=M,U=D,w=F;let O=!0,I=null,tt=!1,rt=!1;if(M){const _t=Ct.get(M);if(_t.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(C.FRAMEBUFFER,null),O=!1;else if(_t.__webglFramebuffer===void 0)A.setupRenderTarget(M);else if(_t.__hasExternalTextures)A.rebindTextures(M,Ct.get(M.texture).__webglTexture,Ct.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Mt=M.depthTexture;if(_t.__boundDepthTexture!==Mt){if(Mt!==null&&Ct.has(Mt)&&(M.width!==Mt.image.width||M.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(M)}}const Et=M.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(rt=!0);const At=Ct.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(At[D])?I=At[D][F]:I=At[D],tt=!0):M.samples>0&&A.useMultisampledRTT(M)===!1?I=Ct.get(M).__webglMultisampledFramebuffer:Array.isArray(At)?I=At[F]:I=At,_.copy(M.viewport),y.copy(M.scissor),B=M.scissorTest}else _.copy(lt).multiplyScalar(J).floor(),y.copy(vt).multiplyScalar(J).floor(),B=Vt;if(bt.bindFramebuffer(C.FRAMEBUFFER,I)&&O&&bt.drawBuffers(M,I),bt.viewport(_),bt.scissor(y),bt.setScissorTest(B),tt){const _t=Ct.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+D,_t.__webglTexture,F)}else if(rt){const _t=Ct.get(M.texture),Et=D||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,_t.__webglTexture,F||0,Et)}L=-1},this.readRenderTargetPixels=function(M,D,F,O,I,tt,rt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=Ct.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&rt!==void 0&&(mt=mt[rt]),mt){bt.bindFramebuffer(C.FRAMEBUFFER,mt);try{const _t=M.texture,Et=_t.format,At=_t.type;if(!Ht.textureFormatReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-O&&F>=0&&F<=M.height-I&&C.readPixels(D,F,O,I,Lt.convert(Et),Lt.convert(At),tt)}finally{const _t=b!==null?Ct.get(b).__webglFramebuffer:null;bt.bindFramebuffer(C.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(M,D,F,O,I,tt,rt){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=Ct.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&rt!==void 0&&(mt=mt[rt]),mt){const _t=M.texture,Et=_t.format,At=_t.type;if(!Ht.textureFormatReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=M.width-O&&F>=0&&F<=M.height-I){bt.bindFramebuffer(C.FRAMEBUFFER,mt);const Mt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Mt),C.bufferData(C.PIXEL_PACK_BUFFER,tt.byteLength,C.STREAM_READ),C.readPixels(D,F,O,I,Lt.convert(Et),Lt.convert(At),0);const $t=b!==null?Ct.get(b).__webglFramebuffer:null;bt.bindFramebuffer(C.FRAMEBUFFER,$t);const re=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await bh(C,re,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Mt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,tt),C.deleteBuffer(Mt),C.deleteSync(re),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,D=null,F=0){M.isTexture!==!0&&(Wr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,M=arguments[1]);const O=Math.pow(2,-F),I=Math.floor(M.image.width*O),tt=Math.floor(M.image.height*O),rt=D!==null?D.x:0,mt=D!==null?D.y:0;A.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,F,0,0,rt,mt,I,tt),bt.unbindTexture()},this.copyTextureToTexture=function(M,D,F=null,O=null,I=0){M.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,M=arguments[1],D=arguments[2],I=arguments[3]||0,F=null);let tt,rt,mt,_t,Et,At;F!==null?(tt=F.max.x-F.min.x,rt=F.max.y-F.min.y,mt=F.min.x,_t=F.min.y):(tt=M.image.width,rt=M.image.height,mt=0,_t=0),O!==null?(Et=O.x,At=O.y):(Et=0,At=0);const Mt=Lt.convert(D.format),$t=Lt.convert(D.type);A.setTexture2D(D,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,D.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,D.unpackAlignment);const re=C.getParameter(C.UNPACK_ROW_LENGTH),le=C.getParameter(C.UNPACK_IMAGE_HEIGHT),De=C.getParameter(C.UNPACK_SKIP_PIXELS),Xt=C.getParameter(C.UNPACK_SKIP_ROWS),St=C.getParameter(C.UNPACK_SKIP_IMAGES),ve=M.isCompressedTexture?M.mipmaps[I]:M.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,ve.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ve.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,mt),C.pixelStorei(C.UNPACK_SKIP_ROWS,_t),M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,I,Et,At,tt,rt,Mt,$t,ve.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,I,Et,At,ve.width,ve.height,Mt,ve.data):C.texSubImage2D(C.TEXTURE_2D,I,Et,At,tt,rt,Mt,$t,ve),C.pixelStorei(C.UNPACK_ROW_LENGTH,re),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,le),C.pixelStorei(C.UNPACK_SKIP_PIXELS,De),C.pixelStorei(C.UNPACK_SKIP_ROWS,Xt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,St),I===0&&D.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),bt.unbindTexture()},this.copyTextureToTexture3D=function(M,D,F=null,O=null,I=0){M.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,O=arguments[1]||null,M=arguments[2],D=arguments[3],I=arguments[4]||0);let tt,rt,mt,_t,Et,At,Mt,$t,re;const le=M.isCompressedTexture?M.mipmaps[I]:M.image;F!==null?(tt=F.max.x-F.min.x,rt=F.max.y-F.min.y,mt=F.max.z-F.min.z,_t=F.min.x,Et=F.min.y,At=F.min.z):(tt=le.width,rt=le.height,mt=le.depth,_t=0,Et=0,At=0),O!==null?(Mt=O.x,$t=O.y,re=O.z):(Mt=0,$t=0,re=0);const De=Lt.convert(D.format),Xt=Lt.convert(D.type);let St;if(D.isData3DTexture)A.setTexture3D(D,0),St=C.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)A.setTexture2DArray(D,0),St=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,D.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,D.unpackAlignment);const ve=C.getParameter(C.UNPACK_ROW_LENGTH),qt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Xe=C.getParameter(C.UNPACK_SKIP_PIXELS),ai=C.getParameter(C.UNPACK_SKIP_ROWS),Ie=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,le.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,le.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,_t),C.pixelStorei(C.UNPACK_SKIP_ROWS,Et),C.pixelStorei(C.UNPACK_SKIP_IMAGES,At),M.isDataTexture||M.isData3DTexture?C.texSubImage3D(St,I,Mt,$t,re,tt,rt,mt,De,Xt,le.data):D.isCompressedArrayTexture?C.compressedTexSubImage3D(St,I,Mt,$t,re,tt,rt,mt,De,le.data):C.texSubImage3D(St,I,Mt,$t,re,tt,rt,mt,De,Xt,le),C.pixelStorei(C.UNPACK_ROW_LENGTH,ve),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,qt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Xe),C.pixelStorei(C.UNPACK_SKIP_ROWS,ai),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ie),I===0&&D.generateMipmaps&&C.generateMipmap(St),bt.unbindTexture()},this.initRenderTarget=function(M){Ct.get(M).__webglFramebuffer===void 0&&A.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?A.setTextureCube(M,0):M.isData3DTexture?A.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?A.setTexture2DArray(M,0):A.setTexture2D(M,0),bt.unbindTexture()},this.resetState=function(){U=0,w=0,b=null,bt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ja?"display-p3":"srgb",e.unpackColorSpace=Yt.workingColorSpace===is?"display-p3":"srgb"}}class Qa{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ut(t),this.density=e}clone(){return new Qa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Gm extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Vm extends Te{constructor(t=null,e=1,n=1,r,s,a,o,c,l=Re,h=Re,f,u){super(null,a,o,c,l,h,r,s,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mc extends tn{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Si=new ee,Sc=new ee,Ur=[],yc=new ri,km=new ee,qi=new te,Yi=new or;class Nr extends te{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Mc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,km)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ri),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Si),yc.copy(t.boundingBox).applyMatrix4(Si),this.boundingBox.union(yc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new or),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Si),Yi.copy(t.boundingSphere).applyMatrix4(Si),this.boundingSphere.union(Yi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(t,e){const n=this.matrixWorld,r=this.count;if(qi.geometry=this.geometry,qi.material=this.material,qi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yi.copy(this.boundingSphere),Yi.applyMatrix4(n),t.ray.intersectsSphere(Yi)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Si),Sc.multiplyMatrices(n,Si),qi.matrixWorld=Sc,qi.raycast(t,Ur);for(let a=0,o=Ur.length;a<o;a++){const c=Ur[a];c.instanceId=s,c.object=this,e.push(c)}Ur.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Mc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Vm(new Float32Array(r*this.count),r,this.count,qa,sn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*t;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class on{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=n[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const h=n[r],u=n[r+1]-h,p=(a-h)/u;return(r+p)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=e||(a.isVector2?new dt:new R);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,r=[],s=[],a=[],o=new R,c=new ee;for(let p=0;p<=t;p++){const g=p/t;r[p]=this.getTangentAt(g,new R)}s[0]=new R,a[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(r[0].x),f=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(xe(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(r[p],s[p])}if(e===!0){let p=Math.acos(xe(s[0].dot(s[t]),-1,1));p/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(p=-p);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],p*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class to extends on{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new dt){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=c-this.aX,p=l-this.aY;c=u*h-p*f+this.aX,l=u*f+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Wm extends to{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function eo(){let i=0,t=0,e=0,n=0;function r(s,a,o,c){i=s,t=o,e=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,f){let u=(a-s)/l-(o-s)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+f)+(c-o)/f;u*=h,p*=h,r(a,o,u,p)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const Fr=new R,qs=new eo,Ys=new eo,Ks=new eo;class Xm extends on{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new R){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=r[(o-1)%s]:(Fr.subVectors(r[0],r[1]).add(r[0]),l=Fr);const f=r[o%s],u=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(Fr.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Fr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),p),x=Math.pow(f.distanceToSquared(u),p),d=Math.pow(u.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),d<1e-4&&(d=x),qs.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,g,x,d),Ys.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,g,x,d),Ks.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,g,x,d)}else this.curveType==="catmullrom"&&(qs.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),Ys.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),Ks.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return n.set(qs.calc(c),Ys.calc(c),Ks.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new R().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ec(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,c=i*o;return(2*e-2*n+s+a)*c+(-3*e+3*n-2*s-a)*o+s*i+e}function qm(i,t){const e=1-i;return e*e*t}function Ym(i,t){return 2*(1-i)*i*t}function Km(i,t){return i*i*t}function Zi(i,t,e,n){return qm(i,t)+Ym(i,e)+Km(i,n)}function $m(i,t){const e=1-i;return e*e*e*t}function Jm(i,t){const e=1-i;return 3*e*e*i*t}function Zm(i,t){return 3*(1-i)*i*i*t}function jm(i,t){return i*i*i*t}function ji(i,t,e,n,r){return $m(i,t)+Jm(i,e)+Zm(i,n)+jm(i,r)}class gl extends on{constructor(t=new dt,e=new dt,n=new dt,r=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new dt){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ji(t,r.x,s.x,a.x,o.x),ji(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Qm extends on{constructor(t=new R,e=new R,n=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new R){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ji(t,r.x,s.x,a.x,o.x),ji(t,r.y,s.y,a.y,o.y),ji(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class _l extends on{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tg extends on{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vl extends on{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(Zi(t,r.x,s.x,a.x),Zi(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class eg extends on{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(Zi(t,r.x,s.x,a.x),Zi(t,r.y,s.y,a.y),Zi(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xl extends on{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],h=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return n.set(Ec(o,c.x,l.x,h.x,f.x),Ec(o,c.y,l.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new dt().fromArray(r))}return this}}var Tc=Object.freeze({__proto__:null,ArcCurve:Wm,CatmullRomCurve3:Xm,CubicBezierCurve:gl,CubicBezierCurve3:Qm,EllipseCurve:to,LineCurve:_l,LineCurve3:tg,QuadraticBezierCurve:vl,QuadraticBezierCurve3:eg,SplineCurve:xl});class ng extends on{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Tc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new Tc[r.type]().fromJSON(r))}return this}}class ig extends ng{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new _l(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new vl(this.currentPoint.clone(),new dt(t,e),new dt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,a){const o=new gl(this.currentPoint.clone(),new dt(t,e),new dt(n,r),new dt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new xl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,r,s,a),this}absarc(t,e,n,r,s,a){return this.absellipse(t,e,n,n,r,s,a),this}ellipse(t,e,n,r,s,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,r,s,a,o,c),this}absellipse(t,e,n,r,s,a,o,c){const l=new to(t,e,n,r,s,a,o,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class no extends He{constructor(t=[new dt(0,-.5),new dt(.5,0),new dt(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=xe(r,0,Math.PI*2);const s=[],a=[],o=[],c=[],l=[],h=1/e,f=new R,u=new dt,p=new R,g=new R,x=new R;let d=0,m=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:d=t[E+1].x-t[E].x,m=t[E+1].y-t[E].y,p.x=m*1,p.y=-d,p.z=m*0,x.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:d=t[E+1].x-t[E].x,m=t[E+1].y-t[E].y,p.x=m*1,p.y=-d,p.z=m*0,g.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),c.push(p.x,p.y,p.z),x.copy(g)}for(let E=0;E<=e;E++){const S=n+E*h*r,T=Math.sin(S),U=Math.cos(S);for(let w=0;w<=t.length-1;w++){f.x=t[w].x*T,f.y=t[w].y,f.z=t[w].x*U,a.push(f.x,f.y,f.z),u.x=E/e,u.y=w/(t.length-1),o.push(u.x,u.y);const b=c[3*w+0]*T,L=c[3*w+1],W=c[3*w+0]*U;l.push(b,L,W)}}for(let E=0;E<e;E++)for(let S=0;S<t.length-1;S++){const T=S+E*t.length,U=T,w=T+t.length,b=T+t.length+1,L=T+1;s.push(U,w,L),s.push(b,L,w)}this.setIndex(s),this.setAttribute("position",new ce(a,3)),this.setAttribute("uv",new ce(o,2)),this.setAttribute("normal",new ce(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new no(t.points,t.segments,t.phiStart,t.phiLength)}}class io extends no{constructor(t=1,e=1,n=4,r=8){const s=new ig;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:r}}static fromJSON(t){return new io(t.radius,t.length,t.capSegments,t.radialSegments)}}class ro extends He{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],a=[],o=[],c=[],l=new R,h=new dt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const p=n+f/e*r;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,c.push(h.x,h.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(o,3)),this.setAttribute("uv",new ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ro(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Qe extends He{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],u=[],p=[];let g=0;const x=[],d=n/2;let m=0;E(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ce(f,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(p,2));function E(){const T=new R,U=new R;let w=0;const b=(e-t)/n;for(let L=0;L<=s;L++){const W=[],_=L/s,y=_*(e-t)+t;for(let B=0;B<=r;B++){const z=B/r,k=z*c+o,$=Math.sin(k),H=Math.cos(k);U.x=y*$,U.y=-_*n+d,U.z=y*H,f.push(U.x,U.y,U.z),T.set($,b,H).normalize(),u.push(T.x,T.y,T.z),p.push(z,1-_),W.push(g++)}x.push(W)}for(let L=0;L<r;L++)for(let W=0;W<s;W++){const _=x[W][L],y=x[W+1][L],B=x[W+1][L+1],z=x[W][L+1];t>0&&(h.push(_,y,z),w+=3),e>0&&(h.push(y,B,z),w+=3)}l.addGroup(m,w,0),m+=w}function S(T){const U=g,w=new dt,b=new R;let L=0;const W=T===!0?t:e,_=T===!0?1:-1;for(let B=1;B<=r;B++)f.push(0,d*_,0),u.push(0,_,0),p.push(.5,.5),g++;const y=g;for(let B=0;B<=r;B++){const k=B/r*c+o,$=Math.cos(k),H=Math.sin(k);b.x=W*H,b.y=d*_,b.z=W*$,f.push(b.x,b.y,b.z),u.push(0,_,0),w.x=$*.5+.5,w.y=H*.5*_+.5,p.push(w.x,w.y),g++}for(let B=0;B<r;B++){const z=U+B,k=y+B;T===!0?h.push(k,k+1,z):h.push(k+1,k,z),L+=3}l.addGroup(m,L,T===!0?1:2),m+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class so extends Qe{constructor(t=1,e=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new so(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class lr extends He{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],a=[];o(r),l(n),h(),this.setAttribute("position",new ce(s,3)),this.setAttribute("normal",new ce(s.slice(),3)),this.setAttribute("uv",new ce(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const S=new R,T=new R,U=new R;for(let w=0;w<e.length;w+=3)p(e[w+0],S),p(e[w+1],T),p(e[w+2],U),c(S,T,U,E)}function c(E,S,T,U){const w=U+1,b=[];for(let L=0;L<=w;L++){b[L]=[];const W=E.clone().lerp(T,L/w),_=S.clone().lerp(T,L/w),y=w-L;for(let B=0;B<=y;B++)B===0&&L===w?b[L][B]=W:b[L][B]=W.clone().lerp(_,B/y)}for(let L=0;L<w;L++)for(let W=0;W<2*(w-L)-1;W++){const _=Math.floor(W/2);W%2===0?(u(b[L][_+1]),u(b[L+1][_]),u(b[L][_])):(u(b[L][_+1]),u(b[L+1][_+1]),u(b[L+1][_]))}}function l(E){const S=new R;for(let T=0;T<s.length;T+=3)S.x=s[T+0],S.y=s[T+1],S.z=s[T+2],S.normalize().multiplyScalar(E),s[T+0]=S.x,s[T+1]=S.y,s[T+2]=S.z}function h(){const E=new R;for(let S=0;S<s.length;S+=3){E.x=s[S+0],E.y=s[S+1],E.z=s[S+2];const T=d(E)/2/Math.PI+.5,U=m(E)/Math.PI+.5;a.push(T,1-U)}g(),f()}function f(){for(let E=0;E<a.length;E+=6){const S=a[E+0],T=a[E+2],U=a[E+4],w=Math.max(S,T,U),b=Math.min(S,T,U);w>.9&&b<.1&&(S<.2&&(a[E+0]+=1),T<.2&&(a[E+2]+=1),U<.2&&(a[E+4]+=1))}}function u(E){s.push(E.x,E.y,E.z)}function p(E,S){const T=E*3;S.x=t[T+0],S.y=t[T+1],S.z=t[T+2]}function g(){const E=new R,S=new R,T=new R,U=new R,w=new dt,b=new dt,L=new dt;for(let W=0,_=0;W<s.length;W+=9,_+=6){E.set(s[W+0],s[W+1],s[W+2]),S.set(s[W+3],s[W+4],s[W+5]),T.set(s[W+6],s[W+7],s[W+8]),w.set(a[_+0],a[_+1]),b.set(a[_+2],a[_+3]),L.set(a[_+4],a[_+5]),U.copy(E).add(S).add(T).divideScalar(3);const y=d(U);x(w,_+0,E,y),x(b,_+2,S,y),x(L,_+4,T,y)}}function x(E,S,T,U){U<0&&E.x===1&&(a[S]=E.x-1),T.x===0&&T.z===0&&(a[S]=U/2/Math.PI+.5)}function d(E){return Math.atan2(E.z,-E.x)}function m(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lr(t.vertices,t.indices,t.radius,t.details)}}class Zr extends lr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Zr(t.radius,t.detail)}}class Ri extends lr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ri(t.radius,t.detail)}}class as extends lr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new as(t.radius,t.detail)}}class os extends He{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],c=[],l=[],h=new R,f=new R,u=new R;for(let p=0;p<=n;p++)for(let g=0;g<=r;g++){const x=g/r*s,d=p/n*Math.PI*2;f.x=(t+e*Math.cos(d))*Math.cos(x),f.y=(t+e*Math.cos(d))*Math.sin(x),f.z=e*Math.sin(d),o.push(f.x,f.y,f.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),u.subVectors(f,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/r),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=r;g++){const x=(r+1)*p+g-1,d=(r+1)*(p-1)+g-1,m=(r+1)*(p-1)+g,E=(r+1)*p+g;a.push(x,d,E),a.push(d,m,E)}this.setIndex(a),this.setAttribute("position",new ce(o,3)),this.setAttribute("normal",new ce(c,3)),this.setAttribute("uv",new ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new os(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ao extends cr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jc,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class oo extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class rg extends oo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const $s=new ee,Ac=new R,bc=new R;class Ml{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Za,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ac.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ac),bc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bc),e.updateMatrixWorld(),$s.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($s),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($s)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const wc=new ee,Ki=new R,Js=new R;class sg extends Ml{constructor(){super(new Oe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new Qt(2,1,1,1),new Qt(0,1,1,1),new Qt(3,1,1,1),new Qt(1,1,1,1),new Qt(3,0,1,1),new Qt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ki.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ki),Js.copy(n.position),Js.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Js),n.updateMatrixWorld(),r.makeTranslation(-Ki.x,-Ki.y,-Ki.z),wc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wc)}}class cs extends oo{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new sg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ag extends Ml{constructor(){super(new hl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sl extends oo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new ag}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Va}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Va);const ot=i=>document.querySelector(i),nr=(i,t,e)=>Math.max(t,Math.min(e,i)),Zs=(i,t,e)=>i+(t-i)*e,yt=(()=>{let i=735921;return()=>(i=i*1664525+1013904223>>>0,i/4294967296)})(),Be=ot("#world"),ae=new Gm;ae.background=new Ut(7701880);ae.fog=new Qa(9016455,.0125);const In=new Oe(72,innerWidth/innerHeight,.08,600),en=new Hm({canvas:Be,antialias:!1,powerPreference:"high-performance"});en.setPixelRatio(Math.min(devicePixelRatio,1.4)*.78);en.setSize(innerWidth,innerHeight,!1);en.shadowMap.enabled=!0;en.shadowMap.type=Oc;en.outputColorSpace=$e;en.toneMapping=zc;en.toneMappingExposure=1.12;const og=new rg(12175278,2569258,2);ae.add(og);const Sn=new Sl(16766369,3.2);Sn.position.set(-46,75,35);Sn.castShadow=!0;Sn.shadow.mapSize.set(2048,2048);Sn.shadow.camera.left=-80;Sn.shadow.camera.right=80;Sn.shadow.camera.top=80;Sn.shadow.camera.bottom=-80;Sn.shadow.bias=-4e-4;ae.add(Sn);const yl=new Sl(9287585,1.05);yl.position.set(45,28,-40);ae.add(yl);const El=new cs(9746843,35,40,2);El.position.set(0,8,0);ae.add(El);const Jt=(i,t=.94,e={})=>new ao({color:i,roughness:t,...e}),fe={bark:[Jt(4209454),Jt(5326905),Jt(3423021)],leaves:[Jt(4283197),Jt(6321482),Jt(3427386),Jt(7700562),Jt(5072709)],rock:[Jt(5593163),Jt(6841426),Jt(4278848)],fern:Jt(6453063),moss:Jt(4942149),ape:Jt(4799024),apeLight:Jt(7823690),face:Jt(2630943),eye:Jt(14989696,.45,{emissive:4797725,emissiveIntensity:.35}),mossman:Jt(5401406),warden:Jt(3358516),crystal:Jt(9491361,.35,{emissive:3238982,emissiveIntensity:1.2}),water:new ao({color:2571060,roughness:.22,metalness:.12,transparent:!0,opacity:.77}),metal:Jt(6052679,.65,{metalness:.38})};function oe(i,t){const e=Math.sin(i*.042+1.2)*2.1+Math.cos(t*.036-.8)*2.5+Math.sin((i+t)*.021)*1.5,n=Math.sin(i*.015)*Math.cos(t*.018)*5.5,r=Math.exp(-((i-38)**2+(t+28)**2)/850)*8,s=Math.exp(-((i+55)**2+(t-39)**2)/1300)*6,a=-Math.exp(-((i+15)**2+(t-10)**2)/450)*3.2;return e+n+r+s+a}function cg(){const e=[],n=[],r=[],s=new Ut(4215873),a=new Ut(6582350),o=new Ut(3424053),c=new Ut(6975573);for(let u=0;u<=200;u++)for(let p=0;p<=200;p++){const g=p/200*500-250,x=u/200*500-500/2,d=oe(g,x);e.push(g,d,x);const m=Math.sin(g*1.7+Math.sin(x*2))*.08+Math.cos(x*1.4)*.045+yt()*.035,E=nr(.45+d*.023+m,0,1);let S=s.clone().lerp(a,E);d<-1.5&&S.lerp(o,.43),d>7&&S.lerp(c,.35),n.push(S.r,S.g,S.b)}for(let u=0;u<200;u++)for(let p=0;p<200;p++){const g=u*201+p,x=g+200+1;(p+u)%2?r.push(g,x,g+1,x,x+1,g+1):r.push(g,x,x+1,g,g+1,x+1)}const l=new He;l.setAttribute("position",new ce(e,3)),l.setAttribute("color",new ce(n,3)),l.setIndex(r),l.computeVertexNormals();const h=new ao({vertexColors:!0,roughness:1}),f=new te(l,h);f.receiveShadow=!0,f.position.y=-.12,ae.add(f)}cg();const co=[];function lg(){const i=new Qe(.28,.48,1,7,1),t=new Nr(i,fe.bark[0],1900);t.castShadow=!0,t.receiveShadow=!0;const n=[new Ri(1,0),new Zr(1,0),new Ri(1.1,0)].map((u,p)=>{const g=new Nr(u,fe.leaves[p],2800);return g.castShadow=!0,g.receiveShadow=!0,ae.add(g),g}),r=new _e;let s=0,a=[0,0,0];for(let u=0;u<1900;u++){let p,g,x=0;do p=(yt()-.5)*470,g=(yt()-.5)*470,x++;while(x<18&&(p*p+g*g<210||Math.abs(p)<12&&Math.abs(g)<18));const d=oe(p,g),m=4.5+yt()*5.5,E=.75+yt()*.7;co.push({x:p,z:g,r:1.2+E*.3}),r.position.set(p,d+m/2,g),r.scale.set(E,m,E),r.rotation.y=yt()*6.28,r.updateMatrix(),t.setMatrixAt(s++,r.matrix);const S=d+m*.72;for(let T=0;T<4;T++){yt();const U=(u+T)%3,w=E*(1.15+yt()*.6);r.position.set(p+(yt()-.5)*w*1.5,S+(yt()-.5)*m*.25,g+(yt()-.5)*w*1.5);const b=(1.15+yt()*1.25)*E;r.scale.set(b*(.85+yt()*.45),b*(.7+yt()*.45),b*(.9+yt()*.45)),r.rotation.set(yt()*.7,yt()*6.28,yt()*.7),r.updateMatrix(),n[U].setMatrixAt(a[U]++,r.matrix)}}t.count=s,t.instanceMatrix.needsUpdate=!0,ae.add(t),n.forEach((u,p)=>{u.count=a[p],u.instanceMatrix.needsUpdate=!0});const o=new Ri(1,0),c=new Nr(o,fe.fern,900);c.castShadow=!0;const l=new Nr(new Zr(1,0),fe.rock[0],360);l.castShadow=!0,l.receiveShadow=!0;for(let u=0;u<230;u++){const p=(yt()-.5)*185,g=(yt()-.5)*185,x=oe(p,g),d=.45+yt()*1.1;r.position.set(p,x+d*.25,g),r.scale.set(d*1.5,d*.8,d),r.rotation.set(yt()*.3,yt()*6,yt()*.3),r.updateMatrix(),c.setMatrixAt(u,r.matrix)}for(let u=0;u<95;u++){let p=(yt()-.5)*185,g=(yt()-.5)*185;const x=oe(p,g),d=.5+yt()*1.7;r.position.set(p,x+d*.3,g),r.scale.set(d,d*.7,d*.8),r.rotation.set(yt()*.5,yt()*6,yt()*.5),r.updateMatrix(),l.setMatrixAt(u,r.matrix)}ae.add(c,l);const h=new so(.12,1,4,1),f=Jt(5269315);for(let u=0;u<180;u++){const p=(yt()-.5)*186,g=(yt()-.5)*186,x=oe(p,g),d=new vn;d.position.set(p,x,g);for(let m=0;m<5;m++){const E=new te(h,f);E.position.set((yt()-.5)*.8,.35,(yt()-.5)*.8),E.rotation.z=(yt()-.5)*.8,E.rotation.x=(yt()-.5)*.7,E.scale.set(.5+yt()*.7,.6+yt()*.8,.5+yt()*.5),E.castShadow=!0,d.add(E)}ae.add(d)}}lg();function hg(){const i=new te(new ro(5.5,9),fe.water);i.rotation.x=-Math.PI/2,i.position.set(-17,oe(-17,11)+.02,11),i.scale.set(1.4,.75,1),ae.add(i);const t=new te(new os(5.4,.12,3,14),Jt(4479038));t.rotation.x=Math.PI/2,t.position.set(-17,oe(-17,11)+.03,11),t.scale.set(1.4,1,1),ae.add(t);const e=Jt(4799789);for(let o=0;o<12;o++){const c=(yt()-.5)*130,l=(yt()-.5)*130;if(c*c+l*l<400)continue;const h=new te(new Qe(.18,.22,2.4+yt()*3,6),e);h.position.set(c,oe(c,l)+.22,l),h.rotation.z=Math.PI/2+(yt()-.5)*.25,h.rotation.y=yt()*2,h.castShadow=!0,ae.add(h)}const n=new te(new Qe(.72,.72,1.8,8),fe.metal);n.position.set(19,oe(19,-27)+.9,-27),n.rotation.z=.18,n.castShadow=!0,ae.add(n);const r=new te(new Qe(.74,.74,.15,8),Jt(10180926));r.position.set(19,oe(19,-27)+1.2,-27),ae.add(r);const s=new te(new Qe(.035,.05,4,5),Jt(4671549));s.position.set(22,oe(22,-29)+2,-29),s.rotation.z=.1,s.castShadow=!0,ae.add(s);const a=new cs(14513482,3,12,2);a.position.set(22,oe(22,-29)+3.6,-29),ae.add(a)}hg();function Rc(i,t,e,n,r,s=[1,1,1]){const a=new te(new io(t,e,3,6),n);return a.position.set(...r),a.scale.set(...s),a.castShadow=!0,a.receiveShadow=!0,i.add(a),a}function qn(i,t,e,n,r=[1,1,1]){const s=new te(new Ri(t,1),e);return s.position.set(...n),s.scale.set(...r),s.castShadow=!0,i.add(s),s}function jr(i="player"){const t=new vn,e=new vn;t.add(e);const n=i==="player",r=i==="mossman",s=n?fe.ape:r?fe.mossman:fe.warden,a=qn(e,n?.54:r?.83:.62,s,[0,n?.95:1.35,0],[.82,1.05,.63]);if(qn(e,n?.36:r?.54:.4,n?fe.apeLight:s,[0,n?1.58:2.08,.04],[.95,.9,.9]),qn(e,n?.24:.28,fe.face,[0,n?1.61:2.12,.34],[1,.72,.56]),n)for(const l of[-1,1])qn(e,.067,fe.eye,[l*.115,1.7,.54],[.7,.55,.35]);else{const l=new te(new Bi(.24,.055,.05),Jt(1514262));if(l.position.set(0,r?2.02:2.01,.57),e.add(l),!r)for(const h of[-1,1]){const f=qn(e,.17,fe.crystal,[h*.6,.5,.05],[.45,1.5,.4]);f.rotation.z=h*.45}}const o=[];for(const l of[-1,1]){const h=Rc(e,n?.16:.22,n?.48:.6,s,[l*(n?.42:.57),n?1.05:1.4,.02],[1,1,.9]);h.rotation.z=l*-.38,o.push(h);const f=Rc(e,n?.19:.25,n?.34:.53,s,[l*.29,n?.4:.58,-.06],[1,1,.9]);if(f.rotation.z=l*.12,o.push(f),qn(e,n?.14:.23,n?fe.apeLight:s,[l*(n?.48:.68),n?.67:.68,.13],[1,.75,1.15]),!n&&!r){const u=qn(e,.11,fe.crystal,[l*.72,.54,.24],[.45,1.7,.45]);u.rotation.z=l*-.5}}const c=n?2.1:r?2.8:1.9;return t.userData={rig:e,torso:a,limbs:o,kind:i,height:c,phase:yt()*8},t}const jt=jr("player");ae.add(jt);jt.position.set(0,oe(0,0),0);const si=[{name:"MOSSMAN",kind:"mossman",group:jr("mossman"),speed:9.15,hear:60,turn:.5,state:"wander",target:new R(24,0,20),lastHeard:0,attackCooldown:0,ability:"SPORE TRAIL"},{name:"WARDEN",kind:"warden",group:jr("warden"),speed:8.55,hear:86,turn:.75,state:"wander",target:new R(-33,0,-28),lastHeard:0,attackCooldown:0,ability:"XENON HANDS"}];si.forEach((i,t)=>{i.group.position.set(t?-42:39,oe(t?-42:39,t?-31:28),t?-31:28),ae.add(i.group)});const Tl=[];for(let i=0;i<2;i++){const t=jr("player");t.scale.setScalar(.78),t.position.set(i?7:-8,oe(i?7:-8,i?10:-7),i?10:-7),ae.add(t),Tl.push({...t.userData,group:t,phase:i*3,state:"roam",goal:new R((yt()-.5)*95,0,(yt()-.5)*95),alert:0})}const Wt={forward:0,right:0,sprint:!1,crouch:!1};let Ce=0,ni=-.12,yi=new R,Zn=100,Qi=100,Fn=0,Or="solo",We=!1,ye=!1,lo=!1,ze=0,za=0,Cc=0,Al=!1;const Fe=new R,Pc=new R,Cn=new R,Lc=new R,Dc=new R,ug=.65;function ir(i,t=2600){const e=ot("#toast");e.textContent=i,e.classList.add("show"),clearTimeout(Cc),Cc=setTimeout(()=>e.classList.remove("show"),t)}function ls(i,t=jt.position){Fn=Math.max(Fn,i),za=ze;for(const e of si){const n=t.distanceTo(e.group.position);n<e.hear*(i+.25)&&(e.target.set(t.x,oe(t.x,t.z),t.z),e.lastHeard=ze,e.state=n<18?"charge":"investigate")}}function dg(i){Or=i,document.querySelectorAll(".mode-option").forEach(t=>t.classList.toggle("active",t.dataset.mode===Or)),ot("#room-note").textContent=Or==="solo"?"Intelligent echoes wander nearby.":"Same-device room preview • 2 survivors",ot("#session-label").textContent=Or==="solo"?"SOLO / ECHOES ACTIVE":"LOCAL ROOM / 3 SURVIVORS"}function bl(){if(We){ye=!1,ot("#pause-overlay").classList.add("hidden");return}We=!0,lo=!1,ot("#title-screen").classList.add("leaving"),ot("#game-ui").classList.remove("hidden"),ot("#loading").classList.remove("done"),ot("#loading").style.display="flex",requestAnimationFrame(()=>ot("#loading .loading-track i").style.width="100%"),setTimeout(()=>{ot("#loading").classList.add("done"),setTimeout(()=>ot("#loading").style.display="none",650)},650),ir("THE CANOPY IS LISTENING. MOVE QUIETLY.",4200),innerWidth>720&&Be.requestPointerLock&&Be.requestPointerLock()}function ho(){We=!1,ye=!1,ot("#game-ui").classList.add("hidden"),ot("#pause-overlay").classList.add("hidden"),ot("#title-screen").classList.remove("leaving"),document.pointerLockElement&&document.exitPointerLock(),typeof Ga=="function"&&Ga()}function wl(i){ye=i,ot("#pause-overlay").classList.toggle("hidden",!ye),!ye&&innerWidth>720&&Be.requestPointerLock?Be.requestPointerLock():ye&&document.pointerLockElement&&document.exitPointerLock()}function fg(i){i.x=nr(i.x,-97,97),i.z=nr(i.z,-97,97);for(const t of co){const e=i.x-t.x,n=i.z-t.z,r=Math.hypot(e,n),s=ug+t.r;r<s&&r>.001&&(i.x=t.x+e/r*s,i.z=t.z+n/r*s)}return i.y=oe(i.x,i.z),i}function Rl(i){const t=jt.position.y+(Wt.crouch?.85:1.2);Fe.set(jt.position.x,t,jt.position.z);const e=5.8,n=Math.cos(ni)*e,r=new R(Fe.x+Math.sin(Ce)*n,Fe.y+Math.sin(ni)*e+1.05,Fe.z+Math.cos(Ce)*n),s=new R().subVectors(r,Fe).normalize();let a=e+1.2;for(const o of co){const c=o.x-Fe.x,l=o.z-Fe.z,h=c*s.x+l*s.z;if(h>.3&&h<a){const f=Fe.x+s.x*h-o.x,u=Fe.z+s.z*h-o.z;f*f+u*u<(o.r+.28)**2&&(a=h)}}a<e+1.2&&r.lerpVectors(Fe,r,Math.max(.18,(a-.45)/(e+1.2))),Pc.lerp(r,1-Math.exp(-i*8)),In.position.copy(Pc),In.lookAt(Fe.x-Math.sin(Ce)*.65,Fe.y+.35,Fe.z-Math.cos(Ce)*.65)}function pg(i){Lc.set(-Math.sin(Ce),0,-Math.cos(Ce)),Dc.set(Math.cos(Ce),0,-Math.sin(Ce)),Cn.set(0,0,0).addScaledVector(Lc,Wt.forward).addScaledVector(Dc,Wt.right),Cn.lengthSq()>1&&Cn.normalize();const t=Cn.lengthSq()>.01,e=Wt.sprint&&Zn>1&&!Wt.crouch&&t,n=Wt.crouch?1.25:e?6:3.05;e?Zn=Math.max(0,Zn-i*20):Zn=Math.min(100,Zn+i*(Wt.crouch?11:7));const r=1-Math.exp(-i*(t?9:5));yi.x=Zs(yi.x,Cn.x*n,r),yi.z=Zs(yi.z,Cn.z*n,r);const s=jt.position.clone().addScaledVector(yi,i);fg(s),jt.position.copy(s),t&&(jt.rotation.y=Math.atan2(Cn.x,Cn.z),jt.userData.phase+=i*(e?13:Wt.crouch?3:7));const a=jt.userData.phase,o=t?Math.sin(a)*.34:Math.sin(ze*1.6)*.025;jt.userData.rig.position.y=o+(Wt.crouch?-.4:0),jt.userData.limbs.forEach((l,h)=>{l.rotation.x=t?Math.sin(a+h%2*Math.PI)*.65:0});const c=t?Wt.crouch?.12:e?.95:.36:.06;Fn=Math.max(c,Fn-i*.24),t&&ze-za>(e?.38:Wt.crouch?2.1:.82)&&(ls(Wt.crouch?.2:e?1:.48),za=ze),In.fov=Zs(In.fov,Number(ot("#fov-slider").value),1-Math.exp(-i*3)),In.updateProjectionMatrix()}const Ni=[],mg=[new R(-56,0,-50),new R(62,0,-46),new R(48,0,66)],Br=new R(19,0,-27);function gg(i,t){const e=new vn;e.position.set(i.x,oe(i.x,i.z),i.z);const n=new te(new Qe(.42,.58,.22,7),Jt(5328699));n.position.y=.12,n.castShadow=!0,e.add(n);const r=new te(new as(.48,0),fe.crystal);r.position.y=.92,r.rotation.y=t*1.1,r.castShadow=!0,e.add(r);const s=new te(new os(.8,.045,4,12),Jt(12048282,.4,{emissive:5467709,emissiveIntensity:.6}));s.rotation.x=Math.PI/2,s.position.y=.14,e.add(s);const a=new cs(9295771,1.8,9,2);a.position.y=1.2,e.add(a),ae.add(e),Ni.push({group:e,core:r,ring:s,position:e.position,found:!1,index:t})}mg.forEach(gg);const nn=new vn;nn.position.set(Br.x,oe(Br.x,Br.z),Br.z);const uo=new te(new Qe(1.05,1.35,.45,8),fe.metal);uo.position.y=.22;uo.castShadow=!0;nn.add(uo);const fo=new te(new Qe(.13,.25,3.8,6),fe.bark[0]);fo.position.y=2.2;fo.castShadow=!0;nn.add(fo);const Qr=new te(new as(.62,0),fe.crystal);Qr.position.y=4.2;nn.add(Qr);const Cl=new cs(9298593,2.4,18,2);Cl.position.y=4;nn.add(Cl);ae.add(nn);const po=document.createElement("div");po.className="objective-card";po.innerHTML='<span class="objective-kicker">RECOVERY ORDER</span><b id="objective-title">FIND THE TRANSMITTERS</b><span id="objective-detail">0 / 3 FIELD RELAYS</span><small>FOLLOW THE GREEN SIGNALS ON YOUR MAP</small>';ot("#game-ui").append(po);const tr=document.createElement("div");tr.className="interact-hint";ot("#game-ui").append(tr);const hr=document.createElement("div");hr.className="end-overlay hidden";hr.innerHTML='<div class="end-card"><span class="eyebrow" id="end-eyebrow">FIELD REPORT</span><h2 id="end-title">SIGNAL RECOVERED</h2><p id="end-copy"></p><button class="play-button" id="again-button"><span>PLAY AGAIN</span><span class="button-arrow">↗</span></button><button class="text-button" id="end-menu">RETURN TO MENU</button></div>';ot("#game-ui").append(hr);let xn=0,On=!1,ts=0,es=0;function hs(){ot("#objective-title").textContent=xn===3?"RETURN TO THE BEACON":"FIND THE TRANSMITTERS",ot("#objective-detail").textContent=xn===3?"3 / 3 RELAYS · BEACON ACTIVE":`${xn} / 3 FIELD RELAYS`,ot("#status-text").textContent=xn===3?"BEACON ACTIVE":Fn>.65?"SOUND CARRIED":"UNOBSERVED"}function mo(){if(!We||ye||lo||On||ts>0)return;ts=.35;const i=Ni.find(t=>!t.found&&jt.position.distanceTo(t.position)<3.1);if(i){i.found=!0,i.group.visible=!1,xn++,hs(),ls(.48),ir(`FIELD RELAY ${xn} OF 3 RECOVERED.`,2200);return}if(xn===3&&jt.position.distanceTo(nn.position)<4){Pl(!0);return}ir("NOTHING WITHIN REACH.",900)}function Pl(i){On||(On=!0,ye=!0,ot("#end-eyebrow").textContent=i?"TRANSMISSION ESTABLISHED":"FIELD REPORT · LOST CONTACT",ot("#end-title").textContent=i?"YOU MADE IT OUT":"THE CANOPY KEPT YOU",ot("#end-copy").textContent=i?`All three relays are online. The signal got through. Field time: ${_g(ze)}.`:"Your signal has gone quiet. The forest is still listening.",hr.classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock())}function _g(i){const t=Math.floor(i/60),e=Math.floor(i%60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}const ke=new Set;function vg(i){const t=i.key.toLowerCase();if(ke.add(t),[" ","arrowup","arrowdown","arrowleft","arrowright"].includes(t)&&i.preventDefault(),t==="escape"&&We&&!On){wl(!ye);return}(t==="e"||t===" ")&&!i.repeat&&mo(),t==="c"&&!i.repeat&&(Wt.crouch=!Wt.crouch)}function xg(i){ke.delete(i.key.toLowerCase())}window.addEventListener("keydown",vg);window.addEventListener("keyup",xg);window.addEventListener("blur",()=>{ke.clear(),Wt.forward=Wt.right=0,Wt.sprint=!1});function Mg(){go||(Wt.forward=(ke.has("w")||ke.has("arrowup")?1:0)-(ke.has("s")||ke.has("arrowdown")?1:0),Wt.right=(ke.has("d")||ke.has("arrowright")?1:0)-(ke.has("a")||ke.has("arrowleft")?1:0),Wt.sprint=ke.has("shift"))}let go=!1;Be.addEventListener("click",()=>{var i;We&&!ye&&!On&&innerWidth>720&&!document.pointerLockElement&&((i=Be.requestPointerLock)==null||i.call(Be))});document.addEventListener("pointerlockchange",()=>{Al=document.pointerLockElement===Be});document.addEventListener("mousemove",i=>{Al&&We&&!ye&&(Ce-=i.movementX*.0022,ni=nr(ni-i.movementY*.0018,-.52,.38))});Be.addEventListener("touchstart",i=>{if(innerWidth<=720&&We&&!ye){const t=i.changedTouches[0];Ti={x:t.clientX,y:t.clientY}}},{passive:!0});let Ti=null;Be.addEventListener("touchmove",i=>{if(Ti&&innerWidth<=720&&We&&!ye){const t=i.changedTouches[0];Ce-=(t.clientX-Ti.x)*.006,ni=nr(ni-(t.clientY-Ti.y)*.004,-.5,.35),Ti={x:t.clientX,y:t.clientY}}},{passive:!0});Be.addEventListener("touchend",()=>Ti=null,{passive:!0});const ii=ot("#joystick"),Ll=ii.querySelector(".stick");let _o=null;ii.addEventListener("pointerdown",i=>{_o=i.pointerId,go=!0,ii.setPointerCapture(i.pointerId),Dl(i)});ii.addEventListener("pointermove",i=>{i.pointerId===_o&&Dl(i)});function Dl(i){const t=ii.getBoundingClientRect(),e=i.clientX-(t.left+t.width/2),n=i.clientY-(t.top+t.height/2),r=t.width*.34,s=Math.hypot(e,n),a=Math.min(1,r/(s||1));Wt.right=e*a/r,Wt.forward=-n*a/r,Ll.style.transform=`translate(${e*a}px,${n*a}px)`}function Il(){_o=null,Wt.forward=Wt.right=0,Ll.style.transform="",go=!1}ii.addEventListener("pointerup",Il);ii.addEventListener("pointercancel",Il);ot("#mobile-run").addEventListener("pointerdown",i=>{i.preventDefault(),Wt.sprint=!0});["pointerup","pointercancel","pointerleave"].forEach(i=>ot("#mobile-run").addEventListener(i,()=>Wt.sprint=!1));ot("#mobile-crouch").addEventListener("click",()=>{Wt.crouch=!Wt.crouch,ot("#mobile-crouch").classList.toggle("active",Wt.crouch)});const Fi=document.createElement("button");Fi.id="mobile-interact";Fi.textContent="USE";ot(".mobile-actions").append(Fi);Fi.addEventListener("click",mo);function Sg(i){for(const t of si){t.attackCooldown=Math.max(0,t.attackCooldown-i);const e=t.group.position.distanceTo(jt.position),n=ze-t.lastHeard<15;if(t.state==="wander"&&e<11&&(t.state="charge",t.target.copy(jt.position)),t.state==="investigate"&&n&&e<20&&(t.state="charge"),t.state==="charge"&&e>t.hear*1.35&&ze-t.lastHeard>10&&(t.state="investigate"),(t.state==="charge"||t.state==="investigate"&&n)&&e<2.1&&t.attackCooldown<=0&&(Qi=Math.max(0,Qi-(t.kind==="mossman"?17:13)),t.attackCooldown=1.05,es=.28,ls(.8),ir(`${t.name} STRUCK YOU. BREAK LINE OF SIGHT.`,1700),Qi<=0)){Pl(!1);break}let r=t.target;t.state==="charge"?(r=jt.position,t.target.copy(jt.position)):t.state==="wander"&&t.group.position.distanceTo(t.target)<2?(t.target.set((yt()-.5)*155,0,(yt()-.5)*155),t.target.y=oe(t.target.x,t.target.z)):t.state==="investigate"&&!n&&(t.state="wander");const s=r.x-t.group.position.x,a=r.z-t.group.position.z,o=Math.hypot(s,a);if(o>.15){const c=t.speed*(t.state==="charge"?1:.45),l=Math.min(o,c*i);t.group.position.x+=s/o*l,t.group.position.z+=a/o*l,t.group.rotation.y=Math.atan2(s,a),t.group.position.y=oe(t.group.position.x,t.group.position.z),t.group.userData.phase+=i*(t.state==="charge"?10:4),t.group.userData.rig.position.y=Math.sin(t.group.userData.phase)*.08,t.group.userData.limbs.forEach((h,f)=>h.rotation.x=Math.sin(t.group.userData.phase+f%2*Math.PI)*.42)}}}function yg(i){Tl.forEach((t,e)=>{const n=t.group;(n.position.distanceTo(t.goal)<2||yt()<i*.015)&&t.goal.set((yt()-.5)*150,0,(yt()-.5)*150);const r=t.goal.x-n.position.x,s=t.goal.z-n.position.z,a=Math.hypot(r,s);a>.4&&(n.position.x+=r/a*i*2.35,n.position.z+=s/a*i*2.35,n.rotation.y=Math.atan2(r,s),n.position.y=oe(n.position.x,n.position.z),n.userData.phase+=i*5,n.userData.rig.position.y=Math.sin(n.userData.phase)*.1,n.userData.limbs.forEach((c,l)=>c.rotation.x=Math.sin(n.userData.phase+l%2*Math.PI)*.35)),si.find(c=>c.group.position.distanceTo(n.position)<18)&&yt()<i*.35&&ls(.42,n.position)})}function Ic(i){Ni.forEach(n=>{n.found||(n.core.rotation.y+=i*.65,n.core.position.y=.92+Math.sin(ze*2+n.index)*.12,n.ring.rotation.z+=i*.3)}),Qr.rotation.y+=i*.8,Qr.position.y=4.2+Math.sin(ze*1.8)*.16,ts=Math.max(0,ts-i),es=Math.max(0,es-i);let t=null,e=999;Ni.filter(n=>!n.found).forEach(n=>{const r=jt.position.distanceTo(n.position);r<e&&(t=n,e=r)}),xn===3&&(t=nn,e=jt.position.distanceTo(nn.position)),t&&e<4.2?(tr.textContent=e<3.1?"[ E ]  RECOVER FIELD RELAY":"FIELD RELAY NEARBY",tr.classList.add("visible"),innerWidth<=720&&Fi.classList.add("visible")):(tr.classList.remove("visible"),Fi.classList.remove("visible")),e<3.1&&Wt.interact&&(Wt.interact=!1,mo())}function Eg(i){const t=Math.round(Qi),e=Math.round(Zn),n=Math.round(Fn*100);ot("#health-fill").style.width=`${t}%`,ot("#health-value").textContent=String(t).padStart(3,"0"),ot("#stamina-fill").style.width=`${e}%`,ot("#stamina-value").textContent=String(e).padStart(3,"0"),ot("#noise-fill").style.width=`${n}%`,ot("#noise-value").textContent=n>70?"HIGH":n>35?"MED":"LOW",ot("#degrees").textContent=`${String(Math.round((Ce*180/Math.PI%360+360)%360)).padStart(3,"0")}°`;const r=(Ce*180/Math.PI%360+360)%360;ot("#bearing").textContent=["N","NE","E","SE","S","SW","W","NW"][Math.round(r/45)%8],ot("#map-coord").textContent=`${Math.round(jt.position.x+100)} / ${Math.round(jt.position.z+100)}`,ot("#time-readout").textContent=`${Tg(ze)}  ·  ${Fn>.7?"DISTURBED":"CLEARING"}`;const s=si.map(o=>({p:o,d:o.group.position.distanceTo(jt.position)})).sort((o,c)=>o.d-c.d)[0],a=ot("#threat");s&&s.d<62?(a.classList.remove("hidden"),ot("#threat-name").textContent=s.p.state==="charge"?`${s.p.name} IS CLOSING`:"SOMETHING HEARD YOU",ot("#threat-distance").textContent=`${s.p.state==="charge"?"CLOSING":"TRACKING"} — ${Math.round(s.d)} M`,a.style.setProperty("--danger",`${Math.max(0,1-s.d/62)}`)):a.classList.add("hidden"),ot("#game-ui").classList.toggle("under-attack",es>0),bg()}function Tg(i){const t=(402+Math.floor(i/60))%720,e=Math.floor(t/60),n=t%60;return`${String(e||12).padStart(2,"0")}:${String(n).padStart(2,"0")} AM`}const Ha=ot("#minimap"),Ag=Ha.getContext("2d");function bg(){const i=Ag,t=Ha.width,e=Ha.height;i.clearRect(0,0,t,e),i.fillStyle="#18251d",i.fillRect(0,0,t,e),i.strokeStyle="rgba(190,205,170,.10)",i.lineWidth=1;for(let s=20;s<t;s+=20)i.beginPath(),i.moveTo(s,0),i.lineTo(s,e),i.stroke(),i.beginPath(),i.moveTo(0,s),i.lineTo(t,s),i.stroke();const n=s=>t/2+s*.52,r=s=>e/2+s*.52;i.fillStyle="#527b53",Ni.forEach(s=>{s.found||(i.beginPath(),i.arc(n(s.position.x),r(s.position.z),3,0,Math.PI*2),i.fill())}),i.fillStyle="#d57a4a",si.forEach(s=>{const a=n(s.group.position.x),o=r(s.group.position.z);a>0&&a<t&&o>0&&o<e&&(i.beginPath(),i.arc(a,o,2.4,0,Math.PI*2),i.fill())}),i.fillStyle="#d9c292",i.beginPath(),i.arc(n(nn.position.x),r(nn.position.z),2.5,0,Math.PI*2),i.fill(),i.save(),i.translate(n(jt.position.x),r(jt.position.z)),i.rotate(-Ce),i.fillStyle="#eff0dc",i.beginPath(),i.moveTo(0,-5),i.lineTo(3.2,3),i.lineTo(0,1.8),i.lineTo(-3.2,3),i.closePath(),i.fill(),i.restore()}let pn=null,Uc=null,$i=!1;function wg(){if($i=!$i,ot("#sound-button").classList.toggle("active",$i),!pn){const i=window.AudioContext||window.webkitAudioContext;if(i){pn=new i;const t=pn.createOscillator(),e=pn.createGain(),n=pn.createBiquadFilter();t.type="sine",t.frequency.value=56,n.type="lowpass",n.frequency.value=180,e.gain.value=0,t.connect(n).connect(e).connect(pn.destination),t.start(),Uc=e}}pn&&(pn.resume(),Uc.gain.setTargetAtTime($i?.035:0,pn.currentTime,.18)),$i&&ir("AMBIENT MONITORING ON.",1200)}ot("#play-button").addEventListener("click",bl);ot("#resume-button").addEventListener("click",()=>wl(!1));ot("#leave-button").addEventListener("click",ho);ot("#pause-leave").addEventListener("click",ho);ot("#sound-button").addEventListener("click",wg);ot("#settings-button").addEventListener("click",()=>ot("#settings-panel").classList.toggle("hidden"));ot("#close-settings").addEventListener("click",()=>ot("#settings-panel").classList.add("hidden"));ot("#fov-slider").addEventListener("input",i=>ot("#fov-value").textContent=`${i.target.value}°`);ot("#pixel-slider").addEventListener("input",i=>{const t=Number(i.target.value);ot("#pixel-value").textContent=t>.85?"ULTRA":t>.68?"HIGH":"LOW",en.setPixelRatio(Math.min(devicePixelRatio,1.4)*t),en.setSize(innerWidth,innerHeight,!1)});document.querySelectorAll(".mode-option").forEach(i=>i.addEventListener("click",()=>dg(i.dataset.mode)));ot("#again-button").addEventListener("click",()=>{Ga(),bl()});ot("#end-menu").addEventListener("click",ho);function Ga(){Qi=100,Zn=100,Fn=0,ze=0,xn=0,On=!1,lo=!1,ye=!1,yi.set(0,0,0),jt.position.set(0,oe(0,0),0),jt.userData.rig.position.set(0,0,0),Ce=0,ni=-.12,Ni.forEach(i=>{i.found=!1,i.group.visible=!0}),si.forEach((i,t)=>{i.group.position.set(t?-42:39,oe(t?-42:39,t?-31:28),t?-31:28),i.state="wander",i.target.set(t?-33:24,0,t?-28:20),i.lastHeard=0,i.attackCooldown=0}),ot("#end-overlay"),hr.classList.add("hidden"),ot("#pause-overlay").classList.add("hidden"),hs()}function Rg(){In.aspect=innerWidth/innerHeight,In.updateProjectionMatrix(),en.setSize(innerWidth,innerHeight,!1)}window.addEventListener("resize",Rg);let Nc=performance.now();function Ul(i){requestAnimationFrame(Ul);const t=Math.min(.05,(i-Nc)/1e3||0);Nc=i,Mg(),We&&!ye&&!On?(ze+=t,pg(t),Sg(t),yg(t),Ic(t),hs(),Eg()):We||Ic(t),(!We||!ye&&!On)&&Rl(t),en.render(ae,In)}hs();Rl(1);requestAnimationFrame(Ul);
