const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const choices = document.querySelectorAll(".rps");
const playerImage = document.querySelector(".leftPlayer");
const computerImage = document.querySelector(".rightPlayer");
const scores = document.querySelector(".scores");
const message = document.querySelector(".message");
let countPlayer = 0;
let countComputer = 0;

message.textContent = "Let the game begin!";

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

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    playerChoice = choice.alt;
    console.log(playerChoice);
    playRound(playerChoice, getComputerChoice());
    scores.textContent = `Player: ${countPlayer} --- ${countComputer}: Computer`;
    if (countComputer == 5 || countPlayer == 5) reset();
  });
});

let playRound = (playerChoice, computerChoice) => {
  //winning condition
  if (
    
    (playerChoice == "Paper" && computerChoice == "Rock") ||
    (playerChoice == "Scissor" && computerChoice == "Paper") ||
    (playerChoice == "Rock" && computerChoice == "Scissor")
  ) {
    //change player image
    playerImage.firstElementChild.remove();
    const newPlayerImage= document.createElement('img');
    newPlayerImage.setAttribute('src', `images/${playerChoice}Right.png`);
    playerImage.appendChild(newPlayerImage);

    //change computer image
    computerImage.firstElementChild.remove();
    const newComputerImage = document.createElement('img');
    newComputerImage.setAttribute('src', `images/${computerChoice}.png`);
    computerImage.appendChild(newComputerImage);

    console.log(`${++countPlayer} - ${countComputer}`);

    message.textContent = `Congrats! ${playerChoice} beats ${computerChoice}`;
  }
  // draw condition
  else if (playerChoice == computerChoice) {
    //change player image
    playerImage.firstElementChild.remove();
    const newPlayerImage= document.createElement('img');
    newPlayerImage.setAttribute('src', `images/${playerChoice}Right.png`);
    playerImage.appendChild(newPlayerImage);

    //change computer image
    computerImage.firstElementChild.remove();
    const newComputerImage = document.createElement('img');
    newComputerImage.setAttribute('src', `images/${computerChoice}.png`);
    computerImage.appendChild(newComputerImage);
    
    console.log(`${countPlayer} - ${countComputer}`);

    message.textContent = `You both choose ${playerChoice}`;
  }
  // losing condition
  else {
    //change player image
    playerImage.firstElementChild.remove();
    const newPlayerImage= document.createElement('img');
    newPlayerImage.setAttribute('src', `images/${playerChoice}Right.png`);
    playerImage.appendChild(newPlayerImage);

    //change computer image
    computerImage.firstElementChild.remove();
    const newComputerImage = document.createElement('img');
    newComputerImage.setAttribute('src', `images/${computerChoice}.png`);
    computerImage.appendChild(newComputerImage);

    console.log(`${countPlayer} - ${++countComputer}`);

    message.textContent = `Oh no! ${computerChoice} beats ${playerChoice}`;
  }
};

const reset = () => {
  if (countComputer > countPlayer)
    message.textContent = "Ew you lose, keep trying";
  else message.textContent = "You finally won, once more?";
  countComputer = 0;
  countPlayer = 0;
  choices.removeEventListener('click');
};


