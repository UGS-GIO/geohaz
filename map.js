require([
    // ArcGIS
    "esri/Map",
    "esri/views/MapView",
    "esri/views/SceneView",
    "esri/layers/FeatureLayer",
    "esri/layers/ImageryLayer",
    "esri/layers/MapImageLayer",
    "esri/layers/GroupLayer",
    "esri/core/watchUtils",
    "esri/core/urlUtils",
    "esri/tasks/GeometryService",
    "esri/tasks/support/ProjectParameters",
    "esri/geometry/Extent",
    "esri/tasks/Locator",
    // Widgets
    "esri/widgets/Home",
    "esri/widgets/Zoom",
    "esri/widgets/Compass",
    "esri/widgets/Search",
    "esri/widgets/Legend",
    "esri/widgets/Expand",
    "esri/widgets/Sketch/SketchViewModel",
    "esri/widgets/BasemapToggle",
    "esri/widgets/LayerList",
    "esri/widgets/Locate",
    "esri/layers/GraphicsLayer",
    "esri/Graphic",
    "esri/tasks/support/FeatureSet",
    "esri/tasks/support/Query",
    "esri/tasks/QueryTask",
    //DGrid
    "dstore/Memory",
    "dojo/data/ObjectStore",
    "dojo/data/ItemFileReadStore",
    "dojox/grid/DataGrid",
    "dgrid/OnDemandGrid",
    "dgrid/Selection",
    "dgrid/List",
    // Bootstrap
    "bootstrap/Collapse",
    "bootstrap/Dropdown",
    // Calcite Maps
    "calcite-maps/calcitemaps-v0.10",

    // Calcite Maps ArcGIS Support
    "calcite-maps/calcitemaps-arcgis-support-v0.10",
    "dojo/query",
    "dojo/domReady!"
], function(Map, MapView, SceneView, FeatureLayer, ImageryLayer, MapImageLayer, GroupLayer, watchUtils, urlUtils, GeometryService, ProjectParameters, Extent, Locator, Home, Zoom, Compass, Search, Legend, Expand, SketchViewModel, BasemapToggle, LayerList, Locate, GraphicsLayer, Graphic, FeatureSet, Query, QueryTask, Memory, ObjectStore, ItemFileReadStore, DataGrid, OnDemandGrid, Selection, List, Collapse, Dropdown, CalciteMaps, CalciteMapArcGISSupport, query) {
    /******************************************************************
     *
     * Create the map, view and widgets
     * 
     ******************************************************************/
    // Map
    var map = new Map({
        basemap: "hybrid",
        ground: "world-elevation",
    });

    // View
    var mapView = new SceneView({
        container: "mapViewDiv",
        map: map,
        center: [-112, 39.5],
        zoom: 8,
        padding: {
            top: 50,
            bottom: 0
        },

        ui: {
            components: []
        },
        highlightOptions: {
            color: [255, 255, 0, 1],
            haloColor: "white",
            haloOpacity: 0.9,
            fillOpacity: 0.2
          }
    });

    var highlight = null;

    // Popup and panel sync
    mapView.when(function() {
        CalciteMapArcGISSupport.setPopupPanelSync(mapView);
    });
    // Search - add to navbar
    var searchWidget = new Search({
        container: "searchWidgetDiv",
        view: mapView
    });
    CalciteMapArcGISSupport.setSearchExpandEvents(searchWidget);
    // Map widgets
    var home = new Home({
        view: mapView
    });
    mapView.ui.add(home, "top-left");
    var zoom = new Zoom({
        view: mapView
    });
    mapView.ui.add(zoom, "top-left");
    var compass = new Compass({
        view: mapView
    });
    mapView.ui.add(compass, "top-left");
    //mapView.ui.add(searchWidget, "top-left");

    var basemapToggle = new BasemapToggle({
        view: mapView,
        secondBasemap: "satellite"
    });

    // geolocate user position
    var locateWidget = new Locate({
        view: mapView, // Attaches the Locate button to the view
    });


    mapView.ui.add(locateWidget, "top-left");

          // show or hide any open calicite panels when user clicks for attribute details
      // be sure to pass the panel body, not panel title, ussually called 'collapseNAME'
      function showHideCalcitePanels(showPanel, showCollapse){
        // hide all windows
        query(".panel.in").removeClass("in");   //close any open panels
        query(".panel-collapse").removeClass("in");

        // if specified show this calcite panel
        if (showPanel){
          query(showCollapse).collapse("show");
          query(showCollapse).parent().collapse('show');
        }
      }

    var tempGraphic = null;
    let editGraphic;
    // GraphicsLayer to hold graphics created via sketch view model
    const tempGraphicsLayer = new GraphicsLayer({
        elevationInfo: "on-the-ground",
        listMode: "hide",
    });

    helpLoaded = "no";

    //popup templates for all layers


    studyAreasPopup = function(feature) {
        console.log(feature);
        var contentS = "";


        contentS += "<span class='bold' title='Name'><b>Name: </b></span>{Name}<br/>";


        

        var reportIdString = feature.graphic.attributes.Repor_ID;
        if (reportIdString) {
        var idArray = reportIdString.split(',');
        idArrayTrimmed = idArray.map(el => el.trim());
        contentS += "<span class='bold' title='Report ID'><b>Report ID: </b></span>";
        idArrayTrimmed.forEach(reportIdArraySort);
        function reportIdArraySort(item, index) {
            contentS += "<a href='https://doi.org/10.34191/"+item+"' target='_blank'>" + item + "</a><br/>";
        }
    }

       // contentS += "<span class='bold' title='Report ID'><b>Report ID: </b></span>" + "<a href='https://doi.org/10.34191/{Repor_ID}' target='_blank'>{Repor_ID}</a>" + "<br/>";


        var hazardsString = feature.graphic.attributes.Hazard_Name;
        var hazArray = hazardsString.split(',');
        contentS += "<span class='bold' title='Mapped Hazards'><b>Mapped Hazards: </b></span><br/>";
        hazArray.forEach(studyPopupContent);

        function studyPopupContent(item, index) {
            contentS += "&nbsp;&nbsp;• " + item + "<br/>";

        }
        return contentS;
    }



    epicentersPopup = function(feature) {
        console.log(feature);
        var content = "";


        content += "<span class='bold' title='Magnitude'><b>Magnitude: </b></span>{Mag}<br/>";


        content += "<span class='bold' title='Longitude'><b>Longitude: </b></span>{Long}<br/>";

        content += "<span class='bold' title='Latitude'><b>Latitude: </b></span>{Lat}<br/>";


        content += "<span class='bold' title='Depth'><b>Depth: </b></span>{Depth} Km <br/>";

        content += "<span class='bold' title='Date'><b>Date: </b></span>{Date}<br/>";

        return content;
    }

    miningepicentersPopup = function(feature) {
        var content = "";

        content += "<span class='bold' title='Magnitude'><b>Magnitude: </b></span>{Mag}<br/>";

        content += "<span class='bold' title='Longitude'><b>Longitude: </b></span>{Long}<br/>";

        content += "<span class='bold' title='Latitude'><b>Latitude: </b></span>{Lat}<br/>";

        content += "<span class='bold' title='Depth'><b>Depth: </b></span>{Depth} Km <br/>";

        content += "<span class='bold' title='Date'><b>Date: </b></span>{Date}<br/>";

        return content;
    }

    //qfaults popup code
    poopTemplate = 
         (event) => {
            
          const { graphic } = event;
          const containerFaultZone = document.createElement("div");
      
          if (graphic.attributes.FaultZone) {
              const faultZoneDiv = document.createElement("strong");
              faultZoneDiv.textContent = "Fault Zone Name: ";
              containerFaultZone.appendChild(faultZoneDiv);
      
              const faultZoneSum = graphic.attributes.Summary;
              const faultZone = graphic.attributes.FaultZone;
              const faultTip = document.createElement("span");
              faultTip.textContent = faultZone;
              faultTip.style.textDecoration = 'underline';
              faultTip.style.cursor = 'pointer';
              containerFaultZone.appendChild(faultTip);
              faultTip.onclick = () => {
                showHideCalcitePanels("#panelLegend", "#collapseLegend");
                query("#faultSum").html(faultZoneSum);
              };
          }

          if (graphic.attributes.FaultName) {
            var br = document.createElement("br");
            const faultNameDiv = document.createElement('strong');
            faultNameDiv.textContent = "Fault Name: ";
            containerFaultZone.appendChild(br);
            containerFaultZone.appendChild(faultNameDiv);
 
            const faultNameValue = graphic.attributes.FaultName;
            const faultNameSpan = document.createElement("span");
            faultNameSpan.textContent = faultNameValue;
            containerFaultZone.appendChild(faultNameSpan);
        }
        
        if (graphic.attributes.SectionName) {
           var br = document.createElement("br");
           const sectionNameDiv = document.createElement('strong');
           sectionNameDiv.textContent = "Section Name: ";
           containerFaultZone.appendChild(br);
           containerFaultZone.appendChild(sectionNameDiv);

           const sectionNameValue = graphic.attributes.SectionName;
           const sectionNameSpan = document.createElement("span");
           sectionNameSpan.textContent = sectionNameValue;
           containerFaultZone.appendChild(sectionNameSpan);
       }

       if (graphic.attributes.StrandName) {
        var br = document.createElement("br");
        const strandNameDiv = document.createElement('strong');
        strandNameDiv.textContent = "Strand Name: ";
        containerFaultZone.appendChild(br);
        containerFaultZone.appendChild(strandNameDiv);

        const strandNameValue = graphic.attributes.StrandName;
        const strandNameSpan = document.createElement("span");
        strandNameSpan.textContent = strandNameValue;
        containerFaultZone.appendChild(strandNameSpan);
    }

    if (graphic.attributes.FaultNum) {
        var br = document.createElement("br");
        const faultNumDiv = document.createElement('strong');
        faultNumDiv.textContent = "Structure Number: ";
        containerFaultZone.appendChild(br);
        containerFaultZone.appendChild(faultNumDiv);

        const faultNumValue = graphic.attributes.FaultNum;
        const faultNumSpan = document.createElement("span");
        faultNumSpan.textContent = faultNumValue;
        containerFaultZone.appendChild(faultNumSpan);
    }

    if (graphic.attributes.MappedScale) {
        var br = document.createElement("br");
        const mapScaleDiv = document.createElement('strong');
        mapScaleDiv.textContent = "Mapped Scale: ";
        containerFaultZone.appendChild(br);
        containerFaultZone.appendChild(mapScaleDiv);

        const mapScaleValue = graphic.attributes.MappedScale;
        const mapScaleSpan = document.createElement("span");
        mapScaleSpan.textContent = mapScaleValue;
        containerFaultZone.appendChild(mapScaleSpan);
    }


    if (graphic.attributes.DipDirection) {
        var br = document.createElement("br");
        const dipDirDiv = document.createElement('strong');
        dipDirDiv.textContent = "Dip Direction: ";
        containerFaultZone.appendChild(br);
        containerFaultZone.appendChild(dipDirDiv);

        const dipDirValue = graphic.attributes.DipDirection;
        const dipDirSpan = document.createElement("span");
        dipDirSpan.textContent = dipDirValue;
        containerFaultZone.appendChild(dipDirSpan);
    }

        if (graphic.attributes.SlipSense) {
            var br = document.createElement("br");
            const slipSenseDiv = document.createElement('strong');
            slipSenseDiv.textContent = "Slip Sense: ";
            containerFaultZone.appendChild(br);
            containerFaultZone.appendChild(slipSenseDiv);
    
            const slipSenseValue = graphic.attributes.SlipSense;
            const slipSenseSpan = document.createElement("span");
            slipSenseSpan.textContent = slipSenseValue;
            containerFaultZone.appendChild(slipSenseSpan);
        }

        if (graphic.attributes.SlipRate) {
            var br = document.createElement("br");
            const slipRateDiv = document.createElement('strong');
            slipRateDiv.textContent = "Slip Rate: ";
            containerFaultZone.appendChild(br);
            containerFaultZone.appendChild(slipRateDiv);
    
            const slipRatevalue = graphic.attributes.SlipRate;
            const slipRateSpan = document.createElement("span");
            slipRateSpan.textContent = slipRatevalue;
            containerFaultZone.appendChild(slipRateSpan);
        }
    
        

        if (graphic.attributes.FaultClass) {
            var br = document.createElement("br");
            const faultClassDiv = document.createElement('strong');
            faultClassDiv.textContent = "Structure Class: ";
            containerFaultZone.appendChild(br);
            containerFaultZone.appendChild(faultClassDiv);
    
            const faultClassvalue = graphic.attributes.FaultClass;
            const faultClassSpan = document.createElement("span");
            faultClassSpan.textContent = faultClassvalue;
            containerFaultZone.appendChild(faultClassSpan);
        }

        if (graphic.attributes.FaultAge) {
            var br = document.createElement("br");
            const faultAgeDiv = document.createElement('strong');
            faultAgeDiv.textContent = "Structure Age: ";
            containerFaultZone.appendChild(br);
            containerFaultZone.appendChild(faultAgeDiv);
    
            const faultAgevalue = graphic.attributes.FaultAge;
            const faultAgeSpan = document.createElement("span");
            faultAgeSpan.textContent = faultAgevalue;
            containerFaultZone.appendChild(faultAgeSpan);
        }

        if (graphic.attributes.USGS_Link) {
            var br = document.createElement("br");
            const linkDiv = document.createElement('strong');
            linkDiv.textContent = "Detailed Report: ";
            containerFaultZone.appendChild(br);
            containerFaultZone.appendChild(linkDiv);
            const linkvalue = graphic.attributes.USGS_Link;
    
            var a = document.createElement('a');
      var linkText = document.createTextNode("Opens in new tab");
      a.appendChild(linkText);
      a.title = "Detailed Report";
      a.href = linkvalue;
      a.target = '_blank';
      document.body.appendChild(a);
            
            containerFaultZone.appendChild(a);
        }
      
          return containerFaultZone;
        };





    fchPopup = function(feature) {
        var content = "";


        if (feature.graphic.attributes.FCHMappedScale) {
            content += "<span class='bold' title='Longitude'><b>Mapped Scale: </b></span>{FCHMappedScale}<br/>";

        }
        return content;
    }

    lssPopup = function(feature) {
        console.log(feature);
        var content = "";

        content += "<span class='bold' title='Longitude'><b>Description: </b></span>{relationships/3/Description}<br/>";

        content += "<span class='bold' title='Longitude'><b>Mapped Scale: </b></span>{LSSMappedScale}<br/>";

        content += "<span class='bold' title='Longitude'><b>Critical Angle: </b></span>{LSSCriticalAngle}<br/>";

        return content;
    }

    landslideSourcePopup = function(feature) {
        console.log(feature);
        var content = "";

        if (feature.graphic.attributes.s_name) {
            content += "<span class='bold' title='Longitude'><b>Name: </b></span>{s_name}<br/>";
        }


        if (feature.graphic.attributes.activity) {
            content += "<span class='bold' title='Longitude'><b>Activity: </b></span>{activity}<br/>";
        }


        if (feature.graphic.attributes.confidence) {
            content += "<span class='bold' title='Longitude'><b>Confidence: </b></span>{confidence}<br/>";
        }


        if (feature.graphic.attributes.comments) {
            content += "<span class='bold' title='Longitude'><b>Comments: </b></span>{comments}<br/>";
        }

        if (feature.graphic.attributes.d_h_move1) {
            content += "<span class='bold' title='Longitude'><b>Deposit Movement 1: </b></span>{data.d_h_move1}<br/>";
        }


        if (feature.graphic.attributes.d_h_move2) {
            content += "<span class='bold' title='Longitude'><b>Deposit Movement 2: </b></span>{data.d_h_move2}<br/>";
        }


        if (feature.graphic.attributes.d_h_move3) {
            content += "<span class='bold' title='Longitude'><b>Deposit Movement 3: </b></span>{data.d_h_move3}<br/>";
        }


        if (feature.graphic.attributes.d_geologic_unit1) {
            content += "<span class='bold' title='Longitude'><b>Primary Geologic Unit Involved: </b></span>{d_geologic_unit1}<br/>";
        }


        if (feature.graphic.attributes.d_geologic_unit2) {
            content += "<span class='bold' title='Longitude'><b>Secondary Geologic Unit Involved: </b></span>{d_geologic_unit2}<br/>";
        }

        return content;
    }

    landslideDepositPopup = function(feature) {
        var content = "";

        if (feature.graphic.attributes.d_material) {
            content += "<span class='bold' title='Longitude'><b>Deposit Material: </b></span>{d_material}<br/>";
        }


        if (feature.graphic.attributes.d_move_type) {
            content += "<span class='bold' title='Longitude'><b>Deposit Movement Type: </b></span>{d_move_type}<br/>";
        }


        if (feature.graphic.attributes.d_name) {
            content += "<span class='bold' title='Longitude'><b>Deposit Name: </b></span>{d_name}<br/>";
        }


        if (feature.graphic.attributes.d_thickness) {
            content += "<span class='bold' title='Longitude'><b>Deposit Thickness: </b></span>{d_thickness}<br/>";
        }

        if (feature.graphic.attributes.d_move_dir) {
            content += "<span class='bold' title='Longitude'><b>Deposit Movement Direction: </b></span>{d_move_dir}<br/>";
        }


        if (feature.graphic.attributes.d_landform) {
            content += "<span class='bold' title='Longitude'><b>Deposit Landform: </b></span>{d_landform}<br/>";
        }


        if (feature.graphic.attributes.s_name) {
            content += "<span class='bold' title='Longitude'><b>Source Name: </b></span>{s_name}<br/>";
        }
        if (feature.graphic.attributes.activity) {
            content += "<span class='bold' title='Longitude'><b>Deposit Activity: </b></span>{activity}<br/>";
        }


        if (feature.graphic.attributes.confidence) {
            content += "<span class='bold' title='Longitude'><b>Deposit Mapping Confidence: </b></span>{confidence}<br/>";
        }


        if (feature.graphic.attributes.comments) {
            content += "<span class='bold' title='Longitude'><b>Comments: </b></span>{comments}<br/>";
        }

        if (feature.graphic.attributes.d_h_move1) {
            content += "<span class='bold' title='Longitude'><b>Deposit Movement 1: </b></span>{d_h_move1}<br/>";
        }


        if (feature.graphic.attributes.d_h_move2) {
            content += "<span class='bold' title='Longitude'><b>Deposit Movement 2: </b></span>{d_h_move2}<br/>";
        }


        if (feature.graphic.attributes.d_h_move3) {
            content += "<span class='bold' title='Longitude'><b>Deposit Movement 3: </b></span>{d_h_move3}<br/>";
        }


        if (feature.graphic.attributes.d_geologic_unit1) {
            content += "<span class='bold' title='Longitude'><b>Deposit Geologic Unit 1: </b></span>{d_geologic_unit1}<br/>";
        }


        if (feature.graphic.attributes.d_geologic_unit2) {
            content += "<span class='bold' title='Longitude'><b>Deposit Geologic 2: </b></span>{d_geologic_unit2}<br/>";
        }

        return content;
    }

    landslideCompPopup = function(feature) {
        console.log(feature);
        var content = "";


        if (feature.graphic.attributes.StateLSID) {
            content += "<span class='bold' title='Longitude'><b>State Landslide ID: </b></span>{StateLSID}<br/>";
        }


        if (feature.graphic.attributes.LSUnit) {
            content += "<span class='bold' title='Longitude'><b>Landslide Unit: </b></span>{LSUnit}<br/>";
        }


        if (feature.graphic.attributes.MoveType != " ") {
            content += "<span class='bold' title='Longitude'><b>Movement Type: </b></span>{MoveType}<br/>";
        }


        if (feature.graphic.attributes.Historical != " ") {
            content += "<span class='bold' title='Longitude'><b>Historical: </b></span>{Historical}<br/>";
        }


        if (feature.graphic.attributes.GeolUnit) {
            content += "<span class='bold' title='Longitude'><b>Geologic Unit: </b></span>{GeolUnit}<br/>";
        }


        if (feature.graphic.attributes.MapScale) {
            content += "<span class='bold' title='Longitude'><b>Map Scale: </b></span>{MapScale}<br/>";
        }


        if (feature.graphic.attributes.MapName) {
            content += "<span class='bold' title='Longitude'><b>Map Name: </b></span>{MapName}<br/>";
        }


        if (feature.graphic.attributes.PubDate) {
            content += "<span class='bold' title='Longitude'><b>Pub Date: </b></span>{PubDate}<br/>";
        }


        if (feature.graphic.attributes.Author_s) {
            content += "<span class='bold' title='Longitude'><b>Author(s): </b></span>{Author_s}<br/>";
        }


        if (feature.graphic.attributes.AffUnit != " ") {
            content += "<span class='bold' title='Longitude'><b>Affiliated Unit: </b></span>{AffUnit}<br/>";
        }


        if (feature.graphic.attributes.MoveUnit != " ") {
            content += "<span class='bold' title='Longitude'><b>Movement Unit: </b></span>{MoveUnit}<br/>";
        }


        if (feature.graphic.attributes.MoveCause != " ") {
            content += "<span class='bold' title='Longitude'><b>Movement Cause: </b></span>{MoveCause}<br/>";
        }


        if (feature.graphic.attributes.Notes != " ") {
            content += "<span class='bold' title='Longitude'><b>Notes: </b></span>{Notes}<br/>";
        }

        return content;
    }



    var recentSym = {
        type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
        color: "red",
        outline: { // autocasts as new SimpleLineSymbol()
            color: "black",
            width: 0.5,
        }
    };

    var rendererRecent = {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: recentSym,
        visualVariables: [{
            type: "size",
            field: "Mag",
            legendOptions: {
                title: "Magnitude"
            },
            stops: [{
                    value: 2.9,
                    size: 4,
                    label: "<2.9"
                },
                {
                    value: 3.4,
                    size: 8,
                    label: "2.9 - 3.4"
                },
                {
                    value: 3.9,
                    size: 12,
                    label: "3.5 - 3.9"
                },
                {
                    value: 4.9,
                    size: 18,
                    label: "4.0 - 4.9"
                },
                {
                    value: 5.9,
                    size: 26,
                    label: "5.0 - 5.9"
                },
                {
                    value: 6.9,
                    size: 36,
                    label: "6.0 - 6.9"
                }
            ]
        }]
    };

    var historicSym = {
        type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
        color: "pink",
        outline: { // autocasts as new SimpleLineSymbol()
            color: "black",
            width: 0.5,
        }
    };

    var rendererHistoric = {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: historicSym,
        visualVariables: [{
            type: "size",
            field: "Mag",
            legendOptions: {
                title: "Magnitude"
            },
            stops: [{
                    value: 2.9,
                    size: 4,
                    label: "<2.9"
                },
                {
                    value: 3.4,
                    size: 8,
                    label: "2.9 - 3.4"
                },
                {
                    value: 3.9,
                    size: 12,
                    label: "3.5 - 3.9"
                },
                {
                    value: 4.9,
                    size: 18,
                    label: "4.0 - 4.9"
                },
                {
                    value: 5.9,
                    size: 26,
                    label: "5.0 - 5.9"
                },
                {
                    value: 6.9,
                    size: 36,
                    label: "6.0 - 6.9"
                }
            ]
        }]
    };

    var miningSym = {
        type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
        //color: "pink",
        outline: { // autocasts as new SimpleLineSymbol()
            color: "black",
            width: 0.5,
        }
    };

    var rendererMining = {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: miningSym,
        visualVariables: [{
            type: "size",
            field: "Mag",
            legendOptions: {
                title: "Magnitude"
            },
            stops: [{
                    value: 2.9,
                    size: 4,
                    label: "<2.9"
                },
                {
                    value: 3.4,
                    size: 8,
                    label: "2.9 - 3.4"
                },
                {
                    value: 3.9,
                    size: 12,
                    label: "3.5 - 3.9"
                },
                {
                    value: 4.9,
                    size: 18,
                    label: "4.0 - 4.9"
                },
                {
                    value: 5.9,
                    size: 26,
                    label: "5.0 - 5.9"
                },
                {
                    value: 6.9,
                    size: 36,
                    label: "6.0 - 6.9"
                }
            ]
        }]
    };

    var rendererBedrockPot = {
        type: "unique-value",
        field: "SBPHazardUnit",
        fieldDelimiter: ", ",
        uniqueValueInfos: [{
            value: "Hsbp",
            label: "Hard",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: [168, 56, 0],
                outline: { // autocasts as new SimpleLineSymbol()
                    color: [0, 0, 0],
                    width: "0.4px"
                }
            }
        },{
            value: "Ssbp",
            label: "Soft",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: [255, 170, 0],
                outline: { // autocasts as new SimpleLineSymbol()
                    color: [0, 0, 0],
                    width: "0.4px"
                }
            }
        },{
            value: "Bsbp",
            label: "Buried",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: [230, 255, 190],
                outline: { // autocasts as new SimpleLineSymbol()
                    color: [0, 0, 0],
                    width: "0.4px"
                }
            }
        },{
            value: "Dsbp",
            label: "Deep",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: [190, 255, 232],
                outline: { // autocasts as new SimpleLineSymbol()
                    color: [0, 0, 0],
                    width: "0.4px"
                }
            }
        },
        ]
    }


    var rendererLiquefaction = {
        type: "unique-value", // autocasts as new UniqueValueRenderer()
        field: "LQSHazardUnit",
        //defaultSymbol: { type: "simple-fill" },
        uniqueValueInfos: [{
            // All features with value of "Very High" will be green
            value: "VHlqs",
            label: "Very High Susceptibility",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: [230, 0, 0],
                outline: { // autocasts as new SimpleLineSymbol()
                    color: [0, 0, 0],
                    width: "0.4px"
                }
            }
        }, {
            // All features with value of "Very High" will be green
            value: "Hlqs",
            label: "High Susceptibility",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: [255, 85, 0],
                outline: { // autocasts as new SimpleLineSymbol()
                    color: [0, 0, 0],
                    width: "0.4px"
                }
            }
        }, {
            // All features with value of "Very High" will be green
            value: "Mlqs",
            label: "Moderate Susceptibility",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: [222, 197, 129],
                outline: { // autocasts as new SimpleLineSymbol()
                    color: [0, 0, 0],
                    width: "0.4px"
                }
            }
        }, {
            // All features with value of "Very High" will be green
            value: "Llqs",
            label: "Low Susceptibility",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: [56, 168, 0],
                outline: { // autocasts as new SimpleLineSymbol()
                    color: [0, 0, 0],
                    width: "0.4px"
                }
            }
        }, {
            // All features with value of "Very High" will be green
            value: "VLlqs",
            label: "Very Low Susceptibility",
            symbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: [115, 223, 255],
                outline: { // autocasts as new SimpleLineSymbol()
                    color: [0, 0, 0],
                    width: "0.4px"
                }
            }
        }, 
    ]
    };

    var surfaceFaultRuptureRenderer = {
        type: "simple",
        label: "Surface Fault Rupture Zone",
            symbol: {
              type: "simple-fill",  // autocasts as new SimpleFillSymbol()
              color: [252, 211, 126, 0.6],
              outline: {
                width: "0.4px",
                color: "black",
                }
            }
    }

    //quad renderer
    var quadRenderer = {
        type: "simple",
        symbol: {
            type: "simple-fill",
            color: [0, 0, 0, 0],
            outline: {
                width: 1,
                color: "#db0202",
            }

        }
    }



    const landslideComp = new FeatureLayer({
        url: "https://services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services/Utah_Geologic_Hazards/FeatureServer/4",
        title: "Legacy Landslide Compilation",
        elevationInfo: [{
            mode: "on-the-ground"
        }],
        visible: false,
        outFields: ["*"],
        popupTemplate: {
            title: "<b>Legacy Landslide Compilation</b>",
            outFields: ["*"],
            content: landslideCompPopup,
        },
        minScale: 300000,
    });

    const landslideDeposit = new FeatureLayer({
        url: "https://services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services/Utah_Geologic_Hazards/FeatureServer/3",
        title: "Landslides",
        elevationInfo: [{
            mode: "on-the-ground"
        }],
        visible: false,
        outFields: ["*"],
        popupTemplate: {
            title: "<b>Landslides</b>",
            outFields: ["*"],
            content: landslideSourcePopup,
        }
    });



    const landslideSusceptibility = new FeatureLayer({
        url: "https://services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services/Utah_Geologic_Hazards/FeatureServer/2",
        visible: false,
        //renderer: landslideSusRenderer,
        title: "Landslide Susceptibility",
        elevationInfo: [{
            mode: "on-the-ground"
        }],
        outFields: ["*"],

        popupTemplate: {
            title: "<b>Landslide Susceptibility</b>",
            outFields: ["*"],
            content: [{
                    type: "fields",
                    fieldInfos: [{
                        fieldName: "relationships/2/Description",
                        visible: false,
                        label: "Hazard Description"
                    }, {
                        fieldName: "Hazard_Symbology_Text",
                        visible: false,
                        label: "Hazard"
                    }, {
                        fieldName: "LSSCriticalAngle",
                        visible: false,
                        label: "Critical Angle"
                    }]
                },
                {
                    type: "text",
                    text: "<b>{Hazard_Symbology_Text}: </b>{relationships/2/Description}<br><b>Mapped Scale: </b>{LSSMappedScale}<br><b>Critical Angle: </b>{LSSCriticalAngle}"
                }
            ]
        }
    });

    const epicentersRecent = new FeatureLayer({
        url: "https://services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services/Utah_Earthquake_Hazards/FeatureServer/0",
        title: "Epicenters (1850 to 2016)",
        elevationInfo: [{
            mode: "on-the-ground"
        }],
        visible: false,
        outFields: ["*"],
        popupTemplate: {
            title: "<b>Earthquake Epicenter Information</b>",
            outFields: ["*"],
            content: epicentersPopup,

        },
        renderer: rendererRecent,
    });

    epicentersRecent.featureReduction = {
        type: "selection"
    };


    const epicentersMining = new FeatureLayer({
        url: "https://services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services/Utah_Earthquake_Hazards/FeatureServer/1",
        title: "Mining-Induced Epicenters",
        elevationInfo: [{
            mode: "on-the-ground"
        }],
        visible: false,
        outFields: ["*"],
        popupTemplate: {
            title: "Mining-Induced Epicenters",
            outFields: ["*"],
            content: miningepicentersPopup,
            //content: "{Mag:miningepicentersPopup}{Depth:miningepicentersPopup}{Long:miningepicentersPopup}{Lat:miningepicentersPopup}{Date:miningepicentersPopup}"
        },
        renderer: rendererMining,
    });

    const liquefaction = new FeatureLayer({
        url: "https://services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services/Utah_Earthquake_Hazards/FeatureServer/2",
        title: "Liquefaction Susceptibility",
        elevationInfo: [{
            mode: "on-the-ground"
        }],
        renderer: rendererLiquefaction,
        visible: false,
        outFields: ["*"],
        popupTemplate: {
            title: "<b>Liquefaction Susceptibility</b>",
            outFields: ["*"],

            content: [{
                    type: "fields",
                    fieldInfos: [{
                            fieldName: "Hazard_Symbology_Text",
                            visible: false,
                            label: "Hazard"
                        },
                        {
                            fieldName: "relationships/0/Description",
                            visible: false,
                            label: "Hazard Description"
                        }, {
                            fieldName: "MappedScale",
                            visible: false,
                            label: "Mapped Scale"
                        }
                    ]
                },
                {
                    type: "text",
                    text: "<b>{Hazard_Symbology_Text}: </b>{relationships/0/Description}<br><b>Mapped Scale: </b>{LQSMappedScale}"
                }
            ]
        }
        // content: "{LQSHazardUnit:liquefactionPopup}{LQSMappedScale:liquefactionPopup}"

    });

    //earthquake ground shaking featurelayer
    var shakingVector = new FeatureLayer({
        url: "https://services.arcgis.com/ZzrwjTRez6FJiOq4/ArcGIS/rest/services/Utah_Earthquake_Hazards/FeatureServer/5",
        title: "Earthquake Ground Shaking",
        elevationInfo: [{
            mode: "on-the-ground"
        }],
        visible: false,

    });

    //earthquake ground shaking imagery layer
    var shakingRaster = new ImageryLayer({
        url: "https://webmaps.geology.utah.gov/arcgis/rest/services/Hazards/GroundshakingRaster/ImageServer",
        visible: true,
        legendEnabled: false,
        listMode: "hide",
        title: "Shaking Raster",
        pixelFilter: colorize,
        opacity: 0,
        popupTemplate: {

            title: "<b>Earthquake Ground Shaking</b>",
            content: "<b>Peak Ground Acceleration: </b>{Raster.ServicePixelValue.Raw}  G's"

        }
    });


    // **********qfaults from our server as a mapimageservice
    const qFaults = new MapImageLayer({

        url: "https://webmaps.geology.utah.gov/arcgis/rest/services/Hazards/quaternary_faults_with_labels/MapServer",
        sublayers: [{
            id: 0,
            visible: true,

            popupTemplate:
            {
                outFields: ["*"],
                title: "<b>Hazardous (Quaternary age) Faults</b>",
                content: poopTemplate
            }
        },
        {
            
                id: 1,
                visible: true,
        
            

            }],
        title: "Hazardous (Quaternary age) Faults",
        listMode: "hide-children",
        visible: false,



    });



    const faultRupture = new FeatureLayer({
        url: "https://services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services/Utah_Earthquake_Hazards/FeatureServer/3",
        title: "Surface Fault Rupture Special Study Zones",
        renderer: surfaceFaultRuptureRenderer,
        elevationInfo: [{
            mode: "on-the-ground"
        }],
        visible: false,
        outFields: ["*"],
        popupTemplate: {
            title: "<b>{relationships/1/HazardName}</b>",
            content: [{
                    type: "fields",
                    fieldInfos: [{
                            fieldName: "SFRMappedScale",
                            visible: false,
                            label: "Mapped Scale"
                        },
                        {
                            fieldName: "relationships/1/Description",
                            visible: false,
                            label: "Hazard Description"
                        }, {
                            fieldName: "relationships/1/HazardName",
                            visible: false,
                            label: "Hazard"
                        }
                    ]
                },
                {
                    type: "text",
                    text: "{relationships/1/Description}<br><b>Mapped Scale: </b>{SFRMappedScale}"
                }
            ]
        }
    });

    const eolianSus = new FeatureLayer({
        url: "https://services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services/Utah_Geologic_Hazards/FeatureServer/19",
        title: "Wind-Blown Sand Susceptibility",
        elevationInfo: [{
            mode: "on-the-ground"
        }],
        visible: false,
        outFields: ["*"],
        popupTemplate: {
            title: "<b>Wind-Blown Sand Susceptibility</b>",
            content: [{
                    type: "fields",
                    fieldInfos: [{
                            fieldName: "Hazard_Symbology_Text",
                            visible: false,
                            label: "Hazard"
                        },
                        {
                            fieldName: "relationships/17/Description",
                            visible: false,
                            label: "Hazard Description"
                        },
                        // {
                        //  fieldName: "relationships/17/HazardName",
                        //  visible: false,
                        //  label: "Hazard"
                        // }
                    ]
                },
                {
                    type: "text",
                    text: "<b>{Hazard_Symbology_Text}: </b>{relationships/17/Description}<br><b>Mapped Scale: </b>{WSSMappedScale}"
                }
            ]
        }
    });

    const tectonicDef = new FeatureLayer({
        url: "https://services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services/Utah_Geologic_Hazards/FeatureServer/16",
        title: "Salt Tectonics-Related Ground Deformation",
        elevationInfo: [{
            mode: "on-the-ground"
        }],
        visible: false,
        outFields: ["*"],
        popupTemplate: {
            title: "<b>{relationships/14/HazardName}</b>",
            content: [{
                    type: "fields",
                    fieldInfos: [{
                            fieldName: "Hazard_Symbology_Text",
                            visible: false,
                            label: "Hazard"
                        },
                        {
                            fieldName: "SDHMappedScale",
                            visible: false,
                            label: "Mapped Scale"
                        },
                        {
                            fieldName: "relationships/14/Description",
                            visible: false,
                            label: "Hazard Description"
                        }, {
                            fieldName: "relationships/14/HazardName",
                            visible: false,
                            label: "Hazard"
                        }
                    ]
                },
                {
                    type: "text",
                    text: "<b>{Hazard_Symbology_Text}: </b>{relationships/14/Description}<br><b>Mapped Scale: </b>{SDHMappedScale}"
                }
            ]
        }
    });

    const bedrockPot = new FeatureLayer({
        url: "https://services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services/Utah_Geologic_Hazards/FeatureServer/17",
        title: "Shallow Bedrock Potential",
        elevationInfo: [{
            mode: "on-the-ground"
        }],
        renderer: rendererBedrockPot,
        visible: false,
        outFields: ["*"],
        popupTemplate: {
            title: "<b>{relationships/15/HazardName}</b>",
            content: [{
                    type: "fields",
                    fieldInfos: [{
                            fieldName: "Hazard_Symbology_Text",
                            visible: false,
                            label: "Hazard"
                        },
                        {
                            fieldName: "SBPMappedScale",
                            visible: false,
                            label: "Mapped Scale"
                        },
                        {
                            fieldName: "relationships/15/Description",
                            visible: false,
                            label: "Hazard Description"
                        }, {
                            fieldName: "relationships/15/HazardName",
                            visible: false,
                            label: "Hazard"
                        }
                    ]
                },
                {
                    type: "text",
                    text: "<b>{Hazard_Symbology_Text}: </b>{relationships/15/Description}<br><b>Mapped Scale: </b>{SBPMappedScale}"
                }
            ]
        }
    });

    const rockfallHaz = new FeatureLayer({
        url: "https://services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services/Utah_Geologic_Hazards/FeatureServer/15",
        title: "Rockfall Hazard",
        elevationInfo: [{
            mode: "on-the-ground"
        }],
        visible: false,
        outFields: ["*"],
        popupTemplate: {
            title: "<b>{relationships/13/HazardName}</b>",
            content: [{
                    type: "fields",
                    fieldInfos: [

                        {
                            fieldName: "Hazard_Symbology_Text",
                            visible: false,
                            label: "Hazard"
                        },
                        {
                            fieldName: "RFHMappedScale",
                            visible: false,
                            label: "Mapped Scale"
                        },
                        {
                            fieldName: "relationships/13/Description",
                            visible: false,
                            label: "Hazard Description"
                        }, {
                            fieldName: "relationships/13/HazardName",
                            visible: false,
                            label: "Hazard"
                        }
                    ]
                },
                {
                    type: "text",
                    text: "<b>{Hazard_Symbology_Text}: </b>{relationships/13/Description}<br><b>Mapped Scale: </b>{RFHMappedScale}"
                }
            ]
        }
    });

    const pipingSus = new FeatureLayer({
        url: "https://services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services/Utah_Geologic_Hazards/FeatureServer/13",
        title: "Piping and Erosion Susceptibility",
        elevationInfo: [{
            mode: "on-the-ground"
        }],
        visible: false,
        outFields: ["*"],
        popupTemplate: {
            title: "<b>{relationships/11/HazardName}</b>",
            content: [{
                    type: "fields",
                    fieldInfos: [{
                            fieldName: "PESMappedScale",
                            visible: false,
                            label: "Mapped Scale"
                        },
                        {
                            fieldName: "relationships/11/Description",
                            visible: false,
                            label: "Hazard Description"
                        }, {
                            fieldName: "relationships/11/HazardName",
                            visible: false,
                            label: "Hazard"
                        }
                    ]
                },
                {
                    type: "text",
                    text: "<b>{Hazard_Symbology_Text}: </b>{relationships/11/Description}<br><b>Mapped Scale: </b>{PESMappedScale}"
                }
            ]
        }
    });

    const expansiveSoil = new FeatureLayer({
        url: "https://services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services/Utah_Geologic_Hazards/FeatureServer/10",
        title: "Expansive Soil and Rock Susceptibility",
        elevationInfo: [{
            mode: "on-the-ground"
        }],
        visible: false,
        outFields: ["*"],
        popupTemplate: {
            title: "<b>{relationships/9/HazardName}</b>",
            content: [{
                    type: "fields",
                    fieldInfos: [{
                            fieldName: "EXSMappedScale",
                            visible: false,
                            label: "Mapped Scale"
                        },
                        {
                            fieldName: "relationships/9/Description",
                            visible: false,
                            label: "Hazard Description"
                        }, {
                            fieldName: "relationships/9/HazardName",
                            visible: false,
                            label: "Hazard"
                        }
                    ]
                },
                {
                    type: "text",
                    text: "<b>{Hazard_Symbology_Text}: </b>{relationships/9/Description}<br><b>Mapped Scale: </b>{EXSMappedScale}"
                }
            ]
        }
    });

    const groundwaterSus = new FeatureLayer({
        url: "https://services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services/Utah_Geologic_Hazards/FeatureServer/1",
        title: "Shallow Groundwater Susceptibility",
        elevationInfo: [{
            mode: "on-the-ground"
        }],
        visible: false,
        outFields: ["*"],
        popupTemplate: {
            title: "<b>{relationships/1/HazardName}</b>",
            content: [{
                    type: "fields",
                    fieldInfos: [{
                            fieldName: "FLHMappedScale",
                            visible: false,
                            label: "Mapped Scale"
                        },
                        {
                            fieldName: "relationships/1/Description",
                            visible: false,
                            label: "Hazard Description"
                        }, {
                            fieldName: "relationships/1/HazardName",
                            visible: false,
                            label: "Hazard"
                        }
                    ]
                },
                {
                    type: "text",
                    text: "<b>{Hazard_Symbology_Text}: </b>{relationships/1/Description}<br><b>Mapped Scale: </b>{SGSMappedScale}"
                }
            ]
        }
    });

    const radonSus = new FeatureLayer({
        url: "https://services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services/Utah_Geologic_Hazards/FeatureServer/14",
        title: "Geologic Radon Susceptibility",
        elevationInfo: [{
            mode: "on-the-ground"
        }],
        visible: false,
        outFields: ["*"],
        popupTemplate: {
            title: "<b>{relationships/12/HazardName}</b>",
            content: [{
                    type: "fields",
                    fieldInfos: [{
                            fieldName: "GRSMappedScale",
                            visible: false,
                            label: "Mapped Scale"
                        },
                        {
                            fieldName: "relationships/12/Description",
                            visible: false,
                            label: "Hazard Description"
                        }, {
                            fieldName: "relationships/12/HazardName",
                            visible: false,
                            label: "Hazard"
                        }
                    ]
                },
                {
                    type: "text",
                    text: "<b>{Hazard_Symbology_Text}: </b>{relationships/12/Description}<br><b>Mapped Scale: </b>{GRSMappedScale}"
                }
            ]
        }
    });

    const corrosiveSoil = new FeatureLayer({
        url: "https://services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services/Utah_Geologic_Hazards/FeatureServer/7",
        title: "Corrosive Soil and Rock Susceptibility",
        elevationInfo: [{
            mode: "on-the-ground"
        }],
        visible: false,
        outFields: ["*"],
        popupTemplate: {
            title: "<b>{relationships/6/HazardName}</b>",
            content: [{
                    type: "fields",
                    fieldInfos: [{
                            fieldName: "CRSMappedScale",
                            visible: false,
                            label: "Mapped Scale"
                        },
                        {
                            fieldName: "relationships/6/Description",
                            visible: false,
                            label: "Hazard Description"
                        }, {
                            fieldName: "relationships/6/HazardName",
                            visible: false,
                            label: "Hazard"
                        }
                    ]
                },
                {
                    type: "text",
                    text: "<b>{Hazard_Symbology_Text}: </b>{relationships/6/Description}<br><b>Mapped Scale: </b>{CRSMappedScale}"
                }
            ]
        }
    });

    const collapsibleSoil = new FeatureLayer({
        url: "https://services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services/Utah_Geologic_Hazards/FeatureServer/6",
        title: "Collapsible Soil Susceptibility",
        elevationInfo: [{
            mode: "on-the-ground"
        }],
        visible: false,
        outFields: ["*"],
        popupTemplate: {
            title: "<b>{relationships/5/HazardName}</b>",
            content: [{
                    type: "fields",
                    fieldInfos: [{
                            fieldName: "CSSMappedScale",
                            visible: false,
                            label: "Mapped Scale"
                        },
                        {
                            fieldName: "relationships/5/Description",
                            visible: false,
                            label: "Hazard Description"
                        }, {
                            fieldName: "relationships/5/HazardName",
                            visible: false,
                            label: "Hazard"
                        }
                    ]
                },
                {
                    type: "text",
                    text: "<b>{Hazard_Symbology_Text}: </b>{relationships/5/Description}<br><b>Mapped Scale: </b>{CSSMappedScale}"
                }
            ]
        }
    });

    const solubleSoil = new FeatureLayer({
        url: "https://services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services/Utah_Geologic_Hazards/FeatureServer/18",
        title: "Soluble Soil and Rock Susceptibility",
        elevationInfo: [{
            mode: "on-the-ground"
        }],
        visible: false,
        outFields: ["*"],
        popupTemplate: {
            title: "<b>{relationships/16/HazardName}</b>",
            content: [{
                    type: "fields",
                    fieldInfos: [{
                            fieldName: "SLSMappedScale",
                            visible: false,
                            label: "Mapped Scale"
                        },
                        {
                            fieldName: "relationships/16/Description",
                            visible: false,
                            label: "Hazard Description"
                        }, {
                            fieldName: "relationships/16/HazardName",
                            visible: false,
                            label: "Hazard"
                        }
                    ]
                },
                {
                    type: "text",
                    text: "<b>{Hazard_Symbology_Text}: </b>{relationships/16/Description}<br><b>Mapped Scale: </b>{SLSMappedScale}"
                }
            ]
        }
    });

    const caliche = new FeatureLayer({
        url: "https://services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services/Utah_Geologic_Hazards/FeatureServer/5",
        title: "Caliche Susceptibility",
        elevationInfo: [{
            mode: "on-the-ground"
        }],
        visible: false,
        outFields: ["*"],
        popupTemplate: {
            title: "<b>{relationships/4/HazardName}</b>",
            content: [{
                    type: "fields",
                    fieldInfos: [{
                            fieldName: "CASMappedScale",
                            visible: false,
                            label: "Mapped Scale"
                        },
                        {
                            fieldName: "relationships/4/Description",
                            visible: false,
                            label: "Hazard Description"
                        }, {
                            fieldName: "relationships/4/HazardName",
                            visible: false,
                            label: "Hazard"
                        }
                    ]
                },
                {
                    type: "text",
                    text: "{relationships/4/Description}<br><b>Mapped Scale: </b>{CASMappedScale}"
                }
            ]
        }
    });


    const floodHazard = new FeatureLayer({
        url: "https://services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services/Utah_Geologic_Hazards/FeatureServer/0",
        title: "Flood and Debris-Flow Hazard",
        elevationInfo: [{
            mode: "on-the-ground"
        }],
        visible: false,
        outFields: ["*"],
        popupTemplate: {
            title: "<b>{relationships/0/HazardName}</b>",
            content: [{
                    type: "fields",
                    fieldInfos: [{
                            fieldName: "FLHMappedScale",
                            visible: false,
                            label: "Mapped Scale"
                        },
                        {
                            fieldName: "relationships/0/Description",
                            visible: false,
                            label: "Hazard Description"
                        }, {
                            fieldName: "relationships/0/HazardName",
                            visible: false,
                            label: "Hazard"
                        }
                    ]
                },
                {
                    type: "text",
                    text: "<b>{Hazard_Symbology_Text}: </b>{relationships/0/Description}<br><b>Mapped Scale: </b>{FLHMappedScale}"
                }
            ]
        }
    });

    const earthFissure = new FeatureLayer({
        url: "https://services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services/Utah_Geologic_Hazards/FeatureServer/8",
        title: "Earth Fissure Hazard",
        elevationInfo: [{
            mode: "on-the-ground"
        }],
        visible: false,
        outFields: ["*"],
        popupTemplate: {
            title: "<b>{relationships/7/HazardName}</b>",
            content: [{
                    type: "fields",
                    fieldInfos: [{
                            fieldName: "EFHMappedScale",
                            visible: false,
                            label: "Mapped Scale"
                        },
                        {
                            fieldName: "relationships/7/Description",
                            visible: false,
                            label: "Hazard Description"
                        }, {
                            fieldName: "relationships/7/HazardName",
                            visible: false,
                            label: "Hazard"
                        }
                    ]
                },
                {
                    type: "text",
                    text: "<b>{Hazard_Symbology_Text}: </b>{relationships/7/Description}<br><b>Mapped Scale: </b>{EFHMappedScale}"
                }
            ]
        }
    });

    const erosionZone = new FeatureLayer({
        url: "https://services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services/Utah_Geologic_Hazards/FeatureServer/9",
        title: "J.E. Fuller Flood Erosion Hazard Zones",
        elevationInfo: [{
            mode: "on-the-ground"
        }],
        visible: false,
        outFields: ["*"],
        popupTemplate: {
            title: "<b>{relationships/8/HazardName}</b>",
            content: [{
                    type: "fields",
                    fieldInfos: [{
                            fieldName: "ERZMappedScale",
                            visible: false,
                            label: "Mapped Scale"
                        },
                        {
                            fieldName: "relationships/8/Description",
                            visible: false,
                            label: "Hazard Description"
                        }, {
                            fieldName: "relationships/8/HazardName",
                            visible: false,
                            label: "Hazard"
                        }
                    ]
                },
                {
                    type: "text",
                    text: "{relationships/8/Description}<br><b>Mapped Scale: </b>{ERZMappedScale}"
                }
            ]
        }
    });

    const groundSubsidence = new FeatureLayer({
        url: "https://services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services/Utah_Geologic_Hazards/FeatureServer/11",
        title: "Ground Subsidence Potential",
        elevationInfo: [{
            mode: "on-the-ground"
        }],
        visible: false,
        outFields: ["*"],
        popupTemplate: {
            title: "<b>{relationships/5/HazardName}</b>",
            content: [{
                    type: "fields",
                    fieldInfos: [{
                            fieldName: "CSSMappedScale",
                            visible: false,
                            label: "Mapped Scale"
                        },
                        {
                            fieldName: "relationships/5/Description",
                            visible: false,
                            label: "Hazard Description"
                        }, {
                            fieldName: "relationships/5/HazardName",
                            visible: false,
                            label: "Hazard"
                        }
                    ]
                },
                {
                    type: "text",
                    text: "{relationships/4/Description}<br><b>Mapped Scale: </b>{CSSMappedScale}"
                }
            ]
        }
    });

    const karstFeatures = new FeatureLayer({
        url: "https://services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services/Utah_Geologic_Hazards/FeatureServer/12",
        title: "Karst Features",
        elevationInfo: [{
            mode: "on-the-ground"
        }],
        visible: false,
        outFields: ["*"],
        popupTemplate: {
            title: "<b>{relationships/10/HazardName}</b>",
            content: [{
                    type: "fields",
                    fieldInfos: [{
                            fieldName: "GSPMappedScale",
                            visible: false,
                            label: "Mapped Scale"
                        },
                        {
                            fieldName: "relationships/10/Description",
                            visible: false,
                            label: "Hazard Description"
                        }, {
                            fieldName: "relationships/10/HazardName",
                            visible: false,
                            label: "Hazard"
                        }
                    ]
                },
                {
                    type: "text",
                    text: "<b>{Hazard_Symbology_Text}: </b>{relationships/10/Description}<br><b>Mapped Scale: </b>{GSPMappedScale}"
                }
            ]
        }
    });

    const soilHazards = new GroupLayer({
        title: "Problem Soil and Rock Hazards",
        visible: true,
        layers: [eolianSus, solubleSoil, bedrockPot, tectonicDef, radonSus, pipingSus, karstFeatures, erosionZone, expansiveSoil, earthFissure, corrosiveSoil, collapsibleSoil, caliche]
    });

    const quadBoundaries = new FeatureLayer({
        url: "https://services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services/Utah_Geologic_Hazards_Supplemental_Data_View/FeatureServer/0",
        title: "USGS 1:24,000-Scale Quadrangle Boundaries",
        elevationInfo: [{
            mode: "on-the-ground"
        }],
        labelingInfo: {
            labelExpressionInfo: {
                expression: "$feature.NAME"
            },
            symbol: {
                type: "text", // autocasts as new TextSymbol()
                color: "#db0202",
                font: { // autocast as new Font()
                    family: "serif",
                    size: 10,
                    weight: "bold",
                    style: "italic"
                }
                //haloSize: 1,
                //haloColor: "white"
            }
        },
        renderer: quadRenderer,
        visible: false,
    })

    const hazardStudy = new FeatureLayer({
        url: "https://services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services/Utah_Geologic_Hazards_Supplemental_Data_View/FeatureServer/1",
        title: "Mapped Areas",
        elevationInfo: [{
            mode: "on-the-ground"
        }],
        outFields: ["*"],
        popupTemplate: {
            outFields: ["*"],
            title: "<b>Mapped Areas</b>",
            content: studyAreasPopup,
        }

        //visible: true,
    });


    const lidarBounds = new FeatureLayer({
        url: "https://services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services/Utah_Geologic_Hazards_Supplemental_Data_View/FeatureServer/2",
        title: "Lidar Extents",
        elevationInfo: [{
            mode: "on-the-ground"
        }],
        visible: false,
    })

    const airphotoPoints = new FeatureLayer({
        url: "https://services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services/Utah_Geologic_Hazards_Supplemental_Data_View/FeatureServer/3",
        title: "Aerial Imagery Centerpoints",
        elevationInfo: [{
            mode: "on-the-ground"
        }],
        visible: false,
        minScale: 500000,
    })

    const notMapped = new FeatureLayer({
        url: "https://services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services/Utah_Geologic_Hazards_Supplemental_Data_View/FeatureServer/4",
        title: "Areas Not Mapped within Project Areas",
        elevationInfo: [{
            mode: "on-the-ground"
        }],
        visible: true,
    })

    //grouplayers for organization

    const floodHazards = new GroupLayer({
        title: "Flooding Hazards",
        visible: true,
        layers: [floodHazard, groundwaterSus]
    });

    const earthquakes = new GroupLayer({
        title: "Earthquake Hazards",
        visible: true,
        layers: [shakingVector, liquefaction, faultRupture, qFaults/*, epicentersMining, epicentersRecent*/]
    });

    const landslides = new GroupLayer({
        title: "Landslide Hazards",
        visible: true,
        layers: [landslideComp, landslideSusceptibility, landslideDeposit, rockfallHaz],
    });

    mapView.map.add(quadBoundaries);
   // mapView.map.add(airphotoPoints);
   // mapView.map.add(lidarBounds);
    mapView.map.add(notMapped);
    mapView.map.add(hazardStudy);
    mapView.map.add(soilHazards);
    mapView.map.add(landslides);
    mapView.map.add(floodHazards);
    mapView.map.add(earthquakes);
    mapView.map.add(tempGraphicsLayer);



