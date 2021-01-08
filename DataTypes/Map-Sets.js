// Map()

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);
  
  // iterate over keys (vegetables)
  for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // cucumber, tomatoes, onion
  }
  
  // iterate over values (amounts)
  for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
  }
  
  // iterate over [key, value] entries
  for (let entry of recipeMap) { // the same as of recipeMap.entries()
    console.log(entry); // cucumber,500 (and so on)
  }
  

  // SET()

  let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
console.log( set.size ); // 3

for (let user of set) {
  console.log(user.name); // John (then Pete and Mary)
}

// Objects.keys, values, entries

let prices = {
  banana: 2,
  pineapple: 3.99,
  apple: 3.49,
  watermelon: 5.99,
}

let doublePrices = function() {
  console.log(Object.entries(prices).map(([name, val]) => [name, val * 2]));
}

doublePrices()

// Quick Questions

let salaries = {
  "Abhi": 1_000_000,
  "John": 100_000,
  "Bob": 250_000,
}
console.log(Object.values(salaries).reduce((a, b) => a + b, 0));

