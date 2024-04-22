import{a as w}from"./Error-21d1d076.js";import{p as C}from"./arcgisLayerUrl-0c479f71.js";import{t as E}from"./fetchService-b7ffffb9.js";import{l as v,a as $,n as S,u as j,i as O,c as R,s as M,t as L,r as J,e as P}from"./portalLayers-4474e209.js";import{populateGroupLayer as N}from"./layersCreator-5dcd2c21.js";import{a as Q}from"./lazyLayerLoader-b21a171b.js";import{Q as q}from"./Portal-cb507469.js";import{e as F}from"./jsonContext-70ccb9b3.js";import{s as z}from"./portalItemUtils-8aceb0b8.js";import{t as A}from"./styleUtils-f1a4091c.js";import{t as B}from"./requestPresets-cacb0d18.js";import"./typedArrayUtil-2af43698.js";import"./request-a10d6950.js";import"./JSONSupport-acf2865c.js";import"./subclass-f7409b1b.js";import"./promiseUtils-1d963c7c.js";import"./time-0817624a.js";import"./persistableUrlUtils-ca6bb38d.js";import"./associatedFeatureServiceUtils-c7af6fe2.js";import"./PortalItem-9d3416e3.js";import"./assets-6fd92e57.js";import"./Loadable-8a1ead8b.js";import"./Promise-ec74e14b.js";import"./Extent-2b4578b8.js";import"./SpatialReference-428523ee.js";import"./jsonMap-5ba4a9c2.js";import"./cast-e7a2f9aa.js";import"./locale-bde6d0f6.js";import"./layerUtils-c805b05c.js";import"./Collection-aa6ef54b.js";import"./Evented-b5127116.js";import"./SimpleObservable-ae589a25.js";import"./projection-41da473c.js";import"./mathUtils-19b6edfc.js";import"./Polyline-013cde1f.js";import"./aaBoundingRect-aef00841.js";import"./Axis-30be7e73.js";import"./projectBuffer-af7b4ad9.js";import"./zscale-d7e12601.js";async function qt(t,r){const a=t.instance.portalItem;if(a!=null&&a.id)return await a.load(r),H(t),t.validateItem&&t.validateItem(a),K(t,r)}function H(t){const r=t.instance.portalItem;if(!(r!=null&&r.type)||!t.supportedTypes.includes(r.type))throw new w("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r==null?void 0:r.type,expectedType:t.supportedTypes.join(", ")})}async function K(t,r){const a=t.instance,e=a.portalItem;if(!e)return;const{url:n,title:o}=e,p=F(e,"portal-item");if(a.type==="group")return U(a,p,t);n&&a.type!=="media"&&a.read({url:n},p);const i=new P,s=await x(t,i,r);return s&&a.read(s,p),a.resourceReferences={portalItem:e,paths:p.readResourcePaths??[]},a.type!=="subtype-group"&&a.read({title:o},p),A(a,p)}async function U(t,r,a){const e=t.portalItem;if(!t.sourceIsPortalItem)return;const{title:n,type:o}=e;if(o==="Group Layer"){if(!z(e,"Map"))throw new w("portal:invalid-layer-item-typekeyword","'Group Layer' item without 'Map' type keyword is not supported");return V(t)}return t.read({title:n},r),W(t,a)}async function V(t){const r=t.portalItem,a=await r.fetchData("json");if(!a)return;const e=F(r,"web-map");t.read(a,e),await N(t,a,{context:e}),t.resourceReferences={portalItem:r,paths:e.readResourcePaths??[]}}async function W(t,r){var m;let a;const{portalItem:e}=t;if(!e)return;const n=e.type,o=r.layerModuleTypeMap;switch(n){case"Feature Service":case"Feature Collection":a=o.FeatureLayer;break;case"Stream Service":a=o.StreamLayer;break;case"Scene Service":a=o.SceneLayer;break;default:throw new w("portal:unsupported-item-type-as-group",`The item type '${n}' is not supported as a 'IGroupLayer'`)}const p=new P;let[i,s]=await Promise.all([a(),x(r,p)]),l=()=>i;if(n==="Feature Service"){const D=(m=v(s))==null?void 0:m.customParameters;s=e.url?await $(s,e.url,p):{};const g=S(s),u=j(s),f=O(s),y=[];if(g.length||u!=null&&u.length){g.length&&y.push("SubtypeGroupLayer"),u!=null&&u.length&&y.push("OrientedImageryLayer"),f!=null&&f.length&&y.push("CatalogLayer");const b=[];for(const c of y){const d=o[c];b.push(d())}const k=await Promise.all(b),I=new Map;y.forEach((c,d)=>{I.set(c,k[d])}),l=c=>c.layerType?I.get(c.layerType)??i:i}const G=await et(e.url,{customParameters:D,loadContext:p});return await h(t,l,s,G)}return n==="Scene Service"&&e.url&&(s=await R(e,s,p)),M(s)>0?await h(t,l,s):await X(t,l)}async function X(t,r){var n,o;const{portalItem:a}=t;if(!(a!=null&&a.url))return;const e=await B(a.url);e&&h(t,r,{layers:(n=e.layers)==null?void 0:n.map(L),tables:(o=e.tables)==null?void 0:o.map(L)})}async function h(t,r,a,e){var p;let n=a.layers||[];const o=a.tables||[];if(((p=t.portalItem)==null?void 0:p.type)==="Feature Collection"?(n.forEach((i,s)=>{var l;i.id=s,((l=i==null?void 0:i.layerDefinition)==null?void 0:l.type)==="Table"&&o.push(i)}),n=n.filter(i=>{var s;return((s=i==null?void 0:i.layerDefinition)==null?void 0:s.type)!=="Table"})):(n.reverse(),o.reverse()),n.forEach(i=>{const s=e==null?void 0:e(i);if(s||!e){const l=T(t,r(i),a,i,s);t.add(l)}}),o.length){const i=await Q.FeatureLayer();o.forEach(s=>{const l=e==null?void 0:e(s);if(l||!e){const m=T(t,i,a,s,l);t.tables.add(m)}})}}function T(t,r,a,e,n){const o=t.portalItem,p={portalItem:o.clone(),layerId:e.id};e.url!=null&&(p.url=e.url);const i=new r(p);if("sourceJSON"in i&&(i.sourceJSON=n),i.type!=="subtype-group"&&i.type!=="catalog"&&(i.sublayerTitleMode="service-name"),o.type==="Feature Collection"){const s={origin:"portal-item",portal:o.portal||q.getDefault()};i.read(e,s);const l=a.showLegend;l!=null&&i.read({showLegend:l},s)}return i}async function x(t,r,a){if(t.supportsData===!1)return;const e=t.instance,n=e.portalItem;if(!n)return;let o=null;try{o=await n.fetchData("json",a)}catch{}if(_(e)){let p=null;const i=await Y(n,o,r);if((o!=null&&o.layers||o!=null&&o.tables)&&i>0){if(e.layerId==null){const s=S(o);e.layerId=e.type==="subtype-group"?s==null?void 0:s[0]:J(o)}p=Z(o,e),p&&o.showLegend!=null&&(p.showLegend=o.showLegend)}return i>1&&"sublayerTitleMode"in e&&e.sublayerTitleMode!=="service-name"&&(e.sublayerTitleMode="item-title-and-service-name"),p}return o}async function Y(t,r,a){var o,p,i,s,l;if(r!=null&&r.layers&&(r!=null&&r.tables))return M(r);const e=C(t.url);if(!e)return 1;const n=await a.fetchServiceMetadata(e.url.path,{customParameters:(o=v(r))==null?void 0:o.customParameters}).catch(()=>null);return(((p=r==null?void 0:r.layers)==null?void 0:p.length)??((i=n==null?void 0:n.layers)==null?void 0:i.length)??0)+(((s=r==null?void 0:r.tables)==null?void 0:s.length)??((l=n==null?void 0:n.tables)==null?void 0:l.length)??0)}function Z(t,r){var n,o;const{layerId:a}=r,e=((n=t.layers)==null?void 0:n.find(p=>p.id===a))||((o=t.tables)==null?void 0:o.find(p=>p.id===a));return e&&tt(e,r)?e:null}function _(t){return t.type!=="stream"&&"layerId"in t}function tt(t,r){return!(r.type==="feature"&&"layerType"in t&&t.layerType==="SubtypeGroupLayer"||r.type==="subtype-group"&&!("layerType"in t))}async function et(t,r){const{layersJSON:a}=await E(t,r);if(!a)return null;const e=[...a.layers,...a.tables];return n=>e.find(o=>o.id===n.id)}export{qt as load};