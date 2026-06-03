var tasks = [];

var taskList = document.getElementById("taskList");

function closeTask(task){ 
    if(confirm(`Do you want to proceed with Delete Task: ${task.Description}`)){
        const idx = tasks.findIndex(ele => ele.Description === task.Description);

        if(idx === -1){
            alert('Task not found.');
            return;
        }

        tasks.splice(idx,1);
        renderTasks();
    }
}

function completeTask(task) {
    const idx = tasks.findIndex(ele => ele.Description === task.Description);

    if(idx === -1){
        alert('Task not found.');
        return;
    }
    tasks.splice(idx,1,{Description: task.Description,isCompleted: true});
    
    alert(`Task: ${task.Description} is marked as completed successfully !!`);
    renderTasks();
}

function renderTask(task){
    let div = document.createElement('div');
    div.className = "taskDiv";
    
    let element = document.createElement('div');
    element.className = "taskDescription";
    element.innerText = task.Description;

    let completeButton = document.createElement("button");
    completeButton.innerText = task.isCompleted ? "Completed" : "Mark As Completed";
    completeButton.addEventListener('click', () => completeTask(task));
    completeButton.disabled = task.isCompleted ? true : false;
    completeButton.className = task.isCompleted ? "completedTask" : "pendingTask";
    var closeBtn = document.createElement("button");
    closeBtn.className = "closeBtn";    
    closeBtn.innerText = "Delete";
    closeBtn.addEventListener('click', () => closeTask(task));

    div.appendChild(element);
    div.appendChild(completeButton);
    div.appendChild(closeBtn);

    taskList.appendChild(div);
}

function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task) => renderTask(task));
}
renderTasks();

function addTask() {
    const txtInput = document.getElementById("myInput");
    const taskDescription = txtInput.value;

    if(taskDescription.trim() === ""){
        alert("Enter the valid Input");
        return;
    }
    txtInput.value = "";
    tasks.push({Description: taskDescription,isCompleted: false});
    renderTasks();
}

const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click",addTask);

