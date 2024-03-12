import{e as s,c as u}from"./subclass-f7409b1b.js";import{c as a}from"./TimeExtent-579f0e32.js";import{d as l,l as d}from"./TimeInfo-c87ecbc7.js";import{y as p}from"./JSONSupport-acf2865c.js";import"./typedArrayUtil-2af43698.js";import"./Error-21d1d076.js";import{g as i}from"./fieldUtils-fcb2a714.js";const S=n=>{let e=class extends n{get timeInfo(){var r;const t=(r=this.associatedLayer)==null?void 0:r.timeInfo;if(t==null)return t;const o=t.clone();return i(o,this.fieldsIndex),o}set timeInfo(t){i(t,this.fieldsIndex),this._override("timeInfo",t)}get timeExtent(){var t;return(t=this.associatedLayer)==null?void 0:t.timeExtent}set timeExtent(t){this._override("timeExtent",t)}get timeOffset(){var t;return(t=this.associatedLayer)==null?void 0:t.timeOffset}set timeOffset(t){this._override("timeOffset",t)}get useViewTime(){var t;return((t=this.associatedLayer)==null?void 0:t.useViewTime)??!0}set useViewTime(t){this._override("useViewTime",t)}get datesInUnknownTimezone(){var t;return((t=this.associatedLayer)==null?void 0:t.datesInUnknownTimezone)??!1}set datesInUnknownTimezone(t){this._override("datesInUnknownTimezone",t)}};return s([p({type:l})],e.prototype,"timeInfo",null),s([p({type:a})],e.prototype,"timeExtent",null),s([p({type:d})],e.prototype,"timeOffset",null),s([p({type:Boolean,nonNullable:!0})],e.prototype,"useViewTime",null),s([p({type:Boolean,nonNullable:!0})],e.prototype,"datesInUnknownTimezone",null),e=s([u("esri.layers.mixins.TemporalSceneLayer")],e),e},T={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsAsyncApplyEdits:!1,zDefault:void 0},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}};export{S as m,T as s};
