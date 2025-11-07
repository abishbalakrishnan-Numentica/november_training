/*Find the second largest number in an array.
findSecondLargest([10, 5, 20, 8])
// Output: 10*/


function findSecondLargest(inputFromUser) {
  console.log(`Input: ${JSON.stringify(inputFromUser)}`);

  // Edge Case: Validate array and non-empty
  if (!Array.isArray(inputFromUser) || inputFromUser.length===0) {
    console.error("Error: Array Values are Empty.");
    return false;
  }

  // Edge Case: Validate all elements are numbers
  for (let i = 0; i < inputFromUser.length; i++) {
    if (typeof inputFromUser[i] !== 'number' || isNaN(inputFromUser[i])) {
      console.error(`Error: Invalid element detected - ${inputFromUser[i]}`);
      return false;
    }
  }
    // Edge Case: If the Array contains only one Value
    if (inputFromUser.length < 2) {
    console.error("Error: Array must contain at least two numbers.");
    return false;
  }
  let temporaryValue = 0;
  for (let i = 0; i < inputFromUser.length; i++) {
    for (let j = 0; j < inputFromUser.length; j++) {
      if (inputFromUser[i] > inputFromUser[j]) {
        temporaryValue = inputFromUser[i];
        inputFromUser[i] = inputFromUser[j];
        inputFromUser[j] = temporaryValue;
      }
    }
  }

  console.log(`The Second Largest Number in Array is: ${inputFromUser[1]}`);
  return inputFromUser[1];
}
findSecondLargest([10, 5, 20, 8]);
findSecondLargest([]);
findSecondLargest([1,2,3,'a',4]);
