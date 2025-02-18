/* Codewars
There is an array with some numbers. All numbers are equal except for one. 
Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique
FundamentalsAlgorithmsArraysPerformance*/
/*function findUniq(r) {
    let bin1 = r[0], bin2;
    let count1 = 0, count2 = 0;
    for(let i = 0; i < r.length; i++) {
      if(r[i] == bin1){
        count1++;
      } else {
        bin2 = r[i];
        count2++;
      }
    }
    if(count1 > count2) {
      return bin2;
    }
    return bin1;
}*/
function findUniq(r) {
  let bin1 = r[0], bin2;
  let count1 = 0, count2 = 0;
  for(let i = 0; i < r.length; i++) {
    if(r[i] == bin1){
      count1++;
    } else {
      bin2 = r[i];
      count2++;
    }
  }
  return count1 > count2 ? bin2 : bin1;
}
/* from smile67
function findUniq(arr) {
  arr.sort((a,b)=>a-b);
  return arr[0]==arr[1]?arr.pop():arr[0]
}*/

// Testing
console.log(findUniq([ 1, 0, 0 ]), 1);
console.log(findUniq([ 0, 1, 0 ]), 1);
console.log(findUniq([ 0, 0, 1 ]), 1);
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
console.log(findUniq([ 1, 1, 2, 1, 1 ]), 2);
console.log(findUniq([ 3, 10, 3, 3, 3 ]), 10);