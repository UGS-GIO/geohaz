import{a as x,s as nr}from"./Error-21d1d076.js";import{n as er}from"./promiseUtils-1d963c7c.js";import{q as tr,d as sr}from"./aaBoundingBox-7242ce3e.js";import{d as ur}from"./aaBoundingRect-aef00841.js";import{u as lr,f as cr,s as ir,l as fr}from"./jsonUtils-2c7f966c.js";import{t as P}from"./OptimizedFeature-0af09c7a.js";import{e as ar}from"./OptimizedFeatureSet-1d1ac4b9.js";import{e as T}from"./OptimizedGeometry-5ad221bf.js";function p(r,o){return r?o?4:3:o?3:2}const v=()=>nr.getLogger("esri.layers.graphics.featureConversionUtils"),D={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0,esriGeometryEnvelope:0},dr=(r,o,n,e,s,t)=>{r[n]=s,r[n+1]=t},C=(r,o,n,e,s,t)=>{r[n]=s,r[n+1]=t,r[n+2]=o[e+2]},hr=(r,o,n,e,s,t)=>{r[n]=s,r[n+1]=t,r[n+2]=o[e+3]},mr=(r,o,n,e,s,t)=>{r[n]=s,r[n+1]=t,r[n+2]=o[e+2],r[n+3]=o[e+3]};function U(r,o,n,e){if(r){if(n)return o&&e?mr:C;if(o&&e)return hr}else if(o&&e)return C;return dr}function q({scale:r,translate:o},n){return Math.round((n-o[0])/r[0])}function z({scale:r,translate:o},n){return Math.round((o[1]-n)/r[1])}function E({scale:r,translate:o},n,e){return n*r[e]+o[e]}function _r(r,o,n){return r?o?n?V(r):R(r):n?S(r):j(r):null}function j(r){const o=r.coords;return{x:o[0],y:o[1]}}function H(r,o){return r.coords[0]=o.x,r.coords[1]=o.y,r}function R(r){const o=r.coords;return{x:o[0],y:o[1],z:o[2]}}function gr(r,o){return r.coords[0]=o.x,r.coords[1]=o.y,r.coords[2]=o.z,r}function S(r){const o=r.coords;return{x:o[0],y:o[1],m:o[2]}}function yr(r,o){return r.coords[0]=o.x,r.coords[1]=o.y,r.coords[2]=o.m,r}function V(r){const o=r.coords;return{x:o[0],y:o[1],z:o[2],m:o[3]}}function pr(r,o){return r.coords[0]=o.x,r.coords[1]=o.y,r.coords[2]=o.z,r.coords[3]=o.m,r}function br(r,o,n,e){let s=j;n&&e?s=V:n?s=R:e&&(s=S);for(const t of o){const{geometry:u,attributes:l}=t,i=u!=null?s(u):null;r.push({attributes:l,geometry:i})}return r}function Y(r,o){return r&&o?pr:r?gr:o?yr:H}function wr(r,o,n,e,s){const t=Y(n,e);for(const{geometry:u,attributes:l}of o){const i=u!=null?t(new T,u):null;r.push(new P(i,l,null,s?l[s]:void 0))}return r}function Ir(r,o,n=Y(o.z!=null,o.m!=null)){return n(r,o)}function Mr(r,o,n,e){for(const{geometry:s,attributes:t}of o)r.push({attributes:t,geometry:s!=null?J(s,n,e):null});return r}function J(r,o,n){if(r==null)return null;const e=p(o,n),s=[];for(let t=0;t<r.coords.length;t+=e){const u=[];for(let l=0;l<e;l++)u.push(r.coords[t+l]);s.push(u)}return o?n?{points:s,hasZ:o,hasM:n}:{points:s,hasZ:o}:n?{points:s,hasM:n}:{points:s}}function Gr(r,o,n,e,s){const t=p(n,e);for(const{geometry:u,attributes:l}of o){const i=u!=null?K(new T,u,t):null;r.push(new P(i,l,null,s?l[s]:void 0))}return r}function K(r,o,n=p(o.hasZ,o.hasM)){r.lengths[0]=o.points.length;const e=r.coords;let s=0;for(const t of o.points)for(let u=0;u<n;u++)e[s++]=t[u];return r}function Nr(r,o,n,e){for(const{geometry:s,attributes:t}of o)r.push({attributes:t,geometry:s!=null?Q(s,n,e):null});return r}function Q(r,o,n){if(!r)return null;const e=p(o,n),{coords:s,lengths:t}=r,u=[];let l=0;for(const i of t){const c=[];for(let f=0;f<i;f++){const a=[];for(let d=0;d<e;d++)a.push(s[l++]);c.push(a)}u.push(c)}return o?n?{paths:u,hasZ:o,hasM:n}:{paths:u,hasZ:o}:n?{paths:u,hasM:n}:{paths:u}}function Tr(r,o,n,e,s){const t=p(n,e);for(const{geometry:u,attributes:l,centroid:i}of o){const c=u!=null?W(new T,u,t):null,f=i!=null?Ir(new T,i):null;r.push(new P(c,l,f,s?l[s]:void 0))}return r}function W(r,o,n=p(o.hasZ,o.hasM)){const{lengths:e,coords:s}=r;let t=0;for(const u of o.paths){for(const l of u)for(let i=0;i<n;i++)s[t++]=l[i];e.push(u.length)}return r}function Fr(r,o,n,e){for(const{geometry:s,attributes:t,centroid:u}of o){const l=s!=null?X(s,n,e):null;if(u!=null){const i=j(u);r.push({attributes:t,centroid:i,geometry:l})}else r.push({attributes:t,geometry:l})}return r}function X(r,o,n){if(!r)return null;const e=p(o,n),{coords:s,lengths:t}=r,u=[];let l=0;for(const i of t){const c=[];for(let f=0;f<i;f++){const a=[];for(let d=0;d<e;d++)a.push(s[l++]);c.push(a)}u.push(c)}return o?n?{rings:u,hasZ:o,hasM:n}:{rings:u,hasZ:o}:n?{rings:u,hasM:n}:{rings:u}}function Pr(r,o,n,e,s){for(const{geometry:t,centroid:u,attributes:l}of o){const i=t!=null?$(new T,t,n,e):null,c=s?l[s]:void 0;u!=null?r.push(new P(i,l,H(new T,u),c)):r.push(new P(i,l,null,c))}return r}function $(r,o,n=o.hasZ,e=o.hasM){return Zr(r,o.rings,n,e)}function Zr(r,o,n,e){const s=p(n,e),{lengths:t,coords:u}=r;let l=0;N(r);for(const i of o){for(const c of i)for(let f=0;f<s;f++)u[l++]=c[f];t.push(i.length)}return r}const F=[],Z=[];function Ar(r,o,n,e,s){F[0]=r;const[t]=rr(Z,F,o,n,e,s);return G(F),G(Z),t}function rr(r,o,n,e,s,t){if(G(r),!n){for(const u of o){const l=t?u.attributes[t]:void 0;r.push(new P(null,u.attributes,null,l))}return r}switch(n){case"esriGeometryPoint":return wr(r,o,e,s,t);case"esriGeometryMultipoint":return Gr(r,o,e,s,t);case"esriGeometryPolyline":return Tr(r,o,e,s,t);case"esriGeometryPolygon":return Pr(r,o,e,s,t);default:v().error("convertToFeatureSet:unknown-geometry",new x(`Unable to parse unknown geometry type '${n}'`)),G(r)}return r}function Cr(r,o,n,e){Z[0]=r,or(F,Z,o,n,e);const s=F[0];return G(F),G(Z),s}function Or(r,o,n){if(r==null)return null;const e=new T;return"hasZ"in r&&o==null&&(o=r.hasZ),"hasM"in r&&n==null&&(n=r.hasM),lr(r)?Y(o??r.z!=null,n??r.m!=null)(e,r):cr(r)?$(e,r,o,n):ir(r)?W(e,r,p(o,n)):fr(r)?K(e,r,p(o,n)):void v().error("convertFromGeometry:unknown-geometry",new x(`Unable to parse unknown geometry type '${r}'`))}function xr(r,o,n,e){const s=r&&("coords"in r?r:r.geometry);if(s==null)return null;switch(o){case"esriGeometryPoint":{let t=j;return n&&e?t=V:n?t=R:e&&(t=S),t(s)}case"esriGeometryMultipoint":return J(s,n,e);case"esriGeometryPolyline":return Q(s,n,e);case"esriGeometryPolygon":return X(s,n,e);default:return v().error("convertToGeometry:unknown-geometry",new x(`Unable to parse unknown geometry type '${o}'`)),null}}function vr(r,o){for(const n of o)r.push({attributes:n.attributes});return r}function or(r,o,n,e,s){if(G(r),n==null)return vr(r,o);switch(n){case"esriGeometryPoint":return br(r,o,e,s);case"esriGeometryMultipoint":return Mr(r,o,e,s);case"esriGeometryPolyline":return Nr(r,o,e,s);case"esriGeometryPolygon":return Fr(r,o,e,s);default:v().error("convertToFeatureSet:unknown-geometry",new x(`Unable to parse unknown geometry type '${n}'`))}return r}function Br(r){const{objectIdFieldName:o,spatialReference:n,transform:e,fields:s,hasM:t,hasZ:u,features:l,geometryType:i,exceededTransferLimit:c,uniqueIdField:f,queryGeometry:a,queryGeometryType:d}=r,h={features:or([],l,i,u,t),fields:s,geometryType:i,objectIdFieldName:o,spatialReference:n,uniqueIdField:f,queryGeometry:xr(a,d,!1,!1)};return e&&(h.transform=e),c&&(h.exceededTransferLimit=c),t&&(h.hasM=t),u&&(h.hasZ=u),h}function Dr(r,o){const n=new ar,{hasM:e,hasZ:s,features:t,objectIdFieldName:u,spatialReference:l,geometryType:i,exceededTransferLimit:c,transform:f,fields:a}=r;return a&&(n.fields=a),n.geometryType=i??null,n.objectIdFieldName=u??o??null,n.spatialReference=l??null,n.objectIdFieldName?(t&&rr(n.features,t,i,s,e,n.objectIdFieldName),c&&(n.exceededTransferLimit=c),e&&(n.hasM=e),s&&(n.hasZ=s),f&&(n.transform=f),n):(v().error(new x("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),n)}function Hr(r){const{transform:o,features:n,hasM:e,hasZ:s}=r;if(!o)return r;for(const t of n)t.geometry!=null&&B(t.geometry,t.geometry,e,s,o),t.centroid!=null&&B(t.centroid,t.centroid,e,s,o);return r.transform=null,r}function Jr(r,o){const{geometryType:n,features:e,hasM:s,hasZ:t}=o;if(!r)return o;for(let u=0;u<e.length;u++){const l=e[u],i=l.weakClone();i.geometry=new T,O(i.geometry,l.geometry,s,t,n,r),l.centroid&&(i.centroid=new T,O(i.centroid,l.centroid,s,t,"esriGeometryPoint",r)),e[u]=i}return o.transform=r,o}function O(r,o,n,e,s,t,u=n,l=e){if(N(r),!(o!=null&&o.coords.length))return null;const i=D[s],{coords:c,lengths:f}=o,a=p(n,e),d=p(n&&u,e&&l),h=U(n,e,u,l);if(!f.length)return h(r.coords,c,0,0,q(t,c[0]),z(t,c[1])),N(r,a,0),r;let m,y,w,I,b=0,g=0,M=g;for(const _ of f){if(_<i)continue;let k=0;g=M,w=m=q(t,c[b]),I=y=z(t,c[b+1]),h(r.coords,c,g,b,w,I),k++,b+=a,g+=d;for(let A=1;A<_;A++,b+=a)w=q(t,c[b]),I=z(t,c[b+1]),w===m&&I===y||(h(r.coords,c,g,b,w-m,I-y),g+=d,k++,m=w,y=I);k>=i&&(r.lengths.push(k),M=g)}return G(r.coords,M),r.coords.length?r:null}function Kr(r,o,n,e,s,t,u=n,l=e){if(N(r),!(o!=null&&o.coords.length))return null;const i=D[s],{coords:c,lengths:f}=o,a=p(n,e),d=p(n&&u,e&&l),h=U(n,e,u,l);if(!f.length)return h(r.coords,c,0,0,c[0],c[1]),N(r,a,0),r;let m=0;const y=t*t;for(const w of f){if(w<i){m+=w*a;continue}const I=r.coords.length/d,b=m,g=m+(w-1)*a;h(r.coords,c,r.coords.length,b,c[b],c[b+1]),L(r.coords,c,a,y,h,b,g),h(r.coords,c,r.coords.length,g,c[g],c[g+1]);const M=r.coords.length/d-I;M>=i?r.lengths.push(M):G(r.coords,I*d),m+=w*a}return r.coords.length?r:null}function kr(r,o,n,e){const s=r[o],t=r[o+1],u=r[n],l=r[n+1],i=r[e],c=r[e+1];let f=u,a=l,d=i-f,h=c-a;if(d!==0||h!==0){const m=((s-f)*d+(t-a)*h)/(d*d+h*h);m>1?(f=i,a=c):m>0&&(f+=d*m,a+=h*m)}return d=s-f,h=t-a,d*d+h*h}function L(r,o,n,e,s,t,u){let l,i=e,c=0;for(let f=t+n;f<u;f+=n)l=kr(o,f,t,u),l>i&&(c=f,i=l);i>e&&(c-t>n&&L(r,o,n,e,s,t,c),s(r,o,r.length,c,o[c],o[c+1]),u-c>n&&L(r,o,n,e,s,c,u))}function Qr(r,o,n,e){var c;if(!((c=o==null?void 0:o.coords)!=null&&c.length))return null;const s=p(n,e);let t=Number.POSITIVE_INFINITY,u=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY,i=Number.NEGATIVE_INFINITY;if(o&&o.coords){const f=o.coords;for(let a=0;a<f.length;a+=s){const d=f[a],h=f[a+1];t=Math.min(t,d),l=Math.max(l,d),u=Math.min(u,h),i=Math.max(i,h)}}return tr(r)?sr(r,t,u,l,i):ur(t,u,l,i,r),r}function B(r,o,n,e,s){const{coords:t,lengths:u}=o,l=p(n,e);if(!t.length)return r!==o&&N(r),r;er(s);const{originPosition:i,scale:c,translate:f}=s,a=qr;a.originPosition=i;const d=a.scale;d[0]=c[0]??1,d[1]=-(c[1]??1),d[2]=c[2]??1,d[3]=c[3]??1;const h=a.translate;if(h[0]=f[0]??0,h[1]=f[1]??0,h[2]=f[2]??0,h[3]=f[3]??0,!u.length){for(let y=0;y<l;++y)r.coords[y]=E(a,t[y],y);return r!==o&&N(r,l,0),r}let m=0;for(let y=0;y<u.length;y++){const w=u[y];r.lengths[y]=w;for(let g=0;g<l;++g)r.coords[m+g]=E(a,t[m+g],g);let I=r.coords[m],b=r.coords[m+1];m+=l;for(let g=1;g<w;g++,m+=l){I+=t[m]*d[0],b+=t[m+1]*d[1],r.coords[m]=I,r.coords[m+1]=b;for(let M=2;M<l;++M)r.coords[m+M]=E(a,t[m+M],M)}}return r!==o&&N(r,t.length,u.length),r}function Wr(r,o,n,e,s,t){if(N(r),r.lengths.push(...o.lengths),n===s&&e===t)for(let u=0;u<o.coords.length;u++)r.coords.push(o.coords[u]);else{const u=p(n,e),l=U(n,e,s,t),i=o.coords;for(let c=0;c<i.length;c+=u)l(r.coords,i,r.coords.length,c,i[c],i[c+1])}return r}function jr(r,o,n,e){let s=0,t=r[e*o],u=r[e*(o+1)];for(let l=1;l<n;l++){const i=t+r[e*(o+l)],c=u+r[e*(o+l)+1],f=(i-t)*(c+u);t=i,u=c,s+=f}return .5*s}function Xr(r,o){const{coords:n,lengths:e}=r;let s=0,t=0;for(let u=0;u<e.length;u++){const l=e[u];t+=jr(n,s,l,o),s+=l}return Math.abs(t)}function N(r,o=0,n=0){G(r.lengths,n),G(r.coords,o)}function G(r,o=0){r.length!==o&&(r.length=o)}const qr={originPosition:"lowerLeft",scale:[1,1,1,1],translate:[0,0,0,0]};export{Q as $,X as H,Wr as I,$ as K,Xr as N,Ir as O,Zr as Q,J as U,O as a,Dr as c,rr as e,Jr as f,Qr as g,Kr as h,Hr as i,Br as l,Cr as n,Or as o,B as p,xr as r,Ar as t,_r as x};
