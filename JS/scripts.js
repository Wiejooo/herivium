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

/**
 * Animacje sekcji chust - NIE DZIAŁA, KOD JEST W HTML
 */
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show')
//         } else {
//             entry.target.classList.remove('show')
//         }
//     })
// })

// const hiddenElements = document.querySelectorAll('.hidden')
// hiddenElements.forEach((el) => observer.observe(el))
