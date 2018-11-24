const getCampusesTeachingReact = require('../filter-map/ex2.js');

describe('map + filter - exercice 2', () => {

  test('getCampusesTeachingReact', () => {
    expect(getCampusesTeachingReact([
      { city: 'Bordeaux', curriculums: ['PHP/Symfony', 'JS/React'] },
      { city: 'La Loupe', curriculums: ['JS/Angular'] },
      { city: 'Lille', curriculums: ['PHP/Symfony', 'JS/React'] },
      { city: 'Marseille', curriculums: ['JS/React'] },
      { city: 'Orléans', curriculums: ['PHP/Symfony'] },
      { city: 'Reims', curriculums: ['JS/React'] },
      { city: 'Toulouse', curriculums: ['JEE/Android', 'JS/React'] }
    ]))
    .toEqual(['Bordeaux', 'Lille', 'Marseille', 'Reims', 'Toulouse']);
  });

});

