/* Codewars
Write a function that takes an array of numbers (integers for the tests) and a 
target number. It should find two different items in the array that, when added 
together, give the target value. The indices of these items should then be 
returned in a tuple / list (depending on your language) like so: 
(index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid 
solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, 
and all of the items will be numbers; target will always be the sum of two 
different items from that array).

Based on: https://leetcode.com/problems/two-sum/

twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1]
ArraysFundamentalsAlgorithms*/
function twoSum(numbers, target) {
  for(let i = 0; i < numbers.length; i++) {
    for(let j = i + 1; j < numbers.length; j++) {
      if(numbers[i] + numbers[j] == target)
        return [i, j];
    }
  }
  return -1;
}

/* from Unnamed O(n) ### what is a Map(), and it's methods .has(), .get(), and .set()
function twoSum(numbers, target) {
  let seen = new Map();
  for (let i = 0; i < numbers.length; i++) {
    let x = numbers[i], y = target - x;
    if (seen.has(y))
      return [seen.get(y), i];
    seen.set(x, i);
  }
}*/

// Testing
console.log(twoSum([1, 2, 3], 4)); // [0, 2]
console.log(twoSum([1234, 5678, 9012], 14690)); // [1, 2]
console.log(twoSum([2, 2, 3], 4)); // [0, 1]
console.log(twoSum([2, 3, 1], 3)); // [0, 2]