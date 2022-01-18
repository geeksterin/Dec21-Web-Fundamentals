Jan-18

Q. What is a callback?
-> A function that we pass as an argument to the higher order which is then invoked from inside the higher order function.

Q. What is a higher order function?
-> A function that takes another function as a paramter OR a function that RETURNS another function.

1. confirm() -> Similar to alert and prompt. This will create a popup and ask OK or Cancel. Returns a boolean.

2. DOM -> Document Object Model
document -> This is a global object, made available by the browser.

3. BOM -> Browser Object Model
window. -> This is also a global object, this contains the browser stuff!
navigator, frame, screen, history. - Further Reading.

But, DOM itself is a child of BOM.

4. Manipulation -> The process of changing something in a skillful manner.
DOM Manipulation -> The process of changing the HTML elements of the document.

5. document.write -> Writes in the document.

6. el.innerText = "" -> Changes the text content of the element.

7. List of events - https://developer.mozilla.org/en-US/docs/Web/Events

//How to get reference of HTML element in JS.
8. document.getElementByID("") -> Gives a reference to the HTML element by the ID.
9. getElementsByClassName("") -> Returns a HTMLCollection of elements with the same class name!
10. getElementsByTagName("") -> Returns a HTMLCollection of elements with the same tag name (tag type)!
11. getElementsByName("") -> Returns a NodeList of elements with the same name attribute or the ID.
12. querySelector() -> Select the first element based on the CSS Query.
13. querySelectorAll() -> Selects all the elements that matches the CSS query.


2. Object Model?
3. DOM - BOM
4. Examples of DOM Manipulation. (eventlisteners and element object.)

Create an image gallery.
Load images from an Object.
Click on an image, then Zoom that image and show fullscreen.
Create a cross icon.
When I click on the cross Icon. Close that.

Assignment 1:
- Create Instagram feed.
- Create as close looking UI as possible. (Have the main image part done and the top navigation).
- For functionality, I expect when double click on the image, or single click on the heart. Then change color to red.
-- When I click on the red heart, then change color back.