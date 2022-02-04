console.clear();
console.log("😎");

// let abcd = {
//     'outer_key': "Outer Value",
//     'calc': {
//         'a': 10,
//         'b': 20,
//         'sum': function() {
//             console.log(this.a + this.b);
//             console.log(this);
//         }
//     },
// }
 

// abcd.calc.sum();


// let a = function() {
//     console.log("Hello");
// }

// let obj = {
//     'sum': a,
// };

let obj1 = {
    'a': 10,
    'b': 20,
    'show_this': function() {
        console.log(this);
    }
};
obj1.show_this();

let obj2 = {
    'k0': "Something",
    'k1': {
        'c': 30,
        'd': 40,
        'sum': function() {
            console.log(this.sum);
        }
    }
};

obj2.k1.sum();





// let arr = [
//     "1337 - abcd", 
//     1, 
//     function() {
//         console.log(this[0]); 
//     }
// ];

// if(typeof arr[1] == "function") {
//     console.log("Element is a function");
// }
// arr[2]();

var arr = ["hu" , 1 , 3 , function(){
    return this[0];
}];

console.log(arr[3]);
console.log(arr[3]());

let memo = [];
let fib = (n) => {
    if(memo[n] != undefined) {
        return memo[n];
    }
    if(n <= 1) {
        return n;
    }
    let result = fib(n - 1) + fib(n-2);
    memo[n] = result
    return result;
}

let result = fib(10);
console.log(result);