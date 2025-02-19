/* Codewars
You live in the city of Cartesia where all roads are laid out in a perfect grid. 
You arrived ten minutes too early to an appointment, so you decided to take the 
opportunity to go for a short walk. The city provides its citizens with a Walk 
Generating App on their phones -- everytime you press the button it sends you an 
array of one-letter strings representing directions to walk 
(eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter 
(direction) and you know it takes you one minute to traverse one city block, so 
create a function that will return true if the walk the app gives you will take 
you exactly ten minutes (you don't want to be early or late!) and will, of 
course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of 
direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty 
array (that's not a walk, that's standing still!).

ArraysFundamentals*/
function isValidWalk(walk) {
  let x = 0, y = 0;
  if(walk.length !== 10) 
    return false;
  walk.forEach(d => {
    switch(d) {
      case 'n':
        y++;
        break;
      case 's':
        y--;
        break;
      case 'e':
        x++;
        break;
      case 'w':
        x--;
        break;
      default:
        console.log('invalid data');
    }  
  });
  return x == 0 && y == 0;
}

// Testing
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
console.log(isValidWalk(['w']), 'should return false');
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');
console.log(isValidWalk(['n', 'n', 'n', 'n', 'e', 's','s','s','s','w']), true);