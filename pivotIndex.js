var pivotIndex = function(nums) {
  var sum = 0;
let indexNumber;

if (!nums.length < 1) {

//iterate through the array
for (var i = 0; i < nums.length; i++) {
  //set variables for the sum of left side and right side to 0
  var leftsum = 0;
  var rightsum = 0;
//create a variable that is an array that contains numbers from beginning of the index to the i + 1 index. This is the left side
var leftArray = nums.slice(0, i + 1);
//iterate through the array and add the sum of the values of the array
for (var k = 0; k < leftArray.length; k++) {
  leftsum += leftArray[k];
 
}
//create a variable for the right side by slicing the array from the index at i to the end. This is the right side
var rightArray = nums.slice(i);
//iterate through the right side and add the sum of the values of the array
for (var j = 0; j < rightArray.length; j++) {
  rightsum += rightArray[j];
}
 
 //compare the left side sum and right side sum. If they are equal return the index number
 if (leftsum === rightsum){
   return indexNumber = i;
}


 }
 //if the index number is not undefined then it should return the value. Else -1 should be returned.
 if (indexNumber !== undefined) {
   return indexNumber;
 } else {
   return -1;
 }
}
else {
  return -1;
}
};

