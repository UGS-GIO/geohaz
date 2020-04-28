import React, { createContext, useCallback, useState, useEffect } from 'react';
import './App.scss';
import config from './config';
import HazardMap from './reportParts/HazardMap';
import Group from './reportParts/Group';
import Hazard from './reportParts/Hazard';
import HazardUnit from './reportParts/HazardUnit';
import References from './reportParts/References';
import {
  queryUnitsAsync,
  queryHazardUnitTableAsync,
  queryReferenceTableAsync,
  queryIntroTextAsync,
  queryGroupingAsync,
  queryGroupTextAsync,
  queryReportTextTableAsync,
  queryOtherDataTableAsync,
  queryLidarAsync,
  queryAerialAsync
} from './services/QueryService';
import { getHazardCodeFromUnitCode } from './helpers';
import CoverPage from './reportParts/CoverPage';
import SummaryPage from './reportParts/SummaryPage';
import OtherDataPage from './reportParts/OtherDataPage';
import ProgressBar from './reportParts/ProgressBar';
// import LidarFeature from './reportParts/LidarFeature';
// import AerialFeature from './reportParts/AerialFeature';
import ErrorPage from './reportParts/ErrorPage';


export const ProgressContext = createContext();
console.log(`using web map: ${config.webMaps.hazard}`);

