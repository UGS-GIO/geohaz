import{a as I}from"./Error-21d1d076.js";import{p as F,u as S}from"./jsonUtils-2c7f966c.js";import{v}from"./SpatialReference-428523ee.js";import{e as O,n as Q,t as Z}from"./featureConversionUtils-e62978d0.js";import{t as A,n as k}from"./objectIdUtils-789e911a.js";import{m as C}from"./FeatureStore-d7126e99.js";import{x as E,j as _}from"./timeSupport-57e57e41.js";import{$ as P}from"./QueryEngine-98332c44.js";import{i as $,o as G,a as L}from"./clientSideDefaults-1b55d85f.js";import{j as z,f as g,p as T,d as j,y as w}from"./sourceUtils-141e6bda.js";import{Z as D}from"./FieldsIndex-9238b8b6.js";import{i as W}from"./fieldType-4834e8bc.js";import{K as B,H}from"./fieldUtils-fcb2a714.js";import{i as N}from"./date-7940da18.js";import"./typedArrayUtil-2af43698.js";import"./Extent-2b4578b8.js";import"./subclass-f7409b1b.js";import"./promiseUtils-1d963c7c.js";import"./JSONSupport-acf2865c.js";import"./time-0817624a.js";import"./cast-e7a2f9aa.js";import"./Polyline-013cde1f.js";import"./aaBoundingRect-aef00841.js";import"./Axis-30be7e73.js";import"./mathUtils-19b6edfc.js";import"./jsonMap-5ba4a9c2.js";import"./request-a10d6950.js";import"./assets-6fd92e57.js";import"./aaBoundingBox-7242ce3e.js";import"./OptimizedFeature-0af09c7a.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-5ad221bf.js";import"./Evented-b5127116.js";import"./BoundsStore-efd6e714.js";import"./PooledRBush-7b613e7a.js";import"./quickselect-fcce738b.js";import"./_commonjsHelpers-2f3e7994.js";import"./projection-41da473c.js";import"./SimpleObservable-ae589a25.js";import"./projectBuffer-af7b4ad9.js";import"./zscale-d7e12601.js";import"./normalizeUtils-059b11cb.js";import"./normalizeUtilsCommon-c4e9ddb1.js";import"./geometry-31b45acd.js";import"./typeUtils-3056a943.js";import"./utils-3234cfff.js";import"./utils-ed91a700.js";import"./json-48e3ea08.js";import"./LRUCache-000d0e19.js";import"./WhereClause-239b807b.js";import"./TimeOnly-e43464ca.js";import"./UnknownTimeZone-8ede07af.js";import"./datetime-7e00d9ef.js";import"./locale-bde6d0f6.js";import"./QueryEngineCapabilities-85c4f1d0.js";import"./heatmapUtils-7a838493.js";import"./screenUtils-7afeb41c.js";import"./vec42-a95eff2d.js";import"./vec4f64-430e4feb.js";import"./utils-0bd9b85f.js";import"./timeUtils-24502426.js";import"./utils-522ed121.js";import"./Basemap-09ab572b.js";import"./Collection-aa6ef54b.js";import"./collectionUtils-b6e30316.js";import"./Loadable-8a1ead8b.js";import"./Promise-ec74e14b.js";import"./loadAll-19f96669.js";import"./Portal-cb507469.js";import"./PortalItem-9d3416e3.js";import"./persistableUrlUtils-ca6bb38d.js";import"./messages-2d262041.js";import"./writeUtils-ef8a6958.js";import"./layerUtils-c805b05c.js";import"./mat4f32-1b45b54f.js";import"./mat4-a6ac6b0f.js";import"./utils-11762b6e.js";import"./ClassBreaksDefinition-be15ec21.js";import"./enumeration-4a4e87c4.js";import"./reactiveUtils-e7d9f86e.js";import"./signal-b060d75f.js";import"./RenderState-1d6218ee.js";import"./defaultsJSON-b087dd4d.js";import"./date-294ce3fb.js";import"./intl-fe039018.js";const U=v,J={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:v},K={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function V(h){return S(h)?h.z!=null:!!h.hasZ}function X(h){return S(h)?h.m!=null:!!h.hasM}class Dt{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(e){const i=[],{features:o}=e,s=this._inferLayerProperties(o,e.fields),l=e.fields||[],d=e.hasM!=null?e.hasM:!!s.hasM,c=e.hasZ!=null?e.hasZ:!!s.hasZ,u=!e.spatialReference&&!s.spatialReference,p=u?U:e.spatialReference||s.spatialReference,y=u?J:null,m=e.geometryType||s.geometryType,a=!m;let t=e.objectIdField||s.objectIdField,n=e.timeInfo;const f=new D(l);if(!a&&(u&&i.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!m))throw new I("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!t)throw new I("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(s.objectIdField&&t!==s.objectIdField&&(i.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${t}" doesn't match the field name "${s.objectIdField}", found in the provided fields`}),t=s.objectIdField),t&&!s.objectIdField){const r=f.get(t);r?(t=r.name,r.type="esriFieldTypeOID",r.editable=!1,r.nullable=!1):l.unshift({alias:t,name:t,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const r of l){if(r.name==null&&(r.name=r.alias),r.alias==null&&(r.alias=r.name),!r.name)throw new I("feature-layer:invalid-field-name","field name is missing",{field:r});if(r.name===t&&(r.type="esriFieldTypeOID"),!W.jsonValues.includes(r.type))throw new I("feature-layer:invalid-field-type",`invalid type for field "${r.name}"`,{field:r});r.length==null&&(r.length=B(r))}const b={};for(const r of l)if(r.type!=="esriFieldTypeOID"&&r.type!=="esriFieldTypeGlobalID"){const q=H(r);q!==void 0&&(b[r.name]=q)}if(n){if(n.startTimeField){const r=f.get(n.startTimeField);r?(n.startTimeField=r.name,r.type="esriFieldTypeDate"):n.startTimeField=null}if(n.endTimeField){const r=f.get(n.endTimeField);r?(n.endTimeField=r.name,r.type="esriFieldTypeDate"):n.endTimeField=null}if(n.trackIdField){const r=f.get(n.trackIdField);r?n.trackIdField=r.name:(n.trackIdField=null,i.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:n}}))}n.startTimeField||n.endTimeField||(i.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:n}}),n=null)}const x=f.dateFields.length?{timeZoneIANA:e.dateFieldsTimeZone??N}:null;this._createDefaultAttributes=$(b,t);const R={warnings:i,featureErrors:[],layerDefinition:{...K,drawingInfo:G(m),templates:L(b),extent:y,geometryType:m,objectIdField:t,fields:l,hasZ:c,hasM:d,timeInfo:n,dateFieldsTimeReference:x},assignedObjectIds:{}};if(this._queryEngine=new P({fieldsIndex:D.fromLayerJSON({fields:l,timeInfo:n,dateFieldsTimeReference:x}),geometryType:m,hasM:d,hasZ:c,objectIdField:t,spatialReference:p,featureStore:new C({geometryType:m,hasM:d,hasZ:c}),timeInfo:n,cacheSpatialQueries:!0}),!(o!=null&&o.length))return this._nextObjectId=A,R;const M=k(t,o);return this._nextObjectId=M+1,await E(o,p),this._loadInitialFeatures(R,o)}async applyEdits(e){const{spatialReference:i,geometryType:o}=this._queryEngine;return await Promise.all([z(i,o),E(e.adds,i),E(e.updates,i)]),this._applyEdits(e)}queryFeatures(e,i={}){return this._queryEngine.executeQuery(e,i.signal)}queryFeatureCount(e,i={}){return this._queryEngine.executeQueryForCount(e,i.signal)}queryObjectIds(e,i={}){return this._queryEngine.executeQueryForIds(e,i.signal)}queryExtent(e,i={}){return this._queryEngine.executeQueryForExtent(e,i.signal)}querySnapping(e,i={}){return this._queryEngine.executeQueryForSnapping(e,i.signal)}_inferLayerProperties(e,i){let o,s,l=null,d=null,c=null;for(const u of e){const p=u.geometry;if(p!=null&&(l||(l=F(p)),d||(d=p.spatialReference),o==null&&(o=V(p)),s==null&&(s=X(p)),l&&d&&o!=null&&s!=null))break}if(i&&i.length){let u=null;i.some(p=>{const y=p.type==="esriFieldTypeOID",m=!p.type&&p.name&&p.name.toLowerCase()==="objectid";return u=p,y||m})&&(c=u.name)}return{geometryType:l,spatialReference:d,objectIdField:c,hasM:s,hasZ:o}}async _loadInitialFeatures(e,i){const{geometryType:o,hasM:s,hasZ:l,objectIdField:d,spatialReference:c,featureStore:u,fieldsIndex:p}=this._queryEngine,y=[];for(const t of i){if(t.uid!=null&&(e.assignedObjectIds[t.uid]=-1),t.geometry&&o!==F(t.geometry)){e.featureErrors.push(g("Incorrect geometry type."));continue}const n=this._createDefaultAttributes(),f=T(p,n,t.attributes,!0);f?e.featureErrors.push(f):(this._assignObjectId(n,t.attributes,!0),t.attributes=n,t.uid!=null&&(e.assignedObjectIds[t.uid]=t.attributes[d]),t.geometry!=null&&(t.geometry=_(t.geometry,t.geometry.spatialReference,c)),y.push(t))}u.addMany(O([],y,o,l,s,d));const{fullExtent:m,timeExtent:a}=await this._queryEngine.fetchRecomputedExtents();if(e.layerDefinition.extent=m,a){const{start:t,end:n}=a;e.layerDefinition.timeInfo.timeExtent=[t,n]}return e}async _applyEdits(e){const{adds:i,updates:o,deletes:s}=e,l={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(i!=null&&i.length&&this._applyAddEdits(l,i),o!=null&&o.length&&this._applyUpdateEdits(l,o),s==null?void 0:s.length){for(const u of s)l.deleteResults.push(j(u));this._queryEngine.featureStore.removeManyById(s)}const{fullExtent:d,timeExtent:c}=await this._queryEngine.fetchRecomputedExtents();return{extent:d,timeExtent:c,featureEditResults:l}}_applyAddEdits(e,i){const{addResults:o}=e,{geometryType:s,hasM:l,hasZ:d,objectIdField:c,spatialReference:u,featureStore:p,fieldsIndex:y}=this._queryEngine,m=[];for(const a of i){if(a.geometry&&s!==F(a.geometry)){o.push(g("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),n=T(y,t,a.attributes);if(n)o.push(n);else{if(this._assignObjectId(t,a.attributes),a.attributes=t,a.uid!=null){const f=a.attributes[c];e.uidToObjectId[a.uid]=f}if(a.geometry!=null){const f=a.geometry.spatialReference??u;a.geometry=_(w(a.geometry,f),f,u)}m.push(a),o.push(j(a.attributes[c]))}}p.addMany(O([],m,s,d,l,c))}_applyUpdateEdits({updateResults:e},i){const{geometryType:o,hasM:s,hasZ:l,objectIdField:d,spatialReference:c,featureStore:u,fieldsIndex:p}=this._queryEngine;for(const y of i){const{attributes:m,geometry:a}=y,t=m==null?void 0:m[d];if(t==null){e.push(g(`Identifier field ${d} missing`));continue}if(!u.has(t)){e.push(g(`Feature with object id ${t} missing`));continue}const n=Q(u.getFeature(t),o,l,s);if(a!=null){if(o!==F(a)){e.push(g("Incorrect geometry type."));continue}const f=a.spatialReference??c;n.geometry=_(w(a,f),f,c)}if(m){const f=T(p,n.attributes,m);if(f){e.push(f);continue}}u.add(Z(n,o,l,s,d)),e.push(j(t))}}_assignObjectId(e,i,o=!1){const s=this._queryEngine.objectIdField;o&&i&&isFinite(i[s])?e[s]=i[s]:e[s]=this._nextObjectId++}}export{Dt as default};