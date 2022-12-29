


function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerChoice = randomNumber === 1 ? "rock"
  : randomNumber === 2 ? "paper"
  : "scissors";
  return computerChoice;

}

function convertToLowerCase(userInput) {
   var result = userInput.toLowerCase();
   return result;
}



function rpsRound(playerSelection, computerChoice) {
  playerSelection = convertToLowerCase(playerSelection);
  
  let winner = playerSelection === computerChoice ? "It's a tie!"
  : playerSelection === "rock" && computerChoice === "paper" ? `You chose: ${playerSelection}\n The computer chose ${computerChoice}. \n The computer wins.`
  : playerSelection === "paper" && computerChoice === "scissors" ? `You chose: ${playerSelection}\n The computer chose ${computerChoice}. \n The computer wins.`
  : playerSelection === "scissors" && computerChoice === "rock" ? `You chose: ${playerSelection}\n The computer chose ${computerChoice}. \n The computer wins.`
  : `You chose: ${playerSelection}\n The computer chose ${computerChoice}. \n YOU WIN!!!`
  console.log(winner);

  return winner;
}

function game() {
  for (let i = 0; i < 4; i++) {
    let computerChoice = getComputerChoice();
    let playerSelection = prompt("enter rock paper or scissors");
    rpsRound(playerSelection, computerChoice);
    if (i === 0) {
      playerSelection = prompt("let's play 4 more rounds. Enter RPC");
    }

    
 }
}

game();