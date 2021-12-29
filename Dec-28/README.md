Dec-28
What is HTML?
-> Hyper Text Markup Language.
-> Structure of a web page
-> A document designed to be (rendered) displayed.
-> It is a document consisting of various tags.
-> it is a case insensitive language.
-> It allows nesting. (We can have tags inside other tags).

What is a Markup Language?
-> We have tags in it.
-> Formatting the content/Structuring the content.
-> Language to present our content.
-> This is used to make the content visually understandable. (Meanwhile being understandable by the machine).

-> HTML and XML -> Extensible Markup Language
-> XML is used to store/strucure the network data / meta data / additional data. (The browser will not be rendering this).
-> Browser will render (display) HTML files.

-> Tex (LaTex) -> Structure any mathematical content.

Q. What is a tag?
-> It helps to structure the document.
-> Tag is written between <>.
Example: <html>, <body>, <head>, <script>, <title>, <div>, <link>, <img>, <ul>, <li>.
-> Tag type is the word written between the angular brackets.

Opening -> <html>, <body> 
Closing -> </html>, </body>

Self closing -> <br />, <hr />, <img />, <input />, <link />, <meta />

&nbsp; -> Non breaking space point. (NOT A TAG, this is referred as an encoded character).

Q. What is the difference between a tag and an element?
-> The content including between the opening and closing tag is called an element.
-> Element = Tag + Content (This CAN include nested tags).
-> Content is actually a part of HTML element. Tag is nothing but the word written between <>.

Atribute -> Properties of a tag. (Simplified version)
-> It is a key value pair which is used to give extension (additional functionalities) to the HTML elements.
-> It will be written in the opening tag only.

1. html
2. body
3. script
4. p
5. h1
6. h3
7. pre
8. br
9. h1 -> h6 h1 is the biggest and h6 is the smallest.
10. hr -> Horizontal row
11. img
12. video / audio
13. input


To go to the parent directory, we use `../`. To go to a child directory, we use `<directory_name>/`.

To go 2 level up. `../../`
To 3 parent up `../../../`

-> https://www.w3.org/
-> https://developer.mozilla.org/en-US/
-> https://socialblade.app/


Assignment 1 - Create a landing page. (Landing Page -> It is the first page that is shown whenever someone visits your website.)

Assignment 2 - Create an Geekster Admission Form.
-> You have to utilize different different input types.

NO CSS Files.



After Hours:

GP nth Term

-> GP (Geometric Progression)
-> Start with a, mulitply r.

-> a, ar, ar^2, ar^3, ar^4, ar^5

To get nth term. (3rd term) -> ar^2
To get nth (nth) -> ar^n-1
-> a * Math.pow(r, n-1);

2 to the power 5-> Math.pow(2, 5);
for(i=0; i<5; i++) { num = num * 2};

-> for(i=0; i<n-1; i = i+1) {num = num*r}; OP -> a*num;

-> https://www.youtube.com/watch?v=OGEZn50iUtE