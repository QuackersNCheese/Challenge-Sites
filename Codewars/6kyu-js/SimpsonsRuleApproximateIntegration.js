/* Codewars
*/
const f = x => 3 * Math.sin(x) ** 3 / 2;
function simpson(n) {
  const a = 0;
  const b = Math.PI;
  const h = (b - a) / n;
  let sum = f(a) + f(b);
  for(let i = 1; i <= n / 2; i++) {
    sum += 4 * f(a + (2 * i - 1) * h);
    sum += i == n / 2 ? 0 : 2 * f(a + 2 * i * h);
  }
  return sum * h / 3;
}

// Testing
console.log(simpson(290), 1.9999999986);
console.log(simpson(72), 1.9999996367);
console.log(simpson(252), 1.9999999975);
console.log(simpson(40), 1.9999961668);
