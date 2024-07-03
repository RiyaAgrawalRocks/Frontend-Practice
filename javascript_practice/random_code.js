var carName="Volvo";
document.getElementById("demo").innerHTML="Hello JavaScript";
document.getElementById("demo").style.fontSize="35px";
document.getElementById("demo").style.display="none";
document.getElementById("demo").style.display="block";

//comment 1
/* comment 2 */

//   JavaScript Statements

let x,y,z;
x = 5;
y =6 ;
z = x + y ;
let person= "Hege";

//Variables

/*
JavaScript Variables can be declared in 4 ways:

Automatically
Using var
Using let
Using const
*/

x = 5;
y = 6;
z = x + y;

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
