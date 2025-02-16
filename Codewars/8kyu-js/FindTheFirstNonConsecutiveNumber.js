/* Codewars
Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of
the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all
consecutive but 6 is not, so that's the first non-consecutive number.

If the whole array is consecutive then return null.

The array will always have at least 2 elements1 and all elements will be 
numbers. The numbers will also all be unique and in ascending order. The 
numbers could be positive or negative and the first non-consecutive could be
either too!

If you like this Kata, maybe try this one next:
 https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

1 Can you write a solution that will return null for both [] and [ x ] though?
(This is an empty array and one with a single number and is not tested for,
but you can write your own example test. )
*/

function firstNonConsecutive (r) {
    const len = r ? r.length : 0;  // assign length based on the existence of the given array
    if(len > 1) 
      for(let i = 1; i < len; i++)  // loop thru input array starting with 2nd element
        if(r[i] !== r[i - 1] + 1)  // ensure the previous element was one less
          return r[i];  // non-consecutive!
    
    return null;  // didn't find anything non-consecutive
}
  
  console.log(firstNonConsecutive([1,2,3,4,6,7,8]) === 6 ? 'Pass' : 'Fail');
  console.log(firstNonConsecutive([]) === null ? 'Pass' : 'Fail');
  console.log(firstNonConsecutive([1]) === null ? 'Pass' : 'Fail');
  console.log(firstNonConsecutive([-3,-1]) === -1 ? 'Pass' : 'Fail');
  console.log(firstNonConsecutive([-3,-2,-1,1]) === 1 ? 'Pass' : 'Fail');
  console.log(firstNonConsecutive() === null ? 'Pass' : 'Fail');