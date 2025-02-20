/* Codewars
Given an array of ones and zeroes, convert the equivalent binary value to an 
integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.

FundamentalsArrays*/
const binaryArrayToNumber = r => r.reverse().reduce((a, c, i) => a + c * 2 ** i, 0);

// from user4386369
// const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

// Testing
console.log(binaryArrayToNumber([0, 0, 0, 1]), 1, 'binaryArrayToNumber([0, 0, 0, 1])');
console.log(binaryArrayToNumber([0, 0, 1, 0]), 2, 'binaryArrayToNumber([0, 0, 1, 0])');
console.log(binaryArrayToNumber([1, 1, 1, 1]), 15, 'binaryArrayToNumber([1, 1, 1, 1])');
console.log(binaryArrayToNumber([0, 1, 1, 0]), 6, 'binaryArrayToNumber([0, 1, 1, 0])');