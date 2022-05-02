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
  let result = [];
  let counter = 1;
  let arR = str.split('');
  arR.forEach((el,i) => {
    if(el == arR[i+1]) {
      counter++;
    } else {
      result.push(`${counter}${el}`);
      counter = 1;
    }
  });
  return result.join('').replace(/[1]/g, '');
}
module.exports = {
  encodeLine
};
