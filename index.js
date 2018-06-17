

var katzDeli = [];

function takeANumber (nPeople, name)

{
  
  nPeople.push(name)
  return `Welcome, ${name}. You are number ${parseInt(nPeople.length)} in line.`
  
}




////////////////////////////////////////////////////////////////////////////////////////////////////
takeANumber(katzDeli, 'Bill')
takeANumber(katzDeli, 'Jane')
takeANumber(katzDeli, 'Ann')
console.log(katzDeli)
////////////////////////////////////////////////////////////////////////////////////////////////////


function currentLine ()


{


}