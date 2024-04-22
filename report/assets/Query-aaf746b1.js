import{e as t,c as y,v as b}from"./subclass-f7409b1b.js";import{n as F}from"./geometry-31b45acd.js";import{c as P}from"./TimeExtent-579f0e32.js";import{s as h}from"./jsonMap-5ba4a9c2.js";import{y as e,f as v}from"./JSONSupport-acf2865c.js";import{b as m}from"./Error-21d1d076.js";import{s as T}from"./cast-e7a2f9aa.js";import{o as S}from"./enumeration-4a4e87c4.js";import{r as l,f as j}from"./SpatialReference-428523ee.js";import{y as C}from"./jsonUtils-2c7f966c.js";import{K as O}from"./DataLayerSource-62d0bfcf.js";import{i as M}from"./Clonable-b71fa929.js";import"./typedArrayUtil-2af43698.js";import{M as V,x as D}from"./Extent-2b4578b8.js";let n=class extends M(v){constructor(o){super(o),this.onFields=null,this.operator=null,this.searchTerm=null,this.searchType=null}};t([e({type:[String],json:{write:{enabled:!0,overridePolicy(){return{enabled:this.onFields!=null&&this.onFields.length>0}}}}})],n.prototype,"onFields",void 0),t([e({type:String,json:{write:!0}})],n.prototype,"operator",void 0),t([e({type:String,json:{write:!0}})],n.prototype,"searchTerm",void 0),t([e({type:String,json:{write:!0}})],n.prototype,"searchType",void 0),n=t([y("esri.rest.support.FullTextSearch")],n);const E=n;var f;const x=new h({upperLeft:"upper-left",lowerLeft:"lower-left"});let a=f=class extends v{constructor(r){super(r),this.extent=null,this.mode="view",this.originPosition="upper-left",this.tolerance=1}clone(){return new f(m({extent:this.extent,mode:this.mode,originPosition:this.originPosition,tolerance:this.tolerance}))}};t([e({type:V,json:{write:{overridePolicy(){return{enabled:this.mode==="view"}}}}})],a.prototype,"extent",void 0),t([e({type:["view","edit"],json:{write:!0}})],a.prototype,"mode",void 0),t([e({type:String,json:{read:x.read,write:x.write}})],a.prototype,"originPosition",void 0),t([e({type:Number,json:{write:{overridePolicy(){return{enabled:this.mode==="view"}}}}})],a.prototype,"tolerance",void 0),a=f=t([y("esri.rest.support.QuantizationParameters")],a);const _=a,B=new h({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"});var g;const R=new h({count:"count",sum:"sum",min:"min",max:"max",avg:"avg",stddev:"stddev",var:"var",exceedslimit:"exceedslimit",percentile_cont:"percentile-continuous",percentile_disc:"percentile-discrete",EnvelopeAggregate:"envelope-aggregate",CentroidAggregate:"centroid-aggregate",ConvexHullAggregate:"convex-hull-aggregate"});let s=g=class extends v{constructor(r){super(r),this.maxPointCount=void 0,this.maxRecordCount=void 0,this.maxVertexCount=void 0,this.onStatisticField=null,this.outStatisticFieldName=null,this.statisticType=null,this.statisticParameters=null}writeStatisticParameters(r,o){this.statisticType!=="percentile-continuous"&&this.statisticType!=="percentile-discrete"||(o.statisticParameters=m(r))}clone(){return new g({maxPointCount:this.maxPointCount,maxRecordCount:this.maxRecordCount,maxVertexCount:this.maxVertexCount,onStatisticField:this.onStatisticField,outStatisticFieldName:this.outStatisticFieldName,statisticType:this.statisticType,statisticParameters:m(this.statisticParameters)})}};t([e({type:Number,json:{write:!0}})],s.prototype,"maxPointCount",void 0),t([e({type:Number,json:{write:!0}})],s.prototype,"maxRecordCount",void 0),t([e({type:Number,json:{write:!0}})],s.prototype,"maxVertexCount",void 0),t([e({type:String,json:{write:!0}})],s.prototype,"onStatisticField",void 0),t([e({type:String,json:{write:!0}})],s.prototype,"outStatisticFieldName",void 0),t([e({type:String,json:{read:{source:"statisticType",reader:R.read},write:{target:"statisticType",writer:R.write}}})],s.prototype,"statisticType",void 0),t([e({type:Object})],s.prototype,"statisticParameters",void 0),t([l("statisticParameters")],s.prototype,"writeStatisticParameters",null),s=g=t([y("esri.rest.support.StatisticDefinition")],s);const N=s;var d;const A=new h({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let i=d=class extends v{static from(r){return b(d,r)}constructor(r){super(r),this.aggregateIds=null,this.cacheHint=void 0,this.compactGeometryEnabled=!1,this.datumTransformation=null,this.defaultSpatialReferenceEnabled=!1,this.distance=void 0,this.dynamicDataSource=void 0,this.formatOf3DObjects=null,this.fullText=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=void 0,this.groupByFieldsForStatistics=null,this.having=null,this.historicMoment=null,this.maxAllowableOffset=void 0,this.maxRecordCountFactor=1,this.multipatchOption=null,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.outStatistics=null,this.parameterValues=null,this.pixelSize=null,this.quantizationParameters=null,this.rangeValues=null,this.relationParameter=null,this.resultType=null,this.returnCentroid=!1,this.returnDistinctValues=!1,this.returnExceededLimitFeatures=!0,this.returnGeometry=!1,this.returnQueryGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.sourceSpatialReference=null,this.spatialRelationship="intersects",this.start=void 0,this.sqlFormat=null,this.text=null,this.timeExtent=null,this.timeReferenceUnknownClient=!1,this.units=null,this.where=null}castDatumTransformation(r){return typeof r=="number"||typeof r=="object"?r:null}writeHistoricMoment(r,o){o.historicMoment=r&&r.getTime()}writeParameterValues(r,o){if(r){const u={};for(const c in r){const p=r[c];Array.isArray(p)?u[c]=p.map(w=>w instanceof Date?w.getTime():w):p instanceof Date?u[c]=p.getTime():u[c]=p}o.parameterValues=u}}writeStart(r,o){o.resultOffset=this.start,o.resultRecordCount=this.num||10,o.where="1=1"}writeWhere(r,o){o.where=r||"1=1"}clone(){return new d(m({aggregateIds:this.aggregateIds,cacheHint:this.cacheHint,compactGeometryEnabled:this.compactGeometryEnabled,datumTransformation:this.datumTransformation,defaultSpatialReferenceEnabled:this.defaultSpatialReferenceEnabled,distance:this.distance,fullText:this.fullText,formatOf3DObjects:this.formatOf3DObjects,gdbVersion:this.gdbVersion,geometry:this.geometry,geometryPrecision:this.geometryPrecision,groupByFieldsForStatistics:this.groupByFieldsForStatistics,having:this.having,historicMoment:this.historicMoment!=null?new Date(this.historicMoment.getTime()):null,maxAllowableOffset:this.maxAllowableOffset,maxRecordCountFactor:this.maxRecordCountFactor,multipatchOption:this.multipatchOption,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,outStatistics:this.outStatistics,parameterValues:this.parameterValues,pixelSize:this.pixelSize,quantizationParameters:this.quantizationParameters,rangeValues:this.rangeValues,relationParameter:this.relationParameter,resultType:this.resultType,returnDistinctValues:this.returnDistinctValues,returnGeometry:this.returnGeometry,returnCentroid:this.returnCentroid,returnExceededLimitFeatures:this.returnExceededLimitFeatures,returnQueryGeometry:this.returnQueryGeometry,returnM:this.returnM,returnZ:this.returnZ,dynamicDataSource:this.dynamicDataSource,sourceSpatialReference:this.sourceSpatialReference,spatialRelationship:this.spatialRelationship,start:this.start,sqlFormat:this.sqlFormat,text:this.text,timeExtent:this.timeExtent,timeReferenceUnknownClient:this.timeReferenceUnknownClient,units:this.units,where:this.where}))}};i.MAX_MAX_RECORD_COUNT_FACTOR=5,t([e({json:{write:!0}})],i.prototype,"aggregateIds",void 0),t([e({type:Boolean,json:{write:!0}})],i.prototype,"cacheHint",void 0),t([e({type:Boolean,json:{default:!1,write:!0}})],i.prototype,"compactGeometryEnabled",void 0),t([e({json:{write:!0}})],i.prototype,"datumTransformation",void 0),t([T("datumTransformation")],i.prototype,"castDatumTransformation",null),t([e({type:Boolean,json:{default:!1,write:!0}})],i.prototype,"defaultSpatialReferenceEnabled",void 0),t([e({type:Number,json:{write:{overridePolicy:r=>({enabled:r>0})}}})],i.prototype,"distance",void 0),t([e({type:O,json:{write:!0}})],i.prototype,"dynamicDataSource",void 0),t([e({type:String,json:{write:!0}})],i.prototype,"formatOf3DObjects",void 0),t([e({type:[E],json:{write:{enabled:!0,overridePolicy(){return{enabled:this.fullText!=null&&this.fullText.length>0}}}}})],i.prototype,"fullText",void 0),t([e({type:String,json:{write:!0}})],i.prototype,"gdbVersion",void 0),t([e({types:F,json:{read:C,write:!0}})],i.prototype,"geometry",void 0),t([e({type:Number,json:{write:!0}})],i.prototype,"geometryPrecision",void 0),t([e({type:[String],json:{write:!0}})],i.prototype,"groupByFieldsForStatistics",void 0),t([e({type:String,json:{write:!0}})],i.prototype,"having",void 0),t([e({type:Date})],i.prototype,"historicMoment",void 0),t([l("historicMoment")],i.prototype,"writeHistoricMoment",null),t([e({type:Number,json:{write:!0}})],i.prototype,"maxAllowableOffset",void 0),t([e({type:Number,cast:r=>r<1?1:r>i.MAX_MAX_RECORD_COUNT_FACTOR?i.MAX_MAX_RECORD_COUNT_FACTOR:r,json:{write:{overridePolicy:r=>({enabled:r>1})}}})],i.prototype,"maxRecordCountFactor",void 0),t([e({type:["xyFootprint"],json:{write:!0}})],i.prototype,"multipatchOption",void 0),t([e({type:Number,json:{read:{source:"resultRecordCount"}}})],i.prototype,"num",void 0),t([e({json:{write:!0}})],i.prototype,"objectIds",void 0),t([e({type:[String],json:{write:!0}})],i.prototype,"orderByFields",void 0),t([e({type:[String],json:{write:!0}})],i.prototype,"outFields",void 0),t([e({type:j,json:{name:"outSR",write:!0}})],i.prototype,"outSpatialReference",void 0),t([e({type:[N],json:{write:{enabled:!0,overridePolicy(){return{enabled:this.outStatistics!=null&&this.outStatistics.length>0}}}}})],i.prototype,"outStatistics",void 0),t([e({json:{write:!0}})],i.prototype,"parameterValues",void 0),t([l("parameterValues")],i.prototype,"writeParameterValues",null),t([e({type:D,json:{write:!0}})],i.prototype,"pixelSize",void 0),t([e({type:_,json:{write:!0}})],i.prototype,"quantizationParameters",void 0),t([e({type:[Object],json:{write:!0}})],i.prototype,"rangeValues",void 0),t([e({type:String,json:{read:{source:"relationParam"},write:{target:"relationParam",overridePolicy(){return{enabled:this.spatialRelationship==="relation"}}}}})],i.prototype,"relationParameter",void 0),t([e({type:String,json:{write:!0}})],i.prototype,"resultType",void 0),t([e({type:Boolean,json:{default:!1,write:!0}})],i.prototype,"returnCentroid",void 0),t([e({type:Boolean,json:{default:!1,write:!0}})],i.prototype,"returnDistinctValues",void 0),t([e({type:Boolean,json:{default:!0,write:!0}})],i.prototype,"returnExceededLimitFeatures",void 0),t([e({type:Boolean,json:{write:!0}})],i.prototype,"returnGeometry",void 0),t([e({type:Boolean,json:{default:!1,write:!0}})],i.prototype,"returnQueryGeometry",void 0),t([e({type:Boolean,json:{default:!1,write:!0}})],i.prototype,"returnM",void 0),t([e({type:Boolean,json:{write:{overridePolicy:r=>({enabled:r})}}})],i.prototype,"returnZ",void 0),t([e({type:j,json:{write:!0}})],i.prototype,"sourceSpatialReference",void 0),t([S(B,{ignoreUnknown:!1,name:"spatialRel"})],i.prototype,"spatialRelationship",void 0),t([e({type:Number,json:{read:{source:"resultOffset"}}})],i.prototype,"start",void 0),t([l("start"),l("num")],i.prototype,"writeStart",null),t([e({type:String,json:{write:!0}})],i.prototype,"sqlFormat",void 0),t([e({type:String,json:{write:!0}})],i.prototype,"text",void 0),t([e({type:P,json:{write:!0}})],i.prototype,"timeExtent",void 0),t([e({type:Boolean,json:{default:!1,write:!0}})],i.prototype,"timeReferenceUnknownClient",void 0),t([S(A,{ignoreUnknown:!1}),e({json:{write:{overridePolicy(r){return{enabled:!!r&&this.distance!=null&&this.distance>0}}}}})],i.prototype,"units",void 0),t([e({type:String,json:{write:{overridePolicy(r){return{enabled:r!=null||this.start!=null&&this.start>0}}}}})],i.prototype,"where",void 0),t([l("where")],i.prototype,"writeWhere",null),i=d=t([y("esri.rest.support.Query")],i);const Y=i;export{_ as a,Y as b,N as m,B as s};