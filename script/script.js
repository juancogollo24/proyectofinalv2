function showRegisterForm() {
    document.getElementById('loginForm');
    document.getElementById('registerForm');
    alert('Registro completado')
    window.location.href = '../html/index.html';
}

const userForm = document.getElementById('userForm');

userForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Almacenar los datos en localStorage
    localStorage.setItem(username, JSON.stringify({
        username: username,
        password: password
    }));

    // Redirigir al panel de usuario
    window.location.href = '../html/panel.html';
});
function cerrarSesion() {
    // Eliminar los datos del usuario del localStorage
    localStorage.removeItem(username);

    // Redirigir a la página de inicio
    window.location.href = '../html/index.html';
}