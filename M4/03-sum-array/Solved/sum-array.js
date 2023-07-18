// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr) {
  var result = 0;

  for (var i = 0; i < arr.length; i++) {
    var currentNumber = arr[i];
    result += currentNumber;
  }

  return result;
};

array = [1,3,5,6,7,7,7]

console.log(sumArray(array));