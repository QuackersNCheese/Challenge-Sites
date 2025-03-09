/* Codewars
A pangram is a sentence that contains every single letter of the alphabet at 
least once. For example, the sentence "The quick brown fox jumps over the lazy 
dog" is a pangram, because it uses the letters A-Z at least once (case is 
irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, 
False if not. Ignore numbers and punctuation.

StringsData StructuresFundamentals*/
const isPangram = s => [...Array(26).keys()].every(x => s.toLowerCase().includes(String.fromCharCode(x + 97)));

// from Konstantin Modin
// const isPangram = a => new Set(a.toLowerCase().replace(/[^a-z]/g, '')).size == 26

// Testing
console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
console.log(isPangram('this is false'));
console.log(isPangram('abcdefghijklmnopqrstuvwxyz'));