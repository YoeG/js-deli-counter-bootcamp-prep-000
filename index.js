var katzDeli = [];
function takeANumber (katzDeliLine, newName)

{
  
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
  
}

//////////////////////////////////////////////////////////////////////////////////////////////////
takeANumber(katzDeli, 'Steven')
function nowServing ()

{
  
  var deliLine = katzDeli[0];
  
  console.log(katzDeli.length)
  if (!katzDeli.length )
  
  
  {
    
    return 'There is nobody waiting to be served!';
    
  }
  

  katzDeli.shift();
  return `Currently serving ${deliLine}.`;
}

console.log(nowServing());

