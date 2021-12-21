//This is the Conditionals JS file.
console.log("Hello");

//Check whether the number is positive or negative or neutral.


var num = 10;

if(num > 0) {
  console.log("Number is positive");
} else {

  //Some logic to execute when number is less than or equal to zero.

  //Number can be negative or neutral also.
  if(num < 0) {
     console.log("Number is negative");
  } else {
    console.log("Number is neutral");
  }  
}

/*
else {
  //Some other logic also, then cannot use else if!
  if{}else{}
}
*/



// else if

if(num > 0) {
  console.log("Positive");
} else if(num < 0) {
  console.log("Negative");
} else {
  console.log("Neutral");
}
