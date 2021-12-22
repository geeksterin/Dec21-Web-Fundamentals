Dec-22

Q1. What is nesting and ladder?
-> Nesting is an if inside another if/else or also like for inside another for (loop).
-> Ladder is an if followed by multiple else if.

Q2. What is boolean?
-> Boolean is a data type which contains true or false values. We sometimes also refer as 0 -> false or 1 -> true.

Q3. What is difference between = vs == vs ===?
-> (Assignment operator) = is for assignment.
-> (Comparison operator / equality operator)== is for comparing the data value.
-> (Strict comparison operator / strict equality operator) === is for comparing the data value as well as data type.

1. Boolean operators.
-> Boolean OR (||)
-> Boolean AND (&&)

1.5 Checking the data type.
typeof operator
typeof "ABCD"; -> 'string'
typeof "12345" -> 'string' because the 12345 is written in quotes.
typeof 12345; -> 'number'
typeof true; -> 'boolean'

2. DataType conversion.
-> parseInt(), parseFloat() -> Comverting from String input to a number output.

2.1 Comparison operator ===
"1" == 1; -> true.
-> Checks for data values as well as the data type.

2.1 String concatenation.

-> 10 + 10 = 20;
-> "10" + "10" => "1010";
-> "abc" + "def" => "abcdef";

3. Conditionals (switch)
(Check if a character is a vowel or a consonant).
-> If else ladder can be converted to a switch conditional when we are comparing a variable (expression) with some values in an if, else if fashion.
-> If we are comparing greater than or less than, then it is better to use if else ladder only.


4. Arrays
-> Collection of Data.
-> Indexing starts from zero.
-> To define an array, we use square brackets. []
-> It is not a separate datatype, typeof an array is object.
-> You can also have nesting in an array.
-> It is dynamic in nature (WRT size).
-> Create (push), Read, Update and pop.

Assignment:
create an array using .push with prompt and also using parseInt();
-> Take three numbers and find max. (Using arrays)
-> Math.max(); //For further reading.


Next Session.
5. Object.
-> Create, Read, Update, Delete, etc. etc.

6. constants with objects and arrays.