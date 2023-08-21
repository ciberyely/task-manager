import tasks from "./database.js";
import { listTasks } from "./showlist.js"
import crudTask from "./crud.js"

const btnCreateTask = document.querySelector("#btnCreateTask");

btnCreateTask.addEventListener("click", () => {
    crudTask.add();
  });


listTasks(tasks);





