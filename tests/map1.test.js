const getStringsLength = require('../map/ex1.js');

describe('map - exercice 1', () => {

  test('getStringsLength', () => {
    expect(getStringsLength([
      'Chicken',
      'Bacon',
      'Tofu',
      'Mayonnaise'
    ])).toEqual([
      'Chicken contains 7 characters',
      'Bacon contains 5 characters',
      'Tofu contains 4 characters',
      'Mayonnaise contains 10 characters'
    ]);
  });

});

