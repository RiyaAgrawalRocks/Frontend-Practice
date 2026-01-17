document.addEventListener("DOMContentLoaded", () => {
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");

  // Load and render tasks safely
  let tasks = localStorage.getItem("taskList");
  tasks = JSON.parse(tasks) || [] ;
  tasks.forEach((task) => {
    addTaskToDOM(task);
  });

  addTaskBtn.addEventListener("click", () => {
    // Saving the task
    let taskField = document.getElementById("task-input");
    let task = taskField.value.trim();
    if (!task) return;

    tasks.push(task);
    localStorage.setItem("taskList", JSON.stringify(tasks));
    addTaskToDOM(task);
    taskField.value = "";
  });

  function addTaskToDOM(task) {
    // Creating new element
    let newChild = document.createElement("li");
    newChild.classList.add("task");

    // Creating task-text div
    let newText = document.createElement("div");
    newText.textContent = task;
    newText.classList.add("task-text");

    // Adding newText div to newChild
    newChild.appendChild(newText);

    // Creating Done Button
    const doneButton = document.createElement("button");
    doneButton.classList.add("done-btn");
    doneButton.textContent = "Done";
    doneButton.addEventListener("click", (e) => {
      taskDone(e.target);
    });

    // Creating Delete Button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", (e) => {
      deleteTask(e.target);
    });

    // Creating Buttons div
    const buttonsDiv = document.createElement("div");
    buttonsDiv.appendChild(doneButton);
    buttonsDiv.appendChild(deleteButton);
    buttonsDiv.classList.add("buttons");

    // Adding the buttons to new child
    newChild.appendChild(buttonsDiv);
    taskList.appendChild(newChild);

    // renderTasks();
  }

  function taskDone(target) {
    // console.log(target);
    target.classList.toggle("done-pressed");
    let taskText = target.closest("li").querySelector(".task-text");
    // console.log(taskText);
    taskText.classList.toggle("done");
  }

  function deleteTask(target) {
    let taskItem = target.closest("li");
    let taskText = taskItem.querySelector(".task-text").textContent;

    // Removing from array
    let index = tasks.indexOf(taskText);
    if (index !== -1) tasks.splice(index, 1);
    localStorage.taskList = JSON.stringify(tasks);

    // Removing from DOM
    taskItem.remove();
  }
});
