import { Project, projects } from "./project";
import { ToDoItem } from "./toDoItem";
const toDoList = document.querySelector("#listContent");
const projectsList = document.querySelector("#projects");
const addProjectButton = document.querySelector("#addProjectButton");
const addToDoButton = document.querySelector("#addToDoButton");
const toDoAdder = document.querySelector("#toDoAdder");
const projectAdder = document.querySelector("#projectAdder");
// to do items functions
const appendToDoItems = () => {
  toDoList.innerHTML = "";
  const toDoItemsArr =
    projects.projectArr[projects.currentProjectNumber].toDoItems;
  toDoItemsArr.forEach((toDoItem) => {
    const listItem = document.createElement("div");
    listItem.classList.add("listItem");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = toDoItem.isComplete;
    if (toDoItem.isComplete) listItem.classList.add("done");
    const description = document.createElement("div");
    description.classList.add("description");
    description.textContent = toDoItem.description;
    const dueDate = document.createElement("div");
    dueDate.classList.add("dueDate");
    dueDate.textContent = `Due date: ${toDoItem.dueDate}`;
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("itemDeleteButton");
    deleteButton.textContent = "X";
    listItem.append(checkbox, description, dueDate, deleteButton);
    listItem.dataset.indexNumber = toDoItemsArr.indexOf(toDoItem);
    toDoList.appendChild(listItem);
  });
  addDeleteButtonFunctionality();
  addCheckboxFunctionality();
};
export const addItemButtonFunctionality = () => {
  addToDoButton.addEventListener("click", () => {
    const description = document.querySelector("#descriptionInput");
    const dueDate = document.querySelector("#dueDateInput");
    if (!description.value || !dueDate.value) {
      alert(
        "To add item to To Do List first you need to fill description form and set a due date!"
      );
      return;
    }
    if (!projects.projectArr[projects.currentProjectNumber]) {
      alert("Firs add project to add things to do!");
      return;
    }
    let toDoItem = new ToDoItem(description.value, dueDate.value, false);
    const project = projects.projectArr[projects.currentProjectNumber];
    project.addItem(toDoItem);
    toDoAdder.reset();
    appendToDoItems(projects.currentProjectNumber);
  });
  appendToDoItems(projects.currentProjectNumber);
};
const addDeleteButtonFunctionality = () => {
  const buttons = document.querySelectorAll(".itemDeleteButton");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      projects.projectArr[projects.currentProjectNumber].removeItem(
        button.parentElement.dataset.indexNumber
      );
      appendToDoItems(projects.currentProjectNumber);
    });
  });
};
const addCheckboxFunctionality = () => {
  let checkboxes = document.querySelectorAll("input[type=checkbox]");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
      if (!checkbox.checked) {
        projects.projectArr[projects.currentProjectNumber].toDoItems[
          checkbox.parentElement.dataset.indexNumber
        ].isComplete = false;
      } else {
        projects.projectArr[projects.currentProjectNumber].toDoItems[
          checkbox.parentElement.dataset.indexNumber
        ].isComplete = true;
      }
      appendToDoItems(projects.currentProjectNumber);
    });
  });
};
// projects function
const appendProjects = () => {
  projectsList.innerHTML = "";
  projects.projectArr.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    const projectName = document.createElement("button");
    projectName.classList.add("projectName");
    projectName.textContent = project.title;
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("projectDeleteButton");
    deleteButton.innerText = "X";
    projectDiv.append(projectName, deleteButton);
    projectDiv.dataset.indexNumber = projects.projectArr.indexOf(project);
    projectsList.appendChild(projectDiv);
  });
  changeProjectFunctionality();
  deleteProjectButtonFunctionality();
};
export const addProjectButtonFunctionality = () => {
  addProjectButton.addEventListener("click", () => {
    const projectNameInput = document.querySelector("#projectNameInput");
    if (!projectNameInput.value) {
      alert("To add project first you have to fill a form!");
      return;
    }
    const project = new Project(projectNameInput.value);
    projects.addProject(project);
    appendProjects();
    projectAdder.reset();
    // changeProjectFunctionality();
  });
  appendProjects();
  // changeProjectFunctionality();
  deleteProjectButtonFunctionality();
};
const changeProjectFunctionality = () => {
  const projectButtons = document.querySelectorAll(".projectName");
  projectButtons.forEach((projectButton) => {
    projectButton.addEventListener("click", () => {
      projects.currentProjectNumber =
        projectButton.parentElement.dataset.indexNumber;
      appendToDoItems(projects.currentProjectNumber);
    });
  });
};
const deleteProjectButtonFunctionality = () => {
  const deleteButtons = document.querySelectorAll(".projectDeleteButton");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      projects.removeProject(button.parentElement.dataset.indexNumber);
      if (!projects.projectArr[0]) {
        appendProjects();
        toDoList.innerHTML = "";
        return;
      } else if (projects.currentProjectNumber != 0) {
        projects.currentProjectNumber -= 1;
      }
      appendProjects();
      appendToDoItems();
    });
  });
};
