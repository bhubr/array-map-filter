const getMoviesFreshness = require('../map/ex2.js');

describe('Test map - exercice 2', () => {

  test('getMoviesFreshness', () => {
    expect(getMoviesFreshness(  [
    {
      name: 'Crazy Rich Asians',
      rating: 93
    },
    {
      name: 'Skyscraper',
      rating: 46
    },
    {
      name: 'Leave No Trace',
      rating: 100
    },
    {
      name: 'White Boy Rick',
      rating: 60
    }
  ])).toEqual([
      'Crazy Rich Asians is a certified fresh movie',
      'Skyscraper is a rotten movie',
      'Leave No Trace is a certified fresh movie',
      'White Boy Rick is a fresh movie'
    ]);
  });

});

