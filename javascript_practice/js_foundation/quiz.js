// arr = [1, 2, 4, 5, "abc", true];
function filterNumbers(arr) {
  let newarr = [];
  for (const ele of arr) {
    if (typeof ele === "number") newarr.push(ele);
  }
  return newarr;
}
console.log(filterNumbers(arr));

function reverseArray(arr) {
  let reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}
console.log(reverseArray(arr));

function findMax(arr) {
  let max = -Infinity;
  for (const ele of arr) {
    if (typeof ele === "number") max = max > ele ? max : ele;
  }
  return max;
}
console.log(findMax(arr));

function removeDuplicates(arr) {
  let newarr = [];
  for (const ele of arr) {
    if (newarr.indexOf(ele) === -1) {
      newarr.push(ele);
    }
  }
  return newarr;
}
console.log(removeDuplicates(arr));

arr1 = [1, 2, 3, [1, 2, 4, [5]]];
function flattenArray(arr1) {
  let newa = []
    for (const ele of arr1) {
        if (Array.isArray(ele)) {
            newa.push(...flattenArray(ele))
        }
        else
            newa.push(ele)
        console.log(newa);
    }
    return newa
}
console.log(flattenArray(arr1));


const filterNumbers = arr =>
    arr.filter(ele => typeof ele === 'number')
console.log(filterNumbers(arr));

const reverseArray = arr => [...arr].reverse()
console.log(reverseArray(arr));

const findMax = arr => Math.max(...arr.filter(x => typeof x === 'number'))
console.log(findMax(arr));



// arr2 = [1, 2, 3, 1, 2, 4, 5];
const removeDuplicates = arr => [...new Set(arr)]
console.log(removeDuplicates(arr2));



const flattenArray = arr => arr.flat(Infinity)
console.log(flattenArray(arr1));


// str = "djsnfefDSKKLBJBHHTEHONB"
function countVowels(str) {
  let newstr = str.toLowerCase();
  let n = 0;
    for (const c of newstr) {
        if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") n++;
    }

  return n;
}
console.log(countVowels(str));



// // arr = [1, 2, 4, 5, -5, -3];
const squareNumbers = (arr) => {
    let newarr = []
    newarr = arr.map((num) => { if(typeof num === 'number') return num * num })
    return newarr
};
console.log(squareNumbers(arr));


const filterEvenNumbers = (arr) => { return arr.filter((num) => num % 2 === 0)};
console.log(filterEvenNumbers(arr));


const sumPositiveNumbers = (arr) => {
    return arr
        .filter(num => num > 0)
        .reduce((acc, curr) => acc + curr, 0)
};
console.log(sumPositiveNumbers(arr));

arr = [
    { name: 'riya' },
    { name: 'manas' },
    { name : 'abc'}
]
const getNames = (arr) => (
    arr.map((obj) => obj.name)
);
console.log(getNames(arr));


arr = ['abcdef0', 'ergthtbht', 'gbhyuu7yj76j']
const findLongestWord = (arr) => (
    arr.reduce((acc,curr) => curr.length > acc.length ? curr : acc, "")
);
console.log(findLongestWord(arr));


const person = {
    name: "Hitesh",
    age: 19.5,
    introduce(){
        return `Hi, my name is ${this.name} and I am ${this.age} years old`
    }
};

function outer() {
    function inner(){}
    return 'Inner function called'
}
console.log(outer())