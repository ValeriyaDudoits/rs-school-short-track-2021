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
function deleteDigit(n) {
  const numbers = n.toString();
  const arr = numbers.split('');
  function getMinOfArray(numArray) {
    return Math.min.apply(null, numArray);
  }
  const minNum = getMinOfArray(arr);
  for (let i = 0; i < arr.length; i++) {
    if (+arr[i] === minNum) {
      arr.splice(i, 1);
      break;
    }
  }
  const result = arr.join('');
  return +result;
}

module.exports = deleteDigit;
