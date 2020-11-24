let obj = {};
let list = JSON.parse(localStorage.getItem("fullList"))

const nameEl = document.getElementById("name");
const emailEl = document.getElementById("email")
const buttonEl = document.getElementById("btn");

buttonEl.addEventListener('click', submit);

function submit() {
    let name = nameEl.value;
    let email = emailEl.value;
    obj.name = name
    obj.email = email
    if (list) {
        list.push(obj);
    } else {
        list = [obj]
    }
    localStorage.setItem("fullList", JSON.stringify(list))
    console.log(list, "fullList")
    console.log(localStorage.fullList, "localstorage")
}




