/* Codewars
Given an array of integers as strings and numbers, return the sum of the array 
values as if all were numbers.

Return your answer as a number.

FundamentalsStringsArrays*/
/*function sumMix(x){
    return x.reduce((sum, y) => sum + +y, 0);
}*/
const sumMix = (x) => x.reduce((sum, n) => sum + +n, 0);

// Testing
console.log(sumMix([9, 3, '7', '3']) == 22 ? "Pass" : "Fail: [9, 3, '7', '3']");
console.log(sumMix(['5', '0', 9, 3 ,2, 1, '9', 6, 7]) == 42 ? "Pass" : "Fail: ['5', '0', 9, 3 ,2, 1, '9', 6, 7]");
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']) == 41 ? "Pass" : "Fail: ['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']");