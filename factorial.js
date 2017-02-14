// Factorial of any number n is defined as the multiplication of numbers from (1) to the given number.

// Recursive
function factorialRecurse(num) {
  if (num === 1) {
    return num;
  }
  return num * factorialRecurse(num - 1);
}
var factorialRecurseResult = factorialRecurse(4);
console.log(factorialRecurseResult);
