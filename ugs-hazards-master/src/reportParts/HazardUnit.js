import React, { useState, useEffect, useRef, useContext } from 'react';
import getModules from '../esriModules';
import config from '../config';
import { HazardMapContext } from './HazardMap';
import { getHazardCodeFromUnitCode } from '../helpers';
import './HazardUnit.scss';


export default props => {
  console.log('HazardUnit', props);
  const [hasLegend, setHasLegend] = useState(false);
  const legend = useRef(null);
  const mapContext = useContext(HazardMapContext);

  useEffect(() => {
    const buildLegend = async renderer => {
      console.log('buildLegend', renderer);

      setHasLegend(true);

      const { symbolUtils } = await getModules();
      let renderers = [];

      if (renderer.type === 'unique-value') {
        renderers = renderer.uniqueValueInfos.filter(info => info.value === props.HazardUnit);
      }

      if (renderers.length !== 1) {
        return;
      }

      const symbol = renderers[0].symbol.clone();

      await symbolUtils.renderPreviewHTML(symbol, {
        node: legend.current
      });
    };

    const assets = mapContext.visualAssets[getHazardCodeFromUnitCode(props.HazardUnit)];
    if (!hasLegend && assets && assets.renderer) {
      buildLegend(assets.renderer);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapContext]);

  return (
    <div className="unit">
      <div className="legend-container">
        <div ref={legend} className="legend"></div>
        <div>
          <p dangerouslySetInnerHTML={{ __html: props.Description }}
            title={config.notProd && 'HazardUnitTextTable.Description'}></p>
          {/* <h4>How to Use This Map</h4>
          <p dangerouslySetInnerHTML={{ __html: props.HowToUse }}
            title={config.notProd && 'HazardUnitTextTable.HowToUse'}></p> */}
        </div>
      </div>
    </div>
  );
};
