const keepStarks = require('../filter/ex3.js');

describe('filter - exercice 3', () => {

  test('keepStarks', () => {
    expect(keepStarks([
      'Bran Stark',
      'Cersei Lannister',
      'Sandor Clegane',
      'Arya Stark',
      'Yara Greyjoy',
      'Sansa Stark'
    ]))
    .toEqual(['Bran Stark', 'Arya Stark', 'Sansa Stark']);
  });

});

