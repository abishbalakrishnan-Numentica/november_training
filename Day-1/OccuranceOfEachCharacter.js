/***Count Occurrence of Each Character**
Write a function that returns an object showing how many times each character appears in a string.
Example:
countChars("hello");
Output: { h:1, e:1, l:2, o:1 }
---*/

function countUniqueCharacters(inputFromUser) {
  console.log("Input: "+inputFromUser)
 let trimmedInput = inputFromUser.trim();
 //Edge Case 1: To check if the input is Invalid
   if (typeof trimmedInput !== "string" || trimmedInput.trim().length === 0) {
     console.error("Error: Input must be a non-empty string.");
     return null;
    }

  const modifiedInput = inputFromUser.toLowerCase()
  let finalResult = {};

    for (let i = 0; i < modifiedInput.length; i++) {
    let character = modifiedInput[i];
     if (character === " ") {
      continue; 
    }

    if (finalResult[character]) {
      finalResult[character] += 1;
    } else {
      finalResult[character] = 1;
    }
  }
  return finalResult;
}

console.log("Output: "+JSON.stringify(countUniqueCharacters("hello")));
console.log("Output: "+JSON.stringify(countUniqueCharacters("hello world")));
