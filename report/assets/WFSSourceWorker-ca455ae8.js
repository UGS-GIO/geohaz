import{d as T}from"./Evented-b5127116.js";import{a as g,s as y}from"./Error-21d1d076.js";import{s as c,b as R}from"./promiseUtils-1d963c7c.js";import{s as f}from"./subclass-f7409b1b.js";import{G as E}from"./SpatialReference-428523ee.js";import{o as P,r as q}from"./featureConversionUtils-e62978d0.js";import{m as I}from"./FeatureStore-d7126e99.js";import{x as b,j as $}from"./timeSupport-57e57e41.js";import{$ as j}from"./QueryEngine-98332c44.js";import{E as N,N as O}from"./geojson-b47ee09c.js";import{p as Q}from"./sourceUtils-141e6bda.js";import{o as M,e as k,K as _}from"./wfsUtils-d623fdc3.js";import{Z as L}from"./FieldsIndex-9238b8b6.js";import{i as U}from"./date-7940da18.js";import"./JSONSupport-acf2865c.js";import"./typedArrayUtil-2af43698.js";import"./time-0817624a.js";import"./jsonMap-5ba4a9c2.js";import"./request-a10d6950.js";import"./assets-6fd92e57.js";import"./aaBoundingBox-7242ce3e.js";import"./Extent-2b4578b8.js";import"./cast-e7a2f9aa.js";import"./mathUtils-19b6edfc.js";import"./aaBoundingRect-aef00841.js";import"./Axis-30be7e73.js";import"./jsonUtils-2c7f966c.js";import"./Polyline-013cde1f.js";import"./OptimizedFeature-0af09c7a.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-5ad221bf.js";import"./BoundsStore-efd6e714.js";import"./PooledRBush-7b613e7a.js";import"./quickselect-fcce738b.js";import"./_commonjsHelpers-2f3e7994.js";import"./projection-41da473c.js";import"./SimpleObservable-ae589a25.js";import"./projectBuffer-af7b4ad9.js";import"./zscale-d7e12601.js";import"./normalizeUtils-059b11cb.js";import"./normalizeUtilsCommon-c4e9ddb1.js";import"./geometry-31b45acd.js";import"./typeUtils-3056a943.js";import"./utils-3234cfff.js";import"./utils-ed91a700.js";import"./json-48e3ea08.js";import"./LRUCache-000d0e19.js";import"./WhereClause-239b807b.js";import"./TimeOnly-e43464ca.js";import"./UnknownTimeZone-8ede07af.js";import"./datetime-7e00d9ef.js";import"./locale-bde6d0f6.js";import"./fieldType-4834e8bc.js";import"./QueryEngineCapabilities-85c4f1d0.js";import"./heatmapUtils-7a838493.js";import"./screenUtils-7afeb41c.js";import"./vec42-a95eff2d.js";import"./vec4f64-430e4feb.js";import"./fieldUtils-fcb2a714.js";import"./intl-fe039018.js";import"./messages-2d262041.js";import"./utils-0bd9b85f.js";import"./timeUtils-24502426.js";import"./utils-522ed121.js";import"./Basemap-09ab572b.js";import"./Collection-aa6ef54b.js";import"./collectionUtils-b6e30316.js";import"./Loadable-8a1ead8b.js";import"./Promise-ec74e14b.js";import"./loadAll-19f96669.js";import"./Portal-cb507469.js";import"./PortalItem-9d3416e3.js";import"./persistableUrlUtils-ca6bb38d.js";import"./writeUtils-ef8a6958.js";import"./layerUtils-c805b05c.js";import"./mat4f32-1b45b54f.js";import"./mat4-a6ac6b0f.js";import"./utils-11762b6e.js";import"./ClassBreaksDefinition-be15ec21.js";import"./enumeration-4a4e87c4.js";import"./reactiveUtils-e7d9f86e.js";import"./signal-b060d75f.js";import"./RenderState-1d6218ee.js";import"./date-294ce3fb.js";import"./xmlUtils-444cb4c0.js";import"./arcgisLayerUrl-0c479f71.js";import"./Field-be948aef.js";const x="esri.layers.WFSLayer";class Re{constructor(){this._customParameters=null,this._queryEngine=null,this._supportsPagination=!0}destroy(){var t;(t=this._queryEngine)==null||t.destroy(),this._queryEngine=null}async load(t,e={}){const{getFeatureUrl:r,getFeatureOutputFormat:a,fields:i,geometryType:m,featureType:s,maxRecordCount:n,maxTotalRecordCount:h,maxPageCount:C,objectIdField:d,customParameters:F}=t,{spatialReference:u,getFeatureSpatialReference:l}=M(r,s,t.spatialReference);try{await b(l,u)}catch{throw new g("unsupported-projection","Projection not supported",{inSpatialReference:l,outSpatialReference:u})}c(e),this._customParameters=F,this._featureType=s,this._fieldsIndex=L.fromLayerJSON({fields:i,dateFieldsTimeReference:i.some(S=>S.type==="esriFieldTypeDate")?{timeZoneIANA:U}:null}),this._geometryType=m,this._getFeatureUrl=r,this._getFeatureOutputFormat=a,this._getFeatureSpatialReference=l,this._maxRecordCount=n,this._maxTotalRecordCount=h,this._maxPageCount=C,this._objectIdField=d,this._spatialReference=u;let p=await this._snapshotFeatures(e);if(p.errors.length>0&&(this._supportsPagination=!1,p=await this._snapshotFeatures(e),p.errors.length>0))throw p.errors[0];return this._queryEngine=new j({fieldsIndex:this._fieldsIndex,geometryType:m,hasM:!1,hasZ:!1,objectIdField:d,spatialReference:u,timeInfo:null,featureStore:new I({geometryType:m,hasM:!1,hasZ:!1})}),this._queryEngine.featureStore.addMany(p.features),{warnings:w(p),extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async applyEdits(){throw new g("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(t,e.signal)}async queryFeatureCount(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(t,e.signal)}async queryObjectIds(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(t,e.signal)}async queryExtent(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(t,e.signal)}async querySnapping(t,e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(t,e.signal)}async refresh(t){var e;return this._customParameters=t.customParameters,this._maxRecordCount=t.maxRecordCount,this._maxTotalRecordCount=t.maxTotalRecordCount,this._maxPageCount=t.maxPageCount,(e=this._snapshotTask)==null||e.abort(),this._snapshotTask=T(r=>this._snapshotFeatures({signal:r})),this._snapshotTask.promise.then(r=>{var a;this._queryEngine.featureStore.clear(),this._queryEngine.featureStore.addMany(r.features);for(const i of w(r))y.getLogger(x).warn(new f("wfs-layer:refresh-warning",i.message,i.details));(a=r.errors)!=null&&a.length&&y.getLogger(x).warn(new f("wfs-layer:refresh-error","Refresh completed with errors",{errors:r.errors}))},()=>{this._queryEngine.featureStore.clear()}),await this._waitSnapshotComplete(),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _snapshotFeatures(t){const e=t==null?void 0:t.signal,r=this._maxTotalRecordCount,a=this._maxPageCount,i=this._supportsPagination?await k(this._getFeatureUrl,this._featureType.typeName,{customParameters:this._customParameters,signal:e}):void 0;let m=[];const s=[];if(i==null)try{m=await this._singleQuery(e)}catch(n){R(n)||s.push(n)}else{const n=Math.min(i,r),h=Z(this,Math.max(1,Math.min(Math.ceil(n/this._maxRecordCount),a)),e);await Promise.allSettled(Array.from({length:10}).map(()=>G(h,m,s)))}return c(e),{features:m,totalRecordCount:i,maxTotalRecordCount:r,maxPageCount:a,errors:s}}async _singleQuery(t){const e=await _(this._getFeatureUrl,this._featureType.typeName,this._getFeatureSpatialReference,this._getFeatureOutputFormat,{customParameters:this._customParameters,signal:t});return this._processGeoJSON(e,{signal:t})}async _pageQuery(t,e){const r=t*this._maxRecordCount,a=await _(this._getFeatureUrl,this._featureType.typeName,this._getFeatureSpatialReference,this._getFeatureOutputFormat,{customParameters:this._customParameters,startIndex:r,count:this._maxRecordCount,signal:e});return this._processGeoJSON(a,{startIndex:r,signal:e})}_processGeoJSON(t,e){N(t,this._getFeatureSpatialReference.wkid);const{startIndex:r,signal:a}=e;c(a);const i=O(t,{geometryType:this._geometryType,hasZ:!1,objectIdField:this._objectIdField});if(!E(this._spatialReference,this._getFeatureSpatialReference))for(const s of i)s.geometry!=null&&(s.geometry=P($(q(s.geometry,this._geometryType,!1,!1),this._getFeatureSpatialReference,this._spatialReference)));let m=r??1;for(const s of i){const n={};Q(this._fieldsIndex,n,s.attributes,!0),s.attributes=n,n[this._objectIdField]==null&&(s.objectId=n[this._objectIdField]=m++)}return i}}function*Z(o,t,e){for(let r=0;r<t;r++)yield o._pageQuery(r,e)}async function G(o,t,e){let r=o.next();for(;!r.done;){try{const a=await r.value;t.push(...a)}catch(a){R(a)||e.push(a)}r=o.next()}}function w(o){const t=[];return o.totalRecordCount!=null&&(o.features.length<o.totalRecordCount&&t.push({name:"wfs-layer:maxRecordCount-too-low",message:`Could only fetch ${o.features.length} of ${o.totalRecordCount} in ${o.maxPageCount} queries. Try increasing the value of WFSLayer.maxRecordCount.`,details:{recordCount:o.features.length,totalRecordCount:o.totalRecordCount}}),o.totalRecordCount>o.maxTotalRecordCount&&t.push({name:"wfs-layer:large-dataset",message:`The number of ${o.totalRecordCount} features exceeds the maximum allowed of ${o.maxTotalRecordCount}.`,details:{recordCount:o.features.length,totalRecordCount:o.totalRecordCount,maxTotalRecordCount:o.maxTotalRecordCount}})),t}export{Re as default};