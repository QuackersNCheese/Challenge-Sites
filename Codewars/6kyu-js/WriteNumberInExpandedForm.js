/* Codewars
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

   12 --> "10 + 2"
   45 --> "40 + 5"
70304 --> "70000 + 300 + 4"
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!

StringsMathematicsAlgorithmsFundamentals*/

function expandedForm(num) {
  let result = [];
  let n = num;
  for(let i = 0; i <= Math.log10(num); i++) {
    let placeValue = 10 ** i * (n % 10);
    if(placeValue)
      result.unshift(placeValue);
    n = Math.floor(n / 10);
  }
  return result.join(' + ');
}

// Testing
console.log(expandedForm(0), '');
console.log(expandedForm(5), '5');
console.log(expandedForm(12), '10 + 2');
console.log(expandedForm(42), '40 + 2');
console.log(expandedForm(70304), '70000 + 300 + 4');
