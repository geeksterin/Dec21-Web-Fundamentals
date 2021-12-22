//This is for range html

console.log("Hi");

//Write a program to check whether the input number is in the range of 0 to 100.

var mark = prompt("Enter the marks");

/*
1. Mark should be greater than or equal to zero.
2. Mark should be less than or equal to 100.
*/

mark = parseInt(mark);
console.log(typeof mark);

if((mark >= 0) && (mark <= 100)) {
  alert("The mark is correct");
} else {
  alert("Invalid marking");
}