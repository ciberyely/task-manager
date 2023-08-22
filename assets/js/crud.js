import tasks from "./database.js";

import { listTasks } from "./showlist.js";

function resetData() {
  document.getElementById("task-form").reset();
}

function add() {
  const name = document.getElementById("nameTask").value;
  const description = document.getElementById("descriptionTask").value;
  const status = "pendiente";

  const objeto = {
    name,
    description,
    status,
  };
  tasks.push(objeto);

  console.log("Task Add of List");
  listTasks(tasks);
  resetData();
}

function remove(index) {
  console.log("Task Remove of List " + index);
  tasks.splice(index, 1);
  listTasks(tasks);
}

function finish(index) {
  console.log("Task Finish of List " + index);
}

function restore() {
  console.log("Task Restore of List");
}

const grud = {
  add,
  remove,
  finish,
  restore,
};

export { grud as default };
