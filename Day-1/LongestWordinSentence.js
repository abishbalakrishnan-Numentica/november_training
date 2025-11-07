/*:three: **Find Longest Word in a Sentence**
Write a function to return the longest word in a given sentence.
Example:
findLongestWord("be kind whenever possible");
:arrow_right: Output: "whenever"*/


function findLongestWord(inputFromUser) {
  console.log("The Input sentence is: "+ inputFromUser)
 let trimmedInput = inputFromUser.trim();
 //Edge Case 1: To check if the input is Invalid
   if (typeof trimmedInput !== "string" || trimmedInput.trim().length === 0) {
     console.error("Error: Input must be a non-empty string.");
     return null;
    }
  let currentWord = "";
  let longestWord = "";

  for (let i = 0; i <= inputFromUser.length; i++) {
    let character= inputFromUser[i]; 
    if (character !== " ") {
      currentWord+= character;
    } else {
      if (currentWord.length > longestWord.length) {
        longestWord = currentWord ;
      }
      currentWord  = "";
    }
  }

  return longestWord;
}


  console.log("The Longest word in the given Sentence is: "+ findLongestWord("be kind whenever possible"));
