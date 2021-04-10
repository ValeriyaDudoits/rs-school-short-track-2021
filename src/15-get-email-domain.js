/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const result = [];
  const emailArr = email.split('');
  for (let i = emailArr.length; i > 1; i--) {
    if (emailArr[i] === '@') {
      for (let j = i + 1; j < emailArr.length; j++) {
        result.push(emailArr[j]);
      }
      break;
    }
  }
  return result.join('');
}

module.exports = getEmailDomain;
