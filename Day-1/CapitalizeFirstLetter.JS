/***Capitalize First Letter of Each Word**
Write a function that capitalizes the first letter of each word in a sentence.
Example:
capitalizeWords("numentica ui private limited");
Output: "Numentica Ui Private Limited"*/


function capitalizeFirstLetterOfEachWord(inputFromUser) {
  console.log("The Input sentence is: "+ inputFromUser)
  let trimmedInput = inputFromUser.trim();
 //Edge Case 1: To check if the input is Invalid
   if (typeof trimmedInput !== "string" || trimmedInput.trim().length === 0) {
     console.error("Error: Input must be a non-empty string.");
     return null;
    }
  const modifiedInput= inputFromUser.toLowerCase();
  let userOutput = "";

for (let i = 0; i < modifiedInput.length; i++) {
    let character = modifiedInput[i];

    if (i === 0 || modifiedInput[i - 1] === " ") {
      userOutput += character.toUpperCase();
    } else {
      userOutput += character;
  }
}
  return userOutput;
}
console.log("Output: "+capitalizeFirstLetterOfEachWord("numentica ui private limited"));
console.log("Output: "+capitalizeFirstLetterOfEachWord(""));
console.log("Output: "+capitalizeFirstLetterOfEachWord("   "));

