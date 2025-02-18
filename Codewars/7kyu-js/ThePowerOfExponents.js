/* Codewars
This kata is based on: Exponent Method

Create a method called power that takes two integers and returns the value of the first argument raised to the power of the second.

Unlike the Exponent Method, you should also take in account negative exponents.

Your solution won't be tested against special cases leading to undefined values (0**-2 for example)

Note: The ** operator (JS: Math.pow) has been disabled.

Examples:

power(2, 3)   // 8
power(4, -2)  // 0.0625
MathematicsAlgorithms*/
// #### recursive ####
/*function power(base, exp) {
  if(exp == 0) {return 1;}
  if(exp > 0) {return base * power(base, exp - 1);}
  if(exp < 0) {return power(base, exp + 1) / base;}
}*/
//const power = (b, e) => e != 0 ? 1 : e < 0 ? 1/b * power(b, ++e) : b * power(b, --e);  
//const power = (b, e) => e < 0 ? 1/b * power(b, ++e) : e > 0 ? b * power(b, --e) : 1;
// #### C-style ####
/*function power(base, exp) {
  let b, e, result = 1;

  if(exp < 0) { 
    b = 1 / base; 
    e = -exp; 
  } else { 
    b = base; 
    e = exp;
  }
  for(let i = 0; i < e; i++) 
    result *= b;
  
  return result;
}*/
//const power = (b, e) => [...Array(e < 0 ? -e : e)].map((x) => x = (e < 0 ? 1/b : b)).reduce((s, c) => s * c, 1);
const power = (b, e) => [...Array(e < 0 ? -e : e)].reduce((s) => s * (e < 0 ? 1/b : b), 1);
// #### from macnick ####
//const power = (b, e) => e > 1 ? b * power(b, --e): e < 1 ? 1/b * power(b, ++e) : b;

// Testing
console.log(power(2, 3) == 8 ? "Pass" : "Fail: 2^3");
console.log(power(4, -2) == 0.0625 ? "Pass" : "Fail: 4^-2");
console.log(power(-2, 3) == -8 ? "Pass" : "Fail: (-2)^3");
console.log(power(-2,-3) == -0.125 ? "Pass" : "Fail: (-2)^-3");
console.log(power(-2, -4,) == 1/16 ? "Pass" : "Fail: (-2)^-4");
console.log(power(2, 0) == 1 ? "Pass" : "Fail: 2^0");
console.log(power(2, 1) == 2 ? "Pass" : "Fail: 2^1");
console.log(power(0, 1) === 0 ? "Pass" : "Fail: 0^1");
console.log(power(0, -3), 'Infinity'); // unfair  
console.log(power(0, 0), 'NaN');  // unfair