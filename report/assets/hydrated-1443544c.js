import{x as s,M as c}from"./Extent-2b4578b8.js";import{j as m,m as p,u as h}from"./Polyline-013cde1f.js";import"./subclass-f7409b1b.js";import"./typedArrayUtil-2af43698.js";import"./Error-21d1d076.js";import"./promiseUtils-1d963c7c.js";import"./JSONSupport-acf2865c.js";import"./time-0817624a.js";import"./SpatialReference-428523ee.js";import"./jsonMap-5ba4a9c2.js";import"./request-a10d6950.js";import"./assets-6fd92e57.js";import"./cast-e7a2f9aa.js";import"./aaBoundingRect-aef00841.js";import"./Axis-30be7e73.js";import"./mathUtils-19b6edfc.js";const j={convertToGEGeometry:x,exportPoint:g,exportPolygon:u,exportPolyline:f,exportMultipoint:l,exportExtent:M};function x(t,e){if(e==null)return null;let o="cache"in e?e.cache._geVersion:void 0;return o==null&&(o=t.convertJSONToGeometry(e),"cache"in e&&(e.cache._geVersion=o)),o}function g(t,e,o){const i=t.hasZ(e),n=t.hasM(e),r=new s({x:t.getPointX(e),y:t.getPointY(e),spatialReference:o});return i&&(r.z=t.getPointZ(e)),n&&(r.m=t.getPointM(e)),r.cache._geVersion=e,r}function u(t,e,o){const i=new m({rings:t.exportPaths(e),hasZ:t.hasZ(e),hasM:t.hasM(e),spatialReference:o});return i.cache._geVersion=e,i}function f(t,e,o){const i=new p({paths:t.exportPaths(e),hasZ:t.hasZ(e),hasM:t.hasM(e),spatialReference:o});return i.cache._geVersion=e,i}function l(t,e,o){const i=new h({hasZ:t.hasZ(e),hasM:t.hasM(e),points:t.exportPoints(e),spatialReference:o});return i.cache._geVersion=e,i}function M(t,e,o){const i=t.hasZ(e),n=t.hasM(e),r=new c({xmin:t.getXMin(e),ymin:t.getYMin(e),xmax:t.getXMax(e),ymax:t.getYMax(e),spatialReference:o});if(i){const a=t.getZExtent(e);r.zmin=a.vmin,r.zmax=a.vmax}if(n){const a=t.getMExtent(e);r.mmin=a.vmin,r.mmax=a.vmax}return r.cache._geVersion=e,r}export{j as hydratedAdapter};