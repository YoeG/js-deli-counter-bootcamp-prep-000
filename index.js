var katzDeli = [];
var i = 0;
function takeANumber (katzDeliLine, newName)

{
  
  katzDeliLine[i] = newName;
  return `Welcome ${newName} you are number ${i++} in line.`
  
}


takeANumber(katzDeli,'ada');
takeANumber(katzDeli,'ada');

console.log(katzDeli)

