let carrito = 0;

function agregarAlCarrito() {
    carrito++;
    alert("Producto agregado al carrito. Total en el carrito: " + carrito);
}

function validarRegistro() {
    // Obtenemos los valores de los campos
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;

    // Mostramos una confirmación antes de registrar
    var confirmacion = confirm('¿Estás seguro de registrarte con los siguientes datos?\nNombre: ' + nombre + '\nEmail: ' + email);

    // Si el usuario confirma, continuamos con el registro
    if (confirmacion) {
        alert('¡Registro exitoso!\nNombre: ' + nombre + '\nEmail: ' + email);
        return true; // Esto enviará el formulario
    } else {
        alert('Registro cancelado.');
        return false; // Esto evita que el formulario se envíe
    }
}
function buscar() {
    var searchTerm = document.getElementById('search-input').value.toLowerCase();
    var elements = document.querySelectorAll('.searchable');
    var resultados = 0;

    elements.forEach(function(element) {
        var content = element.textContent.toLowerCase();

        if (content.includes(searchTerm)) {
            // Muestra el elemento que contiene la palabra buscada
            element.style.display = 'block';
            resultados++;
        } else {
            // Oculta los elementos que no coinciden con la búsqueda
            element.style.display = 'none';
        }
    });

    if (resultados === 0) {
        alert('No se encontraron resultados para: ' + searchTerm);
    }
}