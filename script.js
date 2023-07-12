// calculate computer choice randomly
function getComputerChoice() {
    let move = Math.round(Math.random() * 2);
    switch (move) {
        case 0: return "rock";
            break;
        case 1: return "paper";
            break;
        case 2: return "scissor";
    }
}

// get user choice
function getPlayerChoice() {
    let choice = prompt("Enter your choice (Rock, Paper or Scissor) ", "");
    if (choice != null) { choice = choice.toLowerCase(); }

    if (choice !== "rock" && choice !== "paper" && choice !== "scissor") {
        console.log("Enter a valid choice");
        return "";

    } else {
        return choice;
    }
}

// play the round and gives winner
function playRound(playerSelection, computerSelection) {
    if ((computerSelection === "rock" && playerSelection === "scissor") ||
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissor" && playerSelection === "paper")) {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        return "computerWins";
    } else if ((playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissor" && computerSelection === "paper")) {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        return "playerWins";
    }else if(playerSelection===computerSelection){
        console.log(`both selected ${playerSelection}`);
        return "Tie";
    }

}

// gives final result report
function report(noComputerWins, noPlayerWins) {
    console.log(`computer's wins : ${noComputerWins}`);
    console.log(`Player's wins : ${noPlayerWins}`);

    if (noComputerWins != 0 && noPlayerWins != 0) {
        if (noComputerWins > noPlayerWins) {
            console.log("Winner : Computer");
        } else if (noComputerWins === noPlayerWins) {
            console.log("Winner : Tie");
        }
        else {
            console.log("Winner : You");
        }
    }
}

function game() {
    let noComputerWins = 0;
    let noPlayerWins = 0;

    for (let index = 0; index < 5; index++) {
        let playerSelection = getPlayerChoice();
       
        let computerSelection = getComputerChoice();

        if (playerSelection != "") {
            let winner =   playRound(playerSelection, computerSelection);
          
            if (winner === "computerWins") {
                noComputerWins++;
            }
            else  if(winner == "playerWins"){
                noPlayerWins++;
            }
        }
    }

    report(noComputerWins, noPlayerWins);
}

game();