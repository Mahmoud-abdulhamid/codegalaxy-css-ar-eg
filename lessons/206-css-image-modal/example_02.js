function openModal(modalId) {
  let modal = document.getElementById(modalId);
  modal.classList.add("show");
}
function closeModal(modalId) {
  let modal = document.getElementById(modalId);
  modal.classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
}
