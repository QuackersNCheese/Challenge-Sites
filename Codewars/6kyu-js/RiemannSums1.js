/* Codewars
Let's do a simple approximation of the integral of a continuous function.

In this kata, we will implement: left_riemann(f, n, a, b)

In the test, we will pass a function that takes a single float argument to compute the value of the function. Your job is to approximate the integral of that function on the closed interval [a,b] with n rectangles. You will use the left hand rule. For a better explanation of the assigment visit the wikipedia page on riemann sums linked below:

http://en.wikipedia.org/wiki/Riemann_sum

f will always take a single float argument
f will always be a "nice" function, don't worry about NaN
n will always be a natural number (0, N]
b > a
and n will be chosen appropriately given the length of [a, b] (as in I will not have step sizes smaller than machine epsilon)
MathematicsFundamentals*/
function left_riemann(f, n, a, b) {
	const dx = (b - a) / n;
  return [...Array(n)].reduce((s, _, i) => s + f(a + i * dx) * dx, 0);
}

// Testing
console.log(left_riemann(x=>x*x, 1, 0, 1), 0, "f(x) = x^2 with n = 1 on [0, 1]");
console.log(left_riemann(x=>x*x, 4, 1, 2), 1.96875, 1e-4, "f(x) = x^2 with n = 4 on [1, 2]");
console.log(left_riemann(x=>x**3, 2, -1, 1), -1, "f(x) = x^3 with n = 2 on [-1, 1]");
console.log(left_riemann(x=>x**3, 20, -2, 1), -4.441875, 1e-4, "f(x) = x^3 with n = 20 on [-2, 1]");
