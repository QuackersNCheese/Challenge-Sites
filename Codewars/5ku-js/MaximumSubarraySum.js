/* Codewars
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

AlgorithmsListsDynamic ProgrammingFundamentalsPerformance*/
function maxSequence(arr) {
    let endpnts = [];
    arr.forEach((x, i) => x > 0 ? endpnts.push(i) : 0);
    if(endpnts.length == 0) 
      return 0;

    let maxSum = 0;
    for(let i = 0; i < endpnts.length; i++) 
      for(let j = i; j < endpnts.length; j++) {
        let sum = 0;
        for(let k = endpnts[i]; k <= endpnts[j]; k++)
          sum += arr[k];
        if(sum > maxSum) 
          maxSum = sum;
      }
    return maxSum;
}

// Testing
console.log(maxSequence([]), 0);
console.log(maxSequence([0]), 0);
console.log(maxSequence([-1, -2, -3, -4, -1, -2]), 0);
console.log(maxSequence([0, 1, 2, 3, 4, 5, 6]), 21);
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6); 