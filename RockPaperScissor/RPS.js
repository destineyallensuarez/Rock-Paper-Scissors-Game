//Name: Destiney Allen-Suarez
//Professor: Gavin Stuart
//Class: SD 230
//Date: 11/20/24 
//RPS.js

const actionButton = document.getElementById("actionButton");
const subtitle = document.getElementById("subtitle");
const resultText = document.getElementById("resultText");
const icons = document.querySelectorAll(".icon");
const choices = ["rock", "paper", "scissors"];
let userChoice = "";
let computerChoice = "";
let gameStarted = false;

actionButton.addEventListener("click", () => {
    if (!gameStarted) {
        subtitle.innerText = "Choose Your Move!";
        actionButton.innerText = "Play Hand";
        document.querySelector(".icons").style.visibility = "visible";
        gameStarted = true;
    } else if (userChoice) {
        playGame();
    } else {
        alert("Please select a move before playing!");
    }
});

icons.forEach(icon => {
    icon.addEventListener("click", () => {
        if (gameStarted) {
            // Toggle selection
            if (icon.classList.contains("selected")) {
                icon.classList.remove("selected");
                userChoice = ""; // Deselect move
                subtitle.innerText = "Choose Your Move!";
            } else {
                icons.forEach(i => i.classList.remove("selected"));
                icon.classList.add("selected");
                userChoice = icon.id;
                subtitle.innerText = `${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)}...`;
            }
        }
    });
});

function playGame() {
    // Randomly select the computer's choice
    computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Determine the game result
    let resultMessage = "";
    if (userChoice === computerChoice) {
        resultMessage = `It's a Draw! Both chose ${userChoice}.`;
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        resultMessage = `You Win! ${userChoice} beats ${computerChoice}.`;
    } else {
        resultMessage = `You Lose! ${computerChoice} beats ${userChoice}.`;
    }

    // Display the result
    resultText.innerText = resultMessage;

    // Prompt for replay
    actionButton.innerText = "Play Again";
    actionButton.addEventListener("click", resetGame, { once: true });
}

function resetGame() {
    gameStarted = false;
    userChoice = "";
    computerChoice = "";
    subtitle.innerText = "Click \"Let’s Go!\" to Start";
    resultText.innerText = "";
    icons.forEach(icon => icon.classList.remove("selected"));
    actionButton.innerText = "Let’s Go!";
    document.querySelector(".icons").style.visibility = "hidden";
}
