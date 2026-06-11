const bodyElement = document.body;
const btnTema = document.getElementById('btn-tema');
const formContacto = document.getElementById('form-contacto');
const inputNombre = document.getElementById('input-nombre')
const feedbackNombre = document.getElementById('feedback-nombre');
const alertaExito = document.getElementById('alerta-exito'); 

//Evento Click - modo oscuro 
btnTema.addEventListener('click', () => {
    if (bodyElement.classList.contains('light-mode')) {
        bodyElement.classList.replace('light-mode', 'dark-mode');
        btnTema.textContent = 'Modo Claro';
        btnTema.className = 'btn btn-outline-warning btn-sm'
    } else {
        bodyElement.classList.replace('dark-mode', 'light-mode');
        btnTema.textContent = 'Modo Oscuro'; 
        btnTema.className = 'btn btn-outline-light btn-sm'
    }
});

//Evento onChange 
inputNombre.addEventListener('change', (evento) => {
    const valorTexto = evento.target.value.trim();
    if (valorTexto.length < 3){
        feedbackNombre.textContent = "El nombre debe tener al menos 3 caracteres"; 
        inputNombre.classList.add('is-invalid'); 
        inputNombre.classList.remove('is-valid');
    } else {
        feedbackNombre.textContent = ""; 
        inputNombre.classList.remove('is-invalid'); 
        inputNombre.classList.add('is-valid');
    }
});

//Evento submit 
formContacto.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const mensajeTexto = document.getElementById('input-mensaje').value.trim();
    if (inputNombre.value.trim() === "" || mensajeTexto === ""){
        alert("Se deben completar todos los campos antes de enviar");
        return;
    }
    alertaExito.classList.remove('d-none')
    formContacto.reset();
    inputNombre.classList.remove('is-valid'); 

    setTimeout(() => {
        alertaExito.classList.add('d-none');
    }, 5000);
});