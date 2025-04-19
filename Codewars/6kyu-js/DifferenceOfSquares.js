/* Codewars
Task
Given an integer n, return a pair of integers (x, y) such that x ^ 2 - y ^ 2 = n.

If there is no solution, return a "null value", according to your language (more info in the initial solution).

Input Constraints
-2 ^ 128 < n < 2 ^ 128
Examples
 1 -> (1, 0) // 1 - 0 = 1
 2 -> null   // Or your language's equivalent.
-3 -> (1, 2) // 1 - 4 = -3
 4 -> (2, 0) // 4 - 0 = 4
-5 -> (2, 3) // 4 - 9 = -5
Extras
For a step up to this challenge, check out @encrypted-oreo's Difference of Cubes kata!

MathematicsNumber Theory*/
function squares(num) {
  for(let i = -Math.ceil(Math.sqrt(Math.abs(num))); i <= Math.floor(Math.sqrt(Math.abs(num))); i++) {
    if(num > 0) {
      let y = Math.sqrt(i * i - num);
      if(y % 1 == 0) 
        return [BigInt(i), BigInt(y)];
    } else {
      let x = Math.sqrt(Math.abs(num) + i * i);
      if(x % 1 == 0)
        return [BigInt(i), BigInt(x)];
    }
  }
  return null;
}

// did not complete

// Testing
console.log(squares(1), [1n, 0n]);
console.log(squares(2), null);
console.log(squares(-3), [1n, 2n]);
console.log(squares(4), [2n, 0n]);
console.log(squares(-5), [2n, 3n]);
console.log(squares(5), [2n, 3n]);