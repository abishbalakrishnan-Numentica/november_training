/***Count Occurrence of Each Character**
Write a function that returns an object showing how many times each character appears in a string.
Example:
countChars("hello");
Output: { h:1, e:1, l:2, o:1 }
---*/

function countChars(inputFromUser) {
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

  let modifiedInput = inputFromUser.toLowerCase()
  let outputResult = {};

    for (let i = 0; i < modifiedInput.length; i++) {
    let character = modifiedInput[i];
     if (character === " ") {
      continue; 
    }

    if (outputResult[character]) {
      outputResult[character] += 1;
    } else {
      outputResult[character] = 1;
    }
  }

  console.log("Output:", outputResult);
  return true;
}

countChars("hello");
countChars("hello world");
