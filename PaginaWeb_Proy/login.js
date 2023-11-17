function iniciarSesion() {
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;

    // Aquí deberías validar las credenciales contra un servidor o base de datos
    // Por ahora, haré una verificación básica
    if (email === 'isacmariaca@gmail.com' && password === '712310') {
        localStorage.setItem('userEmail', email);
        alert('Inicio de sesión exitoso!');
        
       
      localStorage.setItem('userEmail', email);
        
        // Redirige a la página principal después de iniciar sesión
        window.location.href = 'paginaHTML.html';
        return false;
    } else {
        alert('Error en las credenciales. Inténtalo de nuevo.');
    return false;
    }
}
