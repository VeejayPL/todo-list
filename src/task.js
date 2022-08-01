export default (taskName, notes, date) => {
  let name = taskName;
  let note = notes;
  let dueDate = date;

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
};
