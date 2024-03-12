import{u as w}from"./Color-e1a6dfab.js";import{U as F}from"./request-a10d6950.js";import{r as R}from"./subclass-f7409b1b.js";import{a3 as B,r as P,M as z}from"./mathUtils-19b6edfc.js";import{j as C}from"./mat3-def297a7.js";import{e as S}from"./mat3f64-e19cdcb8.js";import{r as D}from"./vec4f64-430e4feb.js";import{l as L,a as N,m as U,h as G,c as V}from"./Mesh-a1b58a69.js";import{c as O,x as I,L as k,O as A,i as j,E as q,T as K,u as Q}from"./BufferView-6e304e0e.js";import{a as H,f as J,b as W,o as E}from"./vec3-10e9217f.js";import{n as X,l as Y,a as Z,d as tt,r as rt,e as et,g as h,h as ot,i as nt,j as M,k as it,m as st,o as lt}from"./DefaultMaterial_COLOR_GAMMA-87fbf47f.js";import{e as at}from"./types-1305598a.js";import{V as ut}from"./georeference-a2be6426.js";import{r as mt}from"./resourceUtils-e5874b54.js";import{D as v}from"./enums-52934aad.js";import"./colorUtils-ac6863dc.js";import"./Error-21d1d076.js";import"./typedArrayUtil-2af43698.js";import"./JSONSupport-acf2865c.js";import"./promiseUtils-1d963c7c.js";import"./time-0817624a.js";import"./Loadable-8a1ead8b.js";import"./Promise-ec74e14b.js";import"./reactiveUtils-e7d9f86e.js";import"./Evented-b5127116.js";import"./Collection-aa6ef54b.js";import"./SimpleObservable-ae589a25.js";import"./Extent-2b4578b8.js";import"./SpatialReference-428523ee.js";import"./jsonMap-5ba4a9c2.js";import"./assets-6fd92e57.js";import"./cast-e7a2f9aa.js";import"./Polyline-013cde1f.js";import"./aaBoundingRect-aef00841.js";import"./Axis-30be7e73.js";import"./imageUtils-2745d713.js";import"./persistableUrlUtils-ca6bb38d.js";import"./Clonable-b71fa929.js";import"./MeshLocalVertexSpace-48f1035e.js";import"./enumeration-4a4e87c4.js";import"./meshVertexSpaceUtils-a98cf1bd.js";import"./earcut-9ee3ebef.js";import"./_commonjsHelpers-2f3e7994.js";import"./DoubleArray-d7e400b4.js";import"./Indices-968b5cdc.js";import"./deduplicate-4feec8ff.js";import"./geometry-31b45acd.js";import"./typeUtils-3056a943.js";import"./plane-f835f029.js";import"./vec42-a95eff2d.js";import"./mat4f64-9a8384aa.js";import"./quatf64-81e039e4.js";import"./vec2f64-b65bfd66.js";import"./triangle-4b6d6bb2.js";import"./Util-5ae70216.js";import"./ObjectStack-80adc7e7.js";import"./lineSegment-9b648b01.js";import"./basicInterfaces-11f56cb3.js";import"./VertexAttribute-c2df436e.js";import"./aaBoundingBox-7242ce3e.js";import"./projection-41da473c.js";import"./projectBuffer-af7b4ad9.js";import"./zscale-d7e12601.js";import"./External-e1bc87f6.js";import"./infoFor3D-24efd44a.js";import"./mat4-a6ac6b0f.js";import"./quat-064ab1d0.js";import"./computeTranslationToOriginAndRotation-3ac32984.js";import"./vec2-f44efd17.js";import"./Version-ef27dfc4.js";import"./compilerUtils-7f5a3043.js";function ct(t,r,e){const u=t.typedBuffer,n=t.typedBufferStride,s=r.typedBuffer,m=r.typedBufferStride,l=e?e.count:r.count;let i=((e==null?void 0:e.dstIndex)??0)*n,f=((e==null?void 0:e.srcIndex)??0)*m;for(let a=0;a<l;++a){for(let o=0;o<9;++o)u[i+o]=s[f+o];i+=n,f+=m}}Object.freeze(Object.defineProperty({__proto__:null,copy:ct},Symbol.toStringTag,{value:"Module"}));function ft(t,r,e){const u=t.typedBuffer,n=t.typedBufferStride,s=r.typedBuffer,m=r.typedBufferStride,l=e?e.count:r.count;let i=((e==null?void 0:e.dstIndex)??0)*n,f=((e==null?void 0:e.srcIndex)??0)*m;for(let a=0;a<l;++a){for(let o=0;o<16;++o)u[i+o]=s[f+o];i+=n,f+=m}}Object.freeze(Object.defineProperty({__proto__:null,copy:ft},Symbol.toStringTag,{value:"Module"}));function y(t,r){return new t(new ArrayBuffer(r*t.ElementCount*at(t.ElementType)))}async function Ur(t,r,e){const u=new X(pt(e)),n=(await Y(u,r,e,!0)).model,s=n.lods.shift(),m=new Map,l=new Map;n.textures.forEach(($,b)=>m.set(b,gt($))),n.materials.forEach(($,b)=>l.set(b,$t($,m)));const i=xt(s);for(const $ of i.parts)yt(i,$,l);const{position:f,normal:a,tangent:o,color:c,texCoord0:p}=i.vertexAttributes,x={position:f.typedBuffer,normal:a!=null?a.typedBuffer:null,tangent:o!=null?o.typedBuffer:null,uv:p!=null?p.typedBuffer:null,color:c!=null?c.typedBuffer:null},g=ut(x,t,e);return{transform:g.transform,vertexSpace:g.vertexSpace,components:i.components,spatialReference:t.spatialReference,vertexAttributes:new L({position:g.vertexAttributes.position,normal:g.vertexAttributes.normal,tangent:g.vertexAttributes.tangent,color:x.color,uv:x.uv})}}function pt(t){const r=t==null?void 0:t.resolveFile;return r?{busy:!1,request:async(e,u,n)=>{const s=(r==null?void 0:r(e))??e;return(await F(s,{responseType:u==="image"?"image":u==="binary"?"array-buffer":"json",signal:n!=null?n.signal:null})).data}}:null}function T(t,r){if(t==null)return"-";const e=t.typedBuffer;return`${R(r,e.buffer,()=>r.size)}/${e.byteOffset}/${e.byteLength}`}function dt(t){return t!=null?t.toString():"-"}function xt(t){let r=0;const e={color:!1,tangent:!1,normal:!1,texCoord0:!1},u=new Map,n=new Map,s=[];for(const m of t.parts){const{attributes:{position:l,normal:i,color:f,tangent:a,texCoord0:o}}=m,c=`
      ${T(l,u)}/
      ${T(i,u)}/
      ${T(f,u)}/
      ${T(a,u)}/
      ${T(o,u)}/
      ${dt(m.transform)}
    `;let p=!1;const x=R(n,c,()=>(p=!0,{start:r,length:l.count}));p&&(r+=l.count),i&&(e.normal=!0),f&&(e.color=!0),a&&(e.tangent=!0),o&&(e.texCoord0=!0),s.push({gltf:m,writeVertices:p,region:x})}return{vertexAttributes:{position:y(K,r),normal:e.normal?y(j,r):null,tangent:e.tangent?y(O,r):null,color:e.color?y(I,r):null,texCoord0:e.texCoord0?y(Q,r):null},parts:s,components:[]}}function gt(t){return new N({data:(mt(t.data),t.data),wrap:ht(t.parameters.wrap)})}function $t(t,r){const e=new w(vt(t.color,t.opacity)),u=t.emissiveFactor?new w(wt(t.emissiveFactor)):null,n=s=>s?new V({scale:s.scale?[s.scale[0],s.scale[1]]:[1,1],rotation:z(s.rotation??0),offset:s.offset?[s.offset[0],s.offset[1]]:[0,0]}):null;return new U({color:e,colorTexture:r.get(t.textureColor),normalTexture:r.get(t.textureNormal),emissiveColor:u,emissiveTexture:r.get(t.textureEmissive),occlusionTexture:r.get(t.textureOcclusion),alphaMode:bt(t.alphaMode),alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,metallic:t.metallicFactor,roughness:t.roughnessFactor,metallicRoughnessTexture:r.get(t.textureMetallicRoughness),colorTextureTransform:n(t.colorTextureTransform),normalTextureTransform:n(t.normalTextureTransform),occlusionTextureTransform:n(t.occlusionTextureTransform),emissiveTextureTransform:n(t.emissiveTextureTransform),metallicRoughnessTextureTransform:n(t.metallicRoughnessTextureTransform)})}function yt(t,r,e){r.writeVertices&&Tt(t,r);const{indices:u,attributes:n,primitiveType:s,material:m}=r.gltf;let l=Z(u||n.position.count,s);const i=r.region.start;if(i){const f=new Uint32Array(l);for(let a=0;a<l.length;a++)f[a]+=i;l=f}t.components.push(new G({name:r.gltf.name,faces:l,material:e.get(m),shading:n.normal?"source":"flat",trustSourceNormals:!0}))}function Tt(t,r){const{position:e,normal:u,tangent:n,color:s,texCoord0:m}=t.vertexAttributes,l=r.region.start,{attributes:i,transform:f}=r.gltf,a=i.position.count;if(H(e.slice(l,a),i.position,f),i.normal!=null&&u!=null){const o=C(S(),f),c=u.slice(l,a);J(c,i.normal,o),B(o)&&W(c,c)}else u!=null&&tt(u,0,0,1,{dstIndex:l,count:a});if(i.tangent!=null&&n!=null){const o=C(S(),f),c=n.slice(l,a);rt(c,i.tangent,o),B(o)&&et(c,c)}else n!=null&&h(n,0,0,1,1,{dstIndex:l,count:a});if(i.texCoord0!=null&&m!=null?ot(m.slice(l,a),i.texCoord0):m!=null&&nt(m,0,0,{dstIndex:l,count:a}),i.color!=null&&s!=null){const o=i.color,c=s.slice(l,a);if(o.elementCount===4)o instanceof O?M(c,o,255):o instanceof I?it(c,o):o instanceof k&&M(c,o,1/256);else{h(c,255,255,255,255);const p=A.fromTypedArray(c.typedBuffer,c.typedBufferStride);o instanceof j?E(p,o,255):o instanceof A?st(p,o):o instanceof q&&E(p,o,1/256)}}else s!=null&&h(s.slice(l,a),255,255,255,255)}function bt(t){switch(t){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function ht(t){return{horizontal:_(t.s),vertical:_(t.t)}}function _(t){switch(t){case v.CLAMP_TO_EDGE:return"clamp";case v.MIRRORED_REPEAT:return"mirror";case v.REPEAT:return"repeat"}}function d(t){return t**(1/lt)*255}function vt(t,r){return D(d(t[0]),d(t[1]),d(t[2]),r)}function wt(t){return P(d(t[0]),d(t[1]),d(t[2]))}export{Ur as loadGLTFMesh};
