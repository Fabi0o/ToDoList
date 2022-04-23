import { projects } from "./project";
export const projectNameInput = document.querySelector("#projectNameInput");
export const descriptionInput = document.querySelector("#descriptionInput");
export const dueDateInput = document.querySelector("#dueDateInput");
export const toDoList = document.querySelector("#listContent");
export const projectsList = document.querySelector("#projects");
export const addProjectButton = document.querySelector("#addProjectButton");
export const addToDoButton = document.querySelector("#addToDoButton");

export const appendToDoItems = (projectNumber) => {
  const toDoItemsArr = projects.projectArr[projectNumber].toDoItems;
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
    deleteButton.classList.add("deleteButton");
    deleteButton.textContent = "X";
    listItem.append(checkbox, description, dueDate, deleteButton);
    toDoList.appendChild(listItem);
  });
};
