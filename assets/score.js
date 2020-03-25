// Retrieve high scores from local storage
function displayHighScores() {

    // Retrieve scores from localstorage or create empty array
    var highScores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    // Sort the highscores by score property from highest to lowest
    highScores.sort(function (a, b) {
        return b.score - a.score;
    });

// Create a new row with 2 new data points (one for initials and one for score)
    highScores.forEach(function (score) {
    
        // Create a new row 
        var scoreTr = document.createElement("tr");
        
        // Create a new "td" for user input initials. Text content will be user initials
        var nameTd = document.createElement("td");
        nameTd.textContent = score.initials;

        // Create a new "td" for user score. Text content will be most recent score 
        var scoreTd = document.createElement("td");
        scoreTd.textContent = score.score;

        // Add score to beginning of new score table row (line 16) for that td; do the same for the score which is the second td of that row
        scoreTr.appendChild(nameTd);
        scoreTr.appendChild(scoreTd);

        // Display initials and score in table on high scores page
        var scoreHeader = document.getElementById('scoreBody')
        scoreHeader.appendChild(scoreTr);
      
    });
}

// Clear high scores when page reloads
function clearHighScores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}

// Clear high scores from table when "clear" button clicked
document.getElementById("clear").onclick = clearHighScores;

// Call function when page loads so that high scores are displayed in the table
displayHighScores();
