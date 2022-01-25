// var myName = "abhishek";
// var s = `hello my name is ${myName}`;
// // var s = "hello my name is " + myName;
// 2 = 2000 milliseconds
// console.log(s);

// setTimeout(func1, 3000);
// console.log("geekster");
// function func1() {
//   console.log("hello im printing after 3 seconds");
// }
// console.log("geekster 2");

// function myOwnSetTimeout(anyFunction, anyTime){ // anyTime should be in milliseconds
//     if(anyTime seconds have passed){
//         anyFunction()
//     }
// }

// var myPromise = new Promise(x)

// function x(resolve, reject){
//     if(todays date is 25){

//         resolve("geek")
//     }else{

//         reject("not a geek")
//     }
// }

var yourPromise = new Promise((res, rej) => {
  res({ name: "geekster" });
  rej("sorry bhai aaj na hopaye");
});

// yourPromise.then(ok we will watch the match).catch(i will go play football)

// yourPromise.then(onFullfill).catch(onDhoka);

// function onFullfill(arg) {
//   console.log("promise is resolved - ", arg);
// }

// function onDhoka(arg) {
//   console.log("tumne dhoka diya -  ", arg);
// }

// yourPromise
//   .then((arg) => console.log(arg))
//   .catch((dhoka) => console.log(dhoka));

// calling an backend API

var url =
  "https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true";

var data = fetch(url);

// console.log("data is - ", data);

// data.then(onFullfill).then(onSecondFulfill);

function onFullfill(arg) {
  return arg.json();
}

function onDhoka(arg) {
  console.log("tumne dhoka diya -  ", arg);
}

function onSecondFulfill(arg) {
  console.log("finallllyyyyyyyy - ", arg);
}

// fetch(url)
//   .then((res) => res.json())
//   .then((finalData) => {
//     document.write(finalData.activeCasesNew);
//   });

var newURL = "http://universities.hipolabs.com/search?country=india";

// fetch(newURL)
//   .then((something) => something.json())
//   .then((anything) => console.log(anything));

// http://universities.hipolabs.com/search?country=

var container = document.getElementById("container");
var table = document.getElementById("table");
var ul = document.getElementById("ul");

// url = "http://uniies.hipolabs.com/search?country=india";
fetch(newURL)
  .then((response) => {
    console.log("inside first then");
    return response.json();
  })
  .then((data) => {
    console.log("inside second then");
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      //   var element = document.createElement("div");
      //   element.innerText = data[i].name;
      //   container.appendChild(element);
      //   var tr = document.createElement("tr");
      //   var td = document.createElement("td");
      //   td.innerText = data[i].name;
      //   tr.appendChild(td);
      //   table.appendChild(tr);
      //   var li = document.createElement("li");
      //   var div1 = document.createElement("div");
      //   var div2 = document.createElement("div");
      //   div1.innerText = data[i].name;
      //   div2.innerText = data[i]["state-province"];
      //   //   div2.innerText = data[i].state-province;
      //   li.appendChild(div1);
      //   li.appendChild(div2);
      //   ul.appendChild(li);
    }
  })
  .catch((err) => console.log("api has failed"));
// var div = document.createElement("div");
// div.innerText = "hello";
// table.appendChild(div);

{
}

{
  /* <ol>
    <li>
        <div>
            name
        </div>
        <div>
            state
        </div>
    </li>
</ol> */
}

fetch(newURL)
  .then((something) => something.json())
  .then((anything) => {
    // write some functionality
    // finally we get the data here
    console.log(typeof anything);
  });
