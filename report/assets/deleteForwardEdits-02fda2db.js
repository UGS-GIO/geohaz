import{U as d}from"./request-a10d6950.js";import{a as f}from"./Error-21d1d076.js";import{f as n,n as c,s as u}from"./utils-3234cfff.js";import"./typedArrayUtil-2af43698.js";import"./JSONSupport-acf2865c.js";import"./subclass-f7409b1b.js";import"./promiseUtils-1d963c7c.js";import"./time-0817624a.js";async function F(o,s,r,i){if(!s)throw new f("post:missing-guid","guid for version is missing");const t=n(o),e=r.toJSON(),a=c(t.query,{query:u({...e,f:"json"}),...i,method:"post"});s.startsWith("{")&&(s=s.slice(1,-1));const m=`${t.path}/versions/${s}/deleteForwardEdits`,{data:p}=await d(m,a);return p.success}export{F as deleteForwardEdits};
