// Arrays

// Methods
/*
arr.push(...items) – adds items to the end,
arr.pop() – extracts an item from the end,
arr.shift() – extracts an item from the beginning,
arr.unshift(...items) – adds items to the beginning.
*/

// splice

let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // from index 1 remove 1 element

console.log(arr);

let arr1 = ["I", "study", "JavaScript", "right", "now"];
// remove 3 first elements and replace them with another
arr1.splice(0, 3, "Let's", "dance");

console.log(arr1);

let arr2 = ["I", "study", "JavaScript"];
// from index 2
// delete 0
// then insert "complex" and "language"
arr2.splice(2, 0, "complex", "language");

console.log( arr2 ); // "I", "study", "complex", "language", "JavaScript"

// negative Indexs perform actions from end of the list

// arr.slice(start, end)

// arr.conact(arr1, arr2) --> adds two arrays together (joins them)

// iterate: forEach
arr.forEach(function(item, index, array) {
    console.log(item, index, array);
});


// searching in array
/*
arr.indexOf
arr.lastIndexOf
arr.includes
*/

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  
  let user = users.find(item => item.id == 1);
  
console.log(user.name); // John


// arr.findindex works similarly but returns the index value

// filter  


  // Setup
var collection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };

  /*
  You start with an updateRecords function that takes an object like collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire object.
If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
If value is an empty string, delete the given prop property from the album.
Note: A copy of the collection object is used for the tests.
*/
  
  // Only chawnge code below this line
  function updateRecords(object, id, prop, value) {
    for (let record in object) {
      if (record == id) {
      }
    }
    return object;
  }

  updateRecords(collection, 5439, 'artist', 'ABBA');

  function property_looper(object, prop, value) {
      
  }