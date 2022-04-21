export let projects = (function () {
  let projectArr = [];
  function addProject(project) {
    projects.projectArr.push(project);
  }
  function removeProject(project) {
    projects.projectArr.pop(project);
  }
  return { projectArr, addProject, removeProject };
})();

export class Project {
  title;
  toDoItems = [];
  constructor(title) {
    this.title = title;
  }
  addItem(item) {
    this.toDoItems.push(item);
    // console.log(this.toDoItems);
  }
  removeItem(item) {
    this.toDoItems.pop(item);
  }
}