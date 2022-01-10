flexbox -

The Flexbox Layout (Flexible Box) module (a W3C Candidate Recommendation as of October 2017) aims at providing a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic (thus the word “flex”).

The CSS3 flexbox is used to make the elements behave predictably when they are used with different screen sizes and different display devices. It provides a more efficient way to layout, align and distribute space among items in the container.

- main axis – The main axis of a flex container is the primary axis along which flex items are laid out. Beware, it is not necessarily horizontal; it depends on the flex-direction property.

- main-start | main-end – The flex items are placed within the container starting from main-start and going to main-end.

- main size – A flex item’s width or height, whichever is in the main dimension, is the item’s main size. The flex item’s main size property is either the ‘width’ or ‘height’ property, whichever is in the main dimension.

- cross axis – The axis perpendicular to the main axis is called the cross axis. Its direction depends on the main axis direction.

- cross-start | cross-end – Flex lines are filled with items and placed into the container starting on the cross-start side of the flex container and going toward the cross-end side.

- cross size – The width or height of a flex item, whichever is in the cross dimension, is the item’s cross size. The cross size property is whichever of ‘width’ or ‘height’ that is in the cross dimension.

display: flex is applied on the parent !!!

```
display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  align-items: center;
```

flex-grow

- how to write media queries between 2 widths

flexbox article - https://css-tricks.com/snippets/css/a-guide-to-flexbox/
