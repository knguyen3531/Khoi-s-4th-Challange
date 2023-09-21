// Define your quiz questions and answers
const questions = [
    {
        question: "What is JavaScript?",
        choices: ["A scripting language", "A programming language", "A markup language"],
        correct: 1
    },
    // Add more questions here
];

// Other global variables
let currentQuestion = 0;
let score = 0;
let timer;

// Function to start the quiz
function startQuiz() {
    // Hide the start button
    document.getElementById("start-button").style.display = "none";
    
    // Display the first question
    displayQuestion(currentQuestion);
    
    // Start the timer
    timer = setInterval(updateTimer, 1000);
}

// Function to display a question
function displayQuestion(index) {
    const questionText = document.getElementById("question-text");
    const choices = document.querySelectorAll(".choice");
    
    // Check if there are questions left
    if (index < questions.length) {
        questionText.textContent = `Question ${index + 1}: ${questions[index].question}`;
        
        // Display answer choices
        choices.forEach((choice, i) => {
            choice.textContent = questions[index].choices[i];
            choice.addEventListener("click", () => checkAnswer(i));
        });
    } else {
        // Quiz is over
        clearInterval(timer);
        alert(`Quiz over! Your score: ${score}`);
    }
}

// Function to check the selected answer
function checkAnswer(choiceIndex) {
    if (choiceIndex === questions[currentQuestion].correct) {
        // Correct answer
        score++;
    } else {
        // Incorrect answer - subtract time (adjust this as needed)
        clearInterval(timer); // Stop the timer
        timer -= 10; // Adjust the timer value
        timer = setInterval(updateTimer, 1000); // Restart the timer
    }
    
    // Move to the next question
    currentQuestion++;
    displayQuestion(currentQuestion);
}

// Function to update the timer
function updateTimer() {
    const timerDisplay = document.getElementById("timer");
    
    if (timer > 0) {
        timerDisplay.textContent = timer;
        timer--; // Decrement the timer
    } else {
        // Time's up - end the quiz
        clearInterval(timer);
        alert(`Time's up! Your score: ${score}`);
    }
}

// Event listener for starting the quiz
document.getElementById("start-button").addEventListener("click", startQuiz);

// Start the quiz when the page loads (optional)
// startQuiz();
