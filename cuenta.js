const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

// Añade el evento al link "Registrarse"
registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
});

// Añade el evento al link "Ingresar"
loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});