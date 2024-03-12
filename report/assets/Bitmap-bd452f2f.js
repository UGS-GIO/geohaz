import{L as p,w as c,q as x}from"./promiseUtils-1d963c7c.js";import{o as _,M as u,h as g,b as m,i as f}from"./mat3-def297a7.js";import{a as w}from"./index-2a3bf3c6.js";import{t as a}from"./vec2f32-afca0b62.js";import{a as B}from"./Container-b81acdb9.js";import{P as k,G as R,D as S}from"./enums-52934aad.js";import{d as b,m as v}from"./Texture-c6ffe640.js";class y{constructor(t,e,i){this.pixelBlock=t,this.extent=e,this.originalPixelBlock=i}get width(){return this.pixelBlock!=null?this.pixelBlock.width:0}get height(){return this.pixelBlock!=null?this.pixelBlock.height:0}render(t){const e=this.pixelBlock;if(e==null)return;const i=this.filter({extent:this.extent,pixelBlock:this.originalPixelBlock??e});if(i.pixelBlock==null)return;i.pixelBlock.maskIsAlpha&&(i.pixelBlock.premultiplyAlpha=!0);const r=i.pixelBlock.getAsRGBA(),h=t.createImageData(i.pixelBlock.width,i.pixelBlock.height);h.data.set(r),t.putImageData(h,0,0)}getRenderedRasterPixels(){const t=this.filter({extent:this.extent,pixelBlock:this.pixelBlock});return t.pixelBlock==null?null:(t.pixelBlock.maskIsAlpha&&(t.pixelBlock.premultiplyAlpha=!0),{width:t.pixelBlock.width,height:t.pixelBlock.height,renderedRasterPixels:new Uint8Array(t.pixelBlock.getAsRGBA().buffer)})}}function T(s){return s&&"render"in s}function A(s){const t=document.createElement("canvas");return t.width=s.width,t.height=s.height,s.render(t.getContext("2d")),t}function M(s){var t;return T(s)?s instanceof y?(t=s.getRenderedRasterPixels())==null?void 0:t.renderedRasterPixels:A(s):s}class E extends B{constructor(t=null,e=!1){super(),this.blendFunction="standard",this._sourceWidth=0,this._sourceHeight=0,this._textureInvalidated=!1,this._texture=null,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.immutable=e,this.source=t,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null),this._uploadStatus!=null&&(this._uploadStatus.controller.abort(),this._uploadStatus=null)}get isSourceScaled(){return this.width!==this._sourceWidth||this.height!==this._sourceHeight}get height(){return this._height!==void 0?this._height:this._sourceHeight}set height(t){this._height=t}get source(){return this._source}set source(t){t==null&&this._source==null||(this._source=t,this.invalidateTexture(),this.requestRender())}get width(){return this._width!==void 0?this._width:this._sourceWidth}set width(t){this._width=t}beforeRender(t){super.beforeRender(t),this.updateTexture(t)}async setSourceAsync(t,e){this._uploadStatus!=null&&this._uploadStatus.controller.abort();const i=new AbortController,r=p();return c(e,()=>i.abort()),c(i,h=>r.reject(h)),this._uploadStatus={controller:i,resolver:r},this.source=t,r.promise}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this._source instanceof HTMLImageElement?(this._sourceHeight=this._source.naturalHeight,this._sourceWidth=this._source.naturalWidth):this._source&&(this._sourceHeight=this._source.height,this._sourceWidth=this._source.width))}updateTransitionProperties(t,e){t>=64&&(this.fadeTransitionEnabled=!1,this.inFadeTransition=!1),super.updateTransitionProperties(t,e)}setTransform(t){const e=_(this.transforms.displayViewScreenMat3),[i,r]=t.toScreenNoRotation([0,0],[this.x,this.y]),h=this.resolution/this.pixelRatio/t.resolution,o=h*this.width,l=h*this.height,n=Math.PI*this.rotation/180;u(e,e,a(i,r)),u(e,e,a(o/2,l/2)),g(e,e,-n),u(e,e,a(-o/2,-l/2)),m(e,e,a(o,l)),f(this.transforms.displayViewScreenMat3,t.displayViewMat3,e)}setSamplingProfile(t){this._texture&&(t.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(t.samplingMode))}bind(t,e){this._texture&&t.bindTexture(this._texture,e)}async updateTexture({context:t,painter:e}){if(!this._textureInvalidated)return;if(this._textureInvalidated=!1,this._texture||(this._texture=this._createTexture(t)),!this.source)return void this._texture.setData(null);this._texture.resize(this._sourceWidth,this._sourceHeight);const i=M(this.source);try{if(this._uploadStatus!=null){const{controller:r,resolver:h}=this._uploadStatus,o={signal:r.signal},{width:l,height:n}=this,d=this._texture;await e.textureUploadManager.enqueueTextureUpdate({data:i,texture:d,width:l,height:n},o),h.resolve(),this._uploadStatus=null}else this._texture.setData(i);this.ready()}catch(r){x(r)}}onDetach(){this.destroy()}_createTransforms(){return{displayViewScreenMat3:w()}}_createTexture(t){const e=this.immutable,i=new b;return i.internalFormat=e?k.RGBA8:R.RGBA,i.wrapMode=S.CLAMP_TO_EDGE,i.isImmutable=e,i.width=this._sourceWidth,i.height=this._sourceHeight,new v(t,i)}}export{E as b,A as f,T as g,y as l};
