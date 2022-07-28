export default (taskName, notes, dueDate) => {
  let name = taskName;
  let notes = notes;
  let dueDate = dueDate;

  const getName = () => name;

  const setName = (newName) => {
    return (name = newName);
  };

  const getNotes = () => notes;

  const getDate = () => dueDate;

  return { getName, setName, getNotes, getDate };
};
