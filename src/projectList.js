import Project from "./project";

export default () => {
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
};
