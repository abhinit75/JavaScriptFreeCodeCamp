// Creating Methods on an object

let duck = {
    name: "Aflac",
    numlEGS: 2,
    sayName: function() {
        return "The name of the duck is " + duck.name + ".";}
    }
duck.sayName()

// this method

let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {
        return "This do has " + this.numLegs + " legs.";
    }
}


// Define a constructor function

// constructors are similar to classes expcet they are Notification. 
//   They act like blueprints to create new objects

function Dog() {
    this.name = "Albert";
    this.color = "Brown";
    this.numLegs = 4;
}

let hound = new Dog();

// tp be resuable
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

// verify an object's constructor with instanceof

// _____ instanceof ______

// Use Prototype properties to reduce duplicate code
//  Properties in the prototype are shared among ALL instances of Bird.

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numlegs = 4;
  
  
  
  // Only change code above this line
  let beagle = new Dog("Snoopy");


let ownProps = [];
let prototypeProps = [];

// Only change code below this line

for (let properties in beagle) {
  if (beagle.hasOwnProperty(properties)) {
    ownProps.push(properties);
  } else {
    prototypeProps.push(properties)
  }
}

console.log(beagle);


// Constructor Property
//   located on object instances

console.log(beagle.constructor === Dog);


// Change the prototype to a new Object
// Remember to Set the Constructor Property when Changing the PrototypePassed
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }

};

console.log(beagle.constructor === Dog);

// Object's Prototype coemes directly from the constructor function that created it.
Dog.prototype.isPrototypeOf(beagle);

// Understand the Prototype chain
//   all objects with a few exceptions have a prototype which itself is an object

// using getters/ setters with prototype

let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

let admin = {
  __proto__: user,
  isAdmin: true,
};

console.log(admin.fullName);

// setter triggers!
admin.fullName = "Alice Cooper";

console.log(admin.fullName); // state of admin modified
console.log(user.fullName); // state of user unmodified



let f = function () {
  this.a = 1;
  this.b = 2;
}

let o = new f();

f.prototype.b = 3;
f.prototype.c = 4;

console.log(f.prototype);

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);

console.log(Object.prototype.isPrototypeOf(beagle.prototype));

//  https://www.thecodeship.com/web-development/methods-within-constructor-vs-prototype-in-javascript/

// Inheritance (DRY):

function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
};



function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

Dog.prototype = Object.create(Animal.prototype);
// Only change code below this line
Dog.prototype.constructor = Dog;
Bird.prototype.constructor = Bird;
// Inherit behaviours from a supertype

//  Animal in the above example is a super type

// can create instance of supertype using Object.create(supertype)

// Only change code below this line
let duck1 = Object.create(Animal.prototype); // Change this line
let beagle1 = Object.create(Animal.prototype); // Change this line

// Set teh child's prototype to an Instance of the Parent
console.log(Animal.prototype === duck1.__proto__);

// Add Methods After Inheritance


// Override Inherited Methods

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line
Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird.";
};
// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());

// Use a Mixin to Add Common Behaviour Between Unrelated Objects
//   Mixin allows other objects to use a collection of functions

let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flyong, wooosh!");
  }
};

let bird = {
  name: "Donald",
  numLegs: 2.
};

let plane = {
  model: "777",
  numPassengers: 524,
};

flyMixin(bird);
flyMixin(plane);

bird.fly();
plane.fly();


// Use Closure to protect Properties within an Object
//   In JavaScript, a function always has access to the context in which it was created. This is called closure


function Bird1() {
  let weight = 15;

  this.getWeight = function() {
    return weight
  }
};

// instead of

function Bird2() {
  this.weight = 15;
  };

// Understand the IIFE (Immediately Invoked Function Expression)
//   a common pattern in JS is to execute a function as soon as it is declared.

(function() {
  console.log("Chirp, chirp!");
})();

// Use an IIFE to create a Module


let funModule = (function() {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
      console.log("Singing to an awesome tune");
    }
  }
  } })();

funModule.isCuteMixin(duck);  
console.log(duck.isCute());