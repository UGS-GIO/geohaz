import React from 'react';
import config from '../config';
import './Group.scss';

export default props => {
  return (
    <div className="page-break">
      <h1 className="group__heading" title={config.notProd && 'HazardGroupingsTable.HazardGroup'}>{props.name} Hazard</h1>
      <p dangerouslySetInnerHTML={{ __html: props.text}} title={config.notProd && 'HazardGroupTextTable.Text'}></p>
      {props.children}
    </div>
  );
};
