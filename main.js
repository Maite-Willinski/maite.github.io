
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    body.classList.add(savedTheme);
    updateButtonText();
}

themeToggle.addEventListener('click', (event) => {
    event.preventDefault();
    body.classList.toggle('dark-theme');
    const currentTheme = body.classList.contains('dark-theme') ? 'dark-theme' : '';
    localStorage.setItem('theme', currentTheme);
    updateButtonText();
});

function updateButtonText() {
    if (body.classList.contains('dark-theme')) {
        themeToggle.textContent = 'Cambiar a modo claro';
    } else {
        themeToggle.textContent = 'Cambiar a modo oscuro';
    }
}

window.addEventListener('load', () => {
    if (savedTheme === 'dark-theme') {
        body.classList.add('dark-theme');
    }
    updateButtonText();
});

const form = document.getElementById('profile-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm(event) {
    let isValid = true;

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'El nombre es obligatorio.';
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

    if (emailInput.value.trim() === '') {
        emailError.textContent = 'El correo electrónico es obligatorio.';
        emailError.style.display = 'block';
        isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = 'El correo electrónico no es válido.';
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    if (messageInput.value.trim() === '') {
        messageError.textContent = 'El mensaje es obligatorio.';
        messageError.style.display = 'block';
        isValid = false;
    } else {
        messageError.style.display = 'none';
    }

    if (!isValid) {
        event.preventDefault();
    }
}

form.addEventListener('submit', validateForm);
