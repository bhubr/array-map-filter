const getFoodCategories = require('../map/ex2.js');

describe('map - exercice 2', () => {

  test('getFoodCategories', () => {
    expect(getFoodCategories(  [
    {
      food: 'Bacon',
      isVegetarian: false
    },
    {
      food: 'Sausage',
      isVegetarian: false
    },
    {
      food: 'Tofu',
      isVegetarian: true
    },
    {
      food: 'Chick Pea',
      isVegetarian: true
    }
  ])).toEqual([
      'Bacon is not suitable for vegetarians',
      'Sausage is not suitable for vegetarians',
      'Tofu is suitable for vegetarians',
      'Chick Pea is suitable for vegetarians'
    ]);
  });

});

