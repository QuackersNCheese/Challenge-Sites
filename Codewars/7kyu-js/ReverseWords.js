/* Codewars
Complete the function that accepts a string parameter, and reverses each word 
in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
StringsFundamentals*/
/*function reverseWords(str) {
    let result = [];
    let s = [...str];
    let temp = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] == ' ') {
            result = result.concat(temp);
            temp = [];
            result.push(s[i]);
        } else {
            temp.unshift(s[i]);
        }
    }
    if(temp) {
        result = result.concat(temp);
    }
    return result.join('');
}*/
// extra spaces get separated out in a split
const reverseWords = s => s.split(' ').map((word) => [...word].reverse().join('')).join(' ');
// Testing
console.log(reverseWords('The quick brown fox jumps over the lazy dog.') == 'ehT kciuq nworb xof spmuj revo eht yzal .god', `Input: "The quick brown fox jumps over the lazy dog."`);
console.log(reverseWords('apple') == 'elppa', `Input: "apple"`);
console.log(reverseWords('a b c d') == 'a b c d', `Input: "a b c d"`);
console.log(reverseWords('  double  spaced  words  ') == '  elbuod  decaps  sdrow  ', `Input: "  double  spaced  words  "`);
