document.getElementById('createQuizForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const title = document.getElementById('quizTitle').value;
    const description = document.getElementById('quizDescription').value;
    const token = localStorage.getItem('token');

    if (!token) {
        alert('You must be logged in to create a quiz!');
        window.location.href = 'login.html';
        return;
    }

    // Capture first static question placeholder details
    const questionBlocks = document.querySelectorAll('.question-block');
    const questions = Array.from(questionBlocks).map(block => {
        const inputs = block.querySelectorAll('input');
        return {
            questionText: inputs[0].value,
            options: [inputs[1].value, inputs[2].value],
            correctAnswer: inputs[3].value
        };
    });

    try {
        const response = await fetch('http://localhost:5000/api/quizzes', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ title, description, questions })
        });

        if (response.ok) {
            alert('Quiz created successfully!');
            window.location.href = 'quizzes.html';
        } else {
            alert('Failed to publish quiz.');
        }
    } catch (error) {
        console.error('Error saving quiz:', error);
    }
});