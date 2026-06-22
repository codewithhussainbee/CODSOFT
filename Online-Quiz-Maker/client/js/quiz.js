let currentQuizData = null;

document.addEventListener('DOMContentLoaded', () => {
    const quizId = localStorage.getItem('currentQuizId');
    
    // Standard mock questions linked to the quiz selection
    const mockQuizDatabase = {
        "quiz1": {
            title: "JavaScript Basics Quiz",
            description: "Test your fundamental knowledge of variables, loops, and functions!",
            questions: [
                { questionText: "Which keyword is used to declare a constant variable?", options: ["var", "let", "const"], correctAnswer: "const" },
                { questionText: "What does console.log() do?", options: ["Prints data to console", "Creates a popup", "Deletes a file"], correctAnswer: "Prints data to console" }
            ]
        },
        "quiz2": {
            title: "Web Development Trivia",
            description: "A quick quiz covering HTML, CSS, and general web design concepts.",
            questions: [
                { questionText: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Machine Language"], correctAnswer: "Hyper Text Markup Language" },
                { questionText: "Which CSS property changes text color?", options: ["background-color", "color", "font-style"], correctAnswer: "color" }
            ]
        }
    };

    currentQuizData = mockQuizDatabase[quizId] || mockQuizDatabase["quiz1"];

    document.getElementById('quizActiveTitle').innerText = currentQuizData.title;
    document.getElementById('quizActiveDesc').innerText = currentQuizData.description;

    const container = document.getElementById('activeQuestionsContainer');
    container.innerHTML = currentQuizData.questions.map((q, qIndex) => `
        <div class="question-block">
            <p><strong>Q${qIndex + 1}: ${q.questionText}</strong></p>
            ${q.options.map(opt => `
                <label style="font-weight:normal; display:block; margin: 5px 0;">
                    <input type="radio" name="question-${qIndex}" value="${opt}" required> ${opt}
                </label>
            `).join('')}
        </div>
    `).join('');
});

document.getElementById('quizPlayForm').addEventListener('submit', (e) => {
    e.preventDefault();
    let score = 0;

    currentQuizData.questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.correctAnswer) {
            score++;
        }
    });

    localStorage.setItem('latestScore', JSON.stringify({ score, total: currentQuizData.questions.length }));
    window.location.href = 'result.html';
});