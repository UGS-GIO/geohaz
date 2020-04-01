import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';


console.log(`app version: ${process.env.REACT_APP_VERSION || 'dev'}`);
console.log(`environment: ${process.env.REACT_APP_ENVIRONMENT}`);

const init = (aoi) => {
  console.log('aoi', aoi);

  ReactDOM.render(<App {...aoi} />, document.getElementById('root'));
};

let aoi = localStorage.getItem('aoi');
if (!aoi) {
  import('./testData.json').then(aoi => init(aoi));
} else {
  init(JSON.parse(aoi));
}
