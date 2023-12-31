// Define your quiz questions and answers
const questions = [
  {
      question: "What is JavaScript?",
      choices: ["A scripting language", "A programming language", "A markup language"],
      correct: 1
  },
  {
      question: "What is HTML?",
      choices: ["Hypertext Markup Language", "High-Level Text Language", "Hyper Transfer Markup Language"],
      correct: 0
  },
  {
      question: "What does CSS stand for?",
      choices: ["Cascading Style Sheet", "Computer Style Sheet", "Creative Style Sheet"],
      correct: 0
  },
  {
      question: "What is the capital of France?",
      choices: ["Berlin", "Madrid", "Paris"],
      correct: 2
  }
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
      
      // Reset the timer to 15 seconds for each question
      resetTimer();
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
  }
  
  // Move to the next question
  currentQuestion++;
  displayQuestion(currentQuestion);
}

// Function to update the timer
function updateTimer() {
  const timerDisplay = document.getElementById("timer");
  let remainingTime = parseInt(timerDisplay.textContent);
  
  if (remainingTime > 0) {
      remainingTime--;
      timerDisplay.textContent = remainingTime;
  } else {
      // Time's up for the current question - reset the quiz
      clearInterval(timer);
      alert("Time's up for this question!");
      displayQuestion(currentQuestion);
  }
}

// Function to reset the timer to 15 seconds
function resetTimer() {
  const timerDisplay = document.getElementById("timer");
  timerDisplay.textContent = 15;
}

// Event listener for starting the quiz
document.getElementById("start-button").addEventListener("click", startQuiz);

// Start the quiz when the page loads (optional)
// startQuiz();
