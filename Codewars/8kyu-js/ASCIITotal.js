/* Codewars
You'll be given a string, and have to return the sum of all characters as an
 int. The function should be able to handle all ASCII characters.

examples:

uniTotal("a") == 97 uniTotal("aaa") == 291
*/
/*function uniTotal(s) {
    if(typeof(s) !== 'string')
      return null;
  
    return [...s].reduce((t, c) => t + c.charCodeAt(0), 0);
}*/

const uniTotal = s => typeof(s) == 'string' ? [...s].reduce((a, c) => a + c.charCodeAt(0), 0) : null;
  
  // Testing
  console.log(uniTotal() === null ? 'Pass' : 'Fail: ' + uniTotal());  // null
  console.log(uniTotal('') === 0 ? 'Pass' : 'Fail: ' + uniTotal(''));  // 0
  console.log(uniTotal('a') === 97 ? 'Pass' : 'Fail: ' + uniTotal('a'));  // 97
  console.log(uniTotal('aaa') === 291 ? 'Pass' : 'Fail: ' + uniTotal('aaa'));  // 291