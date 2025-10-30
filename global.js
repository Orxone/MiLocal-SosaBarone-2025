let burgerBtn = document.getElementById('burger-btn');
let navbar = document.getElementById('nav-menu');

burgerBtn.onclick = () => {
    navbar.classList.toggle('active');
};

//Cierra el menú si el usuario scrollea 
window.onscroll = () => {
    navbar.classList.remove('active');
};