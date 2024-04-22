import{l as ze,t as T,g as Ge,i as u,f as pe,h as w,k as He,j as xe,b as Z,I as p,m as Ve,o as ge,p as _e,q as me,u as ye,w as Je,S as re,x as We,_ as Ke,B as Ye,y as Ze,M as ne,$ as Qe,z as Xe,A as et,d as tt,C as st,c as Q,D as rt,E as G,F as nt,G as ve,H as F,e as $e}from"./subclass-f7409b1b.js";import{h as P,R as it,a as ot}from"./typedArrayUtil-2af43698.js";import{b as we,j as X,a as Oe,h as at,s as ee}from"./Error-21d1d076.js";import{e as v,L as ct,f as lt,a as ut,u as ht}from"./promiseUtils-1d963c7c.js";import{n as y}from"./time-0817624a.js";const ie=new WeakMap;function ft(s,e,t=!1){const r=`🛑 DEPRECATED - ${e}`;if(!t)return void s.warn(r);let n=ie.get(s);n||(n=new Set,ie.set(s,n)),n.has(e)||(n.add(e),s.warn(r))}function dt(s,e,t={}){if(P("esri-deprecation-warnings")){const{moduleName:r}=t;be(s,`Function: ${(r?r+"::":"")+e+"()"}`,t)}}function bs(s,e,t={}){if(P("esri-deprecation-warnings")){const{moduleName:r}=t;be(s,`Property: ${(r?r+"::":"")+e}`,t)}}function be(s,e,t={}){if(P("esri-deprecation-warnings")){const{replacement:r,version:n,see:i,warnOnce:a}=t;let o=e;r&&(o+=`
	🛠️ Replacement: ${r}`),n&&(o+=`
	⚙️ Version: ${n}`),i&&(o+=`
	🔗 See ${i} for more details.`),ft(s,o,a)}}function Es(s){const e=[];return function*(){yield*e;for(const t of s)e.push(t),yield t}}function As(s,e){for(const t of s)if(t!=null&&e(t))return t}function oe(s){return s!=null&&typeof s[Symbol.iterator]=="function"}let pt=class H{constructor(){this._groups=new Map}destroy(){this.removeAll()}get size(){let e=0;return this._groups.forEach(t=>{e+=t.length}),e}add(e,t){if(oe(e)){const r=this._getOrCreateGroup(t);for(const n of e)this._isHandle(n)&&r.push(n)}else this._isHandle(e)&&this._getOrCreateGroup(t).push(e);return this}forEach(e,t){if(typeof e=="function")this._groups.forEach(r=>r.forEach(e));else{const r=this._getGroup(e);r&&t&&r.forEach(t)}}has(e){return this._groups.has(this._ensureGroupKey(e))}remove(e){if(typeof e!="string"&&oe(e)){for(const t of e)this.remove(t);return this}return this.has(e)?(this._removeAllFromGroup(this._getGroup(e)),this._groups.delete(this._ensureGroupKey(e)),this):this}removeAll(){return this._groups.forEach(e=>this._removeAllFromGroup(e)),this._groups.clear(),this}_isHandle(e){return e&&(!!e.remove||e instanceof H)}_getOrCreateGroup(e){if(this.has(e))return this._getGroup(e);const t=[];return this._groups.set(this._ensureGroupKey(e),t),t}_getGroup(e){return this._groups.get(this._ensureGroupKey(e))}_ensureGroupKey(e){return e||"_default_"}_removeAllFromGroup(e){for(const t of e)t instanceof H?t.removeAll():t.remove()}};function Ee(s,e){const t=s[s.length-1]==="?"?s.slice(0,-1):s;if(e.getItemAt!=null||Array.isArray(e)){const n=parseInt(t,10);if(!isNaN(n))return Array.isArray(e)?e[n]:e.at(n)}const r=T(e);return Ge(r,t)?r.get(t):e[t]}function Ae(s,e,t){if(s==null)return s;const r=Ee(e[t],s);return!r&&t<e.length-1?void 0:t===e.length-1?r:Ae(r,e,t+1)}function k(s,e,t=0){return typeof e!="string"||e.includes(".")?Ae(s,ze(e),t):Ee(e,s)}function O(s,e){return k(s,e)}function ae(s,e){return k(e,s)!==void 0}let gt=class{constructor(e,t){this._observers=e,this._observer=t}remove(){it(this._observers,this._observer)}},_t=class{constructor(){this._observers=null,this.destroyed=!1}observe(e){if(this.destroyed||e.destroyed)return mt;this._observers==null&&(this._observers=[]);const t=this._observers;let r=!1,n=!1;const i=t.length;for(let a=0;a<i;++a){const o=t[a];if(o.destroyed)n=!0;else if(o===e){r=!0;break}}return r||(t.push(e),n&&this._removeDestroyedObservers()),new gt(t,e)}_removeDestroyedObservers(){const e=this._observers;if(!e||e.length===0)return;const t=e.length;let r=0;for(let n=0;n<t;++n){for(;n+r<t&&e[n+r].destroyed;)++r;if(r>0){if(!(n+r<t))break;e[n]=e[n+r]}}e.length=t-r}destroy(){if(this.destroyed)return;this.destroyed=!0;const e=this._observers;if(e!=null){for(const t of e)t.onCommitted();this._observers=null}}};const mt=v();var l;(function(s){s[s.DEFAULTS=0]="DEFAULTS",s[s.COMPUTED=1]="COMPUTED",s[s.SERVICE=2]="SERVICE",s[s.PORTAL_ITEM=3]="PORTAL_ITEM",s[s.WEB_SCENE=4]="WEB_SCENE",s[s.WEB_MAP=5]="WEB_MAP",s[s.LINK_CHART=6]="LINK_CHART",s[s.USER=7]="USER"})(l||(l={}));const Ts=l.USER+1;function Se(s){switch(s){case"defaults":return l.DEFAULTS;case"service":return l.SERVICE;case"portal-item":return l.PORTAL_ITEM;case"web-scene":return l.WEB_SCENE;case"web-map":return l.WEB_MAP;case"link-chart":return l.LINK_CHART;case"user":return l.USER;default:return null}}function x(s){switch(s){case l.DEFAULTS:return"defaults";case l.SERVICE:return"service";case l.PORTAL_ITEM:return"portal-item";case l.WEB_SCENE:return"web-scene";case l.WEB_MAP:return"web-map";case l.LINK_CHART:return"link-chart";case l.USER:return"user"}}function yt(s){return x(s)}let ce=class extends _t{constructor(e,t){super(),this.propertyName=e,this.metadata=t,this._accessed=null,this._handles=null,this.flags=0,this.flags=u.Dirty|(t.nonNullable?u.NonNullable:0)|(t.hasOwnProperty("value")?u.HasDefaultValue:0)|(t.get===void 0?u.DepTrackingInitialized:0)|(t.dependsOn===void 0?u.AutoTracked:0)}destroy(){this.flags&u.Dirty&&this.onCommitted(),super.destroy(),this._accessed=null,this._clearObservationHandles()}getComputed(e){pe(this);const t=e.store,r=this.propertyName,n=this.flags,i=t.get(r);if(n&u.Computing||~n&u.Dirty&&t.has(r))return i;this.flags|=u.Computing;const a=e.host;let o;n&u.AutoTracked?o=w(this,this.metadata.get,a):(He(a,this),o=this.metadata.get.call(a)),t.set(r,o,l.COMPUTED);const c=t.get(r);return c===i?this.flags&=~u.Dirty:xe(this.commit,this),this.flags&=~u.Computing,c}onObservableAccessed(e){if(e===this)return;let t=this._accessed;if(t==null)t=[],this._accessed=t;else if(t.includes(e))return;t.push(e)}onTrackingEnd(){this._clearObservationHandles(),this.flags|=u.DepTrackingInitialized;const e=this._accessed;if(e==null||e.length===0)return;let t=this._handles;t==null&&(t=[],this._handles=t);for(let r=0;r<e.length;++r)t.push(e[r].observe(this));e.length=0}notifyChange(){this.onInvalidated(),this.onCommitted()}invalidate(){this.onInvalidated()}commit(){this.flags&=~u.Dirty,this.onCommitted()}_clearObservationHandles(){const e=this._handles;if(e!==null){for(let t=0;t<e.length;++t)e[t].remove();e.length=0}}onInvalidated(){~this.flags&u.Overridden&&(this.flags|=u.Dirty);const e=this._observers;if(e&&e.length>0)for(const t of e)t.onInvalidated()}onCommitted(){const e=this._observers;if(e&&e.length>0){const t=e.slice();for(const r of t)r.onCommitted()}}},vt=class Ne{constructor(){this._values=new Map,this.multipleOriginsSupported=!1}clone(e){const t=new Ne;return this._values.forEach((r,n)=>{e&&e.has(n)||t.set(n,we(r))}),t}get(e){return this._values.get(e)}originOf(){return l.USER}keys(){return[...this._values.keys()]}set(e,t){this._values.set(e,t)}delete(e){this._values.delete(e)}has(e){return this._values.has(e)}forEach(e){this._values.forEach(e)}};function D(s,e,t){return s!==void 0}function le(s,e,t,r){return s!==void 0&&(!(t==null&&s.flags&u.NonNullable)||(r.lifecycle,p.INITIALIZING,!1))}let $t=class{constructor(e){this.host=e,this.propertiesByName=new Map,this.ctorArgs=null,this.lifecycle=p.INITIALIZING,this.store=new vt,this._origin=l.USER;const t=this.host.constructor.__accessorMetadata__;for(const r in t){const n=new ce(r,t[r]);this.propertiesByName.set(r,n)}this.metadata=t}initialize(){this.lifecycle=p.CONSTRUCTING}constructed(){this.lifecycle=p.CONSTRUCTED}destroy(){this.lifecycle=p.DESTROYED,this.propertiesByName.forEach(e=>e.destroy())}get initialized(){return this.lifecycle!==p.INITIALIZING}get(e){const t=this.propertiesByName.get(e);if(t.metadata.get)return t.getComputed(this);pe(t);const r=this.store;return r.has(e)?r.get(e):t.metadata.value}originOf(e){const t=this.store.originOf(e);if(t===void 0){const r=this.propertiesByName.get(e);if(r!==void 0&&r.flags&u.HasDefaultValue)return"defaults"}return x(t)}has(e){return this.propertiesByName.has(e)&&this.store.has(e)}keys(){return[...this.propertiesByName.keys()]}internalGet(e){const t=this.propertiesByName.get(e);if(D(t))return this.store.has(e)?this.store.get(e):t.metadata.value}internalSet(e,t){const r=this.propertiesByName.get(e);D(r)&&this._internalSet(r,t)}getDependsInfo(e,t,r){const n=this.propertiesByName.get(t);if(!D(n))return"";const i=new Set,a=w({onObservableAccessed:c=>i.add(c),onTrackingEnd:()=>{}},()=>{var c;return(c=n.metadata.get)==null?void 0:c.call(e)});let o=`${r}${e.declaredClass.split(".").pop()}.${t}: ${a}
`;if(i.size===0)return o;r+="  ";for(const c of i)c instanceof ce&&(o+=`${r}${c.propertyName}: undefined
`);return o}setAtOrigin(e,t,r){const n=this.propertiesByName.get(e);if(D(n))return this._setAtOrigin(n,t,r)}isOverridden(e){const t=this.propertiesByName.get(e);return t!==void 0&&!!(t.flags&u.Overridden)}clearOverride(e){const t=this.propertiesByName.get(e);t&&t.flags&u.Overridden&&(t.flags&=~u.Overridden,t.notifyChange())}override(e,t){const r=this.propertiesByName.get(e);if(!le(r,e,t,this))return;const n=r.metadata.cast;if(n){const i=this._cast(n,t),{valid:a,value:o}=i;if(L.release(i),!a)return;t=o}r.flags|=u.Overridden,this._internalSet(r,t)}set(e,t){const r=this.propertiesByName.get(e);if(!le(r,e,t,this))return;const n=r.metadata.cast;if(n){const a=this._cast(n,t),{valid:o,value:c}=a;if(L.release(a),!o)return;t=c}const i=r.metadata.set;i?i.call(this.host,t):this._internalSet(r,t)}setDefaultOrigin(e){this._origin=Se(e)}getDefaultOrigin(){return x(this._origin)}notifyChange(e){const t=this.propertiesByName.get(e);t!==void 0&&t.notifyChange()}invalidate(e){const t=this.propertiesByName.get(e);t!==void 0&&t.invalidate()}commit(e){const t=this.propertiesByName.get(e);t!==void 0&&t.commit()}_internalSet(e,t){const r=this.lifecycle!==p.INITIALIZING?this._origin:l.DEFAULTS;this._setAtOrigin(e,t,r)}_setAtOrigin(e,t,r){const n=this.store,i=e.propertyName;n.has(i,r)&&X(t,n.get(i))&&~e.flags&u.Overridden&&r===n.originOf(i)||(e.invalidate(),n.set(i,t,r),e.commit(),Ve(this.host,e))}_cast(e,t){const r=L.acquire();return r.valid=!0,r.value=t,e&&(r.value=e.call(this.host,t,r)),r}},wt=class{constructor(){this.value=null,this.valid=!0}acquire(){this.valid=!0}release(){this.value=null}};const L=new Z(wt);function R(s,e,t){if(s&&e)if(typeof e=="object")for(const r of Object.getOwnPropertyNames(e))R(s,r,e[r]);else{if(e.includes(".")){const n=e.split("."),i=n.splice(-1,1)[0];return void R(O(s,n),i,t)}const r=s.__accessor__;r!=null&&Ot(e,r),s[e]=t}}function Ot(s,e){if(P("esri-unknown-property-errors")&&!bt(s,e))throw new Oe("set:unknown-property",Et(s,e))}function bt(s,e){return e.metadata[s]!=null}function Et(s,e){return"setting unknown property '"+s+"' on instance of "+e.host.declaredClass}let At;function St(){return At}var ue;(function(s){s[s.Ignore=0]="Ignore",s[s.Destroy=1]="Destroy",s[s.ThrowError=2]="ThrowError"})(ue||(ue={}));function Nt(s){s.length=0}let Te=class{constructor(e=50,t=50){this._pool=new Z(Array,void 0,Nt,t,e)}acquire(){return this._pool.acquire()}release(e){this._pool.release(e)}prune(){this._pool.prune(0)}static acquire(){return M.acquire()}static release(e){return M.release(e)}static prune(){M.prune()}};const M=new Te(100);let Tt=class extends Z{constructor(){super(...arguments),this._set=new Set}destroy(){super.destroy(),this._set=null}acquire(...e){const t=super.acquire(...e);return this._set.delete(t),t}release(e){e&&!this._set.has(e)&&(super.release(e),this._set.add(e))}_dispose(e){this._set.delete(e),super._dispose(e)}},ke=class{constructor(e,t=30){this.name=e,this._counter=0,this._samples=new Array(t)}record(e){e!=null&&(this._samples[++this._counter%this._samples.length]=e)}get median(){return this._samples.slice().sort((e,t)=>e-t)[Math.floor(this._samples.length/2)]}get average(){return this._samples.reduce((e,t)=>e+t,0)/this._samples.length}get last(){return this._samples[this._counter%this._samples.length]}},kt=class{constructor(e){this.phases=e,this.paused=!1,this.ticks=-1,this.removed=!1}},Dt=class{constructor(e){this.callback=e,this.isActive=!0}remove(){this.isActive=!1}},V=0;const A={time:y(0),deltaTime:y(0),elapsedFrameTime:y(0),frameDuration:y(0)},J=["prepare","preRender","render","postRender","update","finish"],W=[],b=new ge;let Ct=class{constructor(e){this._task=e}remove(){this._task.removed=!0}pause(){this._task.paused=!0}resume(){this._task.paused=!1}};function It(){$!=null&&(cancelAnimationFrame($),$=requestAnimationFrame(te))}const U={frameTasks:b,willDispatch:!1,clearFrameTasks:Ut,dispatch:Ce,executeFrameTasks:jt,reschedule:It};function Rt(s){const e=new Dt(s);return W.push(e),U.willDispatch||(U.willDispatch=!0,_e(Ce)),e}function Ps(s){const e=new kt(s);return b.push(e),$==null&&(V=performance.now(),$=requestAnimationFrame(te)),new Ct(e)}let $=null;function Ut(s=!1){b.forAll(e=>{e.removed=!0}),s&&De()}function te(){const s=performance.now();$=null,$=b.length>0?requestAnimationFrame(te):null,U.executeFrameTasks(s)}function jt(s){const e=y(s-V);V=s;const t=1e3/60,r=Math.max(0,e-t);A.time=s,A.frameDuration=y(t-r);for(let n=0;n<J.length;n++){const i=performance.now(),a=J[n];b.forAll(o=>{var c;o.paused||o.removed||(n===0&&o.ticks++,o.phases[a]&&(A.elapsedFrameTime=y(performance.now()-s),A.deltaTime=o.ticks===0?y(0):e,(c=o.phases[a])==null||c.call(o,A)))}),qt[n].record(performance.now()-i)}De(),Bt.record(performance.now()-s)}const C=new ge;function De(){b.forAll(s=>{s.removed&&C.push(s)}),b.removeUnorderedMany(C.data,C.length),C.clear()}function Ce(){for(;W.length;){const s=W.shift();s.isActive&&s.callback()}U.willDispatch=!1}function Fs(s=1,e){const t=ct(),r=()=>{lt(e)?t.reject(ut()):s===0?t():(--s,_e(()=>r()))};return r(),t.promise}const qt=J.map(s=>new ke(s)),Bt=new ke("total");function Pt(s,e){for(const t of s.entries())if(e(t[0]))return!0;return!1}function he(s,e){if(!e)return s;for(const t of e)s.add(t);return s}function Ft(s,e){const t=new Set;return he(t,s),he(t,e),t}function Lt(s,e){const t=new Set;for(const r of e)s.has(r)&&t.add(r);return t}function Ls(s,e){if(!s||!e)return!1;if(s===e)return!0;for(const t of s)if(!e.has(t))return!1;return!0}function Ms(s,e){if(s==null&&e==null)return!0;if(s==null||e==null||s.size!==e.size)return!1;for(const t of s)if(!e.has(t))return!1;return!0}function Mt(s,e){const t=new Set(s);for(const r of e)t.delete(r);return t}function zs(s,e){return Mt(Ft(s,e),Lt(s,e))}let zt=0;function z(){return++zt}let se=class{constructor(e){this._accessed=[],this._handles=[],this._observerObject=new Gt(e),fe.register(this,new WeakRef(this._observerObject),this)}destroy(){var e;fe.unregister(this._observerObject),this._accessed.length=0,(e=this._observerObject)==null||e.destroy(),this.clear()}onObservableAccessed(e){const t=this._accessed;t.includes(e)||t.push(e)}onTrackingEnd(){const e=this._handles,t=this._accessed,r=this._observerObject;for(let n=0;n<t.length;++n)e.push(t[n].observe(r));t.length=0}clear(){const e=this._handles;for(let t=0;t<e.length;++t)e[t].remove();e.length=0}},Gt=class{constructor(e){this._notify=e,this._invalidCount=0,this.destroyed=!1}onInvalidated(){this._invalidCount++}onCommitted(){if(this.destroyed)return;const e=this._invalidCount;if(e===1)return this._invalidCount=0,void this._notify();this._invalidCount=e>0?e-1:0}destroy(){this.destroyed=!0,this._notify=Ht}};const fe=new FinalizationRegistry(s=>{var e;(e=s.deref())==null||e.destroy()});function Ht(){}let E=!1;const j=[];function Ie(s,e){let t=new se(i),r=null,n=!1;function i(){if(!t||n)return;if(E)return void Ue(i);const o=r;t.clear(),E=!0,n=!0,r=w(t,s),n=!1,E=!1,e(r,o),je()}function a(){t&&(t.destroy(),t=null,r=null)}return n=!0,r=w(t,s),n=!1,v(a)}function Re(s,e){let t=new se(n),r=null;function n(){e(r,a)}function i(){t&&(t.destroy(),t=null),r=null}function a(){return t?(t.clear(),r=w(t,s),r):null}return a(),v(i)}function xs(s){let e=new se(r),t=!1;function r(){e&&!t&&(E?Ue(r):(e.clear(),E=!0,t=!0,w(e,s),t=!1,E=!1,je()))}function n(){e&&(e.destroy(),e=null)}return t=!0,w(e,s),t=!1,v(n)}function Ue(s){j.includes(s)||j.unshift(s)}function je(){for(;j.length;)j.pop()()}var S;(function(s){s[s.Untracked=0]="Untracked",s[s.Tracked=1]="Tracked"})(S||(S={}));let N=class{constructor(){this.uid=z(),this.removed=!1,this.type=null,this.oldValue=null,this.callback=null,this.getValue=null,this.target=null,this.path=null,this.equals=null}static acquireUntracked(e,t,r,n,i){return this.pool.acquire(S.Untracked,e,t,r,n,i,X)}static acquireTracked(e,t,r,n){return this.pool.acquire(S.Tracked,e,t,r,null,null,n)}notify(e,t){this.type===S.Untracked?this.callback.call(this.target,e,t,this.path,this.target):this.callback.call(null,e,t,void 0,void 0)}acquire(e,t,r,n,i,a,o){this.uid=z(),this.removed=!1,this.type=e,this.oldValue=t,this.callback=r,this.getValue=n,this.target=i,this.path=a,this.equals=o}release(){this.target=this.path=this.oldValue=this.callback=this.getValue=null,this.uid=z(),this.removed=!0}};N.pool=new Tt(N);const I=new Te,_=new Set;let q;function B(s){_.delete(s),_.add(s),q||(q=Rt(Jt))}function xt(s){if(s.removed)return;const e=s.oldValue,t=s.getValue();s.equals(e,t)||(s.oldValue=t,s.notify(t,e))}function Vt(s){for(const e of _.values())e.target===s&&(e.removed=!0)}function Jt(){let s=10;for(;q&&s--;){q=null;const e=Wt(),t=I.acquire();for(const r of e){const n=r.uid;xt(r),n===r.uid&&r.removed&&t.push(r)}for(const r of _)r.removed&&(t.push(r),_.delete(r));for(const r of t)N.pool.release(r);I.release(t),I.release(e),K.forEach(r=>r())}}function Wt(){const s=I.acquire();s.length=_.size;let e=0;for(const t of _)s[e]=t,++e;return _.clear(),s}const K=new Set;function Js(s){return K.add(s),v(()=>K.delete(s))}function Kt(s,e,t){let r=me(s,e,t,(n,i,a)=>{let o,c,h=Re(()=>k(n,i),(d,f)=>{var g;((g=n.__accessor__)==null?void 0:g.lifecycle)===p.DESTROYED||o&&o.uid!==c?r.remove():(o||(o=N.acquireUntracked(d,a,f,n,i),c=o.uid),B(o))});return v(()=>{h.remove(),o&&(o.uid!==c||o.removed||(o.removed=!0,B(o)),o=null),r=h=null})});return r}function Yt(s,e,t){const r=me(s,e,t,(n,i,a)=>{let o=!1;return Ie(()=>k(n,i),(c,h)=>{n.__accessor__.lifecycle!==p.DESTROYED?o||(o=!0,X(h,c)||a.call(n,c,h,i,n),o=!1):r.remove()})});return r}function Zt(s,e,t,r=!1){return s.__accessor__&&s.__accessor__.lifecycle!==p.DESTROYED?r?Yt(s,e,t):Kt(s,e,t):v()}function Qt(s,e,t){let r,n,i=Re(s,(a,o)=>{r&&r.uid!==n?i.remove():(r||(r=N.acquireTracked(a,e,o,t),n=r.uid),B(r))});return v(()=>{i.remove(),r&&(r.uid!==n||r.removed||(r.removed=!0,B(r)),r=null),i=null})}function Xt(s,e,t){let r=!1;return Ie(s,(n,i)=>{r||(r=!0,t(i,n)||e(n,i),r=!1)})}function Ws(s,e,t=!1,r=at){return t?Xt(s,e,r):Qt(s,e,r)}function Ks(s){return Pt(_,e=>e.oldValue===s)}function es(s={}){return(e,t)=>{if(e===Function.prototype)throw new Error(`Inappropriate use of @property() on a static field: ${e.name}.${t}. Accessor does not support static properties.`);const r=Object.getOwnPropertyDescriptor(e,t),n=ye(e,t);r&&(r.get||r.set?(n.get=r.get||n.get,n.set=r.set||n.set):"value"in r&&("value"in s&&ee.getLogger("esri.core.accessorSupport.decorators.property").warn(`@property() will redefine the value of "${t}" on "${e.constructor.name}" already defined in the metadata`,s),n.value=s.value=r.value)),s.readOnly!=null&&(n.readOnly=s.readOnly);const i=s.aliasOf;if(i){const c=typeof i=="string"?i:i.source,h=typeof i=="string"?null:i.overridable===!0;let d;n.dependsOn=[c],n.get=function(){let f=O(this,c);if(typeof f=="function"){d||(d=c.split(".").slice(0,-1).join("."));const g=O(this,d);g&&(f=f.bind(g))}return f},n.readOnly||(n.set=h?function(f){this._override(t,f)}:function(f){R(this,c,f)})}const a=s.type,o=s.types;n.cast||(a?n.cast=ts(a):o&&(Array.isArray(o)?n.cast=Je(re(o[0])):n.cast=re(o))),We(n,s),s.range&&(n.cast=ss(n.cast,s.range))}}function Ys(s,e,t){const r=ye(s,t);r.json||(r.json={});let n=r.json;return e!==void 0&&(n.origins||(n.origins={}),n.origins[e]||(n.origins[e]={}),n=n.origins[e]),n}function ts(s){let e=0,t=s;if(Ke(s))return Ye(s);for(;Array.isArray(t)&&t.length===1&&typeof t[0]!="string"&&typeof t[0]!="number";)t=t[0],e++;const r=t;if(Ze(r))return e===0?ne(r):Qe(ne(r),e);if(e===1)return Xe(r);if(e>1)return et(r,e);const n=s;return n.from?n.from:tt(n)}function ss(s,e){return t=>{let r=+s(t);return e.step!=null&&(r=Math.round(r/e.step)*e.step),e.min!=null&&(r=Math.max(e.min,r)),e.max!=null&&(r=Math.min(e.max,r)),r}}var qe,Be;function rs(s){var e;if(s==null)return{value:s};if(Array.isArray(s))return{type:[s[0]],value:null};switch(typeof s){case"object":return(e=s.constructor)!=null&&e.__accessorMetadata__||s instanceof Date?{type:s.constructor,value:s}:s;case"boolean":return{type:Boolean,value:s};case"string":return{type:String,value:s};case"number":return{type:Number,value:s};case"function":return{type:s,value:null};default:return}}const m=Symbol("Accessor-Handles"),Y=Symbol("Accessor-Initialized");let ns=class Pe{static createSubclass(e={}){if(Array.isArray(e))throw new Error("Multi-inheritance unsupported since 4.16");const{properties:t,declaredClass:r,constructor:n}=e;delete e.declaredClass,delete e.properties,delete e.constructor;const i=this;class a extends i{constructor(...c){super(...c),this.inherited=null,n&&n.apply(this,c)}}st(a.prototype);for(const o in e){const c=e[o];a.prototype[o]=typeof c=="function"?function(...h){const d=this.inherited;let f;this.inherited=function(...g){if(i.prototype[o])return i.prototype[o].apply(this,g)};try{f=c.apply(this,h)}catch(g){throw this.inherited=d,g}return this.inherited=d,f}:e[o]}for(const o in t){const c=rs(t[o]);es(c)(a.prototype,o)}return Q(r)(a)}constructor(...e){if(this[qe]=null,this[Be]=!1,this.constructor===Pe)throw new Error("[accessor] cannot instantiate Accessor. This can be fixed by creating a subclass of Accessor");const t=new $t(this);Object.defineProperty(this,"__accessor__",{enumerable:!1,value:t}),e.length>0&&this.normalizeCtorArgs&&(t.ctorArgs=this.normalizeCtorArgs.apply(this,e))}postscript(e){const t=this.__accessor__,r=t.ctorArgs||e;t.initialize(),r&&(this.set(r),t.ctorArgs=null),t.constructed(),this.initialize(),this[Y]=!0}initialize(){}[rt](){this[m]=ht(this[m])}destroy(){var e;this.destroyed||(Vt(this),this.__accessor__.destroy(),(e=St())==null||e.onInstanceDestroy(this))}[Symbol.dispose](){this.destroy()}get constructed(){return this.__accessor__&&this.__accessor__.initialized||!1}get initialized(){return this[Y]}get destroyed(){var e;return((e=this.__accessor__)==null?void 0:e.lifecycle)===p.DESTROYED||!1}commitProperty(e){O(this,e)}get(e){return dt(ee.getLogger(this),"`Accessor.get` is deprecated in favor of using optional chaining",{version:"4.28",see:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining"}),O(this,e)}hasOwnProperty(e){return this.__accessor__?this.__accessor__.has(e):Object.prototype.hasOwnProperty.call(this,e)}keys(){return this.__accessor__?this.__accessor__.keys():[]}set(e,t){return R(this,e,t),this}watch(e,t,r){return Zt(this,e,t,r)}addHandles(e,t){if(this.destroyed){const n=Array.isArray(e)?e:[e];for(const i of n)i.remove();return}let r=this[m];r==null&&(r=this[m]=new pt),r.add(e,t)}removeHandles(e){const t=this[m];t!=null&&t.remove(e)}removeAllHandles(){const e=this[m];e!=null&&e.removeAll()}hasHandles(e){const t=this[m];return t!=null&&t.has(e)}_override(e,t){t===void 0?this.__accessor__.clearOverride(e):this.__accessor__.override(e,t)}_clearOverride(e){return this.__accessor__.clearOverride(e)}_overrideIfSome(e,t){t==null?this.__accessor__.clearOverride(e):this.__accessor__.override(e,t)}_isOverridden(e){return this.__accessor__.isOverridden(e)}notifyChange(e){this.__accessor__.notifyChange(e)}_get(e){return this.__accessor__.internalGet(e)}_set(e,t){return this.__accessor__.internalSet(e,t),this}};qe=m,Be=Y;let is=class Fe{constructor(){this._values=new Map,this.multipleOriginsSupported=!1}clone(e){const t=new Fe;return this._values.forEach((r,n)=>{e&&e.has(n)||t.set(n,we(r.value),r.origin)}),t}get(e,t){t=this._normalizeOrigin(t);const r=this._values.get(e);return t==null||(r==null?void 0:r.origin)===t?r==null?void 0:r.value:void 0}originOf(e){var t;return((t=this._values.get(e))==null?void 0:t.origin)??l.USER}keys(e){e=this._normalizeOrigin(e);const t=[...this._values.keys()];return e==null?t:t.filter(r=>{var n;return((n=this._values.get(r))==null?void 0:n.origin)===e})}set(e,t,r){if((r=this._normalizeOrigin(r))===l.DEFAULTS){const n=this._values.get(e);if((n==null?void 0:n.origin)!=null&&n.origin>r)return}this._values.set(e,new os(t,r))}delete(e,t){var r;(t=this._normalizeOrigin(t))!=null&&((r=this._values.get(e))==null?void 0:r.origin)!==t||this._values.delete(e)}has(e,t){var r;return(t=this._normalizeOrigin(t))!=null?((r=this._values.get(e))==null?void 0:r.origin)===t:this._values.has(e)}forEach(e){this._values.forEach(({value:t},r)=>e(t,r))}_normalizeOrigin(e){if(e!=null)return e===l.DEFAULTS?e:l.USER}};class os{constructor(e,t){this.value=e,this.origin=t}}function as(s,e,t){e.keys().forEach(n=>{t.set(n,e.get(n),l.DEFAULTS)});const r=s.metadata;Object.keys(r).forEach(n=>{s.internalGet(n)&&t.set(n,s.internalGet(n),l.DEFAULTS)})}function cs(s,e,t){if(!(s!=null&&s.read)||s.read.enabled===!1||!s.read.source)return!1;const r=s.read.source;if(typeof r=="string"){if(r===e||r.includes(".")&&r.indexOf(e)===0&&ae(r,t))return!0}else for(const n of r)if(n===e||n.includes(".")&&n.indexOf(e)===0&&ae(n,t))return!0;return!1}function ls(s){return s&&(!s.read||s.read.enabled!==!1&&!s.read.source)}function us(s,e,t,r,n){let i=G(e[t],n);ls(i)&&(s[t]=!0);for(const a of Object.getOwnPropertyNames(e))i=G(e[a],n),cs(i,t,r)&&(s[a]=!0)}function hs(s,e,t,r){const n=t.metadata,i=nt(n[e],r),a=i==null?void 0:i.default;if(a===void 0)return;const o=typeof a=="function"?a.call(s,e,r):a;o!==void 0&&t.set(e,o)}const Le={origin:"service"};function fs(s,e,t=Le){if(!e||typeof e!="object")return;const r=T(s),n=r.metadata,i={};for(const a of Object.getOwnPropertyNames(e))us(i,n,a,e,t);r.setDefaultOrigin(t.origin);for(const a of Object.getOwnPropertyNames(i)){const o=G(n[a],t).read,c=o==null?void 0:o.source;let h;h=c&&typeof c=="string"?k(e,c):e[a],o!=null&&o.reader&&(h=o.reader.call(s,h,e,t)),h!==void 0&&r.set(a,h)}if(!t||!t.ignoreDefaults){r.setDefaultOrigin("defaults");for(const a of Object.getOwnPropertyNames(n))i[a]||hs(s,a,r,t)}r.setDefaultOrigin("user")}function Zs(s,e,t,r=Le){var i;const n={...r,messages:[]};t(n),(i=n.messages)==null||i.forEach(a=>{a.type!=="warning"||s.loaded?r!=null&&r.messages&&r.messages.push(a):s.loadWarnings.push(a)})}function ds(s,e,t,r,n){var a,o;const i={};return(o=(a=e.write)==null?void 0:a.writer)==null||o.call(s,r,i,t,n),i}function Me(s,e,t,r,n,i){if(!(r!=null&&r.write))return!1;const a=O(s,t);if(!n&&r.write.overridePolicy){const o=r.write.overridePolicy.call(s,a,t,i??void 0);o!==void 0&&(n=o)}if(n||(n=r.write),!n||n.enabled===!1||n.layerContainerTypes&&(i!=null&&i.layerContainerType)&&!n.layerContainerTypes.includes(i.layerContainerType))return!1;if((a===null&&!n.allowNull&&!n.writerEnsuresNonNull||a===void 0)&&n.isRequired){const o=new Oe("web-document-write:property-required",`Missing value for required property '${t}' on '${s.declaredClass}'`,{propertyName:t,target:s});return o&&(i!=null&&i.messages)?i.messages.push(o):o&&!i&&ee.getLogger("esri.core.accessorSupport.write").error(o.name,o.message),!1}return!(a===void 0||a===null&&!n.allowNull&&!n.writerEnsuresNonNull||!n.alwaysWriteDefaults&&(!e.store.multipleOriginsSupported||e.store.originOf(t)===l.DEFAULTS)&&ps(s,t,i,r,a)||!n.ignoreOrigin&&(i!=null&&i.origin)&&e.store.multipleOriginsSupported&&e.store.originOf(t)<Se(i.origin))}function ps(s,e,t,r,n){const i=r.default;if(i===void 0)return!1;if(r.defaultEquals!=null)return r.defaultEquals(n);if(typeof i=="function"){if(Array.isArray(n)){const a=i.call(s,e,t??void 0);return ot(a,n)}return!1}return i===n}function Qs(s,e,t,r){const n=T(s),i=n.metadata,a=ve(i[e],r);return!!a&&Me(s,n,e,a,t,r)}function gs(s,e,t){var i,a;if(s&&typeof s.toJSON=="function"&&(!s.toJSON.isDefaultToJSON||!s.write))return F(e,s.toJSON(t));const r=T(s),n=r.metadata;for(const o in n){const c=ve(n[o],t);if(!Me(s,r,o,c,void 0,t))continue;const h=O(s,o),d=ds(s,c,c.write&&typeof c.write.target=="string"?c.write.target:o,h,t);Object.keys(d).length>0&&(e=F(e,d),(a=(i=t==null?void 0:t.resources)==null?void 0:i.pendingOperations)!=null&&a.length&&t.resources.pendingOperations.push(Promise.all(t.resources.pendingOperations).then(()=>F(e,d,()=>"replace-arrays"))),t!=null&&t.writtenProperties&&t.writtenProperties.push({target:s,propName:o,oldOrigin:yt(r.store.originOf(o)),newOrigin:t.origin}))}return e}const _s=s=>{let e=class extends s{constructor(...t){super(...t);const r=T(this),n=r.store,i=new is;r.store=i,as(r,n,i)}read(t,r){fs(this,t,r)}write(t,r){return gs(this,t??{},r)}toJSON(t){return this.write({},t)}static fromJSON(t,r){return ms.call(this,t,r)}};return e=$e([Q("esri.core.JSONSupport")],e),e.prototype.toJSON.isDefaultToJSON=!0,e};function ms(s,e){if(!s)return null;if(s.declaredClass)throw new Error("JSON object is already hydrated");const t=new this;return t.read(s,e),t}function Xs(s){return s&&typeof s=="object"&&"toJSON"in s&&typeof s.toJSON=="function"}let de=class extends _s(ns){};de=$e([Q("esri.core.JSONSupport")],de);export{Ps as A,se as B,dt as C,Ft as D,_t as E,Qs as F,Fs as G,ke as H,Ms as I,Ls as J,Mt as K,Lt as L,Es as M,ss as N,Ks as O,ns as S,Js as U,As as a,oe as b,bs as c,Zs as d,pt as e,de as f,Xs as g,z as h,zs as i,Ts as j,l as k,as as l,fs as m,Se as n,O as o,x as p,gs as q,be as r,Tt as s,Te as t,_s as u,Rt as v,Ws as w,Ys as x,es as y,xs as z};