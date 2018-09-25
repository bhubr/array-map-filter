const getMoviesFreshness = require('../map/ex3.js');

xdescribe('map - exercice 3', () => {

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

