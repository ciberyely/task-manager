
function resetForm() {
    document.getElementById("task-form").reset();
}

function showMessage(message, cssClass) {
    const div = document.createElement("div");
    div.className = `alert alert-${cssClass} mt-2`;
    div.appendChild(document.createTextNode(message));

    // Show in The DOM
    const container = document.querySelector(".container");
    const app = document.querySelector("#App");

    // Insert Message in the UI
    container.insertBefore(div, app);

    // Remove the Message after 3 seconds
    setTimeout(function () {
        document.querySelector(".alert").remove();
    }, 3000);
}

const ui = {
    resetForm,
    showMessage
}

export { ui as default }
