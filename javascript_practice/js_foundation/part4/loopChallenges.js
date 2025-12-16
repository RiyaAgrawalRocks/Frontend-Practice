let sum = 0;
let i = 1;
while (i <= 5) {
  sum += i;
  ++i;
}
console.log(sum);

let countdown =[]
let j = 5
while (j >= 1) {
    countdown.push(j)
    j--
}
console.log(countdown);

// let teaCollection = []
// let tea
// do {
//     tea = prompt("enter tea type or type stop");
//     if(tea !== 'stop')
//         teaCollection.push(tea)
// } while (tea !== 'stop');

let total = 0
let num = 1
do {
  total += num
  num++
} while(num <= 3)
console.log(total);

let multipliedNumbers = []
let numbers = [2, 4, 6]
for (let i = 0; i < numbers.length; i++) {
  multipliedNumbers[i] = numbers[i] * 2;  
}
console.log(multipliedNumbers);


let cities = ['Paris', "NY", 'Tokyo', 'London']
let cityList = []
for (let i = 0; i < cities.length; i++) {
  cityList[i] = cities[i];
}
console.log(cityList);
