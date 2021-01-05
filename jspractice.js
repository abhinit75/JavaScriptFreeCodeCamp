/*
'use strict'
- used to make code function the mdoern way
-  can be scoped within a function



const { doDuring } = require('async');


// Variables

let message = "I like Pizza", age = 25;
console.log(message, age);

// declaring twice creates an error
// Use camelCase
// Case matters

let userName = "Abhi07"

// constants use const
// common, hard-to-remember constants are written with capital letters (used for hard-coded values)

const year = 2020;
const COLOUR_RED = "#F00";


// Data Types
// JavaScript is dynamicall typed; variables are not bound to data types

// BigInt to store large numbers
//  - acheieved by adding an n at the end of the number

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

// Strings
//  1) Double quotes - "Hello"
//  2) Single Quotes - 'hello'
//  3) Backticks - `hello ${str}`; -> can be used to embded variables and expressions

let name = "John";
// embed a variable
let sentence = `Hello ${name}`;
console.log(sentence);

// boolean
let nameFieldCheckd = true;
let ageFIeldCheck = false;

let isGreater = 4 > 1;

// null: represents nothing

// undefined = value is not assigned

// typeof(x) -> returns type of x

// ++ -- 


// Bitwise operators
// AND (&)
// OR (|)
// XOR (^)
// Not (~)
// Left Shift (<<)
// Right Shift (>>)
// Zero-Right-Shift (>>>)

for (a = 1, b = 3, c = a * b; a < 10; a++) {
    console.log(c);
   };

 // Comparisons
 // not equal: a != b; ==; === (comapres type as well)

// Conditional Branching

if (year == 2021) {
    console.log("fuck it")
} else {
    console.log("tis ma year")
}

// ternary operatir

let accessAllowed = (age > 18) ? true : false;
console.log(accessAllowed);

let ager = 1000;
let textm = (ager < 3) ? 'Hi, baby!' :
  (ager < 18) ? 'Hello!' :
  (ager < 100) ? 'Greetings!' :
  'What an unusual age!';

console.group(textm);

// logical Operators

// OR (||) -> finds the first truthy value
let result = true || true
console.log(result);

// And && -> both values must be true
//  AND has higher precedence than OR

// NOT ! -> retursn opposite


// Nullist Coalescing operator
//  Can be used to provide a default value (if user is defined them return user else return "Anonymous")
// || returns thes first truthy value and ?? returns the first defined value

let user;
console.log(user ?? "Anonymous");

// Loops

// while
let x = 10
while (x > 5) {
    console.log(x)
    x--
} 

// do while executes the condition
const prompt = require('prompt-sync')();

let sum = 0;

while (true) {

  let value = prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
console.log( 'Sum: ' + sum );

// Switch case 
/*
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}


// functions

function showMessage() {
  console.log("I love Pizza")
};

showMessage()

// parameters can have default values

// function expressions

// let func = function() {
// };

// arrow functions

let sums = (a, b) => a + b;
console.log(sums(10, 24));

let sums2 = function(a, b) {
  return a + b;
}

console.log(sums2(10, 24));

// one argument
let double = n => n * 2;
console.log(double(5));

// can be used for multiline functions


// objects
//let user = new Object(); // "object constructor" syntax
let user1 = {
  name: "John",
  age: 30
};  // "object literal" syntax
console.log(user1.name)

user1.isAdmin = true

// delete user.age;


// Square brackets

// set
user1["likes birds"] = true;

// get
console.log(user1["likes birds"]);

// delete: delete user["likes birds"];



// function to make objects

function makeUser(name, age) {
  return {
    name: name,
    age: age,
  };
};

let user2 = makeUser("Abhi", 18);

console.log(user2);

// property in object

for (key in user2) {
  console.log(user2[key]);
}

let clone = {};

for (let key in user2) {
  clone[key] = user2[key]
}

clone.name = "Pete"
//console.log(clone);
//console.log(user2);

// Object.assign
let clone2 = {}

let user3 = {
  name: "Bob",
  age: 30,
  pet: "Dog",
}

Object.assign(clone2, clone, user3)

console.log(clone2);

console.log(Object.assign({}, user3))


let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

console.log(clone);

user.sizes.width++;
console.log(clone.sizes.width);

*/

let user = {
  name: "Abhi",
  age: 18,
  school: "Uwaterloo",
}

user.sayHi = function() {
  console.log("Hello! " + this.name);
}

user.sayHi();

// calling this without an object -> produces undefined

/*
Functions that are stored in object properties are called “methods”.
Methods allow objects to “act” like object.doSomething().
Methods can reference the object as this.
*/

// Constructor, operator "new"
// named using a capital letter
// should be executed only with "new" operator 
// easier to implement reusable object creation code

function User(name) {
  this.name = name;
  this.isAdmin = false;
  this["likes birds"] = true;
}

let newUser = new User("Jack");

console.log(newUser.name);
console.log(newUser.isAdmin);
console.log(newUser["likes birds"]);

// Optional chaining
//   only works for declared variables (let/var/const) or function parameters

let user2 = {}; // user has no address

// object within a object
console.log(user?.address?.street); // undefined (no error)

// Examples

let userAdmin = {
  admin() {
  console.log("I am admin");
  } 
};

