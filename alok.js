function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskDate = document.getElementById("taskDate");
  const taskTime = document.getElementById("taskTime");
  const taskList = document.getElementById("taskList");

  if (taskInput.value === "") {
    alert("Please enter a task");
    return;
  }

  // Create List Item
  const li = document.createElement("li");

  li.innerHTML = `
    <strong>${taskInput.value}</strong><br>
    Date: ${taskDate.value} <br>
    Time: ${taskTime.value}

    <div class="task-buttons">
      <button onclick="completeTask(this)">Complete</button>
      <button onclick="editTask(this)">Edit</button>
      <button onclick="deleteTask(this)">Delete</button>
    </div>
  `;

  taskList.appendChild(li);

  // Clear Inputs
  taskInput.value = "";
  taskDate.value = "";
  taskTime.value = "";
}

function completeTask(button) {
  const li = button.parentElement.parentElement;
  li.classList.toggle("completed");
}

function editTask(button) {
  const li = button.parentElement.parentElement;

  const newTask = prompt("Edit your task");

  if (newTask !== null) {
    li.firstChild.textContent = newTask;
  }
}

function deleteTask(button) {
  const li = button.parentElement.parentElement;
  li.remove();
}