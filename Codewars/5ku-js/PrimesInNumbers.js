/* Codecademy
Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"
with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
FundamentalsMathematics*/
const isPrime = n => {
  if(n < 2) 
    return false;
  for(let i = 2; i < Math.floor(n ** 0.5 + 1); i++)
    if(n % i == 0) 
      return false;
  return true;
}

function primeFactors(n){
  let factors = [];
  if(n < 2) 
    return factors;
  let d = n;
  let i = 2;
  while(!isPrime(d)) {
    while(!isPrime(i))
      i++;
    if(d % i)
      i++;
    else {
      factors.push(i);
      d /= i;
    }
  }
  factors.push(d);
  return makeBubbles(factors);
}

function makeBubbles(r) {
  let bubbles = "";
  let e = 1;
  let b = r.shift();
  let done = false;
  while(r.length > 0) {
    if(b == r[0]){
      e++;
      done = false;
    }
    else {
      bubbles += makeBubble(b, e);
      done = true;     
      e = 1;
    }
    b = r.shift();
    if(r.length == 0) 
      done = false;
  }
  return done ? bubbles : bubbles + makeBubble(b, e); 
}

const makeBubble = (b, e) => e > 1 ? `(${b}**${e})` : `(${b})`;

// Testing
console.log(primeFactors(2) , "(2)");
console.log(primeFactors(4) == "(2**2)"); 
console.log(primeFactors(6) == "(2)(3)");
console.log(primeFactors(86240) == "(2**5)(5)(7**2)(11)");
console.log(primeFactors(457380) == "(2**2)(3**3)(5)(7)(11**2)");
console.log(primeFactors(7775460) == "(2**2)(3**3)(5)(7)(11**2)(17)");