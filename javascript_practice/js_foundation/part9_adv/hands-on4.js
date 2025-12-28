// Task 1
const person = {
    name: 'Alice',
    introduce() {
        return `Hi, my name is ${this.name}`
    }
};

const boundIntroduce = person.introduce.bind(person)

// Task 2
function introduce(name) {
    this.name = name
    return `Hey, I'm ${this.name}`
}

introduce.call('person A')
introduce.call('person B')

// Task 3
function sum(a, b) {
    return a * b
}

sum.apply([1, 2])
sum.apply([3, 5])
sum.apply([3, 7])
