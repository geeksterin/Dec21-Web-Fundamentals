//Assignment JS
console.log("Assignment Questions");

//Take 3 prompts and find the max.

var arr = [];

var i = prompt("Enter first number");
i = parseInt(i);
arr.push(i);

i = prompt("Enter second number");
i = parseInt(i);
arr.push(i);


i = prompt("Enter third number");
i = parseInt(i);
arr.push(i);

//var max = Math.max(arr[0], arr[1], arr[2]);
//var max = Math.max(...arr); -> Spread operator. For further reading.
//alert(max);

//Using a for loop to check max
//Using Math.max function.
//Comparing using if else

if((arr[0] >= arr[1]) && (arr[0] >= arr[2])) {
  alert(arr[0]);
} else if ((arr[1] >= arr[0]) && (arr[1] >= arr[2])) {
  alert(arr[1]);
} else {
  alert(arr[2]);
}