const taskListElement = document.getElementById('task-list');
const addTaskButton = document.getElementById('add-task');

// Function to fetch tasks from local storage (if available)
function getTasks() {
  const tasksJSON = localStorage.getItem('tasks');
  return tasksJSON ? JSON.parse(tasksJSON) : [];
}

// Function to display tasks in the list
function displayTasks() {
  const tasks = getTasks();
  taskListElement.innerHTML = ''; // Clear existing list items

  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    const taskText = document.createElement('span');
    const checkbox = document.createElement('input');

    checkbox.type = 'checkbox';
    checkbox.checked = task.completed; // Set checkbox based on completed state
    checkbox.addEventListener('change', () => {
      toggleTaskCompletion(index);
    });

    taskText.textContent = task.description;
    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    taskListElement.appendChild(listItem);
  });
}

// Function to handle adding a new task
function addTask() {
  const taskDescription = prompt('Enter a task description:');
  if (!taskDescription) return;

  const tasks = getTasks();
  tasks.push({ description: taskDescription, completed: false });
  localStorage.setItem('tasks', JSON.stringify(tasks));

  displayTasks();
}

// Function to toggle task completion (based on checkbox change)
function toggleTaskCompletion(index) {
  const tasks = getTasks();
  tasks[index].completed = !tasks[index].completed;
  localStorage.setItem('tasks', JSON.stringify(tasks));

  displayTasks();
}

// Event listener for adding a task
addTaskButton.addEventListener('click', addTask);

// Display tasks on initial load
displayTasks();