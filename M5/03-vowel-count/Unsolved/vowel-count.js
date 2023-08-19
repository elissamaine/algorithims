// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
  //set variables for vowels and results 
  var result = 0;
  var vowels = ["a", "e", "i", "o", "u"];

  // loop through the sting and set letters to lover case
  for (var i = 0; i < str.length; i++) {
    var letter = str[i].toLowerCase();

    //if the letter is in the vowels array add 1 to the result
    if (vowels.indexOf(letter) !== -1) {
      result += 1;
    }
  }
  
  return result;
};
