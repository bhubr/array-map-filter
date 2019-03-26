const filterOffensiveComments = require('../filter/ex6.js');

describe('filter - exercice 6', () => {

  test('filterOffensiveComments', () => {
    expect(filterOffensiveComments([
      "Very useful tutorial, thank you so much!",
      "React is not a damn framework, it's a LIBRARY",
      "Why you put bloody kitten pictures in a tech tutorial is beyond me!",
      "Which one is better, React or Angular?",
      'There is no "better", it depends on your use case, DAMN YOU'
        ], ['damn', 'bloody']))
    .toEqual([
      "Very useful tutorial, thank you so much!",
      "Which one is better, React or Angular?",
    ]);
  });

});

