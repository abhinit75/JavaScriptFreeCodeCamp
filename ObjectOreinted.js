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




