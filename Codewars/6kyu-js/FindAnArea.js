/* Codewars
You have an array or list of coordinates or points (e.g. [ [1, 1], [3, 4],
 ... , [5, 2] ]), and your task is to find the area under the graph defined 
 by these points (limited by x of the first and last coordinates as left and 
 right borders, y = 0 as the bottom border and the graph as top border).

Notes:

x can be negative;
x of the next pair of coordinates will always be greater then previous one;
y >= 0;
the array will contain more than 2 coordinates.
Example
x=1 (left border)               x=5 (right border)
|                      x,y      |
|                    /\         |
|                   /  \        |
|    x,y           /    \       |
|   /\            /      \      |
|  /  \    x,y   /        \     |
| /    \  /\    /          \    |
|/      \/  \  /            \   |
|x,y    x,y  \/              \  |
|            x,y              \ | 
|_____________________________ \x,y_____ y=0 (bottom border)
The required area:

|                               |
|                    /\         |
|                   /\\\        |
|                  /\\\\\       |
|   /\            /\\\\\\\      |
|  /\\\          /\\\\\\\\\     |
| /\\\\\  /\    /\\\\\\\\\\\    |
|/\\\\\\\/\\\  /\\\\\\\\\\\\\   |
|\\\\\\\\\\\\\/\\\\\\\\\\\\\\\  |
|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ | 
|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\|
AlgorithmsGraphs*/

// Definition of points
class Point {
  #x; #y;

  get x() { return this.#x; }
  get y() { return this.#y; }

  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }
}

function findArea(points) {
  let sum = 0;
  for(let i = 1; i < points.length; i++) 
    sum += (points[i-1].y + points[i].y) * (points[i].x - points[i-1].x) / 2;
  
  return sum;
}

// Testing
console.log(findArea([new Point(0, 0), new Point(1, 4), new Point(3, 2)]), 8);
console.log(findArea([new Point(-3, 0), new Point(-1, 4), new Point(3, 2)]), 16);
console.log(findArea([new Point(-3, 2), new Point(-1, 0), new Point(3, 2)]), 6);
console.log(findArea([new Point(-3, 2), new Point(3, 5)]), 21);
console.log(findArea([new Point(-3, 2), new Point(-1, 5), new Point(0, 3), new Point(3, 7), new Point(4, 6)]), 32.5);
