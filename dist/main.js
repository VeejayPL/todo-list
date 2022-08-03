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
  // Initialize ToDo List with tasks
  const toDoList = (0,_projectList__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const todayProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__["default"])("Today");
  const inbox = (0,_project__WEBPACK_IMPORTED_MODULE_1__["default"])("Inbox");
  toDoList.addProject(todayProject);
  toDoList.addProject(inbox);

  const emailTask = (0,_task__WEBPACK_IMPORTED_MODULE_0__["default"])("Respond to emails");
  const laundryTask = (0,_task__WEBPACK_IMPORTED_MODULE_0__["default"])("Laundry");
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
    if (taskName === "") {
      alert("Field can't be empty!");
      return;
    } else if (toDoList.getProject(projectName).contains(taskName)) {
      alert("Task already exists!");
      return;
    } else return toDoList.getProject(projectName).addTask((0,_task__WEBPACK_IMPORTED_MODULE_0__["default"])(taskName));
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
  <h3 class="task-title">${taskName}</h3>
  <button class="btn-edit">
    <i class="fa-solid fa-circle-info"></i>
  </button>
  <button class="btn-remove">
    <i class="fa-solid fa-trash"></i>
  </button>
</div>`;
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
    const removeBtn = document.querySelectorAll(".btn-remove");
    const projectName = document.querySelector(".list-title").textContent;

    removeBtn.forEach((button) =>
      button.addEventListener("click", (e) => {
        const taskName = e.target.parentNode.textContent.trim();
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

  loadProjects();
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
    return tasks.find((task) => task === taskName);
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

  const getName = () => name;

  const setName = (newName) => {
    return (name = newName);
  };

  const setNote = (newNote) => {
    return (note = newNote);
  };

  const getNote = () => note;

  const getDate = () => dueDate;

  return {
    getName,
    setName,
    setNote,
    getNote,
    getDate,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7VUMxQkY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05vQzs7QUFFcEMsNENBQTRDLGtEQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2ludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdC5pby9manVsZVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImV4cG9ydCBjb25zdCBidG5Ub2dnbGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLXRvZ2dsZS1pbnB1dFwiKTtcbmV4cG9ydCBjb25zdCBidG5BZGRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tYWRkLWxpc3RcIik7XG5leHBvcnQgY29uc3QgYnRuQ2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tY2FuY2VsLWxpc3RcIik7XG5leHBvcnQgY29uc3QgYnRuQmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWJhY2tcIik7XG5leHBvcnQgY29uc3QgYnRuQ2xvc2VNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWNsb3NlXCIpO1xuXG5leHBvcnQgY29uc3QgaW5wdXRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWlucHV0XCIpO1xuZXhwb3J0IGNvbnN0IGlucHV0VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1tb2RhbFwiKTtcblxuZXhwb3J0IGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RcIik7XG5leHBvcnQgY29uc3QgcHJvamVjdFZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpO1xuZXhwb3J0IGNvbnN0IGxpc3RWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0XCIpO1xuZXhwb3J0IGNvbnN0IGxpc3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC10aXRsZVwiKTtcblxuZXhwb3J0IGNvbnN0IGxpc3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaXN0LWlucHV0XCIpO1xuXG5leHBvcnQgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbmFtZVwiKTtcbmV4cG9ydCBjb25zdCB0YXNrTm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1ub3RlXCIpO1xuZXhwb3J0IGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRhdGVcIik7XG5leHBvcnQgY29uc3QgYnRuQWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWFkZC10YXNrXCIpO1xuIiwiaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgUHJvamVjdExpc3QgZnJvbSBcIi4vcHJvamVjdExpc3RcIjtcbmltcG9ydCAqIGFzIGRvbUVsZW1lbnQgZnJvbSBcIi4vZG9tLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLy8gSW5pdGlhbGl6ZSBUb0RvIExpc3Qgd2l0aCB0YXNrc1xuICBjb25zdCB0b0RvTGlzdCA9IFByb2plY3RMaXN0KCk7XG4gIGNvbnN0IHRvZGF5UHJvamVjdCA9IFByb2plY3QoXCJUb2RheVwiKTtcbiAgY29uc3QgaW5ib3ggPSBQcm9qZWN0KFwiSW5ib3hcIik7XG4gIHRvRG9MaXN0LmFkZFByb2plY3QodG9kYXlQcm9qZWN0KTtcbiAgdG9Eb0xpc3QuYWRkUHJvamVjdChpbmJveCk7XG5cbiAgY29uc3QgZW1haWxUYXNrID0gVGFzayhcIlJlc3BvbmQgdG8gZW1haWxzXCIpO1xuICBjb25zdCBsYXVuZHJ5VGFzayA9IFRhc2soXCJMYXVuZHJ5XCIpO1xuICBjb25zdCBuZXdUYXNrID0gVGFzayhcIk5ldyB0YXNrXCIpO1xuXG4gIHRvZGF5UHJvamVjdC5hZGRUYXNrKGVtYWlsVGFzayk7XG4gIHRvZGF5UHJvamVjdC5hZGRUYXNrKGxhdW5kcnlUYXNrKTtcbiAgdG9kYXlQcm9qZWN0LmFkZFRhc2sobmV3VGFzayk7XG4gIGluYm94LmFkZFRhc2soZW1haWxUYXNrKTtcbiAgaW5ib3guYWRkVGFzayhsYXVuZHJ5VGFzayk7XG5cbiAgLy8gQWRkIGFuZCBsb2FkIHByb2plY3RzXG4gIGNvbnN0IGFkZFByb2plY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb21FbGVtZW50Lmxpc3ROYW1lLnZhbHVlO1xuICAgIGlmIChwcm9qZWN0TmFtZSA9PT0gXCJcIikge1xuICAgICAgYWxlcnQoXCJGaWVsZCBjYW4ndCBiZSBlbXB0eSFcIik7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmICh0b0RvTGlzdC5jb250YWlucyhwcm9qZWN0TmFtZSkpIHtcbiAgICAgIGFsZXJ0KFwiUHJvamVjdCBhbHJlYWR5IGV4aXN0cyFcIik7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHJldHVybiB0b0RvTGlzdC5hZGRQcm9qZWN0KFByb2plY3QocHJvamVjdE5hbWUpKTtcbiAgfTtcblxuICBjb25zdCBsb2FkUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgdG9Eb0xpc3QuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBjcmVhdGVMaXN0KHByb2plY3QuZ2V0TmFtZSgpKTtcbiAgICAgIGluaXRQcm9qZWN0VGl0bGUoKTtcbiAgICAgIGluaXRSZW1vdmVQcm9qZWN0QnRuKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgZG9tRWxlbWVudC5idG5BZGRMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBpbml0QWRkUHJvamVjdCgpKTtcblxuICBjb25zdCBpbml0QWRkUHJvamVjdCA9ICgpID0+IHtcbiAgICBjbGVhckxpc3QoKTtcbiAgICBhZGRQcm9qZWN0KCk7XG4gICAgbG9hZFByb2plY3RzKCk7XG4gICAgY2xlYXJJbnB1dCgpO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFySW5wdXQgPSAoKSA9PiAoZG9tRWxlbWVudC5saXN0TmFtZS52YWx1ZSA9IFwiXCIpO1xuXG4gIC8vIEFkZCBhbmQgbG9hZCB0YXNrc1xuICBjb25zdCBhZGRUYXNrID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgY29uc3QgdGFza05hbWUgPSBkb21FbGVtZW50LnRhc2tOYW1lLnZhbHVlO1xuICAgIGlmICh0YXNrTmFtZSA9PT0gXCJcIikge1xuICAgICAgYWxlcnQoXCJGaWVsZCBjYW4ndCBiZSBlbXB0eSFcIik7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmICh0b0RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5jb250YWlucyh0YXNrTmFtZSkpIHtcbiAgICAgIGFsZXJ0KFwiVGFzayBhbHJlYWR5IGV4aXN0cyFcIik7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHJldHVybiB0b0RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5hZGRUYXNrKFRhc2sodGFza05hbWUpKTtcbiAgfTtcblxuICBjb25zdCBsb2FkVGFza3MgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICB0b0RvTGlzdFxuICAgICAgLmdldFByb2plY3QocHJvamVjdE5hbWUpXG4gICAgICAuZ2V0VGFza3MoKVxuICAgICAgLmZvckVhY2goKHRhc2spID0+IGNyZWF0ZVRhc2sodGFzay5nZXROYW1lKCkpKTtcbiAgICBpbml0UmVtb3ZlVGFza0J0bigpO1xuICAgIGluaXRCYWNrQnRuKCk7XG4gICAgaW5pdFRvZ2dsZUNvbXBsZXRlZCgpO1xuICB9O1xuXG4gIGRvbUVsZW1lbnQuYnRuQWRkVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGluaXRBZGRUYXNrKCk7XG4gICAgdG9nZ2xlVGFza01vZGFsKCk7XG4gICAgY2xlYXJNb2RhbElucHV0KCk7XG4gIH0pO1xuXG4gIGNvbnN0IGluaXRBZGRUYXNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LXRpdGxlXCIpLnRleHRDb250ZW50O1xuICAgIGFkZFRhc2socHJvamVjdE5hbWUpO1xuICAgIGNsZWFyUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgbG9hZFRhc2tzKHByb2plY3ROYW1lKTtcbiAgfTtcblxuICBjb25zdCBjbGVhck1vZGFsSW5wdXQgPSAoKSA9PiB7XG4gICAgZG9tRWxlbWVudC50YXNrTmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgZG9tRWxlbWVudC50YXNrTm90ZS52YWx1ZSA9IFwiXCI7XG4gICAgZG9tRWxlbWVudC50YXNrRGF0ZS52YWx1ZSA9IFwiXCI7XG4gIH07XG5cbiAgLy8gTGlzdCBkaXNwbGF5XG4gIGNvbnN0IGNyZWF0ZUxpc3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBkb21FbGVtZW50LnByb2plY3RWaWV3LmlubmVySFRNTCArPSBgPGRpdiBjbGFzcz1cInByb2plY3RcIj5cbiAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaGVjay1kb3VibGVcIj48L2k+XG4gIDxoMyBjbGFzcz1cInByb2plY3QtdGl0bGVcIj4ke3Byb2plY3ROYW1lfTxzcGFuIGNsYXNzPVwidGFzay1jb3VudFwiPiR7dGFza0NvdW50RGlzcGxheShcbiAgICAgIHByb2plY3ROYW1lXG4gICAgKX0gJiM2Mjs8L3NwYW4+XG48L2gzPlxuICA8YnV0dG9uIGNsYXNzPVwiYnRuLWVkaXRcIj5cbiAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNpcmNsZS1pbmZvXCI+PC9pPlxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1yZW1vdmVcIj5cbiAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXRyYXNoXCI+PC9pPlxuICA8L2J1dHRvbj5cbjwvZGl2PmA7XG4gIH07XG5cbiAgY29uc3QgdGFza0NvdW50RGlzcGxheSA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgIHJldHVybiB0b0RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5nZXRUYXNrc0NvdW50KCk7XG4gIH07XG5cbiAgY29uc3QgY2xlYXJMaXN0ID0gKCkgPT5cbiAgICAoZG9tRWxlbWVudC5wcm9qZWN0Vmlldy5pbm5lckhUTUwgPSBgPGgyIGNsYXNzPVwicHJvamVjdHMtdGl0bGVcIj5NeSBsaXN0czwvaDI+YCk7XG5cbiAgLy8gVGFzayBkaXNwbGF5XG4gIGNvbnN0IGNyZWF0ZVRhc2sgPSAodGFza05hbWUpID0+IHtcbiAgICBkb21FbGVtZW50Lmxpc3RWaWV3LmlubmVySFRNTCArPSBgXG4gIDxkaXYgY2xhc3M9XCJsaXN0LXRhc2tcIj5cbiAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaXJjbGUtY2hlY2sgdGFzay1jaGVja1wiPjwvaT5cbiAgPGgzIGNsYXNzPVwidGFzay10aXRsZVwiPiR7dGFza05hbWV9PC9oMz5cbiAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1lZGl0XCI+XG4gICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaXJjbGUtaW5mb1wiPjwvaT5cbiAgPC9idXR0b24+XG4gIDxidXR0b24gY2xhc3M9XCJidG4tcmVtb3ZlXCI+XG4gICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS10cmFzaFwiPjwvaT5cbiAgPC9idXR0b24+XG48L2Rpdj5gO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyUHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT5cbiAgICAoZG9tRWxlbWVudC5saXN0Vmlldy5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImxpc3QtaGVhZGVyXCI+XG4gICAgPGgyIGNsYXNzPVwibGlzdC10aXRsZVwiPiR7cHJvamVjdE5hbWV9PC9oMj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLWJhY2tcIj4mIzYwOyBCYWNrPC9idXR0b24+XG4gIDwvZGl2PmApO1xuXG4gIC8vIERlbGV0ZSBwcm9qZWN0IGFuZCB0YXNrIC8gdG9nZ2xlIGNvbXBsZXRlZFxuICBjb25zdCBpbml0UmVtb3ZlUHJvamVjdEJ0biA9ICgpID0+IHtcbiAgICBjb25zdCByZW1vdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ0bi1yZW1vdmVcIik7XG5cbiAgICByZW1vdmVCdG4uZm9yRWFjaCgoYnV0dG9uKSA9PlxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGUudGFyZ2V0LnBhcmVudE5vZGUudGV4dENvbnRlbnQudHJpbSgpLnNsaWNlKDAsIC0zKTtcbiAgICAgICAgdG9Eb0xpc3QuZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgIGNsZWFyTGlzdCgpO1xuICAgICAgICBsb2FkUHJvamVjdHMoKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBpbml0UmVtb3ZlVGFza0J0biA9ICgpID0+IHtcbiAgICBjb25zdCByZW1vdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ0bi1yZW1vdmVcIik7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3QtdGl0bGVcIikudGV4dENvbnRlbnQ7XG5cbiAgICByZW1vdmVCdG4uZm9yRWFjaCgoYnV0dG9uKSA9PlxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGUudGFyZ2V0LnBhcmVudE5vZGUudGV4dENvbnRlbnQudHJpbSgpO1xuICAgICAgICB0b0RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5kZWxldGVUYXNrKHRhc2tOYW1lKTtcbiAgICAgICAgY2xlYXJQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgbG9hZFRhc2tzKHByb2plY3ROYW1lKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBpbml0VG9nZ2xlQ29tcGxldGVkID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tDaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1jaGVja1wiKTtcbiAgICB0YXNrQ2hlY2suZm9yRWFjaCgodGFzaykgPT5cbiAgICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlZFwiKTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcImNoZWNrZWRcIik7XG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgLy8gVG9nZ2xlIGlucHV0cyAvIG1vdmluZyB0aHJvdWdoIGFwcFxuICBkb21FbGVtZW50LmJ0blRvZ2dsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKGRvbUVsZW1lbnQubGlzdFZpZXcuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICBkb21FbGVtZW50LmlucHV0VGFzay5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb21FbGVtZW50LmlucHV0TGlzdC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgZG9tRWxlbWVudC5idG5BZGRMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZG9tRWxlbWVudC5pbnB1dExpc3QuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgfSk7XG5cbiAgZG9tRWxlbWVudC5idG5DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkb21FbGVtZW50LmlucHV0TGlzdC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIGNsZWFySW5wdXQoKTtcbiAgfSk7XG5cbiAgZG9tRWxlbWVudC5idG5DbG9zZU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdG9nZ2xlVGFza01vZGFsKCk7XG4gIH0pO1xuXG4gIGNvbnN0IHRvZ2dsZVRhc2tNb2RhbCA9ICgpID0+IGRvbUVsZW1lbnQuaW5wdXRUYXNrLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG5cbiAgY29uc3QgaW5pdFByb2plY3RUaXRsZSA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtdGl0bGVcIik7XG4gICAgcHJvamVjdFRpdGxlLmZvckVhY2goKHRpdGxlKSA9PlxuICAgICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIC8vIHRvIHJlbW92ZSB0aGUgc3BhbiBhbmQgZ2V0IGFjdHVhbCBwcm9qZWN0IG5hbWVcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBlLmN1cnJlbnRUYXJnZXQudGV4dENvbnRlbnQudHJpbSgpLnNsaWNlKDAsIC0zKTtcbiAgICAgICAgY2xlYXJQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgZG9tRWxlbWVudC5wcm9qZWN0Vmlldy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgICBkb21FbGVtZW50Lmxpc3RWaWV3LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gICAgICAgIGxvYWRUYXNrcyhwcm9qZWN0TmFtZSk7XG4gICAgICAgIGlmIChkb21FbGVtZW50LmlucHV0TGlzdC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpXG4gICAgICAgICAgZG9tRWxlbWVudC5pbnB1dExpc3QuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgZG9tRWxlbWVudC5idG5Ub2dnbGVJbnB1dC5sYXN0Q2hpbGQudGV4dENvbnRlbnQgPSBcIkFkZCB0YXNrXCI7XG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgaW5pdEJhY2tCdG4gPSAoKSA9PiB7XG4gICAgY29uc3QgYmFja0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWJhY2tcIik7XG4gICAgYmFja0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZG9tRWxlbWVudC5wcm9qZWN0Vmlldy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgZG9tRWxlbWVudC5saXN0Vmlldy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgZG9tRWxlbWVudC5idG5Ub2dnbGVJbnB1dC5sYXN0Q2hpbGQudGV4dENvbnRlbnQgPSBcIkFkZCBsaXN0XCI7XG4gICAgICBjbGVhckxpc3QoKTtcbiAgICAgIGxvYWRQcm9qZWN0cygpO1xuICAgIH0pO1xuICB9O1xuXG4gIGxvYWRQcm9qZWN0cygpO1xufTtcbiIsImltcG9ydCB7IHRvRGF0ZSwgaXNUb2RheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5leHBvcnQgZGVmYXVsdCAocHJvamVjdE5hbWUpID0+IHtcbiAgbGV0IG5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgbGV0IHRhc2tzID0gW107XG5cbiAgY29uc3Qgc2V0TmFtZSA9IChuZXdOYW1lKSA9PiB7XG4gICAgcmV0dXJuIChuYW1lID0gbmV3TmFtZSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcbiAgICByZXR1cm4gbmFtZTtcbiAgfTtcblxuICBjb25zdCBhZGRUYXNrID0gKHRhc2tOYW1lKSA9PiB7XG4gICAgaWYgKGNvbnRhaW5zKHRhc2tOYW1lLmdldE5hbWUoKSkpIHJldHVybjtcbiAgICB0YXNrcy5wdXNoKHRhc2tOYW1lKTtcbiAgfTtcblxuICBjb25zdCBnZXRUYXNrID0gKHRhc2tOYW1lKSA9PiB7XG4gICAgcmV0dXJuIHRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2sgPT09IHRhc2tOYW1lKTtcbiAgfTtcblxuICBjb25zdCBnZXRUYXNrcyA9ICgpID0+IHtcbiAgICByZXR1cm4gdGFza3M7XG4gIH07XG5cbiAgY29uc3QgZ2V0VGFza3NDb3VudCA9ICgpID0+IHtcbiAgICByZXR1cm4gdGFza3MubGVuZ3RoO1xuICB9O1xuXG4gIGNvbnN0IGNvbnRhaW5zID0gKHRhc2tOYW1lKSA9PiB7XG4gICAgcmV0dXJuIHRhc2tzLnNvbWUoKHRhc2spID0+IHRhc2suZ2V0TmFtZSgpID09PSB0YXNrTmFtZSk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVGFzayA9ICh0YXNrTmFtZSkgPT4ge1xuICAgIHJldHVybiAodGFza3MgPSB0YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suZ2V0TmFtZSgpICE9PSB0YXNrTmFtZSkpO1xuICB9O1xuXG4gIGNvbnN0IGdldFRvZGF5VGFza3MgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRhc2tzLmZpbHRlcigodGFzaykgPT4ge1xuICAgICAgY29uc3QgdGFza0RhdGUgPSBuZXcgRGF0ZSh0YXNrLmdldERhdGUoKSk7XG4gICAgICByZXR1cm4gaXNUb2RheSh0b0RhdGUodGFza0RhdGUpKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNldE5hbWUsXG4gICAgZ2V0TmFtZSxcbiAgICBhZGRUYXNrLFxuICAgIGdldFRhc2tzLFxuICAgIGdldFRhc2ssXG4gICAgZ2V0VGFza3NDb3VudCxcbiAgICBjb250YWlucyxcbiAgICBkZWxldGVUYXNrLFxuICAgIGdldFRvZGF5VGFza3MsXG4gIH07XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBsZXQgcHJvamVjdHMgPSBbXTtcblxuICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHtcbiAgICByZXR1cm4gcHJvamVjdHM7XG4gIH07XG5cbiAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgIGlmIChjb250YWlucyhwcm9qZWN0TmFtZS5nZXROYW1lKCkpKSByZXR1cm47XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0TmFtZSk7XG4gIH07XG5cbiAgY29uc3QgY29udGFpbnMgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICByZXR1cm4gcHJvamVjdHMuc29tZSgocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IHByb2plY3ROYW1lKTtcbiAgfTtcblxuICBjb25zdCBnZXRQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBwcm9qZWN0TmFtZSk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgIHJldHVybiAocHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgIT09IHByb2plY3ROYW1lXG4gICAgKSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRQcm9qZWN0cyxcbiAgICBhZGRQcm9qZWN0LFxuICAgIGNvbnRhaW5zLFxuICAgIGdldFByb2plY3QsXG4gICAgZGVsZXRlUHJvamVjdCxcbiAgfTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCAodGFza05hbWUsIG5vdGVzLCBkYXRlKSA9PiB7XG4gIGxldCBuYW1lID0gdGFza05hbWU7XG4gIGxldCBub3RlID0gbm90ZXMgfHwgXCJOb3Rlc1wiO1xuICBsZXQgZHVlRGF0ZSA9IGRhdGUgfHwgXCJObyBkYXRlXCI7XG5cbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG5cbiAgY29uc3Qgc2V0TmFtZSA9IChuZXdOYW1lKSA9PiB7XG4gICAgcmV0dXJuIChuYW1lID0gbmV3TmFtZSk7XG4gIH07XG5cbiAgY29uc3Qgc2V0Tm90ZSA9IChuZXdOb3RlKSA9PiB7XG4gICAgcmV0dXJuIChub3RlID0gbmV3Tm90ZSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0Tm90ZSA9ICgpID0+IG5vdGU7XG5cbiAgY29uc3QgZ2V0RGF0ZSA9ICgpID0+IGR1ZURhdGU7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXROYW1lLFxuICAgIHNldE5hbWUsXG4gICAgc2V0Tm90ZSxcbiAgICBnZXROb3RlLFxuICAgIGdldERhdGUsXG4gIH07XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgSW50ZXJmYWNlIGZyb20gXCIuL2ludGVyZmFjZVwiO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgSW50ZXJmYWNlKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==