var myFunctions = require('../lib/miles');

describe('Checks if this stuff works', function() {
  it('returns "YUP!"', function() {
    expect(myFunctions.testFunc()).toEqual("YUP!")
    })
  })

describe('Checks if term is a palindrome', function() {
  it('returns true if palinedrome', function() {
    expect(myFunctions.isPalindrome('? 76 yBOB BOBy 67 ?')).toEqual(true);
    expect(myFunctions.isPalindrome('6 yBOB BOBy 67')).toEqual(false);
    })
  })

describe('ensures adequate gasoline in car for trip', function () {
  it('returns false if not enough gas for trip', function() {
    var car = {
      milesPerGallon: 20,
      gallonsInTank: 3
    };

    var route = {
      miles: 200,
      destination: "Boulder",
      location: "Fancy Land"
    };

    expect(myFunctions.hasEnoughGas(car, route)).toEqual(false);
  });
});

console.log(myFunctions);
