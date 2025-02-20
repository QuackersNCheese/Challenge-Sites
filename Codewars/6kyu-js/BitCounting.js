/* Codewars
Write a function that takes an integer as input, and returns the number of bits
 that are equal to one in the binary representation of that number. You can 
 guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function 
should return 5 in this case
*/

/*const toBin = n => (n == 0) ? '' : toBin(Math.floor(n / 2)) + n % 2;
const countBits = n => toBin(n).split('').filter(x => x == 1).length;*/

//const countBits = n => [...(n.toString(2))].filter(x => x == 1).length;

const countBits = n => n.toString(2).split('0').join('').length;
// Testing
//console.log(toBin(8496742397));
 console.log(countBits(0)==0?'Pass':'Fail');
console.log(countBits(4)==1?'Pass':'Fail');
console.log(countBits(7)==3?'Pass':'Fail');
console.log(countBits(9)==2?'Pass':'Fail');
console.log(countBits(10)==2?'Pass':'Fail');
console.log(countBits(1234)==5?'Pass':'Fail');
console.log(countBits(1234)==5?'Pass':'Fail');
console.log(countBits(8496742397)==26?'Pass':'Fail');
console.log((8496742397).toString(2));
console.log(countBits(null)==0?'Pass':'Fail');