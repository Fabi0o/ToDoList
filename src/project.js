export let projects = (function () {
  let projectArr = [];
  let currentProjectNumber = 0;
  function addProject(project) {
    projects.projectArr.push(project);
  }
  function removeProject(project) {
    projects.projectArr.splice(project, 1);
  }
  return { projectArr, addProject, removeProject, currentProjectNumber };
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
    this.toDoItems.splice(item, 1);
  }
}
