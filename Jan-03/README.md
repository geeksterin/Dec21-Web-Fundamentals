Jan-03
CSS

Q. What is CSS?
- Cascading Style Sheet.
- Gives styling.
- Control the style and layout
- Makes website attractive
- Is a language.
- Used to design
- Used to make a website responsive.
- Used to make it look good.
- It will extend the style.

- CSS is a language which we use to describe/define how the HTML elements are going to be rendered on the viewport. (In extension/addition, we can also describe how they will be rendered on other media such as a printed document, audio only document).

- We are currently running CSS3. (version 3).


1. Ways of adding CSS
- inline CSS -> Because it is written in the same line. Basically any style written in the style attribute of an HTML element is called inline. (This should be your LAST approach).
- Internal CSS -> Giving the CSS in the HTML page itself but in a separate style tag. (This is the medium approach, not the worst, but not the best!)
- External CSS -> Because we are writing the CSS in an external file (Extension is .CSS). This is the best way of adding style to your webpage. This is good because it keeps the code clean and readable.

Different types of relations:
- stylesheet
- author
- icon
- shortcut
- license
- manifest
- tag
-> https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types


2. Different Selectors (What is a selector) -> CSS style properties written with the curly brackets will be applied to the element(s) matching the selector.
p {
    color: green;
}

<selector> {
    <style property>: <value>;
}
- Type Selector
- ID Selector -> This is supposed to be unique. Not two elements can have same ID and one element cannot have multiple IDs.
- Class Selector - This selector says that any element having the class name will have that style. Any element can have more than one classes, multiple elements can have same class name.
- Atrribute Selector - 

4. Properties:
- display: none;
- border-width / border-style / border-color;


3. Specificity (Priority)
- Semantics -> Better code radability. It is important because most of the times your code will be seen/read/worked on by other engineers. So, you make it better to understan in less time.


Assignments:
1. Add the CSS to your landing page. -> NO INLINE / NO INTERNAL / Give External CSS.
2. Create a Calculator UI. (No need of any functionality). The task is to give good looks. (It has a display screen <p> and then it has buttons. That we can follow table, or we can follow inline br)