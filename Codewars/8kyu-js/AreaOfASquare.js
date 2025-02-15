/* Codewars
Complete the function that calculates the area of the red square, when the 
length of the circular arc A is given as the input. Return the result rounded 
to two decimals.

Graph
The arc is 1/4 of a circle perimeter

Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

FundamentalsMathematicsGeometry*/
const squareArea = s => (2 * s / Math.PI) ** 2;

// Testing
console.log(squareArea(2), 1.62, 1e-2);
console.log(squareArea(0), 0, 1e-2);
console.log(squareArea(14.05), 80, 1e-2);