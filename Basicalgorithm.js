const { DH_NOT_SUITABLE_GENERATOR } = require("constants");

// Convert Celsius to Farenheit
module.exports = {
    convertToF: convertToF,
} 

function convertToF(celcius) {
    let fahrenheit;
    fahrenheit = celcius * (9/5) + 32;
    return fahrenheit;
}
console.log(convertToF(32));


// Reverse a String
function reverseString(str) {
    let reversedarr = [];
    let charlst = str.split("");
    for (let i = 0; i < charlst.length; i++) {
        console.log(charlst[i]);
        reversedarr.unshift(charlst[i]);
    }
    return reversedarr.join("");
  }

  console.log(reverseString("hello"));


  // Factorialize a Number

  // Recursive way
function factorialize(num) {
    if (num == 0) {
        return 1
    } else {
        return num * factorialize(num - 1)
    }
}

console.log(factorialize(5));


// Tail-Recursion

function factorializeTail(num, factorial = 1) {
    if (num == 0) {
        return factorial;
    } else {
        return factorialize(num - 1, factorial * num);
    }
}


// Find the longest word in a String

function findLongestWordLength(str) {
    let stringArr = str.split(" ")
    let stringlengths = [];
    for (let i = 0; i < stringArr.length; i++) {
        stringlengths.push(stringArr[i].length);
    }
    console.log(stringlengths);
    return Math.max(...stringlengths);
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));


// Return the largestnumbers in arrays
function largestOfFour(arr) {
    let largestnums = [];
    for (let list of arr) {
        largestnums.push(Math.max(...list))
    }
    return largestnums
  }
  
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


  // tests
  let iterations = 100000

  console.time('Function #1');
  for (let i = 0; i < iterations; i++) {
    largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])
  }
  console.timeEnd('Function #1');

  // Function #2
  function largestOfFour2(arr) {
    var results = [];
    for (var n = 0; n < arr.length; n++) {
      var largestNumber = arr[n][0];
      for (var sb = 1; sb < arr[n].length; sb++) {
        if (arr[n][sb] > largestNumber) {
          largestNumber = arr[n][sb];
        }
      }
  
      results[n] = largestNumber;
    }
  
    return results;
  }


  console.time('Function #2');
  for (let i = 0; i < iterations; i++) {
    largestOfFour2([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])
  }
  console.timeEnd('Function #2');

  // Confirm the Ending

  function confirmEnding(str, target) {
      if (str.substring(str.length - target.length, str.length) == target) {
          return true
      } else {
          return false
      }
    
  }
  
  console.log(confirmEnding("Bastian", "n"));
  console.log(confirmEnding("Pizza", "zza"));

  // Repeat a String

  function repeatStringNumTimes(str, num) {
    let newstr = "";
    for (let i = 0; i < num; i++) {
        newstr = newstr + str;
    }
    return newstr;
  }
  
  console.log(repeatStringNumTimes("abc", 3));
  
  // Truncate a String
  function truncateString(str, num) {
    let strArr = str.split("");
    let truncArr = [];
    for (let i = 0; i < num; i++) {
        truncArr.push(strArr[i]);
    }
    if (truncArr < strArr) {
      return truncArr.join("") + "..."
    } else {
      return strArr.join("")
    }
  }

  function truncater(str, num) {
    return str.length > num ? str.slice(0, num) + "..." : str; 
  }
  
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 2));

// Finders Keepers

function findElement(arr, func) {
  const val = arr.filter(func)
  return val[0];

}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

// Boo Who

function booWho(bool) {
  return bool == true | bool == false? true : false;
}

function booWho1(bool) {
  return typeof bool === "boolean";
}

// Title Case a Sentence

function titleCase(str) {
  let wordsArr = str.split(" ");
  let capArr = [];
  for (let text of wordsArr) {
    text = text[0].toUpperCase() + text.slice(1, text.length).toLowerCase();
    capArr.push(text);
  }
  return capArr.join(" ");

}

console.log(titleCase("I'm a little tea pot"));

function titleCase1(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function(val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

titleCase1("I'm a little tea pot");

//  Slice and Splice

function frankenSplice(arr1, arr2, n) {
 let arr3 = [];
 for (let i = 0; i < arr2.length; i++) {
   if (i == n) {
     for (let j = 0; j < arr1.length; j++) {
       arr3.push(arr1[j]);
     }
     arr3.push(arr2[i]);
   } else {
     arr3.push(arr2[i]);
   }
 }
 return arr3;

}
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

// Falsey Bouncer
function bouncer(arr) {
  let falseyvals = {
    false: false,
    0: 0,
    NaN: NaN,
    undefined: undefined,
    "": "",
    null: null,
  }
  return arr.filter(item => !falseyvals.hasOwnProperty(item));
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]))

// Where Do I belong

function getIndexToIns(arr, num) {
  let sortedArr = sorting(arr);
  if (sortedArr.length == 0) {
    return sortedArr.length;
  }
  for (let i = 0; i < sortedArr.length; i++) {
    if (num <= sortedArr[i]) {
      return i;
    }
    }
    return sortedArr.length;
}
console.log(getIndexToIns([40, 60], 50));

// Mutations
function mutation(arr) {
  let firstWord = arr[0].toLowerCase().split("");
  let secondWord = arr[1].toLowerCase().split("");
  for (let char of secondWord) {
    if (firstWord.includes(char)){
      continue
    } else {
      return false
    }
  }
  return true;  
}

console.log(mutation(["Hello", "hello"]));

// Chunky Monkey
function chunkArrayInGroups(arr, size) {
  let mainArr = [];
  while (arr.length != 0) {
    mainArr.push(arr.slice(0, size));
    for (let j = 0; j < size; j++) {
      arr.shift();
    };
  }
  return mainArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
// Sorting Algorithms

// Bubble Sort

// Bubble sort works by swapping adjacent values
// First round, we find the largest value and place it at the end
// Second round, find the second largest and onwards
//   So this means we have to iterate for length less than the prev each time

function sorting(arr) {
  let len = arr.length;
  for (let i = len-1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      if (arr[j-1] > arr[j]) {
        var temp = arr[j - 1]
        arr[j-1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr;
}

console.log(sorting([7,5,2,4,3,9]));
console.log(sorting([9,7,5,4,3,1]));

// Selection Sort

