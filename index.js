var katzDeli = [];
function takeANumber (katzDeliLine, newName)

{
  
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
  
}

//////////////////////////////////////////////////////////////////////////////////////////////////

function nowServing ()

{
  
  var newArray = [...katzDeli];
  console.log(newArray)
  
  
}

nowServing();