import{e,c as s}from"./subclass-f7409b1b.js";import{c as a}from"./Graphic-f1881791.js";import{q as g}from"./typedArrayUtil-2af43698.js";import{V as n}from"./Collection-aa6ef54b.js";import{u as c,e as h}from"./promiseUtils-1d963c7c.js";import{y as l}from"./JSONSupport-acf2865c.js";import"./Error-21d1d076.js";import{t as d}from"./highlightReasons-e15be521.js";import{m as u,u as w}from"./LayerView-b21fe3cb.js";import{t as f}from"./GraphicContainer-c93d2dbd.js";import{$ as y}from"./GraphicsView2D-840cd506.js";import{t as V}from"./HighlightCounter-4416967d.js";import"./geometry-31b45acd.js";import"./Extent-2b4578b8.js";import"./SpatialReference-428523ee.js";import"./jsonMap-5ba4a9c2.js";import"./request-a10d6950.js";import"./assets-6fd92e57.js";import"./cast-e7a2f9aa.js";import"./Polyline-013cde1f.js";import"./aaBoundingRect-aef00841.js";import"./Axis-30be7e73.js";import"./mathUtils-19b6edfc.js";import"./typeUtils-3056a943.js";import"./PopupTemplate-18f22683.js";import"./Clonable-b71fa929.js";import"./fieldUtils-fcb2a714.js";import"./intl-fe039018.js";import"./date-7940da18.js";import"./locale-bde6d0f6.js";import"./datetime-7e00d9ef.js";import"./messages-2d262041.js";import"./enumeration-4a4e87c4.js";import"./Color-e1a6dfab.js";import"./colorUtils-ac6863dc.js";import"./Identifiable-1430bdc2.js";import"./symbols-b3e075ad.js";import"./TextSymbol-53669eb2.js";import"./screenUtils-7afeb41c.js";import"./opacityUtils-f0a081b4.js";import"./symbolLayerUtils3D-5b91ffd6.js";import"./aaBoundingBox-7242ce3e.js";import"./persistableUrlUtils-ca6bb38d.js";import"./collectionUtils-b6e30316.js";import"./Portal-cb507469.js";import"./Loadable-8a1ead8b.js";import"./Promise-ec74e14b.js";import"./reactiveUtils-e7d9f86e.js";import"./Evented-b5127116.js";import"./jsonUtils-2c7f966c.js";import"./SimpleObservable-ae589a25.js";import"./time-0817624a.js";import"./HighlightOptions-4299833f.js";import"./TileKey-a0a7eda8.js";import"./vec2-f44efd17.js";import"./QueueProcessor-79c89715.js";import"./Connection-2d969448.js";import"./signal-b060d75f.js";import"./quickselect-fcce738b.js";import"./_commonjsHelpers-2f3e7994.js";import"./Query-aaf746b1.js";import"./TimeExtent-579f0e32.js";import"./timeUtils-24502426.js";import"./DataLayerSource-62d0bfcf.js";import"./Field-be948aef.js";import"./fieldType-4834e8bc.js";import"./scaleUtils-6415ec85.js";import"./Container-b81acdb9.js";import"./index-2a3bf3c6.js";import"./Basemap-09ab572b.js";import"./loadAll-19f96669.js";import"./PortalItem-9d3416e3.js";import"./writeUtils-ef8a6958.js";import"./layerUtils-c805b05c.js";import"./compilerUtils-7f5a3043.js";import"./CollectionFlattener-1d70a253.js";import"./mat4f32-1b45b54f.js";import"./mat4-a6ac6b0f.js";import"./TablesMixin-a124ac1c.js";import"./Layer-668dff8a.js";import"./Cyclical-9ae8d24f.js";import"./MultiOriginJSONSupport-9bd581c6.js";import"./FeatureLayer-f68eb3e5.js";import"./ClassBreaksRenderer-aa69b6ca.js";import"./UniqueValueRenderer-983c9a3e.js";import"./diffUtils-d0e8b583.js";import"./colorRamps-bef5e122.js";import"./ColorStop-6cee3909.js";import"./visualVariableUtils-79811b9c.js";import"./lengthUtils-1e9c410b.js";import"./styleUtils-d9ef5ac0.js";import"./jsonUtils-7ee1282d.js";import"./LRUCache-000d0e19.js";import"./Version-ef27dfc4.js";import"./FieldsIndex-9238b8b6.js";import"./UnknownTimeZone-8ede07af.js";import"./colorUtils-f660fd36.js";import"./vec42-a95eff2d.js";import"./vec4f64-430e4feb.js";import"./utils-064c64c4.js";import"./heatmapUtils-7a838493.js";import"./SimpleRenderer-2c5d637a.js";import"./commonProperties-0c35c2c9.js";import"./ElevationInfo-e9f55e40.js";import"./FormTemplate-b1394f1a.js";import"./workers-1be2b889.js";import"./editsZScale-c4af7049.js";import"./queryZScale-b694be92.js";import"./zscale-d7e12601.js";import"./FeatureSet-32e85c3a.js";import"./APIKeyMixin-7c0d27b5.js";import"./ArcGISService-1a65aba0.js";import"./arcgisLayerUrl-0c479f71.js";import"./BlendLayer-2e0705c7.js";import"./CustomParametersMixin-882f293c.js";import"./EditBusLayer-7f92d599.js";import"./uuid-709b6c67.js";import"./FeatureEffectLayer-f145f4bc.js";import"./FeatureLayerBase-5d10c7bd.js";import"./HeightModelInfo-46c4a968.js";import"./featureLayerUtils-87358b6a.js";import"./AttachmentQuery-36a8e4f4.js";import"./RelationshipQuery-722111d3.js";import"./LayerFloorInfo-88589fec.js";import"./serviceCapabilitiesUtils-d90db62d.js";import"./FeatureReductionLayer-b89875ed.js";import"./FeatureReductionSelection-d7d28c54.js";import"./LabelClass-bca4dcea.js";import"./defaults-473b7c21.js";import"./defaultsJSON-b087dd4d.js";import"./MD5-715f37cd.js";import"./OperationalLayer-04352719.js";import"./OrderedLayer-69f0528e.js";import"./PortalLayer-f8b97b56.js";import"./portalItemUtils-8aceb0b8.js";import"./projection-41da473c.js";import"./projectBuffer-af7b4ad9.js";import"./RefreshableLayer-9477518b.js";import"./ScaleRangeLayer-61383a56.js";import"./TemporalLayer-114f16ec.js";import"./TimeInfo-c87ecbc7.js";import"./FeatureTemplate-231bfadc.js";import"./FeatureType-d0808bff.js";import"./fieldProperties-663ad9a8.js";import"./labelingInfo-f5739018.js";import"./versionUtils-28beeff3.js";import"./styleUtils-f1a4091c.js";import"./TopFeaturesQuery-827caf55.js";import"./popupUtils-de5a8217.js";import"./interfaces-f1f22245.js";import"./jsonContext-70ccb9b3.js";import"./project-44b24f84.js";import"./utils-3234cfff.js";import"./utils-ed91a700.js";import"./TileInfo-d188b444.js";import"./jsxFactory-605eab60.js";import"./UpdatingHandles-431d86d1.js";import"./GraphicsCollection-393d5158.js";import"./ViewingMode-fb6259a5.js";import"./unitBezier-881ac1eb.js";import"./vec2f64-b65bfd66.js";import"./normalizeUtils-059b11cb.js";import"./normalizeUtilsCommon-c4e9ddb1.js";import"./mat3-def297a7.js";import"./vec2f32-afca0b62.js";import"./capabilities-14956a41.js";import"./utils-68ee32f9.js";import"./webStyleSymbolUtils-938d0140.js";import"./devEnvironmentUtils-4eab2a99.js";import"./definitions-f1268e8f.js";import"./enums-52934aad.js";import"./Texture-c6ffe640.js";import"./AGraphicContainer-a1e00683.js";import"./TechniqueInstance-a3fc302f.js";import"./UpdateTracking2D-90f071b9.js";import"./TurboLine-fca76414.js";import"./enums-2742e74f.js";import"./earcut-9ee3ebef.js";import"./GeometryUtils-2a8ddcd2.js";import"./OptimizedGeometry-5ad221bf.js";import"./CIMSymbolHelper-5fe56705.js";import"./BidiEngine-9a40f2f4.js";import"./fontUtils-d07df119.js";import"./Rect-ea14f53a.js";import"./BoundingBox-f9d9024c.js";import"./LabelMetric-dc5934b5.js";import"./Program-eff88155.js";import"./VertexElementDescriptor-2925c6af.js";import"./BindType-d21d71dd.js";import"./Util-5ae70216.js";import"./constants-991354c8.js";import"./TileContainer-82551e8e.js";import"./WGLContainer-7efe0d74.js";import"./ProgramTemplate-aadad6ce.js";import"./StyleDefinition-fb74b3a7.js";import"./config-1337d16e.js";import"./featureConversionUtils-e62978d0.js";import"./OptimizedFeature-0af09c7a.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./FeatureCommandQueue-847c64c9.js";import"./vec3f32-ad1dc57f.js";import"./AttributeStore-937c0140.js";import"./TimeOnly-e43464ca.js";import"./timeSupport-57e57e41.js";import"./json-48e3ea08.js";import"./normalizeUtilsSync-10a66b5d.js";let m=class extends u(w){constructor(){super(...arguments),this._highlightCounter=new V}attach(){this.graphicsView=new y({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new f(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this._updateHighlight()}detach(){this.container.removeAllChildren(),this.graphicsView=c(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i,t="highlight"){let r;typeof i=="number"?r=[i]:i instanceof a?r=[i.uid]:Array.isArray(i)&&i.length>0?r=typeof i[0]=="number"?i:i.map(p=>p&&p.uid):n.isCollection(i)&&i.length>0&&(r=i.map(p=>p&&p.uid).toArray());const o=r==null?void 0:r.filter(g);return o!=null&&o.length?(this._addHighlight(o,t),h(()=>this._removeHighlight(o,t))):h()}_addHighlight(i,t){this._highlightCounter.addReason(i,t),this._updateHighlight()}_removeHighlight(i,t){this._highlightCounter.deleteReason(i,t),this._updateHighlight()}_updateHighlight(){var t;const i=[];for(const r of this._highlightCounter.ids()){const o=this._highlightCounter.getHighestReason(r),p=d(o);i.push({objectId:r,highlightFlags:p})}(t=this.graphicsView)==null||t.setHighlight(i)}};e([l()],m.prototype,"graphicsView",void 0),m=e([s("esri.views.2d.layers.GraphicsLayerView2D")],m);const go=m;export{go as default};
