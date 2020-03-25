// Create array composed of different objects representing possible questions, choices, and answers (key value pairs)
// create array for possible choices
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

// Set question index (array above) to zero to begin with first question in array
// Set amount of time on timer = 10 (seconds allowed per question) multiplied by length of array (total number of questions) so that total will be the total time on the timer
// Create variable 
var currentQuestionIndex = 0;
var time = questions.length * 10;
var timerId;


var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var assessEl = document.getElementById("assess");

/* Start quiz so that when "start" button is clicked:
1. the home page is hidden
2. the questions page is displayed
3. the timer starts at 90 sec and counts down per one second
4. a question is displayed to the user with answer choices
*/

function startQuiz() {
    // Hide home page by setting attribute to "hide" (will apply CSS so display is "none")
    var homeScreenEl = document.getElementById("homeScreen");
    homeScreenEl.setAttribute("class", "hide");

    // Display the questions page by removing the "display: none" class attribute (set to display: "none" in CSS for when index page is first opened)
    questionsEl.removeAttribute("class");

    // Start the timer at 90 seconds and counts down (-1 second intervals)
    timerId = setInterval(clockTick, 1000);

    // Display the timer to the user
    timerEl.textContent = time;

    // Call on function to display question from questions array 
    getQuestion();
}

function getQuestion() {
    // Retrieve question object from array
    var currentQuestion = questions[currentQuestionIndex];

    // Update text content of questions page with current question
    var titleEl = document.getElementById("questionTitle");
    titleEl.textContent = currentQuestion.question;

    // Clear previous question choices by setting innerHTML equal to empty string
    choicesEl.innerHTML = "";

    // Create a loop to select answer choices
    currentQuestion.choices.forEach(function (choice, i) {
        // Create a new button for each possible choice
        var choiceButton = document.createElement("button");
        choiceButton.setAttribute("class", "choice");
        choiceButton.setAttribute("value", choice);

        choiceButton.textContent = i + 1 + ". " + choice;

        // attach click event listener to each choice
        choiceButton.onclick = questionClick;

        // display on the page
        choicesEl.appendChild(choiceButton);
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

        assessEl.textContent = "Incorrect!";
    } else {


        assessEl.textContent = "You got it!";
    }

    // Display correct/incorrect assessment of user choice on page for .5 seconds
    assessEl.setAttribute("class", "assess");
    setTimeout(function () {
        assessEl.setAttribute("class", "assess hide");
    }, 1000);

    // Change to next question
    currentQuestionIndex++;

    // Verify that there are questions remaining
    if (currentQuestionIndex === questions.length) {
        quizEnd();
    } else {
        getQuestion();
    }
}

// When timer reaches zero or all questions have been answered
function quizEnd() {
    // Timer stops (time left does not go past zero)
    clearInterval(timerId);

    // Show "completed" screen by removing display attribute of "none"
    var doneScreenEl = document.getElementById("doneScreen");
    doneScreenEl.removeAttribute("class");

    // Display user final score
    var finalScoreEl = document.getElementById("finalScore");
    finalScoreEl.textContent = time;

    // Questions page should not be visible so re-assign display: none to questions page
    questionsEl.setAttribute("class", "hide");
}

function clockTick() {
    // Must update the time (decrements)
    time--;
    timerEl.textContent = time;

    // Check if the user has no time remaining; if time remaining = 0 then quiz ends. Call function
    if (time <= 0) {
        quizEnd();
    }
}

function saveHighScore() {
    // Retrieve user input and trim any whitespace from both sides
    var initials = initialsEl.value.trim();

    // Verify user input (value) is not empty/null
    if (initials !== "") {
        // Retrieve saved scores from localstorage. If localstorage is empty then create an empty array
        var highscores =
            JSON.parse(window.localStorage.getItem("highscores")) || [];

        // Re-format the object of "new score" for user
        var newScore = {
            score: time,
            initials: initials
        };

        // Save new score by using "push" to add to high scores in localstorage. Must stringify to create array
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));

        // Then redirect user to the high scores page
        window.location.href = "./highscore.html";
    }
}

// When "Enter" is clicked high score is saved (call on HighScore function)
function checkEnter(event) {
    // The enter key is represented by '13'
    if (event.key === "Enter") {
        saveHighScore();
    }
}

// When user clicks submit button, initials and score saved locally
submitBtn.onclick = saveHighScore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

// When user releases the keys (types initials) then presses "enter" key, the user data (initials and score) will be saved locally 
initialsEl.onkeyup = checkEnter;
