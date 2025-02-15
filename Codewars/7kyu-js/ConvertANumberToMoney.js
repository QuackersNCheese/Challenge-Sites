/* Codewars
Simplified number to money converter.
Note:
truncate to 2 decimal places
don't keep trailing zeros
input will be a positive number with at least two trailing digits
Examples:
2546.2562 --> '2,546.25'

1500.342626 --> '1,500.34'

100.2134 --> '100.21'

Taken from 'Formatting a number as price' (Kyu 5)

Regular ExpressionsFundamentals*/
const numberToMoney = n => (Math.trunc(n * 100) / 100).toLocaleString();

// Testing
console.log(numberToMoney(2546.2562) === '2,546.25');
console.log(numberToMoney(1500.342626) === '1,500.34');
console.log(numberToMoney(100.2134) === '100.21');
console.log(numberToMoney(2342.01) === '2,342.01');
console.log(numberToMoney(10.3426266666666666) === '10.34');
console.log(numberToMoney(10.2134) === '10.21');
console.log(numberToMoney(95876.0095294565) === '95,876');