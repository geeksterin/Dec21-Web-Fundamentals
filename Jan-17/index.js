// console.log("hello");

// const outer = [
//   [4, 3, 2, 4], // 0,0
//   [9, 1, 5, 6], // 1,1
//   [2, 7, 9, 8], // 2,2
//   [8, 5, 2, 0], // 3,3
// ];

// function diagonalSum(matrix) {
//   let sum = 0;
//   for (let i = 0; i < matrix.length; i++) {
//     console.log(i);
//     let inner = matrix[i];
//     console.log(inner);
//     for (let j = 0; j < inner.length; j++) {
//       console.log(matrix[i][j]);
//       //   if (i === j) {
//       //     console.log(matrix[i][j]);
//       //     // sum += matrix[i][j];
//       //   }
//     }
//   }
//   return sum;
// }

// var x = diagonalSum(outer);
// // console.log(x);
// // [4, 3, 2, 4]

// // var y = [
// //   [1, 2],
// //   [2, 3],
// //   [3, 4],
// // ];

// // console.log(y[0][1]);

// // // for (let i = 0; i < y.length; i++) {
// // //   console.log(y[0]);
// // // }

function mulBy2(array) {
  var result = [];
  for (let i = 0; i < array.length; i++) {
    var y = array[i] * 2;
    result.push(y);
  }
  return result;
}

// var x = [1, 2, 3, 4];
// var geek = mulBy2(x);
// console.log(geek);

function add2(array) {
  var result = [];
  for (let i = 0; i < array.length; i++) {
    var y = array[i] + 2;
    result.push(y);
  }
  return result;
}

// function manipulateArray(array, functionality) {
//   var result = [];
//   for (let i = 0; i < array.length; i++) {
//     var y = functionality(array[i]);
//     result.push(y);
//   }
//   return result;
// }

function higherOrderFunc(x, callback1, callback2) {
  callback1(x);
  callback2(x);
}

var mulBy2 = function (n) {
  return n * 2;
};

function add2(n) {
  return n + 2;
}

var x = 4;
var geek1 = higherOrderFunc(3, mulBy2, add2);
var geek2 = higherOrderFunc(4, add2);
console.log(geek1);
console.log(geek2);

// var geek = [1, 2, 3, 4];
// var result = [];
// for (let i = 0; i < geek.length; i++) {
//   if (i <= 1) {
//     result.push(geek[i] + 5);
//   } else {
//     result.push(geek[i] * 2);
//   }
// }

// console.log(result);

// console.log("10" === 10);
