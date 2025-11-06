/*Replace Numbers with ‘#’**
Write a function to replace all digits in a string with the symbol `#`.
Example:
maskNumbers("My pin is 1234 and code 56");
Output: "My pin is #### and code ##*/


function maskDigitsInSymbol(inputFromUser){
  console.log("Input: "+inputFromUser)
  const modifiedInput = inputFromUser.trim();
  //Edge Case : To check if the input is Invalid
   if (typeof modifiedInput !== "string" || modifiedInput.trim().length === 0) {
     console.error("Error: Input must be a non-empty string.");
     return null;
    }

   let userOutput=""
   for(let i=0;i<modifiedInput.length;i++){
    let character=modifiedInput[i]
   if (character >= '0' && character <= '9') {
      userOutput += "#";
    } else {
      userOutput += character;
    }

   }
   return userOutput;

}
console.log("Output: "+ maskDigitsInSymbol("My pin is 1234 and code 56"));
console.log("Output: "+ maskDigitsInSymbol(""));
console.log("Output: "+ maskDigitsInSymbol("   "));