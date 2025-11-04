/***Count Vowels in a String**
Write a function that counts the number of vowels (a, e, i, o, u) in a given string.
Example:
countVowels("numentica ui solutions");
Output: 9*/

function countVowels(inputFromUser) {
 //Edge Case 1: To check if the input is String
  if (typeof inputFromUser !== "string") {
    console.error( "Error: Input must be a string.");
    return false;
  }
 //Edge Case 2: To check if the input is empty String
  if (inputFromUser.trim().length === 0) {
    console.error("Empty String");
    return false;
  }

  inputFromUser = inputFromUser.toLowerCase();
  let count = 0;
  let vowels = "aeiou";

  for (let i = 0; i < inputFromUser.length; i++) {
    let character = inputFromUser[i];
    for (let j = 0; j < vowels.length; j++) {
      if (character === vowels[j]) {
        count++;
        break;
      }
    }
  }
  console.log("The Count of Vowels in the Given Sentence:" + count);
  return true;
}


countVowels("numentica ui solutions");
