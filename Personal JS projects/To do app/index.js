///////////////////////////////////////////////////////////////////////////
let form = document.getElementById("form");
let taskdata = document.getElementById("taskdata");
let addTask = document.getElementById("addTask");
let taskList = document.getElementById("taskList");

let listItemId = 0;
function boxFunction(ele) {
  return (box = `
        <input class="checkbox " type="checkbox"  style="margin-right: 20px;"/> ${ele}
        <span>
        <button class="deleteTask" value="deleteMe" style="margin-left: 10px;">delete</button>
        </span>
         `);
}

function nodeFunction(box, listItemId) {
  const node = document.createElement("li");
  node.setAttribute("class", "listItemClass");
  node.setAttribute("id", listItemId);
  node.innerHTML = box;
  taskList.appendChild(node);

  taskdata.value = "";
}

function checkboxedFunctionInsideToDoTaskList(taskDone) {
  let checkboxed = document.getElementsByClassName("checkbox");
  let arr = Array.from(checkboxed);
  arr.forEach((element) => {
    element.addEventListener("click", taskDone);
  });
}

function deleteTaskFunctioninner(deleteTaskFunction) {
  let deleteTask = document.getElementsByClassName("deleteTask");
  let DelArr = Array.from(deleteTask);
  DelArr.map((ele) => ele.addEventListener("click", deleteTaskFunction));
}

function taskAddedToList(e) {
  const taskValue = taskdata.value;

  if (!taskValue) return;
  const box = boxFunction(taskValue);
  nodeFunction(box, listItemId);
  listItemId++;
  ////////////////////////////// Task Done  ()..................
  checkboxedFunctionInsideToDoTaskList(taskDone);
  /////////////////////////////////// for Delete Task(((............)))
  deleteTaskFunctioninner(deleteTaskFunction);
}

//////////////////  Delete Function().................

function deleteTaskFunction(e) {
  e.preventDefault();
  const sureDelete = confirm("are you sure you want ?");
  if (!sureDelete) return;
  e.target.parentElement.parentElement.remove();
}
////////////////////////////// Task Done  function ()..................
function taskDone(e) {
  e.target.parentElement.classList.toggle("taskdone");
}

//////////////////////////////////////////////////////// static list

const staticArr = ["item1", "item2", "item3", "item4"];
staticArr.forEach((ele) => {
  const box = boxFunction(ele);
  nodeFunction(box, listItemId);
  listItemId++;
  checkboxedFunctionInsideToDoTaskList(taskDone);
  deleteTaskFunctioninner(deleteTaskFunction);
});
