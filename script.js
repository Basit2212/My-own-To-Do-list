const inputBox = document.getElementById("btn")
const list = document.getElementById("list")

function addTask() {
    if (inputBox.value === "") {
        alert("write something")
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        list.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span);

    }
    inputBox.value = ""
    saveTasks() 
}
list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveTasks
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        saveTasks()
    }
    
}, false)
function saveTasks() {
    localStorage.setItem("data", list.innerHTML)


}
function showTask() {
    list.innerHTML = localStorage.getItem("data")

}
showTask()