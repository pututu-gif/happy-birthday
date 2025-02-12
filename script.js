document.getElementById("submit-answer").addEventListener("click", function() {
    let answer = document.getElementById("puzzle-answer").value.toLowerCase().trim();
    if (answer === "february") {
        document.getElementById("puzzle-section").classList.add("hidden");
        document.getElementById("valentine-section").classList.remove("hidden");
    } else {
        document.getElementById("error-message").classList.remove("hidden");
    }
});

document.getElementById("yesButton").addEventListener("click", function() {
    window.location.href = "love-letter.html";
});
