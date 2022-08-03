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
  const inbox = Project("Inbox");
  toDoList.addProject(todayProject);
  toDoList.addProject(inbox);

  const emailTask = Task("Respond to emails");
  const laundryTask = Task("Laundry");
  const newTask = Task("New task");

  todayProject.addTask(emailTask);
  todayProject.addTask(laundryTask);
  todayProject.addTask(newTask);
  inbox.addTask(emailTask);
  inbox.addTask(laundryTask);

  // Add and load projects
  const addProject = () => {
    const projectName = domElement.listName.value;
    if (projectName === "") {
      alert("Field can't be empty!");
      return;
    } else if (toDoList.contains(projectName)) {
      alert("Project already exists!");
      return;
    } else return toDoList.addProject(Project(projectName));
  };

  const loadProjects = () => {
    toDoList.getProjects().forEach((project) => {
      createList(project.getName());
      initProjectTitle();
    });
  };

  domElement.btnAddList.addEventListener("click", () => initAddProject());

  const initAddProject = () => {
    clearList();
    addProject();
    loadProjects();
    clearInput();
  };

  const clearInput = () => (domElement.listName.value = "");

  // Add and load tasks
  const addTask = (projectName) => {
    const taskName = domElement.taskName.value;
    if (taskName === "") {
      alert("Field can't be empty!");
      return;
    } else if (toDoList.getProject(projectName).contains(taskName)) {
      alert("Task already exists!");
      return;
    } else return toDoList.getProject(projectName).addTask(Task(taskName));
  };

  const loadTasks = (projectName) => {
    toDoList
      .getProject(projectName)
      .getTasks()
      .forEach((task) => createTask(task.getName()));
    initRemoveTaskBtn();
    initBackBtn();
    initToggleCompleted();
  };

  domElement.btnAddTask.addEventListener("click", () => {
    initAddTask();
    toggleTaskModal();
    clearModalInput();
  });

  const initAddTask = () => {
    const projectName = document.querySelector(".list-title").textContent;
    addTask(projectName);
    clearProject(projectName);
    loadTasks(projectName);
  };

  const clearModalInput = () => {
    domElement.taskName.value = "";
    domElement.taskNote.value = "";
    domElement.taskDate.value = "";
  };

  // List display
  const createList = (projectName) => {
    domElement.projectView.innerHTML += `<div class="project">
  <i class="fa-solid fa-check-double"></i>
  <h3 class="project-title">${projectName}<span class="task-count">${taskCountDisplay(
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

  // Delete project / task

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
    clearInput();
  });

  domElement.btnCloseModal.addEventListener("click", () => {
    toggleTaskModal();
  });

  const toggleTaskModal = () => domElement.inputTask.classList.toggle("active");

  const initProjectTitle = () => {
    const projectTitle = document.querySelectorAll(".project-title");
    projectTitle.forEach((title) =>
      title.addEventListener("click", (e) => {
        // to remove the span and get actual project name
        const projectName = e.target.textContent.slice(0, -6);
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

  const initBackBtn = () => {
    const backBtn = document.querySelector(".btn-back");
    backBtn.addEventListener("click", () => {
      domElement.projectView.classList.toggle("active");
      domElement.listView.classList.toggle("active");
      domElement.btnToggleInput.lastChild.textContent = "Add list";
      clearList();
      loadProjects();
    });
  };

  const initRemoveTaskBtn = () => {
    const removeBtn = document.querySelectorAll(".btn-remove");
    const projectName = document.querySelector(".list-title").textContent;

    removeBtn.forEach((button) =>
      button.addEventListener("click", (e) => {
        const taskName = e.target.parentNode.textContent.trim();
        console.log(taskName);
        toDoList.getProject(projectName).deleteTask(taskName);
        clearProject(projectName);
        loadTasks(projectName);
      })
    );
  };

  const initToggleCompleted = () => {
    const taskCheck = document.querySelectorAll(".task-check");
    taskCheck.forEach((task) =>
      task.addEventListener("click", (e) => {
        e.target.parentNode.classList.toggle("completed");
        e.target.classList.toggle("checked");
      })
    );
  };

  loadProjects();
};
