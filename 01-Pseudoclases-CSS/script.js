// JavaScript pequeño para que los controles de demostración sean funcionales.

// Evita que el formulario recargue la página y muestra el resultado de validación.
const form = document.querySelector("#demo-form");
const message = document.querySelector("#form-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (form.checkValidity()) {
    message.textContent = "El formulario cumple las reglas de validación.";
  } else {
    message.textContent = "Revisa los campos: hay datos obligatorios o valores que no cumplen las reglas.";
    form.reportValidity();
  }
});

// Abre un diálogo nativo para demostrar el estado :modal.
const dialog = document.querySelector("#sample-dialog");
document.querySelector("#open-dialog").addEventListener("click", () => {
  dialog.showModal();
});

document.querySelector("#close-dialog").addEventListener("click", () => {
  dialog.close();
});

// Ejemplo opcional: asigna estado indeterminado a una casilla si se activa esta línea.
// const checkbox = document.querySelector('input[type="checkbox"]');
// checkbox.indeterminate = true;
