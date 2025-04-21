/* Codewars
You are given an image represented as a binary array. Your task is to predict 
the bounding box that encloses all the 1s within the image. The bounding box 
should be a hollow rectangle, where only the edges of the bounding box are 1s, 
and the interior is filled with 0s returned in an array of the same size as 
the original input.

You can make the following assumptions:

An image will only ever be comprised of 0s or 1s.
An image will always have a consistent m x n shape.
Important things to remember:

If an empty image is passed, then an empty array should also be returned.
If there are no 1s present then no bounding box should be drawn.
Example
Input:
[[0,0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0,0],
 [0,0,0,0,1,1,0,0,0,0],
 [0,0,0,1,1,1,1,0,0,0],
 [0,0,1,1,1,1,1,1,0,0],
 [0,1,1,1,1,1,0,0,0,0],
 [0,0,0,0,0,0,0,0,0,0]]

Output:
[[0,0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0,0],
 [0,1,1,1,1,1,1,1,0,0],
 [0,1,0,0,0,0,0,1,0,0],
 [0,1,0,0,0,0,0,1,0,0],
 [0,1,1,1,1,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0]]
*/
function boundingBox(ra) {
  if(ra.length === 0) return [];
  // (upper left vertex, lower right vertex) = (row_ul, col_ul, row_lr, col_lr) = (a, b, c, d)
  let a = ra.length, b = ra[0].length, c = 0, d = 0;
  for(let row = 0; row < ra.length; row++) 
    for(let col = 0; col < ra[row].length; col++) 
      if(ra[row][col]) {
        if(a > row) a = row;
        if(b > col) b = col;
        if(c < row) c = row;
        if(d < col) d = col;
      }
  let res = [];
  let chute =[];
  for(let row = 0; row < ra.length; row++) {
    for(let col = 0; col < ra[row].length; col++) {
      if((row >= a && row <= c && (col == b || col == d)) || (col >= b && col <= d && (row == a || row == c))) {
        chute.push(1); 
      } else {
        chute.push(0);
      }
    }
    res.push([...chute]);
    chute.length = 0;
  }
  return res;
}

function display2DArray(r) {
  let row = '';
  for(let i = 0; i < r.length; i++) {
    for(let j = 0; j < r[i].length; j++) {
      row += r[i][j];
    }
    console.log(row);
    row = '';
  }
}

/*display2DArray([
  [0,0,0,0,0],
  [0,0,1,0,0],
  [0,0,0,1,0],
  [0,0,1,0,0],
  [0,0,0,0,0]
]);*/

// Testing
console.log(boundingBox([]), []);
console.log(...boundingBox([
  [0,0,0,0,0],
  [0,0,1,0,0],
  [0,0,0,1,0],
  [0,0,1,0,0],
  [0,0,0,0,0]
]),
...[
  [0,0,0,0,0],
  [0,0,1,1,0],
  [0,0,1,1,0],
  [0,0,1,1,0],
  [0,0,0,0,0]
]
);
console.log(boundingBox([
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,1,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,1,0,0,0],
  [0,0,0,1,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
]),
...[
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,1,1,1,1,1,1,0,0,0],
  [0,1,0,0,0,0,1,0,0,0],
  [0,1,0,0,0,0,1,0,0,0],
  [0,1,1,1,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
]
);

console.log(boundingBox([
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,1,0,0,0,0,0,0],
  [0,1,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,1,0,0,0,0,0,0,0]
]),
...[
  [0,0,0,0,0,0,0,0,0,0],
  [0,1,1,1,0,0,0,0,0,0],
  [0,1,0,1,0,0,0,0,0,0],
  [0,1,0,1,0,0,0,0,0,0],
  [0,1,1,1,0,0,0,0,0,0]
]
);