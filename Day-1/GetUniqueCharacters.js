/***Get Unique Characters**
Write a function to return all characters that appear only once in a string.
Example:
uniqueChars("success");
Output: "ue"*/


function uniqueCharacters(inputFromUser) {
  console.log("The Input sentence is: "+ inputFromUser)
  let trimmedInput = inputFromUser.trim();
 //Edge Case 1: To check if the input is Invalid
   if (typeof trimmedInput !== "string" || trimmedInput.trim().length === 0) {
     console.error("Error: Input must be a non-empty string.");
     return null;
    }

  const modifiedInput= inputFromUser.toLowerCase();
  let userOutput =[];
  
  for (let i = 0; i < modifiedInput.length; i++) {
    let count = 0;
    for (let j = 0; j < modifiedInput.length; j++) {
      if (modifiedInput[i] === modifiedInput[j]) {
        count++;
      }
    }
    if (count === 1) {
      userOutput.push(modifiedInput[i]);
    }
  }
 
  return userOutput;
}


console.log("The Unique Characters are: " + uniqueCharacters("success"));
console.log("The Unique Characters are: " + uniqueCharacters("devendar"));