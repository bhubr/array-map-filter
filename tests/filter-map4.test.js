const getActivitiesMembers = require('../filter-map/ex4.js');

xdescribe('map + filter - exercice 4', () => {

  test('getActivitiesMembers', () => {
    expect(getActivitiesMembers(
      ['Badminton', 'Tennis', 'Volley-ball', 'Base-ball', 'Soccer', 'Basket-ball', 'Cycling'],
      [
        { name: 'Jay Fox', activities: [ 'Badminton' ] },
        { name: 'Jenson Gardner', activities: [ 'Badminton', 'Tennis' ] },
        { name: 'Max Dean', activities: [ 'Base-ball', 'Soccer' ] },
        { name: 'Cody May', activities: [ 'Basket-ball', 'Base-ball' ] },
        { name: 'Nicholas Knight', activities: [ 'Base-ball', 'Volley-ball' ] },
        { name: 'Fletcher Estes', activities: [ 'Basket-ball' ] },
        { name: 'Jaydon Gallagher', activities: [ 'Badminton', 'Basket-ball' ] },
        { name: 'Efrain Rollins', activities: [ 'Volley-ball', 'Tennis' ] },
        { name: 'Tripp Cash', activities: [ 'Badminton' ] },
        { name: 'Ross Howard', activities: [ 'Cycling' ] }
    ]))
    .toEqual([ {
      activity: 'Badminton',
      persons: [ 'Jay Fox', 'Jenson Gardner', 'Jaydon Gallagher', 'Tripp Cash' ]
    },
    {
      activity: 'Tennis',
      persons: [ 'Jenson Gardner', 'Efrain Rollins' ]
    },
    {
      activity: 'Volley-ball',
      persons: [ 'Nicholas Knight', 'Efrain Rollins' ]
    },
    {
      activity: 'Base-ball',
      persons: [ 'Max Dean', 'Cody May', 'Nicholas Knight' ]
    },
    {
      activity: 'Soccer',
      persons: [ 'Max Dean' ]
    },
    {
      activity: 'Basket-ball',
      persons: [ 'Cody May', 'Fletcher Estes', 'Jaydon Gallagher' ]
    },
    {
      activity: 'Cycling',
      persons: [ 'Ross Howard' ]
    }
  ]);
  });

});

