import{e as t,c as m}from"./subclass-f7409b1b.js";import{y as i}from"./JSONSupport-acf2865c.js";import"./typedArrayUtil-2af43698.js";import"./Error-21d1d076.js";const p=a=>{let e=class extends a{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get effectiveScaleRange(){const c={minScale:this.minScale,maxScale:this.maxScale},n=this.parent;n&&"effectiveScaleRange"in n&&S(c,n.effectiveScaleRange);const l=this._get("effectiveScaleRange");return l&&l.minScale===c.minScale&&l.maxScale===c.maxScale?l:c}};return t([i({type:Number,nonNullable:!0,json:{write:!0}})],e.prototype,"minScale",void 0),t([i({type:Number,nonNullable:!0,json:{write:!0}})],e.prototype,"maxScale",void 0),t([i({readOnly:!0})],e.prototype,"effectiveScaleRange",null),e=t([m("esri.layers.mixins.ScaleRangeLayer")],e),e};function S(a,e){return a.minScale=a.minScale>0?e.minScale>0?Math.min(a.minScale,e.minScale):a.minScale:e.minScale,a.maxScale=a.maxScale>0?e.maxScale>0?Math.max(a.maxScale,e.maxScale):a.maxScale:e.maxScale,a}export{p as t};
