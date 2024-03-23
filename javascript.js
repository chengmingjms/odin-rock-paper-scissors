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
    if ((userChoice == "rock" & computerChoice == "paper") | (userChoice == "paper" & computerChoice == "scissors") | (userChoice == "scissors" & computerChoice == "rock")) {
        return "You lose. " + computerChoice.charAt(0).toUpperCase() + computerChoice.substr(1) + " beats " + userChoice.charAt(0).toUpperCase() + userChoice.substr(1) + ".";
    }
    if ((userChoice == "paper" & computerChoice == "rock") | (userChoice == "scissors" & computerChoice == "paper") | (userChoice == "rock" & computerChoice == "scissors")) {
        return "You win. " + userChoice.charAt(0).toUpperCase() + userChoice.substr(1) + " beats " + computerChoice.charAt(0).toUpperCase() + computerChoice.substr(1) + ".";
    }
    if (userChoice == computerChoice) {
        return "Draw. You both chose " + userChoice.charAt(0).toUpperCase() + userChoice.substr(1) + ".";
    }
}


function playGame() {
    for (var i = 0; i < 5; i++) {
        const userChoice = prompt('Choose "Rock", "Paper", or "Scissors"');
        const computerChoice = getComputerChoice();
        console.log(playRound(userChoice.toLowerCase(), computerChoice.toLowerCase()))
    }
}

playGame()