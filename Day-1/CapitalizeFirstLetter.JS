/***Capitalize First Letter of Each Word**
Write a function that capitalizes the first letter of each word in a sentence.
Example:
capitalizeWords("numentica ui private limited");
Output: "Numentica Ui Private Limited"*/


function capitalizeWords(inputFromUser) {
    console.log("Input: "+inputFromUser)
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
  let capitalizeWord = true;

  for (let i = 0; i < inputFromUser.length; i++) {
    let character = inputFromUser[i];
      if (character === " ") {
      outputResult+= character;
      capitalizeWord = true;
    }
     else if (capitalizeWord) {
        outputResult+= character.toUpperCase();
        capitalizeWord = false;
    } else 
    {
        outputResult += character;
    }
    }
  console.log("Output: "+outputResult)
  return true;
}


capitalizeWords("numentica ui private limited");
