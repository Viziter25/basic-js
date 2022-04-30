const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = {};
  let arR = str.split('');
  arR.forEach((el) => {
  result[el] = (result[el] || 0) + 1;
  });
  let resultArr = [];
  for ( key in result) {
    let count = result[key]+key;
    resultArr.push(count);
  }
  return resultArr.join('').replace(/[1]/, '');
}

module.exports = {
  encodeLine
};
