// InterviewCake #31 - Recursive String Permutations
//
// Write a recursive function for generating all permutations of an input string. Return them as a set.
// Don't worry about time or space complexity—if we wanted efficiency we'd write an iterative version.
//
// To start, assume every character in the input string is unique.
//
// Your function can have loops—it just needs to also be recursive.

////////////////////////////////////////////
// REVIEW THIS FOR BETTER UNDERSTANDING!! //
////////////////////////////////////////////

function stringPerms(str) {
	// Base case
	if (str.length <= 1) return new Set(str);

  // Store all characters except last and last character
  let allCharsExceptLast = str.slice(0, -1);
  let lastChar = str[str.length - 1];

	// recursive call: get all possible permutations for all chars except last
	let perms_AllCharsExceptLast = stringPerms(allCharsExceptLast);

	// put the last char in all possible positions for each of the above permutations
  let set = new Set();
	perms_AllCharsExceptLast.forEach(function(perm_ExceptLast) {
		for (var i = 0; i <= allCharsExceptLast.length; i++) {
			let perm = perm_ExceptLast.slice(0, i) + lastChar + perm_ExceptLast.slice(i);
      set.add(perm);
    }
	});

	return set;
}

let result = stringPerms('cats');
console.log(result);
