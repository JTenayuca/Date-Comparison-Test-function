//given a string write a function that reverses it

let str = "Cookie";
//declare empty string that will hold the reversed string
let reverseString = "";

function reverse(str) {
  //use split method to put the string into an array
  let splitString = str.split("");
  //loop through the array backwards, decrement down by 1
  //for each element, add it to the reverseString variable
  for (let i = splitString.length - 1; i >= 0; i--) {
    reverseString += splitString[i];
   // console.log(splitString[i]);
  }
  //return the reversed string
  return reverseString;
};

reverse(str);
