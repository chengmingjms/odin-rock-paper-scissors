function getComputerChoice() {
    choice = Math.floor(3 * Math.random());
    switch(choice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}


function playRound(userChoice, computerChoice) {
    resultsDiv.innerHTML+="<br><b>Round " + round + ":</b><br>";
    round++;
    resultsDiv.innerHTML+="Computer: " + computerChoice +", User: " + userChoice + "<br>";
    if ((userChoice == "rock" & computerChoice == "paper") |
            (userChoice == "paper" & computerChoice == "scissors") |
            (userChoice == "scissors" & computerChoice == "rock")) {
        computerScore++;
        resultsDiv.innerHTML+="Computer wins! New score: Computer: " + computerScore + ", User: " + userScore + "<br>";
    }
    if ((userChoice == "paper" & computerChoice == "rock") |
            (userChoice == "scissors" & computerChoice == "paper") |
            (userChoice == "rock" & computerChoice == "scissors")) {
        userScore++;
        resultsDiv.innerHTML+="User wins! New score: Computer: " + computerScore + ", User: " + userScore + "<br>";
    }
    if (userChoice == computerChoice) {
        resultsDiv.innerHTML+="Draw! Same score: Computer: " + computerScore + ", User: " + userScore + "<br>";
    }
    if (userScore == 5) {
        resultsDiv.innerHTML += "<b>User wins!<b>"
    }
    if (computerScore == 5) {
        resultsDiv.innerHTML += "<b>Computer wins!<b>"
    }

}


function playGame() {
    switch (playRound(userChoice.toLowerCase(), computerChoice.toLowerCase())) {
        case 0:
            console.log("You lost round " + (i + 1) + ". " +
                computerChoice.charAt(0).toUpperCase() +
                computerChoice.slice(1) + " beats " +
                userChoice.charAt(0).toUpperCase() + userChoice.slice(1) + ".");
            computerScore++;
            break;
        case 1:
            console.log("You won round " + (i + 1) + ". " +
            userChoice.charAt(0).toUpperCase() + userChoice.slice(1) + " beats " +
            computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + ".");
            userScore++;
            break;
        case 2:
            console.log("Round " + (i + 1) + " was a draw. You both chose " +
            userChoice.charAt(0).toUpperCase() + userChoice.slice(1) + ".");
            break;
    }
    var userWin = userScore > computerScore;
    if (userWin) {
        console.log("You won the game. The score was " + userScore + " to " +
            computerScore + ".");
    } else {
        console.log("You lost the game. The score was " + userScore + " to " +
            computerScore + ".");
    }
}

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const resultsDiv = document.querySelector("#results");
var round = 1;
var userScore = 0;
var computerScore = 0;
rockBtn.addEventListener("click", function () {playRound("rock", getComputerChoice().toLowerCase())});
paperBtn.addEventListener("click", function () {playRound("paper", getComputerChoice().toLowerCase())});
scissorsBtn.addEventListener("click", function () {playRound("scissors", getComputerChoice().toLowerCase())});