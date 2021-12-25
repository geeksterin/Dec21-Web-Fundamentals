//While iterative.

console.log("Hi");

/*
var i = 0;
while(i < 10) {
  console.log(i);

  if(i == 2) {
   i = 5
  } else {
   i = i + 1;
  }
}
*/

//Fibonacci Series:
//1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...
//-> 1, 1
//The next number is sum of previous 2 numbers.

//Write a script to print first n numbers of the fibonacci series.
//Print upto 10.

/*
var n = prompt("Enter the count");
n = parseInt(n);

var a = 0; //1
var b = 1; //1

//Printing first 2
console.log(a);
console.log(b);

var count = 2;

//while(c < n) {
while(count < n) {
  var c = a + b;
  console.log(c);

  a = b;
  b = c;

  count = count + 1;
}

*/

/*
//Write a script to take n input and print numbers from 5 to n.
 
var n = prompt("Enter n");
n = parseInt(n);

var cccc = 5;
while(cccc <= n) {
  console.log(cccc);
  cccc = cccc + 1;
}
*/



while(false) {
  console.log("While executed");
}


do {
  console.log("Do while executed");
} while(false);

/*
do {
 cleanHands();
} while(handsAreDirty);
*/

//Write a program to print 1 to n.

var n = 10;
var i = 0;

do {
  console.log(i);
  i = i + 1;
} while(i < n);
