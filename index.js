let scoreHome = 0;
let scoreGuest = 0;

document.getElementById("home-score").textContent = scoreHome;
document.getElementById("guest-score").textContent = scoreGuest;

function addOne() {
    scoreHome += 1
    document.getElementById("home-score").textContent = scoreHome;
    console.log("le score home est de " + scoreHome)
}

function addTwo() {
     scoreHome += 2
     document.getElementById("home-score").textContent = scoreHome;
    console.log("le score home est de " + scoreHome)
}

function addThree() {
    scoreHome += 3
    document.getElementById("home-score").textContent = scoreHome;
    console.log("le score home est de " + scoreHome)
}

function addOneGuest() {
    scoreGuest += 1
    document.getElementById("guest-score").textContent = scoreGuest;
    console.log("le score home est de " + scoreGuest)
}

function addTwoGuest() {
     scoreGuest += 2
     document.getElementById("guest-score").textContent = scoreGuest;
    console.log("le score home est de " + scoreHome)
}

function addThreeGuest() {
    scoreGuest += 3
    document.getElementById("guest-score").textContent = scoreGuest;
    console.log("le score home est de " + scoreGuest)
}