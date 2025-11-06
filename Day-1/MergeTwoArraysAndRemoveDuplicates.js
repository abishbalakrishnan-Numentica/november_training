/***Merge Two Arrays and Remove Duplicates**
Write a function to merge two arrays and remove duplicate elements.
Example:
mergeUnique([1, 2, 3], [3, 4, 5]);
Output: [1, 2, 3, 4, 5]*/


function mergeUniqueElements(firstList, secondList) {
   console.log(`Input:  ${JSON.stringify(firstList)} & ${JSON.stringify(secondList)}`);
   //Edge Case: To check the Inputs are Array
   if (!Array.isArray(firstList) || !Array.isArray(secondList)) {
    console.error("Error: Both inputs must be arrays.");
    return false;
  }
  //Edge Case: To check the Input is Empty or not
   if (firstList.length === 0 && secondList.length === 0) {
    console.error("Empty String");
    return false;
  }
  let finalResult = [];
  
  for (let i = 0; i < firstList.length; i++) {
    finalResult[i] = firstList[i];
  }

  for (let i = 0; i < secondList.length; i++) {
    let alreadyExists = false;
    for (let j = 0; j < finalResult.length; j++) {
      if (secondList[i] === finalResult[j]) {
        alreadyExists = true;
        break;
      }
    }
    if (!alreadyExists) {
      finalResult[finalResult.length] = secondList[i];
    }
  }

  return finalResult;
}


console.log("Output: "+mergeUniqueElements([1, 2, 3], [3, 4, 5]));
