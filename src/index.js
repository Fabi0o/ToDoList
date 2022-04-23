import { ToDoItem } from "./toDoItem";
import { appendToDoItems } from "./domManipulation";
import { Project, projects } from "./project";
let toDoItem = new ToDoItem("Default list item", `2022-06-30`, false);
let defaultProject = new Project("defaultProject");
defaultProject.addItem(toDoItem);
projects.addProject(defaultProject);
appendToDoItems(0);
