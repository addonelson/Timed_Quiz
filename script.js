// var body = document.body;
// var button = document.getElementById('button');
// var timerEl = document.getElementById('countdown');
// var mainEl = document.getElementById('main');
// var choicesEl = document.getElementById('choices');
// var buttonEl = document.getElementById('myBtn');
// var forwardEl = document.getElementById('forward');
// var tutorialEl = document.getElementById('tutorial');
// var aButtonEl = document.getElementById('a');
// var bButtonEl = document.getElementById('b');
// var cButtonEl = document.getElementById('c');
// var dButtonEl = document.getElementById('d');
// var questionLinkHTML = document.getElementById('questionLinkHTML');

// aButtonEl.setAttribute("style", "display:none");
// bButtonEl.setAttribute("style", "display:none");
// cButtonEl.setAttribute("style", "display:none");
// dButtonEl.setAttribute("style", "display:none");

// // var firstQuestion = "Try to answer the following code-related questions within the time limit.</br> Keep in mind that incorrect answers will penalize your score.time by ten seconds!"
// var currentQuestion = 0;
// var quizQuestions = [{
//     questions: "Commonly used data types DO NOT include:",
//     choiceA: "strings",
//     choiceB: "booleans",
//     choiceC: "alerts",
//     choiceD: "numbers",
//     correctAnswer: "c"
// },
// {
//     questions: "The condition in an if/else statement is enclosed within ______",
//     choiceA: "quotes",
//     choiceB: "curly brackets",
//     choiceC: "parentheses",
//     choiceD: "square brackets",
//     correctAnswer: "b"
// },
// {
//     questions: "Arrays in JavaScript can be used to store _______.",
//     choiceA: "numbers and strings",
//     choiceB: "other arrays",
//     choiceC: "booleans",
//     choiceD: "all of the above",
//     correctAnswer: "d"
// },
// {
//     questions: "String values must be enclosed within ____ when being assigned to variables",
//     choiceA: "commas",
//     choiceB: "curley brackets",
//     choiceC: "quotes",
//     choiceD: "parentheses",
//     correctAnswer: "c"
// },
// {
//     questions: "A very useful tool used during development and debugging for printing content to the debuggger is:",
//     choiceA: "JavaScript",
//     choiceB: "terminal/bash",
//     choiceC: "for loops",
//     choiceD: "console.log",
//     correctAnswer: "d"},
// ];

// // This function cycles through the object array containing the quiz questions to generate the questions and answers.



// // // || li6 || li12 || li15 || li20
// // var indexOfCurrentQuestion = 0;



// // theAnswers[indexOfCurrentQuestion];



// // function countdown() {
// //     var timeLeft = 100;

// //     var timeInterval = setInterval(function () {
// //         if (timeLeft > 1){
// //             timerEL.textContent = timeLeft;
// //             timeLeft--;
// //         }
// //         else if(timeLeft === 0){
// //             timerEl.textContent = "Your time is up! Better luck next time."
// //         }
// //         clearInterval(timeInterval);

// //     },1000);
// // }
// document.getElementById("myBtn").addEventListener("click", function(event){
//     event.stopPropagation();
//     buttonEl.textContent = " ";
//     tutorialEl.textContent = " ";
//     buttonEl.setAttribute("style", "display:none");
//     tutorialEl.setAttribute("style", "display:none");

//     // aButtonEl.setAttribute("style", "display:inline-block");
//     // bButtonEl.setAttribute("style", "display:inline-block");
//     // cButtonEl.setAttribute("style", "display:inline-block");
//     // dButtonEl.setAttribute("style", "display:inline-block");
//     quiz();


//     }
// )

// // function generateQuizQuestion(){    
// //     if (quizQuestions.length === quizQuestion){
// //         return showScore();
// //     } 
// //     for (let i = 0; i < quizQuestions.length; i++) {
// //             currentQuestion++;  

// //     mainEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
// //     abuttonEl.innerHTML = currentQuestion.choiceA;
// //     bbuttonEl.innerHTML = currentQuestion.choiceB;
// //     cbuttonEl.innerHTML = currentQuestion.choiceC;
// //     dbuttonEl.innerHTML = currentQuestion.choiceD;
// //     }

