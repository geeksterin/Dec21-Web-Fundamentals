//This is for arrays.

console.log("Array check");

// []

var a = [123, "Something", "456", false, 2, 3, 5, 0];
console.log(a);
console.log(typeof a);

var b = [1, "A", true, ["S"], a];
console.log(b);

//Read
console.log(b[1]);
console.log(a[1]);
console.log(b[3][0]);


//Update
console.log(b[0]);
b[0] = "ONE as a string";
console.log(b[0]);

b[3][0] = "T";
console.log(b[3][0]);

//Check the length of an array.
//.length;

console.log(a.length);
//Array push
a.push("Dynamically added string");
console.log(a);
console.log(a.length);
a.pop();
console.log(a.length);
