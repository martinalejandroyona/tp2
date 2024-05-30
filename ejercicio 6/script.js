document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    const mensaje = document.getElementById('mensaje');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const apellido = document.getElementById('apellido').value.trim();
        const edad = parseInt(document.getElementById('edad').value);
        const altura = parseInt(document.getElementById('altura').value);
        const email = document.getElementById('email').value.trim();

        let mensajeText = '';
        let esValido = true;

        if (nombre === '' || apellido === '' || nombre.length > 50 || apellido.length > 50) {
            mensajeText += 'Nombre y apellido son requeridos y deben tener como máximo 50 caracteres. ';
            esValido = false;
        }

        if (edad < 0 || edad < 18) {
            mensajeText += 'La edad debe ser un número positivo y mayor de edad. ';
            esValido = false;
        }

        if (altura < 0 || altura > 230) {
            mensajeText += 'La altura debe ser un número positivo y menor o igual a 230 cm. ';
            esValido = false;
        }

        if (!email.includes('@') || email === '') {
            mensajeText += 'El correo electrónico es inválido. ';
            esValido = false;
        }

        mensaje.textContent = mensajeText;
        mensaje.className = esValido ? 'mensaje-exito' : 'mensaje-error';
    });
});
