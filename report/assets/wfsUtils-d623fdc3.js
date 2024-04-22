import"./geometry-31b45acd.js";import{U as b,m as D,F as R,$ as k}from"./request-a10d6950.js";import{a as l}from"./Error-21d1d076.js";import{M as V,a as S}from"./JSONSupport-acf2865c.js";import{I as j,U as L}from"./projection-41da473c.js";import{f as E,G as O,v as W}from"./SpatialReference-428523ee.js";import{o as Y}from"./typeUtils-3056a943.js";import{u as X}from"./geojson-b47ee09c.js";import{o as x,n as g}from"./xmlUtils-444cb4c0.js";import{v as q}from"./arcgisLayerUrl-0c479f71.js";import{y}from"./Field-be948aef.js";import{K as F}from"./fieldUtils-fcb2a714.js";import{M as z}from"./Extent-2b4578b8.js";const C="xlink:href",d="2.0.0",$="__esri_wfs_id__",_="wfs-layer:getWFSLayerTypeInfo-error",K="wfs-layer:empty-service",G="wfs-layer:feature-type-not-found",Q="wfs-layer:geojson-not-supported",H="wfs-layer:kvp-encoding-not-supported",J="wfs-layer:malformed-json",v="wfs-layer:unknown-geometry-type",B="wfs-layer:unknown-field-type",Z="wfs-layer:unsupported-spatial-reference",ee="wfs-layer:unsupported-wfs-version";async function ve(a,t){const e=te((await b(a,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:d,...t==null?void 0:t.customParameters},signal:t==null?void 0:t.signal})).data);return ne(a,e),e}function te(a){const t=U(a);we(t),I(t);const e=t.firstElementChild,r=V(oe(e));return{operations:ae(e),get featureTypes(){return Array.from(r())},readFeatureTypes:r}}const re=["json","application/json","geojson","application/json; subtype=geojson","application/geo+json"];function P(a){for(const t of re){const e=a.findIndex(r=>r.toLowerCase()===t);if(e>=0)return a[e]}return null}function ae(a){let t=!1;const e={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}},r=[],n=[];if(x(a,{OperationsMetadata:{Parameter:o=>{if(o.getAttribute("name")==="outputFormat")return{AllowedValues:{Value:({textContent:s})=>{s&&r.push(s)}}}},Operation:o=>{switch(o.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:s=>{e.GetCapabilities.url=s.getAttribute(C)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:s=>{e.DescribeFeatureType.url=s.getAttribute(C)}}}};case"GetFeature":return{DCP:{HTTP:{Get:s=>{e.GetFeature.url=s.getAttribute(C)}}},Parameter:s=>{if(s.getAttribute("name")==="outputFormat")return{AllowedValues:{Value:({textContent:i})=>{i&&n.push(i)}}}}}}},Constraint:o=>{switch(o.getAttribute("name")){case"KVPEncoding":return{DefaultValue:s=>{t=s.textContent.toLowerCase()==="true"}};case"ImplementsResultPaging":return{DefaultValue:s=>{e.GetFeature.supportsPagination=s.textContent.toLowerCase()==="true"}}}}}}),e.GetFeature.outputFormat=P(n)??P(r),!t)throw new l(H,"WFS service doesn't support key/value pair (KVP) encoding");if(e.GetFeature.outputFormat==null)throw new l(Q,"WFS service doesn't support GeoJSON output format");return e}function ne(a,t){D(a)&&(R(a,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=k(t.operations.DescribeFeatureType.url)),R(a,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=k(t.operations.GetFeature.url)))}function A(a){var e,r,n;const t=parseInt(((n=(r=(e=a.textContent)==null?void 0:e.match(/(?<wkid>\d+$)/i))==null?void 0:r.groups)==null?void 0:n.wkid)??"",10);if(!Number.isNaN(t))return t}function oe(a){return g(a,{FeatureTypeList:{FeatureType:t=>{const e={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",defaultSpatialReference:4326,supportedSpatialReferences:[]},r=new Set;return x(t,{Name:n=>{const{name:o,prefix:s}=w(n.textContent);e.typeName=`${s}:${o}`,e.name=o,e.namespacePrefix=s,e.namespaceUri=n.lookupNamespaceURI(s)},Abstract:n=>{e.description=n.textContent},Title:n=>{e.title=n.textContent},WGS84BoundingBox:n=>{e.extent=se(n)},DefaultCRS:n=>{const o=A(n);o&&(e.defaultSpatialReference=o,r.add(o))},OtherCRS:n=>{const o=A(n);o&&r.add(o)}}),e.title||(e.title=e.name),r.add(4326),e.supportedSpatialReferences.push(...r),e}}})}function se(a){let t,e,r,n;for(const o of a.children)switch(o.localName){case"LowerCorner":[t,e]=o.textContent.split(" ").map(s=>Number.parseFloat(s));break;case"UpperCorner":[r,n]=o.textContent.split(" ").map(s=>Number.parseFloat(s))}return{xmin:t,ymin:e,xmax:r,ymax:n,spatialReference:W}}function ie(a,t,e){return S(a,r=>e?r.name===t&&r.namespaceUri===e:r.typeName===t||r.name===t)}async function Ne(a,t,e,r={}){const{featureType:n,extent:o}=await ue(a,t,e,r),{spatialReference:s}=be(a.operations.GetFeature.url,n,r.spatialReference),{fields:i,geometryType:p,swapXY:c,objectIdField:u,geometryField:m}=await pe(a,n,s,r);return{url:a.operations.GetCapabilities.url,name:n.name,namespaceUri:n.namespaceUri,fields:i,geometryField:m,geometryType:p,objectIdField:u,spatialReference:r.spatialReference??new E({wkid:n.defaultSpatialReference}),extent:o,swapXY:c,wfsCapabilities:a,customParameters:r.customParameters}}async function ue(a,t,e,r={}){const n=a.readFeatureTypes(),o=t?ie(n,t,e):n.next().value,{spatialReference:s=new E({wkid:o==null?void 0:o.defaultSpatialReference})}=r;if(o==null)throw t?new l(G,`The type '${t}' could not be found in the service`):new l(K,"The service is empty");let i=new z({...o.extent,spatialReference:E.WGS84});if(!O(i.spatialReference,s))try{await j(i.spatialReference,s,void 0,r),i=L(i,s)}catch{throw new l(Z,"Projection not supported")}return{extent:i,spatialReference:s,featureType:o}}async function pe(a,t,e,r={}){var f,T,h;const{typeName:n}=t,[o,s]=await Promise.allSettled([me(a.operations.DescribeFeatureType.url,n,r),ce(a,n,e,r)]),i=M=>new l(_,`An error occurred while getting info about the feature type '${n}'`,{error:M});if(o.status==="rejected")throw i(o.reason);if(s.status==="rejected")throw i(s.reason);const{fields:p,errors:c}=o.value??{},u=((f=o.value)==null?void 0:f.geometryType)||((T=s.value)==null?void 0:T.geometryType),m=((h=s.value)==null?void 0:h.swapXY)??!1;if(u==null)throw new l(v,`The geometry type could not be determined for type '${n}`,{typeName:n,geometryType:u,fields:p,errors:c});return{...le(p??[]),geometryType:u,swapXY:m}}function le(a){const t=a.find(r=>r.type==="geometry");let e=a.find(r=>r.type==="oid");return a=a.filter(r=>r.type!=="geometry"),e||(e=new y({name:$,type:"oid",alias:$}),a.unshift(e)),{geometryField:(t==null?void 0:t.name)??null,objectIdField:e.name,fields:a}}async function ce(a,t,e,r={}){var c;let n,o=!1;const[s,i]=await Promise.all([ge(a.operations.GetFeature.url,t,e,a.operations.GetFeature.outputFormat,{...r,count:1}),b(a.operations.GetFeature.url,{responseType:"text",query:N(t,e,void 0,{...r,count:1}),signal:r==null?void 0:r.signal})]),p=s.type==="FeatureCollection"&&((c=s.features[0])==null?void 0:c.geometry);if(p){let u;switch(n=Y.fromJSON(X(p.type)),p.type){case"Point":u=p.coordinates;break;case"LineString":case"MultiPoint":u=p.coordinates[0];break;case"MultiLineString":case"Polygon":u=p.coordinates[0][0];break;case"MultiPolygon":u=p.coordinates[0][0][0]}const m=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(i.data);if(m){const f=u[0].toFixed(3),T=u[1].toFixed(3),h=parseFloat(m[1]).toFixed(3);f===parseFloat(m[2]).toFixed(3)&&T===h&&(o=!0)}}return{geometryType:n,swapXY:o}}async function me(a,t,e){return fe(t,(await b(a,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:d,TYPENAME:t,TYPENAMES:t,...e==null?void 0:e.customParameters},signal:e==null?void 0:e.signal})).data)}function fe(a,t){const{name:e}=w(a),r=U(t);I(r);const n=S(g(r.firstElementChild,{element:o=>o}),o=>o.getAttribute("name")===e);if(n!=null){const o=n.getAttribute("type"),s=o?S(g(r.firstElementChild,{complexType:i=>i}),i=>i.getAttribute("name")===w(o).name):S(g(n,{complexType:i=>i}),()=>!0);if(s)return de(s)}throw new l(G,`Type '${a}' not found in document`,{document:new XMLSerializer().serializeToString(r)})}const ye=new Set(["objectid","fid"]);function de(a){const t=[],e=[];let r;const n=g(a,{complexContent:{extension:{sequence:{element:o=>o}}}});for(const o of n){const s=o.getAttribute("name");if(!s)continue;let i,p;if(o.hasAttribute("type")?i=w(o.getAttribute("type")).name:x(o,{simpleType:{restriction:m=>(i=w(m.getAttribute("base")).name,{maxLength:f=>{p=+f.getAttribute("value")}})}}),!i)continue;const c=o.getAttribute("nillable")==="true";let u=!1;switch(i.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":e.push(new y({name:s,alias:s,type:"integer",nullable:c,length:F("integer")}));break;case"float":case"double":case"decimal":e.push(new y({name:s,alias:s,type:"double",nullable:c,length:F("double")}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":e.push(new y({name:s,alias:s,type:"string",nullable:c,length:p??F("string")}));break;case"datetime":case"date":e.push(new y({name:s,alias:s,type:"date",nullable:c,length:p??F("date")}));break;case"pointpropertytype":r="point",u=!0;break;case"multipointpropertytype":r="multipoint",u=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":r="polyline",u=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":r="polygon",u=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":u=!0,t.push(new l(v,`geometry type '${i}' is not supported`,{type:new XMLSerializer().serializeToString(a)}));break;default:t.push(new l(B,`Unknown field type '${i}'`,{type:new XMLSerializer().serializeToString(a)}))}u&&e.push(new y({name:s,alias:s,type:"geometry",nullable:c}))}for(const o of e)if(o.type==="integer"&&!o.nullable&&ye.has(o.name.toLowerCase())){o.type="oid";break}return{geometryType:r,fields:e,errors:t}}async function ge(a,t,e,r,n){let{data:o}=await b(a,{responseType:"text",query:N(t,e,r,n),signal:n==null?void 0:n.signal});o=o.replaceAll(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{return JSON.parse(o)}catch(s){throw new l(J,"Error while parsing the response",{response:o,error:s})}}function N(a,t,e,r){const n=typeof t=="number"?t:t.wkid;return{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:d,TYPENAMES:a,OUTPUTFORMAT:e,SRSNAME:"EPSG:"+n,STARTINDEX:r==null?void 0:r.startIndex,COUNT:r==null?void 0:r.count,...r==null?void 0:r.customParameters}}async function Ue(a,t,e){const r=await b(a,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:d,TYPENAMES:t,RESULTTYPE:"hits",...e==null?void 0:e.customParameters},signal:e==null?void 0:e.signal}),n=/numberMatched=["'](?<numberMatched>\d+)["']/gi.exec(r.data);if(n!=null&&n.groups)return+n.groups.numberMatched}function U(a){return new DOMParser().parseFromString(a.trim(),"text/xml")}function w(a){const[t,e]=a.split(":");return{prefix:e?t:"",name:e??t}}function we(a){var e;const t=(e=a.firstElementChild)==null?void 0:e.getAttribute("version");if(t&&t!==d)throw new l(ee,`Unsupported WFS version ${t}. Supported version: ${d}`)}function I(a){let t="",e="";if(x(a.firstElementChild,{Exception:r=>(t=r.getAttribute("exceptionCode"),{ExceptionText:n=>{e=n.textContent}})}),t)throw new l(`wfs-layer:${t}`,e)}function be(a,t,e){const r={wkid:t.defaultSpatialReference},n=(e==null?void 0:e.wkid)!=null?{wkid:e.wkid}:r;return{spatialReference:n,getFeatureSpatialReference:q(a)||n.wkid&&t.supportedSpatialReferences.includes(n.wkid)?{wkid:n.wkid}:{wkid:t.defaultSpatialReference}}}export{ge as K,$ as S,ie as W,Ne as Y,Ue as e,be as o,ve as v,le as z};