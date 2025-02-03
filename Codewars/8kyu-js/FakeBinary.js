/* Codewars
Given a string of digits, you should replace any digit below 5 with '0' and any 
digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string

FundamentalsStringsArrays
*/

function fakeBin(x){
  result = '';
  for(let i = 0; i < x.length; i++) {
    if(+x[i] < 5) {
      result += '0';
    } else {
      result += '1';
    }
  }
  return result;
} 

/* failed attempt
const fakeBin = x => x.split().reduce((sum, y) => sum + (+y < 5 ? '0' : '1'), ''); */
// Testing
console.log(fakeBin('45385593107843568'));
console.log(fakeBin('45385593107843568') === '01011110001100111' ? 'Pass' : 'Fail: 45385593107843568');
console.log(fakeBin('509321967506747') === '101000111101101' ? 'Pass' : 'Fail: 509321967506747');
console.log(fakeBin('366058562030849490134388085') === '011011110000101010000011011' ? 'Pass' : 'Fail: 366058562030849490134388085');