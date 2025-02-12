/* Codewars
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

ArraysFundamentals*/
/*function countSheeps(sheep) {
    return sheep.reduce((a, b) => b ? a+1 : a, 0);
}*/

const countSheeps = s => s.reduce((a, b) => b ? a + 1 : a, 0);

// Testing
const tests = [
    [[], 0],
    [[undefined], 0],
    [[null], 0],
    [[false], 0],
    [[true], 1],
    [[undefined,null,false,true], 1],
    [[undefined,null,false,true,true,false,null,undefined], 2],
    [[true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true], 17],
  ];
console.log(countSheeps([]) == 0);
console.log(countSheeps([undefined]) == 0);
console.log(countSheeps([null]) == 0);
console.log(countSheeps([false]) == 0);
console.log(countSheeps([true]) == 1);
console.log(countSheeps([undefined,null,false,true]) == 1);
console.log(countSheeps([undefined,null,false,true,true,false,null,undefined]) == 2);
console.log(countSheeps([true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true]) == 17);

/*let countSheeps = x => x.filter( s => s ).length;*/ // by googballLogic