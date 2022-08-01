import { toDate, isToday } from "date-fns";

export default (projectName) => {
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

  const contains = (taskName) => {
    return tasks.some((task) => task.getName() === taskName);
  };

  const deleteTask = (taskName) => {
    return (tasks = tasks.filter((task) => task.getName() !== taskName));
  };

  const getTodayTasks = () => {
    return tasks.filter((task) => {
      const taskDate = new Date(task.getDate());
      return isToday(toDate(taskDate));
    });
  };

  return {
    setName,
    getName,
    addTask,
    getTasks,
    getTask,
    contains,
    deleteTask,
    getTodayTasks,
  };
};