export default props => {
  const [groupToHazardMap, setGroupToHazardMap] = useState({});
  const [hazardToUnitMap, setHazardToUnitMap] = useState({});
  const [hazardIntroText, setHazardIntroText] = useState();
  const [hazardReferences, setHazardReferences] = useState();
  const [queriesWithResults, setQueriesWithResults] = useState([]);
  const [groupToTextMap, setGroupToTextMap] = useState([]);
  const [reportTextMap, setReportTextMap] = useState({});
  const [otherDataMap, setOtherDataMap] = useState({});
  // const [lidarFeatures, setLidarFeatures] = useState([]);
  // const [aerialFeatures, setAerialFeatures] = useState([]);
  const [tasks, setTasks] = useState({});
  const [pageError, setError] = useState(false);

  const registerProgressItem = useCallback(itemId => {
    setTasks(previousTasks => {
      if (previousTasks[itemId]) {
        throw Error(`${itemId} is already registered as a progress task!`);
      }

      return {
        ...previousTasks,
        [itemId]: false
      };
    });
  }, []);
  const setProgressItemAsComplete = useCallback(itemId => {
    setTasks(previousTasks => {
      return {
        ...previousTasks,
        [itemId]: true
      };
    });
  }, []);

  useEffect(() => {
    const getData = async () => {
      console.log('App.getData');

      const relatedTablesProgressId = 'related tables'
      registerProgressItem(relatedTablesProgressId);

      const allHazardInfos = await Promise.all(config.queries.map(featureClassMap => {
        registerProgressItem(featureClassMap);

        return queryUnitsAsync(featureClassMap, props.polygon).then(data => {
          setProgressItemAsComplete(featureClassMap);

          return data;
        });
      }));

      console.log('queried all units');

      const hazardInfos = allHazardInfos.filter(({ units }) => units.length > 0);
      const flatUnitCodes = Array.from(new Set(hazardInfos.reduce((previous, { units }) => previous.concat(units), [])));
      setQueriesWithResults(hazardInfos.map(info => [info.url, info.hazard]));

      // these queries can be done simultaneously
      const [
        groupings,
        hazardIntroText,
        hazardUnitText,
        hazardReferences,
        reportTextRows,
        otherDataRows,
        // lidarFeatures,
        // aerialFeatures
      ] = await Promise.all([
        queryGroupingAsync(flatUnitCodes),
        queryIntroTextAsync(flatUnitCodes),
        queryHazardUnitTableAsync(flatUnitCodes),
        queryReferenceTableAsync(flatUnitCodes),
        queryReportTextTableAsync(),
        queryOtherDataTableAsync(),
        // queryLidarAsync(props.polygon),
        // queryAerialAsync(props.polygon)
      ]);
      setProgressItemAsComplete(relatedTablesProgressId);

      const otherDataMapBuilder = {};
      otherDataRows.forEach(row => {
        otherDataMapBuilder[row.Data] = row;
      });
      setOtherDataMap(otherDataMapBuilder);

      const reportTextMapBuilder = {};
      reportTextRows.forEach(({ Section, Text }) => {
        reportTextMapBuilder[Section] = Text;
      });
      setReportTextMap(reportTextMapBuilder);

      const flatGroups = Array.from(new Set(groupings.map(({ HazardGroup }) => HazardGroup)));
      const groupText = await queryGroupTextAsync(flatGroups);

      const groupToTextMapBuilder = {};
      const groupToHazardMapBuilder = {};
      groupText.forEach(({ HazardGroup, Text }) => {
        groupToTextMapBuilder[HazardGroup] = Text;

        // build this object here so that the order is correct for when we use it in the jsx below
        groupToHazardMapBuilder[HazardGroup] = [];
      });

      const hazardToUnitMapBuilder = {};
      hazardUnitText.forEach(({ HazardUnit, HazardName, HowToUse, Description, UnitName }) => {
        const hazardCode = getHazardCodeFromUnitCode(HazardUnit);

        if (!hazardToUnitMapBuilder[hazardCode]) {
          hazardToUnitMapBuilder[hazardCode] = [];
        }

        hazardToUnitMapBuilder[hazardCode].push({ HazardName, HowToUse, Description, HazardUnit, UnitName });
      });

      groupings.forEach(({ HazardCode, HazardGroup }) => groupToHazardMapBuilder[HazardGroup].push(HazardCode));

      setHazardToUnitMap(hazardToUnitMapBuilder);
      setGroupToHazardMap(groupToHazardMapBuilder);
      setHazardIntroText(hazardIntroText);
      setHazardReferences(hazardReferences);
      setGroupToTextMap(groupToTextMapBuilder);
      // setLidarFeatures(lidarFeatures);
      // setAerialFeatures(aerialFeatures);
    };

    if (props.polygon) {
      getData().then(null, (error) => {
        console.warn(error);
        setError(error);
      });
    }
  }, [props.polygon, registerProgressItem, setProgressItemAsComplete]);

  return (!pageError ? <>
    <ProgressContext.Provider value={{ registerProgressItem, setProgressItemAsComplete }}>
      <ProgressBar className="print--hide" tasks={tasks}>
        <div className="print-button">
          <button onClick={window.print}>Print Report</button>
        </div>
      </ProgressBar>
      <div className="app__container">
        <HazardMap aoi={props.polygon} queriesWithResults={queriesWithResults}>
          <CoverPage aoiDescription={props.description} {...reportTextMap} />
          <SummaryPage {...reportTextMap}
            hazardToUnitMap={hazardToUnitMap}
            // aerialFeatures={aerialFeatures}
            // lidarFeatures={lidarFeatures}
            groupToHazardMap={groupToHazardMap} />
          {Object.keys(groupToHazardMap).map(groupName => (
            <Group key={groupName} name={groupName} text={groupToTextMap[groupName]}>
              {hazardIntroText && hazardReferences && hazardToUnitMap && groupToHazardMap[groupName].map(hazardCode => {
                const intro = hazardIntroText.filter(x => x.Hazard === hazardCode)[0];
                const introText = (intro) ? intro.Text : null;
                const references = hazardReferences.filter(x => x.Hazard === hazardCode);
                const units = hazardToUnitMap[hazardCode];
                    return (
                      <Hazard name={units[0].HazardName} group={groupName} introText={introText} key={hazardCode} code={hazardCode}>
                        { units.map((unit, index) => <HazardUnit key={index} {...unit}/>) }
                        <References references={references.map(({ Text }) => Text)}></References>
                      </Hazard>
                    )
                  })}
            </Group>
          ))}
          {/* <OtherDataPage {...otherDataMap['Lidar Elevation Data']} mapKey={config.mapKeys.lidar} id="lidar">
            {lidarFeatures.map((feature, index) => <LidarFeature key={index} {...feature} />)}
          </OtherDataPage>
          <OtherDataPage {...otherDataMap['Aerial Photography and Imagery']} mapKey={config.mapKeys.aerials} id="aerial-photography">
            {aerialFeatures.map((feature, index) => <AerialFeature key={index} {...feature} />)}
          </OtherDataPage> */}
        </HazardMap>
        <div className="header page-break">
          <h1>OTHER GEOLOGIC HAZARD RESOURCES</h1>
          <p dangerouslySetInnerHTML={{__html: reportTextMap.OtherGeologicHazardResources}}
            title={config.notProd && 'ReportTextTable.Text(OtherGeologicHazardResources)'}></p>
        </div>
      </div>
      </ProgressContext.Provider>
  </> : <ErrorPage error={pageError} />);
};
