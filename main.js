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
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const loadHomePage = () => {
    loadProjects();
    initTaskTitle();
  };
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

  // Add and load projects
  const addProject = () => {
    const projectName = _dom_js__WEBPACK_IMPORTED_MODULE_3__.listName.value;
    if (projectName === "") {
      alert("Field can't be empty!");
      return;
    } else if (toDoList.contains(projectName)) {
      alert("Project already exists!");
      return;
    } else return toDoList.addProject((0,_project__WEBPACK_IMPORTED_MODULE_1__["default"])(projectName));
  };

  const loadProjects = () => {
    toDoList.getProjects().forEach((project) => {
      createList(project.getName());
      initProjectTitle();
      initRemoveProjectBtn();
    });
  };

  _dom_js__WEBPACK_IMPORTED_MODULE_3__.btnAddList.addEventListener("click", () => initAddProject());

  const initAddProject = () => {
    clearList();
    addProject();
    loadProjects();
    clearInput();
  };

  const clearInput = () => (_dom_js__WEBPACK_IMPORTED_MODULE_3__.listName.value = "");

  // Add and load tasks
  const addTask = (projectName) => {
    const taskName = _dom_js__WEBPACK_IMPORTED_MODULE_3__.taskName.value;
    const taskNote = _dom_js__WEBPACK_IMPORTED_MODULE_3__.taskNote.value;
    const taskDate = _dom_js__WEBPACK_IMPORTED_MODULE_3__.taskDate.value;
    if (taskName === "") {
      alert("Field can't be empty!");
      return;
    } else if (toDoList.getProject(projectName).contains(taskName)) {
      alert("Task already exists!");
      return;
    } else
      return toDoList
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

  _dom_js__WEBPACK_IMPORTED_MODULE_3__.btnAddTask.addEventListener("click", () => {
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
    _dom_js__WEBPACK_IMPORTED_MODULE_3__.taskName.value = "";
    _dom_js__WEBPACK_IMPORTED_MODULE_3__.taskNote.value = "";
    _dom_js__WEBPACK_IMPORTED_MODULE_3__.taskDate.value = "";
  };

  // List display
  const createList = (projectName) => {
    _dom_js__WEBPACK_IMPORTED_MODULE_3__.projectView.innerHTML += `<div class="project">
  <i class="fa-solid fa-check-double"></i>
  <h3 class="project-title">${projectName}<span class="task-count">${taskCountDisplay(
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
    (_dom_js__WEBPACK_IMPORTED_MODULE_3__.projectView.innerHTML = `<h2 class="projects-title">My lists</h2>`);

  // Task display
  const createTask = (taskName) => {
    _dom_js__WEBPACK_IMPORTED_MODULE_3__.listView.innerHTML += `
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
    (_dom_js__WEBPACK_IMPORTED_MODULE_3__.listView.innerHTML = `<div class="list-header">
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
  _dom_js__WEBPACK_IMPORTED_MODULE_3__.btnToggleInput.addEventListener("click", () => {
    if (_dom_js__WEBPACK_IMPORTED_MODULE_3__.listView.classList.contains("active")) {
      _dom_js__WEBPACK_IMPORTED_MODULE_3__.inputTask.classList.toggle("active");
    } else {
      _dom_js__WEBPACK_IMPORTED_MODULE_3__.inputList.classList.toggle("active");
    }
  });

  _dom_js__WEBPACK_IMPORTED_MODULE_3__.btnAddList.addEventListener("click", () => {
    _dom_js__WEBPACK_IMPORTED_MODULE_3__.inputList.classList.toggle("active");
  });

  _dom_js__WEBPACK_IMPORTED_MODULE_3__.btnCancel.addEventListener("click", () => {
    _dom_js__WEBPACK_IMPORTED_MODULE_3__.inputList.classList.toggle("active");
    clearInput();
  });

  _dom_js__WEBPACK_IMPORTED_MODULE_3__.btnCloseModal.addEventListener("click", () => {
    toggleTaskModal();
  });

  const toggleTaskModal = () => _dom_js__WEBPACK_IMPORTED_MODULE_3__.inputTask.classList.toggle("active");

  const initProjectTitle = () => {
    const projectTitle = document.querySelectorAll(".project-title");
    projectTitle.forEach((title) =>
      title.addEventListener("click", (e) => {
        // to remove the span and get actual project name
        const projectName = e.currentTarget.textContent.trim().slice(0, -3);
        clearProject(projectName);
        _dom_js__WEBPACK_IMPORTED_MODULE_3__.projectView.classList.toggle("active");
        _dom_js__WEBPACK_IMPORTED_MODULE_3__.listView.classList.toggle("active");
        loadTasks(projectName);
        if (_dom_js__WEBPACK_IMPORTED_MODULE_3__.inputList.classList.contains("active"))
          _dom_js__WEBPACK_IMPORTED_MODULE_3__.inputList.classList.toggle("active");
        _dom_js__WEBPACK_IMPORTED_MODULE_3__.btnToggleInput.lastChild.textContent = "Add task";
      })
    );
  };

  const initTaskTitle = () => {
    const taskContainer = _dom_js__WEBPACK_IMPORTED_MODULE_3__.listView;
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
      _dom_js__WEBPACK_IMPORTED_MODULE_3__.projectView.classList.toggle("active");
      _dom_js__WEBPACK_IMPORTED_MODULE_3__.listView.classList.toggle("active");
      _dom_js__WEBPACK_IMPORTED_MODULE_3__.btnToggleInput.lastChild.textContent = "Add list";
      clearList();
      loadProjects();
    });
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

  const setName = (newName) => {
    return (name = newName);
  };

  const getName = () => {
    return name;
  };

  const addTask = (taskName) => {
    if (contains(taskName.getName())) return;
    tasks.push(taskName);
  };

  const getTask = (taskName) => {
    return tasks.find((task) => task.getName() === taskName);
  };

  const getTasks = () => {
    return tasks;
  };

  const getTasksCount = () => {
    return tasks.length;
  };

  const contains = (taskName) => {
    return tasks.some((task) => task.getName() === taskName);
  };

  const deleteTask = (taskName) => {
    return (tasks = tasks.filter((task) => task.getName() !== taskName));
  };

  const getTodayTasks = () => {
    return tasks.filter((task) => {
      const taskDate = new Date(task.getDate());
      return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(taskDate));
    });
  };

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

  const getProjects = () => {
    return projects;
  };

  const addProject = (projectName) => {
    if (contains(projectName.getName())) return;
    projects.push(projectName);
  };

  const contains = (projectName) => {
    return projects.some((project) => project.getName() === projectName);
  };

  const getProject = (projectName) => {
    return projects.find((project) => project.getName() === projectName);
  };

  const deleteProject = (projectName) => {
    return (projects = projects.filter(
      (project) => project.getName() !== projectName
    ));
  };

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
  let note = notes || "Notes";
  let dueDate = date || "No date";
  let isChecked = false;

  const getName = () => name;

  const setName = (newName) => {
    return (name = newName);
  };

  const setNote = (newNote) => {
    return (note = newNote);
  };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3pERixpRUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2pDRixpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7OztVQzlCRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm9DOztBQUVwQyw0Q0FBNEMsa0RBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0TGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICogXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIHZhciByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiZXhwb3J0IGNvbnN0IGJ0blRvZ2dsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tdG9nZ2xlLWlucHV0XCIpO1xuZXhwb3J0IGNvbnN0IGJ0bkFkZExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1hZGQtbGlzdFwiKTtcbmV4cG9ydCBjb25zdCBidG5DYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1jYW5jZWwtbGlzdFwiKTtcbmV4cG9ydCBjb25zdCBidG5CYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tYmFja1wiKTtcbmV4cG9ydCBjb25zdCBidG5DbG9zZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tY2xvc2VcIik7XG5cbmV4cG9ydCBjb25zdCBpbnB1dExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4taW5wdXRcIik7XG5leHBvcnQgY29uc3QgaW5wdXRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLW1vZGFsXCIpO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdFwiKTtcbmV4cG9ydCBjb25zdCBwcm9qZWN0VmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIik7XG5leHBvcnQgY29uc3QgbGlzdFZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3RcIik7XG5leHBvcnQgY29uc3QgbGlzdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LXRpdGxlXCIpO1xuXG5leHBvcnQgY29uc3QgbGlzdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpc3QtaW5wdXRcIik7XG5cbmV4cG9ydCBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1uYW1lXCIpO1xuZXhwb3J0IGNvbnN0IHRhc2tOb3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLW5vdGVcIik7XG5leHBvcnQgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGF0ZVwiKTtcbmV4cG9ydCBjb25zdCBidG5BZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tYWRkLXRhc2tcIik7XG4iLCJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBQcm9qZWN0TGlzdCBmcm9tIFwiLi9wcm9qZWN0TGlzdFwiO1xuaW1wb3J0ICogYXMgZG9tRWxlbWVudCBmcm9tIFwiLi9kb20uanNcIjtcbmltcG9ydCB7IGVsIH0gZnJvbSBcImRhdGUtZm5zL2xvY2FsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IGxvYWRIb21lUGFnZSA9ICgpID0+IHtcbiAgICBsb2FkUHJvamVjdHMoKTtcbiAgICBpbml0VGFza1RpdGxlKCk7XG4gIH07XG4gIC8vIEluaXRpYWxpemUgVG9EbyBMaXN0IHdpdGggdGFza3NcbiAgY29uc3QgdG9Eb0xpc3QgPSBQcm9qZWN0TGlzdCgpO1xuICBjb25zdCB0b2RheVByb2plY3QgPSBQcm9qZWN0KFwiVG9kYXlcIik7XG4gIGNvbnN0IGluYm94ID0gUHJvamVjdChcIkluYm94XCIpO1xuICB0b0RvTGlzdC5hZGRQcm9qZWN0KHRvZGF5UHJvamVjdCk7XG4gIHRvRG9MaXN0LmFkZFByb2plY3QoaW5ib3gpO1xuXG4gIGNvbnN0IGVtYWlsVGFzayA9IFRhc2soXCJSZXNwb25kIHRvIGVtYWlsc1wiLCBcIkNoZWNrXCIsIFwiMjEvMDcvMjAyMlwiKTtcbiAgY29uc3QgbGF1bmRyeVRhc2sgPSBUYXNrKFwiTGF1bmRyeVwiLCBcIldhc2ggdHJvdXNlcnNcIik7XG4gIGNvbnN0IG5ld1Rhc2sgPSBUYXNrKFwiTmV3IHRhc2tcIik7XG5cbiAgdG9kYXlQcm9qZWN0LmFkZFRhc2soZW1haWxUYXNrKTtcbiAgdG9kYXlQcm9qZWN0LmFkZFRhc2sobGF1bmRyeVRhc2spO1xuICB0b2RheVByb2plY3QuYWRkVGFzayhuZXdUYXNrKTtcbiAgaW5ib3guYWRkVGFzayhlbWFpbFRhc2spO1xuICBpbmJveC5hZGRUYXNrKGxhdW5kcnlUYXNrKTtcblxuICAvLyBBZGQgYW5kIGxvYWQgcHJvamVjdHNcbiAgY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvbUVsZW1lbnQubGlzdE5hbWUudmFsdWU7XG4gICAgaWYgKHByb2plY3ROYW1lID09PSBcIlwiKSB7XG4gICAgICBhbGVydChcIkZpZWxkIGNhbid0IGJlIGVtcHR5IVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKHRvRG9MaXN0LmNvbnRhaW5zKHByb2plY3ROYW1lKSkge1xuICAgICAgYWxlcnQoXCJQcm9qZWN0IGFscmVhZHkgZXhpc3RzIVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgcmV0dXJuIHRvRG9MaXN0LmFkZFByb2plY3QoUHJvamVjdChwcm9qZWN0TmFtZSkpO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRQcm9qZWN0cyA9ICgpID0+IHtcbiAgICB0b0RvTGlzdC5nZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGNyZWF0ZUxpc3QocHJvamVjdC5nZXROYW1lKCkpO1xuICAgICAgaW5pdFByb2plY3RUaXRsZSgpO1xuICAgICAgaW5pdFJlbW92ZVByb2plY3RCdG4oKTtcbiAgICB9KTtcbiAgfTtcblxuICBkb21FbGVtZW50LmJ0bkFkZExpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGluaXRBZGRQcm9qZWN0KCkpO1xuXG4gIGNvbnN0IGluaXRBZGRQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNsZWFyTGlzdCgpO1xuICAgIGFkZFByb2plY3QoKTtcbiAgICBsb2FkUHJvamVjdHMoKTtcbiAgICBjbGVhcklucHV0KCk7XG4gIH07XG5cbiAgY29uc3QgY2xlYXJJbnB1dCA9ICgpID0+IChkb21FbGVtZW50Lmxpc3ROYW1lLnZhbHVlID0gXCJcIik7XG5cbiAgLy8gQWRkIGFuZCBsb2FkIHRhc2tzXG4gIGNvbnN0IGFkZFRhc2sgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvbUVsZW1lbnQudGFza05hbWUudmFsdWU7XG4gICAgY29uc3QgdGFza05vdGUgPSBkb21FbGVtZW50LnRhc2tOb3RlLnZhbHVlO1xuICAgIGNvbnN0IHRhc2tEYXRlID0gZG9tRWxlbWVudC50YXNrRGF0ZS52YWx1ZTtcbiAgICBpZiAodGFza05hbWUgPT09IFwiXCIpIHtcbiAgICAgIGFsZXJ0KFwiRmllbGQgY2FuJ3QgYmUgZW1wdHkhXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAodG9Eb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuY29udGFpbnModGFza05hbWUpKSB7XG4gICAgICBhbGVydChcIlRhc2sgYWxyZWFkeSBleGlzdHMhXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZVxuICAgICAgcmV0dXJuIHRvRG9MaXN0XG4gICAgICAgIC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKVxuICAgICAgICAuYWRkVGFzayhUYXNrKHRhc2tOYW1lLCB0YXNrTm90ZSwgdGFza0RhdGUpKTtcbiAgfTtcblxuICBjb25zdCBsb2FkVGFza3MgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICB0b0RvTGlzdFxuICAgICAgLmdldFByb2plY3QocHJvamVjdE5hbWUpXG4gICAgICAuZ2V0VGFza3MoKVxuICAgICAgLmZvckVhY2goKHRhc2spID0+IGNyZWF0ZVRhc2sodGFzay5nZXROYW1lKCkpKTtcbiAgICBpbml0UmVtb3ZlVGFza0J0bigpO1xuICAgIGluaXRCYWNrQnRuKCk7XG4gICAgaW5pdFRvZ2dsZUNvbXBsZXRlZCgpO1xuICB9O1xuXG4gIGRvbUVsZW1lbnQuYnRuQWRkVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGluaXRBZGRUYXNrKCk7XG4gICAgdG9nZ2xlVGFza01vZGFsKCk7XG4gICAgY2xlYXJNb2RhbElucHV0KCk7XG4gIH0pO1xuXG4gIGNvbnN0IGluaXRBZGRUYXNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LXRpdGxlXCIpLnRleHRDb250ZW50O1xuICAgIGFkZFRhc2socHJvamVjdE5hbWUpO1xuICAgIGNsZWFyUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgbG9hZFRhc2tzKHByb2plY3ROYW1lKTtcbiAgfTtcblxuICBjb25zdCBjbGVhck1vZGFsSW5wdXQgPSAoKSA9PiB7XG4gICAgZG9tRWxlbWVudC50YXNrTmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgZG9tRWxlbWVudC50YXNrTm90ZS52YWx1ZSA9IFwiXCI7XG4gICAgZG9tRWxlbWVudC50YXNrRGF0ZS52YWx1ZSA9IFwiXCI7XG4gIH07XG5cbiAgLy8gTGlzdCBkaXNwbGF5XG4gIGNvbnN0IGNyZWF0ZUxpc3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBkb21FbGVtZW50LnByb2plY3RWaWV3LmlubmVySFRNTCArPSBgPGRpdiBjbGFzcz1cInByb2plY3RcIj5cbiAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaGVjay1kb3VibGVcIj48L2k+XG4gIDxoMyBjbGFzcz1cInByb2plY3QtdGl0bGVcIj4ke3Byb2plY3ROYW1lfTxzcGFuIGNsYXNzPVwidGFzay1jb3VudFwiPiR7dGFza0NvdW50RGlzcGxheShcbiAgICAgIHByb2plY3ROYW1lXG4gICAgKX0gJiM2Mjs8L3NwYW4+XG48L2gzPlxuICA8YnV0dG9uIGNsYXNzPVwiYnRuLWVkaXRcIj5cbiAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNpcmNsZS1pbmZvXCI+PC9pPlxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1yZW1vdmVcIj5cbiAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXRyYXNoXCI+PC9pPlxuICA8L2J1dHRvbj5cbjwvZGl2PmA7XG4gIH07XG5cbiAgY29uc3QgdGFza0NvdW50RGlzcGxheSA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgIHJldHVybiB0b0RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5nZXRUYXNrc0NvdW50KCk7XG4gIH07XG5cbiAgY29uc3QgY2xlYXJMaXN0ID0gKCkgPT5cbiAgICAoZG9tRWxlbWVudC5wcm9qZWN0Vmlldy5pbm5lckhUTUwgPSBgPGgyIGNsYXNzPVwicHJvamVjdHMtdGl0bGVcIj5NeSBsaXN0czwvaDI+YCk7XG5cbiAgLy8gVGFzayBkaXNwbGF5XG4gIGNvbnN0IGNyZWF0ZVRhc2sgPSAodGFza05hbWUpID0+IHtcbiAgICBkb21FbGVtZW50Lmxpc3RWaWV3LmlubmVySFRNTCArPSBgXG4gIDxkaXYgY2xhc3M9XCJsaXN0LXRhc2tcIj5cbiAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaXJjbGUtY2hlY2sgdGFzay1jaGVja1wiPjwvaT5cbiAgPGRpdiBjbGFzcz1cInRhc2tcIj5cbiAgPGRpdiBjbGFzcz1cInRhc2stZGVzY1wiPlxuICA8aDMgY2xhc3M9XCJ0YXNrLXRpdGxlXCIgZGF0YS10b2dnbGUtdGFzaz4ke3Rhc2tOYW1lfTwvaDM+XG4gIDxwIGNsYXNzPVwidGFzay1ub3Rlc1wiIGRhdGEtdG9nZ2xlLXRhc2s+JHtnZXRUYXNrTm90ZXModGFza05hbWUpfTwvcD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ0YXNrLWluZm9cIj5cbiAgPHAgY2xhc3M9XCJ0YXNrLWRhdGVcIj4ke2dldFRhc2tEYXRlKHRhc2tOYW1lKX08L3A+XG4gIDxkaXYgY2xhc3M9XCJ0YXNrLWJ0bi1ncm91cFwiPlxuICA8YnV0dG9uIGNsYXNzPVwidGFzay1idG4tZWRpdFwiPlxuICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2lyY2xlLWluZm9cIj48L2k+XG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIGNsYXNzPVwidGFzay1idG4tcmVtb3ZlXCI+XG4gICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS10cmFzaFwiPjwvaT5cbiAgPC9idXR0b24+XG4gIDwvZGl2PlxuICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5gO1xuICB9O1xuXG4gIGNvbnN0IGdldFRhc2tOb3RlcyA9ICh0YXNrTmFtZSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LXRpdGxlXCIpLnRleHRDb250ZW50O1xuICAgIHJldHVybiB0b0RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5nZXRUYXNrKHRhc2tOYW1lKS5nZXROb3RlKCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VGFza0RhdGUgPSAodGFza05hbWUpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC10aXRsZVwiKS50ZXh0Q29udGVudDtcbiAgICByZXR1cm4gdG9Eb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuZ2V0VGFzayh0YXNrTmFtZSkuZ2V0RGF0ZSgpO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyUHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT5cbiAgICAoZG9tRWxlbWVudC5saXN0Vmlldy5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImxpc3QtaGVhZGVyXCI+XG4gICAgPGgyIGNsYXNzPVwibGlzdC10aXRsZVwiPiR7cHJvamVjdE5hbWV9PC9oMj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLWJhY2tcIj4mIzYwOyBCYWNrPC9idXR0b24+XG4gIDwvZGl2PmApO1xuXG4gIC8vIERlbGV0ZSBwcm9qZWN0IGFuZCB0YXNrIC8gdG9nZ2xlIGNvbXBsZXRlZFxuICBjb25zdCBpbml0UmVtb3ZlUHJvamVjdEJ0biA9ICgpID0+IHtcbiAgICBjb25zdCByZW1vdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ0bi1yZW1vdmVcIik7XG5cbiAgICByZW1vdmVCdG4uZm9yRWFjaCgoYnV0dG9uKSA9PlxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGUudGFyZ2V0LnBhcmVudE5vZGUudGV4dENvbnRlbnQudHJpbSgpLnNsaWNlKDAsIC0zKTtcbiAgICAgICAgdG9Eb0xpc3QuZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgIGNsZWFyTGlzdCgpO1xuICAgICAgICBsb2FkUHJvamVjdHMoKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBpbml0UmVtb3ZlVGFza0J0biA9ICgpID0+IHtcbiAgICBjb25zdCByZW1vdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2stYnRuLXJlbW92ZVwiKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC10aXRsZVwiKS50ZXh0Q29udGVudDtcblxuICAgIHJlbW92ZUJ0bi5mb3JFYWNoKChidXR0b24pID0+XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID1cbiAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiLnRhc2stdGl0bGVcIlxuICAgICAgICAgICkudGV4dENvbnRlbnQ7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tOYW1lKTtcbiAgICAgICAgdG9Eb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuZGVsZXRlVGFzayh0YXNrTmFtZSk7XG4gICAgICAgIGNsZWFyUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgIGxvYWRUYXNrcyhwcm9qZWN0TmFtZSk7XG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgaW5pdFRvZ2dsZUNvbXBsZXRlZCA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrQ2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2stY2hlY2tcIik7XG4gICAgdGFza0NoZWNrLmZvckVhY2goKHRhc2spID0+XG4gICAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZWRcIik7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJjaGVja2VkXCIpO1xuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIC8vIFRvZ2dsZSBpbnB1dHMgLyBtb3ZpbmcgdGhyb3VnaCBhcHBcbiAgZG9tRWxlbWVudC5idG5Ub2dnbGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChkb21FbGVtZW50Lmxpc3RWaWV3LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgZG9tRWxlbWVudC5pbnB1dFRhc2suY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9tRWxlbWVudC5pbnB1dExpc3QuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pO1xuXG4gIGRvbUVsZW1lbnQuYnRuQWRkTGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRvbUVsZW1lbnQuaW5wdXRMaXN0LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gIH0pO1xuXG4gIGRvbUVsZW1lbnQuYnRuQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZG9tRWxlbWVudC5pbnB1dExpc3QuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBjbGVhcklucHV0KCk7XG4gIH0pO1xuXG4gIGRvbUVsZW1lbnQuYnRuQ2xvc2VNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRvZ2dsZVRhc2tNb2RhbCgpO1xuICB9KTtcblxuICBjb25zdCB0b2dnbGVUYXNrTW9kYWwgPSAoKSA9PiBkb21FbGVtZW50LmlucHV0VGFzay5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuXG4gIGNvbnN0IGluaXRQcm9qZWN0VGl0bGUgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LXRpdGxlXCIpO1xuICAgIHByb2plY3RUaXRsZS5mb3JFYWNoKCh0aXRsZSkgPT5cbiAgICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAvLyB0byByZW1vdmUgdGhlIHNwYW4gYW5kIGdldCBhY3R1YWwgcHJvamVjdCBuYW1lXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZS5jdXJyZW50VGFyZ2V0LnRleHRDb250ZW50LnRyaW0oKS5zbGljZSgwLCAtMyk7XG4gICAgICAgIGNsZWFyUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgIGRvbUVsZW1lbnQucHJvamVjdFZpZXcuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgZG9tRWxlbWVudC5saXN0Vmlldy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICBsb2FkVGFza3MocHJvamVjdE5hbWUpO1xuICAgICAgICBpZiAoZG9tRWxlbWVudC5pbnB1dExpc3QuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKVxuICAgICAgICAgIGRvbUVsZW1lbnQuaW5wdXRMaXN0LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIGRvbUVsZW1lbnQuYnRuVG9nZ2xlSW5wdXQubGFzdENoaWxkLnRleHRDb250ZW50ID0gXCJBZGQgdGFza1wiO1xuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGluaXRUYXNrVGl0bGUgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvbUVsZW1lbnQubGlzdFZpZXc7XG4gICAgdGFza0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IG5vdGVzID0gZS50YXJnZXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbm90ZXNcIik7XG4gICAgICBjb25zdCB0YXNrRGF0ZSA9XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGF0ZVwiKTtcbiAgICAgIGNvbnN0IHRhc2tCdG5zID1cbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1idG4tZ3JvdXBcIik7XG5cbiAgICAgIGlmIChlLnRhcmdldC5kYXRhc2V0LnRvZ2dsZVRhc2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBub3Rlcy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICB0YXNrRGF0ZS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICB0YXNrQnRucy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGluaXRCYWNrQnRuID0gKCkgPT4ge1xuICAgIGNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1iYWNrXCIpO1xuICAgIGJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGRvbUVsZW1lbnQucHJvamVjdFZpZXcuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgIGRvbUVsZW1lbnQubGlzdFZpZXcuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgIGRvbUVsZW1lbnQuYnRuVG9nZ2xlSW5wdXQubGFzdENoaWxkLnRleHRDb250ZW50ID0gXCJBZGQgbGlzdFwiO1xuICAgICAgY2xlYXJMaXN0KCk7XG4gICAgICBsb2FkUHJvamVjdHMoKTtcbiAgICB9KTtcbiAgfTtcblxuICBsb2FkSG9tZVBhZ2UoKTtcbn07XG4iLCJpbXBvcnQgeyB0b0RhdGUsIGlzVG9kYXkgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHByb2plY3ROYW1lKSA9PiB7XG4gIGxldCBuYW1lID0gcHJvamVjdE5hbWU7XG4gIGxldCB0YXNrcyA9IFtdO1xuXG4gIGNvbnN0IHNldE5hbWUgPSAobmV3TmFtZSkgPT4ge1xuICAgIHJldHVybiAobmFtZSA9IG5ld05hbWUpO1xuICB9O1xuXG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5hbWU7XG4gIH07XG5cbiAgY29uc3QgYWRkVGFzayA9ICh0YXNrTmFtZSkgPT4ge1xuICAgIGlmIChjb250YWlucyh0YXNrTmFtZS5nZXROYW1lKCkpKSByZXR1cm47XG4gICAgdGFza3MucHVzaCh0YXNrTmFtZSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VGFzayA9ICh0YXNrTmFtZSkgPT4ge1xuICAgIHJldHVybiB0YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmdldE5hbWUoKSA9PT0gdGFza05hbWUpO1xuICB9O1xuXG4gIGNvbnN0IGdldFRhc2tzID0gKCkgPT4ge1xuICAgIHJldHVybiB0YXNrcztcbiAgfTtcblxuICBjb25zdCBnZXRUYXNrc0NvdW50ID0gKCkgPT4ge1xuICAgIHJldHVybiB0YXNrcy5sZW5ndGg7XG4gIH07XG5cbiAgY29uc3QgY29udGFpbnMgPSAodGFza05hbWUpID0+IHtcbiAgICByZXR1cm4gdGFza3Muc29tZSgodGFzaykgPT4gdGFzay5nZXROYW1lKCkgPT09IHRhc2tOYW1lKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVUYXNrID0gKHRhc2tOYW1lKSA9PiB7XG4gICAgcmV0dXJuICh0YXNrcyA9IHRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5nZXROYW1lKCkgIT09IHRhc2tOYW1lKSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VG9kYXlUYXNrcyA9ICgpID0+IHtcbiAgICByZXR1cm4gdGFza3MuZmlsdGVyKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2suZ2V0RGF0ZSgpKTtcbiAgICAgIHJldHVybiBpc1RvZGF5KHRvRGF0ZSh0YXNrRGF0ZSkpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2V0TmFtZSxcbiAgICBnZXROYW1lLFxuICAgIGFkZFRhc2ssXG4gICAgZ2V0VGFza3MsXG4gICAgZ2V0VGFzayxcbiAgICBnZXRUYXNrc0NvdW50LFxuICAgIGNvbnRhaW5zLFxuICAgIGRlbGV0ZVRhc2ssXG4gICAgZ2V0VG9kYXlUYXNrcyxcbiAgfTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGxldCBwcm9qZWN0cyA9IFtdO1xuXG4gIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4ge1xuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfTtcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgaWYgKGNvbnRhaW5zKHByb2plY3ROYW1lLmdldE5hbWUoKSkpIHJldHVybjtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3ROYW1lKTtcbiAgfTtcblxuICBjb25zdCBjb250YWlucyA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgIHJldHVybiBwcm9qZWN0cy5zb21lKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gcHJvamVjdE5hbWUpO1xuICB9O1xuXG4gIGNvbnN0IGdldFByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICByZXR1cm4gcHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IHByb2plY3ROYW1lKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgcmV0dXJuIChwcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcihcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSAhPT0gcHJvamVjdE5hbWVcbiAgICApKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldFByb2plY3RzLFxuICAgIGFkZFByb2plY3QsXG4gICAgY29udGFpbnMsXG4gICAgZ2V0UHJvamVjdCxcbiAgICBkZWxldGVQcm9qZWN0LFxuICB9O1xufTtcbiIsImV4cG9ydCBkZWZhdWx0ICh0YXNrTmFtZSwgbm90ZXMsIGRhdGUpID0+IHtcbiAgbGV0IG5hbWUgPSB0YXNrTmFtZTtcbiAgbGV0IG5vdGUgPSBub3RlcyB8fCBcIk5vdGVzXCI7XG4gIGxldCBkdWVEYXRlID0gZGF0ZSB8fCBcIk5vIGRhdGVcIjtcbiAgbGV0IGlzQ2hlY2tlZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lO1xuXG4gIGNvbnN0IHNldE5hbWUgPSAobmV3TmFtZSkgPT4ge1xuICAgIHJldHVybiAobmFtZSA9IG5ld05hbWUpO1xuICB9O1xuXG4gIGNvbnN0IHNldE5vdGUgPSAobmV3Tm90ZSkgPT4ge1xuICAgIHJldHVybiAobm90ZSA9IG5ld05vdGUpO1xuICB9O1xuXG4gIGNvbnN0IGdldE5vdGUgPSAoKSA9PiBub3RlO1xuXG4gIGNvbnN0IGdldERhdGUgPSAoKSA9PiBkdWVEYXRlO1xuXG4gIGNvbnN0IGlzQ29tcGxldGVkID0gKCkgPT4gaXNDaGVja2VkO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0TmFtZSxcbiAgICBzZXROYW1lLFxuICAgIHNldE5vdGUsXG4gICAgZ2V0Tm90ZSxcbiAgICBnZXREYXRlLFxuICAgIGlzQ29tcGxldGVkLFxuICB9O1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEludGVyZmFjZSBmcm9tIFwiLi9pbnRlcmZhY2VcIjtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIEludGVyZmFjZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=