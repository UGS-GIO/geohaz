import{b as d,c as I}from"./Error-21d1d076.js";import{b as w,E as k,U as E}from"./request-a10d6950.js";import{P as x}from"./PopupTemplate-18f22683.js";import{f as v}from"./SpatialReference-428523ee.js";import{i as P,C as h,o as g,B as $}from"./aaBoundingBox-7242ce3e.js";import{e as S}from"./Polyline-013cde1f.js";import{t as O}from"./jsonUtils-7ee1282d.js";import{d as F}from"./FeatureSet-32e85c3a.js";const M={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function q(s){var u;const r=s.folders||[],e=r.slice(),o=new Map,a=new Map,f=new Map,i=new Map,m=new Map,l={esriGeometryPoint:a,esriGeometryPolyline:f,esriGeometryPolygon:i};(((u=s.featureCollection)==null?void 0:u.layers)||[]).forEach(t=>{const p=d(t);p.featureSet.features=[];const y=t.featureSet.geometryType;o.set(y,p);const c=t.layerDefinition.objectIdField;y==="esriGeometryPoint"?G(a,c,t.featureSet.features):y==="esriGeometryPolyline"?G(f,c,t.featureSet.features):y==="esriGeometryPolygon"&&G(i,c,t.featureSet.features)}),s.groundOverlays&&s.groundOverlays.forEach(t=>{m.set(t.id,t)}),r.forEach(t=>{t.networkLinkIds.forEach(p=>{const y=C(p,t.id,s.networkLinks);y&&e.push(y)})}),e.forEach(t=>{var p;if(t.featureInfos){t.points=d(o.get("esriGeometryPoint")),t.polylines=d(o.get("esriGeometryPolyline")),t.polygons=d(o.get("esriGeometryPolygon")),t.mapImages=[];for(const y of t.featureInfos)switch(y.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const c=l[y.type].get(y.id);c&&((p=t[M[y.type]])==null||p.featureSet.features.push(c));break}case"GroundOverlay":{const c=m.get(y.id);c&&t.mapImages.push(c);break}}t.fullExtent=b([t])}});const n=b(e);return{folders:r,sublayers:e,extent:n}}function A(s,r,e,o){var i;const a=(i=w)==null?void 0:i.findCredential(s);s=k(s,{token:a==null?void 0:a.token});const f=I.kmlServiceUrl;return E(f,{query:{url:s,model:"simple",folders:"",refresh:e!==0||void 0,outSR:JSON.stringify(r)},responseType:"json",signal:o})}function B(s,r,e=null,o=[]){const a=[],f={},i=r.sublayers,m=new Set(r.folders.map(l=>l.id));return i.forEach(l=>{var u;const n=new s;if(e?n.read(l,e):n.read(l),o.length&&m.has(n.id)&&(n.visible=o.includes(n.id)),f[l.id]=n,l.parentFolderId!=null&&l.parentFolderId!==-1){const t=f[l.parentFolderId];t.sublayers||(t.sublayers=[]),(u=t.sublayers)==null||u.unshift(n)}else a.unshift(n)}),a}function G(s,r,e){e.forEach(o=>{s.set(o.attributes[r],o)})}function j(s,r){let e;return r.some(o=>o.id===s&&(e=o,!0)),e}function C(s,r,e){const o=j(s,e);return o&&(o.parentFolderId=r,o.networkLink=o),o}async function W(s){const r=F.fromJSON(s.featureSet).features,e=s.layerDefinition,o=O(e.drawingInfo.renderer),a=x.fromJSON(s.popupInfo),f=[];for(const i of r){const m=await o.getSymbolAsync(i);i.symbol=m,i.popupTemplate=a,i.visible=!0,f.push(i)}return f}function b(s){var o,a,f,i,m,l;const r=P(h),e=P(h);for(const n of s){if((a=(o=n.polygons)==null?void 0:o.featureSet)!=null&&a.features)for(const u of n.polygons.featureSet.features)S(r,u.geometry),g(e,r);if((i=(f=n.polylines)==null?void 0:f.featureSet)!=null&&i.features)for(const u of n.polylines.featureSet.features)S(r,u.geometry),g(e,r);if((l=(m=n.points)==null?void 0:m.featureSet)!=null&&l.features)for(const u of n.points.featureSet.features)S(r,u.geometry),g(e,r);if(n.mapImages)for(const u of n.mapImages)S(r,u.extent),g(e,r)}return $(e,h)?void 0:{xmin:e[0],ymin:e[1],zmin:e[2],xmax:e[3],ymax:e[4],zmax:e[5],spatialReference:v.WGS84}}export{B as S,W as b,q as d,A as g,b as j};