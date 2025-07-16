const form = document.querySelector('.form');
const input = document.querySelector('input');
const button = document.querySelector('button');
const todos = document.querySelector('.todos');

form.addEventListener('submit', function (e) {
    e.preventDefault()
	let val = input.value.trim()
	if(val){
        addToDoList({
            text: val, 
            status:''
        });
        saveToDoList();
    }
	input.value = ''
});

function addToDoList(toDo) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${toDo.text}</span>
        <i class="fas fa-trash"></i>    
    `;

    if (toDo.status === 'completed') {
        li.setAttribute('class', 'completed');
    }

    li.addEventListener('click', () => {
        li.classList.toggle('completed');
        saveToDoList();
    });

    li.querySelector('i').addEventListener('click', (e) => {
        e.target.parentElement.remove();
        saveToDoList();
    });
    todos.appendChild(li);
};

function saveToDoList() {
    let toDoList = document.querySelectorAll('li');
    let toDoStorage = [];
    toDoList.forEach((item) => {
        let span = item.querySelector('span');
        let text = span ? span.innerText : '';
        let status = item.classList.contains('completed');
        if(text){
            toDoStorage.push({
                text,
                status
            });
        }
    });
    localStorage.setItem('todoList', JSON.stringify(toDoStorage));
};

function init() {
    let data = JSON.parse(localStorage.getItem('todoList')) || [];
    if (data) {
        data.forEach(function (item) {
            addToDoList(item);
        });
    }
};

init();
