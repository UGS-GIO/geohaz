import"./geometry-31b45acd.js";import{a as q,E as Y,U as $,I as A}from"./request-a10d6950.js";import{a as j,s as ee}from"./Error-21d1d076.js";import{f as x,v as ne}from"./SpatialReference-428523ee.js";import{g as E}from"./Extent-2b4578b8.js";import{l as te,r as ie,o as re}from"./featureConversionUtils-e62978d0.js";import{e as ae}from"./OptimizedFeatureSet-1d1ac4b9.js";import{E as se,I as oe,N as le}from"./geojson-b47ee09c.js";import{o as ce}from"./clientSideDefaults-1b55d85f.js";import{p as ue}from"./sourceUtils-141e6bda.js";import{Z as L}from"./FieldsIndex-9238b8b6.js";import{i as de}from"./fieldType-4834e8bc.js";import{i as fe}from"./date-7940da18.js";const G=()=>ee.getLogger("esri.layers.ogc.ogcFeatureUtils"),J="startindex",me=new Set([J,"offset"]),U="http://www.opengis.net/def/crs/",Ge=`${U}OGC/1.3/CRS84`;var l;async function We(e,n,t={},i=5){const{links:r}=e,o=p(r,"items",l.geojson)||p(r,"http://www.opengis.net/def/rel/ogc/1.0/items",l.geojson);if(o==null)throw new j("ogc-feature-layer:missing-items-page","Missing items url");const{apiKey:d,customParameters:c,signal:g}=t,f=q(o.href,e.landingPage.url),y={limit:i,...c,token:d},T=Y(f,y),W={accept:l.geojson},{data:S}=await $(T,{signal:g,headers:W}),v=Ie(T,i,S.links)??J;se(S);const m=oe(S,{geometryType:n.geometryType}),I=n.fields||m.fields||[],Z=n.hasZ!=null?n.hasZ:m.hasZ,w=m.geometryType,b=n.objectIdField||m.objectIdFieldName||"OBJECTID";let s=n.timeInfo;const N=I.find(({name:a})=>a===b);if(N)N.editable=!1,N.nullable=!1;else{if(!m.objectIdFieldType)throw new j("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");I.unshift({name:b,alias:b,type:m.objectIdFieldType==="number"?"esriFieldTypeOID":"esriFieldTypeString",editable:!1,nullable:!1})}if(b!==m.objectIdFieldName){const a=I.find(({name:u})=>u===m.objectIdFieldName);a&&(a.type="esriFieldTypeInteger")}I===m.fields&&m.unknownFields.length>0&&G().warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:m.unknownFields}});for(const a of I){if(a.name==null&&(a.name=a.alias),a.alias==null&&(a.alias=a.name),a.type!=="esriFieldTypeOID"&&a.type!=="esriFieldTypeGlobalID"&&(a.editable=a.editable==null||!!a.editable,a.nullable=a.nullable==null||!!a.nullable),!a.name)throw new j("ogc-feature-layer:invalid-field-name","field name is missing",{field:a});if(!de.jsonValues.includes(a.type))throw new j("ogc-feature-layer:invalid-field-type",`invalid type for field "${a.name}"`,{field:a})}if(s){const a=new L(I);if(s.startTimeField){const u=a.get(s.startTimeField);u?(s.startTimeField=u.name,u.type="esriFieldTypeDate"):s.startTimeField=null}if(s.endTimeField){const u=a.get(s.endTimeField);u?(s.endTimeField=u.name,u.type="esriFieldTypeDate"):s.endTimeField=null}if(s.trackIdField){const u=a.get(s.trackIdField);u?s.trackIdField=u.name:(s.trackIdField=null,G().warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:s}}))}s.timeReference||(s.timeReference={timeZoneIANA:fe}),s.startTimeField||s.endTimeField||(G().warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:s}}),s=null)}return{drawingInfo:w?ce(w):null,extent:he(e),geometryType:w,fields:I,hasZ:!!Z,objectIdField:b,paginationParameter:v,timeInfo:s}}async function Ze(e,n={}){const{links:t,url:i}=e,r=p(t,"data",l.json)||p(t,"http://www.opengis.net/def/rel/ogc/1.0/data",l.json);if(r==null)throw new j("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:o,customParameters:d,signal:c}=n,g=q(r.href,i),{data:f}=await $(g,{signal:c,headers:{accept:l.json},query:{...d,token:o}});for(const y of f.collections)y.landingPage=e;return f}async function De(e,n={}){const{links:t,url:i}=e,r=p(t,"conformance",l.json)||p(t,"http://www.opengis.net/def/rel/ogc/1.0/conformance",l.json);if(r==null)throw new j("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:o,customParameters:d,signal:c}=n,g=q(r.href,i),{data:f}=await $(g,{signal:c,headers:{accept:l.json},query:{...d,token:o}});return f}async function Re(e,n={}){const{apiKey:t,customParameters:i,signal:r}=n,{data:o}=await $(e,{signal:r,headers:{accept:l.json},query:{...i,token:t}});return o.url=e,o}async function Me(e,n={}){const{links:t,url:i}=e,r=p(t,"service-desc",l.openapi);if(r==null)return G().warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:o,customParameters:d,signal:c}=n,g=q(r.href,i),{data:f}=await $(g,{signal:c,headers:{accept:l.openapi},query:{...d,token:o}});return f}function Ke(e){const n=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(e),t=n==null?void 0:n.groups;if(!t)return null;const{authority:i,code:r}=t;switch(i.toLowerCase()){case"ogc":switch(r.toLowerCase()){case"crs27":return x.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return x.WGS84.wkid;default:return null}case"esri":case"epsg":{const o=Number.parseInt(r,10);return Number.isNaN(o)?null:o}default:return null}}async function Ae(e,n,t){const i=await pe(e,n,t);return te(i)}async function pe(e,n,t){const{collection:{links:i,landingPage:{url:r}},layerDefinition:o,maxRecordCount:d,queryParameters:{apiKey:c,customParameters:g},spatialReference:f,supportedCrs:y}=e,T=p(i,"items",l.geojson)||p(i,"http://www.opengis.net/def/rel/ogc/1.0/items",l.geojson);if(T==null)throw new j("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:W,num:S,start:v,timeExtent:m,where:I}=n;if(n.objectIds)throw new j("ogc-feature-layer:query-by-objectids-not-supported","Queries with object ids are not supported");const Z=x.fromJSON(f),w=n.outSpatialReference??Z,b=w.isWGS84?null:_(w,y),s=be(W,y),N=ye(m),a=we(I),u=S??(v==null?d:10),z=v===0?void 0:v,{fields:M,geometryType:C,hasZ:D,objectIdField:P,paginationParameter:B}=o,Q=q(T.href,r),{data:K}=await $(Q,{...t,query:{...g,...s,crs:b,datetime:N,query:a,limit:u,[B]:z,token:c},headers:{accept:l.geojson}}),O=le(K,{geometryType:C,hasZ:D,objectIdField:P}),V=O.length===u&&!!p(K.links??[],"next",l.geojson),H=new L(M);for(const h of O){const k={};ue(H,k,h.attributes),k[P]=h.attributes[P],h.attributes=k}if(!b&&w.isWebMercator){for(const h of O)if(h.geometry!=null&&C!=null){const k=ie(h.geometry,C,D,!1);k.spatialReference=x.WGS84,h.geometry=re(E(k,w))}}for(const h of O)h.objectId=h.attributes[P];const X=b||!b&&w.isWebMercator?w.toJSON():ne,F=new ae;return F.exceededTransferLimit=V,F.features=O,F.fields=M,F.geometryType=C,F.hasZ=D,F.objectIdFieldName=P,F.spatialReference=X,F}function ge(e){return e!=null&&e.type==="extent"}function _(e,n){const{isWebMercator:t,wkid:i}=e;if(!i)return null;const r=t?n[3857]??n[102100]??n[102113]??n[900913]:n[e.wkid];return r?`${U}${r}`:null}function R(e){if(e==null)return"";const{xmin:n,ymin:t,xmax:i,ymax:r}=e;return`${n},${t},${i},${r}`}function ye(e){if(e==null)return null;const{start:n,end:t}=e;return`${n!=null?n.toISOString():".."}/${t!=null?t.toISOString():".."}`}function we(e){return e!=null&&e&&e!=="1=1"?e:null}function be(e,n){if(!ge(e))return null;const{spatialReference:t}=e;if(!t||t.isWGS84)return{bbox:R(e)};const i=_(t,n);return i!=null?{bbox:R(e),"bbox-crs":i}:t.isWebMercator?{bbox:R(E(e,x.WGS84))}:null}function he(e){var c;const n=(c=e.extent)==null?void 0:c.spatial;if(!n)return null;const t=n.bbox[0],i=t.length===4,[r,o]=t,d=i?void 0:t[2];return{xmin:r,ymin:o,xmax:i?t[2]:t[3],ymax:i?t[3]:t[4],zmin:d,zmax:i?void 0:t[5],spatialReference:x.WGS84.toJSON()}}function p(e,n,t){return e.find(({rel:i,type:r})=>i===n&&r===t)??e.find(({rel:i,type:r})=>i===n&&!r)}function Ie(e,n,t){var f;if(!t)return;const i=p(t,"next",l.geojson),r=(f=A(i==null?void 0:i.href))==null?void 0:f.query;if(!r)return;const o=A(e).query,d=Object.keys(o??{}),c=Object.entries(r).filter(([y])=>!d.includes(y)).find(([y,T])=>me.has(y.toLowerCase())&&Number.parseInt(T,10)===n);return c==null?void 0:c[0]}(function(e){e.json="application/json",e.geojson="application/geo+json",e.openapi="application/vnd.oai.openapi+json;version=3.0"})(l||(l={}));export{pe as $,Ke as C,Ze as N,De as O,Re as P,Ae as R,U as k,Me as q,We as v,Ge as x};