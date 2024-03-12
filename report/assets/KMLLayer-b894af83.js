import{d as O,e,c as g}from"./subclass-f7409b1b.js";import"./geometry-31b45acd.js";import{V as h}from"./Collection-aa6ef54b.js";import{l as _}from"./CollectionFlattener-1d70a253.js";import{m as F}from"./MultiOriginJSONSupport-9bd581c6.js";import{p as j}from"./promiseUtils-1d963c7c.js";import{v,C as n,d as m,w as c}from"./reactiveUtils-e7d9f86e.js";import{l as M}from"./request-a10d6950.js";import{u as $,y as s}from"./JSONSupport-acf2865c.js";import"./typedArrayUtil-2af43698.js";import{u as C}from"./Error-21d1d076.js";import{M as d,o as y}from"./Extent-2b4578b8.js";import{f as S,r as I}from"./SpatialReference-428523ee.js";import{b as K}from"./Layer-668dff8a.js";import{n as N}from"./BlendLayer-2e0705c7.js";import{u as P}from"./OperationalLayer-04352719.js";import{j as R}from"./PortalLayer-f8b97b56.js";import{f as T}from"./RefreshableLayer-9477518b.js";import{t as J}from"./ScaleRangeLayer-61383a56.js";import{d as z}from"./commonProperties-0c35c2c9.js";import{o as A}from"./Evented-b5127116.js";import{m as V}from"./Loadable-8a1ead8b.js";import{j as W,S as w,g as x,d as E}from"./kmlUtils-4fc77377.js";import"./Polyline-013cde1f.js";import"./aaBoundingRect-aef00841.js";import"./Axis-30be7e73.js";import"./mathUtils-19b6edfc.js";import"./typeUtils-3056a943.js";import"./jsonMap-5ba4a9c2.js";import"./SimpleObservable-ae589a25.js";import"./time-0817624a.js";import"./cast-e7a2f9aa.js";import"./assets-6fd92e57.js";import"./Identifiable-1430bdc2.js";import"./colorUtils-ac6863dc.js";import"./screenUtils-7afeb41c.js";import"./mat4f32-1b45b54f.js";import"./mat4-a6ac6b0f.js";import"./layerUtils-c805b05c.js";import"./Portal-cb507469.js";import"./locale-bde6d0f6.js";import"./PortalItem-9d3416e3.js";import"./persistableUrlUtils-ca6bb38d.js";import"./Promise-ec74e14b.js";import"./portalItemUtils-8aceb0b8.js";import"./projection-41da473c.js";import"./projectBuffer-af7b4ad9.js";import"./zscale-d7e12601.js";import"./TimeExtent-579f0e32.js";import"./timeUtils-24502426.js";import"./date-7940da18.js";import"./datetime-7e00d9ef.js";import"./ElevationInfo-e9f55e40.js";import"./fieldUtils-fcb2a714.js";import"./intl-fe039018.js";import"./messages-2d262041.js";import"./lengthUtils-1e9c410b.js";import"./opacityUtils-f0a081b4.js";import"./PopupTemplate-18f22683.js";import"./Clonable-b71fa929.js";import"./enumeration-4a4e87c4.js";import"./Color-e1a6dfab.js";import"./aaBoundingBox-7242ce3e.js";import"./jsonUtils-7ee1282d.js";import"./ClassBreaksRenderer-aa69b6ca.js";import"./symbols-b3e075ad.js";import"./TextSymbol-53669eb2.js";import"./symbolLayerUtils3D-5b91ffd6.js";import"./collectionUtils-b6e30316.js";import"./UniqueValueRenderer-983c9a3e.js";import"./diffUtils-d0e8b583.js";import"./colorRamps-bef5e122.js";import"./ColorStop-6cee3909.js";import"./visualVariableUtils-79811b9c.js";import"./Graphic-f1881791.js";import"./jsonUtils-2c7f966c.js";import"./compilerUtils-7f5a3043.js";import"./styleUtils-d9ef5ac0.js";import"./LRUCache-000d0e19.js";import"./Version-ef27dfc4.js";import"./FieldsIndex-9238b8b6.js";import"./UnknownTimeZone-8ede07af.js";import"./colorUtils-f660fd36.js";import"./vec42-a95eff2d.js";import"./vec4f64-430e4feb.js";import"./utils-064c64c4.js";import"./heatmapUtils-7a838493.js";import"./SimpleRenderer-2c5d637a.js";import"./FeatureSet-32e85c3a.js";import"./Field-be948aef.js";import"./fieldType-4834e8bc.js";var u;let p=u=class extends A.EventedMixin($(V)){constructor(...t){super(...t),this.description=null,this.fullExtent=null,this.id=null,this.networkLink=null,this.parent=null,this.sublayers=null,this.title=null,this.sourceJSON=null,this.layer=null,this.addHandles([v(()=>this.sublayers,"after-add",({item:r})=>{r.parent=this,r.layer=this.layer},n),v(()=>this.sublayers,"after-remove",({item:r})=>{r.layer=r.parent=null},n),m(()=>this.sublayers,(r,i)=>{if(i)for(const o of i)o.layer=o.parent=null;if(r)for(const o of r)o.parent=this,o.layer=this.layer},n),m(()=>this.layer,r=>{if(this.sublayers)for(const i of this.sublayers)i.layer=r},n)])}initialize(){c(()=>this.networkLink).then(()=>c(()=>this.visible===!0)).then(()=>this.load())}load(t){var o;if(!this.networkLink||this.networkLink.viewFormat)return;const r=t!=null?t.signal:null,i=this._fetchService(((o=this._get("networkLink"))==null?void 0:o.href)??"",r).then(a=>{var b;const L=W(a.sublayers);this.fullExtent=d.fromJSON(L),this.sourceJSON=a;const f=O(h.ofType(u),w(u,a));this.sublayers?this.sublayers.addMany(f):this.sublayers=f,(b=this.layer)==null||b.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(i),Promise.resolve(this)}get visible(){return this._get("visible")}set visible(t){this._get("visible")!==t&&(this._set("visible",t),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(t,r){return!!r.visibility}_fetchService(t,r){return x(t,this.layer.outSpatialReference,this.layer.refreshInterval,r).then(i=>E(i.data))}};e([s()],p.prototype,"description",void 0),e([s({type:d})],p.prototype,"fullExtent",void 0),e([s()],p.prototype,"id",void 0),e([s({readOnly:!0,value:null})],p.prototype,"networkLink",void 0),e([s({json:{write:{allowNull:!0}}})],p.prototype,"parent",void 0),e([s({type:h.ofType(p),json:{write:{allowNull:!0}}})],p.prototype,"sublayers",void 0),e([s({value:null,json:{read:{source:"name",reader:t=>C(t)}}})],p.prototype,"title",void 0),e([s({value:!0})],p.prototype,"visible",null),e([y("visible",["visibility"])],p.prototype,"readVisible",null),e([s()],p.prototype,"sourceJSON",void 0),e([s()],p.prototype,"layer",void 0),p=u=e([g("esri.layers.support.KMLSublayer")],p);const k=p,H=["kml","xml"];let l=class extends N(T(J(P(R(F(K)))))){constructor(...t){super(...t),this._visibleFolders=[],this.allSublayers=new _({getCollections:()=>[this.sublayers],getChildrenFunction:r=>r.sublayers}),this.outSpatialReference=S.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.addHandles([m(()=>this.sublayers,(t,r)=>{r&&r.forEach(i=>{i.parent=null,i.layer=null}),t&&t.forEach(i=>{i.parent=this,i.layer=this})},n),this.on("sublayer-update",()=>this.notifyChange("fullExtent"))])}normalizeCtorArgs(t,r){return typeof t=="string"?{url:t,...r}:t}readSublayersFromItemOrWebMap(t,r){this._visibleFolders=r.visibleFolders}readSublayers(t,r,i){return w(k,r,i,this._visibleFolders)}writeSublayers(t,r){const i=[],o=t.toArray();for(;o.length;){const a=o[0];a.networkLink||(a.visible&&i.push(a.id),a.sublayers&&o.push(...a.sublayers.toArray())),o.shift()}r.visibleFolders=i}get title(){const t=this._get("title");return t&&this.originOf("title")!=="defaults"?t:this.url?M(this.url,H)||"KML":t||""}set title(t){this._set("title",t)}get visibleSublayers(){const t=this.sublayers,r=[],i=o=>{o.visible&&(r.push(o),o.sublayers&&o.sublayers.forEach(i))};return t&&t.forEach(i),r}get fullExtent(){return this._recomputeFullExtent()}load(t){const r=t!=null?t.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"],supportsData:!1},t).catch(j).then(()=>this._fetchService(r))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(t){const r=await Promise.resolve().then(()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:x(this.url??"",this.outSpatialReference,this.refreshInterval,t)),i=E(r.data);i&&this.read(i,{origin:"service"})}_recomputeFullExtent(){let t=null;this.extent!=null&&(t=this.extent.clone());const r=i=>{if(i.sublayers)for(const o of i.sublayers.items)r(o),o.visible&&o.fullExtent&&(t!=null?t.union(o.fullExtent):t=o.fullExtent.clone())};return r(this),t}};e([s({readOnly:!0})],l.prototype,"allSublayers",void 0),e([s({type:S})],l.prototype,"outSpatialReference",void 0),e([s({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],l.prototype,"path",void 0),e([s({readOnly:!0,json:{read:!1,write:!1}})],l.prototype,"legendEnabled",void 0),e([s({type:["show","hide","hide-children"]})],l.prototype,"listMode",void 0),e([s({type:["KML"]})],l.prototype,"operationalLayerType",void 0),e([s({})],l.prototype,"resourceInfo",void 0),e([s({type:h.ofType(k),json:{write:{ignoreOrigin:!0}}})],l.prototype,"sublayers",void 0),e([y(["web-map","portal-item"],"sublayers",["visibleFolders"])],l.prototype,"readSublayersFromItemOrWebMap",null),e([y("service","sublayers",["sublayers"])],l.prototype,"readSublayers",null),e([I("sublayers")],l.prototype,"writeSublayers",null),e([s({readOnly:!0,json:{read:!1}})],l.prototype,"type",void 0),e([s({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],l.prototype,"title",null),e([s(z)],l.prototype,"url",void 0),e([s({readOnly:!0})],l.prototype,"visibleSublayers",null),e([s({type:d})],l.prototype,"extent",void 0),e([s()],l.prototype,"fullExtent",null),l=e([g("esri.layers.KMLLayer")],l);const Fr=l;export{Fr as default};