let userGuest = {};

userAdmin.admin?.();
userGuest.admin?.(); // returns nothing


let otheruser1 = {
  firstName: "John"
};

let otheruser2 = null; // Imagine, we couldn't authorize the user

let key = "firstName";

console.log( otheruser1?.[key] ); // John
console.log( otheruser2?.[key] ); // undefined

console.log( otheruser1?.[key]?.something?.not?.existing); // undefined

// Symbols
//   represents an unique identifier
//   value can be created using Symbol()
//   can be used for hidden properties

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2);

// symbol does not covert to string by itsefl

console.log(id1.toString());
console.log(id1.description);

// Symbols in an object literal:
//  skipepd by for...in
//  Object.keys(user) also ignores
//  Object.assign copies boith string an symbol properties.


// Global Symbols

// read from the global registry
let id = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");

// the same symbol
console.log( id === idAgain ); // true


//let id = Symbol("id");

let someuser = {
  name: "John",
  [id]: 123 // not "id": 123
};

let nextUser = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

// conversions demo

console.log(nextUser);
console.log(0 + nextUser);
console.log(nextUser + 500);


function population(country, pop) {
	return {
		country: country,
    pop: pop,
    toString: function () {
			return "[Population " + 
				"\"" + country + "\" " +
				pop +
			"]";
		}
	}
}

var america_pop = population("USA", 350e6);
var mexico_pop = population("Mexico", 200e6);
var canada_pop = population("Canada", 200e6);

console.log(america_pop); // [object Object]

var north_america_pop = america_pop + mexico_pop + canada_pop;

console.log(north_america_pop); // [object Object][object Object][object Object]


function population(country, pop) {
  this.country = country,
  this.pop = pop

  return {
  toString: function () {
    return "[Population " + "\"" + country + "\" " + pop +"]";
  }
}
};

var americana_pop = population("USA", 350e6);
console.log(americana_pop);

// Data Types

// Methods of Primitive

// uppercase
let str = "Hello";
console.log(str.toUpperCase());

// rounding number to certain precision

let n = 1.23456
console.log(n.toFixed(2));

// Numbers
console.log(Object.is(0, -0));

// Parseint and ParseFloat
console.log(parseInt('100px'));
console.log(parseFloat('100px'));

console.log(parseInt('OxFF', 16));


// Strings

let guestList = "Guests: \n * John\n * Pete\n * Mary";
console.log(guestList);

// .length property

console.log(str[3]);

// can also iterate iver characters using for..of

for (char of "Hello") {
  console.log(char);
}

// Strings are immtable

// Changecase:
//  .toUpperCase() & .toLowerCase()

// Searching for a substring

let str1 = 'Widget with id';

console.log(str1.indexOf('id')); // indexof(substr, pos)

// bitwise nOT Trick

let str3 = "Widget";

if (~str3.indexOf("Widget")) {
   console.log('Found it!'); // works
}

// better: .includes, .startsWith, .endsWith

let str4 = "stringify";

console.log(str4.slice(2));
console.log(str4.slice(-4, -1));

console.log(str4.substring(5, 2)); // does not allow negative letters
console.log(str4.substr(1, 4));
// 

// Arrays

// let arr = new Array();
// let arr =  [];

let fruits = ["Apple", "Orange", "Plum"];

console.log(fruits[0]);


// An array can store elements of any type (even objects)

// mix of values
let arr2 = [ 'Apple', { name: 'John' }, true, function() { console.log('hello'); } ];

// get the object at index 1 and then show its name
console.log( arr2[1].name ); // John

// get the function at index 3 and run it
arr2[3](); // hello

// Array Methods

// Ending methods: push, pop

let fruitsbasket = ["Apple", "Orange", "Pear"];

console.log( fruitsbasket.pop());
fruitsbasket.push("Banana");
console.log(fruitsbasket);

// Starting Methods: Shift, UnShift
console.log(fruitsbasket.shift());

// Unshift and Push can add multiple elements to an arrya
fruitsbasket.push("Pineapple", "Watermelon");
fruitsbasket.unshift("Papaya", "Dragonruit");
console.log(fruitsbasket);

// Generally don't use for in... for arrays

for (let fruit of fruitsbasket) {
  console.log(fruit);
}

// array can be cleared: arr.length = 0

let car = {
  name: "Ferrari",
  model: "LaFerrari",
  year: 2020,
}

console.log(car);

// Multidimensional Arrays

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

console.log(matrix[2][2]);

// toString --> converts array elements into string

let styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");

styles[1] = "Classics";
console.log(styles);
/*
const prompt = require('prompt-sync')();

function sumInput() {
  let numbers = [];
  while (true) {
    let val = prompt("Please enter a number ");
    if (parseInt(val) == NaN) {
      break
    } else {
      numbers.push(parseInt(val));
    }
  }
  return numbers
}

sumInput()

*/





// Object-Oreinted Programming

// Encapsulation

let employee = {
  baseSalary: 30_000,
  overTime: 10,
  rate: 20,
  getWage: function () {
    return this.baseSalary + (this.overTime * this.rate);
  }
};

console.log(employee.getWage());

// Abstraction

// Inheritance

// Polymorphism



