/* Codewars
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle 
(starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
ArraysListsMathematicsFundamentals*/
/*function rowSumOddNumbers(n) {
    let sum = 0, c = 0;
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= i; j++){
            c++;
            if(i == n) {
                sum += 2*c-1;
            }
        }
    }
    return sum;
}*/
/* function rowSumOddNumbers(n) {
    return n ** 3;
}*/
// there is a pattern... row cubed
/* The rows' start numbers are Hogben's centered polygonal numbers:
     1, 3, 7, 13, 21, 31, 43 = b[n] = n^2 - n + 1.
     <https://oeis.org/A002061>
     
     The sum of one row is given by:
     s[n] = n^2 + n(b[n] - 1).
     <https://www.quora.com/What-is-the-sum-of-n-consecutive-odd-integers/answer/Xavier-Dectot>
     
     Inline b[n]:
     s[n] = n^2 + n(n^2 - n + 1 - 1)
          = n^2 + n(n^2 - n)
          = n^2 + n^3 - n^2
          = n^3
     ... oh. */
const rowSumOddNumbers = n => n ** 3;
// Testing
console.log(rowSumOddNumbers(1), 1);
console.log(rowSumOddNumbers(2), 8);
console.log(rowSumOddNumbers(3), 27);
console.log(rowSumOddNumbers(4), 64);
console.log(rowSumOddNumbers(42), 74088);