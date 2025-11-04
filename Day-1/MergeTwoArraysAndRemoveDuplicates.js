/***Merge Two Arrays and Remove Duplicates**
Write a function to merge two arrays and remove duplicate elements.
Example:
mergeUnique([1, 2, 3], [3, 4, 5]);
Output: [1, 2, 3, 4, 5]*/


function mergeUniqueElements(firstList, secondList) {

   if (!Array.isArray(firstList) || !Array.isArray(secondList)) {
    console.error("Error: Both inputs must be arrays.");
    return false;
  }
   if (firstList.length === 0 && secondList.length === 0) {
    console.error("Empty String");
    return false;
  }
  let outputResult = [];
  

  for (let i = 0; i < firstList.length; i++) {
    outputResult[i] = firstList[i];
  }

  for (let i = 0; i < secondList.length; i++) {
    let alreadyExists = false;
    for (let j = 0; j < outputResult.length; j++) {
      if (secondList[i] === outputResult[j]) {
        alreadyExists = true;
        break;
      }
    }
    if (!alreadyExists) {
      outputResult[outputResult.length] = secondList[i];
    }
  }
  console.log(`Merged result of ${JSON.stringify(firstList)} & ${JSON.stringify(secondList)} is ${JSON.stringify(outputResult)}`)
  return true;
}


mergeUniqueElements([1, 2, 3], [3, 4, 5]);
