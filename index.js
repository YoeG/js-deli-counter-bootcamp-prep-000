var katzDeli = [];
function takeANumber (katzDeliLine, newName)

{
  
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
  
}

//////////////////////////////////////////////////////////////////////////////////////////////////

function nowServing ()

{
  
  var string = katzDeli[0];
  console.log(string)
  onsole.log(katzDeli.length)
  if (katzDeli.length < 1 )
  
  
  {
    
    return 'There is nobody waiting to be served!';
    
  }
  
  else

  katzDeli.shift();
  return `Currently serving ${string}`;
}

nowServing();