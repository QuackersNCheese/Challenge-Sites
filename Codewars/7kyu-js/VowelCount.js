/* Codewars
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

StringsFundamentals*/
//const getCount = s => [...s].reduce((a, c) => a + /[aeiou]/.test(c), 0);
// from Balkoth
/*function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}*/
// so...
const getCount = s => (s.match(/[aeiou]/g)||[]).length;

// Testing
console.log(getCount("abracadabra") == 5 ? "Pass" : "Fail: abracadabra");
console.log(getCount("The quick brown fox jumped over the lazy dog.") == 12 ? "Pass" : "Fail: The quick brown fox jumped over the lazy dog.");
console.log(getCount("aeiouy") == 5 ? "Pass" : "Fail: aeiouy");
console.log(getCount("wxyz") == 0 ? "Pass" : "Fail: wxyz");
console.log(getCount("") == 0 ? "Pass" : "Fail: ");