// From Interview Cake #37
// You have a function rand7() that generates a random integer from 1 to 7.
// Use it to write a function rand5() that generates a random integer from 1 to 5.
// rand7() returns each integer with equal probability.
// rand5() must also return each integer with equal probability.


// rand7 returns an integer between 1 and 7 inclusive
function rand7() {
    return Math.ceil(Math.random() * 7);
}


// Recursive approach ( O(infinite) time - O(infinite) space )
// This has the potential to exceed maximum call stack.
var result;
function rand5Recursive() {
    result = rand7();
    if (result <= 5) {
        return result;
    }
    return rand5Recursive();
}
var rand7RecursiveResult = rand5Recursive();
console.log(rand7RecursiveResult);


// Loop approach ( O(infinite) time - O(1) space )
// This has the potential to go on forever (perpetually getting 6 or 7 from rand7)
//   but in terms of call stack there is only 1 function call waiting to be resolved.
var random7 = 7;
function rand5Loop() {
    while (random7 > 5) {
        random7 = rand7();
    }
    return random7;
}
var rand5LoopResult = rand5Loop();
console.log(rand5LoopResult);
