import"./SpatialReference-428523ee.js";import"./ElevationInfo-e9f55e40.js";function r(e){return e?u:f}function t(e,o){return o!=null&&o.mode?o.mode:r(e).mode}function s(e,o){return t(e!=null&&e.hasZ,o)}function p(e,o,n){return n&&n.mode!==o?`${e} only support ${o} elevation mode`:null}function d(e,o,n){return(n==null?void 0:n.mode)===o?`${e} do not support ${o} elevation mode`:null}function m(e,o){return(o==null?void 0:o.featureExpressionInfo)!=null&&o.featureExpressionInfo.expression!=="0"?`${e} do not support featureExpressionInfo`:null}function a(e,o){o&&e.warn(".elevationInfo=",o)}const u={mode:"absolute-height",offset:0},f={mode:"on-the-ground",offset:null};export{a as I,m as Z,s as i,p as x,d as y};
