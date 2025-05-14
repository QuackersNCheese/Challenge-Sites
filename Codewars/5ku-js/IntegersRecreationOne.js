/* Codewars
1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246.

Squaring these divisors we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681.

The sum of these squares is 84100 which is 290 * 290.

Task
Find all integers between m and n (m and n are integers with 1 <= m <= n) such 
that the sum of their squared divisors is itself a square.

We will return an array of subarrays or of tuples (in C an array of Pair) or a 
string.

The subarrays (or tuples or Pairs) will have two elements: first the number the 
squared divisors of which is a square and then the sum of the squared divisors.

Example:
m =  1, n = 250 --> [[1, 1], [42, 2500], [246, 84100]]
m = 42, n = 250 --> [[42, 2500], [246, 84100]]
The form of the examples may change according to the language, see "Sample Tests".

Note
In Fortran - as in any other language - the returned string is not permitted to 
contain any redundant trailing whitespace: you can use dynamically allocated 
character strings.

FundamentalsAlgorithms*/
//const divisors = n => [...Array(n).keys()].map(x => ++x).filter(x => n % x == 0);

const divisors = n => {
  let res = [];
  const end = n ** 0.5;
  for(let i = 1; i <= end; i++) {
    if(n % i == 0) {
      res.push(i);
      if(i != end) 
        res.push(n / i);
    }
  }
  return res;
}
/*
console.log(...divisors(0));
console.log(...divisors(63));
console.log(...divisors(65));
console.log(...divisors(64));
console.log(...divisors(12));
console.log(...divisors(246));*/

function listSquared(m, n) {
  let res = [];
  for(let j = m; j <= n; j ++) {  // loop through given range
    // create list of squared divisors
    let divisorsSquared = [];
    const end = j ** 0.5;
    for(let i = 1; i <= end; i++) {
      if(j % i == 0) {
        divisorsSquared.push(i * i);
        if(i != end) 
          divisorsSquared.push((j / i) ** 2);
      }
    }
    // sum squares and check for even square root
    const sum = divisorsSquared.reduce((s, c) => s + c);
    if(sum ** 0.5 % 1 == 0)
      res.push([j, sum])
  }
  return res;
}

// Testing
console.log(...listSquared(1, 250), [...[1, 1], ...[42, 2500], ...[246, 84100]])
console.log(...listSquared(42, 250), [...[42, 2500], ...[246, 84100]])
console.log(...listSquared(250, 500), [...[287, 84100]])
