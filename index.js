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
  console.log(newArray)
  
  
}

nowServing();