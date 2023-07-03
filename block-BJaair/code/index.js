class Todos {
    constructor(root, list = []) {
      this.todos = JSON.parse(localStorage.getItem("todos")) || list;
      this.root = root;
    }
  
    add(title, category) {
      let todo = new Todo(title, category);
      this.todos.push(todo);
  
      localStorage.setItem("todos", JSON.stringify(this.todos));
      this.createUiAllTodo();
      return this.todos.length;
    }
  
    createUiAllTodo() {
      this.root.innerHTML = "";
  
      this.todos.forEach((todo) => {
        let ui = Todo.prototype.createUi.call(todo); // Use instance method directly instead of using the prototype
       
        ui.addEventListener("dblclick", () => {
         
            let changeTitleInput = ui.querySelector(".titleInput");
            changeTitleInput.addEventListener("blur", (e) => {
              todo.title = e.target.value;
              changeTitleInput.value = todo.title;
              this.updateLocalStorage();
            });
  
            let changeCategoryInput = ui.querySelector(".categoryInput");
            changeCategoryInput.addEventListener("blur", (e) => {
              todo.category = e.target.value;
              changeCategoryInput.value = todo.category;
              this.updateLocalStorage();
            });

        });
  
        this.root.append(ui);
      });
    }
  
    updateLocalStorage() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }
  
  class Todo {
    constructor(title, category) {
      this.title = title;
      this.category = category;
    }
  
    createUi() {
      let form = document.createElement("form");
      form.classList.add("noticeBoardDiv");
      let titleInput = document.createElement("input");
      titleInput.type = "text"; // Corrected the input type
      titleInput.classList.add("titleInput");
      let categoryInput = document.createElement("input");
      categoryInput.type = "text";
      categoryInput.classList.add("categoryInput");
      titleInput.value = this.title;
      categoryInput.value = this.category;
  
      form.append(titleInput, categoryInput);
  
      return form;
    }
  }
  
  let noticeBoard = new Todos(document.querySelector(".add-notice-board"));
  
  let title = document.querySelector(".title");
  let category = document.querySelector(".category");
  
  title.addEventListener("blur", (e) => {
    inputValue = e.target.value;
  });
  
  category.addEventListener("blur", (e) => {
    let categorySelector = e.target.value;
    noticeBoard.add(inputValue, categorySelector);
    document.querySelector(".form").reset();
  });
  
  noticeBoard.createUiAllTodo();