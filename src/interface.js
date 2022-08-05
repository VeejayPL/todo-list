import { format } from "date-fns";
import Task from "./task";
import Project from "./project";
import ProjectList from "./projectList";
import * as domElement from "./dom.js";

export default () => {
  const loadHomePage = () => {
    initToggleInput();
    initAddListBtn();
    initBtnCancel();
    loadProjects();
    initProjectTitle();
    initTaskTitle();
    initCloseModalBtn();
  };
  // Initialize ToDo List with tasks
  const toDoList = ProjectList();
  const todayProject = Project("Today");
  const inbox = Project("Inbox");
  toDoList.addProject(todayProject);
  toDoList.addProject(inbox);

  const emailTask = Task("Respond to emails", "Check", "21/07/2022");
  const laundryTask = Task("Laundry", "Wash trousers");
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

      initRemoveProjectBtn();
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
    const taskNote = domElement.taskNote.value;
    const taskDate = domElement.taskDate.value;
    if (taskName === "") {
      alert("Field can't be empty!");
      return;
    } else if (toDoList.getProject(projectName).contains(taskName)) {
      alert("Task already exists!");
      return;
    } else
      return toDoList
        .getProject(projectName)
        .addTask(Task(taskName, taskNote, taskDate));
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
  <h3 class="project-title" data-toggle-project>${projectName}<span class="task-count">${taskCountDisplay(
      projectName
    )} &#62;</span>
</h3>
  <button class="btn-edit">
    <i class="fa-solid fa-circle-info"></i>
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
  <div class="task">
  <div class="task-desc">
  <h3 class="task-title" data-toggle-task>${taskName}</h3>
  <p class="task-notes" data-toggle-task>${getTaskNotes(taskName)}</p>
  </div>
  <div class="task-info">
  <p class="task-date">${getTaskDate(taskName)}</p>
  <div class="task-btn-group">
  <button class="task-btn-edit">
    <i class="fa-solid fa-circle-info"></i>
  </button>
  <button class="task-btn-remove">
    <i class="fa-solid fa-trash"></i>
  </button>
  </div>
  </div>
  </div>
</div>`;
  };

  const getTaskNotes = (taskName) => {
    const projectName = document.querySelector(".list-title").textContent;
    return toDoList.getProject(projectName).getTask(taskName).getNote();
  };

  const getTaskDate = (taskName) => {
    const projectName = document.querySelector(".list-title").textContent;
    return toDoList.getProject(projectName).getTask(taskName).getDate();
  };

  const clearProject = (projectName) =>
    (domElement.listView.innerHTML = `<div class="list-header">
    <h2 class="list-title">${projectName}</h2>
    <button class="btn-back">&#60; Back</button>
  </div>`);

  // Delete project and task / toggle completed
  const initRemoveProjectBtn = () => {
    const removeBtn = document.querySelectorAll(".btn-remove");

    removeBtn.forEach((button) =>
      button.addEventListener("click", (e) => {
        const projectName = e.target.parentNode.textContent.trim().slice(0, -3);
        toDoList.deleteProject(projectName);
        clearList();
        loadProjects();
      })
    );
  };

  const initRemoveTaskBtn = () => {
    const removeBtn = document.querySelectorAll(".task-btn-remove");
    const projectName = document.querySelector(".list-title").textContent;

    removeBtn.forEach((button) =>
      button.addEventListener("click", (e) => {
        const taskName =
          e.currentTarget.parentNode.parentNode.parentNode.querySelector(
            ".task-title"
          ).textContent;
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

  // Toggle inputs / moving through app
  const initToggleInput = () => {
    domElement.btnToggleInput.addEventListener("click", () => {
      if (domElement.listView.classList.contains("active")) {
        domElement.inputTask.classList.toggle("active");
      } else {
        domElement.inputList.classList.toggle("active");
      }
    });
  };

  const initAddListBtn = () => {
    domElement.btnAddList.addEventListener("click", () => {
      domElement.inputList.classList.toggle("active");
    });
  };

  const initBtnCancel = () => {
    domElement.btnCancel.addEventListener("click", () => {
      domElement.inputList.classList.toggle("active");
      clearInput();
    });
  };

  const initCloseModalBtn = () => {
    domElement.btnCloseModal.addEventListener("click", () => {
      toggleTaskModal();
    });
  };

  const toggleTaskModal = () => domElement.inputTask.classList.toggle("active");

  const initProjectTitle = () => {
    const projectContainer = domElement.projectView;

    projectContainer.addEventListener("click", (e) => {
      // to remove the span and get actual project name
      const projectName = e.target.textContent.trim().slice(0, -3);

      if (e.target.dataset.toggleProject !== undefined) {
        console.log(projectName);
        clearProject(projectName);
        domElement.projectView.classList.toggle("active");
        domElement.listView.classList.toggle("active");
        loadTasks(projectName);
        if (domElement.inputList.classList.contains("active"))
          domElement.inputList.classList.toggle("active");
        domElement.btnToggleInput.lastChild.textContent = "Add task";
      }
    });
  };

  const initTaskTitle = () => {
    const taskContainer = domElement.listView;
    taskContainer.addEventListener("click", (e) => {
      const notes = e.target.parentNode.querySelector(".task-notes");
      const taskDate =
        e.target.parentNode.parentNode.querySelector(".task-date");
      const taskBtns =
        e.target.parentNode.parentNode.querySelector(".task-btn-group");

      if (e.target.dataset.toggleTask !== undefined) {
        notes.classList.toggle("active");
        taskDate.classList.toggle("active");
        taskBtns.classList.toggle("active");
      }
    });
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

  loadHomePage();
};
