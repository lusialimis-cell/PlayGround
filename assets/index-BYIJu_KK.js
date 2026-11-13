(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const Va="187",Zc=0,wo=1,Jc=2,ts=1,Qc=2,Qi=3,ci=0,Ve=1,be=2,Pi=0,es=1,as=2,bo=3,To=4,jc=5,Ri=100,th=101,eh=102,nh=103,ih=104,sh=200,rh=201,ah=202,oh=203,Vl=204,Wl=205,lh=206,ch=207,hh=208,uh=209,dh=210,fh=211,ph=212,mh=213,gh=214,Jr=0,Qr=1,jr=2,os=3,ta=4,ea=5,na=6,ia=7,Xl=0,_h=1,xh=2,Fn=0,ql=1,Yl=2,Kl=3,Wa=4,$l=5,Zl=6,Jl=7,Ql=300,Di=301,ls=302,pr=303,mr=304,cs=1e3,dn=1001,sa=1002,Te=1003,jl=1004,_s=1005,qe=1006,gr=1007,$n=1008,Qe=1009,tc=1010,ec=1011,hs=1012,Xa=1013,bn=1014,fn=1015,Tn=1016,qa=1017,Ya=1018,Ni=1020,nc=35902,ic=35899,sc=1021,rc=1022,En=1023,Jn=1026,Zn=1027,Ka=1028,$a=1029,hi=1030,Za=1031,Ja=1033,qs=33776,Ys=33777,Ks=33778,$s=33779,ra=35840,aa=35841,oa=35842,la=35843,ca=36196,ha=37492,ua=37496,da=37488,fa=37489,Qs=37490,pa=37491,ma=37808,ga=37809,_a=37810,xa=37811,va=37812,Ma=37813,Sa=37814,ya=37815,Ea=37816,wa=37817,ba=37818,Ta=37819,Aa=37820,Ra=37821,Ca=36492,Pa=36494,La=36495,Ia=36283,Da=36284,js=36285,Na=36286,vh=3200,Ua=0,Mh=1,Nn="",Xe="srgb",tr="srgb-linear",er="linear",ie="srgb",_r=7680,Sh=519,yh=512,Eh=513,wh=514,ac=515,bh=516,Th=517,oc=518,lc=519,Ah=35044,Ao=35048,Ro="300 es",pn=2e3,us=2001;function Rh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function nr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ch(){const s=nr("canvas");return s.style.display="block",s}const Co={};function Po(...s){const t="THREE."+s.shift();console.log(t,...s)}function cc(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Nt(...s){s=cc(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function te(...s){s=cc(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Li(...s){const t=s.join(" ");t in Co||(Co[t]=!0,Nt(...s))}function Ph(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Lh={[Jr]:Jr,[jr]:na,[ta]:ta,[os]:ea,[Qr]:Qr,[na]:jr,[ia]:ia,[ea]:os};class ui{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lo=1234567;const ns=Math.PI/180,Ui=180/Math.PI;function Bi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[s&255]+Be[s>>8&255]+Be[s>>16&255]+Be[s>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function qt(s,t,e){return Math.max(t,Math.min(e,s))}function Qa(s,t){return(s%t+t)%t}function Ih(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Dh(s,t,e){return s!==t?(e-s)/(t-s):0}function is(s,t,e){return(1-e)*s+e*t}function Nh(s,t,e,n){return is(s,t,1-Math.exp(-e*n))}function Uh(s,t=1){return t-Math.abs(Qa(s,t*2)-t)}function Oh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Fh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Bh(s,t){return s+Math.floor(Math.random()*(t-s+1))}function zh(s,t){return s+Math.random()*(t-s)}function kh(s){return s*(.5-Math.random())}function Gh(s){s!==void 0&&(Lo=s);let t=Lo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Hh(s){return s*ns}function Vh(s){return s*Ui}function Wh(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Xh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function hc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function qh(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),f=r((t-n)/2),u=a((t-n)/2),d=r((n-t)/2),p=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*f,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*f,o*c);break;case"ZXZ":s.set(l*f,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*p,l*d,o*c);break;case"YXY":s.set(l*d,o*h,l*p,o*c);break;case"ZYZ":s.set(l*p,l*d,o*h,o*c);break;default:Nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ja(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function uc(s,t){if(t.constructor===Float32Array)return s;const e=ja(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function dc(s,t){if(t.constructor===Float32Array)return s;const e=ja(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}const Yh={DEG2RAD:ns,RAD2DEG:Ui,generateUUID:Bi,clamp:qt,euclideanModulo:Qa,mapLinear:Ih,inverseLerp:Dh,lerp:is,damp:Nh,pingpong:Uh,smoothstep:Oh,smootherstep:Fh,randInt:Bh,randFloat:zh,randFloatSpread:kh,seededRandom:Gh,degToRad:Hh,radToDeg:Vh,isPowerOfTwo:Wh,ceilPowerOfTwo:Xh,floorPowerOfTwo:hc,setQuaternionFromProperEuler:qh,normalize:dc,denormalize:uc},lo=class lo{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};lo.prototype.isVector2=!0;let Tt=lo;class di{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],u=r[a+0],d=r[a+1],p=r[a+2],x=r[a+3];if(f!==x||l!==u||c!==d||h!==p){let g=l*u+c*d+h*p+f*x;g<0&&(u=-u,d=-d,p=-p,x=-x,g=-g);let m=1-o;if(g<.9995){const v=Math.acos(g),w=Math.sin(v);m=Math.sin(m*v)/w,o=Math.sin(o*v)/w,l=l*m+u*o,c=c*m+d*o,h=h*m+p*o,f=f*m+x*o}else{l=l*m+u*o,c=c*m+d*o,h=h*m+p*o,f=f*m+x*o;const v=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=v,c*=v,h*=v,f*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=r[a],u=r[a+1],d=r[a+2],p=r[a+3];return t[e]=o*p+h*f+l*d-c*u,t[e+1]=l*p+h*u+c*f-o*d,t[e+2]=c*p+h*d+o*u-l*f,t[e+3]=h*p-o*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),f=o(r/2),u=l(n/2),d=l(i/2),p=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"YXZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"ZXY":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"ZYX":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"YZX":this._x=u*h*f+c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f-u*d*p;break;case"XZY":this._x=u*h*f-c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f+u*d*p;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const co=class co{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Io.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Io.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=i+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return xr.copy(this).projectOnVector(t),this.sub(xr)}reflect(t){return this.sub(xr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};co.prototype.isVector3=!0;let R=co;const xr=new R,Io=new di,ho=class ho{constructor(t,e,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],p=n[8],x=i[0],g=i[3],m=i[6],v=i[1],w=i[4],y=i[7],T=i[2],b=i[5],_=i[8];return r[0]=a*x+o*v+l*T,r[3]=a*g+o*w+l*b,r[6]=a*m+o*y+l*_,r[1]=c*x+h*v+f*T,r[4]=c*g+h*w+f*b,r[7]=c*m+h*y+f*_,r[2]=u*x+d*v+p*T,r[5]=u*g+d*w+p*b,r[8]=u*m+d*y+p*_,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,p=e*f+n*u+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return t[0]=f*x,t[1]=(i*c-h*n)*x,t[2]=(o*n-i*a)*x,t[3]=u*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-o*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Li("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(vr.makeScale(t,e)),this}rotate(t){return Li("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(vr.makeRotation(-t)),this}translate(t,e){return Li("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(vr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ho.prototype.isMatrix3=!0;let Bt=ho;const vr=new Bt,Do=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),No=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kh(){const s={enabled:!0,workingColorSpace:tr,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ie&&(i.r=Bn(i.r),i.g=Bn(i.g),i.b=Bn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ie&&(i.r=Ii(i.r),i.g=Ii(i.g),i.b=Ii(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Nn?er:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[tr]:{primaries:t,whitePoint:n,transfer:er,toXYZ:Do,fromXYZ:No,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:t,whitePoint:n,transfer:ie,toXYZ:Do,fromXYZ:No,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}}),s}const Zt=Kh();function Bn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ii(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let pi;class $h{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{pi===void 0&&(pi=nr("canvas")),pi.width=t.width,pi.height=t.height;const i=pi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=pi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=nr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Bn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bn(e[n]/255)*255):e[n]=Bn(e[n]);return{data:e,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Zh=0;class to{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=Bi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Mr(i[a].image)):r.push(Mr(i[a]))}else r=Mr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Mr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?$h.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}let Jh=0;const Sr=new R;class ke extends ui{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,n=dn,i=dn,r=qe,a=$n,o=En,l=Qe,c=ke.DEFAULT_ANISOTROPY,h=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=Bi(),this.name="",this.source=new to(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Sr).x}get height(){return this.source.getSize(Sr).y}get depth(){return this.source.getSize(Sr).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Nt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Nt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ql)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cs:t.x=t.x-Math.floor(t.x);break;case dn:t.x=t.x<0?0:1;break;case sa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cs:t.y=t.y-Math.floor(t.y);break;case dn:t.y=t.y<0?0:1;break;case sa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=Ql;ke.DEFAULT_ANISOTROPY=1;const uo=class uo{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,y=(d+1)/2,T=(m+1)/2,b=(h+u)/4,_=(f+x)/4,E=(p+g)/4;return w>y&&w>T?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=b/n,r=_/n):y>T?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=b/i,r=E/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=_/r,i=E/r),this.set(n,i,r,e),this}let v=Math.sqrt((g-p)*(g-p)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(f-x)/v,this.z=(u-h)/v,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this.w=qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this.w=qt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};uo.prototype.isVector4=!0;let pe=uo;class Qh extends ui{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e),this.textures=[];const i=n.count;for(let r=0;r<i;r++)this.textures[r]=new ke({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new to(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wn extends Qh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class fc extends ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Te,this.minFilter=Te,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class jh extends ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Te,this.minFilter=Te,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const lr=class lr{constructor(t,e,n,i,r,a,o,l,c,h,f,u,d,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,f,u,d,p,x,g)}set(t,e,n,i,r,a,o,l,c,h,f,u,d,p,x,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lr().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/mi.setFromMatrixColumn(t,0).length(),r=1/mi.setFromMatrixColumn(t,1).length(),a=1/mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const u=a*h,d=a*f,p=o*h,x=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+p*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=p+d*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,d=l*f,p=c*h,x=c*f;e[0]=u+x*o,e[4]=p*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-p,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,d=l*f,p=c*h,x=c*f;e[0]=u-x*o,e[4]=-a*f,e[8]=p+d*o,e[1]=d+p*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,d=a*f,p=o*h,x=o*f;e[0]=l*h,e[4]=p*c-d,e[8]=u*c+x,e[1]=l*f,e[5]=x*c+u,e[9]=d*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,d=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=x-u*f,e[8]=p*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*f+p,e[10]=u-x*f}else if(t.order==="XZY"){const u=a*l,d=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+x,e[5]=a*h,e[9]=d*f-p,e[2]=p*f-d,e[6]=o*h,e[10]=x*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tu,t,eu)}lookAt(t,e,n){const i=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),Vn.crossVectors(n,Ye),Vn.lengthSq()===0&&(Math.abs(n.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),Vn.crossVectors(n,Ye)),Vn.normalize(),xs.crossVectors(Ye,Vn),i[0]=Vn.x,i[4]=xs.x,i[8]=Ye.x,i[1]=Vn.y,i[5]=xs.y,i[9]=Ye.y,i[2]=Vn.z,i[6]=xs.z,i[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],p=n[2],x=n[6],g=n[10],m=n[14],v=n[3],w=n[7],y=n[11],T=n[15],b=i[0],_=i[4],E=i[8],I=i[12],P=i[1],N=i[5],O=i[9],V=i[13],D=i[2],H=i[6],Z=i[10],k=i[14],nt=i[3],X=i[7],Q=i[11],tt=i[15];return r[0]=a*b+o*P+l*D+c*nt,r[4]=a*_+o*N+l*H+c*X,r[8]=a*E+o*O+l*Z+c*Q,r[12]=a*I+o*V+l*k+c*tt,r[1]=h*b+f*P+u*D+d*nt,r[5]=h*_+f*N+u*H+d*X,r[9]=h*E+f*O+u*Z+d*Q,r[13]=h*I+f*V+u*k+d*tt,r[2]=p*b+x*P+g*D+m*nt,r[6]=p*_+x*N+g*H+m*X,r[10]=p*E+x*O+g*Z+m*Q,r[14]=p*I+x*V+g*k+m*tt,r[3]=v*b+w*P+y*D+T*nt,r[7]=v*_+w*N+y*H+T*X,r[11]=v*E+w*O+y*Z+T*Q,r[15]=v*I+w*V+y*k+T*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],p=t[3],x=t[7],g=t[11],m=t[15],v=l*d-c*u,w=o*d-c*f,y=o*u-l*f,T=a*d-c*h,b=a*u-l*h,_=a*f-o*h;return e*(x*v-g*w+m*y)-n*(p*v-g*T+m*b)+i*(p*w-x*T+m*_)-r*(p*y-x*b+g*_)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],p=t[12],x=t[13],g=t[14],m=t[15],v=e*o-n*a,w=e*l-i*a,y=e*c-r*a,T=n*l-i*o,b=n*c-r*o,_=i*c-r*l,E=h*x-f*p,I=h*g-u*p,P=h*m-d*p,N=f*g-u*x,O=f*m-d*x,V=u*m-d*g,D=v*V-w*O+y*N+T*P-b*I+_*E;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/D;return t[0]=(o*V-l*O+c*N)*H,t[1]=(i*O-n*V-r*N)*H,t[2]=(x*_-g*b+m*T)*H,t[3]=(u*b-f*_-d*T)*H,t[4]=(l*P-a*V-c*I)*H,t[5]=(e*V-i*P+r*I)*H,t[6]=(g*y-p*_-m*w)*H,t[7]=(h*_-u*y+d*w)*H,t[8]=(a*O-o*P+c*E)*H,t[9]=(n*P-e*O-r*E)*H,t[10]=(p*b-x*y+m*v)*H,t[11]=(f*y-h*b-d*v)*H,t[12]=(o*I-a*N-l*E)*H,t[13]=(e*N-n*I+i*E)*H,t[14]=(x*w-p*T-g*v)*H,t[15]=(h*T-f*w+u*v)*H,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,p=r*f,x=a*h,g=a*f,m=o*f,v=l*c,w=l*h,y=l*f,T=n.x,b=n.y,_=n.z;return i[0]=(1-(x+m))*T,i[1]=(d+y)*T,i[2]=(p-w)*T,i[3]=0,i[4]=(d-y)*b,i[5]=(1-(u+m))*b,i[6]=(g+v)*b,i[7]=0,i[8]=(p+w)*_,i[9]=(g-v)*_,i[10]=(1-(u+x))*_,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=mi.set(i[0],i[1],i[2]).length();const o=mi.set(i[4],i[5],i[6]).length(),l=mi.set(i[8],i[9],i[10]).length();r<0&&(a=-a),on.copy(this);const c=1/a,h=1/o,f=1/l;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=f,on.elements[9]*=f,on.elements[10]*=f,e.setFromRotationMatrix(on),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,r,a,o=pn,l=!1){const c=this.elements,h=2*r/(e-t),f=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let p,x;if(l)p=r/(a-r),x=a*r/(a-r);else if(o===pn)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===us)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=pn,l=!1){const c=this.elements,h=2/(e-t),f=2/(n-i),u=-(e+t)/(e-t),d=-(n+i)/(n-i);let p,x;if(l)p=1/(a-r),x=a/(a-r);else if(o===pn)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===us)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};lr.prototype.isMatrix4=!0;let se=lr;const mi=new R,on=new se,tu=new R(0,0,0),eu=new R(1,1,1),Vn=new R,xs=new R,Ye=new R,Uo=new se,Oo=new di;class zn{constructor(t=0,e=0,n=0,i=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Uo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Oo.setFromEuler(this),this.setFromQuaternion(Oo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class pc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let nu=0;const Fo=new R,gi=new di,Rn=new se,vs=new R,Wi=new R,iu=new R,su=new di,Bo=new R(1,0,0),zo=new R(0,1,0),ko=new R(0,0,1),Go={type:"added"},ru={type:"removed"},_i={type:"childadded",child:null},yr={type:"childremoved",child:null};class ge extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=Bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new R,e=new zn,n=new di,i=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new se},normalMatrix:{value:new Bt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.multiply(gi),this}rotateOnWorldAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.premultiply(gi),this}rotateX(t){return this.rotateOnAxis(Bo,t)}rotateY(t){return this.rotateOnAxis(zo,t)}rotateZ(t){return this.rotateOnAxis(ko,t)}translateOnAxis(t,e){return Fo.copy(t).applyQuaternion(this.quaternion),this.position.add(Fo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bo,t)}translateY(t){return this.translateOnAxis(zo,t)}translateZ(t){return this.translateOnAxis(ko,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vs.copy(t):vs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(Wi,vs,this.up):Rn.lookAt(vs,Wi,this.up),this.quaternion.setFromRotationMatrix(Rn),i&&(Rn.extractRotation(i.matrixWorld),gi.setFromRotationMatrix(Rn),this.quaternion.premultiply(gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(te("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Go),_i.child=t,this.dispatchEvent(_i),_i.child=null):te("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ru),yr.child=t,this.dispatchEvent(yr),yr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Rn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Go),_i.child=t,this.dispatchEvent(_i),_i.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,t,iu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,su,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ge.DEFAULT_UP=new R(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Dt extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const au={type:"move"};class Er{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&u>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(au)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Dt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function wr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Zt.workingColorSpace){if(t=Qa(t,1),e=qt(e,0,1),n=qt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=wr(a,r,t+1/3),this.g=wr(a,r,t),this.b=wr(a,r,t-1/3)}return Zt.colorSpaceToWorking(this,i),this}setStyle(t,e=Xe){function n(r){r!==void 0&&parseFloat(r)<1&&Nt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Nt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){const n=mc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bn(t.r),this.g=Bn(t.g),this.b=Bn(t.b),this}copyLinearToSRGB(t){return this.r=Ii(t.r),this.g=Ii(t.g),this.b=Ii(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return Zt.workingToColorSpace(ze.copy(this),t),Math.round(qt(ze.r*255,0,255))*65536+Math.round(qt(ze.g*255,0,255))*256+Math.round(qt(ze.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.workingToColorSpace(ze.copy(this),e);const n=ze.r,i=ze.g,r=ze.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.workingToColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=Xe){Zt.workingToColorSpace(ze.copy(this),t);const e=ze.r,n=ze.g,i=ze.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Wn),this.setHSL(Wn.h+t,Wn.s+e,Wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wn),t.getHSL(Ms);const n=is(Wn.h,Ms.h,e),i=is(Wn.s,Ms.s,e),r=is(Wn.l,Ms.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ze=new Ot;Ot.NAMES=mc;class eo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ot(t),this.density=e}clone(){return new eo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ou extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ln=new R,Cn=new R,br=new R,Pn=new R,xi=new R,vi=new R,Ho=new R,Tr=new R,Ar=new R,Rr=new R,Cr=new pe,Pr=new pe,Lr=new pe;class hn{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ln.subVectors(t,e),i.cross(ln);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){ln.subVectors(i,e),Cn.subVectors(n,e),br.subVectors(t,e);const a=ln.dot(ln),o=ln.dot(Cn),l=ln.dot(br),c=Cn.dot(Cn),h=Cn.dot(br),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(c*l-o*h)*u,p=(a*h-o*l)*u;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pn.x),l.addScaledVector(a,Pn.y),l.addScaledVector(o,Pn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return Cr.setScalar(0),Pr.setScalar(0),Lr.setScalar(0),Cr.fromBufferAttribute(t,e),Pr.fromBufferAttribute(t,n),Lr.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Cr,r.x),a.addScaledVector(Pr,r.y),a.addScaledVector(Lr,r.z),a}static isFrontFacing(t,e,n,i){return ln.subVectors(n,e),Cn.subVectors(t,e),ln.cross(Cn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),ln.cross(Cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return hn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;xi.subVectors(i,n),vi.subVectors(r,n),Tr.subVectors(t,n);const l=xi.dot(Tr),c=vi.dot(Tr);if(l<=0&&c<=0)return e.copy(n);Ar.subVectors(t,i);const h=xi.dot(Ar),f=vi.dot(Ar);if(h>=0&&f<=h)return e.copy(i);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(xi,a);Rr.subVectors(t,r);const d=xi.dot(Rr),p=vi.dot(Rr);if(p>=0&&d<=p)return e.copy(r);const x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(vi,o);const g=h*p-d*f;if(g<=0&&f-h>=0&&d-p>=0)return Ho.subVectors(r,i),o=(f-h)/(f-h+(d-p)),e.copy(i).addScaledVector(Ho,o);const m=1/(g+x+u);return a=x*m,o=u*m,e.copy(n).addScaledVector(xi,a).addScaledVector(vi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class fi{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,cn):cn.fromBufferAttribute(r,a),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ss.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ss.copy(n.boundingBox)),Ss.applyMatrix4(t.matrixWorld),this.union(Ss)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xi),ys.subVectors(this.max,Xi),Mi.subVectors(t.a,Xi),Si.subVectors(t.b,Xi),yi.subVectors(t.c,Xi),Xn.subVectors(Si,Mi),qn.subVectors(yi,Si),ni.subVectors(Mi,yi);let e=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-ni.z,ni.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,ni.z,0,-ni.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-ni.y,ni.x,0];return!Ir(e,Mi,Si,yi,ys)||(e=[1,0,0,0,1,0,0,0,1],!Ir(e,Mi,Si,yi,ys))?!1:(Es.crossVectors(Xn,qn),e=[Es.x,Es.y,Es.z],Ir(e,Mi,Si,yi,ys))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ln=[new R,new R,new R,new R,new R,new R,new R,new R],cn=new R,Ss=new fi,Mi=new R,Si=new R,yi=new R,Xn=new R,qn=new R,ni=new R,Xi=new R,ys=new R,Es=new R,ii=new R;function Ir(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ii.fromArray(s,r);const o=i.x*Math.abs(ii.x)+i.y*Math.abs(ii.y)+i.z*Math.abs(ii.z),l=t.dot(ii),c=e.dot(ii),h=n.dot(ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const ve=new R,ws=new Tt;let lu=0;class je extends ui{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ah,this.updateRanges=[],this.gpuType=fn,this.version=0,this._normalizationScale=t!==void 0?ja(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ws.fromBufferAttribute(this,e),ws.applyMatrix3(t),this.setXY(e,ws.x,ws.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):uc(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):dc(t,this.array)}}class gc extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class _c extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Qt extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}}const cu=new fi,qi=new R,Dr=new R;class zi{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):cu.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qi.subVectors(t,this.center);const e=qi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(qi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qi.copy(t.center).add(Dr)),this.expandByPoint(qi.copy(t.center).sub(Dr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let hu=0;const rn=new se,Nr=new ge,Ei=new R,Ke=new fi,Yi=new fi,Ie=new R;class ye extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=Bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Rh(t)?_c:gc)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return Nr.lookAt(t),Nr.updateMatrix(),this.applyMatrix4(Nr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qt(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&te('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Yi.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(Ke.min,Yi.min),Ke.expandByPoint(Ie),Ie.addVectors(Ke.max,Yi.max),Ke.expandByPoint(Ie)):(Ke.expandByPoint(Yi.min),Ke.expandByPoint(Yi.max))}Ke.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Ie.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ie));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ie.fromBufferAttribute(o,c),l&&(Ei.fromBufferAttribute(t,c),Ie.add(Ei)),i=Math.max(i,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&te('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){te("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new je(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let I=0;I<n.count;I++)o[I]=new R,l[I]=new R;const h=new R,f=new R,u=new R,d=new Tt,p=new Tt,x=new Tt,g=new R,m=new R;function v(I,P,N){c[I]=c[P]=c[N]=1,h.fromBufferAttribute(n,I),f.fromBufferAttribute(n,P),u.fromBufferAttribute(n,N),d.fromBufferAttribute(r,I),p.fromBufferAttribute(r,P),x.fromBufferAttribute(r,N),f.sub(h),u.sub(h),p.sub(d),x.sub(d);const O=1/(p.x*x.y-x.x*p.y);isFinite(O)&&(g.copy(f).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(O),m.copy(u).multiplyScalar(p.x).addScaledVector(f,-x.x).multiplyScalar(O),o[I].add(g),o[P].add(g),o[N].add(g),l[I].add(m),l[P].add(m),l[N].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let I=0,P=w.length;I<P;++I){const N=w[I],O=N.start,V=N.count;for(let D=O,H=O+V;D<H;D+=3)v(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const y=new R,T=new R,b=new R,_=new R;function E(I){b.fromBufferAttribute(i,I),_.copy(b);const P=o[I];y.copy(P),y.sub(b.multiplyScalar(b.dot(P))).normalize(),T.crossVectors(_,P);const O=T.dot(l[I])<0?-1:1;a.setXYZW(I,y.x,y.y,y.z,O)}for(let I=0,P=n.count;I<P;++I)c[I]&&E(I);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const i=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,f=new R;if(t)for(let u=0,d=t.count;u<d;u+=3){const p=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let d=0,p=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let m=0;m<h;m++)u[p++]=c[d++]}return new je(u,h,f)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ye,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ur=new R,uu=new R,du=new Bt;class Kn{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ur.subVectors(n,e).cross(uu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(Ur),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||du.getNormalMatrix(t),i=this.coplanarPoint(Ur).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let fu=0;class ki extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=Bi(),this.name="",this.type="Material",this.blending=es,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vl,this.blendDst=Wl,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_r,this.stencilZFail=_r,this.stencilZPass=_r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Nt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Nt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ot().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Kn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Tt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Tt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const In=new R,Or=new R,bs=new R,Ts=new R;class xc{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Or.copy(t).add(e).multiplyScalar(.5),bs.copy(e).sub(t).normalize(),Ts.copy(this.origin).sub(Or);const r=t.distanceTo(e)*.5,a=-this.direction.dot(bs),o=Ts.dot(this.direction),l=-Ts.dot(bs),c=Ts.lengthSq(),h=Math.abs(1-a*a);let f,u,d,p;if(h>0)if(f=a*l-o,u=a*o-l,p=r*h,f>=0)if(u>=-p)if(u<=p){const x=1/h;f*=x,u*=x,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-p?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=p?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Or).addScaledVector(bs,u),d}intersectSphere(t,e){if(t.radius<0)return null;In.subVectors(t.center,this.origin);const n=In.dot(this.direction),i=In.dot(In)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,n,i,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,p=e.x-a.x,x=e.y-a.y,g=e.z-a.z,m=n.x-a.x,v=n.y-a.y,w=n.z-a.z,y=Math.abs(l),T=Math.abs(c),b=Math.abs(h);let _,E,I,P,N,O,V,D,H,Z,k,nt;if(y>=T&&y>=b?(I=l,O=f,H=p,nt=m,l>=0?(_=c,E=h,P=u,N=d,V=x,D=g,Z=v,k=w):(_=h,E=c,P=d,N=u,V=g,D=x,Z=w,k=v)):T>=b?(I=c,O=u,H=x,nt=v,c>=0?(_=h,E=l,P=d,N=f,V=g,D=p,Z=w,k=m):(_=l,E=h,P=f,N=d,V=p,D=g,Z=m,k=w)):(I=h,O=d,H=g,nt=w,h>=0?(_=l,E=c,P=f,N=u,V=p,D=x,Z=m,k=v):(_=c,E=l,P=u,N=f,V=x,D=p,Z=v,k=m)),I===0)return null;const X=_/I,Q=E/I,tt=1/I,wt=P-X*O,zt=N-Q*O,K=V-X*H,_t=D-Q*H,St=Z-X*nt,Pt=k-Q*nt,xt=St*_t-Pt*K,Gt=wt*Pt-zt*St,_e=K*zt-_t*wt;if(i){if(xt<0||Gt<0||_e<0)return null}else if((xt<0||Gt<0||_e<0)&&(xt>0||Gt>0||_e>0))return null;const It=xt+Gt+_e;if(It===0)return null;const ee=tt*(xt*O+Gt*H+_e*nt);return(It>0?ee<0:ee>0)?null:this.at(ee/It,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt extends ki{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Vo=new se,si=new xc,As=new zi,Wo=new R,Rs=new R,Cs=new R,Ps=new R,Fr=new R,Ls=new R,Xo=new R,Is=new R;class j extends ge{constructor(t=new ye,e=new Vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Ls.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(Fr.fromBufferAttribute(f,t),a?Ls.addScaledVector(Fr,h):Ls.addScaledVector(Fr.sub(e),h))}e.add(Ls)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(r),si.copy(t.ray).recast(t.near),!(As.containsPoint(si.origin)===!1&&(si.intersectSphere(As,Wo)===null||si.origin.distanceToSquared(Wo)>(t.far-t.near)**2))&&(Vo.copy(r).invert(),si.copy(t.ray).applyMatrix4(Vo),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,si)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){const g=u[p],m=a[g.materialIndex],v=Math.max(g.start,d.start),w=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let y=v,T=w;y<T;y+=3){const b=o.getX(y),_=o.getX(y+1),E=o.getX(y+2);i=Ds(this,m,t,n,c,h,f,b,_,E),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const p=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){const v=o.getX(g),w=o.getX(g+1),y=o.getX(g+2);i=Ds(this,a,t,n,c,h,f,v,w,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){const g=u[p],m=a[g.materialIndex],v=Math.max(g.start,d.start),w=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=v,T=w;y<T;y+=3){const b=y,_=y+1,E=y+2;i=Ds(this,m,t,n,c,h,f,b,_,E),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){const v=g,w=g+1,y=g+2;i=Ds(this,a,t,n,c,h,f,v,w,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function pu(s,t,e,n,i,r,a,o){let l;if(t.side===Ve?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===ci,o),l===null)return null;Is.copy(o),Is.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Is);return c<e.near||c>e.far?null:{distance:c,point:Is.clone(),object:s}}function Ds(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Rs),s.getVertexPosition(l,Cs),s.getVertexPosition(c,Ps);const h=pu(s,t,e,n,Rs,Cs,Ps,Xo);if(h){const f=new R;hn.getBarycoord(Xo,Rs,Cs,Ps,f),i&&(h.uv=hn.getInterpolatedAttribute(i,o,l,c,f,new Tt)),r&&(h.uv1=hn.getInterpolatedAttribute(r,o,l,c,f,new Tt)),a&&(h.normal=hn.getInterpolatedAttribute(a,o,l,c,f,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new R,materialIndex:0};hn.getNormal(Rs,Cs,Ps,u.normal),h.face=u,h.barycoord=f}return h}class vc extends ke{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Te,h=Te,f,u){super(null,a,o,l,c,h,i,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oa extends je{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const wi=new se,qo=new se,Ns=[],Yo=new fi,mu=new se,Ki=new j,$i=new zi;class gu extends j{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Oa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,mu)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new fi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,wi),Yo.copy(t.boundingBox).applyMatrix4(wi),this.boundingBox.union(Yo)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new zi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,wi),$i.copy(t.boundingSphere).applyMatrix4(wi),this.boundingSphere.union($i)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Ki.geometry=this.geometry,Ki.material=this.material,Ki.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$i.copy(this.boundingSphere),$i.applyMatrix4(n),t.ray.intersectsSphere($i)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,wi),qo.multiplyMatrices(n,wi),Ki.matrixWorld=qo,Ki.raycast(t,Ns);for(let a=0,o=Ns.length;a<o;a++){const l=Ns[a];l.instanceId=r,l.object=this,e.push(l)}Ns.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Oa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new vc(new Float32Array(i*this.count),i,this.count,Ka,fn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ri=new zi,_u=new Tt(.5,.5),Us=new R;class ds{constructor(t=new Kn,e=new Kn,n=new Kn,i=new Kn,r=new Kn,a=new Kn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=pn,n=!1){const i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],p=r[8],x=r[9],g=r[10],m=r[11],v=r[12],w=r[13],y=r[14],T=r[15];if(i[0].setComponents(c-a,d-h,m-p,T-v).normalize(),i[1].setComponents(c+a,d+h,m+p,T+v).normalize(),i[2].setComponents(c+o,d+f,m+x,T+w).normalize(),i[3].setComponents(c-o,d-f,m-x,T-w).normalize(),n)i[4].setComponents(l,u,g,y).normalize(),i[5].setComponents(c-l,d-u,m-g,T-y).normalize();else if(i[4].setComponents(c-l,d-u,m-g,T-y).normalize(),e===pn)i[5].setComponents(c+l,d+u,m+g,T+y).normalize();else if(e===us)i[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(t){ri.center.set(0,0,0);const e=_u.distanceTo(t.center);return ri.radius=.7071067811865476+e,ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Us.x=i.normal.x>0?t.max.x:t.min.x,Us.y=i.normal.y>0?t.max.y:t.min.y,Us.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Us)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Ko=new se;class no{constructor(){this.coordinateSystem=pn,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){const r=e[i];Ko.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new ds),n[i].setFromProjectionMatrix(Ko,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new ds),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new no().copy(this)}}class ir extends ki{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const $o=new se,Fa=new xc,Os=new zi,Fs=new R;class Ba extends ge{constructor(t=new ye,e=new ir){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(i),Os.radius+=r,t.ray.intersectsSphere(Os)===!1)return;$o.copy(i).invert(),Fa.copy(t.ray).applyMatrix4($o);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=u,x=d;p<x;p++){const g=c.getX(p);Fs.fromBufferAttribute(f,g),Zo(Fs,g,l,i,t,e,this)}}else{const u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let p=u,x=d;p<x;p++)Fs.fromBufferAttribute(f,p),Zo(Fs,p,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Zo(s,t,e,n,i,r,a){const o=Fa.distanceSqToPoint(s);if(o<e){const l=new R;Fa.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Mc extends ke{constructor(t=[],e=Di,n,i,r,a,o,l,c,h){super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class xu extends ke{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Oi extends ke{constructor(t,e,n=bn,i,r,a,o=Te,l=Te,c,h=Jn,f=1){if(h!==Jn&&h!==Zn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:f};super(u,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new to(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Sc extends Oi{constructor(t,e=bn,n=Di,i,r,a=Te,o=Te,l,c=Jn){const h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class yc extends ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ut extends ye{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let u=0,d=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,i,a,2),p("x","z","y",1,-1,t,n,-e,i,a,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(f,2));function p(x,g,m,v,w,y,T,b,_,E,I){const P=y/_,N=T/E,O=y/2,V=T/2,D=b/2,H=_+1,Z=E+1;let k=0,nt=0;const X=new R;for(let Q=0;Q<Z;Q++){const tt=Q*N-V;for(let wt=0;wt<H;wt++){const zt=wt*P-O;X[x]=zt*v,X[g]=tt*w,X[m]=D,c.push(X.x,X.y,X.z),X[x]=0,X[g]=0,X[m]=b>0?1:-1,h.push(X.x,X.y,X.z),f.push(wt/_),f.push(1-Q/E),k+=1}}for(let Q=0;Q<E;Q++)for(let tt=0;tt<_;tt++){const wt=u+tt+H*Q,zt=u+tt+H*(Q+1),K=u+(tt+1)+H*(Q+1),_t=u+(tt+1)+H*Q;l.push(wt,zt,_t),l.push(zt,K,_t),nt+=6}o.addGroup(d,nt,I),d+=nt,u+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ut(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class oi extends ye{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new R,h=new Tt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const d=n+f/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(o,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oi(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Me extends ye{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],f=[],u=[],d=[];let p=0;const x=[],g=n/2;let m=0;v(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Qt(f,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(d,2));function v(){const y=new R,T=new R;let b=0;const _=(e-t)/n;for(let E=0;E<=r;E++){const I=[],P=E/r,N=P*(e-t)+t;for(let O=0;O<=i;O++){const V=O/i,D=V*l+o,H=Math.sin(D),Z=Math.cos(D);T.x=N*H,T.y=-P*n+g,T.z=N*Z,f.push(T.x,T.y,T.z),y.set(H,_,Z).normalize(),u.push(y.x,y.y,y.z),d.push(V,1-P),I.push(p++)}x.push(I)}for(let E=0;E<i;E++)for(let I=0;I<r;I++){const P=x[I][E],N=x[I+1][E],O=x[I+1][E+1],V=x[I][E+1];(t>0||I!==0)&&(h.push(P,N,V),b+=3),(e>0||I!==r-1)&&(h.push(N,O,V),b+=3)}c.addGroup(m,b,0),m+=b}function w(y){const T=p,b=new Tt,_=new R;let E=0;const I=y===!0?t:e,P=y===!0?1:-1;for(let O=1;O<=i;O++)f.push(0,g*P,0),u.push(0,P,0),d.push(.5,.5),p++;const N=p;for(let O=0;O<=i;O++){const D=O/i*l+o,H=Math.cos(D),Z=Math.sin(D);_.x=I*Z,_.y=g*P,_.z=I*H,f.push(_.x,_.y,_.z),u.push(0,P,0),b.x=H*.5+.5,b.y=Z*.5*P+.5,d.push(b.x,b.y),p++}for(let O=0;O<i;O++){const V=T+O,D=N+O;y===!0?h.push(D,D+1,V):h.push(D+1,D,V),E+=3}c.addGroup(m,E,y===!0?1:2),m+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Me(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class sr extends Me{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new sr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class io extends ye{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const w=new R,y=new R,T=new R;for(let b=0;b<e.length;b+=3)d(e[b+0],w),d(e[b+1],y),d(e[b+2],T),l(w,y,T,v)}function l(v,w,y,T){const b=T+1,_=[];for(let E=0;E<=b;E++){_[E]=[];const I=v.clone().lerp(y,E/b),P=w.clone().lerp(y,E/b),N=b-E;for(let O=0;O<=N;O++)O===0&&E===b?_[E][O]=I:_[E][O]=I.clone().lerp(P,O/N)}for(let E=0;E<b;E++)for(let I=0;I<2*(b-E)-1;I++){const P=Math.floor(I/2);I%2===0?(u(_[E][P+1]),u(_[E+1][P]),u(_[E][P])):(u(_[E][P+1]),u(_[E+1][P+1]),u(_[E+1][P]))}}function c(v){const w=new R;for(let y=0;y<r.length;y+=3)w.x=r[y+0],w.y=r[y+1],w.z=r[y+2],w.normalize().multiplyScalar(v),r[y+0]=w.x,r[y+1]=w.y,r[y+2]=w.z}function h(){const v=new R;for(let w=0;w<r.length;w+=3){v.x=r[w+0],v.y=r[w+1],v.z=r[w+2];const y=g(v)/2/Math.PI+.5,T=m(v)/Math.PI+.5;a.push(y,1-T)}p(),f()}function f(){for(let v=0;v<a.length;v+=6){const w=a[v+0],y=a[v+2],T=a[v+4],b=Math.max(w,y,T),_=Math.min(w,y,T);b>.9&&_<.1&&(w<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),T<.2&&(a[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function d(v,w){const y=v*3;w.x=t[y+0],w.y=t[y+1],w.z=t[y+2]}function p(){const v=new R,w=new R,y=new R,T=new R,b=new Tt,_=new Tt,E=new Tt;for(let I=0,P=0;I<r.length;I+=9,P+=6){v.set(r[I+0],r[I+1],r[I+2]),w.set(r[I+3],r[I+4],r[I+5]),y.set(r[I+6],r[I+7],r[I+8]),b.set(a[P+0],a[P+1]),_.set(a[P+2],a[P+3]),E.set(a[P+4],a[P+5]),T.copy(v).add(w).add(y).divideScalar(3);const N=g(T);x(b,P+0,v,N),x(_,P+2,w,N),x(E,P+4,y,N)}}function x(v,w,y,T){T<0&&v.x===1&&(a[w]=v.x-1),y.x===0&&y.z===0&&(a[w]=T/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new io(t.vertices,t.indices,t.radius,t.detail)}}class fs extends io{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new fs(t.radius,t.detail)}}class kn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Nt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],u=n[i+1]-h,d=(a-h)/u;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new Tt:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new R,i=[],r=[],a=[],o=new R,l=new se;for(let d=0;d<=t;d++){const p=d/t;i[d]=this.getTangentAt(p,new R)}r[0]=new R,a[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(qt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,p))}a[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(qt(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),a[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}class Ec extends kn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Tt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class vu extends Ec{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function so(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,i(a,o,u,d)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const Jo=new R,Qo=new R,Br=new so,zr=new so,kr=new so;class wc extends kn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new R){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Qo.subVectors(i[0],i[1]).add(i[0]),c=Qo);const f=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Jo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Jo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Br.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,p,x,g),zr.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,p,x,g),kr.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(Br.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),zr.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),kr.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Br.calc(l),zr.calc(l),kr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new R().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function jo(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function Mu(s,t){const e=1-s;return e*e*t}function Su(s,t){return 2*(1-s)*s*t}function yu(s,t){return s*s*t}function ss(s,t,e,n){return Mu(s,t)+Su(s,e)+yu(s,n)}function Eu(s,t){const e=1-s;return e*e*e*t}function wu(s,t){const e=1-s;return 3*e*e*s*t}function bu(s,t){return 3*(1-s)*s*s*t}function Tu(s,t){return s*s*s*t}function rs(s,t,e,n,i){return Eu(s,t)+wu(s,e)+bu(s,n)+Tu(s,i)}class Au extends kn{constructor(t=new Tt,e=new Tt,n=new Tt,i=new Tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Tt){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(rs(t,i.x,r.x,a.x,o.x),rs(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ru extends kn{constructor(t=new R,e=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new R){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(rs(t,i.x,r.x,a.x,o.x),rs(t,i.y,r.y,a.y,o.y),rs(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Cu extends kn{constructor(t=new Tt,e=new Tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Tt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pu extends kn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lu extends kn{constructor(t=new Tt,e=new Tt,n=new Tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Tt){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(ss(t,i.x,r.x,a.x),ss(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bc extends kn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(ss(t,i.x,r.x,a.x),ss(t,i.y,r.y,a.y),ss(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Iu extends kn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Tt){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],f=i[a>i.length-3?i.length-1:a+2];return n.set(jo(o,l.x,c.x,h.x,f.x),jo(o,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Tt().fromArray(i))}return this}}var Du=Object.freeze({__proto__:null,ArcCurve:vu,CatmullRomCurve3:wc,CubicBezierCurve:Au,CubicBezierCurve3:Ru,EllipseCurve:Ec,LineCurve:Cu,LineCurve3:Pu,QuadraticBezierCurve:Lu,QuadraticBezierCurve3:bc,SplineCurve:Iu});class Ze extends ye{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,f=t/o,u=e/l,d=[],p=[],x=[],g=[];for(let m=0;m<h;m++){const v=m*u-a;for(let w=0;w<c;w++){const y=w*f-r;p.push(y,-v,0),x.push(0,0,1),g.push(w/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){const w=v+c*m,y=v+c*(m+1),T=v+1+c*(m+1),b=v+1+c*m;d.push(w,y,b),d.push(y,T,b)}this.setIndex(d),this.setAttribute("position",new Qt(p,3)),this.setAttribute("normal",new Qt(x,3)),this.setAttribute("uv",new Qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ze(t.width,t.height,t.widthSegments,t.heightSegments)}}class un extends ye{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let f=t;const u=(e-t)/i,d=new R,p=new Tt;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){const m=r+g/n*a;d.x=f*Math.cos(m),d.y=f*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,h.push(p.x,p.y)}f+=u}for(let x=0;x<i;x++){const g=x*(n+1);for(let m=0;m<n;m++){const v=m+g,w=v,y=v+n+1,T=v+n+2,b=v+1;o.push(w,y,b),o.push(y,T,b)}}this.setIndex(o),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new un(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class rr extends ye{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new R,u=new R,d=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){const v=[],w=m/n,y=a+w*o,T=t*Math.cos(y),b=Math.sqrt(t*t-T*T);let _=0;m===0&&a===0?_=.5/e:m===n&&l===Math.PI&&(_=-.5/e);for(let E=0;E<=e;E++){const I=E/e,P=i+I*r;f.x=-b*Math.cos(P),f.y=T,f.z=b*Math.sin(P),p.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),g.push(I+_,1-w),v.push(c++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<e;v++){const w=h[m][v+1],y=h[m][v],T=h[m+1][v],b=h[m+1][v+1];(m!==0||a>0)&&d.push(w,y,b),(m!==n-1||l<Math.PI)&&d.push(y,T,b)}this.setIndex(d),this.setAttribute("position",new Qt(p,3)),this.setAttribute("normal",new Qt(x,3)),this.setAttribute("uv",new Qt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ar extends ye{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],h=[],f=[],u=new R,d=new R,p=new R;for(let x=0;x<=n;x++){const g=a+x/n*o;for(let m=0;m<=i;m++){const v=m/i*r;d.x=(t+e*Math.cos(g))*Math.cos(v),d.y=(t+e*Math.cos(g))*Math.sin(v),d.z=e*Math.sin(g),c.push(d.x,d.y,d.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),p.subVectors(d,u).normalize(),h.push(p.x,p.y,p.z),f.push(m/i),f.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=i;g++){const m=(i+1)*x+g-1,v=(i+1)*(x-1)+g-1,w=(i+1)*(x-1)+g,y=(i+1)*x+g;l.push(m,v,y),l.push(v,w,y)}this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ar(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class ro extends ye{constructor(t=new bc(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new R,l=new R,c=new Tt;let h=new R;const f=[],u=[],d=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new Qt(f,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(d,2));function x(){for(let w=0;w<e;w++)g(w);g(r===!1?e:0),v(),m()}function g(w){h=t.getPointAt(w/e,h);const y=a.normals[w],T=a.binormals[w];for(let b=0;b<=i;b++){const _=b/i*Math.PI*2,E=Math.sin(_),I=-Math.cos(_);l.x=I*y.x+E*T.x,l.y=I*y.y+E*T.y,l.z=I*y.z+E*T.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,f.push(o.x,o.y,o.z)}}function m(){for(let w=1;w<=e;w++)for(let y=1;y<=i;y++){const T=(i+1)*(w-1)+(y-1),b=(i+1)*w+(y-1),_=(i+1)*w+y,E=(i+1)*(w-1)+y;p.push(T,b,E),p.push(b,_,E)}}function v(){for(let w=0;w<=e;w++)for(let y=0;y<=i;y++)c.x=w/e,c.y=y/i,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ro(new Du[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function Fi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];if(tl(i))i.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(tl(i[0])){const r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function He(s){const t={};for(let e=0;e<s.length;e++){const n=Fi(s[e]);for(const i in n)t[i]=n[i]}return t}function tl(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Nu(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Tc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const Uu={clone:Fi,merge:He};var Ou=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends ki{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ou,this.fragmentShader=Fu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fi(t.uniforms),this.uniformsGroups=Nu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Ot().setHex(i.value);break;case"v2":this.uniforms[n].value=new Tt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new R().fromArray(i.value);break;case"v4":this.uniforms[n].value=new pe().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Bt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new se().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Bu extends Qn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Rt extends ki{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ua,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class el extends Rt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Tt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Li('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Li('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class zu extends ki{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ku extends ki{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class cr extends ge{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Gu extends cr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Gr=new se,nl=new R,il=new R;class ao{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.mapType=Qe,this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ds,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;nl.setFromMatrixPosition(t.matrixWorld),e.position.copy(nl),il.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(il),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Gr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Gr,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===us||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Gr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Bs=new R,zs=new di,gn=new R;class Ac extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Bs,zs,gn),gn.x===1&&gn.y===1&&gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bs,zs,gn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Bs,zs,gn),gn.x===1&&gn.y===1&&gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bs,zs,gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new R,sl=new Tt,rl=new Tt;class Je extends Ac{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ui*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ns*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ui*2*Math.atan(Math.tan(ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z)}getViewSize(t,e){return this.getViewBounds(t,sl,rl),e.subVectors(rl,sl)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ns*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Hu extends ao{constructor(){super(new Je(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=Ui*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class Vu extends cr{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Hu}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class Wu extends ao{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0}}class On extends cr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Wu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Rc extends Ac{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Xu extends ao{constructor(){super(new Rc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class al extends cr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new Xu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const bi=-90,Ti=1;class za extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Je(bi,Ti,t,e);i.layers=this.layers,this.add(i);const r=new Je(bi,Ti,t,e);r.layers=this.layers,this.add(r);const a=new Je(bi,Ti,t,e);a.layers=this.layers,this.add(a);const o=new Je(bi,Ti,t,e);o.layers=this.layers,this.add(o);const l=new Je(bi,Ti,t,e);l.layers=this.layers,this.add(l);const c=new Je(bi,Ti,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===pn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===us)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class qu extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}class Yu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Nt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ol(s,t,e,n){const i=Ku(n);switch(e){case sc:return s*t;case Ka:return s*t/i.components*i.byteLength;case $a:return s*t/i.components*i.byteLength;case hi:return s*t*2/i.components*i.byteLength;case Za:return s*t*2/i.components*i.byteLength;case rc:return s*t*3/i.components*i.byteLength;case En:return s*t*4/i.components*i.byteLength;case Ja:return s*t*4/i.components*i.byteLength;case qs:case Ys:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ks:case $s:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case aa:case la:return Math.max(s,16)*Math.max(t,8)/4;case ra:case oa:return Math.max(s,8)*Math.max(t,8)/2;case ca:case ha:case da:case fa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ua:case Qs:case pa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ma:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ga:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case _a:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case xa:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case va:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ma:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Sa:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ya:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ea:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case wa:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ba:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ta:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Aa:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ra:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ca:case Pa:case La:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Ia:case Da:return Math.ceil(s/4)*Math.ceil(t/4)*8;case js:case Na:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ku(s){switch(s){case Qe:case tc:return{byteLength:1,components:1};case hs:case ec:case Tn:return{byteLength:2,components:1};case qa:case Ya:return{byteLength:2,components:4};case bn:case Xa:case fn:return{byteLength:4,components:1};case nc:case ic:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Va}}));typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Va);function Cc(){let s=null,t=!1,e=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function $u(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(s.bindBuffer(c,o),f.length===0)s.bufferSubData(c,0,h);else{f.sort((d,p)=>d.start-p.start);let u=0;for(let d=1;d<f.length;d++){const p=f[u],x=f[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,f[u]=x)}f.length=u+1;for(let d=0,p=f.length;d<p;d++){const x=f[d];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Zu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ju=`#ifdef USE_ALPHAHASH
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
#endif`,Qu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ju=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,td=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ed=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nd=`#ifdef USE_AOMAP
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
#endif`,id=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sd=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,rd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ad=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,od=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ld=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cd=`#ifdef USE_IRIDESCENCE
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
#endif`,hd=`#ifdef USE_BUMPMAP
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
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,md=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_d=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,vd=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Md=`vec3 transformedNormal = objectNormal;
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
#endif`,Sd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ed=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Td=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ad=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Rd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Cd=`#ifdef USE_ENVMAP
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
#endif`,Pd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ld=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Id=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ud=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Od=`#ifdef USE_GRADIENTMAP
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
}`,Fd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kd=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,Gd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Hd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Yd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kd=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$d=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jd=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Qd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ef=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,af=`#if defined( USE_POINTS_UV )
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
#endif`,of=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hf=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,df=`#ifdef USE_MORPHTARGETS
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
#endif`,ff=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_f=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,vf=`#ifdef USE_NORMALMAP
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
#endif`,Mf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ef=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Tf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Af=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,If=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Df=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Nf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Uf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Of=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ff=`#ifdef USE_SKINNING
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
#endif`,Bf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zf=`#ifdef USE_SKINNING
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
#endif`,kf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wf=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xf=`#ifdef USE_TRANSMISSION
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
#endif`,qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,$f=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jf=`uniform sampler2D t2D;
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
}`,Qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jf=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ep=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,np=`#include <common>
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
}`,ip=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sp=`#define DISTANCE
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
}`,rp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,op=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lp=`uniform float scale;
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
}`,cp=`uniform vec3 diffuse;
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
}`,hp=`#include <common>
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
}`,up=`uniform vec3 diffuse;
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
}`,dp=`#define LAMBERT
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
}`,fp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,pp=`#define MATCAP
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
}`,mp=`#define MATCAP
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
}`,gp=`#define NORMAL
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
}`,_p=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xp=`#define PHONG
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
}`,vp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Mp=`#define STANDARD
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
}`,Sp=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,yp=`#define TOON
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
}`,Ep=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,wp=`uniform float size;
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
}`,bp=`uniform vec3 diffuse;
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
}`,Tp=`#include <common>
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
}`,Ap=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Rp=`uniform float rotation;
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
}`,Cp=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:Zu,alphahash_pars_fragment:Ju,alphamap_fragment:Qu,alphamap_pars_fragment:ju,alphatest_fragment:td,alphatest_pars_fragment:ed,aomap_fragment:nd,aomap_pars_fragment:id,batching_pars_vertex:sd,batching_vertex:rd,begin_vertex:ad,beginnormal_vertex:od,bsdfs:ld,iridescence_fragment:cd,bumpmap_pars_fragment:hd,clipping_planes_fragment:ud,clipping_planes_pars_fragment:dd,clipping_planes_pars_vertex:fd,clipping_planes_vertex:pd,color_fragment:md,color_pars_fragment:gd,color_pars_vertex:_d,color_vertex:xd,common:vd,defaultnormal_vertex:Md,displacementmap_pars_vertex:Sd,displacementmap_vertex:yd,emissivemap_fragment:Ed,emissivemap_pars_fragment:wd,colorspace_fragment:bd,colorspace_pars_fragment:Td,envmap_fragment:Ad,envmap_common_pars_fragment:Rd,envmap_pars_fragment:Cd,envmap_pars_vertex:Pd,envmap_physical_pars_fragment:Gd,envmap_vertex:Ld,fog_vertex:Id,fog_pars_vertex:Dd,fog_fragment:Nd,fog_pars_fragment:Ud,gradientmap_pars_fragment:Od,lightmap_pars_fragment:Fd,lights_lambert_fragment:Bd,lights_lambert_pars_fragment:zd,lights_pars_begin:kd,lights_toon_fragment:Hd,lights_toon_pars_fragment:Vd,lights_phong_fragment:Wd,lights_phong_pars_fragment:Xd,lights_physical_fragment:qd,lights_physical_pars_fragment:Yd,lights_fragment_begin:Kd,lights_fragment_maps:$d,lights_fragment_end:Zd,lightprobes_pars_fragment:Jd,logdepthbuf_fragment:Qd,logdepthbuf_pars_fragment:jd,logdepthbuf_pars_vertex:tf,logdepthbuf_vertex:ef,map_fragment:nf,map_pars_fragment:sf,map_particle_fragment:rf,map_particle_pars_fragment:af,metalnessmap_fragment:of,metalnessmap_pars_fragment:lf,morphinstance_vertex:cf,morphcolor_vertex:hf,morphnormal_vertex:uf,morphtarget_pars_vertex:df,morphtarget_vertex:ff,normal_fragment_begin:pf,normal_fragment_maps:mf,normal_pars_fragment:gf,normal_pars_vertex:_f,normal_vertex:xf,normalmap_pars_fragment:vf,clearcoat_normal_fragment_begin:Mf,clearcoat_normal_fragment_maps:Sf,clearcoat_pars_fragment:yf,iridescence_pars_fragment:Ef,opaque_fragment:wf,packing:bf,premultiplied_alpha_fragment:Tf,project_vertex:Af,dithering_fragment:Rf,dithering_pars_fragment:Cf,roughnessmap_fragment:Pf,roughnessmap_pars_fragment:Lf,shadowmap_pars_fragment:If,shadowmap_pars_vertex:Df,shadowmap_vertex:Nf,shadowmask_pars_fragment:Uf,skinbase_vertex:Of,skinning_pars_vertex:Ff,skinning_vertex:Bf,skinnormal_vertex:zf,specularmap_fragment:kf,specularmap_pars_fragment:Gf,tonemapping_fragment:Hf,tonemapping_pars_fragment:Vf,transmission_fragment:Wf,transmission_pars_fragment:Xf,uv_pars_fragment:qf,uv_pars_vertex:Yf,uv_vertex:Kf,worldpos_vertex:$f,background_vert:Zf,background_frag:Jf,backgroundCube_vert:Qf,backgroundCube_frag:jf,cube_vert:tp,cube_frag:ep,depth_vert:np,depth_frag:ip,distance_vert:sp,distance_frag:rp,equirect_vert:ap,equirect_frag:op,linedashed_vert:lp,linedashed_frag:cp,meshbasic_vert:hp,meshbasic_frag:up,meshlambert_vert:dp,meshlambert_frag:fp,meshmatcap_vert:pp,meshmatcap_frag:mp,meshnormal_vert:gp,meshnormal_frag:_p,meshphong_vert:xp,meshphong_frag:vp,meshphysical_vert:Mp,meshphysical_frag:Sp,meshtoon_vert:yp,meshtoon_frag:Ep,points_vert:wp,points_frag:bp,shadow_vert:Tp,shadow_frag:Ap,sprite_vert:Rp,sprite_frag:Cp},gt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},yn={basic:{uniforms:He([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:He([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Ot(0)},envMapIntensity:{value:1}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:He([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:He([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:He([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:He([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:He([gt.points,gt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:He([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:He([gt.common,gt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:He([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:He([gt.sprite,gt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distance:{uniforms:He([gt.common,gt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distance_vert,fragmentShader:Xt.distance_frag},shadow:{uniforms:He([gt.lights,gt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};yn.physical={uniforms:He([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Bt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const ks={r:0,b:0,g:0},Pp=new se,Pc=new Bt;Pc.set(-1,0,0,0,1,0,0,0,1);function Lp(s,t,e,n,i,r){const a=new Ot(0);let o=i===!0?0:1,l,c,h=null,f=0,u=null;function d(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){const y=v.backgroundBlurriness>0;w=t.get(w,y)}return w}function p(v){let w=!1;const y=d(v);y===null?g(a,o):y&&y.isColor&&(g(y,1),w=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(v,w){const y=d(w);y&&y.isCubeTexture?(c===void 0&&(c=new j(new Ut(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:Fi(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,b,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Pp.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Pc),c.material.toneMapped=Zt.getTransfer(y.colorSpace)!==ie,(h!==y||f!==y.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,u=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new j(new Ze(2,2),new Qn({name:"BackgroundMaterial",uniforms:Fi(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(y.colorSpace)!==ie,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,u=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,w){v.getRGB(ks,Tc(s)),e.buffers.color.setClear(ks.r,ks.g,ks.b,w,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,w=1){a.set(v),o=w,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:p,addToRenderList:x,dispose:m}}function Ip(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(N,O,V,D,H){let Z=!1;const k=f(N,D,V,O);r!==k&&(r=k,c(r.object)),Z=d(N,D,V,H),Z&&p(N,D,V,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,y(N,O,V,D),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return s.createVertexArray()}function c(N){return s.bindVertexArray(N)}function h(N){return s.deleteVertexArray(N)}function f(N,O,V,D){const H=D.wireframe===!0;let Z=n[O.id];Z===void 0&&(Z={},n[O.id]=Z);const k=N.isInstancedMesh===!0?N.id:0;let nt=Z[k];nt===void 0&&(nt={},Z[k]=nt);let X=nt[V.id];X===void 0&&(X={},nt[V.id]=X);let Q=X[H];return Q===void 0&&(Q=u(l()),X[H]=Q),Q}function u(N){const O=[],V=[],D=[];for(let H=0;H<e;H++)O[H]=0,V[H]=0,D[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:D,object:N,attributes:{},index:null}}function d(N,O,V,D){const H=r.attributes,Z=O.attributes;let k=0;const nt=V.getAttributes();for(const X in nt)if(nt[X].location>=0){const tt=H[X];let wt=Z[X];if(wt===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(wt=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(wt=N.instanceColor)),tt===void 0||tt.attribute!==wt||wt&&tt.data!==wt.data)return!0;k++}return r.attributesNum!==k||r.index!==D}function p(N,O,V,D){const H={},Z=O.attributes;let k=0;const nt=V.getAttributes();for(const X in nt)if(nt[X].location>=0){let tt=Z[X];tt===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(tt=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(tt=N.instanceColor));const wt={};wt.attribute=tt,tt&&tt.data&&(wt.data=tt.data),H[X]=wt,k++}r.attributes=H,r.attributesNum=k,r.index=D}function x(){const N=r.newAttributes;for(let O=0,V=N.length;O<V;O++)N[O]=0}function g(N){m(N,0)}function m(N,O){const V=r.newAttributes,D=r.enabledAttributes,H=r.attributeDivisors;V[N]=1,D[N]===0&&(s.enableVertexAttribArray(N),D[N]=1),H[N]!==O&&(s.vertexAttribDivisor(N,O),H[N]=O)}function v(){const N=r.newAttributes,O=r.enabledAttributes;for(let V=0,D=O.length;V<D;V++)O[V]!==N[V]&&(s.disableVertexAttribArray(V),O[V]=0)}function w(N,O,V,D,H,Z,k){k===!0?s.vertexAttribIPointer(N,O,V,H,Z):s.vertexAttribPointer(N,O,V,D,H,Z)}function y(N,O,V,D){x();const H=D.attributes,Z=V.getAttributes(),k=O.defaultAttributeValues;for(const nt in Z){const X=Z[nt];if(X.location>=0){let Q=H[nt];if(Q===void 0&&(nt==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),nt==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),Q!==void 0){const tt=Q.normalized,wt=Q.itemSize,zt=t.get(Q);if(zt===void 0)continue;const K=zt.buffer,_t=zt.type,St=zt.bytesPerElement,Pt=_t===s.INT||_t===s.UNSIGNED_INT||Q.gpuType===Xa;if(Q.isInterleavedBufferAttribute){const xt=Q.data,Gt=xt.isInterleavedBuffer===!0?xt.stride:xt.itemSize,_e=Q.offset;if(xt.isInstancedInterleavedBuffer||xt.isInstancedBufferAttribute){for(let It=0;It<X.locationSize;It++)m(X.location+It,xt.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let It=0;It<X.locationSize;It++)g(X.location+It);s.bindBuffer(s.ARRAY_BUFFER,K);for(let It=0;It<X.locationSize;It++)w(X.location+It,wt/X.locationSize,_t,tt,Gt*St,(_e+wt/X.locationSize*It)*St,Pt)}else{if(Q.isInstancedBufferAttribute){for(let xt=0;xt<X.locationSize;xt++)m(X.location+xt,Q.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let xt=0;xt<X.locationSize;xt++)g(X.location+xt);s.bindBuffer(s.ARRAY_BUFFER,K);for(let xt=0;xt<X.locationSize;xt++)w(X.location+xt,wt/X.locationSize,_t,tt,wt*St,wt/X.locationSize*xt*St,Pt)}}else if(k!==void 0){const tt=k[nt];if(tt!==void 0)switch(tt.length){case 2:s.vertexAttrib2fv(X.location,tt);break;case 3:s.vertexAttrib3fv(X.location,tt);break;case 4:s.vertexAttrib4fv(X.location,tt);break;default:s.vertexAttrib1fv(X.location,tt)}}}}v()}function T(){I();for(const N in n){const O=n[N];for(const V in O){const D=O[V];for(const H in D){const Z=D[H];for(const k in Z)h(Z[k].object),delete Z[k];delete D[H]}}delete n[N]}}function b(N){if(n[N.id]===void 0)return;const O=n[N.id];for(const V in O){const D=O[V];for(const H in D){const Z=D[H];for(const k in Z)h(Z[k].object),delete Z[k];delete D[H]}}delete n[N.id]}function _(N){for(const O in n){const V=n[O];for(const D in V){const H=V[D];if(H[N.id]===void 0)continue;const Z=H[N.id];for(const k in Z)h(Z[k].object),delete Z[k];delete H[N.id]}}}function E(N){for(const O in n){const V=n[O],D=N.isInstancedMesh===!0?N.id:0,H=V[D];if(H!==void 0){for(const Z in H){const k=H[Z];for(const nt in k)h(k[nt].object),delete k[nt];delete H[Z]}delete V[D],Object.keys(V).length===0&&delete n[O]}}}function I(){P(),a=!0,r!==i&&(r=i,c(r.object))}function P(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfObject:E,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function Dp(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Np(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const _=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(_){return!(_!==En&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const E=_===Tn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==Qe&&_!==fn&&!E&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Nt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&Nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&Nt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:y,maxSamples:T,samples:b}}function Up(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Kn,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const p=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,m=s.get(f);if(!i||p===null||p.length===0||r&&!g)r?h(null):c();else{const v=r?0:n,w=v*4;let y=m.clippingState||null;l.value=y,y=h(p,u,w,d);for(let T=0;T!==w;++T)y[T]=e[T];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,p){const x=f!==null?f.length:0;let g=null;if(x!==0){if(g=l.value,p!==!0||g===null){const m=d+x*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let w=0,y=d;w!==x;++w,y+=4)a.copy(f[w]).applyMatrix4(v,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}class oo extends wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Mc(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ut(5,5,5),r=new Qn({name:"CubemapFromEquirect",uniforms:Fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:Pi});r.uniforms.tEquirect.value=e;const a=new j(i,r),o=e.minFilter;return e.minFilter===$n&&(e.minFilter=qe),new za(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const ll=256,Op=3,Fp=20,Lc=256,Ic=16,Bp=3,zp=new R,kp=new Ot;class or{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new za(1,10,null),this._boxMesh=new j(new Ut(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:a=256,position:o=zp}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const f=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(kp));const g=new za(n,i,h);return g.position.copy(o),g.update(l,t),l.autoClear=f,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=p,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ul(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(ll,hc(t))}_fromTexture(t,e){t.mapping===Di||t.mapping===ls?this._setSize(t.image.length===0?ll:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=cl(t,!1,!1),n=Math.log2(t)-Op;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=cl(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Di||t.mapping===ls?(this._cubemapMaterial===null&&(this._cubemapMaterial=ul()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=hl()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Gp(),this._integrationMaterial=Hp());const e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Ic);for(let a=0;a<=n;a++){const o=or.lodToRoughness(a,n);if(a>n-Bp)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(Lc*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Vp());const n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}}function cl(s,t,e){return new oo(s,{minFilter:$n,generateMipmaps:t,type:Tn,colorSpace:tr,depthBuffer:e})}function ps(s,t,e){return new Qn({name:s,uniforms:t,vertexShader:Xt.cube_vert,fragmentShader:e,side:Ve,blending:Pi,depthTest:!1,depthWrite:!1})}function Gp(){return ps("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Lc}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Hp(){return ps("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ic}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Vp(){return ps("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Fp}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function hl(){return ps("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function ul(){return ps("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Wp(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===pr||d===mr)if(t.has(u)){const p=t.get(u).texture;return o(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const x=new oo(p.height);return x.fromEquirectangularTexture(s,u),t.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const d=u.mapping,p=d===pr||d===mr,x=d===Di||d===ls;if(p||x){let g=e.get(u);const m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new or(s)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const v=u.image;return p&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new or(s)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,d){return d===pr?u.mapping=Di:d===mr&&(u.mapping=ls),u}function l(u){let d=0;const p=6;for(let x=0;x<p;x++)u[x]!==void 0&&d++;return d===p}function c(u){const d=u.target;d.removeEventListener("dispose",c);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function Xp(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Li("WebGLRenderer: "+n+" extension not supported."),i}}}function qp(s,t,e,n){const i={},r=new WeakMap,a=new FinalizationRegistry(p=>delete i[p]);function o(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete i[p.id],a.unregister(p);const x=r.get(p);x&&(t.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,x){return i[x.id]!==void 0||(x.addEventListener("dispose",o),i[x.id]=new WeakRef(x),a.register(x,x.id,x),e.memory.geometries++),x}function h(p){const x=p.attributes;for(const g in x)t.update(x[g],s.ARRAY_BUFFER)}function f(p){const x=p.index,g=p.attributes.position;let m=0;if(g===void 0)return;const v=x!==null?x.array.length:g.array.length/3-1,w=g.count>=65535?_c:gc,y=new w(Math.ceil(v/3)*6,1),T=y.array;if(x!==null){const _=x.array;m=x.version;for(let E=0,I=0;E<v;E+=3){const P=_[E+0],N=_[E+1],O=_[E+2];T[I++]=P,T[I++]=N,T[I++]=N,T[I++]=O,T[I++]=O,T[I++]=P}}else{m=g.version;for(let _=0,E=0;_<v;_+=3){const I=_+0,P=_+1,N=_+2;T[E++]=I,T[E++]=P,T[E++]=P,T[E++]=N,T[E++]=N,T[E++]=I}}y.version=m;const b=r.get(p);b&&t.remove(b),r.set(p,y)}function u(p){const x=r.get(p);if(x){const g=p.index;g!==null&&x.version<g.version&&f(p)}else f(p);return r.get(p)}function d(){for(const p in i){const x=i[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:u,dispose:d}}function Yp(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){s.drawElements(n,u,r,f*a),e.update(u,n,1)}function c(f,u,d){d!==0&&(s.drawElementsInstanced(n,u,r,f*a,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let x=0;for(let g=0;g<d;g++)x+=u[g];e.update(x,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Kp(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:te("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function $p(s,t,e){const n=new WeakMap,i=new pe;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let P=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",P)};var d=P;u!==void 0&&u.texture.dispose();const p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let y=0;p===!0&&(y=1),x===!0&&(y=2),g===!0&&(y=3);let T=o.attributes.position.count*y,b=1;T>t.maxTextureSize&&(b=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const _=new Float32Array(T*b*4*f),E=new fc(_,T,b,f);E.type=fn,E.needsUpdate=!0;const I=y*4;for(let N=0;N<f;N++){const O=m[N],V=v[N],D=w[N],H=T*b*4*N;for(let Z=0;Z<O.count;Z++){const k=Z*I;p===!0&&(i.fromBufferAttribute(O,Z),_[H+k+0]=i.x,_[H+k+1]=i.y,_[H+k+2]=i.z,_[H+k+3]=0),x===!0&&(i.fromBufferAttribute(V,Z),_[H+k+4]=i.x,_[H+k+5]=i.y,_[H+k+6]=i.z,_[H+k+7]=0),g===!0&&(i.fromBufferAttribute(D,Z),_[H+k+8]=i.x,_[H+k+9]=i.y,_[H+k+10]=i.z,_[H+k+11]=D.itemSize===4?i.w:1)}}u={count:f,texture:E,size:new Tt(T,b)},n.set(o,u),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const x=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Zp(s,t,e,n,i){let r=new WeakMap;function a(c){const h=i.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const Jp={[ql]:"LINEAR_TONE_MAPPING",[Yl]:"REINHARD_TONE_MAPPING",[Kl]:"CINEON_TONE_MAPPING",[Wa]:"ACES_FILMIC_TONE_MAPPING",[Zl]:"AGX_TONE_MAPPING",[Jl]:"NEUTRAL_TONE_MAPPING",[$l]:"CUSTOM_TONE_MAPPING"};function Qp(s,t,e,n,i,r){const a=new wn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new ye;h.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Qt([0,2,0,0,2,0],2));const f=new Bu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new j(h,f),d=new Rc(-1,1,1,-1,0,1);let p=null,x=null,g=!1,m,v=null,w=[],y=!1;this.setSize=function(T,b){a.setSize(T,b),o!==null&&o.setSize(T,b),l!==null&&l.setSize(T,b);for(let _=0;_<w.length;_++){const E=w[_];E.setSize&&E.setSize(T,b)}},this.setEffects=function(T){w=T,y=w.length>0&&w[0].isRenderPass===!0;const b=a.width,_=a.height;w.length>0&&o===null&&(o=new wn(b,_,{type:Tn,depthBuffer:!1,stencilBuffer:!1}),l=new wn(b,_,{type:Tn,depthBuffer:!1,stencilBuffer:!1}));const E=i===!0&&w.some(I=>I.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&c===null&&(c=new Oi(b,_),r===!0&&(c.format=Zn,c.type=Ni)),a.dispose(),a.depthTexture=E?c:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let I=0;I<w.length;I++){const P=w[I];P.setSize&&P.setSize(b,_),E&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(T,b){if(g||T.toneMapping===Fn&&w.length===0)return!1;if(v=b,b!==null){const _=b.width,E=b.height;(a.width!==_||a.height!==E)&&this.setSize(_,E)}return y===!1&&T.setRenderTarget(a),m=T.toneMapping,T.toneMapping=Fn,!0},this.hasRenderPass=function(){return y},this.end=function(T,b){T.toneMapping=m,g=!0;let _=a,E=o;for(let I=0;I<w.length;I++){const P=w[I];P.enabled!==!1&&(P.render(T,E,_,b),P.needsSwap!==!1&&(_=E,E=E===o?l:o))}if(p!==T.outputColorSpace||x!==T.toneMapping){p=T.outputColorSpace,x=T.toneMapping,f.defines={},Zt.getTransfer(p)===ie&&(f.defines.SRGB_TRANSFER="");const I=Jp[x];I&&(f.defines[I]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,T.setRenderTarget(v),T.render(u,d),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}const Dc=new ke,Nc=new Oi(1,1),Uc=new Sc(1),Oc=new fc,Fc=new jh,Bc=new Mc,dl=[],fl=[],pl=new Float32Array(16),ml=new Float32Array(9),gl=new Float32Array(4);function Gi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=dl[i];if(r===void 0&&(r=new Float32Array(i),dl[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ae(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Re(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function hr(s,t){let e=fl[t];e===void 0&&(e=new Int32Array(t),fl[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function jp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function tm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2fv(this.addr,t),Re(e,t)}}function em(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;s.uniform3fv(this.addr,t),Re(e,t)}}function nm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4fv(this.addr,t),Re(e,t)}}function im(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;gl.set(n),s.uniformMatrix2fv(this.addr,!1,gl),Re(e,n)}}function sm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;ml.set(n),s.uniformMatrix3fv(this.addr,!1,ml),Re(e,n)}}function rm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;pl.set(n),s.uniformMatrix4fv(this.addr,!1,pl),Re(e,n)}}function am(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function om(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2iv(this.addr,t),Re(e,t)}}function lm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;s.uniform3iv(this.addr,t),Re(e,t)}}function cm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4iv(this.addr,t),Re(e,t)}}function hm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function um(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2uiv(this.addr,t),Re(e,t)}}function dm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;s.uniform3uiv(this.addr,t),Re(e,t)}}function fm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4uiv(this.addr,t),Re(e,t)}}function ur(s){return s.version===0&&(s.compareFunction=lc,s.needsUpdate=!0),s}function pm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=ur(Nc):r=Dc,e.setTexture2D(t||r,i)}function mm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Fc,i)}function gm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=ur(Uc):r=Bc,e.setTextureCube(t||r,i)}function _m(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Oc,i)}function xm(s){switch(s){case 5126:return jp;case 35664:return tm;case 35665:return em;case 35666:return nm;case 35674:return im;case 35675:return sm;case 35676:return rm;case 5124:case 35670:return am;case 35667:case 35671:return om;case 35668:case 35672:return lm;case 35669:case 35673:return cm;case 5125:return hm;case 36294:return um;case 36295:return dm;case 36296:return fm;case 35678:case 36198:case 36298:case 36306:case 35682:return pm;case 35679:case 36299:case 36307:return mm;case 35680:case 36300:case 36308:case 36293:return gm;case 36289:case 36303:case 36311:case 36292:return _m}}function vm(s,t){s.uniform1fv(this.addr,t)}function Mm(s,t){const e=Gi(t,this.size,2);s.uniform2fv(this.addr,e)}function Sm(s,t){const e=Gi(t,this.size,3);s.uniform3fv(this.addr,e)}function ym(s,t){const e=Gi(t,this.size,4);s.uniform4fv(this.addr,e)}function Em(s,t){const e=Gi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function wm(s,t){const e=Gi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function bm(s,t){const e=Gi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Tm(s,t){s.uniform1iv(this.addr,t)}function Am(s,t){s.uniform2iv(this.addr,t)}function Rm(s,t){s.uniform3iv(this.addr,t)}function Cm(s,t){s.uniform4iv(this.addr,t)}function Pm(s,t){s.uniform1uiv(this.addr,t)}function Lm(s,t){s.uniform2uiv(this.addr,t)}function Im(s,t){s.uniform3uiv(this.addr,t)}function Dm(s,t){s.uniform4uiv(this.addr,t)}function Nm(s,t,e){const n=this.cache,i=t.length,r=hr(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=ur(Nc):a=Dc;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function Um(s,t,e){const n=this.cache,i=t.length,r=hr(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Fc,r[a])}function Om(s,t,e){const n=this.cache,i=t.length,r=hr(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=ur(Uc):a=Bc;for(let o=0;o!==i;++o)e.setTextureCube(t[o]||a,r[o])}function Fm(s,t,e){const n=this.cache,i=t.length,r=hr(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Oc,r[a])}function Bm(s){switch(s){case 5126:return vm;case 35664:return Mm;case 35665:return Sm;case 35666:return ym;case 35674:return Em;case 35675:return wm;case 35676:return bm;case 5124:case 35670:return Tm;case 35667:case 35671:return Am;case 35668:case 35672:return Rm;case 35669:case 35673:return Cm;case 5125:return Pm;case 36294:return Lm;case 36295:return Im;case 36296:return Dm;case 35678:case 36198:case 36298:case 36306:case 35682:return Nm;case 35679:case 36299:case 36307:return Um;case 35680:case 36300:case 36308:case 36293:return Om;case 36289:case 36303:case 36311:case 36292:return Fm}}class zm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=xm(e.type)}}class km{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Bm(e.type)}}class Gm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const Hr=/(\w+)(\])?(\[|\.)?/g;function _l(s,t){s.seq.push(t),s.map[t.id]=t}function Hm(s,t,e){const n=s.name,i=n.length;for(Hr.lastIndex=0;;){const r=Hr.exec(n),a=Hr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){_l(e,c===void 0?new zm(o,s,t):new km(o,s,t));break}else{let f=e.map[o];f===void 0&&(f=new Gm(o),_l(e,f)),e=f}}}class Zs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Hm(o,l,this)}const i=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function xl(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Vm=37297;let Wm=0;function Xm(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const vl=new Bt;function qm(s){Zt._getMatrix(vl,Zt.workingColorSpace,s);const t=`mat3( ${vl.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(s)){case er:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Ml(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Xm(s.getShaderSource(t),o)}else return r}function Ym(s,t){const e=qm(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Km={[ql]:"Linear",[Yl]:"Reinhard",[Kl]:"Cineon",[Wa]:"ACESFilmic",[Zl]:"AgX",[Jl]:"Neutral",[$l]:"Custom"};function $m(s,t){const e=Km[t];return e===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Gs=new R;function Zm(){Zt.getLuminanceCoefficients(Gs);const s=Gs.x.toFixed(4),t=Gs.y.toFixed(4),e=Gs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ji).join(`
`)}function Qm(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function jm(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function ji(s){return s!==""}function Sl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function yl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const t0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ka(s){return s.replace(t0,e0)}function e0(s,t){const e=Xt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return ka(e)}const n0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function El(s){return s.replace(n0,i0)}function i0(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function wl(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const s0={[ts]:"SHADOWMAP_TYPE_PCF",[Qi]:"SHADOWMAP_TYPE_VSM"};function r0(s){return s0[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const a0={[ls]:"ENVMAP_MODE_REFRACTION"};function o0(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":a0[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const l0={[Xl]:"ENVMAP_BLENDING_MULTIPLY",[_h]:"ENVMAP_BLENDING_MIX",[xh]:"ENVMAP_BLENDING_ADD"};function c0(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":l0[s.combine]||"ENVMAP_BLENDING_NONE"}function h0(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=r0(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=o0(e),f=c0(e),u=Jm(e),d=Qm(r),p=i.createProgram();let x,g,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(ji).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(ji).join(`
`),g.length>0&&(g+=`
`)):(x=[wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ji).join(`
`),g=[wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fn?"#define TONE_MAPPING":"",e.toneMapping!==Fn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Fn?$m("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,Ym("linearToOutputTexel",e.outputColorSpace),Zm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ji).join(`
`)),a=ka(a),a=Sl(a,e),a=yl(a,e),o=ka(o),o=Sl(o,e),o=yl(o,e),a=El(a),o=El(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",e.glslVersion===Ro?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ro?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=m+x+a,w=m+g+o,y=xl(i,i.VERTEX_SHADER,v),T=xl(i,i.FRAGMENT_SHADER,w);i.attachShader(p,y),i.attachShader(p,T),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function b(P){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(p)||"",O=i.getShaderInfoLog(y)||"",V=i.getShaderInfoLog(T)||"",D=N.trim(),H=O.trim(),Z=V.trim();let k=!0,nt=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(k=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,y,T);else{const X=Ml(i,y,"vertex"),Q=Ml(i,T,"fragment");te("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+X+`
`+Q)}else D!==""?Nt("WebGLProgram: Program Info Log:",D):(H===""||Z==="")&&(nt=!1);nt&&(P.diagnostics={runnable:k,programLog:D,vertexShader:{log:H,prefix:x},fragmentShader:{log:Z,prefix:g}})}i.deleteShader(y),i.deleteShader(T),_=new Zs(i,p),E=jm(i,p)}let _;this.getUniforms=function(){return _===void 0&&b(this),_};let E;this.getAttributes=function(){return E===void 0&&b(this),E};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(p,Vm)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Wm++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=T,this}let u0=0;class d0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new f0(t),e.set(t,n)),n}}class f0{constructor(t){this.id=u0++,this.code=t,this.usedTimes=0}}function p0(s){return s===hi||s===Qs||s===js}function m0(s,t,e,n,i,r){const a=new pc,o=new d0,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,E,I,P,N,O){const V=P.fog,D=N.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,k=t.get(_.envMap||H,Z),nt=u[_.type];let X=n.precision;_.precision!==null&&(X=n.getMaxPrecision(_.precision),X!==_.precision&&Nt("WebGLProgram.getParameters:",_.precision,"not supported, using",X,"instead."));const Q=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,tt=Q!==void 0?Q.length:0;let wt=0;D.morphAttributes.position!==void 0&&(wt=1),D.morphAttributes.normal!==void 0&&(wt=2),D.morphAttributes.color!==void 0&&(wt=3);let zt,K,_t,St;if(nt){const pt=yn[nt];zt=pt.vertexShader,K=pt.fragmentShader}else{zt=_.vertexShader,K=_.fragmentShader;const pt=o.getVertexShaderStage(_),ne=o.getFragmentShaderStage(_);o.update(_,pt,ne),_t=pt.id,St=ne.id}const Pt=s.getRenderTarget(),xt=s.state.buffers.depth.getReversed(),Gt=N.isInstancedMesh===!0,_e=N.isBatchedMesh===!0,It=!!_.map,ee=!!_.matcap,re=!!k,Yt=re&&k.isPMREMTexture===!0,Ne=!!_.aoMap,Ee=!!_.lightMap,We=!!_.bumpMap&&_.wireframe===!1,de=!!_.normalMap,mn=!!_.displacementMap,Ce=!!_.emissiveMap,tn=!!_.metalnessMap,en=!!_.roughnessMap,nn=_.anisotropy>0,U=_.clearcoat>0,sn=_.diffuseRoughness>0,ce=_.dispersion>0,he=_.retroreflectivity>0,ft=_.iridescence>0,we=_.sheen>0,Lt=_.transmission>0,Ft=nn&&!!_.anisotropyMap,A=U&&!!_.clearcoatMap,M=U&&!!_.clearcoatNormalMap,B=U&&!!_.clearcoatRoughnessMap,et=sn&&!!_.diffuseRoughnessMap,J=ft&&!!_.iridescenceMap,at=ft&&!!_.iridescenceThicknessMap,ut=we&&!!_.sheenColorMap,q=we&&!!_.sheenRoughnessMap,Y=!!_.specularMap,lt=!!_.specularColorMap,C=!!_.specularIntensityMap,$=Lt&&!!_.transmissionMap,W=Lt&&!!_.thicknessMap,ct=!!_.gradientMap,rt=!!_.alphaMap,ot=_.alphaTest>0,At=!!_.alphaHash,Wt=!!_.extensions;let it=Fn;_.toneMapped&&(Pt===null||Pt.isXRRenderTarget===!0)&&(it=s.toneMapping);const Ct=Yt?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,Ht={shaderID:nt,shaderType:_.type,shaderName:_.name,vertexShader:zt,fragmentShader:K,defines:_.defines,customVertexShaderID:_t,customFragmentShaderID:St,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:X,batching:_e,batchingColor:_e&&N._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&N.instanceColor!==null,instancingMorph:Gt&&N.morphTexture!==null,outputColorSpace:Pt===null?s.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:Zt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:It,matcap:ee,envMap:re,envMapMode:re&&k.mapping,envMapPMREM:Yt,envMapMaxLod:Yt?Ct.length-1:null,envMapSize:Yt?Ct[0].width:null,aoMap:Ne,lightMap:Ee,bumpMap:We,normalMap:de,displacementMap:mn,emissiveMap:Ce,normalMapObjectSpace:de&&_.normalMapType===Mh,normalMapTangentSpace:de&&_.normalMapType===Ua,packedNormalMap:de&&_.normalMapType===Ua&&p0(_.normalMap.format),metalnessMap:tn,roughnessMap:en,anisotropy:nn,anisotropyMap:Ft,clearcoat:U,clearcoatMap:A,clearcoatNormalMap:M,clearcoatRoughnessMap:B,diffuseRoughness:sn,diffuseRoughnessMap:et,dispersion:ce,retroreflection:he,iridescence:ft,iridescenceMap:J,iridescenceThicknessMap:at,sheen:we,sheenColorMap:ut,sheenRoughnessMap:q,specularMap:Y,specularColorMap:lt,specularIntensityMap:C,transmission:Lt,transmissionMap:$,thicknessMap:W,gradientMap:ct,opaque:_.transparent===!1&&_.blending===es&&_.alphaToCoverage===!1,alphaMap:rt,alphaTest:ot,alphaHash:At,combine:_.combine,mapUv:It&&d(_.map.channel),aoMapUv:Ne&&d(_.aoMap.channel),lightMapUv:Ee&&d(_.lightMap.channel),bumpMapUv:We&&d(_.bumpMap.channel),normalMapUv:de&&d(_.normalMap.channel),displacementMapUv:mn&&d(_.displacementMap.channel),emissiveMapUv:Ce&&d(_.emissiveMap.channel),metalnessMapUv:tn&&d(_.metalnessMap.channel),roughnessMapUv:en&&d(_.roughnessMap.channel),anisotropyMapUv:Ft&&d(_.anisotropyMap.channel),clearcoatMapUv:A&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:M&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:et&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:J&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:at&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:q&&d(_.sheenRoughnessMap.channel),specularMapUv:Y&&d(_.specularMap.channel),specularColorMapUv:lt&&d(_.specularColorMap.channel),specularIntensityMapUv:C&&d(_.specularIntensityMap.channel),transmissionMapUv:$&&d(_.transmissionMap.channel),thicknessMapUv:W&&d(_.thicknessMap.channel),alphaMapUv:rt&&d(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(de||nn),vertexNormals:!!D.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!D.attributes.uv&&(It||rt),fog:!!V,useFog:_.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||D.attributes.normal===void 0&&de===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:xt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:wt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:O.filter(pt=>pt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:it,decodeVideoTexture:It&&_.map.isVideoTexture===!0&&Zt.getTransfer(_.map.colorSpace)===ie,decodeVideoTextureEmissive:Ce&&_.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(_.emissiveMap.colorSpace)===ie,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===be,flipSided:_.side===Ve,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Wt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&_.extensions.multiDraw===!0||_e)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ht.vertexUv1s=l.has(1),Ht.vertexUv2s=l.has(2),Ht.vertexUv3s=l.has(3),l.clear(),Ht}function x(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const I in _.defines)E.push(I),E.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(g(E,_),m(E,_),E.push(s.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function g(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapPMREM),_.push(E.envMapMaxLod),_.push(E.envMapSize),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.diffuseRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.numLightProbeGrids),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function m(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function v(_){const E=u[_.type];let I;if(E){const P=yn[E];I=Uu.clone(P.uniforms)}else I=_.uniforms;return I}function w(_,E){let I=h.get(E);return I!==void 0?++I.usedTimes:(I=new h0(s,E,_,i),c.push(I),h.set(E,I)),I}function y(_){if(--_.usedTimes===0){const E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function b(){o.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:v,acquireProgram:w,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:b}}function g0(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function _0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function bl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Tl(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,p,x,g,m){let v=s[t];return v===void 0?(v={id:u.id,object:u,geometry:d,material:p,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},s[t]=v):(v.id=u.id,v.object=u,v.geometry=d,v.material=p,v.materialVariant=a(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=g,v.group=m),t++,v}function l(u,d,p,x,g,m,v){v.reversedDepth===!0&&(g=-g);const w=o(u,d,p,x,g,m);p.transmission>0?n.push(w):p.transparent===!0?i.push(w):e.push(w)}function c(u,d,p,x,g,m){const v=o(u,d,p,x,g,m);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):e.unshift(v)}function h(u,d){e.length>1&&e.sort(u||_0),n.length>1&&n.sort(d||bl),i.length>1&&i.sort(d||bl)}function f(){for(let u=t,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:f,sort:h}}function x0(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Tl,s.set(n,[a])):i>=r.length?(a=new Tl,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function v0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new R,color:new Ot};break;case"SpotLight":e={position:new R,direction:new R,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function M0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let S0=0;function y0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function E0(s){const t=new v0,e=M0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const i=new R,r=new se,a=new se;function o(c){let h=0,f=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let d=0,p=0,x=0,g=0,m=0,v=0,w=0,y=0,T=0,b=0,_=0,E=0,I=0,P=0;c.sort(y0);for(let O=0,V=c.length;O<V;O++){const D=c[O],H=D.color,Z=D.intensity,k=D.distance;let nt=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===hi?nt=D.shadow.map.texture:nt=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=H.r*Z,f+=H.g*Z,u+=H.b*Z;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],Z);P++}else if(D.isSunLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,tt=e.get(D);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[p]=tt,n.sunShadowMap[p]=nt;const wt=Q.getViewportCount();for(let zt=0;zt<wt;zt++)n.sunShadowMatrix[x+zt]=Q.getMatrix(zt),n.sunShadowCascade[x+zt]=Q._cascadeData[zt];x+=wt,p++}n.sun[d]=X,d++}else if(D.isDirectionalLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,tt=e.get(D);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,n.directionalShadow[g]=tt,n.directionalShadowMap[g]=nt,n.directionalShadowMatrix[g]=D.shadow.matrix,T++}n.directional[g]=X,g++}else if(D.isSpotLight){const X=t.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(H).multiplyScalar(Z),X.distance=k,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[v]=X;const Q=D.shadow;if(D.map&&(n.spotLightMap[E]=D.map,E++,Q.updateMatrices(D),D.castShadow&&I++),n.spotLightMatrix[v]=Q.matrix,D.castShadow){const tt=e.get(D);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,n.spotShadow[v]=tt,n.spotShadowMap[v]=nt,_++}v++}else if(D.isRectAreaLight){const X=t.get(D);X.color.copy(H).multiplyScalar(Z),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[w]=X,w++}else if(D.isPointLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const Q=D.shadow,tt=e.get(D);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,tt.shadowCameraNear=Q.camera.near,tt.shadowCameraFar=Q.camera.far,n.pointShadow[m]=tt,n.pointShadowMap[m]=nt,n.pointShadowMatrix[m]=D.shadow.matrix,b++}n.point[m]=X,m++}else if(D.isHemisphereLight){const X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(Z),X.groundColor.copy(D.groundColor).multiplyScalar(Z),n.hemi[y]=X,y++}}w>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const N=n.hash;(N.sunLength!==d||N.directionalLength!==g||N.pointLength!==m||N.spotLength!==v||N.rectAreaLength!==w||N.hemiLength!==y||N.numSunShadows!==p||N.numDirectionalShadows!==T||N.numPointShadows!==b||N.numSpotShadows!==_||N.numSpotMaps!==E||N.numLightProbes!==P)&&(n.sun.length=d,n.directional.length=g,n.spot.length=v,n.rectArea.length=w,n.point.length=m,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+E-I,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=P,N.sunLength=d,N.directionalLength=g,N.pointLength=m,N.spotLength=v,N.rectAreaLength=w,N.hemiLength=y,N.numSunShadows=p,N.numDirectionalShadows=T,N.numPointShadows=b,N.numSpotShadows=_,N.numSpotMaps=E,N.numLightProbes=P,n.version=S0++)}function l(c,h){let f=0,u=0,d=0,p=0,x=0,g=0;const m=h.matrixWorldInverse;for(let v=0,w=c.length;v<w;v++){const y=c[v];if(y.isSunLight){const T=n.sun[f];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(m),f++}else if(y.isDirectionalLight){const T=n.directional[u];T.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(m),u++}else if(y.isSpotLight){const T=n.spot[p];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const T=n.rectArea[x];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const T=n.point[d];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const T=n.hemi[g];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function Al(s){const t=new E0(s),e=[],n=[],i=[];function r(f){h.camera=f,e.length=0,n.length=0,i.length=0}function a(f){f.isLightProbeGrid?i.push(f):e.push(f)}function o(f){n.push(f)}function l(){t.setup(e),i.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function c(f){t.setupView(e,f)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function w0(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new Al(s),t.set(i,[o])):r>=a.length?(o=new Al(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const b0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,A0=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],R0=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Rl=new se,Zi=new R,Vr=new R;function C0(s,t,e){let n=new ds;const i=new Tt,r=new Tt,a=new pe,o=new zu,l=new ku,c={},h=e.maxTextureSize,f={[ci]:Ve,[Ve]:ci,[be]:be},u=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:b0,fragmentShader:T0}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const p=new ye;p.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new j(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ts;let m=this.type;this.render=function(b,_,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===Qc&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ts);const I=s.getRenderTarget(),P=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),O=s.state;O.setBlending(Pi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const V=m!==this.type;V&&_.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(H=>H.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,H=b.length;D<H;D++){const Z=b[D],k=Z.shadow;if(k===void 0){Nt("WebGLShadowMap:",Z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const nt=k.getFrameExtents();i.multiply(nt),r.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/nt.x),i.x=r.x*nt.x,k.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/nt.y),i.y=r.y*nt.y,k.mapSize.y=r.y));const X=s.state.buffers.depth.getReversed();if(k.camera._reversedDepth=X,k.map===null||V===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Qi){if(Z.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new wn(i.x,i.y,{format:hi,type:Tn,minFilter:qe,magFilter:qe,generateMipmaps:!1}),k.map.texture.name=Z.name+".shadowMap",k.map.depthTexture=new Oi(i.x,i.y,fn),k.map.depthTexture.name=Z.name+".shadowMapDepth",k.map.depthTexture.format=Jn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Te,k.map.depthTexture.magFilter=Te}else Z.isPointLight?(k.map=new oo(i.x),k.map.depthTexture=new Sc(i.x,bn)):(k.map=new wn(i.x,i.y),k.map.depthTexture=new Oi(i.x,i.y,bn)),k.map.depthTexture.name=Z.name+".shadowMap",k.map.depthTexture.format=Jn,this.type===ts?(k.map.depthTexture.compareFunction=X?oc:ac,k.map.depthTexture.minFilter=qe,k.map.depthTexture.magFilter=qe):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Te,k.map.depthTexture.magFilter=Te);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==i.x||k.map.height!==i.y)&&k.map.setSize(i.x,i.y);const Q=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();Z.isPointLight!==!0&&k.updateMatrices(Z,E);const tt=(k.camera.layers.mask&4294967294)!==0?k.camera.layers:E.layers;for(let wt=0;wt<Q;wt++){const zt=k.getCamera(wt);if(Z.isPointLight){const K=k.camera,_t=k.matrix,St=Z.distance||K.far;St!==K.far&&(K.far=St,K.updateProjectionMatrix()),Zi.setFromMatrixPosition(Z.matrixWorld),K.position.copy(Zi),Vr.copy(K.position),Vr.add(A0[wt]),K.up.copy(R0[wt]),K.lookAt(Vr),K.updateMatrixWorld(),_t.makeTranslation(-Zi.x,-Zi.y,-Zi.z),Rl.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Rl,K.coordinateSystem,K.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)s.setRenderTarget(k.map,wt),s.clear();else{wt===0&&(s.setRenderTarget(k.map),s.clear());const K=k.getViewport(wt);a.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),O.viewport(a)}n=k.getFrustum(wt),y(_,E,zt,Z,tt,this.type)}k.isPointLightShadow!==!0&&this.type===Qi&&v(k,E),k.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(I,P,N)};function v(b,_){const E=t.update(x);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new wn(i.x,i.y,{format:hi,type:Tn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(_,null,E,u,x,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(_,null,E,d,x,null)}function w(b,_,E,I){let P=null;const N=E.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)P=N;else if(P=E.isPointLight===!0?l:o,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const O=P.uuid,V=_.uuid;let D=c[O];D===void 0&&(D={},c[O]=D);let H=D[V];H===void 0&&(H=P.clone(),D[V]=H,_.addEventListener("dispose",T)),P=H}if(P.visible=_.visible,P.wireframe=_.wireframe,I===Qi?P.side=_.shadowSide!==null?_.shadowSide:_.side:P.side=_.shadowSide!==null?_.shadowSide:f[_.side],P.alphaMap=_.alphaMap,P.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,P.map=_.map,P.clipShadows=_.clipShadows,P.clippingPlanes=_.clippingPlanes,P.clipIntersection=_.clipIntersection,P.displacementMap=_.displacementMap,P.displacementScale=_.displacementScale,P.displacementBias=_.displacementBias,P.wireframeLinewidth=_.wireframeLinewidth,P.linewidth=_.linewidth,E.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const O=s.properties.get(P);O.light=E}return P}function y(b,_,E,I,P,N){if(b.visible===!1)return;if(b.layers.test(P)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&N===Qi)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,b.matrixWorld);const D=t.update(b),H=b.material;if(Array.isArray(H)){const Z=D.groups;for(let k=0,nt=Z.length;k<nt;k++){const X=Z[k],Q=H[X.materialIndex];if(Q&&Q.visible){const tt=w(b,Q,I,N);b.onBeforeShadow(s,b,_,E,D,tt,X),s.renderBufferDirect(E,null,D,tt,b,X),b.onAfterShadow(s,b,_,E,D,tt,X)}}}else if(H.visible){const Z=w(b,H,I,N);b.onBeforeShadow(s,b,_,E,D,Z,null),s.renderBufferDirect(E,null,D,Z,b,null),b.onAfterShadow(s,b,_,E,D,Z,null)}}const V=b.children;for(let D=0,H=V.length;D<H;D++)y(V[D],_,E,I,P,N)}function T(b){b.target.removeEventListener("dispose",T);for(const E in c){const I=c[E],P=b.target.uuid;P in I&&(I[P].dispose(),delete I[P])}}}function P0(s,t){function e(){let C=!1;const $=new pe;let W=null;const ct=new pe(0,0,0,0);return{setMask:function(rt){W!==rt&&!C&&(s.colorMask(rt,rt,rt,rt),W=rt)},setLocked:function(rt){C=rt},setClear:function(rt,ot,At,Wt,it){it===!0&&(rt*=Wt,ot*=Wt,At*=Wt),$.set(rt,ot,At,Wt),ct.equals($)===!1&&(s.clearColor(rt,ot,At,Wt),ct.copy($))},reset:function(){C=!1,W=null,ct.set(-1,0,0,0)}}}function n(){let C=!1,$=!1,W=null,ct=null,rt=null;return{setReversed:function(ot){if($!==ot){const At=t.get("EXT_clip_control");ot?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),$=ot;const Wt=rt;rt=null,this.setClear(Wt)}},getReversed:function(){return $},setTest:function(ot){ot?xt(s.DEPTH_TEST):Gt(s.DEPTH_TEST)},setMask:function(ot){W!==ot&&!C&&(s.depthMask(ot),W=ot)},setFunc:function(ot){if($&&(ot=Lh[ot]),ct!==ot){switch(ot){case Jr:s.depthFunc(s.NEVER);break;case Qr:s.depthFunc(s.ALWAYS);break;case jr:s.depthFunc(s.LESS);break;case os:s.depthFunc(s.LEQUAL);break;case ta:s.depthFunc(s.EQUAL);break;case ea:s.depthFunc(s.GEQUAL);break;case na:s.depthFunc(s.GREATER);break;case ia:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ct=ot}},setLocked:function(ot){C=ot},setClear:function(ot){rt!==ot&&(rt=ot,$&&(ot=1-ot),s.clearDepth(ot))},reset:function(){C=!1,W=null,ct=null,rt=null,$=!1}}}function i(){let C=!1,$=null,W=null,ct=null,rt=null,ot=null,At=null,Wt=null,it=null;return{setTest:function(Ct){C||(Ct?xt(s.STENCIL_TEST):Gt(s.STENCIL_TEST))},setMask:function(Ct){$!==Ct&&!C&&(s.stencilMask(Ct),$=Ct)},setFunc:function(Ct,Ht,pt){(W!==Ct||ct!==Ht||rt!==pt)&&(s.stencilFunc(Ct,Ht,pt),W=Ct,ct=Ht,rt=pt)},setOp:function(Ct,Ht,pt){(ot!==Ct||At!==Ht||Wt!==pt)&&(s.stencilOp(Ct,Ht,pt),ot=Ct,At=Ht,Wt=pt)},setLocked:function(Ct){C=Ct},setClear:function(Ct){it!==Ct&&(s.clearStencil(Ct),it=Ct)},reset:function(){C=!1,$=null,W=null,ct=null,rt=null,ot=null,At=null,Wt=null,it=null}}}const r=new e,a=new n,o=new i;let l={};const c=new WeakMap;let h={},f={},u={},d=new WeakMap,p=[],x=null,g=!1,m=null,v=null,w=null,y=null,T=null,b=null,_=null,E=new Ot(0,0,0),I=0,P=!1,N=null,O=null,V=null,D=null,H=null;const Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,nt=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=nt>=1):X.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=nt>=2);let Q=null,tt={};const wt=s.getParameter(s.SCISSOR_BOX),zt=s.getParameter(s.VIEWPORT),K=new pe().fromArray(wt),_t=new pe().fromArray(zt);function St(C,$,W,ct){const rt=new Uint8Array(4),ot=s.createTexture();s.bindTexture(C,ot),s.texParameteri(C,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(C,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let At=0;At<W;At++)C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY?s.texImage3D($,0,s.RGBA,1,1,ct,0,s.RGBA,s.UNSIGNED_BYTE,rt):s.texImage2D($+At,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,rt);return ot}const Pt={};Pt[s.TEXTURE_2D]=St(s.TEXTURE_2D,s.TEXTURE_2D,1),Pt[s.TEXTURE_CUBE_MAP]=St(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pt[s.TEXTURE_2D_ARRAY]=St(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Pt[s.TEXTURE_3D]=St(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xt(s.DEPTH_TEST),a.setFunc(os),We(!1),de(wo),xt(s.CULL_FACE),Ne(Pi);function xt(C){h[C]!==!0&&(s.enable(C),h[C]=!0)}function Gt(C){h[C]!==!1&&(s.disable(C),h[C]=!1)}function _e(C,$){return u[C]!==$?(s.bindFramebuffer(C,$),u[C]=$,C===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=$),C===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=$),!0):!1}function It(C,$){let W=p,ct=!1;if(C){W=d.get($),W===void 0&&(W=[],d.set($,W));const rt=C.textures;if(W.length!==rt.length||W[0]!==s.COLOR_ATTACHMENT0){for(let ot=0,At=rt.length;ot<At;ot++)W[ot]=s.COLOR_ATTACHMENT0+ot;W.length=rt.length,ct=!0}}else W[0]!==s.BACK&&(W[0]=s.BACK,ct=!0);ct&&s.drawBuffers(W)}function ee(C){return x!==C?(s.useProgram(C),x=C,!0):!1}const re={[Ri]:s.FUNC_ADD,[th]:s.FUNC_SUBTRACT,[eh]:s.FUNC_REVERSE_SUBTRACT};re[nh]=s.MIN,re[ih]=s.MAX;const Yt={[sh]:s.ZERO,[rh]:s.ONE,[ah]:s.SRC_COLOR,[Vl]:s.SRC_ALPHA,[dh]:s.SRC_ALPHA_SATURATE,[hh]:s.DST_COLOR,[lh]:s.DST_ALPHA,[oh]:s.ONE_MINUS_SRC_COLOR,[Wl]:s.ONE_MINUS_SRC_ALPHA,[uh]:s.ONE_MINUS_DST_COLOR,[ch]:s.ONE_MINUS_DST_ALPHA,[fh]:s.CONSTANT_COLOR,[ph]:s.ONE_MINUS_CONSTANT_COLOR,[mh]:s.CONSTANT_ALPHA,[gh]:s.ONE_MINUS_CONSTANT_ALPHA};function Ne(C,$,W,ct,rt,ot,At,Wt,it,Ct){if(C===Pi){g===!0&&(Gt(s.BLEND),g=!1);return}if(g===!1&&(xt(s.BLEND),g=!0),C!==jc){if(C!==m||Ct!==P){if((v!==Ri||T!==Ri)&&(s.blendEquation(s.FUNC_ADD),v=Ri,T=Ri),Ct)switch(C){case es:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case as:s.blendFunc(s.ONE,s.ONE);break;case bo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case To:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:te("WebGLState: Invalid blending: ",C);break}else switch(C){case es:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case as:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case bo:te("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case To:te("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:te("WebGLState: Invalid blending: ",C);break}w=null,y=null,b=null,_=null,E.set(0,0,0),I=0,m=C,P=Ct}return}rt=rt||$,ot=ot||W,At=At||ct,($!==v||rt!==T)&&(s.blendEquationSeparate(re[$],re[rt]),v=$,T=rt),(W!==w||ct!==y||ot!==b||At!==_)&&(s.blendFuncSeparate(Yt[W],Yt[ct],Yt[ot],Yt[At]),w=W,y=ct,b=ot,_=At),(Wt.equals(E)===!1||it!==I)&&(s.blendColor(Wt.r,Wt.g,Wt.b,it),E.copy(Wt),I=it),m=C,P=!1}function Ee(C,$){C.side===be?Gt(s.CULL_FACE):xt(s.CULL_FACE);let W=C.side===Ve;$&&(W=!W),We(W),C.blending===es&&C.transparent===!1?Ne(Pi):Ne(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);const ct=C.stencilWrite;o.setTest(ct),ct&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ce(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?xt(s.SAMPLE_ALPHA_TO_COVERAGE):Gt(s.SAMPLE_ALPHA_TO_COVERAGE)}function We(C){N!==C&&(C?s.frontFace(s.CW):s.frontFace(s.CCW),N=C)}function de(C){C!==Zc?(xt(s.CULL_FACE),C!==O&&(C===wo?s.cullFace(s.BACK):C===Jc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Gt(s.CULL_FACE),O=C}function mn(C){C!==V&&(k&&s.lineWidth(C),V=C)}function Ce(C,$,W){C?(xt(s.POLYGON_OFFSET_FILL),(D!==$||H!==W)&&(D=$,H=W,a.getReversed()&&($=-$,W=-W),s.polygonOffset($,W))):Gt(s.POLYGON_OFFSET_FILL)}function tn(C){C?xt(s.SCISSOR_TEST):Gt(s.SCISSOR_TEST)}function en(C){C===void 0&&(C=s.TEXTURE0+Z-1),Q!==C&&(s.activeTexture(C),Q=C)}function nn(C,$,W){W===void 0&&(Q===null?W=s.TEXTURE0+Z-1:W=Q);let ct=tt[W];ct===void 0&&(ct={type:void 0,texture:void 0},tt[W]=ct),(ct.type!==C||ct.texture!==$)&&(Q!==W&&(s.activeTexture(W),Q=W),s.bindTexture(C,$||Pt[C]),ct.type=C,ct.texture=$)}function U(){const C=tt[Q];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function sn(){try{s.compressedTexImage2D(...arguments)}catch(C){te("WebGLState:",C)}}function ce(){try{s.compressedTexImage3D(...arguments)}catch(C){te("WebGLState:",C)}}function he(){try{s.texSubImage2D(...arguments)}catch(C){te("WebGLState:",C)}}function ft(){try{s.texSubImage3D(...arguments)}catch(C){te("WebGLState:",C)}}function we(){try{s.compressedTexSubImage2D(...arguments)}catch(C){te("WebGLState:",C)}}function Lt(){try{s.compressedTexSubImage3D(...arguments)}catch(C){te("WebGLState:",C)}}function Ft(){try{s.texStorage2D(...arguments)}catch(C){te("WebGLState:",C)}}function A(){try{s.texStorage3D(...arguments)}catch(C){te("WebGLState:",C)}}function M(){try{s.texImage2D(...arguments)}catch(C){te("WebGLState:",C)}}function B(){try{s.texImage3D(...arguments)}catch(C){te("WebGLState:",C)}}function et(C){return f[C]!==void 0?f[C]:s.getParameter(C)}function J(C,$){f[C]!==$&&(s.pixelStorei(C,$),f[C]=$)}function at(C){K.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),K.copy(C))}function ut(C){_t.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),_t.copy(C))}function q(C,$){let W=c.get($);W===void 0&&(W=new WeakMap,c.set($,W));let ct=W.get(C);ct===void 0&&(ct=s.getUniformBlockIndex($,C.name),s.uniformBlockBinding($,ct,ct),W.set(C,ct))}function Y(C,$,W){const rt=c.get($).get(C);l[rt]!==W&&(s.bindBufferBase(s.UNIFORM_BUFFER,rt,W),l[rt]=W)}function lt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},f={},Q=null,tt={},u={},l={},d=new WeakMap,p=[],x=null,g=!1,m=null,v=null,w=null,y=null,T=null,b=null,_=null,E=new Ot(0,0,0),I=0,P=!1,N=null,O=null,V=null,D=null,H=null,K.set(0,0,s.canvas.width,s.canvas.height),_t.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:xt,disable:Gt,bindFramebuffer:_e,drawBuffers:It,useProgram:ee,setBlending:Ne,setMaterial:Ee,setFlipSided:We,setCullFace:de,setLineWidth:mn,setPolygonOffset:Ce,setScissorTest:tn,activeTexture:en,bindTexture:nn,unbindTexture:U,compressedTexImage2D:sn,compressedTexImage3D:ce,texImage2D:M,texImage3D:B,pixelStorei:J,getParameter:et,updateUBOMapping:q,uniformBlockBinding:Y,texStorage2D:Ft,texStorage3D:A,texSubImage2D:he,texSubImage3D:ft,compressedTexSubImage2D:we,compressedTexSubImage3D:Lt,scissor:at,viewport:ut,reset:lt}}function L0(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,h=new WeakMap,f=new Set;let u;const d=new WeakMap,p=new Set,x=new FinalizationRegistry(A=>p.delete(A));let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,M){return g?new OffscreenCanvas(A,M):nr("canvas")}function v(A,M,B){let et=1;const J=Ft(A);if((J.width>B||J.height>B)&&(et=B/Math.max(J.width,J.height)),et<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const at=Math.floor(et*J.width),ut=Math.floor(et*J.height);u===void 0&&(u=m(at,ut));const q=M?m(at,ut):u;return q.width=at,q.height=ut,q.getContext("2d").drawImage(A,0,0,at,ut),Nt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+at+"x"+ut+")."),q}else return"data"in A&&Nt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function w(A){return A.generateMipmaps}function y(A){s.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(A,M,B,et,J,at=!1){if(A!==null){if(s[A]!==void 0)return s[A];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ut;et&&(ut=t.get("EXT_texture_norm16"),ut||Nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=M;if(M===s.RED&&(B===s.FLOAT&&(q=s.R32F),B===s.HALF_FLOAT&&(q=s.R16F),B===s.UNSIGNED_BYTE&&(q=s.R8),B===s.UNSIGNED_SHORT&&ut&&(q=ut.R16_EXT),B===s.SHORT&&ut&&(q=ut.R16_SNORM_EXT)),M===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.R8UI),B===s.UNSIGNED_SHORT&&(q=s.R16UI),B===s.UNSIGNED_INT&&(q=s.R32UI),B===s.BYTE&&(q=s.R8I),B===s.SHORT&&(q=s.R16I),B===s.INT&&(q=s.R32I)),M===s.RG&&(B===s.FLOAT&&(q=s.RG32F),B===s.HALF_FLOAT&&(q=s.RG16F),B===s.UNSIGNED_BYTE&&(q=s.RG8),B===s.UNSIGNED_SHORT&&ut&&(q=ut.RG16_EXT),B===s.SHORT&&ut&&(q=ut.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.RG8UI),B===s.UNSIGNED_SHORT&&(q=s.RG16UI),B===s.UNSIGNED_INT&&(q=s.RG32UI),B===s.BYTE&&(q=s.RG8I),B===s.SHORT&&(q=s.RG16I),B===s.INT&&(q=s.RG32I)),M===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.RGB8UI),B===s.UNSIGNED_SHORT&&(q=s.RGB16UI),B===s.UNSIGNED_INT&&(q=s.RGB32UI),B===s.BYTE&&(q=s.RGB8I),B===s.SHORT&&(q=s.RGB16I),B===s.INT&&(q=s.RGB32I)),M===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),B===s.UNSIGNED_INT&&(q=s.RGBA32UI),B===s.BYTE&&(q=s.RGBA8I),B===s.SHORT&&(q=s.RGBA16I),B===s.INT&&(q=s.RGBA32I)),M===s.RGB&&(B===s.UNSIGNED_SHORT&&ut&&(q=ut.RGB16_EXT),B===s.SHORT&&ut&&(q=ut.RGB16_SNORM_EXT),B===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),B===s.UNSIGNED_INT_10F_11F_11F_REV&&(q=s.R11F_G11F_B10F)),M===s.RGBA){const Y=at?er:Zt.getTransfer(J);B===s.FLOAT&&(q=s.RGBA32F),B===s.HALF_FLOAT&&(q=s.RGBA16F),B===s.UNSIGNED_BYTE&&(q=Y===ie?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT&&ut&&(q=ut.RGBA16_EXT),B===s.SHORT&&ut&&(q=ut.RGBA16_SNORM_EXT),B===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function _(A,M){let B;return A?M===null||M===bn||M===Ni?B=s.DEPTH24_STENCIL8:M===fn?B=s.DEPTH32F_STENCIL8:M===hs&&(B=s.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===bn||M===Ni?B=s.DEPTH_COMPONENT24:M===fn?B=s.DEPTH_COMPONENT32F:M===hs&&(B=s.DEPTH_COMPONENT16),B}function E(A,M){return w(A)===!0||A.isFramebufferTexture&&A.minFilter!==Te&&A.minFilter!==qe?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function I(A){const M=new WeakRef(A);n.get(A).__ref=M,p.add(M),x.register(A,M,M)}function P(A){const M=n.get(A).__ref;M!==void 0&&(p.delete(M),x.unregister(M))}function N(A){V(A.target)}function O(A){D(A.target)}function V(A){A.removeEventListener("dispose",N),P(A),Z(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&f.delete(A)}function D(A){A.removeEventListener("dispose",O),P(A),nt(A)}function H(){for(const A of p){const M=A.deref();M!==void 0&&(M.isRenderTarget===!0?D(M):V(M))}p.clear(),f.clear()}function Z(A){const M=n.get(A);if(M.__webglInit===void 0)return;const B=A.source,et=d.get(B);if(et){const J=et[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&k(A),Object.keys(et).length===0&&d.delete(B)}n.remove(A)}function k(A){const M=n.get(A);s.deleteTexture(M.__webglTexture);const B=A.source,et=d.get(B);delete et[M.__cacheKey],a.memory.textures--}function nt(A){const M=n.get(A);M.__depthDisposeCallback&&M.__depthDisposeCallback();const B=A.depthTexture;if(B&&B.renderTarget===A&&V(B),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let at=0;at<M.__webglFramebuffer[J].length;at++)s.deleteFramebuffer(M.__webglFramebuffer[J][at]);else s.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)s.deleteFramebuffer(M.__webglFramebuffer[J]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const et=A.textures;for(let J=0,at=et.length;J<at;J++){const ut=n.get(et[J]);ut.__webglTexture&&(s.deleteTexture(ut.__webglTexture),a.memory.textures--),n.remove(et[J])}n.remove(A)}let X=0;function Q(){X=0}function tt(){return X}function wt(A){X=A}function zt(){const A=X;return A>=i.maxTextures&&Nt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+i.maxTextures),X+=1,A}function K(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.mipmapsAutoUpdate),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function _t(A,M){const B=n.get(A);if(A.isVideoTexture&&we(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){const et=A.image;if(et===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(B,A,M);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+M)}function St(A,M){const B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Ee(B,A,M);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+M)}function Pt(A,M){const B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Ee(B,A,M);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+M)}function xt(A,M){const B=n.get(A);if(A.version>0&&B.__version!==A.version){We(B,A,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+M)}const Gt={[cs]:s.REPEAT,[dn]:s.CLAMP_TO_EDGE,[sa]:s.MIRRORED_REPEAT},_e={[Te]:s.NEAREST,[jl]:s.NEAREST_MIPMAP_NEAREST,[_s]:s.NEAREST_MIPMAP_LINEAR,[qe]:s.LINEAR,[gr]:s.LINEAR_MIPMAP_NEAREST,[$n]:s.LINEAR_MIPMAP_LINEAR},It={[yh]:s.NEVER,[lc]:s.ALWAYS,[Eh]:s.LESS,[ac]:s.LEQUAL,[wh]:s.EQUAL,[oc]:s.GEQUAL,[bh]:s.GREATER,[Th]:s.NOTEQUAL};function ee(A,M){if(M.type===fn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===qe||M.magFilter===gr||M.magFilter===_s||M.magFilter===$n||M.minFilter===qe||M.minFilter===gr||M.minFilter===_s||M.minFilter===$n)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,Gt[M.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Gt[M.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Gt[M.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,_e[M.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,_e[M.minFilter]),M.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,It[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Te||M.minFilter!==_s&&M.minFilter!==$n||M.type===fn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function re(A,M){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",N),I(M));const et=M.source;let J=d.get(et);J===void 0&&(J={},d.set(et,J));const at=K(M);if(at!==A.__cacheKey){J[at]===void 0&&(J[at]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),J[at].usedTimes++;const ut=J[A.__cacheKey];ut!==void 0&&(J[A.__cacheKey].usedTimes--,ut.usedTimes===0&&k(M)),A.__cacheKey=at,A.__webglTexture=J[at].texture}return B}function Yt(A,M,B){return Math.floor(Math.floor(A/B)/M)}function Ne(A,M,B,et){const at=A.updateRanges;if(at.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,B,et,M.data);else{at.sort((C,$)=>C.start-$.start);let ut=0;for(let C=1;C<at.length;C++){const $=at[ut],W=at[C],ct=$.start+$.count,rt=Yt(W.start,M.width,4),ot=Yt($.start,M.width,4);W.start<=ct+1&&rt===ot&&Yt(W.start+W.count-1,M.width,4)===rt?$.count=Math.max($.count,W.start+W.count-$.start):(++ut,at[ut]=W)}at.length=ut+1;const q=e.getParameter(s.UNPACK_ROW_LENGTH),Y=e.getParameter(s.UNPACK_SKIP_PIXELS),lt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let C=0,$=at.length;C<$;C++){const W=at[C],ct=Math.floor(W.start/4),rt=Math.ceil(W.count/4),ot=ct%M.width,At=Math.floor(ct/M.width),Wt=rt,it=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,ot),e.pixelStorei(s.UNPACK_SKIP_ROWS,At),e.texSubImage2D(s.TEXTURE_2D,0,ot,At,Wt,it,B,et,M.data)}A.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,q),e.pixelStorei(s.UNPACK_SKIP_PIXELS,Y),e.pixelStorei(s.UNPACK_SKIP_ROWS,lt)}}function Ee(A,M,B){let et=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(et=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(et=s.TEXTURE_3D);const J=re(A,M),at=M.source;e.bindTexture(et,A.__webglTexture,s.TEXTURE0+B);const ut=n.get(at);if(at.version!==ut.__version||J===!0){if(e.activeTexture(s.TEXTURE0+B),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const it=Zt.getPrimaries(Zt.workingColorSpace),Ct=M.colorSpace===Nn?null:Zt.getPrimaries(M.colorSpace),Ht=M.colorSpace===Nn||it===Ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht)}e.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let Y=v(M.image,!1,i.maxTextureSize);Y=Lt(M,Y);const lt=r.convert(M.format,M.colorSpace),C=r.convert(M.type);let $=b(M.internalFormat,lt,C,M.normalized,M.colorSpace,M.isVideoTexture);ee(et,M);let W;const ct=M.mipmaps,rt=M.isVideoTexture!==!0,ot=ut.__version===void 0||J===!0,At=at.dataReady,Wt=E(M,Y);if(M.isDepthTexture)$=_(M.format===Zn,M.type),ot&&(rt?e.texStorage2D(s.TEXTURE_2D,1,$,Y.width,Y.height):e.texImage2D(s.TEXTURE_2D,0,$,Y.width,Y.height,0,lt,C,null));else if(M.isDataTexture)if(ct.length>0){rt&&ot&&e.texStorage2D(s.TEXTURE_2D,Wt,$,ct[0].width,ct[0].height);for(let it=0,Ct=ct.length;it<Ct;it++)W=ct[it],rt?At&&e.texSubImage2D(s.TEXTURE_2D,it,0,0,W.width,W.height,lt,C,W.data):e.texImage2D(s.TEXTURE_2D,it,$,W.width,W.height,0,lt,C,W.data);M.generateMipmaps=!1}else rt?(ot&&e.texStorage2D(s.TEXTURE_2D,Wt,$,Y.width,Y.height),At&&Ne(M,Y,lt,C)):e.texImage2D(s.TEXTURE_2D,0,$,Y.width,Y.height,0,lt,C,Y.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){rt&&ot&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Wt,$,ct[0].width,ct[0].height,Y.depth);for(let it=0,Ct=ct.length;it<Ct;it++)if(W=ct[it],M.format!==En)if(lt!==null)if(rt){if(At)if(M.layerUpdates.size>0){const Ht=ol(W.width,W.height,M.format,M.type);for(const pt of M.layerUpdates){const ne=W.data.subarray(pt*Ht/W.data.BYTES_PER_ELEMENT,(pt+1)*Ht/W.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,pt,W.width,W.height,1,lt,ne)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,0,W.width,W.height,Y.depth,lt,W.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,it,$,W.width,W.height,Y.depth,0,W.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?At&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,0,W.width,W.height,Y.depth,lt,C,W.data):e.texImage3D(s.TEXTURE_2D_ARRAY,it,$,W.width,W.height,Y.depth,0,lt,C,W.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{rt&&ot&&e.texStorage2D(s.TEXTURE_2D,Wt,$,ct[0].width,ct[0].height);for(let it=0,Ct=ct.length;it<Ct;it++)W=ct[it],M.format!==En?lt!==null?rt?At&&e.compressedTexSubImage2D(s.TEXTURE_2D,it,0,0,W.width,W.height,lt,W.data):e.compressedTexImage2D(s.TEXTURE_2D,it,$,W.width,W.height,0,W.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?At&&e.texSubImage2D(s.TEXTURE_2D,it,0,0,W.width,W.height,lt,C,W.data):e.texImage2D(s.TEXTURE_2D,it,$,W.width,W.height,0,lt,C,W.data)}else if(M.isDataArrayTexture)if(rt){if(ot&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Wt,$,Y.width,Y.height,Y.depth),At)if(M.layerUpdates.size>0){const it=ol(Y.width,Y.height,M.format,M.type);for(const Ct of M.layerUpdates){const Ht=Y.data.subarray(Ct*it/Y.data.BYTES_PER_ELEMENT,(Ct+1)*it/Y.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ct,Y.width,Y.height,1,lt,C,Ht)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,lt,C,Y.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,$,Y.width,Y.height,Y.depth,0,lt,C,Y.data);else if(M.isData3DTexture)rt?(ot&&e.texStorage3D(s.TEXTURE_3D,Wt,$,Y.width,Y.height,Y.depth),At&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,lt,C,Y.data)):e.texImage3D(s.TEXTURE_3D,0,$,Y.width,Y.height,Y.depth,0,lt,C,Y.data);else if(M.isFramebufferTexture){if(ot)if(rt)e.texStorage2D(s.TEXTURE_2D,Wt,$,Y.width,Y.height);else{let it=Y.width,Ct=Y.height;for(let Ht=0;Ht<Wt;Ht++)e.texImage2D(s.TEXTURE_2D,Ht,$,it,Ct,0,lt,C,null),it>>=1,Ct>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){const it=s.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),Y.parentNode!==it){it.appendChild(Y),f.add(M),it.onpaint=Ct=>{const Ht=Ct.changedElements;for(const pt of f)Ht.includes(pt.image)&&(pt.needsUpdate=!0)},it.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,Y);else{const Ht=s.RGBA,pt=s.RGBA,ne=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ht,pt,ne,Y)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ct.length>0){if(rt&&ot){const it=Ft(ct[0]);e.texStorage2D(s.TEXTURE_2D,Wt,$,it.width,it.height)}for(let it=0,Ct=ct.length;it<Ct;it++)W=ct[it],rt?At&&e.texSubImage2D(s.TEXTURE_2D,it,0,0,lt,C,W):e.texImage2D(s.TEXTURE_2D,it,$,lt,C,W);M.generateMipmaps=!1}else if(rt){if(ot){const it=Ft(Y);e.texStorage2D(s.TEXTURE_2D,Wt,$,it.width,it.height)}At&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,lt,C,Y)}else e.texImage2D(s.TEXTURE_2D,0,$,lt,C,Y);w(M)&&M.mipmapsAutoUpdate===!0&&y(et),ut.__version=at.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function We(A,M,B){if(M.image.length!==6)return;const et=re(A,M),J=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+B);const at=n.get(J);if(J.version!==at.__version||et===!0){e.activeTexture(s.TEXTURE0+B);const ut=Zt.getPrimaries(Zt.workingColorSpace),q=M.colorSpace===Nn?null:Zt.getPrimaries(M.colorSpace),Y=M.colorSpace===Nn||ut===q?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);const lt=M.isCompressedTexture||M.image[0].isCompressedTexture,C=M.image[0]&&M.image[0].isDataTexture,$=[];for(let pt=0;pt<6;pt++)!lt&&!C?$[pt]=v(M.image[pt],!0,i.maxCubemapSize):$[pt]=C?M.image[pt].image:M.image[pt],$[pt]=Lt(M,$[pt]);const W=$[0],ct=r.convert(M.format,M.colorSpace),rt=r.convert(M.type);let ot=b(M.internalFormat,ct,rt,M.normalized,M.colorSpace);const At=M.isVideoTexture!==!0,Wt=at.__version===void 0||et===!0,it=J.dataReady;let Ct=E(M,W);ee(s.TEXTURE_CUBE_MAP,M);let Ht;if(M.isDepthTexture){if(ot=_(M.format===Zn,M.type),Wt)if(At)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,ot,W.width,W.height);else for(let pt=0;pt<6;pt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ot,W.width,W.height,0,ct,rt,null)}else if(lt){At&&Wt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Ct,ot,W.width,W.height);for(let pt=0;pt<6;pt++){Ht=$[pt].mipmaps;for(let ne=0;ne<Ht.length;ne++){const Pe=Ht[ne];M.format!==En?ct!==null?At?it&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ne,0,0,Pe.width,Pe.height,ct,Pe.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ne,ot,Pe.width,Pe.height,0,Pe.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):At?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ne,0,0,Pe.width,Pe.height,ct,rt,Pe.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ne,ot,Pe.width,Pe.height,0,ct,rt,Pe.data)}}}else{if(Ht=M.mipmaps,At&&Wt){Ht.length>0&&Ct++;const pt=Ft($[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Ct,ot,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(C){At?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,$[pt].width,$[pt].height,ct,rt,$[pt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ot,$[pt].width,$[pt].height,0,ct,rt,$[pt].data);for(let ne=0;ne<Ht.length;ne++){const Gn=Ht[ne].image[pt].image;At?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ne+1,0,0,Gn.width,Gn.height,ct,rt,Gn.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ne+1,ot,Gn.width,Gn.height,0,ct,rt,Gn.data)}}else{At?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,ct,rt,$[pt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ot,ct,rt,$[pt]);for(let ne=0;ne<Ht.length;ne++){const Pe=Ht[ne];At?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ne+1,0,0,ct,rt,Pe.image[pt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ne+1,ot,ct,rt,Pe.image[pt])}}}w(M)&&M.mipmapsAutoUpdate===!0&&y(s.TEXTURE_CUBE_MAP),at.__version=J.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function de(A,M,B,et,J,at){const ut=r.convert(B.format,B.colorSpace),q=r.convert(B.type),Y=b(B.internalFormat,ut,q,B.normalized,B.colorSpace),lt=n.get(M),C=n.get(B);if(C.__renderTarget=M,!lt.__hasExternalTextures){const $=Math.max(1,M.width>>at),W=Math.max(1,M.height>>at);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,at,Y,$,W,M.depth,0,ut,q,null):e.texImage2D(J,at,Y,$,W,0,ut,q,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),ft(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,et,J,C.__webglTexture,0,he(M)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,et,J,C.__webglTexture,at),e.bindFramebuffer(s.FRAMEBUFFER,null)}function mn(A,M,B){if(s.bindRenderbuffer(s.RENDERBUFFER,A),M.depthBuffer){const et=M.depthTexture,J=et&&et.isDepthTexture?et.type:null,at=_(M.stencilBuffer,J),ut=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ft(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,he(M),at,M.width,M.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,he(M),at,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,at,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ut,s.RENDERBUFFER,A)}else{const et=M.textures;for(let J=0;J<et.length;J++){const at=et[J],ut=r.convert(at.format,at.colorSpace),q=r.convert(at.type),Y=b(at.internalFormat,ut,q,at.normalized,at.colorSpace);ft(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,he(M),Y,M.width,M.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,he(M),Y,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Y,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ce(A,M,B){const et=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=n.get(M.depthTexture);J.__renderTarget=M;const at=et?M.depthTexture.image[0]:M.depthTexture.image;(!J.__webglTexture||at.width!==M.width||at.height!==M.height)&&(at.width=M.width,at.height=M.height,M.depthTexture.needsUpdate=!0),et?xt(M.depthTexture,0):_t(M.depthTexture,0);const ut=J.__webglTexture,q=he(M),Y=et?s.TEXTURE_CUBE_MAP_POSITIVE_X+B:s.TEXTURE_2D,lt=M.depthTexture.format===Zn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===Jn)ft(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,lt,Y,ut,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,lt,Y,ut,0);else if(M.depthTexture.format===Zn)ft(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,lt,Y,ut,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,lt,Y,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function tn(A){const M=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const et=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),et){const J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,et.removeEventListener("dispose",J)};et.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=et}if(A.depthTexture&&!M.__autoAllocateDepthBuffer)if(B)for(let et=0;et<6;et++)Ce(M.__webglFramebuffer[et],A,et);else A.texture.mipmaps.length>0?Ce(M.__webglFramebuffer[0],A,0):Ce(M.__webglFramebuffer,A,0);else if(B){M.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[et]),M.__webglDepthbuffer[et]===void 0)M.__webglDepthbuffer[et]=s.createRenderbuffer(),mn(M.__webglDepthbuffer[et],A,!1);else{const J=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=M.__webglDepthbuffer[et];s.bindRenderbuffer(s.RENDERBUFFER,at),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,at)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),mn(M.__webglDepthbuffer,A,!1);else{const J=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,at),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,at)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function en(A,M,B){const et=n.get(A);M!==void 0&&de(et.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&tn(A)}function nn(A){const M=A.texture,B=n.get(A),et=n.get(M);A.addEventListener("dispose",O),I(A);const J=A.textures,at=A.isWebGLCubeRenderTarget===!0,ut=J.length>1;if(ut||(et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture()),et.__version=M.version,a.memory.textures++),at){B.__webglFramebuffer=[];for(let q=0;q<6;q++)if(M.mipmaps.length>0){B.__webglFramebuffer[q]=[];for(let Y=0;Y<M.mipmaps.length;Y++)B.__webglFramebuffer[q][Y]=s.createFramebuffer()}else B.__webglFramebuffer[q]=s.createFramebuffer()}else{if(M.mipmaps.length>0){B.__webglFramebuffer=[];for(let q=0;q<M.mipmaps.length;q++)B.__webglFramebuffer[q]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(ut)for(let q=0,Y=J.length;q<Y;q++){const lt=n.get(J[q]);lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&ft(A)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let q=0;q<J.length;q++){const Y=J[q];B.__webglColorRenderbuffer[q]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[q]);const lt=r.convert(Y.format,Y.colorSpace),C=r.convert(Y.type),$=b(Y.internalFormat,lt,C,Y.normalized,Y.colorSpace,A.isXRRenderTarget===!0),W=he(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,W,$,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+q,s.RENDERBUFFER,B.__webglColorRenderbuffer[q])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),mn(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(at){e.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture),ee(s.TEXTURE_CUBE_MAP,M);for(let q=0;q<6;q++)if(M.mipmaps.length>0)for(let Y=0;Y<M.mipmaps.length;Y++)de(B.__webglFramebuffer[q][Y],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+q,Y);else de(B.__webglFramebuffer[q],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);w(M)?y(s.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}else if(ut){for(let q=0,Y=J.length;q<Y;q++){const lt=J[q],C=n.get(lt);let $=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&($=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture($,C.__webglTexture),ee($,lt),de(B.__webglFramebuffer,A,lt,s.COLOR_ATTACHMENT0+q,$,0),w(lt)&&y($)}e.unbindTexture()}else{let q=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(q=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(q,et.__webglTexture),ee(q,M),M.mipmaps.length>0)for(let Y=0;Y<M.mipmaps.length;Y++)de(B.__webglFramebuffer[Y],A,M,s.COLOR_ATTACHMENT0,q,Y);else de(B.__webglFramebuffer,A,M,s.COLOR_ATTACHMENT0,q,0);w(M)?y(q):M.mipmaps.length>0&&s.texParameteri(q,s.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&tn(A)}function U(A){const M=A.textures;for(let B=0,et=M.length;B<et;B++){const J=M[B];if(w(J)&&J.mipmapsAutoUpdate===!0){const at=T(A),ut=n.get(J).__webglTexture;e.bindTexture(at,ut),y(at),e.unbindTexture()}}}const sn=[];function ce(A){if(A.samples>0){if(ft(A)===!1){const M=A.textures,B=A.width,et=A.height;let J=s.COLOR_BUFFER_BIT;const at=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=n.get(A),q=M.length>1;if(q)for(let lt=0;lt<M.length;lt++)e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let lt=0;lt<M.length;lt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),q){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ut.__webglColorRenderbuffer[lt]);const C=n.get(M[lt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,C,0)}s.blitFramebuffer(0,0,B,et,0,0,B,et,J,s.NEAREST),l===!0&&(sn.length=0,sn.push(s.COLOR_ATTACHMENT0+lt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&sn.push(at),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,sn))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),q)for(let lt=0;lt<M.length;lt++){e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,ut.__webglColorRenderbuffer[lt]);const C=n.get(M[lt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,C,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const M=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function he(A){return Math.min(i.maxSamples,A.samples)}function ft(A){const M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function we(A){const M=a.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function Lt(A,M){const B=A.colorSpace,et=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==tr&&B!==Nn&&(Zt.getTransfer(B)===ie?(et!==En||J!==Qe)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):te("WebGLTextures: Unsupported texture color space:",B)),M}function Ft(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=zt,this.resetTextureUnits=Q,this.getTextureUnits=tt,this.setTextureUnits=wt,this.setTexture2D=_t,this.setTexture2DArray=St,this.setTexture3D=Pt,this.setTextureCube=xt,this.rebindTextures=en,this.setupRenderTarget=nn,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=tn,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ft,this.dispose=H}function I0(s,t){function e(n,i=Nn){let r;const a=Zt.getTransfer(i);if(n===Qe)return s.UNSIGNED_BYTE;if(n===qa)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ya)return s.UNSIGNED_SHORT_5_5_5_1;if(n===nc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ic)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===tc)return s.BYTE;if(n===ec)return s.SHORT;if(n===hs)return s.UNSIGNED_SHORT;if(n===Xa)return s.INT;if(n===bn)return s.UNSIGNED_INT;if(n===fn)return s.FLOAT;if(n===Tn)return s.HALF_FLOAT;if(n===sc)return s.ALPHA;if(n===rc)return s.RGB;if(n===En)return s.RGBA;if(n===Jn)return s.DEPTH_COMPONENT;if(n===Zn)return s.DEPTH_STENCIL;if(n===Ka)return s.RED;if(n===$a)return s.RED_INTEGER;if(n===hi)return s.RG;if(n===Za)return s.RG_INTEGER;if(n===Ja)return s.RGBA_INTEGER;if(n===qs||n===Ys||n===Ks||n===$s)if(a===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ra||n===aa||n===oa||n===la)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ra)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===aa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===la)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ca||n===ha||n===ua||n===da||n===fa||n===Qs||n===pa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ca||n===ha)return a===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ua)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===da)return r.COMPRESSED_R11_EAC;if(n===fa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Qs)return r.COMPRESSED_RG11_EAC;if(n===pa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ma||n===ga||n===_a||n===xa||n===va||n===Ma||n===Sa||n===ya||n===Ea||n===wa||n===ba||n===Ta||n===Aa||n===Ra)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ma)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ga)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_a)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===va)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ma)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ya)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ea)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ba)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ta)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Aa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ra)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ca||n===Pa||n===La)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ca)return a===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===La)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ia||n===Da||n===js||n===Na)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ia)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Da)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===js)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Na)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ni?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const D0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,N0=`
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

}`;class U0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new yc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Qn({vertexShader:D0,fragmentShader:N0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new j(new Ze(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class O0 extends ui{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,p=null;const x=typeof XRWebGLBinding<"u",g=new U0,m={},v=e.getContextAttributes();let w=null,y=null;const T=[],b=[],_=new Tt;let E=null,I=null;const P=new Je;P.viewport=new pe;const N=new Je;N.viewport=new pe;const O=[P,N],V=new qu;let D=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let _t=T[K];return _t===void 0&&(_t=new Er,T[K]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(K){let _t=T[K];return _t===void 0&&(_t=new Er,T[K]=_t),_t.getGripSpace()},this.getHand=function(K){let _t=T[K];return _t===void 0&&(_t=new Er,T[K]=_t),_t.getHandSpace()};function Z(K){const _t=b.indexOf(K.inputSource);if(_t===-1)return;const St=T[_t];St!==void 0&&(St.update(K.inputSource,K.frame,c||a),St.dispatchEvent({type:K.type,data:K.inputSource}))}function k(){i.removeEventListener("select",Z),i.removeEventListener("selectstart",Z),i.removeEventListener("selectend",Z),i.removeEventListener("squeeze",Z),i.removeEventListener("squeezestart",Z),i.removeEventListener("squeezeend",Z),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",nt);for(let K=0;K<T.length;K++){const _t=b[K];_t!==null&&(b[K]=null,T[K].disconnect(_t))}D=null,H=null,g.reset();for(const K in m)delete m[K];if(t.setRenderTarget(w),d=null,u=null,f=null,i=null,y=null,zt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(_.width,_.height,!1),I!==null){const K=I.camera;K.fov=I.fov,K.zoom=I.zoom,K.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(w=t.getRenderTarget(),i.addEventListener("select",Z),i.addEventListener("selectstart",Z),i.addEventListener("selectend",Z),i.addEventListener("squeeze",Z),i.addEventListener("squeezestart",Z),i.addEventListener("squeezeend",Z),i.addEventListener("end",k),i.addEventListener("inputsourceschange",nt),v.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Pt=null,xt=null;v.depth&&(xt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=v.stencil?Zn:Jn,Pt=v.stencil?Ni:bn);const Gt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Gt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new wn(u.textureWidth,u.textureHeight,{format:En,type:Qe,depthTexture:new Oi(u.textureWidth,u.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const St={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,St),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new wn(d.framebufferWidth,d.framebufferHeight,{format:En,type:Qe,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),zt.setContext(i),zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function nt(K){for(let _t=0;_t<K.removed.length;_t++){const St=K.removed[_t],Pt=b.indexOf(St);Pt>=0&&(b[Pt]=null,T[Pt].disconnect(St))}for(let _t=0;_t<K.added.length;_t++){const St=K.added[_t];let Pt=b.indexOf(St);if(Pt===-1){for(let Gt=0;Gt<T.length;Gt++)if(Gt>=b.length){b.push(St),Pt=Gt;break}else if(b[Gt]===null){b[Gt]=St,Pt=Gt;break}if(Pt===-1)break}const xt=T[Pt];xt&&xt.connect(St)}}function X(K,_t){_t===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(_t.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let _t=K.near,St=K.far;g.texture!==null&&(g.depthNear>0&&(_t=g.depthNear),g.depthFar>0&&(St=g.depthFar)),V.near=N.near=P.near=_t,V.far=N.far=P.far=St,(D!==V.near||H!==V.far)&&(i.updateRenderState({depthNear:V.near,depthFar:V.far}),D=V.near,H=V.far),V.layers.mask=K.layers.mask|6,P.layers.mask=V.layers.mask&-5,N.layers.mask=V.layers.mask&-3;const Pt=K.parent,xt=V.cameras;X(V,Pt);for(let Gt=0;Gt<xt.length;Gt++)X(xt[Gt],Pt);V.projectionMatrix.copy(P.projectionMatrix),V.projectionMatrixInverse.copy(P.projectionMatrixInverse),I===null&&K.isPerspectiveCamera&&(I={camera:K,fov:K.fov,zoom:K.zoom}),Q(K,V,Pt)};function Q(K,_t,St){St===null?K.matrix.copy(_t.matrixWorld):(K.matrix.copy(St.matrixWorld),K.matrix.invert(),K.matrix.multiply(_t.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(_t.projectionMatrix),K.projectionMatrixInverse.copy(_t.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ui*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(K){return m[K]};let tt=null;function wt(K,_t){if(h=_t.getViewerPose(c||a),p=_t,h!==null){const St=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let Pt=!1;St.length!==V.cameras.length&&(V.cameras.length=0,Pt=!0);for(let It=0;It<St.length;It++){const ee=St[It];let re=null;if(d!==null)re=d.getViewport(ee);else{const Ne=f.getViewSubImage(u,ee);re=Ne.viewport,It===0&&(t.setRenderTargetTextures(y,Ne.colorTexture,Ne.depthStencilTexture),t.setRenderTarget(y))}let Yt=O[It];Yt===void 0&&(Yt=new Je,Yt.layers.enable(It),Yt.viewport=new pe,O[It]=Yt),Yt.matrix.fromArray(ee.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(ee.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(re.x,re.y,re.width,re.height),It===0&&(V.matrix.copy(Yt.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Pt===!0&&V.cameras.push(Yt)}const xt=i.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){f=n.getBinding();const It=f.getDepthInformation(St[0]);It&&It.isValid&&It.texture&&g.init(It,i.renderState)}if(xt&&xt.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let It=0;It<St.length;It++){const ee=St[It].camera;if(ee){let re=m[ee];re||(re=new yc,m[ee]=re);const Yt=f.getCameraImage(ee);re.sourceTexture=Yt}}}}for(let St=0;St<T.length;St++){const Pt=b[St],xt=T[St];Pt!==null&&xt!==void 0&&xt.update(Pt,_t,c||a)}tt&&tt(K,_t),_t.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_t}),p=null}const zt=new Cc;zt.setAnimationLoop(wt),this.setAnimationLoop=function(K){tt=K},this.dispose=function(){}}}const F0=new se,zc=new Bt;zc.set(-1,0,0,0,1,0,0,0,1);function B0(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Tc(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,v,w,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),f(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&d(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,v,w):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Ve&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Ve&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const v=t.get(m),w=v.envMap,y=v.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(F0.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(zc),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,w){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=w*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,v){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ve&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){const v=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function z0(s,t,e,n){let i={},r={};function a(v,w){const y=w.program;n.uniformBlockBinding(v,y,i[v.id])}function o(v,w){let y=i[v.id];y===void 0&&(p(v),y=l(v),i[v.id]=y,v.addEventListener("dispose",g));const T=w.program;n.updateUBOMapping(v,T);const b=t.render.frame;r[v.id]!==b&&(c(v),r[v.id]=b)}function l(v){const w=s.createBuffer(),y=v.__size,T=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,y,T),s.bindBuffer(s.UNIFORM_BUFFER,null),w}function c(v){const w=i[v.id],y=v.uniforms,T=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let b=0,_=y.length;b<_;b++){const E=y[b];if(Array.isArray(E))for(let I=0,P=E.length;I<P;I++)h(E[I],b,I,T);else h(E,b,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(v,w,y,T){if(u(v,w,y,T)===!0){const b=v.__offset,_=v.value;if(Array.isArray(_)){let E=0;for(let I=0;I<_.length;I++){const P=_[I],N=x(P,!0);f(P,v.__data,E),E+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,b,v.__data)}}function f(v,w,y){typeof v=="number"||typeof v=="boolean"?w[y]=v:v.isMatrix3?(w[y]=v.elements[0],w[y+1]=v.elements[1],w[y+2]=v.elements[2],w[y+3]=0,w[y+4]=v.elements[3],w[y+5]=v.elements[4],w[y+6]=v.elements[5],w[y+7]=0,w[y+8]=v.elements[6],w[y+9]=v.elements[7],w[y+10]=v.elements[8],w[y+11]=0):ArrayBuffer.isView(v)?w.set(v.subarray(0,w.length-y),y):v.toArray(w,y)}function u(v,w,y,T){const b=v.value,_=w+"_"+y;if(Array.isArray(b)){T[_]===void 0&&(T[_]=[]);const E=T[_];let I=!1;for(let P=0;P<b.length;P++)d(b[P],E,P)===!0&&(I=!0);return I}return d(b,T,_)}function d(v,w,y){if(w[y]===void 0)return typeof v=="number"||typeof v=="boolean"?w[y]=v:ArrayBuffer.isView(v)?w[y]=v.slice():w[y]=v.clone(),!0;{const T=w[y];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return w[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function p(v){const w=v.uniforms;let y=0;const T=16;for(let _=0,E=w.length;_<E;_++){const I=Array.isArray(w[_])?w[_]:[w[_]];for(let P=0,N=I.length;P<N;P++){const O=I[P],V=Array.isArray(O.value)?O.value:[O.value],D=Array.isArray(w[_])||Array.isArray(O.value);let H=y;for(let k=0,nt=V.length;k<nt;k++){const X=V[k],Q=x(X,D),tt=y%T,wt=tt%Q.boundary,zt=tt+wt;y+=wt,zt!==0&&T-zt<Q.storage&&(y+=T-zt),k===0&&(H=y),y+=Q.storage}const Z=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new Z((y-H)/Float32Array.BYTES_PER_ELEMENT),O.__offset=H}}const b=y%T;return b>0&&(y+=T-b),v.__size=y,v.__cache={},this}function x(v,w){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Nt("WebGLRenderer: Unsupported uniform value type.",v),w===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function g(v){const w=v.target;w.removeEventListener("dispose",g),s.deleteBuffer(i[w.id]),delete i[w.id],delete r[w.id]}function m(){for(const v in i)s.deleteBuffer(i[v]);i={},r={}}return{bind:a,update:o,dispose:m}}const k0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let _n=null;function G0(){return _n===null&&(_n=new vc(k0,16,16,hi,Tn),_n.name="DFG_LUT",_n.minFilter=qe,_n.magFilter=qe,_n.wrapS=dn,_n.wrapT=dn,_n.generateMipmaps=!1,_n.needsUpdate=!0),_n}class H0{constructor(t={}){const{canvas:e=Ch(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Qe}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const x=d,g=new Set([Ja,Za,$a]),m=new Set([Qe,bn,hs,Ni,qa,Ya]),v=new Uint32Array(4),w=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]};let T=null,b=null;const _=[],E=[];let I=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let N=!1,O=null,V=null,D=null,H=null;this._outputColorSpace=Xe;let Z=0,k=0,nt=null,X=-1,Q=null;const tt=new pe,wt=new pe;let zt=null;const K=new Ot(0);let _t=0,St=e.width,Pt=e.height,xt=1,Gt=null,_e=null;const It=new pe(0,0,St,Pt),ee=new pe(0,0,St,Pt);let re=!1;const Yt=new ds,Ne=new no;let Ee=!1,We=!1;const de=new se,mn=new R,Ce=new pe,tn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let en=!1;function nn(){return nt===null?xt:1}let U=n;function sn(S,L){return e.getContext(S,L)}let ce,he,ft,we,Lt,Ft,A,M,B,et,J,at,ut,q,Y,lt,C,$,W,ct,rt,ot,At;try{const S={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Va}`),e.addEventListener("webglcontextlost",Ct,!1),e.addEventListener("webglcontextrestored",Ht,!1),e.addEventListener("webglcontextcreationerror",pt,!1),U===null){const L="webgl2";if(U=sn(L,S),U===null)throw sn(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Wt()}catch(S){throw e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),te("WebGLRenderer: "+S.message),S}function Wt(){ce=new Xp(U),ce.init(),rt=new I0(U,ce),he=new Np(U,ce,t,rt),ft=new P0(U,ce),he.reversedDepthBuffer&&u&&ft.buffers.depth.setReversed(!0),V=U.createFramebuffer(),D=U.createFramebuffer(),H=U.createFramebuffer(),we=new Kp(U),Lt=new g0,Ft=new L0(U,ce,ft,Lt,he,rt,we),A=new Wp(P),M=new $u(U),ot=new Ip(U,M),B=new qp(U,M,we,ot),et=new Zp(U,B,M,ot,we),$=new $p(U,he,Ft),Y=new Up(Lt),J=new m0(P,A,ce,he,ot,Y),at=new B0(P,Lt),ut=new x0,q=new w0(ce),C=new Lp(P,A,ft,et,p,l),lt=new C0(P,et,he),At=new z0(U,we,he,ft),W=new Dp(U,ce,we),ct=new Yp(U,ce,we),we.programs=J.programs,P.capabilities=he,P.extensions=ce,P.properties=Lt,P.renderLists=ut,P.shadowMap=lt,P.state=ft,P.info=we}x!==Qe&&(I=new Qp(x,e.width,e.height,o,i,r));const it=new O0(P,U);this.xr=it,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=ce.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ce.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return xt},this.setPixelRatio=function(S){S!==void 0&&(xt=S,this.setSize(St,Pt,!1))},this.getSize=function(S){return S.set(St,Pt)},this.setSize=function(S,L,G=!0){if(it.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}St=S,Pt=L,e.width=Math.floor(S*xt),e.height=Math.floor(L*xt),G===!0&&(e.style.width=S+"px",e.style.height=L+"px"),I!==null&&I.setSize(e.width,e.height),this.setViewport(0,0,S,L)},this.getDrawingBufferSize=function(S){return S.set(St*xt,Pt*xt).floor()},this.setDrawingBufferSize=function(S,L,G){St=S,Pt=L,xt=G,e.width=Math.floor(S*G),e.height=Math.floor(L*G),this.setViewport(0,0,S,L)},this.setEffects=function(S){if(x===Qe){te("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let L=0;L<S.length;L++)if(S[L].isOutputPass===!0){Nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(tt)},this.getViewport=function(S){return S.copy(It)},this.setViewport=function(S,L,G,F){S.isVector4?It.set(S.x,S.y,S.z,S.w):It.set(S,L,G,F),ft.viewport(tt.copy(It).multiplyScalar(nn()).round())},this.getScissor=function(S){return S.copy(ee)},this.setScissor=function(S,L,G,F){S.isVector4?ee.set(S.x,S.y,S.z,S.w):ee.set(S,L,G,F),ft.scissor(wt.copy(ee).multiplyScalar(nn()).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(S){ft.setScissorTest(re=S)},this.setOpaqueSort=function(S){Gt=S},this.setTransparentSort=function(S){_e=S},this.getClearColor=function(S){return S.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(S=!0,L=!0,G=!0){let F=0;if(S){let z=!1;if(nt!==null){const dt=nt.texture.format;z=g.has(dt)}if(z){const dt=nt.texture.type,Mt=m.has(dt),ht=C.getClearColor(),vt=C.getClearAlpha(),bt=ht.r,kt=ht.g,Kt=ht.b;Mt?(v[0]=bt,v[1]=kt,v[2]=Kt,v[3]=vt,U.clearBufferuiv(U.COLOR,0,v)):(w[0]=bt,w[1]=kt,w[2]=Kt,w[3]=vt,U.clearBufferiv(U.COLOR,0,w))}else F|=U.COLOR_BUFFER_BIT}L&&(F|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(F|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&U.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),O=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),C.dispose(),ut.dispose(),q.dispose(),Ft.dispose(),Lt.dispose(),A.dispose(),et.dispose(),B.dispose(),ot.dispose(),At.dispose(),J.dispose(),it.dispose(),it.removeEventListener("sessionstart",po),it.removeEventListener("sessionend",mo),jn.stop()};function Ct(S){S.preventDefault(),Po("WebGLRenderer: Context Lost."),N=!0}function Ht(){Po("WebGLRenderer: Context Restored."),N=!1;const S=we.autoReset,L=lt.enabled,G=lt.autoUpdate,F=lt.needsUpdate,z=lt.type;Wt(),we.autoReset=S,lt.enabled=L,lt.autoUpdate=G,lt.needsUpdate=F,lt.type=z}function pt(S){te("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ne(S){const L=S.target;L.removeEventListener("dispose",ne),Pe(L)}function Pe(S){Gn(S),Lt.remove(S)}function Gn(S){const L=Lt.get(S).programs;L!==void 0&&(L.forEach(function(G){J.releaseProgram(G)}),S.isShaderMaterial&&J.releaseShaderCache(S))}this.renderBufferDirect=function(S,L,G,F,z,dt){L===null&&(L=tn);const Mt=z.isMesh&&z.matrixWorld.determinantAffine()<0,ht=Yc(S,L,G,F,z);ft.setMaterial(F,Mt);let vt=G.index,bt=1;if(F.wireframe===!0){if(vt=B.getWireframeAttribute(G),vt===void 0)return;bt=2}const kt=G.drawRange,Kt=G.attributes.position;let yt=kt.start*bt,$t=(kt.start+kt.count)*bt;dt!==null&&(yt=Math.max(yt,dt.start*bt),$t=Math.min($t,(dt.start+dt.count)*bt)),vt!==null?(yt=Math.max(yt,0),$t=Math.min($t,vt.count)):Kt!=null&&(yt=Math.max(yt,0),$t=Math.min($t,Kt.count));const xe=$t-yt;if(xe<0||xe===1/0)return;ot.setup(z,F,ht,G,vt);let oe,ae=W;if(vt!==null&&(oe=M.get(vt),ae=ct,ae.setIndex(oe)),z.isMesh)F.wireframe===!0?(ft.setLineWidth(F.wireframeLinewidth*nn()),ae.setMode(U.LINES)):ae.setMode(U.TRIANGLES);else if(z.isLine){let Oe=F.linewidth;Oe===void 0&&(Oe=1),ft.setLineWidth(Oe*nn()),z.isLineSegments?ae.setMode(U.LINES):z.isLineLoop?ae.setMode(U.LINE_LOOP):ae.setMode(U.LINE_STRIP)}else z.isPoints?ae.setMode(U.POINTS):z.isSprite&&ae.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(ce.get("WEBGL_multi_draw"))ae.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Oe=z._multiDrawStarts,Et=z._multiDrawCounts,Ge=z._multiDrawCount,jt=vt?M.get(vt).bytesPerElement:1,ti=Lt.get(F).currentProgram.getUniforms();for(let Fe=0;Fe<Ge;Fe++)ti.setValue(U,"_gl_DrawID",Fe),ae.render(Oe[Fe]/jt,Et[Fe])}else if(z.isInstancedMesh)ae.renderInstances(yt,xe,z.count);else if(G.isInstancedBufferGeometry){const Oe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Et=Math.min(G.instanceCount,Oe);ae.renderInstances(yt,xe,Et)}else ae.render(yt,xe)};function fo(S,L,G,F){O!==null&&S.isNodeMaterial&&O.setObject(F,S),Ee===!0&&Y.setState(S,G,!1),S.transparent===!0&&S.side===be&&S.forceSinglePass===!1?(S.side=Ve,S.needsUpdate=!0,Vi(S,L,F),S.side=ci,S.needsUpdate=!0,Vi(S,L,F),S.side=be):Vi(S,L,F)}this.compile=function(S,L,G=null){G===null&&(G=S),O!==null&&O.renderStart(S,L,G),b=q.get(G),b.init(L),E.push(b),G.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),S!==G&&S.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),b.setupLights(),O!==null&&O.updateLights(b.state.lightsArray),We=this.localClippingEnabled,Ee=Y.init(this.clippingPlanes,We),Ee===!0&&Y.setGlobalState(this.clippingPlanes,L),O!==null&&lt.render(b.state.shadowsArray,G,L);const F=new Set;return S.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const dt=z.material;if(dt)if(Array.isArray(dt))for(let Mt=0;Mt<dt.length;Mt++){const ht=dt[Mt];fo(ht,G,L,z),F.add(ht)}else fo(dt,G,L,z),F.add(dt)}),b=E.pop(),O!==null&&O.renderEnd(),F},this.compileAsync=function(S,L,G=null){const F=this.compile(S,L,G);return new Promise(z=>{function dt(){if(F.forEach(function(Mt){const vt=Lt.get(Mt).currentProgram;(vt===void 0||vt.isReady())&&F.delete(Mt)}),F.size===0){z(S);return}setTimeout(dt,10)}ce.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let dr=null;function Xc(S){dr&&dr(S)}function po(){jn.stop()}function mo(){jn.start()}const jn=new Cc;jn.setAnimationLoop(Xc),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(S){dr=S,it.setAnimationLoop(S),S===null?jn.stop():jn.start()},it.addEventListener("sessionstart",po),it.addEventListener("sessionend",mo),this.render=function(S,L){if(L!==void 0&&L.isCamera!==!0){te("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;O!==null&&O.renderStart(S,L);const G=it.enabled===!0&&it.isPresenting===!0,F=I!==null&&(nt===null||G)&&I.begin(P,nt);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(L),L=it.getCamera()),S.isScene===!0&&S.onBeforeRender(P,S,L,nt),b=q.get(S,E.length),b.init(L),b.state.textureUnits=Ft.getTextureUnits(),E.push(b),de.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera?Ne.setFromArrayCamera(L):Yt.setFromProjectionMatrix(de,pn,L.reversedDepth),We=this.localClippingEnabled,Ee=Y.init(this.clippingPlanes,We),T=ut.get(S,_.length),T.init(),_.push(T),this.info.render.frame++,it.enabled===!0&&it.isPresenting===!0){const Mt=P.xr.getDepthSensingMesh();Mt!==null&&fr(Mt,L,-1/0,P.sortObjects)}fr(S,L,0,P.sortObjects),T.finish(),O!==null&&O.updateLights(b.state.lightsArray),P.sortObjects===!0&&T.sort(Gt,_e),en=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,en&&C.addToRenderList(T,S),this.info.autoReset===!0&&this.info.reset(),Ee===!0&&Y.beginShadows();const z=b.state.shadowsArray;if(lt.render(z,S,L),Ee===!0&&Y.endShadows(),(F&&I.hasRenderPass())===!1){const Mt=T.opaque,ht=T.transmissive;if(b.setupLights(),L.isArrayCamera){const vt=L.cameras;if(ht.length>0)for(let bt=0,kt=vt.length;bt<kt;bt++){const Kt=vt[bt];_o(Mt,ht,S,Kt)}en&&C.render(S);for(let bt=0,kt=vt.length;bt<kt;bt++){const Kt=vt[bt];go(T,S,Kt,Kt.viewport)}}else ht.length>0&&_o(Mt,ht,S,L),en&&C.render(S),go(T,S,L)}nt!==null&&k===0&&(Ft.updateMultisampleRenderTarget(nt),Ft.updateRenderTargetMipmap(nt)),F&&I.end(P),S.isScene===!0&&S.onAfterRender(P,S,L),ot.resetDefaultState(),X=-1,Q=null,E.pop(),E.length>0?(b=E[E.length-1],Ft.setTextureUnits(b.state.textureUnits),Ee===!0&&Y.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,_.pop(),_.length>0?T=_[_.length-1]:T=null,O!==null&&O.renderEnd()};function fr(S,L,G,F){if(S.visible===!1)return;if(S.layers.test(L.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(L);else if(S.isLight)b.pushLight(S),S.castShadow&&b.pushShadow(S);else if(S.isSprite){const Mt=L.isArrayCamera?Ne:Yt;if(!S.frustumCulled||S.intersectsFrustum(Mt)){F&&Ce.setFromMatrixPosition(S.matrixWorld).applyMatrix4(de);const ht=et.update(S),vt=S.material;vt.visible&&T.push(S,ht,vt,G,Ce.z,null,L)}}else if(S.isMesh||S.isLine||S.isPoints){const Mt=L.isArrayCamera?Ne:Yt;if(!S.frustumCulled||S.intersectsFrustum(Mt)){const ht=et.update(S),vt=S.material;if(F&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ce.copy(S.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Ce.copy(ht.boundingSphere.center)),Ce.applyMatrix4(S.matrixWorld).applyMatrix4(de)),Array.isArray(vt)){const bt=ht.groups;for(let kt=0,Kt=bt.length;kt<Kt;kt++){const yt=bt[kt],$t=vt[yt.materialIndex];$t&&$t.visible&&T.push(S,ht,$t,G,Ce.z,yt,L)}}else vt.visible&&T.push(S,ht,vt,G,Ce.z,null,L)}}}const dt=S.children;for(let Mt=0,ht=dt.length;Mt<ht;Mt++)fr(dt[Mt],L,G,F)}function go(S,L,G,F){const{opaque:z,transmissive:dt,transparent:Mt}=S;b.setupLightsView(G),Ee===!0&&Y.setGlobalState(P.clippingPlanes,G),F&&ft.viewport(tt.copy(F)),z.length>0&&ms(z,L,G),dt.length>0&&ms(dt,L,G),Mt.length>0&&ms(Mt,L,G),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function _o(S,L,G,F){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[F.id]===void 0){const yt=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[F.id]=new wn(1,1,{generateMipmaps:!0,type:yt?Tn:Qe,minFilter:$n,samples:Math.max(4,he.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Zt.workingColorSpace})}const dt=b.state.transmissionRenderTarget[F.id],Mt=F.viewport||tt;dt.setSize(Mt.z*P.transmissionResolutionScale,Mt.w*P.transmissionResolutionScale);const ht=P.getRenderTarget(),vt=P.getActiveCubeFace(),bt=P.getActiveMipmapLevel();P.setRenderTarget(dt),P.getClearColor(K),_t=P.getClearAlpha(),_t<1&&P.setClearColor(16777215,.5),P.clear(),en&&C.render(G);const kt=P.toneMapping;P.toneMapping=Fn;const Kt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),b.setupLightsView(F),Ee===!0&&Y.setGlobalState(P.clippingPlanes,F),ms(S,G,F),Ft.updateMultisampleRenderTarget(dt),Ft.updateRenderTargetMipmap(dt),ce.has("WEBGL_multisampled_render_to_texture")===!1){let yt=!1;for(let $t=0,xe=L.length;$t<xe;$t++){const oe=L[$t],{object:ae,geometry:Oe,material:Et,group:Ge}=oe;if(Et.side===be&&ae.layers.test(F.layers)){const jt=Et.side;Et.side=Ve,Et.needsUpdate=!0,xo(ae,G,F,Oe,Et,Ge),Et.side=jt,Et.needsUpdate=!0,yt=!0}}yt===!0&&(Ft.updateMultisampleRenderTarget(dt),Ft.updateRenderTargetMipmap(dt))}P.setRenderTarget(ht,vt,bt),P.setClearColor(K,_t),Kt!==void 0&&(F.viewport=Kt),P.toneMapping=kt}function ms(S,L,G){const F=L.isScene===!0?L.overrideMaterial:null;for(let z=0,dt=S.length;z<dt;z++){const Mt=S[z],{object:ht,geometry:vt,group:bt}=Mt;let kt=Mt.material;kt.allowOverride===!0&&F!==null&&(kt=F),ht.layers.test(G.layers)&&xo(ht,L,G,vt,kt,bt)}}function xo(S,L,G,F,z,dt){O!==null&&z.isNodeMaterial&&O.setObject(S,z),S.onBeforeRender(P,L,G,F,z,dt),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.onBeforeRender(P,L,G,F,S,dt),z.transparent===!0&&z.side===be&&z.forceSinglePass===!1?(z.side=Ve,z.needsUpdate=!0,P.renderBufferDirect(G,L,F,z,S,dt),z.side=ci,z.needsUpdate=!0,P.renderBufferDirect(G,L,F,z,S,dt),z.side=be):P.renderBufferDirect(G,L,F,z,S,dt),S.onAfterRender(P,L,G,F,z,dt)}function vo(S){let L=0;for(const G of S)G.texture!==null&&L++;return L}function Vi(S,L,G){L.isScene!==!0&&(L=tn);const F=Lt.get(S),z=b.state.lights,dt=b.state.shadowsArray,Mt=z.state.version,ht=J.getParameters(S,z.state,dt,L,G,b.state.lightProbeGridArray),vt=J.getProgramCacheKey(ht);let bt=F.programs;F.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?L.environment:null,F.fog=L.fog;const kt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;F.envMap=A.get(S.envMap||F.environment,kt),F.envMapRotation=F.environment!==null&&S.envMap===null?L.environmentRotation:S.envMapRotation,bt===void 0&&(S.addEventListener("dispose",ne),bt=new Map,F.programs=bt,F.programVariants=new Map);let Kt=bt.get(vt);if(Kt!==void 0){if(F.currentProgram===Kt&&F.lightsStateVersion===Mt)return So(S,ht),Kt}else ht.uniforms=J.getUniforms(S),O!==null&&S.isNodeMaterial&&O.build(S,G,ht),S.onBeforeCompile(ht,P),Kt=J.acquireProgram(ht,vt),bt.set(vt,Kt),F.uniforms=ht.uniforms;const yt=F.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(yt.clippingPlanes=Y.uniform),So(S,ht),F.needsLights=$c(S),F.lightsStateVersion=Mt,F.needsLights&&(yt.ambientLightColor.value=z.state.ambient,yt.lightProbe.value=z.state.probe,yt.sunLights.value=z.state.sun,yt.sunLightShadows.value=z.state.sunShadow,yt.directionalLights.value=z.state.directional,yt.directionalLightShadows.value=z.state.directionalShadow,yt.spotLights.value=z.state.spot,yt.spotLightShadows.value=z.state.spotShadow,yt.rectAreaLights.value=z.state.rectArea,yt.ltc_1.value=z.state.rectAreaLTC1,yt.ltc_2.value=z.state.rectAreaLTC2,yt.pointLights.value=z.state.point,yt.pointLightShadows.value=z.state.pointShadow,yt.hemisphereLights.value=z.state.hemi,yt.sunShadowMatrix.value=z.state.sunShadowMatrix,yt.sunShadowCascade.value=z.state.sunShadowCascade,yt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,yt.spotLightMatrix.value=z.state.spotLightMatrix,yt.spotLightMap.value=z.state.spotLightMap,yt.pointShadowMatrix.value=z.state.pointShadowMatrix),F.numLightProbeGrids=vo(b.state.lightProbeGridArray),F.currentProgram=Kt,F.uniformsList=null,Kt}function qc(S,L,G,F,z){const dt=Lt.get(S),Mt=dt.currentProgram.id+","+F+","+z;let ht=dt.programVariants.get(Mt);return ht===void 0?(ht=Vi(S,L,G),dt.programVariants.set(Mt,ht)):(dt.currentProgram=ht,dt.uniformsList=null,dt.outputColorSpace=F,dt.toneMapping=z),ht}function Mo(S){if(S.uniformsList===null){const L=S.currentProgram.getUniforms();S.uniformsList=Zs.seqWithValue(L.seq,S.uniforms)}return S.uniformsList}function So(S,L){const G=Lt.get(S);G.outputColorSpace=L.outputColorSpace,G.batching=L.batching,G.batchingColor=L.batchingColor,G.instancing=L.instancing,G.instancingColor=L.instancingColor,G.instancingMorph=L.instancingMorph,G.skinning=L.skinning,G.morphTargets=L.morphTargets,G.morphNormals=L.morphNormals,G.morphColors=L.morphColors,G.morphTargetsCount=L.morphTargetsCount,G.numClippingPlanes=L.numClippingPlanes,G.numIntersection=L.numClipIntersection,G.vertexAlphas=L.vertexAlphas,G.vertexTangents=L.vertexTangents,G.toneMapping=L.toneMapping}function Yc(S,L,G,F,z){L.isScene!==!0&&(L=tn),Ft.resetTextureUnits();const dt=L.fog,Mt=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?L.environment:null,ht=nt===null?P.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Zt.workingColorSpace,vt=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,bt=A.get(F.envMap||Mt,vt),kt=F.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Kt=!!G.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),yt=!!G.morphAttributes.position,$t=!!G.morphAttributes.normal,xe=!!G.morphAttributes.color;let oe=Fn;F.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(oe=P.toneMapping);const ae=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Oe=ae!==void 0?ae.length:0,Et=Lt.get(F),Ge=b.state.lights;if(Ee===!0&&(We===!0||S!==Q)){const fe=S===Q&&F.id===X;Y.setState(F,S,fe)}let jt=!1,ti=!1;F.version===Et.__version?Et.needsLights&&Et.lightsStateVersion!==Ge.state.version||z.isBatchedMesh&&Et.batching===!1||!z.isBatchedMesh&&Et.batching===!0||z.isBatchedMesh&&Et.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Et.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Et.instancing===!1||!z.isInstancedMesh&&Et.instancing===!0||z.isSkinnedMesh&&Et.skinning===!1||!z.isSkinnedMesh&&Et.skinning===!0||z.isInstancedMesh&&Et.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Et.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Et.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Et.instancingMorph===!1&&z.morphTexture!==null||Et.envMap!==bt||F.fog===!0&&Et.fog!==dt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==Y.numPlanes||Et.numIntersection!==Y.numIntersection)||Et.vertexAlphas!==kt||Et.vertexTangents!==Kt||Et.morphTargets!==yt||Et.morphNormals!==$t||Et.morphColors!==xe||Et.morphTargetsCount!==Oe||Et.numLightProbeGrids!==vo(b.state.lightProbeGridArray)?jt=!0:(Et.outputColorSpace!==ht||Et.toneMapping!==oe)&&(ti=!0):(jt=!0,Et.__version=F.version);let Fe=Et.currentProgram;(jt===!0||ti===!0)&&(Fe=ti===!0?qc(F,L,z,ht,oe):Vi(F,L,z),O&&F.isNodeMaterial&&O.onUpdateProgram(F,Fe,Et));let gs=!1,Hn=!1,ei=!1;const Jt=Fe.getUniforms(),Ue=Et.uniforms;if(ft.useProgram(Fe.program)&&(gs=!0,Hn=!0,ei=!0),F.id!==X&&(X=F.id,Hn=!0),gs||Q!==S){ft.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Jt.setValue(U,"projectionMatrix",S.projectionMatrix),Jt.setValue(U,"viewMatrix",S.matrixWorldInverse);const Le=Jt.map.cameraPosition;Le!==void 0&&Le.setValue(U,mn.setFromMatrixPosition(S.matrixWorld)),he.logarithmicDepthBuffer&&Jt.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Jt.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),Q!==S&&(Q=S,Hn=!0,ei=!0)}if(Et.needsLights&&(Ge.state.sunShadowMap.length>0&&Jt.setValue(U,"sunShadowMap",Ge.state.sunShadowMap,Ft),Ge.state.directionalShadowMap.length>0&&Jt.setValue(U,"directionalShadowMap",Ge.state.directionalShadowMap,Ft),Ge.state.spotShadowMap.length>0&&Jt.setValue(U,"spotShadowMap",Ge.state.spotShadowMap,Ft),Ge.state.pointShadowMap.length>0&&Jt.setValue(U,"pointShadowMap",Ge.state.pointShadowMap,Ft)),z.isSkinnedMesh){Jt.setOptional(U,z,"bindMatrix"),Jt.setOptional(U,z,"bindMatrixInverse");const fe=z.skeleton;fe&&(fe.boneTexture===null&&fe.computeBoneTexture(),Jt.setValue(U,"boneTexture",fe.boneTexture,Ft))}z.isBatchedMesh&&(Jt.setOptional(U,z,"batchingTexture"),Jt.setValue(U,"batchingTexture",z._matricesTexture,Ft),Jt.setOptional(U,z,"batchingIdTexture"),Jt.setValue(U,"batchingIdTexture",z._indirectTexture,Ft),Jt.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&Jt.setValue(U,"batchingColorTexture",z._colorsTexture,Ft));const an=G.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&$.update(z,G,Fe),(Hn||Et.receiveShadow!==z.receiveShadow)&&(Et.receiveShadow=z.receiveShadow,Jt.setValue(U,"receiveShadow",z.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&L.environment!==null&&(Ue.envMapIntensity.value=L.environmentIntensity),Ue.dfgLUT!==void 0&&(Ue.dfgLUT.value=G0()),Hn){if(Jt.setValue(U,"toneMappingExposure",P.toneMappingExposure),Et.needsLights&&Kc(Ue,ei),dt&&F.fog===!0&&at.refreshFogUniforms(Ue,dt),at.refreshMaterialUniforms(Ue,F,xt,Pt,b.state.transmissionRenderTarget[S.id]),Et.needsLights&&Et.numLightProbeGrids>0){const fe=y;let Le=0;for(const An of b.state.lightProbeGridArray)An.texture!==null&&(fe.textures[Le]=An.texture,fe.min[Le]=An.boundingBox.min,fe.max[Le]=An.boundingBox.max,fe.resolution[Le]=An.resolution,Le++);for(const An in fe)fe[An].length=Le;Ue.probesSH.value=fe.textures,Ue.probesMin.value=fe.min,Ue.probesMax.value=fe.max,Ue.probesResolution.value=fe.resolution}Zs.upload(U,Mo(Et),Ue,Ft)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Zs.upload(U,Mo(Et),Ue,Ft),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Jt.setValue(U,"center",z.center),Jt.setValue(U,"modelViewMatrix",z.modelViewMatrix),Jt.setValue(U,"normalMatrix",z.normalMatrix),Jt.setValue(U,"modelMatrix",z.matrixWorld),F.uniformsGroups!==void 0){const fe=F.uniformsGroups;for(let Le=0,An=fe.length;Le<An;Le++){const Eo=fe[Le];At.update(Eo,Fe),At.bind(Eo,Fe)}}return Fe}function Kc(S,L){S.ambientLightColor.needsUpdate=L,S.lightProbe.needsUpdate=L,S.sunLights.needsUpdate=L,S.sunLightShadows.needsUpdate=L,S.directionalLights.needsUpdate=L,S.directionalLightShadows.needsUpdate=L,S.pointLights.needsUpdate=L,S.pointLightShadows.needsUpdate=L,S.spotLights.needsUpdate=L,S.spotLightShadows.needsUpdate=L,S.rectAreaLights.needsUpdate=L,S.hemisphereLights.needsUpdate=L}function $c(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(S,L,G){const F=Lt.get(S);F.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),Lt.get(S.texture).__webglTexture=L,Lt.get(S.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:G,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,L){const G=Lt.get(S);G.__webglFramebuffer=L,G.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(S,L=0,G=0){nt=S,Z=L,k=G;let F=null,z=!1,dt=!1;if(S){const ht=Lt.get(S);if(ht.__useDefaultFramebuffer!==void 0){ft.bindFramebuffer(U.FRAMEBUFFER,ht.__webglFramebuffer),tt.copy(S.viewport),wt.copy(S.scissor),zt=S.scissorTest,ft.viewport(tt),ft.scissor(wt),ft.setScissorTest(zt),X=-1;return}else if(ht.__webglFramebuffer===void 0)Ft.setupRenderTarget(S);else if(ht.__hasExternalTextures)Ft.rebindTextures(S,Lt.get(S.texture).__webglTexture,Lt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const kt=S.depthTexture;if(ht.__boundDepthTexture!==kt){if(kt!==null&&Lt.has(kt)&&(S.width!==kt.image.width||S.height!==kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ft.setupDepthRenderbuffer(S)}}const vt=S.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(dt=!0);const bt=Lt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(bt[L])?F=bt[L][G]:F=bt[L],z=!0):S.samples>0&&Ft.useMultisampledRTT(S)===!1?F=Lt.get(S).__webglMultisampledFramebuffer:Array.isArray(bt)?F=bt[G]:F=bt,tt.copy(S.viewport),wt.copy(S.scissor),zt=S.scissorTest}else tt.copy(It).multiplyScalar(xt).floor(),wt.copy(ee).multiplyScalar(xt).floor(),zt=re;if(G!==0&&(F=V),ft.bindFramebuffer(U.FRAMEBUFFER,F)&&ft.drawBuffers(S,F),ft.viewport(tt),ft.scissor(wt),ft.setScissorTest(zt),z){const ht=Lt.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,ht.__webglTexture,G)}else if(dt){const ht=L;for(let vt=0;vt<S.textures.length;vt++){const bt=Lt.get(S.textures[vt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+vt,bt.__webglTexture,G,ht)}}else if(S!==null&&G!==0){const ht=Lt.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ht.__webglTexture,G)}X=-1};function yo(S){const L=Lt.get(S);return(L.__readFormat!==S.format||L.__readType!==S.type)&&(L.__readFormat=S.format,L.__readType=S.type,L.__formatReadable=he.textureFormatReadable(S.format),L.__typeReadable=he.textureTypeReadable(S.type)),L}this.readRenderTargetPixels=function(S,L,G,F,z,dt,Mt,ht=0){if(!(S&&S.isWebGLRenderTarget)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Lt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Mt!==void 0&&(vt=vt[Mt],Array.isArray(vt)&&(vt=vt[0])),vt){ft.bindFramebuffer(U.FRAMEBUFFER,vt);try{const bt=S.textures[ht],kt=bt.format,Kt=bt.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ht);const yt=yo(bt);if(yt.__formatReadable===!1){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(yt.__typeReadable===!1){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=S.width-F&&G>=0&&G<=S.height-z&&U.readPixels(L,G,F,z,rt.convert(kt),rt.convert(Kt),dt)}finally{const bt=nt!==null?Lt.get(nt).__webglFramebuffer:null;ft.bindFramebuffer(U.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(S,L,G,F,z,dt,Mt,ht=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=Lt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Mt!==void 0&&(vt=vt[Mt],Array.isArray(vt)&&(vt=vt[0])),vt)if(L>=0&&L<=S.width-F&&G>=0&&G<=S.height-z){ft.bindFramebuffer(U.FRAMEBUFFER,vt);const bt=S.textures[ht],kt=bt.format,Kt=bt.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ht);const yt=yo(bt);if(yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,$t),U.bufferData(U.PIXEL_PACK_BUFFER,dt.byteLength,U.STREAM_READ),U.readPixels(L,G,F,z,rt.convert(kt),rt.convert(Kt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const xe=nt!==null?Lt.get(nt).__webglFramebuffer:null;ft.bindFramebuffer(U.FRAMEBUFFER,xe);const oe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Ph(U,oe,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,$t),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,dt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer($t),U.deleteSync(oe),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,L=null,G=0){const F=Math.pow(2,-G),z=Math.floor(S.image.width*F),dt=Math.floor(S.image.height*F),Mt=L!==null?L.x:0,ht=L!==null?L.y:0;Ft.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,G,0,0,Mt,ht,z,dt),ft.unbindTexture()},this.copyTextureToTexture=function(S,L,G=null,F=null,z=0,dt=0){let Mt,ht,vt,bt,kt,Kt,yt,$t,xe;const oe=S.isCompressedTexture?S.mipmaps[dt]:S.image;if(G!==null)Mt=G.max.x-G.min.x,ht=G.max.y-G.min.y,vt=G.isBox3?G.max.z-G.min.z:1,bt=G.min.x,kt=G.min.y,Kt=G.isBox3?G.min.z:0;else{const Jt=Math.pow(2,-z);Mt=Math.floor(oe.width*Jt),ht=Math.floor(oe.height*Jt),S.isDataArrayTexture?vt=oe.depth:S.isData3DTexture?vt=Math.floor(oe.depth*Jt):vt=1,bt=0,kt=0,Kt=0}F!==null?(yt=F.x,$t=F.y,xe=F.z):(yt=0,$t=0,xe=0);const ae=rt.convert(L.format),Oe=rt.convert(L.type);let Et;L.isData3DTexture?(Ft.setTexture3D(L,0),Et=U.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Ft.setTexture2DArray(L,0),Et=U.TEXTURE_2D_ARRAY):(Ft.setTexture2D(L,0),Et=U.TEXTURE_2D),ft.activeTexture(U.TEXTURE0),ft.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,L.flipY),ft.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),ft.pixelStorei(U.UNPACK_ALIGNMENT,L.unpackAlignment);const Ge=ft.getParameter(U.UNPACK_ROW_LENGTH),jt=ft.getParameter(U.UNPACK_IMAGE_HEIGHT),ti=ft.getParameter(U.UNPACK_SKIP_PIXELS),Fe=ft.getParameter(U.UNPACK_SKIP_ROWS),gs=ft.getParameter(U.UNPACK_SKIP_IMAGES);ft.pixelStorei(U.UNPACK_ROW_LENGTH,oe.width),ft.pixelStorei(U.UNPACK_IMAGE_HEIGHT,oe.height),ft.pixelStorei(U.UNPACK_SKIP_PIXELS,bt),ft.pixelStorei(U.UNPACK_SKIP_ROWS,kt),ft.pixelStorei(U.UNPACK_SKIP_IMAGES,Kt);const Hn=S.isDataArrayTexture||S.isData3DTexture,ei=L.isDataArrayTexture||L.isData3DTexture;if(S.isDepthTexture){const Jt=Lt.get(S),Ue=Lt.get(L),an=Lt.get(Jt.__renderTarget),fe=Lt.get(Ue.__renderTarget);ft.bindFramebuffer(U.READ_FRAMEBUFFER,an.__webglFramebuffer),ft.bindFramebuffer(U.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Le=0;Le<vt;Le++)Hn&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Lt.get(S).__webglTexture,z,Kt+Le),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Lt.get(L).__webglTexture,dt,xe+Le)),U.blitFramebuffer(bt,kt,bt+Mt,kt+ht,yt,$t,yt+Mt,$t+ht,U.DEPTH_BUFFER_BIT,U.NEAREST);ft.bindFramebuffer(U.READ_FRAMEBUFFER,null),ft.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(z!==0||S.isRenderTargetTexture||Lt.has(S)){const Jt=Lt.get(S),Ue=Lt.get(L);ft.bindFramebuffer(U.READ_FRAMEBUFFER,D),ft.bindFramebuffer(U.DRAW_FRAMEBUFFER,H);for(let an=0;an<vt;an++)Hn?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Jt.__webglTexture,z,Kt+an):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Jt.__webglTexture,z),ei?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ue.__webglTexture,dt,xe+an):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ue.__webglTexture,dt),z!==0?U.blitFramebuffer(bt,kt,bt+Mt,kt+ht,yt,$t,yt+Mt,$t+ht,U.COLOR_BUFFER_BIT,U.NEAREST):ei?U.copyTexSubImage3D(Et,dt,yt,$t,xe+an,bt,kt,Mt,ht):U.copyTexSubImage2D(Et,dt,yt,$t,bt,kt,Mt,ht);ft.bindFramebuffer(U.READ_FRAMEBUFFER,null),ft.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ei?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(Et,dt,yt,$t,xe,Mt,ht,vt,ae,Oe,oe.data):L.isCompressedArrayTexture?U.compressedTexSubImage3D(Et,dt,yt,$t,xe,Mt,ht,vt,ae,oe.data):U.texSubImage3D(Et,dt,yt,$t,xe,Mt,ht,vt,ae,Oe,oe):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,dt,yt,$t,Mt,ht,ae,Oe,oe.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,dt,yt,$t,oe.width,oe.height,ae,oe.data):U.texSubImage2D(U.TEXTURE_2D,dt,yt,$t,Mt,ht,ae,Oe,oe);ft.pixelStorei(U.UNPACK_ROW_LENGTH,Ge),ft.pixelStorei(U.UNPACK_IMAGE_HEIGHT,jt),ft.pixelStorei(U.UNPACK_SKIP_PIXELS,ti),ft.pixelStorei(U.UNPACK_SKIP_ROWS,Fe),ft.pixelStorei(U.UNPACK_SKIP_IMAGES,gs),dt===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0&&U.generateMipmap(Et),ft.unbindTexture()},this.initRenderTarget=function(S){Lt.get(S).__webglFramebuffer===void 0&&Ft.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Ft.setTextureCube(S,0):S.isData3DTexture?Ft.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ft.setTexture2DArray(S,0):Ft.setTexture2D(S,0),ft.unbindTexture()},this.resetState=function(){Z=0,k=0,nt=null,ft.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}const le=(s,t,e)=>Math.max(t,Math.min(e,s)),Un=(s,t,e)=>s+(t-s)*e,Wr=(s,t,e)=>{const n=le((e-s)/(t-s),0,1);return n*n*(3-2*n)},ue=(s,t,e,n)=>Un(s,t,1-Math.exp(-e*n)),Ga=(s,t,e,n)=>{let i=(t-s+Math.PI)%(Math.PI*2)-Math.PI;return i<-Math.PI&&(i+=Math.PI*2),s+i*(1-Math.exp(-e*n))},V0=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,xn=(s,t,e)=>t+(e-t)*s();class Se{constructor(t=20140413){this.seed=t>>>0}next(){return this.seed^=this.seed<<13,this.seed^=this.seed>>>17,this.seed^=this.seed<<5,this.seed>>>=0,this.seed/4294967296}range(t,e){return t+(e-t)*this.next()}int(t,e){return Math.floor(this.range(t,e+1))}pick(t){return t[Math.floor(this.next()*t.length)]}}function Hs(s,t){let e=Math.imul(s|0,374761393)^Math.imul(t|0,668265263);return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967295}function W0(s,t){const e=Math.floor(s),n=Math.floor(t),i=s-e,r=t-n,a=i*i*(3-2*i),o=r*r*(3-2*r),l=Hs(e,n),c=Hs(e+1,n),h=Hs(e,n+1),f=Hs(e+1,n+1);return Un(Un(l,c,a),Un(h,f,a),o)}function Xr(s,t,e=4){let n=0,i=.5,r=1,a=0;for(let o=0;o<e;o+=1)n+=W0(s*r,t*r)*i,a+=i,i*=.5,r*=2.03;return n/a}function De(s,t){const e=Math.hypot(s,t),n=Wr(9.2,30,e),i=(Xr(s*.009+200,t*.009-100,4)-.48)*9.8,r=(Xr(s*.021-80,t*.021+40,3)-.5)*3.6,a=(Xr(s*.08+10,t*.08-20,2)-.5)*.45,o=Wr(190,260,e)*11,l=Math.sin((s+t*.5)*.011)*2.1*Wr(30,140,e);return(i+r+a+o+l)*n}function kc(s,t,e=new R){const i=De(s-.7,t),r=De(s+.7,t),a=De(s,t-.7),o=De(s,t+.7);return e.set(i-r,2*.7,a-o).normalize(),e}function li(s,t){return Math.abs(s)<7.7&&Math.abs(t)<7.7?0:De(s,t)}function X0(s,t){let e=(t-s+Math.PI)%(Math.PI*2)-Math.PI;return e<-Math.PI&&(e+=Math.PI*2),e}const qr=new Map;function me(s,t,e,n,i={}){if(qr.has(s))return qr.get(s);const r=document.createElement("canvas");r.width=t,r.height=e;const a=r.getContext("2d");a.imageSmoothingEnabled=!1,n(a,t,e);const o=new xu(r);return o.magFilter=Te,o.minFilter=i.mip===!1?Te:jl,o.generateMipmaps=i.mip!==!1,o.wrapS=i.wrap===!1?dn:cs,o.wrapT=i.wrap===!1?dn:cs,o.repeat.set(i.repeat?.[0]??1,i.repeat?.[1]??1),o.colorSpace=i.data?Nn:Xe,o.needsUpdate=!0,qr.set(s,o),o}function st(s,t,e,n,i,r){s.fillStyle=r,s.fillRect(t,e,n,i)}function Hi(s,t,e,n,i,r){for(let a=0;a<r;a+=1)s.fillStyle=i[Math.floor(n.next()*i.length)],s.globalAlpha=n.range(.06,.28),s.fillRect(Math.floor(n.range(0,t)),Math.floor(n.range(0,e)),1,1);s.globalAlpha=1}function q0(){return me("metalWall",64,64,(s,t,e)=>{const n=new Se(7142);st(s,0,0,t,e,"#26332e");for(let i=0;i<2;i+=1)for(let r=0;r<2;r+=1){const a=r*32,o=i*32;st(s,a+1,o+1,30,30,"#34433c"),st(s,a+2,o+2,28,2,"#43544b"),st(s,a+2,o+3,2,26,"#3d4e45"),st(s,a+2,o+29,28,1,"#1b2621"),st(s,a+29,o+2,1,28,"#1b2621");for(const[l,c]of[[5,5],[25,5],[5,25],[25,25]])st(s,a+l,o+c,2,2,"#718078"),st(s,a+l,o+c+1,1,1,"#1a231f")}Hi(s,t,e,n,["#6f8069","#18231d","#8b9b7b"],240);for(let i=0;i<11;i+=1){const r=Math.floor(n.range(0,t)),a=Math.floor(n.range(0,e*.7));s.globalAlpha=n.range(.05,.16),st(s,r,a,1,Math.floor(n.range(2,12)),"#0e1712")}s.globalAlpha=1},{repeat:[1,1]})}function Y0(){return me("metalFloor",64,64,(s,t,e)=>{const n=new Se(9031);st(s,0,0,t,e,"#232e29");for(let i=0;i<4;i+=1)for(let r=0;r<4;r+=1){const a=r*16,o=i*16;st(s,a+1,o+1,15,15,"#303d37"),st(s,a+2,o+2,13,1,"#425149"),st(s,a+2,o+14,13,1,"#1b2520"),st(s,a+14,o+2,1,13,"#1b2520"),st(s,a+5,o+5,4,1,"#49594f"),st(s,a+8,o+6,1,4,"#49594f"),st(s,a+11,o+10,3,1,"#202b25"),st(s,a+10,o+11,1,3,"#202b25");for(const[l,c]of[[3,3],[12,3],[3,12],[12,12]])st(s,a+l,o+c,1,1,"#667569")}Hi(s,t,e,n,["#798772","#101813","#8a7e5d"],200)},{repeat:[4,4]})}function K0(){return me("ceiling",64,64,(s,t,e)=>{const n=new Se(144);st(s,0,0,t,e,"#1d2823");for(let i=0;i<2;i+=1)for(let r=0;r<4;r+=1)st(s,r*16+1,i*32+1,14,30,"#29352f"),st(s,r*16+2,i*32+2,12,1,"#36443b"),st(s,r*16+2,i*32+29,12,1,"#141d19"),st(s,r*16+13,i*32+2,1,28,"#141d19");Hi(s,t,e,n,["#5b6c5e","#0a100c"],110)},{repeat:[4,4]})}function Gc(){return me("hazard",64,32,(s,t,e)=>{st(s,0,0,t,e,"#171a12"),s.fillStyle="#b59e3d";for(let i=-e;i<t+e;i+=16)s.beginPath(),s.moveTo(i,e),s.lineTo(i+e,0),s.lineTo(i+e+7,0),s.lineTo(i+7,e),s.closePath(),s.fill();const n=new Se(86);Hi(s,t,e,n,["#27301b","#d0b951","#5a542a"],90)},{repeat:[1,1]})}function $0(){return me("concrete",64,64,(s,t,e)=>{const n=new Se(288);st(s,0,0,t,e,"#4a4c42");for(let i=0;i<400;i+=1)s.fillStyle=n.pick(["#56584a","#3d4037","#606152","#34362f"]),s.globalAlpha=n.range(.2,.55),s.fillRect(Math.floor(n.range(0,t)),Math.floor(n.range(0,e)),n.range(1,4),n.range(1,3));s.globalAlpha=.3;for(let i=0;i<4;i+=1)st(s,0,15+i*16,t,1,"#34352f");s.globalAlpha=1},{repeat:[2,2]})}function Z0(){return me("terrain",128,128,(s,t,e)=>{const n=new Se(4019);st(s,0,0,t,e,"#364a2b");for(let i=0;i<4e3;i+=1){const r=n.pick(["#2d4126","#405c2f","#4a6535","#293b22","#3c522b","#596b39","#22331d"]);s.globalAlpha=n.range(.26,.9),s.fillStyle=r;const a=Math.floor(n.range(0,t)),o=Math.floor(n.range(0,e)),l=n.next()>.88?n.int(2,5):1;s.fillRect(a,o,l,n.next()>.76?l:1)}s.globalAlpha=.3;for(let i=0;i<13;i+=1){const r=Math.floor(n.range(0,t)),a=Math.floor(n.range(0,e));for(let o=0;o<5;o+=1)st(s,r+o*2,a+o*3,2,2,"#1d2a18")}s.globalAlpha=1},{repeat:[38,38]})}function J0(){return me("dirt",64,64,(s,t,e)=>{const n=new Se(1771);st(s,0,0,t,e,"#4a4030");for(let i=0;i<1500;i+=1)st(s,n.int(0,t-1),n.int(0,e-1),n.int(1,3),1,n.pick(["#5c503b","#3b3428","#695b42","#302b22","#77684b"]));s.globalAlpha=.22;for(let i=0;i<18;i+=1)st(s,n.int(0,t),n.int(0,e),n.int(2,7),1,"#25231b");s.globalAlpha=1},{repeat:[8,8]})}function Q0(){return me("bark",32,64,(s,t,e)=>{const n=new Se(522);st(s,0,0,t,e,"#40382b");for(let i=0;i<t;i+=3){const r=n.pick(["#584d37","#322c22","#66583e","#2b271e"]);st(s,i,0,1,e,r),n.next()>.5&&st(s,i+1,n.range(0,e),1,n.range(2,16),"#271f17")}for(let i=0;i<80;i+=1)st(s,n.int(0,t-1),n.int(0,e-1),1,2,n.pick(["#7b6a49","#1f1c16"]))},{repeat:[1,1]})}function Yr(){return me("leaf",32,32,(s,t,e)=>{const n=new Se(828);st(s,0,0,t,e,"#2c421f");for(let i=0;i<130;i+=1)st(s,n.int(0,t-1),n.int(0,e-1),n.int(1,3),n.int(1,3),n.pick(["#3f5927","#4f6c2c","#334a22","#5f7834","#26391b"]));s.globalAlpha=.36;for(let i=0;i<9;i+=1)st(s,n.int(0,t),n.int(0,e),n.int(3,8),1,"#182513");s.globalAlpha=1},{repeat:[2,2]})}function j0(){return me("fur",32,32,(s,t,e)=>{const n=new Se(9812);st(s,0,0,t,e,"#3b2b20");for(let i=0;i<600;i+=1)st(s,n.int(0,t-1),n.int(0,e-1),1,n.int(1,3),n.pick(["#4d3928","#2d2119","#604833","#392a1f","#71563b"]));s.globalAlpha=.3;for(let i=0;i<25;i+=1)st(s,n.int(0,t-1),n.int(0,e-1),1,n.int(2,5),"#1d1611");s.globalAlpha=1},{repeat:[2,2]})}function Cl(){return me("skin",32,32,(s,t,e)=>{const n=new Se(5112);st(s,0,0,t,e,"#8c7159");for(let i=0;i<250;i+=1)st(s,n.int(0,t-1),n.int(0,e-1),n.int(1,2),1,n.pick(["#9d8167","#79614d","#b09278","#654d3d"]));s.globalAlpha=.35;for(let i=0;i<8;i+=1)st(s,n.int(0,t-1),n.int(0,e-1),n.int(3,6),1,"#513d30");s.globalAlpha=1},{repeat:[1,1]})}function Js(){return me("mossSkin",64,64,(s,t,e)=>{const n=new Se(6078);st(s,0,0,t,e,"#45602d");for(let i=0;i<1500;i+=1){const r=n.int(0,t-1),a=n.int(0,e-1);st(s,r,a,n.int(1,2),1,n.pick(["#527139","#3d5628","#668445","#34491f","#73944f"]))}for(let i=0;i<16;i+=1){const r=n.int(0,t-1),a=n.int(0,e-1),o=n.pick(["#27803f","#1e6d36","#2b8f47","#19592c"]);s.globalAlpha=n.range(.3,.8);for(let l=0;l<10;l+=1)st(s,(r+n.int(-5,5)+t)%t,(a+n.int(-2,2)+e)%e,n.int(1,3),1,o)}s.globalAlpha=1;for(let i=0;i<8;i+=1){let r=n.int(0,t-1),a=n.int(0,e-1);for(let o=0;o<26;o+=1)st(s,(r+t)%t,(a+e)%e,2,1,n.pick(["#1c3d20","#234b28","#16371b"])),r+=n.int(-1,2),a+=n.int(0,1)}},{repeat:[1,1]})}function tg(){return me("mossFace",64,64,(s,t,e)=>{const n=new Se(9914);st(s,0,0,t,e,"#3d5528");for(let i=0;i<700;i+=1)st(s,n.int(0,t-1),n.int(0,e-1),1,1,n.pick(["#4b6631","#32491f","#5a753b"]));st(s,9,39,46,17,"#0b0d07"),st(s,13,42,39,11,"#240a07");for(let i=0;i<11;i+=1){const r=12+i*4;st(s,r,39,3,5-i%2,"#b7ad82"),st(s,r,49,2,5,"#837b58")}for(let i=0;i<45;i+=1)st(s,n.int(11,53),n.int(41,53),1,1,"#4e1c14");st(s,10,17,18,3,"#547238"),st(s,36,17,18,3,"#547238"),st(s,13,20,11,1,"#2f441f"),st(s,40,20,11,1,"#2f441f");for(let i=0;i<6;i+=1)st(s,16+i*6,22,1,9,"#203017");Hi(s,t,e,n,["#78984a","#1b2912"],100)},{repeat:[1,1],wrap:!1})}function Kr(s=0){return me(`screen${s}`,128,80,(t,e,n)=>{st(t,0,0,e,n,"#061b13"),t.fillStyle="#0c2b1e";for(let r=0;r<n;r+=3)t.fillRect(0,r,e,1);t.fillStyle=s===0?"#7bf2c8":s===1?"#e3c06a":"#89dd83",t.font="bold 9px monospace",t.fillText(s===0?"BIO-LINK // ACTIVE":s===1?"WARNING: M-08":"AIRLOCK CONTROL",7,12),t.font="7px monospace",(s===0?["SUBJECT: APE-PRIME","HEART RATE  084","ECHO MAP   OK","DOME SEAL  3/4","> AWAITING INPUT"]:s===1?["CONTAINMENT LOST","OPTICAL ORGANS: 0","ACOUSTIC GAIN: 98%","DO NOT SPEAK","> RUN PROTOCOL"]:["DOOR A-1  99.8","DOOR B-2  99.8","DOOR C-3  99.8","DOOR D-4  99.8","> HYD SYS READY"]).forEach((r,a)=>t.fillText(r,7,26+a*9)),t.fillStyle="rgba(117, 239, 194, .18)";for(let r=0;r<n;r+=4)t.fillRect(0,r,e,1);t.strokeStyle=s===1?"#e7a35b":"#78ecc2",t.beginPath();for(let r=0;r<42;r+=2){const a=64+Math.sin(r*.62)*4+Math.sin(r*.19)*3;r===0?t.moveTo(82+r,a):t.lineTo(82+r,a)}t.stroke()},{repeat:[1,1],wrap:!1})}function Ha(){return me("warning",128,128,(s,t,e)=>{st(s,0,0,t,e,"#c0a33b"),s.fillStyle="#171811";for(let n=0;n<6;n+=1)s.fillRect(0,n*22,t,7);s.fillStyle="#171811",s.beginPath(),s.moveTo(64,22),s.lineTo(109,100),s.lineTo(19,100),s.closePath(),s.fill(),s.fillStyle="#d8bd4e",s.font="bold 55px monospace",s.fillText("!",56,92),s.font="bold 10px monospace",s.fillStyle="#171811",s.fillText("BIOHAZARD",31,118)},{repeat:[1,1],wrap:!1})}function Hc(){return me("rust",32,32,(s,t,e)=>{const n=new Se(155);st(s,0,0,t,e,"#4e4938");for(let i=0;i<380;i+=1)st(s,n.int(0,t-1),n.int(0,e-1),n.int(1,3),n.int(1,2),n.pick(["#695b3d","#332d22","#806a43","#583f27"]));s.globalAlpha=.3;for(let i=0;i<20;i+=1)st(s,n.int(0,t),n.int(0,e),1,n.int(2,8),"#18140e");s.globalAlpha=1},{repeat:[1,1]})}function Vc(){return me("metalPanel",32,32,(s,t,e)=>{const n=new Se(411);st(s,0,0,t,e,"#4f5d55"),st(s,1,1,30,30,"#596961"),st(s,2,2,28,1,"#75857b"),st(s,2,29,28,1,"#2d3933"),st(s,29,2,1,28,"#2d3933");for(const[i,r]of[[4,4],[27,4],[4,27],[27,27]])st(s,i,r,1,1,"#9aa79b");for(let i=0;i<16;i+=1)st(s,n.int(2,29),n.int(2,29),1,1,n.pick(["#38443d","#829086"]))},{repeat:[1,1]})}function eg(){return me("container",32,32,(s,t,e)=>{const n=new Se(711);st(s,0,0,t,e,"#716b34");for(let i=0;i<e;i+=8)st(s,0,i,t,1,"#8a8342"),st(s,0,i+7,t,1,"#403f1e");for(let i=0;i<t;i+=16)st(s,i,0,1,e,"#403f1e"),st(s,i+2,0,1,e,"#9d9347");st(s,8,10,16,9,"#2d2d18"),s.fillStyle="#b8ac5b",s.font="bold 6px monospace",s.fillText("BIO-09",9,17),Hi(s,t,e,n,["#a39a4b","#2d2a15"],70)},{repeat:[1,1]})}function Wc(){return me("crate",32,32,(s,t,e)=>{st(s,0,0,t,e,"#544631"),st(s,2,2,28,28,"#66563c"),st(s,2,2,28,2,"#7d6a48"),st(s,2,28,28,2,"#352d20"),st(s,2,2,2,28,"#7d6a48"),st(s,28,2,2,28,"#352d20"),s.fillStyle="#8a7853",s.font="bold 7px monospace",s.fillText("AP-09",8,18)},{repeat:[1,1]})}function Pl(){return me("glow",64,64,(s,t,e)=>{const n=s.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.18,"rgba(210,255,190,0.75)"),n.addColorStop(.5,"rgba(120,240,190,0.18)"),n.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=n,s.fillRect(0,0,t,e)},{wrap:!1,mip:!1})}function Ll(){return me("core",32,32,(s,t,e)=>{st(s,0,0,t,e,"#0a201b"),st(s,11,4,10,24,"#6be7c5"),st(s,13,6,6,20,"#b4ffea"),st(s,8,10,16,12,"#41bfa1");for(let n=3;n<29;n+=5)st(s,9,n,14,1,"#d3fff2");for(let n=6;n<27;n+=5)st(s,n,9,1,14,"#2c9d84")},{repeat:[1,1],wrap:!1})}function Dn(s,t={}){const e=String(s),n=t.width??256,i=t.height??64,r=t.color??"#d8e4b5",a=t.bg??"#0b1510",o=t.size??18;return me(`text:${e}:${n}:${i}:${r}:${a}:${o}`,n,i,l=>{if(st(l,0,0,n,i,a),l.fillStyle=r,l.font=`bold ${o}px monospace`,l.textAlign=t.align??"center",l.textBaseline="middle",l.fillText(e,t.align==="left"?10:n/2,i/2),t.subtle){l.fillStyle="rgba(255,255,255,.06)";for(let c=0;c<i;c+=4)l.fillRect(0,c,n,1)}},{repeat:[1,1],wrap:!1})}function Ci(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new ye;l.morphTargetsRelative=o;let c=0;for(let h=0;h<s.length;++h){const f=s[h];let u=0,d=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in f.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(f.attributes[p]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in f.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[p].length!==s[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(f.morphAttributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let p;if(e)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0;const f=[];for(let u=0;u<s.length;++u){const d=s[u].index;for(let p=0;p<d.count;++p)f.push(d.getX(p)+h);h+=s[u].attributes.position.count}l.setIndex(f)}for(const h in r){const f=Il(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(const h in a){const f=a[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){const d=[];for(let x=0;x<a[h].length;++x)d.push(a[h][x][u]);const p=Il(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Il(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new je(a,e,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const f=l/e;for(let u=0,d=h.count;u<d;u++)for(let p=0;p<e;p++){const x=h.getComponent(u,p);o.setComponent(u+f,p,x)}}else a.set(h.array,l);l+=h.count*e}return i!==void 0&&(o.gpuType=i),o}const Dl=new R;function mt(s,{w:t=1,h:e=1,d:n=1,x:i=0,y:r=0,z:a=0,material:o,cast:l=!0,receive:c=!0,rotY:h=0}){const f=new j(new Ut(t,e,n),o);return f.position.set(i,r,a),f.rotation.y=h,f.castShadow=l,f.receiveShadow=c,s.add(f),f}function vn(s,{w:t=1,h:e=1,x:n=0,y:i=0,z:r=0,material:a,rotX:o=0,rotY:l=0,rotZ:c=0}){const h=new j(new Ze(t,e),a);return h.position.set(n,i,r),h.rotation.set(o,l,c),s.add(h),h}class ng{constructor(t,e={}){this.scene=t,this.callbacks=e,this.group=new Dt,this.group.name="LaboratoryLobby",t.add(this.group),this.doors=[],this.interactables=[],this.colliders=[],this.emissives=[],this.lights=[],this.elapsed=0,this.materials=this.createMaterials(),this.buildRoom(),this.buildDoors(),this.buildLabDetails(),this.buildTerminal(),this.mergeDoorPanels(),this.mergeStaticGeometry()}createMaterials(){const t=q0(),e=Y0(),n=K0(),i=Gc(),r=Vc(),a=Hc(),o=Ha();return{wall:new Rt({map:t,color:10200990,roughness:.82,metalness:.48}),wallDark:new Rt({map:t,color:6648426,roughness:.8,metalness:.42}),floor:new Rt({map:e,color:10727076,roughness:.72,metalness:.5}),ceiling:new Rt({map:n,color:8359043,roughness:.9,metalness:.2}),trim:new Rt({color:1055254,roughness:.65,metalness:.55}),steel:new Rt({map:r,color:10136481,roughness:.46,metalness:.8}),steelDark:new Rt({color:2503469,roughness:.48,metalness:.72}),rust:new Rt({map:a,color:10194291,roughness:.94,metalness:.22}),hazard:new Rt({map:i,color:14731096,roughness:.8,metalness:.25}),warning:new Vt({map:o,color:14007129,transparent:!1}),crate:new Rt({map:Wc(),color:11376754,roughness:.93}),container:new Rt({map:eg(),color:12234867,roughness:.7,metalness:.35}),glass:new el({color:10409660,transparent:!0,opacity:.22,roughness:.15,metalness:.1,side:be}),screen0:new Vt({map:Kr(0),toneMapped:!1}),screen1:new Vt({map:Kr(1),toneMapped:!1}),screen2:new Vt({map:Kr(2),toneMapped:!1}),cyanGlow:new Vt({color:7995360,toneMapped:!1}),greenGlow:new Vt({color:10478442,toneMapped:!1}),amberGlow:new Vt({color:16757596,toneMapped:!1}),redGlow:new Vt({color:16732216,toneMapped:!1}),fluid:new Rt({color:6015378,emissive:3124853,emissiveIntensity:.9,transparent:!0,opacity:.55,roughness:.25,metalness:.1}),cable:new Rt({color:1186839,roughness:.9}),paper:new Rt({map:Dn("M-08",{width:128,height:64,size:21,color:"#22301f",bg:"#cfc9a3"}),roughness:1}),screenLabel:["SECTOR 09 // LOBBY","AUTHORIZED PERSONNEL ONLY","CONTAINMENT PROTOCOL","BIOHAZARD LEVEL 5"].map(l=>new Vt({map:Dn(l,{width:512,height:80,size:30,color:"#c4d9a0",bg:"#07100a",subtle:!0}),toneMapped:!1}))}}buildRoom(){const t=this.materials,e=4.5,n=7.5,i=.32,r=3.15;mt(this.group,{w:15,h:.16,d:15,y:-.08,material:t.floor,cast:!1}),mt(this.group,{w:15,h:.2,d:15,y:e+.1,material:t.ceiling,cast:!1}),this.buildFloorMarkings();for(const l of["N","S","E","W"]){const c=l==="N"||l==="S",h=(15-r)/2,u=(l==="N"||l==="W"?-1:1)*n;for(const d of[-1,1]){const p=d*(r/2+h/2);c?(mt(this.group,{w:h,h:e,d:i,x:p,y:e/2,z:u,material:t.wall}),this.colliders.push({minX:p-h/2,maxX:p+h/2,minZ:u-i/2,maxZ:u+i/2,kind:"wall"})):(mt(this.group,{w:i,h:e,d:h,x:u,y:e/2,z:p,material:t.wall}),this.colliders.push({minX:u-i/2,maxX:u+i/2,minZ:p-h/2,maxZ:p+h/2,kind:"wall"}))}c?mt(this.group,{w:r,h:e-3.65,d:i,x:0,y:3.65+(e-3.65)/2,z:u,material:t.wallDark}):mt(this.group,{w:i,h:e-3.65,d:r,x:u,y:3.65+(e-3.65)/2,z:0,material:t.wallDark});for(const d of[-1,1]){const p=d*(r/2+h/2);c?(mt(this.group,{w:h,h:.22,d:.39,x:p,y:.11,z:u,material:t.trim}),mt(this.group,{w:h,h:.1,d:.38,x:p,y:3.38,z:u,material:t.hazard})):(mt(this.group,{w:.39,h:.22,d:h,x:u,y:.11,z:p,material:t.trim}),mt(this.group,{w:.38,h:.1,d:h,x:u,y:3.38,z:p,material:t.hazard}))}}for(let l=-3;l<=3;l+=1){const c=l*2.15,h=l*2.15;Math.abs(c)>6.3||Math.abs(h)>6.3||mt(this.group,{w:.1,h:.08,d:14.5,x:c,y:4.35,z:0,material:t.trim,cast:!1})}const a=t.steelDark;for(const l of[-3.7,0,3.7]){mt(this.group,{w:5.2,h:.12,d:.56,x:0,y:4.37,z:l,material:a,cast:!1});const c=mt(this.group,{w:4.95,h:.055,d:.34,x:0,y:4.285,z:l,material:t.cyanGlow,cast:!1,receive:!1});this.emissives.push(c)}for(const l of[-6.4,-5.9,6.1,6.6]){const c=new j(new Me(.075,.075,14.4,6),t.steelDark);c.rotation.x=Math.PI/2,c.position.set(l,4.13,0),c.castShadow=!0,this.group.add(c)}for(const l of[-6.3,-5.8,5.9]){const c=new j(new Me(.055,.055,14.4,5),t.rust);c.rotation.z=Math.PI/2,c.position.set(0,4.16,l),this.group.add(c)}const o=vn(this.group,{w:2.4,h:.38,x:-4.2,y:3.62,z:-7.32,material:t.screenLabel[0]});o.rotation.y=0,vn(this.group,{w:.92,h:.92,x:-6.95,y:2.45,z:-4.9,material:t.warning,rotY:Math.PI/2}),vn(this.group,{w:1.8,h:.34,x:4.5,y:3.62,z:-7.32,material:t.screenLabel[1]}),vn(this.group,{w:1.8,h:.34,x:-4.4,y:3.62,z:7.32,material:t.screenLabel[2],rotY:Math.PI}),vn(this.group,{w:1.7,h:.32,x:7.32,y:3.62,z:-4.1,material:t.screenLabel[3],rotY:-Math.PI/2}),vn(this.group,{w:1.3,h:.3,x:-7.32,y:2.95,z:4.4,material:t.screenLabel[1],rotY:Math.PI/2}),this.addLighting()}buildFloorMarkings(){const t=this.materials,e=new Vt({color:9084244,transparent:!0,opacity:.28,side:be}),n=new j(new un(2.55,2.63,48),e);n.rotation.x=-Math.PI/2,n.position.y=.008,this.group.add(n);const i=new j(new un(1.82,1.86,48),e);i.rotation.x=-Math.PI/2,i.position.y=.009,this.group.add(i);const r=t.hazard;for(const[o,l,c,h]of[[0,-5.2,3.2,.12],[0,5.2,3.2,.12],[-5.2,0,.12,3.2],[5.2,0,.12,3.2]])mt(this.group,{w:c,h:.012,d:h,x:o,y:.01,z:l,material:r,cast:!1});const a=new j(new oi(1.35,8),new Vt({color:8359756,transparent:!0,opacity:.075}));a.rotation.x=-Math.PI/2,a.position.set(0,.006,.8),this.group.add(a)}addLighting(){const t=[{pos:[0,4.18,-3.7],color:11927521,intensity:24,distance:8.5},{pos:[0,4.18,3.7],color:11072980,intensity:22,distance:8.5},{pos:[-4.5,3.3,0],color:8379576,intensity:10,distance:7},{pos:[4.5,3.3,1.2],color:11001747,intensity:9,distance:6},{pos:[0,1.3,.8],color:7203523,intensity:7,distance:5}];for(const n of t){const i=new On(n.color,n.intensity,n.distance,1.7);i.position.set(...n.pos),this.group.add(i),this.lights.push(i)}const e=new On(16763017,9,7,2);e.position.set(0,3,6.2),this.group.add(e),this.lights.push(e)}buildDoors(){const t=[{id:"N",label:"B-1",name:"NORTH AIRLOCK",pos:new R(0,0,-7.5),outward:new R(0,0,-1),angle:0},{id:"S",label:"B-2",name:"SOUTH AIRLOCK",pos:new R(0,0,7.5),outward:new R(0,0,1),angle:Math.PI},{id:"E",label:"B-3",name:"EAST AIRLOCK",pos:new R(7.5,0,0),outward:new R(1,0,0),angle:Math.PI/2},{id:"W",label:"B-4",name:"WEST AIRLOCK",pos:new R(-7.5,0,0),outward:new R(-1,0,0),angle:-Math.PI/2}];for(const e of t)this.doors.push(this.buildDoor(e))}buildDoor(t){const e=this.materials,n=new Dt;n.position.copy(t.pos),n.rotation.y=t.angle,this.group.add(n),new R(-t.outward.z,0,t.outward.x).multiplyScalar(-1);for(const v of[-1,1]){mt(n,{w:.42,h:3.86,d:.58,x:v*1.79,y:1.93,z:0,material:e.steelDark});for(let w=0;w<10;w+=1)mt(n,{w:.075,h:.075,d:.03,x:v*1.79,y:.42+w*.33,z:.31,material:e.steel,cast:!1})}mt(n,{w:4,h:.5,d:.58,x:0,y:3.86,z:0,material:e.steelDark}),mt(n,{w:3.47,h:.1,d:.64,x:0,y:3.55,z:0,material:e.hazard,cast:!1}),mt(n,{w:.38,h:.07,d:.7,x:0,y:4.12,z:0,material:e.trim});const i=e.steel,r=e.steelDark,a=[];for(const v of[-1,1]){const w=new Dt;w.position.x=v*.75,w.userData.keepUnmerged=!0,n.add(w),mt(w,{w:1.51,h:3.42,d:.26,y:1.72,material:i});for(const b of[.55,1.7,2.74])mt(w,{w:1.4,h:.11,d:.32,y:b,material:r}),mt(w,{w:1.23,h:.035,d:.33,y:b+.1,material:e.hazard,cast:!1});mt(w,{w:.16,h:2.65,d:.35,x:v*.52,y:1.72,material:r}),mt(w,{w:.055,h:2.25,d:.38,x:v*.52,y:1.72,material:e.cyanGlow,cast:!1});const y=e.redGlow.clone(),T=mt(w,{w:.12,h:.12,d:.03,x:v*.27,y:3.18,z:.16,material:y,cast:!1});a.push({group:w,side:v,indicator:T,baseX:v*.75})}for(const v of[-1,1]){const w=mt(n,{w:.15,h:.3,d:.8,x:v*.85,y:3.72,z:.1,material:e.rust});w.rotation.x=.1,mt(n,{w:.1,h:.1,d:.9,x:v*.85,y:3.7,z:.42,material:e.steel,cast:!1})}const o=t.outward.x===0,l=new Dt;l.position.set(o?-2.18:2.18,1.35,o?.29:-.29),l.rotation.y=o?0:Math.PI,l.userData.keepUnmerged=!0,n.add(l),mt(l,{w:.42,h:.66,d:.16,material:e.steelDark}),mt(l,{w:.34,h:.5,d:.19,material:e.steel});const c=new Dt;c.position.set(0,.08,.14),l.add(c),mt(c,{w:.06,h:.28,d:.06,y:-.12,material:e.rust}),mt(c,{w:.11,h:.085,d:.15,y:-.26,material:e.hazard});const h=e.greenGlow.clone(),f=mt(l,{w:.075,h:.075,d:.04,x:.13,y:.22,z:.11,material:h,cast:!1}),u=new j(new un(.1,.12,12),new Vt({color:8511853,side:be,transparent:!0,opacity:.6}));u.position.set(.13,.22,.12),l.add(u);const d=Dn(`AIRLOCK ${t.label}`,{width:256,height:64,size:22,color:"#b9d391",bg:"#111b13",subtle:!0});vn(l,{w:.5,h:.14,y:.45,z:.085,material:new Vt({map:d,toneMapped:!1})});const p=new j(new Ze(1.35,.27),new Vt({map:Dn("MOSS PROJECT",{width:512,height:80,size:30,color:"#bcce8c",bg:"#13170e"}),toneMapped:!1}));p.position.set(0,3.1,-.37),p.rotation.y=Math.PI,n.add(p);const x={minX:t.pos.x-(t.outward.x!==0?.4:1.6),maxX:t.pos.x+(t.outward.x!==0?.4:1.6),minZ:t.pos.z-(t.outward.z!==0?.4:1.6),maxZ:t.pos.z+(t.outward.z!==0?.4:1.6),kind:"door",active:!0};this.colliders.push(x);const g={...t,group:n,panels:a,leverPivot:c,swLight:f,swRing:u,collider:x,progress:0,target:0,state:"closed",busy:!1,moveTime:0,switchPosition:new R,switchGroup:l,indicatorMaterials:a.map(v=>v.indicator.material)};l.getWorldPosition(g.switchPosition);const m=new R;return l.getWorldPosition(m),g.switchPosition.copy(m),g.interactable={id:`door-${t.id}`,kind:"door",label:`HYDRAULIC DOOR ${t.label}`,action:()=>this.toggleDoor(g),position:m,range:2.1,door:g},this.interactables.push(g.interactable),g}buildLabDetails(){const t=this.materials;this.addShelf(-5.3,-6.8,0,.98),this.addShelf(5.3,-6.8,0,.98),this.addShelf(-6.85,4.2,Math.PI/2,.9),this.addShelf(6.85,4.2,-Math.PI/2,.9),this.addShelf(-6.85,-4.1,Math.PI/2,.9),this.addShelf(6.85,-4.1,-Math.PI/2,.9),this.addSpecimenTank(-5.7,4.9,.82),this.addSpecimenTank(5.7,4.9,-.7),this.addSpecimenTank(5.9,-4.8,-1.2),this.addServerRack(-7,-1.3,Math.PI/2,0),this.addServerRack(7,1.4,-Math.PI/2,1),this.addServerRack(-7,1.25,Math.PI/2,2),this.addServerRack(7,-1.45,-Math.PI/2,2),this.addCrateStack(-4.2,5.8),this.addCrateStack(4.2,5.7),this.addCrate(2.9,-5.9,.62,.12),this.addCrate(-3.7,-5.7,.55,-.22),mt(this.group,{w:1,h:.85,d:.7,x:-2.9,y:.425,z:-6.25,material:t.rust}),mt(this.group,{w:1.06,h:.06,d:.76,x:-2.9,y:.89,z:-6.25,material:t.steel}),mt(this.group,{w:.4,h:.1,d:.2,x:-2.9,y:.68,z:-5.88,material:t.screen0,cast:!1}),this.addCart(3.55,-3.4,.25),this.addHoloTable();for(let n=0;n<8;n+=1){const i=new wc([new R(-6.9+n*.1,.02,-6+n*.8),new R(-5.5+Math.sin(n)*.4,.015,-5.5+n*.6),new R(-4.4,.015,-4.9+n*.5)]),r=new ro(i,10,.026,4,!1),a=new j(r,t.cable);a.receiveShadow=!0,this.group.add(a)}vn(this.group,{w:.55,h:.75,x:-6.7,y:2.1,z:-7.31,material:new Vt({map:Ha(),toneMapped:!1})});for(const[n,i,r]of[[-2.5,-7.33,0],[2.5,-7.33,0],[7.33,2.5,-Math.PI/2],[-7.33,-2.5,Math.PI/2]]){const a=new Dt;a.position.set(n,3.25,i),a.rotation.y=r,mt(a,{w:.48,h:.7,d:.16,material:t.steelDark}),mt(a,{w:.32,h:.42,d:.05,y:.06,z:.11,material:t.trim,cast:!1}),mt(a,{w:.28,h:.034,d:.02,y:.06,z:.145,material:t.steel,cast:!1}),this.group.add(a)}const e=new el({color:2506293,roughness:.1,metalness:.4,transparent:!0,opacity:.5});for(const[n,i,r]of[[-2.2,2.6,.75],[2.9,3.9,.5],[1.1,-3.4,.4]]){const a=new j(new oi(r,7),e);a.rotation.x=-Math.PI/2,a.position.set(n,.015,i),a.scale.y=.6,this.group.add(a)}}addShelf(t,e,n,i=1){const r=this.materials,a=new Dt;a.position.set(t,0,e),a.rotation.y=n,a.scale.setScalar(i),this.group.add(a);const o=2.5,l=2.15,c=.55;for(const u of[-1,1])mt(a,{w:.08,h:l,d:c,x:u*(o/2-.06),y:l/2,material:r.steelDark}),mt(a,{w:.09,h:.06,d:c+.08,x:u*(o/2+.01),y:.03,material:r.trim});for(let u=0;u<4;u+=1){const d=.35+u*.58;mt(a,{w:o,h:.055,d:c,y:d,material:r.steel}),mt(a,{w:o-.14,h:.015,d:c-.08,y:d+.035,material:r.rust,cast:!1});const p=Math.random;for(let x=0;x<4;x+=1){const g=-.75+x*.5+(p()-.5)*.12;if(p()>.35){const m=new j(new Me(.055,.07,.22+p()*.12,6),r.glass);m.position.set(g,d+.16,-.05),m.castShadow=!0,a.add(m);const v=new j(new Me(.038,.052,.12,6),r.fluid);v.position.set(g,d+.105,-.05),a.add(v)}else mt(a,{w:.22,h:.22+p()*.1,d:.22,x:g,y:d+.14,z:0,material:r.container})}for(let x=0;x<2;x+=1)mt(a,{w:.17,h:.12,d:.3,x:-.8+x*.6,y:d+.1,z:.06,material:r.steelDark})}const h=new j(new Me(.2,.16,.55,8),r.glass);h.position.set(.55,2.45,0),a.add(h);const f=new j(new Me(.15,.13,.4,8),r.fluid);f.position.set(.55,2.4,0),a.add(f),mt(a,{w:.28,h:.08,d:.28,x:.55,y:2.75,z:0,material:r.steel})}addSpecimenTank(t,e,n){const i=this.materials,r=new Dt;r.position.set(t,0,e),r.rotation.y=n,this.group.add(r),mt(r,{w:1.1,h:.45,d:1.1,y:.225,material:i.steelDark}),mt(r,{w:.88,h:1.9,d:.88,y:1.38,material:i.glass}),mt(r,{w:1,h:.16,d:1,y:2.38,material:i.steelDark}),mt(r,{w:.92,h:1.7,d:.92,y:1.38,material:i.fluid});const a=new j(new fs(.26,0),new Rt({color:3295786,roughness:.8}));a.scale.set(.8,1.6,.7),a.position.y=1.45,r.add(a),mt(r,{w:.06,h:1.1,d:.06,y:2.2,material:i.cable,cast:!1});const o=new j(new un(.34,.38,16),i.cyanGlow);o.rotation.x=-Math.PI/2,o.position.y=.47,r.add(o)}addServerRack(t,e,n,i){const r=this.materials,a=new Dt;a.position.set(t,0,e),a.rotation.y=n,this.group.add(a),mt(a,{w:1.25,h:2.15,d:.65,y:1.075,material:r.steelDark}),mt(a,{w:1.13,h:1.9,d:.7,y:1.08,material:r.steel});for(let l=0;l<7;l+=1){mt(a,{w:.93,h:.19,d:.05,y:.35+l*.25,z:.37,material:l%3===0?r.screen0:r.trim,cast:!1});for(let c=0;c<3;c+=1){const h=mt(a,{w:.028,h:.028,d:.02,x:-.3+c*.11,y:.41+l*.25,z:.41,material:c===1?r.greenGlow:r.redGlow,cast:!1});l===3&&c===1&&(h.material=r.cyanGlow)}}const o=vn(a,{w:.92,h:.5,x:0,y:2.58,z:0,material:i===1?r.screen1:r.screen0});o.rotation.x=-.08,mt(a,{w:1.04,h:.56,d:.1,y:2.58,z:-.04,material:r.steelDark}),mt(a,{w:.65,h:.035,d:.22,x:0,y:.93,z:.47,material:r.trim,cast:!1})}addCrate(t,e,n,i){const r=this.materials,a=new Dt;a.position.set(t,n/2,e),a.rotation.y=i,this.group.add(a),mt(a,{w:n,h:n,d:n,material:r.crate}),mt(a,{w:n+.03,h:.07,d:n+.03,y:n*.28,material:r.steelDark,cast:!1}),mt(a,{w:n+.03,h:.07,d:n+.03,y:-n*.28,material:r.steelDark,cast:!1});const o=new Vt({map:Dn("AP-09",{width:128,height:64,size:32,color:"#25271a",bg:"#a79a6c"}),toneMapped:!1});vn(a,{w:n*.55,h:n*.19,z:n/2+.006,y:.04,material:o})}addCrateStack(t,e){const n=this.materials,i=[[.9,0,0],[.72,.02,.82],[.58,-.06,1.5]];for(const[r,a,o]of i){const l=new Dt;l.position.set(t+a,r/2+o,e),this.group.add(l),mt(l,{w:r,h:r,d:r,material:n.crate}),mt(l,{w:r+.02,h:.06,d:r+.02,y:r*.28,material:n.steelDark,cast:!1})}mt(this.group,{w:.85,h:.08,d:.6,x:t+.1,y:1.87,z:e,material:n.steel}),mt(this.group,{w:.3,h:.18,d:.22,x:t+.1,y:1.99,z:e,material:n.container})}addCart(t,e,n){const i=this.materials,r=new Dt;r.position.set(t,0,e),r.rotation.y=n,this.group.add(r),mt(r,{w:1.2,h:.08,d:.72,y:.9,material:i.steel}),mt(r,{w:1,h:.04,d:.55,y:.66,material:i.steel});for(const a of[-1,1])for(const o of[-1,1]){mt(r,{w:.05,h:.85,d:.05,x:a*.52,y:.45,z:o*.3,material:i.steelDark});const l=new j(new Me(.13,.13,.07,8),i.cable);l.rotation.z=Math.PI/2,l.position.set(a*.52,.13,o*.34),r.add(l)}for(let a=0;a<4;a+=1){const o=new j(new Me(.055,.055,.22,6),i.glass);o.position.set(-.3+a*.19,1.06,.05),r.add(o);const l=new j(new Me(.038,.038,.1,6),a%2?i.fluid:i.amberGlow);l.position.set(-.3+a*.19,1.02,.05),r.add(l)}mt(r,{w:.3,h:.035,d:.22,x:.05,y:.95,z:.01,material:i.trim,cast:!1})}addHoloTable(){const t=this.materials,e=new Dt;e.position.set(0,0,.75),this.group.add(e);const n=new j(new Me(1.08,1.25,.22,8),t.steelDark);n.position.y=.11,n.castShadow=!0,n.receiveShadow=!0,e.add(n),mt(e,{w:1.86,h:.08,d:1.86,y:.79,material:t.steel}),mt(e,{w:1.7,h:.045,d:1.7,y:.84,material:t.trim,cast:!1});for(const c of[-1,1])mt(e,{w:.18,h:.62,d:.65,x:c*.72,y:.46,material:t.steelDark}),mt(e,{w:.05,h:.54,d:.4,x:c*.72,y:.44,z:.28,material:t.screen0,cast:!1});const i=new Dt;i.position.y=.98,i.userData.keepUnmerged=!0,e.add(i);const r=new Vt({color:7731410,transparent:!0,opacity:.33,side:be,depthWrite:!1,wireframe:!0}),a=new j(new oi(.72,20),r);a.rotation.x=-Math.PI/2,i.add(a);for(let c=0;c<5;c+=1){const h=new j(new un(.16+c*.12,.17+c*.12,20),r);h.rotation.x=-Math.PI/2,h.position.y=.01+c*.035,i.add(h)}const o=new j(new Me(.58,.38,.65,12,1,!0),new Vt({color:6547908,transparent:!0,opacity:.05,side:be,depthWrite:!1}));o.position.y=.35,i.add(o);const l=new On(6682063,4,3,2);l.position.y=1.1,e.add(l),this.holo=i,this.holoBase=i.position.y}buildTerminal(){const t=this.materials,e=new Dt;e.position.set(0,0,2.34),this.group.add(e),mt(e,{w:.82,h:1.2,d:.48,y:.6,material:t.steelDark}),mt(e,{w:.72,h:.42,d:.03,y:.92,z:.25,material:t.screen0,cast:!1}),mt(e,{w:.64,h:.04,d:.28,y:.72,z:.35,material:t.trim,cast:!1});for(let i=0;i<3;i+=1)mt(e,{w:.04,h:.04,d:.02,x:-.18+i*.18,y:.79,z:.47,material:i===0?t.greenGlow:t.redGlow,cast:!1});const n=new On(6546108,2.2,2.1,2);n.position.set(0,1.1,.4),e.add(n),this.terminalPosition=new R(0,1,2.8),this.terminalInteractable={id:"terminal",kind:"terminal",label:"RESERVE TERMINAL",action:()=>this.callbacks.onTerminal?.(),position:this.terminalPosition,range:2.25},this.interactables.push(this.terminalInteractable),this.terminalScreen=e.children.find(i=>i.material===t.screen0),this.terminalScreen&&(this.terminalScreen.userData.keepUnmerged=!0)}mergeDoorPanels(){for(const t of this.doors)for(const e of t.panels){const n=e.group,i=new Map,r=[];for(const a of n.children){if(!a.isMesh||a===e.indicator)continue;const o=a.material;if(!o||Array.isArray(o))continue;a.updateMatrix();const l=o.uuid;i.has(l)||i.set(l,{material:o,geometries:[],cast:!1});const c=i.get(l),h=a.geometry.clone();h.applyMatrix4(a.matrix),c.geometries.push(h),c.cast=c.cast||a.castShadow,r.push(a)}for(const a of r)n.remove(a),a.geometry.dispose();for(const a of i.values()){const o=Ci(a.geometries,!1);if(!o)continue;const l=new j(o,a.material);l.castShadow=a.cast,l.receiveShadow=!0,n.add(l);for(const c of a.geometries)c.dispose()}}}mergeStaticGeometry(){this.group.updateMatrixWorld(!0);const t=new Map,e=[],n=(i,r)=>{const a=r||i.userData.keepUnmerged;if(i!==this.group&&i.isMesh&&!a){const o=i.material;if(o&&!Array.isArray(o)){const l=o.uuid;t.has(l)||t.set(l,{material:o,geometries:[],cast:!1,receive:!1});const c=t.get(l),h=i.geometry.clone();h.applyMatrix4(i.matrixWorld),c.geometries.push(h),c.cast=c.cast||i.castShadow,c.receive=c.receive||i.receiveShadow,e.push(i)}}for(const o of i.children)n(o,a)};n(this.group,!1);for(const i of e)i.parent.remove(i),i.geometry.dispose();for(const i of t.values()){if(!i.geometries.length)continue;const r=Ci(i.geometries,!1);if(!r)continue;const a=new j(r,i.material);a.castShadow=i.cast,a.receiveShadow=i.receive,this.group.add(a);for(const o of i.geometries)o.dispose()}}setTerminalObjective(t){this.terminalScreen&&(this.terminalScreen.material=new Vt({map:Dn(t,{width:256,height:128,size:18,color:"#80f3cf",bg:"#051812",subtle:!0}),toneMapped:!1}))}toggleDoor(t){t.busy||(t.target=t.target>.5?0:1,t.state=t.target>.5?"opening":"closing",t.busy=!0,t.moveTime=0,this.callbacks.onHydraulic?.(t,t.target>.5))}getNearestInteractable(t,e=null){let n=null,i=1/0;for(const r of this.interactables){if(r.kind==="door"&&r.door.busy)continue;const a=t.distanceTo(r.position);if(a>r.range)continue;let o=a;e&&(Dl.copy(r.position).sub(t).normalize(),e.dot(Dl)<.25&&a>1.1&&(o+=10)),o<i&&(i=o,n=r)}return n}isInside(t,e,n=0){return Math.abs(t)<7.5-n&&Math.abs(e)<7.5-n}isInDoorway(t,e,n=.4){for(const i of this.doors)if(Math.abs(i.pos.x)>7.2){if(Math.abs(e)<1.75+n&&Math.abs(t-i.pos.x)<1.4)return!0}else if(Math.abs(t)<1.75+n&&Math.abs(e-i.pos.z)<1.4)return!0;return!1}update(t){this.elapsed+=t;const e=this.elapsed;for(const i of this.doors){if(i.busy){i.moveTime+=t;const c=le(i.moveTime/2.9,0,1),h=V0(c);i.progress=i.target>.5?h:1-h,c>=1&&(i.progress=i.target,i.state=i.target>.5?"open":"closed",i.busy=!1)}const r=i.progress;for(const l of i.panels)l.group.position.x=l.baseX+l.side*1.48*r;const a=r>.9?7798686:r>.05?16757596:16732216;for(const l of i.indicatorMaterials)l.color.setHex(a);i.swLight.material.color.setHex(r>.9?7798686:16732216),i.leverPivot.rotation.x=Yh.damp(i.leverPivot.rotation.x,i.target>.5?-.9:0,8,t);const o=Math.sin(e*2.3+i.pos.x)*.01;i.swRing.scale.setScalar(1+o),i.collider.active=r<.52}this.holo&&(this.holo.rotation.y+=t*.17,this.holo.position.y=this.holoBase+Math.sin(e*1.2)*.035);const n=.92+Math.sin(e*11.3)*.015+Math.sin(e*3.1)*.04;this.materials.cyanGlow.color.setRGB(.47*n,1*n,.86*n)}resetDoors(){for(const t of this.doors){t.progress=0,t.target=0,t.state="closed",t.busy=!1,t.moveTime=0,t.collider.active=!0,t.leverPivot.rotation.x=0;for(const e of t.panels)e.group.position.x=e.baseX;for(const e of t.indicatorMaterials)e.color.setHex(16732216);t.swLight.material.color.setHex(16732216)}this.setTerminalObjective("M-08 // LOCAL SYSTEMS")}isDoorOpenAt(t,e){for(const n of this.doors)if(Math.abs(n.pos.x)>7.2){if(Math.abs(e)<2.1&&Math.abs(t-n.pos.x)<1.5)return n.progress>.5}else if(Math.abs(t)<2.1&&Math.abs(e-n.pos.z)<1.5)return n.progress>.5;return!1}}function ig(s,t){return new ng(s,t)}const Vs=new Ot,Nl=new se,Ul=new di,Ol=new R(1,1,1),Fl=new R;function Mn(s,t,e,n,i,r,a,o=0,l=0,c=0){const h=new Ut(t,e,n);return Ul.setFromEuler(new zn(o,l,c)),Fl.set(i,r,a),Ol.set(1,1,1),Nl.compose(Fl,Ul,Ol),h.applyMatrix4(Nl),s.push(h),h}class sg{constructor(t,e,n={}){this.scene=t,this.lab=e,this.callbacks=n,this.group=new Dt,this.group.name="JungleReserve",t.add(this.group),this.detailGroup=new Dt,this.detailGroup.name="StaticLandmarks",this.group.add(this.detailGroup),this.treeColliders=[],this.rockColliders=[],this.cores=[],this.coreBursts=[],this.elapsed=0,this.materials=this.createMaterials(),this.buildTerrain(),this.buildPaths(),this.buildExteriorBunker(),this.buildForest(),this.buildLandmarks(),this.mergeStaticDetails(),this.buildCores(),this.buildAtmosphere()}createMaterials(){return{terrain:new Rt({map:Z0(),vertexColors:!0,color:10663306,roughness:.96,metalness:.02}),dirt:new Rt({map:J0(),color:12560767,roughness:1,polygonOffset:!0,polygonOffsetFactor:-1}),bark:new Rt({map:Q0(),color:11046502,roughness:.98,metalness:.02}),leafDark:new Rt({map:Yr(),color:6126917,roughness:.9,metalness:.02}),leafMid:new Rt({map:Yr(),color:7902286,roughness:.9,metalness:.02}),leafLight:new Rt({map:Yr(),color:9677147,roughness:.9,metalness:.02}),rock:new Rt({color:5857875,roughness:1,flatShading:!0}),rockMoss:new Rt({color:4939587,roughness:1,flatShading:!0}),concrete:new Rt({map:$0(),color:9277311,roughness:.96}),metal:new Rt({map:Vc(),color:8688264,roughness:.58,metalness:.7}),rust:new Rt({map:Hc(),color:10191975,roughness:.88,metalness:.26}),hazard:new Rt({map:Gc(),color:13023052,roughness:.8}),crate:new Rt({map:Wc(),color:10389859,roughness:1}),stone:new Rt({color:6449499,roughness:.98,flatShading:!0}),stoneMoss:new Rt({color:5136454,roughness:1,flatShading:!0}),moss:new Rt({map:Js(),color:6127430,roughness:1}),core:new Rt({map:Ll(),color:11993072,emissive:4580285,emissiveMap:Ll(),emissiveIntensity:3.5,roughness:.2,metalness:.3}),coreCage:new Rt({color:2833203,roughness:.5,metalness:.8}),cyanGlow:new Vt({color:8126428,transparent:!0,opacity:.62,toneMapped:!1,side:be}),cyanGlowSoft:new Vt({color:5363896,transparent:!0,opacity:.09,toneMapped:!1,side:be,depthWrite:!1}),redGlow:new Vt({color:16730424,toneMapped:!1}),amberGlow:new Vt({color:16758367,toneMapped:!1}),sign:t=>new Vt({map:Dn(t,{width:512,height:96,size:32,color:"#bfd29b",bg:"#10160e",subtle:!0}),toneMapped:!1}),warning:new Vt({map:Ha(),toneMapped:!1})}}buildTerrain(){const n=new Ze(500,500,220,220);n.rotateX(-Math.PI/2);const i=n.attributes.position,r=new Float32Array(i.count*3),a=new Se(74471),o=new R;for(let u=0;u<i.count;u+=1){const d=i.getX(u),p=i.getZ(u),x=De(d,p);i.setY(u,x),kc(d,p,o);const g=1-le(o.y,0,1),m=.82+a.next()*.22;Vs.setRGB((.72+g*.3+(m-1)*.2)*m,(.8+(m-1)*.12)*m,(.54+g*.12)*m),r[u*3]=Vs.r,r[u*3+1]=Vs.g,r[u*3+2]=Vs.b}n.setAttribute("color",new je(r,3)),n.computeVertexNormals();const l=new j(n,this.materials.terrain);l.receiveShadow=!0,l.castShadow=!1,l.name="ReserveTerrain",this.group.add(l),this.terrain=l;const c=new un(248,470,64,8);c.rotateX(-Math.PI/2);const h=c.attributes.position;for(let u=0;u<h.count;u+=1){const d=h.getX(u),p=h.getZ(u),x=Math.hypot(d,p);x>252?h.setY(u,1.5+Math.sin(d*.03)*3+Math.cos(p*.04)*4+(x-250)*.045):h.setY(u,De(d,p))}c.computeVertexNormals();const f=new j(c,new Rt({color:2503459,roughness:1,side:be}));f.receiveShadow=!0,this.group.add(f)}buildPaths(){const t=this.materials.dirt,e=[{x:0,z:-9,dx:0,dz:-1},{x:0,z:9,dx:0,dz:1},{x:9,z:0,dx:1,dz:0},{x:-9,z:0,dx:-1,dz:0}],n=new Se(2331),i=[],r=[],a=[];for(const c of e){let h=i.length/3;const f=-c.dz,u=c.dx,d=61,p=80;for(let x=0;x<=p;x+=1){const g=x/p*d,m=Math.sin(g*.19+c.dx*3.1)*1.5+Math.sin(g*.067)*2.2,v=c.x+c.dx*g+f*m,w=c.z+c.dz*g+u*m,y=2.9+Math.sin(g*.11)*.7+n.range(-.2,.2);for(const T of[-1,1]){const b=v+f*T*y*.5,_=w+u*T*y*.5,E=De(b,_)+.035;i.push(b,E,_),r.push(x/p*8,T<0?0:1)}if(x<p){const T=h+x*2;a.push(T,T+2,T+1,T+1,T+2,T+3)}}}const o=new ye;o.setAttribute("position",new Qt(i,3)),o.setAttribute("uv",new Qt(r,2)),o.setIndex(a),o.computeVertexNormals();const l=new j(o,t);l.receiveShadow=!0,this.group.add(l)}buildExteriorBunker(){const t=this.materials,e=new Dt;e.name="BunkerExterior",this.detailGroup.add(e);const n=new j(new Ut(16.9,.65,16.9),t.concrete);n.position.y=4.82,n.castShadow=!0,n.receiveShadow=!0,e.add(n);for(let u=0;u<5;u+=1){const d=new j(new Ut(17,.1,.3),t.stoneMoss);d.position.set(0,4.5+u*.06,-8.45),d.rotation.x=.02,e.add(d)}for(const u of[-1,1])for(const d of[-1,1]){const p=new j(new Ut(1.15,5.3,1.15),t.concrete);p.position.set(u*7.9,2.55,d*7.9),p.castShadow=!0,p.receiveShadow=!0,e.add(p);const x=new j(new Ut(1.18,.75,1.18),t.moss);x.position.set(u*7.9,.5,d*7.9),e.add(x)}const i=[[-4.9,5.2,-4.4,.8,2.4,.8],[4.4,5.15,-3.8,1.3,2,1.3],[3.2,5.2,5.1,.7,2.7,.7],[-3.8,5.12,4.6,1,1.8,1]];for(const[u,d,p,x,g,m]of i){const v=new j(new Ut(x,g,m),t.rust);v.position.set(u,d,p),v.castShadow=!0,e.add(v);const w=new j(new Ut(x+.2,.15,m+.2),t.metal);w.position.set(u,d+g/2,p),e.add(w);for(let y=0;y<4;y+=1){const T=new j(new Ut(x+.08,.05,m+.08),t.rust);T.position.set(u,d-g/2+.4+y*.28,p),e.add(T)}}const r=new j(new Me(.06,.12,9,5),t.metal);r.position.set(-5.8,9.1,-1.2),e.add(r);for(let u=0;u<4;u+=1){const d=new j(new Ut(1.5-u*.18,.05,.05),t.metal);d.position.set(-5.8,7.5+u*1.1,-1.2),e.add(d)}const a=new j(new Ut(.18,.18,.18),t.redGlow);a.position.set(-5.8,13.7,-1.2),a.userData.keepUnmerged=!0,e.add(a),this.beacon=a;const o=new On(16727337,4,15,2);o.position.copy(a.position),e.add(o),this.beaconLight=o;const l=[{x:0,z:-8,ry:0},{x:0,z:8,ry:Math.PI},{x:8,z:0,ry:Math.PI/2},{x:-8,z:0,ry:-Math.PI/2}];for(const u of l){const d=new Dt;d.position.set(u.x,3.9,u.z),d.rotation.y=u.ry;const p=new j(new Ut(.85,.22,.28),t.metal);p.rotation.x=.4,d.add(p);const x=new j(new Ut(.68,.12,.04),t.amberGlow);x.position.set(0,-.02,.16),x.rotation.x=.4,d.add(x),this.group.add(d)}const c=new j(new Ze(4.6,.75),t.sign("APE PROJECT // SITE 09"));c.position.set(0,4.08,-8.36),c.rotation.y=Math.PI,e.add(c);const h=new j(new Ze(3.8,.6),t.sign("BIOHAZARD CONTAINMENT"));h.position.set(0,4.05,8.36),e.add(h);const f=new j(new Ze(3.4,.55),t.sign("DEEP RESERVE ACCESS"));f.position.set(8.36,4.02,0),f.rotation.y=Math.PI/2,e.add(f);for(const u of l){const d=new j(new Ut(u.ry===0||u.ry===Math.PI?5.2:2.8,.08,u.ry===0||u.ry===Math.PI?2.8:5.2),t.concrete);d.position.set(u.x*1.18,.02,u.z*1.18),d.receiveShadow=!0,e.add(d);const p=new j(new Ut(u.ry===0||u.ry===Math.PI?4.5:2.2,.012,u.ry===0||u.ry===Math.PI?2.2:4.5),t.hazard);p.position.set(u.x*1.18,.08,u.z*1.18),e.add(p)}}buildForest(){const t=new Se(99173),e=[],n=[],i=[],r=[],a=[],o=(h,f,u=1)=>{const d=De(h,f),p=t.range(5.2,11.2)*u,x=t.range(.52,1.18)*u;Mn(e,x,p,x,h,d+p/2,f,t.range(-.04,.04),t.range(0,Math.PI),t.range(-.04,.04));for(let w=0;w<4;w+=1){const y=w/4*Math.PI*2+t.range(-.3,.3);Mn(e,x*.4,x*.9,x*1.8,h+Math.cos(y)*x*.7,d+x*.32,f+Math.sin(y)*x*.7,0,-y,.65)}for(let w=0;w<4;w+=1){const y=t.range(0,Math.PI*2),T=t.range(1.4,3.1)*u,b=d+p*t.range(.62,.94);Mn(e,.13*u,T,.13*u,h+Math.cos(y)*T*.46,b,f+Math.sin(y)*T*.46,Math.PI/2*.86,-y+Math.PI/2,0)}const g=d+p*t.range(.82,1.02),m=t.range(2.5,4.7)*u,v=t.int(7,12);for(let w=0;w<v;w+=1){const y=t.range(0,Math.PI*2),T=t.range(0,m),b=h+Math.cos(y)*T,_=f+Math.sin(y)*T,E=g+t.range(-.3,3.1)*u,I=t.range(1.1,2.6)*u,P=t.next(),N=P<.33?n:P<.7?i:r;Mn(N,I,I*t.range(.55,.95),I,b,E,_,t.range(-.15,.15),t.range(0,Math.PI),t.range(-.15,.15)),I>1.9&&Mn(N,I*.7,I*.6,I*.7,b+t.range(-.5,.5),E+t.range(-.7,.5),_+t.range(-.5,.5),0,t.range(0,Math.PI),0)}if(t.next()>.5)for(let w=0;w<t.int(1,3);w+=1){const y=h+t.range(-m,m),T=f+t.range(-m,m),b=t.range(1.4,4.3)*u;Mn(n,.08,b,.08,y,g-b/2,T,0,0,0),Mn(i,.4,.18,.4,y,g-b,T,0,t.range(0,Math.PI),0)}a.push({x:h,z:f,radius:Math.max(.38,x*.68)})};let l=0;for(;a.length<285&&l<2400;){l+=1;const h=t.range(-238,238),f=t.range(-238,238),u=Math.hypot(h,f);if(u<21||Math.abs(h)<5.5&&Math.abs(f)<90||Math.abs(f)<5.5&&Math.abs(h)<90||u>240||this.nearPoint(h,f,-116,73,12)||this.nearPoint(h,f,142,-94,12)||this.nearPoint(h,f,47,173,12))continue;const d=1-Math.max(0,Math.sin(h*.031)*Math.cos(f*.027))*.5;t.next()>d*.84||o(h,f,t.range(.72,1.5))}const c=(h,f,u=!0)=>{if(!h.length)return null;const d=Ci(h,!1),p=new j(d,f);p.castShadow=u,p.receiveShadow=!0,this.group.add(p);for(const x of h)x.dispose();return p};c(e,this.materials.bark,!0),c(n,this.materials.leafDark,!0),c(i,this.materials.leafMid,!0),c(r,this.materials.leafLight,!0),this.treeColliders=a,this.buildUndergrowth(t),this.buildRocks(t)}buildUndergrowth(t){const e=[],n=[],i=[],r=[this.materials.leafDark,this.materials.leafMid,this.materials.leafLight];for(let a=0;a<750;a+=1){const o=t.range(-238,238),l=t.range(-238,238),c=Math.hypot(o,l);if(c<12||c>242||Math.abs(o)<3.5&&Math.abs(l)<85||Math.abs(l)<3.5&&Math.abs(o)<85)continue;const h=De(o,l),f=t.next()<.45?e:t.next()<.7?n:i,u=t.range(.35,1.25);if(f===e){const d=t.int(2,5);for(let p=0;p<d;p+=1)Mn(e,t.range(.4,1.1)*u,t.range(.3,.8)*u,t.range(.4,1)*u,o+t.range(-.45,.45)*u,h+t.range(.18,.42)*u,l+t.range(-.45,.45)*u,0,t.range(0,Math.PI),0)}else if(f===n)for(let d=0;d<5;d+=1){const p=d/5*Math.PI*2+t.range(-.3,.3);Mn(n,.08,t.range(.5,1.2)*u,.6*u,o+Math.cos(p)*.3*u,h+.3*u,l+Math.sin(p)*.3*u,.28,p,.62)}else for(let d=0;d<3;d+=1)Mn(i,.05,t.range(.8,1.7)*u,.05,o+t.range(-.3,.3)*u,h+.5*u,l+t.range(-.3,.3)*u,t.range(-.15,.15),0,t.range(-.15,.15))}for(const[a,o]of[[e,r[0]],[n,r[1]],[i,r[2]]]){if(!a.length)continue;const l=Ci(a,!1),c=new j(l,o);c.castShadow=!1,c.receiveShadow=!0,this.group.add(c);for(const h of a)h.dispose()}}buildRocks(t){const e=[],n=[];for(let i=0;i<165;i+=1){const r=t.range(-240,240),a=t.range(-240,240),o=Math.hypot(r,a);if(o<14||o>240||Math.abs(r)<4&&Math.abs(a)<70||Math.abs(a)<4&&Math.abs(r)<70)continue;const l=De(r,a),c=t.range(.35,2.2),h=new fs(c,0);if(h.scale(1,t.range(.5,.9),t.range(.75,1.2)),h.rotateY(t.range(0,Math.PI)),h.translate(r,l+c*.32,a),e.push(h),t.next()>.52){const f=new fs(c*.98,0);f.scale(1.04,.3,1.06),f.translate(r,l+c*.72,a),n.push(f)}c>1&&this.rockColliders.push({x:r,z:a,radius:c*.8})}for(const[i,r]of[[e,this.materials.rock],[n,this.materials.rockMoss]]){if(!i.length)continue;const a=Ci(i,!1),o=new j(a,r);o.castShadow=!0,o.receiveShadow=!0,this.group.add(o);for(const l of i)l.dispose()}}nearPoint(t,e,n,i,r){return Math.hypot(t-n,e-i)<r}buildLandmarks(){this.buildWatchtower(-128,83),this.buildCrashSite(154,-105),this.buildShrine(37,184)}buildWatchtower(t,e){const n=this.materials,i=De(t,e),r=new Dt;r.position.set(t,i,e),this.detailGroup.add(r);for(const g of[-1,1])for(const m of[-1,1]){const v=new j(new Ut(.42,7.5,.42),n.rust);v.position.set(g*2.1,3.75,m*2.1),v.rotation.z=g*.055,v.rotation.x=-m*.055,v.castShadow=!0,r.add(v);for(let w=0;w<4;w+=1){const y=new j(new Ut(.1,1.9,.1),n.rust);y.position.set(g*1.8,1.05+w*1.7,m*1.8),y.rotation.z=g*.55,r.add(y)}}const a=new j(new Ut(6.2,.35,6.2),n.concrete);a.position.y=7.25,a.castShadow=!0,a.receiveShadow=!0,r.add(a);for(let g=0;g<17;g+=1){const m=-3+g*.375,v=new j(new Ut(.07,1.25,.07),n.rust);v.position.set(m,8.03,3.02),r.add(v);const w=new j(new Ut(.07,1.25,.07),n.rust);w.position.set(m,8.03,-3.02),r.add(w)}const o=[[6.2,.08,.08,0,8.62,3.02],[6.2,.08,.08,0,8.62,-3.02],[.08,.08,6.2,3.02,8.62,0],[.08,.08,6.2,-3.02,8.62,0]];for(const[g,m,v,w,y,T]of o){const b=new j(new Ut(g,m,v),n.rust);b.position.set(w,y,T),r.add(b)}const l=new j(new Ut(4.6,2.4,3.6),n.rust);l.position.set(0,8.55,-.6),l.castShadow=!0,r.add(l);const c=new j(new Ut(5.2,.22,4.2),n.metal);c.position.set(0,9.9,-.6),c.rotation.z=.035,r.add(c);const h=new j(new Ze(1.6,.8),new Vt({color:1514770,toneMapped:!1}));h.position.set(0,8.7,1.22),r.add(h);const f=new j(new Me(.035,.06,5.8,5),n.metal);f.position.set(1.2,12.7,-1),r.add(f);const u=new j(new Ut(.16,.16,.16),n.redGlow);u.position.set(1.2,15.6,-1),r.add(u);const d=new On(16729648,4,12,2);d.position.copy(u.position),r.add(d);const p=t+3.7,x=e+2;this.coreAnchor0=new R(p,De(p,x),x);for(let g=0;g<3;g+=1){const m=new j(new Ut(.8,.8,.8),n.crate);m.position.set(-2.8+g*.9,.4,3.6),m.rotation.y=g*.3,m.castShadow=!0,r.add(m)}}buildCrashSite(t,e){const n=this.materials,i=De(t,e),r=new Dt;r.position.set(t,i,e),r.rotation.y=-.62,this.detailGroup.add(r);const a=new j(new Me(1.85,2.1,10.5,8),n.metal);a.rotation.z=Math.PI/2,a.rotation.y=.02,a.position.set(0,1.5,0),a.castShadow=!0,a.receiveShadow=!0,r.add(a);const o=new j(new sr(1.82,3.4,8),n.rust);o.rotation.z=-Math.PI/2,o.position.set(6.75,1.55,0),r.add(o);const l=new j(new Ut(3.4,.3,10.8),n.metal);l.position.set(-1.4,1.4,-3.1),l.rotation.z=.32,l.rotation.y=-.18,l.castShadow=!0,r.add(l);const c=new j(new Ut(2.4,.25,5.4),n.rust);c.position.set(1.6,.42,5),c.rotation.z=-.16,c.rotation.y=.5,r.add(c);const h=new j(new Ut(3.8,.25,2.6),n.metal);h.position.set(-5.1,2.25,0),h.rotation.z=.18,r.add(h);for(const m of[-1,1]){const v=new j(new Me(.6,.8,2.9,7),n.rust);v.rotation.z=Math.PI/2,v.position.set(-1.5,.9,m*3.5),r.add(v)}const f=new j(new Ut(2.8,1.2,.05),new Vt({color:659466}));f.position.set(1.2,1.55,2.02),r.add(f);for(let m=0;m<11;m+=1){const v=.25+Math.random()*.65,w=new j(new Ut(v,v*.7,v*1.3),m%3?n.metal:n.rust);w.position.set(-4+Math.random()*10,.2+Math.random()*.3,-5+Math.random()*9),w.rotation.set(Math.random(),Math.random()*3,Math.random()),w.castShadow=!0,r.add(w)}const u=new j(new sr(.7,2.2,6),new Vt({color:16747580,transparent:!0,opacity:.65,toneMapped:!1}));u.position.set(-4,.7,2.8),u.userData.keepUnmerged=!0,r.add(u);const d=new On(16739630,8,14,2);d.position.copy(u.position),r.add(d),this.fire=u,this.fireLight=d;const p=t+3.6,x=e+2.2;this.coreAnchor1=new R(p,De(p,x),x);const g=new j(new Ze(2.4,1),n.sign("WRECK // 09"));g.position.set(0,2.8,2.08),g.rotation.y=-.15,r.add(g)}buildShrine(t,e){const n=this.materials,i=De(t,e),r=new Dt;r.position.set(t,i,e),this.detailGroup.add(r),[[8.4,.5,8.4],[7.2,.55,7.2],[5.9,.65,5.9]].forEach(([h,f,u],d)=>{const p=new j(new Ut(h,f,u),d%2?n.stoneMoss:n.stone);p.position.y=f/2+d*.58,p.castShadow=!0,p.receiveShadow=!0,r.add(p)});for(let h=0;h<7;h+=1){const f=h/7*Math.PI*2,u=Math.cos(f)*5,d=Math.sin(f)*5,p=2.8+h%3*.7,x=new j(new Ut(.65,p,.65),h%2?n.stone:n.stoneMoss);x.position.set(u,1.9+p/2,d),x.rotation.y=f,x.castShadow=!0,r.add(x);const g=new j(new Ut(.95,.24,.95),n.stoneMoss);g.position.set(u,1.9+p,d),g.rotation.y=f,r.add(g)}const o=new j(new Ut(1.35,4.6,1.35),n.stoneMoss);o.position.y=4,o.castShadow=!0,r.add(o);const l=new j(new Ze(.9,1.7),new Vt({map:Dn("M",{width:64,height:128,size:64,color:"#92b986",bg:"#243023"}),toneMapped:!1}));l.position.set(0,4.2,.69),r.add(l);const c=new j(new ar(2.2,.08,5,24),n.cyanGlow);c.rotation.x=Math.PI/2,c.position.y=1.9,r.add(c),this.coreAnchor2=new R(t,De(t,e),e);for(let h=0;h<9;h+=1){const f=new j(new Ut(.3+Math.random()*.8,.25+Math.random()*.5,.3+Math.random()*.8),n.moss);f.position.set(-6+Math.random()*12,.3,-6+Math.random()*12),r.add(f)}}mergeStaticDetails(){this.detailGroup.updateMatrixWorld(!0);const t=new Map,e=[],n=(i,r)=>{const a=r||i.userData.keepUnmerged;if(i!==this.detailGroup&&i.isMesh&&!a){const o=i.material;if(o&&!Array.isArray(o)){const l=o.uuid;t.has(l)||t.set(l,{material:o,geometries:[],cast:!1,receive:!1});const c=t.get(l),h=i.geometry.clone();h.applyMatrix4(i.matrixWorld),c.geometries.push(h),c.cast=c.cast||i.castShadow,c.receive=c.receive||i.receiveShadow,e.push(i)}}for(const o of i.children)n(o,a)};n(this.detailGroup,!1);for(const i of e)i.parent.remove(i),i.geometry.dispose();for(const i of t.values()){if(!i.geometries.length)continue;const r=Ci(i.geometries,!1);if(!r)continue;const a=new j(r,i.material);a.castShadow=i.cast,a.receiveShadow=i.receive,this.detailGroup.add(a);for(const o of i.geometries)o.dispose()}}buildCores(){[{pos:this.coreAnchor0.clone(),name:"CORE 01 // OBSERVATION",landmark:"WATCHTOWER"},{pos:this.coreAnchor1.clone(),name:"CORE 02 // IMPACT",landmark:"CRASH SITE"},{pos:this.coreAnchor2.clone(),name:"CORE 03 // RELIQUARY",landmark:"SUNKEN SHRINE"}].forEach((e,n)=>{const i=new Dt;i.position.copy(e.pos),this.group.add(i);const r=n===2,a=r?1.9:0,o=new j(new Ut(1.45,r?.3:1,1.45),this.materials.coreCage);o.position.y=a+.5,o.castShadow=!0,i.add(o);const l=new j(new Ut(1.02,.12,1.02),this.materials.cyanGlow);l.position.y=a+1.04,i.add(l);const c=new Dt;c.position.y=a+1.65,i.add(c);for(let m=0;m<5;m+=1){const v=.24+(m===2?.18:0),w=new j(new Ut(v,.27,v),this.materials.core);w.position.y=(m-2)*.22,w.rotation.y=m*.35,c.add(w)}const h=new Dt;c.add(h);for(const m of[0,Math.PI/2]){const v=new j(new ar(.52,.022,4,16),this.materials.coreCage);v.rotation.x=Math.PI/2,v.rotation.z=m,h.add(v)}const f=new j(new Me(.17,.7,34,8,1,!0),this.materials.cyanGlowSoft);f.position.y=a+18,i.add(f);const u=new j(new Me(.02,.15,22,5,1,!0),new Vt({color:7602135,transparent:!0,opacity:.25,toneMapped:!1,depthWrite:!1,side:be}));u.position.y=a+11,i.add(u);const d=new j(new un(1.7,1.82,24),this.materials.cyanGlow);d.rotation.x=-Math.PI/2,d.position.y=a+.03,i.add(d);const p=new j(new un(2.6,2.64,32),this.materials.cyanGlowSoft);p.rotation.x=-Math.PI/2,p.position.y=a+.04,i.add(p);const x=new On(6750165,18,14,2);x.position.y=a+1.8,i.add(x);const g={index:n,name:e.name,landmark:e.landmark,group:i,crystal:c,beam:f,beamCore:u,groundRing:d,light:x,collected:!1,position:new R(e.pos.x,e.pos.y+a+1.65,e.pos.z),interactable:null};g.interactable={id:`core-${n}`,kind:"core",label:`RESEARCH ${e.name}`,action:()=>this.collectCore(g),position:g.position,range:2.8,core:g},this.cores.push(g)})}buildAtmosphere(){const e=new ye,n=new Float32Array(720*3),i=new Float32Array(720),r=new Se(88012);for(let l=0;l<720;l+=1)n[l*3]=r.range(-44,44),n[l*3+1]=r.range(.25,13),n[l*3+2]=r.range(-44,44),i[l]=r.range(.05,.3);e.setAttribute("position",new je(n,3));const a=new ir({map:Pl(),color:11916920,transparent:!0,opacity:.46,size:.18,sizeAttenuation:!0,depthWrite:!1,blending:as}),o=new Ba(e,a);o.frustumCulled=!1,this.scene.add(o),this.motes={points:o,speeds:i}}getNearestInteractable(t,e=null){let n=null,i=1/0;for(const r of this.cores){if(r.collected)continue;const a=r.interactable,o=t.distanceTo(a.position);if(o>a.range)continue;let l=o;if(e){const c=a.position.clone().sub(t).normalize();e.dot(c)<.2&&(l+=5)}l<i&&(i=l,n=a)}return n}collectCore(t){return t.collected?!1:(t.collected=!0,t.beam.visible=!1,t.beamCore.visible=!1,t.groundRing.visible=!1,t.light.intensity=0,t.group.visible=!1,this.spawnCoreBurst(t.position),this.callbacks.onCoreCollected?.(t),!0)}spawnCoreBurst(t){const n=new ye,i=new Float32Array(150),r=[];for(let l=0;l<50;l+=1){i[l*3]=t.x,i[l*3+1]=t.y,i[l*3+2]=t.z;const c=new R(Math.random()-.5,Math.random()*.9+.15,Math.random()-.5).normalize().multiplyScalar(2+Math.random()*4);r.push(c)}n.setAttribute("position",new je(i,3));const a=new ir({map:Pl(),color:9175008,size:.35,transparent:!0,opacity:1,depthWrite:!1,blending:as}),o=new Ba(n,a);o.frustumCulled=!1,this.scene.add(o),this.coreBursts.push({points:o,velocities:r,life:0,maxLife:1.4,positions:i})}update(t,e,n){if(this.elapsed+=t,this.beacon){const i=Math.sin(e*3.2)>.65;this.beacon.visible=i,this.beaconLight.intensity=i?4:.2}this.fire&&(this.fire.scale.y=.8+Math.sin(e*11.7)*.2+Math.sin(e*23.1)*.1,this.fire.scale.x=.85+Math.sin(e*9.1)*.1,this.fireLight.intensity=6+Math.sin(e*17.3)*2+Math.sin(e*31.1)*1);for(const i of this.cores)i.collected||(i.crystal.rotation.y+=t*.85,i.crystal.position.y+=Math.sin(e*1.7+i.index)*8e-4,i.light.intensity=16+Math.sin(e*3.3+i.index)*4,i.groundRing.rotation.z+=t*.35);if(this.motes){const i=this.motes.points;i.position.set(n.x,Math.max(0,n.y-.8),n.z);const r=i.geometry.attributes.position;for(let a=0;a<r.count;a+=1){let o=r.getX(a)+Math.sin(e*.2+a)*t*.18,l=r.getY(a)+this.motes.speeds[a]*t*.34,c=r.getZ(a)+Math.cos(e*.17+a*1.7)*t*.14;o>45&&(o=-45),c>45&&(c=-45),l>13&&(l=.2),r.setXYZ(a,o,l,c)}r.needsUpdate=!0}for(let i=this.coreBursts.length-1;i>=0;i-=1){const r=this.coreBursts[i];r.life+=t;const a=r.points.geometry.attributes.position;for(let o=0;o<a.count;o+=1)r.velocities[o].y-=5.5*t,a.setXYZ(o,a.getX(o)+r.velocities[o].x*t,a.getY(o)+r.velocities[o].y*t,a.getZ(o)+r.velocities[o].z*t);a.needsUpdate=!0,r.points.material.opacity=Math.max(0,1-r.life/r.maxLife),r.life>=r.maxLife&&(this.scene.remove(r.points),r.points.geometry.dispose(),r.points.material.dispose(),this.coreBursts.splice(i,1))}}resetCores(){for(const t of this.cores)t.collected=!1,t.group.visible=!0,t.beam.visible=!0,t.beamCore.visible=!0,t.groundRing.visible=!0,t.light.intensity=18;for(const t of this.coreBursts)this.scene.remove(t.points),t.points.geometry.dispose(),t.points.material.dispose();this.coreBursts.length=0}collidesAt(t,e,n=.4){if(Math.abs(t)>246||Math.abs(e)>246)return!0;for(const i of this.treeColliders){const r=t-i.x,a=e-i.z;if(r*r+a*a<(i.radius+n)**2)return!0}for(const i of this.rockColliders){const r=t-i.x,a=e-i.z;if(r*r+a*a<(i.radius+n)**2)return!0}return!1}}const Ji=new R,$r=new R;class rg{constructor(t,e={}){this.scene=t,this.callbacks=e,this.root=new Dt,this.root.name="ApePlayer",t.add(this.root),this.position=new R(0,0,3.5),this.velocity=new R,this.verticalVelocity=0,this.radius=.38,this.health=100,this.maxHealth=100,this.stamina=100,this.fear=0,this.yaw=Math.PI,this.visualYaw=Math.PI,this.onGround=!0,this.sprinting=!1,this.crouching=!1,this.moving=!1,this.speed=0,this.noise=0,this.noisePulse=0,this.inside=!0,this.hurtCooldown=0,this.invulnerable=0,this.dead=!1,this.stepAccum=0,this.animPhase=0,this.quadBlend=0,this.crouchBlend=0,this.walkBlend=0,this.breath=Math.random()*10,this.materials=this.createMaterials(),this.rig=this.buildModel(),this.root.add(this.rig),this.createShadow(),this.syncTransform()}createMaterials(){const t=j0();return{fur:new Rt({map:t,color:10978917,roughness:.95,metalness:.02}),furDark:new Rt({map:t,color:6706243,roughness:.98}),furLight:new Rt({map:t,color:12555886,roughness:.94}),skin:new Rt({map:Cl(),color:13739389,roughness:.9}),skinDark:new Rt({map:Cl(),color:9398350,roughness:.92}),eye:new Vt({color:15842659,toneMapped:!1}),pupil:new Vt({color:788742}),harness:new Rt({color:9140022,roughness:.78,metalness:.18}),harnessDark:new Rt({color:4013867,roughness:.85}),metal:new Rt({color:5464666,roughness:.5,metalness:.7}),led:new Vt({color:10417258,toneMapped:!1}),ledAmber:new Vt({color:16755021,toneMapped:!1}),patch:new Vt({map:Dn("AP",{width:64,height:64,size:34,color:"#d5c982",bg:"#3a3523"}),toneMapped:!1}),pack:new Rt({color:3490351,roughness:.9})}}addBox(t,e,n,i,r,a,o,l,c=!0){const h=new j(new Ut(e,n,i),l);return h.position.set(r,a,o),h.castShadow=c,h.receiveShadow=!0,t.add(h),h}makeLimb(t,e,n,i){const r=new Dt,a=this.addBox(r,e,t,e,0,-t/2,0,n),o=new Dt;o.position.y=-t,r.add(o);const l=this.addBox(o,e*.82,t*.92,e*.82,0,-t*.46,0,n),c=this.addBox(o,e*1.02,t*.2,e*.92,0,-t*.98,.03,i);return{group:r,elbow:o,upper:a,lower:l,hand:c}}buildModel(){const t=this.materials,e=new Dt;e.name="ApeRig",this.addBox(e,.56,.38,.4,0,.92,0,t.fur),this.addBox(e,.49,.12,.42,0,1.08,0,t.furDark);const n=new Dt;n.position.set(0,.94,0),e.add(n),this.torso=n,this.addBox(n,.64,.54,.44,0,.35,0,t.fur),this.addBox(n,.82,.48,.47,0,.65,0,t.fur),this.addBox(n,.58,.23,.46,0,.28,.015,t.furDark);for(let r=0;r<6;r+=1)this.addBox(n,.1+r%2*.06,.2,.08,-.18+r*.07,.56+Math.sin(r*2)*.05,.25,t.furLight,!1);this.addBox(n,.08,.58,.49,-.24,.42,0,t.harness,!1),this.addBox(n,.08,.58,.49,.24,.42,0,t.harness,!1),this.addBox(n,.66,.09,.48,0,.2,0,t.harness,!1),this.addBox(n,.42,.12,.06,0,.37,.27,t.harnessDark,!1),this.addBox(n,.1,.05,.03,-.13,.37,.305,t.led,!1),this.addBox(n,.1,.05,.03,0,.37,.305,t.ledAmber,!1),this.addBox(n,.52,.55,.24,0,.53,-.34,t.pack),this.addBox(n,.36,.1,.25,0,.83,-.37,t.harnessDark),this.addBox(n,.13,.13,.02,-.13,.55,-.475,t.led,!1),this.addBox(n,.14,.14,.015,.1,.55,-.477,t.patch,!1);const i=new Dt;i.position.set(0,.94,.015),n.add(i),this.head=i,this.addBox(i,.47,.44,.45,0,0,0,t.furDark),this.addBox(i,.5,.14,.46,0,.19,0,t.fur),this.addBox(i,.35,.24,.18,0,-.05,.28,t.skin),this.addBox(i,.27,.1,.1,0,.02,.38,t.skinDark),this.addBox(i,.09,.05,.06,-.07,-.04,.39,t.skinDark,!1),this.addBox(i,.09,.05,.06,.07,-.04,.39,t.skinDark,!1),this.addBox(i,.47,.09,.18,0,.18,.22,t.furDark,!1);for(const r of[-1,1])this.addBox(i,.075,.075,.03,r*.115,.105,.229,t.eye,!1),this.addBox(i,.035,.04,.02,r*.115,.1,.247,t.pupil,!1),this.addBox(i,.13,.19,.08,r*.285,.02,0,t.furDark);this.addBox(i,.05,.15,.02,-.16,.06,.229,t.furLight,!1),this.addBox(i,.07,.25,.36,.3,.08,0,t.harnessDark),this.addBox(i,.09,.09,.06,.3,.08,.18,t.led,!1),this.addBox(i,.035,.28,.035,.29,0,-.14,t.metal,!1),this.addBox(i,.16,.05,.05,.22,-.13,-.06,t.metal,!1),this.arms=[];for(const r of[-1,1]){const a=new Dt;a.position.set(r*.48,.66,0),n.add(a),this.addBox(a,.26,.3,.34,0,.02,0,t.fur);const o=this.makeLimb(.48,.25,t.fur,t.skin);o.group.position.y=-.04,a.add(o.group),this.addBox(o.elbow,.18,.34,.14,r*.11,-.28,0,t.furDark,!1),this.arms.push({side:r,shoulder:a,...o})}this.legs=[];for(const r of[-1,1]){const a=new Dt;a.position.set(r*.19,.85,0),e.add(a);const o=this.makeLimb(.43,.25,t.fur,t.skin);a.add(o.group),this.addBox(o.elbow,.22,.16,.34,0,-.47,.07,t.skinDark),this.legs.push({side:r,hip:a,...o})}return this.tail=new Dt,this.tail.position.set(0,1.02,-.22),e.add(this.tail),this.addBox(this.tail,.1,.28,.1,0,-.09,-.02,t.furDark),this.addBox(this.tail,.12,.12,.12,0,-.25,-.02,t.fur),this.addBox(this.arms[0].elbow,.2,.12,.22,0,-.56,.02,t.metal),this.addBox(this.arms[0].elbow,.14,.05,.17,0,-.56,.14,t.led,!1),e.traverse(r=>{r.isMesh&&(r.castShadow=!0,r.receiveShadow=!0)}),e}createShadow(){const t=new oi(.55,12),e=new Vt({color:132098,transparent:!0,opacity:.38,depthWrite:!1});this.shadow=new j(t,e),this.shadow.rotation.x=-Math.PI/2,this.shadow.renderOrder=2,this.scene.add(this.shadow)}syncTransform(){this.root.position.copy(this.position),this.root.rotation.y=this.visualYaw,this.shadow.position.set(this.position.x,li(this.position.x,this.position.z)+.025,this.position.z),this.shadow.material.opacity=this.inside?.23:.34}collidesAt(t,e,n,i){const r=this.radius;if(Math.abs(t)>246||Math.abs(e)>246)return!0;for(const a of n.colliders)if(a.active&&t+r>a.minX&&t-r<a.maxX&&e+r>a.minZ&&e-r<a.maxZ)return!0;return!!(!n.isInside(t,e,-.3)&&i.collidesAt(t,e,r))}update(t,e,n,i,r=[]){if(this.dead){this.updateAnimation(t,n);return}this.hurtCooldown=Math.max(0,this.hurtCooldown-t),this.invulnerable=Math.max(0,this.invulnerable-t);const a=e.move,o=a.lengthSq()>.01,l=!this.crouching&&this.stamina>2&&o;this.sprinting=!!e.sprint&&l,this.crouching=!!e.crouch;const c=this.crouching?1.28:this.sprinting?6.85:o?3.15:0;o&&(Ji.set(a.x,0,a.z).normalize(),this.yaw=Math.atan2(Ji.x,Ji.z));const h=o?Ji.x*c:0,f=o?Ji.z*c:0,u=o?this.sprinting?9.5:12:15;this.velocity.x=ue(this.velocity.x,h,u,t),this.velocity.z=ue(this.velocity.z,f,u,t);const d=Math.hypot(this.velocity.x,this.velocity.z);this.speed=d,this.moving=d>.12,this.sprinting?this.stamina=Math.max(0,this.stamina-t*16.5):this.stamina=Math.min(100,this.stamina+t*(this.crouching?15:10)),this.stamina<=.2&&(this.sprinting=!1);const p=this.position.x+this.velocity.x*t;this.collidesAt(p,this.position.z,n,i)?this.velocity.x*=.18:this.position.x=p;const x=this.position.z+this.velocity.z*t;this.collidesAt(this.position.x,x,n,i)?this.velocity.z*=.18:this.position.z=x;for(const E of r){if(!E||E.dead)continue;const I=this.position.x-E.position.x,P=this.position.z-E.position.z,N=Math.hypot(I,P),O=.7+E.radius;N>.001&&N<O&&(this.position.x=E.position.x+I/N*O,this.position.z=E.position.z+P/N*O)}const g=li(this.position.x,this.position.z),m=n.isInside(this.position.x,this.position.z,.15),v=m?0:g,w=this.inside;if(this.inside=m,w!==this.inside&&this.callbacks.onZoneChanged?.(this.inside),e.jump&&this.onGround&&this.stamina>4&&(this.verticalVelocity=4.1,this.onGround=!1,this.stamina=Math.max(0,this.stamina-3),this.callbacks.onJump?.()),!this.onGround)this.verticalVelocity-=17.5*t,this.position.y+=this.verticalVelocity*t,this.position.y<=v&&(this.position.y=v,this.verticalVelocity=0,this.onGround=!0,this.callbacks.onLand?.());else{const E=v;E>this.position.y+.8?this.position.y=ue(this.position.y,E,15,t):(this.position.y=ue(this.position.y,E,22,t),Math.abs(this.position.y-E)<.015&&(this.position.y=E))}const y=this.sprinting?1.05:this.crouching?1.55:1.45;if(this.moving&&this.onGround&&(this.stepAccum+=d*t,this.stepAccum>=y)){this.stepAccum=0;const E=this.sprinting?1:this.crouching?.16:.48,I=this.sprinting?62:this.crouching?7:29;this.callbacks.onFootstep?.({position:this.position.clone(),type:this.sprinting?"sprint":this.crouching?"crouch":"walk",surface:m?"metal":"dirt",loudness:E*(m?1.35:1),radius:I*(m?1.22:1)})}const T=this.sprinting?1:this.crouching?.13:this.moving?.5:.06;this.noise=ue(this.noise,T,6,t),this.noisePulse+=t*(2+this.noise*5);let b=999;for(const E of r)E&&!E.dead&&(b=Math.min(b,this.position.distanceTo(E.position)));const _=this.inside?0:le(1-(b-5)/90,0,1);this.fear=ue(this.fear,_,.7,t),this.visualYaw=Ga(this.visualYaw,this.yaw,this.onGround?13:5,t),this.updateAnimation(t,n),this.syncTransform()}updateAnimation(t,e){this.animPhase+=t*(1.1+this.speed*1.72);const n=this.sprinting&&this.speed>4.2?1:0,i=this.crouching?1:0,r=this.moving?1:0;this.quadBlend=ue(this.quadBlend,n,7,t),this.crouchBlend=ue(this.crouchBlend,i,8,t),this.walkBlend=ue(this.walkBlend,r,8,t);const a=this.quadBlend,o=this.crouchBlend,l=Math.sin(this.breath+performance.now()*.0015)*.008,c=le(this.speed/6.6,0,1),h=this.animPhase*(1+c*.25),f=(.18+c*.62)*this.walkBlend,u=(.55+c*.5)*a;this.rig.position.y=-.45*a-.25*o+(this.onGround?0:.03),this.rig.rotation.x=-.13*a,this.torso.rotation.x=.06+1.02*a+.3*o+(this.onGround?0:.16),this.torso.rotation.z=Math.sin(h)*.035*this.walkBlend*(1-a),this.torso.position.y=.94+l,this.head.rotation.x=-.86*a-.12*o+Math.sin(h*2+1)*.02*a,this.head.rotation.y=Math.sin(performance.now()*7e-4)*.06*(1-this.walkBlend),this.tail.rotation.x=.15+a*.65+Math.sin(h*1.2)*.09,this.tail.rotation.z=Math.sin(h*.8)*.1*(1-a);for(const d of this.arms){const p=d.side;if(a>.01){const x=Math.sin(h+(d.side<0?0:Math.PI));d.shoulder.rotation.x=Un(-p*.05+f*x,-.92+u*x,a),d.shoulder.rotation.z=Un(p*.03,p*.17,a),d.elbow.rotation.x=Un(-.18-f*.15,-.72-Math.max(0,x)*.36,a)}else{const x=Math.sin(h+(d.side<0?0:Math.PI));d.shoulder.rotation.x=-.04+f*x-o*.22,d.shoulder.rotation.z=p*(.03+o*.07),d.elbow.rotation.x=-.17-Math.max(0,-x)*.22-o*.14}}for(const d of this.legs){const p=Math.sin(h+(d.side<0?Math.PI:0));a>.01?(d.hip.rotation.x=Un(-p*f*.9,-u*p*.9,a),d.elbow.rotation.x=Un(.08+Math.max(0,p)*.38,.34+Math.max(0,-p)*.42,a)):(d.hip.rotation.x=-p*f*.82,d.elbow.rotation.x=.08+Math.max(0,p)*.34+o*.62,d.hip.rotation.z=d.side*o*.08)}this.legs[0].elbow.rotation.x+=o*.16,this.legs[1].elbow.rotation.x+=o*.16,!this.inside&&this.onGround?(kc(this.position.x,this.position.z,$r),this.rig.rotation.z=ue(this.rig.rotation.z,-$r.x*.32,5,t),this.rig.rotation.x=ue(this.rig.rotation.x,-.13*a+$r.z*.18,5,t)):(this.rig.rotation.z=ue(this.rig.rotation.z,0,7,t),this.rig.rotation.x=ue(this.rig.rotation.x,-.13*a,7,t)),this.rig.visible=!this.hidden}setHidden(t){this.hidden=t,this.rig.visible=!t}applyDamage(t,e=null){return this.dead||this.invulnerable>0?!1:(this.health=Math.max(0,this.health-t),this.invulnerable=.65,this.callbacks.onDamage?.(t,e),this.health<=0&&(this.dead=!0,this.callbacks.onDeath?.(e)),!0)}heal(t){this.health=Math.min(this.maxHealth,this.health+t)}reset(){this.position.set(0,0,3.5),this.velocity.set(0,0,0),this.verticalVelocity=0,this.yaw=Math.PI,this.visualYaw=Math.PI,this.health=100,this.stamina=100,this.fear=0,this.dead=!1,this.inside=!0,this.onGround=!0,this.stepAccum=0,this.noise=0,this.rig.visible=!0,this.syncTransform()}}const ag=new R,Ai=new R,Zr=new R;class og{constructor(t,e={}){this.scene=t,this.callbacks=e,this.root=new Dt,this.root.name="Mossman",t.add(this.root),this.position=new R(92,li(92,-74),-74),this.velocity=new R,this.yaw=Math.PI*.6,this.visualYaw=this.yaw,this.speed=0,this.radius=1.05,this.height=2.8,this.state="patrol",this.stateTimer=0,this.lastHeard=new R(92,0,-74),this.lastHeardAge=999,this.patrolTarget=new R(92,0,-74),this.suspicion=0,this.aggression=1,this.attackCooldown=0,this.attackTimer=0,this.roarCooldown=0,this.stepAccum=0,this.animPhase=0,this.jawOpen=0,this.chaseDuration=0,this.searchAngle=0,this.blockedTime=0,this.avoidBias=0,this.dead=!1,this.elapsed=0,this.spawnPoint=this.position.clone(),this.materials=this.createMaterials(),this.rig=this.buildModel(),this.root.add(this.rig),this.createShadow(),this.choosePatrolTarget(),this.syncTransform()}createMaterials(){return{moss:new Rt({map:Js(),color:9679995,roughness:.98,metalness:0}),mossDark:new Rt({map:Js(),color:5403975,roughness:1}),mossDeep:new Rt({color:2112293,roughness:1}),stripe:new Rt({color:1592107,roughness:1}),stripeLight:new Rt({color:2779705,roughness:1}),face:new Rt({map:tg(),color:10597757,roughness:.96}),mouth:new Vt({color:1049860}),gum:new Rt({color:4986900,roughness:.75}),teeth:new Rt({color:13090970,roughness:.65}),claw:new Rt({color:1777942,roughness:.52}),mossTuft:new Rt({map:Js(),color:4681013,roughness:1})}}addBox(t,e,n,i,r,a,o,l,c=!0,h=0,f=0,u=0){const d=new j(new Ut(e,n,i),l);return d.position.set(r,a,o),d.rotation.set(h,f,u),d.castShadow=c,d.receiveShadow=!0,t.add(d),d}addStripe(t,e,n,i,r,a,o,l=0,c=0,h=0){return this.addBox(t,e,n,i,r,a,o,this.materials.stripe,!1,l,c,h)}makeLimb(t,e,n,i){const r=new Dt,a=this.addBox(r,e,t,e,0,-t/2,0,n),o=new Dt;o.position.y=-t,r.add(o);const l=this.addBox(o,e*.85,t*.92,e*.85,0,-t*.46,0,n),c=this.addBox(o,e*1.04,t*.21,e*1,0,-t*.98,.025,i);return{group:r,elbow:o,upper:a,lower:l,end:c}}buildModel(){const t=this.materials,e=new Dt;e.name="MossmanRig",this.addBox(e,.92,.5,.62,0,1.38,0,t.moss),this.addBox(e,.82,.18,.64,0,1.61,0,t.mossDark);const n=new Dt;n.position.set(0,1.48,0),e.add(n),this.torso=n,this.addBox(n,1.02,.62,.66,0,.31,0,t.moss),this.addBox(n,1.55,.62,.8,0,.69,0,t.moss),this.addBox(n,1.24,.26,.72,0,.19,.02,t.mossDark);for(const a of[-1,1])this.addBox(n,.56,.42,.74,a*.76,.82,0,t.moss),this.addBox(n,.42,.16,.55,a*.8,1.01,0,t.mossDark);for(let a=0;a<7;a+=1){const o=.32+a*.09;this.addStripe(n,.9-a*.04,.035,.7,Math.sin(a*2.1)*.06,o,.01,0,0,(a%2?1:-1)*(.18+a*.015))}for(let a=0;a<8;a+=1)this.addStripe(n,1.1-a*.07,.028,.06,0,.72-a*.055,.39,0,0,(a%2?1:-1)*.06);this.addStripe(n,1.2,.06,.05,0,.87,.385,0,0,.1);for(let a=0;a<16;a+=1)this.addBox(n,.15+Math.random()*.3,.08+Math.random()*.18,.12+Math.random()*.24,-.7+Math.random()*1.4,.25+Math.random()*.75,-.34+Math.random()*.12,t.mossTuft,!1);this.addBox(n,.88,.62,.36,0,.62,-.44,t.mossDark);for(let a=0;a<5;a+=1)this.addBox(n,.5-a*.04,.12,.12,0,.9-a*.13,-.62,t.mossDeep,!1);const i=new Dt;i.position.set(0,1.02,.07),n.add(i),this.head=i,this.addBox(i,.72,.56,.6,0,0,0,t.mossDark),this.addBox(i,.66,.2,.64,0,.31,-.01,t.moss),this.addBox(i,.58,.39,.12,0,-.02,.31,t.face),this.addBox(i,.64,.1,.17,0,.22,.28,t.mossDeep),this.addBox(i,.46,.07,.09,0,.16,.35,t.mossDeep),this.addBox(i,.52,.16,.05,0,-.12,.365,t.mouth,!1);for(let a=0;a<9;a+=1)this.addBox(i,.042,.075,.04,-.2+a*.05,-.06,.39,t.teeth,!1);const r=new Dt;r.position.set(0,-.17,.16),i.add(r),this.jaw=r,this.addBox(r,.56,.16,.16,0,-.05,.18,t.mossDark),this.addBox(r,.46,.08,.06,0,.01,.265,t.gum,!1);for(let a=0;a<8;a+=1)this.addBox(r,.035,.06,.035,-.17+a*.048,.045,.28,t.teeth,!1);this.addStripe(i,.32,.025,.05,-.12,.1,.36,0,0,-.1),this.addStripe(i,.22,.025,.05,.18,.1,.36,0,0,.12);for(const a of[-1,1])this.addBox(i,.15,.18,.2,a*.35,-.16,.18,t.mossTuft,!1),this.addBox(i,.08,.3,.34,a*.36,.02,-.03,t.mossDark);this.mouthLight=new On(16731692,.5,2.2,2),this.mouthLight.position.set(0,-.1,.6),i.add(this.mouthLight),this.arms=[];for(const a of[-1,1]){const o=new Dt;o.position.set(a*.88,.8,0),n.add(o),this.addBox(o,.5,.58,.62,0,-.02,0,t.moss);const l=this.makeLimb(.76,.4,t.moss,t.mossDark);l.group.position.y=-.12,o.add(l.group),this.addBox(l.elbow,.46,.26,.36,0,-.77,.05,t.mossDark);for(let c=0;c<3;c+=1)this.addBox(l.elbow,.08,.16,.09,-.12+c*.12,-.9,.14,t.claw,!1,.15);for(let c=0;c<4;c+=1)this.addStripe(l.group,.41,.03,.4,0,-.16-c*.13,0,0,0,.35);for(let c=0;c<3;c+=1)this.addBox(l.group,.08,.28+Math.random()*.22,.1,a*.22,-.2-c*.17,-.05,t.mossTuft,!1);this.arms.push({side:a,shoulder:o,...l})}this.legs=[];for(const a of[-1,1]){const o=new Dt;o.position.set(a*.31,1.27,0),e.add(o);const l=this.makeLimb(.62,.42,t.moss,t.mossDark);o.add(l.group),this.addBox(l.elbow,.4,.16,.62,0,-.57,.11,t.mossDark);for(let c=0;c<3;c+=1)this.addBox(l.elbow,.1,.15,.13,-.13+c*.13,-.58,.32,t.claw,!1,.35);for(let c=0;c<4;c+=1)this.addStripe(l.group,.43,.03,.42,0,-.1-c*.13,0,0,0,-.3);this.legs.push({side:a,hip:o,...l})}for(let a=0;a<15;a+=1){const o=a%2?-1:1;this.addBox(n,.05,.18+Math.random()*.5,.05,o*(.45+Math.random()*.55),.55-Math.random()*.18,-.2+Math.random()*.5,t.mossTuft,!1)}return e.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0)}),e}createShadow(){const t=new oi(1.15,12),e=new Vt({color:132098,transparent:!0,opacity:.58,depthWrite:!1});this.shadow=new j(t,e),this.shadow.rotation.x=-Math.PI/2,this.scene.add(this.shadow)}syncTransform(){this.root.position.copy(this.position),this.root.rotation.y=this.visualYaw,this.shadow.position.set(this.position.x,li(this.position.x,this.position.z)+.03,this.position.z)}setState(t,e=""){if(this.state===t)return;const n=this.state;this.state=t,this.stateTimer=0,t==="chase"&&(this.chaseDuration=0,this.roarCooldown<=0&&(this.roarCooldown=7,this.callbacks.onRoar?.(this.position,n))),t==="alert"&&this.callbacks.onAlert?.({position:this.position.clone(),previous:n,reason:e}),this.callbacks.onStateChange?.(t,n,e)}choosePatrolTarget(){const t=Math.random()*Math.PI*2,e=70+Math.random()*120;let n=Math.cos(t)*e,i=Math.sin(t)*e;Math.hypot(n,i)<35&&(n*=2.1,i*=2.1),this.patrolTarget.set(le(n,-220,220),0,le(i,-220,220)),this.stateTimer=0}hearNoise(t){if(this.dead)return;const e=this.position.distanceTo(t.position),n=t.radius*this.aggression;if(e>n)return;const i=le(t.loudness*(1-e/n),0,1);this.lastHeard.copy(t.position),this.lastHeardAge=0,this.suspicion=le(this.suspicion+i*1.45+.12,0,1),(this.state==="patrol"||this.state==="investigate"||this.state==="search")&&(t.type==="door"&&e<90||t.type==="sprint"&&i>.32||t.type==="sprint"&&e<55?this.setState("chase",t.type):this.state!=="chase"&&(this.setState("investigate",t.type),this.stateTimer=0)),this.state==="chase"&&i>.2&&(this.lastHeard.copy(t.position),this.lastHeardAge=0),this.callbacks.onHear?.({event:t,distance:e,loudness:i})}escalate(){this.aggression=Math.min(1.55,this.aggression+.18),this.suspicion=Math.min(1,this.suspicion+.4)}isBlocked(t,e,n,i){const r=this.radius;if(Math.abs(t)>244||Math.abs(e)>244||n.isInside(t,e,-1))return!0;for(const a of n.colliders)if(a.active&&t+r>a.minX&&t-r<a.maxX&&e+r>a.minZ&&e-r<a.maxZ)return!0;return!!(!n.isInside(t,e,.3)&&i.collidesAt(t,e,r))}moveTowards(t,e,n,i,r,a){Ai.copy(t).sub(this.position),Ai.y=0;const o=Ai.length();if(o<.01)return 0;Ai.normalize();const l=Math.atan2(Ai.x,Ai.z),h=1.65-le(this.speed/9.17,0,1)*.9;let f=X0(this.yaw,l);f=le(f,-h*e,h*e),this.yaw+=f;const u=n>this.speed?3.2:4.2;this.speed=ue(this.speed,n,u,e),Zr.set(Math.sin(this.yaw),0,Math.cos(this.yaw)).multiplyScalar(this.speed),this.velocity.x=ue(this.velocity.x,Zr.x+this.avoidBias*this.speed*.35,3,e),this.velocity.z=ue(this.velocity.z,Zr.z+this.avoidBias*this.speed*.35,3,e);let d=this.position.x+this.velocity.x*e,p=this.position.z+this.velocity.z*e,x=!1;return this.isBlocked(d,this.position.z,i,r)?(x=!0,this.velocity.x*=-.08,this.avoidBias=this.avoidBias||(Math.random()>.5?1:-1)):this.position.x=d,this.isBlocked(this.position.x,p,i,r)?(x=!0,this.velocity.z*=-.08,this.avoidBias=this.avoidBias||(Math.random()>.5?1:-1)):this.position.z=p,x?(this.blockedTime+=e,this.blockedTime>.45&&(this.avoidBias=this.avoidBias>0?-1:1,this.blockedTime=0),a&&i.isInside(this.position.x,this.position.z,-2)&&this.setState("lurk","sanctuary")):(this.blockedTime=Math.max(0,this.blockedTime-e*.5),this.state!=="lurk"&&(this.avoidBias=ue(this.avoidBias,0,2.5,e))),this.position.y=li(this.position.x,this.position.z),o}update(t,e,n,i){if(this.dead)return;this.elapsed+=t,this.stateTimer+=t,this.lastHeardAge+=t,this.attackCooldown=Math.max(0,this.attackCooldown-t),this.roarCooldown=Math.max(0,this.roarCooldown-t),this.suspicion=Math.max(0,this.suspicion-t*(this.state==="chase"?.018:.04));const r=e.inside,a=this.position.distanceTo(e.position);if(!r&&a<(r?5:13)&&e.noise>.04&&(this.lastHeard.copy(e.position),this.lastHeardAge=0,this.suspicion=Math.min(1,this.suspicion+t*.6)),!r&&a<6.5&&(this.lastHeard.copy(e.position),this.lastHeardAge=0,this.state!=="chase"&&this.state!=="attack"&&this.setState("chase","proximity")),this.state==="patrol")(this.moveTowards(this.patrolTarget,t,2.15,n,i,r)<4||this.stateTimer>24)&&this.choosePatrolTarget(),this.state==="patrol"&&this.suspicion>.6&&this.setState("investigate","suspicion");else if(this.state==="investigate"){const l=this.lastHeardAge<7?this.lastHeard:this.patrolTarget;(this.moveTowards(l,t,4.25+this.aggression*.5,n,i,r)<3.4||this.stateTimer>28)&&(this.setState("search","arrived"),this.searchAngle=this.yaw)}else if(this.state==="chase"){this.chaseDuration+=t;let l=this.lastHeard.clone();const c=le(this.lastHeardAge*.8,0,4.6);if(this.lastHeardAge<2.1&&(l.x+=Math.sin(e.yaw)*c*.4,l.z+=Math.cos(e.yaw)*c*.4),r){const f=Math.hypot(this.position.x,this.position.z),u=Math.atan2(this.position.z,this.position.x)+t*.3;l.set(Math.cos(u)*12.5,0,Math.sin(u)*12.5),f<11.4&&this.setState("lurk","sanctuary")}const h=this.moveTowards(l,t,9.17,n,i,r);r&&n.isInside(this.position.x,this.position.z,-1.5)&&this.setState("lurk","sanctuary"),(this.lastHeardAge>8.5||h<2.2&&this.lastHeardAge>4.5)&&(this.setState("search","lost"),this.searchAngle=this.yaw),a<2.65&&!r&&this.startAttack(e)}else if(this.state==="search"){this.searchAngle+=t*.85;const l=this.position,c=ag.set(l.x+Math.sin(this.searchAngle)*3.8,0,l.z+Math.cos(this.searchAngle)*3.8);this.moveTowards(c,t,1.55,n,i,r),this.stateTimer>7.5&&(this.setState("patrol","search exhausted"),this.choosePatrolTarget())}else if(this.state==="lurk"){this.speed=ue(this.speed,0,6,t),this.velocity.multiplyScalar(Math.exp(-4*t));const l=Math.atan2(-this.position.z,-this.position.x);this.yaw=Ga(this.yaw,l,1.5,t),r||(this.setState("investigate","player emerged"),this.lastHeard.copy(e.position),this.lastHeardAge=0)}else this.state==="attack"&&(this.attackTimer+=t,this.speed=ue(this.speed,0,8,t),this.jawOpen=ue(this.jawOpen,1,12,t),this.attackTimer>.38&&this.attackTimer<.48&&a<3.2&&!r&&e.applyDamage(34,this)&&this.callbacks.onHit?.(this.position),this.attackTimer>1.15&&(this.setState(a<14&&!r?"chase":"search","attack recovered"),this.searchAngle=this.yaw));if(!r&&a<1.8){const l=e.position.x-this.position.x,c=e.position.z-this.position.z,h=Math.hypot(l,c)||1;e.position.x+=l/h*(1.8-a)*.2,e.position.z+=c/h*(1.8-a)*.2}if(a<75){this.stepAccum+=this.speed*t;const l=this.state==="chase"?1.75:2.3;this.stepAccum>l&&this.speed>.5&&(this.stepAccum=0,this.callbacks.onStep?.({position:this.position.clone(),intensity:this.state==="chase"?1:.45}))}this.visualYaw=Ga(this.visualYaw,this.yaw,this.state==="chase"?5.5:4.5,t),this.updateAnimation(t,e),this.syncTransform()}startAttack(t){this.attackCooldown>0||(this.attackCooldown=1.9,this.attackTimer=0,this.setState("attack","maul"),this.callbacks.onAttack?.({position:this.position.clone()}))}updateAnimation(t,e){const n=le(this.speed/9.17,0,1);this.animPhase+=t*(1+this.speed*1.38);const i=this.animPhase,r=(.2+n*.9)*le(this.speed/2,0,1),a=this.state==="chase"?1:0;this.rig.position.y=Math.sin(i*2)*.025*n,this.rig.rotation.x=.04+a*.1,this.torso.rotation.x=.08+a*.18+Math.sin(i*2)*.015*n,this.torso.rotation.z=Math.sin(i)*.06*n,this.head.rotation.x=-.04+Math.sin(i*2+1)*.025*n+(this.state==="search"?.08:0),this.head.rotation.y=this.state==="search"?Math.sin(this.elapsed*1.7)*.42:Math.sin(i*.5)*.03;const o=this.state==="attack"||this.state==="chase"?.45+Math.sin(i*2)*.18:.08+Math.sin(this.elapsed*.8)*.03;this.jawOpen=ue(this.jawOpen,o,8,t),this.jaw.rotation.x=this.jawOpen,this.mouthLight.intensity=.2+this.jawOpen*.9;for(const l of this.arms){const c=l.side,h=Math.sin(i+(c<0?0:Math.PI));l.shoulder.rotation.x=.15+h*r*.85+a*.2,l.shoulder.rotation.z=c*(.09+n*.13),l.elbow.rotation.x=-.25-Math.max(0,-h)*.35*n-a*.2,this.state==="attack"&&this.attackTimer<.5&&(l.shoulder.rotation.x=-1.35+this.attackTimer*1.4,l.elbow.rotation.x=-.2)}for(const l of this.legs){const c=Math.sin(i+(l.side<0?Math.PI:0));l.hip.rotation.x=-c*r*.78,l.elbow.rotation.x=.15+Math.max(0,c)*.55*n}this.torso.scale.setScalar(1+Math.sin(this.elapsed*1.8)*.006),this.materials.moss.emissive=this.materials.moss.emissive||new Ot(0)}getThreatInfo(t){return{state:this.state,distance:this.position.distanceTo(t.position),suspicion:this.suspicion,lastHeard:this.lastHeard,lastHeardAge:this.lastHeardAge,position:this.position,visible:this.state==="chase"||this.state==="attack"||this.state==="lurk"}}reset(){this.position.copy(this.spawnPoint),this.velocity.set(0,0,0),this.state="patrol",this.stateTimer=0,this.speed=0,this.suspicion=0,this.aggression=1,this.lastHeardAge=999,this.dead=!1,this.choosePatrolTarget(),this.syncTransform()}}const lg={0:"N",45:"NE",90:"E",135:"SE",180:"S",225:"SW",270:"W",315:"NW"},Bl={};class cg{constructor(){this.el={loading:document.getElementById("loading"),loadingFill:document.getElementById("loading-fill"),loadingStatus:document.getElementById("loading-status"),start:document.getElementById("start-screen"),startBtn:document.getElementById("start-btn"),hud:document.getElementById("hud"),brand:document.querySelector(".brand-copy"),compassStrip:document.getElementById("compass-strip"),compassDeg:document.getElementById("compass-deg"),zoneLabel:document.getElementById("zone-label"),markerRow:document.getElementById("marker-row"),objectiveTitle:document.getElementById("objective-title"),objectiveDetail:document.getElementById("objective-detail"),healthFill:document.getElementById("health-fill"),staminaFill:document.getElementById("stamina-fill"),noiseFill:document.getElementById("noise-fill"),healthValue:document.getElementById("health-value"),staminaValue:document.getElementById("stamina-value"),noiseValue:document.getElementById("noise-value"),stanceLabel:document.getElementById("stance-label"),threatPanel:document.querySelector(".threat-panel"),threatCanvas:document.getElementById("proximity-canvas"),threatState:document.getElementById("threat-state"),threatDistance:document.getElementById("threat-distance"),threatLight:document.getElementById("threat-light"),threatVignette:document.getElementById("threat-vignette"),damageFlash:document.getElementById("damage-flash"),interactWrap:document.getElementById("interact-wrap"),interactLabel:document.getElementById("interact-label"),interactAction:document.getElementById("interact-action"),alertBanner:document.getElementById("alert-banner"),toasts:document.getElementById("toasts"),subtitle:document.getElementById("subtitle"),mapOverlay:document.getElementById("map-overlay"),mapCanvas:document.getElementById("map-canvas"),mapClose:document.getElementById("map-close"),mapCoords:document.getElementById("map-coords"),pause:document.getElementById("pause-overlay"),death:document.getElementById("death-overlay"),deathDetail:document.getElementById("death-detail"),win:document.getElementById("win-overlay"),screenFade:document.getElementById("screen-fade"),crosshair:document.getElementById("crosshair"),touch:document.getElementById("touch-controls"),joyZone:document.getElementById("joy-zone"),joyKnob:document.getElementById("joy-knob"),btnInteract:document.getElementById("btn-interact"),btnCrouch:document.getElementById("btn-crouch"),btnSprint:document.getElementById("btn-sprint"),btnCamera:document.getElementById("btn-camera"),btnMap:document.getElementById("btn-map"),btnLight:document.getElementById("btn-light"),btnPause:document.getElementById("btn-pause")},this.mapCtx=this.el.mapCanvas.getContext("2d"),this.threatCtx=this.el.threatCanvas.getContext("2d"),this.mapOpen=!1,this.toastTimer=0,this.alertTimer=0,this.subtitleTimer=0,this.fadeTimer=0,this.lastVitals={},this.lastObjective=null,this.compassWidth=0,this.mapTerrain=null,this.lastMapTime=0,this.lastThreat=0,this.createCompass(),this.resize(),window.addEventListener("resize",()=>this.resize())}createCompass(){const t=document.createDocumentFragment();this.compassLabels=[];for(let e=-360;e<=720;e+=15){const n=document.createElement("i"),i=(e%360+360)%360,r=lg[i];r?(n.textContent=r,n.classList.add("cardinal")):n.textContent=e%30===0?String(Math.abs(e)%360).padStart(3,"0"):"·",t.appendChild(n),this.compassLabels.push({el:n,deg:e})}this.el.compassStrip.appendChild(t)}resize(){this.compassWidth=this.el.compassStrip.parentElement.clientWidth,this.compassWidth=Math.max(100,this.compassWidth)}setLoading(t,e){t!==void 0&&(this.el.loadingFill.style.width=`${le(t,0,100)}%`),e&&(this.el.loadingStatus.textContent=e)}hideLoading(){this.el.loading.classList.add("done")}hideStart(){this.el.start.classList.add("out"),this.el.hud.classList.remove("is-hidden")}showStart(){this.el.start.classList.remove("out"),this.el.hud.classList.add("is-hidden")}fadeBlack(t,e=600){clearTimeout(this.fadeTimer),this.el.screenFade.classList.toggle("black",t),t?this.el.screenFade.style.pointerEvents="auto":this.fadeTimer=setTimeout(()=>{this.el.screenFade.style.pointerEvents="none"},e)}toast(t,e="",n=3800){const i=document.createElement("div");for(i.className=`toast ${e}`,i.textContent=t,this.el.toasts.appendChild(i),setTimeout(()=>{i.classList.add("fade"),setTimeout(()=>i.remove(),450)},n);this.el.toasts.children.length>4;)this.el.toasts.firstChild.remove()}alert(t="AUDITORY EVENT DETECTED",e="SUBJECT M-08 IS LISTENING",n=2600){const i=this.el.alertBanner.querySelector("b"),r=this.el.alertBanner.querySelector("small");i.textContent=t,r.textContent=e,this.el.alertBanner.classList.add("show"),clearTimeout(this.alertTimer),this.alertTimer=setTimeout(()=>this.el.alertBanner.classList.remove("show"),n)}subtitle(t,e=5e3){this.el.subtitle.textContent=t,this.el.subtitle.classList.add("show"),clearTimeout(this.subtitleTimer),this.subtitleTimer=setTimeout(()=>this.el.subtitle.classList.remove("show"),e)}showDamage(){this.el.damageFlash.classList.add("active"),setTimeout(()=>this.el.damageFlash.classList.remove("active"),120)}setInteract(t,e=null){if(!t){this.el.interactWrap.classList.remove("show");return}if(this.el.interactWrap.classList.add("show"),t.kind==="term"||t.kind==="terminal")this.el.interactLabel.textContent="SITE TERMINAL // LOCAL SYSTEMS",this.el.interactAction.textContent="INSPECT TERMINAL";else if(t.kind==="core")this.el.interactLabel.textContent=t.label,this.el.interactAction.textContent="COLLECT SPECIMEN";else if(t.kind==="door"){const n=e||t.door;this.el.interactLabel.textContent=`${t.label} // LEFT SWITCH`,this.el.interactAction.textContent=n.busy?"HYDRAULIC CYCLE IN PROGRESS":n.target>.5?"CLOSE HYDRAULIC DOOR":"OPEN HYDRAULIC DOOR"}else this.el.interactLabel.textContent=t.label||"INTERACT",this.el.interactAction.textContent="ACTIVATE"}setVitals(t){const e=Math.round(t.health),n=Math.round(t.stamina),i=t.noise;this.lastVitals.hp!==e&&(this.el.healthValue.textContent=String(e).padStart(3,"0")),this.lastVitals.sp!==n&&(this.el.staminaValue.textContent=String(n).padStart(3,"0")),this.el.healthFill.style.width=`${t.health}%`,this.el.staminaFill.style.width=`${t.stamina}%`,this.el.staminaFill.style.background=n<20?"linear-gradient(90deg,#7f321f,#df7b43)":"",this.el.noiseFill.style.width=`${Math.max(6,Math.round(i*100))}%`;const r=i>.8?"CRITICAL":i>.45?"HIGH":i>.2?"LOW":"SILENT";this.lastVitals.noise!==r&&(this.el.noiseValue.textContent=r);const a=t.crouching?"CROUCHED":t.sprinting?"QUADRUPED SPRINT":t.moving?"UPRIGHT WALK":"UPRIGHT";this.lastVitals.stance!==a&&(this.el.stanceLabel.textContent=a),this.lastVitals={hp:e,sp:n,noise:r,stance:a};const o=i>.8?"#e15946":i>.45?"#e9b95f":"#76f5d0";this.el.noiseFill.style.background=`linear-gradient(90deg, #647f3f, ${o})`}setCompass(t,e,n,i,r){const a=(t%360+360)%360;this.el.compassDeg.textContent=`${String(Math.round(a)).padStart(3,"0")}°`;const o=56,l=(a+360)/15,c=this.compassWidth/2-(l*o+o/2);this.el.compassStrip.style.transform=`translateX(${c}px)`;const h=[];if(n){const u=n.cores.filter(d=>!d.collected);if(u.length){let d=u[0],p=1/0;for(const m of u){const v=e.position.distanceTo(m.position);v<p&&(p=v,d=m)}const g=this.bearing(e.position,d.position,r)<0?"◂":"▸";h.push(`${g} ${d.landmark} ${Math.round(p)}M`)}}if(i){const u=i.getThreatInfo(e);if(u.distance<85||u.state==="chase"||u.state==="lurk"||u.suspicion>.5){const p=this.bearing(e.position,u.position,r)<0?"◂":"▸";h.push(`<i class="warn"></i> M-08 ${p} ${Math.round(u.distance)}M`)}}const f=h.map(u=>`<span>${u}</span>`).join("");f!==Bl.value&&(Bl.value=f,this.el.markerRow.innerHTML=f)}bearing(t,e,n){const i=Math.cos(n),r=-Math.sin(n),a=e.x-t.x,o=e.z-t.z;return a*i+o*r}setZone(t){this.lastVitals.zone!==t&&(this.lastVitals.zone=t,this.el.zoneLabel.textContent=t)}setThreat(t,e,n,i){const r=t.distance,a=t.state==="chase"||t.state==="attack"||t.state==="lurk"||t.state==="investigate"&&r<60;this.el.threatVignette.classList.toggle("active",a&&r<90),this.el.threatLight.classList.toggle("hot",a);const l={patrol:"NO CONTACT",investigate:"ACOUSTIC CONTACT",search:"SEARCHING",chase:"HUNTING YOU",attack:"CONTACT",lurk:"AT THE THRESHOLD"}[t.state]||"NO CONTACT";this.el.threatState.textContent!==l&&(this.el.threatState.textContent=l);const c=t.state==="patrol"&&r>120?"-- M":`${Math.round(r)} M`;this.el.threatDistance.textContent!==c&&(this.el.threatDistance.textContent=c),i-this.lastThreat>.05&&(this.lastThreat=i,this.drawThreat(t,e,n,i))}drawThreat(t,e,n,i){const r=this.threatCtx,a=220,o=110;r.clearRect(0,0,a,o),r.fillStyle="rgba(3,12,7,0.32)",r.fillRect(0,0,a,o),r.strokeStyle="rgba(159,193,116,0.12)",r.lineWidth=1;for(let m=1;m<4;m+=1)r.beginPath(),r.arc(a/2,o-6,20+m*23,Math.PI*1.08,Math.PI*1.92),r.stroke();r.beginPath(),r.moveTo(10,o-6),r.lineTo(a-10,o-6),r.stroke();const l=t.position.x-e.position.x,c=t.position.z-e.position.z,h=Math.atan2(l,-c)+n,f=-Math.PI/2+h,u=le(t.distance/130,0,1),d=a/2+Math.cos(f)*u*92,p=o-6+Math.sin(f)*u*85,x=t.state==="chase"||t.state==="attack"||t.state==="lurk",g=t.state==="investigate"||t.state==="search";if(x||g||t.suspicion>.35){const m=2.5+Math.sin(i*(x?13:5))*1.2;r.fillStyle=x?"#e15946":"rgba(225,137,70,0.7)",r.beginPath(),r.arc(d,p,m,0,Math.PI*2),r.fill(),x&&(r.strokeStyle="rgba(225,89,70,0.45)",r.beginPath(),r.arc(d,p,8+Math.sin(i*3)*3,0,Math.PI*2),r.stroke())}r.fillStyle="#c9e76c",r.fillRect(a/2-2,o-10,4,7),r.fillStyle="rgba(197,220,160,0.32)",r.font="7px monospace",r.fillText("HEARING ARRAY",7,12),r.fillText("N",a/2-2,12)}setMap(t){this.mapOpen=t,this.el.mapOverlay.classList.toggle("show",t)}drawMap(t,e,n,i,r=!1){if(!this.mapOpen&&!r)return;const a=performance.now();if(!r&&a-this.lastMapTime<180)return;this.lastMapTime=a;const o=this.mapCtx,l=this.el.mapCanvas.width,c=this.el.mapCanvas.height;this.mapTerrain||this.buildMapTerrain(l,c),o.imageSmoothingEnabled=!1,o.clearRect(0,0,l,c),o.drawImage(this.mapTerrain,0,0),o.strokeStyle="rgba(165,196,128,0.08)",o.lineWidth=1;for(let x=1;x<10;x+=1)o.beginPath(),o.moveTo(x*l/10,0),o.lineTo(x*l/10,c),o.stroke(),o.beginPath(),o.moveTo(0,x*c/10),o.lineTo(l,x*c/10),o.stroke();const h=(x,g)=>[l/2+x/500*l,c/2+g/500*c];o.strokeStyle="rgba(192,169,117,0.24)",o.lineWidth=7,o.setLineDash([12,10]);for(const[x,g]of[[0,-120],[0,120],[120,0],[-120,0]]){const[m,v]=h(x,g);o.beginPath(),o.moveTo(l/2,c/2),o.lineTo(m,v),o.stroke()}o.setLineDash([]);const f=15/500*l;o.fillStyle="rgba(157,175,160,0.78)",o.fillRect(l/2-f/2,c/2-f/2,f,f),o.strokeStyle="#c9e76c",o.lineWidth=2,o.strokeRect(l/2-f/2,c/2-f/2,f,f),o.fillStyle="#c9e76c",o.font="bold 13px monospace",o.fillText("LAB",l/2-13,c/2+5);for(const x of e.cores){if(x.collected)continue;const[g,m]=h(x.position.x,x.position.z);o.fillStyle="#76f5d0",o.fillRect(g-3,m-3,6,6),o.strokeStyle="rgba(118,245,208,0.28)",o.beginPath(),o.arc(g,m,13+Math.sin(a*.003+x.index)*3,0,Math.PI*2),o.stroke(),o.fillStyle="rgba(151,229,197,0.66)",o.font="10px monospace",o.fillText(`CORE 0${x.index+1}`,g+11,m+4)}const[u,d]=h(t.position.x,t.position.z);o.save(),o.translate(u,d),o.rotate(Math.PI-t.yaw),o.fillStyle="#d8f77e",o.beginPath(),o.moveTo(0,-11),o.lineTo(7,8),o.lineTo(0,4),o.lineTo(-7,8),o.closePath(),o.fill(),o.restore(),o.strokeStyle="rgba(201,231,108,0.25)",o.beginPath(),o.arc(u,d,18,0,Math.PI*2),o.stroke();const p=n.getThreatInfo(t);if(p.distance<95||p.state==="chase"||p.state==="lurk"||p.suspicion>.65){const[x,g]=h(p.position.x,p.position.z);o.fillStyle="#e15946",o.beginPath(),o.arc(x,g,6,0,Math.PI*2),o.fill(),o.strokeStyle="rgba(225,89,70,0.4)",o.beginPath(),o.arc(x,g,13+Math.sin(a*.008)*4,0,Math.PI*2),o.stroke(),o.fillStyle="rgba(235,150,126,0.7)",o.font="10px monospace",o.fillText("M-08",x+11,g+4)}o.fillStyle="rgba(217,234,187,0.55)",o.font="bold 15px monospace",o.fillText("N",l/2-5,21),o.strokeStyle="rgba(195,223,150,0.32)",o.lineWidth=2,o.strokeRect(1,1,l-2,c-2),t&&(this.el.mapCoords.textContent=`X ${String(Math.round(t.position.x)).padStart(4,"0")} / Z ${String(Math.round(t.position.z)).padStart(4,"0")}`)}buildMapTerrain(t,e){const n=document.createElement("canvas");n.width=t,n.height=e;const i=n.getContext("2d"),r=8;for(let a=0;a<e;a+=r)for(let o=0;o<t;o+=r){const l=((o+r/2)/t-.5)*500,c=((a+r/2)/e-.5)*500,h=De(l,c),f=le(.16+h/42,.04,.46),u=le(.3+h/55,.12,.56);i.fillStyle=`rgb(${Math.floor(12+f*40)}, ${Math.floor(25+u*54)}, ${Math.floor(18+f*30)})`,i.fillRect(o,a,r,r),h>7&&(o+a)%32===0&&(i.fillStyle="rgba(137,159,104,0.1)",i.fillRect(o,a,r,r))}i.globalAlpha=.15;for(let a=0;a<250;a+=1)i.fillStyle=a%3?"#779057":"#233f25",i.fillRect(Math.floor(Math.random()*t),Math.floor(Math.random()*e),2,2);i.globalAlpha=1,this.mapTerrain=n}showPause(t){this.el.pause.classList.toggle("show",t)}showDeath(t){t&&(this.el.deathDetail.textContent=t),this.el.death.classList.add("show")}hideDeath(){this.el.death.classList.remove("show")}showWin(){this.el.win.classList.add("show")}hideWin(){this.el.win.classList.remove("show")}setObjective(t,e){const n=t>=e;this.el.objectiveTitle.innerHTML=`${n?"RETURN TO LAB TERMINAL":"RECOVER RESEARCH CORES"} <i>${t} / ${e}</i>`,this.el.objectiveDetail.textContent=n?"All cores secured. Use the laboratory terminal to restore the uplink.":"Find the remaining cores marked on your compass, then return to the lab terminal.",this.el.objectiveTitle.parentElement.classList.toggle("complete",n)}setCameraMode(t){this.el.crosshair.style.opacity=t==="first"?"0.9":"0.42"}setTouchVisible(t){this.el.touch.style.display=t?"block":"none"}}class hg{constructor(){this.ctx=null,this.ready=!1,this.master=null,this.musicBus=null,this.fxBus=null,this.reverb=null,this.noiseBuffer=null,this.ambient={},this.inside=!0,this.nextBug=1.5,this.growlCooldown=0,this.heartCooldown=0,this.dead=!1,this.muted=!1}async init(){if(this.ready){this.ctx.state==="suspended"&&await this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.78;const e=this.ctx.createDynamicsCompressor();e.threshold.value=-14,e.knee.value=22,e.ratio.value=4,e.attack.value=.004,e.release.value=.24,this.master.connect(e),e.connect(this.ctx.destination),this.musicBus=this.ctx.createGain(),this.musicBus.gain.value=.8,this.musicBus.connect(this.master),this.fxBus=this.ctx.createGain(),this.fxBus.gain.value=.95,this.fxBus.connect(this.master),await this.buildReverb(),this.noiseBuffer=this.createNoiseBuffer(4),this.startAmbience(),this.ready=!0,this.setEnvironment(!0,!0),this.ctx.state==="suspended"&&await this.ctx.resume()}async buildReverb(){const t=this.ctx.sampleRate*2.5,e=this.ctx.createBuffer(2,t,this.ctx.sampleRate);for(let i=0;i<2;i+=1){const r=e.getChannelData(i);for(let a=0;a<t;a+=1){const o=a/t;r[a]=(Math.random()*2-1)*Math.pow(1-o,3.7)*.58}}this.reverb=this.ctx.createConvolver(),this.reverb.buffer=e;const n=this.ctx.createGain();n.gain.value=.24,this.reverb.connect(n),n.connect(this.master)}createNoiseBuffer(t=2){const e=Math.floor(this.ctx.sampleRate*t),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);let r=0;for(let a=0;a<e;a+=1){const o=Math.random()*2-1;r=.985*r+.015*o,i[a]=o*.6+r*1.8}return n}noiseSource(t=1,e=!1){const n=this.ctx.createBufferSource();return n.buffer=this.noiseBuffer,n.loop=e,n.playbackRate.value=xn(Math.random,.92,1.06),e||n.start(this.ctx.currentTime,Math.random()*2,t),n}startAmbience(){const t=this.ctx.currentTime,e=(h,f,u)=>{const d=this.ctx.createOscillator(),p=this.ctx.createGain();return d.type=u,d.frequency.value=h,p.gain.value=0,d.connect(p),p.connect(this.musicBus),d.start(t),{osc:d,gain:p}};this.ambient.drone1=e(41,.035,"sine"),this.ambient.drone2=e(57.8,.018,"triangle"),this.ambient.drone3=e(82.4,.009,"sine");const n=this.noiseSource(1,!0),i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.value=460,i.Q.value=.4;const r=this.ctx.createGain();r.gain.value=0,n.connect(i),i.connect(r),r.connect(this.musicBus),n.start(t),this.ambient.wind={source:n,gain:r,filter:i};const a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type="sawtooth",a.frequency.value=31,o.gain.value=0,a.connect(o),o.connect(this.musicBus),a.start(t),this.ambient.vent={osc:a,gain:o};const l=this.ctx.createOscillator(),c=this.ctx.createGain();l.frequency.value=.075,c.gain.value=120,l.connect(c),c.connect(i.frequency),l.start(t),this.ambient.lfo=l,this.setEnvironment(!0,!0)}setEnvironment(t,e=!1){if(!this.ready)return;this.inside=t;const n=this.ctx.currentTime,i=e?.01:2.2,r=(a,o)=>{a.cancelScheduledValues(n),a.setTargetAtTime(o,n,i/3)};r(this.ambient.drone1.gain.gain,t?.035:.018),r(this.ambient.drone2.gain.gain,t?.018:.011),r(this.ambient.drone3.gain.gain,t?.009:.006),r(this.ambient.wind.gain.gain,t?.012:.052),r(this.ambient.vent.gain.gain,t?.011:.001)}setMuted(t){this.muted=t,this.ready&&this.master.gain.setTargetAtTime(t?0:.78,this.ctx.currentTime,.1)}update(t,e={}){!this.ready||this.dead||(this.nextBug-=t,!this.inside&&this.nextBug<=0&&(this.bugChirp(),this.nextBug=xn(Math.random,1.1,5.2)),this.growlCooldown-=t,e.threat>.35&&this.growlCooldown<=0&&(this.growl(e.threat*(e.distance?le(1-e.distance/95,.1,1):1)),this.growlCooldown=xn(Math.random,3.4,6.8)),this.heartCooldown-=t,e.heart>.1&&this.heartCooldown<=0&&(this.heartbeat(e.heart),this.heartCooldown=.86-e.heart*.28))}bugChirp(){if(!this.ready)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain(),i=this.ctx.createStereoPanner();e.type="sine";const r=xn(Math.random,2800,4900);e.frequency.setValueAtTime(r,t),e.frequency.setValueAtTime(r*1.28,t+.035),e.frequency.setValueAtTime(r*.9,t+.07),n.gain.setValueAtTime(0,t),n.gain.linearRampToValueAtTime(xn(Math.random,.003,.011),t+.01),n.gain.exponentialRampToValueAtTime(1e-4,t+.11),i.pan.value=xn(Math.random,-.9,.9),e.connect(n),n.connect(i),i.connect(this.fxBus),e.start(t),e.stop(t+.13)}footstep(t="dirt",e=1){if(!this.ready)return;const n=this.ctx.currentTime,i=this.ctx.createBufferSource();i.buffer=this.noiseBuffer,i.playbackRate.value=xn(Math.random,.7,1.16);const r=this.ctx.createBiquadFilter();r.type=t==="metal"?"bandpass":"lowpass",r.frequency.value=t==="metal"?xn(Math.random,480,900):xn(Math.random,260,430),r.Q.value=t==="metal"?1.2:.6;const a=this.ctx.createGain(),o=.07*e;if(a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(o,n+.008),a.gain.exponentialRampToValueAtTime(1e-4,n+.14),i.connect(r),r.connect(a),a.connect(this.fxBus),a.connect(this.reverb),i.start(n,Math.random()*2,.16),t==="metal"){const l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type="sine",l.frequency.value=xn(Math.random,140,240),c.gain.setValueAtTime(o*.22,n),c.gain.exponentialRampToValueAtTime(1e-4,n+.2),l.connect(c),c.connect(this.fxBus),l.start(n),l.stop(n+.22)}}hydraulic(t=!0){if(!this.ready)return;const e=this.ctx.currentTime,n=2.5,i=this.ctx.createBufferSource();i.buffer=this.noiseBuffer,i.loop=!0;const r=this.ctx.createBiquadFilter();r.type="bandpass",r.frequency.setValueAtTime(t?1800:1100,e),r.frequency.linearRampToValueAtTime(t?2600:1800,e+.4),r.frequency.exponentialRampToValueAtTime(t?700:950,e+n),r.Q.value=.7;const a=this.ctx.createGain();a.gain.setValueAtTime(0,e),a.gain.linearRampToValueAtTime(.055,e+.06),a.gain.exponentialRampToValueAtTime(1e-4,e+n),i.connect(r),r.connect(a),a.connect(this.fxBus),a.connect(this.reverb),i.start(e,Math.random()*2),i.stop(e+n+.1);const o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type="sawtooth",o.frequency.setValueAtTime(t?38:46,e),o.frequency.linearRampToValueAtTime(t?52:62,e+.8),o.frequency.linearRampToValueAtTime(t?42:48,e+n),l.gain.setValueAtTime(0,e),l.gain.linearRampToValueAtTime(.025,e+.15),l.gain.exponentialRampToValueAtTime(1e-4,e+n);const c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.value=210,o.connect(c),c.connect(l),l.connect(this.fxBus),o.start(e),o.stop(e+n);const h=this.ctx.createOscillator(),f=this.ctx.createGain();h.type="triangle",h.frequency.setValueAtTime(72,e+n-.18),h.frequency.exponentialRampToValueAtTime(32,e+n),f.gain.setValueAtTime(0,e+n-.2),f.gain.linearRampToValueAtTime(.09,e+n-.15),f.gain.exponentialRampToValueAtTime(1e-4,e+n),h.connect(f),f.connect(this.fxBus),h.start(e+n-.22),h.stop(e+n+.05)}switchClick(){if(!this.ready)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="square",e.frequency.setValueAtTime(900,t),e.frequency.exponentialRampToValueAtTime(180,t+.035),n.gain.setValueAtTime(.04,t),n.gain.exponentialRampToValueAtTime(1e-4,t+.06),e.connect(n),n.connect(this.fxBus),e.start(t),e.stop(t+.07)}pickup(){if(!this.ready)return;const t=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((e,n)=>{const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type=n%2?"sine":"triangle",i.frequency.value=e;const a=t+n*.07;r.gain.setValueAtTime(0,a),r.gain.linearRampToValueAtTime(.04,a+.01),r.gain.exponentialRampToValueAtTime(1e-4,a+.45),i.connect(r),r.connect(this.fxBus),i.start(a),i.stop(a+.5)})}terminal(){if(!this.ready)return;const t=this.ctx.currentTime;for(let e=0;e<3;e+=1){const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="square",n.frequency.value=880+e*220;const r=t+e*.12;i.gain.setValueAtTime(.018,r),i.gain.exponentialRampToValueAtTime(1e-4,r+.09),n.connect(i),i.connect(this.fxBus),n.start(r),n.stop(r+.1)}}heartbeat(t=1){if(!this.ready)return;const e=this.ctx.currentTime;for(let n=0;n<2;n+=1){const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine";const a=e+n*.15;i.frequency.setValueAtTime(55,a),i.frequency.exponentialRampToValueAtTime(32,a+.14),r.gain.setValueAtTime(0,a),r.gain.linearRampToValueAtTime(.04*t,a+.015),r.gain.exponentialRampToValueAtTime(1e-4,a+.3),i.connect(r),r.connect(this.fxBus),i.start(a),i.stop(a+.34)}}growl(t=.7){if(!this.ready)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createOscillator(),r=this.ctx.createGain(),a=this.ctx.createBiquadFilter();n.type="sawtooth",i.type="square",n.frequency.setValueAtTime(34+Math.random()*9,e),n.frequency.linearRampToValueAtTime(46+Math.random()*8,e+.5),n.frequency.linearRampToValueAtTime(31,e+1.2),i.frequency.value=51,a.type="lowpass",a.frequency.setValueAtTime(180,e),a.frequency.linearRampToValueAtTime(380,e+.35),a.frequency.linearRampToValueAtTime(130,e+1.2),r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.035*t,e+.12),r.gain.linearRampToValueAtTime(.02*t,e+.7),r.gain.exponentialRampToValueAtTime(1e-4,e+1.3),n.connect(a),i.connect(a),a.connect(r),r.connect(this.fxBus),r.connect(this.reverb),n.start(e),i.start(e),n.stop(e+1.32),i.stop(e+1.32)}roar(){if(!this.ready)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createOscillator(),i=this.ctx.createBufferSource();i.buffer=this.noiseBuffer;const r=this.ctx.createBiquadFilter();r.type="bandpass",r.frequency.value=420,r.Q.value=.8;const a=this.ctx.createGain();a.gain.setValueAtTime(.06,t),a.gain.exponentialRampToValueAtTime(1e-4,t+1.3),i.connect(r),r.connect(a),a.connect(this.fxBus);const o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(1100,t),o.frequency.exponentialRampToValueAtTime(270,t+1.1);const l=this.ctx.createGain();l.gain.setValueAtTime(0,t),l.gain.linearRampToValueAtTime(.12,t+.06),l.gain.linearRampToValueAtTime(.09,t+.8),l.gain.exponentialRampToValueAtTime(1e-4,t+1.5),e.type="sawtooth",n.type="square",e.frequency.setValueAtTime(58,t),e.frequency.linearRampToValueAtTime(88,t+.2),e.frequency.linearRampToValueAtTime(42,t+1.2),n.frequency.setValueAtTime(70,t),n.frequency.linearRampToValueAtTime(106,t+.2),n.frequency.linearRampToValueAtTime(50,t+1.2),e.connect(o),n.connect(o),o.connect(l),l.connect(this.fxBus),l.connect(this.reverb),e.start(t),n.start(t),i.start(t,Math.random(),1.5),e.stop(t+1.55),n.stop(t+1.55)}impact(){if(!this.ready)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain(),i=this.ctx.createBiquadFilter();e.type="sawtooth",e.frequency.setValueAtTime(110,t),e.frequency.exponentialRampToValueAtTime(32,t+.4),i.type="lowpass",i.frequency.value=380,n.gain.setValueAtTime(.16,t),n.gain.exponentialRampToValueAtTime(1e-4,t+.55),e.connect(i),i.connect(n),n.connect(this.fxBus),e.start(t),e.stop(t+.58);const r=this.noiseSource(.34),a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.value=1e3;const o=this.ctx.createGain();o.gain.value=.12,r.connect(a),a.connect(o),o.connect(this.fxBus)}ui(t=!0){if(!this.ready)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="square",n.frequency.value=t?660:420,i.gain.setValueAtTime(.012,e),i.gain.exponentialRampToValueAtTime(1e-4,e+.06),n.connect(i),i.connect(this.fxBus),n.start(e),n.stop(e+.07)}alarm(){if(!this.ready)return;const t=this.ctx.currentTime;for(let e=0;e<2;e+=1){const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(320,t+e*.48),n.frequency.linearRampToValueAtTime(620,t+e*.48+.28),n.frequency.linearRampToValueAtTime(320,t+e*.48+.46);const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=1200,i.gain.setValueAtTime(.03,t+e*.48),i.gain.exponentialRampToValueAtTime(1e-4,t+e*.48+.46),n.connect(r),r.connect(i),i.connect(this.fxBus),n.start(t+e*.48),n.stop(t+e*.48+.48)}}death(){if(!this.ready)return;this.dead=!0,this.roar();const t=this.ctx.currentTime;this.master.gain.cancelScheduledValues(t),this.master.gain.setValueAtTime(.78,t),this.master.gain.exponentialRampToValueAtTime(1e-4,t+3.2),this.ambient.drone1.gain.gain.setTargetAtTime(.001,t,.6),this.ambient.wind.gain.gain.setTargetAtTime(.001,t,.6)}victory(){if(!this.ready)return;const t=this.ctx.currentTime;[329.63,392,493.88,659.25,783.99].forEach((e,n)=>{const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="triangle",i.frequency.value=e;const a=t+n*.16;r.gain.setValueAtTime(0,a),r.gain.linearRampToValueAtTime(.035,a+.04),r.gain.exponentialRampToValueAtTime(1e-4,a+1.2),i.connect(r),r.connect(this.fxBus),i.start(a),i.stop(a+1.3)})}reset(){if(this.dead=!1,!this.ready)return;const t=this.ctx.currentTime;this.master.gain.cancelScheduledValues(t),this.master.gain.setTargetAtTime(.78,t,.2),this.setEnvironment(!0,!0)}}class ug{constructor(t,e=150){this.max=e,this.scene=t,this.mesh=new gu(new Ut(1,1,1),new Rt({vertexColors:!0,roughness:.95,metalness:.02}),e),this.mesh.instanceMatrix.setUsage(Ao),this.mesh.instanceColor=new Oa(new Float32Array(e*3),3),this.mesh.instanceColor.setUsage(Ao),this.mesh.frustumCulled=!1,this.mesh.castShadow=!1,this.mesh.receiveShadow=!0,t.add(this.mesh),this.items=[],this.cursor=0,this.dummy=new ge,this.color=new Ot;for(let n=0;n<e;n+=1)this.items.push({active:!1,pos:new R,vel:new R,rot:new R,rotVel:new R,size:.08,life:0,maxLife:1,sleeping:!1}),this.dummy.position.set(0,-100,0),this.dummy.scale.setScalar(0),this.dummy.updateMatrix(),this.mesh.setMatrixAt(n,this.dummy.matrix),this.mesh.setColorAt(n,this.color.setHex(7829350));this.mesh.instanceMatrix.needsUpdate=!0}spawnBurst(t,e={}){const n=e.count??8,i=e.colors??[5920313,3951917,7893583,2833957],r=e.power??2.2,a=e.size??.07,o=e.spread??.45;for(let l=0;l<n;l+=1){const c=this.items[this.cursor];this.cursor=(this.cursor+1)%this.max,c.active=!0,c.pos.set(t.x+(Math.random()-.5)*o,t.y+(e.height??.08)+Math.random()*.18,t.z+(Math.random()-.5)*o);const h=Math.random()*Math.PI*2,f=Math.random()*r+(e.forward?r*.55:.1);c.vel.set(Math.cos(h)*f*(e.dir?.x??0)+Math.cos(h)*Math.random()*.6,Math.random()*r*.7+(e.up??.6),Math.sin(h)*f*(e.dir?.z??0)+Math.sin(h)*Math.random()*.6),e.dir&&(c.vel.x+=e.dir.x*f*.5,c.vel.z+=e.dir.z*f*.5),c.rot.set(Math.random()*3,Math.random()*3,Math.random()*3),c.rotVel.set((Math.random()-.5)*9,(Math.random()-.5)*9,(Math.random()-.5)*9),c.size=a*(.6+Math.random()*.9),c.life=0,c.maxLife=e.life??1.8+Math.random()*1.4,c.sleeping=!1,c.gravity=e.gravity??13,this.color.setHex(i[Math.floor(Math.random()*i.length)]),this.mesh.setColorAt(this.items.indexOf(c),this.color)}this.mesh.instanceColor.needsUpdate=!0}spawnShards(t,e=18){this.spawnBurst(t,{count:e,colors:[10354656,6481345,14155764,3717276],power:4.4,size:.1,spread:.3,up:1.3,gravity:10,life:2.1})}update(t){let e=!1;for(let n=0;n<this.items.length;n+=1){const i=this.items[n];if(!i.active)continue;if(e=!0,i.life+=t,!i.sleeping){i.vel.y-=i.gravity*t,i.pos.addScaledVector(i.vel,t),i.rot.addScaledVector(i.rotVel,t);const o=li(i.pos.x,i.pos.z)+i.size*.35;i.pos.y<o&&(i.pos.y=o,Math.abs(i.vel.y)>.7?(i.vel.y*=-.28,i.vel.x*=.55,i.vel.z*=.55,i.rotVel.multiplyScalar(.6)):i.sleeping=!0)}const r=Math.min(1,i.life/.12)*Math.max(0,1-i.life/i.maxLife),a=i.size*(.5+r*.5);this.dummy.position.copy(i.pos),this.dummy.rotation.set(i.rot.x,i.rot.y,i.rot.z),this.dummy.scale.setScalar(Math.max(.001,a)),this.dummy.updateMatrix(),this.mesh.setMatrixAt(n,this.dummy.matrix),i.life>=i.maxLife&&(i.active=!1,this.dummy.scale.setScalar(0),this.dummy.updateMatrix(),this.mesh.setMatrixAt(n,this.dummy.matrix))}e&&(this.mesh.instanceMatrix.needsUpdate=!0)}}class dg{constructor(t,e=10){this.scene=t,this.items=[];for(let n=0;n<e;n+=1){const i=new Vt({color:12183181,transparent:!0,opacity:0,side:be,depthWrite:!1,blending:as}),r=new j(new un(.92,1,40),i);r.rotation.x=-Math.PI/2,r.visible=!1,r.renderOrder=3,t.add(r),this.items.push({mesh:r,life:0,maxLife:1,startRadius:.5,endRadius:10,active:!1})}this.cursor=0}pulse(t,e=12,n=12183181,i=1.1,r=.04){const a=this.items[this.cursor];this.cursor=(this.cursor+1)%this.items.length,a.active=!0,a.life=0,a.maxLife=i,a.startRadius=.6,a.endRadius=e,a.mesh.position.set(t.x,li(t.x,t.z)+r,t.z),a.mesh.material.color.setHex(n),a.mesh.material.opacity=.7,a.mesh.scale.setScalar(.6),a.mesh.visible=!0}update(t){for(const e of this.items){if(!e.active)continue;e.life+=t;const n=Math.min(1,e.life/e.maxLife),i=1-(1-n)**2,r=e.startRadius+(e.endRadius-e.startRadius)*i;e.mesh.scale.setScalar(r),e.mesh.material.opacity=.65*(1-n)**1.7,n>=1&&(e.active=!1,e.mesh.visible=!1)}}}class fg{constructor(){this.amount=0,this.time=0}add(t){this.amount=Math.max(this.amount,t)}update(t){this.amount=Math.max(0,this.amount-t*1.7),this.time+=t}offset(t){if(this.amount<=.001)return t.set(0,0,0);const e=this.time*35;return t.set(Math.sin(e*1.13)*this.amount*.05,Math.cos(e*1.77)*this.amount*.05,Math.sin(e*.83)*this.amount*.03)}}const zl=new R,kl=new R,Ws=new R,ai=new R,Sn=new R,$e=new R,Xs=new R,Gl=new R,Hl=new R;class pg{constructor(){this.ui=new cg,this.canvas=document.getElementById("game-canvas"),this.audio=new hg,this.clock=new Yu,this.state="boot",this.keys=new Set,this.camYaw=0,this.orbitPitch=.24,this.cameraMode="third",this.pointerLocked=!1,this.hadPointerLock=!1,this.suppressPause=!1,this.mouseDrag=!1,this.isTouch=window.matchMedia("(pointer: coarse)").matches,this.touchMove={x:0,y:0,active:!1},this.touchSprint=!1,this.crouchToggle=!1,this.jumpQueued=!1,this.currentInteractable=null,this.runTime=0,this.runStartedAt=0,this.deathTime=0,this.deathDuration=3.4,this.introAngle=0,this.introCamera=new R,this.firstOutside=!1,this.firstChase=!1,this.firstLurk=!1,this.heardCooldown=0,this.chaseCount=0,this.doorsTouched=0,this.lastCoreToast=0,this.snapCamera=!0,this.fpBob=0,this.effects={},this.frameId=0,this.shake=new fg,this.resize=this.resize.bind(this),this.animate=this.animate.bind(this),window.addEventListener("resize",this.resize),this.bindUI(),this.boot()}async boot(){try{this.initRenderer(),this.initScene(),this.ui.setLoading(12,"CARVING VOXEL TERRAIN // 012"),await this.frameWait(),this.effects.voxels=new ug(this.scene,160),this.effects.waves=new dg(this.scene,10),await this.frameWait(),this.ui.setLoading(28,"FORGING SUBTERRANEAN LOBBY // 028"),this.lab=ig(this.scene,{onHydraulic:(t,e)=>this.onHydraulic(t,e),onTerminal:()=>this.onTerminal()}),this.ui.setLoading(48,"GROWING 500 × 500 M RESERVE // 048"),await this.frameWait(),this.jungle=new sg(this.scene,this.lab,{onCoreCollected:t=>this.onCoreCollected(t)}),this.ui.setLoading(68,"ASSEMBLING APE-PRIME RIG // 068"),await this.frameWait(),this.player=new rg(this.scene,{onFootstep:t=>this.onFootstep(t),onDamage:(t,e)=>this.onPlayerDamage(t,e),onDeath:t=>this.onPlayerDeath(t),onZoneChanged:t=>this.onZoneChanged(t),onJump:()=>this.onJump(),onLand:()=>this.onLand()}),this.ui.setLoading(82,"WAKING SUBJECT M-08 // 082"),await this.frameWait(),this.mossman=new og(this.scene,{onRoar:(t,e)=>this.onMossmanRoar(t,e),onAlert:t=>this.onMossmanAlert(t),onStateChange:(t,e,n)=>this.onMossmanState(t,e,n),onHear:t=>this.onMossmanHear(t),onStep:t=>this.onMossmanStep(t),onAttack:t=>this.onMossmanAttack(t),onHit:t=>this.onMossmanHit(t)}),this.ui.setLoading(94,"CALIBRATING ACOUSTIC ARRAY // 094"),await this.frameWait(),this.buildFpArms(),this.ui.setObjective(0,this.jungle.cores.length),this.lab.setTerminalObjective(`CORES SECURED 0/${this.jungle.cores.length} // UPLINK OFFLINE`),this.ui.setLoading(100,"LINK ESTABLISHED // AWAITING OPERATOR"),this.resize(),this.snapIntroCamera(),this.state="title",this.ui.showStart(),this.ui.hideLoading(),document.body.classList.add("ready"),window.__APE_PROJECT__=this,this.clock.start(),requestAnimationFrame(this.animate)}catch(t){console.error(t),this.ui.setLoading(100,"LINK FAILURE // CHECK WEBGL SUPPORT");const e=document.getElementById("loading-status");e&&(e.textContent=`LINK FAILURE: ${t.message}`)}}frameWait(){return new Promise(t=>requestAnimationFrame(()=>setTimeout(t,20)))}initRenderer(){const t=new H0({canvas:this.canvas,antialias:!1,powerPreference:"high-performance",alpha:!1,stencil:!1});t.outputColorSpace=Xe,t.toneMapping=Wa,t.toneMappingExposure=1.03,t.shadowMap.enabled=!0,t.shadowMap.type=ts,t.autoClear=!0,this.renderer=t,this.camera=new Je(62,1,.07,760),this.camera.position.set(4.8,2.6,5.2),this.camera.lookAt(0,1.5,.2)}initScene(){const t=new ou;t.background=new Ot(726032),t.fog=new eo(1846050,.0088),this.scene=t;const e=new Gu(10206602,1186578,1.25);t.add(e),this.hemi=e;const n=new al(16765088,2.15);n.position.set(55,85,32),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.camera.near=1,n.shadow.camera.far=220,n.shadow.camera.left=-68,n.shadow.camera.right=68,n.shadow.camera.top=68,n.shadow.camera.bottom=-68,n.shadow.bias=-5e-4,n.shadow.normalBias=.03,t.add(n),t.add(n.target),this.sun=n;const i=new al(7186832,.48);i.position.set(-60,34,-30),t.add(i),this.buildSky(),this.buildFlashlight()}buildSky(){const t=new rr(520,32,18),e=new Qn({side:Ve,depthWrite:!1,fog:!1,uniforms:{topColor:{value:new Ot(397335)},horizonColor:{value:new Ot(3821369)},sunColor:{value:new Ot(8290910)}},vertexShader:`
        varying vec3 vWorld;
        void main() {
          vec4 world = modelMatrix * vec4(position, 1.0);
          vWorld = world.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 topColor;
        uniform vec3 horizonColor;
        uniform vec3 sunColor;
        varying vec3 vWorld;
        void main() {
          vec3 dir = normalize(vWorld);
          float h = clamp(dir.y * 1.35 + 0.08, 0.0, 1.0);
          vec3 col = mix(horizonColor, topColor, pow(h, 0.67));
          float glow = pow(max(0.0, dot(dir, normalize(vec3(-0.45, 0.3, -0.84)))), 18.0);
          col += sunColor * glow * 0.25;
          float dither = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
          col += (dither - 0.5) * 0.014;
          gl_FragColor = vec4(col, 1.0);
        }
      `});this.sky=new j(t,e),this.scene.add(this.sky);const n=new j(new rr(7.2,16,10),new Vt({color:12240284,fog:!1,toneMapped:!1}));n.position.set(-180,205,-330),this.scene.add(n),this.moon=n;const i=340,r=new ye,a=new Float32Array(i*3);for(let l=0;l<i;l+=1){const c=Math.random()*Math.PI*2,h=Math.random()*Math.PI*.24,f=430;a[l*3]=Math.cos(c)*Math.sin(h+.12)*f,a[l*3+1]=Math.cos(h)*f*.85+50,a[l*3+2]=Math.sin(c)*Math.sin(h+.12)*f}r.setAttribute("position",new je(a,3));const o=new Ba(r,new ir({color:13161902,size:1.2,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.62}));o.frustumCulled=!1,this.scene.add(o)}buildFlashlight(){const t=new Vu(16769712,0,46,.52,.62,1.6);t.position.set(0,2,0),this.scene.add(t),this.scene.add(t.target),this.flashlight=t,this.flashlightOn=!1}buildFpArms(){const t=new Dt;t.position.set(0,-.28,-.48);const e=new Rt({color:3878177,roughness:.95}),n=new Rt({color:10451289,roughness:.9});for(const i of[-1,1]){const r=new Dt;r.position.set(i*.26,0,0);const a=new j(new Ut(.09,.27,.09),e);a.position.set(0,-.06,.07),a.rotation.x=-.65,a.rotation.z=i*.16,r.add(a);const o=new j(new Ut(.115,.12,.12),n);o.position.set(i*-.025,.015,-.06),r.add(o),t.add(r)}this.camera.add(t),this.fpArms=t,this.fpArms.visible=!1}bindUI(){document.getElementById("start-btn").addEventListener("click",()=>this.startSession()),document.getElementById("resume-btn").addEventListener("click",()=>this.resume()),document.getElementById("restart-btn").addEventListener("click",()=>this.restartRun()),document.getElementById("retry-btn").addEventListener("click",()=>this.restartRun()),document.getElementById("win-retry-btn").addEventListener("click",()=>this.restartRun()),document.getElementById("map-close").addEventListener("click",()=>this.closeMap()),window.addEventListener("keydown",t=>this.onKeyDown(t)),window.addEventListener("keyup",t=>this.keys.delete(t.code)),window.addEventListener("mousemove",t=>this.onMouseMove(t)),window.addEventListener("mouseup",()=>{this.mouseDrag=!1}),this.canvas.addEventListener("mousedown",t=>{this.state==="playing"&&t.button===0&&!this.pointerLocked&&!this.isTouch&&(this.mouseDrag=!0,this.requestPointerLock())}),document.addEventListener("pointerlockchange",()=>{this.pointerLocked=document.pointerLockElement===this.canvas,this.pointerLocked?this.hadPointerLock=!0:this.hadPointerLock&&this.state==="playing"&&!this.suppressPause&&this.pause(),this.suppressPause=!1}),this.bindTouch(),document.addEventListener("contextmenu",t=>t.preventDefault()),window.addEventListener("blur",()=>{this.state==="playing"&&this.pause()})}bindTouch(){const t=this.ui.el.joyZone,e=this.ui.el.joyKnob,n=document.getElementById("look-zone");let i=null,r=null,a=0,o=0;const l=38,c=d=>{const p=t.getBoundingClientRect(),x=p.left+p.width/2,g=p.top+p.height/2;let m=d.clientX-x,v=d.clientY-g;const w=Math.hypot(m,v);w>l&&(m=m/w*l,v=v/w*l),e.style.transform=`translate(calc(-50% + ${m}px), calc(-50% + ${v}px))`,this.touchMove.x=m/l,this.touchMove.y=v/l,this.touchMove.active=!0},h=()=>{i=null,this.touchMove.x=0,this.touchMove.y=0,this.touchMove.active=!1,e.style.transform="translate(-50%, -50%)"};t.addEventListener("pointerdown",d=>{i=d.pointerId,t.setPointerCapture(d.pointerId),c(d)}),t.addEventListener("pointermove",d=>{i===d.pointerId&&c(d)}),t.addEventListener("pointerup",h),t.addEventListener("pointercancel",h),n.addEventListener("pointerdown",d=>{r=d.pointerId,a=d.clientX,o=d.clientY,n.setPointerCapture(d.pointerId)}),n.addEventListener("pointermove",d=>{if(r!==d.pointerId)return;const p=d.clientX-a,x=d.clientY-o;a=d.clientX,o=d.clientY,this.camYaw-=p*.006,this.orbitPitch=le(this.orbitPitch+x*.004,.02,1.05)}),n.addEventListener("pointerup",()=>{r=null}),n.addEventListener("pointercancel",()=>{r=null});const f=this.ui.el.btnSprint;f.addEventListener("pointerdown",d=>{d.preventDefault(),this.touchSprint=!0,f.classList.add("on")});const u=()=>{this.touchSprint=!1,f.classList.remove("on")};f.addEventListener("pointerup",u),f.addEventListener("pointercancel",u),this.ui.el.btnCrouch.addEventListener("click",()=>this.toggleCrouch()),this.ui.el.btnCamera.addEventListener("click",()=>this.toggleCamera()),this.ui.el.btnInteract.addEventListener("click",()=>this.tryInteract()),this.ui.el.btnLight.addEventListener("click",()=>this.toggleFlashlight()),this.ui.el.btnMap.addEventListener("click",()=>{this.state==="playing"?this.openMap():this.state==="map"&&this.closeMap()}),this.ui.el.btnPause.addEventListener("click",()=>this.pause())}resize(){if(!this.renderer)return;const t=window.innerWidth,e=window.innerHeight,i=Math.min(t,960)/t,r=Math.max(320,Math.round(t*i)),a=Math.max(180,Math.round(e*i));this.renderer.setSize(r,a,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.ui&&this.ui.resize()}snapIntroCamera(){this.camera.fov=54,this.camera.updateProjectionMatrix(),this.camera.position.set(4.8,2.55,5.25),this.camera.lookAt(0,1.45,.2)}startSession(){this.state==="title"&&(this.audio.init(),this.state="playing",this.runStartedAt=performance.now(),this.runTime=0,this.ui.hideStart(),this.ui.setCameraMode("third"),this.camera.fov=62,this.camera.updateProjectionMatrix(),this.snapCamera=!0,this.crouchToggle=!1,this.player.setHidden(!1),this.fpArms.visible=!1,this.isTouch||this.requestPointerLock(),this.ui.toast("BIOMETRIC LINK ESTABLISHED // APE-PRIME ONLINE"),setTimeout(()=>{this.state==="playing"&&this.ui.subtitle("The reserve is open. Explore at your own pace, and keep an ear on the jungle.",6200)},1e3),setTimeout(()=>{this.state==="playing"&&this.ui.toast("HYDRAULIC SWITCHES ARE MOUNTED LEFT OF EACH DOOR","",4800)},6200))}requestPointerLock(){if(!(!this.canvas.requestPointerLock||this.isTouch))try{const t=this.canvas.requestPointerLock({unadjustedMovement:!0});t&&t.catch&&t.catch(()=>{})}catch{}}pause(){this.state==="playing"&&(this.state="paused",this.ui.showPause(!0),this.touchSprint=!1,document.pointerLockElement&&document.exitPointerLock(),this.audio.ctx&&this.audio.ctx.state==="running"&&this.audio.ctx.suspend())}resume(){this.state==="paused"&&(this.state="playing",this.ui.showPause(!1),this.audio.ctx&&this.audio.ctx.state==="suspended"&&this.audio.ctx.resume(),this.requestPointerLock())}openMap(){this.state==="playing"&&(this.state="map",this.suppressPause=!0,this.pointerLocked&&document.exitPointerLock(),this.ui.setMap(!0),this.ui.drawMap(this.player,this.jungle,this.mossman,this.camYaw,!0),this.audio.ui(!1))}closeMap(){this.state==="map"&&(this.state="playing",this.ui.setMap(!1),this.audio.ui(!0),this.requestPointerLock())}toggleCrouch(){this.crouchToggle=!this.crouchToggle,this.ui.el.btnCrouch.classList.toggle("on",this.crouchToggle),this.audio.ui(this.crouchToggle)}toggleCamera(){this.state==="playing"&&(this.cameraMode=this.cameraMode==="third"?"first":"third",this.snapCamera=!0,this.ui.setCameraMode(this.cameraMode),this.ui.toast(this.cameraMode==="first"?"OPTIC FEED // FIRST PERSON":"OPTIC FEED // THIRD PERSON","",1800),this.audio.ui(!0))}toggleFlashlight(){this.flashlightOn=!this.flashlightOn,this.audio.ui(this.flashlightOn),this.ui.toast(this.flashlightOn?"FIELD LAMP // ON":"FIELD LAMP // OFF","",1400)}onKeyDown(t){const e=t.code;if(["KeyW","KeyA","KeyS","KeyD","ShiftLeft","ShiftRight","Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","KeyE","KeyC","KeyV","KeyF","KeyM","Tab"].includes(e)&&t.preventDefault(),e==="KeyM"){this.state==="playing"?this.openMap():this.state==="map"&&this.closeMap();return}if(e==="Escape"){this.state==="map"?this.closeMap():this.state==="playing"&&this.pause();return}if(this.state==="playing"){if(t.repeat){this.keys.add(e);return}this.keys.add(e),e==="KeyE"&&this.tryInteract(),e==="KeyV"&&this.toggleCamera(),e==="KeyF"&&this.toggleFlashlight(),e==="KeyC"&&this.toggleCrouch(),e==="Space"&&(this.jumpQueued=!0)}}onMouseMove(t){if(this.state!=="playing"||!this.pointerLocked&&!this.mouseDrag)return;const e=t.movementX||0,n=t.movementY||0;this.camYaw-=e*.0023,this.orbitPitch=le(this.orbitPitch+n*.0018,.02,1.05)}getInput(){zl.set(-Math.sin(this.camYaw),0,-Math.cos(this.camYaw)),kl.set(Math.cos(this.camYaw),0,-Math.sin(this.camYaw));let t=0,e=0;return(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(t+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(t-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(e+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(e-=1),this.touchMove.active&&(t+=-this.touchMove.y,e+=this.touchMove.x),Ws.set(0,0,0).addScaledVector(zl,t).addScaledVector(kl,e),Ws.lengthSq()>1&&Ws.normalize(),{move:Ws,sprint:this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||this.touchSprint,crouch:this.crouchToggle,jump:this.jumpQueued}}tryInteract(){if(this.state!=="playing")return;const t=this.currentInteractable;t&&(t.kind==="door"&&(this.audio.switchClick(),this.doorsTouched+=1),t.kind==="terminal"&&this.audio.terminal(),t.action(),this.state==="playing"&&this.updateInteraction())}onHydraulic(t,e){this.audio.hydraulic(e),this.ui.toast(`HYDRAULIC ${t.label} // ${e?"OPENING":"CLOSING"}`,"",2400);const n=new R(t.pos.x,.2,t.pos.z);this.effects.waves.pulse(n,18,e?14991984:10473355,1.4),this.effects.voxels.spawnBurst(n,{count:18,colors:[8359034,5858395,11057307,4016700],power:2.4,size:.075,spread:2.4,up:1.2,gravity:10,life:2.5}),this.mossman&&this.mossman.hearNoise({position:new R(t.pos.x,0,t.pos.z),type:"door",loudness:1,radius:138}),this.state==="playing"&&this.ui.alert(`HYDRAULIC EVENT // ${t.label}`,"SUBJECT M-08 CAN HEAR THE PISTONS",3200)}onCoreCollected(t){this.effects.voxels.spawnShards(t.position,24),this.effects.waves.pulse(t.position,11,8257504,1.3,.5),this.audio.pickup();const e=this.jungle.cores.filter(i=>i.collected).length,n=this.jungle.cores.length;this.ui.setObjective(e,n),this.lab.setTerminalObjective(`CORES SECURED ${e}/${n} // ${e===n?"UPLINK READY":"UPLINK OFFLINE"}`),this.ui.toast(`${t.name} // COLLECTED  ${e}/${n}`,"core",3200),this.ui.subtitle(e===n?"That was the last core. Get back to the laboratory terminal and restore the uplink.":"Core secured. Follow the remaining field markers, then return to the laboratory terminal.",4600)}onTerminal(){if(this.state!=="playing")return;const t=this.jungle.cores.length,e=this.jungle.cores.filter(n=>n.collected).length;if(e<t){this.lab.setTerminalObjective(`CORES SECURED ${e}/${t} // UPLINK OFFLINE`),this.ui.toast(`UPLINK LOCKED // ${t-e} CORE${t-e===1?"":"S"} REQUIRED`,"danger",3600),this.ui.subtitle(`The terminal needs all ${t} research cores. ${e} of ${t} secured; the compass marks the remaining field signals.`,4600);return}this.lab.setTerminalObjective("UPLINK RESTORED // RESCUE SIGNAL SENT"),this.state="won",this.currentInteractable=null,this.ui.setInteract(null),this.ui.showWin(),document.pointerLockElement&&document.exitPointerLock()}onPlayerDamage(t,e){this.ui.showDamage(),this.audio.impact(),this.shake.add(1.2),this.ui.toast(`TRAUMA // ${Math.round(t)} DAMAGE`,"danger",2e3),this.player.health<35&&this.ui.alert("VITALS CRITICAL","SEEK THE LABORATORY",2600)}onPlayerDeath(t){this.state!=="dead"&&(this.state="dead",this.deathTime=performance.now(),this.deathCameraStart=this.camera.position.clone(),this.deathFocus=this.player.position.clone().add(new R(0,.9,0)),this.deathAttacker=t?.position?.clone?.()||this.deathFocus.clone(),this.deathYaw=this.player.yaw,document.pointerLockElement&&document.exitPointerLock(),this.audio.death(),this.shake.add(2.4),this.ui.showDamage(),this.ui.setInteract(null),this.player.moving=!1,this.player.speed=0,this.player.rig.rotation.x=-.22,this.player.torso.rotation.x=.38,this.player.head.rotation.x=-.25,this.player.arms.forEach(e=>{e.shoulder.rotation.x=-.75,e.elbow.rotation.x=-.9}),setTimeout(()=>{this.state==="dead"&&this.ui.showDeath("The jungle went quiet. The last thing you heard was your own pulse.")},this.deathDuration*1e3))}onZoneChanged(t){this.audio.setEnvironment(t),!t&&!this.firstOutside?(this.firstOutside=!0,this.ui.toast("EXTERIOR LINK // GREEN VEIL","",3e3),this.ui.subtitle("The air is hot and wet. The canopy swallows every sound except your own.",5200),setTimeout(()=>{this.state==="playing"&&!this.player.inside&&this.ui.subtitle("The jungle stretches far beyond the lab. Watch for movement between the trees.",4e3)},5500)):t&&this.ui.toast("SANCTUARY // HYDRAULIC SEALS IN RANGE","core",2600),this.ui.setZone(this.getZoneName())}onJump(){this.audio.footstep("dirt",.4)}onLand(){this.effects.voxels.spawnBurst(this.player.position,{count:6,power:1.4,size:.06,up:.6,life:1.2})}onFootstep(t){this.audio.footstep(t.surface,t.loudness),this.mossman&&this.mossman.hearNoise(t),t.surface==="dirt"?this.effects.voxels.spawnBurst(t.position,{count:this.player.sprinting?7:3,colors:[5590840,4017452,7301190,3029797],power:this.player.sprinting?2.2:1.1,size:.055,spread:.4,up:this.player.sprinting?.9:.4,life:1.2}):Math.random()>.5&&this.effects.voxels.spawnBurst(t.position,{count:2,colors:[9279116,6713961,11777703],power:.7,size:.04,up:.25,life:.8}),this.player.sprinting&&!this.player.inside&&Math.random()>.56&&this.effects.waves.pulse(t.position,8.5,12572799,.9)}onMossmanRoar(t,e){const n=this.player.position.distanceTo(t);n<115&&(this.audio.roar(),this.shake.add(le(1-n/130,.2,.9))),e!=="chase"&&e!=="attack"&&this.ui.alert("SUBJECT M-08 VOCALIZING","THE SOUND IS COMING CLOSER",3400)}onMossmanAlert(t){}onMossmanState(t,e,n){t==="chase"?(this.chaseCount+=1,this.firstChase||(this.firstChase=!0,this.ui.subtitle("IT HEARD YOU. It is blind, but it knows exactly where you were.",4800)),this.ui.alert("SUBJECT M-08 IS HUNTING","BREAK LINE OF HEARING // DO NOT STOP",3800),this.ui.toast("ACOUSTIC LOCK // M-08 IN PURSUIT","danger",3800)):t==="lurk"?(this.firstLurk||(this.firstLurk=!0,this.ui.subtitle("It is at the wall. It cannot cross the seal. Its breathing rattles the metal.",5200)),this.ui.alert("CONTACT AT THE THRESHOLD","DO NOT OPEN THE DOOR",4e3)):t==="search"&&e==="chase"&&this.ui.toast("ACOUSTIC LOCK LOST // IT IS SEARCHING","",3e3)}onMossmanHear(t){if(this.state!=="playing")return;this.heardCooldown=Math.max(0,this.heardCooldown-0);const e=performance.now();(!this.lastHeardAlert||e-this.lastHeardAlert>5800)&&(this.lastHeardAlert=e,this.ui.alert("ACOUSTIC CONTACT","SUBJECT M-08 IS LISTENING",2600),this.ui.toast("IT HEARD THAT","warn",2200))}onMossmanStep(t){const e=this.player.position.distanceTo(t.position);e<58&&this.audio.footstep("dirt",.42+(1-e/58)*.5),this.effects.voxels.spawnBurst(t.position,{count:this.mossman.state==="chase"?4:2,colors:[4543791,2372894,5925433],power:1.3,size:.075,up:.4,life:1.1})}onMossmanAttack(t){this.audio.roar(),this.ui.alert("M-08 // MAUL","MOVE",1200)}onMossmanHit(t){this.ui.showDamage(),this.shake.add(2),this.audio.impact()}updateTitle(t,e){this.introAngle+=t*.055;const n=.72+Math.sin(this.introAngle)*.55,i=5.3+Math.sin(this.introAngle*.7)*.25;this.camera.position.set(Math.sin(n)*i,2.55+Math.sin(e*.13)*.18,Math.cos(n)*i),this.camera.lookAt(0,1.35,.2),this.lab.update(t),this.jungle.update(t,e,this.player.position),this.player.updateAnimation(t,this.lab),this.player.syncTransform(),this.effects.voxels.update(t),this.effects.waves.update(t);const r=performance.now()*.001;this.player.breath=r}updatePlaying(t,e){this.runTime=(performance.now()-this.runStartedAt)/1e3;const n=this.getInput();this.player.update(t,n,this.lab,this.jungle,[this.mossman]),this.jumpQueued=!1,this.mossman.update(t,this.player,this.lab,this.jungle),this.state==="playing"&&(this.lab.update(t),this.jungle.update(t,e,this.player.position),this.effects.voxels.update(t),this.effects.waves.update(t),this.shake.update(t),this.updateCamera(t,e),this.updateInteraction(),this.updateSun(),this.updateFlashlight(),this.updateHUD(t,e),this.audio.update(t,{threat:this.mossman.state==="chase"?1:this.mossman.state==="lurk"?.8:this.mossman.suspicion*.5,distance:this.player.position.distanceTo(this.mossman.position),heart:le((this.player.fear*.85+(this.player.health<35?.35:0))*(this.player.inside?.25:1),0,1)}))}updateCamera(t,e){if(this.state==="dead"){const u=Math.max(0,(performance.now()-this.deathTime)/1e3),d=le(u/this.deathDuration,0,1),p=d*d*(3-2*d),x=this.deathAttacker.clone().sub(this.deathFocus);x.y=0,x.lengthSq()<.01&&x.set(Math.sin(this.deathYaw),0,Math.cos(this.deathYaw)),x.normalize();const g=this.deathFocus.clone().addScaledVector(x,2.8-p*.7);g.y+=1.15-p*.25,g.x+=Math.sin(u*1.4)*.035,this.camera.position.copy(this.deathCameraStart).lerp(g,p);const m=this.deathFocus.clone().lerp(this.deathAttacker,Math.min(.28,p*.28));this.camera.lookAt(m);return}if(this.cameraMode==="first"){this.player.setHidden(!0),this.fpArms.visible=!0;const u=this.player.speed;this.fpBob+=t*(1.4+u*1.4);const d=this.player.moving&&this.player.onGround?Math.sin(this.fpBob*2.1)*.017*le(u/4,0,1.4):0;this.camera.position.set(this.player.position.x,this.player.position.y+1.62+d,this.player.position.z);const p=.22-this.orbitPitch;ai.set(-Math.sin(this.camYaw)*Math.cos(p),Math.sin(p),-Math.cos(this.camYaw)*Math.cos(p)).normalize(),$e.copy(this.camera.position).addScaledVector(ai,12),this.camera.lookAt($e),this.fpArms.position.y=-.28+d*1.3,this.fpArms.rotation.z=Math.sin(this.fpBob*1.05)*.008,this.camera.fov=ue(this.camera.fov,this.player.sprinting?69:this.player.crouching?58:62,6,t),this.camera.updateProjectionMatrix();return}this.player.setHidden(!1),this.fpArms.visible=!1;const i=this.player.crouching?-.32:0;$e.set(this.player.position.x,this.player.position.y+1.18+i,this.player.position.z),Hl.set(Math.cos(this.camYaw),0,-Math.sin(this.camYaw));const r=this.camera.aspect<.8,a=this.player.inside?r?.68:.46:r?.9:.62;$e.addScaledVector(Hl,a);const o=this.player.inside?r?3.55:3.05:this.player.crouching?3.7:r?5.2:4.35,l=Math.cos(this.orbitPitch)*o;Sn.set($e.x+Math.sin(this.camYaw)*l,$e.y+Math.sin(this.orbitPitch)*o,$e.z+Math.cos(this.camYaw)*l);let c=1;for(let u=.18;u<=1;u+=.075){const d=$e.x+(Sn.x-$e.x)*u,p=$e.z+(Sn.z-$e.z)*u;if(this.cameraBlockedAt(d,p)){c=Math.max(.16,u-.1);break}}Sn.lerpVectors($e,Sn,c);const h=this.player.inside?.25:this.player.position.y+.35;Sn.y=Math.max(Sn.y,h),this.player.inside&&(Sn.y=Math.min(Sn.y,4.15));const f=this.snapCamera?200:12;this.camera.position.lerp(Sn,1-Math.exp(-f*t)),this.snapCamera&&(this.snapCamera=!1),Xs.copy($e),this.player.moving&&(Xs.x+=Math.sin(this.player.visualYaw)*this.player.speed*.045,Xs.z+=Math.cos(this.player.visualYaw)*this.player.speed*.045),this.shake.offset(Gl),this.camera.position.add(Gl),this.camera.lookAt(Xs),this.camera.fov=ue(this.camera.fov,this.player.sprinting?66:r?68:61,4,t),this.camera.updateProjectionMatrix()}cameraBlockedAt(t,e){for(const n of this.lab.colliders)if(n.active&&t>n.minX&&t<n.maxX&&e>n.minZ&&e<n.maxZ)return!0;if(!this.lab.isInside(t,e,-.4))for(const n of this.jungle.treeColliders){const i=t-n.x,r=e-n.z;if(i*i+r*r<(n.radius+.22)**2)return!0}return!1}updateFlashlight(){this.camera.getWorldDirection(ai),this.flashlight.position.copy(this.camera.position),this.flashlight.target.position.copy(this.camera.position).addScaledVector(ai,24),this.flashlight.intensity=ue(this.flashlight.intensity,this.flashlightOn?52:0,12,.016)}updateSun(){const t=this.player.position;this.sun.position.set(t.x+58,t.y+88,t.z+32),this.sun.target.position.set(t.x,t.y,t.z),this.sun.target.updateMatrixWorld()}updateInteraction(){const t=this.player.position.clone();t.y+=.85,this.camera.getWorldDirection(ai);const e=this.lab.getNearestInteractable(t,ai),n=this.jungle.getNearestInteractable(t,ai);let i=null;e&&n?i=t.distanceTo(e.position)<=t.distanceTo(n.position)?e:n:i=e||n,this.currentInteractable=i,this.ui.setInteract(i),this.ui.el.crosshair.classList.toggle("hot",!!i)}updateHUD(t,e){this.ui.setVitals(this.player);const n=Math.atan2(-Math.sin(this.camYaw),Math.cos(this.camYaw))*180/Math.PI;this.ui.setCompass((n%360+360)%360,this.player,this.jungle,this.mossman,this.camYaw),this.ui.setZone(this.getZoneName()),this.ui.setThreat(this.mossman.getThreatInfo(this.player),this.player,this.camYaw,e),this.ui.mapOpen&&this.ui.drawMap(this.player,this.jungle,this.mossman,this.camYaw),this.heardCooldown>0&&(this.heardCooldown-=t)}getZoneName(){if(this.player.inside)return"LABORATORY LOBBY // SECURE";const t=this.player.position;for(const n of this.jungle.cores)if(!n.collected&&t.distanceTo(n.position)<30)return`${n.landmark} // CLEARING`;const e=Math.hypot(t.x,t.z);return e<26?"BUNKER APRON // GREEN VEIL":t.z<-50&&Math.abs(t.x)<80?"NORTHERN TRACKING FIELD":t.z>80?"SUNKEN SHRINE APPROACH":t.x>80?"IMPACT SCAR // EASTERN RIDGE":t.x<-80?"WATCHTOWER BASIN":e>170?"DEEP RESERVE // OLD GROWTH":"GREEN VEIL // SPARSE JUNGLE"}restartRun(){this.player&&(this.state="playing",this.runStartedAt=performance.now(),this.runTime=0,this.crouchToggle=!1,this.jumpQueued=!1,this.chaseCount=0,this.doorsTouched=0,this.firstOutside=!1,this.firstChase=!1,this.firstLurk=!1,this.currentInteractable=null,this.player.reset(),this.mossman.reset(),this.lab.resetDoors(),this.jungle.resetCores(),this.ui.setObjective(0,this.jungle.cores.length),this.lab.setTerminalObjective(`CORES SECURED 0/${this.jungle.cores.length} // UPLINK OFFLINE`),this.effects.voxels.items.forEach(t=>{t.active=!1}),this.effects.waves.items.forEach(t=>{t.active=!1,t.mesh.visible=!1}),this.ui.hideDeath(),this.ui.hideWin(),this.ui.showPause(!1),this.ui.setMap(!1),this.ui.setInteract(null),this.ui.el.btnCrouch.classList.remove("on"),this.ui.fadeBlack(!1,500),this.audio.reset(),this.audio.setEnvironment(!0,!0),this.camYaw=0,this.orbitPitch=.24,this.cameraMode="third",this.ui.setCameraMode("third"),this.player.setHidden(!1),this.snapCamera=!0,this.isTouch||this.requestPointerLock(),this.ui.toast("SESSION RESET // BIOMETRIC LINK RESTORED","",2800))}animate(){this.frameId=requestAnimationFrame(this.animate);const t=Math.min(this.clock.getDelta(),.05),e=performance.now()*.001;this.state==="title"?this.updateTitle(t,e):this.state==="playing"?(this.updatePlaying(t,e),this.ui.setCameraMode(this.cameraMode)):this.state==="dead"?(this.effects.voxels.update(t),this.effects.waves.update(t),this.lab.update(t*.15),this.player.syncTransform(),this.updateCamera(t,e),this.shake.update(t)):this.state==="map"&&(this.lab.update(t*.1),this.jungle.update(t*.1,e,this.player.position),this.ui.drawMap(this.player,this.jungle,this.mossman,this.camYaw)),this.renderer.render(this.scene,this.camera)}}window.addEventListener("DOMContentLoaded",()=>{new pg});
