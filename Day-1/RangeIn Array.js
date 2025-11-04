/***Find Range (Max - Min) in Array**
Write a function to return the difference between the largest and smallest numbers in an array.
Example:
findRange([3, 45, 12, 7, 89]);
Output: 86
---*/


function findRange(inputFromUser) {
    if (!Array.isArray(inputFromUser) || inputFromUser.length === 0) {
    return "Error: Please provide a non-empty array of numbers.";
  }
  if (!inputFromUser.every(num => typeof num === "number" && !isNaN(num))) {
    return "Error: Array must contain only numbers.";
  }

  let min = inputFromUser[0];

  let max = inputFromUser[0];

  for (let i = 1; i < inputFromUser.length; i++) {
    if (inputFromUser[i] < min) {
      min = inputFromUser[i];
    }
    if (inputFromUser[i] > max) {
      max = inputFromUser[i];
    }
  }

  return inputFromUser.length === 1 ? 0 : max - min;
}


console.log(findRange([3, 45, 12, 7, 89]));
