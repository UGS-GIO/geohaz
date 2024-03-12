import{a as m,s as Y}from"./Error-21d1d076.js";import{h as k}from"./typedArrayUtil-2af43698.js";import{C as x,c as T,P as i,B as M,G as d,M as I,U as G,L as R,D as K,V as C}from"./enums-52934aad.js";const q=()=>Y.getLogger("esri.views.webgl.checkWebGLError");function j(t,e){switch(e){case t.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case t.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case t.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case t.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case t.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case t.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}const H=!!k("enable-feature:webgl-debug");function $(){return H}function he(){return H}function S(t){if($()){const e=t.getError();if(e){const r=j(t,e),a=new Error().stack;q().error(new m("webgl-error","WebGL error occurred",{message:r,stack:a}))}}}var O;(function(t){t[t.Texture=0]="Texture",t[t.RenderBuffer=1]="RenderBuffer"})(O||(O={}));function Z(t){switch(t){case x.BYTE:case x.UNSIGNED_BYTE:return 1;case x.SHORT:case x.UNSIGNED_SHORT:return 2;case x.FLOAT:case x.INT:case x.UNSIGNED_INT:return 4}}function J(t){const e=t.gl;switch(e.getError()){case e.NO_ERROR:return null;case e.INVALID_ENUM:return"An unacceptable value has been specified for an enumerated argument";case e.INVALID_VALUE:return"An unacceptable value has been specified for an argument";case e.INVALID_OPERATION:return"The specified command is not allowed for the current state";case e.INVALID_FRAMEBUFFER_OPERATION:return"The currently bound framebuffer is not framebuffer complete";case e.OUT_OF_MEMORY:return"Not enough memory is left to execute the command";case e.CONTEXT_LOST_WEBGL:return"WebGL context is lost"}return"Unknown error"}function _e(t,e,r,a,s=0){var l;const c=t.gl;t.bindBuffer(r);for(const n of a){const o=e.get(n.name);if(o===void 0){console.warn(`There is no location for vertex attribute '${n.name}' defined.`);continue}const _=s*n.stride;if(n.count<=4)c.vertexAttribPointer(o,n.count,n.type,n.normalized,n.stride,n.offset+_),c.enableVertexAttribArray(o),n.divisor>0&&t.gl.vertexAttribDivisor(o,n.divisor);else if(n.count===9)for(let h=0;h<3;h++)c.vertexAttribPointer(o+h,3,n.type,n.normalized,n.stride,n.offset+12*h+_),c.enableVertexAttribArray(o+h),n.divisor>0&&t.gl.vertexAttribDivisor(o+h,n.divisor);else if(n.count===16)for(let h=0;h<4;h++)c.vertexAttribPointer(o+h,4,n.type,n.normalized,n.stride,n.offset+16*h+_),c.enableVertexAttribArray(o+h),n.divisor>0&&((l=t.gl)==null||l.vertexAttribDivisor(o+h,n.divisor));else console.error("Unsupported vertex attribute element count: "+n.count);if($()){const h=J(t),u=Z(n.type),p=n.offset,E=Math.round(u/p)!==u/p?`. Offset not a multiple of stride. DataType requires ${u} bytes, but descriptor has an offset of ${p}`:"";h&&console.error(`Unable to bind vertex attribute "${n.name}" with baseInstanceOffset ${_}${E}:`,h,n)}}}function Q(t){switch(t){case d.ALPHA:case d.LUMINANCE:case d.RED:case d.RED_INTEGER:case i.R8:case i.R8I:case i.R8UI:case i.R8_SNORM:case M.STENCIL_INDEX8:return 1;case d.LUMINANCE_ALPHA:case d.RG:case d.RG_INTEGER:case i.RGBA4:case i.R16F:case i.R16I:case i.R16UI:case i.RG8:case i.RG8I:case i.RG8UI:case i.RG8_SNORM:case i.RGB565:case i.RGB5_A1:case M.DEPTH_COMPONENT16:return 2;case d.DEPTH_COMPONENT:case d.RGB:case d.RGB_INTEGER:case i.RGB8:case i.RGB8I:case i.RGB8UI:case i.RGB8_SNORM:case i.SRGB8:case M.DEPTH_COMPONENT24:return 3;case d.DEPTH_STENCIL:case d.DEPTH24_STENCIL8:case d.RGBA:case d.RGBA_INTEGER:case i.RGBA8:case i.R32F:case i.R11F_G11F_B10F:case i.RG16F:case i.R32I:case i.R32UI:case i.RG16I:case i.RG16UI:case i.RGBA8I:case i.RGBA8UI:case i.RGBA8_SNORM:case i.SRGB8_ALPHA8:case i.RGB9_E5:case i.RGB10_A2UI:case i.RGB10_A2:case M.DEPTH_STENCIL:case M.DEPTH_COMPONENT32F:case M.DEPTH24_STENCIL8:return 4;case M.DEPTH32F_STENCIL8:return 5;case i.RGB16F:case i.RGB16I:case i.RGB16UI:return 6;case i.RG32F:case i.RG32I:case i.RG32UI:case i.RGBA16F:case i.RGBA16I:case i.RGBA16UI:return 8;case i.RGB32F:case i.RGB32I:case i.RGB32UI:return 12;case i.RGBA32F:case i.RGBA32I:case i.RGBA32UI:return 16;case T.COMPRESSED_RGB_S3TC_DXT1_EXT:case T.COMPRESSED_RGBA_S3TC_DXT1_EXT:return .5;case T.COMPRESSED_RGBA_S3TC_DXT3_EXT:case T.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case T.COMPRESSED_R11_EAC:case T.COMPRESSED_SIGNED_R11_EAC:case T.COMPRESSED_RGB8_ETC2:case T.COMPRESSED_SRGB8_ETC2:case T.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case T.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return .5;case T.COMPRESSED_RG11_EAC:case T.COMPRESSED_SIGNED_RG11_EAC:case T.COMPRESSED_RGBA8_ETC2_EAC:case T.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}class ee{constructor(e=0,r=e){this.width=e,this.height=r,this.target=I.TEXTURE_2D,this.pixelFormat=d.RGBA,this.dataType=G.UNSIGNED_BYTE,this.samplingMode=R.LINEAR,this.wrapMode=K.REPEAT,this.maxAnisotropy=1,this.flipped=!1,this.hasMipmap=!1,this.isOpaque=!1,this.unpackAlignment=4,this.preMultiplyAlpha=!1,this.depth=1,this.isImmutable=!1}}function te(t){return t.width<=0||t.height<=0?0:Math.round(t.width*t.height*(t.hasMipmap?4/3:1)*(t.internalFormat==null?4:Q(t.internalFormat)))}class B extends ee{constructor(e,r){switch(super(),this.context=e,Object.assign(this,r),this.internalFormat){case i.R16F:case i.R16I:case i.R16UI:case i.R32F:case i.R32I:case i.R32UI:case i.R8_SNORM:case i.R8:case i.R8I:case i.R8UI:this.pixelFormat=d.RED}}static validate(e,r){return new B(e,r)}}const F=4;let re=class g{constructor(e,r=null,a=null){if(this.type=O.Texture,this._glName=null,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,"context"in e)this._descriptor=e,a=r;else{const s=B.validate(e,r);if(!s)throw new m("Texture descriptor invalid");this._descriptor=s}this._descriptor.target===I.TEXTURE_CUBE_MAP?this._setDataCubeMap(a):this.setData(a)}get glName(){return this._glName}get descriptor(){return this._descriptor}get usedMemory(){return te(this._descriptor)}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._glName&&this._descriptor.context.instanceCounter.decrement(C.Texture,this),this._descriptor.context.gl&&this._glName&&(this._descriptor.context.unbindTexture(this),this._descriptor.context.gl.deleteTexture(this._glName),this._glName=null)}release(){this.dispose()}resize(e,r){const a=this._descriptor;if(a.width!==e||a.height!==r){if(this._wasImmutablyAllocated)throw new m("Immutable textures can't be resized!");a.width=e,a.height=r,this._descriptor.target===I.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}_setDataCubeMap(e=null){for(let r=I.TEXTURE_CUBE_MAP_POSITIVE_X;r<=I.TEXTURE_CUBE_MAP_NEGATIVE_Z;r++)this._setData(e,r)}setData(e){this._setData(e)}_setData(e,r){var _;if(!((_=this._descriptor.context)!=null&&_.gl))return;const a=this._descriptor.context.gl;S(a),this._glName||(this._glName=a.createTexture(),this._glName&&this._descriptor.context.instanceCounter.increment(C.Texture,this)),e===void 0&&(e=null);const s=this._descriptor,c=r??s.target,l=P(c);e===null&&(s.width=s.width||F,s.height=s.height||F,l&&(s.depth=s.depth??1));const n=this._descriptor.context.bindTexture(this,g.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(g.TEXTURE_UNIT_FOR_UPDATES),w(s),this._configurePixelStorage(),S(a);const o=this._deriveInternalFormat();if(v(e)){let h="width"in e?e.width:e.codedWidth,u="height"in e?e.height:e.codedHeight;const p=1;e instanceof HTMLVideoElement&&(h=e.videoWidth,u=e.videoHeight),s.width&&s.height,l&&s.depth,s.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(c,o,s.hasMipmap,h,u,p),this._texImage(c,0,o,h,u,p,e),S(a),s.hasMipmap&&this.generateMipmap(),s.width||(s.width=h),s.height||(s.height=u),l&&!s.depth&&(s.depth=p)}else{const{width:h,height:u,depth:p}=s;if(h==null||u==null)throw new m("Width and height must be specified!");if(l&&p==null)throw new m("Depth must be specified!");if(s.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(c,o,s.hasMipmap,h,u,p),U(e)){const E=e.levels,D=X(c,h,u,p),f=Math.min(D-1,E.length-1);a.texParameteri(s.target,this._descriptor.context.gl.TEXTURE_MAX_LEVEL,f);const A=o;if(!ae(A))throw new m("Attempting to use compressed data with an uncompressed format!");this._forEachMipmapLevel((N,b,V,W)=>{const z=E[Math.min(N,E.length-1)];this._compressedTexImage(c,N,A,b,V,W,z)},f)}else this._texImage(c,0,o,h,u,p,e),S(a),s.hasMipmap&&this.generateMipmap()}L(a,this._descriptor),y(a,this._descriptor),se(this._descriptor.context,this._descriptor),S(a),this._descriptor.context.bindTexture(n,g.TEXTURE_UNIT_FOR_UPDATES)}updateData(e,r,a,s,c,l,n=0){l||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const o=this._descriptor,_=this._deriveInternalFormat(),{context:h,pixelFormat:u,dataType:p,target:E,isImmutable:D}=o;if(D&&!this._wasImmutablyAllocated)throw new m("Cannot update immutable texture before allocation!");const f=h.bindTexture(this,g.TEXTURE_UNIT_FOR_UPDATES,!0);(r<0||a<0||s>o.width||c>o.height||r+s>o.width||a+c>o.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage();const{gl:A}=h;n&&A.pixelStorei(A.UNPACK_SKIP_ROWS,n),v(l)?A.texSubImage2D(E,e,r,a,s,c,u,p,l):U(l)?A.compressedTexSubImage2D(E,e,r,a,s,c,_,l.levels[e]):A.texSubImage2D(E,e,r,a,s,c,u,p,l),n&&A.pixelStorei(A.UNPACK_SKIP_ROWS,0),h.bindTexture(f,g.TEXTURE_UNIT_FOR_UPDATES)}updateData3D(e,r,a,s,c,l,n,o){o||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const _=this._descriptor,h=this._deriveInternalFormat(),{context:u,pixelFormat:p,dataType:E,isImmutable:D,target:f}=_;if(D&&!this._wasImmutablyAllocated)throw new m("Cannot update immutable texture before allocation!");P(f)||console.warn("Attempting to set 3D texture data on a non-3D texture");const A=u.bindTexture(this,g.TEXTURE_UNIT_FOR_UPDATES);u.setActiveTexture(g.TEXTURE_UNIT_FOR_UPDATES),(r<0||a<0||s<0||c>_.width||l>_.height||n>_.depth||r+c>_.width||a+l>_.height||s+n>_.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage();const{gl:N}=u;if(U(o))o=o.levels[e],N.compressedTexSubImage3D(f,e,r,a,s,c,l,n,h,o);else{const b=o;N.texSubImage3D(f,e,r,a,s,c,l,n,p,E,b)}u.bindTexture(A,g.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const e=this._descriptor;if(!e.hasMipmap){if(this._wasImmutablyAllocated)throw new m("Cannot add mipmaps to immutable texture after allocation");e.hasMipmap=!0,this._samplingModeDirty=!0,w(e)}e.samplingMode===R.LINEAR?(this._samplingModeDirty=!0,e.samplingMode=R.LINEAR_MIPMAP_NEAREST):e.samplingMode===R.NEAREST&&(this._samplingModeDirty=!0,e.samplingMode=R.NEAREST_MIPMAP_NEAREST);const r=this._descriptor.context.bindTexture(this,g.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(g.TEXTURE_UNIT_FOR_UPDATES),this._descriptor.context.gl.generateMipmap(e.target),this._descriptor.context.bindTexture(r,g.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,w(this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._descriptor,r=e.context.gl;this._samplingModeDirty&&(L(r,e),this._samplingModeDirty=!1),this._wrapModeDirty&&(y(r,e),this._wrapModeDirty=!1)}_deriveInternalFormat(){if(this._descriptor.internalFormat!=null)return this._descriptor.internalFormat===d.DEPTH_STENCIL&&(this._descriptor.internalFormat=d.DEPTH24_STENCIL8),this._descriptor.internalFormat;switch(this._descriptor.dataType){case G.FLOAT:switch(this._descriptor.pixelFormat){case d.RGBA:return this._descriptor.internalFormat=i.RGBA32F;case d.RGB:return this._descriptor.internalFormat=i.RGB32F;default:throw new m("Unable to derive format")}case G.UNSIGNED_BYTE:switch(this._descriptor.pixelFormat){case d.RGBA:return this._descriptor.internalFormat=i.RGBA8;case d.RGB:return this._descriptor.internalFormat=i.RGB8}}return this._descriptor.internalFormat=this._descriptor.pixelFormat===d.DEPTH_STENCIL?d.DEPTH24_STENCIL8:this._descriptor.pixelFormat}_configurePixelStorage(){const e=this._descriptor.context.gl,{unpackAlignment:r,flipped:a,preMultiplyAlpha:s}=this._descriptor;e.pixelStorei(e.UNPACK_ALIGNMENT,r),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a?1:0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s?1:0)}_texStorage(e,r,a,s,c,l){const{gl:n}=this._descriptor.context;if(!ie(r))throw new m("Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;const o=a?X(e,s,c,l):1;if(P(e)){if(l==null)throw new m("Missing depth dimension for 3D texture upload");n.texStorage3D(e,o,r,s,c,l)}else n.texStorage2D(e,o,r,s,c);this._wasImmutablyAllocated=!0}_texImage(e,r,a,s,c,l,n){const o=this._descriptor.context.gl,_=P(e),{isImmutable:h,pixelFormat:u,dataType:p}=this._descriptor;if(h){if(n!=null){const E=n;if(_){if(l==null)throw new m("Missing depth dimension for 3D texture upload");o.texSubImage3D(e,r,0,0,0,s,c,l,u,p,E)}else o.texSubImage2D(e,r,0,0,s,c,u,p,E)}}else{const E=n;if(_){if(l==null)throw new m("Missing depth dimension for 3D texture upload");o.texImage3D(e,r,a,s,c,l,0,u,p,E)}else o.texImage2D(e,r,a,s,c,0,u,p,E)}}_compressedTexImage(e,r,a,s,c,l,n){const o=this._descriptor.context.gl,_=P(e);if(this._descriptor.isImmutable){if(n!=null)if(_){if(l==null)throw new m("Missing depth dimension for 3D texture upload");o.compressedTexSubImage3D(e,r,0,0,0,s,c,l,a,n)}else o.compressedTexSubImage2D(e,r,0,0,s,c,a,n)}else if(_){if(l==null)throw new m("Missing depth dimension for 3D texture upload");o.compressedTexImage3D(e,r,a,s,c,l,0,n)}else o.compressedTexImage2D(e,r,a,s,c,0,n)}_forEachMipmapLevel(e,r=1/0){let{width:a,height:s,depth:c,hasMipmap:l,target:n}=this._descriptor;const o=n===I.TEXTURE_3D;if(a==null||s==null||o&&c==null)throw new m("Missing texture dimensions for mipmap calculation");for(let _=0;e(_,a,s,c),l&&(a!==1||s!==1||o&&c!==1)&&!(_>=r);++_)a=Math.max(1,a>>1),s=Math.max(1,s>>1),o&&(c=Math.max(1,c>>1))}};function w(t){(t.width!=null&&t.width<0||t.height!=null&&t.height<0||t.depth!=null&&t.depth<0)&&console.error("Negative dimension parameters are not allowed!")}function L(t,e){let r=e.samplingMode,a=e.samplingMode;r===R.LINEAR_MIPMAP_NEAREST||r===R.LINEAR_MIPMAP_LINEAR?(r=R.LINEAR,e.hasMipmap||(a=R.LINEAR)):r!==R.NEAREST_MIPMAP_NEAREST&&r!==R.NEAREST_MIPMAP_LINEAR||(r=R.NEAREST,e.hasMipmap||(a=R.NEAREST)),t.texParameteri(e.target,t.TEXTURE_MAG_FILTER,r),t.texParameteri(e.target,t.TEXTURE_MIN_FILTER,a)}function y(t,e){typeof e.wrapMode=="number"?(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode)):(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode.s),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode.t))}function se(t,e){const r=t.capabilities.textureFilterAnisotropic;r&&t.gl.texParameterf(e.target,r.TEXTURE_MAX_ANISOTROPY,e.maxAnisotropy??1)}function ie(t){return t in i}function ae(t){return t in T}function U(t){return t!=null&&"type"in t&&t.type==="compressed"}function ne(t){return t!=null&&"byteLength"in t}function v(t){return t!=null&&!U(t)&&!ne(t)}function P(t){return t===I.TEXTURE_3D||t===I.TEXTURE_2D_ARRAY}function X(t,e,r,a=1){let s=Math.max(e,r);return t===I.TEXTURE_3D&&(s=Math.max(s,a)),Math.round(Math.log(s)/Math.LN2)+1}re.TEXTURE_UNIT_FOR_UPDATES=0;export{_e as E,Q as a,$ as b,he as c,ee as d,O as e,re as m,J as o,Z as s,S as u};
