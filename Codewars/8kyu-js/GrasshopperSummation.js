/* Codewars
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
FundamentalsMathematics*/
//const summation = n => [...Array(n)].reduce((a, _, i) => a + i + 1, 0);
//const summation = n => n == 1 ? 1 : n + summation(n - 1);
const summation = n => n * (n + 1) / 2;

// Testing
console.log(summation(1), 1);
console.log(summation(2), 3);
console.log(summation(8), 36);