document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('toggle-form');
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    function updateForms() {
        if (window.innerWidth <= 768) {
            loginForm.style.display = 'block';
            signupForm.style.display = 'none';
            toggleButton.textContent = 'Cadastrar';
            toggleButton.onclick = function() {
                if (signupForm.style.display === 'none') {
                    signupForm.style.display = 'block';
                    loginForm.style.display = 'none';
                    toggleButton.textContent = 'Entrar';
                } else {
                    signupForm.style.display = 'none';
                    loginForm.style.display = 'block';
                    toggleButton.textContent = 'Cadastrar';
                }
            };
        } else {
            loginForm.style.display = 'block';
            signupForm.style.display = 'block';
        }
    }

    updateForms();
    window.addEventListener('resize', updateForms);
});
