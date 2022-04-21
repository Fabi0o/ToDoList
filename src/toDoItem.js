export class ToDoItem {
  description;
  dueDate;
  isComplete;
  constructor(description, dueDate, isComplete) {
    this.description = description;
    this.dueDate = dueDate;
    this.isComplete = isComplete;
  }
}
