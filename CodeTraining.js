function groupByType(inputFromUser) {
  const result = { number: [], string: [], boolean: [], object: [], other: [] };
  for (let item of inputFromUser) {
    const type = typeof item;
    if (result[type]) {
      result[type].push(item);
    } else {
      result.other.push(item);
    }
  }
  return result;
}
console.log(groupByType([1, "hi", true, {}, null, 42, "bye"]));



function grouptByInteger(inputFromUser){
   const integer={1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[],9:[]}
   for(let item of inputFromUser){
    if(integer[item]){
      integer[item].push(parseInt(item))
   }

}
 return integer}
 console.log(grouptByInteger([1,"1",2,3,4,5,"5",6,7,8]));


 function groupByCharacter(inputFromUser){
    const character={a:[],b:[],c:[],d:[],e:[],others:[]}
    for(let i=0;i<inputFromUser.length;i++){
        const input=inputFromUser[i];
        if(character[input]){
            character[input].push(input)
        }
        
    }
 return character;
 }
  console.log(groupByCharacter("sun is the power source of all planets"));
  console.log(groupByCharacter("virtual warriors are the pillars of TVK"));

   function groupByVowels(inputFromUser){
    const character={a:[],e:[],i:[],o:[],u:[]}
    for(let i=0;i<inputFromUser.length;i++){
        const input=inputFromUser[i];
        if(character[input]){
            character[input].push(input)
        }
        
    }
 return character;
 }
  console.log(groupByVowels("sun is the power source of all planets"));
  console.log(groupByVowels("virtual warriors are the pillars of TVK"));
  console.log(groupByVowels("A unique idea about audio automation emerged in an eerie oasis"));


  function groupBySymbols(inputFromUser){
    const output={symbols:[],characters:[],numbers:[]}
    for(let item of inputFromUser){
        const type=typeof item
        if(result[type])

    
  }
}
