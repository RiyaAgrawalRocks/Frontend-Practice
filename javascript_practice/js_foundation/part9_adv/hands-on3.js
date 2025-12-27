// Task 1
function Animal() {
    function makeSound(){
        return `{this} makes a sound`
    }
}

function Dog() {
    Animal.call(this)
}

Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog
Dog.prototype.bark = function () {
    return `{this} barks`
}

// Task 2
function Shape(color) {
    this.color = color
    function getColor(){
        return `My color is ${this.color}`
    }
}

function Rectangle(width, height, color) {
    Shape.call(this, color)
    this.width = width
    this.height = height
    function getArea() {
        return width * height
    }
}
