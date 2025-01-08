class ToDo {
  constructor() {
    this.todoList = document.getElementById("list");
    this.todoInput = document.getElementById("input");
    this.addButton = document.getElementById("add");
    this.addButton.addEventListener("click", () => this.addTask());
  }

  addTask() {
    const taskText = this.todoInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    const taskItem = document.createElement("li");
    taskItem.className =
      "list-group-item d-flex justify-content-between align-items-center";
    taskItem.textContent = taskText;

    const completeButton = document.createElement("button");
    completeButton.innerText = "Complete";
    completeButton.className = "btn btn-success btn-sm";
    completeButton.addEventListener("click", () =>
      this.toggleComplete(taskItem)
    );

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className = "btn btn-danger btn-sm";
    deleteButton.addEventListener("click", () => this.deleteTask(taskItem));

    const buttonContainer = document.createElement("div");
    buttonContainer.appendChild(completeButton);
    buttonContainer.appendChild(deleteButton);
    taskItem.appendChild(buttonContainer);

    this.todoList.appendChild(taskItem);

    this.todoInput.value = "";
  }

  toggleComplete(task) {
    task.classList.toggle("completed");
  }

  deleteTask(task) {
    this.todoList.removeChild(task);
  }
}
const myToDoApp = new ToDo();
