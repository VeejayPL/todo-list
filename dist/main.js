/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZyhcIkhlbGxvIFRoZXJlXCIpO1xuY29uc3QgYnRuVG9nZ2xlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi10b2dnbGUtaW5wdXRcIik7XG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXRcIik7XG5jb25zdCBwcm9qZWN0VmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIik7XG5jb25zdCBsaXN0VmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdFwiKTtcbmNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RcIik7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1tb2RhbFwiKTtcblxuYnRuVG9nZ2xlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaWYgKGxpc3RWaWV3LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgIG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gIH0gZWxzZSB7XG4gICAgaW5wdXQuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgfVxufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWFkZC1saXN0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGlucHV0LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tY2FuY2VsLWxpc3RcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaW5wdXQuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGl0bGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgcHJvamVjdFZpZXcuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgbGlzdFZpZXcuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgaWYgKGlucHV0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgaW5wdXQuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgYnRuVG9nZ2xlSW5wdXQubGFzdENoaWxkLnRleHRDb250ZW50ID0gXCJBZGQgdGFza1wiO1xufSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1iYWNrXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHByb2plY3RWaWV3LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gIGxpc3RWaWV3LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gIGJ0blRvZ2dsZUlucHV0Lmxhc3RDaGlsZC50ZXh0Q29udGVudCA9IFwiQWRkIGxpc3RcIjtcbn0pO1xuLy8gTmVlZCB0byBhZGQgZm9yIGFsbCAtIHBpY2tzIG9ubHkgdGhlIGZpcnN0IG9uZVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNoZWNrXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZWRcIik7XG4gIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJjaGVja2VkXCIpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWNsb3NlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==