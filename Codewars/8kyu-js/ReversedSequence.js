/* Codewars
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]

Fundamentals*/
//const reverseSeq = n => [...Array(n).keys()].map(a => n - a);
// from slai
const reverseSeq = n => [...Array(n)].map(_ => n--)
// Testing
console.log(reverseSeq(5), [5, 4, 3, 2, 1]);