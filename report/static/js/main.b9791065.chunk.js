(this["webpackJsonpugs-hazards"]=this["webpackJsonpugs-hazards"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/qff-legend.3375e9ad.jpg"},,function(e,t,a){e.exports=a.p+"static/media/ugs-logo.46881887.jpg"},function(e,t,a){e.exports=a(50)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r,n,c,o=a(0),s=a.n(o),u=a(12),l=a.n(u),i=(a(22),a(1)),d=a.n(i),m=a(3),p=a(5),f=a(4),b=a(2),h=(a(24),"https://services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services"),g="".concat(h,"/Utah_Geologic_Hazards_Supplemental_Data_View/FeatureServer"),v={mapKeys:{overview:"overview-map",lidar:"lidar-map",aerials:"aerials-map"},scaleMultiple:2500,notProd:!1,urls:{baseUrl:h,hazardGroupingsTable:"".concat(h,"/Report_Tables_View/FeatureServer/0"),hazardGroupTextTable:"".concat(h,"/Report_Tables_View/FeatureServer/1"),hazardIntroTextTable:"".concat(h,"/Report_Tables_View/FeatureServer/2"),hazardReferenceTextTable:"".concat(h,"/Report_Tables_View/FeatureServer/3"),hazardUnitTextTable:"".concat(h,"/Report_Tables_View/FeatureServer/4"),imageAgenciesTable:"".concat(h,"/Report_Tables_View/FeatureServer/5"),otherDataTable:"".concat(h,"/Report_Tables_View/FeatureServer/7"),reportTextTable:"".concat(h,"/Report_Tables_View/FeatureServer/8"),lidarExtents:"".concat(g,"/2"),aerialImageryCenterPoints:"".concat(g,"/3")},groundshakingHazardCode:"EGS",quaternaryFaultsHazardCode:"QFF",queries:[["Utah_Geologic_Hazards/FeatureServer/0","FLH"],["Utah_Geologic_Hazards/FeatureServer/1","SGS"],["Utah_Geologic_Hazards/FeatureServer/2","LSS"],["Utah_Geologic_Hazards/FeatureServer/3","LSF"],["Utah_Geologic_Hazards/FeatureServer/4","LSC"],["Utah_Geologic_Hazards/FeatureServer/5","CAS"],["Utah_Geologic_Hazards/FeatureServer/6","CSS"],["Utah_Geologic_Hazards/FeatureServer/7","CRS"],["Utah_Geologic_Hazards/FeatureServer/8","EFH"],["Utah_Geologic_Hazards/FeatureServer/9","ERZ"],["Utah_Geologic_Hazards/FeatureServer/10","EXS"],["Utah_Geologic_Hazards/FeatureServer/11","GSP"],["Utah_Geologic_Hazards/FeatureServer/12","MKF"],["Utah_Geologic_Hazards/FeatureServer/13","PES"],["Utah_Geologic_Hazards/FeatureServer/14","GRS"],["Utah_Geologic_Hazards/FeatureServer/15","RFH"],["Utah_Geologic_Hazards/FeatureServer/16","SDH"],["Utah_Geologic_Hazards/FeatureServer/17","SBP"],["Utah_Geologic_Hazards/FeatureServer/18","SLS"],["Utah_Geologic_Hazards/FeatureServer/19","WSS"],["https://webmaps.geology.utah.gov/arcgis/rest/services/Hazards/quaternary_faults/MapServer/0","QFF"],["Utah_Earthquake_Hazards/FeatureServer/2","LQS"],["Utah_Earthquake_Hazards/FeatureServer/3","SFR"],["Utah_Earthquake_Hazards/FeatureServer/5","EGS"],["Utah_Geologic_Hazards/FeatureServer/21","VCN"],["Utah_Geologic_Hazards/FeatureServer/22","THR"],["Utah_Geologic_Hazards/FeatureServer/23","VOL"]],webMaps:{hazard:"a2d16377b4b5495ab2aaca8dd14463ba"}},_=a(13),y=Object(m.a)(d.a.mark((function e(){var t,a,r,n,c,o,s,u,l,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=["esri/WebMap","esri/views/MapView","esri/geometry/Polygon","esri/Graphic","esri/core/watchUtils","esri/symbols/support/symbolUtils","esri/widgets/ScaleBar"],e.next=3,Object(_.loadModules)(t,{version:"4.14",css:!0});case 3:return a=e.sent,r=Object(b.a)(a,7),n=r[0],c=r[1],o=r[2],s=r[3],u=r[4],l=r[5],i=r[6],e.abrupt("return",{WebMap:n,MapView:c,Polygon:o,Graphic:s,watchUtils:u,symbolUtils:l,ScaleBar:i});case 13:case"end":return e.stop()}}),e)}))),S=(a(25),Object(o.createContext)({visualAssets:{}})),T=function(e){var t=Object(o.useState)({}),a=Object(b.a)(t,2),u=a[0],l=a[1],i=Object(o.useState)(!1),p=Object(b.a)(i,2),f=p[0],h=p[1],g=Object(o.useState)(!1),_=Object(b.a)(g,2),T=_[0],x=_[1],H=Object(o.useContext)(re),z=H.registerProgressItem,O=H.setProgressItemAsComplete,j=function(){var t=Object(m.a)(d.a.mark((function t(){var a,o,s,u,l,i,m,p,f,b,g;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return h(!0),t.next=3,y();case 3:return a=t.sent,o=a.WebMap,s=a.MapView,u=a.Polygon,l=a.Graphic,i=a.ScaleBar,m=document.createElement("div"),document.body.appendChild(m),p={type:"simple-line",color:"#f012be",width:4},f=new u(e.aoi),b=new l({geometry:f,symbol:p}),r=new o({portalItem:{id:v.webMaps.hazard}}),n=new s({map:r,container:m,ui:{components:["attribution"]},extent:f.extent.expand(3),graphics:[b],constraints:{snapToZoom:!1}}),t.next=18,n.when();case 18:g=n.scale%v.scaleMultiple,n.scale+=v.scaleMultiple-g,c=new i({view:n,container:document.createElement("div"),unit:"dual"}),x(!0);case 22:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),w=function(e){return"screenshot-".concat(e)};return Object(o.useEffect)((function(){for(var t=0;t<e.queriesWithResults.length;t++){var a=Object(b.a)(e.queriesWithResults[t],1)[0];z(w(a))}Object.keys(v.mapKeys).forEach((function(e){z(w(v.mapKeys[e]))}))}),[e.queriesWithResults,z]),Object(o.useEffect)((function(){var t=function(){var t=Object(m.a)(d.a.mark((function t(){var a,r,n,c,o,s,u,i,p,f,h;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a={},r=0;case 2:if(!(r<e.queriesWithResults.length)){t.next=16;break}return n=Object(b.a)(e.queriesWithResults[r],2),c=n[0],o=n[1],t.next=6,E(c,o);case 6:s=t.sent,u=s.screenshot,i=s.renderer,p=s.scale,f=s.scaleBarDom,O(w(c)),a[o]={mapImage:u.dataUrl,renderer:i,scale:p,scaleBarDom:f};case 13:r++,t.next=2;break;case 16:return h=function(){var e=Object(m.a)(d.a.mark((function e(t,r){var n,c,o,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(r);case 2:n=e.sent,c=n.screenshot,o=n.scale,s=n.scaleBarDom,a[t]={mapImage:c.dataUrl,scale:o,scaleBarDom:s},O(w(t));case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),t.next=19,h(v.mapKeys.overview);case 19:return t.next=21,h(v.mapKeys.lidar,v.urls.lidarExtents);case 21:return t.next=23,h(v.mapKeys.aerials,v.urls.aerialImageryCenterPoints);case 23:l(a);case 24:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();T&&e.queriesWithResults.length>0&&t()}),[e.queriesWithResults,T,O]),f||j(),s.a.createElement(s.a.Fragment,null,s.a.createElement(S.Provider,{value:{visualAssets:u}},e.children))},E=function(){var e=Object(m.a)(d.a.mark((function e(t,a){var o,s,u,l,i,m,p,f,b,h,g;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.when();case 2:s=0;case 3:if(!(s<r.layers.length)){e.next=18;break}if(u=r.layers.getItemAt(s),l=void 0,i=void 0,"map-image"===u.type?(u=u.sublayers.items[0],l=u.url,i=u.parent):(l="".concat(u.url,"/").concat(u.layerId),i=u),u.visible=!!t&&new RegExp("".concat(t.toUpperCase(),"$")).test(l.toUpperCase()),!u.visible){e.next=14;break}return e.next=12,i.load();case 12:o=u.renderer,u.parent&&(u.parent.visible=u.visible);case 14:case 15:s++,e.next=3;break;case 18:return e.next=20,y();case 20:if(m=e.sent,p=m.watchUtils,a!==v.groundshakingHazardCode){e.next=26;break}return f=n.scale,e.next=26,n.goTo({scale:2*n.scale});case 26:return e.next=28,p.whenFalseOnce(n,"updating");case 28:return e.next=30,n.takeScreenshot({width:2316,height:1431});case 30:if(b=e.sent,c.renderNow(),h=c.container.cloneNode(!0),g=n.scale,!f){e.next=37;break}return e.next=37,n.goTo({scale:f});case 37:return e.abrupt("return",{screenshot:b,renderer:o,scale:g,scaleBarDom:h});case 38:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),x=(a(26),function(e){return s.a.createElement("div",{className:"page-break"},s.a.createElement("h1",{className:"group__heading",title:v.notProd&&"HazardGroupingsTable.HazardGroup"},e.name," Hazard"),s.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.text},title:v.notProd&&"HazardGroupTextTable.Text"}),e.children)}),H=a(7),z=(a(29),a(30),a(31),function(){return s.a.createElement("div",{className:"loader-container"},s.a.createElement("div",{className:"loader"},s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null)))}),O=function(e){var t=e.mapKey,a=Object(o.useRef)(),r=Object(o.useContext)(S).visualAssets,n=r&&r[t]&&r[t].mapImage,c=n?r[t].scale:0,u=n?r[t].scaleBarDom:null;return Object(o.useEffect)((function(){u&&a.current.appendChild(u)}),[u]),n?s.a.createElement(s.a.Fragment,null,s.a.createElement("img",{src:n,alt:"map",className:"map-surround__image"}),s.a.createElement("div",{className:"map-surround__parts"},s.a.createElement("div",{ref:a}),s.a.createElement("div",{className:"map-surround__scale-text"},"Scale 1:",Math.round(c).toLocaleString()))):s.a.createElement(z,null)},j=a(14),w=a.n(j),U=function(e){return s.a.createElement("div",{className:"page-break",id:Object(H.kebabCase)(e.name)},s.a.createElement("h2",{className:"group__heading",title:v.notProd&&"HazardGroupingsTable.HazardGroup (from parent)"},e.group," Hazard"),s.a.createElement("h2",{className:"hazard__heading",title:v.notProd&&"HazardUnitTextTable.HazardName (from first unit)"},e.name),s.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.introText},title:v.notProd&&"HazardIntroTextTable.Text"}),s.a.createElement(O,{mapKey:e.code}),e.code===v.quaternaryFaultsHazardCode&&s.a.createElement("img",{src:w.a,alt:"QFF static legend",className:"hazard__static-legend"}),e.children)},G=function(e){return e.slice(-3).toUpperCase()},F=(a(32),function(e){var t=Object(o.useState)(!1),a=Object(b.a)(t,2),r=a[0],n=a[1],c=Object(o.useRef)(null),u=Object(o.useContext)(S);return Object(o.useEffect)((function(){var t=function(){var t=Object(m.a)(d.a.mark((function t(a){var r,o,s,u;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(!0),t.next=3,y();case 3:if(r=t.sent,o=r.symbolUtils,s=[],"unique-value"===a.type&&(s=a.uniqueValueInfos.filter((function(t){return t.value===e.HazardUnit}))),1===s.length){t.next=9;break}return t.abrupt("return");case 9:return u=s[0].symbol.clone(),t.next=12,o.renderPreviewHTML(u,{node:c.current});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),a=u.visualAssets[G(e.HazardUnit)];!r&&a&&a.renderer&&t(a.renderer)}),[u]),s.a.createElement("div",{className:"unit"},s.a.createElement("div",{className:"legend-container"},s.a.createElement("div",{ref:c,className:"legend"}),s.a.createElement("div",null,s.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.Description},title:v.notProd&&"HazardUnitTextTable.Description"}))))}),N=function(e){return console.log("References.render"),s.a.createElement(s.a.Fragment,null,s.a.createElement("h3",null,"References"),e.references&&e.references.length>0?e.references.map((function(e,t){return s.a.createElement("p",{key:t,dangerouslySetInnerHTML:{__html:e},title:v.notProd&&"HazardReferenceTextTable.Text"})})):s.a.createElement("p",null,"None"))},R=a(6),k=a(15),I=a.n(k),P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e};return I()().waitAndRetry(3).executeForPromise(Object(m.a)(d.a.mark((function a(){var r,n;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch(e);case 2:if((r=a.sent).ok){a.next=5;break}return a.abrupt("return",Promise.reject(Object(f.a)(Object(f.a)({},r),{},{requestURL:e})));case 5:return a.next=7,r.json();case 7:if(!(n=a.sent).error){a.next=10;break}return a.abrupt("return",Promise.reject(Object(f.a)(Object(f.a)({},n),{},{requestURL:e})));case 10:return a.abrupt("return",t(n));case 11:case"end":return a.stop()}}),a)}))))},C=function(){var e=Object(m.a)(d.a.mark((function e(t,a){var r,n,c,o,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("QueryService.queryUnitsAsync"),r=Object(b.a)(t,2),n=r[0],c=r[1],n.startsWith("https")||(n="".concat(v.urls.baseUrl,"/").concat(n)),o="".concat(c,"HazardUnit"),s={geometryType:"esriGeometryPolygon",geometry:JSON.stringify(a),returnGeometry:!1,outFields:o,f:"json"},e.next=7,P("".concat(n,"/query?").concat(Object(R.stringify)(s)),(function(e){return{units:e.features.map((function(e){return e.attributes[o]})),hazard:c,url:n}}));case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),M=function(e){return e.map((function(e){return G(e)}))},q=function(){var e=Object(m.a)(d.a.mark((function e(t,a,r,n){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={where:a,outFields:r,f:"json",orderByFields:n},e.next=3,P("".concat(t,"/query?").concat(Object(R.stringify)(c)),(function(e){return e.features.map((function(e){return e.attributes}))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,a,r,n){return e.apply(this,arguments)}}(),A=function(e){console.log("QueryService.queryHazardUnitTableAsync");var t="HazardUnit IN ('".concat(e.join("','"),"')");return q(v.urls.hazardUnitTextTable,t,"HazardName,HazardUnit,HowToUse,Description,UnitName")},D=function(e){console.log("QueryService.queryReferenceTableAsync"),e=M(e);var t="Hazard IN ('".concat(e.join("','"),"')");return q(v.urls.hazardReferenceTextTable,t,"Hazard,Text")},L=function(e){console.log("QueryService.queryIntroTextAsync"),e=M(e);var t="Hazard IN ('".concat(e.join("','"),"')");return q(v.urls.hazardIntroTextTable,t,"Hazard,Text")},V=function(e){console.log("QueryService.queryGroupingAsync"),e=M(e);var t="HazardCode IN ('".concat(e.join("','"),"')");return q(v.urls.hazardGroupingsTable,t,"HazardCode,HazardGroup")},B=function(e){console.log("QueryService.queryGroupTextAsync");var t="HazardGroup IN ('".concat(e.join("','"),"')");return q(v.urls.hazardGroupTextTable,t,"HazardGroup,Text","Order_ ASC")},W=function(){console.log("QueryService.queryReportTextTableAsync");return q(v.urls.reportTextTable,"1=1","Section,Text")},Q=function(){console.log("QueryService.queryOtherDataTable");return q(v.urls.otherDataTable,"1=1","Data,Introduction,HowToUse,References_")},K=a(16),J=a.n(K),Z=(a(45),new Date),X=function(e){e.aoiDescription,e.aoi;var t=e.Introduction,a=e.Disclaimer;return s.a.createElement("div",{className:"cover-page"},s.a.createElement("div",{className:"header"},s.a.createElement("h1",null,"Utah Geological Survey"),s.a.createElement("img",{src:J.a,alt:"dnr logo",className:"logo"}),s.a.createElement("h3",null,"GEOLOGIC HAZARDS MAPPING AND DATA CUSTOM REPORT"),s.a.createElement("p",{dangerouslySetInnerHTML:{__html:"Report generated on ".concat(Z.toLocaleDateString()," at ").concat(Z.toLocaleTimeString())}})),s.a.createElement("p",{dangerouslySetInnerHTML:{__html:t},title:v.notProd&&"ReportTextTable.Text(Introduction)"}),s.a.createElement(O,{mapKey:v.mapKeys.overview}),s.a.createElement("p",{dangerouslySetInnerHTML:{__html:a},title:v.notProd&&"ReportTextTable.Text(Disclaimer)"}))},$=(a(46),function(e){console.log("SummaryPage.render",e);var t=[];return Object.values(e.groupToHazardMap).forEach((function(a){a.forEach((function(a){t=t.concat(e.hazardToUnitMap[a])}))})),s.a.createElement("div",{className:"page-break summary-page"},s.a.createElement("div",{className:"header"},s.a.createElement("h1",null,"Report Summary")),s.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.Top},title:v.notProd&&"ReportTextTable.Text(Top)"}),s.a.createElement("p",{dangerouslySetInnerHTML:{__html:e["Table1headingautogenerated table"]},title:v.notProd&&"ReportTextTable.Text(Table 1 heading...)"}),s.a.createElement("table",{className:"summary-page__table summary-page__table--bordered"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Mapped Geologic Hazards"),s.a.createElement("th",null,"Hazard Category"))),s.a.createElement("tbody",null,t.map((function(e,t){return s.a.createElement("tr",{key:t},s.a.createElement("td",null,s.a.createElement("a",{href:"#".concat(Object(H.kebabCase)(e.HazardName))},e.HazardName)),s.a.createElement("td",null,e.UnitName))})))),s.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.Bottom},title:v.notProd&&"ReportTextTable.Text(Bottom)"}))}),Y=(a(47),a(9)),ee=a.n(Y),te=(a(48),function(e){console.log("Progress.render");var t=Object.values(e.tasks),a=t.length,r=0,n=0;a>0&&(n=(r=t.filter((function(e){return e})).length)/a*100);var c=ee()("progress-bar","progress-bar--striped",{"progress-bar--animated":a>r}),o=ee()(e.className);return s.a.createElement("div",{className:o},r<a?s.a.createElement("div",{className:"progress"},s.a.createElement("div",{className:c,style:{width:"".concat(n,"%")},role:"progressbar","area-valuenow":n,"aria-valuemin":"0","aria-valuemax":a})):e.children)}),ae=(a(49),function(e){return s.a.createElement("div",{className:"error-page"},s.a.createElement("h1",{className:"error-page__heading"},"There was an error generating the report"),s.a.createElement("p",null,"We are not displaying the report because an error has occurred resulting in an incomplete assessment of your area of interest. In order to not provide incomplete results and imply false information, we are unable to provide the report functionality at this time."),s.a.createElement("p",null,"Please contact UGS with the information provided."),s.a.createElement("pre",{className:"error-page__error"},JSON.stringify(e.error,null,2)))}),re=Object(o.createContext)();console.log("using web map: ".concat(v.webMaps.hazard));var ne=function(e){var t=Object(o.useState)({}),a=Object(b.a)(t,2),r=a[0],n=a[1],c=Object(o.useState)({}),u=Object(b.a)(c,2),l=u[0],i=u[1],h=Object(o.useState)(),g=Object(b.a)(h,2),_=g[0],y=g[1],S=Object(o.useState)(),E=Object(b.a)(S,2),H=E[0],z=E[1],O=Object(o.useState)([]),j=Object(b.a)(O,2),w=j[0],R=j[1],k=Object(o.useState)([]),I=Object(b.a)(k,2),P=I[0],M=I[1],q=Object(o.useState)({}),K=Object(b.a)(q,2),J=K[0],Z=K[1],Y=Object(o.useState)({}),ee=Object(b.a)(Y,2),ne=(ee[0],ee[1]),ce=Object(o.useState)({}),oe=Object(b.a)(ce,2),se=oe[0],ue=oe[1],le=Object(o.useState)(!1),ie=Object(b.a)(le,2),de=ie[0],me=ie[1],pe=Object(o.useCallback)((function(e){ue((function(t){if(t[e])throw Error("".concat(e," is already registered as a progress task!"));return Object(f.a)(Object(f.a)({},t),{},Object(p.a)({},e,!1))}))}),[]),fe=Object(o.useCallback)((function(e){ue((function(t){return Object(f.a)(Object(f.a)({},t),{},Object(p.a)({},e,!0))}))}),[]);return Object(o.useEffect)((function(){var t=function(){var t=Object(m.a)(d.a.mark((function t(){var a,r,c,o,s,u,l,m,p,f,h,g,_,S,T,E,x,H,O;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return pe(a="related tables"),t.next=4,Promise.all(v.queries.map((function(t){return pe(t),C(t,e.polygon).then((function(e){return fe(t),e}))})));case 4:return r=t.sent,console.log("queried all units"),c=r.filter((function(e){return e.units.length>0})),o=Array.from(new Set(c.reduce((function(e,t){var a=t.units;return e.concat(a)}),[]))),R(c.map((function(e){return[e.url,e.hazard]}))),t.next=11,Promise.all([V(o),L(o),A(o),D(o),W(),Q()]);case 11:return s=t.sent,u=Object(b.a)(s,6),l=u[0],m=u[1],p=u[2],f=u[3],h=u[4],g=u[5],fe(a),_={},g.forEach((function(e){_[e.Data]=e})),ne(_),S={},h.forEach((function(e){var t=e.Section,a=e.Text;S[t]=a})),Z(S),T=Array.from(new Set(l.map((function(e){return e.HazardGroup})))),t.next=29,B(T);case 29:E=t.sent,x={},H={},E.forEach((function(e){var t=e.HazardGroup,a=e.Text;x[t]=a,H[t]=[]})),O={},p.forEach((function(e){var t=e.HazardUnit,a=e.HazardName,r=e.HowToUse,n=e.Description,c=e.UnitName,o=G(t);O[o]||(O[o]=[]),O[o].push({HazardName:a,HowToUse:r,Description:n,HazardUnit:t,UnitName:c})})),l.forEach((function(e){var t=e.HazardCode,a=e.HazardGroup;return H[a].push(t)})),i(O),n(H),y(m),z(f),M(x);case 41:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e.polygon&&t().then(null,(function(e){console.warn(e),me(e)}))}),[e.polygon,pe,fe]),de?s.a.createElement(ae,{error:de}):s.a.createElement(s.a.Fragment,null,s.a.createElement(re.Provider,{value:{registerProgressItem:pe,setProgressItemAsComplete:fe}},s.a.createElement(te,{className:"print--hide",tasks:se},s.a.createElement("div",{className:"print-button"},s.a.createElement("button",{onClick:window.print},"Print Report"))),s.a.createElement("div",{className:"app__container"},s.a.createElement(T,{aoi:e.polygon,queriesWithResults:w},s.a.createElement(X,Object.assign({aoiDescription:e.description},J)),s.a.createElement($,Object.assign({},J,{hazardToUnitMap:l,groupToHazardMap:r})),Object.keys(r).map((function(e){return s.a.createElement(x,{key:e,name:e,text:P[e]},_&&H&&l&&r[e].map((function(t){var a=_.filter((function(e){return e.Hazard===t}))[0],r=a?a.Text:null,n=H.filter((function(e){return e.Hazard===t})),c=l[t];return s.a.createElement(U,{name:c[0].HazardName,group:e,introText:r,key:t,code:t},c.map((function(e,t){return s.a.createElement(F,Object.assign({key:t},e))})),s.a.createElement(N,{references:n.map((function(e){return e.Text}))}))})))}))),s.a.createElement("div",{className:"header page-break"},s.a.createElement("h1",null,"OTHER GEOLOGIC HAZARD RESOURCES"),s.a.createElement("p",{dangerouslySetInnerHTML:{__html:J.OtherGeologicHazardResources},title:v.notProd&&"ReportTextTable.Text(OtherGeologicHazardResources)"})))))};console.log("app version: ".concat("1.0.3")),console.log("environment: ".concat("production"));var ce=function(e){console.log("aoi",e),l.a.render(s.a.createElement(ne,e),document.getElementById("root"))},oe=localStorage.getItem("aoi");oe?ce(JSON.parse(oe)):a.e(3).then(a.t.bind(null,51,3)).then((function(e){return ce(e)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.b9791065.chunk.js.map