



function storedAnswers() {
    // Stringify and set "todos" key in localStorage to todos array
    localStorage.setItem("results", JSON.stringify(results));
}

// When answer is submitted...
choices.addEventListener("submit", function (event) {

    var question = ques.value;
    var options = choices.value;


    // Add new ques to results array, clear the input
    results.push(choices);
    choices.value = "";

    // Store updated results in localStorage, re-render the list
    storedAnswers();
    renderstoredAnswers();
});
// When a button choice is clicked...
choices.addEventListener("click", function (event) {
    var element = event.target;

    // If that element is a button...
    if (element.matches("button") === true) {
        // Get its data-index value and clear question
        var index = element.parentElement.getAttribute("data-index");
        results.splice(index, 1);

        // Store updated todos in localStorage, re-render the list
        storedChoices();
        renderChoices();
    }

    if (element === true) {
        // Next question
    }

    if (element === false) {
        // Subtract time from timer
    }
});
function results() {
    // Get stored results from localStorage
    // Parsing the JSON string to an object
    var storedResults = JSON.parse(localStorage.getItem("storedChoices"));

    // If choices were retrieved from localStorage, update the results array to it
    if (storedTodos !== null) {
        todos = storedTodos;
    }

    // Render todos to the DOM
    renderstoredChoices();
}

function storedChoices() {
    // Stringify and set "todos" key in localStorage to todos array
    localStorage.setItem("choices", JSON.stringify(choices));
}

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

score.onclick = function () {

}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

