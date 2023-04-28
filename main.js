// define function that acts on pushing the add button

document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("You forgot your task...")
    } // check if task name was entered

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="tick">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `; // add the new task tag to the list of tasks

        document.querySelector('#newtask input').value = '';

        var current_tasks = document.querySelectorAll(".tick");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                if (document.querySelector(".tick").style.backgroundColor == 'green') {
                    this.parentNode.remove();
                } else {
                    document.querySelector(".tick").style.backgroundColor = 'green';
                }
                
                // // remove task when box is clicked
            }
        }
    }
}