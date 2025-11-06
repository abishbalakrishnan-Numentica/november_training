/***Count Vowels in a String**
Write a function that counts the number of vowels (a, e, i, o, u) in a given string.
Example:
countVowels("numentica ui solutions");
Output: 9*/

function countVowelsInString(inputFromUser) {
  console.log("The Input sentence is: "+ inputFromUser)
  let trimmedInput = inputFromUser.trim();
 //Edge Case 1: To check if the input is Invalid
   if (typeof trimmedInput !== "string" || trimmedInput.trim().length === 0) {
     console.error("Error: Input must be a non-empty string.");
     return null;
    }

  const modifiedInput= inputFromUser.toLowerCase();
  let count = 0;
  const vowels = "aeiou";

  for (let i = 0; i < modifiedInput.length; i++) {
    let character = modifiedInput[i];
    for (let j = 0; j < vowels.length; j++) {
      if (character === vowels[j]) {
        count++;
        break;
      }
    }
  }
  
  return count;
}

console.log(`The Count of Vowels in the Given Sentence -${"numentica ui solutions"}: `+ countVowelsInString("numentica ui solutions"));
