import{e as d,c as A,t as b}from"./subclass-f7409b1b.js";import{k as e,S as O}from"./JSONSupport-acf2865c.js";import"./typedArrayUtil-2af43698.js";import{p as U}from"./Error-21d1d076.js";import{n as h}from"./promiseUtils-1d963c7c.js";const x=p=>{let l=class extends p{clone(){var S;const i=b(this);h(i,"unable to clone instance of non-accessor class");const m=i.metadata,a=i.store,u={},f=new Map;for(const o in m){const n=m[o],t=a==null?void 0:a.originOf(o),s=n.clonable;if(n.readOnly||s===!1||t!==e.USER&&t!==e.DEFAULTS&&t!==e.WEB_MAP&&t!==e.WEB_SCENE)continue;const r=this[o];let c=null;c=typeof s=="function"?s(r):s==="reference"?r:U(r),r!=null&&c==null||(t===e.DEFAULTS?f.set(o,c):u[o]=c)}const E=new(Object.getPrototypeOf(this)).constructor(u);if(f.size){const o=(S=b(E))==null?void 0:S.store;if(o)for(const[n,t]of f)o.set(n,t,e.DEFAULTS)}return E}};return l=d([A("esri.core.Clonable")],l),l};let $=class extends x(O){};$=d([A("esri.core.Clonable")],$);export{x as i,$ as l};
