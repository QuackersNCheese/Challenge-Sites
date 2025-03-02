/* Codewars
Given an array of integers.

Return an array, where the first element is the count of positives numbers and 
the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should
return [10, -65].

FundamentalsArraysLists*/
//const countPositivesSumNegatives = n => n && n.length > 0 ? [n.reduce((a, c) => a + (c > 0 ? 1 : 0), 0), n.reduce((a, c) => a + (c < 0 ? c : 0), 0)] : [];

const countPositivesSumNegatives = n => n && n.length ? [n.filter(x => x > 0).length, n.reduce((a, c) => a + (c < 0 ? c : 0), 0)] : [];
// Testing
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]), [10, -65]);
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]), [8, -50]);
console.log(countPositivesSumNegatives([]), []);
console.log(countPositivesSumNegatives(null), []);
console.log(countPositivesSumNegatives(), []);