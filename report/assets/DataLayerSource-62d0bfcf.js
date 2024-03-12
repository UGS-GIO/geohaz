import{e,T as q,c as d,d as x,S as $,K as N}from"./subclass-f7409b1b.js";import{o as V}from"./jsonMap-5ba4a9c2.js";import{y as r,f as b}from"./JSONSupport-acf2865c.js";import{s as k}from"./cast-e7a2f9aa.js";import{o as n}from"./enumeration-4a4e87c4.js";import{o as K}from"./Extent-2b4578b8.js";import{y as D}from"./Field-be948aef.js";import"./typedArrayUtil-2af43698.js";import"./geometry-31b45acd.js";import"./Error-21d1d076.js";import{f as F}from"./SpatialReference-428523ee.js";import{o as J}from"./typeUtils-3056a943.js";var v;let c=v=class extends b{constructor(t){super(t),this.type="map-layer"}clone(){const{mapLayerId:t,gdbVersion:o}=this;return new v({mapLayerId:t,gdbVersion:o})}};e([n({mapLayer:"map-layer"})],c.prototype,"type",void 0),e([r({type:q,json:{write:!0}})],c.prototype,"mapLayerId",void 0),e([r({type:String,json:{write:!0}})],c.prototype,"gdbVersion",void 0),c=v=e([d("esri.layers.support.source.MapLayerSource")],c);var g;let s=g=class extends b{constructor(t){super(t),this.type="query-table"}clone(){const{workspaceId:t,query:o,oidFields:p,spatialReference:l,geometryType:S}=this,m={workspaceId:t,query:o,oidFields:p,spatialReference:(l==null?void 0:l.clone())??void 0,geometryType:S};return new g(m)}};e([n({queryTable:"query-table"})],s.prototype,"type",void 0),e([r({type:String,json:{write:!0}})],s.prototype,"workspaceId",void 0),e([r({type:String,json:{write:!0}})],s.prototype,"query",void 0),e([r({type:String,json:{write:!0}})],s.prototype,"oidFields",void 0),e([r({type:F,json:{write:!0}})],s.prototype,"spatialReference",void 0),e([n(J)],s.prototype,"geometryType",void 0),s=g=e([d("esri.layers.support.source.QueryTableDataSource")],s);var w;let u=w=class extends b{constructor(t){super(t),this.type="raster"}clone(){const{workspaceId:t,dataSourceName:o}=this;return new w({workspaceId:t,dataSourceName:o})}};e([n({raster:"raster"})],u.prototype,"type",void 0),e([r({type:String,json:{write:!0}})],u.prototype,"dataSourceName",void 0),e([r({type:String,json:{write:!0}})],u.prototype,"workspaceId",void 0),u=w=e([d("esri.layers.support.source.RasterDataSource")],u);var j;let y=j=class extends b{constructor(t){super(t),this.type="table"}clone(){const{workspaceId:t,gdbVersion:o,dataSourceName:p}=this;return new j({workspaceId:t,gdbVersion:o,dataSourceName:p})}};e([n({table:"table"})],y.prototype,"type",void 0),e([r({type:String,json:{write:!0}})],y.prototype,"workspaceId",void 0),e([r({type:String,json:{write:!0}})],y.prototype,"gdbVersion",void 0),e([r({type:String,json:{write:!0}})],y.prototype,"dataSourceName",void 0),y=j=e([d("esri.layers.support.source.TableDataSource")],y);var h,L;const M=V()({esriLeftInnerJoin:"left-inner-join",esriLeftOuterJoin:"left-outer-join"});let a=h=class extends b{constructor(t){super(t),this.type="join-table"}readLeftTableSource(t,o,p){return R()(t,o,p)}castLeftTableSource(t){return $(I(),t)}readRightTableSource(t,o,p){return R()(t,o,p)}castRightTableSource(t){return $(I(),t)}clone(){const{leftTableKey:t,rightTableKey:o,leftTableSource:p,rightTableSource:l,joinType:S}=this,m={leftTableKey:t,rightTableKey:o,leftTableSource:(p==null?void 0:p.clone())??void 0,rightTableSource:(l==null?void 0:l.clone())??void 0,joinType:S};return new h(m)}};e([n({joinTable:"join-table"})],a.prototype,"type",void 0),e([r({type:String,json:{write:!0}})],a.prototype,"leftTableKey",void 0),e([r({type:String,json:{write:!0}})],a.prototype,"rightTableKey",void 0),e([r({json:{write:!0}})],a.prototype,"leftTableSource",void 0),e([K("leftTableSource")],a.prototype,"readLeftTableSource",null),e([k("leftTableSource")],a.prototype,"castLeftTableSource",null),e([r({json:{write:!0}})],a.prototype,"rightTableSource",void 0),e([K("rightTableSource")],a.prototype,"readRightTableSource",null),e([k("rightTableSource")],a.prototype,"castRightTableSource",null),e([n(M)],a.prototype,"joinType",void 0),a=h=e([d("esri.layers.support.source.JoinTableDataSource")],a);let T=null;function R(){return T||(T=N({types:I()})),T}let f=null;function I(){return f||(f={key:"type",base:null,typeMap:{"data-layer":i,"map-layer":c}}),f}const O={key:"type",base:null,typeMap:{"join-table":a,"query-table":s,raster:u,table:y}};let i=L=class extends b{constructor(t){super(t),this.type="data-layer"}clone(){const{fields:t,dataSource:o}=this;return new L({fields:t,dataSource:o})}};e([n({dataLayer:"data-layer"})],i.prototype,"type",void 0),e([r({type:[D],json:{write:!0}})],i.prototype,"fields",void 0),e([r({types:O,json:{write:!0}})],i.prototype,"dataSource",void 0),i=L=e([d("esri.layers.support.source.DataLayerSource")],i),i.from=x(i);export{i as K,c};
