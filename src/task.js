export default (taskName, notes, date) => {
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
};
