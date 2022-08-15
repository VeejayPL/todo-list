/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 * 
 * @example
 * // Are 4 September and 4 October in the same day?
 * var result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 * 
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * var result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "btnAddList": () => (/* binding */ btnAddList),
/* harmony export */   "btnAddTask": () => (/* binding */ btnAddTask),
/* harmony export */   "btnBack": () => (/* binding */ btnBack),
/* harmony export */   "btnCancel": () => (/* binding */ btnCancel),
/* harmony export */   "btnCloseModal": () => (/* binding */ btnCloseModal),
/* harmony export */   "btnToggleInput": () => (/* binding */ btnToggleInput),
/* harmony export */   "inputList": () => (/* binding */ inputList),
/* harmony export */   "inputTask": () => (/* binding */ inputTask),
/* harmony export */   "listName": () => (/* binding */ listName),
/* harmony export */   "listTitle": () => (/* binding */ listTitle),
/* harmony export */   "listView": () => (/* binding */ listView),
/* harmony export */   "project": () => (/* binding */ project),
/* harmony export */   "projectView": () => (/* binding */ projectView),
/* harmony export */   "taskDate": () => (/* binding */ taskDate),
/* harmony export */   "taskName": () => (/* binding */ taskName),
/* harmony export */   "taskNote": () => (/* binding */ taskNote)
/* harmony export */ });
const btnToggleInput = document.querySelector("#btn-toggle-input");
const btnAddList = document.querySelector("#btn-add-list");
const btnCancel = document.querySelector("#btn-cancel-list");
const btnBack = document.querySelector(".btn-back");
const btnCloseModal = document.querySelector(".btn-close");

const inputList = document.querySelector(".main-input");
const inputTask = document.querySelector(".task-modal");

const project = document.querySelector(".project");
const projectView = document.querySelector(".projects");
const listView = document.querySelector(".list");
const listTitle = document.querySelector(".list-title");

const listName = document.querySelector("#list-input");

const taskName = document.querySelector("#task-name");
const taskNote = document.querySelector("#task-note");
const taskDate = document.querySelector("#task-date");
const btnAddTask = document.querySelector("#btn-add-task");


