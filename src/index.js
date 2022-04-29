import { ToDoItem } from "./toDoItem";
import { addItemButtonFunctionality } from "./domManipulation";
import { Project, projects } from "./project";
let currentProjectNumber = 0;
let toDoItem = new ToDoItem("Default list item", `2022-06-30`, false);
let defaultProject = new Project("defaultProject");
defaultProject.addItem(toDoItem);
projects.addProject(defaultProject);
addItemButtonFunctionality(currentProjectNumber);
