/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  //turn the intiger coming in into an array
  var number = x.toString();
  var numArray = number.split('');
  var length = numArray.length - 1
  console.log(length)
  //create an index point and have 
  for (var i = 0; i < length; i++) {
      var reverse = length - i
      if (numArray[i] !== numArray[reverse]) {
          return false;
      } else if (i === reverse) {
          return true;
      }
  }
  //when loops are done return true 
    return true; 
};
//this one wasnt very fast but i got it all on my own 

var twoSums = function(nums, target) {
    return
}