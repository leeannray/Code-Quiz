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