let teaFlavors = ["green tea", "black tea", "oolong tea"];
let firstTea = teaFlavors[0];
console.log(firstTea, teaFlavors);

let cities = ["London", "Tokyo", "Paris", "New York"];
let favoriteCity = cities[2];
console.log(favoriteCity, cities);

let teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";
console.log(teaTypes);

let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");
citiesVisited[3] = "Berlin";
console.log(citiesVisited);
console.log(citiesVisited.length);

let teaOrders = ['chai', "iced tea", 'matcha', 'earl grey']
let lastOrder = teaOrders.pop()
console.log(lastOrder);

let popularTeas = ['green tea', 'oolong tea', 'chai']
let softCopyTeas = popularTeas
popularTeas.push('abc')
console.log(popularTeas === softCopyTeas);

let topCities = ['Berlin', 'Singapore', 'New York']
// let hardCopyCities = [...topCities]
// topCities.pop()
let hardCopyCities = topCities.slice()
console.log(hardCopyCities);

let europeanCities = ['Paris', 'Rome']
let asianCities = ['Tokyo', 'Bangkok']
// let worldCities = europeanCities.concat(asianCities)
// let worldCities = europeanCities + asianCities
// let worldCities = [europeanCities, asianCities]
let worldCities = [...europeanCities, ...asianCities]
console.log(worldCities);
// console.log(typeof worldCities);

let teaMenu = ['masala chai', 'oolong tea', 'green tea', 'earl grey']
let menuLength = teaMenu.length
console.log(menuLength);

let cityBucketList = ['Kyoto', 'London', 'CapeTown', 'Vancouver']
let isLondonInList = cityBucketList.includes('London')
console.log(isLondonInList);

