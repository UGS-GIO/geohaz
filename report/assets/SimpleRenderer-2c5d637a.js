import{e as i,c as a}from"./subclass-f7409b1b.js";import{b as n}from"./Error-21d1d076.js";import{y as r}from"./JSONSupport-acf2865c.js";import"./typedArrayUtil-2af43698.js";import{o as m}from"./enumeration-4a4e87c4.js";import{v as c,n as p,p as y}from"./UniqueValueRenderer-983c9a3e.js";var l;let s=l=class extends c(y){constructor(e){super(e),this.description=null,this.label=null,this.symbol=null,this.type="simple"}async collectRequiredFields(e,t){await Promise.all([this.collectSymbolFields(e,t),this.collectVVRequiredFields(e,t)])}async collectSymbolFields(e,t){await Promise.all(this.getSymbols().map(o=>o.collectRequiredFields(e,t)))}getSymbol(e,t){return this.symbol}async getSymbolAsync(e,t){return this.symbol}getSymbols(){return this.symbol?[this.symbol]:[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce((e,t)=>e+t.getAttributeHash(),"")}getMeshHash(){return this.getSymbols().reduce((e,t)=>e+JSON.stringify(t),"")}get arcadeRequired(){return this.arcadeRequiredForVisualVariables}clone(){return new l({description:this.description,label:this.label,symbol:this.symbol&&this.symbol.clone(),visualVariables:n(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}};i([r({type:String,json:{write:!0}})],s.prototype,"description",void 0),i([r({type:String,json:{write:!0}})],s.prototype,"label",void 0),i([r(p)],s.prototype,"symbol",void 0),i([m({simple:"simple"})],s.prototype,"type",void 0),s=l=i([a("esri.renderers.SimpleRenderer")],s);const v=s;export{v as m};
