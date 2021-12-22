//This is vowels.JS

//Write a script to check whether the character is a vowel or a consonant.
//-> A, E, I, O, U.


//-> Introducing boolean OR. (||)

//console.log(true || true);
//console.log(true || false);
//console.log(false || true);
//console.log(false || false);


var char = prompt("Enter any character");

/*
if((char == "a") || (char == "A")) {
 alert("It is a vowel");
} else if((char == "e") || (char == "E")) {
 alert("It is a vowel");
} else if((char == "i") || (char == "I")) {
 alert("It is a vowel");
} else if((char == "o") || (char == "O")) {
 alert("It is a vowel");
} else if((char == "u") || (char == "U")) {
 alert("It is a vowel");
} else {
 alert("It is a consonant");
}
*/


switch(char) {
  case 'a':
  case 'A':
    alert("It is a vowel");
    break;
  case 'e':
  case 'E':
    alert("It is a vowel");
    break;
  case 'i':
  case 'I':
    alert("It is a vowel 1");
    break;
  case 'o':
  case 'O':
    alert("It is a vowel 2");
    break;
  case 'u':
  case 'U':
    alert("It is a vowel");
    break;
  default:
    alert("It is a consonant");
    break;
}
