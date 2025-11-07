/*Implement a function to remove duplicate characters in a string while preserving order.

removeDuplicateChars("programming")
output:progamin */


function removeDuplicateChars(inputFromUser) {
  console.log("The Input sentence is: " + inputFromUser);

  let trimmedInput = inputFromUser.trim();

  // Edge Case 1: To check if the input is Invalid
  if (typeof trimmedInput !== "string" || trimmedInput.length === 0) {
    console.error("Error: Input must be a non-empty string.");
    return null;
  }

  const modifiedInput = inputFromUser.toLowerCase();
  let duplicateChars = {};
  let userOutput = "";

  for (let i = 0; i < modifiedInput.length; i++) {
    let character = modifiedInput[i];
    if (!duplicateChars[character]) {
      duplicateChars[character] = true;
      userOutput += character;
    }
  }

  return userOutput;
}

console.log("The Unique Characters are: " + removeDuplicateChars("programming")); 
console.log("The Unique Characters are: " + removeDuplicateChars("success"));     
console.log("The Unique Characters are: " + removeDuplicateChars("devendar"));   