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
    if ((userChoice == "rock" & computerChoice == "paper") |
            (userChoice == "paper" & computerChoice == "scissors") |
            (userChoice == "scissors" & computerChoice == "rock")) {
        return 1;
    }
    if ((userChoice == "paper" & computerChoice == "rock") |
            (userChoice == "scissors" & computerChoice == "paper") |
            (userChoice == "rock" & computerChoice == "scissors")) {
        return 0;
    }
    if (userChoice == computerChoice) {
        return 2;
    }
}


function playGame() {
    var userScore = 0;
    var computerScore = 0;
    for (var i = 0; i < 5; i++) {
        const userChoice = prompt('Choose "Rock", "Paper", or "Scissors"');
        const computerChoice = getComputerChoice();
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

playGame()