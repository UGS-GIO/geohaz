import"./geometry-31b45acd.js";import{f as a}from"./utils-3234cfff.js";import{d as n}from"./queryTopFeatures-ec89c75e.js";import{S as e}from"./TopFeaturesQuery-827caf55.js";import{M as x}from"./Extent-2b4578b8.js";import"./subclass-f7409b1b.js";import"./typedArrayUtil-2af43698.js";import"./Error-21d1d076.js";import"./promiseUtils-1d963c7c.js";import"./Polyline-013cde1f.js";import"./JSONSupport-acf2865c.js";import"./time-0817624a.js";import"./SpatialReference-428523ee.js";import"./jsonMap-5ba4a9c2.js";import"./request-a10d6950.js";import"./assets-6fd92e57.js";import"./aaBoundingRect-aef00841.js";import"./Axis-30be7e73.js";import"./mathUtils-19b6edfc.js";import"./typeUtils-3056a943.js";import"./jsonUtils-2c7f966c.js";import"./normalizeUtils-059b11cb.js";import"./normalizeUtilsCommon-c4e9ddb1.js";import"./utils-ed91a700.js";import"./urlUtils-6a004888.js";import"./queryZScale-b694be92.js";import"./zscale-d7e12601.js";import"./TimeExtent-579f0e32.js";import"./timeUtils-24502426.js";import"./date-7940da18.js";import"./locale-bde6d0f6.js";import"./datetime-7e00d9ef.js";import"./cast-e7a2f9aa.js";async function P(m,r,i){const p=a(m),o=await n(p,e.from(r),{...i}),t=o.data.extent;return!t||isNaN(t.xmin)||isNaN(t.ymin)||isNaN(t.xmax)||isNaN(t.ymax)?{count:o.data.count,extent:null}:{count:o.data.count,extent:x.fromJSON(t)}}export{P as executeForTopExtents};