/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectList */ "./src/projectList.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
// import { format } from "date-fns";





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  // Initialize ToDo List with tasks
  const toDoList = (0,_projectList__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const todayProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__["default"])("Today");
  const inbox = (0,_project__WEBPACK_IMPORTED_MODULE_1__["default"])("Inbox");
  toDoList.addProject(todayProject);
  toDoList.addProject(inbox);

  const emailTask = (0,_task__WEBPACK_IMPORTED_MODULE_0__["default"])("Respond to emails", "Check", "21/07/2022");
  const laundryTask = (0,_task__WEBPACK_IMPORTED_MODULE_0__["default"])("Laundry", "Wash trousers");
  const newTask = (0,_task__WEBPACK_IMPORTED_MODULE_0__["default"])("New task");

  todayProject.addTask(emailTask);
  todayProject.addTask(laundryTask);
  todayProject.addTask(newTask);
  inbox.addTask(emailTask);
  inbox.addTask(laundryTask);

  const clearList = () =>
    (_dom__WEBPACK_IMPORTED_MODULE_3__.projectView.innerHTML = `<h2 class="projects-title">My lists</h2>`);

  const clearProject = (projectName) =>
    (_dom__WEBPACK_IMPORTED_MODULE_3__.listView.innerHTML = `<div class="list-header">
  <h2 class="list-title">${projectName}</h2>
  <button class="btn-back">&#60; Back</button>
</div>`);

  const clearInput = () => (_dom__WEBPACK_IMPORTED_MODULE_3__.listName.value = "");

  // Toggle inputs / moving through app
  const initToggleInput = () => {
    _dom__WEBPACK_IMPORTED_MODULE_3__.btnToggleInput.addEventListener("click", () => {
      if (_dom__WEBPACK_IMPORTED_MODULE_3__.listView.classList.contains("active")) {
        _dom__WEBPACK_IMPORTED_MODULE_3__.inputTask.classList.toggle("active");
      } else {
        _dom__WEBPACK_IMPORTED_MODULE_3__.inputList.classList.toggle("active");
      }
    });
  };

  const initAddListBtn = () => {
    _dom__WEBPACK_IMPORTED_MODULE_3__.btnAddList.addEventListener("click", () => {
      _dom__WEBPACK_IMPORTED_MODULE_3__.inputList.classList.toggle("active");
    });
  };

  const initBtnCancel = () => {
    _dom__WEBPACK_IMPORTED_MODULE_3__.btnCancel.addEventListener("click", () => {
      _dom__WEBPACK_IMPORTED_MODULE_3__.inputList.classList.toggle("active");
      clearInput();
    });
  };

  const toggleTaskModal = () => _dom__WEBPACK_IMPORTED_MODULE_3__.inputTask.classList.toggle("active");

  const initCloseModalBtn = () => {
    _dom__WEBPACK_IMPORTED_MODULE_3__.btnCloseModal.addEventListener("click", () => {
      toggleTaskModal();
    });
  };

  const initTaskTitle = () => {
    const taskContainer = _dom__WEBPACK_IMPORTED_MODULE_3__.listView;
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

  // Delete project and task / toggle completed

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

  // List display
  const taskCountDisplay = (projectName) =>
    toDoList.getProject(projectName).getTasksCount();

  const createList = (projectName) => {
    _dom__WEBPACK_IMPORTED_MODULE_3__.projectView.innerHTML += `<div class="project">
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

  // Task display
  const getTaskNotes = (taskName) => {
    const projectName = document.querySelector(".list-title").textContent;
    return toDoList.getProject(projectName).getTask(taskName).getNote();
  };

  const getTaskDate = (taskName) => {
    const projectName = document.querySelector(".list-title").textContent;
    return toDoList.getProject(projectName).getTask(taskName).getDate();
  };

  const createTask = (taskName) => {
    _dom__WEBPACK_IMPORTED_MODULE_3__.listView.innerHTML += `
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

  // Add and load projects
  const addProject = () => {
    const projectName = _dom__WEBPACK_IMPORTED_MODULE_3__.listName.value;
    if (projectName === "") {
      alert("Field can't be empty!");
    } else if (toDoList.contains(projectName)) {
      alert("Project already exists!");
    } else toDoList.addProject((0,_project__WEBPACK_IMPORTED_MODULE_1__["default"])(projectName));
  };

  const initProjectTitle = () => {
    const projectContainer = _dom__WEBPACK_IMPORTED_MODULE_3__.projectView;

    projectContainer.addEventListener("click", (e) => {
      // to remove the span and get actual project name
      const projectName = e.target.textContent.trim().slice(0, -3);

      if (e.target.dataset.toggleProject !== undefined) {
        console.log(projectName);
        clearProject(projectName);
        _dom__WEBPACK_IMPORTED_MODULE_3__.projectView.classList.toggle("active");
        _dom__WEBPACK_IMPORTED_MODULE_3__.listView.classList.toggle("active");
        loadTasks(projectName);

        if (_dom__WEBPACK_IMPORTED_MODULE_3__.inputList.classList.contains("active"))
          _dom__WEBPACK_IMPORTED_MODULE_3__.inputList.classList.toggle("active");
        _dom__WEBPACK_IMPORTED_MODULE_3__.btnToggleInput.lastChild.textContent = "Add task";
      }
    });
  };

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

  const loadProjects = () => {
    toDoList.getProjects().forEach((project) => {
      createList(project.getName());

      initRemoveProjectBtn();
    });
  };

  const initBackBtn = () => {
    const backBtn = document.querySelector(".btn-back");
    backBtn.addEventListener("click", () => {
      _dom__WEBPACK_IMPORTED_MODULE_3__.projectView.classList.toggle("active");
      _dom__WEBPACK_IMPORTED_MODULE_3__.listView.classList.toggle("active");
      _dom__WEBPACK_IMPORTED_MODULE_3__.btnToggleInput.lastChild.textContent = "Add list";
      clearList();
      loadProjects();
    });
  };

  const initAddProject = () => {
    clearList();
    addProject();
    loadProjects();
    clearInput();
  };

  _dom__WEBPACK_IMPORTED_MODULE_3__.btnAddList.addEventListener("click", () => initAddProject());

  // Add and load tasks
  const addTask = (projectName) => {
    const taskName = _dom__WEBPACK_IMPORTED_MODULE_3__.taskName.value;
    const taskNote = _dom__WEBPACK_IMPORTED_MODULE_3__.taskNote.value;
    const taskDate = _dom__WEBPACK_IMPORTED_MODULE_3__.taskDate.value;
    if (taskName === "") {
      alert("Field can't be empty!");
    } else if (toDoList.getProject(projectName).contains(taskName)) {
      alert("Task already exists!");
    } else
      toDoList
        .getProject(projectName)
        .addTask((0,_task__WEBPACK_IMPORTED_MODULE_0__["default"])(taskName, taskNote, taskDate));
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

  const initAddTask = () => {
    const projectName = document.querySelector(".list-title").textContent;
    addTask(projectName);
    clearProject(projectName);
    loadTasks(projectName);
  };

  const clearModalInput = () => {
    _dom__WEBPACK_IMPORTED_MODULE_3__.taskName.value = "";
    _dom__WEBPACK_IMPORTED_MODULE_3__.taskNote.value = "";
    _dom__WEBPACK_IMPORTED_MODULE_3__.taskDate.value = "";
  };

  _dom__WEBPACK_IMPORTED_MODULE_3__.btnAddTask.addEventListener("click", () => {
    initAddTask();
    toggleTaskModal();
    clearModalInput();
  });

  const loadHomePage = () => {
    initToggleInput();
    initAddListBtn();
    initBtnCancel();
    loadProjects();
    initProjectTitle();
    initTaskTitle();
    initCloseModalBtn();
  };

  loadHomePage();
});


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/toDate/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((projectName) => {
  let name = projectName;
  let tasks = [];

  const setName = (newName) => (name = newName);

  const getName = () => name;

  const contains = (taskName) =>
    tasks.some((task) => task.getName() === taskName);

  const addTask = (taskName) => {
    if (contains(taskName.getName())) return;
    tasks.push(taskName);
  };

  const getTask = (taskName) =>
    tasks.find((task) => task.getName() === taskName);

  const getTasks = () => tasks;

  const getTasksCount = () => tasks.length;

  const deleteTask = (taskName) =>
    (tasks = tasks.filter((task) => task.getName() !== taskName));

  const getTodayTasks = () =>
    tasks.filter((task) => {
      const taskDate = new Date(task.getDate());
      return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(taskDate));
    });

  return {
    setName,
    getName,
    addTask,
    getTasks,
    getTask,
    getTasksCount,
    contains,
    deleteTask,
    getTodayTasks,
  };
});


