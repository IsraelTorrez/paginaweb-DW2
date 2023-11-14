
function compararEdades() {
    let edades = [];
    let nombres = [];

    for (let i = 1; i <= 3; i++) {
        let nombre = prompt("Ingresa el nombre " + i + ":");
        let edad = prompt("Ingresa la edad de " + nombre + ":");

        // Convierte la edad a un número
        edad = parseInt(edad);

        if (!isNaN(edad)) {
            edades.push(edad);
            nombres.push(nombre);
        } else {
            alert("Por favor, ingresa una edad válida.");
        }
    }

    let indiceMayor = edades.indexOf(Math.max(...edades));
    let indiceMenor = edades.indexOf(Math.min(...edades));
    let nombreMayor = nombres[indiceMayor];
    let nombreMenor = nombres[indiceMenor];

    alert("La persona de mayor edad es: " + nombreMayor);
    alert("La persona de menor edad es: " + nombreMenor);
}