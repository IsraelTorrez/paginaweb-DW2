function mostrarNumerosYSuma() {
    let n = prompt("Ingresa el valor de n:");
    n = parseInt(n);

    if (!isNaN(n) && n > 0) {
        let numeros = [];
        let sumaPares = 0;

        for (let i = 1; i <= n; i++) {
            numeros.push(i);

            if (i % 2 === 0) {
                sumaPares += i;
            }
        }

        alert("Los primeros " + n + " números son: " + numeros.join(", "));
        alert("La sumatoria de los números pares es: " + sumaPares);
    } else {
        alert("Por favor, ingresa un número entero válido mayor que 0.");
    }
}