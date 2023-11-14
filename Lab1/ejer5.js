function encontrarMayor() {
    let numeros = [];
    let inputNumero;

    while (true) {
        inputNumero = prompt("Ingresa un número:");

        if (inputNumero === null) {
            // El usuario pulsó cancelar
            break;
        }

        let numero = parseFloat(inputNumero);

        if (!isNaN(numero)) {
            numeros.push(numero);
        } else {
            alert("Por favor, ingresa un número válido.");
        }
    }

    if (numeros.length > 0) {
        // Encontrar el número mayor
        let mayor = Math.max(...numeros);
        alert("El número mayor es: " + mayor);
    } else {
        alert("No se ingresaron números.");
    }
}