Create an Array

```
let fruits = ['Apple', 'Banana']

console.log(fruits.length)
```

Access an Array item using the index position

```
let first = fruits[0]
// Apple

let last = fruits[fruits.length - 1]
// Banana
```

Add an item to the end of an Array

```
let newLength = fruits.push('Orange')
// ["Apple", "Banana", "Orange"]
```

Remove an item from the end of an Array

```
let last = fruits.pop() // remove Orange (from the end)
// ["Apple", "Banana"]
```

Remove an item from the beginning of an Array

```
let first = fruits.shift() // remove Apple from the front
// ["Banana"]
```

Add an item to the beginning of an Array

```
let newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"]
```

Find the index of an item in the Array

```
fruits.push('Mango')
// ["Strawberry", "Banana", "Mango"]

let pos = fruits.indexOf('Banana')
// 1
```

- push, pop, shift, unshift, indexOf, join
  string
- split

assignment -

'''
const matrixOne = [
[4 - [0][0], 3 - [0][1], 2, 4],  
 [9 - [1][0], 1 - [1][1], 5, 6],
[2, 7, 9 - [2][2], 8],
[8, 5, 2, 0 - [3][3]],
];
'''
martrixOne[i][j] // where i === j

const matrixOne = [
[4, 3, 2, 4],
[9, 1, 5, 6],
[2, 7, 9, 8],
[8, 5, 2, 0],
];

4+1+9+0

return sum of elements of diagonal from top left to bottom right
