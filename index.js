let score = 0;
let scoreGuest = 0;

document.getElementById("home-score").textContent = scoreHome;
document.getElementById("guest-score").textContent = scoreGuest;

function addHome(style, number) {
    score += number
    if (style === "home") {  
        document.getElementById(style+"-score").textContent = score
        console.log("le score "+style+ " est de " + score)   
    };
}

function addGuest(style, number) {
    scoreGuest += number
    if (style === "guest") {  
        document.getElementById(style+"-score").textContent = scoreGuest
        console.log("le score "+style+ " est de " + scoreGuest)   
    };
}