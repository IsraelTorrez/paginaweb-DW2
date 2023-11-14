var mensajeNotificacion = document.getElementById('mensaje-notificacion');

// Define la función para mostrar una notificación
function mostrarNotificacion(mensaje) {
    // Cambia el contenido del elemento
    mensajeNotificacion.innerText = mensaje;

    // Muestra una notificación en el navegador
    if (Notification.permission === 'granted') {
        new Notification('Tienda en Línea', {
            body: mensaje
        });
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(function (permission) {
            if (permission === 'granted') {
                new Notification('Tienda en Línea', {
                    body: mensaje
                });
            }
        });
    }
}

// Ejemplo de uso
mostrarNotificacion('¡Oferta especial por tiempo limitado!');

