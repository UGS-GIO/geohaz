export const getHazardCodeFromUnitCode = (unitCode) => {
  return unitCode.slice(-3).toUpperCase();
}

export const getLidarFeatureName = (projectName, areaName) => {
  if (areaName) {
    return `${projectName} - ${areaName}`;
  }

  return projectName;
}
