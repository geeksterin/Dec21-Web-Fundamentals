// console.log("Const");

// let first_name = "Aayush";

// {
//     let first_name = "Something else";
//     console.log(first_name);
// }
// console.log(first_name);

// console.log("After after");

// const API_KEY = "Super Secret";



// abcd();



// {
//     console.log(first_name);
//     var first_name = "Aayush";
//     console.log("Hello");
// }

// console.log(first_name);


// abcd(); //abcd -> undefined;


// var abcd = function () {
//     console.log("Hey");
// }

//Wait for 1 hour
// let timer = 1 * 60 * 60 * 1000;

// //Wait for 1 day
// let timer = 1 * 24 * 60 * 60 * 1000;

// let timer = 30 * 1000;

// let timer1_id = setTimeout(function () {
//     console.log("After 1 second");
// }, 10 * 1000);
// console.log("After settimeout");

// console.log(timer1_id);

// clearTimeout(timer1_id);

// const interval_id = setInterval(function() {
//     console.log("Another logic");
//     console.log("called again");
// }, 1000 );

// clearInterval(interval_id);


//Create a timer UI.

let counter_value = 0;
let counter_running = true;

let counter_id = setInterval(function() {
    counter_value = counter_value + 1;
    document.getElementById('seconds').innerText = counter_value;
}, 1000);

document.getElementById('stop_btn').addEventListener('click', function() {
    clearInterval(counter_id);
    counter_running = false;
});

document.getElementById('resume_btn').addEventListener('click', function() {
    if(counter_running == false) {
        counter_id = setInterval(function() {
            counter_value = counter_value + 1;
            document.getElementById('seconds').innerText = counter_value;
        }, 1000);
    }
});













