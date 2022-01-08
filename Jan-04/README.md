finish game till level 14 - https://flukeout.github.io/
write ans as:
1 - "plate"
2 - "bento" ....
try to finish more than 14 if possible

Descendant Selector :
The descendant selector matches all elements that are descendants of a specified element.

The following example selects all <p> elements inside <div> elements:

```
div p {
  background-color: yellow;
}
```

Child Selector (>) :
The child selector selects all elements that are the children of a specified element.

The following example selects all <p> elements that are children of a <div> element:

```
div > p {
  background-color: yellow;
}
```

Adjacent Sibling Selector (+) :
The adjacent sibling selector is used to select an element that is directly after another specific element.

Sibling elements must have the same parent element, and "adjacent" means "immediately following".

The following example selects the first <p> element that are placed immediately after <div> elements:

```
div + p {
  background-color: yellow;
}
```

General Sibling Selector (~) :
The general sibling selector selects all elements that are next siblings of a specified element.

The following example: selects all <p> elements that are next siblings of <div> elements:

```
div ~ p {
  background-color: yellow;
}
```

p + div{
color: red;
}

bye + x{
color: red;
}

hello > p, p + x

<hello>
    <p>
    <bye>
    <x> //1 
    <y> 
    <z>
    <x> //2
    <x> //3
    <x> //4
    <x> //5
