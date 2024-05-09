var tasks =[];

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() ===""){
        alert("veuillez entrez une tache!");
        return;
    }



    var li = document.createElement("li");
    var textNode = document.createTextNode(taskInput.value);
    li.appendChild(textNode);
    taskList.appendChild(li);
    taskInput.value="";
    li.addEventListener("click", function(){
        if(li.classList.contains("completed")){
            li.classList.remove("completed");
        } else{
            li.classList.add("completed")
        }


    });

    li.addEventListener("dblclick" , function(){
        taskList.removeChild(li);

    });

}
