var myFunctions = require('../lib/rides');

describe('Checks if child is tall enough for ride.', function() {

  var child1 = {
    height: 3,
    name: "Julian",
    age: 3
  };

  var child2 = {
    height: 4,
    name: "Cero",
    age: 4
  };

  var ride1 = {
    minHeight: 3,
    maxHeight: 7
  } ;

  var ride2 = {
    minHeight: 4,
    maxHeight: 7
  };

  it('true if child is tall enough', function() {
    expect(myFunctions.isTallEnough(child1, ride1)).toEqual(true);
    expect(myFunctions.isTallEnough(child1, ride2)).toEqual(false);
    });
  });
