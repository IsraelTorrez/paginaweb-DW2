document.addEventListener("DOMContentLoaded", function() {
    let miBoton = document.getElementById("elBoton");
    let miParrafo = document.getElementById("elParrafo");

    miBoton.addEventListener("dblclick", () => {
        miParrafo.classList.toggle("parrafo-azul");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let miBoton2 = document.getElementById("elBoton");
    let miParrafo2 = document.getElementById("elParrafo");

    miBoton2.addEventListener("mouseover", () => {
        miParrafo2.classList.toggle("parrafo-rojo");
    });
});