const multiplyOddIndices = require('../map/ex5.js');

describe('map - exercice 5', () => {

  test('multiplyOddIndices', () => {
    expect(multiplyOddIndices([3, 8, 11, 13, 19, 7]))
      .toEqual([3, 8, 11, 39, 19, 35]);
  });

});

