
// function addTask() {
//   const newTask = document.createElement('li');
//   const taskList = document.getElementById('taskList');

//   const taskContent = document.createElement('span');
//   taskContent.textContent = document.getElementById('inputTask').value;
//   newTask.appendChild(taskContent);

//   // Create the delete button
//   const deleteBtn = document.createElement('button');
//   deleteBtn.textContent = 'Delete';
  
//   // Append delete button to new task
//   newTask.appendChild(deleteBtn);

//   // Add event listener to delete button
//   deleteBtn.onclick = function() {
//     newTask.remove(); // Remove the task when delete button is clicked
//   };

//   // Append new task to the task list
//   taskList.appendChild(newTask);

//   // Clear the input field
//   document.getElementById('inputTask').value = '';
// }

document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");

  // Task text
  const span = document.createElement("span");
  span.textContent = taskText;

  // Mark complete on click
  span.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.onclick = () => li.remove();

  // Append
  li.appendChild(span);
  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);

  // Clear input
  input.value = "";
}
