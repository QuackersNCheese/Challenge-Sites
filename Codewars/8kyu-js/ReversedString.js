/* Codewars
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
StringsFundamentals*/
/*
function solution(str){
  return str.split('').reverse().join('');
}*/
/*const solution = s => s.split('').reverse().join('');*/
const solution = s => [...s].reverse().join('')

// Testing
console.log(solution('world') == 'dlrow' ? "Pass" : "Fail: world");
console.log(solution('hello') == 'olleh' ? "Pass" : "Fail: hello");
console.log(solution('') == '' ? "Pass" : "Fail: \'\'");
console.log(solution('h') == 'h' ? "Pass" : "Fail: h");