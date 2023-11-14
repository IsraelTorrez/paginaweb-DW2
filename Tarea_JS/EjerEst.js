function determinarEstado() {
    let calificacion = prompt("Ingresa la calificación del estudiante:");

    if (calificacion === null) {
        alert("Operación cancelada.");
    } else {
        calificacion = parseFloat(calificacion);

        if (!isNaN(calificacion)) {
            if (calificacion < 0 || calificacion > 100) {
                alert("Por favor, ingresa una calificación válida entre 0 y 100.");
            } else {
                if (calificacion < 51) {
                    alert("Estado: Reprobado");
                } else if (calificacion < 80) {
                    alert("Estado: Aprobado");
                } else if (calificacion < 90) {
                    alert("Estado: Excelente");
                } else {
                    alert("Estado: Becado");
                }
            }
        } else {
            alert("Por favor, ingresa una calificación válida.");
        }
    }
}