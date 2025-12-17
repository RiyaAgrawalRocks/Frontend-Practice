let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for (let i = 0; i < teas.length; i++) {
  if (teas[i] === "chai") break;
  selectedTeas[i] = teas[i];
}
// console.log(selectedTeas);

let cities = ["London", "NY", "Paris", "Berlin"];
let visitedCities = [];
for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "Paris") continue;
  visitedCities.push(cities[i]);
}
// console.log(visitedCities);

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];
for (const number of numbers) {
  if (number === 4) break;
  smallNumbers.push(number);
}
// console.log(smallNumbers);

let tea = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];
for (let i = 0; i < tea.length; i++) {
  if (tea[i] === "herbal tea") continue;
  preferredTeas.push(tea[i]);
}
// console.log(preferredTeas);

let citiesPopulation = {
  London: 8900000,
  NY: 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};
let citiesPopulations = [];
for (const city in citiesPopulation) {
  if (!Object.hasOwn(citiesPopulation, city)) continue;

  if (city === "Berlin") continue;
  citiesPopulations[city] = citiesPopulation[city];
}
// console.log(citiesPopulations);

let worldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};

let largeCities = [];

for (const city in worldCities) {
  if (!Object.hasOwn(worldCities, city)) continue;

  if (worldCities[city] < 3000000) {
    continue;
  }
  largeCities[city] = worldCities[city];
}

// console.log(largeCities);

teaTypes = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];
teaTypes.forEach((tea) => {
  if (tea === "chai") {
    return;
  }
  availableTeas.push(tea);
});
// console.log(availableTeas);

let myCities = ['Berlin', 'Tokyo', 'Sydney', 'Paris']
let traveledCities = []
myCities.forEach(function(city) {
    if (city === 'Sydney')
        return;
    traveledCities.push(city)
});
console.log(traveledCities);

let nums = [2, 5, 7, 9]
let doubleNumbers = []
for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 7) {
        doubleNumbers.push(7);
        continue;
    }
    doubleNumbers.push(nums[i]*2)
}
// console.log(doubleNumbers);


let teass = ['chai', 'green tea', 'black tea', 'jasmine tea', 'herbal tea']
let shortTeas = []
for (const tea of teass) {
    if (tea.length > 10)
        break
    shortTeas.push(tea)
}
console.log(shortTeas);
