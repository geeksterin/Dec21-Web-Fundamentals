Dec-23

Q1. What is index of an array?
-> position of the elements (0, 1, 2, 3, etc).
-> arr[1.3]; ✔ -> It will not crash
-> arr['a']; ✔ -> It will not crash
-> We should not be using array indices with non integer values!
-> Position of the elements (having integer values). Starting from zero and going upto length-1.

Q2. Where to use array vs where to use object.
-> Array:
--> When the order needs to be maintained.
--> When we need to store similar type of data.
--> Search and Sorting purposes.
--> Where we don't care about custom keys much.
--> When we want to simplify the insertion and deletion (push and pop).
--> Where our main requirement is for just insert and loop. (Looping is fast).

-> Object:
--> Where we want to access data using keys.
--> When we want to have keys and values as properties.
--> Where we want customized keys.
--> Where we don't want duplication.
--> Where we don't want to loop.
--> Where we just store properties of something and access it randomly.
--> Store different types of properties.


P1.
var aaa = [];
aaa[10] => "Something";

console.log(aaa);
(11) [empty × 10, 'Element 122423420']
10: "Element 122423420"
length: 11


1. Object.
-> In JS it is a data type.
-> It stores key value pair.
-> 

-> Create, Read, Update, Delete, etc. etc.

2. constants with objects and arrays.
-> Object.freeze

3. Nesting of Objects.

4. Loops
-> When we do repetition
-> Multiple iterations (looping)
-> Do something multiple times.

Assignment1:
-> Check from the objects.js file g_class. Give the list of students which have greater than or equal to 85 marks.

Assignment2:
-> Write a program to print all even numbers less than or equal to n (n is an input which we take using prompt).

Assignment3:
-> Write a program to take an input from the user (num) and check whether it is a prime number or not.