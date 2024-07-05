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
  let text = `He's often called "Johnny"`;

  let text = "We are the so-called \"Vikings\" from the north.";
  let text= 'It\'s alright.';
  let text = "The character \\ is called backslash.";


//defining strings
let x = "John";
let y = new String("John");








