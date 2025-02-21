/* Codewars
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the 
alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in 
the original string.

All letters will be lowercase and all inputs will be valid.

FundamentalsStringsArrays*/
function high(x) {
  let words = x.split(' ');
  let score = 0, word = '', max = 0;
  for(let i = 0; i < words.length; i++) {
    score = [...words[i]].reduce((a, c) => a + c.charCodeAt(0) - 96, 0);
    if(score > max) {
      word = words[i];
      max = score;
    }
  }
  return word
}

// Testing
console.log(high('man i need a taxi up to ubud'), 'taxi');
console.log(high('what time are we climbing up the volcano'), 'volcano'); 
console.log(high('take me to semynak'), 'semynak');   
console.log(high('aa b'), 'aa');
console.log(high('b aa'), 'b');
console.log(high('bb d'), 'bb');
console.log(high('d bb'), 'd');
console.log(high('aaa b'), 'aaa');