Feb-02

1. const -> Constant. Create once never update
-> It behaves like let in almost all situations. But the only difference is that a const can not be updated. Whereas let can be updated.
-> Const is also block scoped.

2. Hoisting
-> The behavious of JS to put all the declaration at the top of it's scope!

3. What is Synchronous?
-> Execute step by step, will not move to the next line unless the current is completed.

4. Asynchronous JS ->
Methods and Techniques to make JS do things parallely (under the hood it is still synchronous).

5. setTimeout ->
Call the callback after atleast x milliseonds.
6. setInterval -> 
Keep on calling the callback after every x milliseconds atleast.

7. clearTimeout / clearInterval -> Stop and destroy the created timeout/interval.



Assignment:
Create a 5 minute timer. Similar to Google UI.
Additional Points if you are able to implement that progress bar looking thing.

Further Reading:
-> Temporal Dead Zone (TDZ) -> Hoisting for let and const.