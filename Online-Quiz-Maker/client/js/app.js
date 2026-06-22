document.addEventListener('DOMContentLoaded', () => {
    const quizList = document.getElementById('quizList');
    
    // Static mock data so you can test the application instantly
    const mockQuizzes = [
        {
            _id: "quiz1",
            title: "JavaScript Basics Quiz",
            description: "Test your fundamental knowledge of variables, loops, and functions!"
        },
        {
            _id: "quiz2",
            title: "Web Development Trivia",
            description: "A quick quiz covering HTML, CSS, and general web design concepts."
        }
    ];

    // Render the quizzes on screen
    quizList.innerHTML = mockQuizzes.map(quiz => `
        <div class="question-block">
            <h3>${quiz.title}</h3>
            <p>${quiz.description}</p>
            <button class="btn" onclick="startQuiz('${quiz._id}')">Take Quiz</button>
        </div>
    `).join('');
});

function startQuiz(quizId) {
    localStorage.setItem('currentQuizId', quizId);
    window.location.href = 'quiz.html';
}