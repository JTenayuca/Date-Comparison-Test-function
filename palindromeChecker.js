let str = "AbBa";


function palindromeCheck(str) {
  let strArray = str.toLowerCase().split("");
  console.log(strArray);
  let reverseString = "";

  for (let i = strArray.length -1; i >= 0; i--) {
    reverseString += strArray[i];
  }
  console.log(reverseString);

  if (reverseString === str.toLowerCase()) {
    return true;
  }
  else {
    return false;
  }


}

palindromeCheck(str);
