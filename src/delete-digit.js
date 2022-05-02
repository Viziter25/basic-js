const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(number) {
  const arr = number.toString().split('');
  let allNumbers = [];
  arr.forEach((element,i) => {
    
    let result = arr.filter((item,j) => i !== j).join('');
    allNumbers.push(result);
    
  });
  allNumbers.sort((a,b) => a - b);
  return +allNumbers[allNumbers.length-1];
}


module.exports = {
  deleteDigit
};

123