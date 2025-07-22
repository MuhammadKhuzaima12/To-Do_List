var todos = [];

function add_tasks() {
  var task = document.getElementById("add_task").value.trim();
  if (task !== "") {
    var todo = {
      title: task,
      id: crypto.randomUUID(),
    };

    todos.push(todo);
    displayTodoList();
    document.getElementById("add_task").value = "";
  }
}

document.getElementById("add_task").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    add_tasks();
  }
});

function displayTodoList() {
  var list = document.getElementById("todosList");
  var html = "";

  // Show the container if there are tasks
  var div_list = document.getElementById("to-dos");
  if (todos.length > 0) {
    div_list.style.display = "block";
  } else {
    div_list.style.display = "none"; // Hide if no tasks
  }

  for (var i = 0; i < todos.length; i++) {
    html += `
      <li >
        ${todos[i].title}
        <div class="btns" >
        <span>
        <button type="button" class="btn btn-outline-warning" onclick="edit_task('${todos[i].id}')">
        <i class="fa-solid fa-pencil"></i>
        </button>
        <button type="button" class="btn btn-outline-danger" onclick="del_task('${todos[i].id}')">
        <i class="fa-solid fa-trash"></i>
        </button>
        </span>
        </div>
      </li>`;
  }

  list.innerHTML = html;
}

function edit_task(id) {
  var title_upd = prompt("Enter new Task:");
  if (title_upd.trim() !== "") {
    for (var i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        todos[i].title = title_upd.trim();
        break;
      }
    }
    displayTodoList();
  }
}

function del_task(id) {
  for (var i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      todos.splice(i,1);
      break;
    }
  }
  displayTodoList();
}
