var questions = [
    {
        question: "Which web-based language modulates dynamic behavior on most websites?",
        choices: ["C++", "JavaScript", "Java", "Ruby"],
        answer: "JavaScript"
    },
    {
        question: "Which option is true for the Number data type?",
        choices: ["Numbers are a primitive data type", "false is a valid value for the Number data type", "'555' can be considered a valid value for the Number data type", "The Number data type includes all string values"],
        answer: "Numbers are a primitive data type"
    },
    {
        question: "Eliminate the WRONG option from the given choices.",
        choices: [
            "The value returned by Math.floor(5.8) is 5",
            "Math.floor() may return an integer less than the given number",
            "The value returned by Math.floor(5.8) is predictable",
            "The value returned by Math.floor(5.8) is 6"],
        answer: "The value returned by Math.floor(5.8) is 6"
    },
    {
        question:
            "True or False: null is a primitive data type. It represents the intentional absence of value. In code, it is represented as null",
        choices: ["True", "False"],
        answer: "True"
    },
    {
        question:
            "Select the correct option that properly expresses the significance of the given JavaScript string method .trim().",
        choices: ["It removes whitespace from both sides of a string", "It transforms the whole string to lowercase", "It removes trailing whitespace from a string", "It removes the whitespace from the middle of a string"],
        answer: "It removes whitespace from both sides of a string"
    },
    {
        question: "Code block: let numOne = 65; let numTwo  = 35; let numThree = 0; // numThree = numOne + numTwo. What will be the value of the variable numThree after the code block is executed?",
        choices: ["65", "35", "100", "0"],
        answer: "0"
    },
    {
        question: "What will the following code print to the console?",
        choices: ["0", "2", "1.5", "1"],
        answer: "1"
    },
    {
        question: "Which three languages power most websites?",
        choices: ["Ruby, Java, Python", "SQL, C, Perl", "HTML, CSS, JavaScript"],
        answer: "HTML, CSS, JavaScript"
    },
    {
        question: "The Date library contains several methods that can be used in the JavaScript code. Which line of code properly calls the method now() of that library?",
        choices: ["now()", "Date.now()", "Date().now", "Date.now"],
        answer: "Date.now()"
    }
];

// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 1;
var timerId;

// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

// sound effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

function startQuiz() {
    // hide start screen
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");

    // un-hide questions section
    questionsEl.removeAttribute("class");

    // start timer
    timerId = setInterval(clockTick, 1000);

    // show starting time
    timerEl.textContent = time;

    getQuestion();
}

function getQuestion() {
    // get current question object from array
    var currentQuestion = questions[currentQuestionIndex];

    // update title with current question
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.question;

    // clear out any old question choices
    choicesEl.innerHTML = "";

    // loop over choices
    currentQuestion.choices.forEach(function (choice, i) {
        // create new button for each choice
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", choice);

        choiceNode.textContent = i + 1 + ". " + choice;

        // attach click event listener to each choice
        choiceNode.onclick = questionClick;

        // display on the page
        choicesEl.appendChild(choiceNode);
    });
}

function questionClick() {
    // check if user guessed wrong
    if (this.value !== questions[currentQuestionIndex].answer) {
        // penalize time
        time -= 15;

        if (time < 0) {
            time = 0;
        }

        // display new time on page
        timerEl.textContent = time;

        // play "wrong" sound effect
        sfxWrong.play();

        feedbackEl.textContent = "Wrong!";
    } else {
        // play "right" sound effect
        sfxRight.play();

        feedbackEl.textContent = "Correct!";
    }

    // flash right/wrong feedback on page for half a second
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function () {
        feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);

    // move to next question
    currentQuestionIndex++;

    // check if we've run out of questions
    if (currentQuestionIndex === questions.length) {
        quizEnd();
    } else {
        getQuestion();
    }
}

function quizEnd() {
    // stop timer
    clearInterval(timerId);

    // show end screen
    var endScreenEl = document.getElementById("end-screen");
    endScreenEl.removeAttribute("class");

    // show final score
    var finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = time;

    // hide questions section
    questionsEl.setAttribute("class", "hide");
}

function clockTick() {
    // update time
    time--;
    timerEl.textContent = time;

    // check if user ran out of time
    if (time <= 0) {
        quizEnd();
    }
}

function saveHighscore() {
    // get value of input box
    var initials = initialsEl.value.trim();

    // make sure value wasn't empty
    if (initials !== "") {
        // get saved scores from localstorage, or if not any, set to empty array
        var highscores =
            JSON.parse(window.localStorage.getItem("highscores")) || [];

        // format new score object for current user
        var newScore = {
            score: time,
            initials: initials
        };

        // save to localstorage
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));

        // redirect to next page
        window.location.href = "highscores.html";
    }
}

function checkForEnter(event) {
    // "13" represents the enter key
    if (event.key === "Enter") {
        saveHighscore();
    }
}

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;

















// ? eventlistener on click "start"
// Instructions disappear and Questions appear
// Timer starts
// Set text content of timer on DOM
// call getQuestion function

// Get random question: answer pair from array based on current question index
// Update the DOM with the current question
// Clear any old question choices
// Update the DOM with the current answer choices: use a for loop that goes through the answer choices
// Creates a button
//Set a class attribute of "choice"
//set a value attribute of choice
// Set text content of button to be choice
// Append button to the DOM

//Choose Answer
// if choice value is incorrect
		// subtract seconds from the timer
		// display new time to page
		// let player know they are incorrect
	// else 
		// let the player know they're correct

	// check if we've run out of questions
		// yes - end game
		// no - get next question

// End Game
// Once timer reaches zero, end quiz
// Store data and display score
// Stop timer
// Option to save score 
// Info saved to local storage
// Save score directs to highscore page