//url checking for query to load certain views and layers
var checkURL = urlUtils.urlToObject(window.location.href);


if (checkURL.query != null) {
if (checkURL.query.loadview == "subsurface") {  //load subsurface view and data
    subSurface.visible = true;
    geology.visible = false;
    mapView.camera.position.z = -431.67459647450596;
    mapView.camera.tilt = 93.26527489700682;
} else if (checkURL.query.loadview == "thermal") { //load thermal view and data
    thermalData.visible = true;
    geology.visible = false;
    mapView.camera.position.latitude = 38.482522462;
    mapView.camera.position.longitude = -112.87325304;
    mapView.camera.position.z = 70000;
    mapView.camera.tilt = 0;
    mapView.camera.position.heading = 359.98;
} else if (checkURL.query.loadview == "geologic") { //load geolgoic setting view and data
    geology.visible = true;
    mapView.camera.position.latitude = 38.482522462;
    mapView.camera.position.longitude = -112.87325304;
    mapView.camera.position.z = 70000;
    mapView.camera.tilt = 0;
    mapView.camera.position.heading = 270;
}

}


    //highlight faults when selected

  mapView.popup.watch('selectedFeature', function(gra){
    if(gra){
        mapView.graphics.removeAll();
      var h = mapView.highlightOptions;
      gra.symbol = {
        type: "simple-line", 
        style: "solid",
        color: [255, 255, 0],    
        width: 3
      };
      mapView.graphics.add(gra);
    }else{
        mapView.graphics.removeAll();
    }
  });
  
  mapView.popup.watch('visible', function(vis){
    if(!vis){
        mapView.graphics.removeAll();
    }
  });





    //watches when shakingVector is turned to also turn shakingRaster

    watchUtils.watch(shakingVector, 'visible', function(e) {
        if (e == true) {
            mapView.map.add(shakingRaster);
            console.log(map.layers.items);
        }
        if (e == false) {
            console.log(map.layers.items);
            mapView.map.remove(shakingRaster);
        };
    });

    //symbolize shakingRaster
    function colorize(pixelData) {
        console.log("coloring");
        var pixelBlock, factor, minValue, maxValue;

        if (
            pixelData === null ||
            pixelData.pixelBlock === null ||
            pixelData.pixelBlock.pixels === null
        ) {
            return;
        }

        // The pixelBlock stores the values of all pixels visible in the view
        pixelBlock = pixelData.pixelBlock;
        console.log(pixelBlock);

        // Get the min and max values of the data in the current view
        minValue = pixelBlock.statistics[0].minValue;
        maxValue = pixelBlock.statistics[0].maxValue;

        // The pixels visible in the view
        var pixels = pixelBlock.pixels;

        // The number of pixels in the pixelBlock
        var numPixels = pixelBlock.width * pixelBlock.height;

        // Calculate the factor by which to determine the red and blue
        // values in the colorized version of the layer
        factor = 255.0 / (maxValue - minValue);

        // Get the pixels containing temperature values in the only band of the data
        var tempBand = pixels[0];

        // Create empty arrays for each of the RGB bands to set on the pixelBlock
        var rBand = [];
        var gBand = [];
        var bBand = [];

        // Loop through all the pixels in the view
        for (i = 0; i < numPixels; i++) {
            // Get the pixel value (the temperature) recorded at the pixel location
            var tempValue = tempBand[i];
            // Calculate the red value based on the factor
            var red = (tempValue - minValue) * factor;

            // Sets a color between blue (coldest) and red (warmest) in each band
            rBand[i] = red;
            gBand[i] = 0;
            bBand[i] = 255 - red;
        }

        // Set the new pixel values on the pixelBlock
        pixelData.pixelBlock.pixels = [rBand, gBand, bBand];
        pixelData.pixelBlock.pixelType = "U8"; // U8 is used for color
    }




    layerList = new LayerList({
        view: mapView,
        container: "legendDiv",
        listItemCreatedFunction: function(event) {
            const item = event.item;
            //console.log(item);
            if (item.layer.type != "group") { // don't show legend twice
                item.panel = {
                    content: "legend",
                    open: true
                }
                item.actionsSections = [
                    [{
                        title: "Layer information",
                        className: "esri-icon-description",
                        id: "information"
                    }],
                    [{
                        title: "Zoom to layer",
                        className: "esri-icon-zoom-out-fixed",
                        id: "zoomTo"
                    }],
                    [{
                        title: "Increase opacity",
                        className: "esri-icon-up",
                        id: "increase-opacity"
                    }, {
                        title: "Decrease opacity",
                        className: "esri-icon-down",
                        id: "decrease-opacity"
                    }]
                ];
            }
        }
    });

            //legend expand widget
            var expandLegend = new Expand({
                view: mapView,
                content: layerList,
                //group: "top-left",
                expandTooltip: "Expand Legend",
                expanded: false
              })

        //legend expand widget
        var legend = new Expand({
            view: mapView,
            content: layerList,
            //group: "top-left",
            expandTooltip: "Expand Legend",
            expanded: true
          })
    
        //mapView.ui.add(expandLegend, "top-left");


    //layerlist action for opacity

    layerList.on("trigger-action", function(event) {

        console.log(event);



        // Capture the action id.
        var id = event.action.id;

        var title = event.item.title;

        if (title === "Mapped Areas") {
            layer = hazardStudy;
        } else if (title === "Epicenters (1850 to 2016)") {
            layer = epicentersRecent;
        } else if (title === "Epicenters 1850 to June 1962") {
            layer = epicentersHistoric;
        } else if (title === "Mining-Induced Epicenters") {
            layer = epicentersMining;
        } else if (title === "Aerial Imagery Centerpoints") {
            layer = airphotoPoints;
        } else if (title === "Lidar Extents") {
            layer = lidarBounds;
        } else if (title === "USGS 1:24,000-Scale Quadrangle Boundaries") {
            layer = quadBoundaries;
        } else if (title === "Karst Features") {
            layer = karstFeatures;
        } else if (title === "Ground Subsidence Potential") {
            layer = groundSubsidence;
        } else if (title === "Erosion Hazard Zone") {
            layer = erosionZone;
        } else if (title === "Earth Fissure Hazard") {
            layer = earthFissure;
        } else if (title === "Flood and Debris-Flow Hazard") {
            layer = floodHazard;
        } else if (title === "Caliche Susceptibility") {
            layer = caliche;
        } else if (title === "Soluble Soil and Rock Susceptibility") {
            layer = solubleSoil;
        } else if (title === "Collapsible Soil Susceptibility") {
            layer = collapsibleSoil;
        } else if (title === "Corrosive Soil and Rock Susceptibility") {
            layer = corrosiveSoil;
        } else if (title === "Geologic Radon Susceptibilty") {
            layer = radonSus;
        } else if (title === "Shallow Groundwater Susceptibility") {
            layer = groundwaterSus;
        } else if (title === "Expansive Soil and Rock Susceptibility") {
            layer = expansiveSoil;
        } else if (title === "Piping and Erosion Susceptibility") {
            layer = pipingSus;
        } else if (title === "Rockfall Hazard") {
            layer = rockfallHaz;
        } else if (title === "Shallow Bedrock Potential") {
            layer = bedrockPot;
        } else if (title === "Salt Tectonics-Related Ground Deformation") {
            layer = tectonicDef;
        } else if (title === "Wind-Blown Sand Susceptibility") {
            layer = eolianSus;
        } else if (title === "Surface Fault Rupture Special Study Zones") {
            layer = faultRupture;
        } else if (title === "Hazardous (Quaternary age) Faults") {
            layer = qFaults;
        } else if (title === "Landslide Susceptibility") {
            layer = landslideSusceptibility;
        } else if (title === "Landslides") {
            layer = landslideDeposit;
        } else if (title === "Legacy Landslide Compilation") {
            layer = landslideComp;
        } else if (title === "J.E. Fuller Flood Erosion Hazard Zones") {
            layer = erosionZone;
        } else if (title === "Floodplains") {
            layer = fema;
        } else if (title === "Earthquake Ground Shaking") {
            layer = shakingVector;
        } else if (title === "Areas Not Mapped within Project Areas") {
            layer = notMapped;
        } else if (title === "Liquefaction Susceptibility") {
            layer = liquefaction;
        }

        if (id === "information") {

            // if the information action is triggered, then
            // open the item details page of the service layer
            //window.open(title.url);

            layerInformation(title);



        } else if (id === "increase-opacity") {
            // if the increase-opacity action is triggered, then
            // increase the opacity of the GroupLayer by 0.25

            if (layer.opacity < 1) {
                layer.opacity += 0.1;
            }
        } else if (id === "decrease-opacity") {
            // if the decrease-opacity action is triggered, then
            // decrease the opacity of the GroupLayer by 0.25

            if (layer.opacity > 0) {
                layer.opacity -= 0.1;
            }
        } else if (id=== "zoomTo") {
          // if the full-extent action is triggered then navigate
          // to the full extent of the visible layer
          if(event.item.layer.fullExtent.spatialReference !== mapView.spatialReference){
            var geomSer = new GeometryService({url: 'http://sampleserver6.arcgisonline.com/arcgis/rest/services/Utilities/Geometry/GeometryServer'});
            var params = new ProjectParameters({
              geometries: [event.item.layer.fullExtent],
              outSpatialReference: mapView.spatialReference
            });
            geomSer.project(params).then(function(results){
              mapView.goTo(results[0]);
            });
          }else{
            mapView.goTo(event.item.layer.fullExtent);
          }
            
        }
    });


    var layerInfoURL = "https://services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services/Hazard_Layer_Info/FeatureServer/0";


    var modal = document.getElementById("myModal");

    layerInformation = function(eet) {
        console.log(eet);


        var layerInfoQueryTask = new QueryTask({
            url: layerInfoURL
        });
        console.log("QueryTask");

        var query = new Query();
        query.outFields = ["*"];
        query.where = "title = '" + eet + "'";
        console.log(query);

        layerInfoQueryTask.execute(query).then(function(results) {
            console.log(results.features[0].attributes.content);
            var contentLayerInfo = results.features[0].attributes.content;
            document.getElementsByClassName("modal-content")[0].innerHTML = "<b>" + eet + "</b> <br>" + contentLayerInfo;

            modal.style.display = "block";
        });


        // document.getElementsByClassName("modal-content")[0].innerHTML = eet;

        // modal.style.display = "block";
    }

    window.onclick = function(event) {
        //console.log(event);
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }




    // geolocate user position
    query(".dropdown-menu").on("click", function(e) {
        if (e.target.text == " Locate") {
            locate.locate().then(function() {
                // do we want to add a note to user?
                if (query(".calcite-dropdown.open")[0]) {
                    query(".calcite-dropdown, .calcite-dropdown-toggle").removeClass("open");
                } // end if
            }) // end .then
        } // end if
    }); // end query


    // Basemap events
    query("#selectBasemapPanel").on("change", function(e) {
        if (e.target.value == "ustopo") {
            // setup the ustopo basemap global variable.
            var ustopo = new Basemap({
                baseLayers: new TileLayer({
                    url: "https://server.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer"
                }),
                title: "usTopographic",
                id: "ustopo"
            });
            mapView.map.basemap = ustopo;
            // if mapview use basemaps defined in the value-vector=, but if mapview use value=
        } else if (map.mview == "map") {
            mapView.map.basemap = e.target.options[e.target.selectedIndex].dataset.vector;
        } else { // =="scene"
            mapView.map.basemap = e.target.value;
        }
    });


    //grab current map extents for report generator
    var currentExtentButton = document.getElementById("currentButton");
    currentExtentButton.onclick = function() {
        console.log(mapView.extent);
        var areaHeight = mapView.extent.height;
        var areaWidth = mapView.extent.width;

        //check to be sure extents are not too large
        if (areaHeight < 12000 && areaWidth < 18000) {

            var xMini = mapView.extent.xmin;
            var xMaxi = mapView.extent.xmax;
            var yMini = mapView.extent.ymin;
            var yMaxi = mapView.extent.ymax;

            var newRings = [
                [xMaxi, yMaxi],
                [xMaxi, yMini],
                [xMini, yMini],
                [xMini, yMaxi],
                [xMaxi, yMaxi]
            ];

            var aoi = {
                spatialReference: {
                    latestWkid: 3857,
                    wkid: 102100
                }
            };


            console.log(aoi);
            aoi.rings = [newRings];
            console.log(aoi);

            var params = {
                description: "Test",
                polygon: aoi,

            };
            console.log(params);

            localStorage.setItem('aoi', JSON.stringify(params));
            console.log(localStorage);
            window.open('./report');

        } else {
            console.log("Area of interest is too large, try again");
            alert("Area of interest is too large, try a smaller extent.");
        }
    };


    //custom polygon area of interest report generator tool

    //SketchView functions
    mapView.when(function() {
        // create a new sketch view model
        const sketchVM = new SketchViewModel({
            view: mapView,
            layer: tempGraphicsLayer,
            updateOnGraphicClick: false,
            polygonSymbol: {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: "rgba(138,43,226, 0.8)",
                style: "solid",
                outline: {
                    color: "white",
                    width: 1
                }
            }
        });

        //setUpClickHandler();

        //Listen to create event to add a newly created graphic to view
        sketchVM.on(["create"], addGraphic);

        //Listen the sketchViewModel's update
        //sketchVM.on(["update"], updateGraphic);



        //Called when sketchViewModel's create-complete event is fired
        function addGraphic(event) {
            console.log(event);
            if (event.state === "complete") {
                console.log("complete");
                            //check to be sure extents are not too large
                if (drawAOIHeight < 12000 && drawAOIWidth < 18000) {
                    var params = {
                        description: "Test",
                        polygon: aoi,

                    };
                    console.log(params);

                    localStorage.setItem('aoi', JSON.stringify(params));
                    console.log(localStorage);
                    window.open('./report');
                } else {
                    console.log("Area of interest is too large, try again");
                    alert("Area of interest is too large, try a smaller area.");
                }
            
            } else {
                console.log("not complete");
            
                // Create a new graphic and set its geometry to
            // `create-complete` event geometry.
            graphic = new Graphic({
                geometry: event.geometry,
                symbol: sketchVM.polygonSymbol
            });
            tempGraphicsLayer.add(graphic);
            console.log(event.graphic);
            drawAOIHeight = event.graphic.geometry.extent.height;
            drawAOIWidth = event.graphic.geometry.extent.width;
            aoi = event.graphic.geometry.toJSON();
            
        }
        }


        //Called when sketchViewModel's update-complete or update-cancel
        function updateGraphic(event) {
            console.log("Update");
            // event.graphic is the graphic that user clicked on and its geometry
            // has not been changed. Update its geometry and add it to the layer
            event.graphic.geometry = event.geometry;
            tempGraphicsLayer.add(event.graphic);

            // set the editGraphic to null update is complete or cancelled.
            editGraphic = null;
        }


        //Logic to handle geometry update and reflect the update on "tempGraphicsLayer"

        function setUpClickHandler() {
            mapView.on("click", function(event) {
                mapView.hitTest(event).then(function(response) {
                    var results = response.results;
                    // Found a valid graphic
                    if (results.length && results[results.length - 1]
                        .graphic) {
                        // Check if we're already editing a graphic
                        if (!editGraphic) {
                            // Save a reference to the graphic we intend to update
                            editGraphic = results[results.length - 1].graphic;
                            // Remove the graphic from the GraphicsLayer
                            // Sketch will handle displaying the graphic while being updated
                            tempGraphicsLayer.remove(editGraphic);
                            sketchVM.update(editGraphic);
                        }
                    }
                });
            });
        }



        //Polygon draw button
        var drawPolygonButton = document.getElementById("polygonButton");
        drawPolygonButton.onclick = function() {
            // set the sketch to create a polygon geometry
            sketchVM.create("polygon", {
                mode: "click"
            });
            setActiveButton(this);
        };


        //Reset button
        document.getElementById("resetBtn").onclick = function() {
            sketchVM.cancel();
            console.log("reset polygon");
            tempGraphicsLayer.removeAll();
            setActiveButton();
        };

        function setActiveButton(selectedButton) {
            // focus the view to activate keyboard shortcuts for sketching
            mapView.focus();
            var elements = document.getElementsByClassName("active");
            for (var i = 0; i < elements.length; i++) {
                elements[i].classList.remove("active");
            }
            if (selectedButton) {
                selectedButton.classList.add("active");
            }
        }

    });

