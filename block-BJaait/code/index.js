class TodoList {
    constructor(root, list = []) {
        this.root = root;
        this.todos = list;
        this.draggedElement = null;
        this.createUiAll();
    }

    add(text) {
        let todo = new Todo(text);
        this.todos.push(todo);
        this.createUi(todo);
    }

    createUi(todo) {
        let li = document.createElement("li");
        li.innerText = todo.title;
        li.draggable = true;
        li.addEventListener("dragstart", this.dragStart.bind(this));
        li.addEventListener("dragover", this.dragOver.bind(this));
        li.addEventListener("drop", this.drop.bind(this));
        li.addEventListener("dragenter", this.dragEnter.bind(this));
        li.addEventListener("dragleave", this.dragLeave.bind(this));
        li.addEventListener("dragend", this.dragEnd.bind(this));
        this.root.append(li);
    }

    createUiAll() {
        this.root.innerHTML = "";
        this.todos.forEach((todo) => {
            this.createUi(todo);
        });
    }

    dragStart(event) {
        this.draggedElement = event.target;
        this.draggedElement.style.opacity = "0.4";
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("text/html", this.draggedElement.innerHTML);
    }

    dragOver(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
        return false;
    }

    drop(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.draggedElement !== event.target) {
            const sourceHTML = this.draggedElement.innerHTML;
            this.draggedElement.innerHTML = event.target.innerHTML;
            event.target.innerHTML = sourceHTML;
        }
        return false;
    }

    dragEnter(event) {
        event.target.classList.add("over");
    }

    dragLeave(event) {
        event.target.classList.remove("over");
    }

    dragEnd(event) {
        event.target.style.opacity = "1";
        event.target.classList.remove("over");
        this.root.querySelectorAll("li").forEach((element) => {
            element.classList.remove("over");
        });
    }
}



class Todo {
    constructor(title) {
        this.title = title;
    }
}



let Alltodo = new TodoList(document.querySelector(".list-container"));
let spanListen = document.querySelector(".span");

spanListen.addEventListener("click", () => {
    let input = document.querySelector(".input");
    if (input.value.length > 0) {
        Alltodo.add(input.value);
        input.value = "";
    }
});