console.log('☀');
// const obj = {
//     'first_name': "Aayush",
// };

// console.log(obj);

// obj.last_name = "Sinha";

// // Object.freeze(obj);
// // Object.seal(obj);
// obj.new_prop = "shdjkshdjkf";

// delete obj.first_name;

// // obj.first_name = "Abhishek";
// obj.last_name = "Diwate";

// console.log(obj);


// const arr = [1, 2, 3, 4];
// Object.freeze(arr);

// arr[2] = "Something else";


// console.log(arr);


// let n = new Object("abcd");
// console.log(n)
// console.log(typeof n);


let fn = new Function("a", "b", "console.log(a+b);");
console.log(fn);
console.log(typeof fn);

const a = new Number(10);
let b = new String(20);

// a = new Number(30);

console.log(a);

fn(a, b);

let something = "Test";

let abcd = {
    'first_name': "Aayush",
    'last_name': "Sinha",
    'students': [
        'Abhishek',
        'Abid',
        'Akash',
    ],
    'role': `Educator ${something}`,
};

let str = JSON.stringify(abcd);
console.log(str);

const psrased_obj = JSON.parse(str);
console.log(psrased_obj);