import tasks from "./database.js";
import { listTasks } from "./showlist.js"

function add() {
    console.log("Task Add of List")
}

function remove(index) {
    console.log("Task Remove of List " + index)
    tasks.splice(index, 1)
    listTasks(tasks);
}

function finish(index) {
    console.log("Task Finish of List " +index)
}

function restore() {
    console.log("Task Restore of List")
}

const grud = {
    add,
    remove,
    finish,
    restore
}

export { grud as default }








