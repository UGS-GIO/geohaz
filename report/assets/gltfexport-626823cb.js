import{t as ot,o as at,Q as ct}from"./request-a10d6950.js";import{x as J}from"./Extent-2b4578b8.js";import{a as j,s as ht}from"./Error-21d1d076.js";import{r as ft}from"./subclass-f7409b1b.js";import{b as C,i as K,f as lt,z as ut,n as O,G as W,w as mt,v as z,_ as st,h as pt}from"./mathUtils-19b6edfc.js";import{F as dt}from"./SpatialReference-428523ee.js";import{f as _t}from"./mat4-a6ac6b0f.js";import{o as gt,e as wt}from"./mat4f64-9a8384aa.js";import{N as Tt,T as At}from"./quat-064ab1d0.js";import{o as yt,r as bt,e as Et}from"./quatf64-81e039e4.js";import{i as Rt}from"./MeshLocalVertexSpace-48f1035e.js";import{m as xt}from"./Mesh-a1b58a69.js";import{f as Nt,C as It}from"./georeference-a2be6426.js";import{C as g,D as A}from"./enums-52934aad.js";import{R as St}from"./typedArrayUtil-2af43698.js";import{r as k}from"./resourceUtils-e5874b54.js";import"./JSONSupport-acf2865c.js";import"./promiseUtils-1d963c7c.js";import"./time-0817624a.js";import"./cast-e7a2f9aa.js";import"./jsonMap-5ba4a9c2.js";import"./assets-6fd92e57.js";import"./mat3f64-e19cdcb8.js";import"./vec42-a95eff2d.js";import"./Clonable-b71fa929.js";import"./enumeration-4a4e87c4.js";import"./Loadable-8a1ead8b.js";import"./Promise-ec74e14b.js";import"./reactiveUtils-e7d9f86e.js";import"./Evented-b5127116.js";import"./Collection-aa6ef54b.js";import"./SimpleObservable-ae589a25.js";import"./Polyline-013cde1f.js";import"./aaBoundingRect-aef00841.js";import"./Axis-30be7e73.js";import"./Color-e1a6dfab.js";import"./colorUtils-ac6863dc.js";import"./imageUtils-2745d713.js";import"./persistableUrlUtils-ca6bb38d.js";import"./meshVertexSpaceUtils-a98cf1bd.js";import"./vec3-10e9217f.js";import"./earcut-9ee3ebef.js";import"./_commonjsHelpers-2f3e7994.js";import"./DoubleArray-d7e400b4.js";import"./Indices-968b5cdc.js";import"./deduplicate-4feec8ff.js";import"./geometry-31b45acd.js";import"./typeUtils-3056a943.js";import"./plane-f835f029.js";import"./vec2f64-b65bfd66.js";import"./vec4f64-430e4feb.js";import"./triangle-4b6d6bb2.js";import"./Util-5ae70216.js";import"./ObjectStack-80adc7e7.js";import"./lineSegment-9b648b01.js";import"./basicInterfaces-11f56cb3.js";import"./VertexAttribute-c2df436e.js";import"./aaBoundingBox-7242ce3e.js";import"./projection-41da473c.js";import"./projectBuffer-af7b4ad9.js";import"./zscale-d7e12601.js";import"./External-e1bc87f6.js";import"./infoFor3D-24efd44a.js";import"./mat3-def297a7.js";import"./computeTranslationToOriginAndRotation-3ac32984.js";import"./BufferView-6e304e0e.js";import"./vec2-f44efd17.js";function Mt(i){const t=it(i);return t!=null?t.toDataURL():""}async function X(i){const t=it(i);if(t==null)throw new j("imageToArrayBuffer","Unsupported image type");const e=await Ot(i),s=await new Promise(r=>t.toBlob(r,e));if(!s)throw new j("imageToArrayBuffer","Failed to encode image");return{data:await s.arrayBuffer(),type:e}}async function Ot(i){if(!(i instanceof HTMLImageElement))return"image/png";const t=i.src;if(ot(t)){const e=at(t);return(e==null?void 0:e.mediaType)==="image/jpeg"?e.mediaType:"image/png"}return/\.png$/i.test(t)?"image/png":/\.(jpg|jpeg)$/i.test(t)?"image/jpeg":"image/png"}function it(i){if(i instanceof HTMLCanvasElement)return i;if(i instanceof HTMLVideoElement)return null;const t=document.createElement("canvas");t.width=i.width,t.height=i.height;const e=t.getContext("2d");return i instanceof HTMLImageElement?e.drawImage(i,0,0,i.width,i.height):i instanceof ImageData&&e.putImageData(i,0,0),t}function Bt(i){const t=[],e=new Uint8Array(i);for(let s=0;s<e.length;s++)t.push(String.fromCharCode(e[s]));return"data:application/octet-stream;base64,"+btoa(t.join(""))}function Lt(i){if(i.byteLength<8)return!1;const t=new Uint8Array(i);return t[0]===137&&t[1]===80&&t[2]===78&&t[3]===71&&t[4]===13&&t[5]===10&&t[6]===26&&t[7]===10}var V;(function(i){i[i.JSON=1313821514]="JSON",i[i.BIN=5130562]="BIN"})(V||(V={}));let M=class N{constructor(t,e){if(!t)throw new Error("GLB requires a JSON gltf chunk");this._length=N.HEADER_SIZE,this._length+=N.CHUNK_HEADER_SIZE;const s=this._textToArrayBuffer(t);if(this._length+=this._alignTo(s.byteLength,4),e&&(this._length+=N.CHUNK_HEADER_SIZE,this._length+=e.byteLength,e.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this._length),this._outView=new DataView(this.buffer),this._writeHeader();const r=this._writeChunk(s,12,V.JSON,32);e&&this._writeChunk(e,r,V.BIN)}_writeHeader(){this._outView.setUint32(0,N.MAGIC,!0),this._outView.setUint32(4,N.VERSION,!0),this._outView.setUint32(8,this._length,!0)}_writeChunk(t,e,s,r=0){const n=this._alignTo(t.byteLength,4);for(this._outView.setUint32(e,n,!0),this._outView.setUint32(e+=4,s,!0),this._writeArrayBuffer(this._outView.buffer,t,e+=4,0,t.byteLength),e+=t.byteLength;e%4;)r&&this._outView.setUint8(e,r),e++;return e}_writeArrayBuffer(t,e,s,r,n){new Uint8Array(t,s,n).set(new Uint8Array(e,r,n),0)}_textToArrayBuffer(t){return new TextEncoder().encode(t).buffer}_alignTo(t,e){return e*Math.ceil(t/e)}};M.HEADER_SIZE=12,M.CHUNK_HEADER_SIZE=8,M.MAGIC=1179937895,M.VERSION=2;var E,y,b,T,Q,F,q;(function(i){i[i.External=0]="External",i[i.DataURI=1]="DataURI",i[i.GLB=2]="GLB"})(E||(E={})),function(i){i[i.External=0]="External",i[i.DataURI=1]="DataURI",i[i.GLB=2]="GLB"}(y||(y={})),function(i){i[i.ARRAY_BUFFER=34962]="ARRAY_BUFFER",i[i.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(b||(b={})),function(i){i.SCALAR="SCALAR",i.VEC2="VEC2",i.VEC3="VEC3",i.VEC4="VEC4",i.MAT2="MAT2",i.MAT3="MAT3",i.MAT4="MAT4"}(T||(T={})),function(i){i[i.POINTS=0]="POINTS",i[i.LINES=1]="LINES",i[i.LINE_LOOP=2]="LINE_LOOP",i[i.LINE_STRIP=3]="LINE_STRIP",i[i.TRIANGLES=4]="TRIANGLES",i[i.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",i[i.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(Q||(Q={})),function(i){i.OPAQUE="OPAQUE",i.MASK="MASK",i.BLEND="BLEND"}(F||(F={})),function(i){i[i.NoColor=0]="NoColor",i[i.FaceColor=1]="FaceColor",i[i.VertexColor=2]="VertexColor"}(q||(q={}));let Ct=class{constructor(t,e,s,r,n){this._buffer=t,this._componentType=s,this._dataType=r,this._data=[],this._isFinalized=!1,this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,e.bufferViews||(e.bufferViews=[]),this.index=e.bufferViews.length,this._bufferView={buffer:t.index,byteLength:-1,target:n};const o=this._getElementSize();o>=4&&n!==b.ELEMENT_ARRAY_BUFFER&&(this._bufferView.byteStride=o),e.bufferViews.push(this._bufferView),this._numComponentsForDataType=this._calculateNumComponentsForDataType()}push(t){const e=this._data.length;if(this._data.push(t),this._accessorIndex>=0){const s=e%this._numComponentsForDataType,r=this._accessorMin[s];this._accessorMin[s]=typeof r!="number"?t:Math.min(r,t);const n=this._accessorMax[s];this._accessorMax[s]=typeof n!="number"?t:Math.max(n,t)}}get dataSize(){return this._data.length*this._sizeComponentType()}get byteSize(){function t(e,s){return s*Math.ceil(e/s)}return t(this.dataSize,4)}getByteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}get byteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}_createTypedArray(t,e){switch(this._componentType){case g.BYTE:return new Int8Array(t,e);case g.FLOAT:return new Float32Array(t,e);case g.SHORT:return new Int16Array(t,e);case g.UNSIGNED_BYTE:return new Uint8Array(t,e);case g.UNSIGNED_INT:return new Uint32Array(t,e);case g.UNSIGNED_SHORT:return new Uint16Array(t,e)}}writeOutToBuffer(t,e){this._createTypedArray(t,e).set(this._data)}writeAsync(t){if(this._asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this._asyncWritePromise=t.then(e=>{const s=new Uint8Array(e);for(let r=0;r<s.length;++r)this._data.push(s[r]);delete this._asyncWritePromise}),this._asyncWritePromise}startAccessor(t){if(this._accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this._accessorIndex=this._data.length,this._accessorAttribute=t;const e=this._numComponentsForDataType;this._accessorMin=new Array(e),this._accessorMax=new Array(e)}endAccessor(){if(this._accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");const t=this._getElementSize(),e=this._numComponentsForDataType,s=(this._data.length-this._accessorIndex)/e;if(s%1)throw new Error("An accessor was ended with missing component values");for(let n=0;n<this._accessorMin.length;++n)typeof this._accessorMin[n]!="number"&&(this._accessorMin[n]=0),typeof this._accessorMax[n]!="number"&&(this._accessorMax[n]=0);const r={byteOffset:t*(this._accessorIndex/e),componentType:this._componentType,count:s,type:this._dataType,min:this._accessorMin,max:this._accessorMax,name:this._accessorAttribute};switch(this._accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this._componentType){case g.UNSIGNED_BYTE:case g.UNSIGNED_SHORT:r.normalized=!0}}return this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,r}get finalized(){return this._finalizedPromise?this._finalizedPromise:this._isFinalized?this._finalizedPromise=Promise.resolve():this._finalizedPromise=new Promise(t=>this._finalizedPromiseResolve=t)}async finalize(){const t=this._bufferView,e=this._buffer.getViewFinalizePromises(this);this._asyncWritePromise&&e.push(this._asyncWritePromise),await Promise.allSettled(e),this._isFinalized=!0,t.byteOffset=this.getByteOffset(),t.byteLength=this.dataSize,this._finalizedPromiseResolve&&this._finalizedPromiseResolve()}_getElementSize(){return this._sizeComponentType()*this._numComponentsForDataType}_sizeComponentType(){switch(this._componentType){case g.BYTE:case g.UNSIGNED_BYTE:return 1;case g.SHORT:case g.UNSIGNED_SHORT:return 2;case g.UNSIGNED_INT:case g.FLOAT:return 4}}_calculateNumComponentsForDataType(){switch(this._dataType){case T.SCALAR:return 1;case T.VEC2:return 2;case T.VEC3:return 3;case T.VEC4:case T.MAT2:return 4;case T.MAT3:return 9;case T.MAT4:return 16}}},tt=class{constructor(t){this._gltf=t,this._bufferViews=[],this._isFinalized=!1,t.buffers||(t.buffers=[]),this.index=t.buffers.length;const e={byteLength:-1};t.buffers.push(e),this._buffer=e}addBufferView(t,e,s){if(this._finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const r=new Ct(this,this._gltf,t,e,s);return this._bufferViews.push(r),r}getByteOffset(t){let e=0;for(const s of this._bufferViews){if(s===t)return e;e+=s.byteSize}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(t){const e=[];for(const s of this._bufferViews){if(t&&s===t)return e;e.push(s.finalized)}return e}getArrayBuffer(){if(!this._isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const t=this._getTotalSize(),e=new ArrayBuffer(t);let s=0;for(const r of this._bufferViews)r.writeOutToBuffer(e,s),s+=r.byteSize;return e}finalize(){var t;if(this._finalizePromise)throw new Error(`Buffer ${this.index} was already finalized`);return this._finalizePromise=Promise.allSettled(this.getViewFinalizePromises()).then(()=>{this._isFinalized=!0;const e=this.getArrayBuffer();this._buffer.byteLength=e.byteLength,this._buffer.uri=e}),(t=this._gltf.extras)==null||t.promises.push(this._finalizePromise),this._finalizePromise}_getTotalSize(){let t=0;for(const e of this._bufferViews)t+=e.byteSize;return t}};function zt(i,t){if(i.components)for(const e of i.components)e.faces&&e.shading==="smooth"&&Vt(e,t)}function Vt(i,t){t.normal==null&&(t.normal=new Float32Array(t.position.length));const e=i.faces,{position:s,normal:r}=t,n=e.length/3;for(let o=0;o<n;++o){const a=3*e[3*o],h=3*e[3*o+1],l=3*e[3*o+2],c=C(Ft,s[a],s[a+1],s[a+2]),u=C(Dt,s[h],s[h+1],s[h+2]),w=C(Pt,s[l],s[l+1],s[l+2]),d=K(u,u,c),p=K(w,w,c),m=lt(d,d,p);r[a]+=m[0],r[a+1]+=m[1],r[a+2]+=m[2],r[h]+=m[0],r[h+1]+=m[1],r[h+2]+=m[2],r[l]+=m[0],r[l+1]+=m[1],r[l+2]+=m[2]}for(let o=0;o<r.length;o+=3)C(x,r[o],r[o+1],r[o+2]),ut(x,x),r[o]=x[0],r[o+1]=x[1],r[o+2]=x[2]}const Ft=O(),Dt=O(),Pt=O(),x=O(),H=()=>ht.getLogger("gltf");class Ut{constructor(t,e,s){this.params={},this._materialMap=new Array,this._imageMap=new Map,this._textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:t.copyright,generator:t.generator},extras:{options:e,binChunkBuffer:null,promises:[]}},s&&(this.params=s),this._addScenes(t)}_addScenes(t){this.gltf.scene=t.defaultScene;const e=this.gltf.extras,s=e.options.bufferOutputType===E.GLB||e.options.imageOutputType===y.GLB;s&&(e.binChunkBuffer=new tt(this.gltf)),t.forEachScene(r=>{this._addScene(r)}),s&&e.binChunkBuffer.finalize()}_addScene(t){this.gltf.scenes||(this.gltf.scenes=[]);const e={};t.name&&(e.name=t.name),t.forEachNode(s=>{e.nodes||(e.nodes=[]),e.nodes.push(...this._addNodes(s))}),this.gltf.scenes.push(e)}_addNodes(t){this.gltf.nodes||(this.gltf.nodes=[]);const e={};t.name&&(e.name=t.name);const s=t.translation;W(s,mt)||(e.translation=z(s));const r=t.rotation;Tt(r,yt)||(e.rotation=bt(r));const n=t.scale;W(n,st)||(e.scale=z(n));const o=this.gltf.nodes.length;if(this.gltf.nodes.push(e),t.mesh&&t.mesh.vertexAttributes.position){const a=this._createMeshes(t.mesh),h=[o];if(a.length===1)this._addMesh(e,a[0]);else for(const l of a){const c={};this._addMesh(c,l),h.push(this.gltf.nodes.length),this.gltf.nodes.push(c)}return h}return t.forEachNode(a=>{e.children||(e.children=[]),e.children.push(...this._addNodes(a))}),[o]}_addMesh(t,e){var r;(r=this.gltf).meshes??(r.meshes=[]);const s=this.gltf.meshes.length;this.gltf.meshes.push(e),t.mesh=s}_createMeshes(t){const e=this.gltf.extras,s=e.options.bufferOutputType===E.GLB;let r;r=s?e.binChunkBuffer:new tt(this.gltf),this.params.origin||(this.params.origin=t.anchor);const{ignoreLocalTransform:n}=this.params,o=n?null:t.transform,{vertexSpace:a,spatialReference:h}=t,l=a.origin,c=t.vertexAttributes;let u=null;if(a.type==="local"){const f=dt(h);_t(et,(o==null?void 0:o.localMatrix)??gt,[f,f,f]),u=Nt(c,et)}else{const f=n?new Rt({origin:l?z(l):null}):a;u=It(c,f,o,this.params.origin,{geographic:this.params.geographic,unit:"meters"})}if(u==null)throw new j("Error during gltf export.");c.position&&u.position===c.position&&(u.position=c.position.slice()),c.normal&&u.normal===c.normal&&(u.normal=c.normal.slice()),c.tangent&&u.tangent===c.tangent&&(u.tangent=c.tangent.slice()),zt(t,u),this._flipYZAxis(u);const w=r.addBufferView(g.FLOAT,T.VEC3,b.ARRAY_BUFFER);let d,p,m,_;u.normal&&(d=r.addBufferView(g.FLOAT,T.VEC3,b.ARRAY_BUFFER)),c.uv&&(p=r.addBufferView(g.FLOAT,T.VEC2,b.ARRAY_BUFFER)),u.tangent&&(m=r.addBufferView(g.FLOAT,T.VEC4,b.ARRAY_BUFFER)),c.color&&(_=r.addBufferView(g.UNSIGNED_BYTE,T.VEC4,b.ARRAY_BUFFER)),w.startAccessor("POSITION"),d&&d.startAccessor("NORMAL"),p&&p.startAccessor("TEXCOORD_0"),m&&m.startAccessor("TANGENT"),_&&_.startAccessor("COLOR_0");const R=u.position.length/3,{position:D,normal:B,tangent:I}=u,{color:S,uv:P}=c;for(let f=0;f<R;++f)w.push(D[3*f]),w.push(D[3*f+1]),w.push(D[3*f+2]),d&&B!=null&&(d.push(B[3*f]),d.push(B[3*f+1]),d.push(B[3*f+2])),p&&P!=null&&(p.push(P[2*f]),p.push(P[2*f+1])),m&&I!=null&&(m.push(I[4*f]),m.push(I[4*f+1]),m.push(I[4*f+2]),m.push(I[4*f+3])),_&&S!=null&&(_.push(S[4*f]),_.push(S[4*f+1]),_.push(S[4*f+2]),_.push(S[4*f+3]));const nt=w.endAccessor(),Z=this._addAccessor(w.index,nt);let U,G,$,v,L;if(d){const f=d.endAccessor();U=this._addAccessor(d.index,f)}if(p){const f=p.endAccessor();G=this._addAccessor(p.index,f)}if(m){const f=m.endAccessor();$=this._addAccessor(m.index,f)}if(_){const f=_.endAccessor();v=this._addAccessor(_.index,f)}const Y=[];return t.components&&t.components.length>0&&t.components[0].faces?(L=r.addBufferView(g.UNSIGNED_INT,T.SCALAR,b.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(L,t.components,Y,Z,U,G,$,v)):this._addMeshVertexNonIndexed(t.components,Y,Z,U,G,$,v),w.finalize(),d&&d.finalize(),p&&p.finalize(),m&&m.finalize(),L&&L.finalize(),_&&_.finalize(),s||r.finalize(),Y}_flipYZAxis({position:t,normal:e,tangent:s}){this._flipYZBuffer(t,3),this._flipYZBuffer(e,3),this._flipYZBuffer(s,4)}_flipYZBuffer(t,e){if(t!=null)for(let s=1,r=2;s<t.length;s+=e,r+=e){const n=t[s],o=t[r];t[s]=o,t[r]=-n}}_addMaterial(t){if(t===null)return;const e=this._materialMap.indexOf(t);if(e!==-1)return e;this.gltf.materials||(this.gltf.materials=[]);const s={};switch(t.alphaMode){case"mask":s.alphaMode=F.MASK;break;case"auto":case"blend":s.alphaMode=F.BLEND}t.alphaCutoff!==.5&&(s.alphaCutoff=t.alphaCutoff),t.doubleSided&&(s.doubleSided=t.doubleSided),s.pbrMetallicRoughness={};const r=a=>a**2.1,n=a=>{const h=a.toRgba();return h[0]=r(h[0]/255),h[1]=r(h[1]/255),h[2]=r(h[2]/255),h};if(t.color!=null&&(s.pbrMetallicRoughness.baseColorFactor=n(t.color)),t.colorTexture!=null&&(s.pbrMetallicRoughness.baseColorTexture=this._createTextureInfo(t.colorTexture,t.colorTextureTransform)),t.normalTexture!=null&&(s.normalTexture=this._createTextureInfo(t.normalTexture,t.normalTextureTransform)),t instanceof xt){if(t.emissiveTexture!=null&&(s.emissiveTexture=this._createTextureInfo(t.emissiveTexture,t.emissiveTextureTransform)),t.emissiveColor!=null){const a=n(t.emissiveColor);s.emissiveFactor=[a[0],a[1],a[2]]}t.occlusionTexture!=null&&(s.occlusionTexture=this._createTextureInfo(t.occlusionTexture,t.occlusionTextureTransform)),t.metallicRoughnessTexture!=null&&(s.pbrMetallicRoughness.metallicRoughnessTexture=this._createTextureInfo(t.metallicRoughnessTexture,t.metallicRoughnessTextureTransform)),s.pbrMetallicRoughness.metallicFactor=t.metallic,s.pbrMetallicRoughness.roughnessFactor=t.roughness}else s.pbrMetallicRoughness.metallicFactor=1,s.pbrMetallicRoughness.roughnessFactor=1,H().warnOnce("Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back.");const o=this.gltf.materials.length;return this.gltf.materials.push(s),this._materialMap.push(t),o}_createTextureInfo(t,e){const s={index:this._addTexture(t)};return e&&(s.extensions||(s.extensions={}),s.extensions.KHR_texture_transform={scale:e.scale,offset:e.offset,rotation:pt(e.rotation)}),s}_addTexture(t){const e=this.gltf.textures??[];return this.gltf.textures=e,ft(this._textureMap,t,()=>{const s={sampler:this._addSampler(t),source:this._addImage(t)},r=e.length;return e.push(s),r})}_addImage(t){const e=this._imageMap.get(t);if(e!=null)return e;this.gltf.images||(this.gltf.images=[]);const s={};if(t.url)s.uri=t.url;else{const n=t.data;s.extras=n;for(let a=0;a<this.gltf.images.length;++a)if(n===this.gltf.images[a].extras)return a;const o=this.gltf.extras;switch(o.options.imageOutputType){case y.GLB:{const a=o.binChunkBuffer.addBufferView(g.UNSIGNED_BYTE,T.SCALAR);if(k(n))n.data!=null&&a.writeOutToBuffer(n.data,0);else{const h=X(n).then(({data:l,type:c})=>(s.mimeType=c,l));a.writeAsync(h).then(()=>{a.finalize()})}s.bufferView=a.index;break}case y.DataURI:if(k(n)){H().warnOnce("Image export for basis compressed textures not available.");break}s.uri=Mt(n);break;default:if(k(n)){H().warnOnce("Image export for basis compressed textures not available.");break}o.promises.push(X(n).then(({data:a,type:h})=>{s.uri=a,s.mimeType=h}))}}const r=this.gltf.images.length;return this.gltf.images.push(s),this._imageMap.set(t,r),r}_addSampler(t){this.gltf.samplers||(this.gltf.samplers=[]);let e=A.REPEAT,s=A.REPEAT;if(typeof t.wrap=="string")switch(t.wrap){case"clamp":e=A.CLAMP_TO_EDGE,s=A.CLAMP_TO_EDGE;break;case"mirror":e=A.MIRRORED_REPEAT,s=A.MIRRORED_REPEAT}else{switch(t.wrap.vertical){case"clamp":s=A.CLAMP_TO_EDGE;break;case"mirror":s=A.MIRRORED_REPEAT}switch(t.wrap.horizontal){case"clamp":e=A.CLAMP_TO_EDGE;break;case"mirror":e=A.MIRRORED_REPEAT}}const r={wrapS:e,wrapT:s};for(let o=0;o<this.gltf.samplers.length;++o)if(JSON.stringify(r)===JSON.stringify(this.gltf.samplers[o]))return o;const n=this.gltf.samplers.length;return this.gltf.samplers.push(r),n}_addAccessor(t,e){this.gltf.accessors||(this.gltf.accessors=[]);const s={bufferView:t,byteOffset:e.byteOffset,componentType:e.componentType,count:e.count,type:e.type,min:e.min,max:e.max,name:e.name};e.normalized&&(s.normalized=!0);const r=this.gltf.accessors.length;return this.gltf.accessors.push(s),r}_addMeshVertexIndexed(t,e,s,r,n,o,a,h){const l=new Map;for(const c of e){t.startAccessor("INDICES");for(let p=0;p<c.faces.length;++p)t.push(c.faces[p]);const u=t.endAccessor(),w={attributes:{POSITION:r},indices:this._addAccessor(t.index,u),material:this._addMaterial(c.material)};n&&c.shading!=="flat"&&(w.attributes.NORMAL=n),o&&(w.attributes.TEXCOORD_0=o),a&&c.shading!=="flat"&&(w.attributes.TANGENT=a),h&&(w.attributes.COLOR_0=h);const d=l.get(c.name);if(d)d.primitives.push(w);else{const p={name:c.name,primitives:[w]};l.set(c.name,p),s.push(p)}}}_addMeshVertexNonIndexed(t,e,s,r,n,o,a){const h={primitives:[]};e.push(h);const l={attributes:{POSITION:s}};r&&(l.attributes.NORMAL=r),n&&(l.attributes.TEXCOORD_0=n),o&&(l.attributes.TANGENT=o),a&&(l.attributes.COLOR_0=a),t&&(l.material=this._addMaterial(t[0].material)),h.primitives.push(l)}}const et=wt();let Gt=class{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(t){if(this._scenes.includes(t))throw new Error("Scene already added");this._scenes.push(t)}removeScene(t){St(this._scenes,t)}forEachScene(t){this._scenes.forEach(t)}};class $t{constructor(){this.name="",this._nodes=[]}addNode(t){if(this._nodes.includes(t))throw new Error("Node already added");this._nodes.push(t)}forEachNode(t){this._nodes.forEach(t)}}class vt{constructor(t){this.mesh=t,this.name="",this.translation=O(),this.rotation=Et(),this.scale=z(st),this._nodes=[]}addNode(t){if(this._nodes.includes(t))throw new Error("Node already added");this._nodes.push(t)}forEachNode(t){this._nodes.forEach(t)}set rotationAngles(t){At(this.rotation,t[0],t[1],t[2])}}const Yt="model.gltf",rt="model.glb";async function kt(i,t,e){var p;const s=new Ut(i,t=t||{},e);let r=s.params;r?r.origin||(r.origin=new J({x:-1,y:-1,z:-1})):r={origin:new J({x:-1,y:-1,z:-1})};const n=r.origin,o=s.gltf,a=((p=o.extras)==null?void 0:p.promises)??[];let h=1,l=1,c=null;await Promise.allSettled(a);const u={origin:n};delete o.extras;const w=typeof t.jsonSpacing=="number"?t.jsonSpacing:4,d=JSON.stringify(o,(m,_)=>{if(m!=="extras"){if(_ instanceof ArrayBuffer){if(Lt(_))switch(t.imageOutputType){case y.DataURI:case y.GLB:break;case y.External:default:{const R=`img${l}.png`;return l++,u[R]=_,R}}switch(t.bufferOutputType){case E.DataURI:return Bt(_);case E.GLB:if(c)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(c=_);case E.External:default:{const R=`data${h}.bin`;return h++,u[R]=_,R}}}return _}},w);return t.bufferOutputType===E.GLB||t.imageOutputType===y.GLB?u[rt]=new M(d,c).buffer:u[Yt]=d,u}function Ht(i,t){return kt(i,{bufferOutputType:E.GLB,imageOutputType:y.GLB,jsonSpacing:0},t)}class jt{constructor(t,e){this._file={type:"model/gltf-binary",data:t},this.origin=e}buffer(){return Promise.resolve(this._file)}download(t){ct(new Blob([this._file.data],{type:this._file.type}),t)}}function hs(i,t){const e=new Gt,s=new $t;return e.addScene(s),s.addNode(new vt(i)),Ht(e,t).then(r=>new jt(r[rt],r.origin))}export{hs as toBinaryGLTF};