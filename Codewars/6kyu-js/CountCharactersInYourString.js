/* Codewars
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

StringsFundamentals
*/
function count(A) {
    obj = {};
    for(let el of A)
      if(el in obj) 
        obj[el]++;
      else 
        obj[el] = 1; 
  
    return obj;
  }

//  Testing
console.log(count(''), {});
console.log(count('a'), {'a': 1});
console.log(count('ab'), {'a': 1, 'b': 1});
console.log(count('aba'), {'a': 2, 'b': 1});
console.log(count('ABC'), {'A': 1, 'B': 1, 'C': 1});