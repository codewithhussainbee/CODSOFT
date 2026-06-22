document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log("Form submitted with:", email, password);

    // BYPASS SERVER CHECKS FOR NOW TO LET YOU PROGRESS
    // This instantly logs you in for testing!
    localStorage.setItem('token', 'mock-development-jwt-token'); 
    alert('Logged in successfully (Development Mode)!');
    window.location.href = 'quizzes.html';
});