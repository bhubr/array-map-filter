const getPositiveNumbers = require('../filter/ex1.js');

describe('filter - exercice 1', () => {

  test('getPositiveNumbers', () => {
    expect(getPositiveNumbers([7, -4, 2, 0, -10, 3, 11]))
    .toEqual([7, 2, 0, 3, 11]);
  });

});