/***/ }),

/***/ "./src/projectList.js":
/*!****************************!*\
  !*** ./src/projectList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  let projects = [];

  const getProjects = () => projects;

  const contains = (projectName) =>
    projects.some((project) => project.getName() === projectName);

  const addProject = (projectName) => {
    if (contains(projectName.getName())) return;
    projects.push(projectName);
  };

  const getProject = (projectName) =>
    projects.find((project) => project.getName() === projectName);

  const deleteProject = (projectName) =>
    (projects = projects.filter(
      (project) => project.getName() !== projectName
    ));

  return {
    getProjects,
    addProject,
    contains,
    getProject,
    deleteProject,
  };
});


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((taskName, notes, date) => {
  let name = taskName;
  let note = notes || "";
  const dueDate = date || "";
  const isChecked = false;

  const getName = () => name;

  const setName = (newName) => (name = newName);

  const setNote = (newNote) => (note = newNote);

  const getNote = () => note;

  const getDate = () => dueDate;

  const isCompleted = () => isChecked;

  return {
    getName,
    setName,
    setNote,
    getNote,
    getDate,
    isCompleted,
  };
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ "./src/interface.js");


window.addEventListener("DOMContentLoaded", _interface__WEBPACK_IMPORTED_MODULE_0__["default"]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDN0NGLGlFQUFlO0FBQ2Y7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM1QkYsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7O1VDMUJGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOb0M7O0FBRXBDLDRDQUE0QyxrREFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RMaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICogXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJleHBvcnQgY29uc3QgYnRuVG9nZ2xlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi10b2dnbGUtaW5wdXRcIik7XG5leHBvcnQgY29uc3QgYnRuQWRkTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWFkZC1saXN0XCIpO1xuZXhwb3J0IGNvbnN0IGJ0bkNhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWNhbmNlbC1saXN0XCIpO1xuZXhwb3J0IGNvbnN0IGJ0bkJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1iYWNrXCIpO1xuZXhwb3J0IGNvbnN0IGJ0bkNsb3NlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1jbG9zZVwiKTtcblxuZXhwb3J0IGNvbnN0IGlucHV0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1pbnB1dFwiKTtcbmV4cG9ydCBjb25zdCBpbnB1dFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbW9kYWxcIik7XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0XCIpO1xuZXhwb3J0IGNvbnN0IHByb2plY3RWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKTtcbmV4cG9ydCBjb25zdCBsaXN0VmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdFwiKTtcbmV4cG9ydCBjb25zdCBsaXN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3QtdGl0bGVcIik7XG5cbmV4cG9ydCBjb25zdCBsaXN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGlzdC1pbnB1dFwiKTtcblxuZXhwb3J0IGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLW5hbWVcIik7XG5leHBvcnQgY29uc3QgdGFza05vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbm90ZVwiKTtcbmV4cG9ydCBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kYXRlXCIpO1xuZXhwb3J0IGNvbnN0IGJ0bkFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1hZGQtdGFza1wiKTtcbiIsIi8vIGltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IFByb2plY3RMaXN0IGZyb20gXCIuL3Byb2plY3RMaXN0XCI7XG5pbXBvcnQgKiBhcyBkb21FbGVtZW50IGZyb20gXCIuL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8vIEluaXRpYWxpemUgVG9EbyBMaXN0IHdpdGggdGFza3NcbiAgY29uc3QgdG9Eb0xpc3QgPSBQcm9qZWN0TGlzdCgpO1xuICBjb25zdCB0b2RheVByb2plY3QgPSBQcm9qZWN0KFwiVG9kYXlcIik7XG4gIGNvbnN0IGluYm94ID0gUHJvamVjdChcIkluYm94XCIpO1xuICB0b0RvTGlzdC5hZGRQcm9qZWN0KHRvZGF5UHJvamVjdCk7XG4gIHRvRG9MaXN0LmFkZFByb2plY3QoaW5ib3gpO1xuXG4gIGNvbnN0IGVtYWlsVGFzayA9IFRhc2soXCJSZXNwb25kIHRvIGVtYWlsc1wiLCBcIkNoZWNrXCIsIFwiMjEvMDcvMjAyMlwiKTtcbiAgY29uc3QgbGF1bmRyeVRhc2sgPSBUYXNrKFwiTGF1bmRyeVwiLCBcIldhc2ggdHJvdXNlcnNcIik7XG4gIGNvbnN0IG5ld1Rhc2sgPSBUYXNrKFwiTmV3IHRhc2tcIik7XG5cbiAgdG9kYXlQcm9qZWN0LmFkZFRhc2soZW1haWxUYXNrKTtcbiAgdG9kYXlQcm9qZWN0LmFkZFRhc2sobGF1bmRyeVRhc2spO1xuICB0b2RheVByb2plY3QuYWRkVGFzayhuZXdUYXNrKTtcbiAgaW5ib3guYWRkVGFzayhlbWFpbFRhc2spO1xuICBpbmJveC5hZGRUYXNrKGxhdW5kcnlUYXNrKTtcblxuICBjb25zdCBjbGVhckxpc3QgPSAoKSA9PlxuICAgIChkb21FbGVtZW50LnByb2plY3RWaWV3LmlubmVySFRNTCA9IGA8aDIgY2xhc3M9XCJwcm9qZWN0cy10aXRsZVwiPk15IGxpc3RzPC9oMj5gKTtcblxuICBjb25zdCBjbGVhclByb2plY3QgPSAocHJvamVjdE5hbWUpID0+XG4gICAgKGRvbUVsZW1lbnQubGlzdFZpZXcuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJsaXN0LWhlYWRlclwiPlxuICA8aDIgY2xhc3M9XCJsaXN0LXRpdGxlXCI+JHtwcm9qZWN0TmFtZX08L2gyPlxuICA8YnV0dG9uIGNsYXNzPVwiYnRuLWJhY2tcIj4mIzYwOyBCYWNrPC9idXR0b24+XG48L2Rpdj5gKTtcblxuICBjb25zdCBjbGVhcklucHV0ID0gKCkgPT4gKGRvbUVsZW1lbnQubGlzdE5hbWUudmFsdWUgPSBcIlwiKTtcblxuICAvLyBUb2dnbGUgaW5wdXRzIC8gbW92aW5nIHRocm91Z2ggYXBwXG4gIGNvbnN0IGluaXRUb2dnbGVJbnB1dCA9ICgpID0+IHtcbiAgICBkb21FbGVtZW50LmJ0blRvZ2dsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAoZG9tRWxlbWVudC5saXN0Vmlldy5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgZG9tRWxlbWVudC5pbnB1dFRhc2suY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvbUVsZW1lbnQuaW5wdXRMaXN0LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaW5pdEFkZExpc3RCdG4gPSAoKSA9PiB7XG4gICAgZG9tRWxlbWVudC5idG5BZGRMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBkb21FbGVtZW50LmlucHV0TGlzdC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGluaXRCdG5DYW5jZWwgPSAoKSA9PiB7XG4gICAgZG9tRWxlbWVudC5idG5DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGRvbUVsZW1lbnQuaW5wdXRMaXN0LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICBjbGVhcklucHV0KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlVGFza01vZGFsID0gKCkgPT4gZG9tRWxlbWVudC5pbnB1dFRhc2suY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcblxuICBjb25zdCBpbml0Q2xvc2VNb2RhbEJ0biA9ICgpID0+IHtcbiAgICBkb21FbGVtZW50LmJ0bkNsb3NlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRvZ2dsZVRhc2tNb2RhbCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGluaXRUYXNrVGl0bGUgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvbUVsZW1lbnQubGlzdFZpZXc7XG4gICAgdGFza0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IG5vdGVzID0gZS50YXJnZXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbm90ZXNcIik7XG4gICAgICBjb25zdCB0YXNrRGF0ZSA9XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGF0ZVwiKTtcbiAgICAgIGNvbnN0IHRhc2tCdG5zID1cbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1idG4tZ3JvdXBcIik7XG5cbiAgICAgIGlmIChlLnRhcmdldC5kYXRhc2V0LnRvZ2dsZVRhc2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBub3Rlcy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICB0YXNrRGF0ZS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICB0YXNrQnRucy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8vIERlbGV0ZSBwcm9qZWN0IGFuZCB0YXNrIC8gdG9nZ2xlIGNvbXBsZXRlZFxuXG4gIGNvbnN0IGluaXRSZW1vdmVUYXNrQnRuID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1idG4tcmVtb3ZlXCIpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LXRpdGxlXCIpLnRleHRDb250ZW50O1xuXG4gICAgcmVtb3ZlQnRuLmZvckVhY2goKGJ1dHRvbikgPT5cbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgdGFza05hbWUgPVxuICAgICAgICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCIudGFzay10aXRsZVwiXG4gICAgICAgICAgKS50ZXh0Q29udGVudDtcbiAgICAgICAgY29uc29sZS5sb2codGFza05hbWUpO1xuICAgICAgICB0b0RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5kZWxldGVUYXNrKHRhc2tOYW1lKTtcbiAgICAgICAgY2xlYXJQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgbG9hZFRhc2tzKHByb2plY3ROYW1lKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBpbml0VG9nZ2xlQ29tcGxldGVkID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tDaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1jaGVja1wiKTtcbiAgICB0YXNrQ2hlY2suZm9yRWFjaCgodGFzaykgPT5cbiAgICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlZFwiKTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcImNoZWNrZWRcIik7XG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgLy8gTGlzdCBkaXNwbGF5XG4gIGNvbnN0IHRhc2tDb3VudERpc3BsYXkgPSAocHJvamVjdE5hbWUpID0+XG4gICAgdG9Eb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuZ2V0VGFza3NDb3VudCgpO1xuXG4gIGNvbnN0IGNyZWF0ZUxpc3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBkb21FbGVtZW50LnByb2plY3RWaWV3LmlubmVySFRNTCArPSBgPGRpdiBjbGFzcz1cInByb2plY3RcIj5cbiAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaGVjay1kb3VibGVcIj48L2k+XG4gIDxoMyBjbGFzcz1cInByb2plY3QtdGl0bGVcIiBkYXRhLXRvZ2dsZS1wcm9qZWN0PiR7cHJvamVjdE5hbWV9PHNwYW4gY2xhc3M9XCJ0YXNrLWNvdW50XCI+JHt0YXNrQ291bnREaXNwbGF5KFxuICAgICAgcHJvamVjdE5hbWVcbiAgICApfSAmIzYyOzwvc3Bhbj5cbjwvaDM+XG4gIDxidXR0b24gY2xhc3M9XCJidG4tZWRpdFwiPlxuICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2lyY2xlLWluZm9cIj48L2k+XG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIGNsYXNzPVwiYnRuLXJlbW92ZVwiPlxuICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtdHJhc2hcIj48L2k+XG4gIDwvYnV0dG9uPlxuPC9kaXY+YDtcbiAgfTtcblxuICAvLyBUYXNrIGRpc3BsYXlcbiAgY29uc3QgZ2V0VGFza05vdGVzID0gKHRhc2tOYW1lKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3QtdGl0bGVcIikudGV4dENvbnRlbnQ7XG4gICAgcmV0dXJuIHRvRG9MaXN0LmdldFByb2plY3QocHJvamVjdE5hbWUpLmdldFRhc2sodGFza05hbWUpLmdldE5vdGUoKTtcbiAgfTtcblxuICBjb25zdCBnZXRUYXNrRGF0ZSA9ICh0YXNrTmFtZSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LXRpdGxlXCIpLnRleHRDb250ZW50O1xuICAgIHJldHVybiB0b0RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5nZXRUYXNrKHRhc2tOYW1lKS5nZXREYXRlKCk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlVGFzayA9ICh0YXNrTmFtZSkgPT4ge1xuICAgIGRvbUVsZW1lbnQubGlzdFZpZXcuaW5uZXJIVE1MICs9IGBcbiAgPGRpdiBjbGFzcz1cImxpc3QtdGFza1wiPlxuICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNpcmNsZS1jaGVjayB0YXNrLWNoZWNrXCI+PC9pPlxuICA8ZGl2IGNsYXNzPVwidGFza1wiPlxuICA8ZGl2IGNsYXNzPVwidGFzay1kZXNjXCI+XG4gIDxoMyBjbGFzcz1cInRhc2stdGl0bGVcIiBkYXRhLXRvZ2dsZS10YXNrPiR7dGFza05hbWV9PC9oMz5cbiAgPHAgY2xhc3M9XCJ0YXNrLW5vdGVzXCIgZGF0YS10b2dnbGUtdGFzaz4ke2dldFRhc2tOb3Rlcyh0YXNrTmFtZSl9PC9wPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInRhc2staW5mb1wiPlxuICA8cCBjbGFzcz1cInRhc2stZGF0ZVwiPiR7Z2V0VGFza0RhdGUodGFza05hbWUpfTwvcD5cbiAgPGRpdiBjbGFzcz1cInRhc2stYnRuLWdyb3VwXCI+XG4gIDxidXR0b24gY2xhc3M9XCJ0YXNrLWJ0bi1lZGl0XCI+XG4gICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaXJjbGUtaW5mb1wiPjwvaT5cbiAgPC9idXR0b24+XG4gIDxidXR0b24gY2xhc3M9XCJ0YXNrLWJ0bi1yZW1vdmVcIj5cbiAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXRyYXNoXCI+PC9pPlxuICA8L2J1dHRvbj5cbiAgPC9kaXY+XG4gIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PmA7XG4gIH07XG5cbiAgLy8gQWRkIGFuZCBsb2FkIHByb2plY3RzXG4gIGNvbnN0IGFkZFByb2plY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb21FbGVtZW50Lmxpc3ROYW1lLnZhbHVlO1xuICAgIGlmIChwcm9qZWN0TmFtZSA9PT0gXCJcIikge1xuICAgICAgYWxlcnQoXCJGaWVsZCBjYW4ndCBiZSBlbXB0eSFcIik7XG4gICAgfSBlbHNlIGlmICh0b0RvTGlzdC5jb250YWlucyhwcm9qZWN0TmFtZSkpIHtcbiAgICAgIGFsZXJ0KFwiUHJvamVjdCBhbHJlYWR5IGV4aXN0cyFcIik7XG4gICAgfSBlbHNlIHRvRG9MaXN0LmFkZFByb2plY3QoUHJvamVjdChwcm9qZWN0TmFtZSkpO1xuICB9O1xuXG4gIGNvbnN0IGluaXRQcm9qZWN0VGl0bGUgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvbUVsZW1lbnQucHJvamVjdFZpZXc7XG5cbiAgICBwcm9qZWN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgLy8gdG8gcmVtb3ZlIHRoZSBzcGFuIGFuZCBnZXQgYWN0dWFsIHByb2plY3QgbmFtZVxuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBlLnRhcmdldC50ZXh0Q29udGVudC50cmltKCkuc2xpY2UoMCwgLTMpO1xuXG4gICAgICBpZiAoZS50YXJnZXQuZGF0YXNldC50b2dnbGVQcm9qZWN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdE5hbWUpO1xuICAgICAgICBjbGVhclByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICBkb21FbGVtZW50LnByb2plY3RWaWV3LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIGRvbUVsZW1lbnQubGlzdFZpZXcuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgbG9hZFRhc2tzKHByb2plY3ROYW1lKTtcblxuICAgICAgICBpZiAoZG9tRWxlbWVudC5pbnB1dExpc3QuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKVxuICAgICAgICAgIGRvbUVsZW1lbnQuaW5wdXRMaXN0LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIGRvbUVsZW1lbnQuYnRuVG9nZ2xlSW5wdXQubGFzdENoaWxkLnRleHRDb250ZW50ID0gXCJBZGQgdGFza1wiO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGluaXRSZW1vdmVQcm9qZWN0QnRuID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuLXJlbW92ZVwiKTtcblxuICAgIHJlbW92ZUJ0bi5mb3JFYWNoKChidXR0b24pID0+XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZS50YXJnZXQucGFyZW50Tm9kZS50ZXh0Q29udGVudC50cmltKCkuc2xpY2UoMCwgLTMpO1xuICAgICAgICB0b0RvTGlzdC5kZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgY2xlYXJMaXN0KCk7XG4gICAgICAgIGxvYWRQcm9qZWN0cygpO1xuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRQcm9qZWN0cyA9ICgpID0+IHtcbiAgICB0b0RvTGlzdC5nZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGNyZWF0ZUxpc3QocHJvamVjdC5nZXROYW1lKCkpO1xuXG4gICAgICBpbml0UmVtb3ZlUHJvamVjdEJ0bigpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGluaXRCYWNrQnRuID0gKCkgPT4ge1xuICAgIGNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1iYWNrXCIpO1xuICAgIGJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGRvbUVsZW1lbnQucHJvamVjdFZpZXcuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgIGRvbUVsZW1lbnQubGlzdFZpZXcuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgIGRvbUVsZW1lbnQuYnRuVG9nZ2xlSW5wdXQubGFzdENoaWxkLnRleHRDb250ZW50ID0gXCJBZGQgbGlzdFwiO1xuICAgICAgY2xlYXJMaXN0KCk7XG4gICAgICBsb2FkUHJvamVjdHMoKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBpbml0QWRkUHJvamVjdCA9ICgpID0+IHtcbiAgICBjbGVhckxpc3QoKTtcbiAgICBhZGRQcm9qZWN0KCk7XG4gICAgbG9hZFByb2plY3RzKCk7XG4gICAgY2xlYXJJbnB1dCgpO1xuICB9O1xuXG4gIGRvbUVsZW1lbnQuYnRuQWRkTGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gaW5pdEFkZFByb2plY3QoKSk7XG5cbiAgLy8gQWRkIGFuZCBsb2FkIHRhc2tzXG4gIGNvbnN0IGFkZFRhc2sgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvbUVsZW1lbnQudGFza05hbWUudmFsdWU7XG4gICAgY29uc3QgdGFza05vdGUgPSBkb21FbGVtZW50LnRhc2tOb3RlLnZhbHVlO1xuICAgIGNvbnN0IHRhc2tEYXRlID0gZG9tRWxlbWVudC50YXNrRGF0ZS52YWx1ZTtcbiAgICBpZiAodGFza05hbWUgPT09IFwiXCIpIHtcbiAgICAgIGFsZXJ0KFwiRmllbGQgY2FuJ3QgYmUgZW1wdHkhXCIpO1xuICAgIH0gZWxzZSBpZiAodG9Eb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuY29udGFpbnModGFza05hbWUpKSB7XG4gICAgICBhbGVydChcIlRhc2sgYWxyZWFkeSBleGlzdHMhXCIpO1xuICAgIH0gZWxzZVxuICAgICAgdG9Eb0xpc3RcbiAgICAgICAgLmdldFByb2plY3QocHJvamVjdE5hbWUpXG4gICAgICAgIC5hZGRUYXNrKFRhc2sodGFza05hbWUsIHRhc2tOb3RlLCB0YXNrRGF0ZSkpO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRUYXNrcyA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgIHRvRG9MaXN0XG4gICAgICAuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSlcbiAgICAgIC5nZXRUYXNrcygpXG4gICAgICAuZm9yRWFjaCgodGFzaykgPT4gY3JlYXRlVGFzayh0YXNrLmdldE5hbWUoKSkpO1xuICAgIGluaXRSZW1vdmVUYXNrQnRuKCk7XG4gICAgaW5pdEJhY2tCdG4oKTtcbiAgICBpbml0VG9nZ2xlQ29tcGxldGVkKCk7XG4gIH07XG5cbiAgY29uc3QgaW5pdEFkZFRhc2sgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3QtdGl0bGVcIikudGV4dENvbnRlbnQ7XG4gICAgYWRkVGFzayhwcm9qZWN0TmFtZSk7XG4gICAgY2xlYXJQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICBsb2FkVGFza3MocHJvamVjdE5hbWUpO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyTW9kYWxJbnB1dCA9ICgpID0+IHtcbiAgICBkb21FbGVtZW50LnRhc2tOYW1lLnZhbHVlID0gXCJcIjtcbiAgICBkb21FbGVtZW50LnRhc2tOb3RlLnZhbHVlID0gXCJcIjtcbiAgICBkb21FbGVtZW50LnRhc2tEYXRlLnZhbHVlID0gXCJcIjtcbiAgfTtcblxuICBkb21FbGVtZW50LmJ0bkFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpbml0QWRkVGFzaygpO1xuICAgIHRvZ2dsZVRhc2tNb2RhbCgpO1xuICAgIGNsZWFyTW9kYWxJbnB1dCgpO1xuICB9KTtcblxuICBjb25zdCBsb2FkSG9tZVBhZ2UgPSAoKSA9PiB7XG4gICAgaW5pdFRvZ2dsZUlucHV0KCk7XG4gICAgaW5pdEFkZExpc3RCdG4oKTtcbiAgICBpbml0QnRuQ2FuY2VsKCk7XG4gICAgbG9hZFByb2plY3RzKCk7XG4gICAgaW5pdFByb2plY3RUaXRsZSgpO1xuICAgIGluaXRUYXNrVGl0bGUoKTtcbiAgICBpbml0Q2xvc2VNb2RhbEJ0bigpO1xuICB9O1xuXG4gIGxvYWRIb21lUGFnZSgpO1xufTtcbiIsImltcG9ydCB7IHRvRGF0ZSwgaXNUb2RheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5leHBvcnQgZGVmYXVsdCAocHJvamVjdE5hbWUpID0+IHtcbiAgbGV0IG5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgbGV0IHRhc2tzID0gW107XG5cbiAgY29uc3Qgc2V0TmFtZSA9IChuZXdOYW1lKSA9PiAobmFtZSA9IG5ld05hbWUpO1xuXG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lO1xuXG4gIGNvbnN0IGNvbnRhaW5zID0gKHRhc2tOYW1lKSA9PlxuICAgIHRhc2tzLnNvbWUoKHRhc2spID0+IHRhc2suZ2V0TmFtZSgpID09PSB0YXNrTmFtZSk7XG5cbiAgY29uc3QgYWRkVGFzayA9ICh0YXNrTmFtZSkgPT4ge1xuICAgIGlmIChjb250YWlucyh0YXNrTmFtZS5nZXROYW1lKCkpKSByZXR1cm47XG4gICAgdGFza3MucHVzaCh0YXNrTmFtZSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VGFzayA9ICh0YXNrTmFtZSkgPT5cbiAgICB0YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmdldE5hbWUoKSA9PT0gdGFza05hbWUpO1xuXG4gIGNvbnN0IGdldFRhc2tzID0gKCkgPT4gdGFza3M7XG5cbiAgY29uc3QgZ2V0VGFza3NDb3VudCA9ICgpID0+IHRhc2tzLmxlbmd0aDtcblxuICBjb25zdCBkZWxldGVUYXNrID0gKHRhc2tOYW1lKSA9PlxuICAgICh0YXNrcyA9IHRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5nZXROYW1lKCkgIT09IHRhc2tOYW1lKSk7XG5cbiAgY29uc3QgZ2V0VG9kYXlUYXNrcyA9ICgpID0+XG4gICAgdGFza3MuZmlsdGVyKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2suZ2V0RGF0ZSgpKTtcbiAgICAgIHJldHVybiBpc1RvZGF5KHRvRGF0ZSh0YXNrRGF0ZSkpO1xuICAgIH0pO1xuXG4gIHJldHVybiB7XG4gICAgc2V0TmFtZSxcbiAgICBnZXROYW1lLFxuICAgIGFkZFRhc2ssXG4gICAgZ2V0VGFza3MsXG4gICAgZ2V0VGFzayxcbiAgICBnZXRUYXNrc0NvdW50LFxuICAgIGNvbnRhaW5zLFxuICAgIGRlbGV0ZVRhc2ssXG4gICAgZ2V0VG9kYXlUYXNrcyxcbiAgfTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGxldCBwcm9qZWN0cyA9IFtdO1xuXG4gIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4gcHJvamVjdHM7XG5cbiAgY29uc3QgY29udGFpbnMgPSAocHJvamVjdE5hbWUpID0+XG4gICAgcHJvamVjdHMuc29tZSgocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IHByb2plY3ROYW1lKTtcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgaWYgKGNvbnRhaW5zKHByb2plY3ROYW1lLmdldE5hbWUoKSkpIHJldHVybjtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3ROYW1lKTtcbiAgfTtcblxuICBjb25zdCBnZXRQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PlxuICAgIHByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBwcm9qZWN0TmFtZSk7XG5cbiAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT5cbiAgICAocHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgIT09IHByb2plY3ROYW1lXG4gICAgKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRQcm9qZWN0cyxcbiAgICBhZGRQcm9qZWN0LFxuICAgIGNvbnRhaW5zLFxuICAgIGdldFByb2plY3QsXG4gICAgZGVsZXRlUHJvamVjdCxcbiAgfTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCAodGFza05hbWUsIG5vdGVzLCBkYXRlKSA9PiB7XG4gIGxldCBuYW1lID0gdGFza05hbWU7XG4gIGxldCBub3RlID0gbm90ZXMgfHwgXCJcIjtcbiAgY29uc3QgZHVlRGF0ZSA9IGRhdGUgfHwgXCJcIjtcbiAgY29uc3QgaXNDaGVja2VkID0gZmFsc2U7XG5cbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG5cbiAgY29uc3Qgc2V0TmFtZSA9IChuZXdOYW1lKSA9PiAobmFtZSA9IG5ld05hbWUpO1xuXG4gIGNvbnN0IHNldE5vdGUgPSAobmV3Tm90ZSkgPT4gKG5vdGUgPSBuZXdOb3RlKTtcblxuICBjb25zdCBnZXROb3RlID0gKCkgPT4gbm90ZTtcblxuICBjb25zdCBnZXREYXRlID0gKCkgPT4gZHVlRGF0ZTtcblxuICBjb25zdCBpc0NvbXBsZXRlZCA9ICgpID0+IGlzQ2hlY2tlZDtcblxuICByZXR1cm4ge1xuICAgIGdldE5hbWUsXG4gICAgc2V0TmFtZSxcbiAgICBzZXROb3RlLFxuICAgIGdldE5vdGUsXG4gICAgZ2V0RGF0ZSxcbiAgICBpc0NvbXBsZXRlZCxcbiAgfTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBJbnRlcmZhY2UgZnJvbSBcIi4vaW50ZXJmYWNlXCI7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBJbnRlcmZhY2UpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9