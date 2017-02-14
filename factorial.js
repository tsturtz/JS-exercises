// Factorial of any number n is defined as the multiplication of numbers from (1) to the given number.

// Recursive (call-stack overflow)
function factorialRecurse(num) {
  if (num === 1) {
    return num;
  }
  return num * factorialRecurse(num - 1);
}
var factorialRecurseResult = factorialRecurse(4);
console.log(factorialRecurseResult);

// Iterative (faster, but next step would be to cache results to manage large number calculations)
function factorialLoop(num) {
  var result = num;
  while (num > 1) {
    result = result * (num - 1);
    num--;
  }
  return result;
}
var factorialLoopResult = factorialLoop(9);
console.log(factorialLoopResult);
