var plusOne = function(digits) {
    //create an empty array that will be the final output
    let output = [];
    //create a variable that will add 1 to the initial sum and will also serve as a 1 that can be carried for addition
    let carriedValue = 1;
    //Use a for loop to decrement backwards from the array
    for (let i = digits.length - 1; i >= 0; i--) {
        //add one to the number at index i
        const sum = digits[i] + carriedValue;
        //change carried value to 0
        carriedValue = 0;
        
        if (sum >= 10) {
            //if the value at index i is greater than 10, set carried value to 1 in case it needs to be carried to the first place when loop gets to index 0
            carriedValue = 1;
            //add the remainder of the sum variable divided by 10 to the front of the output array. So if index[i] = 9, then 9+1 = 10 and 0 will be added to output array
            output.unshift(sum % 10);
            //remove the end of the array
            output.pop()
        } else {
            //if the sum of index[i] + 1 is less than 10 then the sum can be directly added to the front of the output array
            output.unshift(sum);
        }
        //If we get to index[0] and the sum of index[0] + 1 === 10, then carriedValue should be set to 1. In this case, a '1' should be carried to the front of the array
        if (i === 0 && carriedValue > 0) {
            //add a 1 to the front of the array
            output.unshift(carriedValue);
        }
    }
    
    return output;

};
