//let carrito = 0;

//function agregarAlCarrito() {
  //  carrito++;
  //  alert("Producto agregado al carrito. Total en el carrito: " + carrito);
//}
// Supongamos que tienes un array para almacenar los productos seleccionados

const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
// Función para agregar un producto al carrito
function agregarAlCarrito(idProducto) {
    // Busca el producto por su ID
    const producto = productos.find(producto => producto.id === idProducto);

    // Verifica si el producto existe
    if (producto) {
        carrito.push(producto);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarCarrito();
    } else {
        console.error('Producto no encontrado');
    }
}




function actualizarCarrito() {
    const carritoElement = document.getElementById('carrito');

    // Limpia el contenido actual del carrito
    carritoElement.innerHTML = '';

    // Verifica si hay productos en el carrito
    if (carrito.length === 0) {
        carritoElement.innerHTML = '<p>El carrito está vacío</p>';
    } else {
        // Recorre los productos en el carrito y muestra la información
        carrito.forEach(producto => {
            const productoElement = document.createElement('div');
            productoElement.classList.add('producto-carrito', 'border', 'p-3', 'm-2');

            // Añade la imagen del producto
            const imagenElement = document.createElement('img');
            imagenElement.src = producto.imagen;
            imagenElement.alt = producto.nombre;
            imagenElement.classList.add('img-fluid', 'mb-3');
            productoElement.appendChild(imagenElement);

            // Añade la información del producto
            const infoElement = document.createElement('div');
            infoElement.classList.add('info-producto');
            infoElement.innerHTML = `<p>${producto.nombre} - Precio: ${producto.precio}</p>`;
            productoElement.appendChild(infoElement);

            carritoElement.appendChild(productoElement);
        });
    }
}

// Lógica de inicio de sesión (simulada)
function iniciarSesion() {
    // ... (lógica de inicio de sesión)
    // Después del inicio de sesión exitoso, puedes agregar productos al carrito
    // Ejemplo: agregarAlCarrito({ nombre: 'Producto de ejemplo', precio: 29.99, imagen: 'ruta/de/la/imagen.jpg' });

    // Redirige a la página principal
    window.location.href = 'paginaHTML.html';

    // Importante: evita que el formulario se envíe
    return false;
}

// Verifica si hay un carrito almacenado en el almacenamiento local al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    // Actualiza la visualización del carrito al cargar la página
    actualizarCarrito();
});

const productos = [
    { id: 1, nombre: 'Play Station 4 Pro', precio: 3000.00, imagen: 'https://www.compraderas.com.bo/wp-content/uploads/2017/03/Playstation-4-Pro.jpg'},
    { id: 2, nombre: 'Air Jordan 1 Mid', precio: 3119.00, imagen:'https://images.vegnonveg.com/resized/700X573/9624/air-jordan-1-mid-whitegym-red-black_1-64a7d89496d46.jpg'},
    { id: 3, nombre: 'Air Jordan 1 Mid', precio: 3119.00 },
    { id: 4, nombre: 'Air Jordan 1 Mid', precio: 3119.00 },
    // Agrega más productos según sea necesario
];


// Verifica si hay un carrito almacenado en el almacenamiento local al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const carritoAlmacenado = localStorage.getItem('carrito');
    if (carritoAlmacenado) {
        // Convierte el carrito almacenado de cadena JSON a un array
        carrito = JSON.parse(carritoAlmacenado);
    }

    // Actualiza la visualización del carrito al cargar la página
    actualizarCarrito();
});

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