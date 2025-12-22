// example 1
let hold = document
  .getElementById("changeTextButton")
  .addEventListener("click", () => {
    let paragraph = document.getElementById('myParagraph')
    // console.log(paragraph);
    // console.log(paragraph.textContent)
    paragraph.textContent = 'the paragraph is changed'
  });

// example 2
document.getElementById('highlightFirstCity').addEventListener('click', function () {
    let citiesList = document.getElementById('citiesList')
    citiesList.firstElementChild.classList.add('highlight')
})

// example 3
document.getElementById('changeOrder').addEventListener('click', function () {
    let coffeeType = document.getElementById('coffeeType')
    coffeeType.textContent = 'Espresso'
    // coffeeType.style.backgroundColor = "brown"
    // coffeeType.style.padding = "5px"
})

// example 4
document.getElementById("addNewItem").addEventListener('click', function () {
    let newItem = document.createElement('li')
    newItem.textContent = 'Eggs'

    document.getElementById('shoppingList').appendChild(newItem)
})

// example 5 
document.getElementById('removeLastTask').addEventListener('click', function () {
    let list = document.getElementById('taskList')
    list.lastElementChild.remove()
})

