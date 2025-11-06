console.log("Script started");

function addTask(event) {
    // Get user input from text box
    let textbox = document.getElementById("task-input");
    let task = textbox.value;

    createTaskDiv();

    // Save task to local storage
    localStorage.setItem(taskDiv.id, task);

    console.log(localStorage.length);
}

function createTaskDiv(task) {
    // Create a list item
    // Get todo-list container
    let todoList = document.getElementById("todo-list");

    // Create list-item div
    let taskDiv = document.createElement("div");
    taskDiv.id = "task" + todoList.childElementCount;
    taskDiv.classList.add("list-item");

    // Create checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox" + todoList.childElementCount;
    checkbox.addEventListener("change", removeTask);

    //Create label
    let label = document.createElement("label");
    label.id = "label" + todoList.childElementCount;
    label.innerText = task;

    // Append check box to list-item div
    taskDiv.appendChild(checkbox);

    // Append label to div
    taskDiv.appendChild(label);

    // Append list-item div to the list
    todoList.appendChild(taskDiv);
}


function removeTask(event) {
    // Get id of checkbox
    let checkboxClicked = event.target.id;

    // Get id number from the checkbox id
    let taskNumber = checkboxClicked.substring(8);

    // Get task div by id
    let taskRemoved = document.getElementById("task" + taskNumber);

    // Get container
    let todoList = document.getElementById("todo-list");

    // Apply animation
    taskRemoved.classList.add("remove-task");

    // Remove the task div from the container
    setTimeout(function() {
        todoList.removeChild(taskRemoved);
    }, 1000);
}

function loadTasks() {
    console.log("loading tasks....")
    // Get each task from local storage
    for(let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let task = localStorage.getItem(key);
        console.log(task);
    }

    // Create task divs for each task

    // 
}

loadTasks();