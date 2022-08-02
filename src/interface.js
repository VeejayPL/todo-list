import { format } from "date-fns";
import Task from "./task";
import Project from "./project";
import ProjectList from "./projectList";
import * as domElement from "./dom.js";
import { ta } from "date-fns/locale";

export default () => {
  // Initialize ToDo List with tasks
  const toDoList = ProjectList();
  const todayProject = Project("Today");
  toDoList.addProject(todayProject);

  const emailTask = Task("Respond to emails");
  const laundryTask = Task("Laundry");
  const newTask = Task("New task");

  todayProject.addTask(emailTask);
  todayProject.addTask(laundryTask);
  todayProject.addTask(newTask);

  // Add and load projects
  const addProject = () => {
    const projectName = domElement.listName.value;
    if (projectName === "") {
      alert("Field can't be empty!");
      return;
    } else if (toDoList.contains(projectName)) {
      alert("Project name already exists!");
      return;
    } else return toDoList.addProject(Project(projectName));
  };

  const loadProjects = () => {
    toDoList.getProjects().forEach((project) => createList(project.getName()));
    console.log(toDoList.getProjects());
    console.log(todayProject.getTasks());
  };

  domElement.btnAddList.addEventListener("click", () => {
    clearList();
    addProject();
    loadProjects();
    clearInput();
  });

  // Add and load tasks
  const loadTasks = (projectName) => {
    toDoList
      .getProject(projectName)
      .getTasks()
      .forEach((task) => createTask(task.getName()));
  };

  const clearInput = () => (domElement.listName.value = "");

  // List display
  const createList = (projectName) => {
    domElement.projectView.innerHTML += `<div class="project">
  <i class="fa-solid fa-check-double"></i>
  <h3 class="project-title">
    ${projectName} <span class="task-count">${taskCountDisplay(
      projectName
    )} &#62;</span>
  </h3>
  <button class="btn-edit">
    <i class="fa-solid fa-pen"></i>
  </button>
  <button class="btn-remove">
    <i class="fa-solid fa-trash"></i>
  </button>
</div>`;
    initProjectTitle(projectName);
  };

  const taskCountDisplay = (projectName) => {
    return toDoList.getProject(projectName).getTasksCount();
  };

  const clearList = () =>
    (domElement.projectView.innerHTML = `<h2 class="projects-title">My lists</h2>`);

  // Task display
  const createTask = (taskName) => {
    domElement.listView.innerHTML += `
  <div class="list-task">
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

  const clearProject = (projectName) =>
    (domElement.listView.innerHTML = `<div class="list-header">
    <h2 class="list-title">${projectName}</h2>
    <button class="btn-back">&#60; Back</button>
  </div>`);

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

  const initProjectTitle = (projectName) => {
    const projectTitle = document.querySelectorAll(".project-title");
    projectTitle.forEach((title) =>
      title.addEventListener("click", () => {
        clearProject(projectName);
        domElement.projectView.classList.toggle("active");
        domElement.listView.classList.toggle("active");
        loadTasks(projectName);
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
