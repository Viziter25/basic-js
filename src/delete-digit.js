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
  let arr = number.toString().split('');
  let min = arr[0];
  let index = [];
  arr.forEach((element,i) => {
    if(element < min) {
      min = element;
      index.push(i);
    }
  });
  arr.splice(index[0],1);
  return +arr.join('');
}

module.exports = {
  deleteDigit
};
