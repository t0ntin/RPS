const results = {
  yourResults: { td: "#your-score-td", score: 0 },
  computerResults: { td: "#computer-score-td", score: 0 },
  roundsPlayed: { td: "#rounds-played-td", score: 0 },
  feedback: { div: "#feedback-div" },
};
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
let yourScoretd = document.querySelector(results.yourResults.td);
let computerScoretd = document.querySelector(results.computerResults.td);
let roundsPlayedtd = document.querySelector(results.roundsPlayed.td);
const feedbackDiv = document.querySelector(results.feedback.div);
const feedbackDiv2 = document.querySelector("#feedback-div2");

rock.addEventListener("click", function () {
  let playerSelection = rock.getAttribute("id");
  let computerChoice = getComputerChoice();
  // displayResuls(playerSelection, computerChoice); //I was previously calling rpsRound() here.
  playRound(playerSelection, computerChoice);
});

paper.addEventListener("click", function () {
  let playerSelection = paper.getAttribute("id");
  let computerChoice = getComputerChoice();
  playRound(playerSelection, computerChoice);
});

scissors.addEventListener("click", function () {
  let playerSelection = scissors.getAttribute("id");
  let computerChoice = getComputerChoice();
  playRound(playerSelection, computerChoice);
});

let previousComputerChoice = null;
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerChoice =
    randomNumber === 1 ? "rock" : randomNumber === 2 ? "paper" : "scissors";
  while (computerChoice === previousComputerChoice) {
    randomNumber = Math.floor(Math.random() * 3 + 1);
    computerChoice =
      randomNumber === 1 ? "rock" : randomNumber === 2 ? "paper" : "scissors";
  }
  previousComputerChoice = computerChoice;
  return computerChoice;
}

function playRound(playerSelection, computerChoice) {
  let winner = rpsRound(playerSelection, computerChoice);
  updateResultTable(playerSelection, computerChoice);
  // if (results.roundsPlayed.score >= 5) {
  //   rock.disabled = true;
  //   paper.disabled = true;
  //   scissors.disabled = true;
  //   feedbackDiv.innerText =
  //     "Thanks for playing. Refresh the page to play again.";
  // }

  determineAndAnnounceWinner();
}

function rpsRound(playerSelection, computerChoice) {
  let winner =
    playerSelection === computerChoice
      ? "tie"
      : playerSelection === "rock" && computerChoice === "paper"
      ? "compWins"
      : playerSelection === "paper" && computerChoice === "scissors"
      ? "compWins"
      : playerSelection === "scissors" && computerChoice === "rock"
      ? "compWins"
      : "youWin";
  console.log(winner);

  return winner;
}

// I didn't have any arguments here for displayresults() or for rpsRound();
// function displayFeedback (playerSelection, computerChoice) {
//   let winner = rpsRound(playerSelection, computerChoice);
//   feedbackDiv.innerText = results.feedback.message1;
// }
function incrementAndUpdateYourScore() {
  results.yourResults.score += 1;
  yourScoretd.innerText = results.yourResults.score;
  console.log(results.yourResults.score);
}

function incrementAndUpdateComputerScore() {
  results.computerResults.score += 1;
  console.log(results.computerResults.score);
  computerScoretd.innerText = results.computerResults.score;
}

function updateResultTable(playerSelection, computerChoice) {
  let winner = rpsRound(playerSelection, computerChoice);
  results.roundsPlayed.score += 1;
  roundsPlayedtd.innerText = results.roundsPlayed.score;

  if (winner === "tie") {
    incrementAndUpdateYourScore();
    incrementAndUpdateComputerScore();
    feedbackDiv.innerText = `You chose ${playerSelection}. The computer chose ${computerChoice}. It's a tie.`;
  } else if (winner === "compWins") {
    incrementAndUpdateComputerScore();
    feedbackDiv.innerText = `You chose ${playerSelection}. The computer chose ${computerChoice}. The computer wins.`;
  } else {
    incrementAndUpdateYourScore();
    feedbackDiv.innerText = `You chose ${playerSelection}. The computer chose ${computerChoice}. YOU WIN!!!.`;
  }
}

function determineAndAnnounceWinner() {
  if (results.roundsPlayed.score === 5) {
    if (results.yourResults.score > results.computerResults.score) {
      feedbackDiv2.innerText = "You beat the computer. Congrats!";
    } else {
      feedbackDiv2.innerText = "Sorry. The computer wins.";
    }
  }
}
