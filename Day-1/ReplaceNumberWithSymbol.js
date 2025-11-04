/*Replace Numbers with ‘#’**
Write a function to replace all digits in a string with the symbol `#`.
Example:
maskNumbers("My pin is 1234 and code 56");
Output: "My pin is #### and code ##*/


function maskDigitsInSymbol(inputFromUser){
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

   let outputResult=""
   for(let i=0;i<inputFromUser.length;i++){
    let character=inputFromUser[i]
   if (character >= '0' && character <= '9') {
      outputResult += "#";
    } else {
      outputResult += character;
    }

   }
   console.log("Output: "+outputResult);
   return true;

}
maskDigitsInSymbol("My pin is 1234 and code 56")