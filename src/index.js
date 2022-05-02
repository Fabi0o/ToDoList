import { ToDoItem } from "./toDoItem";
import {
  addItemButtonFunctionality,
  addProjectButtonFunctionality,
} from "./domManipulation";
import { Project, projects } from "./project";
let toDoItem = new ToDoItem("Default list item", `2022-06-30`, false);
let defaultProject = new Project("Default Project");
defaultProject.addItem(toDoItem);
projects.addProject(defaultProject);
addItemButtonFunctionality();
addProjectButtonFunctionality();
