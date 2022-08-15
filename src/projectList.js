export default () => {
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
};
