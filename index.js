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
        homeScoreEl.innerText = homeScore; // Update home score
    } else if (team === "guest") {
        guestScore += points; // Increase guest score
        guestScoreEl.innerText = guestScore; // Update guest score
    }
}

// Function to reset both scores
function resetTeamScore(team) {
    if (team === "home") {
        homeScore = 0;
        homeScoreEl.innerText = homeScore;
    } else if (team === "guest") {
        guestScore = 0;
        guestScoreEl.innerText = guestScore;
    }
}
