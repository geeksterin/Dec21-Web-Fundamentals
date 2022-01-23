var reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

var imgElement = document.getElementById("person-img");
var author = document.getElementById("author");
var job = document.getElementById("job");
var info = document.getElementById("info");
var prevBtn = document.querySelector(".prev-btn");
var nextBtn = document.querySelector(".next-btn");
var randomBtn = document.querySelector(".random-btn");

//reviews = [ {}, {} , {}]

var currentIndex = 2;
updateUserDetails();

prevBtn.addEventListener("click", prevClick);
nextBtn.addEventListener("click", nextClick);
randomBtn.addEventListener("click", randomaize);

function prevClick() {
  if (currentIndex === 0) {
    currentIndex = reviews.length - 1;
  } else {
    currentIndex--;
  }
  console.log(currentIndex);
  updateUserDetails();
}

function nextClick() {
  if (currentIndex === reviews.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  console.log(currentIndex);
  updateUserDetails();
}

function randomaize() {
  currentIndex = Math.floor(Math.random() * reviews.length);
  console.log(currentIndex);
  updateUserDetails();
}

function updateUserDetails() {
  imgElement.src = reviews[currentIndex].img;
  author.innerText = reviews[currentIndex].name;
  job.innerText = reviews[currentIndex].job;
  info.innerText = reviews[currentIndex].text;
}
// console.log(Math.random() * 5);
// console.log(Math.random() * 5);

// console.log(Math.floor(Math.random() * 5));
// D.R.Y

// function higherOrderFunc(x, callback1, callback2) {
//   var y = callback1(x);
//   var z = callback2(x);
//   return [y, z];
// }

// var mulBy2 = function (n) {
//   return n * 2;
// };

// function add2(n) {
//   return n + 2;
// }

// var result = higherOrderFunc(4, mulBy2, add2);

// // console.log(result[0], result[1]);

// // function outer(callBack) {
// //   callBack(4);
// // }

// // var mulBy2 = function (n) {
// //   console.log(n * 2);
// // };

// // var x = outer(mulBy2);

// // function geekster() {
// //   console.log("hello");
// //   return ["geek", "hello"];
// // }

// // var x = geekster()

// function hello(name) {
//   alert(name);
// }

// function logThis(name) {
//   console.log(name);
// }

// // hello("geek");
// // logThis("geekster");

// function alertAndLog(name, alertFunc, logFunc) {
//   alertFunc(name);
//   logFunc(name);
//   logFunc(name);
//   logFunc(name);
//   logFunc(name);
//   logFunc(name);
//   alertFunc(name);
// }

// alertAndLog("anil", hello, logThis);
