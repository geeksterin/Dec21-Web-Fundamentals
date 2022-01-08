covered
default position is static - means follow normal document flow

relative - same as static but you can change

- top, left, right or left - relative to its own place

absolute - absoultely positions inside some parent container
(nearest parent having "position" property)

fixed is positioned relative to html document
is always fixed to one position

sticky - similar to relative and becomes fixed when you scroll

box sizing
by default it is set to content-box - which means the width/height
that we set is for content box and not the element
by changing it to border box we include the padding etc to height
and width

- - { box-sizing: border-box;}

media queries : -

```
@media (max-width: 700px) {
  .border-box {
    height: 300px;
    width: 40px;
  }
}
```

https://web.dev/viewport/

Homework
q1- if an element has position absolute (relative to html doc) will the color property of any parent be inherited by it ?

q2 - what happens if you give parent1 position - absolute then give child position relative then give nested child poistion absolute

q3 - will sticky/fixed work woth overflow hidden

q4 - main difference bw sticky and fixed
