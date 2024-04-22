import{_ as q,b as m}from"./request-a10d6950.js";import{k as O}from"./symbols-b3e075ad.js";import{b as P}from"./Evented-b5127116.js";import{a as s}from"./Error-21d1d076.js";import{s as j}from"./jsonMap-5ba4a9c2.js";import{e as x}from"./fieldUtils-fcb2a714.js";import{K as E}from"./subclass-f7409b1b.js";import{b as y}from"./Query-aaf746b1.js";import{x as R}from"./layerUtils-c805b05c.js";import{m as C}from"./SimpleRenderer-2c5d637a.js";import{A as _}from"./UniqueValueRenderer-983c9a3e.js";import{c as L}from"./AttachmentQuery-36a8e4f4.js";import F from"./RelationshipQuery-722111d3.js";async function M(e,t,n){t=t.clone(),e.capabilities.query.supportsMaxRecordCountFactor&&(t.maxRecordCountFactor=A(e));const r=T(e),a=e.capabilities.query.supportsPagination;t.start=0,t.num=r;let o=null;for(;;){const i=await e.source.queryFeaturesJSON(t,n);if(o==null?o=i:o.features=o.features.concat(i.features),o.exceededTransferLimit=i.exceededTransferLimit,!a||!i.exceededTransferLimit)break;t.start+=r}return o}function T(e){return A(e)*S(e)}function S(e){return e.capabilities.query.maxRecordCount||2e3}function A(e){return e.capabilities.query.supportsMaxRecordCountFactor?y.MAX_MAX_RECORD_COUNT_FACTOR:1}const B=new j({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"});async function W(e,t,n,r){const a=await f(e);if(await w(e,t,r),!a.addAttachment)throw new s(r,"Layer source does not support addAttachment capability");return a.addAttachment(t,n)}function w(e,t,n){var o,i;const{attributes:r}=t,{objectIdField:a}=e;return(i=(o=e.capabilities)==null?void 0:o.data)!=null&&i.supportsAttachment?t?r?a&&r[a]?Promise.resolve():Promise.reject(new s(n,`feature is missing the identifying attribute ${a}`)):Promise.reject(new s(n,"'attributes' are required on a feature to query attachments")):Promise.reject(new s(n,"A feature is required to add/delete/update attachments")):Promise.reject(new s(n,"this layer doesn't support attachments"))}async function Y(e,t,n,r,a){const o=await f(e);if(await w(e,t,a),!o.updateAttachment)throw new s(a,"Layer source does not support updateAttachment capability");return o.updateAttachment(t,n,r)}async function ee(e,t,n){const{applyEdits:r}=await q(()=>import("./editingSupport-20f0f2ff.js"),["./editingSupport-20f0f2ff.js","./Graphic-f1881791.js","./subclass-f7409b1b.js","./typedArrayUtil-2af43698.js","./Error-21d1d076.js","./promiseUtils-1d963c7c.js","./geometry-31b45acd.js","./Extent-2b4578b8.js","./JSONSupport-acf2865c.js","./time-0817624a.js","./SpatialReference-428523ee.js","./jsonMap-5ba4a9c2.js","./request-a10d6950.js","./assets-6fd92e57.js","./cast-e7a2f9aa.js","./Polyline-013cde1f.js","./aaBoundingRect-aef00841.js","./Axis-30be7e73.js","./mathUtils-19b6edfc.js","./typeUtils-3056a943.js","./PopupTemplate-18f22683.js","./Clonable-b71fa929.js","./Collection-aa6ef54b.js","./Evented-b5127116.js","./SimpleObservable-ae589a25.js","./fieldUtils-fcb2a714.js","./intl-fe039018.js","./date-7940da18.js","./locale-bde6d0f6.js","./datetime-7e00d9ef.js","./messages-2d262041.js","./enumeration-4a4e87c4.js","./Color-e1a6dfab.js","./colorUtils-ac6863dc.js","./Identifiable-1430bdc2.js","./symbols-b3e075ad.js","./TextSymbol-53669eb2.js","./screenUtils-7afeb41c.js","./opacityUtils-f0a081b4.js","./symbolLayerUtils3D-5b91ffd6.js","./aaBoundingBox-7242ce3e.js","./persistableUrlUtils-ca6bb38d.js","./collectionUtils-b6e30316.js","./Portal-cb507469.js","./Loadable-8a1ead8b.js","./Promise-ec74e14b.js","./reactiveUtils-e7d9f86e.js","./jsonUtils-2c7f966c.js","./uuid-709b6c67.js","./normalizeUtils-059b11cb.js","./normalizeUtilsCommon-c4e9ddb1.js","./utils-3234cfff.js","./utils-ed91a700.js","./EditBusLayer-7f92d599.js","./infoFor3D-24efd44a.js","./layerUtils-c805b05c.js"],import.meta.url),a=await e.load(),{source:o,globalIdField:i}=a;let l=n;return a.type==="feature"&&a.infoFor3D&&t.deleteFeatures!=null&&i!=null&&(l={...l,globalIdToObjectId:await D(e,t.deleteFeatures,i)}),r(a,o,t,n)}async function te(e,t,n){const{uploadAssets:r}=await q(()=>import("./editingSupport-20f0f2ff.js"),["./editingSupport-20f0f2ff.js","./Graphic-f1881791.js","./subclass-f7409b1b.js","./typedArrayUtil-2af43698.js","./Error-21d1d076.js","./promiseUtils-1d963c7c.js","./geometry-31b45acd.js","./Extent-2b4578b8.js","./JSONSupport-acf2865c.js","./time-0817624a.js","./SpatialReference-428523ee.js","./jsonMap-5ba4a9c2.js","./request-a10d6950.js","./assets-6fd92e57.js","./cast-e7a2f9aa.js","./Polyline-013cde1f.js","./aaBoundingRect-aef00841.js","./Axis-30be7e73.js","./mathUtils-19b6edfc.js","./typeUtils-3056a943.js","./PopupTemplate-18f22683.js","./Clonable-b71fa929.js","./Collection-aa6ef54b.js","./Evented-b5127116.js","./SimpleObservable-ae589a25.js","./fieldUtils-fcb2a714.js","./intl-fe039018.js","./date-7940da18.js","./locale-bde6d0f6.js","./datetime-7e00d9ef.js","./messages-2d262041.js","./enumeration-4a4e87c4.js","./Color-e1a6dfab.js","./colorUtils-ac6863dc.js","./Identifiable-1430bdc2.js","./symbols-b3e075ad.js","./TextSymbol-53669eb2.js","./screenUtils-7afeb41c.js","./opacityUtils-f0a081b4.js","./symbolLayerUtils3D-5b91ffd6.js","./aaBoundingBox-7242ce3e.js","./persistableUrlUtils-ca6bb38d.js","./collectionUtils-b6e30316.js","./Portal-cb507469.js","./Loadable-8a1ead8b.js","./Promise-ec74e14b.js","./reactiveUtils-e7d9f86e.js","./jsonUtils-2c7f966c.js","./uuid-709b6c67.js","./normalizeUtils-059b11cb.js","./normalizeUtilsCommon-c4e9ddb1.js","./utils-3234cfff.js","./utils-ed91a700.js","./EditBusLayer-7f92d599.js","./infoFor3D-24efd44a.js","./layerUtils-c805b05c.js"],import.meta.url),a=await e.load();return r(a,a.source,t,n)}async function re(e,t,n,r){const a=await f(e);if(await w(e,t,r),!a.deleteAttachments)throw new s(r,"Layer source does not support deleteAttachments capability");return a.deleteAttachments(t,n)}async function ne(e,t,n){const r=(await e.load({signal:t==null?void 0:t.signal})).source;if(!r.fetchRecomputedExtents)throw new s(n,"Layer source does not support fetchUpdates capability");return r.fetchRecomputedExtents(t)}async function ae(e,t,n,r){var g,I;t=L.from(t),await e.load();const a=e.source,o=e.capabilities;if(!((g=o==null?void 0:o.data)!=null&&g.supportsAttachment))throw new s(r,"this layer doesn't support attachments");const{attachmentTypes:i,objectIds:l,globalIds:d,num:u,size:c,start:p,where:b}=t;if(!((I=o==null?void 0:o.operations)!=null&&I.supportsQueryAttachments)&&((i==null?void 0:i.length)>0||(d==null?void 0:d.length)>0||(c==null?void 0:c.length)>0||u||p||b))throw new s(r,"when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",t);if(!(l!=null&&l.length||d!=null&&d.length||b))throw new s(r,"'objectIds', 'globalIds', or 'where' are required to perform attachment query",t);if(!a.queryAttachments)throw new s(r,"Layer source does not support queryAttachments capability",t);return a.queryAttachments(t)}async function oe(e,t,n,r){const a=await f(e);if(!a.queryObjectIds)throw new s(r,"Layer source does not support queryObjectIds capability");return a.queryObjectIds(y.from(t)??e.createQuery(),n)}async function ie(e,t,n,r){const a=await f(e);if(!a.queryFeatureCount)throw new s(r,"Layer source does not support queryFeatureCount capability");return a.queryFeatureCount(y.from(t)??e.createQuery(),n)}async function se(e,t,n,r){const a=await f(e);if(!a.queryExtent)throw new s(r,"Layer source does not support queryExtent capability");return a.queryExtent(y.from(t)??e.createQuery(),n)}async function ue(e,t,n,r){const a=await f(e);if(!a.queryRelatedFeatures)throw new s(r,"Layer source does not support queryRelatedFeatures capability");return a.queryRelatedFeatures(F.from(t),n)}async function ce(e,t,n,r){const a=await f(e);if(!a.queryRelatedFeaturesCount)throw new s(r,"Layer source does not support queryRelatedFeaturesCount capability");return a.queryRelatedFeaturesCount(F.from(t),n)}async function le(e){const t=e.source;if(t!=null&&t.refresh)try{const{dataChanged:n,updates:r}=await t.refresh();if(r!=null&&(e.sourceJSON={...e.sourceJSON,...r},e.read(r,{origin:"service",url:e.parsedUrl})),n)return!0}catch{}if(e.definitionExpression)try{return(await x(e.definitionExpression,e.fieldsIndex)).hasDateFunctions}catch{}return!1}function pe(e){var i,l;const t=new y,n=(i=e.capabilities)==null?void 0:i.data,r=(l=e.capabilities)==null?void 0:l.query;t.historicMoment=e.historicMoment,t.gdbVersion=e.gdbVersion,t.returnGeometry=!0,r&&(t.compactGeometryEnabled=r.supportsCompactGeometry,t.defaultSpatialReferenceEnabled=r.supportsDefaultSpatialReference),n&&(n.supportsZ&&e.returnZ!=null&&(t.returnZ=e.returnZ),n.supportsM&&e.returnM!=null&&(t.returnM=e.returnM)),t.outFields=["*"];const{timeOffset:a,timeExtent:o}=e;return t.timeExtent=a!=null&&o!=null?o.offset(-a.value,a.unit):o||null,t.multipatchOption=e.geometryType==="multipatch"?"xyFootprint":null,t}function de(e){const{globalIdField:t,fields:n}=e;if(t)return t;if(n){for(const r of n)if(r.type==="esriFieldTypeGlobalID")return r.name}}function fe(e){const{objectIdField:t,fields:n}=e;if(t)return t;if(n){for(const r of n)if(r.type==="esriFieldTypeOID")return r.name}}function ye(e){return e.currentVersion?e.currentVersion:e.hasOwnProperty("capabilities")||e.hasOwnProperty("drawingInfo")||e.hasOwnProperty("hasAttachments")||e.hasOwnProperty("htmlPopupType")||e.hasOwnProperty("relationships")||e.hasOwnProperty("timeInfo")||e.hasOwnProperty("typeIdField")||e.hasOwnProperty("types")?10:9.3}async function f(e){return(await e.load()).source}async function v(e,t){if(!m||m.findCredential(e))return;let n;try{const r=await R(e,t);r&&(n=await m.checkSignInStatus(`${r}/sharing`))}catch{}if(n)try{const r=t!=null?t.signal:null;await m.getCredential(e,{signal:r})}catch{}}async function me(e,t,n){var a;const r=(a=e.parsedUrl)==null?void 0:a.path;r&&e.authenticationTriggerEvent===t&&await v(r,n)}function he(e){var t;return!((t=e.sourceJSON)!=null&&t.isMultiServicesView)&&(e.userHasUpdateItemPrivileges||e.editingEnabled)}const h=E({types:O});function we(e,t){var n;if(e.defaultSymbol)return(n=e.types)!=null&&n.length?new _({defaultSymbol:h(e.defaultSymbol,e,t),field:e.typeIdField,uniqueValueInfos:e.types.map(r=>({id:r.id,symbol:h(r.symbol,r,t)}))}):new C({symbol:h(e.defaultSymbol,e,t)})}function be(e){var r,a,o;let t=(r=e.sourceJSON)==null?void 0:r.cacheMaxAge;if(!t)return!1;const n=(o=(a=e.editingInfo)==null?void 0:a.lastEditDate)==null?void 0:o.getTime();return n==null||(t*=1e3,Date.now()-n<t)}async function D(e,t,n){if(t==null)return null;const r=[],{objectIdField:a}=e;if(t.forEach(u=>{let c=null;if("attributes"in u){const{attributes:p}=u;c={globalId:p[n],objectId:p[a]!=null&&p[a]!==-1?p[a]:null}}else c={globalId:u.globalId,objectId:u.objectId!=null&&u.objectId!==-1?u.objectId:null};c.globalId!=null&&(c.objectId!=null&&c.objectId!==-1||r.push(c.globalId))}),r.length===0)return null;const o=e.createQuery();o.where=r.map(u=>`${n}='${u}'`).join(" OR "),o.returnGeometry=!1,o.outFields=[a,n],o.cacheHint=!1;const i=await P(M(e,o));if(!i.ok)return null;const l=new Map,d=i.value.features;for(const u of d){const c=u.attributes[n],p=u.attributes[a];c!=null&&p!=null&&p!==-1&&l.set(c,p)}return l}export{ie as A,ye as C,we as D,ce as E,oe as F,ne as I,fe as M,se as O,ue as P,me as Q,de as R,le as S,he as T,be as U,D as V,ee as b,B as f,te as g,re as j,W as m,ae as q,M as r,Y as w,pe as x};