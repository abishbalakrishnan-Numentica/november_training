/***Reverse Words in a Sentence**
Write a JavaScript function to reverse the order of words in a sentence.
Example:
reverseWords("hello world from javascript");
Output: "javascript from world hello"
---*/


function reverseWordsInSentence(inputFromUser){
  console.log("Input: "+inputFromUser);
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

let wordList =[];
let currentWord =""
let reverseSentence=""
for(let i=0;i<inputFromUser.length;i++){
    let character=inputFromUser[i];
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
  console.log("Output: "+reverseSentence);
  return true;
}

reverseWordsInSentence("hello world from javascript")