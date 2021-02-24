// this is our constant temp in kelvin //
const kelvin = 0;
// this converts Kelvin to Celsius //
const celsius = kelvin - 273;
// this converts Celsius to Fahrenheit//
let fahrenheit = celsius * (9/5) + 32;
// this rounds down Fahrenheit to a whole number //
fahrenheit = Math.floor(fahrenheit);
// this converts Celsius to Newton//
let newton = celsius * (33/100);
// this rounds down Fahrenheit to a whole number //
newton = Math.floor(newton);


console.log('The temperature is ' + kelvin + ' degrees Kelvin.')
console.log('The temperature is ' + newton + ' degrees Newton.')
console.log('The temperature is ' + celsius + ' degrees Celsius.')
console.log('The temperature is ' + fahrenheit + ' degrees Fahrenheit.')
