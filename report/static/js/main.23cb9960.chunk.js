(this["webpackJsonpugs-hazards"]=this["webpackJsonpugs-hazards"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/qff-legend.3375e9ad.jpg"},,function(e,a,t){e.exports=t.p+"static/media/ugs-logo.46881887.jpg"},function(e,a,t){e.exports=t(50)},,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r,n,o,c=t(0),s=t.n(c),l=t(12),u=t.n(l),i=(t(22),t(1)),d=t.n(i),p=t(3),m=t(5),g=t(4),f=t(2),b=(t(24),"https://services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services"),h="".concat(b,"/Utah_Geologic_Hazards_Supplemental_Data_View/FeatureServer"),v={mapKeys:{overview:"overview-map",lidar:"lidar-map",aerials:"aerials-map"},scaleMultiple:2500,notProd:!1,urls:{baseUrl:b,hazardGroupingsTable:"".concat(b,"/Report_Tables_View/FeatureServer/0"),hazardGroupTextTable:"".concat(b,"/Report_Tables_View/FeatureServer/1"),hazardIntroTextTable:"".concat(b,"/Report_Tables_View/FeatureServer/2"),hazardReferenceTextTable:"".concat(b,"/Report_Tables_View/FeatureServer/3"),hazardUnitTextTable:"".concat(b,"/Report_Tables_View/FeatureServer/4"),imageAgenciesTable:"".concat(b,"/Report_Tables_View/FeatureServer/5"),otherDataTable:"".concat(b,"/Report_Tables_View/FeatureServer/7"),reportTextTable:"".concat(b,"/Report_Tables_View/FeatureServer/8"),lidarExtents:"".concat(h,"/2"),aerialImageryCenterPoints:"".concat(h,"/3")},groundshakingHazardCode:"EGS",quaternaryFaultsHazardCode:"QFF",queries:[["Utah_Geologic_Hazards/FeatureServer/0","FLH"],["Utah_Geologic_Hazards/FeatureServer/1","SGS"],["Utah_Geologic_Hazards/FeatureServer/2","LSS"],["Utah_Geologic_Hazards/FeatureServer/3","LSF"],["Utah_Geologic_Hazards/FeatureServer/4","LSC"],["Utah_Geologic_Hazards/FeatureServer/5","CAS"],["Utah_Geologic_Hazards/FeatureServer/6","CSS"],["Utah_Geologic_Hazards/FeatureServer/7","CRS"],["Utah_Geologic_Hazards/FeatureServer/8","EFH"],["Utah_Geologic_Hazards/FeatureServer/9","ERZ"],["Utah_Geologic_Hazards/FeatureServer/10","EXS"],["Utah_Geologic_Hazards/FeatureServer/11","GSP"],["Utah_Geologic_Hazards/FeatureServer/12","MKF"],["Utah_Geologic_Hazards/FeatureServer/13","PES"],["Utah_Geologic_Hazards/FeatureServer/14","GRS"],["Utah_Geologic_Hazards/FeatureServer/15","RFH"],["Utah_Geologic_Hazards/FeatureServer/16","SDH"],["Utah_Geologic_Hazards/FeatureServer/17","SBP"],["Utah_Geologic_Hazards/FeatureServer/18","SLS"],["Utah_Geologic_Hazards/FeatureServer/19","WSS"],["https://webmaps.geology.utah.gov/arcgis/rest/services/Hazards/quaternary_faults/MapServer/0","QFF"],["Utah_Earthquake_Hazards/FeatureServer/2","LQS"],["Utah_Earthquake_Hazards/FeatureServer/3","SFR"],["Utah_Earthquake_Hazards/FeatureServer/5","EGS"],["Utah_Geologic_Hazards/FeatureServer/21","VCN"],["Utah_Geologic_Hazards/FeatureServer/22","THR"],["Utah_Geologic_Hazards/FeatureServer/23","VOL"]],webMaps:{hazard:"a2d16377b4b5495ab2aaca8dd14463ba"}},y=t(13),S=Object(p.a)(d.a.mark((function e(){var a,t,r,n,o,c,s,l,u,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=["esri/WebMap","esri/views/MapView","esri/geometry/Polygon","esri/Graphic","esri/core/watchUtils","esri/symbols/support/symbolUtils","esri/widgets/ScaleBar"],e.next=3,Object(y.loadModules)(a,{version:"4.14",css:!0});case 3:return t=e.sent,r=Object(f.a)(t,7),n=r[0],o=r[1],c=r[2],s=r[3],l=r[4],u=r[5],i=r[6],e.abrupt("return",{WebMap:n,MapView:o,Polygon:c,Graphic:s,watchUtils:l,symbolUtils:u,ScaleBar:i});case 13:case"end":return e.stop()}}),e)}))),T=(t(25),Object(c.createContext)({visualAssets:{}})),_=function(e){console.log("HazardMap.render",e);var a=Object(c.useState)({}),t=Object(f.a)(a,2),l=t[0],u=t[1],i=Object(c.useState)(!1),m=Object(f.a)(i,2),g=m[0],b=m[1],h=Object(c.useState)(!1),y=Object(f.a)(h,2),_=y[0],z=y[1],H=Object(c.useContext)(re),x=H.registerProgressItem,O=H.setProgressItemAsComplete,j=function(){var a=Object(p.a)(d.a.mark((function a(){var t,c,s,l,u,i,p,m,g,f,h;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("HazardMap.createMap"),b(!0),a.next=4,S();case 4:return t=a.sent,c=t.WebMap,s=t.MapView,l=t.Polygon,u=t.Graphic,i=t.ScaleBar,p=document.createElement("div"),document.body.appendChild(p),m={type:"simple-line",color:"#f012be",width:4},g=new l(e.aoi),f=new u({geometry:g,symbol:m}),r=new c({portalItem:{id:v.webMaps.hazard}}),console.log("map created",r),n=new s({map:r,container:p,ui:{components:["attribution"]},extent:g.extent.expand(3),graphics:[f],constraints:{snapToZoom:!1}}),a.next=20,n.when();case 20:h=n.scale%v.scaleMultiple,n.scale+=v.scaleMultiple-h,o=new i({view:n,container:document.createElement("div"),unit:"dual"}),z(!0);case 24:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),w=function(e){return"screenshot-".concat(e)};return Object(c.useEffect)((function(){for(var a=0;a<e.queriesWithResults.length;a++){var t=Object(f.a)(e.queriesWithResults[a],1)[0];console.log("progressID",w(t)),x(w(t))}Object.keys(v.mapKeys).forEach((function(e){x(w(v.mapKeys[e])),console.log("progressID",w(v.mapKeys[e]))}))}),[e.queriesWithResults,x]),Object(c.useEffect)((function(){var a=function(){var a=Object(p.a)(d.a.mark((function a(){var t,r,n,o,c,s,l,i,m,g,b;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t={},console.log("query results",e.queriesWithResults),r=0;case 3:if(!(r<e.queriesWithResults.length)){a.next=18;break}return n=Object(f.a)(e.queriesWithResults[r],2),o=n[0],c=n[1],a.next=7,E(o,c);case 7:s=a.sent,l=s.screenshot,i=s.renderer,m=s.scale,g=s.scaleBarDom,O(w(o)),console.log("hazardcode",c),t[c]={mapImage:l.dataUrl,renderer:i,scale:m,scaleBarDom:g};case 15:r++,a.next=3;break;case 18:return b=function(){var e=Object(p.a)(d.a.mark((function e(a,r){var n,o,c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(r);case 2:n=e.sent,o=n.screenshot,c=n.scale,s=n.scaleBarDom,t[a]={mapImage:o.dataUrl,scale:c,scaleBarDom:s},O(w(a));case 8:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),a.next=21,b(v.mapKeys.overview);case 21:return a.next=23,b(v.mapKeys.lidar,v.urls.lidarExtents);case 23:return a.next=25,b(v.mapKeys.aerials,v.urls.aerialImageryCenterPoints);case 25:u(t);case 26:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();_&&e.queriesWithResults.length>0&&a()}),[e.queriesWithResults,_,O]),g||j(),s.a.createElement(s.a.Fragment,null,s.a.createElement(T.Provider,{value:{visualAssets:l}},e.children))},E=function(){var e=Object(p.a)(d.a.mark((function e(a,t){var c,s,l,u,i,p,m,g,f,b,h;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.when();case 2:s=0;case 3:if(!(s<r.layers.length)){e.next=19;break}if(l=r.layers.getItemAt(s),console.log("LAYER",l.layerId),u=void 0,i=void 0,"map-image"===l.type?(l=l.sublayers.items[0],u=l.url,i=l.parent):(u="".concat(l.url,"/").concat(l.layerId),console.log("TESTURL",u),i=l,console.log("loadLayer",i)),l.visible=!!a&&new RegExp("".concat(a.toUpperCase(),"$")).test(u.toUpperCase()),!l.visible){e.next=15;break}return e.next=13,i.load();case 13:c=l.renderer,l.parent&&(l.parent.visible=l.visible);case 15:case 16:s++,e.next=3;break;case 19:return e.next=21,S();case 21:if(p=e.sent,m=p.watchUtils,t!==v.groundshakingHazardCode){e.next=27;break}return g=n.scale,e.next=27,n.goTo({scale:2*n.scale});case 27:return e.next=29,m.whenFalseOnce(n,"updating");case 29:return e.next=31,n.takeScreenshot({width:2316,height:1431});case 31:if(f=e.sent,o.renderNow(),b=o.container.cloneNode(!0),h=n.scale,!g){e.next=38;break}return e.next=38,n.goTo({scale:g});case 38:return console.log("view.scale",h,t,c),e.abrupt("return",{screenshot:f,renderer:c,scale:h,scaleBarDom:b});case 40:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),z=(t(26),function(e){return s.a.createElement("div",{className:"page-break"},s.a.createElement("h1",{className:"group__heading",title:v.notProd&&"HazardGroupingsTable.HazardGroup"},e.name," Hazard"),s.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.text},title:v.notProd&&"HazardGroupTextTable.Text"}),e.children)}),H=t(7),x=(t(29),t(30),t(31),function(){return s.a.createElement("div",{className:"loader-container"},s.a.createElement("div",{className:"loader"},s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null)))}),O=function(e){var a=e.mapKey,t=Object(c.useRef)(),r=Object(c.useContext)(T).visualAssets,n=r&&r[a]&&r[a].mapImage,o=n?r[a].scale:0,l=n?r[a].scaleBarDom:null;return Object(c.useEffect)((function(){l&&t.current.appendChild(l)}),[l]),n?s.a.createElement(s.a.Fragment,null,s.a.createElement("img",{src:n,alt:"map",className:"map-surround__image"}),s.a.createElement("div",{className:"map-surround__parts"},s.a.createElement("div",{ref:t}),s.a.createElement("div",{className:"map-surround__scale-text"},"Scale 1:",Math.round(o).toLocaleString()))):s.a.createElement(x,null)},j=t(14),w=t.n(j),U=function(e){return s.a.createElement("div",{className:"page-break",id:Object(H.kebabCase)(e.name)},s.a.createElement("h2",{className:"group__heading",title:v.notProd&&"HazardGroupingsTable.HazardGroup (from parent)"},e.group," Hazard"),s.a.createElement("h2",{className:"hazard__heading",title:v.notProd&&"HazardUnitTextTable.HazardName (from first unit)"},e.name),s.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.introText},title:v.notProd&&"HazardIntroTextTable.Text"}),s.a.createElement(O,{mapKey:e.code}),e.code===v.quaternaryFaultsHazardCode&&s.a.createElement("img",{src:w.a,alt:"QFF static legend",className:"hazard__static-legend"}),e.children)},G=function(e){return console.log("unitCode",e),e.slice(-3).toUpperCase()},F=(t(32),function(e){console.log("HazardUnit",e);var a=Object(c.useState)(!1),t=Object(f.a)(a,2),r=t[0],n=t[1],o=Object(c.useRef)(null),l=Object(c.useContext)(T);return console.log("hasLegend",e.HazardName,r),console.log(o),console.log(l),Object(c.useEffect)((function(){console.log("poop",e);var a=function(){var a=Object(p.a)(d.a.mark((function a(t){var r,c,s,l;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("buildLegend",t),n(!0),a.next=4,S();case 4:if(r=a.sent,c=r.symbolUtils,s=[],"unique-value"===t.type&&(console.log("renderer type",e.HazardUnit),s=t.uniqueValueInfos.filter((function(a){return a.value===e.HazardUnit}))),console.log("renderers",s),1===s.length){a.next=11;break}return a.abrupt("return");case 11:return l=s[0].symbol.clone(),a.next=14,c.renderPreviewHTML(l,{node:o.current});case 14:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),t=l.visualAssets[G(e.HazardUnit)];console.log("ASSETS",t),!r&&t&&t.renderer&&a(t.renderer)}),[l]),s.a.createElement("div",{className:"unit"},s.a.createElement("div",{className:"legend-container"},s.a.createElement("div",{ref:o,className:"legend"}),s.a.createElement("div",null,s.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.Description},title:v.notProd&&"HazardUnitTextTable.Description"}))))}),R=function(e){return console.log("References.render"),s.a.createElement(s.a.Fragment,null,s.a.createElement("h3",null,"References"),e.references&&e.references.length>0?e.references.map((function(e,a){return s.a.createElement("p",{key:a,dangerouslySetInnerHTML:{__html:e},title:v.notProd&&"HazardReferenceTextTable.Text"})})):s.a.createElement("p",null,"None"))},N=t(6),k=t(15),I=t.n(k),P=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e};return I()().waitAndRetry(3).executeForPromise(Object(p.a)(d.a.mark((function t(){var r,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:if((r=t.sent).ok){t.next=5;break}return t.abrupt("return",Promise.reject(Object(g.a)(Object(g.a)({},r),{},{requestURL:e})));case 5:return t.next=7,r.json();case 7:if(!(n=t.sent).error){t.next=10;break}return t.abrupt("return",Promise.reject(Object(g.a)(Object(g.a)({},n),{},{requestURL:e})));case 10:return t.abrupt("return",a(n));case 11:case"end":return t.stop()}}),t)}))))},C=function(){var e=Object(p.a)(d.a.mark((function e(a,t){var r,n,o,c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("QueryService.queryUnitsAsync"),r=Object(f.a)(a,2),n=r[0],o=r[1],n.startsWith("https")||(n="".concat(v.urls.baseUrl,"/").concat(n)),c="".concat(o,"HazardUnit"),s={geometryType:"esriGeometryPolygon",geometry:JSON.stringify(t),returnGeometry:!1,outFields:c,f:"json"},e.next=7,P("".concat(n,"/query?").concat(Object(N.stringify)(s)),(function(e){return{units:e.features.map((function(e){return e.attributes[c]})),hazard:o,url:n}}));case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),M=function(e){return e.map((function(e){return G(e)}))},q=function(){var e=Object(p.a)(d.a.mark((function e(a,t,r,n){var o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={where:t,outFields:r,f:"json",orderByFields:n},e.next=3,P("".concat(a,"/query?").concat(Object(N.stringify)(o)),(function(e){return e.features.map((function(e){return e.attributes}))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(a,t,r,n){return e.apply(this,arguments)}}(),A=function(e){console.log("QueryService.queryHazardUnitTableAsync");var a="HazardUnit IN ('".concat(e.join("','"),"')");return q(v.urls.hazardUnitTextTable,a,"HazardName,HazardUnit,HowToUse,Description,UnitName")},D=function(e){console.log("QueryService.queryReferenceTableAsync"),e=M(e);var a="Hazard IN ('".concat(e.join("','"),"')");return q(v.urls.hazardReferenceTextTable,a,"Hazard,Text")},L=function(e){console.log("QueryService.queryIntroTextAsync"),e=M(e);var a="Hazard IN ('".concat(e.join("','"),"')");return q(v.urls.hazardIntroTextTable,a,"Hazard,Text")},V=function(e){console.log("QueryService.queryGroupingAsync"),e=M(e);var a="HazardCode IN ('".concat(e.join("','"),"')");return q(v.urls.hazardGroupingsTable,a,"HazardCode,HazardGroup")},W=function(e){console.log("QueryService.queryGroupTextAsync");var a="HazardGroup IN ('".concat(e.join("','"),"')");return q(v.urls.hazardGroupTextTable,a,"HazardGroup,Text","Order_ ASC")},B=function(){console.log("QueryService.queryReportTextTableAsync");return q(v.urls.reportTextTable,"1=1","Section,Text")},K=function(){console.log("QueryService.queryOtherDataTable");return q(v.urls.otherDataTable,"1=1","Data,Introduction,HowToUse,References_")},Q=t(16),J=t.n(Q),Z=(t(45),new Date),X=function(e){e.aoiDescription,e.aoi;var a=e.Introduction,t=e.Disclaimer;return s.a.createElement("div",{className:"cover-page"},s.a.createElement("div",{className:"header"},s.a.createElement("h1",null,"Utah Geological Survey"),s.a.createElement("img",{src:J.a,alt:"dnr logo",className:"logo"}),s.a.createElement("h3",null,"GEOLOGIC HAZARDS MAPPING AND DATA CUSTOM REPORT"),s.a.createElement("p",{dangerouslySetInnerHTML:{__html:"Report generated on ".concat(Z.toLocaleDateString()," at ").concat(Z.toLocaleTimeString())}})),s.a.createElement("p",{dangerouslySetInnerHTML:{__html:a},title:v.notProd&&"ReportTextTable.Text(Introduction)"}),s.a.createElement(O,{mapKey:v.mapKeys.overview}),s.a.createElement("p",{dangerouslySetInnerHTML:{__html:t},title:v.notProd&&"ReportTextTable.Text(Disclaimer)"}))},Y=(t(46),function(e){console.log("SummaryPage.render",e);var a=[];return Object.values(e.groupToHazardMap).forEach((function(t){t.forEach((function(t){a=a.concat(e.hazardToUnitMap[t])}))})),s.a.createElement("div",{className:"page-break summary-page"},s.a.createElement("div",{className:"header"},s.a.createElement("h1",null,"Report Summary")),s.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.Top},title:v.notProd&&"ReportTextTable.Text(Top)"}),s.a.createElement("p",{dangerouslySetInnerHTML:{__html:e["Table1headingautogenerated table"]},title:v.notProd&&"ReportTextTable.Text(Table 1 heading...)"}),s.a.createElement("table",{className:"summary-page__table summary-page__table--bordered"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Mapped Geologic Hazards"),s.a.createElement("th",null,"Hazard Category"))),s.a.createElement("tbody",null,a.map((function(e,a){return s.a.createElement("tr",{key:a},s.a.createElement("td",null,s.a.createElement("a",{href:"#".concat(Object(H.kebabCase)(e.HazardName))},e.HazardName)),s.a.createElement("td",null,e.UnitName))})))),s.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.Bottom},title:v.notProd&&"ReportTextTable.Text(Bottom)"}))}),$=(t(47),t(9)),ee=t.n($),ae=(t(48),function(e){console.log("Progress.render");var a=Object.values(e.tasks),t=a.length,r=0,n=0;t>0&&(n=(r=a.filter((function(e){return e})).length)/t*100);var o=ee()("progress-bar","progress-bar--striped",{"progress-bar--animated":t>r}),c=ee()(e.className);return s.a.createElement("div",{className:c},r<t?s.a.createElement("div",{className:"progress"},s.a.createElement("div",{className:o,style:{width:"".concat(n,"%")},role:"progressbar","area-valuenow":n,"aria-valuemin":"0","aria-valuemax":t})):e.children)}),te=(t(49),function(e){return s.a.createElement("div",{className:"error-page"},s.a.createElement("h1",{className:"error-page__heading"},"There was an error generating the report"),s.a.createElement("p",null,"We are not displaying the report because an error has occurred resulting in an incomplete assessment of your area of interest. In order to not provide incomplete results and imply false information, we are unable to provide the report functionality at this time."),s.a.createElement("p",null,"Please contact UGS with the information provided."),s.a.createElement("pre",{className:"error-page__error"},JSON.stringify(e.error,null,2)))}),re=Object(c.createContext)();console.log("using web map: ".concat(v.webMaps.hazard));var ne=function(e){var a=Object(c.useState)({}),t=Object(f.a)(a,2),r=t[0],n=t[1],o=Object(c.useState)({}),l=Object(f.a)(o,2),u=l[0],i=l[1],b=Object(c.useState)(),h=Object(f.a)(b,2),y=h[0],S=h[1],T=Object(c.useState)(),E=Object(f.a)(T,2),H=E[0],x=E[1],O=Object(c.useState)([]),j=Object(f.a)(O,2),w=j[0],N=j[1],k=Object(c.useState)([]),I=Object(f.a)(k,2),P=I[0],M=I[1],q=Object(c.useState)({}),Q=Object(f.a)(q,2),J=Q[0],Z=Q[1],$=Object(c.useState)({}),ee=Object(f.a)($,2),ne=(ee[0],ee[1]),oe=Object(c.useState)({}),ce=Object(f.a)(oe,2),se=ce[0],le=ce[1],ue=Object(c.useState)(!1),ie=Object(f.a)(ue,2),de=ie[0],pe=ie[1],me=Object(c.useCallback)((function(e){le((function(a){if(a[e])throw Error("".concat(e," is already registered as a progress task!"));return Object(g.a)(Object(g.a)({},a),{},Object(m.a)({},e,!1))}))}),[]),ge=Object(c.useCallback)((function(e){le((function(a){return Object(g.a)(Object(g.a)({},a),{},Object(m.a)({},e,!0))}))}),[]);return Object(c.useEffect)((function(){var a=function(){var a=Object(p.a)(d.a.mark((function a(){var t,r,o,c,s,l,u,p,m,g,b,h,y,T,_,E,z,H,O;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("App.getData"),me(t="related tables"),a.next=5,Promise.all(v.queries.map((function(a){return me(a),C(a,e.polygon).then((function(e){return ge(a),e}))})));case 5:return r=a.sent,console.log("queried all units"),o=r.filter((function(e){return e.units.length>0})),c=Array.from(new Set(o.reduce((function(e,a){var t=a.units;return e.concat(t)}),[]))),N(o.map((function(e){return[e.url,e.hazard]}))),a.next=12,Promise.all([V(c),L(c),A(c),D(c),B(),K()]);case 12:return s=a.sent,l=Object(f.a)(s,6),u=l[0],p=l[1],m=l[2],g=l[3],b=l[4],h=l[5],ge(t),y={},h.forEach((function(e){y[e.Data]=e})),ne(y),T={},b.forEach((function(e){var a=e.Section,t=e.Text;T[a]=t})),Z(T),_=Array.from(new Set(u.map((function(e){return e.HazardGroup})))),a.next=30,W(_);case 30:E=a.sent,z={},H={},E.forEach((function(e){var a=e.HazardGroup,t=e.Text;z[a]=t,H[a]=[]})),O={},m.forEach((function(e){var a=e.HazardUnit,t=e.HazardName,r=e.HowToUse,n=e.Description,o=e.UnitName,c=G(a);O[c]||(O[c]=[]),O[c].push({HazardName:t,HowToUse:r,Description:n,HazardUnit:a,UnitName:o})})),u.forEach((function(e){var a=e.HazardCode,t=e.HazardGroup;return H[t].push(a)})),i(O),n(H),S(p),x(g),M(z);case 42:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();e.polygon&&a().then(null,(function(e){console.warn(e),pe(e)}))}),[e.polygon,me,ge]),de?s.a.createElement(te,{error:de}):s.a.createElement(s.a.Fragment,null,s.a.createElement(re.Provider,{value:{registerProgressItem:me,setProgressItemAsComplete:ge}},s.a.createElement(ae,{className:"print--hide",tasks:se},s.a.createElement("div",{className:"print-button"},s.a.createElement("button",{onClick:window.print},"Print Report"))),s.a.createElement("div",{className:"app__container"},s.a.createElement(_,{aoi:e.polygon,queriesWithResults:w},s.a.createElement(X,Object.assign({aoiDescription:e.description},J)),s.a.createElement(Y,Object.assign({},J,{hazardToUnitMap:u,groupToHazardMap:r})),Object.keys(r).map((function(e){return s.a.createElement(z,{key:e,name:e,text:P[e]},y&&H&&u&&r[e].map((function(a){var t=y.filter((function(e){return e.Hazard===a}))[0],r=t?t.Text:null,n=H.filter((function(e){return e.Hazard===a})),o=u[a];return s.a.createElement(U,{name:o[0].HazardName,group:e,introText:r,key:a,code:a},o.map((function(e,a){return s.a.createElement(F,Object.assign({key:a},e))})),s.a.createElement(R,{references:n.map((function(e){return e.Text}))}))})))}))),s.a.createElement("div",{className:"header page-break"},s.a.createElement("h1",null,"OTHER GEOLOGIC HAZARD RESOURCES"),s.a.createElement("p",{dangerouslySetInnerHTML:{__html:J.OtherGeologicHazardResources},title:v.notProd&&"ReportTextTable.Text(OtherGeologicHazardResources)"})))))};console.log("app version: ".concat("1.0.3")),console.log("environment: ".concat("production"));var oe=function(e){console.log("aoi",e),u.a.render(s.a.createElement(ne,e),document.getElementById("root"))},ce=localStorage.getItem("aoi");ce?oe(JSON.parse(ce)):t.e(3).then(t.t.bind(null,51,3)).then((function(e){return oe(e)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.23cb9960.chunk.js.map