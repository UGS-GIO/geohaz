import{e as r,c as m}from"./subclass-f7409b1b.js";import{i as a}from"./Clonable-b71fa929.js";import{y as s,f as l}from"./JSONSupport-acf2865c.js";import"./typedArrayUtil-2af43698.js";import"./Error-21d1d076.js";import{o as d}from"./Extent-2b4578b8.js";import{r as c}from"./SpatialReference-428523ee.js";import{i as f}from"./Field-be948aef.js";import{p as y}from"./FeatureTemplate-231bfadc.js";let o=class extends a(l){constructor(t){super(t),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(t){const e={};for(const i of Object.keys(t))e[i]=f(t[i]);return e}writeDomains(t,e){var p;const i={};for(const n of Object.keys(t))t[n]&&(i[n]=(p=t[n])==null?void 0:p.toJSON());e.domains=i}};r([s({json:{write:!0}})],o.prototype,"id",void 0),r([s({json:{write:!0}})],o.prototype,"name",void 0),r([s({json:{write:!0}})],o.prototype,"domains",void 0),r([d("domains")],o.prototype,"readDomains",null),r([c("domains")],o.prototype,"writeDomains",null),r([s({type:[y],json:{write:!0}})],o.prototype,"templates",void 0),o=r([m("esri.layers.support.FeatureType")],o);const x=o;export{x as n};