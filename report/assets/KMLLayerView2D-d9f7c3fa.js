import{e as v,c as G}from"./subclass-f7409b1b.js";import{U as z,r as O,e as T,v as F}from"./request-a10d6950.js";import{V as N}from"./Collection-aa6ef54b.js";import{d as W,u as S}from"./promiseUtils-1d963c7c.js";import{d as H}from"./reactiveUtils-e7d9f86e.js";import{y as C}from"./JSONSupport-acf2865c.js";import"./typedArrayUtil-2af43698.js";import"./Error-21d1d076.js";import{x as U,M as $}from"./Extent-2b4578b8.js";import{U as k,B as K}from"./projection-41da473c.js";import{f as A}from"./SpatialReference-428523ee.js";import{b as D,g as J,d as Y}from"./kmlUtils-4fc77377.js";import{f as Q}from"./utils-3234cfff.js";import{c as P}from"./GraphicsCollection-393d5158.js";import{g as X,f as Z,b as tt}from"./Bitmap-005a2d0b.js";import{a as it}from"./BitmapContainer-77210ee0.js";import{m as et,u as rt}from"./LayerView-e14e53ec.js";import{t as M}from"./GraphicContainer-3239f6e0.js";import{$ as R}from"./GraphicsView2D-c3968b72.js";import{C as ot,e as at}from"./rasterProjectionHelper-0d922734.js";import{h as st}from"./WGLContainer-e6610b0d.js";import{w as pt,o as mt}from"./RenderingContext-60080e70.js";import{a as nt}from"./capabilities-14956a41.js";import{D as E,G as lt,U as ht,X as L}from"./enums-52934aad.js";import{x as ct}from"./Program-eff88155.js";import{c as dt}from"./rasterUtils-6c4bf536.js";import{d as q,m as ut}from"./Texture-c6ffe640.js";import"./Evented-b5127116.js";import"./SimpleObservable-ae589a25.js";import"./time-0817624a.js";import"./cast-e7a2f9aa.js";import"./mathUtils-19b6edfc.js";import"./Polyline-013cde1f.js";import"./aaBoundingRect-aef00841.js";import"./Axis-30be7e73.js";import"./projectBuffer-af7b4ad9.js";import"./zscale-d7e12601.js";import"./jsonMap-5ba4a9c2.js";import"./assets-6fd92e57.js";import"./PopupTemplate-18f22683.js";import"./Clonable-b71fa929.js";import"./fieldUtils-fcb2a714.js";import"./intl-fe039018.js";import"./date-7940da18.js";import"./locale-bde6d0f6.js";import"./datetime-7e00d9ef.js";import"./messages-2d262041.js";import"./geometry-31b45acd.js";import"./typeUtils-3056a943.js";import"./enumeration-4a4e87c4.js";import"./Color-e1a6dfab.js";import"./colorUtils-ac6863dc.js";import"./Identifiable-1430bdc2.js";import"./aaBoundingBox-7242ce3e.js";import"./jsonUtils-7ee1282d.js";import"./ClassBreaksRenderer-aa69b6ca.js";import"./symbols-b3e075ad.js";import"./TextSymbol-53669eb2.js";import"./screenUtils-7afeb41c.js";import"./opacityUtils-f0a081b4.js";import"./symbolLayerUtils3D-5b91ffd6.js";import"./persistableUrlUtils-ca6bb38d.js";import"./collectionUtils-b6e30316.js";import"./Portal-cb507469.js";import"./Loadable-8a1ead8b.js";import"./Promise-ec74e14b.js";import"./UniqueValueRenderer-983c9a3e.js";import"./diffUtils-d0e8b583.js";import"./colorRamps-bef5e122.js";import"./ColorStop-6cee3909.js";import"./visualVariableUtils-79811b9c.js";import"./Graphic-f1881791.js";import"./jsonUtils-2c7f966c.js";import"./compilerUtils-7f5a3043.js";import"./lengthUtils-1e9c410b.js";import"./styleUtils-d9ef5ac0.js";import"./layerUtils-c805b05c.js";import"./LRUCache-000d0e19.js";import"./Version-ef27dfc4.js";import"./FieldsIndex-9238b8b6.js";import"./UnknownTimeZone-8ede07af.js";import"./colorUtils-f660fd36.js";import"./vec42-a95eff2d.js";import"./vec4f64-430e4feb.js";import"./utils-064c64c4.js";import"./heatmapUtils-7a838493.js";import"./SimpleRenderer-2c5d637a.js";import"./FeatureSet-32e85c3a.js";import"./Field-be948aef.js";import"./fieldType-4834e8bc.js";import"./mat3-def297a7.js";import"./index-c0f9f467.js";import"./Basemap-09ab572b.js";import"./loadAll-19f96669.js";import"./PortalItem-9d3416e3.js";import"./writeUtils-ef8a6958.js";import"./CollectionFlattener-1d70a253.js";import"./mat4f32-1b45b54f.js";import"./mat4-a6ac6b0f.js";import"./TablesMixin-a124ac1c.js";import"./Layer-668dff8a.js";import"./Cyclical-9ae8d24f.js";import"./MultiOriginJSONSupport-9bd581c6.js";import"./FeatureLayer-f68eb3e5.js";import"./commonProperties-0c35c2c9.js";import"./TimeExtent-579f0e32.js";import"./timeUtils-24502426.js";import"./ElevationInfo-e9f55e40.js";import"./FormTemplate-b1394f1a.js";import"./workers-1be2b889.js";import"./Connection-2d969448.js";import"./editsZScale-c4af7049.js";import"./queryZScale-b694be92.js";import"./APIKeyMixin-7c0d27b5.js";import"./ArcGISService-1a65aba0.js";import"./arcgisLayerUrl-0c479f71.js";import"./BlendLayer-2e0705c7.js";import"./CustomParametersMixin-882f293c.js";import"./EditBusLayer-7f92d599.js";import"./uuid-709b6c67.js";import"./FeatureEffectLayer-f145f4bc.js";import"./Query-aaf746b1.js";import"./DataLayerSource-62d0bfcf.js";import"./FeatureLayerBase-5d10c7bd.js";import"./HeightModelInfo-46c4a968.js";import"./featureLayerUtils-87358b6a.js";import"./AttachmentQuery-36a8e4f4.js";import"./RelationshipQuery-722111d3.js";import"./LayerFloorInfo-88589fec.js";import"./serviceCapabilitiesUtils-d90db62d.js";import"./FeatureReductionLayer-b89875ed.js";import"./FeatureReductionSelection-d7d28c54.js";import"./LabelClass-bca4dcea.js";import"./defaults-473b7c21.js";import"./defaultsJSON-b087dd4d.js";import"./MD5-715f37cd.js";import"./OperationalLayer-04352719.js";import"./OrderedLayer-69f0528e.js";import"./PortalLayer-f8b97b56.js";import"./portalItemUtils-8aceb0b8.js";import"./RefreshableLayer-9477518b.js";import"./ScaleRangeLayer-61383a56.js";import"./TemporalLayer-114f16ec.js";import"./TimeInfo-c87ecbc7.js";import"./FeatureTemplate-231bfadc.js";import"./FeatureType-d0808bff.js";import"./fieldProperties-663ad9a8.js";import"./labelingInfo-f5739018.js";import"./versionUtils-28beeff3.js";import"./styleUtils-f1a4091c.js";import"./TopFeaturesQuery-827caf55.js";import"./popupUtils-de5a8217.js";import"./interfaces-f1f22245.js";import"./jsonContext-70ccb9b3.js";import"./project-44b24f84.js";import"./utils-ed91a700.js";import"./TileInfo-d188b444.js";import"./jsxFactory-605eab60.js";import"./UpdatingHandles-431d86d1.js";import"./signal-b060d75f.js";import"./QueueProcessor-79c89715.js";import"./ViewingMode-fb6259a5.js";import"./unitBezier-881ac1eb.js";import"./HighlightOptions-4299833f.js";import"./TileKey-a0a7eda8.js";import"./vec2-f44efd17.js";import"./quickselect-fcce738b.js";import"./_commonjsHelpers-2f3e7994.js";import"./vec2f64-b65bfd66.js";import"./normalizeUtils-059b11cb.js";import"./normalizeUtilsCommon-c4e9ddb1.js";import"./vec2f32-afca0b62.js";import"./utils-68ee32f9.js";import"./webStyleSymbolUtils-938d0140.js";import"./devEnvironmentUtils-4eab2a99.js";import"./Container-14279f74.js";import"./highlightReasons-e15be521.js";import"./definitions-f1268e8f.js";import"./scaleUtils-6415ec85.js";import"./AGraphicContainer-2cc66892.js";import"./TechniqueInstance-134057e2.js";import"./UpdateTracking2D-90f071b9.js";import"./TurboLine-fca76414.js";import"./enums-2742e74f.js";import"./earcut-9ee3ebef.js";import"./GeometryUtils-2a8ddcd2.js";import"./OptimizedGeometry-5ad221bf.js";import"./CIMSymbolHelper-5fe56705.js";import"./BidiEngine-9a40f2f4.js";import"./fontUtils-d07df119.js";import"./Rect-ea14f53a.js";import"./BoundingBox-f9d9024c.js";import"./LabelMetric-dc5934b5.js";import"./VertexElementDescriptor-2925c6af.js";import"./BindType-d21d71dd.js";import"./Util-5ae70216.js";import"./constants-991354c8.js";import"./TileContainer-5ec72f80.js";import"./FeatureCommandQueue-ba68ba42.js";import"./ProgramTemplate-aadad6ce.js";import"./vec3f32-ad1dc57f.js";import"./AttributeStore-937c0140.js";import"./TimeOnly-e43464ca.js";import"./featureConversionUtils-e62978d0.js";import"./OptimizedFeature-0af09c7a.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./timeSupport-57e57e41.js";import"./json-48e3ea08.js";import"./normalizeUtilsSync-10a66b5d.js";import"./StyleDefinition-fb74b3a7.js";import"./config-1337d16e.js";import"./programUtils-83ddae91.js";import"./NestedMap-1b5db22e.js";import"./OrderIndependentTransparency-58d01465.js";import"./basicInterfaces-11f56cb3.js";import"./testSVGPremultipliedAlpha-5beae73f.js";import"./floatRGBA-2e72e52f.js";import"./doublePrecisionUtils-e3c3d0d8.js";class l{constructor(t){if(this._ownsRctx=!1,t)this._ownsRctx=!1,this._rctx=t;else{if(l._instance)return l._instanceRefCount++,l._instance;l._instanceRefCount=1,l._instance=this,this._ownsRctx=!0;const e=document.createElement("canvas"),r=nt(e);r.getExtension("OES_texture_float"),this._rctx=new pt(r,{})}const o={applyProjection:!0,bilinear:!1,bicubic:!1},a=mt("raster/reproject","raster/reproject",new Map([["a_position",0]]),o);this._program=this._rctx.programCache.acquire(a.shaders.vertexShader,a.shaders.fragmentShader,a.attributes),this._rctx.useProgram(this._program),this._program.setUniform1f("u_opacity",1),this._program.setUniform1i("u_image",0),this._program.setUniform1i("u_flipY",0),this._program.setUniform1i("u_transformGrid",1),this._quad=new st(this._rctx,[0,0,1,0,0,1,1,1])}reprojectTexture(t,o,a=!1){const e=k(t.extent,o),r=new U({x:(t.extent.xmax-t.extent.xmin)/t.texture.descriptor.width,y:(t.extent.ymax-t.extent.ymin)/t.texture.descriptor.height,spatialReference:t.extent.spatialReference}),{x:s,y:n}=ot(r,o,t.extent);let p=(s+n)/2;const m=Math.round((e.xmax-e.xmin)/p),u=Math.round((e.ymax-e.ymin)/p);p=(e.width/m+e.height/u)/2;const I=new U({x:p,y:p,spatialReference:e.spatialReference}),g=at({projectedExtent:e,srcBufferExtent:t.extent,pixelSize:I,hasWrapAround:!0,spacing:[16,16]}),f=dt(this._rctx,g),w=new q(m,u);w.wrapMode=E.CLAMP_TO_EDGE;const h=new ct(this._rctx,w);this._rctx.bindFramebuffer(h),this._rctx.setViewport(0,0,m,u),this._rctx.useProgram(this._program),this._rctx.bindTexture(t.texture,0),this._rctx.bindTexture(f,1),this._quad.bind();const{width:y=0,height:x=0}=t.texture.descriptor;if(this._program.setUniform2f("u_srcImageSize",y,x),this._program.setUniform2fv("u_transformSpacing",g.spacing),this._program.setUniform2fv("u_transformGridSize",g.size),this._program.setUniform2f("u_targetImageSize",m,u),this._quad.draw(),this._quad.unbind(),this._rctx.useProgram(null),this._rctx.bindFramebuffer(null),f.dispose(),a){const{width:c,height:V}=h,_=new ImageData(c??0,V??0);h.readPixels(0,0,c??0,V??0,lt.RGBA,ht.UNSIGNED_BYTE,_.data);const B=h.detachColorTexture(L.COLOR_ATTACHMENT0);return h.dispose(),{texture:B,extent:e,imageData:_}}const b=h.detachColorTexture(L.COLOR_ATTACHMENT0);return h.dispose(),{texture:b,extent:e}}reprojectBitmapData(t,o){const a=X(t.bitmapData)?Z(t.bitmapData):t.bitmapData,e=new q;e.wrapMode=E.CLAMP_TO_EDGE,e.width=t.bitmapData.width,e.height=t.bitmapData.height;const r=new ut(this._rctx,e,a),s=this.reprojectTexture({texture:r,extent:t.extent},o,!0);s.texture.dispose();const n=document.createElement("canvas"),p=s.imageData;return n.width=p.width,n.height=p.height,n.getContext("2d").putImageData(p,0,0),{bitmapData:n,extent:s.extent}}async loadAndReprojectBitmapData(t,o,a){const e=(await z(t,{responseType:"image"})).data,r=document.createElement("canvas");r.width=e.width,r.height=e.height;const s=r.getContext("2d");s.drawImage(e,0,0);const n=s.getImageData(0,0,r.width,r.height);if(o.spatialReference.equals(a))return{bitmapData:n,extent:o};const p=this.reprojectBitmapData({bitmapData:n,extent:o},a);return{bitmapData:p.bitmapData,extent:p.extent}}destroy(){this._ownsRctx?(l._instanceRefCount--,l._instanceRefCount===0&&(this._quad.dispose(),this._program.dispose(),this._rctx.dispose(),l._instance=null)):(this._quad.dispose(),this._program.dispose())}}l._instanceRefCount=0;class j{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]}}let d=class extends et(rt){constructor(){super(...arguments),this._bitmapIndex=new Map,this._mapImageContainer=new it,this._kmlVisualData=new j,this._fetchController=null,this.allVisiblePoints=new P,this.allVisiblePolylines=new P,this.allVisiblePolygons=new P,this.allVisibleMapImages=new N}async hitTest(i,t){var a,e,r;const o=this.layer;return[(a=this._pointsView)==null?void 0:a.hitTest(i),(e=this._polylinesView)==null?void 0:e.hitTest(i),(r=this._polygonsView)==null?void 0:r.hitTest(i)].flat().filter(Boolean).map(s=>(s.layer=o,s.sourceLayer=o,{type:"graphic",graphic:s,layer:o,mapPoint:i}))}update(i){this._polygonsView&&this._polygonsView.processUpdate(i),this._polylinesView&&this._polylinesView.processUpdate(i),this._pointsView&&this._pointsView.processUpdate(i)}attach(){this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new R({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new R({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new R({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.addAttachHandles([this.allVisibleMapImages.on("change",i=>{i.added.forEach(t=>this._addMapImage(t)),i.removed.forEach(t=>this._removeMapImage(t))}),H(()=>this.layer.visibleSublayers,i=>{for(const[t,o]of this._kmlVisualData.allSublayers)o.visibility=0;for(const t of i){const o=this._kmlVisualData.allSublayers.get(t.id);o&&(o.visibility=1)}this._refreshCollections()})]),this._updatingHandles.addPromise(this._fetchService(this._fetchController.signal)),this._imageReprojector=new l}detach(){this._fetchController=W(this._fetchController),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView=S(this._polygonsView),this._polylinesView=S(this._polylinesView),this._pointsView=S(this._pointsView),this._imageReprojector=S(this._imageReprojector)}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}moveEnd(){}isUpdating(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(i){var t,o;((t=this.view.spatialReference)!=null&&t.isWGS84||(o=this.view.spatialReference)!=null&&o.isWebMercator)&&this._imageReprojector.loadAndReprojectBitmapData(i.href,$.fromJSON(i.extent),this.view.spatialReference).then(a=>{const e=new tt(a.bitmapData);e.x=a.extent.xmin,e.y=a.extent.ymax,e.resolution=a.extent.width/a.bitmapData.width,e.rotation=i.rotation,this._mapImageContainer.addChild(e),this._bitmapIndex.set(i,e)})}async _getViewDependentUrl(i,t){const{viewFormat:o,viewBoundScale:a,httpQuery:e}=i;if(o!=null){if(t==null)throw new Error("Loading this network link requires a view state.");let r;if(await K(),a!=null&&a!==1){const c=new $(t.extent);c.expand(a),r=c}else r=t.extent;r=k(r,A.WGS84);const s=k(r,A.WebMercator),n=r.xmin,p=r.xmax,m=r.ymin,u=r.ymax,I=t.size[0]*t.pixelRatio,g=t.size[1]*t.pixelRatio,f=Math.max(s.width,s.height),w={"[bboxWest]":n.toString(),"[bboxEast]":p.toString(),"[bboxSouth]":m.toString(),"[bboxNorth]":u.toString(),"[lookatLon]":r.center.x.toString(),"[lookatLat]":r.center.y.toString(),"[lookatRange]":f.toString(),"[lookatTilt]":"0","[lookatHeading]":t.rotation.toString(),"[lookatTerrainLon]":r.center.x.toString(),"[lookatTerrainLat]":r.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":r.center.x.toString(),"[cameraLat]":r.center.y.toString(),"[cameraAlt]":f.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":I.toString(),"[vertPixels]":g.toString(),"[terrainEnabled]":"0","[clientVersion]":O,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},h=c=>{for(const V in c){let _;for(_ in w)c[V]=c[V].replace(_,w[_])}},y=T(o);h(y);let x={};e!=null&&(x=T(e),h(x));const b=Q(i.href);return b.query={...b.query,...y,...x},`${b.path}?${F(y)}`}return i.href}async _fetchService(i){const t=new j;await this._loadVisualData(this.layer.url,t,i),this._kmlVisualData=t,this._refreshCollections()}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i)),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i)),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i)),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i))}_isSublayerVisible(i){const t=this._kmlVisualData.allSublayers.get(i);return!!(t!=null&&t.visibility)&&(t.parentFolderId===-1||this._isSublayerVisible(t.parentFolderId))}_loadVisualData(i,t,o){return this._fetchParsedKML(i,o).then(async a=>{for(const e of a.sublayers){t.allSublayers.set(e.id,e);const r=e.points?await D(e.points):[],s=e.polylines?await D(e.polylines):[],n=e.polygons?await D(e.polygons):[],p=e.mapImages||[];if(t.allPoints.push(...r.map(m=>({item:m,sublayerId:e.id}))),t.allPolylines.push(...s.map(m=>({item:m,sublayerId:e.id}))),t.allPolygons.push(...n.map(m=>({item:m,sublayerId:e.id}))),t.allMapImages.push(...p.map(m=>({item:m,sublayerId:e.id}))),e.networkLink){const m=await this._getViewDependentUrl(e.networkLink,this.view.state);await this._loadVisualData(m,t,o)}}})}_fetchParsedKML(i,t){return J(i,this.layer.spatialReference,this.layer.refreshInterval,t).then(o=>Y(o.data))}_removeMapImage(i){const t=this._bitmapIndex.get(i);t&&(this._mapImageContainer.removeChild(t),this._bitmapIndex.delete(i))}};v([C()],d.prototype,"_pointsView",void 0),v([C()],d.prototype,"_polylinesView",void 0),v([C()],d.prototype,"_polygonsView",void 0),v([C()],d.prototype,"updating",void 0),d=v([G("esri.views.2d.layers.KMLLayerView2D")],d);const wo=d;export{wo as default};