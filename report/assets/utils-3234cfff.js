import{b as s}from"./Error-21d1d076.js";import{I as u}from"./request-a10d6950.js";function l(i,o){return o?{...o,query:{...i??{},...o.query}}:{query:i}}function m(i){return typeof i=="string"?u(i):s(i)}function c(i,o,f){const r={};for(const t in i){if(t==="declaredClass")continue;const n=i[t];if(n!=null&&typeof n!="function")if(Array.isArray(n))r[t]=n.map(e=>c({item:e},o,f).item);else if(typeof n=="object")if(n.toJSON){const e=n.toJSON(f==null?void 0:f[t]);r[t]=o?e:JSON.stringify(e)}else r[t]=o?n:JSON.stringify(n);else r[t]=n}return r}export{m as f,l as n,c as s};