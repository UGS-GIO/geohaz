import{d as Le,e as a,c as ge,T as Ae}from"./subclass-f7409b1b.js";import{a as Me,c as Ue,b as Te}from"./Error-21d1d076.js";import{c as je}from"./Graphic-f1881791.js";import{P as Ce}from"./PopupTemplate-18f22683.js";import{I as be,E as ne,U as k,J as _e,x as qe}from"./request-a10d6950.js";import{V as Q}from"./Collection-aa6ef54b.js";import{l as Ve}from"./CollectionFlattener-1d70a253.js";import{s as Be}from"./jsonMap-5ba4a9c2.js";import{S as We,m as De}from"./MultiOriginJSONSupport-9bd581c6.js";import{p as ke}from"./promiseUtils-1d963c7c.js";import{v as V,C as E,d as H}from"./reactiveUtils-e7d9f86e.js";import{y as u,F as Ge}from"./JSONSupport-acf2865c.js";import{M as R,o as O}from"./Extent-2b4578b8.js";import{f as I,G as Xe,r as G}from"./SpatialReference-428523ee.js";import{i as ie}from"./scaleUtils-6415ec85.js";import{b as He}from"./Layer-668dff8a.js";import{n as Je}from"./BlendLayer-2e0705c7.js";import{u as ze}from"./OperationalLayer-04352719.js";import{j as Qe}from"./PortalLayer-f8b97b56.js";import{f as Ke}from"./RefreshableLayer-9477518b.js";import{t as Ye}from"./ScaleRangeLayer-61383a56.js";import{f as Ze}from"./TemporalLayer-114f16ec.js";import{o as J}from"./crsUtils-3bab3d8c.js";import{C as et}from"./arcgisLayerUrl-0c479f71.js";import{c as tt,d as rt}from"./commonProperties-0c35c2c9.js";import{a as se}from"./ExportWMSImageParameters-c3ee9b73.js";import{t as nt}from"./imageBitmapUtils-a0aff7ad.js";import{s as it}from"./Identifiable-1430bdc2.js";import{s as st}from"./cast-e7a2f9aa.js";import{q as T}from"./typedArrayUtil-2af43698.js";import"./geometry-31b45acd.js";import"./Polyline-013cde1f.js";import"./aaBoundingRect-aef00841.js";import"./Axis-30be7e73.js";import"./mathUtils-19b6edfc.js";import"./typeUtils-3056a943.js";import"./symbols-b3e075ad.js";import"./enumeration-4a4e87c4.js";import"./fieldUtils-fcb2a714.js";import"./intl-fe039018.js";import"./date-7940da18.js";import"./locale-bde6d0f6.js";import"./datetime-7e00d9ef.js";import"./messages-2d262041.js";import"./assets-6fd92e57.js";import"./TextSymbol-53669eb2.js";import"./Color-e1a6dfab.js";import"./colorUtils-ac6863dc.js";import"./screenUtils-7afeb41c.js";import"./opacityUtils-f0a081b4.js";import"./symbolLayerUtils3D-5b91ffd6.js";import"./aaBoundingBox-7242ce3e.js";import"./persistableUrlUtils-ca6bb38d.js";import"./collectionUtils-b6e30316.js";import"./Portal-cb507469.js";import"./Loadable-8a1ead8b.js";import"./Promise-ec74e14b.js";import"./Clonable-b71fa929.js";import"./jsonUtils-2c7f966c.js";import"./Evented-b5127116.js";import"./SimpleObservable-ae589a25.js";import"./time-0817624a.js";import"./mat4f32-1b45b54f.js";import"./mat4-a6ac6b0f.js";import"./layerUtils-c805b05c.js";import"./PortalItem-9d3416e3.js";import"./portalItemUtils-8aceb0b8.js";import"./projection-41da473c.js";import"./projectBuffer-af7b4ad9.js";import"./zscale-d7e12601.js";import"./TimeExtent-579f0e32.js";import"./timeUtils-24502426.js";import"./TimeInfo-c87ecbc7.js";import"./ElevationInfo-e9f55e40.js";import"./lengthUtils-1e9c410b.js";var C;let ot=0,h=C=class extends it(We){constructor(e){super(e),this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.legendUrl=null,this.legendEnabled=!0,this.layer=null,this.maxScale=0,this.minScale=0,this.name=null,this.parent=null,this.popupEnabled=!1,this.queryable=!1,this.sublayers=null,this.spatialReferences=null,this.title=null,this.addHandles([V(()=>this.sublayers,"after-add",({item:t})=>{t.parent=this,t.layer=this.layer},E),V(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},E),H(()=>this.sublayers,(t,r)=>{if(r)for(const n of r)n.layer=n.parent=null;if(t)for(const n of t)n.parent=this,n.layer=this.layer},E),H(()=>this.layer,t=>{if(this.sublayers)for(const r of this.sublayers)r.layer=t},E)])}get id(){return this._get("id")??ot++}set id(e){this._set("id",e)}readLegendUrl(e,t){return t.legendUrl??t.legendURL??null}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}castSublayers(e){return Le(Q.ofType(C),e)}set visible(e){this._setAndNotifyLayer("visible",e)}clone(){var t,r,n;const e=new C;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=((t=this.fullExtents)==null?void 0:t.map(i=>i.clone()))??null),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=(r=this.sublayers)==null?void 0:r.map(i=>i.clone())),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=(n=this.spatialReferences)==null?void 0:n.map(i=>i)),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e}_setAndNotifyLayer(e,t){const r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))}};a([u()],h.prototype,"description",void 0),a([u({readOnly:!0})],h.prototype,"dimensions",void 0),a([u({type:R,json:{name:"extent"}})],h.prototype,"fullExtent",void 0),a([u()],h.prototype,"fullExtents",void 0),a([u({type:Number,json:{write:{enabled:!1,overridePolicy:()=>({ignoreOrigin:!0,enabled:!0})}}})],h.prototype,"id",null),a([u({type:String,json:{name:"legendUrl",write:{ignoreOrigin:!0}}})],h.prototype,"legendUrl",void 0),a([O("legendUrl",["legendUrl","legendURL"])],h.prototype,"readLegendUrl",null),a([u({type:Boolean,json:{name:"showLegend",origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],h.prototype,"legendEnabled",void 0),a([u()],h.prototype,"layer",void 0),a([u()],h.prototype,"maxScale",void 0),a([u()],h.prototype,"minScale",void 0),a([u({readOnly:!0})],h.prototype,"effectiveScaleRange",null),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],h.prototype,"name",void 0),a([u()],h.prototype,"parent",void 0),a([u({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],h.prototype,"popupEnabled",void 0),a([u({type:Boolean,json:{write:{ignoreOrigin:!0}}})],h.prototype,"queryable",void 0),a([u()],h.prototype,"sublayers",void 0),a([st("sublayers")],h.prototype,"castSublayers",null),a([u({type:[Number],json:{read:{source:"spatialReferences"}}})],h.prototype,"spatialReferences",void 0),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],h.prototype,"title",void 0),a([u({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],h.prototype,"visible",null),h=C=a([ge("esri.layers.support.WMSSublayer")],h);const z=h,oe={84:4326,83:4269,27:4267};function at(e){if(!e)return null;const t={idCounter:-1};typeof e=="string"&&(e=new DOMParser().parseFromString(e,"text/xml"));const r=e.documentElement;if(r.nodeName==="ServiceExceptionReport"){const b=Array.prototype.slice.call(r.childNodes).map(L=>L.textContent).join(`\r
`);throw new Me("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",b)}const n=x("Capability",r),i=x("Service",r),l=n&&x("Request",n);if(!n||!i||!l)return null;const o=x("Layer",n);if(!o)return null;const d=r.nodeName==="WMS_Capabilities"||r.nodeName==="WMT_MS_Capabilities"?r.getAttribute("version"):"1.3.0",s=v("Title",i,"")||v("Name",i,""),y=v("AccessConstraints",i,""),p=/^none$/i.test(y)?"":y,f=v("Abstract",i,""),c=parseInt(v("MaxWidth",i,"5000"),10),w=parseInt(v("MaxHeight",i,"5000"),10),S=le(l,"GetMap"),P=ae(l,"GetMap"),g=U(o,d,t);if(!g)return null;let K,B=0;const Ee=Array.prototype.slice.call(n.childNodes),Ie=g.sublayers??[],W=b=>{b!=null&&Ie.push(b)};Ee.forEach(b=>{b.nodeName==="Layer"&&(B===0?K=b:(B===1&&g.name&&(g.name="",W(U(K,d,t))),W(U(b,d,t))),B++)});let N=g.sublayers,D=g.extent;const Ne=g.fullExtents??[];if(N||(N=[]),N.length===0&&N.push(g),!D){const b=new R(N[0].extent);g.extent=b.toJSON(),D=g.extent}const Fe=g.spatialReferences.length>0?g.spatialReferences:xe(g),Y=ae(l,"GetFeatureInfo"),$e=Y?le(l,"GetFeatureInfo"):null,Z=we(N),Oe=g.minScale||0,Re=g.maxScale||0,ee=g.dimensions??[],Pe=Z.reduce((b,L)=>b.concat(L.dimensions??[]),[]),te=ee.concat(Pe).filter(Se);let re=null;if(te.length){const b=te.map(L=>{const{extent:A}=L;return pt(A)?A.map(j=>j.getTime()):A==null?void 0:A.map(j=>[j.min.getTime(),j.max.getTime()])}).flat(2).filter(T);re={startTimeField:null,endTimeField:null,trackIdField:void 0,timeExtent:[Math.min(...b),Math.max(...b)]}}return{copyright:p,description:f,dimensions:ee,extent:D,fullExtents:Ne,featureInfoFormats:$e,featureInfoUrl:Y,mapUrl:P,maxWidth:c,maxHeight:w,maxScale:Re,minScale:Oe,layers:Z,spatialReferences:Fe,supportedImageFormatTypes:S,timeInfo:re,title:s,version:d}}function lt(e){const t=e.filter(r=>r.popupEnabled&&r.name&&r.queryable);return t.length?t.map(({name:r})=>r).join():null}function xe(e){if(e.spatialReferences.length>0)return e.spatialReferences;if(e.sublayers)for(const t of e.sublayers){const r=xe(t);if(r.length>0)return r}return[]}function we(e){var r;let t=[];for(const n of e)t.push(n),(r=n.sublayers)!=null&&r.length&&(t=t.concat(we(n.sublayers)),delete n.sublayers);return t}function _(e,t,r){return t.getAttribute(e)??r}function ut(e,t,r,n){const i=x(e,r);return i?_(t,i,n):n}function x(e,t){for(let r=0;r<t.childNodes.length;r++){const n=t.childNodes[r];if(ve(n)&&n.nodeName===e)return n}return null}function q(e,t){if(t==null)return[];const r=[];for(let n=0;n<t.childNodes.length;n++){const i=t.childNodes[n];ve(i)&&i.nodeName===e&&r.push(i)}return r}function v(e,t,r){var n;return((n=x(e,t))==null?void 0:n.textContent)??r}function M(e,t,r){if(!e)return null;const n=parseFloat(e.getAttribute("minx")),i=parseFloat(e.getAttribute("miny")),l=parseFloat(e.getAttribute("maxx")),o=parseFloat(e.getAttribute("maxy"));let d,s,y,p;r?(d=isNaN(i)?-Number.MAX_VALUE:i,s=isNaN(n)?-Number.MAX_VALUE:n,y=isNaN(o)?Number.MAX_VALUE:o,p=isNaN(l)?Number.MAX_VALUE:l):(d=isNaN(n)?-Number.MAX_VALUE:n,s=isNaN(i)?-Number.MAX_VALUE:i,y=isNaN(l)?Number.MAX_VALUE:l,p=isNaN(o)?Number.MAX_VALUE:o);const f=new I({wkid:t});return new R({xmin:d,ymin:s,xmax:y,ymax:p,spatialReference:f})}function ae(e,t){const r=x(t,e);if(r){const n=x("DCPType",r);if(n){const i=x("HTTP",n);if(i){const l=x("Get",i);if(l){let o=ut("OnlineResource","xlink:href",l,null);if(o)return o.indexOf("&")===o.length-1&&(o=o.substring(0,o.length-1)),ct(o,["service","request"])}}}}return null}function le(e,t){const r=q("Operation",e);if(!r.length)return q("Format",x(t,e)).map(({textContent:i})=>i).filter(T);const n=[];for(const i of r)if(i.getAttribute("name")===t){const l=q("Format",i);for(const{textContent:o}of l)o!=null&&n.push(o)}return n}function ue(e,t,r){const n=x(t,e);if(!n)return r;const{textContent:i}=n;if(i==null||i==="")return r;const l=Number(i);return isNaN(l)?r:l}function U(e,t,r){if(!e)return null;const n={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:e.getAttribute("queryable")==="1",spatialReferences:[],sublayers:null},i=x("LatLonBoundingBox",e),l=x("EX_GeographicBoundingBox",e);let o=null;i&&(o=M(i,4326)),l&&(o=new R(0,0,0,0,new I({wkid:4326})),o.xmin=parseFloat(v("westBoundLongitude",l,"0")),o.ymin=parseFloat(v("southBoundLatitude",l,"0")),o.xmax=parseFloat(v("eastBoundLongitude",l,"0")),o.ymax=parseFloat(v("northBoundLatitude",l,"0"))),i||l||(o=new R(-180,-90,180,90,new I({wkid:4326}))),n.minScale=ue(e,"MaxScaleDenominator",0),n.maxScale=ue(e,"MinScaleDenominator",0);const d=["1.0.0","1.1.0","1.1.1"].includes(t)?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach(s=>{var y;if(s.nodeName==="Name")n.name=s.textContent||"";else if(s.nodeName==="Title")n.title=s.textContent||"";else if(s.nodeName==="Abstract")n.description=s.textContent||"";else if(s.nodeName==="BoundingBox"){const p=s.getAttribute(d);if(p&&p.indexOf("EPSG:")===0){const c=parseInt(p.substring(5),10);c===0||isNaN(c)||o||(o=t==="1.3.0"?M(s,c,J(c)):M(s,c))}const f=p&&p.indexOf(":");if(f&&f>-1){let c=parseInt(p.substring(f+1,p.length),10);c===0||isNaN(c)||(c=oe[c]??c);const w=t==="1.3.0"?M(s,c,J(c)):M(s,c);w&&n.fullExtents&&n.fullExtents.push(w)}}else if(s.nodeName===d)(((y=s.textContent)==null?void 0:y.split(" "))??[]).forEach(p=>{const f=p.includes(":")?parseInt(p.split(":")[1],10):parseInt(p,10);if(f!==0&&!isNaN(f)){const c=oe[f]??f;n.spatialReferences.includes(c)||n.spatialReferences.push(c)}});else if(s.nodeName!=="Style"||n.legendUrl){if(s.nodeName==="Layer"){const p=U(s,t,r);p&&(p.parentLayerId=n.id,n.sublayers||(n.sublayers=[]),n.sublayers.push(p))}}else{const p=x("LegendURL",s);if(p){const f=x("OnlineResource",p);f&&(n.legendUrl=f.getAttribute("xlink:href"))}}}),n.extent=o==null?void 0:o.toJSON(),n.dimensions=q("Dimension",e).filter(s=>s.getAttribute("name")&&s.getAttribute("units")&&s.textContent).map(s=>{const y=s.getAttribute("name"),p=s.getAttribute("units"),f=s.textContent,c=s.getAttribute("unitSymbol")??void 0,w=s.getAttribute("default")??void 0,S=_("default",s,"0")!=="0",P=_("nearestValue",s,"0")!=="0",g=_("current",s,"0")!=="0";return Se({name:y,units:p})?{name:"time",units:"ISO8601",extent:ce(f),default:ce(w),multipleValues:S,nearestValue:P,current:g}:mt({name:y,units:p})?{name:"elevation",units:p,extent:pe(f),unitSymbol:c,default:pe(w),multipleValues:S,nearestValue:P}:{name:y,units:p,extent:me(f),unitSymbol:c,default:me(w),multipleValues:S,nearestValue:P}}),n}function pt(e){return Array.isArray(e)&&e.length>0&&e[0]instanceof Date}function ve(e){return e.nodeType===Node.ELEMENT_NODE}function mt(e){return/^elevation$/i.test(e.name)&&/^(epsg|crs):\d+$/i.test(e.units)}function Se(e){return/^time$/i.test(e.name)&&/^iso8601$/i.test(e.units)}function ct(e,t){const r=[],n=be(e);for(const i in n.query)n.query.hasOwnProperty(i)&&(t.includes(i.toLowerCase())||r.push(i+"="+n.query[i]));return n.path+(r.length?"?"+r.join("&"):"")}function pe(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const i=n.split("/");return i.length<2?null:{min:parseFloat(i[0]),max:parseFloat(i[1]),resolution:i.length>=3&&i[2]!=="0"?parseFloat(i[2]):void 0}}).filter(T):r.map(n=>parseFloat(n))}function me(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const i=n.split("/");return i.length<2?null:{min:i[0],max:i[1],resolution:i.length>=3&&i[2]!=="0"?i[2]:void 0}}).filter(T):r}function ce(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const i=n.split("/");return i.length<2?null:{min:new Date(i[0]),max:new Date(i[1]),resolution:i.length>=3&&i[2]!=="0"?dt(i[2]):void 0}}).filter(T):r.map(n=>new Date(n))}function dt(e){const t=/(?:p(\d+y|\d+(?:\.|,)\d+y)?(\d+m|\d+(?:\.|,)\d+m)?(\d+d|\d+(?:\.|,)\d+d)?)?(?:t(\d+h|\d+(?:\.|,)\d+h)?(\d+m|\d+(?:\.|,)\d+m)?(\d+s|\d+(?:\.|,)\d+s)?)?/i,r=e.match(t);return r?{years:F(r[1]),months:F(r[2]),days:F(r[3]),hours:F(r[4]),minutes:F(r[5]),seconds:F(r[6])}:null}function F(e){if(!e)return 0;const t=/(?:\d+(?:\.|,)\d+|\d+)/,r=e.match(t);if(!r)return 0;const n=r[0].replace(",",".");return Number(n)}function $(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}const de=new Set([102100,3857,102113,900913]),ft=new Set([3395,54004]);function yt(e,t){let r=e.wkid;return t==null?r:(r!=null&&t.includes(r)||!e.latestWkid||(r=e.latestWkid),r!=null&&de.has(r)?t.find(n=>de.has(n))||t.find(n=>ft.has(n))||102100:r)}const X=new Be({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});function fe(e){return e==="text/html"}function ye(e){return e==="text/plain"}let m=class extends Je(Ze(Ke(Ye(ze(Qe(De(He))))))){constructor(...e){super(...e),this.allSublayers=new Ve({getCollections:()=>[this.sublayers],getChildrenFunction:t=>t.sublayers}),this.customParameters=null,this.customLayerParameters=null,this.copyright=null,this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.featureInfoFormats=null,this.featureInfoUrl=null,this.fetchFeatureInfoFunction=null,this.imageFormat=null,this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.legendEnabled=!0,this.mapUrl=null,this.isReference=null,this.operationalLayerType="WMS",this.spatialReference=null,this.spatialReferences=null,this.sublayers=null,this.type="wms",this.version=null,this.addHandles([V(()=>this.sublayers,"after-add",({item:t})=>{t.parent=t.layer=this},E),V(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},E),H(()=>this.sublayers,(t,r)=>{if(r)for(const n of r)n.layer=n.parent=null;if(t)for(const n of t)n.parent=n.layer=this},E)])}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}destroy(){this.allSublayers.destroy()}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).catch(ke).then(()=>this._fetchService(t))),Promise.resolve(this)}readFullExtentFromItemOrMap(e,t){const r=t.extent;return r?new R({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]}):null}writeFullExtent(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}get featureInfoFormat(){return this.featureInfoFormats==null?null:this.featureInfoFormats.find(fe)??this.featureInfoFormats.find(ye)??null}set featureInfoFormat(e){e==null?(this.revert("featureInfoFormat","service"),this._clearOverride("featureInfoFormat")):(fe(e)||ye(e))&&this._override("featureInfoFormat",e)}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.includes("image/png")?"image/png":r&&r[0]}readSpatialReferenceFromItemOrDocument(e,t){return new I(t.spatialReferences[0])}writeSpatialReferences(e,t){var n;const r=(n=this.spatialReference)==null?void 0:n.wkid;e&&r?(t.spatialReferences=e.filter(i=>i!==r),t.spatialReferences.unshift(r)):t.spatialReferences=e}readSublayersFromItemOrMap(e,t,r){return he(t.layers,r,t.visibleLayers)}readSublayers(e,t,r){return he(t.layers,r)}writeSublayers(e,t,r,n){var o,d;t.layers=[];const i=new Map,l=e.flatten(({sublayers:s})=>s??[]);for(const s of l)if(typeof((o=s.parent)==null?void 0:o.id)=="number"){const y=i.get(s.parent.id);y!=null?y.push(s.id):i.set(s.parent.id,[s.id])}for(const s of l){const y={sublayer:s,...n},p=s.write({parentLayerId:typeof((d=s.parent)==null?void 0:d.id)=="number"?s.parent.id:-1},y);if(i.has(s.id)&&(p.sublayerIds=i.get(s.id)),!s.sublayers&&s.name){const f=s.write({},y);delete f.id,t.layers.push(f)}}t.visibleLayers=l.filter(({visible:s,sublayers:y})=>s&&!y).map(({name:s})=>s).toArray()}set url(e){if(!e)return void this._set("url",e);const{path:t,query:r}=be(e);for(const i in r)/^(request|service)$/i.test(i)&&delete r[i];const n=ne(t,r??{});this._set("url",n)}createExportImageParameters(e,t,r,n){const i=(n==null?void 0:n.pixelRatio)??1,l=ie({extent:e,width:t})*i,o=new se({layer:this,scale:l}),{xmin:d,ymin:s,xmax:y,ymax:p,spatialReference:f}=e,c=yt(f,this.spatialReferences),w=this.version==="1.3.0"&&J(c)?`${s},${d},${p},${y}`:`${d},${s},${y},${p}`,S=o.toJSON();return{bbox:w,[this.version==="1.3.0"?"crs":"srs"]:c==null||isNaN(c)?void 0:"EPSG:"+c,...S}}async fetchImage(e,t,r,n){var p,f;const i=this.mapUrl,l=this.createExportImageParameters(e,t,r,n);if(!l.layers){const c=document.createElement("canvas");return c.width=t,c.height=r,c}const o=(p=n==null?void 0:n.timeExtent)==null?void 0:p.start,d=(f=n==null?void 0:n.timeExtent)==null?void 0:f.end,s=o!=null&&d!=null?o.getTime()===d.getTime()?$(o):`${$(o)}/${$(d)}`:void 0,y={responseType:"image",query:this._mixCustomParameters({width:t,height:r,...l,time:s,...this.refreshParameters}),signal:n==null?void 0:n.signal};return k(i??"",y).then(c=>c.data)}async fetchImageBitmap(e,t,r,n){var f,c;const i=this.mapUrl??"",l=this.createExportImageParameters(e,t,r,n);if(!l.layers){const w=document.createElement("canvas");return w.width=t,w.height=r,w}const o=(f=n==null?void 0:n.timeExtent)==null?void 0:f.start,d=(c=n==null?void 0:n.timeExtent)==null?void 0:c.end,s=o!=null&&d!=null?o.getTime()===d.getTime()?$(o):`${$(o)}/${$(d)}`:void 0,y={responseType:"blob",query:this._mixCustomParameters({width:t,height:r,...l,time:s,...this.refreshParameters}),signal:n==null?void 0:n.signal},{data:p}=await k(i,y);return nt(p,i,n==null?void 0:n.signal)}fetchFeatureInfo(e,t,r,n,i){const l=ie({extent:e,width:t}),o=new se({layer:this,scale:l}),d=lt(o.visibleSublayers);if(this.featureInfoUrl==null||d==null)return Promise.resolve([]);if(this.fetchFeatureInfoFunction==null&&this.featureInfoFormat==null)return Promise.resolve([]);const s=this.version==="1.3.0"?{I:n,J:i}:{x:n,y:i},y={query_layers:d,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r,...s},p={...this.createExportImageParameters(e,t,r),...y},f=this._mixCustomParameters(p);return this.fetchFeatureInfoFunction!=null?this.fetchFeatureInfoFunction(f):this._defaultFetchFeatureInfoFunction(ne(this.featureInfoUrl,f))}findSublayerById(e){return this.allSublayers.find(t=>t.id===e)}findSublayerByName(e){return this.allSublayers.find(t=>t.name===e)}serviceSupportsSpatialReference(e){return et(this.url)||this.spatialReferences!=null&&this.spatialReferences.some(t=>{const r=t===900913?I.WebMercator:new I({wkid:t});return Xe(r,e)})}_defaultFetchFeatureInfoFunction(e){const t=document.createElement("iframe");t.src=_e(e),t.style.border="none",t.style.margin="0",t.style.width="100%",t.setAttribute("sandbox","");const r=new Ce({title:this.title,content:t}),n=new je({sourceLayer:this,popupTemplate:r});return Promise.resolve([n])}async _fetchService(e){var t;if(!this.resourceInfo&&((t=this.parsedUrl)!=null&&t.path)){const{path:r,query:n}=this.parsedUrl,{data:i}=await k(r,{query:{SERVICE:"WMS",REQUEST:"GetCapabilities",...n,...this.customParameters},responseType:"xml",signal:e});this.resourceInfo=at(i)}if(this.parsedUrl){const r=new qe(this.parsedUrl.path),{httpsDomains:n}=Ue.request;r.scheme!=="https"||r.port&&r.port!=="443"||!r.host||n.includes(r.host)||n.push(r.host)}this.read(this.resourceInfo,{origin:"service"})}_mixCustomParameters(e){if(!this.customLayerParameters&&!this.customParameters)return e;const t={...this.customParameters,...this.customLayerParameters};for(const r in t)e[r.toLowerCase()]=t[r];return e}};function ht(e,t){return e.some(r=>{for(const n in r)if(Ge(r,n,null,t))return!0;return!1})}function he(e,t,r){e=e??[];const n=new Map;e.every(l=>l.id==null)&&(e=Te(e)).forEach((l,o)=>l.id=o);for(const l of e){const o=new z;o.read(l,t),r&&!r.includes(o.name)&&(o.visible=!1),n.set(o.id,o)}const i=[];for(const l of e){const o=l.id!=null?n.get(l.id):null;if(o)if(l.parentLayerId!=null&&l.parentLayerId>=0){const d=n.get(l.parentLayerId);if(!d)continue;d.sublayers||(d.sublayers=new Q),d.sublayers.push(o)}else i.push(o)}return i}a([u({readOnly:!0})],m.prototype,"allSublayers",void 0),a([u({json:{type:Object,write:!0}})],m.prototype,"customParameters",void 0),a([u({json:{type:Object,write:!0}})],m.prototype,"customLayerParameters",void 0),a([u({type:String,json:{write:!0}})],m.prototype,"copyright",void 0),a([u()],m.prototype,"description",void 0),a([u({readOnly:!0})],m.prototype,"dimensions",void 0),a([u({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{"web-document":{write:{ignoreOrigin:!0}},"portal-item":{write:{ignoreOrigin:!0}}}}})],m.prototype,"fullExtent",void 0),a([O(["web-document","portal-item"],"fullExtent",["extent"])],m.prototype,"readFullExtentFromItemOrMap",null),a([G(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],m.prototype,"writeFullExtent",null),a([u()],m.prototype,"fullExtents",void 0),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],m.prototype,"featureInfoFormat",null),a([u({type:[String],readOnly:!0})],m.prototype,"featureInfoFormats",void 0),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],m.prototype,"featureInfoUrl",void 0),a([u()],m.prototype,"fetchFeatureInfoFunction",void 0),a([u({type:String,json:{origins:{"web-document":{default:"image/png",type:X.jsonValues,read:{reader:X.read,source:"format"},write:{writer:X.write,target:"format"}}}}})],m.prototype,"imageFormat",void 0),a([O("imageFormat",["supportedImageFormatTypes"])],m.prototype,"readImageFormat",null),a([u({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],m.prototype,"imageMaxHeight",void 0),a([u({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],m.prototype,"imageMaxWidth",void 0),a([u()],m.prototype,"imageTransparency",void 0),a([u(tt)],m.prototype,"legendEnabled",void 0),a([u({type:["show","hide","hide-children"]})],m.prototype,"listMode",void 0),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],m.prototype,"mapUrl",void 0),a([u({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],m.prototype,"isReference",void 0),a([u({type:["WMS"]})],m.prototype,"operationalLayerType",void 0),a([u()],m.prototype,"resourceInfo",void 0),a([u({type:I,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],m.prototype,"spatialReference",void 0),a([O(["web-document","portal-item"],"spatialReference",["spatialReferences"])],m.prototype,"readSpatialReferenceFromItemOrDocument",null),a([u({type:[Ae],json:{read:!1,origins:{service:{read:!0},"web-document":{read:!1,write:{ignoreOrigin:!0}},"portal-item":{read:!1,write:{ignoreOrigin:!0}}}}})],m.prototype,"spatialReferences",void 0),a([G(["web-document","portal-item"],"spatialReferences")],m.prototype,"writeSpatialReferences",null),a([u({type:Q.ofType(z),json:{write:{target:"layers",overridePolicy(e,t,r){if(ht(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],m.prototype,"sublayers",void 0),a([O(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],m.prototype,"readSublayersFromItemOrMap",null),a([O("service","sublayers",["layers"])],m.prototype,"readSublayers",null),a([G("sublayers",{layers:{type:[z]},visibleLayers:{type:[String]}})],m.prototype,"writeSublayers",null),a([u({json:{read:!1},readOnly:!0,value:"wms"})],m.prototype,"type",void 0),a([u(rt)],m.prototype,"url",null),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],m.prototype,"version",void 0),m=a([ge("esri.layers.WMSLayer")],m);const _r=m;export{_r as default};
