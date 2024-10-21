function checkPassword() {
    const password = document.getElementById('password').value;
    const result = document.getElementById('result');

    // Check password strength
    let strength = '';
    result.classList.remove('fade-in');  

    if (password.length < 6) {
        strength = 'Weak';
        result.className = 'weak fade-in'; 
    } else if (password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/[0-9]/) && password.match(/[\W_]/)) {
        strength = 'Strong';
        result.className = 'strong fade-in'; 
    } else {
        strength = 'Medium';
        result.className = 'medium fade-in';
    }

    // Display result
    result.textContent = `Password Strength: ${strength}`;
}
