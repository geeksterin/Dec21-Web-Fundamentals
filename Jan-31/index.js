// console.log("hello");

const s = "united states";

// console.log(s.replace(" ", "+"));

// const anyString = "hello world h a s d asas";

// console.log(anyString.split(" "));

// const anyString2 = "hello.world.h.a.s.d.asas";

// console.log(anyString2.split("."));

const arr = ["hello", "world", "Geek"];

// console.log(a / rr.join("="));

// "hello=world"

// console.log(s.split(" ").join("+"));

// url+inputElement.value.split(" ").join("+")

// url+"united+states"

// const i = "india";

// console.log(i.split("d"));

const str = "united states";

// console.log(str.replace(" ", "+"));

const HTMLbutton = document.getElementById("click-me");
const small = document.getElementById("small");

HTMLbutton.addEventListener("click", runThisFnWhenClickHappens);

function runThisFnWhenClickHappens() {
  console.log("the button was clicked");
  HTMLbutton.classList.add("button-js-class", "one-more");
  small.classList.add("button-js-class", "one-more");
  //   HTMLbutton.classList.add("one-more");
  //   HTMLbutton.className = "x y z";
  console.log(HTMLbutton.classList);
}

const containerElements = document.querySelectorAll(".container");

// console.log(containerElements);

// for (let i = 0; i < containerElements.length; i++) {
//   //   containerElements[i].classList.add("button-js-class");
// }

const x = ["x", "y", "z", "a", "b"];

// for (let i = 0; i < arr.length; i++) {
//     arr[i].classList.add("button-js-class");
//   }

// arr[0], arr[1]

for (let i = 0; i < containerElements.length; i++) {
  //   containerElements[i].innerText = x[i];
  //   when i = 0
  //   containerElements[i] = h2, x[i] = "x"
}

var arr1 = [1, 2, 3, 4];

// var result = [];

var result = [];
var sum = 0;

for (let i = 1; i < arr1.length; i++) {
  sum = sum + arr1[i];
  arr1[i] = sum;
  //   result.push(sum);
}

// console.log(arr1);

// setTimeout(someFunction, 2000);

// addEventListener("click", someFunction)

// function someFunction() {
//   console.log("happens after 2 seconds");
// }
