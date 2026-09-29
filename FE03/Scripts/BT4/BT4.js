
let txtTask = document.getElementById("txtTask");
let btnAdd = document.getElementById("btnAdd");
let todoList = document.getElementById("todoList");



function themCongViec() {

    let task = txtTask.value.trim();


    if (task === "") {
        alert("Vui lòng nhập công việc!");
        txtTask.focus();
        return;
    }


    let li = document.createElement("li");


    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";


    let span = document.createElement("span");
    span.className = "task-text";
    span.textContent = task;


    let btnDelete = document.createElement("button");
    btnDelete.className = "btn-delete";
    btnDelete.textContent = "×";


    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(btnDelete);


    todoList.appendChild(li);


    txtTask.value = "";


    txtTask.focus();
}


todoList.addEventListener("change", function (e) {

    if (e.target.type === "checkbox") {

        let li = e.target.parentElement;

        li.classList.toggle("completed");
    }
});



todoList.addEventListener("click", function (e) {

    if (e.target.classList.contains("btn-delete")) {

        let li = e.target.parentElement;

        li.remove();
    }
});

btnAdd.addEventListener("click", themCongViec);

txtTask.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {
        themCongViec();
    }
});