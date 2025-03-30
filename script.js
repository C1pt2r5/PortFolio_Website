// Theme Toggle with LocalStorage
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;
const projectCards = document.querySelectorAll('.project-card');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const skillCards = document.querySelectorAll('.skill-card');
const prevSkillBtn = document.getElementById('prev-skill-btn');
const nextSkillBtn = document.getElementById('next-skill-btn');
const notebookFrame = document.querySelector('.notebook-frame');


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


let currentIndex = 0;

// Show the first project initially
function showProject(index) {
    projectCards.forEach((card, i) => {
        card.classList.remove('active');
        if (i === index) {
            card.classList.add('active');
        }
    });
}

// Initial display
showProject(currentIndex);

// Next Button
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % projectCards.length;
    showProject(currentIndex);
});

// Previous Button
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + projectCards.length) % projectCards.length;
    showProject(currentIndex);
});


let skillIndex = 0;

// Show the first skill initially
function showSkill(index) {
    skillCards.forEach((card, i) => {
        card.classList.remove('active');
        if (i === index) {
            card.classList.add('active');
        }
    });
}

// Initial display
function autoPlaySkills() {
    skillIndex = (skillIndex + 1) % skillCards.length;
    showSkill(skillIndex);
}

// Auto-play interval
let skillInterval = setInterval(autoPlaySkills, 4000); 

// Add navigation button functionality
nextSkillBtn.addEventListener('click', () => {
    clearInterval(skillInterval);  // Reset interval on manual navigation
    skillIndex = (skillIndex + 1) % skillCards.length;
    showSkill(skillIndex);
    skillInterval = setInterval(autoPlaySkills, 4000);
});

prevSkillBtn.addEventListener('click', () => {
    clearInterval(skillInterval);  // Reset interval on manual navigation
    skillIndex = (skillIndex - 1 + skillCards.length) % skillCards.length;
    showSkill(skillIndex);
    skillInterval = setInterval(autoPlaySkills, 4000);
});

notebookFrame.addEventListener('mouseenter', () => {
    clearInterval(projectInterval);
    clearInterval(skillInterval);
});

notebookFrame.addEventListener('mouseleave', () => {
    projectInterval = setInterval(autoPlayProjects, 5000);
    skillInterval = setInterval(autoPlaySkills, 4000);
});

