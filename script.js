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
function getPlayerChoice(choice) {
    switch (choice.getAttribute("id")) {
        case "rock": return "rock";
            break;
        case "paper": return "paper";
            break;
        case "scissor": return "scissor";
    }

}
let noComputerWins = 0,noPlayerWins = 0;
// play the round and gives winner
function playRound(playerSelection, computerSelection) {
    if ((computerSelection === "rock" && playerSelection === "scissor") ||
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissor" && playerSelection === "paper")) {
            noComputerWins++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;;
    } else if ((playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissor" && computerSelection === "paper")) {
            noPlayerWins++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }else if(playerSelection===computerSelection){
        return `both selected ${playerSelection}`;
    }

}

function getResult(result){
    const roundResult = document.querySelector("#round-result");
    const currentScore = document.querySelector("#current-score");
    const finalResult = document.querySelector("#final-result");
  
    currentScore.textContent = `Player:${ noPlayerWins} 
                                Computer:${noComputerWins}`;
    roundResult.textContent = `${result}`;
    finalResult.textContent=`${getFinalResult()}`;
}

function getFinalResult(){
        if (noComputerWins===5) {
            return "Computer Wins!";
        }else if (noPlayerWins === 5){
            return "You Wins!";
        }else{
            return "";
        }
}



const choices = document.querySelectorAll(".choices");
console.log(choices);
choices.forEach(choice => choice.addEventListener("click",(e)=>{
    getResult(
         playRound(
            getPlayerChoice(choice),
             getComputerChoice()
         )
    );
    
}))

