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
console.log(john);
console.log(john.name);

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
console.log(myArray.riya());

let myNewArray = [1, 2, 3, 4, 5, 6]
console.log(myNewArray.riya());


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
console.log(vehOne.make);

