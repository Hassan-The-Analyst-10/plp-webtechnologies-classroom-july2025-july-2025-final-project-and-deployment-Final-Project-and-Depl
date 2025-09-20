// Toggle mobile menu
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Simple form validation
const form = document.getElementById('contact-form');
if(form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
    form.reset();
  });
}
