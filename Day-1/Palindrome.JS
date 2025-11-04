/***Check Palindrome**
Write a function to check if a string is a palindrome (reads the same backward).
Example:
isPalindrome("madam"); // true
isPalindrome("hello"); // false*/


function isPalindrome(inputFromUser) {
 //Edge Case 1: To check if the input is String
  if (typeof inputFromUser !== "string") {
    console.error( "Error: Input must be a string.");
    return false;
  }
  if (inputFromUser.length === 0) {
    return true;//an empty string or only punctuation counts as palindrome
  }
  for (let i = 0; i < inputFromUser.length / 2; i++) {
    if (inputFromUser[i] !== inputFromUser[inputFromUser.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
