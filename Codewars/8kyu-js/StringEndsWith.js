/* Codewars
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
StringsFundamentals*/
/*function solution(str, ending){
    return str.endsWith(ending);
}*/
const solution = (s, e) => s.endsWith(e);

// Testing
console.log(solution('abcde', 'cde') == true ? "Pass" : "Fail: 'abcde'");
console.log(solution('abcde', 'abc') == false ? "Pass" : "Fail: 'abcde'");