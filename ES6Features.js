// Object Freee

/*
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

*/

// Set Default Parameters
const increment = (number, value = 1) => number + value;

// using the rest parameter

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

sum(4, 5, 6, 7)

// apply() in ES5

var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);

console.log(maximus);

// spread operator in ES6

const otherArr = [6, 89, 3, 45];
const maximus1 = Math.max(...otherArr);

console.log(maximus1);

// copy elements of array into another using spread oepratpr

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);

// ES5

const user = { name: 'John Doe', age: 34 };

const name = user.name; // name = 'John Doe'
const age = user.age; // age = 34

// ES6
const { name1, age1 } = user;

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const {today,tomorrow} = HIGH_TEMPERATURES;

console.log(HIGH_TEMPERATURES.tomorrow)

// Only change code above this line

// ES6 - Destructuring Assigbment to assign variables from Objects

const {name: userName, age: userAge} = user;
// userName = 'John Doe', userAge = 34


// Destructuring Assignment to assign variable

const LOCAL_FORECAST = {
  yesterday: {low: 34, medium: 50, high: 80},
  today: {low: 30, medium: 48, high: 61},
  tomorrow: {low: 45, medium: 70, high: 100},
};

const {tomorrow: {low: lowTomorrow, high: highTomorrow}} = LOCAL_FORECAST;

console.log(lowTomorrow, highTomorrow);

// Using Rest Parameter to reassign array elements

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [a, b, ...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arrfinal = removeFirstTwo(source);

// pass an Object as a Function's Parameters

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({max, min}) => (max + min) / 2.0; 
// Only change code above this line

const half2 = (stats) => (stats.max + stats.min) / 2.0;


const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  for (let obj in arr) {
    failureItems.push(
      `<li class="text-warning">${arr[obj]}</li>`
    );
  }
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);

console.log(failuresList);

// Write Consise Object Literal Declarations Using Object Property Shorthand

// ES5
const getMousePosition = (x, y) => ({
  x: x,
  y: y,
});

// ES6

const getMousePositionEasy = (x, y) => ({x, y});

// Write concise declarative functions with ES6
const person = {
    name: "Taylor",
    sayHello() {
      return `Hello! My name is ${this.name}.`;
    }
  };

  // ES5

function SpaceShuttle(targetPlanet) {
    this.targetPlanet = targetPlanet;
}

let newzeus = new SpaceShuttle("Jupiter");

console.log(newzeus);


var SpaceShuttles = function(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
var zeus = new SpaceShuttles('Jupiter');

console.log(zeus);

// ES6 - Using class Syntaz to define a Constructor Function
// constructors are used to create new objects

class SpaceShuttler {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}

const finalzeus = new SpaceShuttler("Venus");

console.log(finalzeus);

// getters and setters

// convention to preced the  private variables with .___

class Thermostat {
    constructor(temperature) {
        this.__temperature = temperature;
    }
    // getter
    get temp() {
        return ((this.__temperature - 32) * (5/9));
    }
    // setter
    set temp(celcuisTemp) {
        this.__temperature = celcuisTemp;
    }
};

let canTemp = new Thermostat(72);

console.log(canTemp.temp);


// JavaScript Promise

// like it sounds a promise to do something, asymchronously

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
    }
  
  makeServerRequest.then(result => {
    console.log(result);
  })

  makeServerRequest.catch(error => {
    console.log(error);
  })
});




