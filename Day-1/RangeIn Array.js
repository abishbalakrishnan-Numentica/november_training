/***Find Range (Max - Min) in Array**
Write a function to return the difference between the largest and smallest numbers in an array.
Example:
findRange([3, 45, 12, 7, 89]);
Output: 86
---*/


function findRange(inputFromUser) {
 //Edge Case 1: To check if the input is Array
    if (!Array.isArray(inputFromUser) || inputFromUser.length === 0) {
    console.error("Error: Please provide a non-empty array of numbers.");
    return false;
  }
   //Edge Case 2: To check if the input contains any characters or symbols
for (let i = 0; i < inputFromUser.length; i++) {
  if (typeof inputFromUser[i] !== "number" || isNaN(inputFromUser[i])) {
    console.error( "Error: Array must contain only numbers.");
    return false;
  }
}
if(inputFromUser.length===1){
  console.log( "Array has ony one Value: "+inputFromUser[0]);
}

  let minValue = inputFromUser[0];
  let maxValue = inputFromUser[0];
  for (let i = 1; i < inputFromUser.length; i++) {
    if (inputFromUser[i] < minValue) {
      minValue = inputFromUser[i];
    }
    if (inputFromUser[i] > maxValue) {
      maxValue = inputFromUser[i];
    }
  }
if(inputFromUser.length!==1){
let outputResult=maxValue-minValue;
console.log(`The difference between the largest number ${maxValue} and smallest number ${minValue} in an array is ${outputResult}`);
return true;
}
}


findRange([3, 45, 12, 7, 89]);
findRange([89]);
