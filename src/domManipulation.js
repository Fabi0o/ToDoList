import { projects } from "./project";
import { ToDoItem } from "./toDoItem";
export const projectNameInput = document.querySelector("#projectNameInput");
export const descriptionInput = document.querySelector("#descriptionInput");
export const dueDateInput = document.querySelector("#dueDateInput");
export const toDoList = document.querySelector("#listContent");
export const projectsList = document.querySelector("#projects");
export const addProjectButton = document.querySelector("#addProjectButton");
export const addToDoButton = document.querySelector("#addToDoButton");
export const toDoAdder = document.querySelector("#toDoAdder");

export const appendToDoItems = (currentProjectNumber) => {
  const toDoItemsArr = projects.projectArr[currentProjectNumber].toDoItems;
  toDoItemsArr.forEach((toDoItem) => {
    const listItem = document.createElement("div");
    listItem.classList.add("listItem");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = toDoItem.isComplete;
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
  addDeleteButtonFunctionality(currentProjectNumber);
};
export const addItemButtonFunctionality = (currentProjectNumber) => {
  const description = document.querySelector("#descriptionInput");
  const dueDate = document.querySelector("#dueDateInput");
  if (!description.value || !dueDate.value) {
    alert(
      "To add item to To Do List first you need to fill description form and set a due date!"
    );
    return;
  }
  let toDoItem = new ToDoItem(description.value, dueDate.value, false);
  const project = projects.projectArr[currentProjectNumber];
  project.addItem(toDoItem);
};
const addDeleteButtonFunctionality = (currentProjectNumber) => {
  const buttons = document.querySelectorAll(".itemDeleteButton");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      projects.projectArr[currentProjectNumber].removeItem(
        button.parentElement.dataset.indexNumber
      );
      toDoList.innerHTML = "";
      toDoAdder.reset();
      appendToDoItems(currentProjectNumber);
    });
  });
};
