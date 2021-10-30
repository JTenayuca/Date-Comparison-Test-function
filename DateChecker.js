function checkDate(date1, date2) {
  newDate1 = date1.replace(/-/g, " ");
  ArrayDate1 = newDate1.split(" ").map(Number);
  console.log(ArrayDate1);
  //get second date and split into a new Array
  newDate2 = date2.replace(/-/g, " ");
  ArrayDate2 = newDate2.split(" ").map(Number);
  console.log(ArrayDate2);
  console.log(ArrayDate1[1] > ArrayDate2[1]);
  //compare the two by indices. Check if start date is before 3/27/2009  (or any other specified date)
  //return false if date 1 comes after date 2 or is on the same date. Return true if date 1 is before date2.
  if (ArrayDate1[0] > ArrayDate2[0]) {
    return false;
  }
  else if(ArrayDate1[0] < ArrayDate2[0]) {
    return true;
  }
  else if((ArrayDate1[0] == ArrayDate2[0]) && (ArrayDate1[1] < ArrayDate2[1])) {
    return true;
  }
  else if((ArrayDate1[0] == ArrayDate2[0]) && (ArrayDate1[1] > ArrayDate2[1])) {
    return false;
  }
  else if((ArrayDate1[0] == ArrayDate2[0]) && (ArrayDate1[1] == ArrayDate2[1]) && (ArrayDate1[2] < ArrayDate2[2])) {
    return true;
  }
  else if((ArrayDate1[0] == ArrayDate2[0]) && (ArrayDate1[1] == ArrayDate2[1]) && (ArrayDate1[2] > ArrayDate2[2])) {
    return false;
  }
  else if((ArrayDate1[0] == ArrayDate2[0]) && (ArrayDate1[1] == ArrayDate2[1]) && (ArrayDate1[2] == ArrayDate2[2])) {
    return false;
  }
  else {
    console.log("There was an error comparing the following dates: " + ArrayDate1 + ", " + ArrayDate2);
  }


}

checkDate("2020-11-29", "2020-11-29");
