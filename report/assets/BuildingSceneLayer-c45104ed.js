import{e as t,T as de,c as p,s as me}from"./subclass-f7409b1b.js";import{V as b}from"./Collection-aa6ef54b.js";import{l as ce}from"./CollectionFlattener-1d70a253.js";import{s as x,a as F,b as d}from"./Error-21d1d076.js";import{a as he,t as fe}from"./loadAll-19f96669.js";import{S as ge,m as ve}from"./MultiOriginJSONSupport-9bd581c6.js";import{p as be}from"./promiseUtils-1d963c7c.js";import{U as ee,V as Se}from"./request-a10d6950.js";import{y as i,f}from"./JSONSupport-acf2865c.js";import"./typedArrayUtil-2af43698.js";import{o as I,M as we}from"./Extent-2b4578b8.js";import{f as te}from"./SpatialReference-428523ee.js";import{b as $e}from"./Layer-668dff8a.js";import{c as Oe}from"./Graphic-f1881791.js";import{P as xe}from"./PopupTemplate-18f22683.js";import"./ClassBreaksRenderer-aa69b6ca.js";import{u as Fe}from"./jsonUtils-7ee1282d.js";import"./UniqueValueRenderer-983c9a3e.js";import"./SimpleRenderer-2c5d637a.js";import{s as Ie}from"./jsonMap-5ba4a9c2.js";import{m as re}from"./Loadable-8a1ead8b.js";import{n as ie}from"./Promise-ec74e14b.js";import{o as oe}from"./enumeration-4a4e87c4.js";import se from"./FeatureLayer-f68eb3e5.js";import{s as Le}from"./Identifiable-1430bdc2.js";import{w as _,y as je,v as Te,c as Be,f as Ae}from"./commonProperties-0c35c2c9.js";import{m as Ee,s as Pe}from"./capabilities-1afb81a5.js";import{s as _e}from"./fieldProperties-663ad9a8.js";import{Z as qe}from"./FieldsIndex-9238b8b6.js";import{s as Ne}from"./fieldUtils-fcb2a714.js";import{r as Re,L as Me,P as Z}from"./SceneService-912dd8ad.js";import{s as ke,l as Ue,u as Qe,m as Ke}from"./I3SLayerDefinitions-90d245ae.js";import{b as Ve}from"./Query-aaf746b1.js";import{p as De}from"./popupUtils-de5a8217.js";import{h as Ce}from"./ElevationInfo-e9f55e40.js";import{$ as Ze}from"./I3SUtil-06dd7732.js";import{n as He,p as Je}from"./popupUtils-4c7e63a9.js";import{i as Ge}from"./APIKeyMixin-7c0d27b5.js";import{l as We}from"./ArcGISService-1a65aba0.js";import{e as ze}from"./CustomParametersMixin-882f293c.js";import{u as Xe}from"./OperationalLayer-04352719.js";import{j as Ye}from"./PortalLayer-f8b97b56.js";import{t as et}from"./ScaleRangeLayer-61383a56.js";import{s as tt}from"./associatedFeatureServiceUtils-c7af6fe2.js";import{n as rt}from"./uuid-709b6c67.js";import{t as it}from"./symbols-b3e075ad.js";import{I as H,x as ot,Z as st}from"./elevationInfoUtils-a8638c06.js";import"./Evented-b5127116.js";import"./SimpleObservable-ae589a25.js";import"./time-0817624a.js";import"./cast-e7a2f9aa.js";import"./assets-6fd92e57.js";import"./geometry-31b45acd.js";import"./Polyline-013cde1f.js";import"./aaBoundingRect-aef00841.js";import"./Axis-30be7e73.js";import"./mathUtils-19b6edfc.js";import"./typeUtils-3056a943.js";import"./Clonable-b71fa929.js";import"./jsonUtils-2c7f966c.js";import"./date-7940da18.js";import"./locale-bde6d0f6.js";import"./datetime-7e00d9ef.js";import"./Color-e1a6dfab.js";import"./colorUtils-ac6863dc.js";import"./ColorStop-6cee3909.js";import"./LRUCache-000d0e19.js";import"./Version-ef27dfc4.js";import"./colorUtils-f660fd36.js";import"./vec42-a95eff2d.js";import"./vec4f64-430e4feb.js";import"./utils-064c64c4.js";import"./heatmapUtils-7a838493.js";import"./screenUtils-7afeb41c.js";import"./TextSymbol-53669eb2.js";import"./reactiveUtils-e7d9f86e.js";import"./diffUtils-d0e8b583.js";import"./Portal-cb507469.js";import"./colorRamps-bef5e122.js";import"./opacityUtils-f0a081b4.js";import"./visualVariableUtils-79811b9c.js";import"./compilerUtils-7f5a3043.js";import"./lengthUtils-1e9c410b.js";import"./styleUtils-d9ef5ac0.js";import"./layerUtils-c805b05c.js";import"./persistableUrlUtils-ca6bb38d.js";import"./FormTemplate-b1394f1a.js";import"./Field-be948aef.js";import"./fieldType-4834e8bc.js";import"./workers-1be2b889.js";import"./Connection-2d969448.js";import"./intl-fe039018.js";import"./messages-2d262041.js";import"./editsZScale-c4af7049.js";import"./queryZScale-b694be92.js";import"./zscale-d7e12601.js";import"./FeatureSet-32e85c3a.js";import"./BlendLayer-2e0705c7.js";import"./mat4f32-1b45b54f.js";import"./mat4-a6ac6b0f.js";import"./EditBusLayer-7f92d599.js";import"./FeatureEffectLayer-f145f4bc.js";import"./TimeExtent-579f0e32.js";import"./timeUtils-24502426.js";import"./FeatureLayerBase-5d10c7bd.js";import"./HeightModelInfo-46c4a968.js";import"./arcgisLayerUrl-0c479f71.js";import"./featureLayerUtils-87358b6a.js";import"./AttachmentQuery-36a8e4f4.js";import"./RelationshipQuery-722111d3.js";import"./DataLayerSource-62d0bfcf.js";import"./LayerFloorInfo-88589fec.js";import"./serviceCapabilitiesUtils-d90db62d.js";import"./FeatureReductionLayer-b89875ed.js";import"./FeatureReductionSelection-d7d28c54.js";import"./LabelClass-bca4dcea.js";import"./defaults-473b7c21.js";import"./defaultsJSON-b087dd4d.js";import"./MD5-715f37cd.js";import"./OrderedLayer-69f0528e.js";import"./RefreshableLayer-9477518b.js";import"./TemporalLayer-114f16ec.js";import"./TimeInfo-c87ecbc7.js";import"./FeatureTemplate-231bfadc.js";import"./FeatureType-d0808bff.js";import"./labelingInfo-f5739018.js";import"./versionUtils-28beeff3.js";import"./styleUtils-f1a4091c.js";import"./TopFeaturesQuery-827caf55.js";import"./interfaces-f1f22245.js";import"./UnknownTimeZone-8ede07af.js";import"./symbolLayerUtils3D-5b91ffd6.js";import"./aaBoundingBox-7242ce3e.js";import"./collectionUtils-b6e30316.js";import"./PortalItem-9d3416e3.js";import"./portalItemUtils-8aceb0b8.js";import"./projection-41da473c.js";import"./projectBuffer-af7b4ad9.js";import"./originUtils-cfe4feaf.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./jsonContext-70ccb9b3.js";import"./resourceUtils-1b55d47f.js";import"./resourceUtils-09076ff8.js";import"./saveAPIKeyUtils-7fbece8f.js";import"./saveUtils-534df74b.js";import"./mat4f64-9a8384aa.js";import"./computeTranslationToOriginAndRotation-3ac32984.js";import"./sphere-25bb4446.js";import"./ObjectStack-80adc7e7.js";import"./plane-f835f029.js";import"./mat3f64-e19cdcb8.js";import"./quatf64-81e039e4.js";import"./vec2f64-b65bfd66.js";import"./I3SBinaryReader-2a065a27.js";import"./VertexAttribute-c2df436e.js";import"./symbolColorUtils-ac5f37db.js";import"./orientedBoundingBox-27e96351.js";import"./mat3-def297a7.js";import"./quat-064ab1d0.js";import"./ViewingMode-fb6259a5.js";let y=class extends Le(ge){constructor(r){super(r),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.legendEnabled=!0,this.visible=!0,this.opacity=1}readTitle(r,o){return typeof o.alias=="string"?o.alias:typeof o.name=="string"?o.name:""}readIdOnlyOnce(r){return this.id!==-1?this.id:typeof r=="number"?r:-1}};t([i({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],y.prototype,"title",void 0),t([I("service","title",["alias","name"])],y.prototype,"readTitle",null),t([i()],y.prototype,"layer",void 0),t([i({type:de,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],y.prototype,"id",void 0),t([I("service","id")],y.prototype,"readIdOnlyOnce",null),t([i(_(String))],y.prototype,"modelName",void 0),t([i(_(Boolean))],y.prototype,"isEmpty",void 0),t([i({type:Boolean,nonNullable:!0})],y.prototype,"legendEnabled",void 0),t([i({type:Boolean,json:{name:"visibility",write:!0}})],y.prototype,"visible",void 0),t([i({type:Number,json:{write:!0}})],y.prototype,"opacity",void 0),y=t([p("esri.layers.buildingSublayers.BuildingSublayer")],y);const ae=y,J=_e();let s=class extends Ee(re.LoadableMixin(ie(ae))){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=[],this.textureSetDefinitions=[],this.geometryDefinitions=[],this.indexInfo=null,this.serviceUpdateTimeStamp=null,this.store=null,this.attributeStorageInfo=[],this.fields=[],this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){var e,r;return this.layer?{path:`${(e=this.layer.parsedUrl)==null?void 0:e.path}/sublayers/${this.id}`,query:(r=this.layer.parsedUrl)==null?void 0:r.query}:{path:""}}get fieldsIndex(){return new qe(this.fields)}readAssociatedLayer(e,r){const o=this.layer.associatedFeatureServiceItem,a=r.associatedLayerID;return o!=null&&typeof a=="number"?new se({portalItem:o,customParameters:this.customParameters,layerId:a}):null}get objectIdField(){if(this.fields!=null){for(const e of this.fields)if(e.type==="oid")return e.name}return null}get displayField(){return this.associatedLayer!=null?this.associatedLayer.displayField:void 0}get apiKey(){return this.layer.apiKey}get customParameters(){return this.layer.customParameters}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const r=e!=null?e.signal:null,o=this._fetchService(r).then(()=>{this.indexInfo=Re(this.parsedUrl.path,this.rootNode,this.nodePages,this.customParameters,this.apiKey,x.getLogger(this),r)});return this.addResolvingPromise(o),Promise.resolve(this)}createPopupTemplate(e){return De(this,e)}async _fetchService(e){const r=(await ee(this.parsedUrl.path,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,r){var a,n,m;const o=(n=(a=this.getFeatureType(r==null?void 0:r.feature))==null?void 0:a.domains)==null?void 0:n[e];return o&&o.type!=="inherited"?o:((m=this.getField(e))==null?void 0:m.domain)??null}getFeatureType(e){return e&&this.associatedLayer!=null?this.associatedLayer.getFeatureType(e):null}get types(){return this.associatedLayer!=null?this.associatedLayer.types??[]:[]}get typeIdField(){return this.associatedLayer!=null?this.associatedLayer.typeIdField:null}get geometryType(){return this.layerType==="3d-object"?"mesh":"point"}get profile(){return this.layerType==="3d-object"?"mesh-pyramids":"points"}get capabilities(){const e=this.associatedLayer!=null&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:Pe,{query:r,data:{supportsZ:o,supportsM:a,isVersioned:n}}=e;return{query:r,data:{supportsZ:o,supportsM:a,isVersioned:n}}}createQuery(){const e=new Ve;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,r){return this._getAssociatedLayerForQuery().then(o=>o.queryExtent(e||this.createQuery(),r))}queryFeatureCount(e,r){return this._getAssociatedLayerForQuery().then(o=>o.queryFeatureCount(e||this.createQuery(),r))}queryFeatures(e,r){return this._getAssociatedLayerForQuery().then(o=>o.queryFeatures(e||this.createQuery(),r)).then(o=>{if(o!=null&&o.features)for(const a of o.features)a.layer=this.layer,a.sourceLayer=this;return o})}queryObjectIds(e,r){return this._getAssociatedLayerForQuery().then(o=>o.queryObjectIds(e||this.createQuery(),r))}async queryCachedAttributes(e,r){const o=Ne(this.fieldsIndex,await He(this,Je(this)));return Ze(this.parsedUrl.path,this.attributeStorageInfo,e,r,o,this.apiKey,this.customParameters)}async queryCachedFeature(e,r){const o=await this.queryCachedAttributes(e,[r]);if(!o||o.length===0)throw new F("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const a=new Oe;return a.attributes=o[0],a.layer=this,a.sourceLayer=this,a}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:this.associatedLayer!=null}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e!=null&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),this.associatedLayer==null)throw new F("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new F("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};t([i({readOnly:!0})],s.prototype,"parsedUrl",null),t([i({type:ke,readOnly:!0})],s.prototype,"nodePages",void 0),t([i({type:[Ue],readOnly:!0})],s.prototype,"materialDefinitions",void 0),t([i({type:[Qe],readOnly:!0})],s.prototype,"textureSetDefinitions",void 0),t([i({type:[Ke],readOnly:!0})],s.prototype,"geometryDefinitions",void 0),t([i({readOnly:!0})],s.prototype,"serviceUpdateTimeStamp",void 0),t([i({readOnly:!0})],s.prototype,"store",void 0),t([i({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],s.prototype,"rootNode",void 0),t([i({readOnly:!0})],s.prototype,"attributeStorageInfo",void 0),t([i(J.fields)],s.prototype,"fields",void 0),t([i({readOnly:!0})],s.prototype,"fieldsIndex",null),t([i({readOnly:!0,type:se})],s.prototype,"associatedLayer",void 0),t([I("service","associatedLayer",["associatedLayerID"])],s.prototype,"readAssociatedLayer",null),t([i(J.outFields)],s.prototype,"outFields",void 0),t([i({type:String,readOnly:!0})],s.prototype,"objectIdField",null),t([i({readOnly:!0,type:String,json:{read:!1}})],s.prototype,"displayField",null),t([i({readOnly:!0,type:String})],s.prototype,"apiKey",null),t([i({readOnly:!0,type:String})],s.prototype,"customParameters",null),t([i({readOnly:!0,type:we})],s.prototype,"fullExtent",null),t([i({readOnly:!0,type:te})],s.prototype,"spatialReference",null),t([i({readOnly:!0})],s.prototype,"version",null),t([i({readOnly:!0,type:Ce})],s.prototype,"elevationInfo",null),t([i({readOnly:!0,type:Number})],s.prototype,"minScale",null),t([i({readOnly:!0,type:Number})],s.prototype,"maxScale",null),t([i({readOnly:!0,type:Number})],s.prototype,"effectiveScaleRange",null),t([i({type:["hide","show"],json:{write:!0}})],s.prototype,"listMode",void 0),t([i({types:Fe,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],s.prototype,"renderer",void 0),t([i({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],s.prototype,"definitionExpression",void 0),t([i(je)],s.prototype,"popupEnabled",void 0),t([i({type:xe,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],s.prototype,"popupTemplate",void 0),t([i({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],s.prototype,"normalReferenceFrame",void 0),t([i({readOnly:!0,json:{read:!1}})],s.prototype,"defaultPopupTemplate",null),t([i()],s.prototype,"types",null),t([i()],s.prototype,"typeIdField",null),t([i({json:{write:!1}}),oe(new Ie({"3DObject":"3d-object",Point:"point"}))],s.prototype,"layerType",void 0),t([i()],s.prototype,"geometryType",null),t([i()],s.prototype,"profile",null),t([i({readOnly:!0,json:{read:!1}})],s.prototype,"capabilities",null),s=t([p("esri.layers.buildingSublayers.BuildingComponentSublayer")],s);const q=s;var N;const G={type:b,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:ne}}},read:!1}};function ne(e,r,o){if(e&&Array.isArray(e))return new b(e.map(a=>{const n=at(a);if(n){const m=new n;return m.read(a,o),m}return o!=null&&o.messages&&a&&o.messages.push(new me("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(a.type||"unknown")+"' are not supported",{definition:a,context:o})),null}))}let h=N=class extends ae{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return he(this,e=>N.forEachSublayer(this.sublayers,r=>{r.type!=="building-group"&&e(r)}))}};function at(e){return e.layerType==="group"?h:q}t([i({type:["hide","show","hide-children"],json:{write:!0}})],h.prototype,"listMode",void 0),t([i(G)],h.prototype,"sublayers",void 0),h=N=t([p("esri.layers.buildingSublayers.BuildingGroupSublayer")],h),function(e){function r(o,a){o.forEach(n=>{a(n),n.type==="building-group"&&r(n.sublayers,a)})}e.sublayersProperty=G,e.readSublayers=ne,e.forEachSublayer=r}(h||(h={}));const g=h;let L=class extends f{constructor(){super(...arguments),this.type=null}};t([i({type:String,readOnly:!0,json:{write:!0}})],L.prototype,"type",void 0),L=t([p("esri.layers.support.BuildingFilterAuthoringInfo")],L);const le=L;var R;let S=R=class extends f{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new R({filterType:this.filterType,filterValues:d(this.filterValues)})}};t([i({type:String,json:{write:!0}})],S.prototype,"filterType",void 0),t([i({type:[String],json:{write:!0}})],S.prototype,"filterValues",void 0),S=R=t([p("esri.layers.support.BuildingFilterAuthoringInfoType")],S);const nt=S;var M;const lt=b.ofType(nt);let j=M=class extends f{clone(){return new M({filterTypes:d(this.filterTypes)})}};t([i({type:lt,json:{write:!0}})],j.prototype,"filterTypes",void 0),j=M=t([p("esri.layers.support.BuildingFilterAuthoringInfoBlock")],j);const pt=j;var k;const yt=b.ofType(pt);let w=k=class extends le{constructor(){super(...arguments),this.type="checkbox"}clone(){return new k({filterBlocks:d(this.filterBlocks)})}};t([i({type:["checkbox"]})],w.prototype,"type",void 0),t([i({type:yt,json:{write:!0}})],w.prototype,"filterBlocks",void 0),w=k=t([p("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],w);const W=w;let T=class extends f{};t([i({readOnly:!0,json:{read:!1}})],T.prototype,"type",void 0),T=t([p("esri.layers.support.BuildingFilterMode")],T);const E=T;var U;let B=U=class extends E{constructor(){super(...arguments),this.type="solid"}clone(){return new U}};t([i({type:["solid"],readOnly:!0,json:{write:!0}})],B.prototype,"type",void 0),B=U=t([p("esri.layers.support.BuildingFilterModeSolid")],B);const Q=B;var K;let $=K=class extends E{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new K({edges:d(this.edges)})}};t([oe({wireFrame:"wire-frame"})],$.prototype,"type",void 0),t([i(it)],$.prototype,"edges",void 0),$=K=t([p("esri.layers.support.BuildingFilterModeWireFrame")],$);const z=$;var V;let A=V=class extends E{constructor(){super(...arguments),this.type="x-ray"}clone(){return new V}};t([i({type:["x-ray"],readOnly:!0,json:{write:!0}})],A.prototype,"type",void 0),A=V=t([p("esri.layers.support.BuildingFilterModeXRay")],A);const X=A;var D;const ut={nonNullable:!0,types:{key:"type",base:E,typeMap:{solid:Q,"wire-frame":z,"x-ray":X}},json:{read:e=>{switch(e==null?void 0:e.type){case"solid":return Q.fromJSON(e);case"wireFrame":return z.fromJSON(e);case"x-ray":return X.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let v=D=class extends f{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new Q,this.title=""}clone(){return new D({filterExpression:this.filterExpression,filterMode:d(this.filterMode),title:this.title})}};t([i({type:String,json:{write:{enabled:!0,isRequired:!0}}})],v.prototype,"filterExpression",void 0),t([i(ut)],v.prototype,"filterMode",void 0),t([i({type:String,json:{write:{enabled:!0,isRequired:!0}}})],v.prototype,"title",void 0),v=D=t([p("esri.layers.support.BuildingFilterBlock")],v);const dt=v;var C;const mt=b.ofType(dt);let c=C=class extends f{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=rt(),this.name=null}clone(){return new C({description:this.description,filterBlocks:d(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:d(this.filterAuthoringInfo)})}};t([i({type:String,json:{write:!0}})],c.prototype,"description",void 0),t([i({type:mt,json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"filterBlocks",void 0),t([i({types:{key:"type",base:le,typeMap:{checkbox:W}},json:{read:e=>(e==null?void 0:e.type)==="checkbox"?W.fromJSON(e):null,write:!0}})],c.prototype,"filterAuthoringInfo",void 0),t([i({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"id",void 0),t([i({type:String,json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"name",void 0),c=C=t([p("esri.layers.support.BuildingFilter")],c);const ct=c;let u=class extends f{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};t([i({type:String})],u.prototype,"fieldName",void 0),t([i({type:String})],u.prototype,"modelName",void 0),t([i({type:String})],u.prototype,"label",void 0),t([i({type:Number})],u.prototype,"min",void 0),t([i({type:Number})],u.prototype,"max",void 0),t([i({json:{read:e=>Array.isArray(e)&&(e.every(r=>typeof r=="string")||e.every(r=>typeof r=="number"))?e.slice():null}})],u.prototype,"mostFrequentValues",void 0),t([i({type:[Number]})],u.prototype,"subLayerIds",void 0),u=t([p("esri.layers.support.BuildingFieldStatistics")],u);let O=class extends re.LoadableMixin(ie(f)){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||this.loadStatus==="loading"?this._get("fields"):(x.getLogger(this).error("building summary statistics are not loaded"),null)}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this._fetchService(r)),Promise.resolve(this)}async _fetchService(e){const r=(await ee(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(r,{origin:"service"})}};t([i({constructOnly:!0,type:String})],O.prototype,"url",void 0),t([i({readOnly:!0,type:[u],json:{read:{source:"summary"}}})],O.prototype,"fields",null),O=t([p("esri.layers.support.BuildingSummaryStatistics")],O);const pe=O,ye=b.ofType(ct),ue=d(g.sublayersProperty);var Y;const P=(Y=ue.json)==null?void 0:Y.origins;P&&(P["web-scene"]={type:[q],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},P["portal-item"]={type:[q],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}});let l=class extends Me(We(Xe(Ye(et(ve(ze(Ge($e)))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new ce({getCollections:()=>[this.sublayers],getChildrenFunction:r=>r.type==="building-group"?r.sublayers:null}),this.sublayers=null,this._sublayerOverrides=null,this.filters=new ye,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.legendEnabled=!0,this.type="building-scene"}normalizeCtorArgs(e){return typeof e=="string"?{url:e}:e??{}}destroy(){this.allSublayers.destroy()}readSublayers(e,r,o){const a=g.readSublayers(e,r,o);return g.forEachSublayer(a,n=>n.layer=this),this._sublayerOverrides&&(this.applySublayerOverrides(a,this._sublayerOverrides),this._sublayerOverrides=null),a}applySublayerOverrides(e,{overrides:r,context:o}){g.forEachSublayer(e,a=>a.read(r.get(a.id),o))}readSublayerOverrides(e,r){var a;const o=new Map;for(const n of e)n!=null&&typeof n=="object"&&typeof n.id=="number"?o.set(n.id,n):(a=r.messages)==null||a.push(new F("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:n}));return{overrides:o,context:r}}writeSublayerOverrides(e,r,o){const a=[];g.forEachSublayer(this.sublayers,n=>{const m=n.write({},o);Object.keys(m).length>1&&a.push(m)}),a.length>0&&(r.sublayers=a)}writeUnappliedOverrides(e,r){r.sublayers=[],e.overrides.forEach(o=>{r.sublayers.push(d(o))})}write(e,r){return e=super.write(e,r),!r||r.origin!=="web-scene"&&r.origin!=="portal-item"||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,r):this._sublayerOverrides&&this.writeUnappliedOverrides(this._sublayerOverrides,e)),e}read(e,r){if(super.read(e,r),r&&(r.origin==="web-scene"||r.origin==="portal-item")&&e!=null&&Array.isArray(e.sublayers)){const o=this.readSublayerOverrides(e.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,o):this._sublayerOverrides=o}}readSummaryStatistics(e,r){var o;if(typeof r.statisticsHRef=="string"){const a=Se((o=this.parsedUrl)==null?void 0:o.path,r.statisticsHRef);return new pe({url:a})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const r=e!=null?e.signal:null,o=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(be).then(()=>this._fetchService(r)).then(()=>this._fetchAssociatedFeatureService(r));return this.addResolvingPromise(o),Promise.resolve(this)}loadAll(){return fe(this,e=>{g.forEachSublayer(this.sublayers,r=>{r.type!=="building-group"&&e(r)}),this.summaryStatistics&&e(this.summaryStatistics)})}async saveAs(e,r){return this._debouncedSaveOperations(Z.SAVE_AS,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(Z.SAVE,e)}validateLayer(e){if(!e.layerType||e.layerType!=="Building")throw new F("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}async _fetchAssociatedFeatureService(e){try{const{portalItem:r}=await tt(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,customParameters:this.customParameters,apiKey:this.apiKey,signal:e});this.associatedFeatureServiceItem=r}catch(r){x.getLogger(this).warn("Associated feature service item could not be loaded",r)}}_validateElevationInfo(){const e=this.elevationInfo,r="Building scene layers";H(x.getLogger(this),ot(r,"absolute-height",e)),H(x.getLogger(this),st(r,e))}};t([i({type:["BuildingSceneLayer"]})],l.prototype,"operationalLayerType",void 0),t([i({readOnly:!0})],l.prototype,"allSublayers",void 0),t([i(ue)],l.prototype,"sublayers",void 0),t([I("service","sublayers")],l.prototype,"readSublayers",null),t([i({type:ye,nonNullable:!0,json:{write:!0}})],l.prototype,"filters",void 0),t([i({type:String,json:{write:!0}})],l.prototype,"activeFilterId",void 0),t([i({readOnly:!0,type:pe})],l.prototype,"summaryStatistics",void 0),t([I("summaryStatistics",["statisticsHRef"])],l.prototype,"readSummaryStatistics",null),t([i({type:[String],json:{read:!1}})],l.prototype,"outFields",void 0),t([i(Te)],l.prototype,"fullExtent",void 0),t([i(Be)],l.prototype,"legendEnabled",void 0),t([i({type:["show","hide","hide-children"]})],l.prototype,"listMode",void 0),t([i(_(te))],l.prototype,"spatialReference",void 0),t([i(Ae)],l.prototype,"elevationInfo",null),t([i({json:{read:!1},readOnly:!0})],l.prototype,"type",void 0),t([i()],l.prototype,"associatedFeatureServiceItem",void 0),l=t([p("esri.layers.BuildingSceneLayer")],l);const fo=l;export{fo as default};
