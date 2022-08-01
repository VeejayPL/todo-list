import { format } from "date-fns";
import Task from "./task";
import Project from "./project";
import ProjectList from "./projectList";
import * as domElement from "./dom.js";

export default () => {
  // Initialize ToDo List
  const toDoList = ProjectList();
  toDoList.addProject(Project("Today"));

  // Add project
  const addProject = () => {
    const projectName = domElement.listName.value;
    return toDoList.addProject(Project(projectName));
  };
  const loadProjects = () => {
    toDoList.getProjects().forEach((project) => createList(project.getName()));
  };

  domElement.btnAddList.addEventListener("click", () => {
    addProject();
    loadProjects();
  });

  // List display
  const createList = (projectName) => {
    domElement.projectView.innerHTML += `<div class="project">
  <i class="fa-solid fa-check-double"></i>
  <h3 class="project-title">
    ${projectName} <span class="task-count">&#62;</span>
  </h3>
  <button class="btn-edit">
    <i class="fa-solid fa-pen"></i>
  </button>
  <button class="btn-remove">
    <i class="fa-solid fa-trash"></i>
  </button>
</div>`;

    initProjectTitle();
  };

  // Task display
  const createTask = (taskName) => {
    domElement.listView.innerHTML += `<div class="list-task">
  <i class="fa-solid fa-circle-check task-check"></i>
  <h3 class="task-title">${taskName}</h3>
  <button class="btn-edit">
    <i class="fa-solid fa-pen"></i>
  </button>
  <button class="btn-remove">
    <i class="fa-solid fa-trash"></i>
  </button>
</div>`;
  };

  const clearList = () => domElement.projectView;

  // Toggle inputs / moving through app
  domElement.btnToggleInput.addEventListener("click", () => {
    if (domElement.listView.classList.contains("active")) {
      domElement.inputTask.classList.toggle("active");
    } else {
      domElement.inputList.classList.toggle("active");
    }
  });

  domElement.btnAddList.addEventListener("click", () => {
    domElement.inputList.classList.toggle("active");
  });

  domElement.btnCancel.addEventListener("click", () => {
    domElement.inputList.classList.toggle("active");
  });

  // domElement.projectTitle.addEventListener("click", () => {
  //   domElement.projectView.classList.toggle("active");
  //   domElement.listView.classList.toggle("active");
  //   if (domElement.inputList.classList.contains("active"))
  //     domElement.inputList.classList.toggle("active");
  //   domElement.btnToggleInput.lastChild.textContent = "Add task";
  // });

  domElement.btnBack.addEventListener("click", () => {
    domElement.projectView.classList.toggle("active");
    domElement.listView.classList.toggle("active");
    domElement.btnToggleInput.lastChild.textContent = "Add list";
  });

  domElement.btnCloseModal.addEventListener("click", () => {
    domElement.inputTask.classList.toggle("active");
  });

  const initProjectTitle = () => {
    const projectTitle = document.querySelectorAll(".project-title");
    projectTitle.forEach((title) =>
      title.addEventListener("click", () => {
        domElement.projectView.classList.toggle("active");
        domElement.listView.classList.toggle("active");
        if (domElement.inputList.classList.contains("active"))
          domElement.inputList.classList.toggle("active");
        domElement.btnToggleInput.lastChild.textContent = "Add task";
      })
    );
  };

  // // Need to add for all - picks only the first one
  // document.querySelector(".task-check").addEventListener("click", (e) => {
  //   e.target.parentNode.classList.toggle("completed");
  //   e.target.classList.toggle("checked");
  // });

  loadProjects();
};
