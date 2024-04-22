import{e,c as h}from"./subclass-f7409b1b.js";import{V as F}from"./Collection-aa6ef54b.js";import{b as I,s as x}from"./Error-21d1d076.js";import{y as t,f as v}from"./JSONSupport-acf2865c.js";import"./typedArrayUtil-2af43698.js";import{o as a,M as T}from"./Extent-2b4578b8.js";import{o as E,n as D,r as j,f as b}from"./SpatialReference-428523ee.js";import{f as R,a as M,S as U,T as $,d as A}from"./commonProperties-0c35c2c9.js";import{v as B}from"./HeightModelInfo-46c4a968.js";import{g as C,S as Q}from"./arcgisLayerUrl-0c479f71.js";import{i as m}from"./Clonable-b71fa929.js";import{c as f}from"./date-7940da18.js";import{f as k,U as V,R as G,M as N,C as Z}from"./featureLayerUtils-87358b6a.js";import{p as P}from"./LayerFloorInfo-88589fec.js";import{s as O}from"./jsonMap-5ba4a9c2.js";import{a as z}from"./serviceCapabilitiesUtils-d90db62d.js";import{i as J}from"./Field-be948aef.js";let u=class extends m(v){constructor(i){super(i),this.creatorField=null,this.creationDateField=null,this.editorField=null,this.editDateField=null,this.realm=null,this.timeZone=null}};e([t()],u.prototype,"creatorField",void 0),e([t()],u.prototype,"creationDateField",void 0),e([t()],u.prototype,"editorField",void 0),e([t()],u.prototype,"editDateField",void 0),e([t()],u.prototype,"realm",void 0),e([t(f("dateFieldsTimeReference",!0))],u.prototype,"timeZone",void 0),u=e([h("esri.layers.support.EditFieldsInfo")],u);const L=u;let d=class extends m(v){constructor(i){super(i)}};e([t({constructOnly:!0,json:{write:!0}})],d.prototype,"name",void 0),e([t({constructOnly:!0,json:{write:!0}})],d.prototype,"fields",void 0),e([t({constructOnly:!0,json:{write:!0}})],d.prototype,"isAscending",void 0),e([t({constructOnly:!0,json:{write:!0}})],d.prototype,"indexType",void 0),e([t({constructOnly:!0,json:{write:!0}})],d.prototype,"isUnique",void 0),e([t({constructOnly:!0,json:{write:!0}})],d.prototype,"description",void 0),d=e([h("esri.layers.support.FeatureIndex")],d);let c=class extends m(v){constructor(i){super(i),this.shapeAreaField=null,this.shapeLengthField=null,this.units=null}};e([t({type:String,json:{read:{source:"shapeAreaFieldName"}}})],c.prototype,"shapeAreaField",void 0),e([t({type:String,json:{read:{source:"shapeLengthFieldName"}}})],c.prototype,"shapeLengthField",void 0),e([t({type:String,json:{read:n=>E.read(n)||D.read(n)}})],c.prototype,"units",void 0),c=e([h("esri.layers.support.GeometryFieldsInfo")],c);const H=c,S=new O({esriRelCardinalityOneToOne:"one-to-one",esriRelCardinalityOneToMany:"one-to-many",esriRelCardinalityManyToMany:"many-to-many"}),w=new O({esriRelRoleOrigin:"origin",esriRelRoleDestination:"destination"});let l=class extends m(v){constructor(n){super(n),this.cardinality=null,this.composite=null,this.id=null,this.keyField=null,this.keyFieldInRelationshipTable=null,this.name=null,this.relatedTableId=null,this.relationshipTableId=null,this.role=null}};e([t({json:{read:S.read,write:S.write}})],l.prototype,"cardinality",void 0),e([t({json:{read:!0,write:!0}})],l.prototype,"composite",void 0),e([t({json:{read:!0,write:!0}})],l.prototype,"id",void 0),e([t({json:{read:!0,write:!0}})],l.prototype,"keyField",void 0),e([t({json:{read:!0,write:!0}})],l.prototype,"keyFieldInRelationshipTable",void 0),e([t({json:{read:!0,write:!0}})],l.prototype,"name",void 0),e([t({json:{read:!0,write:!0}})],l.prototype,"relatedTableId",void 0),e([t({json:{read:!0,write:!0}})],l.prototype,"relationshipTableId",void 0),e([t({json:{read:w.read,write:w.write}})],l.prototype,"role",void 0),l=e([h("esri.layers.support.Relationship")],l);const q=l;let y=class extends m(v){constructor(n){super(n),this.code=null,this.defaultValues={},this.domains=null,this.name=null}readDomains(n){if(!n)return null;const i={};for(const r of Object.keys(n))i[r]=J(n[r]);return i}writeDomains(n,i){var o;if(!n)return;const r={};for(const s of Object.keys(n))n[s]&&(r[s]=(o=n[s])==null?void 0:o.toJSON());i.domains=r}};e([t({type:Number,json:{write:!0}})],y.prototype,"code",void 0),e([t({type:Object,json:{write:!0}})],y.prototype,"defaultValues",void 0),e([t({json:{write:!0}})],y.prototype,"domains",void 0),e([a("domains")],y.prototype,"readDomains",null),e([j("domains")],y.prototype,"writeDomains",null),e([t({type:String,json:{write:!0}})],y.prototype,"name",void 0),y=e([h("esri.layers.support.Subtype")],y);const W=y,me=n=>{let i=class extends n{constructor(){super(...arguments),this.copyright=null,this.capabilities=null,this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.definitionExpression=null,this.displayField=null,this.editFieldsInfo=null,this.editingInfo=null,this.elevationInfo=null,this.floorInfo=null,this.fullExtent=null,this.gdbVersion=null,this.geometryFieldsInfo=null,this.geometryType=null,this.globalIdField=null,this.hasM=void 0,this.hasZ=void 0,this.heightModelInfo=null,this.historicMoment=null,this.indexes=new(F.ofType(d)),this.isTable=!1,this.layerId=void 0,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.preferredTimeZone=null,this.relationships=null,this.returnM=void 0,this.returnZ=void 0,this.serviceDefinitionExpression=null,this.serviceItemId=null,this.sourceJSON=null,this.spatialReference=b.WGS84,this.subtypeField=null,this.subtypes=null,this.trackIdField=null,this.version=void 0}get authenticationTriggerEvent(){if(!this.url)return null;const{capabilities:r}=this;if(r){const{query:o,operations:s,editing:p}=r;if(!o.supportsQueryByOthers||!o.supportsQueryByAnonymous||s.supportsEditing&&!(p.supportsUpdateByOthers&&p.supportsUpdateByAnonymous&&p.supportsDeleteByOthers&&p.supportsDeleteByAnonymous))return"load"}return this.userHasUpdateItemPrivileges?V(this)?"load":this.hasUpdateItemRestrictions?r.operations.supportsQuery?"editing":"load":null:this.userHasFullEditingPrivileges&&this.hasFullEditingRestrictions?"editing":null}readCapabilitiesFromService(r,o){return z(o,this.url)}readEditingInfo(r,o){const{editingInfo:s}=o;return s?{lastEditDate:s.lastEditDate!=null?new Date(s.lastEditDate):null}:null}get effectiveCapabilities(){var g;const r=this.capabilities;if(!r)return null;const o=I(r),{operations:s,editing:p}=o;return(g=this.sourceJSON)!=null&&g.isMultiServicesView?(this.userHasUpdateItemPrivileges&&(s.supportsQuery=!0),o):this.userHasUpdateItemPrivileges?(s.supportsAdd=s.supportsDelete=s.supportsEditing=s.supportsQuery=s.supportsUpdate=p.supportsDeleteByOthers=p.supportsGeometryUpdate=p.supportsUpdateByOthers=!0,o):(this.userHasFullEditingPrivileges&&s.supportsEditing&&(s.supportsAdd=s.supportsDelete=s.supportsUpdate=p.supportsGeometryUpdate=!0),o)}readGlobalIdFieldFromService(r,o){return G(o)}get hasFullEditingRestrictions(){var p;const r=this.capabilities;if(!r||(p=this.sourceJSON)!=null&&p.isMultiServicesView)return!1;const{operations:o,editing:s}=r;return o.supportsEditing&&!(o.supportsAdd&&o.supportsDelete&&o.supportsUpdate&&s.supportsGeometryUpdate)}get hasUpdateItemRestrictions(){var p;const r=this.capabilities;if(!r)return!1;const{operations:o,editing:s}=r;return(p=this.sourceJSON)!=null&&p.isMultiServicesView?!o.supportsQuery:!(o.supportsAdd&&o.supportsDelete&&o.supportsEditing&&o.supportsQuery&&o.supportsUpdate&&s.supportsDeleteByOthers&&s.supportsGeometryUpdate&&s.supportsUpdateByOthers)}readIsTableFromService(r,o){return o.type==="Table"}readMaxScale(r,o){return o.effectiveMaxScale||r||0}readMinScale(r,o){return o.effectiveMinScale||r||0}readObjectIdFieldFromService(r,o){return N(o)}readServiceDefinitionExpression(r,o){return o.definitionQuery||o.definitionExpression}set url(r){const o=C({layer:this,url:r,nonStandardUrlAllowed:!0,logger:x.getLogger(this)});this._set("url",o.url),o.layerId!=null&&this._set("layerId",o.layerId)}writeUrl(r,o,s,p){Q(this,r,null,o,p)}readVersion(r,o){return Z(o)}};return e([t({readOnly:!0})],i.prototype,"authenticationTriggerEvent",null),e([t({type:String,json:{origins:{service:{read:{source:"copyrightText"}}}}})],i.prototype,"copyright",void 0),e([t({readOnly:!0,json:{read:!1,origins:{service:{read:{source:["advancedQueryCapabilities","allowGeometryUpdates","allowUpdateWithoutMValues","archivingInfo","capabilities","datesInUnknownTimezone","hasAttachments","hasM","hasZ","maxRecordCount","maxRecordCountFactor","ownershipBasedAccessControlForFeatures","standardMaxRecordCount","supportedQueryFormats","supportsAdvancedQueries","supportsApplyEditsWithGlobalIds","supportsAttachmentsByUploadId","supportsAttachmentsResizing","supportsCalculate","supportsCoordinatesQuantization","supportsExceedsLimitStatistics","supportsFieldDescriptionProperty","supportsQuantizationEditMode","supportsRollbackOnFailureParameter","supportsStatistics","supportsTruncate","supportsValidateSql","tileMaxRecordCount","useStandardizedQueries"]}}}}})],i.prototype,"capabilities",void 0),e([a("service","capabilities")],i.prototype,"readCapabilitiesFromService",null),e([t(f("dateFieldsTimeReference"))],i.prototype,"dateFieldsTimeZone",void 0),e([t({type:Boolean})],i.prototype,"datesInUnknownTimezone",void 0),e([t({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),e([t({type:String,json:{origins:{service:{read:{source:"displayField"}}}}})],i.prototype,"displayField",void 0),e([t({readOnly:!0,type:L})],i.prototype,"editFieldsInfo",void 0),e([t({readOnly:!0})],i.prototype,"editingInfo",void 0),e([a("editingInfo")],i.prototype,"readEditingInfo",null),e([t({readOnly:!0})],i.prototype,"effectiveCapabilities",null),e([t((()=>{const r=I(R),o=r.json.origins;return o["web-map"]={read:!1,write:!1},o["portal-item"]={read:!1,write:!1},r})())],i.prototype,"elevationInfo",void 0),e([t({type:P,json:{name:"layerDefinition.floorInfo",write:!0,origins:{"web-scene":{name:"layerDefinition.floorInfo",write:{enabled:!0,layerContainerTypes:M}}}}})],i.prototype,"floorInfo",void 0),e([t({type:T,json:{origins:{service:{read:{source:"extent"}}}}})],i.prototype,"fullExtent",void 0),e([t()],i.prototype,"gdbVersion",void 0),e([t({readOnly:!0,type:H,json:{read:{source:"geometryProperties"}}})],i.prototype,"geometryFieldsInfo",void 0),e([t({type:["point","polygon","polyline","multipoint","multipatch","mesh"],json:{origins:{service:{read:k.read}}}})],i.prototype,"geometryType",void 0),e([t({type:String})],i.prototype,"globalIdField",void 0),e([a("service","globalIdField",["globalIdField","fields"])],i.prototype,"readGlobalIdFieldFromService",null),e([t({readOnly:!0})],i.prototype,"hasFullEditingRestrictions",null),e([t({type:Boolean,json:{origins:{service:{read:!0}}}})],i.prototype,"hasM",void 0),e([t({readOnly:!0})],i.prototype,"hasUpdateItemRestrictions",null),e([t({type:Boolean,json:{origins:{service:{read:!0}}}})],i.prototype,"hasZ",void 0),e([t({readOnly:!0,type:B})],i.prototype,"heightModelInfo",void 0),e([t({type:Date})],i.prototype,"historicMoment",void 0),e([t({type:F.ofType(d),readOnly:!0})],i.prototype,"indexes",void 0),e([t({readOnly:!0})],i.prototype,"isTable",void 0),e([a("service","isTable",["type"])],i.prototype,"readIsTableFromService",null),e([t({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{read:!1,write:{target:"id"}}},read:!1}})],i.prototype,"layerId",void 0),e([t(U)],i.prototype,"maxScale",void 0),e([a("service","maxScale",["maxScale","effectiveMaxScale"])],i.prototype,"readMaxScale",null),e([t($)],i.prototype,"minScale",void 0),e([a("service","minScale",["minScale","effectiveMinScale"])],i.prototype,"readMinScale",null),e([t({type:String})],i.prototype,"objectIdField",void 0),e([a("service","objectIdField",["objectIdField","fields"])],i.prototype,"readObjectIdFieldFromService",null),e([t(f("preferredTimeReference"))],i.prototype,"preferredTimeZone",void 0),e([t({type:[q],readOnly:!0})],i.prototype,"relationships",void 0),e([t({type:Boolean})],i.prototype,"returnM",void 0),e([t({type:Boolean})],i.prototype,"returnZ",void 0),e([t({readOnly:!0,json:{write:!1}})],i.prototype,"serverGens",void 0),e([t({readOnly:!0})],i.prototype,"serviceDefinitionExpression",void 0),e([a("service","serviceDefinitionExpression",["definitionQuery","definitionExpression"])],i.prototype,"readServiceDefinitionExpression",null),e([t({type:String,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],i.prototype,"serviceItemId",void 0),e([t()],i.prototype,"sourceJSON",void 0),e([t({type:b,json:{origins:{service:{read:{source:"extent.spatialReference"}}}}})],i.prototype,"spatialReference",void 0),e([t({type:String,readOnly:!0,json:{origins:{service:{read:!0}}}})],i.prototype,"subtypeField",void 0),e([t({type:[W],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],i.prototype,"subtypes",void 0),e([t({type:String,json:{read:{source:"timeInfo.trackIdField"}}})],i.prototype,"trackIdField",void 0),e([t(A)],i.prototype,"url",null),e([j("url")],i.prototype,"writeUrl",null),e([t({json:{origins:{service:{read:!0}},read:!1}})],i.prototype,"version",void 0),e([a("service","version",["currentVersion","capabilities","drawingInfo","hasAttachments","htmlPopupType","relationships","timeInfo","typeIdField","types"])],i.prototype,"readVersion",null),i=e([h("esri.layers.mixins.FeatureLayerBase")],i),i};export{me as D};