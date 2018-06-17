

var katzDeli = [];

function takeANumber (nPeople, name)

{
  
  nPeople.push(name)
  return `Welcome, ${name}. You are number ${parseInt(nPeople.length)} in line.`
  
}




////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(takeANumber(katzDeli, 'Steven'))
console.log(katzDeli[0])
////////////////////////////////////////////////////////////////////////////////////////////////////


function currentLine ()


{
  var myArray = [];
  
  for (let i = 0; i < katzDeli.length  - 1, i++; )
  
  {
    
    myArray.push(`The line is currently ${i}. ${}`)
    
  }
  
  return 
}

