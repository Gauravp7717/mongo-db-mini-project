function register() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // You can perform additional validation here

    // Send data to the backend
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
    })
    .then(response => response.json())
    .then(data => {
        alert('Registration successful!');
        // Handle success (redirect, display a message, etc.)
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Registration failed. Please try again.');
        // Handle error (display an error message, log, etc.)
    });
}
