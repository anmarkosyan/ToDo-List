//console.log('Your JS is linked up. Be the person you needed when you were little.');
// we need to create
//<div class="to do">
//  <li class="to do item"></li>
//    <button class="completeButton">Check</button>
//    <button class="completeButton">trash</button>
// </div>

// selectors
const todoInput = document.querySelector('.toDo-input');
const todoList = document.querySelector('.toDo-list');
const todoButton = document.querySelector('.toDo-button');
const filterOption = document.querySelector('.filter-todo');

// event Listeners
document.addEventListener('DOMContentLoaded',getTodos );
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//functions
function addTodo (event){
    //prevent form from submitting
    event.preventDefault();

    // create to do Div tag
    const todoDiv = document.createElement("div");
    //create class for div tag
    todoDiv.classList.add('todo');

    //create li tag
    const newTodo = document.createElement('li');
    //create class for li tag
    newTodo.classList.add('todo-item');
    //put some text within
    newTodo.innerText = todoInput.value ;
    // for appending li tag within div tag
    todoDiv.appendChild(newTodo);

    //add to do to local storage
    saveLocalTodos(todoInput.value);

    //create CHECK MARK button
    const completeButton = document.createElement('button');
    //add within button icon
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    //add class
    completeButton.classList.add('complete-btn');
    //appending button in div tag
    todoDiv.appendChild(completeButton);

    //add TRASH BUTTON
    const trashButton = document.createElement('button');
    //add within button icon
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    //add class
    trashButton.classList.add('trash-btn');
    //appending button in div tag
    todoDiv.appendChild(trashButton);

    //append this all in to do List
    todoList.appendChild(todoDiv);
    //clear INPUT after adding
    todoInput.value = "";

}
function deleteCheck (e){
    const item = e.target;
    //Delete to do
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //animation
        todo.classList.add('fall');
        removeLocalTodos(todo);
        todo.addEventListener('transitionend',function(){
            todo.remove();
        });

    }
    //CHECK mark,if its done write complete
    if(item.classList[0] === 'complete-btn'){
        const toDo = item.parentElement;
        toDo.classList.toggle('complete');
    }
}
function filterTodo (e){
    const toDos = todoList.childNodes;
    console.log(toDos);
    toDos.forEach(function(todo){
        switch (e.target.value) {
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if(todo.classList.contains("complete")){
                    todo.style.display= 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('complete')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                }
                break;
        }
    });
}


// Save information in local storage
function saveLocalTodos (todo) {
    //check if i already have thing there
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];

    }else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo);
    localStorage.setItem('todos',JSON.stringify(todos));
}

function getTodos (){
    //copy function saveLocalTo dos for saving display the items
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];

    }else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.forEach(function(todo){
        const todoDiv = document.createElement("div");
        //create class for div tag
        todoDiv.classList.add('todo');

        //create li tag
        const newTodo = document.createElement('li');
        //create class for li tag
        newTodo.classList.add('todo-item');
        //put some text within
        newTodo.innerText = todo ;
        // for appending li tag within div tag
        todoDiv.appendChild(newTodo);
        //create CHECK MARK button
        const completeButton = document.createElement('button');
        //add within button icon
        completeButton.innerHTML = '<i class="fas fa-check"></i>';
        //add class
        completeButton.classList.add('complete-btn');
        //appending button in div tag
        todoDiv.appendChild(completeButton);

        //add TRASH BUTTON
        const trashButton = document.createElement('button');
        //add within button icon
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        //add class
        trashButton.classList.add('trash-btn');
        //appending button in div tag
        todoDiv.appendChild(trashButton);

        //append this all in to do List
        todoList.appendChild(todoDiv);
    });


}
 function removeLocalTodos (todo){
    //copy function saveLocalTo dos for removing  item within storage
    let todos;
     if(localStorage.getItem('todos') === null){
         todos = [];

     }else {
         todos = JSON.parse(localStorage.getItem('todos'))
     }
     const todoIndex = todo.children[0].innerText;
     todos.splice(todos.indexOf(todoIndex),1);
     localStorage.setItem('todos',JSON.stringify(todos));
 }







