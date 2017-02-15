// From Interview Cake #38
// You have a function rand5() that generates a random integer from 1 to 5.
// Use it to write a function rand7() that generates a random integer from 1 to 7.
// rand5() returns each integer with equal probability.
// rand7() must also return each integer with equal probability.

// rand5 returns an integer between 1 and 5 inclusive
function rand5() {
    return Math.ceil(Math.random() * 5);
}

// rand10 calls rand5 as needed and returns an integer between -1 and 7 inclusive (a range of 2 through 10, minus 3)
function rand10() {
  return rand5() + rand5() - 3;
}

// rand7 calls rand10 until it gets a result that is greater than 0 and returns the result (1 through 7 inclusive)
function rand7() {
    var result = 0;
    while (result < 1) {
      result = rand10();
    }
    return result;
}

// Return result
var random7 = rand7();
console.log(random7);
