// Validation simple du formulaire de connexion
function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Conditions de validation
    if (username === 'admin' && password === 'password') {
        errorMessage.style.color = 'green';
        errorMessage.textContent = 'Login successful!';
        return false; // Pour empêcher la redirection après soumission
    } else {
        errorMessage.textContent = 'Invalid username or password!';
        return false; // Pour empêcher la soumission du formulaire
    }
}