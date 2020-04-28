import React from 'react';
import ugsLogo from '../images/ugs-logo.jpg';
import config from '../config';
import './CoverPage.scss';
import MapSurround from './MapSurround';


const date = new Date();
export default ({ aoiDescription, aoi, Introduction, Disclaimer }) => {
  return (
    <div className="cover-page">
      <div className="header">
        <h1>Utah Geological Survey</h1>
        <img src={ugsLogo} alt="dnr logo" className="logo" />
        <h3>GEOLOGIC HAZARDS MAPPING AND DATA CUSTOM REPORT</h3>
        {/* <h3 title={config.notProd && 'from "description" property of input data'}>for {aoiDescription}</h3> */}
        <p dangerouslySetInnerHTML={{ __html: `Report generated on ${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`}}></p>
      </div>
      <p dangerouslySetInnerHTML={{ __html: Introduction }}
        title={config.notProd && 'ReportTextTable.Text(Introduction)'}></p>
      <MapSurround mapKey={config.mapKeys.overview} />
      <p dangerouslySetInnerHTML={{ __html: Disclaimer }}
        title={config.notProd && 'ReportTextTable.Text(Disclaimer)'}></p>
    </div>
  );
};
