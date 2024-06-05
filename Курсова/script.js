document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.querySelector('form[action="register_success.html"]');
    const loginForm = document.querySelector('form[action="login_success.html"]');

    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            const password = document.getElementById('password').value;
            if (password.length < 6) {
                alert('Пароль повинен містити не менше 6 символів');
                event.preventDefault();
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            alert('Успішний вхід!');
        });
    }
});