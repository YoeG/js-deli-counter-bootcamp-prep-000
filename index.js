var katzDeli = [];
var i = 0;
function takeANumber (katzDeliLine, newName)

{
  
  katzDeliLine.push(newName);
  return `Welcome ${newName} you are number ${++i} in line.`
  
}


console.log(takeANumber(katzDeli,'ada'));
takeANumber(katzDeli,'ada');

console.log(katzDeli)

