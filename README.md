# Code-Quiz
Assignment 3: Web APIs 

# Requirements

This assignment doesn't give you any starter code, so let's dive into what we'll need for the acceptance criteria from the ReadMe.

    GIVEN I am taking a coding quiz
    WHEN I click the start button
    THEN a timer starts and I am presented with a question
    
    WHEN I answer a question
    THEN I am presented with another question
    
    WHEN I answer a question incorrectly
    THEN time is subtracted from the clock
    
    WHEN all questions are answered or the timer reaches 0
    THEN the game is over
    
    WHEN the game is over
    THEN I can save my initials and score

### Files

1. A Home page to play the game (e.g. index.html)
2. A High Score page (e.g. highscore.html)
3. A JavaScript file for the game logic (e.g. game.js)
4. A JavaScript file for the highscore logic (e.g. score.js)
5. CSS Stylesheet and/or Bootstrap
6. A JavaScript file to hold **just** the array of quiz questions, choices, and answers. (e.g. questions.js) **Optional, but recommended to keep your code clean**. You'll still be able to reference this array like normal as long as you link both scripts on the index.html page. If you don't put the questions in a separate file, be sure to put them in the game logic JS.

Acceptance Criteria:
- a start button
- a timer span
- a place to append the current question
- a place to append answer choices
- a click handler for the start button
- a setInterval when the start button is clicked
- the first question and answer choices when the start button is clicked

1. Basic HTML
    - To start, I like to build the HTML to get the bare bones of the application. If you're using Bootstrap, go ahead and link it in your HTML now.
    - Think about the elements you'll want to be dynamic (i.e. change with data) and give them unique id attributes. For example, you'll need elements to hold your question, answer choices, timer and other data.
    - Don't forget script tags for our JavaScript.

2. Game Variables
    - Make variables for any element on the DOM that you'll need data from or will need change.
    - Think about the global variables you'll want to keep track of and want to use for all your functions (e.g. time, question index, etc.).

3. Questions/Answers
    - Create an array with a couple easy sample questions and answer choices either in your game logic or in a separate file just for the array.

Start Game
- When game starts
    - Home page is not displayed
    - Questions page is displayed
    - Timer (90 seconds) is displayed
    - Timer starts (counts down by 1 second)
    - Question is displayed to user

Quiz
- Created an array of objects made up of key value pairs for question prompt, answer choices, and correct answer
    - Answer choices are array
    - Assigned to variable
- Update question (clear previous question)
- Update answer choices (clear previous answer choices)
    - Create a loop to generate new choices (within array of answer choices)
- Display question and choices
    - Display choices with button that user can click
    - If incorrect choice (choice not equal to answer from questions array)
        - Deduct 10 seconds from timer
        - Display another question
        - Display feedback
    - If user chooses correctly
        - Display feedback
        - Next question displayed
    - Store answers
- When time is zero or no questions remaining
    - Display "end" page
    - Display user score
    - Display input form for user to save initials and score
    - Button to submit info and directs to high scores page
- High scores page
    - Displays all user scores in table
    - Table is updated everytime user saves score with initials
    - Table sorted from high score to lowest score
    - Option to clear scores
- Nav bar with appropriate links to: high scores page or home (to retake quiz)
- NOTE: 
    - made 2 html files (one for home page and one for high score page)
    - made 2 javascript pages (one for the overall dynamic functionality of game and one for saving/storing/displaying high scores)
    - used CSS page to determine when pages are displayed or hidden
