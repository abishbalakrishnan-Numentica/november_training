/***Reverse Words in a Sentence**
Write a JavaScript function to reverse the order of words in a sentence.
Example:
reverseWords("hello world from javascript");
Output: "javascript from world hello"
---*/


function reverseWordsInSentence(inputFromUser){
  console.log("Input: "+inputFromUser);
  const trimmedInput = inputFromUser.trim();
 //Edge Case 1: To check if the input is Invalid
   if (typeof trimmedInput !== "string" || trimmedInput.trim().length === 0) {
     console.error("Error: Input must be a non-empty string.");
     return null;
    }

let wordList =[];
let currentWord =""
let reverseSentence=""
for(let i=0;i<trimmedInput.length;i++){
    let character=trimmedInput[i];
    if(character!==" "){
        currentWord +=character
    }
    else if(currentWord!==""){
            wordList.push(currentWord)
        currentWord=""
    }  
}
  if(currentWord!=="")
    {
        wordList.push(currentWord)
    }
for (let i = wordList.length - 1; i >= 0; i--) {
    reverseSentence += wordList[i];
    if (i !== 0) {
      reverseSentence += " ";
    }
  }
  return reverseSentence;
}

console.log("Output: "+ reverseWordsInSentence("hello world from javascript"));