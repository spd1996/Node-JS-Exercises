function submitQuiz() {
    // Define the correct answers
    const correctAnswers = {
        q1: 'A',
        q2: 'A',
        q3: 'B',
        q4: 'C',
        q5: 'C'
    };

    let score = 0;

    // Iterate over the correct answers and check the user's answers
    for (let question in correctAnswers) {
        const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (userAnswer && userAnswer.value === correctAnswers[question]) {
            score++;
        }
    }

    // Display the results
    const result = document.getElementById('result');
    result.innerHTML = `<h2>You got ${score} out of ${Object.keys(correctAnswers).length} correct!</h2>`;
}