// // };

// function quiz(currentQuestion) {
//     if (currentQuestion < quizQuestions.length ) {
//         questionLinkHTML.textContent = quizQuestions[currentQuestion].questions
//         aButtonEl.textContent = quizQuestions[currentQuestion].choiceA
//         bButtonEl.textContent = quizQuestions[currentQuestion].choiceB
//         cButtonEl.textContent = quizQuestions[currentQuestion].choiceC
//         dButtonEl.textContent = quizQuestions[currentQuestion].choiceD
//     }
//     }
//     console.log(currentQuestion);
// goes to next question no matter what button is pressed
// answerButtons.addEventListener("click", answerIdentiy)
// goes to next question no matter what button is pressed
//     answerButtons.addEventListener("click", answerIdentiy)
// document.getElementById("forward").addEventListener("click", function(event){
//     event.stopPropagation();
//     mainEl.textContent = question[1];
//     choicesEl.textContent = answers2;

// }
// )

// document.getElementById("forward").addEventListener("click", function(event){
//     event.stopPropagation();
//     mainEl.textContent = question[2];
//     choicesEl.textContent = answers3;
// }
// )


// document.getElementById("forward").addEventListener("click", function(event){
//     event.stopPropagation();
//     mainEl.textContent = question[3];
//     choicesEl.textContent = answers4;
// }
// )
// document.getElementById("forward").addEventListener("click", function(event){
//     event.stopPropagation();
//     mainEl.textContent = question[4];
//     choicesEl.textContent = answers5;
// }
// )

// countdown();

// var html = "";
// for (var i =0; i < answers1.length; i++) {
//     html += "<li>" + answers[i]+ "</li>";
// }
// document.getElementById("answers").innerHTML = html;​

/** 
 * Criteria 
 */

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

/** 
 * DEFINE VARIABLES 
 */

// questions defined for use when quiz starts
const questions = [{
        question: "Commonly used data types DO NOT include:",
        choices: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
        answer: "c. alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed within ______",
        choices: ["a. quotes", "b. curly brackets", "c. parentheses", "d. square brackets"],
        answer: "b. curley brackets"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        choices: ["a. numbers and strings", "b. other arrays", "c. booleans", "d. all of the above"],
        answer: "d. all of the above"
    },
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
        answer: "c. alerts"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables",
        choices: ["a. commas", "b. curly brackets", "c. quotes", "d. parentheses"],
        answer: "c. quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debuggger is:",
        choices: ["a. JavaScript", "b. terminal/bash", "c. for loops", "d. console.log"],
        answer: "d. console.log"
    },

];

// globally declared variables
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesUp");

var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-button");

var questionDiv = document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");
var answerCheck = document.getElementById("answerCheck");

var summary = document.getElementById("summary");
var submitInitialBtn = document.getElementById("submitInitialBtn");
var initialInput = document.getElementById("initialInput");
var everything = document.getElementById("everything");

var highScoreSection = document.getElementById("highScoreSection");
var finalScore = document.getElementById("finalScore");

var goBackBtn = document.getElementById("goBackBtn");
var clearHighScoreBtn = document.getElementById("clearHighScoreBtn");
var viewHighScore = document.getElementById("viewHighScore");
var listOfHighScores = document.getElementById("listOfHighScores");

// declared variables set to 0
var correctAns = 0;
var questionNum = 0;
var scoreResult;
var questionIndex = 0;

/**
 * FUNCTIONS
 */

//timer starts once the user has clicked the start button
// var totalTime = 51;

function newQuiz() {
    questionIndex = 0;
    totalTime = 50;
    timeLeft.textContent = totalTime;
    initialInput.textContent = "";

    startDiv.style.display = "none";
    questionDiv.style.display = "block";
    timer.style.display = "block";
    timesUp.style.display = "none";

    var startTimer = setInterval(function () {
        totalTime--;
        timeLeft.textContent = totalTime;
        if (totalTime <= 0) {
            clearInterval(startTimer);
            if (questionIndex < questions.length - 1) {
                gameOver();
            }
        }
    }, 1000);

    showQuiz();
};

