import{e as s,c as v}from"./subclass-f7409b1b.js";import{c as b}from"./Graphic-f1881791.js";import{V}from"./Collection-aa6ef54b.js";import{b as _,k as F,s as I,e as $}from"./promiseUtils-1d963c7c.js";import{h as U}from"./typedArrayUtil-2af43698.js";import{d as f,A as z,C as E}from"./reactiveUtils-e7d9f86e.js";import{y as a,S as R}from"./JSONSupport-acf2865c.js";import{s as P,a as S}from"./Error-21d1d076.js";import{c as C}from"./GraphicsCollection-393d5158.js";import{d as M,f as L,a as O}from"./RasterVFDisplayObject-349de470.js";import{m as j,u as H}from"./LayerView-e2571f8c.js";import{$ as N}from"./GraphicsView2D-85efb3ed.js";import{h as G}from"./HighlightGraphicContainer-40dfe329.js";import{M as J,m as W,f as K}from"./dataUtils-a5d9e31f.js";import{a as Q}from"./BitmapContainer-3bf3f7d7.js";import{h as X,E as q}from"./Container-75dce577.js";import{l as Y}from"./Bitmap-76934267.js";import{v as Z}from"./ExportStrategy-8666bc43.js";import{U as tt}from"./request-a10d6950.js";import{M as B,x as D}from"./Extent-2b4578b8.js";import{g as et}from"./SpatialReference-428523ee.js";import{J as it}from"./rasterProjectionHelper-0d922734.js";import{c as rt}from"./WGLContainer-4af7688b.js";import{j as ot}from"./commonProperties-0c35c2c9.js";import{b as st}from"./Query-aaf746b1.js";import{p as at}from"./popupUtils-4c7e63a9.js";import{i as pt}from"./RefreshableLayerView-1753df50.js";import"./geometry-31b45acd.js";import"./Polyline-013cde1f.js";import"./aaBoundingRect-aef00841.js";import"./Axis-30be7e73.js";import"./mathUtils-19b6edfc.js";import"./typeUtils-3056a943.js";import"./jsonMap-5ba4a9c2.js";import"./PopupTemplate-18f22683.js";import"./Clonable-b71fa929.js";import"./cast-e7a2f9aa.js";import"./fieldUtils-fcb2a714.js";import"./intl-fe039018.js";import"./date-7940da18.js";import"./locale-bde6d0f6.js";import"./datetime-7e00d9ef.js";import"./messages-2d262041.js";import"./assets-6fd92e57.js";import"./enumeration-4a4e87c4.js";import"./Color-e1a6dfab.js";import"./colorUtils-ac6863dc.js";import"./Identifiable-1430bdc2.js";import"./symbols-b3e075ad.js";import"./TextSymbol-53669eb2.js";import"./screenUtils-7afeb41c.js";import"./opacityUtils-f0a081b4.js";import"./symbolLayerUtils3D-5b91ffd6.js";import"./aaBoundingBox-7242ce3e.js";import"./persistableUrlUtils-ca6bb38d.js";import"./collectionUtils-b6e30316.js";import"./Portal-cb507469.js";import"./Loadable-8a1ead8b.js";import"./Promise-ec74e14b.js";import"./jsonUtils-2c7f966c.js";import"./Evented-b5127116.js";import"./SimpleObservable-ae589a25.js";import"./time-0817624a.js";import"./Program-eff88155.js";import"./Texture-c6ffe640.js";import"./enums-52934aad.js";import"./_commonjsHelpers-2f3e7994.js";import"./ProgramTemplate-aadad6ce.js";import"./VertexElementDescriptor-2925c6af.js";import"./index-a172df4f.js";import"./Basemap-09ab572b.js";import"./loadAll-19f96669.js";import"./PortalItem-9d3416e3.js";import"./writeUtils-ef8a6958.js";import"./layerUtils-c805b05c.js";import"./compilerUtils-7f5a3043.js";import"./CollectionFlattener-1d70a253.js";import"./mat4f32-1b45b54f.js";import"./mat4-a6ac6b0f.js";import"./TablesMixin-a124ac1c.js";import"./Layer-668dff8a.js";import"./Cyclical-9ae8d24f.js";import"./MultiOriginJSONSupport-9bd581c6.js";import"./FeatureLayer-f68eb3e5.js";import"./ClassBreaksRenderer-aa69b6ca.js";import"./UniqueValueRenderer-983c9a3e.js";import"./diffUtils-d0e8b583.js";import"./colorRamps-bef5e122.js";import"./ColorStop-6cee3909.js";import"./visualVariableUtils-79811b9c.js";import"./lengthUtils-1e9c410b.js";import"./styleUtils-d9ef5ac0.js";import"./jsonUtils-7ee1282d.js";import"./LRUCache-000d0e19.js";import"./Version-ef27dfc4.js";import"./FieldsIndex-9238b8b6.js";import"./UnknownTimeZone-8ede07af.js";import"./colorUtils-f660fd36.js";import"./vec42-a95eff2d.js";import"./vec4f64-430e4feb.js";import"./utils-064c64c4.js";import"./heatmapUtils-7a838493.js";import"./SimpleRenderer-2c5d637a.js";import"./FormTemplate-b1394f1a.js";import"./Field-be948aef.js";import"./fieldType-4834e8bc.js";import"./workers-1be2b889.js";import"./Connection-2d969448.js";import"./editsZScale-c4af7049.js";import"./queryZScale-b694be92.js";import"./zscale-d7e12601.js";import"./FeatureSet-32e85c3a.js";import"./APIKeyMixin-7c0d27b5.js";import"./ArcGISService-1a65aba0.js";import"./arcgisLayerUrl-0c479f71.js";import"./BlendLayer-2e0705c7.js";import"./CustomParametersMixin-882f293c.js";import"./EditBusLayer-7f92d599.js";import"./uuid-709b6c67.js";import"./FeatureEffectLayer-f145f4bc.js";import"./TimeExtent-579f0e32.js";import"./timeUtils-24502426.js";import"./FeatureLayerBase-5d10c7bd.js";import"./HeightModelInfo-46c4a968.js";import"./featureLayerUtils-87358b6a.js";import"./AttachmentQuery-36a8e4f4.js";import"./RelationshipQuery-722111d3.js";import"./DataLayerSource-62d0bfcf.js";import"./LayerFloorInfo-88589fec.js";import"./serviceCapabilitiesUtils-d90db62d.js";import"./FeatureReductionLayer-b89875ed.js";import"./FeatureReductionSelection-d7d28c54.js";import"./LabelClass-bca4dcea.js";import"./defaults-473b7c21.js";import"./defaultsJSON-b087dd4d.js";import"./MD5-715f37cd.js";import"./OperationalLayer-04352719.js";import"./OrderedLayer-69f0528e.js";import"./PortalLayer-f8b97b56.js";import"./portalItemUtils-8aceb0b8.js";import"./projection-41da473c.js";import"./projectBuffer-af7b4ad9.js";import"./RefreshableLayer-9477518b.js";import"./ScaleRangeLayer-61383a56.js";import"./TemporalLayer-114f16ec.js";import"./TimeInfo-c87ecbc7.js";import"./FeatureTemplate-231bfadc.js";import"./FeatureType-d0808bff.js";import"./fieldProperties-663ad9a8.js";import"./labelingInfo-f5739018.js";import"./versionUtils-28beeff3.js";import"./styleUtils-f1a4091c.js";import"./TopFeaturesQuery-827caf55.js";import"./popupUtils-de5a8217.js";import"./interfaces-f1f22245.js";import"./ElevationInfo-e9f55e40.js";import"./jsonContext-70ccb9b3.js";import"./project-44b24f84.js";import"./utils-3234cfff.js";import"./utils-ed91a700.js";import"./TileInfo-d188b444.js";import"./jsxFactory-605eab60.js";import"./UpdatingHandles-431d86d1.js";import"./signal-b060d75f.js";import"./QueueProcessor-79c89715.js";import"./ViewingMode-fb6259a5.js";import"./unitBezier-881ac1eb.js";import"./HighlightOptions-4299833f.js";import"./TileKey-a0a7eda8.js";import"./vec2-f44efd17.js";import"./quickselect-fcce738b.js";import"./vec2f64-b65bfd66.js";import"./normalizeUtils-059b11cb.js";import"./normalizeUtilsCommon-c4e9ddb1.js";import"./mat3-def297a7.js";import"./vec2f32-afca0b62.js";import"./capabilities-14956a41.js";import"./utils-68ee32f9.js";import"./webStyleSymbolUtils-938d0140.js";import"./devEnvironmentUtils-4eab2a99.js";import"./LabelMetric-dc5934b5.js";import"./enums-2742e74f.js";import"./BoundingBox-f9d9024c.js";import"./scaleUtils-6415ec85.js";import"./CIMSymbolHelper-5fe56705.js";import"./BidiEngine-9a40f2f4.js";import"./fontUtils-d07df119.js";import"./OptimizedGeometry-5ad221bf.js";import"./GeometryUtils-2a8ddcd2.js";import"./definitions-f1268e8f.js";import"./Rect-ea14f53a.js";import"./AttributeStore-937c0140.js";import"./UpdateTracking2D-90f071b9.js";import"./TurboLine-fca76414.js";import"./earcut-9ee3ebef.js";import"./BindType-d21d71dd.js";import"./Util-5ae70216.js";import"./highlightReasons-e15be521.js";import"./constants-991354c8.js";import"./TimeOnly-e43464ca.js";import"./featureConversionUtils-e62978d0.js";import"./OptimizedFeature-0af09c7a.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./timeSupport-57e57e41.js";import"./json-48e3ea08.js";import"./FeatureCommandQueue-1322e6ea.js";import"./normalizeUtilsSync-10a66b5d.js";import"./AGraphicContainer-cd0cbe48.js";import"./TechniqueInstance-4a5477c8.js";import"./TileContainer-019c251d.js";import"./vec3f32-ad1dc57f.js";import"./StyleDefinition-fb74b3a7.js";import"./config-1337d16e.js";let m=class extends R{constructor(){super(...arguments),this.attached=!1,this.container=new X,this.updateRequested=!1,this.type="imagery",this._bitmapView=new Q}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(t){this.strategy.update(t).catch(e=>{_(e)||P.getLogger(this).error(e)})}hitTest(t){return new b({attributes:{},geometry:t.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const t=this.layer.version>=10,e=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new Z({container:this._bitmapView,imageNormalizationSupported:t,imageMaxHeight:e,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}redraw(){this.strategy.updateExports(async t=>{const{source:e}=t;if(!e||e instanceof ImageBitmap)return;const i=await this.layer.applyRenderer({extent:e.extent,pixelBlock:e.originalPixelBlock??e.pixelBlock});e.filter=r=>this.layer.pixelFilter?this.layer.applyFilter(r):{...i,extent:e.extent}}).catch(t=>{_(t)||P.getLogger(this).error(t)})}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const t=this.strategy.bitmaps;if(t.length===1&&t[0].source)return{extent:t[0].source.extent,pixelBlock:t[0].source.originalPixelBlock};if(t.length>1){const e=this.view.extent,i=t.map(o=>o.source).filter(o=>o.extent&&o.extent.intersects(e)).map(o=>({extent:o.extent,pixelBlock:o.originalPixelBlock})),r=J(i,e);return r!=null?{extent:r.extent,pixelBlock:r.pixelBlock}:null}return null}async _fetchImage(t,e,i,r){var c;(r=r||{}).timeExtent=this.timeExtent,r.requestAsImageElement=!0,r.returnImageBitmap=!0;const o=await this.layer.fetchImage(t,e,i,r);if(o.imageBitmap)return o.imageBitmap;const p=await this.layer.applyRenderer(o.pixelData,{signal:r.signal}),n=new Y(p.pixelBlock,(c=p.extent)==null?void 0:c.clone(),o.pixelData.pixelBlock);return n.filter=l=>this.layer.applyFilter(l),n}};s([a()],m.prototype,"attached",void 0),s([a()],m.prototype,"container",void 0),s([a()],m.prototype,"layer",void 0),s([a()],m.prototype,"strategy",void 0),s([a()],m.prototype,"timeExtent",void 0),s([a()],m.prototype,"view",void 0),s([a()],m.prototype,"updateRequested",void 0),s([a()],m.prototype,"updating",null),s([a()],m.prototype,"type",void 0),m=s([v("esri.views.2d.layers.imagery.ImageryView2D")],m);const nt=m;class mt extends rt{constructor(){super(...arguments),this.symbolTypes=["triangle"]}prepareRenderPasses(e){const i=e.registerRenderPass({name:"imagery (vf)",brushes:[M],target:()=>this.children,drawPhase:q.MAP});return[...super.prepareRenderPasses(e),i]}doRender(e){this.visible&&e.drawPhase===q.MAP&&this.symbolTypes.forEach(i=>{e.renderPass=i,super.doRender(e)})}}let y=class extends R{constructor(t){super(t),this._loading=null,this.update=F((e,i)=>this._update(e,i).catch(r=>{_(r)||P.getLogger(this).error(r)}))}get updating(){return!!this._loading}redraw(t){if(!this.container.children.length)return;const e=this.container.children[0];e.symbolizerParameters=t,e.invalidateVAO(),this.container.symbolTypes=t.style==="wind_speed"?["scalar","triangle"]:t.style==="simple_scalar"?["scalar"]:["triangle"],this.container.requestRender()}async _update(t,e,i){if(!t.stationary)return;const{extent:r,spatialReference:o}=t.state,p=new B({xmin:r.xmin,ymin:r.ymin,xmax:r.xmax,ymax:r.ymax,spatialReference:o}),[n,c]=t.state.size;this._loading=this.fetchPixels(p,n,c,i);const l=await this._loading;this._addToDisplay(l,e,t.state),this._loading=null}_addToDisplay(t,e,i){if(t.pixelBlock==null)return this.container.children.forEach(n=>n.destroy()),void this.container.removeAllChildren();const{extent:r,pixelBlock:o}=t,p=new L(o);p.offset=[0,0],p.symbolizerParameters=e,p.rawPixelData=t,p.invalidateVAO(),p.x=r.xmin,p.y=r.ymax,p.pixelRatio=i.pixelRatio,p.rotation=i.rotation,p.resolution=i.resolution,p.width=o.width*e.symbolTileSize,p.height=o.height*e.symbolTileSize,this.container.children.forEach(n=>n.destroy()),this.container.removeAllChildren(),this.container.symbolTypes=e.style==="wind_speed"?["scalar","triangle"]:e.style==="simple_scalar"?["scalar"]:["triangle"],this.container.addChild(p)}};s([a()],y.prototype,"fetchPixels",void 0),s([a()],y.prototype,"container",void 0),s([a()],y.prototype,"_loading",void 0),s([a()],y.prototype,"updating",null),y=s([v("esri.views.2d.layers.imagery.ImageryVFStrategy")],y);const lt=y;let h=class extends R{constructor(){super(...arguments),this.attached=!1,this.container=new mt,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(t,e,i,r)=>{const o=await this._projectFullExtentPromise,{symbolTileSize:p}=this.layer.renderer,{extent:n,width:c,height:l}=W(t,e,i,p,o);if(o!=null&&!o.intersects(t))return{extent:n,pixelBlock:null};const d={bbox:`${n.xmin}, ${n.ymin}, ${n.xmax}, ${n.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:p,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(d)){const u=this.getPixelData();if(u!=null&&`${u.extent.xmin}, ${u.extent.ymin}, ${u.extent.xmax}, ${u.extent.ymax}`===d.bbox)return u}const{pixelData:g}=await this.layer.fetchImage(n,c,l,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:r});this._dataParameters=d;const x=g==null?void 0:g.pixelBlock;return x==null?{extent:n,pixelBlock:null}:{extent:n,pixelBlock:this.layer.rasterInfo.dataType==="vector-uv"?K(x,"vector-uv"):x}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new lt({container:this.container,fetchPixels:this._fetchpixels}),this.addHandles(f(()=>this.layer.renderer,t=>this._updateSymbolizerParams(t),z),"attach")}detach(){this._strategy.destroy(),this.container.children.forEach(t=>t.destroy()),this.container.removeAllChildren(),this.removeHandles("attach"),this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){var r;const t=(r=this.container.children[0])==null?void 0:r.rawPixelData;if(this.updating||!t)return null;const{extent:e,pixelBlock:i}=t;return{extent:e,pixelBlock:i}}hitTest(t){return new b({attributes:{},geometry:t.clone(),layer:this.layer})}update(t){this._strategy.update(t,this._symbolizerParams).catch(e=>{_(e)||P.getLogger(this).error(e)})}redraw(){const{renderer:t}=this.layer;t&&(this._updateSymbolizerParams(t),this._strategy.redraw(this._symbolizerParams))}_canReuseVectorFieldData(t){const e=this._dataParameters.exportParametersVersion===t.exportParametersVersion,i=this._dataParameters.time===t.time,r=this._dataParameters.symbolTileSize===t.symbolTileSize,o=this._dataParameters.bbox===t.bbox;return e&&i&&r&&o}async _getProjectedFullExtent(t){try{return it(this.layer.fullExtent,t)}catch{try{const i=(await tt(this.layer.url,{query:{option:"footprints",outSR:et(t),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return i?B.fromJSON(i):null}catch{return null}}}_updateSymbolizerParams(t){t.type==="vector-field"&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};s([a()],h.prototype,"attached",void 0),s([a()],h.prototype,"container",void 0),s([a()],h.prototype,"layer",void 0),s([a()],h.prototype,"timeExtent",void 0),s([a()],h.prototype,"type",void 0),s([a()],h.prototype,"view",void 0),s([a()],h.prototype,"updating",null),h=s([v("esri.views.2d.layers.imagery.VectorFieldView2D")],h);const ht=h,ct=t=>{let e=class extends t{constructor(){super(...arguments),this.view=null}async fetchPopupFeaturesAtLocation(i,r){const{layer:o}=this;if(!i)throw new S("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:o});const{popupEnabled:p}=o,n=at(o,r);if(!p||n==null)throw new S("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:p,popupTemplate:n});const c=await n.getRequiredFields();I(r);const l=new st;l.timeExtent=this.timeExtent,l.geometry=i,l.outFields=c,l.outSpatialReference=i.spatialReference;const{resolution:d,spatialReference:g}=this.view,x=this.view.type==="2d"?new D(d,d,g):new D(.5*d,.5*d,g),{returnTopmostRaster:u,showNoDataRecords:k}=n.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},T={returnDomainValues:!0,returnTopmostRaster:u,pixelSize:x,showNoDataRecords:k,signal:r==null?void 0:r.signal};return o.queryVisibleRasters(l,T).then(A=>A)}canResume(){var i;return!!super.canResume()&&!((i=this.timeExtent)!=null&&i.isEmpty)}};return s([a()],e.prototype,"layer",void 0),s([a()],e.prototype,"suspended",void 0),s([a(ot)],e.prototype,"timeExtent",void 0),s([a()],e.prototype,"view",void 0),e=s([v("esri.views.layers.ImageryLayerView")],e),e};let w=class extends ct(pt(j(H))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new C,this._highlightView=void 0,this.layer=null,this.subview=null}get pixelData(){const{subview:t}=this;return this.updating||!t?null:"getPixelData"in t?t.getPixelData():null}update(t){var e;(e=this.subview)==null||e.update(t)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new N({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new G(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.addAttachHandles([f(()=>this.layer.exportImageServiceParameters.version,t=>{t&&this._exportImageVersion!==t&&(this._exportImageVersion=t,this.requestUpdate())},E),f(()=>this.timeExtent,t=>{const{subview:e}=this;e&&(e.timeExtent=t,"redraw"in e?this.requestUpdate():e.redrawOrRefetch())},E),this.layer.on("redraw",()=>{const{subview:t}=this;t&&("redraw"in t?t.redraw():t.redrawOrRefetch())}),f(()=>this.layer.renderer,()=>this._setSubView())])}detach(){var t,e;this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),(t=this.subview)==null||t.destroy(),this.subview=null,(e=this._highlightView)==null||e.destroy(),this._exportImageVersion=-1}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(t,e){if(!((Array.isArray(t)?t[0]:V.isCollection(t)?t.at(0):t)instanceof b))return $();let i=[];return Array.isArray(t)||V.isCollection(t)?i=t.map(r=>r.clone()):t instanceof b&&(i=[t.clone()]),this._highlightGraphics.addMany(i),$(()=>this._highlightGraphics.removeMany(i))}async doRefresh(){this.requestUpdate()}isUpdating(){var e,i;const t=!this.subview||this.subview.updating||!!((e=this._highlightView)!=null&&e.updating);return U("esri-2d-log-updating")&&console.log(`Updating ImageryLayerView2D (${this.layer.id}): ${t}
-> subview ${!this.subview||this.subview.updating}
-> higlightView ${(i=this._highlightView)==null?void 0:i.updating}
`),t}_setSubView(){var i,r;if(!this.view)return;const t=(i=this.layer.renderer)==null?void 0:i.type;let e="imagery";if(t==="vector-field"?e="imageryVF":t==="flow"&&(e="flow"),this.subview){const{type:o}=this.subview;if(o===e)return this._attachSubview(this.subview),void(o==="flow"?this.subview.redrawOrRefetch():o==="imagery"&&this.layer.format==="lerc"?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),(r=this.subview)==null||r.destroy()}this.subview=e==="imagery"?new nt({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):e==="imageryVF"?new ht({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new O({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}_attachSubview(t){t&&!t.attached&&(t.attach(),t.attached=!0,this.container.addChildAt(t.container,0))}_detachSubview(t){t!=null&&t.attached&&(this.container.removeChild(t.container),t.detach(),t.attached=!1)}};s([a()],w.prototype,"pixelData",null),s([a()],w.prototype,"subview",void 0),w=s([v("esri.views.2d.layers.ImageryLayerView2D")],w);const lo=w;export{lo as default};