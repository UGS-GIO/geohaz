import{r as v,e as o,c}from"./subclass-f7409b1b.js";import{I as _,V as $,U as j}from"./request-a10d6950.js";import{i as T}from"./Clonable-b71fa929.js";import{V as w}from"./Collection-aa6ef54b.js";import{s as F,a as b}from"./Error-21d1d076.js";import{m as h}from"./MultiOriginJSONSupport-9bd581c6.js";import{e as S,p as x}from"./promiseUtils-1d963c7c.js";import{y as s}from"./JSONSupport-acf2865c.js";import"./typedArrayUtil-2af43698.js";import{b as u}from"./Layer-668dff8a.js";import{e as P}from"./LRUCache-000d0e19.js";import{n as f}from"./BlendLayer-2e0705c7.js";import{t as g}from"./ScaleRangeLayer-61383a56.js";import{g as L,m as R,c as V,y as O}from"./commonProperties-0c35c2c9.js";import{a as C}from"./lazyLayerLoader-b21a171b.js";import{a as Q,c as E}from"./OrderedLayer-69f0528e.js";import{Q as q}from"./Portal-cb507469.js";import B from"./PortalItem-9d3416e3.js";import{T as U}from"./utils-11762b6e.js";import{P as D}from"./PopupTemplate-18f22683.js";import"./ClassBreaksRenderer-aa69b6ca.js";import{m as G}from"./jsonUtils-7ee1282d.js";import"./UniqueValueRenderer-983c9a3e.js";import"./SimpleRenderer-2c5d637a.js";import{p as J}from"./FeatureEffectLayer-f145f4bc.js";import{C as N}from"./LabelClass-bca4dcea.js";import{i as A}from"./labelingInfo-f5739018.js";import{p as M}from"./popupUtils-de5a8217.js";import k from"./FeatureLayerSource-8e442e15.js";import{o as H}from"./clientSideDefaults-1b55d85f.js";import{i as K}from"./APIKeyMixin-7c0d27b5.js";import{l as z}from"./ArcGISService-1a65aba0.js";import{e as W}from"./CustomParametersMixin-882f293c.js";import{D as X}from"./FeatureLayerBase-5d10c7bd.js";import{u as Y}from"./OperationalLayer-04352719.js";import{j as Z}from"./PortalLayer-f8b97b56.js";import{f as tt}from"./RefreshableLayer-9477518b.js";import{f as et}from"./TemporalLayer-114f16ec.js";import{Q as rt}from"./featureLayerUtils-87358b6a.js";import{s as ot}from"./fieldProperties-663ad9a8.js";import{e as it}from"./versionUtils-28beeff3.js";import{b as y}from"./Query-aaf746b1.js";import"./Evented-b5127116.js";import"./SimpleObservable-ae589a25.js";import"./time-0817624a.js";import"./geometry-31b45acd.js";import"./Extent-2b4578b8.js";import"./SpatialReference-428523ee.js";import"./jsonMap-5ba4a9c2.js";import"./assets-6fd92e57.js";import"./cast-e7a2f9aa.js";import"./Polyline-013cde1f.js";import"./aaBoundingRect-aef00841.js";import"./Axis-30be7e73.js";import"./mathUtils-19b6edfc.js";import"./typeUtils-3056a943.js";import"./Identifiable-1430bdc2.js";import"./Loadable-8a1ead8b.js";import"./Promise-ec74e14b.js";import"./colorUtils-ac6863dc.js";import"./screenUtils-7afeb41c.js";import"./mat4f32-1b45b54f.js";import"./mat4-a6ac6b0f.js";import"./TimeExtent-579f0e32.js";import"./timeUtils-24502426.js";import"./date-7940da18.js";import"./locale-bde6d0f6.js";import"./datetime-7e00d9ef.js";import"./persistableUrlUtils-ca6bb38d.js";import"./ElevationInfo-e9f55e40.js";import"./fieldUtils-fcb2a714.js";import"./intl-fe039018.js";import"./messages-2d262041.js";import"./lengthUtils-1e9c410b.js";import"./opacityUtils-f0a081b4.js";import"./ClassBreaksDefinition-be15ec21.js";import"./enumeration-4a4e87c4.js";import"./Color-e1a6dfab.js";import"./symbols-b3e075ad.js";import"./TextSymbol-53669eb2.js";import"./symbolLayerUtils3D-5b91ffd6.js";import"./aaBoundingBox-7242ce3e.js";import"./collectionUtils-b6e30316.js";import"./reactiveUtils-e7d9f86e.js";import"./ColorStop-6cee3909.js";import"./Version-ef27dfc4.js";import"./FieldsIndex-9238b8b6.js";import"./UnknownTimeZone-8ede07af.js";import"./colorUtils-f660fd36.js";import"./vec42-a95eff2d.js";import"./vec4f64-430e4feb.js";import"./utils-064c64c4.js";import"./heatmapUtils-7a838493.js";import"./diffUtils-d0e8b583.js";import"./colorRamps-bef5e122.js";import"./visualVariableUtils-79811b9c.js";import"./Graphic-f1881791.js";import"./jsonUtils-2c7f966c.js";import"./compilerUtils-7f5a3043.js";import"./styleUtils-d9ef5ac0.js";import"./layerUtils-c805b05c.js";import"./defaults-473b7c21.js";import"./defaultsJSON-b087dd4d.js";import"./uuid-709b6c67.js";import"./meshVertexSpaceUtils-a98cf1bd.js";import"./MeshLocalVertexSpace-48f1035e.js";import"./vec3-10e9217f.js";import"./External-e1bc87f6.js";import"./infoFor3D-24efd44a.js";import"./projection-41da473c.js";import"./projectBuffer-af7b4ad9.js";import"./zscale-d7e12601.js";import"./editingSupport-20f0f2ff.js";import"./normalizeUtils-059b11cb.js";import"./normalizeUtilsCommon-c4e9ddb1.js";import"./utils-3234cfff.js";import"./utils-ed91a700.js";import"./EditBusLayer-7f92d599.js";import"./QueryTask-46d1eeb8.js";import"./DataLayerSource-62d0bfcf.js";import"./Field-be948aef.js";import"./fieldType-4834e8bc.js";import"./executeForIds-6ac7b389.js";import"./query-21390169.js";import"./urlUtils-6a004888.js";import"./pbfQueryUtils-06460449.js";import"./pbf-1d598563.js";import"./OptimizedGeometry-5ad221bf.js";import"./OptimizedFeature-0af09c7a.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-b694be92.js";import"./executeQueryJSON-7d8733f5.js";import"./FeatureSet-32e85c3a.js";import"./executeQueryPBF-9bfb856e.js";import"./featureConversionUtils-e62978d0.js";import"./arcgisLayerUrl-0c479f71.js";import"./editsZScale-c4af7049.js";import"./QueryEngineCapabilities-85c4f1d0.js";import"./AttachmentQuery-36a8e4f4.js";import"./RelationshipQuery-722111d3.js";import"./HeightModelInfo-46c4a968.js";import"./LayerFloorInfo-88589fec.js";import"./serviceCapabilitiesUtils-d90db62d.js";import"./portalItemUtils-8aceb0b8.js";import"./TimeInfo-c87ecbc7.js";class st{constructor(e,r){this.objectId=e,this.itemSource=r,this.count=0,this.layer=null,this.sortValue=void 0}}const d=new P(20,t=>t.destroy());let n=class extends g(f(h(u))){constructor(t){super(t),this._oidToReference=new Map,this._layerToReference=new Map,this._portals=new Map,this.layers=new w,this.maximumVisibleSublayers=10,this.opacity=1,this.title="Layers In View",this.type="catalog-dynamic-group",this.visible=!0}load(t){return this.addResolvingPromise(this.parent.load()),Promise.resolve(this)}get _orderBy(){var t;return((t=this.parent.orderBy)==null?void 0:t.find(e=>!e.valueExpression&&e.field))??new Q({field:this.parent.objectIdField})}get _referenceComparator(){const t=this._orderBy,e=this.parent.fieldsIndex.get(t.field),r=U(e==null?void 0:e.toJSON().type,t.order==="descending");return(i,p)=>r(i.sortValue,p.sortValue)||i.objectId-i.objectId}acquireLayer(t){const e=t.getObjectId(),r=v(this._oidToReference,e,()=>this._createLayerReference(t));return r.count++,S(()=>{r.count--,r.count||this._disposeLayerReference(r)})}_createLayerReference(t){const e=t.getObjectId(),r=t.getAttribute(this.parent.itemSourceField),i=new st(e,r);if(d.get(r))return this._addLayer(d.pop(r),i,t),i;let p;try{p=JSON.parse(r)}catch(l){return F.getLogger(this).error(l),i}return this._createLayer(p).then(l=>{this.destroyed||i.count===0?(d.get(r)||d.put(i.itemSource,l),i.layer=null):this._addLayer(l,i,t)}).catch(()=>{}),i}_addLayer(t,e,r){this._layerToReference.set(t,e),e.sortValue=r.getAttribute(this._orderBy.field),e.layer=t,t.parent=this,this.layers.add(t),this.layers.sort((i,p)=>this._referenceComparator(this._layerToReference.get(i),this._layerToReference.get(p)))}_disposeLayerReference(t){t.layer&&(this._layerToReference.delete(t.layer),this.layers.remove(t.layer),d.put(t.itemSource,t.layer)),this._oidToReference.delete(t.objectId)}async _createLayer(t){if(!at(t))return new(await C.UnsupportedLayer());const{itemId:e,portalUrl:r}=t,i=v(this._portals,r,()=>new q({url:r}));return u.fromPortalItem(new B({id:e,portal:i}))}};o([s()],n.prototype,"_orderBy",null),o([s()],n.prototype,"_referenceComparator",null),o([s({readOnly:!0})],n.prototype,"layers",void 0),o([s()],n.prototype,"maximumVisibleSublayers",void 0),o([s(L)],n.prototype,"opacity",void 0),o([s({type:String,json:{name:"title",write:!0}})],n.prototype,"title",void 0),o([s({json:{read:!1}})],n.prototype,"type",void 0),o([s({type:Boolean,json:{name:"visibility",write:!0}})],n.prototype,"visible",void 0),n=o([c("esri.layers.catalog.CatalogDynamicGroupLayer")],n);const pt=n;function at(t){return typeof t=="object"&&t!=null&&"itemId"in t&&"portalUrl"in t}let m=class extends g(J(f(h(u)))){constructor(t){super(t),this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.opacity=1,this.popupEnabled=!0,this.popupTemplate=null,this.renderer=null,this.type="catalog-footprint",this.visible=!0}load(t){return this.addResolvingPromise(this.parent.load()),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}get fields(){return this.parent.fields}get fieldsIndex(){return this.parent.fieldsIndex}get geometryType(){return this.parent.geometryType}get objectIdField(){return this.parent.objectIdField}get orderBy(){return this.parent.orderBy}createPopupTemplate(t){const e={fields:this.parent.fields,objectIdField:this.parent.objectIdField,title:this.title};return M(e,t)}createQuery(){return this.parent.createQuery()}queryFeatures(t,e){return this.parent.queryFeatures(t,e)}};o([s({readOnly:!0})],m.prototype,"defaultPopupTemplate",null),o([s({type:[N],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:A,write:!0}})],m.prototype,"labelingInfo",void 0),o([s(R)],m.prototype,"labelsVisible",void 0),o([s(V)],m.prototype,"legendEnabled",void 0),o([s(L)],m.prototype,"opacity",void 0),o([s(O)],m.prototype,"popupEnabled",void 0),o([s({type:D,json:{name:"popupInfo",write:!0}})],m.prototype,"popupTemplate",void 0),o([s({types:G,json:{name:"layerDefinition.drawingInfo.renderer"}})],m.prototype,"renderer",void 0),o([s({json:{read:!1}})],m.prototype,"type",void 0),o([s({type:Boolean,json:{name:"visibility",write:!0}})],m.prototype,"visible",void 0),m=o([c("esri.layers.catalog.CatalogFootprintLayer")],m);const mt=m,nt="esri.layers.CatalogLayer",I=ot();let a=class extends X(f(E(et(g(tt(z(Y(Z(h(W(K(T(u))))))))))))){constructor(t){super(t),this.dynamicGroupLayer=new pt({parent:this}),this.fields=null,this.fieldsIndex=null,this.footprintLayer=new mt({parent:this}),this.itemSourceField="cd_itemsource",this.itemTypeField="cd_itemtype",this.layers=new w([this.dynamicGroupLayer,this.footprintLayer]),this.source=new k({layer:this}),this.type="catalog"}load(t){const e=t!=null?t.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},t).catch(x).then(async()=>{var i;if(!this.url)throw new b("catalog-layer:missing-url","Catalog layer must be created with a url");if(this.url&&this.layerId==null){const p=await this._fetchFirstValidLayerId(e);if(p==null)throw new b("catalog-layer:missing-layerId","There is no Catalog Layer in the service",{service:this.url});this.layerId=p}await this.source.load(),this.source.sourceJSON&&(this.sourceJSON=this.source.sourceJSON,this.read(this.source.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:(i=this.portalItem)==null?void 0:i.portal,url:this.parsedUrl}))}).then(()=>rt(this,"load",t));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")??0)+1}get parsedUrl(){const t=_(this.url);return t!=null&&this.layerId!=null&&(t.path=$(t.path,this.layerId.toString())),t}createQuery(){var p;const t=new y,e=(p=this.capabilities)==null?void 0:p.query;t.returnGeometry=!0,e&&(t.compactGeometryEnabled=e.supportsCompactGeometry,t.defaultSpatialReferenceEnabled=e.supportsDefaultSpatialReference),t.outFields=["*"];const{timeOffset:r,timeExtent:i}=this;return t.timeExtent=r!=null&&i!=null?i.offset(-r.value,r.unit):i||null,t}getField(t){return this.fieldsIndex.get(t)}getFieldDomain(t,e){var r;return(r=this.fieldsIndex.get(t))==null?void 0:r.domain}async queryFeatures(t,e){const r=await this.load(),i=await r.source.queryFeatures(y.from(t)??r.createQuery(),e);if(i!=null&&i.features)for(const p of i.features)p.layer=p.sourceLayer=r.footprintLayer;return i}async queryObjectIds(t,e){return(await this.load()).source.queryObjectIds(y.from(t)??this.createQuery(),e)}async queryFeatureCount(t,e){return(await this.load()).source.queryFeatureCount(y.from(t)??this.createQuery(),e)}async queryExtent(t,e){return(await this.load()).source.queryExtent(y.from(t)??this.createQuery(),e)}serviceSupportsSpatialReference(t){return this.loaded&&it(this,t)}read(t,e){super.read(t,e);let r=t.footprintLayer;r||(e==null?void 0:e.origin)!=="service"||(r={layerDefinition:{drawingInfo:H(t.geometryType)}}),this.footprintLayer.read(r,e)}_fetchFirstValidLayerId(t){return j(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t}).then(e=>{var i;const r=e.data;if(r)return Array.isArray(r.layers)?(i=r.layers.find(p=>p.type==="Catalog Layer"))==null?void 0:i.id:void 0})}};o([s({readOnly:!0})],a.prototype,"createQueryVersion",null),o([s({...I.fields,json:{origins:{service:{name:"fields"}}}})],a.prototype,"fields",void 0),o([s(I.fieldsIndex)],a.prototype,"fieldsIndex",void 0),o([s({json:{read:!1,write:!1}})],a.prototype,"footprintLayer",void 0),o([s()],a.prototype,"itemSourceField",void 0),o([s()],a.prototype,"itemTypeField",void 0),o([s()],a.prototype,"layers",void 0),o([s({value:"CatalogLayer",type:["CatalogLayer"]})],a.prototype,"operationalLayerType",void 0),o([s()],a.prototype,"outFields",void 0),o([s({readOnly:!0})],a.prototype,"parsedUrl",null),o([s()],a.prototype,"source",void 0),o([s({json:{read:!1}})],a.prototype,"type",void 0),a=o([c(nt)],a);const Hr=a;export{Hr as default};