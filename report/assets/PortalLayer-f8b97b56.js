import{_ as w,W as U,b as g,K as I,U as E,N as $}from"./request-a10d6950.js";import{e as l,c as b}from"./subclass-f7409b1b.js";import{s as H,c as F,a as L}from"./Error-21d1d076.js";import{_ as T}from"./Evented-b5127116.js";import{u as O,s as S,b as D,p as n}from"./promiseUtils-1d963c7c.js";import{y as m}from"./JSONSupport-acf2865c.js";import"./typedArrayUtil-2af43698.js";import{o as M}from"./Extent-2b4578b8.js";import{r as R}from"./SpatialReference-428523ee.js";import{x as k}from"./layerUtils-c805b05c.js";import{Q as v,p as x}from"./Portal-cb507469.js";import y from"./PortalItem-9d3416e3.js";import{p as P}from"./portalItemUtils-8aceb0b8.js";const X=_=>{let a=class extends _{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=O(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(r){r!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",r))}readPortalItem(r,t,e){if(t.itemId)return new y({id:t.itemId,portal:e==null?void 0:e.portal})}writePortalItem(r,t){r!=null&&r.id&&(t.itemId=r.id)}async loadFromPortal(r,t){var e;if((e=this.portalItem)!=null&&e.id)try{const{load:i}=await w(()=>import("./layersLoader-9161fc36.js"),["./layersLoader-9161fc36.js","./Error-21d1d076.js","./typedArrayUtil-2af43698.js","./arcgisLayerUrl-0c479f71.js","./request-a10d6950.js","./JSONSupport-acf2865c.js","./subclass-f7409b1b.js","./promiseUtils-1d963c7c.js","./time-0817624a.js","./persistableUrlUtils-ca6bb38d.js","./fetchService-b7ffffb9.js","./requestPresets-cacb0d18.js","./portalLayers-4474e209.js","./associatedFeatureServiceUtils-c7af6fe2.js","./Portal-cb507469.js","./Loadable-8a1ead8b.js","./Promise-ec74e14b.js","./Extent-2b4578b8.js","./SpatialReference-428523ee.js","./jsonMap-5ba4a9c2.js","./assets-6fd92e57.js","./cast-e7a2f9aa.js","./locale-bde6d0f6.js","./PortalItem-9d3416e3.js","./layerUtils-c805b05c.js","./lazyLayerLoader-b21a171b.js","./portalItemUtils-8aceb0b8.js","./projection-41da473c.js","./SimpleObservable-ae589a25.js","./mathUtils-19b6edfc.js","./Polyline-013cde1f.js","./aaBoundingRect-aef00841.js","./Axis-30be7e73.js","./projectBuffer-af7b4ad9.js","./zscale-d7e12601.js","./layersCreator-5dcd2c21.js","./Collection-aa6ef54b.js","./Evented-b5127116.js","./styleUtils-f1a4091c.js","./jsonContext-70ccb9b3.js"],import.meta.url);return S(t),await i({instance:this,supportedTypes:r.supportedTypes,validateItem:r.validateItem,supportsData:r.supportsData,layerModuleTypeMap:r.layerModuleTypeMap},t)}catch(i){throw D(i)||H.getLogger(this).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})
  ${i}`),i}}async finishLoadEditablePortalLayer(r){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(r).catch(t=>(n(t),!0)))}async setUserPrivileges(r,t){if(!F.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(t);if(this.url)try{const{features:{edit:e,fullEdit:i},content:{updateItem:s}}=await this._fetchUserPrivileges(r,t);this._set("userHasEditingPrivileges",e),this._set("userHasFullEditingPrivileges",i),this._set("userHasUpdateItemPrivileges",s)}catch(e){n(e)}}async _fetchUserPrivileges(r,t){var d;let e=this.portalItem;if(!r||!e||!e.loaded||e.sourceUrl)return this._fetchFallbackUserPrivileges(t);const i=r===e.id;if(i&&e.portal.user)return P(e);let s,c;if(i)s=e.portal.url;else try{s=await k(this.url,t)}catch(o){n(o)}if(!s||!U(s,e.portal.url))return this._fetchFallbackUserPrivileges(t);try{const o=t!=null?t.signal:null;c=await((d=g)==null?void 0:d.getCredential(`${s}/sharing`,{prompt:!1,signal:o}))}catch(o){n(o)}const h=!0,p=!1,u=!1;if(!c)return{features:{edit:h,fullEdit:p},content:{updateItem:u}};try{if(i?await e.reload():(e=new y({id:r,portal:{url:s}}),await e.load(t)),e.portal.user)return P(e)}catch(o){n(o)}return{features:{edit:h,fullEdit:p},content:{updateItem:u}}}async _fetchFallbackUserPrivileges(r){let t=!0;try{t=await this._fetchUserHasEditingPrivileges(r)}catch(e){n(e)}return{features:{edit:t,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(r){var i;const t=this.url?(i=g)==null?void 0:i.findCredential(this.url):null;if(!t)return!0;const e=f.credential===t?f.user:await this._fetchEditingUser(r);return f.credential=t,f.user=e,(e==null?void 0:e.privileges)==null||e.privileges.includes("features:user:edit")}async _fetchEditingUser(r){var u,d;const t=(d=(u=this.portalItem)==null?void 0:u.portal)==null?void 0:d.user;if(t)return t;const e=g.findServerInfo(this.url??"");if(!(e!=null&&e.owningSystemUrl))return null;const i=`${e.owningSystemUrl}/sharing/rest`,s=v.getDefault();if(s&&s.loaded&&I(s.restUrl)===I(i))return s.user;const c=`${i}/community/self`,h=r!=null?r.signal:null,p=await T(E(c,{authMode:"no-prompt",query:{f:"json"},signal:h}));return p.ok?x.fromJSON(p.value.data):null}read(r,t){t&&(t.layer=this),super.read(r,t)}write(r,t){var s;const e=t==null?void 0:t.portal,i=((s=this.portalItem)==null?void 0:s.id)&&(this.portalItem.portal||v.getDefault());return e&&i&&!$(i.restUrl,e.restUrl)?(t.messages&&t.messages.push(new L("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(r,{...t,layer:this})}};return l([m({type:y})],a.prototype,"portalItem",null),l([M("web-document","portalItem",["itemId"])],a.prototype,"readPortalItem",null),l([R("web-document","portalItem",{itemId:{type:String}})],a.prototype,"writePortalItem",null),l([m({clonable:!1})],a.prototype,"resourceReferences",void 0),l([m({type:Boolean,readOnly:!0})],a.prototype,"userHasEditingPrivileges",void 0),l([m({type:Boolean,readOnly:!0})],a.prototype,"userHasFullEditingPrivileges",void 0),l([m({type:Boolean,readOnly:!0})],a.prototype,"userHasUpdateItemPrivileges",void 0),a=l([b("esri.layers.mixins.PortalLayer")],a),a},f={credential:null,user:null};export{X as j};
