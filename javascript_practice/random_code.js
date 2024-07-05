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



