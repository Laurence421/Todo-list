const input = document.querySelector('#input-text');
const table = document.querySelector('#table');
const headers = document.querySelector('#form');
let tasks = JSON.parse(localStorage.getItem('task')) || [];

headers.addEventListener('submit', function(event){
    event.preventDefault();

    const text = input.value.trim();
    if (!text) return;
    
    createTask(text);
    input.value = '';
});

function createTask(text){
    const todo = {
        id: Date.now(),
        text: text,
        isCompleted: false
    };
    tasks.push(todo);
    displayTask();

}
function deleteTask(id){
    tasks = tasks.filter(task => task.id !==id);
    displayTask();
}

function displayTask() {
    table.innerHTML='';

    tasks.forEach(task => {
        table.insertAdjacentHTML('beforeend', `
                <li class="list"><p><input type="checkbox" name="" id="">${task.text}</p>  
                <button class="delete-btn" onclick="deleteTask(${task.id})"><i class="uil uil-trash-alt"></i></button></li>`
        );
    });

}

