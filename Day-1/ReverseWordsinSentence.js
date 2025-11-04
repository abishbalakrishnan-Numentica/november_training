/***Reverse Words in a Sentence**
Write a JavaScript function to reverse the order of words in a sentence.
Example:
reverseWords("hello world from javascript");
Output: "javascript from world hello"
---*/


function reverseWords(inputFromUser){
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

let words=[];
let word=""
let reverseSentence=""
for(let i=0;i<inputFromUser.length;i++){
    let char=inputFromUser[i];
    if(char!==" "){
        word+=char
    }
    else{
        if(word!=="")
            words.push(word)
        word=""
    }  
}
  if(word!==""){
        words.push(word)
    }
for (let i = words.length - 1; i >= 0; i--) {
    reverseSentence += words[i];
    if (i !== 0) {
      reverseSentence += " ";
    }
  }
  console.log(reverseSentence);
}

reverseWords("hello world from javascript")