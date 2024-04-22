import{d as g,a as m,s as M}from"./Error-21d1d076.js";import{C as c,U as f}from"./enums-52934aad.js";import"./enums-2742e74f.js";import"./typedArrayUtil-2af43698.js";import{s as N,d as U,m as A}from"./Texture-c6ffe640.js";import"./Program-eff88155.js";import{t as b}from"./VertexElementDescriptor-2925c6af.js";import{i as x}from"./BoundingBox-f9d9024c.js";class l{constructor(t,s,e,i,n,o,a){this.instanceId=t,this.textureKey=s,this.indexStart=e,this.indexCount=i,this.vertexStart=n,this.vertexCount=o,this.overlaps=a}updateBaseOffsets(t){this.vertexStart+=t.vertexFrom,this.indexStart+=t.indexFrom}clone(){return new l(this.instanceId,this.textureKey,this.indexStart,this.indexCount,this.vertexStart,this.vertexCount,this.overlaps)}static write(t,s,e,i,n,o,a,u){t.push(s),t.push(e),t.push(i),t.push(n),t.push(o),t.push(a),t.push(u)}serialize(t){return t.push(this.instanceId),t.push(this.textureKey),t.push(this.indexStart),t.push(this.indexCount),t.push(this.vertexStart),t.push(this.vertexCount),t.push(this.overlaps),t}static deserialize(t){const s=t.readInt32(),e=t.readInt32(),i=t.readInt32(),n=t.readInt32(),o=t.readInt32(),a=t.readInt32(),u=t.readInt32();return new l(s,e,i,n,o,a,u)}}l.byteSizeHint=7*Uint32Array.BYTES_PER_ELEMENT;function y(r,t){if(t!==null){r.push(t.length);for(const s of t)s.serialize(r);return r}r.push(0)}function T(r,t,s){const e=r.readInt32(),i=new Array(e);for(let n=0;n<i.length;n++)i[n]=t.deserialize(r,s);return i}class d{constructor(t,s){this.id=t,this.sortKey=s,this.records=[]}serialize(t){return t.push(this.id),t.writeF32(this.sortKey),y(t,this.records),t}static deserialize(t){const s=t.readInt32(),e=t.readF32(),i=new d(s,e);return i.records=T(t,l)??[],i}}d.byteSizeHint=2*Uint32Array.BYTES_PER_ELEMENT+l.byteSizeHint;function H(r){const t=r.map(({name:s,count:e,type:i})=>`${s}.${e}.${i}`).join(",");return g(t)}function h(r,t,s,e,i,n,o){if(r.primitiveName===t){for(const a in r)if(a===s){let u=e==null?void 0:e.readWithDefault(i,n,r[a]&&o);return r.type==="text"&&(u=u.toString()),void(r[a]=u)}}if("type"in r&&r.type!=null)switch(r.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(r.symbolLayers)for(const a of r.symbolLayers)h(a,t,s,e,i,n,o);break;case"CIMHatchFill":r.lineSymbol&&h(r.lineSymbol,t,s,e,i,n,o);break;case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if(r.type==="CIMVectorMarker"&&r.markerGraphics)for(const a of r.markerGraphics)h(a,t,s,e,i,n,o),h(a.symbol,t,s,e,i,n,o)}}const B=new Float32Array(1);new Uint32Array(B.buffer);function $(r,t){return 65535&r|t<<16}function X(r,t,s,e){const i=s.packPrecisionFactor??1;switch(s.type){case c.BYTE:if(s.count===1)r.setInt8(e+s.offset,t*i);else for(let n=0;n<s.count;n++){const o=n*Int8Array.BYTES_PER_ELEMENT;r.setInt8(e+s.offset+o,t[n]*i)}break;case c.UNSIGNED_BYTE:if(s.count===1)r.setUint8(e+s.offset,t*i);else for(let n=0;n<s.count;n++){const o=n*Uint8Array.BYTES_PER_ELEMENT;r.setUint8(e+s.offset+o,t[n]*i)}break;case c.SHORT:if(s.count===1)r.setInt16(e+s.offset,t*i,!0);else for(let n=0;n<s.count;n++){const o=n*Int16Array.BYTES_PER_ELEMENT;r.setInt16(e+s.offset+o,t[n]*i,!0)}break;case c.UNSIGNED_SHORT:if(s.count===1)r.setUint16(e+s.offset,t*i,!0);else for(let n=0;n<s.count;n++){const o=n*Uint16Array.BYTES_PER_ELEMENT;r.setUint16(e+s.offset+o,t[n]*i,!0)}break;case c.INT:if(s.count===1)r.setInt32(e+s.offset,t*i,!0);else for(let n=0;n<s.count;n++){const o=n*Int32Array.BYTES_PER_ELEMENT;r.setInt32(e+s.offset+o,t[n]*i,!0)}break;case c.UNSIGNED_INT:if(s.count===1)r.setUint32(e+s.offset,t*i,!0);else for(let n=0;n<s.count;n++){const o=n*Uint32Array.BYTES_PER_ELEMENT;r.setUint32(e+s.offset+o,t[n]*i,!0)}break;case c.FLOAT:if(s.count===1)r.setFloat32(e+s.offset,t*i,!0);else for(let n=0;n<s.count;n++){const o=n*Float32Array.BYTES_PER_ELEMENT;r.setFloat32(e+s.offset+o,t[n]*i,!0)}}}function K(r,t,s){switch(t.type){case c.BYTE:{if(t.count===1)return r.getInt8(s+t.offset);const e=[];for(let i=0;i<t.count;i++){const n=i*Int8Array.BYTES_PER_ELEMENT;e.push(r.getInt8(s+t.offset+n))}return e}case c.UNSIGNED_BYTE:{if(t.count===1)return r.getUint8(s+t.offset);const e=[];for(let i=0;i<t.count;i++){const n=i*Uint8Array.BYTES_PER_ELEMENT;e.push(r.getUint8(s+t.offset+n))}return e}case c.SHORT:{if(t.count===1)return r.getInt16(s+t.offset,!0);const e=[];for(let i=0;i<t.count;i++){const n=i*Int16Array.BYTES_PER_ELEMENT;e.push(r.getInt16(s+t.offset+n,!0))}return e}case c.UNSIGNED_SHORT:{if(t.count===1)return r.getUint16(s+t.offset,!0);const e=[];for(let i=0;i<t.count;i++){const n=i*Uint16Array.BYTES_PER_ELEMENT;e.push(r.getUint16(s+t.offset+n,!0))}return e}case c.INT:{if(t.count===1)return r.getInt32(s+t.offset,!0);const e=[];for(let i=0;i<t.count;i++){const n=i*Int32Array.BYTES_PER_ELEMENT;e.push(r.getInt32(s+t.offset+n,!0))}return e}case c.UNSIGNED_INT:{if(t.count===1)return r.getUint32(s+t.offset,!0);const e=[];for(let i=0;i<t.count;i++){const n=i*Uint32Array.BYTES_PER_ELEMENT;e.push(r.getUint32(s+t.offset+n,!0))}return e}case c.FLOAT:{if(t.count===1)return r.getFloat32(s+t.offset,!0);const e=[];for(let i=0;i<t.count;i++){const n=i*Float32Array.BYTES_PER_ELEMENT;e.push(r.getFloat32(s+t.offset+n,!0))}return e}}}const I=()=>M.getLogger("esri.views.2d.engine.webgl.Utils");function q(r){switch(r){case f.UNSIGNED_BYTE:return 1;case f.UNSIGNED_SHORT_4_4_4_4:return 2;case f.FLOAT:return 4;default:return void I().error(new m("webgl-utils",`Unable to handle type ${r}`))}}function j(r){switch(r){case f.UNSIGNED_BYTE:return Uint8Array;case f.UNSIGNED_SHORT_4_4_4_4:return Uint16Array;case f.FLOAT:return Float32Array;default:return void I().error(new m("webgl-utils",`Unable to handle type ${r}`))}}function Y(r){var s;const t={};for(const e in r){const i=r[e];let n=0;t[e]=i.map(o=>{const a=new b(o.name,o.count,o.type,n,0,o.normalized||!1);return n+=o.count*N(o.type),a}),(s=t[e])==null||s.forEach(o=>o.stride=n)}return t}const L=r=>{const t=new Map;for(const s in r)for(const e of r[s])t.set(e.name,e.location);return t},R=r=>{const t={};for(const s in r){const e=r[s];t[s]=e!=null&&e.length?e[0].stride:0}return t},E=new Map,V=(r,t)=>{if(!E.has(r)){const s=Y(t),e={strides:R(s),bufferLayouts:s,attributes:L(t)};E.set(r,e)}return E.get(r)},W=r=>r.includes("data:image/svg+xml");function J(r){const t=[];for(let s=0;s<r.length;s++)t.push(r.charCodeAt(s));return t}function Q(r,t,s){const e=new U(t.width,t.height);return e.dataType=t.dataType,t.depth&&(e.depth=t.depth),t.flipped&&(e.flipped=t.flipped),t.hasMipmap&&(e.hasMipmap=t.hasMipmap),e.internalFormat=t.internalFormat,t.isImmutable&&(e.isImmutable=t.isImmutable),t.isOpaque&&(e.isOpaque=t.isOpaque),t.maxAnisotropy&&(e.maxAnisotropy=t.maxAnisotropy),e.pixelFormat=t.pixelFormat,t.preMultiplyAlpha&&(e.preMultiplyAlpha=t.preMultiplyAlpha),t.samplingMode&&(e.samplingMode=t.samplingMode),t.target&&(e.target=t.target),e.uniform=t.uniform,t.unpackAlignment&&(e.unpackAlignment=t.unpackAlignment),t.wrapMode&&(e.wrapMode=t.wrapMode),new A(r,e,s)}function Z(r){return"url"in r&&"urlHash"in r?{...r,url:""}:r}class S{constructor(t,s,e,i,n,o,a,u,p=[]){this.entityTexel=t,this.anchorX=s,this.anchorY=e,this.directionX=i,this.directionY=n,this.maxScale=o,this.minScale=a,this.referenceBounds=u,this.bounds=p}serialize(t){t.push(this.entityTexel),t.writeF32(this.anchorX),t.writeF32(this.anchorY),t.writeF32(this.directionX),t.writeF32(this.directionY),t.writeF32(this.maxScale),t.writeF32(this.minScale),this.referenceBounds===null?(t.writeF32(0),t.writeF32(0),t.writeF32(0)):(t.writeF32(this.referenceBounds.size),t.writeF32(this.referenceBounds.offsetX),t.writeF32(this.referenceBounds.offsetY)),y(t,this.bounds)}static deserialize(t){const s=t.readInt32(),e=t.readF32(),i=t.readF32(),n=t.readF32(),o=t.readF32(),a=t.readF32(),u=t.readF32(),p=t.readF32(),_=t.readF32(),F=t.readF32(),w=T(t,x)??[];return new S(s,e,i,n,o,a,u,{size:p,offsetX:_,offsetY:F},w)}}export{Z as M,Q as T,T as a,V as b,h as c,j as d,X as e,q as f,J as j,K as n,H as o,S as r,d as s,l as t,$ as w,W as y};