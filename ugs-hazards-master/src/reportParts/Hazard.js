import React from 'react';
import config from '../config';
import { kebabCase } from 'lodash';
import './Hazard.scss';
import MapSurround from './MapSurround';
import qffLegend from '../images/qff-legend.jpg';


export default props => {
  return (
    <div className="page-break" id={kebabCase(props.name)}>
      <h2 className="group__heading" title={config.notProd && "HazardGroupingsTable.HazardGroup (from parent)"}>{props.group} Hazard</h2>
      <h2 className="hazard__heading" title={config.notProd && "HazardUnitTextTable.HazardName (from first unit)"}>{props.name}</h2>
      <p dangerouslySetInnerHTML={{ __html: props.introText }} title={config.notProd && "HazardIntroTextTable.Text"}></p>
      <MapSurround mapKey={props.code} />
      { props.code === config.quaternaryFaultsHazardCode &&
        <img src={qffLegend} alt="QFF static legend" className="hazard__static-legend" /> }
      {props.children}
    </div>
  );
};
