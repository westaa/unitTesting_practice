module.exports = {

  testFunc: function() {
    return "YUP!"
  },

  isPalindrome: function (term) {
    return term.toString().split('').reverse().join(',') === term.toString().split('').join(',');
  },

  hasEnoughGas: function (car, route) {
    return route.miles <= car.milesPerGallon * car.gallonsInTank;
  }

}

// var car = {
//   milesPerGallon: 20,
//   gallonsInTank: 3
// };
//
// var route = {
//   miles: 200,
//   destination: "Boulder",
//   location: "Fancy Land"
// };
