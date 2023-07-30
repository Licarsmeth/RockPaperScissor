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

//initialize count variables for player and computer
let countPlayer = 0;
let countComputer = 0;

let playRound = (playerChoice, computerChoice) => {
  //losing condition
  if (
    (playerChoice == "Rock" && computerChoice == "Paper") ||
    (playerChoice == "Paper" && computerChoice == "Scissor") ||
    (playerChoice == "Scissor" && computerChoice == "Rock")
  ) {
    console.log(`Computer score is: ${++countComputer}
    Player score is; ${countPlayer}`);
    return `You lose! ${computerChoice} beats ${playerChoice}`;
  }
  // draw condition
  else if (playerChoice == computerChoice) {
    return `Draw!`;
  }
  // winning condition
  else {
    console.log(`Player score is: ${++countPlayer}`);
    return `You win! ${playerChoice} beats ${computerChoice}`;
  }
};

const playerChoice = "rocK";
const computerChoice = getComputerChoice();

// console.log(playerChoice);
// console.log(`computer ${computerChoice}`);
// pass playerchoice as first letter capitalized

let game = () => {
  do {
    console.log(
      playRound(
        playerChoice.slice(0, 1).toUpperCase() +
          playerChoice.slice(1).toLowerCase(),
        computerChoice
      )
    );
  } while (!(countComputer == 5 || countPlayer == 5));
  if (countComputer > countPlayer) {
    console.log(
      `You suck dude, boo! Computer won you by ${countComputer - countPlayer}`
    );
  }
  // else if (countComputer == countPlayer){
  //     console.log(`You're safe from embarrassment...for this time.`);
  // }
  else console.log(`Lesgoo you won! (finally) You won the computer by ${countPlayer- countComputer}`);
};

console.log(game());
