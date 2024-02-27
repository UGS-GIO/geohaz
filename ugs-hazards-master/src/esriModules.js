import { loadModules } from 'esri-loader';


export default async () => {
  const requires = [
    'esri/WebMap',
    'esri/views/MapView',
    'esri/geometry/Polygon',
    'esri/Graphic',
    'esri/core/reactiveUtils',
    'esri/symbols/support/symbolUtils',
    'esri/widgets/ScaleBar'
  ];

  const [
    WebMap,
    MapView,
    Polygon,
    Graphic,
    reactiveUtils,
    symbolUtils,
    ScaleBar
  ] = await loadModules(requires, {
    version: '4.29',
    css: true
  });

  return {
    WebMap, MapView, Polygon, Graphic, reactiveUtils, symbolUtils, ScaleBar
  };
};
