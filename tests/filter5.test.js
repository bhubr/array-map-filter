const searchWordFilter = require('../filter/ex5.js');

describe('filter - exercice 5', () => {

  test('searchWordFilter', () => {
    expect(searchWordFilter([
      'Mad Max: Fury Road',
      'Interstellar',
      'Revenge of the Nerds',
      'Revenge of the Pink Panther',
      'Star Wars: Episode I - The Phantom Menace',
      'Star Wars: Episode II - Attack of the Clones',
      'Star Wars: Episode III - Revenge of the Sith'
    ], 'revenge'))
    .toEqual([
      'Revenge of the Nerds',
      'Revenge of the Pink Panther',
      'Star Wars: Episode III - Revenge of the Sith'
    ]);
  });

});

