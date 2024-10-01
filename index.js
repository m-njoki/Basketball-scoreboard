// Get the home and guest score elements
const homeScoreEl = document.getElementById("home-score");
const guestScoreEl = document.getElementById("guest-score");

// Initialize scores
let homeScore = 0;
let guestScore = 0;

// Function to update the score for the given team
function updateScore(team, points) {
    if (team === "home") {
        homeScore += points; // Increase home score
        homeScoreEl.innerText = homeScore; // Update home score on the UI
    } else if (team === "guest") {
        guestScore += points; // Increase guest score
        guestScoreEl.innerText = guestScore; // Update guest score on the UI
    }
}

// Function to reset both scores
function resetScore() {
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.innerText = homeScore; // Reset home score display
    guestScoreEl.innerText = guestScore; // Reset guest score display
}
