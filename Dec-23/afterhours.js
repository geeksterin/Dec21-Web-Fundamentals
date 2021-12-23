//Afterhours.
console.log("Hi");
/*
var obj = {
  'key1': "Value 1",
  'key2': "Value 2",
  'key3': "Value 3"
};

var a = prompt("Which keys do you want?");
a = a.split(','); //This splits a string into an array. 
//("key1,key2" => ['key1', 'key2'])
console.log(a);
for (var i = 0; i < a.length; i = i + 1) {
  console.log(obj[a[i]]);
}
*/

/*
var arr = ["A", "B", "Something"];
for(var i of arr) {
  console.log(i);
}
*/

/*
var a = new Array(3);
for(var i of a) {
  console.log(i);
  //a[i] = prompt();
}
*/



var a = 10;
var b = 20;

switch(true) {
  case a > b:
    console.log(a);
    break;
  case b > a:
    console.log(b);
    break;
}

if(a>b)
  console.log(a);
else
  console.log(b);