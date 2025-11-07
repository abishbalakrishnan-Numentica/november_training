function flatten(input){
    let output=[];
    let temp;
    for(let i=0;i<input.length;i++){
        console.log(input[i])
        if(Array.isArray(input[i])){
            temp=input[i]
          for(let j=0;j<temp.length;j++){
            output.push(temp[j])
        }}
        else{
        output.push(input[i])}
        console.log(output)
    }
    return output
}

flatten([1, [2, 3], [4, 5]])