// InterviewCake #28 - Parenthesis Matching
//
// I like parentheticals (a lot).
// "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."
//
// Write a function that, given a sentence like the one above, along with the position of an opening parenthesis, finds the corresponding closing parenthesis.
//
// Example: if the example string above is input with the number 10 (position of the first parenthesis), the output should be 79 (position of the last parenthesis).

function parenMatch (str) {
	// Get position of first open paren and set open parens to 0;
  var parenIdx = str.indexOf('('), openParens = 0;
	// Check if there are any parens
	if (parenIdx > -1) {
		for (parenIdx; parenIdx < str.length; parenIdx++) {
			if (str[parenIdx] === '(') {
				openParens++;
			} else if (str[parenIdx] === ')') {
				openParens--;
				if (openParens === 0) {
					return 'All open parens were closed, lastly at position: ' + parenIdx;
				}
			}
		}
	} else {
		return 'No parens exist.';
	}
	throw Error('Unclosed parens.');
}

console.log(parenMatch('Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.')); // returns 79
console.log(parenMatch('Some more ((open and closed) parens)')); // returns 35
console.log(parenMatch('no parens')); // no parens
console.log(parenMatch('(unclosed (parens)')); // unclosed parens
