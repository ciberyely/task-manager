import tasks from "./database.js";
import ui from "./ui.js";
import { listTasks } from "./showlist.js";


function add() {
  const name = document.getElementById("nameTask").value,
    description = document.getElementById("descriptionTask").value,
    status = "pendiente";

  if (name === "" || description === "") {
    showMessage("Please Insert data in all fields", "danger");
    return
  }
  const objeto = {
    name,
    description,
    status,
  };

  tasks.push(objeto);
  listTasks(tasks);
  ui.resetForm();
  ui.showMessage("Task Add of List Succsssfully", "success");
}

function remove(index) {
  tasks.splice(index, 1);
  listTasks(tasks);
  ui.showMessage("Task DeketeRemove of List Succsssfully", "danger");
}

function finish(index) {
  console.log("Task Finish of List " + index);
}

const grud = {
  add,
  remove,
  finish
};

export { grud as default };