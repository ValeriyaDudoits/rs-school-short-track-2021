/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let domain;
  const obj = {};
  let key = '';
  for (let i = 0; i < domains.length; i++) {
    domain = domains[i].split('.').reverse();
    for (let j = 0; j < domain.length; j++) {
      key = '';
      for (let k = 0; k <= j; k++) {
        key += `.${domain[k]}`;
      }
      if (Number.isNaN(Number(obj[key]))) {
        obj[key] = 1;
      } else {
        obj[key] += 1;
      }
    }
  }
  return obj;
}

module.exports = getDNSStats;
