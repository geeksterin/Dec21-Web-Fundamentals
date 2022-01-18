// var status = confirm("Do you want to delete everything?");
// alert(status);

var button_reference = document.getElementById('initButton');
//click event. I want to listen to this event. When this event happens, I want to execute some function. I pass as callback!
// var imgs = document.getElementsByClassName("img_class");
// console.log(imgs);
// var imgs = document.getElementsByTagName("img");
// console.log(imgs);
// let inputs = document.getElementsByName("search");
// console.log(inputs);

//I want to select all images who are child of the container class.
// var cssElements = document.querySelector("#initButton")
var jgkzsdjdyfzfjd = document.querySelectorAll("img:nth-child(even)");
console.log(jgkzsdjdyfzfjd);



function abcd() {
    // console.log("Hello");
    button_reference.innerText = "Something other..";
    button_reference.style.backgroundColor = "#FF0000";
}

//Incorrect, because the function abcd is getting invoked here only. We want to invoke the function when the event is triggered. We just need to pass the reference.
// button_reference.addEventListener('click', abcd());


//This is correct. ✔
button_reference.addEventListener('click', abcd);
button_reference.addEventListener('click', function() {
    alert("Second listener");
});


// console.log(button_reference);