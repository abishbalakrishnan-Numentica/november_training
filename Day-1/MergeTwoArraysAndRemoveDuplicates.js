/***Merge Two Arrays and Remove Duplicates**
Write a function to merge two arrays and remove duplicate elements.
Example:
mergeUnique([1, 2, 3], [3, 4, 5]);
Output: [1, 2, 3, 4, 5]*/


function mergeUniqueElements(firstList, secondList) {
     if (!Array.isArray(firstList) || !Array.isArray(secondList)) {
    return "Error: Both inputs must be arrays.";
  }
   if (firstList.length === 0 && secondList.length === 0) {
    return [];
  }
  let merged = [];
  

  for (let i = 0; i < firstList.length; i++) {
    merged[merged.length] = firstList[i];
  }

  for (let i = 0; i < secondList.length; i++) {
    let exists = false;
    for (let j = 0; j < merged.length; j++) {
      if (secondList[i] === merged[j]) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      merged[merged.length] = secondList[i];
    }
  }

  return merged;
}


console.log(mergeUnique([1, 2, 3], [3, 4, 5]));
