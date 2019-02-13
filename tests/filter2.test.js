const getMultiplesOf = require('../filter/ex2.js');

describe('filter - exercice 2', () => {

  test('getMultiplesOf', () => {
    expect(getMultiplesOf([-12, -10, -7, -1, 5, 8, 11, 15, 20, 27], 5))
    .toEqual([-10, 5, 15, 20]);
  });

});

