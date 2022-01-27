var url = "https://api2.binance.com/api/v3/ticker/24hr";

var container = document.getElementById("container");
var table = document.getElementById("table");
var ul = document.getElementById("ul");

var th1 = document.createElement("th");
var th2 = document.createElement("th");
var th3 = document.createElement("th");

th1.innerText = "symbol";
th2.innerText = "price";
th3.innerText = "count";

table.append(th1, th2, th3);

fetch(url)
  .then((geek) => geek.json())
  .then((finalResult) => {
    console.log(finalResult);
    for (var i = 0; i < 5; i++) {
      tr = document.createElement("tr");
      td1 = document.createElement("td");
      td2 = document.createElement("td");
      td3 = document.createElement("td");
      td1.innerText = finalResult[i].symbol;
      td2.innerText = finalResult[i].openPrice;
      td3.innerText = finalResult[i].count;
      //   tr.appendChild(td1).appendChild(td2).appendChild(td3);
      tr.append(td1, td2, td3);
      table.appendChild(tr);
    }
  });

//   Element.classList.add("classname")

// element1.appendChild(ele2)
// element1.appendChild(ele3)
Element1.append(1, 2, 3, 4);

tr = document.createElement("tr");
td1 = document.createElement("td");
td2 = document.createElement("td");
td3 = document.createElement("td");

td1.innerText = "geek";
td2.innerText = "geek1";
td3.innerText = "geek3";

// tr.appendChild(td1);
// tr.appendChild(td2);
// tr.appendChild(td3);

// tr.appendChild(td1).appendChild(td2).appendChild(td3);

tr.append(td1, td2, td3);

table.appendChild(tr);

// var h = document.createElement("div");
// h.innerText = "prepend";

// document.body.prepend(h);
