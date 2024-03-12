import{e as l,c as g,t as c}from"./subclass-f7409b1b.js";import{j as f,k as u,l as m,m as $,n as h,p as w,S as M,q as J,o as N}from"./JSONSupport-acf2865c.js";import{b as d}from"./Error-21d1d076.js";class _{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(f),this._values=new Map,this.multipleOriginsSupported=!0}clone(e){const t=new _,r=this._originStores[u.DEFAULTS];r&&r.forEach((s,i)=>{t.set(i,d(s),u.DEFAULTS)});for(let s=u.SERVICE;s<f;s++){const i=this._originStores[s];i&&i.forEach((o,n)=>{e&&e.has(n)||t.set(n,d(o),s)})}return t}get(e,t){const r=t===void 0?this._values:this._originStores[t];return r?r.get(e):void 0}keys(e){const t=e==null?this._values:this._originStores[e];return t?[...t.keys()]:[]}set(e,t,r=u.USER){let s=this._originStores[r];if(s||(s=new Map,this._originStores[r]=s),s.set(e,t),!this._values.has(e)||this._propertyOriginMap.get(e)<=r){const i=this._values.get(e);return this._values.set(e,t),this._propertyOriginMap.set(e,r),i!==t}return!1}delete(e,t=u.USER){const r=this._originStores[t];if(!r)return;const s=r.get(e);if(r.delete(e),this._values.has(e)&&this._propertyOriginMap.get(e)===t){this._values.delete(e);for(let i=t-1;i>=0;i--){const o=this._originStores[i];if(o&&o.has(e)){this._values.set(e,o.get(e)),this._propertyOriginMap.set(e,i);break}}}return s}has(e,t){const r=t===void 0?this._values:this._originStores[t];return!!r&&r.has(e)}revert(e,t){for(;t>0&&!this.has(e,t);)--t;const r=this._originStores[t],s=r==null?void 0:r.get(e),i=this._values.get(e);return this._values.set(e,s),this._propertyOriginMap.set(e,t),i!==s}originOf(e){return this._propertyOriginMap.get(e)||u.DEFAULTS}forEach(e){this._values.forEach(e)}}const E=a=>{let e=class extends a{constructor(...t){super(...t);const r=c(this),s=r.store,i=new _;r.store=i,m(r,s,i)}read(t,r){$(this,t,r)}getAtOrigin(t,r){const s=O(this),i=h(r);if(typeof t=="string")return s.get(t,i);const o={};return t.forEach(n=>{o[n]=s.get(n,i)}),o}originOf(t){return w(this.originIdOf(t))}originIdOf(t){return O(this).originOf(t)}revert(t,r){const s=O(this),i=h(r),o=c(this);let n;n=typeof t=="string"?t==="*"?s.keys(i):[t]:t,n.forEach(p=>{o.invalidate(p),s.revert(p,i),o.commit(p)})}};return e=l([g("esri.core.ReadOnlyMultiOriginJSONSupport")],e),e};function O(a){return c(a).store}let v=class extends E(M){};v=l([g("esri.core.ReadOnlyMultiOriginJSONSupport")],v);const A=a=>{let e=class extends a{constructor(...t){super(...t)}clear(t,r="user"){return S(this).delete(t,h(r))}write(t,r){return J(this,t=t||{},r),t}setAtOrigin(t,r,s){c(this).setAtOrigin(t,r,h(s))}removeOrigin(t){const r=S(this),s=h(t),i=r.keys(s);for(const o of i)r.originOf(o)===s&&r.set(o,r.get(o,s),u.USER)}updateOrigin(t,r){const s=S(this),i=h(r),o=N(this,t);for(let n=i+1;n<f;++n)s.delete(t,n);s.set(t,o,i)}toJSON(t){return this.write({},t)}};return e=l([g("esri.core.WriteableMultiOriginJSONSupport")],e),e.prototype.toJSON.isDefaultToJSON=!0,e};function S(a){return c(a).store}const k=a=>{let e=class extends A(E(a)){constructor(...t){super(...t)}};return e=l([g("esri.core.MultiOriginJSONSupport")],e),e};let y=class extends k(M){};y=l([g("esri.core.MultiOriginJSONSupport")],y);export{y as S,k as m};
