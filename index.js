var katzDeli = [];
function takeANumber (katzDeliLine, newName)

{
  
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
  
}
takeANumber(katzDeli,'Ada')
//////////////////////////////////////////////////////////////////////////////////////////////////

function nowServing ()

{
  
  var newArray = [];
  newArray = [...katzDeli];
  
  if (katzDeli.length < 1 )
  
  
  {
    
    return 'There is nobody waiting to be served!';
    
  }
  
  else

  delete katzDeli[0];
  return `Current serving ${newArray[0]}`;
}

nowServing();