function displayHighScores() {
    // either get scores from localstorage or set to empty array
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    // sort highscores by score property in descending order
    highScores.sort(function (a, b) {
        return b.score - a.score;
    });

    highScores.forEach(function (score) {
    
        var scoreTr = document.createElement("tr");

        
        var nameTd = document.createElement("td");
        nameTd.textContent = score.initials;

        var scoreTd = document.createElement("td");
        scoreTd.textContent = score.score;


        scoreTr.appendChild(nameTd);
        scoreTr.appendChild(scoreTd);

        var scoreHeader = document.getElementById('scoreBody')
        scoreHeader.appendChild(scoreTr);
      
    });
}

function clearHighScores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}

document.getElementById("clear").onclick = clearHighScores;

// run function when page loads
displayHighScores();
