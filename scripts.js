// scripts.js

    let btn = document.querySelector('#btn')
    let sidebar = document.querySelector('.sidebar')
    let mainContent = document.querySelector('.main-content');

    btn.onclick = function () {
        sidebar.classList.toggle('active')
        mainContent.classList.toggle('active');
    }

 document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const email = document.getElementById('email');
    const confirmEmail = document.getElementById('confirm-email');
    const emailError = document.getElementById('email-error');
    const confirmEmailError = document.getElementById('confirm-email-error');

    form.addEventListener('submit', function (event) {
        let valid = true;

        if (email.value !== confirmEmail.value) {
            emailError.textContent = 'Email addresses do not match.';
            confirmEmailError.textContent = 'Email addresses do not match.';
            valid = false;
        } else {
            emailError.textContent = '';
            confirmEmailError.textContent = '';
        }

        if (!valid) {
            event.preventDefault();
        }
    });
});