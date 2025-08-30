const input = document.getElementById("input")
const add_button = document.getElementById("add_button")
const list = document.getElementById("todo_list")


add_button.addEventListener("click",()=>{
    const value = input.value

    const li = document.createElement("li")

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox";

    const wrapper  = document.createElement("div")
    wrapper.classList.add(
        "flex",
        "border-b", "border-gray-300"
        ,"gap-2","item-center"
    )
    
    if(value === ""){
        wrapper.appendChild(none)
    }
    
    li.innerHTML = value;
    
    li.classList.add(
        "font-bold"
        , "capitalize"
    );

    checkbox.classList.add(
        "cursor-pointer"
    );

    wrapper.appendChild(checkbox)
    wrapper.appendChild(li)

    // li.appendChild(wrapper)

    list.appendChild(wrapper);

    input.value = "";
})