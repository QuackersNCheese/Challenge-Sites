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

/*function power(base, exp) {
  if(exp == 0) {return 1;}
  if(exp > 0) {return base * power(base, exp - 1);}
  if(exp < 0) {return power(base, exp + 1) / base;}
}*/
function power(base, exp) {
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
}
/*const power = (b, e) => [...Array(e < 0 ? -e : e)].map((x) => x = (e < 0 ? 1/b : b)).reduce((s, c) => s * c, 1);*/
const power = (b, e) => [...Array(e < 0 ? -e : e)].reduce((s) => s * (e < 0 ? 1/b : b), 1);
/*// from macnick
const power = (b, e) => e > 1 ? b * power(b, --e): e < 1 ? 1 / b * power(b, ++e) : b;*/

// Testing
console.log(power(2, 3), 8);
console.log(power(4, -2), 0.0625, "power(x,negative) should be equal 1/power(x,positive)");