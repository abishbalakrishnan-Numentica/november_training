function testingData(inputFromUser){
let character=""
let outputResult=""
    for(let i=0;i<inputFromUser.length;i++){
     let char=inputFromUser[i]
     if(char===" "){
        character+=char
        
     }
     else character+=char
     console.log("2."+ character)

    }
    console.log(character)
return character

}
console.log(testingData("numentica ui private limited"));