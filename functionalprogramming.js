// Callbacks are functions that are slipped or passed into another function to decide
//   the invocation of that function

// First class functions: all functions that cna be assigned to a variable, passed into another
//   function or returned from another fu ction

// hIGHER ORDER FUNCTIONS: Are functions that take a function as a argument or
//   return a function as a return value

// Lambda: When the functions are passed in to another function or returned from another function, then those functions which gets passed in or returned can be called a lambda.

// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

// understand the hazards of imperative code

// Slice(), Splice() and Split() recap

// Slice() --> copies a given part of an array and returns that copied aprt as a new array.
//  iT DOES NOT CHANGE The original arrau

// array.slice(from, upto but not including)

let arr1 = [5, 6, 23, "hELLOW"]
let slicedArr = arr1.slice(0, 2);

// array.splice()
/*
To remove we need to give index parameter and number of elements to be rempoved
arrray.splice(index, number of elements)
*/


// Avoid Mutations and Side Effects Using Functional Programming

// changing or altering things is called mutation, and the outcome is called a side effect

let fixedValue = 4;

function incrementor() {
    let incrementedVal = fixedValue + 1;
    return incrementedVal;
}


// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (lst, bookName) {
  let newBooklist = [...lst]
  newBooklist.push(bookName);
  return newBooklist;
  
  // Change code above this line
}

// Change code below this line
function remove (lst, bookName) {
  let newestBooklist = [...lst]
  var book_index = newestBooklist.indexOf(bookName);
  if (book_index >= 0) {
    newestBooklist.splice(book_index, 1);
    return newestBooklist;

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
console.log(newerBookList);

// Use the map Method to extract data from an array

// The global variable
var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
    }
  ];
  
  // Only change code below this line
 let ratings = watchList.map(movie => ({
     title: movie.Title, 
     rating: movie.imdbRating,
 }))
  
  // Only change code above this line
  
  console.log(JSON.stringify(ratings));

// using parameter deconstruction:

const ratings1 = watchList.map(({ Title: title, imdbRating: rating}) => ({ title, rating }));


var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
  ];
// What you need [20, 24, 56, 88]

let idArr = officers.map(officer => ({ id: officer.id }));
console.log(idArr);

// The global variable
var s = [23, 65, 98, 5];


// Implement map on a prototype

Array.prototype.myMap = function(callback) {
  var newArray = [];
  // Only change code below this line
  this.forEach(a => newArray.push(callback(a)));
  // Only change code above this line
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});

console.log(new_s);

/* recursion
// The global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback, arr = [], i = 0) {
  return i < this.length
    ? this.myMap(callback, arr.concat(callback(this[i])), i + 1)
    : arr;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});
*/

// Use the filter Method to Extract Data from an array

let filteredList = watchList
    .map(item => {
        return { 
            title: item.Title,
            rating: item.imdbRating};
        })
    .filter(item => {
        return parseFloat(item.rating) >= 8.0;
    });
    
console.log(filteredList);

// Implement a filter method on a prototype

// The global variable
var s1 = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  var newArray = [];

  this.forEach(item => {
          if (callback(item) === true) {
            newArray.push(item) }});

  // Only change code above this line
  return newArray;
}

var new_s1 = s1.myFilter(function(item) {
  return item % 2 === 1;
});

console.log(new_s1)


// .reduce()

function getRating(watchList){
    // Only change code below this line
    let averageRating = watchList 
    .filter(movie => {
        return movie.Director == "Christopher Nolan"
    })
    console.log(averageRating);
    averageRating = (averageRating.reduce((val, movie) => val + parseFloat(movie.imdbRating), 0)/ averageRating.length);
  
    // Only change code above this line
    return averageRating
  }
  console.log(getRating(watchList));


// Use higehr Order Functions map, filter or reduce to Solve a Complex Problem

const squareList = arr => {
    // Only change code below this line
    let posList = arr.filter(num => {
        if (num > 0 && Number.isInteger(num)) {
            return num
        }
    })
    return posList.map(x => x**2);
    // Only change code above this lineå
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);

// Sort an Array Alphabetically using the sort method

function alphabeticalOrder(arr) {
    // Only change code below this line
    return arr.sort(function(a, b) {
      return a === b ? 0 : a < b ? -1 : 1;
    })
  
    // Only change code above this line
  }
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

  // return a Sorted Array without changing the original Array
//  sort() changes the original array

// Split() a string into an Array using the split method

function splitify(str) {
    // Only change code below this line
    return str.split(/\W/)
  
    // Only change code above this line
  }
  splitify("Hello World,I-am code");

  // Combine an Array into a String Using the Join Method

  function sentensify(str) {
    // Only change code below this line
    var arr = str.split(/\W/)
    return arr.join(" ");
  
    // Only change code above this line
  }
  sentensify("May-the-force-be-with-you");

  // Apply function programming to convert strings to URL SLugs

  // Only change code below this line
function urlSlug(title) {
    let urlOutput = title
    .trim()
    .toLowerCase()
    .split(/\s+/) // /s+ is one or more whitespace characters
    .join('-');

    return urlOutput;
}
// Only change code above this line
console.log(urlSlug(" Winter Is  Coming"));

// Use every method tpo check

function checkPositive(arr) {
    // Only change code below this line
    return arr.every(function(val) {
        return val > 0;
    })
  
    // Only change code above this line
  }
  checkPositive([1, 2, 3, -4, 5]);

  // Use the some Method to check tha any elements is an Array Meet a Criteria

  function checkPositiveSome(arr) {
    // Only change code below this line
    return arr.some(item => {
        return item > 0;
    })
    // Only change code above this line
  }
  console.log(checkPositiveSome([1, 2, 3, -4, 5]));

  // Introduction to Currying and Partial Application

  // currying example:

  function add(x) {
      return function(y) {
          return function(z) {
              return x + y + z;

          }
      }
  }

  // arrow notation
  function add1(x) {
    // Add your code below this line
    return y => z => x + y + z;
    // Add your code above this line
  }