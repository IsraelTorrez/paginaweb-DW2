
function identificarEdad() {
    let fechaNacimiento = prompt("Ingresa tu fecha de nacimiento (Formato: YYYY-MM-DD):");
    
    if (fechaNacimiento === null) {
        alert("Operación cancelada.");
    } else {
        let fechaNacimientoObj = new Date(fechaNacimiento);
        let fechaActual = new Date();
        let edad = fechaActual.getFullYear() - fechaNacimientoObj.getFullYear();

        // Ajustar la edad si aún no ha pasado el cumpleaños este año
        if (
            fechaNacimientoObj.getMonth() > fechaActual.getMonth() ||
            (fechaNacimientoObj.getMonth() === fechaActual.getMonth() &&
                fechaNacimientoObj.getDate() > fechaActual.getDate())
        ) {
            edad--;
        }

        if (edad >= 60) {
            alert("Eres un adulto mayor.");
        } else if (edad >= 18) {
            alert("Eres un adulto.");
        } else {
            alert("Eres menor de edad.");
        }
    }
}