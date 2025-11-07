/*1. Flatten a nested array into a single array (only one level).

flatten([1, [2, 3], [4, 5]])*/


function flattenNestedArray(inputFromUser) {
  console.log("The Given Array is:", inputFromUser);

  // Edge Case 1: Input is not an array
  if (!Array.isArray(inputFromUser)) {
    console.error("Error: Input must be an array.");
    return false;
  }

  // Edge Case 2: Empty array
  if (inputFromUser.length === 0) {
    console.error("Warning: Empty array provided.");
    return false;
  }
  let outputArray = [];
  let temporaryElement;
    for(let i=0;i<inputFromUser.length;i++){
       
        if(Array.isArray(inputFromUser[i])){
            temporaryElement=inputFromUser[i];
          for(let j=0;j<temporaryElement.length;j++){
            outputArray.push(temporaryElement[j]);
        }}
        else
        {
        outputArray.push(inputFromUser[i]);
        }
        
    }
    
  console.log("Final Flattened Output:", outputArray);
  return outputArray;
}

flattenNestedArray([1,[2, 3],[4, 5]]);
flattenNestedArray([1,[2, 4, 5, 3],[8, 9]]);
flattenNestedArray([1,[2, 4, 5, 3],[8, 9],10,12,[11,13]]);


