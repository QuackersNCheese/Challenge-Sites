/* Codewars
Create a function that accepts a string and a single character, and returns an 
integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", 'o')  =>  1
("Hello", 'l')  =>  2
("", 'z')       =>  0
Notes
The first argument can be an empty string
In languages with no distinct character data type, the second argument will be 
a string of length 1
FundamentalsStrings
*/
let strCount = (s, l) => [...s].filter(c => c == l).length;

// Testing
console.log(strCount('Hello', 'o'), 1);
console.log(strCount('Hello', 'l'), 2);
console.log(strCount('',      'z'), 0);