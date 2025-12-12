// Number
let balance = 120
console.log(typeof(balance));
// console.log(balance);

let anotherBalance = new Number (120)
console.log(typeof (anotherBalance));
console.log(anotherBalance);
console.log(anotherBalance.valueOf());

//boolean
let isActive = true
let isReallyActive = new Boolean(true) //not recommended
console.log(isReallyActive);

// null and undefined
let firstname = null
let lastname = undefined
console.log(firstname);
console.log(lastname);

//string
let myString = "hello"
let myStringOne = 'Hola'
let username = 'riya'

let oldGreet = myString + " " + 'riya'
console.log(oldGreet);


let greetMessage = `Helloooooooo ${username} !`
let demoOne = `Value is ${2*2}`
console.log(greetMessage);
console.log(demoOne);

//Symbol
let sm1 = Symbol()
let sm2 = Symbol()
console.log(sm1 == sm2);
console.log(sm1);
let sm3 = Symbol("riya")
let sm4 = Symbol("riya")
console.log(sm3 == sm4);



