//Objects

console.log("Hi");

// An object is written within {}.

/*
var a = {
  'jhdfjhsdgfsdkfgd': "ffffffffff",
  'another_keyskjgdfjhgfhjd': "Another Value",
  'geeks': 65
};

*/

//console.log(a);


//var a = []; //Array


//console.log(typeof a);

//Student -> name, id, class, section, age, marks, hometown.


var student = {
  'name': "Aniket Verma",
  'id': 1,
  'class': "Dec21WebFundamentals",
  'section': "Alpha",
  'age': 20,
  'marks': 100,
  'hometown': "Lucknow"
};

//var a = prompt("Enter New Name");
//student['name'] = a;
//student['blood_group'] = "B+";


//1 way to access an Object Property.

/*
console.log(student);
console.log(student['hometown']);

student['hometown'] = "Himachal";

console.log(typeof student['hometown']);
console.log(student['id'], student['hometown']);
*/


//2nd Way to access is by using dot (.) -> Specially for object.

/*
console.log(student.hometown);
console.log(student.name);
*/


var student = {
  'name': "Aniket Verma",
  'id': 1,
  'class': "Dec21WebFundamentals",
  'section': "Alpha",
  'age': 20,
  'marks': 100,
  'hometown': "Lucknow",
  'a': "Something"
};

//What if I want to ask the user to enter which property needs to be found.

//var a = prompt("What property do you want?");
//alert(student[a]);
//alert(student.a); //❌
// ❔-> student.a => student['a'];

//The key is stored in a variable (var a). Then I am dynamically accessing it from the object.



/*

const another_student = {
  'name': "Harshit",
  'hometown': "Lucknow"
};

//Object.freeze();
//Object.freeze(another_student);

console.log(another_student.hometown);

//Delete any element from given key;
delete another_student.hometown;

console.log(another_student);

*/




var g_class = {
  'name': "Dec21WebFundamentals",
  'instructor': {
    'name': "Aayush Sinha",
    'subject': "MERN"
  },
  'students': [{
      'name': 'Ujjwal',
      'marks': 80,
    },
    {
      'name': 'Anshul',
      'marks': 89,
    },
    {
      'name': 'Lasya',
      'marks': 77,
    },
    {
      'name': 'Ayush',
      'marks': 70,
    },
    {
     'name': 'Gourav',
     'marks': 90,
    },
    {
     'name': 'Niladri',
     'marks': 85,
    },
    {
     'name': 'Ugrasen',
     'marks': 87,
    }
  ],
};

console.log(g_class.instructor.name);
console.log(g_class['instructor']['name']);
console.log(g_class.students[5].name);




































