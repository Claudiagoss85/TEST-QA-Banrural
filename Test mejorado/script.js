// Genera un número aleatorio entre 1 y 100 que el usuario debe adivinar.
window.numeroAdivinar = Math.floor(Math.random() * 100) + 1; // Asigna numeroAdivinar al objeto window para accesibilidad global
// Inicializa el contador de intentos.
let intentos = 0;
// Establece el máximo número de intentos permitidos.
const maxIntentos = 10;

// Asigna eventos a los botones de jugar y reiniciar.
document.getElementById('jugar-btn').addEventListener('click', jugar);
document.getElementById('reiniciar-btn').addEventListener('click', reiniciarJuego);

// Función para validar la entrada del usuario.
function validarEntrada(input) {
    let numero = parseInt(input);
    if (isNaN(numero) || numero < 1 || numero > 100) {
        mostrarMensaje("Por favor, ingrese un número entero entre 1 y 100.", "error");
        return false;
    }
    return true;
}

// Función para mostrar mensajes al usuario con estilos específicos.
function mostrarMensaje(mensaje, tipo) {
    let mensajeElemento = document.getElementById('mensaje');
    mensajeElemento.textContent = mensaje; // Establece el contenido del mensaje
    mensajeElemento.className = ""; // Elimina cualquier clase previa
    mensajeElemento.classList.add(tipo); // Agrega la clase de estilo correspondiente
}

// Función para actualizar el número de intentos restantes.
function actualizarIntentosRestantes() {
    let intentosRestantes = maxIntentos - intentos;
    document.getElementById('intentos-restantes').textContent = `Intentos restantes: ${intentosRestantes}`;
}

// Función principal que se ejecuta cuando el usuario intenta adivinar el número.
function jugar() {
    let entradaUsuario = document.getElementById('numero').value;
    if (!validarEntrada(entradaUsuario)) {
        return; // No incrementar el intento si la entrada no es válida.
    }
    intentos++;
    let numero = parseInt(entradaUsuario);
    if (numero > window.numeroAdivinar) {
        mostrarMensaje("Incorrecto! El número es menor!", "info");
    } else if (numero < window.numeroAdivinar) {
        mostrarMensaje("Incorrecto! El número es mayor!", "info");
    } else {
        mostrarMensaje("Felicitaciones! Adivinaste el número!", "success");
        document.getElementById('numero').disabled = true; // Desactiva la entrada después de ganar
        document.getElementById('jugar-btn').disabled = true; // Desactiva el botón de jugar
        return;
    }
    actualizarIntentosRestantes(); // Actualiza el recuento de intentos restantes

    if (intentos >= maxIntentos) {
        mostrarMensaje("!!!Pérdiste!!!", "error");
        document.getElementById('numero').disabled = true; // Desactiva la entrada después de perder
        document.getElementById('jugar-btn').disabled = true; // Desactiva el botón de jugar
    }
}

// Función para reiniciar el juego a su estado inicial.
function reiniciarJuego() {
    // Genera un nuevo número aleatorio y lo asigna al objeto window
    window.numeroAdivinar = Math.floor(Math.random() * 100) + 1;
    intentos = 0;
    document.getElementById('numero').value = "";
    document.getElementById('numero').disabled = false; // Reactiva la entrada
    document.getElementById('jugar-btn').disabled = false; // Reactiva el botón de jugar
    mostrarMensaje("", ""); // Limpia el mensaje anterior
    actualizarIntentosRestantes(); // Reinicia el recuento de intentos restantes
}
