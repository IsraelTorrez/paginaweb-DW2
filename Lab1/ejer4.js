function verificarNumero() {
    // Pide al usuario que ingrese un número
    let inputNumero = prompt("Ingresa un número:");

    // Verifica si se ingresó un número
    if (inputNumero !== null) {
        // Convierte el valor ingresado a un número
        let numero = parseFloat(inputNumero);

        // Verifica si el número es un NaN (No es un número)
        if (!isNaN(numero)) {
            // Determina si el número es positivo, negativo o cero
            if (numero > 0) {
                alert("El número es positivo.");
            } else if (numero < 0) {
                alert("El número es negativo.");
            } else {
                alert("El número es cero.");
            }

            // Llama a la función nuevamente para pedir otro número
            verificarNumero();
        } else {
            alert("Por favor, ingresa un número válido.");
            // Llama a la función nuevamente para pedir otro número
            verificarNumero();
        }
    } else {
        // El usuario pulsó cancelar
        alert("Has cancelado la operación.");
    }
}