function verificarNumero() {
    let inputNumero = prompt("Ingresa un número:");

    if (inputNumero !== null) {
        let numero = parseFloat(inputNumero);
        if (!isNaN(numero)) {
            if (numero > 0) {
                alert("El número es positivo.");
            } else if (numero < 0) {
                alert("El número es negativo.");
            } else {
                alert("El número es cero.");
            }
            verificarNumero();
        } else {
            alert("Por favor, ingresa un número válido.");
            verificarNumero();
        }
    } else {
        alert("Has cancelado la operación.");
    }
}