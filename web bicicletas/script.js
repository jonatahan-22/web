// Abrir modal
function abrirModal(imagen, titulo) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");

  modal.style.display = "flex";
  modalImg.src = imagen;
  modalTitle.innerText = titulo;
}

// Cerrar modal
function cerrarModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Cerrar modal al hacer clic fuera
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    cerrarModal();
  }
};

// Cerrar modal al presionar ESC
window.onkeydown = function (event) {
  if (event.key === "Escape") {
    cerrarModal();
  }
};
