document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el formulario por su id
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', function(event) {
        // Prevenir el envío del formulario
        event.preventDefault();

        // Recupera los valores de los elementos del formulario
        const username = document.getElementById('usuario').value;
        const password = document.getElementById('password').value;

        // Imprime los valores en la consola (puedes realizar otras acciones aquí)
        console.log('Usuario:', username);
        console.log('Contraseña:', password);

        // Aquí podrías realizar alguna acción como enviar los datos a un servidor
    });
});
