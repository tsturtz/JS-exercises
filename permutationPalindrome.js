// InterviewCake #30 - Permutation Palindrome
// Write an efficient function that checks whether any permutation of an input string is a palindrome.
//
// Examples:
// "civic" should return true
// "ivicc" should return true
// "civil" should return false
// "livci" should return false

function permutationPalindrome(str) {
  var obj = {}, countOdd = 0;
  // set string to lower case; remove white space and all non-letters
  str = str.toLowerCase().replace(/\s+/g,'').replace(/\W+/g,'').replace(/\d+/g,'');
  for (var i = 0; i < str.length; i++) {
    // if the property at str[i] does not exist in obj, set it to 0
    if (!obj[str[i]]) obj[str[i]] = 0;
    // increment count so that every occurance is at least 1
    obj[str[i]]++;
  }
  for (var x in obj) {
    // if the count of occurances of a character is odd, increment the odd counter
  	if ((obj[x] % 2) > 0) countOdd++;
  }
  // if count of odd characters is more than 1, it cannot become a palindrome
  if (countOdd > 1) return str + ' cannot become a palindrome';
  // else, it can!
  else return str + ' is or can become a palindrome';
}

console.log(permutationPalindrome('civic')); // true
console.log(permutationPalindrome('ivicc')); // true
console.log(permutationPalindrome('civil')); // false
console.log(permutationPalindrome('livci')); // false
console.log(permutationPalindrome('racecar')); // true
console.log(permutationPalindrome('A man, a plan, a cat, a canal -- Panama')); // true
