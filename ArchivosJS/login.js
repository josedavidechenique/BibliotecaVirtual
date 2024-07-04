document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const storedUser = localStorage.getItem('user');
    const storedPassword = localStorage.getItem('password');

    if (storedUser === username && storedPassword === password) {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'index.html';
    } else {
        alert('Credenciales incorrectas, por favor intente nuevamente.');
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    localStorage.setItem('user', newUsername);
    localStorage.setItem('password', newPassword);
    alert('Usuario registrado exitosamente. Ahora puede iniciar sesión.');
    showLoginForm();
});

document.getElementById('showRegisterForm').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
});

document.getElementById('showLoginForm').addEventListener('click', function() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
});

function showLoginForm() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}