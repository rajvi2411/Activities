// Strings definition and declaration
var hello = "Hello";
var world = 'world';
var helloW = `Hello World`;


// Covert other dataypes to string
var intString = String(32); // "32"
var booleanString = String(true); // "true" 
var nullString = String(null); // "null"

var intString = (5232).toString(); // "5232"
var booleanString = (false).toString(); // "false" 
var objString = ({}).toString(); // "[object Object]"

// Using new variable -- not recommended -- creates new object than normal string
var objectString = new String("Yes, I am a String object"); 
typeof objectString;//"object"
typeof objectString.valueOf();//"string"

// Concate strings

var foo = "Foo";
var bar = "Bar";
console.log(foo + bar); // => "FooBar" 
console.log(foo + " " + bar); // => "Foo Bar"
foo.concat(bar) // => "FooBar" 
"a".concat("b", " ", "d") // => "ab d"

// Create string using backticks
var place = `World`;
var greet = `Hello ${place}!`
console.log(greet); // "Hello World!"

// Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
    }
    reverseString('string'); // "gnirts"

// Lexographic comparision
var arr = ["bananas", "cranberries", "dapples"]; 
arr.sort(function(a, b) {
    return a.localeCompare(b);
});
console.log(arr); // [ "apples", "bananas", "cranberries" ]

// Access character at index in string
var string = "Hello, World!"; 
console.log( string.charAt(4) ); // "o"

// Escaping quotes
var text = 'L\'albero means tree in Italian'; 
console.log( text ); 
//  "L'albero means tree in Italian"

// Trim whiteSpace
" some whitespaced string ".trim(); // "some whitespaced string"

// Splitting a string into an array
var s = "one, two, three, four, five"
// s.split(", "); // ["one", "two", "three", "four", "five"]
// To join back
s.split(", ").join("#");
console.log(s);

//  Substrings with slice
var s = "0123456789abcdefg"; 
s.slice(0, 5); // "01234" 
s.slice(5, 6); // "5"
s.slice(10); // "abcdefg" till the end

// Find the index of a substring inside a string
var r="Hello World Guys";
console.log(r.indexOf("llo"));
// Repeat a String

var myString = "abc"; var n = 3;
new Array(n + 1).join(myString); // Returns "abcabcabc"



