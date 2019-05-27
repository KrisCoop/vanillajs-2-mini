document.querySelector("form").addEventListener("submit", addToDo);

function addToDo(event) {
    event.preventDefault();
    const item = document.createElement("li");
    item.innerText = document.getElementById("item").value;
    item.addEventListener("click", completeToDo);

    const button = document.createElement("button")
    button.innerText = "x"
    button.addEventListener("click", removeToDo);
    item.append(button);

    const list = document.querySelector("ul");
    list.appendChild(item);
}

function removeToDo(event) {
    event.target.parentNode.remove();
}

function completeToDo (event) {
    const value = event.target.getAttribute("aria-checked")
    if (value !== "true") {
        event.target.setAttribute("aria-checked", "true");
    } else {
        event.target.setAttribute("aria-checked", "false");
    }
}
