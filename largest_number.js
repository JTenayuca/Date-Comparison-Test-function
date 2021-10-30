var dominantIndex = function(nums) {
    let largest = nums[0];
  let largestindex = 0;
  var falsecases = [];

  for (var i = 1; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
      largestindex = i;
    //  console.log(largest + " " + "is the largest number" + " and " + largestindex + " is its index");
    }
    
  }

  nums.splice(largestindex, 1);
  
  
 // console.log(nums);
 // console.log(largest);
  //console.log(nums[3]);
 // console.log("Starting second for loop:");
  for (var j = 0; j < nums.length; j++) {
   // console.log("number at position "+ j + " " + nums[j]*2);
  //  console.log(j);
    if (largest >= 2*nums[j]) {
    //  console.log(nums[j] + " is a true case");
    }
    else {
      falsecases.push(nums[j]);
    }
    
  }
//  console.log("final nums: " + nums);
  if (falsecases.length > 0) {
    return -1;
  }
  else {
    return largestindex;
  }

    
};
