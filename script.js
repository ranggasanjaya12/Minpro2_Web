const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
});

document.addEventListener('DOMContentLoaded', function(){
    var typed = new Typed('.header-text h1', {
        strings: ["Web-Develoment", "Jasa-Joki","Trader"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });
});