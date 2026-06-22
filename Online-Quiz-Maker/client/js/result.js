document.addEventListener('DOMContentLoaded', () => {
    const scoreData = JSON.parse(localStorage.getItem('latestScore'));
    
    if (scoreData) {
        const { score, total } = scoreData;
        document.getElementById('scoreValue').innerText = `${score} / ${total}`;
        
        const percentage = (score / total) * 100;
        const feedback = document.getElementById('percentageFeedback');
        
        if (percentage === 100) feedback.innerText = "Perfect Score! Masterful job!";
        else if (percentage >= 70) feedback.innerText = "Great work! You passed easily.";
        else feedback.innerText = "Keep practicing! Try taking it again.";
    }
});