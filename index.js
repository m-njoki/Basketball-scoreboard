// javascript

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0

function incrementHomeScore(){
    homeScore += 1
    homeScoreEl.innerText = homeScore
}

function incrementHomeScore2(){
    homeScore += 2
    homeScoreEl.innerText = homeScore
}

function incrementHomeScore3(){
    homeScore += 3
    homeScoreEl.innerText = homeScore
}

function incrementGuestScore(){
    guestScore += 1
    guestScoreEl.innerText = guestScore
}

function incrementGuestScore2(){
    guestScore += 2
    guestScoreEl.innerText = guestScore
}

function incrementGuestScore3(){
    guestScore += 3
    guestScoreEl.innerText = guestScore
}

function resetScore(){
    document.getElementById("guest-score").innerText = guestScore = 0
    document.getElementById("home-score").innerText = homeScore = 0
}