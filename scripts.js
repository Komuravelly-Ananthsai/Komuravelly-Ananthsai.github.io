// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    
    // Toggle menu on button click
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('show');
        // Toggle button text between ☰ and ✕
        this.textContent = navMenu.classList.contains('show') ? '✕' : '☰';
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnButton = mobileMenuBtn.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnButton && navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
            mobileMenuBtn.textContent = '☰';
        }
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('show');
            mobileMenuBtn.textContent = '☰';
        });
    });
});