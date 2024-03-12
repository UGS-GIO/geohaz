import{o as T,u as $,e as P,c as j,i as A,b as M,f as N,s as C,m as D,a as L}from"./typedArrayUtil-2af43698.js";function W(r,e){let t;if(e)for(t in r)r.hasOwnProperty(t)&&(r[t]===void 0?delete r[t]:r[t]instanceof Object&&W(r[t],!0));else for(t in r)r.hasOwnProperty(t)&&r[t]===void 0&&delete r[t];return r}function a(r){if(!r||typeof r!="object"||typeof r=="function")return r;const e=_(r);if(e!=null)return e;if(b(r))return r.clone();if(w(r))return r.map(a);if(O(r))return r.clone();const t={};for(const n of Object.getOwnPropertyNames(r))t[n]=a(r[n]);return t}function h(r){if(!r||typeof r!="object"||typeof r=="function"||"HTMLElement"in globalThis&&r instanceof HTMLElement)return r;const e=_(r);if(e!=null)return e;if(w(r)){let t=!0;const n=r.map(o=>{const s=h(o);return o!=null&&s==null&&(t=!1),s});return t?n:null}if(b(r))return r.clone();if(r instanceof File||r instanceof Blob)return r;if(!O(r)){const t=new(Object.getPrototypeOf(r)).constructor;for(const n of Object.getOwnPropertyNames(r)){const o=r[n],s=h(o);if(o!=null&&s==null)return null;t[n]=s}return t}return null}function b(r){return typeof r.clone=="function"}function w(r){return typeof r.map=="function"&&typeof r.forEach=="function"}function O(r){return typeof r.notifyChange=="function"&&typeof r.watch=="function"}function p(r){if(Object.prototype.toString.call(r)!=="[object Object]")return!1;const e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}function _(r){if(T(r)||$(r)||P(r)||j(r)||A(r)||M(r)||N(r)||C(r)||D(r))return r.slice();if(r instanceof Date)return new Date(r.getTime());if(r instanceof ArrayBuffer)return r.slice(0,r.byteLength);if(r instanceof Map){const e=new Map;for(const[t,n]of r)e.set(t,a(n));return e}if(r instanceof Set){const e=new Set;for(const t of r)e.add(a(t));return e}return null}function F(r,e){return r===e||typeof r=="number"&&isNaN(r)&&typeof e=="number"&&isNaN(e)||typeof(r==null?void 0:r.getTime)=="function"&&typeof(e==null?void 0:e.getTime)=="function"&&r.getTime()===e.getTime()||!1}function G(r,e){return r===e||(r==null||typeof r=="string"?r===e:typeof r=="number"?r===e||typeof e=="number"&&isNaN(r)&&isNaN(e):r instanceof Date?e instanceof Date&&r.getTime()===e.getTime():Array.isArray(r)?Array.isArray(e)&&L(r,e):r instanceof Set?e instanceof Set&&U(r,e):r instanceof Map?e instanceof Map&&E(r,e):!!p(r)&&p(e)&&x(r,e))}function x(r,e){if(r===null||e===null)return!1;const t=Object.keys(r);if(e===null||Object.keys(e).length!==t.length)return!1;for(const n of t)if(r[n]!==e[n]||!Object.prototype.hasOwnProperty.call(e,n))return!1;return!0}function U(r,e){if(r.size!==e.size)return!1;for(const t of r)if(!e.has(t))return!1;return!0}function E(r,e){if(r.size!==e.size)return!1;for(const[t,n]of r){const o=e.get(t);if(o!==n||o===void 0&&!e.has(t))return!1}return!0}function J(r,e,t=!1){return v(r,e,t)}function k(r,e){if(e!=null)return e[r]||S(r.split("."),!1,e)}function H(r,e,t){const n=r.split("."),o=n.pop(),s=S(n,!0,t);s&&o&&(s[o]=e)}function S(r,e,t){let n=t;for(const o of r){if(n==null)return;if(!(o in n)){if(!e)return;n[o]={}}n=n[o]}return n}function v(r,e,t){return e?Object.keys(e).reduce((n,o)=>{let s=n[o],c=e[o];return s===c?n:s===void 0?(n[o]=a(c),n):(Array.isArray(c)||Array.isArray(n)?(s=s?Array.isArray(s)?n[o]=s.concat():n[o]=[s]:n[o]=[],c&&(Array.isArray(c)||(c=[c]),t?c.forEach(g=>{s.includes(g)||s.push(g)}):n[o]=c.concat())):c&&typeof c=="object"?n[o]=v(s,c,t):n.hasOwnProperty(o)&&!e.hasOwnProperty(o)||(n[o]=c),n)},r||{}):r}var d;const l={apiKey:void 0,applicationName:"",applicationUrl:(d=globalThis.location)==null?void 0:d.href,assetsPath:"",fontsUrl:"https://static.arcgis.com/fonts",geometryServiceUrl:"https://utility.arcgisonline.com/arcgis/rest/services/Geometry/GeometryServer",geoRSSServiceUrl:"https://utility.arcgis.com/sharing/rss",kmlServiceUrl:"https://utility.arcgis.com/sharing/kml",userPrivilegesApplied:!0,portalUrl:"https://www.arcgis.com",routeServiceUrl:"https://route-api.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",workers:{loaderConfig:{has:{},paths:{},map:{},packages:[]}},request:{crossOriginNoCorsDomains:null,httpsDomains:["arcgis.com","arcgisonline.com","esrikr.com","premiumservices.blackbridge.com","esripremium.accuweather.com","gbm.digitalglobe.com","firstlook.digitalglobe.com","msi.digitalglobe.com"],interceptors:[],maxUrlLength:2e3,priority:"high",proxyRules:[],proxyUrl:null,timeout:6e4,trustedServers:[],useIdentity:!0},log:{interceptors:[],level:null}};if(globalThis.esriConfig&&(J(l,globalThis.esriConfig,!0),delete l.has),!l.assetsPath){{const r="4.29";l.assetsPath=`https://js.arcgis.com/${r}/@arcgis/core/assets`}l.defaultAssetsPath=l.assetsPath}const R=/\{([^\}]+)\}/g;function m(r){return r??""}function q(r,e){return e?r.replaceAll(R,typeof e=="object"?(t,n)=>m(k(n,e)):(t,n)=>m(e(n))):r}function Q(r,e){return r.replaceAll(/([\.$?*|{}\(\)\[\]\\\/\+\-^])/g,t=>e&&e.includes(t)?t:`\\${t}`)}function z(r){let e=0;for(let t=0;t<r.length;t++)e=(e<<5)-e+r.charCodeAt(t),e|=0;return e}function V(r){return new DOMParser().parseFromString(r||"","text/html").body.innerText||""}function X(r,e){return new RegExp(`{${e}}`,"ig").test(r)}const y={info:0,warn:1,error:2,none:3};let u=class i{constructor(e){this.level=null,this._module="",this._parent=null,this.writer=null,this._loggedMessages={error:new Map,warn:new Map,info:new Map},e.level!=null&&(this.level=e.level),e.writer!=null&&(this.writer=e.writer),this._module=e.module,i._loggers.set(this.module,this);const t=this.module.lastIndexOf(".");t!==-1&&(this._parent=i.getLogger(this.module.slice(0,t)))}get module(){return this._module}get parent(){return this._parent}error(...e){this._log("error","always",...e)}warn(...e){this._log("warn","always",...e)}info(...e){this._log("info","always",...e)}errorOnce(...e){this._log("error","once",...e)}warnOnce(...e){this._log("warn","once",...e)}infoOnce(...e){this._log("info","once",...e)}errorOncePerTick(...e){this._log("error","oncePerTick",...e)}warnOncePerTick(...e){this._log("warn","oncePerTick",...e)}infoOncePerTick(...e){this._log("info","oncePerTick",...e)}get test(){const e=this;return{loggedMessages:e._loggedMessages,clearLoggedWarnings:()=>e._loggedMessages.warn.clear()}}static get test(){return{resetLoggers(e=new Map){const t=i._loggers;return i._loggers=e,t},set throttlingDisabled(e){i._throttlingDisabled=e}}}static getLogger(e){return e=typeof e!="string"?e.declaredClass:e,i._loggers.get(e)||new i({module:e})}_log(e,t,...n){if(this._matchLevel(e)){if(t!=="always"&&!i._throttlingDisabled){const o=this._argsToKey(n),s=this._loggedMessages[e].get(o);if(t==="once"&&s!=null||t==="oncePerTick"&&s&&s>=i._tickCounter)return;this._loggedMessages[e].set(o,i._tickCounter),i._scheduleTickCounterIncrement()}for(const o of l.log.interceptors)if(o(e,this.module,...n))return;this._inheritedWriter()(e,this.module,...n)}}_parentWithMember(e,t){let n=this;for(;n!=null;){const o=n[e];if(o!=null)return o;n=n.parent}return t}_inheritedWriter(){return this._parentWithMember("writer",this._consoleWriter)}_consoleWriter(e,t,...n){console[e](`[${t}]`,...n)}_matchLevel(e){const t=l.log.level||"warn";return y[this._parentWithMember("level",t)]<=y[e]}_argsToKey(...e){return z(JSON.stringify(e,(n,o)=>typeof o!="object"||Array.isArray(o)?o:"[Object]"))}static _scheduleTickCounterIncrement(){i._tickCounterScheduled||(i._tickCounterScheduled=!0,Promise.resolve().then(()=>{i._tickCounter++,i._tickCounterScheduled=!1}))}};u._loggers=new Map,u._tickCounter=0,u._tickCounterScheduled=!1,u._throttlingDisabled=!1;function I(r,e){return r.replaceAll(/\$\{([^\s\:\}]*)(?:\:([^\s\:\}]+))?\}/g,(t,n)=>n===""?"$":(k(n,e)??"").toString())}class K{constructor(e,t,n){this.name=e,this.details=n,this.message=(t&&I(t,n))??""}toString(){return"["+this.name+"]: "+this.message}}class f extends K{constructor(e,t,n){super(e,t,n)}toJSON(){if(this.details!=null)try{return{name:this.name,message:this.message,details:JSON.parse(JSON.stringify(this.details,(e,t)=>{if(t&&typeof t=="object"&&typeof t.toJSON=="function")return t;try{return a(t)}catch{return"[object]"}}))}}catch(e){throw u.getLogger("esri.core.Error").error(e),e}return{name:this.name,message:this.message,details:this.details}}static fromJSON(e){return new f(e.name,e.message,e.details)}}f.prototype.type="error";export{f as a,a as b,l as c,z as d,K as e,Q as f,G as h,X as i,F as j,W as l,J as n,H as o,h as p,q as r,u as s,k as t,V as u,b as y};
