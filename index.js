

var katzDeli = [];

function takeANumber (nPeople, name)

{
  
  nPeople.push(name)
  return `Welcome, ${name}. You are number ${parseInt(nPeople.length)} in line.`
  
}




////////////////////////////////////////////////////////////////////////////////////////////////////
(takeANumber(katzDeli, 'Bill'))
(takeANumber(katzDeli, 'Jane'))
(takeANumber(katzDeli, 'Ann'))
console.log(katzDeli[0])
////////////////////////////////////////////////////////////////////////////////////////////////////


function currentLine ()


{
  var myArray = [];
  
  for (var i = 0; i < katzDeli.length  - 1, i++; )
  
  {
    
    myArray.push(`${i}. ${katzDeli[i]}, `)
    
  }
  
  if (katzDeli.length === 0)
  
  {
    
    return 'The line is currently empty.'
    
  }
  
  else
  
  return `The line is currently ${myArray}`;
}

currentLine()
