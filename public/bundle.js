(()=>{"use strict";let t={projectArr:[],addProject:function(e){t.projectArr.push(e)},removeProject:function(e){t.projectArr.pop(e)}};document.querySelector("#projectNameInput"),document.querySelector("#descriptionInput"),document.querySelector("#dueDateInput");const e=document.querySelector("#listContent");document.querySelector("#projects"),document.querySelector("#addProjectButton"),document.querySelector("#addToDoButton");let o=new class{description;dueDate;isComplete;constructor(t,e,o){this.description=t,this.dueDate=e,this.isComplete=o}}("Default list item","2022-06-30",!1),c=new class{title;toDoItems=[];constructor(t){this.title=t}addItem(t){this.toDoItems.push(t)}removeItem(t){this.toDoItems.pop(t)}}("defaultProject");c.addItem(o),t.addProject(c),t.projectArr[0].toDoItems.forEach((t=>{const o=document.createElement("div");o.classList.add("listItem");const c=document.createElement("input");c.setAttribute("type","checkbox"),c.checked=t.isComplete;const n=document.createElement("div");n.classList.add("description"),n.textContent=t.description;const d=document.createElement("div");d.classList.add("dueDate"),d.textContent=`Due date: ${t.dueDate}`;const r=document.createElement("button");r.classList.add("deleteButton"),r.textContent="X",o.append(c,n,d,r),e.appendChild(o)}))})();