// then presented with questions and choices
function showQuiz() {
    nextQuestion();
}

function nextQuestion() {
    questionTitle.textContent = questions[questionIndex].question;
    choiceA.textContent = questions[questionIndex].choices[0];
    choiceB.textContent = questions[questionIndex].choices[1];
    choiceC.textContent = questions[questionIndex].choices[2];
    choiceD.textContent = questions[questionIndex].choices[3];
}

// after question is answered, show if correct or wrong
function checkAnswer(answer) {

    var lineBreak = document.getElementById("lineBreak");
    lineBreak.style.display = "block";
    answerCheck.style.display = "block";

    if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
        // correct answer, add 1 score to final score
        correctAns++;
        // console.log(correctAns);
        answerCheck.textContent = "Correct!";
    } else {
        // if you guess the wrong answer, 10 seconds from timer
        totalTime -= 10;
        timeLeft.textContent = totalTime;
        answerCheck.textContent = "Wrong! The correct answer is: " + questions[questionIndex].answer;
    }

    questionIndex++;
    // repeat with the rest of questions 
    if (questionIndex < questions.length) {
        nextQuestion();
    } else {
        // if no more question, run game over function
        gameOver();
    }
}

function chooseA() {
    checkAnswer(0);
}

function chooseB() {
    checkAnswer(1);
}

function chooseC() {
    checkAnswer(2);
}

function chooseD() {
    checkAnswer(3);
}

// when all questions are answered or timer reaches 0, game over
function gameOver() {
    summary.style.display = "block";
    questionDiv.style.display = "none";
    startDiv.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "block";

    // show final score
    finalScore.textContent = correctAns;
}

// enter initial and store highscore in local storage
function storeHighScores(event) {
    event.preventDefault();

    // stop function if the initial input is blank
    if (initialInput.value === "") {
        alert("Please enter your initials!");
        return;
    }

    startDiv.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "none";
    summary.style.display = "none";
    highScoreSection.style.display = "block";

    // store scores into local storage
    var savedHighScores = localStorage.getItem("high scores");
    var scoresArray;

    if (savedHighScores === null) {
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(savedHighScores)
    }

    var userScore = {
        initials: initialInput.value,
        score: finalScore.textContent
    };

    console.log(userScore);
    scoresArray.push(userScore);

    // stringify array in order to store in local
    var scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem("high scores", scoresArrayString);

    // show current highscores, starts this function 
    showHighScores();
}

// function to show high scores
var i = 0;

function showHighScores() {

    startDiv.style.display = "none";
    timer.style.display = "none";
    questionDiv.style.display = "none";
    timesUp.style.display = "none";
    summary.style.display = "none";
    highScoreSection.style.display = "block";

    var savedHighScores = localStorage.getItem("high scores");

    // check if there is any in local storage
    if (savedHighScores === null) {
        return;
    }
    console.log(savedHighScores);

    var storedHighScores = JSON.parse(savedHighScores);

    for (; i < storedHighScores.length; i++) {
        var eachNewHighScore = document.createElement("p");
        eachNewHighScore.innerHTML = storedHighScores[i].initials + ": " + storedHighScores[i].score;
        listOfHighScores.appendChild(eachNewHighScore);
    }
}

//Event listeners 

startQuizBtn.addEventListener("click", newQuiz);
choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);

submitInitialBtn.addEventListener("click", function (event) {
    storeHighScores(event);
});

viewHighScore.addEventListener("click", function (event) {
    showHighScores(event);
});

goBackBtn.addEventListener("click", function () {
    startDiv.style.display = "block";
    highScoreSection.style.display = "none";
});

clearHighScoreBtn.addEventListener("click", function () {
    window.localStorage.removeItem("high scores");
    listOfHighScores.innerHTML = "High Scores Cleared!";
    listOfHighScores.setAttribute("style", "font-family: 'Archivo', sans-serif; font-style: italic;")
});