import{n as v,x as r,M as e}from"./Extent-2b4578b8.js";import{m as i,j as o,u as t}from"./Polyline-013cde1f.js";function u(n){return n.xmin!==void 0&&n.ymin!==void 0&&n.xmax!==void 0&&n.ymax!==void 0}function m(n){return n.points!==void 0}function l(n){return n.x!==void 0&&n.y!==void 0}function s(n){return n.paths!==void 0}function f(n){return n.rings!==void 0}function d(n){return n==null?null:n instanceof v?n:l(n)?r.fromJSON(n):s(n)?i.fromJSON(n):f(n)?o.fromJSON(n):m(n)?t.fromJSON(n):u(n)?e.fromJSON(n):null}function x(n){return n?l(n)?"esriGeometryPoint":s(n)?"esriGeometryPolyline":f(n)?"esriGeometryPolygon":u(n)?"esriGeometryEnvelope":m(n)?"esriGeometryMultipoint":null:null}const G={esriGeometryPoint:r,esriGeometryPolyline:i,esriGeometryPolygon:o,esriGeometryEnvelope:e,esriGeometryMultipoint:t};function a(n){return n&&G[n]||null}export{a as G,f,m as l,u as m,x as p,s,l as u,d as y};