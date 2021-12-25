console.log("Hello!");

//Write a program to take a number and print a square of that size.
//5 -> Taken from user
/*
*****
*****
*****
*****
*****
*/

//Nesting (for loop inside another for loop)!

var n = prompt("Enter the number");
n = parseInt(n);

var o = "";
for(var j = 0; j < n; j = j + 1) {
    var line = "";
    for(var i = 0; i < n; i = i + 1) {
        line = line + "*";
    }
    o = o + line;
    o = o + "\n";
}
console.log(o);


