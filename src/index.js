document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
const taskList = document.querySelector("#tasks");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const taskDescription = form.querySelector("#new-task-description").value;
  const priority = form.querySelector("#priority").value;
  const task = document.createElement("li");
  task.textContent = `${taskDescription} `;
  task.style.color = priority;
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.addEventListener("click", () => {
    task.remove();
  });
  task.appendChild(deleteButton);
  taskList.appendChild(task);
  form.reset();
});

const prioritySelect = document.createElement("select");
prioritySelect.id = "priority";
const highOption = document.createElement("option");
highOption.value = "red";
highOption.textContent = "Urgent";
prioritySelect.appendChild(highOption);
const mediumOption = document.createElement("option");
mediumOption.value = "yellow";
mediumOption.textContent = "High priority";
prioritySelect.appendChild(mediumOption);
const lowOption = document.createElement("option");
lowOption.value = "green";
lowOption.textContent = "Low priority";
prioritySelect.appendChild(lowOption);
form.insertBefore(prioritySelect, form.querySelector("input[type='submit']"));
});
