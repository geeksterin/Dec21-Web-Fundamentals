/*
 Expectation - I want to load some images when I click the button.
 Requirement - The image resources should be ready. (We have done in img_arr);

 Step 1 - Create the HTML
 Step 2 - Get the button reference
 Step 3 - Add an eventListener on the button.
 Step 4 - Create a function which will be called when the button is clicked;
 Step 5 - Get the container reference.
 Step 6 - Load the images
 Step 6.1 - Loop on the img_arr
 Step 6.2 - For each of those array element, we create a new HTML Element ("img").
 Step 6.3 - We change the src property and give the correct link.
 Step 6.4 - Append it to the container.

 That's it!

*/



var btn_ref = document.getElementById('initButton');

//This is correct. ✔
btn_ref.addEventListener('click', showImages);

function imageClicked(event) {
    var img_prev_r = document.getElementById("img_preview");
    img_prev_r.classList.remove("d-none");
    //classList.add("class_name");
    
    var img_r = img_prev_r.children[0];

    // img_r.src = img_arr[3];
    img_r.src = event.target.src;
    // console.log();
}

function showImages() {
    var container_ref = document.getElementById("gallery_container");

    container_ref.innerText = "";
    
    for(var i = 0; i < img_arr.length; i = i + 1) {
        var img_ref = document.createElement("img");
        img_ref.src = img_arr[i];
        img_ref.addEventListener('click', imageClicked);

        container_ref.appendChild(img_ref);
    }



    // Recommended ✔ (By 9 out of 10 developers).
    // container_ref.appendChild(img_ref);

    //Not recommended ❌
    // container_ref.innerText = "<img src='https://images.unsplash.com/photo-1516233758813-a38d024919c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60' />";
}

var img_arr = [
    'https://images.unsplash.com/photo-1516233758813-a38d024919c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1574068468668-a05a11f871da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1570527140771-020891229bb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1612024782955-49fae79e42bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
];









// showImages();

// var div_r = document.getElementById("something");

// console.log(div_r.innerText);
// console.log(div_r.textContent);

// div_r.innerText = "New Inner text";
// div_r.textContent = "New Inner Text";
