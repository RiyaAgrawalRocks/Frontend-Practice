var carName="Volvo";
document.getElementById("demo").innerHTML="Hello JavaScript";
document.getElementById("demo").style.fontSize="35px";
document.getElementById("demo").style.display="none";
document.getElementById("demo").style.display="block";

//comment 1
/* comment 2 */

//   JavaScript Statements

/*let x,y,z;
x = 5;
y =6 ;
z = x + y ;
let person= "Hege";*/

//Variables

/*
JavaScript Variables can be declared in 4 ways:

Automatically
Using var
Using let
Using const
*/

/*x = 5;
y = 6;
z = x + y;*/

var x = 5;
var y = 6;
var z = x + y;

let x = 5;
let y = 6;
let z = x + y;

const x = 5;
const y = 6;
const z = x + y;

const price1 = 5;
const price2 = 6;
let total = price1 + price2;

let x = "5" + 2 + 3;
 

//Scope of Variables


let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}

// Here x is 10


//const
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

const cars = ["Saab", "Volvo", "BMW"];

cars = ["Toyota", "Volvo", "Audi"];    // ERROR


const car={type:"Fiat", model:"500", color:"white"};
car.color="red";
car.owner="Johnson";

let a = 5;
let b = Math.pow(a,2);

let c = 16 + 4 + "Volvo";
//Result: c="20Volvo"

let d = "Volvo" + 16 + 4;
//result; c="Volvo164"

let m;       // Now m is undefined
m = 5;       // Now m is a Number
m = "John";  // Now m is a String

// Single quote inside double quotes:
let answer1 = "It's alright";

// Single quotes inside double quotes:
let answer2 = "He is called 'Johnny'";

// Double quotes inside single quotes:
let answer3 = 'He is called "Johnny"';

let s = 123e5;    // 12300000
let t = 123e-5;   // 0.00123

let g = BigInt("123456789012345678901234567890");

const cars = ["Saab", "Volvo", "BMW"];

typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof "John Doe"     // Returns "string"

typeof 0              // Returns "number"
typeof 314            // Returns "number"
typeof 3.14           // Returns "number"
typeof (3)            // Returns "number"
typeof (3 + 4)        // Returns "number"

let car;    // Value is undefined, type is undefined

car = undefined;    // Value is undefined, type is undefined, variable gets emptied

let car = "";    // The value is "", the typeof is "string"

// Function is called, the return value will end up in x
let x = myFunction(4, 3);

function myFunction(a, b) {
// Function returns the product of a and b
  return a * b;
}


function toCelsius(f) {
    return (5/9) * (f-32);
  }
  
  let value = toCelsius;
  document.getElementById("demo").innerHTML = value;
/*
 Result:
Accessing a function without () returns the function and not the function result:

function toCelsius(f) { return (5/9) * (f-32); }
*/


// code here can NOT use carName

function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
  }
  
  // code here can NOT use carName

  
// Create an Object
const person = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
//This example creates an empty JavaScript object, and then adds 4 properties


// Create an Object
const person = new Object();

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
//This example create a new JavaScript object using new Object(), and then adds 4 properties


//You can access object properties in two ways
person["lastName"];
person.lastName;


const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  //Create an Object
const person = {
    firstName:"John",
    lastName:"Doe",
    age:50, eyeColor:"blue"
  }
  
  // Create a copy
  const x = person;
  
  // Change Age in both
  x.age = 10;


  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  delete person.age;


  //Nested objects
  myObj = {
    name:"John",
    age:30,
    myCars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }

  myObj.myCars.car2;
  myObj.myCars["car2"];
  myObj["myCars"]["car2"];

  //This example uses the JavaScript toUpperCase() method to convert a text to uppercase
  person.name = function () {
    return (this.firstName + " " + this.lastName).toUpperCase();
  };

  /*
  Some solutions to display JavaScript objects are:

Displaying the Object Properties by name
Displaying the Object Properties in a Loop
Displaying the Object using Object.values()
Displaying the Object using JSON.stringify()
*/

// Create an Object
const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // Build a Text
  let text = "";
  for (let x in person) {
    text += person[x] + " ";
  };
  
  // Display the Text
  document.getElementById("demo").innerHTML = text;

  

// Create an Object
const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // Create an Array
  const myArray = Object.values(person);
  
  // Display the Array
  document.getElementById("demo").innerHTML = myArray;



  // Create an Object
const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // Stringify Object
  let myString = JSON.stringify(person);
  
  // Display String
  document.getElementById("demo").innerHTML = myString;

  
  //template strings
 { let text = `He's often called "Johnny"`;

  let text = "We are the so-called \"Vikings\" from the north.";
  let text= 'It\'s alright.';
  let text = "The character \\ is called backslash.";
 }

//defining strings
let x = "John";
let y = new String("John");

/*
You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:
*/
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;

//array methods
cars.length   // Returns the number of elements
cars.sort()   // Sorts the array

//looping thru array elements
{const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
}

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}
}

//adding new array elements
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");  // Adds a new element (Lemon) to fruits


// Create an array with 40 undefined elements:
const points = new Array(40);  
// Create an array with one element:
const points = [40];


const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");
//Banana * Orange * Apple * Mango

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
//removes last element

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop();
//The pop() method returns the value that was "popped out":

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
//adds new element

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.push("Kiwi");
//The push() method returns the new array length

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
//Orange,Apple,Mango

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.shift();
//The shift() method returns the value that was "shifted out"

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
//Lemon,Banana,Orange,Apple,Mango

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
//The unshift() method returns the new array length

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
//The concat() method creates a new array by merging (concatenating) existing arrays

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);

