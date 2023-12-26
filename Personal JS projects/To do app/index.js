// let form = document.getElementById("form");
// let taskdata = document.getElementById("taskdata");
// let addTask = document.getElementById("addTask");
// let taskList = document.getElementById("taskList");

// function taskAddedToList(e) {
//   const taskValue = taskdata.value;
//   const node = document.createElement("li");
//   const textnode = document.createTextNode(taskValue);
//   node.appendChild(textnode);
//   taskList.appendChild(node);
//   taskdata.value = "";

//   ////////////////////////////////////////////////////
//   // const box = `<div id='box'><button id='button-1'>Button</button></div>`;
//   // document.taskList.innerHTML = box;
// }

///////////////////////////////////////////////////////////////////////////
let form = document.getElementById("form");
let taskdata = document.getElementById("taskdata");
let addTask = document.getElementById("addTask");
let taskList = document.getElementById("taskList");

let listItemId = 0;

function taskAddedToList(e) {
  const taskValue = taskdata.value;
  const node = document.createElement("li");
  node.setAttribute("class", "listItemClass");
  node.setAttribute("id", listItemId);

  const box = `
        <input class="checkbox " type="checkbox"  style="margin-right: 20px;"/> ${taskValue}
        <span>
        <button class="deleteTask" value="deleteMe" style="margin-left: 10px;">delete</button>
        </span>
         `;

  // const textnode = document.createTextNode(taskValue);
  node.innerHTML = box;
  taskList.appendChild(node);
  taskdata.value = "";
  listItemId++;

  ////////////////////////////// Task Done  ()..................

  let checkboxed = document.getElementsByClassName("checkbox");
  let arr = Array.from(checkboxed);
  arr.forEach((element) => {
    element.addEventListener("click", taskDone);
  });

  /////////////////////////////////// for Delete Task(((............)))
  let deleteTask = document.getElementsByClassName("deleteTask");
  let DelArr = Array.from(deleteTask);

  DelArr.map((ele) => ele.addEventListener("click", deleteTaskFunction));
}

//////////////////  Delete Function().................

function deleteTaskFunction(e) {
  e.preventDefault();
  const sureDelete = confirm("are you sure you want ?");

  if (!sureDelete) return;
  e.target.parentElement.parentElement.remove();
  //   e.preventDefault();
}

////////////////////////////// Task Done  function ()..................

function taskDone(e) {
  e.target.parentElement.classList.toggle("taskdone");
}
