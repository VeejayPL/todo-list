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
    initProjectTitle();
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
    const projectContainer = _dom_js__WEBPACK_IMPORTED_MODULE_3__.projectView;

    projectContainer.addEventListener("click", (e) => {
      // to remove the span and get actual project name
      const projectName = e.target.textContent.trim().slice(0, -3);

      if (e.target.dataset.toggleProject !== undefined) {
        console.log(projectName);
        clearProject(projectName);
        _dom_js__WEBPACK_IMPORTED_MODULE_3__.projectView.classList.toggle("active");
        _dom_js__WEBPACK_IMPORTED_MODULE_3__.listView.classList.toggle("active");
        loadTasks(projectName);
        if (_dom_js__WEBPACK_IMPORTED_MODULE_3__.inputList.classList.contains("active"))
          _dom_js__WEBPACK_IMPORTED_MODULE_3__.inputList.classList.toggle("active");
        _dom_js__WEBPACK_IMPORTED_MODULE_3__.btnToggleInput.lastChild.textContent = "Add task";
      }
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDekRGLGlFQUFlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDakNGLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7O1VDOUJGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOb0M7O0FBRXBDLDRDQUE0QyxrREFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RMaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICogXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJleHBvcnQgY29uc3QgYnRuVG9nZ2xlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi10b2dnbGUtaW5wdXRcIik7XG5leHBvcnQgY29uc3QgYnRuQWRkTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWFkZC1saXN0XCIpO1xuZXhwb3J0IGNvbnN0IGJ0bkNhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWNhbmNlbC1saXN0XCIpO1xuZXhwb3J0IGNvbnN0IGJ0bkJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1iYWNrXCIpO1xuZXhwb3J0IGNvbnN0IGJ0bkNsb3NlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1jbG9zZVwiKTtcblxuZXhwb3J0IGNvbnN0IGlucHV0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1pbnB1dFwiKTtcbmV4cG9ydCBjb25zdCBpbnB1dFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbW9kYWxcIik7XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0XCIpO1xuZXhwb3J0IGNvbnN0IHByb2plY3RWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKTtcbmV4cG9ydCBjb25zdCBsaXN0VmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdFwiKTtcbmV4cG9ydCBjb25zdCBsaXN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3QtdGl0bGVcIik7XG5cbmV4cG9ydCBjb25zdCBsaXN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGlzdC1pbnB1dFwiKTtcblxuZXhwb3J0IGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLW5hbWVcIik7XG5leHBvcnQgY29uc3QgdGFza05vdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbm90ZVwiKTtcbmV4cG9ydCBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kYXRlXCIpO1xuZXhwb3J0IGNvbnN0IGJ0bkFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1hZGQtdGFza1wiKTtcbiIsImltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IFByb2plY3RMaXN0IGZyb20gXCIuL3Byb2plY3RMaXN0XCI7XG5pbXBvcnQgKiBhcyBkb21FbGVtZW50IGZyb20gXCIuL2RvbS5qc1wiO1xuaW1wb3J0IHsgZWwgfSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgbG9hZEhvbWVQYWdlID0gKCkgPT4ge1xuICAgIGxvYWRQcm9qZWN0cygpO1xuICAgIGluaXRQcm9qZWN0VGl0bGUoKTtcbiAgICBpbml0VGFza1RpdGxlKCk7XG4gIH07XG4gIC8vIEluaXRpYWxpemUgVG9EbyBMaXN0IHdpdGggdGFza3NcbiAgY29uc3QgdG9Eb0xpc3QgPSBQcm9qZWN0TGlzdCgpO1xuICBjb25zdCB0b2RheVByb2plY3QgPSBQcm9qZWN0KFwiVG9kYXlcIik7XG4gIGNvbnN0IGluYm94ID0gUHJvamVjdChcIkluYm94XCIpO1xuICB0b0RvTGlzdC5hZGRQcm9qZWN0KHRvZGF5UHJvamVjdCk7XG4gIHRvRG9MaXN0LmFkZFByb2plY3QoaW5ib3gpO1xuXG4gIGNvbnN0IGVtYWlsVGFzayA9IFRhc2soXCJSZXNwb25kIHRvIGVtYWlsc1wiLCBcIkNoZWNrXCIsIFwiMjEvMDcvMjAyMlwiKTtcbiAgY29uc3QgbGF1bmRyeVRhc2sgPSBUYXNrKFwiTGF1bmRyeVwiLCBcIldhc2ggdHJvdXNlcnNcIik7XG4gIGNvbnN0IG5ld1Rhc2sgPSBUYXNrKFwiTmV3IHRhc2tcIik7XG5cbiAgdG9kYXlQcm9qZWN0LmFkZFRhc2soZW1haWxUYXNrKTtcbiAgdG9kYXlQcm9qZWN0LmFkZFRhc2sobGF1bmRyeVRhc2spO1xuICB0b2RheVByb2plY3QuYWRkVGFzayhuZXdUYXNrKTtcbiAgaW5ib3guYWRkVGFzayhlbWFpbFRhc2spO1xuICBpbmJveC5hZGRUYXNrKGxhdW5kcnlUYXNrKTtcblxuICAvLyBBZGQgYW5kIGxvYWQgcHJvamVjdHNcbiAgY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvbUVsZW1lbnQubGlzdE5hbWUudmFsdWU7XG4gICAgaWYgKHByb2plY3ROYW1lID09PSBcIlwiKSB7XG4gICAgICBhbGVydChcIkZpZWxkIGNhbid0IGJlIGVtcHR5IVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKHRvRG9MaXN0LmNvbnRhaW5zKHByb2plY3ROYW1lKSkge1xuICAgICAgYWxlcnQoXCJQcm9qZWN0IGFscmVhZHkgZXhpc3RzIVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgcmV0dXJuIHRvRG9MaXN0LmFkZFByb2plY3QoUHJvamVjdChwcm9qZWN0TmFtZSkpO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRQcm9qZWN0cyA9ICgpID0+IHtcbiAgICB0b0RvTGlzdC5nZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGNyZWF0ZUxpc3QocHJvamVjdC5nZXROYW1lKCkpO1xuXG4gICAgICBpbml0UmVtb3ZlUHJvamVjdEJ0bigpO1xuICAgIH0pO1xuICB9O1xuXG4gIGRvbUVsZW1lbnQuYnRuQWRkTGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gaW5pdEFkZFByb2plY3QoKSk7XG5cbiAgY29uc3QgaW5pdEFkZFByb2plY3QgPSAoKSA9PiB7XG4gICAgY2xlYXJMaXN0KCk7XG4gICAgYWRkUHJvamVjdCgpO1xuICAgIGxvYWRQcm9qZWN0cygpO1xuICAgIGNsZWFySW5wdXQoKTtcbiAgfTtcblxuICBjb25zdCBjbGVhcklucHV0ID0gKCkgPT4gKGRvbUVsZW1lbnQubGlzdE5hbWUudmFsdWUgPSBcIlwiKTtcblxuICAvLyBBZGQgYW5kIGxvYWQgdGFza3NcbiAgY29uc3QgYWRkVGFzayA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9tRWxlbWVudC50YXNrTmFtZS52YWx1ZTtcbiAgICBjb25zdCB0YXNrTm90ZSA9IGRvbUVsZW1lbnQudGFza05vdGUudmFsdWU7XG4gICAgY29uc3QgdGFza0RhdGUgPSBkb21FbGVtZW50LnRhc2tEYXRlLnZhbHVlO1xuICAgIGlmICh0YXNrTmFtZSA9PT0gXCJcIikge1xuICAgICAgYWxlcnQoXCJGaWVsZCBjYW4ndCBiZSBlbXB0eSFcIik7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmICh0b0RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5jb250YWlucyh0YXNrTmFtZSkpIHtcbiAgICAgIGFsZXJ0KFwiVGFzayBhbHJlYWR5IGV4aXN0cyFcIik7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlXG4gICAgICByZXR1cm4gdG9Eb0xpc3RcbiAgICAgICAgLmdldFByb2plY3QocHJvamVjdE5hbWUpXG4gICAgICAgIC5hZGRUYXNrKFRhc2sodGFza05hbWUsIHRhc2tOb3RlLCB0YXNrRGF0ZSkpO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRUYXNrcyA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgIHRvRG9MaXN0XG4gICAgICAuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSlcbiAgICAgIC5nZXRUYXNrcygpXG4gICAgICAuZm9yRWFjaCgodGFzaykgPT4gY3JlYXRlVGFzayh0YXNrLmdldE5hbWUoKSkpO1xuICAgIGluaXRSZW1vdmVUYXNrQnRuKCk7XG4gICAgaW5pdEJhY2tCdG4oKTtcbiAgICBpbml0VG9nZ2xlQ29tcGxldGVkKCk7XG4gIH07XG5cbiAgZG9tRWxlbWVudC5idG5BZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaW5pdEFkZFRhc2soKTtcbiAgICB0b2dnbGVUYXNrTW9kYWwoKTtcbiAgICBjbGVhck1vZGFsSW5wdXQoKTtcbiAgfSk7XG5cbiAgY29uc3QgaW5pdEFkZFRhc2sgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3QtdGl0bGVcIikudGV4dENvbnRlbnQ7XG4gICAgYWRkVGFzayhwcm9qZWN0TmFtZSk7XG4gICAgY2xlYXJQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICBsb2FkVGFza3MocHJvamVjdE5hbWUpO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyTW9kYWxJbnB1dCA9ICgpID0+IHtcbiAgICBkb21FbGVtZW50LnRhc2tOYW1lLnZhbHVlID0gXCJcIjtcbiAgICBkb21FbGVtZW50LnRhc2tOb3RlLnZhbHVlID0gXCJcIjtcbiAgICBkb21FbGVtZW50LnRhc2tEYXRlLnZhbHVlID0gXCJcIjtcbiAgfTtcblxuICAvLyBMaXN0IGRpc3BsYXlcbiAgY29uc3QgY3JlYXRlTGlzdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgIGRvbUVsZW1lbnQucHJvamVjdFZpZXcuaW5uZXJIVE1MICs9IGA8ZGl2IGNsYXNzPVwicHJvamVjdFwiPlxuICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNoZWNrLWRvdWJsZVwiPjwvaT5cbiAgPGgzIGNsYXNzPVwicHJvamVjdC10aXRsZVwiIGRhdGEtdG9nZ2xlLXByb2plY3Q+JHtwcm9qZWN0TmFtZX08c3BhbiBjbGFzcz1cInRhc2stY291bnRcIj4ke3Rhc2tDb3VudERpc3BsYXkoXG4gICAgICBwcm9qZWN0TmFtZVxuICAgICl9ICYjNjI7PC9zcGFuPlxuPC9oMz5cbiAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1lZGl0XCI+XG4gICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaXJjbGUtaW5mb1wiPjwvaT5cbiAgPC9idXR0b24+XG4gIDxidXR0b24gY2xhc3M9XCJidG4tcmVtb3ZlXCI+XG4gICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS10cmFzaFwiPjwvaT5cbiAgPC9idXR0b24+XG48L2Rpdj5gO1xuICB9O1xuXG4gIGNvbnN0IHRhc2tDb3VudERpc3BsYXkgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICByZXR1cm4gdG9Eb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuZ2V0VGFza3NDb3VudCgpO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyTGlzdCA9ICgpID0+XG4gICAgKGRvbUVsZW1lbnQucHJvamVjdFZpZXcuaW5uZXJIVE1MID0gYDxoMiBjbGFzcz1cInByb2plY3RzLXRpdGxlXCI+TXkgbGlzdHM8L2gyPmApO1xuXG4gIC8vIFRhc2sgZGlzcGxheVxuICBjb25zdCBjcmVhdGVUYXNrID0gKHRhc2tOYW1lKSA9PiB7XG4gICAgZG9tRWxlbWVudC5saXN0Vmlldy5pbm5lckhUTUwgKz0gYFxuICA8ZGl2IGNsYXNzPVwibGlzdC10YXNrXCI+XG4gIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2lyY2xlLWNoZWNrIHRhc2stY2hlY2tcIj48L2k+XG4gIDxkaXYgY2xhc3M9XCJ0YXNrXCI+XG4gIDxkaXYgY2xhc3M9XCJ0YXNrLWRlc2NcIj5cbiAgPGgzIGNsYXNzPVwidGFzay10aXRsZVwiIGRhdGEtdG9nZ2xlLXRhc2s+JHt0YXNrTmFtZX08L2gzPlxuICA8cCBjbGFzcz1cInRhc2stbm90ZXNcIiBkYXRhLXRvZ2dsZS10YXNrPiR7Z2V0VGFza05vdGVzKHRhc2tOYW1lKX08L3A+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwidGFzay1pbmZvXCI+XG4gIDxwIGNsYXNzPVwidGFzay1kYXRlXCI+JHtnZXRUYXNrRGF0ZSh0YXNrTmFtZSl9PC9wPlxuICA8ZGl2IGNsYXNzPVwidGFzay1idG4tZ3JvdXBcIj5cbiAgPGJ1dHRvbiBjbGFzcz1cInRhc2stYnRuLWVkaXRcIj5cbiAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNpcmNsZS1pbmZvXCI+PC9pPlxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvbiBjbGFzcz1cInRhc2stYnRuLXJlbW92ZVwiPlxuICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtdHJhc2hcIj48L2k+XG4gIDwvYnV0dG9uPlxuICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+YDtcbiAgfTtcblxuICBjb25zdCBnZXRUYXNrTm90ZXMgPSAodGFza05hbWUpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC10aXRsZVwiKS50ZXh0Q29udGVudDtcbiAgICByZXR1cm4gdG9Eb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuZ2V0VGFzayh0YXNrTmFtZSkuZ2V0Tm90ZSgpO1xuICB9O1xuXG4gIGNvbnN0IGdldFRhc2tEYXRlID0gKHRhc2tOYW1lKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3QtdGl0bGVcIikudGV4dENvbnRlbnQ7XG4gICAgcmV0dXJuIHRvRG9MaXN0LmdldFByb2plY3QocHJvamVjdE5hbWUpLmdldFRhc2sodGFza05hbWUpLmdldERhdGUoKTtcbiAgfTtcblxuICBjb25zdCBjbGVhclByb2plY3QgPSAocHJvamVjdE5hbWUpID0+XG4gICAgKGRvbUVsZW1lbnQubGlzdFZpZXcuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJsaXN0LWhlYWRlclwiPlxuICAgIDxoMiBjbGFzcz1cImxpc3QtdGl0bGVcIj4ke3Byb2plY3ROYW1lfTwvaDI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1iYWNrXCI+JiM2MDsgQmFjazwvYnV0dG9uPlxuICA8L2Rpdj5gKTtcblxuICAvLyBEZWxldGUgcHJvamVjdCBhbmQgdGFzayAvIHRvZ2dsZSBjb21wbGV0ZWRcbiAgY29uc3QgaW5pdFJlbW92ZVByb2plY3RCdG4gPSAoKSA9PiB7XG4gICAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idG4tcmVtb3ZlXCIpO1xuXG4gICAgcmVtb3ZlQnRuLmZvckVhY2goKGJ1dHRvbikgPT5cbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBlLnRhcmdldC5wYXJlbnROb2RlLnRleHRDb250ZW50LnRyaW0oKS5zbGljZSgwLCAtMyk7XG4gICAgICAgIHRvRG9MaXN0LmRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICBjbGVhckxpc3QoKTtcbiAgICAgICAgbG9hZFByb2plY3RzKCk7XG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgaW5pdFJlbW92ZVRhc2tCdG4gPSAoKSA9PiB7XG4gICAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWJ0bi1yZW1vdmVcIik7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3QtdGl0bGVcIikudGV4dENvbnRlbnQ7XG5cbiAgICByZW1vdmVCdG4uZm9yRWFjaCgoYnV0dG9uKSA9PlxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrTmFtZSA9XG4gICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBcIi50YXNrLXRpdGxlXCJcbiAgICAgICAgICApLnRleHRDb250ZW50O1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrTmFtZSk7XG4gICAgICAgIHRvRG9MaXN0LmdldFByb2plY3QocHJvamVjdE5hbWUpLmRlbGV0ZVRhc2sodGFza05hbWUpO1xuICAgICAgICBjbGVhclByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICBsb2FkVGFza3MocHJvamVjdE5hbWUpO1xuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGluaXRUb2dnbGVDb21wbGV0ZWQgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza0NoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWNoZWNrXCIpO1xuICAgIHRhc2tDaGVjay5mb3JFYWNoKCh0YXNrKSA9PlxuICAgICAgdGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVkXCIpO1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwiY2hlY2tlZFwiKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICAvLyBUb2dnbGUgaW5wdXRzIC8gbW92aW5nIHRocm91Z2ggYXBwXG4gIGRvbUVsZW1lbnQuYnRuVG9nZ2xlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoZG9tRWxlbWVudC5saXN0Vmlldy5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgIGRvbUVsZW1lbnQuaW5wdXRUYXNrLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbUVsZW1lbnQuaW5wdXRMaXN0LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KTtcblxuICBkb21FbGVtZW50LmJ0bkFkZExpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkb21FbGVtZW50LmlucHV0TGlzdC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICB9KTtcblxuICBkb21FbGVtZW50LmJ0bkNhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRvbUVsZW1lbnQuaW5wdXRMaXN0LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgY2xlYXJJbnB1dCgpO1xuICB9KTtcblxuICBkb21FbGVtZW50LmJ0bkNsb3NlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0b2dnbGVUYXNrTW9kYWwoKTtcbiAgfSk7XG5cbiAgY29uc3QgdG9nZ2xlVGFza01vZGFsID0gKCkgPT4gZG9tRWxlbWVudC5pbnB1dFRhc2suY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcblxuICBjb25zdCBpbml0UHJvamVjdFRpdGxlID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb21FbGVtZW50LnByb2plY3RWaWV3O1xuXG4gICAgcHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIC8vIHRvIHJlbW92ZSB0aGUgc3BhbiBhbmQgZ2V0IGFjdHVhbCBwcm9qZWN0IG5hbWVcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZS50YXJnZXQudGV4dENvbnRlbnQudHJpbSgpLnNsaWNlKDAsIC0zKTtcblxuICAgICAgaWYgKGUudGFyZ2V0LmRhdGFzZXQudG9nZ2xlUHJvamVjdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3ROYW1lKTtcbiAgICAgICAgY2xlYXJQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgZG9tRWxlbWVudC5wcm9qZWN0Vmlldy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICBkb21FbGVtZW50Lmxpc3RWaWV3LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIGxvYWRUYXNrcyhwcm9qZWN0TmFtZSk7XG4gICAgICAgIGlmIChkb21FbGVtZW50LmlucHV0TGlzdC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpXG4gICAgICAgICAgZG9tRWxlbWVudC5pbnB1dExpc3QuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgZG9tRWxlbWVudC5idG5Ub2dnbGVJbnB1dC5sYXN0Q2hpbGQudGV4dENvbnRlbnQgPSBcIkFkZCB0YXNrXCI7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaW5pdFRhc2tUaXRsZSA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9tRWxlbWVudC5saXN0VmlldztcbiAgICB0YXNrQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3Qgbm90ZXMgPSBlLnRhcmdldC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1ub3Rlc1wiKTtcbiAgICAgIGNvbnN0IHRhc2tEYXRlID1cbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kYXRlXCIpO1xuICAgICAgY29uc3QgdGFza0J0bnMgPVxuICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihcIi50YXNrLWJ0bi1ncm91cFwiKTtcblxuICAgICAgaWYgKGUudGFyZ2V0LmRhdGFzZXQudG9nZ2xlVGFzayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5vdGVzLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIHRhc2tEYXRlLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIHRhc2tCdG5zLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaW5pdEJhY2tCdG4gPSAoKSA9PiB7XG4gICAgY29uc3QgYmFja0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWJhY2tcIik7XG4gICAgYmFja0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZG9tRWxlbWVudC5wcm9qZWN0Vmlldy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgZG9tRWxlbWVudC5saXN0Vmlldy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgZG9tRWxlbWVudC5idG5Ub2dnbGVJbnB1dC5sYXN0Q2hpbGQudGV4dENvbnRlbnQgPSBcIkFkZCBsaXN0XCI7XG4gICAgICBjbGVhckxpc3QoKTtcbiAgICAgIGxvYWRQcm9qZWN0cygpO1xuICAgIH0pO1xuICB9O1xuXG4gIGxvYWRIb21lUGFnZSgpO1xufTtcbiIsImltcG9ydCB7IHRvRGF0ZSwgaXNUb2RheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5leHBvcnQgZGVmYXVsdCAocHJvamVjdE5hbWUpID0+IHtcbiAgbGV0IG5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgbGV0IHRhc2tzID0gW107XG5cbiAgY29uc3Qgc2V0TmFtZSA9IChuZXdOYW1lKSA9PiB7XG4gICAgcmV0dXJuIChuYW1lID0gbmV3TmFtZSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcbiAgICByZXR1cm4gbmFtZTtcbiAgfTtcblxuICBjb25zdCBhZGRUYXNrID0gKHRhc2tOYW1lKSA9PiB7XG4gICAgaWYgKGNvbnRhaW5zKHRhc2tOYW1lLmdldE5hbWUoKSkpIHJldHVybjtcbiAgICB0YXNrcy5wdXNoKHRhc2tOYW1lKTtcbiAgfTtcblxuICBjb25zdCBnZXRUYXNrID0gKHRhc2tOYW1lKSA9PiB7XG4gICAgcmV0dXJuIHRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suZ2V0TmFtZSgpID09PSB0YXNrTmFtZSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VGFza3MgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRhc2tzO1xuICB9O1xuXG4gIGNvbnN0IGdldFRhc2tzQ291bnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRhc2tzLmxlbmd0aDtcbiAgfTtcblxuICBjb25zdCBjb250YWlucyA9ICh0YXNrTmFtZSkgPT4ge1xuICAgIHJldHVybiB0YXNrcy5zb21lKCh0YXNrKSA9PiB0YXNrLmdldE5hbWUoKSA9PT0gdGFza05hbWUpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRhc2sgPSAodGFza05hbWUpID0+IHtcbiAgICByZXR1cm4gKHRhc2tzID0gdGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmdldE5hbWUoKSAhPT0gdGFza05hbWUpKTtcbiAgfTtcblxuICBjb25zdCBnZXRUb2RheVRhc2tzID0gKCkgPT4ge1xuICAgIHJldHVybiB0YXNrcy5maWx0ZXIoKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IHRhc2tEYXRlID0gbmV3IERhdGUodGFzay5nZXREYXRlKCkpO1xuICAgICAgcmV0dXJuIGlzVG9kYXkodG9EYXRlKHRhc2tEYXRlKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzZXROYW1lLFxuICAgIGdldE5hbWUsXG4gICAgYWRkVGFzayxcbiAgICBnZXRUYXNrcyxcbiAgICBnZXRUYXNrLFxuICAgIGdldFRhc2tzQ291bnQsXG4gICAgY29udGFpbnMsXG4gICAgZGVsZXRlVGFzayxcbiAgICBnZXRUb2RheVRhc2tzLFxuICB9O1xufTtcbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgbGV0IHByb2plY3RzID0gW107XG5cbiAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3RzO1xuICB9O1xuXG4gIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBpZiAoY29udGFpbnMocHJvamVjdE5hbWUuZ2V0TmFtZSgpKSkgcmV0dXJuO1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdE5hbWUpO1xuICB9O1xuXG4gIGNvbnN0IGNvbnRhaW5zID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3RzLnNvbWUoKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBwcm9qZWN0TmFtZSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgIHJldHVybiBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gcHJvamVjdE5hbWUpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICByZXR1cm4gKHByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpICE9PSBwcm9qZWN0TmFtZVxuICAgICkpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0UHJvamVjdHMsXG4gICAgYWRkUHJvamVjdCxcbiAgICBjb250YWlucyxcbiAgICBnZXRQcm9qZWN0LFxuICAgIGRlbGV0ZVByb2plY3QsXG4gIH07XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKHRhc2tOYW1lLCBub3RlcywgZGF0ZSkgPT4ge1xuICBsZXQgbmFtZSA9IHRhc2tOYW1lO1xuICBsZXQgbm90ZSA9IG5vdGVzIHx8IFwiTm90ZXNcIjtcbiAgbGV0IGR1ZURhdGUgPSBkYXRlIHx8IFwiTm8gZGF0ZVwiO1xuICBsZXQgaXNDaGVja2VkID0gZmFsc2U7XG5cbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG5cbiAgY29uc3Qgc2V0TmFtZSA9IChuZXdOYW1lKSA9PiB7XG4gICAgcmV0dXJuIChuYW1lID0gbmV3TmFtZSk7XG4gIH07XG5cbiAgY29uc3Qgc2V0Tm90ZSA9IChuZXdOb3RlKSA9PiB7XG4gICAgcmV0dXJuIChub3RlID0gbmV3Tm90ZSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0Tm90ZSA9ICgpID0+IG5vdGU7XG5cbiAgY29uc3QgZ2V0RGF0ZSA9ICgpID0+IGR1ZURhdGU7XG5cbiAgY29uc3QgaXNDb21wbGV0ZWQgPSAoKSA9PiBpc0NoZWNrZWQ7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXROYW1lLFxuICAgIHNldE5hbWUsXG4gICAgc2V0Tm90ZSxcbiAgICBnZXROb3RlLFxuICAgIGdldERhdGUsXG4gICAgaXNDb21wbGV0ZWQsXG4gIH07XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgSW50ZXJmYWNlIGZyb20gXCIuL2ludGVyZmFjZVwiO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgSW50ZXJmYWNlKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==