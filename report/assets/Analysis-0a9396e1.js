import{e as s,c as n}from"./subclass-f7409b1b.js";import{u as o,y as i,S as a}from"./JSONSupport-acf2865c.js";import{q as l}from"./typedArrayUtil-2af43698.js";import{i as p}from"./Clonable-b71fa929.js";import{s as c}from"./Identifiable-1430bdc2.js";import"./Error-21d1d076.js";let y=0,t=class extends o(p(c(a))){constructor(r){super(r),this.id=`${Date.now().toString(16)}-analysis-${y++}`,this.title=null}get parent(){return this._get("parent")}set parent(r){const e=this.parent;if(e!=null)switch(e.type){case"line-of-sight":case"dimension":e.releaseAnalysis(this);break;case"2d":case"3d":e.analyses.includes(this)&&e.analyses.remove(this)}this._set("parent",r)}get isEditable(){return this.requiredPropertiesForEditing.every(l)}};s([i({type:String,constructOnly:!0,clonable:!1})],t.prototype,"id",void 0),s([i({type:String})],t.prototype,"title",void 0),s([i({clonable:!1,value:null})],t.prototype,"parent",null),s([i({readOnly:!0})],t.prototype,"isEditable",null),t=s([n("esri.analysis.Analysis")],t);const b=t;export{b as c};