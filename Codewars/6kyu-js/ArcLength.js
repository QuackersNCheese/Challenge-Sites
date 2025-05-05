/* Codewars
I'm going to give you a parametric function with one parameter, which will 
return a point as an array like [x,y], and a range (also an array).

Your task is simply to estimate the arc length of the curve within the range, 
accurate to two decimal places.

You can use the preloaded testApprox(actual, expected) to test your code.

MathematicsGeometryAlgorithmsFundamentals*/
/*function arcLen(fn, range) {
  const n = 10;
  const [a, b] = range;
  const dx = (b - a) / n;
  const axis = [...Array(n + 1).keys()].map(x => a + x * dx);
  const f = axis.map(fn);
  let fprime = [];
  for(let i = 1; i < f.length; i++) 
    fprime.push((f[i] - f[i - 1]) / dx);
  
  return fprime.reduce((s, c) => s + Math.sqrt(1 + c * c), 0) / n;
}

console.log(arcLen(x => x, [0, 1]));
console.log(arcLen(x => x * x, [0, 1]));
console.log(arcLen(x => Math.sin(x), [0, 1]));*/
function arcLen(fn, [a, b]) {
  let n = 200;
  let dt = (b - a) / n;
  const t = [...Array(n + 1).keys()].map(x => a + x * dt);
  let f = t.map(fn);
  let fprime = [];
  for(let i = 1; i < f.length; i++) 
    fprime.push([(f[i][0] - f[i - 1][0]) / dt, (f[i][1] - f[i - 1][1]) / dt]);
  return fprime.reduce((s, c) => s + Math.sqrt(c[0] ** 2 + c[1] ** 2) * dt, 0);
}

function f1(t) {
  return [t, 0];
}
console.log(arcLen(f1, [0, 1]), 1);

function f2(t) {
  return [t, t];
}
console.log(arcLen(f2, [0, 1]), 1.41);

function f3(t) {
  return [Math.cos(t), Math.sin(t)];
}
console.log(arcLen(f3, [0, Math.PI]));

function f4(t) {
  return [0, t];
}
console.log(arcLen(f4, [0, 1]), 1);