// Check for mobile screen to load with collapsed legend

isResponsiveSize = mapView.widthBreakpoint === "xsmall";
updateView(isResponsiveSize);

// Breakpoints

mapView.watch("widthBreakpoint", function(breakpoint) {
    console.log("watching breakpoint");
    console.log(breakpoint);
  switch (breakpoint) {
    case "xsmall":
      updateView(true);
      break;
    case "small":
    case "medium":
    case "large":
    case "xlarge":
      updateView(false);
      break;
    default:
  }
});


function updateView(isMobile) {
    
  setLegendMobile(isMobile);

}

    loadHelp = document.querySelector('.help-tip img');



    var navHelp = '<div class="esri-component esri-widget">';
    navHelp += '<div id="help-tip" class="esri-widget--button esri-widget esri-interactive" role="button" title="Navigation Help">';
    navHelp += '<span aria-hidden="true" role="presentation" class="esri-icon esri-icon-question"></span>';
    navHelp += '<span class="esri-icon-font-fallback-text">Navigation Help</span></div></div>';
    $(".esri-ui-top-left").append(navHelp);
    
    if (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
                loadHelp.style.display = "none";
				loadHelp.src = "map_navigation_mobile_crop.png";
				loadHelp.style.maxWidth = "92%";
				loadHelp.style.left = "15px";
    } else {
                loadHelp.style.display = "block";
				loadHelp.src = "map_navigation_crop.png";
				loadHelp.style.maxWidth = "75%";
				loadHelp.style.left = "54px";
    }

