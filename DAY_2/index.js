const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoPend = document.querySelector(".js-toDoPend"),
  toDoDone = document.querySelector(".js-toDoDone");

const PENDING_LS = "PENDING";
const FINISHED_LS = "FINISHED";

let pendingToDo = [];
let finishedToDo = [];

function saveToDos() {
  localStorage.setItem(PENDING_LS, JSON.stringify(pendingToDo));
}

function restoreToDo(event) {
  const btn3 = event.target.parentNode;
  toDoPend.appendChild(btn3);
}

function deleteTodo(event) {
  const btn1 = event.target.parentNode;
  toDoPend.removeChild(btn1);
  const cleanToDos = pendingToDo.filter(function(toDo) {
    return toDo.id !== parseInt(btn1.id);
  });
  pendingToDo = cleanToDos;
  saveToDos();
}

function doneToDo(event) {
  const btn2 = event.target.parentNode;
  toDoDone.appendChild(btn2);

  btn2.innerText = "⏪";
  btn2.addEventListener("click", restoreToDo);
}

function paintToDo(text) {
  const delBtn = document.createElement("button");
  const doneBtn = document.createElement("button");
  const span = document.createElement("span");
  const li = document.createElement("li");
  span.innerText = text;
  delBtn.innerText = "❌";
  doneBtn.innerText = "✅";
  doneBtn.addEventListener("click", doneToDo);
  delBtn.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(doneBtn);
  toDoPend.appendChild(li);
  const newId = pendingToDo.length + 1;
  li.id = newId;
  const toDoObject = {
    id: newId,
    text: text
  };
  pendingToDo.push(toDoObject);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  toDoInput.value = "";
  paintToDo(currentValue);
}

function loadToDo() {
  const loadedToDo = localStorage.getItem(PENDING_LS);
  if (loadedToDo !== null) {
  }
}
function init() {
  loadToDo();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
