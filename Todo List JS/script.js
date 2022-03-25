
const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector(" #todoInput");
const todoListGroup = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];

eventListeners();

function eventListeners(){
    todoForm.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",allToDoLoaded);
    secondCardBody.addEventListener("click",deleteItem);
}

// Delete Item Function
function deleteItem(e){
    if(e.target.className === "fa-solid fa-xmark"){
        e.target.parentElement.parentElement.remove();
        deleteToDoFromStorage(e.target.parentElement.parentElement.textContent);
        showalert("success","Silme İşlemi başarılı...");
    }
}

// Delete From Storage Function
function deleteToDoFromStorage(deleteTodo){
    let todos = getTodosFromStorage();

    todos.forEach(function(todo,index){
        if(todo === deleteTodo){
            todos.splice(index,1);
        }
    })

    localStorage.setItem("todos",JSON.stringify(todos));
}

//DOMContentLoaded Function
function allToDoLoaded(){
    let todos = getTodosFromStorage();

    todos.forEach(element => {
        addTodoUI(element);
    });
}


// Add To Todo
function addTodo(e){
    const newTodo = todoInput.value.trim();

    if( newTodo == ""){
        showalert("danger","Lütfen bir todo girin...");
    }
    else{
        addTodoUI(newTodo);
        addToToDoStorage(newTodo);
        showalert("success","Başarıyla eklendi...")
    }
 
    e.preventDefault();
}

// Add To UI
function addTodoUI(newTodo){
    // <li class="d-flex justify-content-between list-group-item mb-2">
        // Todo
        // <a href="">
        //     <i class="fa-solid fa-xmark"></i>
        // </a>
    // </li>

    // Create List Item
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between mb-2";

    // Create Link Item
    const link = document.createElement("a");
    link.href ="#";
    link.className = "delete-item";
    link.innerHTML = "<i class='fa-solid fa-xmark'></i>";
    
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    todoListGroup.appendChild(listItem);    
    todoInput.value = "";
    
}

function showalert(type,message){

    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;
    
    firstCardBody.appendChild(div);

    setTimeout(function(){
        div.remove()
    },1000);

}

function getTodosFromStorage(){
    let todos;

    localStorage.getItem("todos") == null ? todos = [] : todos = JSON.parse(localStorage.getItem("todos"));

    // if(localStorage.getItem("todos")=== null){
    //     todos = [];
    // }
    // else{
    //     todos = JSON.parse(localStorage.getItem("todos"));
    // }
    return todos;
}

function addToToDoStorage(newTodo){
    let todos = getTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));//ekleme işleminden sonra localstorage güncellenir.
}