import { getHazardCodeFromUnitCode, getLidarFeatureName } from './helpers';

describe('getHazardCodeFromUnitCode', () => {
  it('returns the appropriate values', () => {
    const tests = [
      ['Lflh', 'FLH'],
      ['ASDfgh', 'FGH']
    ];

    tests.forEach(([input, expected]) => {
      expect(getHazardCodeFromUnitCode(input)).toEqual(expected);
    });
  });
});

describe('getLidarFeatureName', () => {
  it('returns the appropriate values', () => {
    const tests = [
      [['a project name', null], 'a project name'],
      [['another project name', 'area name'], 'another project name - area name']
    ];

    tests.forEach(([input, expected]) => {
      expect(getLidarFeatureName(...input)).toEqual(expected);
    })
  });
});
