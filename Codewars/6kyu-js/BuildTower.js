/* Codewars
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
Go challenge Build Tower Advanced once you have finished this :)

StringsASCII ArtFundamentals*/
function towerBuilder(nFloors) {
  let levels = [];
  for(let i = 0; i < nFloors; i++) {
    let level = "";
    for(let spaces = 0; spaces < nFloors - i - 1; spaces++)
      level += ' ';
    for(let stars = 0; stars < 2 * i + 1; stars++) 
      level += '*';
    for(let spaces = 0; spaces < nFloors - i - 1; spaces++)
      level += ' ';
    levels.push(level)
  }
  return levels;
}

/* from DAslanT
function towerBuilder(nFloors) {
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1)
             + "*".repeat((i * 2)+ 1)
             + " ".repeat(nFloors - i - 1));
  }
  return tower;
}
*/

// Testing
console.log(towerBuilder(1), ["*"]);
console.log(towerBuilder(2), [" * ","***"]);
console.log(towerBuilder(3), ["  *  "," *** ","*****"]);