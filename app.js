const taskForm = document.getElementById('task-area');
const taskInput = document.getElementById('single-task');
const taskList = document.getElementById('tasks');

function addTask(e) {
    e.preventDefault();
    if (taskInput.value === '') return;
    const task = createTask(taskInput.value);
    taskList.appendChild(task);
    taskInput.value = '';
}

function createTask(taskName) {
    const task = document.createElement('li');
    task.classList.add('task');
    task.innerHTML = `
        <input type="checkbox">
        <label>${taskName}</label>
        <span class="delete">×</span>
    `;

    const deleteButton = task.querySelector('.delete');
    deleteButton.addEventListener('click', deleteTask);

    return task;
}

function deleteTask(event) {
    event.target.parentElement.remove();
}

taskForm.addEventListener('submit', addTask);
