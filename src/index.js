import { ToDoItem } from "./toDoItem";
import { projectNameInput } from "./domElements";
import { Project, projects } from "./project";
let toDoItem = new ToDoItem("aaaa", "aaaa", true);
let defaultProject = new Project("defaultProject");
defaultProject.addItem(toDoItem);
projects.addProject(defaultProject);
defaultProject.removeItem(toDoItem);
