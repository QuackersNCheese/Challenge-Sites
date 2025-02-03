/* Codewars
Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
ArraysStringsFundamentals
*/
/*
function stringToArray(string){
  return string.join(' ');
} */
const stringToArray = s => s.split(' ');

// Testing
console.log(stringToArray('Robin Singh'));
console.log(stringToArray('I love arrays they are my favorite'));