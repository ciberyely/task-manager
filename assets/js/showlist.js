import crudTask from "./crud.js";

function listTasks(tasks) {

    const table = document.querySelector(".table tbody");

    table.innerHTML = "";

    tasks.forEach((task, index) => {

        const fila = document.createElement("tr");

        const idTask = document.createElement("td");
        idTask.textContent = index + 1;
        fila.appendChild(idTask);

        const nameTask = document.createElement("td");
        nameTask.textContent = task.name;
        fila.appendChild(nameTask);

        const descriptionTask = document.createElement("td");
        descriptionTask.textContent = task.description;
        fila.appendChild(descriptionTask);

        const statusTask = document.createElement("td");

        const buttonDelete = document.createElement("button");
        buttonDelete.textContent = "Delete";
        buttonDelete.className = "btn btn-danger mx-2";
        buttonDelete.addEventListener("click", () => {
            crudTask.remove(index);
          });
        

        statusTask.appendChild(buttonDelete);

        const buttonFinish = document.createElement("button");

        buttonFinish.textContent = "Finish";
        buttonFinish.className = "btn btn-primary";
        buttonFinish.addEventListener("click", () => {
            crudTask.finish(index);
          });
        

        statusTask.appendChild(buttonFinish);

        fila.appendChild(statusTask);

        table.appendChild(fila);
    })
    //console.log(table);
}

export { listTasks }

