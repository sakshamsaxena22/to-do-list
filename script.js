const todoList = document.getElementById("todoList");
const addCardButton = document.getElementById("addCardButton");
const taskCard = document.getElementById("taskCard");
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskDate = document.getElementById("taskDate");
const taskTime = document.getElementById("taskTime");
const removeAllButton = document.getElementById("removeAllButton");
const removeTaskButton = document.getElementById("removeTaskButton");

addCardButton.addEventListener("click", () => {
  taskCard.classList.toggle("hidden");
});

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask(taskInput.value, taskDate.value, taskTime.value);
  taskInput.value = ""; // Clear inputs after submitting
  taskDate.value = "";
  taskTime.value = "";
  taskCard.classList.add("hidden"); // Hide task card after adding task
});

removeAllButton.addEventListener("click", removeAllTasks);
removeTaskButton.addEventListener("click", () => {
  const task = prompt("Enter the task number to remove:");
  removeTask(task - 1);
});

function addTask(taskText, date, time) {
  if (taskText && date && time) {
    const taskItem = document.createElement("li");
    taskItem.className = "task";
    taskItem.innerHTML = `<span>${taskText}</span>
                          <div class="task-date-time">Due: ${date} at ${time}</div>`;
    todoList.appendChild(taskItem);
  }
}

function removeAllTasks() {
  todoList.innerHTML = "";
}

function removeTask(index) {
  const tasks = document.querySelectorAll(".task");
  if (index >= 0 && index < tasks.length) {
    tasks[index].remove();
  } else {
    alert("Invalid task number.");
  }
}
