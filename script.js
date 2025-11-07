console.log("Script started");

function addTask(event) {
    // Get user input from text box
    let textbox = document.getElementById("task-input");
    let task = textbox.value;

    // Clear text box
    textbox.value = "";

    // Check for empty task text
    if(task == "") {
        alert("Please enter a task !");
        return;
    }

    let idNum = generateIdNum();

    createTaskDiv(task, idNum);

    // Save task to local storage
    localStorage.setItem("task" + idNum, task);

    console.log(localStorage.length);
}

function generateIdNum() {
    //let todoList = document.getElementById("todo-list");
    //let idNum = todoList.childElementCount;
    //return idNum;

    // Iterate through local storage
    // Check for first avaliable id number
    let idNum = 0;
    while (localStorage.getItem("task" + idNum) != null) {
        idNum++;
    }
    return idNum;
} 

function createTaskDiv(task, idNum) {
    // Create a list item
    // Get todo-list container
    let todoList = document.getElementById("todo-list");

    // Create list-item div
    let taskDiv = document.createElement("div");
    taskDiv.id = "task" + idNum;
    taskDiv.classList.add("list-item");

    // Create checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox" + idNum;
    checkbox.addEventListener("change", removeTask);

    //Create label
    let label = document.createElement("label");
    label.id = "label" + idNum;
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
        localStorage.removeItem("task" + taskNumber);
    }, 1000);
}

function loadTasks() {
    console.log("loading tasks....")
    // Get each task from local storage
    for(let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let task = localStorage.getItem(key);
        console.log(task);

        // Create task divs for each task
        createTaskDiv(task, key.substring(4));
    }
    
}

loadTasks();