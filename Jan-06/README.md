Jan-06

1. Specificity - Priority which style will be applied.
- Specificity is a technique using which the browser (or the rendering engine) will decide which CSS property values are more useful / relevant and apply that to the selected HTML element.
- Rendering -> Display the HTML document with the Style applied.
- Rendering Engine is the software which will do the rendering (Browser)


1. Inline will have highest priority, then Internal which has higher priority than external.
2. Im the same level of CSS, whatever is written after will override the previous one.
3. In different types of selectors:
- Universal selector has lowest specificity
- After that, we have type selector.
- After this, we have class selector.
- Attribute selctors.
- Pseudo class.
- The highest is ID selector.
- !important rule is the exception here

2. Pseudo Selectors (Pseudo Classes and Pseudo Elements)
- It means fake or false.
- These are predefined.
- Pseudo selector is kind of like a false selectoe because instead of it applying on the element directly. It is applied on the element in a specific state.
- Pseudo classes (:) and Pseudo elements (::).
- Pseudo classes:
- :hover
- :active
- :focus
- :checked
-> https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes

- Pseudo elements:
-- ::first-letter
-- ::first-line
-- ::selection
-> https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements

Assignment:
1. Make a page looking like the page of the book.











3. Box Model
- Padding vs Margin - When to use What?

4. Positioning
- Position property: relative, fixed, absolute, sticky, static
- When to use position fixed vs when to use position sticky.
- Add a nav bar to website.

5. Creating a Google Search Page clone. / Create a Landing Page / Create an ecommerce clone (Myntra or something). / Create a YouTube clone or something
6. Add a contact me button.
7. Units of Measurement. (px, %, vw, vh, em, rem)