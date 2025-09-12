const input = document.getElementById("input");
const addButton = document.getElementById("add_button");
const list = document.getElementById("todo_list");
const clearCompletedBtn = document.getElementById("Clear_Completed");
const allBtn = document.getElementById("All_btn");
const completedBtn = document.getElementById("Completed_button");


// LocalStorage Helpers
function getTodos(){
    return JSON.parse(localStorage.getItem('todo') || [])
}

function saveTodos(todos){
    localStorage.setItem("todo",JSON.stringify(todos))
}


function addTodo(text){
    const todos = getTodos();

    const newTodo = {
        id: Date.now(),
        text,
        completed: false
    };
    todos.push(newTodo);
    saveTodos(todos);
    renderTodos()
}

function toggleTodo(id){
    const todos = getTodos();

    const updatedTodos = todos.map((todo)=>{
        if(todo.id === id){
            return {...todo,completed: !todo.completed}
        }
        return todo;
    })
    saveTodos(updatedTodos);
    renderTodos();
}

function deleteTodo(id){
    const todos = getTodos();
    const filtered = todos.filter((todo)=>{
        if(todo.id !== id){
            return true;
        }else{
            return false;
        }
    });
    saveTodos(filtered);
    renderTodos();
}

function clearCompletedTodos(){
    const todos = getTodos();
    const activeTodos = todos.filter(todo => !todo.completed)


    saveTodos(activeTodos);
    renderTodos();

}

function renderTodos(filter = "all"){
    const todos = getTodos();
    list.innerHTML = "";

    let filteredTodos = todos;
    if(filter === "completed"){
        filteredTodos = todos.filter(todo => todo.completed)
    }else if(filter === "active"){
        filteredTodos = todos.filter(todo.filter(todo => !todo.completed))
    }

    filteredTodos.forEach(todo => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("flex", "gap-2", "items-center","border-b","border-gray-300")

        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;
        checkbox.classList.add("cursor-pointer");
        checkbox.addEventListener("change",()=>{
            toggleTodo(todo.id)
        })

        const li = document.createElement("button")
        li.innerText = todo.text;
        li.classList.add("font-bold", "[&::first-letter]:uppercase");

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "❌";
        deleteBtn.classList.add("bg-gray-200", "pl-1", "pr-1", "text-[0.5rem]", "cursor-pointer", "rounded");
        deleteBtn.addEventListener("click", () => deleteTodo(todo.id));

        
        wrapper.appendChild(checkbox);
        wrapper.appendChild(li);
        wrapper.appendChild(deleteBtn);

        list.appendChild(wrapper);
    });
}

addButton.addEventListener("click", ()=>{
    const value = input.value.trim();

    if(value === "") return;
    addTodo(value);
    input.value = ""; 
})

clearCompletedBtn.addEventListener("click", clearCompletedTodos)
allBtn.addEventListener("click", () => renderTodos("all"))
completedBtn.addEventListener("click", () => renderTodos("completed"))

window.onload = () => renderTodos();