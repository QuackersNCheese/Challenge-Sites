/* Codewars
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59
Fundamentals*/
/*
function past(h, m, s){
    return (h * 3600 + m * 60 + s) * 1000;
} */
const past = (h, m, s) => 1000 * (s + 60 * m + 3600 * h);

// Testing
console.log(past(0,1,1) == 61000 ? "Pass" : "Fail: (0,1,1)");
console.log(past(1,1,1) == 3661000 ? "Pass" : "Fail: (1,1,1)");
console.log(past(0,0,0) == 0 ? "Pass" : "Fail: (0,0,0)");
console.log(past(1,0,1) == 3601000 ? "Pass" : "Fail: (1,0,1)");
console.log(past(1,0,0) == 3600000 ? "Pass" : "Fail: (1,0,0)");