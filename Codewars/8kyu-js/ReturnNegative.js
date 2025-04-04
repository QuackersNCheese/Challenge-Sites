/* Codewars
In this simple assignment you are given a number and have to make it negative. 
But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no 
mathematical sense.
Fundamentals
*/
/*
function makeNegative(num) {
  return -Math.abs(num);
} */

const makeNegative = n => -Math.abs(n);

// Testing
console.log(makeNegative(42) === -42 ? "Pass" : "Fail: 42");
console.log(makeNegative(-1) === -1 ? "Pass" : "Fail: -1");
console.log(makeNegative(0) === 0 ? "Pass" : "Fail: 0");
