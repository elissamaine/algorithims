// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
  //set up variables for the string going forward and backwards
  var string = str.toLowerCase();
  var newString = string.split("").reverse().join("");

  // check to see if the original sring and the new string are the same 
  if (string === newString) {
    return true;
  } else {
    return false;
  }
};
