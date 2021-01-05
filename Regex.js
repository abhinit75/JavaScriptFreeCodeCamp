// Regular Expressions (REGEX) are special strings that represent a search pattern

// Using Test Method

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

// Match a literal strings with diff possibilities

// with OR (|) operator
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result1 = petRegex.test(petString);

// Ignore Case While Matching
//   uses the flag i /cases/i
let myString1 = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result2 = fccRegex.test(myString);

// Extract Matches
// using mtach you can return your desined expression
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result3 = extractStr.match(codingRegex); // Change this line

// Find more than the first match
//   need to use a global flag g
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result4 = twinkleStar.match(starRegex); // Change this line

// Match anything with Wildcard Period
// matches any end with un i.e bun, run, sun, lun etc.
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result5 = unRegex.test(exampleStr);

// Match single character with muitple possibilities
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result6 = quoteSample.match(vowelRegex); // Change this line

// Match letters of the alphabet

let quoteSample1 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result7 = quoteSample.match(alphabetRegex); // Change this line

// Match Numbers and Letters of the Alphabet
let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex1 = /[h-s2-6]/gi; // Change this line
let result8 = quoteSample.match(myRegex1); // Change this line

// Match Single Characters not specified
//   negated character sets
let quoteSample3 = "3 blind mice.";
let myRegex2 = /[^aeiou0-9]/gi; // Change this line
let result9 = quoteSample.match(myRegex2); // Change this line

// Match Characters that Occur Onee or More Times
let difficultSpelling = "Mississippi";
let myRegex3 = /s+/gi; // Change this line
let result10 = difficultSpelling.match(myRegex3);

// Match Characters that Occur 0 or More Times
//  can use the asterisk Aa&* -->  Aaaaaaaaaaa...


// Find characters with lazy matching
//   a greedy match: finds the longest possible match 
//   a lazy match: finds the smallest possible match that fits the regex pattern
let text = "<h1>Winter is coming</h1>";
let myRegex4 = /<.*?>/; // Change this line
let result11 = text.match(myRegex4);

console.log(result11)

// Match Beginning String pATTERNS
//  outside caret (^) is used to search for patterns at the beginning of strings

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result12 = calRegex.test(rickyAndCal);

// Match ending String Patterns
//   ccan search the end of the strings usin $

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result13 = lastRegex.test(caboose);

// Match All letters and Numbers

let quoteSample5 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result14 = quoteSample.match(alphabetRegexV2).length;

// Match everything but letters and numbers
let quoteSample6 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result15 = quoteSample.match(nonAlphabetRegex).length;

// Match all numbers (\d)
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result16 = movieName.match(numRegex).length;

// Match all non-numbers (\D)
let movieName1 = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result17 = movieName.match(noNumRegex).length;

// rESTRICT pOSSIBLE uSERNAMES
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i
// Change this line
let result18 = userCheck.test(username);

// Match Whitespace
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result19 = sample.match(countWhiteSpace);

// Match Non-Whitespace characters
let sample2 = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result20 = sample.match(countNonWhiteSpace);

// Specify Upper and Lower Number of matches
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/gi; // Change this line
let result21 = ohRegex.test(ohStr);

console.log(result21)

// Specify only a lower number of matches
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/gi; // Change this line
let result22 = haRegex.test(haStr);

// Speciffy exact number of matches
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result23 = timRegex.test(timStr);

// Check for all or none - question the possible existence of a letter 
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result24 = favRegex.test(favWord);

// lookahead
//  1) postive lookahead - will make sure the pattern in the search pattern is there but wont actually match it
//  2) negative lookahead - will make sure the element in the search pattern is not there

let sampleWord = "astronaut";
let pwRegex = /^\D(?=\w{5})(?=\w*\d{2})/; // Change this line
let result25 = pwRegex.test(sampleWord);

// Check for mixed grouping of characters
let myString = "Eleanor Roosevelt";
let myRegex5 = /(Franklin|Eleanor).*Roosevelt/; // Change this line
let result26 = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works

// Reuse Patterns usin Capture Groups
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result27 = reRegex.test(repeatNum);

// Use Capture groups to search and replace
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result28 = str.replace(fixRegex, replaceText);

// Remove whitespace from start and end
let hello = "   Hello, World!  ";
let wsRegex = /Hello, World!/; // Change this line
let result29 = hello.match(wsRegex); // Change this line