$("#help-tip, .help-tip").click(function() {
	$(loadHelp).toggle();
});

function setLegendMobile(isMobile) {
  var toAdd = isMobile ? expandLegend : legend;
  var toRemove = isMobile ? legend : expandLegend;


  mapView.ui.remove(toRemove);
  mapView.ui.add(toAdd, "top-left");
}

//uncollapse mobile popup when it docks
popup = mapView.popup;
mapView.when(function() {
  popup.watch("collapsed", function(value){
      if(value){
      popup.collapsed = false;
    }
  });

});


var coordsWidget = document.createElement("div");
      coordsWidget.id = "coordsWidget";
      coordsWidget.className = "esri-widget esri-component";
      coordsWidget.style.padding = "3px 3px 10px";
      coordsWidget.style.backgroundColor = "#ffffff80";

      mapView.ui.add(coordsWidget, "bottom-right");

function showCoordinates(pt) {
    if (pt) {
    var coords = "Lat/Lon " + pt.latitude.toFixed(3) + " " + pt.longitude.toFixed(3) +
        " | Scale 1:" + Math.round(mapView.scale * 1) / 1;
    coordsWidget.innerHTML = coords;
    }
  }

  mapView.watch("stationary", function(isStationary) {
    showCoordinates(mapView.center);
  });

  mapView.on("pointer-move", function(evt) {

    showCoordinates(mapView.toMap({ x: evt.x, y: evt.y }));
  });
         
  //------------------Search Code------------------------  

  searchWidget.includeDefaultSources = false;

  searchWidget.on("search-complete", function(e){
    console.log(e);

    var faultID = e.results[0].results[0].feature;
    console.log(faultID);

    mapView.graphics.removeAll();
      faultID.symbol = {
        type: "simple-line", 
        style: "solid",
        color: [255, 255, 0],    
        width: 3
      };
      mapView.graphics.add(faultID);


});



   searchWidget.allPlaceholder = "Find Fault, Place, or Parcel";


       
    searchWidget.on("search-start", function(e) {
            mapView.popup.close();   //close previous popup when starting new search
    });

    searchWidget.on("search-clear", function(e) {
        mapView.popup.close();  // close popup if its open from last search
    });

    var extent = new Extent(-114.1, 37.0, -108.9, 42.0);


    


    var sources = [
      {
        layer: 
        new FeatureLayer({
          url: "https://webmaps.geology.utah.gov/arcgis/rest/services/Hazards/quaternary_faults_with_labels/MapServer/0",
        }),
        exactMatch: false,
        displayField: "FaultName",    
        searchFields: ["FaultZone","FaultName","SectionName","StrandName"],   
         outFields: ["*"],  
        name: "Fault Search",
        popupTemplate: {
            title: "Hazardous (Quaternary age) Faults",
            content: poopTemplate
          },
        placeholder: "ex: Wasatch Fault Zone",
        searchTemplate: "{FaultZone}, {FaultName}, {SectionName}, {StrandName}",
         suggestionTemplate: "<b>Fault Zone:</b> {FaultZone}, <b>Fault Name:</b> {FaultName}, <b>Section Name:</b> {SectionName}, <b>Strand Name:</b> {StrandName}",
        maxSuggestions: 5000,
        minSuggestCharacters: 3,

    },
    {
    locator: new Locator("https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer"),
    exactMatch: true,
    singleLineFieldName: "SingleLine",
    type: "locator",
    name: "Location Search",
    countryCode: "US",  
    searchExtent: extent,
    category:["Address","Neighborhood","City"],
    placeholder: "ex: -111.9, 40.8 or Place",

    minSuggestCharacters: 3,
    zoomScale: 100000,
  }
];

    searchWidget.sources = sources;    

        


});