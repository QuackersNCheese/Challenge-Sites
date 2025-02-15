/* Codewars
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square
 after the one passed as a parameter. Recall that an integral perfect square 
 is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. 
You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
*/

function findNextSquare(sq) {
    const root = sq ** 0.5;
    if(root % 1 <= 1e-6) {
      return (root + 1) ** 2;
    }
    return -1;
}
  
  // Testing
  console.log(findNextSquare(121) === 144 ? 'Pass' : 'Fail');
  console.log(findNextSquare(625) === 676 ? 'Pass' : 'Fail');
  console.log(findNextSquare(319225) === 320356 ? 'Pass' : 'Fail');
  console.log(findNextSquare(15241383936) === 15241630849 ? 'Pass' : 'Fail');
  console.log(findNextSquare(155) === -1 ? 'Pass' : 'Fail');
  console.log(findNextSquare(342786627) === -1 ? 'Pass' : 'Fail');