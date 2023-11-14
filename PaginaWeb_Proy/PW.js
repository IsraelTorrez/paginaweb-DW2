let carrito = 0;

function agregarAlCarrito() {
    carrito++;
    alert("Producto agregado al carrito. Total en el carrito: " + carrito);
}

function validarRegistro() {
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;

    if (nombre === '' || email === '') {
        alert('Por favor, complete todos los campos del formulario.');
        return false;
    }

    return true;
}
