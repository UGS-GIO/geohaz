import{c as s,s as e,a}from"./Error-21d1d076.js";import{V as o}from"./request-a10d6950.js";function i(t){if(!s.assetsPath)throw e.getLogger("esri.assets").errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new a("assets:path-not-set","config.assetsPath is not set");return o(s.assetsPath,t)}export{i as n};