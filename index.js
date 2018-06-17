

var katzDeli = [];

function takeANumber (nPeople, name)

{
  
  nPeople.push(name)
  return `Welcome, ${name}. You are number ${parseInt(nPeople.length)} in line.`
  
}




//////////////////////////////////////////////////////////////////////////////////////////////////
takeANumber(katzDeli, 'Steven')


function nowServing ()


{
  var first = [...katzDeli]
  console.log(first[0])
  console.log(katzDeli.length)
  
  
  if (katzDeli.length === 1)
  
  {
    
    return `Currently serving ` + first[0];

  }
  
   return "There is nobody waiting to be served!";
    
  
  }

nowServing();



