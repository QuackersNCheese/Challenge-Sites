/* Codewars
The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

    Correct answer    |    Student's answer   |   Result         
 ---------------------|-----------------------|-----------
 ["a", "a", "b", "b"]   ["a", "c", "b", "d"]  →     6
 ["a", "a", "c", "b"]   ["a", "a", "b", "" ]  →     7
 ["a", "a", "b", "c"]   ["a", "a", "b", "c"]  →     16
 ["b", "c", "b", "a"]   ["" , "a", "a", "c"]  →     0
FundamentalsArrays*/
/*const checkExam = (r1, r2) => {
  let score = r1.reduce((s, a, i) => s + (a == r2[i] ? 4 : r2[i] == '' ? 0 : -1), 0);
  return score > 0 ? score : 0;
}*/
const checkExam = (r1, r2) => {
  let score = 0;
  for(let i = 0; i < r1.length; i++) 
    if(r2[i] === '') 
      continue;
    else if(r1[i] === r2[i]) 
      score += 4;
    else 
      score--;
    
  return score > 0 ? score : 0;
}

 // Testing
console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]), 7);
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]), 0);  
