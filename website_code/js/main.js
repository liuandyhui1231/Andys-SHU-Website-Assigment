// Creatomg a function to toggle the navigation menu
document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    const body = document.body;

    // Toggle navigation menu and blur effect
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        body.classList.toggle("blurred");
    });

    // Close menu when clicking outside
    window.addEventListener("click", (event) => {
        if (!navMenu.contains(event.target) && event.target !== navToggle) {
            navMenu.classList.remove("active");
            body.classList.remove("blurred");
        }
    });
});


// Homepage Headline animation
window.addEventListener('load', () => {
    const headerElements = document.querySelectorAll('.header-animated');
    headerElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('show');
        }, index * 500);
    });
});