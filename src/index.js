console.log("Hello There");
const btnToggleInput = document.querySelector("#btn-toggle-input");
const input = document.querySelector(".input");
const projectView = document.querySelector(".projects");
const listView = document.querySelector(".list");
const project = document.querySelector(".project");
const modal = document.querySelector(".task-modal");

btnToggleInput.addEventListener("click", () => {
  if (listView.classList.contains("active")) {
    modal.classList.toggle("active");
  } else {
    input.classList.toggle("active");
  }
});

document.querySelector("#btn-add-list").addEventListener("click", () => {
  input.classList.toggle("active");
});

document.querySelector("#btn-cancel-list").addEventListener("click", () => {
  input.classList.toggle("active");
});

document.querySelector(".project-title").addEventListener("click", () => {
  projectView.classList.toggle("active");
  listView.classList.toggle("active");
  if (input.classList.contains("active")) input.classList.toggle("active");
  btnToggleInput.lastChild.textContent = "Add task";
});
document.querySelector(".btn-back").addEventListener("click", () => {
  projectView.classList.toggle("active");
  listView.classList.toggle("active");
  btnToggleInput.lastChild.textContent = "Add list";
});
// Need to add for all - picks only the first one
document.querySelector(".task-check").addEventListener("click", (e) => {
  e.target.parentNode.classList.toggle("completed");
  e.target.classList.toggle("checked");
});

document.querySelector(".btn-close").addEventListener("click", () => {
  modal.classList.toggle("active");
});
