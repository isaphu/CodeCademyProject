let kelvin = 293;
//this is temperature forecast for today
let celsius = kelvin - 273;
//this is temperature forcasr in celsius 
let fahrenheit = celsius * (9/5)+32;
//this is temperature forecast in fahrenhiet
fahrenheit = (Math.floor(fahrenheit));
//to have the result round to the nearest tenth
console.log(`The temperature is ${fahrenheit} degrees.`)

let newtown = celsius * (33/100);
celsius = (Math.floor(celsius));
console.log(`Newtown is ${celsius}`)
