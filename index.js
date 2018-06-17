

var katzDeli = [];

function takeANumber (katzDeli, name)

{
  
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${parseInt(katzDeli.length)} in line.`
  
}




////////////////////////////////////////////////////////////////////////////////////////////////////
takeANumber(katzDeli, 'Bill')
takeANumber(katzDeli, 'Jane')
takeANumber(katzDeli, 'Ann')
console.log(katzDeli)
console.log(takeANumber())
////////////////////////////////////////////////////////////////////////////////////////////////////


function currentLine ()


{


}