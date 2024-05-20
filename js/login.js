document.addEventListener('DOMContentLoaded', () => {
    const signupNameModal = document.getElementById('signup-name-modal');
    const signupEmailModal = document.getElementById('signup-email-modal');
    const signupPasswordModal = document.getElementById('signup-password-modal');
    const signupSubmitButton = document.getElementById('signupSubmit');
    const loginEmail = document.getElementById('login-email');
    const loginPassword = document.getElementById('login-password');
    const loginSubmit = document.getElementById('login-submit');

    function checkFields() {
        signupSubmitButton.disabled = !(signupNameModal.value && signupEmailModal.value && signupPasswordModal.value);
    }

    function clearFields() {
        signupNameModal.value = '';
        signupEmailModal.value = '';
        signupPasswordModal.value = '';
    }

    function checkLoginFields() {
        loginSubmit.disabled = !(loginEmail.value && loginPassword.value);
    }

    signupNameModal.addEventListener('input', checkFields);
    signupEmailModal.addEventListener('input', checkFields);
    signupPasswordModal.addEventListener('input', checkFields);

    loginEmail.addEventListener('input', checkLoginFields);
    loginPassword.addEventListener('input', checkLoginFields);

    signupSubmitButton.addEventListener('click', () => {
        if (signupNameModal.value && signupEmailModal.value && signupPasswordModal.value) {
            alert('Usuário cadastrado com sucesso!');
            clearFields();
        }
    });

    checkFields();
    checkLoginFields();
});
