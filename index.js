var katzDeli = [];
var i = 0;
function takeANumber (katzDeliLine, newName)

{
  
  katzDeliLine[i] = newName;
  i++
  return `Welcome ${newName} you are number ${i} in line.`
  
}

console.log(takeANumber(katzDeli,'Ada'))