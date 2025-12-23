// example 1
let hold = document
  .getElementById("changeTextButton")
  .addEventListener("click", () => {
    let paragraph = document.getElementById("myParagraph");
    // console.log(paragraph);
    // console.log(paragraph.textContent)
    paragraph.textContent = "the paragraph is changed";
  });

// example 2
document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
  });

// example 3
document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "Espresso";
  // coffeeType.style.backgroundColor = "brown"
  // coffeeType.style.padding = "5px"
});

// example 4
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";

  document.getElementById("shoppingList").appendChild(newItem);
});

// example 5
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let list = document.getElementById("taskList");
    list.lastElementChild.remove();
  });

// example 6
document.getElementById("clickMeButton").addEventListener("click", function () {
  alert("chaicode");
});

// example 7
document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem")) {
    event.target.style.backgroundColor = "blue";
  }
});

// example 8
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `Feedback is: ${feedback}`;
  });

// example 9
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully loaded";
});

// example 10
document.getElementById('toggleHighlight').addEventListener('click', function () {
  document.getElementById('descriptionText').style.color = 'yellow'
})