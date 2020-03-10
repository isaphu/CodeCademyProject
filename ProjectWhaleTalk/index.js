const input = "turpentine and turtles";
const vowels = ['a','e','i','o','u'];
const resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    
    if (input[i]===vowels[i]) {
      if (input[i]==='e'){
        resultArray.push('ee');
      } 
      else if (input[i]==='u') {
        resultArray.push('uu');
      }
      else {
        resultArray.push(input[i]);
      }
      
    }
    // console.log(j)
  }
     // console.log(i);
}

console.log(resultArray.join("").toUpperCase());
