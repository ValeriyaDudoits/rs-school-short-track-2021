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
  const arr = str.split('');
  let number = 1;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    while (arr[i] === str[i + 1]) {
      number++;
      i++;
    }
    if (number > 1) {
      result.push(number);
      result.push(arr[i]);
      number = 1;
    } else {
      result.push(arr[i]);
      number = 1;
    }
  }
  return result.join('');
}

module.exports = encodeLine;
