let car = {
  make: "toyota",
  model: "camry",
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};
// console.log(car.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("John", 20);
// console.log(john);
// console.log(john.name);

function Animal(type) {
    this.type = type
}

Animal.prototype.speak = function () {
    return `${this.type} makes a sound`
}

Array.prototype.riya = function () {
    return `Custom method for ${this}`
}

let myArray = [1, 2, 3]
// console.log(myArray.riya());

let myNewArray = [1, 2, 3, 4, 5, 6]
// console.log(myNewArray.riya());


class Vehicle {
  constructor(make, model) {
      this.make = make
      this.model = model
  }
  
  start() {
    return `${this.model} is a car from ${this.make}`
  }
}

class Car extends Vehicle {
  drive() {
    return `${this.make} : This is an inheritance example`
  }
}

let myCar = new Car('Toyota', 'Corolla')
// console.log(myCar.start());
// console.log(myCar.drive());

let vehOne = new Vehicle('Toyota', 'Corolla')
// console.log(vehOne.make);

// Encapsulation
class BankAccount {
  #balance = 0

  deposit(amount) {
    this.#balance += amount
    return this.#balance
  }

  getBalance() {
    return `$ ${this.#balance}`
  }
}
let account = new BankAccount()
// console.log(account.getBalance())

// Abstraction
class CoffeeMachine{
  start() {
    //call db
    //filter value
    return `Starting the machine`
  }
  brewCoffee() {
    //complex calculation
    return `Brewing coffee`
  }
  pressStartButton(){
    let msg1 = this.start()
    let msg2 = this.brewCoffee()
    return `${msg1} + ${msg2}`
  }
}
let myMachine = new CoffeeMachine()
  // console.log(myMachine.start());
  // console.log(myMachine.brewCoffee());
  // console.log(myMachine.pressStartButton());
  
// Polymorphism
class Bird{
  fly() {
    return `I'm flying...`
  }
}
class Penguin extends Bird{
  fly() {
    return `Penguins can't fly`
  }
}
let bird = new Bird()
let penguin = new Penguin()
// console.log(bird.fly());
// console.log(penguin.fly());

// static method
class Calculator{
  static add(a, b) {
    return a + b
  }
}
// let calci = new Calculator()
// console.log(calci.add(2, 3));
// console.log(Calculator.add(2, 3));


// Getters and Setters
class Employee{
  #salary 

  constructor(name, salary) {
    if (salary < 0)
      throw new Error (`Salary cannot be negative`)
    this.name = name
    this.#salary = salary
  }

  get salary() {
    return `You are not allowed to see salary`
  }

  set salary(value) {
    if (value < 0)
      console.console.error('Invalid salary');
    else
      this._salary = value      
  }
}
let emp = new Employee('Alice', -50000)
console.log(emp._salary);
// console.log(emp.salary);
emp._salary = -90000
