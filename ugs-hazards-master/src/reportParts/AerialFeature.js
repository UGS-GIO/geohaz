import React from 'react';
import './AerialFeature.scss';


export default props => {
  return (
    <div className="aerial-feature">
      <div>{props.Agency}</div>
      <div>{props.ProjectYear} {props.ProjectCode} {props.ProjectName} {props.Roll} {props.Frame}</div>
      <div dangerouslySetInnerHTML={{__html: props.Description}}></div>
    </div>
  );
};
