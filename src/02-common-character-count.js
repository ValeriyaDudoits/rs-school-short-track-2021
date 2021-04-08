/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  let strArray1 = s1.split('');
  let strArray2 = s2.split('');
  let result = [];

  for (let j = 0; j <strArray1.length; j++) {
      for (let i = 0; i < strArray2.length; i++) {
          if (strArray1[j] === strArray2[i]) {
              result.push(strArray1[j]);
              strArray2.splice(i, 1);
              strArray1.splice(j, 1);
              j--;
              console.log(strArray2);
          }
      }
  }

  return result.length;
}

module.exports = getCommonCharacterCount;
