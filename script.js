document.addEventListener('DOMContentLoaded', function () {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Responsive Navigation Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link (for mobile view)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function () {
            navLinks.classList.remove('active');
        });
    });
});
