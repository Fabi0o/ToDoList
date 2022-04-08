export class ToDoItem {
  title;
  description;
  dueDate;
  isComplete;
  constructor(title, description, dueDate, isComplete) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.isComplete = isComplete;
  }
}
