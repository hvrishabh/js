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
function boxFunction(ele) {
  return (box = `
        <input class="checkbox " type="checkbox"  style="margin-right: 20px;"/> ${ele}
        <span>
        <button class="deleteTask" value="deleteMe" style="margin-left: 10px;">delete</button>
        </span>
         `);
}

// function nodeFunction(node) {
//    document.createElement("li")
//   node.setAttribute("class", "listItemClass")
//   node.setAttribute("id", listItemId)
// }

function nodeFunction(box, listItemId) {
  const node = document.createElement("li");
  node.setAttribute("class", "listItemClass");
  node.setAttribute("id", listItemId);
  // const textnode = document.createTextNode(taskValue);
  node.innerHTML = box;
  taskList.appendChild(node);

  taskdata.value = "";
}

function taskAddedToList(e) {
  const taskValue = taskdata.value;
  const box = boxFunction(taskValue);
  nodeFunction(box, listItemId);
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

//////////////////////////////////////////////////////// static list

const staticArr = ["item1", "item2", "item3", "item4"];
staticArr.forEach((ele) => {
  const box = boxFunction(ele);

  nodeFunction(box, listItemId);
  listItemId++;
  let checkboxed = document.getElementsByClassName("checkbox");
  let arr = Array.from(checkboxed);
  arr.forEach((element) => {
    element.addEventListener("click", taskDone);
  });

  /////////////////////////////////// for Delete Task(((............)))
  let deleteTask = document.getElementsByClassName("deleteTask");
  let DelArr = Array.from(deleteTask);

  DelArr.map((ele) => ele.addEventListener("click", deleteTaskFunction));
});
