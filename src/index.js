import { ToDoItem } from "./toDoItem";
import {
  addItemButtonFunctionality,
  addToDoButton,
  appendToDoItems,
  toDoAdder,
  toDoList,
} from "./domManipulation";
import { Project, projects } from "./project";
let currentProjectNumber = 0;
addToDoButton.addEventListener("click", function () {
  addItemButtonFunctionality(currentProjectNumber);
  toDoList.innerHTML = "";
  toDoAdder.reset();
  appendToDoItems(currentProjectNumber);
});
let toDoItem = new ToDoItem("Default list item", `2022-06-30`, false);
let defaultProject = new Project("defaultProject");
defaultProject.addItem(toDoItem);
projects.addProject(defaultProject);
appendToDoItems(currentProjectNumber);
// const checkbox = document.querySelector("input[type=checkbox]");
// console.log(
//   projects.projectArr[currentProjectNumber].toDoItems[
//     checkbox.parentElement.dataset.indexNumber
//   ]
// );
// console.log(checkbox.parentElement.dataset.indexNumber);
