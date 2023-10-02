const btn = document.querySelector("#my-btn");
const input = document.querySelector(".input");
const list = document.querySelector(".list");
const validator = document.querySelector(".validator");
// function addTask() {
//     if (input.value === '') {
//         alert("You must write something!");
//     }
//     else {
//         let li = document.createElement("li");
//         li.innerHTML = input.value;
//         list.appendChild(li);
//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7";
//         li.appendChild(span);
//     }
// }
function saveAll() {
    const allTodos = JSON.stringify(list.innerHTML);
    localStorage.setItem("myTodoes", allTodos);
}
function removeTodo(currentElement) {
    console.log(currentElement.parentNode.parentNode);
    currentElement.parentNode.parentNode.remove();
    saveAll();
}
function deleteAll() {
    if (list.childElementCount === 0) {
        validator.textContent = "List is empty"
    }
    else {
        list.innerHTML = ""
    }
    saveAll();

}
function addTodo() {
    if (input.value !== "") {
        const li = document.createElement("li");

        li.innerHTML = `<div>
            <span>${input.value}</span>
            <button onclick="editTodo(this)" class="btn btn-success" type="button">
            <i class="fa fa-pencil-square"></i></button>

            <button onclick="removeTodo(this)" class="btn btn-danger" type="button">
            <i class="fa fa-trash"></i></button>
        
            </div>`;
        list.appendChild(li);
        input.value = "";
        validator.textContent = "";
    }
    else {
        validator.textContent = "Empty input";

    }
    saveAll();
}
function editTodo(item) {
    if (item.textContent === 'Done') {
        console.log("if cond", item.previousElementSibling);
        const todoName = item.previousElementSibling.vale;
        let span = document.createElement("span");
        span.textContent = todoName;
        item.parentElement.replaceChild(span, item.previousElementSibling);
        item.textContent = "edit";
    }
    else {
        const todoName = item.previousElementSibling.textContent;
        console.log(todoName);
        item.textContent = "Done";
        let input = document.createElement("input");
        input.type = "text";
        input.value = todoName;
        item.parentElement.replaceChild(input, item.previousElementSibling);
    }
    saveAll();
}
function loadAllTodos() {
    const allTodos = JSON.parse(localStorage.getItem("myTodos"));
    console.log("allTodos", allTodos);
    list.innerHTML = allTodos;
}