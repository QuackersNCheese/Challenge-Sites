/* Codewars
We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"
StringsFundamentals*/
/*function numberToString(num) {
    return "" + num;
}*/

const numberToString = n => "" + n;

// Testing
console.log(numberToString(67) === '67' ? "Pass" : "Fail: 67");
console.log(numberToString(0) === '0' ? "Pass" : "Fail: 0");
console.log(numberToString(-54) === '-54' ? "Pass" : "Fail: -54");