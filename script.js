let getComputerChoice = () => {
  // generating random number from 0 to 2
  let computerChoice = Math.floor(Math.random() * 3);
  //changing 0 1 2 to Rock Paper Scissors
  switch (computerChoice) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    default:
      return "Scissor";
  }
};

// console.log(playerChoice);
// console.log(getComputerChoice());

let playRound = (playerChoice, computerChoice) => {
  //losing condition
  if (
    (playerChoice == "Rock" && computerChoice == "Paper") ||
    (playerChoice == "Paper" && computerChoice == "Scissor") ||
    (playerChoice == "Scissor" && computerChoice == "Rock")
  ) {
    return `You lose! ${computerChoice} beats ${playerChoice}`;
  }
  // draw condition
  else if (playerChoice == computerChoice) {
    return `Draw!`;
  }
  // winning condition
  else {
    return `You win! ${playerChoice} beats ${computerChoice}`;
  }
};

const playerChoice = "rocK";
const computerChoice = getComputerChoice();

console.log(playerChoice);
console.log(`computer ${computerChoice}`);
// pass playerchoice as first letter capitalized
console.log(
  playRound(
    playerChoice.slice(0, 1).toUpperCase() +
      playerChoice.slice(1).toLowerCase(),
    computerChoice
  )
);
