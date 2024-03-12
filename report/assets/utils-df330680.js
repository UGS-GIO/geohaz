import{a as m}from"./Error-21d1d076.js";import{i as u}from"./originUtils-cfe4feaf.js";import{Q as h}from"./Portal-cb507469.js";import x from"./PortalItem-9d3416e3.js";import{o as N}from"./jsonContext-70ccb9b3.js";import{i as P,f as S}from"./portalItemUtils-8aceb0b8.js";import{i as b}from"./saveAPIKeyUtils-7fbece8f.js";import{t as g}from"./saveUtils-534df74b.js";function O(t,r,a){const e=a(t);if(!e.isValid)throw new m(`${r}:invalid-parameters`,e.errorMessage,{layer:t})}async function d(t){const{layer:r,errorNamePrefix:a,validateLayer:e}=t;await r.load(),O(r,a,e)}function f(t,r){return`Layer (title: ${t.title}, id: ${t.id}) of type '${t.declaredClass}' ${r}`}function y(t){const{item:r,errorNamePrefix:a,layer:e,validateItem:o}=t;if(b(r),J(t),o){const s=o(r);if(!s.isValid)throw new m(`${a}:invalid-parameters`,s.errorMessage,{layer:e})}}function J(t){const{item:r,itemType:a,additionalItemType:e,errorNamePrefix:o,layer:s}=t,l=[a];if(e&&l.push(e),!l.includes(r.type)){const n=l.map(i=>`'${i}'`).join(", ");throw new m(`${o}:portal-item-wrong-type`,`Portal item type should be one of: "${n}"`,{item:r,layer:s})}}function E(t){const{layer:r,errorNamePrefix:a}=t,{portalItem:e}=r;if(!e)throw new m(`${a}:portal-item-not-set`,f(r,"requires the portalItem property to be set"));if(!e.loaded)throw new m(`${a}:portal-item-not-loaded`,f(r,"cannot be saved to a portal item that does not exist or is inaccessible"));y({...t,item:e})}function U(t){const{newItem:r,itemType:a}=t;let e=x.from(r);return e.id&&(e=e.clone(),e.id=null),e.type??(e.type=a),e.portal??(e.portal=h.getDefault()),y({...t,item:e}),e}function w(t){return N(t,"portal-item")}async function I(t,r,a){var o;"beforeSave"in t&&typeof t.beforeSave=="function"&&await t.beforeSave();const e=t.write({},r);return await Promise.all(((o=r.resources)==null?void 0:o.pendingOperations)??[]),g(r,{errorName:"layer-write:unsupported"},a),e}function $(t){P(t,S.JSAPI),t.typeKeywords&&(t.typeKeywords=t.typeKeywords.filter((r,a,e)=>e.indexOf(r)===a))}async function C(t,r,a){var o;const e=t.portal;await e.signIn(),await((o=e.user)==null?void 0:o.addItem({item:t,data:r,folder:a==null?void 0:a.folder}))}async function q(t,r){const{layer:a,createItemData:e,createJSONContext:o,saveResources:s,supplementalUnsupportedErrors:l}=t;await d(t),E(t);const n=a.portalItem,i=o?o(n):w(n),p=await I(a,i,{...r,supplementalUnsupportedErrors:l}),c=await e({layer:a,layerJSON:p},n);return $(n),await n.update({data:c}),u(i),await(s==null?void 0:s(n,i)),n}async function A(t,r){const{layer:a,createItemData:e,createJSONContext:o,setItemProperties:s,saveResources:l,supplementalUnsupportedErrors:n}=t;await d(t);const i=U(t),p=o?o(i):w(i),c=await I(a,p,{...r,supplementalUnsupportedErrors:n}),v=await e({layer:a,layerJSON:c},i);return await s(a,i),$(i),await C(i,v,r),a.portalItem=i,u(p),await(l==null?void 0:l(i,p)),i}export{q as $,I,C as P,f as c,E as d,A as j,O as l,$ as v,w,U as y};
