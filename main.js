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
    initToggleInput();
    initAddListBtn();
    initBtnCancel();
    loadProjects();
    initProjectTitle();
    initTaskTitle();
    initCloseModalBtn();
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
  const initToggleInput = () => {
    _dom_js__WEBPACK_IMPORTED_MODULE_3__.btnToggleInput.addEventListener("click", () => {
      if (_dom_js__WEBPACK_IMPORTED_MODULE_3__.listView.classList.contains("active")) {
        _dom_js__WEBPACK_IMPORTED_MODULE_3__.inputTask.classList.toggle("active");
      } else {
        _dom_js__WEBPACK_IMPORTED_MODULE_3__.inputList.classList.toggle("active");
      }
    });
  };

  const initAddListBtn = () => {
    _dom_js__WEBPACK_IMPORTED_MODULE_3__.btnAddList.addEventListener("click", () => {
      _dom_js__WEBPACK_IMPORTED_MODULE_3__.inputList.classList.toggle("active");
    });
  };

  const initBtnCancel = () => {
    _dom_js__WEBPACK_IMPORTED_MODULE_3__.btnCancel.addEventListener("click", () => {
      _dom_js__WEBPACK_IMPORTED_MODULE_3__.inputList.classList.toggle("active");
      clearInput();
    });
  };

  const initCloseModalBtn = () => {
    _dom_js__WEBPACK_IMPORTED_MODULE_3__.btnCloseModal.addEventListener("click", () => {
      toggleTaskModal();
    });
  };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQSxhQUFhLG9EQUFPLENBQUMsb0RBQU07QUFDM0IsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3pERixpRUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2pDRixpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7OztVQzlCRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm9DOztBQUVwQyw0Q0FBNEMsa0RBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0TGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICogXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIHZhciByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiZXhwb3J0IGNvbnN0IGJ0blRvZ2dsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tdG9nZ2xlLWlucHV0XCIpO1xuZXhwb3J0IGNvbnN0IGJ0bkFkZExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1hZGQtbGlzdFwiKTtcbmV4cG9ydCBjb25zdCBidG5DYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1jYW5jZWwtbGlzdFwiKTtcbmV4cG9ydCBjb25zdCBidG5CYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tYmFja1wiKTtcbmV4cG9ydCBjb25zdCBidG5DbG9zZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tY2xvc2VcIik7XG5cbmV4cG9ydCBjb25zdCBpbnB1dExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4taW5wdXRcIik7XG5leHBvcnQgY29uc3QgaW5wdXRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLW1vZGFsXCIpO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdFwiKTtcbmV4cG9ydCBjb25zdCBwcm9qZWN0VmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIik7XG5leHBvcnQgY29uc3QgbGlzdFZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3RcIik7XG5leHBvcnQgY29uc3QgbGlzdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LXRpdGxlXCIpO1xuXG5leHBvcnQgY29uc3QgbGlzdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpc3QtaW5wdXRcIik7XG5cbmV4cG9ydCBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1uYW1lXCIpO1xuZXhwb3J0IGNvbnN0IHRhc2tOb3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLW5vdGVcIik7XG5leHBvcnQgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGF0ZVwiKTtcbmV4cG9ydCBjb25zdCBidG5BZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tYWRkLXRhc2tcIik7XG4iLCJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBQcm9qZWN0TGlzdCBmcm9tIFwiLi9wcm9qZWN0TGlzdFwiO1xuaW1wb3J0ICogYXMgZG9tRWxlbWVudCBmcm9tIFwiLi9kb20uanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBsb2FkSG9tZVBhZ2UgPSAoKSA9PiB7XG4gICAgaW5pdFRvZ2dsZUlucHV0KCk7XG4gICAgaW5pdEFkZExpc3RCdG4oKTtcbiAgICBpbml0QnRuQ2FuY2VsKCk7XG4gICAgbG9hZFByb2plY3RzKCk7XG4gICAgaW5pdFByb2plY3RUaXRsZSgpO1xuICAgIGluaXRUYXNrVGl0bGUoKTtcbiAgICBpbml0Q2xvc2VNb2RhbEJ0bigpO1xuICB9O1xuICAvLyBJbml0aWFsaXplIFRvRG8gTGlzdCB3aXRoIHRhc2tzXG4gIGNvbnN0IHRvRG9MaXN0ID0gUHJvamVjdExpc3QoKTtcbiAgY29uc3QgdG9kYXlQcm9qZWN0ID0gUHJvamVjdChcIlRvZGF5XCIpO1xuICBjb25zdCBpbmJveCA9IFByb2plY3QoXCJJbmJveFwiKTtcbiAgdG9Eb0xpc3QuYWRkUHJvamVjdCh0b2RheVByb2plY3QpO1xuICB0b0RvTGlzdC5hZGRQcm9qZWN0KGluYm94KTtcblxuICBjb25zdCBlbWFpbFRhc2sgPSBUYXNrKFwiUmVzcG9uZCB0byBlbWFpbHNcIiwgXCJDaGVja1wiLCBcIjIxLzA3LzIwMjJcIik7XG4gIGNvbnN0IGxhdW5kcnlUYXNrID0gVGFzayhcIkxhdW5kcnlcIiwgXCJXYXNoIHRyb3VzZXJzXCIpO1xuICBjb25zdCBuZXdUYXNrID0gVGFzayhcIk5ldyB0YXNrXCIpO1xuXG4gIHRvZGF5UHJvamVjdC5hZGRUYXNrKGVtYWlsVGFzayk7XG4gIHRvZGF5UHJvamVjdC5hZGRUYXNrKGxhdW5kcnlUYXNrKTtcbiAgdG9kYXlQcm9qZWN0LmFkZFRhc2sobmV3VGFzayk7XG4gIGluYm94LmFkZFRhc2soZW1haWxUYXNrKTtcbiAgaW5ib3guYWRkVGFzayhsYXVuZHJ5VGFzayk7XG5cbiAgLy8gQWRkIGFuZCBsb2FkIHByb2plY3RzXG4gIGNvbnN0IGFkZFByb2plY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb21FbGVtZW50Lmxpc3ROYW1lLnZhbHVlO1xuICAgIGlmIChwcm9qZWN0TmFtZSA9PT0gXCJcIikge1xuICAgICAgYWxlcnQoXCJGaWVsZCBjYW4ndCBiZSBlbXB0eSFcIik7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmICh0b0RvTGlzdC5jb250YWlucyhwcm9qZWN0TmFtZSkpIHtcbiAgICAgIGFsZXJ0KFwiUHJvamVjdCBhbHJlYWR5IGV4aXN0cyFcIik7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHJldHVybiB0b0RvTGlzdC5hZGRQcm9qZWN0KFByb2plY3QocHJvamVjdE5hbWUpKTtcbiAgfTtcblxuICBjb25zdCBsb2FkUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgdG9Eb0xpc3QuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBjcmVhdGVMaXN0KHByb2plY3QuZ2V0TmFtZSgpKTtcblxuICAgICAgaW5pdFJlbW92ZVByb2plY3RCdG4oKTtcbiAgICB9KTtcbiAgfTtcblxuICBkb21FbGVtZW50LmJ0bkFkZExpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGluaXRBZGRQcm9qZWN0KCkpO1xuXG4gIGNvbnN0IGluaXRBZGRQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNsZWFyTGlzdCgpO1xuICAgIGFkZFByb2plY3QoKTtcbiAgICBsb2FkUHJvamVjdHMoKTtcbiAgICBjbGVhcklucHV0KCk7XG4gIH07XG5cbiAgY29uc3QgY2xlYXJJbnB1dCA9ICgpID0+IChkb21FbGVtZW50Lmxpc3ROYW1lLnZhbHVlID0gXCJcIik7XG5cbiAgLy8gQWRkIGFuZCBsb2FkIHRhc2tzXG4gIGNvbnN0IGFkZFRhc2sgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvbUVsZW1lbnQudGFza05hbWUudmFsdWU7XG4gICAgY29uc3QgdGFza05vdGUgPSBkb21FbGVtZW50LnRhc2tOb3RlLnZhbHVlO1xuICAgIGNvbnN0IHRhc2tEYXRlID0gZG9tRWxlbWVudC50YXNrRGF0ZS52YWx1ZTtcbiAgICBpZiAodGFza05hbWUgPT09IFwiXCIpIHtcbiAgICAgIGFsZXJ0KFwiRmllbGQgY2FuJ3QgYmUgZW1wdHkhXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAodG9Eb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuY29udGFpbnModGFza05hbWUpKSB7XG4gICAgICBhbGVydChcIlRhc2sgYWxyZWFkeSBleGlzdHMhXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZVxuICAgICAgcmV0dXJuIHRvRG9MaXN0XG4gICAgICAgIC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKVxuICAgICAgICAuYWRkVGFzayhUYXNrKHRhc2tOYW1lLCB0YXNrTm90ZSwgdGFza0RhdGUpKTtcbiAgfTtcblxuICBjb25zdCBsb2FkVGFza3MgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICB0b0RvTGlzdFxuICAgICAgLmdldFByb2plY3QocHJvamVjdE5hbWUpXG4gICAgICAuZ2V0VGFza3MoKVxuICAgICAgLmZvckVhY2goKHRhc2spID0+IGNyZWF0ZVRhc2sodGFzay5nZXROYW1lKCkpKTtcbiAgICBpbml0UmVtb3ZlVGFza0J0bigpO1xuICAgIGluaXRCYWNrQnRuKCk7XG4gICAgaW5pdFRvZ2dsZUNvbXBsZXRlZCgpO1xuICB9O1xuXG4gIGRvbUVsZW1lbnQuYnRuQWRkVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGluaXRBZGRUYXNrKCk7XG4gICAgdG9nZ2xlVGFza01vZGFsKCk7XG4gICAgY2xlYXJNb2RhbElucHV0KCk7XG4gIH0pO1xuXG4gIGNvbnN0IGluaXRBZGRUYXNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LXRpdGxlXCIpLnRleHRDb250ZW50O1xuICAgIGFkZFRhc2socHJvamVjdE5hbWUpO1xuICAgIGNsZWFyUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgbG9hZFRhc2tzKHByb2plY3ROYW1lKTtcbiAgfTtcblxuICBjb25zdCBjbGVhck1vZGFsSW5wdXQgPSAoKSA9PiB7XG4gICAgZG9tRWxlbWVudC50YXNrTmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgZG9tRWxlbWVudC50YXNrTm90ZS52YWx1ZSA9IFwiXCI7XG4gICAgZG9tRWxlbWVudC50YXNrRGF0ZS52YWx1ZSA9IFwiXCI7XG4gIH07XG5cbiAgLy8gTGlzdCBkaXNwbGF5XG4gIGNvbnN0IGNyZWF0ZUxpc3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBkb21FbGVtZW50LnByb2plY3RWaWV3LmlubmVySFRNTCArPSBgPGRpdiBjbGFzcz1cInByb2plY3RcIj5cbiAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaGVjay1kb3VibGVcIj48L2k+XG4gIDxoMyBjbGFzcz1cInByb2plY3QtdGl0bGVcIiBkYXRhLXRvZ2dsZS1wcm9qZWN0PiR7cHJvamVjdE5hbWV9PHNwYW4gY2xhc3M9XCJ0YXNrLWNvdW50XCI+JHt0YXNrQ291bnREaXNwbGF5KFxuICAgICAgcHJvamVjdE5hbWVcbiAgICApfSAmIzYyOzwvc3Bhbj5cbjwvaDM+XG4gIDxidXR0b24gY2xhc3M9XCJidG4tZWRpdFwiPlxuICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2lyY2xlLWluZm9cIj48L2k+XG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIGNsYXNzPVwiYnRuLXJlbW92ZVwiPlxuICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtdHJhc2hcIj48L2k+XG4gIDwvYnV0dG9uPlxuPC9kaXY+YDtcbiAgfTtcblxuICBjb25zdCB0YXNrQ291bnREaXNwbGF5ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgcmV0dXJuIHRvRG9MaXN0LmdldFByb2plY3QocHJvamVjdE5hbWUpLmdldFRhc2tzQ291bnQoKTtcbiAgfTtcblxuICBjb25zdCBjbGVhckxpc3QgPSAoKSA9PlxuICAgIChkb21FbGVtZW50LnByb2plY3RWaWV3LmlubmVySFRNTCA9IGA8aDIgY2xhc3M9XCJwcm9qZWN0cy10aXRsZVwiPk15IGxpc3RzPC9oMj5gKTtcblxuICAvLyBUYXNrIGRpc3BsYXlcbiAgY29uc3QgY3JlYXRlVGFzayA9ICh0YXNrTmFtZSkgPT4ge1xuICAgIGRvbUVsZW1lbnQubGlzdFZpZXcuaW5uZXJIVE1MICs9IGBcbiAgPGRpdiBjbGFzcz1cImxpc3QtdGFza1wiPlxuICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNpcmNsZS1jaGVjayB0YXNrLWNoZWNrXCI+PC9pPlxuICA8ZGl2IGNsYXNzPVwidGFza1wiPlxuICA8ZGl2IGNsYXNzPVwidGFzay1kZXNjXCI+XG4gIDxoMyBjbGFzcz1cInRhc2stdGl0bGVcIiBkYXRhLXRvZ2dsZS10YXNrPiR7dGFza05hbWV9PC9oMz5cbiAgPHAgY2xhc3M9XCJ0YXNrLW5vdGVzXCIgZGF0YS10b2dnbGUtdGFzaz4ke2dldFRhc2tOb3Rlcyh0YXNrTmFtZSl9PC9wPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInRhc2staW5mb1wiPlxuICA8cCBjbGFzcz1cInRhc2stZGF0ZVwiPiR7Z2V0VGFza0RhdGUodGFza05hbWUpfTwvcD5cbiAgPGRpdiBjbGFzcz1cInRhc2stYnRuLWdyb3VwXCI+XG4gIDxidXR0b24gY2xhc3M9XCJ0YXNrLWJ0bi1lZGl0XCI+XG4gICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaXJjbGUtaW5mb1wiPjwvaT5cbiAgPC9idXR0b24+XG4gIDxidXR0b24gY2xhc3M9XCJ0YXNrLWJ0bi1yZW1vdmVcIj5cbiAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXRyYXNoXCI+PC9pPlxuICA8L2J1dHRvbj5cbiAgPC9kaXY+XG4gIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PmA7XG4gIH07XG5cbiAgY29uc3QgZ2V0VGFza05vdGVzID0gKHRhc2tOYW1lKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3QtdGl0bGVcIikudGV4dENvbnRlbnQ7XG4gICAgcmV0dXJuIHRvRG9MaXN0LmdldFByb2plY3QocHJvamVjdE5hbWUpLmdldFRhc2sodGFza05hbWUpLmdldE5vdGUoKTtcbiAgfTtcblxuICBjb25zdCBnZXRUYXNrRGF0ZSA9ICh0YXNrTmFtZSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LXRpdGxlXCIpLnRleHRDb250ZW50O1xuICAgIHJldHVybiB0b0RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5nZXRUYXNrKHRhc2tOYW1lKS5nZXREYXRlKCk7XG4gIH07XG5cbiAgY29uc3QgY2xlYXJQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PlxuICAgIChkb21FbGVtZW50Lmxpc3RWaWV3LmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwibGlzdC1oZWFkZXJcIj5cbiAgICA8aDIgY2xhc3M9XCJsaXN0LXRpdGxlXCI+JHtwcm9qZWN0TmFtZX08L2gyPlxuICAgIDxidXR0b24gY2xhc3M9XCJidG4tYmFja1wiPiYjNjA7IEJhY2s8L2J1dHRvbj5cbiAgPC9kaXY+YCk7XG5cbiAgLy8gRGVsZXRlIHByb2plY3QgYW5kIHRhc2sgLyB0b2dnbGUgY29tcGxldGVkXG4gIGNvbnN0IGluaXRSZW1vdmVQcm9qZWN0QnRuID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuLXJlbW92ZVwiKTtcblxuICAgIHJlbW92ZUJ0bi5mb3JFYWNoKChidXR0b24pID0+XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZS50YXJnZXQucGFyZW50Tm9kZS50ZXh0Q29udGVudC50cmltKCkuc2xpY2UoMCwgLTMpO1xuICAgICAgICB0b0RvTGlzdC5kZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgY2xlYXJMaXN0KCk7XG4gICAgICAgIGxvYWRQcm9qZWN0cygpO1xuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGluaXRSZW1vdmVUYXNrQnRuID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1idG4tcmVtb3ZlXCIpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LXRpdGxlXCIpLnRleHRDb250ZW50O1xuXG4gICAgcmVtb3ZlQnRuLmZvckVhY2goKGJ1dHRvbikgPT5cbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgdGFza05hbWUgPVxuICAgICAgICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCIudGFzay10aXRsZVwiXG4gICAgICAgICAgKS50ZXh0Q29udGVudDtcbiAgICAgICAgY29uc29sZS5sb2codGFza05hbWUpO1xuICAgICAgICB0b0RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5kZWxldGVUYXNrKHRhc2tOYW1lKTtcbiAgICAgICAgY2xlYXJQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgbG9hZFRhc2tzKHByb2plY3ROYW1lKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBpbml0VG9nZ2xlQ29tcGxldGVkID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tDaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1jaGVja1wiKTtcbiAgICB0YXNrQ2hlY2suZm9yRWFjaCgodGFzaykgPT5cbiAgICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlZFwiKTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcImNoZWNrZWRcIik7XG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgLy8gVG9nZ2xlIGlucHV0cyAvIG1vdmluZyB0aHJvdWdoIGFwcFxuICBjb25zdCBpbml0VG9nZ2xlSW5wdXQgPSAoKSA9PiB7XG4gICAgZG9tRWxlbWVudC5idG5Ub2dnbGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKGRvbUVsZW1lbnQubGlzdFZpZXcuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgIGRvbUVsZW1lbnQuaW5wdXRUYXNrLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb21FbGVtZW50LmlucHV0TGlzdC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGluaXRBZGRMaXN0QnRuID0gKCkgPT4ge1xuICAgIGRvbUVsZW1lbnQuYnRuQWRkTGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZG9tRWxlbWVudC5pbnB1dExpc3QuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBpbml0QnRuQ2FuY2VsID0gKCkgPT4ge1xuICAgIGRvbUVsZW1lbnQuYnRuQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBkb21FbGVtZW50LmlucHV0TGlzdC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgY2xlYXJJbnB1dCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGluaXRDbG9zZU1vZGFsQnRuID0gKCkgPT4ge1xuICAgIGRvbUVsZW1lbnQuYnRuQ2xvc2VNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdG9nZ2xlVGFza01vZGFsKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlVGFza01vZGFsID0gKCkgPT4gZG9tRWxlbWVudC5pbnB1dFRhc2suY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcblxuICBjb25zdCBpbml0UHJvamVjdFRpdGxlID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb21FbGVtZW50LnByb2plY3RWaWV3O1xuXG4gICAgcHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIC8vIHRvIHJlbW92ZSB0aGUgc3BhbiBhbmQgZ2V0IGFjdHVhbCBwcm9qZWN0IG5hbWVcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZS50YXJnZXQudGV4dENvbnRlbnQudHJpbSgpLnNsaWNlKDAsIC0zKTtcblxuICAgICAgaWYgKGUudGFyZ2V0LmRhdGFzZXQudG9nZ2xlUHJvamVjdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3ROYW1lKTtcbiAgICAgICAgY2xlYXJQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgZG9tRWxlbWVudC5wcm9qZWN0Vmlldy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICBkb21FbGVtZW50Lmxpc3RWaWV3LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIGxvYWRUYXNrcyhwcm9qZWN0TmFtZSk7XG4gICAgICAgIGlmIChkb21FbGVtZW50LmlucHV0TGlzdC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpXG4gICAgICAgICAgZG9tRWxlbWVudC5pbnB1dExpc3QuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgZG9tRWxlbWVudC5idG5Ub2dnbGVJbnB1dC5sYXN0Q2hpbGQudGV4dENvbnRlbnQgPSBcIkFkZCB0YXNrXCI7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaW5pdFRhc2tUaXRsZSA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9tRWxlbWVudC5saXN0VmlldztcbiAgICB0YXNrQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3Qgbm90ZXMgPSBlLnRhcmdldC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1ub3Rlc1wiKTtcbiAgICAgIGNvbnN0IHRhc2tEYXRlID1cbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kYXRlXCIpO1xuICAgICAgY29uc3QgdGFza0J0bnMgPVxuICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihcIi50YXNrLWJ0bi1ncm91cFwiKTtcblxuICAgICAgaWYgKGUudGFyZ2V0LmRhdGFzZXQudG9nZ2xlVGFzayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5vdGVzLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIHRhc2tEYXRlLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIHRhc2tCdG5zLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaW5pdEJhY2tCdG4gPSAoKSA9PiB7XG4gICAgY29uc3QgYmFja0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWJhY2tcIik7XG4gICAgYmFja0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZG9tRWxlbWVudC5wcm9qZWN0Vmlldy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgZG9tRWxlbWVudC5saXN0Vmlldy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgZG9tRWxlbWVudC5idG5Ub2dnbGVJbnB1dC5sYXN0Q2hpbGQudGV4dENvbnRlbnQgPSBcIkFkZCBsaXN0XCI7XG4gICAgICBjbGVhckxpc3QoKTtcbiAgICAgIGxvYWRQcm9qZWN0cygpO1xuICAgIH0pO1xuICB9O1xuXG4gIGxvYWRIb21lUGFnZSgpO1xufTtcbiIsImltcG9ydCB7IHRvRGF0ZSwgaXNUb2RheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5leHBvcnQgZGVmYXVsdCAocHJvamVjdE5hbWUpID0+IHtcbiAgbGV0IG5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgbGV0IHRhc2tzID0gW107XG5cbiAgY29uc3Qgc2V0TmFtZSA9IChuZXdOYW1lKSA9PiB7XG4gICAgcmV0dXJuIChuYW1lID0gbmV3TmFtZSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcbiAgICByZXR1cm4gbmFtZTtcbiAgfTtcblxuICBjb25zdCBhZGRUYXNrID0gKHRhc2tOYW1lKSA9PiB7XG4gICAgaWYgKGNvbnRhaW5zKHRhc2tOYW1lLmdldE5hbWUoKSkpIHJldHVybjtcbiAgICB0YXNrcy5wdXNoKHRhc2tOYW1lKTtcbiAgfTtcblxuICBjb25zdCBnZXRUYXNrID0gKHRhc2tOYW1lKSA9PiB7XG4gICAgcmV0dXJuIHRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suZ2V0TmFtZSgpID09PSB0YXNrTmFtZSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VGFza3MgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRhc2tzO1xuICB9O1xuXG4gIGNvbnN0IGdldFRhc2tzQ291bnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRhc2tzLmxlbmd0aDtcbiAgfTtcblxuICBjb25zdCBjb250YWlucyA9ICh0YXNrTmFtZSkgPT4ge1xuICAgIHJldHVybiB0YXNrcy5zb21lKCh0YXNrKSA9PiB0YXNrLmdldE5hbWUoKSA9PT0gdGFza05hbWUpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRhc2sgPSAodGFza05hbWUpID0+IHtcbiAgICByZXR1cm4gKHRhc2tzID0gdGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmdldE5hbWUoKSAhPT0gdGFza05hbWUpKTtcbiAgfTtcblxuICBjb25zdCBnZXRUb2RheVRhc2tzID0gKCkgPT4ge1xuICAgIHJldHVybiB0YXNrcy5maWx0ZXIoKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IHRhc2tEYXRlID0gbmV3IERhdGUodGFzay5nZXREYXRlKCkpO1xuICAgICAgcmV0dXJuIGlzVG9kYXkodG9EYXRlKHRhc2tEYXRlKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzZXROYW1lLFxuICAgIGdldE5hbWUsXG4gICAgYWRkVGFzayxcbiAgICBnZXRUYXNrcyxcbiAgICBnZXRUYXNrLFxuICAgIGdldFRhc2tzQ291bnQsXG4gICAgY29udGFpbnMsXG4gICAgZGVsZXRlVGFzayxcbiAgICBnZXRUb2RheVRhc2tzLFxuICB9O1xufTtcbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgbGV0IHByb2plY3RzID0gW107XG5cbiAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3RzO1xuICB9O1xuXG4gIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBpZiAoY29udGFpbnMocHJvamVjdE5hbWUuZ2V0TmFtZSgpKSkgcmV0dXJuO1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdE5hbWUpO1xuICB9O1xuXG4gIGNvbnN0IGNvbnRhaW5zID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3RzLnNvbWUoKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBwcm9qZWN0TmFtZSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgIHJldHVybiBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gcHJvamVjdE5hbWUpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICByZXR1cm4gKHByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpICE9PSBwcm9qZWN0TmFtZVxuICAgICkpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0UHJvamVjdHMsXG4gICAgYWRkUHJvamVjdCxcbiAgICBjb250YWlucyxcbiAgICBnZXRQcm9qZWN0LFxuICAgIGRlbGV0ZVByb2plY3QsXG4gIH07XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKHRhc2tOYW1lLCBub3RlcywgZGF0ZSkgPT4ge1xuICBsZXQgbmFtZSA9IHRhc2tOYW1lO1xuICBsZXQgbm90ZSA9IG5vdGVzIHx8IFwiTm90ZXNcIjtcbiAgbGV0IGR1ZURhdGUgPSBkYXRlIHx8IFwiTm8gZGF0ZVwiO1xuICBsZXQgaXNDaGVja2VkID0gZmFsc2U7XG5cbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG5cbiAgY29uc3Qgc2V0TmFtZSA9IChuZXdOYW1lKSA9PiB7XG4gICAgcmV0dXJuIChuYW1lID0gbmV3TmFtZSk7XG4gIH07XG5cbiAgY29uc3Qgc2V0Tm90ZSA9IChuZXdOb3RlKSA9PiB7XG4gICAgcmV0dXJuIChub3RlID0gbmV3Tm90ZSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0Tm90ZSA9ICgpID0+IG5vdGU7XG5cbiAgY29uc3QgZ2V0RGF0ZSA9ICgpID0+IGR1ZURhdGU7XG5cbiAgY29uc3QgaXNDb21wbGV0ZWQgPSAoKSA9PiBpc0NoZWNrZWQ7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXROYW1lLFxuICAgIHNldE5hbWUsXG4gICAgc2V0Tm90ZSxcbiAgICBnZXROb3RlLFxuICAgIGdldERhdGUsXG4gICAgaXNDb21wbGV0ZWQsXG4gIH07XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgSW50ZXJmYWNlIGZyb20gXCIuL2ludGVyZmFjZVwiO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgSW50ZXJmYWNlKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==