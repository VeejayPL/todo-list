/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
console.log("Hello There");
const input = document.querySelector(".input");
const projectView = document.querySelector(".projects");
const listView = document.querySelector(".list");
const project = document.querySelector(".project");

document.querySelector("#btn-toggle-input").addEventListener("click", () => {
  input.classList.toggle("active");
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
});
document.querySelector(".btn-back").addEventListener("click", () => {
  projectView.classList.toggle("active");
  listView.classList.toggle("active");
});
// Need to add for all - picks only the first one
document.querySelector(".task-check").addEventListener("click", (e) => {
  e.target.parentNode.classList.toggle("completed");
  e.target.classList.toggle("checked");
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coXCJIZWxsbyBUaGVyZVwiKTtcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dFwiKTtcbmNvbnN0IHByb2plY3RWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKTtcbmNvbnN0IGxpc3RWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0XCIpO1xuY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdFwiKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tdG9nZ2xlLWlucHV0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGlucHV0LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tYWRkLWxpc3RcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaW5wdXQuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1jYW5jZWwtbGlzdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpbnB1dC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBwcm9qZWN0Vmlldy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICBsaXN0Vmlldy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xufSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1iYWNrXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHByb2plY3RWaWV3LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gIGxpc3RWaWV3LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG59KTtcbi8vIE5lZWQgdG8gYWRkIGZvciBhbGwgLSBwaWNrcyBvbmx5IHRoZSBmaXJzdCBvbmVcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jaGVja1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVkXCIpO1xuICBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwiY2hlY2tlZFwiKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9