// Write code to print all numbers from 1 to `num`
// Assume `num` will be a positive number

// var logNums = function(num) {
//   for (var i = 1; i <= num; i++) {
//     console.log(i);
//   }
// };


// arrow function - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
const logNums = (num) => {
  // for (var i = 1; i <= num; i++) {
  //   console.log(i);
  // }
  // es6 format - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
  Array.from({length : num}, (_, v) => {
    return console.log(v+1)
  })
}