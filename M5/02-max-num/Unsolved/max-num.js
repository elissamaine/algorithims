// Write code to return the largest number in the given array

var maxNum = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    var index = arr[i];
    if (index > arr[i]) {
      return index;
    } else {
      return arr[i];
    }
  }
};

array = [1, 3, 10, 3, 5, 26, 5]
console.log(maxNum(array));