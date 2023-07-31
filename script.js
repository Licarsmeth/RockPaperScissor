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

let playRound = (playerChoice, computerChoice) => {
  //winning condition
  if (
    (playerChoice == "Paper" && computerChoice == "Rock") ||
    (playerChoice == "Scissor" && computerChoice == "Paper") ||
    (playerChoice == "Rock" && computerChoice == "Scissor")
  ) {
    console.log(computerChoice);
    console.log(`${++countPlayer} - ${countComputer}`);
    return `You win! ${playerChoice} beats ${computerChoice}------------------------`;
  }                                        
  // draw condition
  else if (playerChoice == computerChoice) {
    console.log(computerChoice);
    console.log(`${countPlayer} - ${countComputer}`);
    return `Draw!----------------------------------------------`;
  }
  // losing condition
  else {
    console.log(computerChoice);
    console.log(`${countPlayer} - ${++countComputer}`);
    return `You lose! ${computerChoice} beats ${playerChoice} ------------------------`;
  }
};

//initialize count variables for player and computer
let countPlayer = 0;
let countComputer = 0;

let game = () => {
  let round = 1;
  do {
    const playerChoice = prompt("Choose your weapon");
    const computerChoice = getComputerChoice();
    console.log(`Round ${round++}`);
    console.log(
      // pass playerchoice as first letter capitalized
      playRound(
        playerChoice.slice(0, 1).toUpperCase() +
          playerChoice.slice(1).toLowerCase(),
        computerChoice
      )
    );
  } while (!(countComputer == 3 || countPlayer == 3));
  if (countComputer > countPlayer) {
    console.log(
      `You suck dude, boo! Computer won you by ${countComputer - countPlayer}`
    );
  } else
    console.log(
      `Lesgoo you won! (finally) You won the computer by ${
        countPlayer - countComputer
      }`
    );
};

console.log(game());
