import { toDate, isToday } from "date-fns";

export default (projectName) => {
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
      return isToday(toDate(taskDate));
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
};
