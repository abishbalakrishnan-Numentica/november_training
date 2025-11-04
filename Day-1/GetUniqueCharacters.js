/***Get Unique Characters**
Write a function to return all characters that appear only once in a string.
Example:
uniqueChars("success");
Output: "ue"*/


function uniqueChars(inputFromUser) {
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
  let outputResult = "";
  
  for (let i = 0; i < inputFromUser.length; i++) {
    let count = 0;
    for (let j = 0; j < inputFromUser.length; j++) {
      if (inputFromUser[i] === inputFromUser[j]) {
        count++;
      }
    }
    if (count === 1) {
      outputResult += inputFromUser[i];
    }
  }
  console.log("The Unique Characters are: " + outputResult)
  return true;
}


uniqueChars("success");
uniqueChars("devendar");