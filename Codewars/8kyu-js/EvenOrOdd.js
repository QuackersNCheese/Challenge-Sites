/* Codewars
Create a function that takes an integer as an argument and returns "Even" for 
even numbers or "Odd" for odd numbers.

MathematicsFundamentals
*/
/*
function evenOrOdd(number) {
  return number % 2 == 0 ? 'Even' : 'Odd';
} */

const evenOrOdd = n => n % 2 == 0 ? 'Even' : 'Odd';

// Testing
console.log(evenOrOdd(2) == 'Even' ? "Pass" : "Fail: 2");
console.log(evenOrOdd(7) == 'Odd' ? "Pass" : "Fail: 7");
console.log(evenOrOdd(-42) == 'Even' ? "Pass" : "Fail: -42");
console.log(evenOrOdd(-7) == 'Odd' ? "Pass" : "Fail: -7");
console.log(evenOrOdd(0) == 'Even' ? "Pass" : "Fail: 0");