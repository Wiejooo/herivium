// Nasłuchiwanie na zdarzenie przewijania - zmiana nav bar'u, zmiana pozycji logo
window.addEventListener('scroll', function() {
    var logoContainer = document.getElementById('logoContainer');
    var navbar = document.getElementById('navbar');

    if (window.scrollY > 50) {
        logoContainer.classList.add('scrolled');
        navbar.classList.add('scrolled');
    } else {
        logoContainer.classList.remove('scrolled');
        navbar.classList.remove('scrolled');
    }
});