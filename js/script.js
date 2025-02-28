// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Select the menu toggle button and the navigation links container
    const menuToggle = document.querySelector('#menu-toggle');
    const navLinks = document.querySelector('nav ul');

    // Add an event listener to the menu toggle button
    menuToggle.addEventListener('click', function() {
        // Toggle the 'active' class on the navigation links to show/hide the menu
        navLinks.classList.toggle('active');
    });
});
