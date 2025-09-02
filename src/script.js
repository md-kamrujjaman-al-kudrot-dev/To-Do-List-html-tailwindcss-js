// DOM Elements
const input = document.getElementById("input");
const addButton = document.getElementById("add_button");
const list = document.getElementById("todo_list");




// Event Listener for Add Button
addButton.addEventListener("click", () => {
    const value = input.value.trim();

    // Prevent empty input
    if (value === "") return;


    const todos = JSON.parse(localStorage.getItem("todo") || "[]");
    todos.push(value);
    localStorage.setItem("todo", JSON.stringify(todos));


    addToUi(value);
    // Clear input field
    input.value = "";
});


function addToUi(value) {
    // Create elements
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const wrapper = document.createElement("div");
    const Button = document.createElement("button")
    

    // Configure checkbox
    checkbox.type = "checkbox";
    checkbox.classList.add("cursor-pointer");

    // Configure button
    Button.classList.add(
        "bg-gray-200","pl-1","pr-1","mb-1","text-[0.8rem]","cursor-pointer","rounded"

    )
    Button.innerText = "cancle"


    // Configure list item
    li.textContent = value;
    li.classList.add("font-bold", "[&::first-letter]:uppercase");

    // Configure wrapper
    wrapper.classList.add(
        "flex",
        "border-b",
        "border-gray-300",
        "gap-2",
        "items-center"
    );


    // Append elements
    wrapper.appendChild(checkbox);
    wrapper.appendChild(li);
    wrapper.appendChild(Button)
    list.appendChild(wrapper);
}















