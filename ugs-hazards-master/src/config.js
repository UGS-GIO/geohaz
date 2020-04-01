const baseUrl = 'https://services.arcgis.com/ZzrwjTRez6FJiOq4/arcgis/rest/services';
const supplementalData = `${baseUrl}/Utah_Geologic_Hazards_Supplemental_Data_View/FeatureServer`;
const groundshakingHazardCode = 'EGS';
const quaternaryFaultsHazardCode = 'QFF';
export default {
  mapKeys: {
    overview: 'overview-map',
    lidar: 'lidar-map',
    aerials: 'aerials-map'
  },
  scaleMultiple: 2500,
  notProd: process.env.REACT_APP_ENVIRONMENT !== 'production',
  urls: {
    baseUrl,
    hazardGroupingsTable: `${baseUrl}/Report_Tables_View/FeatureServer/0`,
    hazardGroupTextTable: `${baseUrl}/Report_Tables_View/FeatureServer/1`,
    hazardIntroTextTable: `${baseUrl}/Report_Tables_View/FeatureServer/2`,
    hazardReferenceTextTable: `${baseUrl}/Report_Tables_View/FeatureServer/3`,
    hazardUnitTextTable: `${baseUrl}/Report_Tables_View/FeatureServer/4`,
    imageAgenciesTable: `${baseUrl}/Report_Tables_View/FeatureServer/5`,
    otherDataTable: `${baseUrl}/Report_Tables_View/FeatureServer/7`,
    reportTextTable: `${baseUrl}/Report_Tables_View/FeatureServer/8`,
    lidarExtents: `${supplementalData}/2`,
    aerialImageryCenterPoints: `${supplementalData}/3`
  },
  groundshakingHazardCode,
  quaternaryFaultsHazardCode,
  queries: [
    ['Utah_Geologic_Hazards/FeatureServer/0', 'FLH'], // Flood Hazard
    ['Utah_Geologic_Hazards/FeatureServer/1', 'SGS'], // Shallow Groundwater Susceptibility
    ['Utah_Geologic_Hazards/FeatureServer/2', 'LSS'], // Landslide Susceptibility
    ['Utah_Geologic_Hazards/FeatureServer/3', 'LSF'], // Landslides
    ['Utah_Geologic_Hazards/FeatureServer/4', 'LSC'], // Legacy Landslide Compilation
    ['Utah_Geologic_Hazards/FeatureServer/5', 'CAS'], // Caliche Susceptibility
    ['Utah_Geologic_Hazards/FeatureServer/6', 'CSS'], // Collapsible Soil Susceptibility
    ['Utah_Geologic_Hazards/FeatureServer/7', 'CRS'], // Corrosive Soil and Rock Susceptibility
    ['Utah_Geologic_Hazards/FeatureServer/8', 'EFH'], // Earth Fissure Hazard
    ['Utah_Geologic_Hazards/FeatureServer/9', 'ERZ'], // Erosion Hazard Zones
    ['Utah_Geologic_Hazards/FeatureServer/10', 'EXS'], // Expansive Soil and Rock Susceptibility
    ['Utah_Geologic_Hazards/FeatureServer/11', 'GSP'], // Ground Subsidence Potential
    ['Utah_Geologic_Hazards/FeatureServer/12', 'MKF'], // Karst Features
    ['Utah_Geologic_Hazards/FeatureServer/13', 'PES'], // Piping and Erosion Susceptibility
    ['Utah_Geologic_Hazards/FeatureServer/14', 'GRS'], // Radon Susceptibility
    ['Utah_Geologic_Hazards/FeatureServer/15', 'RFH'], // Rockfall Hazard
    ['Utah_Geologic_Hazards/FeatureServer/16', 'SDH'], // Salt Tectonics Related Ground Deformation
    ['Utah_Geologic_Hazards/FeatureServer/17', 'SBP'], // Shallow Bedrock Potential
    ['Utah_Geologic_Hazards/FeatureServer/18', 'SLS'], // Soluble Soil and Rock Susceptibility
    ['Utah_Geologic_Hazards/FeatureServer/19', 'WSS'], // Wind-Blown Sand Susceptibility
    ['https://webmaps.geology.utah.gov/arcgis/rest/services/Hazards/quaternary_faults/MapServer/0', quaternaryFaultsHazardCode], // Quaternary Faults
    ['Utah_Earthquake_Hazards/FeatureServer/2', 'LQS'], // Liquefaction Susceptibility
    ['Utah_Earthquake_Hazards/FeatureServer/3', 'SFR'], // Surface Fault Rupture Hazard Special Study Zone
    ['Utah_Earthquake_Hazards/FeatureServer/5', groundshakingHazardCode] // Groundshaking Polygons
  ],
  webMaps: {
    hazard: (process.env.REACT_APP_ENVIRONMENT === 'dev') ?
      // development
      'eec57827136a472dbdb75535889d74b2' :
      // production & staging
      'a2d16377b4b5495ab2aaca8dd14463ba'
  }
};
