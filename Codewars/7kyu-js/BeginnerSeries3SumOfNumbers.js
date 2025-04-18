/* Codewars
Given two integers a and b, which can be positive or negative, find the sum of 
all the integers between and including them and return it. If the two numbers 
are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get 
that number.

FundamentalsAlgorithms */
/*const getSum = (a, b) => {
  [a, b] = [Math.min(a, b), Math.max(a, b)];
  return [...Array(b - a + 1).keys()].map(x => x + a).reduce((y, c) => y + c);
}*/

// from colbydauph
/*const getSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}*/

// after commentary
const getSum = (a, b) => (Math.abs(b - a) + 1) * (a + b) / 2;


// Testing 
console.log(getSum(0,-1), -1);
console.log(getSum(0, 1),  1);
console.log(getSum(2, 2),  2);
console.log(getSum(0,-5), -15);
console.log(getSum(0, 5),  15);
console.log(getSum(-2, 2),  0);