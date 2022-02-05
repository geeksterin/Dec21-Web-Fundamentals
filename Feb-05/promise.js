console.clear();
console.log('⛰');

// let preparePizza = (resolve, reject) => {
//     setTimeout(() => {
//         resolve();
//     }, 5000);
// }

// let prepareBurger = (resolve, reject) => {
//     setTimeout(() => {
//         reject();
//     }, 10000);
// }

// let get_pizza_from_counter = () => {
//     console.log("Getting the pizza from the counter");
//     let burger_order = new Promise(prepareBurger);
//     return burger_order;
// }

// let get_burger_from_counter = () => {
//     console.log("Getting the burger");
// }

// let some_error_happened = () => {
//     console.log("Something is wrong");
// }


// let new_order = new Promise(preparePizza);
// new_order
// .then(get_pizza_from_counter)
// .then(get_burger_from_counter)
// .catch(some_error_happened);
// console.log(new_order);

// let get_from_unsplash_01 = function(resolve, reject) {
//     setTimeout(function() {
//         resolve("01");
//     }, 5000);
// }

// let get_from_unsplash_02 = function(resolve, reject) {
//     setTimeout(function() {
//         reject("02");
//     }, 5000);
// }


// let unsplash_success = function(res) { console.log(res); return new Promise(get_from_unsplash_02) };
// let unsplash_failure = function(res) { console.log("Rejected", res); };

// let unsplash_obj = new Promise(get_from_unsplash_01);

// unsplash_obj
// .then(unsplash_success)
// .catch(unsplash_failure);

let display = function(response) {
    let abcd = document.getElementById('student_list');
    let table_parent = document.getElementById('student_list_table');
    for(let i = 0; i < response.data.length; i = i + 1) {
        let single_data = response.data[i];
        let first_name = single_data.first_name;
        let last_name = single_data.last_name;
        let name = `${last_name} ${first_name}`;
        let email = single_data.email;
        // let name = last_name + " " + first_name;

        let new_li = document.createElement('li');
        new_li.innerText = name;
        abcd.appendChild(new_li);

        let new_tr = document.createElement('tr');
        let new_td_first_name = document.createElement('td');
        let new_td_last_name = document.createElement('td');
        let new_td_email = document.createElement('td');

        new_td_first_name.innerText = first_name;
        new_td_last_name.innerText = last_name;
        new_td_email.innerText = email;

        new_tr.appendChild(new_td_first_name);
        new_tr.appendChild(new_td_last_name);
        new_tr.appendChild(new_td_email);
        table_parent.appendChild(new_tr);
    }
}

let t = "users";

fetch(`https://reqres.in/api/${t}`)
.then(function(res) {
    if(res.status == 403) {
        console.log("Please wait for some time");
    }
    return res.json();
})
.then(display)
.catch(function() {
    console.log("Some error happened");
});