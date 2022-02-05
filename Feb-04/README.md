Feb-04

1. const for objects and arrays.
-> We cannot redeclare or re assign once created.
-> Object.freeze -> Cannot EDIT / CREATE / DELETE any Object property.

-> Object.seal -> CANNOT CREATE / DELETE any object property but can UPDATE.


2. New -> Instantiate (Create) an object.

3. JSON -> JavaScript Object Notation.
-> This is a standardized way of structuring / organizing of data for data transfer puposes.

4. String templating (ES6) -> We can use variables directly inside a string.

let name = "Aayush Sinha";
let marks = "40";

let str = `${name} has scored ${marks} out of 100.`;
str = name + " has scored " + marks + " out of 100.";

5. Context (this keyword);
-> This is a pointer. It points to execution context (context of execution).


Assignment :
-> Create an image gallery and implement search functionality. (Reuse Jan 18 code).
-> If we click on one of the images, it should show full screen. 
-> Use unsplash API (https://unsplash.com/documentation#creating-a-developer-account)