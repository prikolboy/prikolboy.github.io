let taskInput = document.querySelector(".form-task");
let addBtn = document.querySelector(".button");
let tasklist = document.querySelector(".task-list");

function addNewTask(event) {
    event.preventDefault();

    let task = taskInput.value;

    if (!task) return;

    let newItem = document.querySelector('#template').cloneNode(true).content;

    newItem.querySelector('.task__text').value = task;
    newItem.querySelector('.task__delete').addEventListener("click", deleteTask)

    tasklist.append(newItem);
    taskInput.value = "";
    taskInput.focus();
}

function deleteTask(event) {
    let target = event.target.parentElement;
    target.remove();
}

addBtn.addEventListener('click', addNewTask);