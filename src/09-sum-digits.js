/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let nStr = n.toString();
  let nArr = nStr.split('');
  let sum = 0;
  function getSum(arr) {
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += +arr[i];
    }
    return sum;
  }
  while (nArr.length > 1) {
    getSum(nArr);
    nStr = sum.toString();
    nArr = nStr.split('');
  } return +nArr.join('');
}

module.exports = getSumOfDigits;
