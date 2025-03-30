// Theme Toggle with LocalStorage
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

// Check saved theme
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeSwitch.checked = true;
}

// Toggle event listener
themeSwitch.addEventListener('change', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const message = form.querySelector('textarea').value;

    if (!name || !email || !message) {
        e.preventDefault();
        alert("Please fill in all fields.");
    }
});
