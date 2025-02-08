//initialize variables

var currentQuestion = 0;
var score = 0;
var numOfQuestions = questions.length; // Assuming questions is in an array
var numOfChoices = 3;
var questionCountElement = document.getElementById("question-count");

// funtion to display the current question and choice

function displayQuestion()
{
    var questionElement = document.getElementById("question");
    questionElement.textContent = questions [ currentQuestion].question;
    questionCountElement.textContent = currentQuestion + 1 + "of" + numOfQuestions + "questions";
}

// loop through choices and update the chpoice buttons

for (i = 0; i < numOfChoices; i==) {

    var choiceButton = document.getElementsByClassName("choice")[i];
    choiceButton.textContent = questions[currentQuestion].choices[i]; 
}

function checkAnswer(choicesIndex)
{
if (choicesIndex === questions[currentQuestion].correctAnswer){
    score++;
}
currentQuestion++;
questionCountElement.textContent = currentQuestion + 1;

}
else{
    endQuiz();

    updateScore();

}

function updateScore() {

var scoreElement = document.getElementById("score");

if(currentQuestion === "Final Score:" + score + "/" + numOfQuestions;    )

}
else {

    //display current score during quiz

    scoreElement.textContent = "Current Score: " + score;
}
console.log(score);

function restartQuiz()
{
currentQuestion = 0;
score = 0;

updateScore();

// reset questions and choices

document.getElementById("question-container").innerHTML = '<p id="question"></p>';



}


