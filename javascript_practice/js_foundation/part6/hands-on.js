class Animal {
  constructor() {
    this.speak = function () {
      return `Animal speaking`;
    };
  }
}
class Dog extends Animal {
  bark() {
    return "Woof!";
  }
}

function Person(name, age) {
  if (age <= 0) throw new Error("Age must be a positive number");
  this.name = name;
  this.age = age;
  this.greet = function () {
    return `Hello, my name is ${this.name}`;
  };
}

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getDetails() {
    return `Make: ${this.make}, Model: ${this.model}`;
  }
  move() {
    return "The vehicle is moving";
  }
  static isVehicle(obj) {
    if (obj instanceof Vehicle) return true;
    return false;
  }
}

class Car extends Vehicle {
  startEngine() {
    return "Engine started";
  }
  move() {
    return "The car is driving";
  }
}

// Task 1
class BankAccount {
  constructor(balance = 0) {
    this._balance = balance;
  }
  deposit(amount) {
    this._balance += amount;
  }
  withdraw(amount) {
    this._balance -= amount;
  }
  getBalance() {
    return balance;
  }
  setBalance(amount) {
    if (amount < 0) throw new Error("Balance cannot be negative");
    balance = amount;
  }
}

// Task 2
class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(rad) {
    super();
    this.rad = rad;
  }
  area() {
    return Math.PI * this.rad * this.rad;
  }
}

class Rectangle extends Shape {
  constructor(l, b) {
    super();
    this.l = l;
    this.b = b;
  }
  area() {
    return this.l * this.b;
  }
}
