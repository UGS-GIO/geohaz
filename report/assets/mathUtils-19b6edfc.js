function l(){return[0,0,0]}function Q(n){return[n[0],n[1],n[2]]}function $(n,r,u){return[n,r,u]}function k(n,r=l()){const u=Math.min(3,n.length);for(let e=0;e<u;++e)r[e]=n[e];return r}function C(n,r){return new Float64Array(n,r,3)}function P(){return l()}function N(){return $(1,1,1)}function O(){return $(1,0,0)}function A(){return $(0,1,0)}function S(){return $(0,0,1)}const H=P(),G=N(),J=O(),K=A(),W=S();Object.freeze(Object.defineProperty({__proto__:null,ONES:G,UNIT_X:J,UNIT_Y:K,UNIT_Z:W,ZEROS:H,clone:Q,create:l,createView:C,fromArray:k,fromValues:$,ones:N,unitX:O,unitY:A,unitZ:S,zeros:P},Symbol.toStringTag,{value:"Module"}));let y=1e-6;function T(){return y}function nn(n){y=n}const j=Math.random,rn=Math.PI/180,un=180/Math.PI;function en(n){return n*rn}function tn(n){return n*un}function on(n,r){return Math.abs(n-r)<=y*Math.max(1,Math.abs(n),Math.abs(r))}Object.freeze(Object.defineProperty({__proto__:null,RANDOM:j,equals:on,getEpsilon:T,setEpsilon:nn,toDegree:tn,toRadian:en},Symbol.toStringTag,{value:"Module"}));function p(n){const r=n[0],u=n[1],e=n[2];return Math.sqrt(r*r+u*u+e*e)}function sn(n,r){return n[0]=r[0],n[1]=r[1],n[2]=r[2],n}function v(n,r,u,e){return n[0]=r,n[1]=u,n[2]=e,n}function an(n,r,u){return n[0]=r[0]+u[0],n[1]=r[1]+u[1],n[2]=r[2]+u[2],n}function w(n,r,u){return n[0]=r[0]-u[0],n[1]=r[1]-u[1],n[2]=r[2]-u[2],n}function F(n,r,u){return n[0]=r[0]*u[0],n[1]=r[1]*u[1],n[2]=r[2]*u[2],n}function B(n,r,u){return n[0]=r[0]/u[0],n[1]=r[1]/u[1],n[2]=r[2]/u[2],n}function cn(n,r){return n[0]=Math.ceil(r[0]),n[1]=Math.ceil(r[1]),n[2]=Math.ceil(r[2]),n}function fn(n,r){return n[0]=Math.floor(r[0]),n[1]=Math.floor(r[1]),n[2]=Math.floor(r[2]),n}function Mn(n,r){return n[0]=Math.abs(r[0]),n[1]=Math.abs(r[1]),n[2]=Math.abs(r[2]),n}function hn(n,r){return n[0]=Math.sign(r[0]),n[1]=Math.sign(r[1]),n[2]=Math.sign(r[2]),n}function ln(n,r,u){return n[0]=Math.min(r[0],u[0]),n[1]=Math.min(r[1],u[1]),n[2]=Math.min(r[2],u[2]),n}function $n(n,r,u){return n[0]=Math.max(r[0],u[0]),n[1]=Math.max(r[1],u[1]),n[2]=Math.max(r[2],u[2]),n}function mn(n,r){return n[0]=Math.round(r[0]),n[1]=Math.round(r[1]),n[2]=Math.round(r[2]),n}function bn(n,r,u){return n[0]=r[0]*u,n[1]=r[1]*u,n[2]=r[2]*u,n}function dn(n,r,u,e){return n[0]=r[0]+u[0]*e,n[1]=r[1]+u[1]*e,n[2]=r[2]+u[2]*e,n}function z(n,r){const u=r[0]-n[0],e=r[1]-n[1],t=r[2]-n[2];return Math.sqrt(u*u+e*e+t*t)}function D(n,r){const u=r[0]-n[0],e=r[1]-n[1],t=r[2]-n[2];return u*u+e*e+t*t}function L(n){const r=n[0],u=n[1],e=n[2];return r*r+u*u+e*e}function gn(n,r){return n[0]=-r[0],n[1]=-r[1],n[2]=-r[2],n}function _n(n,r){return n[0]=1/r[0],n[1]=1/r[1],n[2]=1/r[2],n}function _(n,r){const u=r[0],e=r[1],t=r[2];let o=u*u+e*e+t*t;return o>0&&(o=1/Math.sqrt(o),n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o),n}function R(n,r){return n[0]*r[0]+n[1]*r[1]+n[2]*r[2]}function yn(n,r,u){const e=r[0],t=r[1],o=r[2],s=u[0],c=u[1],a=u[2];return n[0]=t*a-o*c,n[1]=o*s-e*a,n[2]=e*c-t*s,n}function pn(n,r,u,e){const t=r[0],o=r[1],s=r[2];return n[0]=t+e*(u[0]-t),n[1]=o+e*(u[1]-o),n[2]=s+e*(u[2]-s),n}function qn(n,r,u,e,t,o){const s=o*o,c=s*(2*o-3)+1,a=s*(o-2)+o,i=s*(o-1),f=s*(3-2*o);return n[0]=r[0]*c+u[0]*a+e[0]*i+t[0]*f,n[1]=r[1]*c+u[1]*a+e[1]*i+t[1]*f,n[2]=r[2]*c+u[2]*a+e[2]*i+t[2]*f,n}function In(n,r,u,e,t,o){const s=1-o,c=s*s,a=o*o,i=c*s,f=3*o*c,M=3*a*s,h=a*o;return n[0]=r[0]*i+u[0]*f+e[0]*M+t[0]*h,n[1]=r[1]*i+u[1]*f+e[1]*M+t[1]*h,n[2]=r[2]*i+u[2]*f+e[2]*M+t[2]*h,n}function xn(n,r){r=r||1;const u=j,e=2*u()*Math.PI,t=2*u()-1,o=Math.sqrt(1-t*t)*r;return n[0]=Math.cos(e)*o,n[1]=Math.sin(e)*o,n[2]=t*r,n}function En(n,r,u){const e=r[0],t=r[1],o=r[2];return n[0]=u[0]*e+u[4]*t+u[8]*o+u[12],n[1]=u[1]*e+u[5]*t+u[9]*o+u[13],n[2]=u[2]*e+u[6]*t+u[10]*o+u[14],n}function Pn(n,r,u){const e=r[0],t=r[1],o=r[2];return n[0]=e*u[0]+t*u[3]+o*u[6],n[1]=e*u[1]+t*u[4]+o*u[7],n[2]=e*u[2]+t*u[5]+o*u[8],n}function Nn(n,r,u){const e=u[0],t=u[1],o=u[2],s=u[3],c=r[0],a=r[1],i=r[2],f=t*i-o*a,M=o*c-e*i,h=e*a-t*c,Z=t*h-o*M,V=o*f-e*h,X=e*M-t*f,b=2*s;return n[0]=c+f*b+2*Z,n[1]=a+M*b+2*V,n[2]=i+h*b+2*X,n}function On(n,r,u,e){const t=[],o=[];return t[0]=r[0]-u[0],t[1]=r[1]-u[1],t[2]=r[2]-u[2],o[0]=t[0],o[1]=t[1]*Math.cos(e)-t[2]*Math.sin(e),o[2]=t[1]*Math.sin(e)+t[2]*Math.cos(e),n[0]=o[0]+u[0],n[1]=o[1]+u[1],n[2]=o[2]+u[2],n}function An(n,r,u,e){const t=[],o=[];return t[0]=r[0]-u[0],t[1]=r[1]-u[1],t[2]=r[2]-u[2],o[0]=t[2]*Math.sin(e)+t[0]*Math.cos(e),o[1]=t[1],o[2]=t[2]*Math.cos(e)-t[0]*Math.sin(e),n[0]=o[0]+u[0],n[1]=o[1]+u[1],n[2]=o[2]+u[2],n}function Sn(n,r,u,e){const t=[],o=[];return t[0]=r[0]-u[0],t[1]=r[1]-u[1],t[2]=r[2]-u[2],o[0]=t[0]*Math.cos(e)-t[1]*Math.sin(e),o[1]=t[0]*Math.sin(e)+t[1]*Math.cos(e),o[2]=t[2],n[0]=o[0]+u[0],n[1]=o[1]+u[1],n[2]=o[2]+u[2],n}function Tn(n,r){_(q,n),_(I,r);const u=R(q,I);return u>1?0:u<-1?Math.PI:Math.acos(u)}const q=l(),I=l();function jn(n){return"vec3("+n[0]+", "+n[1]+", "+n[2]+")"}function vn(n,r){return n[0]===r[0]&&n[1]===r[1]&&n[2]===r[2]}function wn(n,r){if(n===r)return!0;const u=n[0],e=n[1],t=n[2],o=r[0],s=r[1],c=r[2],a=T();return Math.abs(u-o)<=a*Math.max(1,Math.abs(u),Math.abs(o))&&Math.abs(e-s)<=a*Math.max(1,Math.abs(e),Math.abs(s))&&Math.abs(t-c)<=a*Math.max(1,Math.abs(t),Math.abs(c))}function Fn(n,r,u){const e=u[0]-r[0],t=u[1]-r[1],o=u[2]-r[2];let s=e*e+t*t+o*o;return s>0?(s=1/Math.sqrt(s),n[0]=e*s,n[1]=t*s,n[2]=o*s,n):(n[0]=0,n[1]=0,n[2]=0,n)}const Bn=w,zn=F,Dn=B,Ln=z,Rn=D,Un=p,Yn=L;Object.freeze(Object.defineProperty({__proto__:null,abs:Mn,add:an,angle:Tn,bezier:In,ceil:cn,copy:sn,cross:yn,direction:Fn,dist:Ln,distance:z,div:Dn,divide:B,dot:R,equals:wn,exactEquals:vn,floor:fn,hermite:qn,inverse:_n,len:Un,length:p,lerp:pn,max:$n,min:ln,mul:zn,multiply:F,negate:gn,normalize:_,random:xn,rotateX:On,rotateY:An,rotateZ:Sn,round:mn,scale:bn,scaleAndAdd:dn,set:v,sign:hn,sqrDist:Rn,sqrLen:Yn,squaredDistance:D,squaredLength:L,str:jn,sub:Bn,subtract:w,transformMat3:Pn,transformMat4:En,transformQuat:Nn},Symbol.toStringTag,{value:"Module"}));const x=new Float32Array(1);function Cn(n){--n;for(let r=1;r<32;r<<=1)n|=n>>r;return n+1}function U(n,r,u){return Math.min(Math.max(n,r),u)}function Hn(n){return n--,n|=n>>1,n|=n>>2,n|=n>>4,n|=n>>8,n|=n>>16,++n}function Zn(n,r,u){return n+(r-n)*u}function Gn(n,r,u,e,t){return Zn(e,t,(n-r)/(u-r))}function Jn(n){return n*Math.PI/180}function Kn(n){return 180*n/Math.PI}function Wn(n){return Math.acos(U(n,-1,1))}function Vn(n){return Math.asin(U(n,-1,1))}function d(n,r,u=1e-6){return n===r?!0:!Number.isFinite(n)||!Number.isFinite(r)?!1:(n>r?n-r:r-n)<=u}const m=new DataView(new ArrayBuffer(Float64Array.BYTES_PER_ELEMENT));function Xn(n){return m.setFloat64(0,n),m.getBigInt64(0)}function Qn(n){return m.setBigInt64(0,n),m.getFloat64(0)}const g=BigInt("1000000");kn(1);function kn(n){const r=Xn(n=Math.abs(n)),u=Qn(r<=g?g:r-g);return Math.abs(n-u)}function nr(n){return Y(Math.max(-E,Math.min(n,E)))}function Y(n){return x[0]=n,x[0]}function rr(n,r){const u=p(n),e=Vn(n[2]/u),t=Math.atan2(n[1]/u,n[0]/u);return v(r,u,e,t),r}function ur(n){const r=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],u=n[3]*n[3]+n[4]*n[4]+n[5]*n[5],e=n[6]*n[6]+n[7]*n[7]+n[8]*n[8];return!(d(r,1)&&d(u,1)&&d(e,1))}const E=Y(34028234663852886e22);export{tn as $,nr as A,Mn as B,$n as C,ln as D,Nn as E,d as F,vn as G,dn as H,hn as I,Fn as J,Bn as K,F as L,Kn as M,E as N,En as O,R as P,D as Q,pn as R,Pn as S,L as T,rr as U,Gn as V,_n as W,Rn as X,Un as Y,Yn as Z,G as _,T as a,Zn as a0,B as a1,Ln as a2,ur as a3,v as b,Hn as c,sn as d,U as e,yn as f,bn as g,Jn as h,w as i,an as j,Cn as k,Vn as l,Wn as m,l as n,j as o,J as p,K as q,$ as r,p as s,k as t,en as u,Q as v,H as w,z as x,W as y,_ as z};
