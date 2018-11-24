const getCirclesProperties = require('../map/ex4.js');

describe('map - exercice 4', () => {

  test('getCirclesProperties', () => {
    expect(getCirclesProperties(  [
      1, 2, 7, 11
    ])).toEqual([
      {
        radius: 1,
        circumference: '6.283',
        surface: '3.142'
      },
      {
        radius: 2,
        circumference: '12.566',
        surface: '12.566'
      },
      {
        radius: 7,
        circumference: '43.982',
        surface: '153.938'
      },
      {
        radius: 11,
        circumference: '69.115',
        surface: '380.133'
      }
    ]);
  });

});