const arr1 = ["Emil", "Tobias", "Linus"];
const myChildren = arr1.concat("Peter"); 

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);
//Copy to index 2, all elements from index 0
//Banana,Orange,Banana,Orange

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.copyWithin(2, 0, 2);
//Copy to index 2, the elements from index 0 to 2
//Banana,Orange,Banana,Orange,Kiwi,Papaya

const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
//1,2,3,4,5,6


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
//Banana,Orange,Lemon,Kiwi,Apple,Mango
/*
The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (0) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");
//Banana,Orange,Lemon,Kiwi

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);
/*
The first parameter (0) defines the position where new elements should be added (spliced in).

The second parameter (1) defines how many elements should be removed.

The rest of the parameters are omitted. No new elements will be added.
*/


const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
//new array created

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
//new array created
//Orange,Lemon,Apple,Mango

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
//Orange,Lemon


/*
=======================
Array Methods
=======================
*/

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;


/*
array.indexOf(item, start)
item:	Required. The item to search for.
start:	Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end.
Array.indexOf() returns -1 if the item is not found.

If the item is present more than once, it returns the position of the first occurrence.
*/


const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.lastIndexOf("Apple") + 1;
/*
array.lastIndexOf(item, start)
item:	Required. The item to search for
start:	Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the beginning
*/


const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.includes("Mango"); // is true
/*
array.includes(search-item)
Array.includes() allows to check for NaN values. Unlike Array.indexOf().
*/


const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
/*
The find() method returns the value of the first array element that passes a test function.

This example finds (returns the value of) the first element that is larger than 18
*/


const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
/*
The findIndex() method returns the index of the first array element that passes a test function.

This example finds the index of the first element that is larger than 18
*/


const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);
//will start from the end of an array and return the value of the first element that satisfies a condition


const temp = [27, 28, 30, 40, 42, 35, 30];
let pos = temp.findLastIndex(x => x > 40);
//The findLastIndex() method finds the index of the last element that satisfies a condition.



/*
=============================
Array Sorting
=============================
*/
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
//The sort() method sorts an array alphabetically
//creates a new array


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
//Mango,Apple,Orange,Banana
//reverses the original array itself


const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
//sorts the original array itself


const months = ["Jan", "Feb", "Mar", "Apr"];
const reversed = months.toReversed();
//reverses the original array itself


const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
//ascending order
//1,5,10,25,40,100


const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
//descending order
//100,40,25,10,5,1


const points = [40, 100, 1, 5, 25, 10];
points.sort(function(){return 0.5 - Math.random()});
//sorting in random order


const points = [40, 100, 1, 5, 25, 10];

for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}
//Fisher Yates Shuffle
//40,100,1,5,25,10


/*Finding max and min values of an array:

To find the lowest or highest value you have 3 options:

Sort the array and read the first or last element
Use Math.min() or Math.max()
Write a home made function
*/

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value



function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}
//finds lowest number in the array
//Math.min.apply(null, [1, 2, 3]) is equivalent to Math.min(1, 2, 3).


function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}
//finds max number in the array
//Math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3).


function myArrayMin(arr) {
  let len = arr.length;
  let min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}
//fastest method to find minimum of an array


function myArrayMax(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}
//fastest method to find maximum of an array



const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];//an object array


//Even if objects have properties of different data types, the sort() method can be used to sort the array.
cars.sort(function(a, b){return a.year - b.year});

cars.sort(function(a, b){
  let x = a.type.toLowerCase();
  let y = b.type.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
});//comparing string properties




/*
=============================
Array Iteration
=============================
*/

const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + "<br>";
}




const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
  txt += value + "<br>";
}





const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}
/*
The map() method creates a new array by performing a function on each array element.

The map() method does not execute the function for array elements without values.

The map() method does not change the original array.

This example multiplies each array value by 2
*/



const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}





const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 2);
/*
The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
*/



const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
/*
The filter() method creates a new array with array elements that pass a test.

This example creates a new array from elements with a value larger than 18
*/



const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
/*
Note that the function takes 4 arguments:

The total (the initial value / previously returned value)
The item value
The item index
The array itself


The reduce() method runs a function on each array element to produce (reduce it to) a single value.

The reduce() method works from left-to-right in the array.
*/



const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}




const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction, 100);

function myFunction(total, value) {
  return total + value;
}
/*
The reduce() method can accept an initial value
*/



const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduceRight(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
/*
The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.

The reduceRight() works from right-to-left in the array.
*/



const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduceRight(myFunction);

function myFunction(total, value) {
  return total + value;
}




const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
/*
he every() method checks if all array values pass a test.

This example checks if all array values are larger than 18
*/




const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
/*
The some() method checks if some array values pass a test.

This example checks if some array values are larger than 18
*/




Array.from("ABCDEFG");
/*
The Array.from() method returns an Array object from any object with a length property or any iterable object.
*/


const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

for (let x of keys) {
  text += x + "<br>";
}
/*
The Array.keys() method returns an Array Iterator object with the keys of an array.
*/




const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let x of f) {
  document.getElementById("demo").innerHTML += x;
}
/*
Create an Array Iterator, and then iterate over the key/value pairs.
The entries() method returns an Array Iterator object with key/value pairs:

[0, "Banana"]
[1, "Orange"]
[2, "Apple"]
[3, "Mango"]

The entries() method does not change the original array.
*/



const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");
//with() method as a safe way to update elements in an array without altering the original array.



const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
//Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,May




