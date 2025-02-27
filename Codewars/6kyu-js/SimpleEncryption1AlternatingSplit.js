/* Codewars
Implement a pseudo-encryption algorithm which given a string S and an integer N 
concatenates all the odd-indexed characters of S with all the even-indexed 
characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption 
function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the 
first argument without changes.

This kata is part of the Simple Encryption Series:

Simple Encryption #1 - Alternating Split
Simple Encryption #2 - Index-Difference https://www.codewars.com/kata/simple-encryption-number-1-alternating-split
Simple Encryption #3 - Turn The Bits Around https://www.codewars.com/kata/simple-encryption-number-3-turn-the-bits-around
Simple Encryption #4 - Qwerty https://www.codewars.com/kata/simple-encryption-number-4-qwerty
Have fun coding it and please don't forget to vote and rank this kata! :-)

CryptographyAlgorithmsStringsArraysFundamentals*/

function encrypt(txt, n) {
  let i = 0;
  while(i < n) {
    txt = [...txt].filter((_, i) => i % 2 == 1).join('') + [...txt].filter((_, i) => i %2 == 0).join('');
    i++;
  }
  return txt;
}

function decrypt(txt, n) {
  if(txt == null) return null;
  if(txt == '') return '';
  let result = [...txt];
  let mid = Math.floor(txt.length / 2);
  let i = 0;
  while(i < n) {
    for(let j = 0; j < mid; j++) {
      result[2 * j + 1] = txt[j];
    }
    for(let k = mid; k < txt.length; k++) {
      result[2 * (k - mid)] = txt[k];
    }
    txt = result.join('')
    i++;
  }
  return txt;
}

// Testing
console.log(encrypt("This is a test!", 0) == "This is a test!");
console.log(encrypt("This is a test!", 1) == "hsi  etTi sats!");
console.log(encrypt("This is a test!", 2) == "s eT ashi tist!");
console.log(encrypt("This is a test!", 3) == " Tah itse sits!");
console.log(encrypt("This is a test!", 4) == "This is a test!");
console.log(encrypt("This is a test!", -1) == "This is a test!");
console.log(encrypt("This kata is very interesting!", 1) == "hskt svr neetn!Ti aai eyitrsig");

console.log(decrypt("This is a test!", 0), "This is a test!");
console.log(decrypt("hsi  etTi sats!", 1), "This is a test!");
console.log(decrypt("s eT ashi tist!", 2), "This is a test!");
console.log(decrypt(" Tah itse sits!", 3), "This is a test!");
console.log(decrypt("This is a test!", 4), "This is a test!");
console.log(decrypt("This is a test!", -1), "This is a test!");
console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!");

console.log(encrypt("", 0), "");
console.log(decrypt("", 0), "");
console.log(encrypt(null, 0), null);
console.log(decrypt(null, 0), null);