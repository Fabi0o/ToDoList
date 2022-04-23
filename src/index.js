import { ToDoItem } from "./toDoItem";
import {
  addButtonFunctionality,
  addToDoButton,
  appendToDoItems,
  toDoAdder,
  toDoList,
} from "./domManipulation";
import { Project, projects } from "./project";
addToDoButton.addEventListener("click", function () {
  addButtonFunctionality(0);
  toDoList.innerHTML = "";
  toDoAdder.reset();
  appendToDoItems(0);
});
let toDoItem = new ToDoItem("Default list item", `2022-06-30`, false);
let defaultProject = new Project("defaultProject");
defaultProject.addItem(toDoItem);
projects.addProject(defaultProject);
appendToDoItems(0);
