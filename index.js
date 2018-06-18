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
  console.log(newArray)      /////////////test
  delete katzDeli[0];
  console.log(katzDeli[0])      /////////////////// test
  console.log(newArray[0])
}

nowServing();