import"./typedArrayUtil-2af43698.js";import{s as O}from"./Error-21d1d076.js";const $=()=>O.getLogger("esri.views.3d.support.buffer.math");function q(e,n,t){V(e.typedBuffer,n.typedBuffer,t,e.typedBufferStride,n.typedBufferStride)}function V(e,n,t,f=3,d=f){if(e.length/f!==Math.ceil(n.length/d))return e;const u=e.length/f,r=t[0],i=t[1],o=t[2],a=t[4],s=t[5],h=t[6],p=t[8],S=t[9],M=t[10],y=t[12],B=t[13],g=t[14];let l=0,c=0;for(let m=0;m<u;m++){const b=n[l],w=n[l+1],v=n[l+2];e[c]=r*b+a*w+p*v+y,e[c+1]=i*b+s*w+S*v+B,e[c+2]=o*b+h*w+M*v+g,l+=d,c+=f}return e}function x(e,n,t){_(e.typedBuffer,n.typedBuffer,t,e.typedBufferStride,n.typedBufferStride)}function _(e,n,t,f=3,d=f){if(e.length/f!==Math.ceil(n.length/d))return void $().error("source and destination buffers need to have the same number of elements");const u=e.length/f,r=t[0],i=t[1],o=t[2],a=t[3],s=t[4],h=t[5],p=t[6],S=t[7],M=t[8];let y=0,B=0;for(let g=0;g<u;g++){const l=n[y],c=n[y+1],m=n[y+2];e[B]=r*l+a*c+p*m,e[B+1]=i*l+s*c+S*m,e[B+2]=o*l+h*c+M*m,y+=d,B+=f}}function L(e,n,t){z(e.typedBuffer,n,t,e.typedBufferStride)}function z(e,n,t,f=3){const d=Math.min(e.length/f,n.count),u=n.typedBuffer,r=n.typedBufferStride;let i=0,o=0;for(let a=0;a<d;a++)e[o]=t*u[i],e[o+1]=t*u[i+1],e[o+2]=t*u[i+2],i+=r,o+=f}function P(e,n,t,f=3,d=f){const u=e.length/f;if(u!==Math.ceil(n.length/d))return e;let r=0,i=0;for(let o=0;o<u;o++)e[i]=n[r]+t[0],e[i+1]=n[r+1]+t[1],e[i+2]=n[r+2]+t[2],r+=d,i+=f;return e}function R(e,n){j(e.typedBuffer,n.typedBuffer,e.typedBufferStride,n.typedBufferStride)}function j(e,n,t=3,f=t){const d=Math.min(e.length/t,n.length/f);let u=0,r=0;for(let i=0;i<d;i++){const o=n[u],a=n[u+1],s=n[u+2],h=o*o+a*a+s*s;if(h>0){const p=1/Math.sqrt(h);e[r]=p*o,e[r+1]=p*a,e[r+2]=p*s}u+=f,r+=t}}function T(e,n,t){const f=Math.min(e.count,n.count),d=e.typedBuffer,u=e.typedBufferStride,r=n.typedBuffer,i=n.typedBufferStride;let o=0,a=0;for(let s=0;s<f;s++)d[a]=r[o]>>t,d[a+1]=r[o+1]>>t,d[a+2]=r[o+2]>>t,o+=i,a+=u}Object.freeze(Object.defineProperty({__proto__:null,normalize:j,normalizeView:R,scale:z,scaleView:L,shiftRight:T,transformMat3:_,transformMat3View:x,transformMat4:V,transformMat4View:q,translate:P},Symbol.toStringTag,{value:"Module"}));export{q as a,R as b,$ as e,x as f,P as i,_ as n,L as o,V as r,j as s,z as u};
