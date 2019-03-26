const getStudentsPerCurriculum = require('../filter-map/ex3.js');

describe('map + filter - exercice 3', () => {

  test('getStudentsPerCurriculum', () => {
    expect(getStudentsPerCurriculum(
      [
        { city: 'Bordeaux',
          curriculums: [
            { name: 'PHP/Symfony', numStudents: 12 },
            { name: 'JS/React', numStudents: 29 }
          ]
        },
        {
          city: 'La Loupe',
          curriculums: [
            { name: 'JS/Angular', numStudents: 32 }
          ]
        },
        {
          city: 'Lille',
          curriculums: [
            { name: 'PHP/Symfony', numStudents: 12 },
            { name: 'JS/React', numStudents: 10 }
          ]
        },
        {
          city: 'Marseille',
          curriculums: [
            { name: 'JS/React', numStudents: 16 }
          ]
        }
      ], 'PHP/Symfony'
      ))
    .toEqual([{ Bordeaux: 12 }, { Lille: 12 }]);
  });

});

