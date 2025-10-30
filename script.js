console.log("Script started");

function addTask(event) {
    // Get user input from text box
    let textbox = document.getElementById("task-input");
    let task = textbox.value;
    console.log(task);

    // Create list item 

    // Get todo-list container
    let todoList = document.getElementById("todo-list");

    // Create list-item div
    let listDiv = document.createElement("div");
    listDiv.id = "task" + todoList.childElementCount;
    listDiv.classList.add("list-item");
    console.log(listDiv.id);

    // Create checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox" + todoList.childElementCount;

    //Create label
    let label = document.createElement("label");
    label.id = "label" + todoList.childElementCount;
    label.innerText = task;

    // Append check box to list-item div
    listDiv.appendChild(checkbox);

    // Append label to div
    listDiv.appendChild(label);

    // Append list-item div to the list
    todoList.appendChild(listDiv);
}