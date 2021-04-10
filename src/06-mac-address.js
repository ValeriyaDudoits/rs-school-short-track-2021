/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const arr = n.split('');
  const arrCopy = [];
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  if (arr[2] === '-' && arr[5] === '-' && arr[8] === '-' && arr[11] === '-' && arr[14] === '-') {
    for (let k = 0; k < arr.length; k++) {
      if (arr[k] === '-') {
        arr.splice(k, 1);
        k--;
      }
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < letters.length; j++) {
        if (arr[i] === letters[j]) {
          arrCopy.push(j);
        }
      }
    }
    if (arrCopy.length === arr.length) {
      return true;
    } return false;
  } return false;
}

module.exports = isMAC48Address;
