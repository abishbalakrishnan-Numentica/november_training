/*:three: **Find Longest Word in a Sentence**
Write a function to return the longest word in a given sentence.
Example:
findLongestWord("be kind whenever possible");
:arrow_right: Output: "whenever"*/


function findLongestWord(inputFromUser) {
  console.log("The Input sentence is: "+ inputFromUser)
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

  let currentWord  = "";
  let longestWord= "";

  for (let i = 0; i <= inputFromUser.length; i++) {
    let character = inputFromUser[i]; 
    if (character !== " ") {
      currentWord  += character;
    } else {
      if (currentWord .length > longestWord.length) {
        longestWord = currentWord ;
      }
      currentWord  = "";
    }
  }
  console.log("The Longest word in the given Sentence is: "+longestWord)
  return true;
}


findLongestWord("be kind whenever possible");
