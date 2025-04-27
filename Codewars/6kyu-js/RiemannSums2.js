/* Codewars
Part 2/3 of my kata series. Part 1

The description changes little in this second part. Here we simply want to improve our approximation of the integral by using trapezoids instead of rectangles. The left/right side rules have a serious bias and the trapezoidal rules averages those approximations! The same assumptions exist but are pasted here for convenience.

f will always take a single float argument
f will always be a "nice" function, don't worry about NaN
n will always be a natural number (0, N]
b > a
and n will be chosen appropriately given the length of [a, b] (as in I will not have step sizes smaller than machine epsilon)
answers will be checked within a delta of 0.01
MathematicsFundamentals */
function riemann_trapezoidal(f, n, a, b) {
  const dx = (b - a) / n;
  let sum = f(a) + f(b) + [...Array(n - 1)].reduce((s, _, i) => s + 2 * f(a + (i + 1) * dx), 0);
  return sum * dx / 2;
}

// Testing
console.log(riemann_trapezoidal(x=>x*x, 1, 0, 1), .5, .01, "f(x) = x^2 with n = 1 on [0, 1]");
console.log(riemann_trapezoidal(x=>x*x, 10, 0, 1), .335, .01, "f(x) = x^2 with n = 10 on [0, 1]");
console.log(riemann_trapezoidal(x=>x*x, 100, 0, 1), .33335, .01, "f(x) = x^2 with n = 100 on [0, 1]");
console.log(riemann_trapezoidal(x=>x*x, 100, -1, 1), .6668, .01, "f(x) = x^2 with n = 100 on [-1, 1]");
