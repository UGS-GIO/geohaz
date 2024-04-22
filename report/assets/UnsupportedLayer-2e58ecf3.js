import{e,c as m}from"./subclass-f7409b1b.js";import{a as n}from"./Error-21d1d076.js";import{m as l}from"./MultiOriginJSONSupport-9bd581c6.js";import{v as d,y as p}from"./JSONSupport-acf2865c.js";import"./typedArrayUtil-2af43698.js";import{b as a}from"./Layer-668dff8a.js";import{j as u}from"./PortalLayer-f8b97b56.js";import"./promiseUtils-1d963c7c.js";import"./time-0817624a.js";import"./request-a10d6950.js";import"./geometry-31b45acd.js";import"./Extent-2b4578b8.js";import"./SpatialReference-428523ee.js";import"./jsonMap-5ba4a9c2.js";import"./assets-6fd92e57.js";import"./cast-e7a2f9aa.js";import"./Polyline-013cde1f.js";import"./aaBoundingRect-aef00841.js";import"./Axis-30be7e73.js";import"./mathUtils-19b6edfc.js";import"./typeUtils-3056a943.js";import"./Evented-b5127116.js";import"./Identifiable-1430bdc2.js";import"./Loadable-8a1ead8b.js";import"./Promise-ec74e14b.js";import"./layerUtils-c805b05c.js";import"./Portal-cb507469.js";import"./locale-bde6d0f6.js";import"./PortalItem-9d3416e3.js";import"./persistableUrlUtils-ca6bb38d.js";import"./portalItemUtils-8aceb0b8.js";import"./projection-41da473c.js";import"./SimpleObservable-ae589a25.js";import"./projectBuffer-af7b4ad9.js";import"./zscale-d7e12601.js";let t=class extends u(l(a)){constructor(r){super(r),this.resourceInfo=null,this.persistenceEnabled=!0,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise((r,i)=>{d(()=>{const o=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let s="Unsupported layer type";o&&(s+=" "+o),i(new n("layer:unsupported-layer-type",s,{layerType:o}))})}))}read(r,i){const o={resourceInfo:r};r.id!=null&&(o.id=r.id),r.title!=null&&(o.title=r.title),super.read(o,i)}write(r,i){return Object.assign(r||{},this.resourceInfo,{id:this.id})}};e([p({readOnly:!0})],t.prototype,"resourceInfo",void 0),e([p({type:["show","hide"]})],t.prototype,"listMode",void 0),e([p({type:Boolean,readOnly:!1})],t.prototype,"persistenceEnabled",void 0),e([p({json:{read:!1},readOnly:!0,value:"unsupported"})],t.prototype,"type",void 0),t=e([m("esri.layers.UnsupportedLayer")],t);const V=t;export{V as default};