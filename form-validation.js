document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('usuario').value;
    if (usuario.length == 0) {
        alert('No has escrito nada en el usuario');
        return;
    }
    var email = document.getElementById('email').value;
    if (email.length < 5) {
        alert('Correo no valido');
        return;
    }
    var asunto = document.getElementById('asunto').value;
    if (asunto.length < 6) {
        alert('Debe escribir asunto');
        return;
    }
    var mensaje = document.getElementById('mensaje').value;
    if (mensaje.length < 10) {
        alert('Debe dejar un mensaje');
        return;
    }
    this.submit();
}
