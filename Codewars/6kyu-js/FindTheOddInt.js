/* Codewars
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

Fundamentals*/
function findOdd(A) {
  obj = {};
  for(let el of A)
    if(el in obj) 
      obj[el]++;
    else 
      obj[el] = 1; 
  
  for(let el in obj)
    if(obj[el] % 2)
      return +el;

  return -1;
}

// by Unnamed
//const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

// Testing
console.log(findOdd([7]), 7);
console.log(findOdd([0]), 0);
console.log(findOdd([1,1,2]), 2);
console.log(findOdd([0,1,0,1,0]), 0);
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]), 4);
console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]), 5);
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]), -1);
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]), 5);
console.log(findOdd([10]), 10);
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]), 10);
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]), 1);