/***Check Palindrome**
Write a function to check if a string is a palindrome (reads the same backward).
Example:
isPalindrome("madam"); // true
isPalindrome("hello"); // false*/


function isPalindrome(inputFromUser) {
  console.log("Input: "+inputFromUser)
  const trimmedInput = inputFromUser.trim();
 //Edge Case : To check if the input is Invalid
   if (typeof trimmedInput !== "string" || trimmedInput.trim().length === 0) {
     console.error("Error: Input must be a non-empty string.");
     return null;
    }
  const modifiedInput= inputFromUser.toLowerCase();
  if (modifiedInput.length === 0) {
    return true;//an empty string or only punctuation counts as palindrome
  }
  for (let i = 0; i < modifiedInput.length / 2; i++) {
    if (modifiedInput[i] !== modifiedInput[modifiedInput.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log("Output: "+ isPalindrome("madam")); // true
console.log("Output: "+ isPalindrome("hello")); // false
console.log("Output: "+ isPalindrome("Madam"));
