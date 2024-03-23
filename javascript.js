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

console.log(getComputerChoice())