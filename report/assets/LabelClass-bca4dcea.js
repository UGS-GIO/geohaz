import{e as n,c as d}from"./subclass-f7409b1b.js";import{M as E,F as A}from"./symbols-b3e075ad.js";import{s as j}from"./jsonMap-5ba4a9c2.js";import{y as l,f as x}from"./JSONSupport-acf2865c.js";import{b as f}from"./Error-21d1d076.js";import{o as C}from"./screenUtils-7afeb41c.js";import"./typedArrayUtil-2af43698.js";import{o as S}from"./Extent-2b4578b8.js";import{r as c}from"./SpatialReference-428523ee.js";import{w as y,a as I,u as B,_ as N,x as O,f as M,g as V}from"./defaults-473b7c21.js";import{b as $}from"./layerUtils-c805b05c.js";import{i as h}from"./styleUtils-d9ef5ac0.js";var m;let a=m=class extends x{constructor(){super(...arguments),this.expression=null,this.title=null,this.value=null}readExpression(e,r){return r.value?y(r.value):e}writeExpression(e,r,t){this.value!=null&&(e=y(this.value)),e!=null&&(r[t]=e)}clone(){return new m({expression:this.expression,title:this.title,value:this.value})}};n([l({type:String,json:{write:{writerEnsuresNonNull:!0}}})],a.prototype,"expression",void 0),n([S("expression",["expression","value"])],a.prototype,"readExpression",null),n([c("expression")],a.prototype,"writeExpression",null),n([l({type:String,json:{write:!0,origins:{"web-scene":{write:!1}}}})],a.prototype,"title",void 0),n([l({json:{read:!1,write:!1}})],a.prototype,"value",void 0),a=m=n([d("esri.layers.support.LabelExpressionInfo")],a);const P=a;var v;const u=new j({esriServerPointLabelPlacementAboveCenter:"above-center",esriServerPointLabelPlacementAboveLeft:"above-left",esriServerPointLabelPlacementAboveRight:"above-right",esriServerPointLabelPlacementBelowCenter:"below-center",esriServerPointLabelPlacementBelowLeft:"below-left",esriServerPointLabelPlacementBelowRight:"below-right",esriServerPointLabelPlacementCenterCenter:"center-center",esriServerPointLabelPlacementCenterLeft:"center-left",esriServerPointLabelPlacementCenterRight:"center-right",esriServerLinePlacementAboveAfter:"above-after",esriServerLinePlacementAboveAlong:"above-along",esriServerLinePlacementAboveBefore:"above-before",esriServerLinePlacementAboveStart:"above-start",esriServerLinePlacementAboveEnd:"above-end",esriServerLinePlacementBelowAfter:"below-after",esriServerLinePlacementBelowAlong:"below-along",esriServerLinePlacementBelowBefore:"below-before",esriServerLinePlacementBelowStart:"below-start",esriServerLinePlacementBelowEnd:"below-end",esriServerLinePlacementCenterAfter:"center-after",esriServerLinePlacementCenterAlong:"center-along",esriServerLinePlacementCenterBefore:"center-before",esriServerLinePlacementCenterStart:"center-start",esriServerLinePlacementCenterEnd:"center-end",esriServerPolygonPlacementAlwaysHorizontal:"always-horizontal"},{ignoreUnknown:!0});function b(e,r,t){return{enabled:!$(t==null?void 0:t.layer)}}function g(e){var r;return!e||e.origin!=="service"&&((r=e.layer)==null?void 0:r.type)!=="map-image"}function D(e){return(e==null?void 0:e.type)==="map-image"}function L(e){var r,t;return!!D(e)&&!!((t=(r=e.capabilities)==null?void 0:r.exportMap)!=null&&t.supportsArcadeExpressionForLabeling)}function R(e){return g(e)||L(e==null?void 0:e.layer)}let o=v=class extends x{static evaluateWhere(e,r){const t=(i,p,s)=>{switch(p){case"=":return i==s;case"<>":return i!=s;case">":return i>s;case">=":return i>=s;case"<":return i<s;case"<=":return i<=s}return!1};try{if(e==null)return!0;const i=e.split(" ");if(i.length===3)return t(r[i[0]],i[1],i[2]);if(i.length===7){const p=t(r[i[0]],i[1],i[2]),s=i[3],w=t(r[i[4]],i[5],i[6]);switch(s){case"AND":return p&&w;case"OR":return p||w}}return!1}catch{console.log("Error.: can't parse = "+e)}}constructor(e){super(e),this.type="label",this.name=null,this.allowOverrun=!1,this.deconflictionStrategy="static",this.labelExpression=null,this.labelExpressionInfo=null,this.labelPlacement=null,this.labelPosition="curved",this.maxScale=0,this.minScale=0,this.repeatLabel=!0,this.repeatLabelDistance=null,this.symbol=I,this.useCodedValues=void 0,this.where=null}readLabelExpression(e,r){const t=r.labelExpressionInfo;if(!t||!t.value&&!t.expression)return e}writeLabelExpression(e,r,t){if(this.labelExpressionInfo){if(this.labelExpressionInfo.value!=null)e=B(this.labelExpressionInfo.value);else if(this.labelExpressionInfo.expression!=null){const i=N(this.labelExpressionInfo.expression);i&&(e="["+i+"]")}}e!=null&&(r[t]=e)}writeLabelExpressionInfo(e,r,t,i){if(e==null&&this.labelExpression!=null&&g(i))e=new P({expression:this.getLabelExpressionArcade()});else if(!e)return;const p=e.toJSON(i);p.expression&&(r[t]=p)}writeMaxScale(e,r){(e||this.minScale)&&(r.maxScale=e)}writeMinScale(e,r){(e||this.maxScale)&&(r.minScale=e)}getLabelExpression(){return O(this)}getLabelExpressionArcade(){return M(this)}getLabelExpressionSingleField(){return V(this)}hash(){return JSON.stringify(this)}clone(){return new v({allowOverrun:this.allowOverrun,deconflictionStrategy:this.deconflictionStrategy,labelExpression:this.labelExpression,labelExpressionInfo:f(this.labelExpressionInfo),labelPosition:this.labelPosition,labelPlacement:this.labelPlacement,maxScale:this.maxScale,minScale:this.minScale,name:this.name,repeatLabel:this.repeatLabel,repeatLabelDistance:this.repeatLabelDistance,symbol:f(this.symbol),where:this.where,useCodedValues:this.useCodedValues})}};n([l({type:String,json:{write:!0}})],o.prototype,"name",void 0),n([l({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1},"portal-item":{default:!1,write:{overridePolicy:b}}}}})],o.prototype,"allowOverrun",void 0),n([l({type:String,json:{write:!0,default:"static",origins:{"web-scene":{write:!1},"portal-item":{default:"static",write:{overridePolicy:b}}}}})],o.prototype,"deconflictionStrategy",void 0),n([l({type:String,json:{write:{overridePolicy(e,r,t){return this.labelExpressionInfo&&(t==null?void 0:t.origin)==="service"&&L(t.layer)?{enabled:!1}:{allowNull:!0}}}}})],o.prototype,"labelExpression",void 0),n([S("labelExpression")],o.prototype,"readLabelExpression",null),n([c("labelExpression")],o.prototype,"writeLabelExpression",null),n([l({type:P,json:{write:{overridePolicy:(e,r,t)=>R(t)?{allowNull:!0}:{enabled:!1}}}})],o.prototype,"labelExpressionInfo",void 0),n([c("labelExpressionInfo")],o.prototype,"writeLabelExpressionInfo",null),n([l({type:u.apiValues,json:{type:u.jsonValues,read:u.read,write:u.write}})],o.prototype,"labelPlacement",void 0),n([l({type:["curved","parallel"],json:{write:!0,origins:{"web-map":{write:!1},"web-scene":{write:!1},"portal-item":{write:!1}}}})],o.prototype,"labelPosition",void 0),n([l({type:Number})],o.prototype,"maxScale",void 0),n([c("maxScale")],o.prototype,"writeMaxScale",null),n([l({type:Number})],o.prototype,"minScale",void 0),n([c("minScale")],o.prototype,"writeMinScale",null),n([l({type:Boolean,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:b}}}}})],o.prototype,"repeatLabel",void 0),n([l({type:Number,cast:C,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:b}}}}})],o.prototype,"repeatLabelDistance",void 0),n([l({types:E,json:{origins:{"web-scene":{types:A,write:h,default:null}},write:h,default:null}})],o.prototype,"symbol",void 0),n([l({type:Boolean,json:{write:!0}})],o.prototype,"useCodedValues",void 0),n([l({type:String,json:{write:!0}})],o.prototype,"where",void 0),o=v=n([d("esri.layers.support.LabelClass")],o);const T=o;export{T as C};
