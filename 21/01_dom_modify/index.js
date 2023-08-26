const todoTitle = document.querySelector('.text-input');
const addTodoButton = document.querySelector('.add-button');
const todoList = document.querySelector('.todo-list');

function addTodo() {
    let divHtml = '<div class="todo">';
    divHtml += '<h3>' + todoTitle.value + '</h3>';
    divHtml += '<button type"button" class="remove-todo">ลบ</button>';
    divHtml += '</div>';
    todoList.innerHTML += divHtml;
}

addTodoButton.addEventListener('click', addTodo);