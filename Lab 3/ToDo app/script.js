const taskInput = document.querySelector("#newTodo");
const addTaskBtn = document.querySelector("#addTodo");
const taskList = document.querySelector("#tasks");

let tasks = [];

function addTask(){
    tasks.push({ name: taskInput.value, done: false });
    renderTasks();
    taskInput.value = "";
}

function renderTasks(){
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    taskItem.innerHTML =
      `<div class="outtask">
      <input type="checkbox"  class="task-done" />
      <div  class="item ${task.done ? "done" : ""}">${task.name}</div>
      <div onclick="deleteTask(${index})"><i class="fa-solid fa-trash" style="color:red;"></i></div>
      </div>`;
    taskItem.querySelector(".task-done").addEventListener("click", () => {
      markTaskDone(index);
    });
    taskList.appendChild(taskItem);
  });
};

function deleteTask(index){
  tasks.splice(index, 1);
  renderTasks();
};
function markTaskDone(index){
    if(tasks[index].done){
        tasks[index].done=false
    }
    else{
        tasks[index].done = true;
    }
  
  renderTasks();
};

addTaskBtn.addEventListener("click", addTask);

renderTasks();
