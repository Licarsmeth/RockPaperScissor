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

const losingMessage = "Ew you lose 🤮- Refresh to continue";
const winningMessage = "You finally won 🥳- Refresh to continue";

const myArray = ["Rock", "Paper", "Scissor"];
function getComputerChoice() {
  return myArray[Math.floor((Math.random() * myArray.length))];
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    if (!(
      message.textContent == losingMessage ||
      message.textContent == winningMessage
    )) {
      playerChoice = choice.alt;
      console.log(playerChoice);
      playRound(playerChoice, getComputerChoice());
      scores.textContent = `Player: ${countPlayer} --- ${countComputer}: Computer`;
      if (countComputer == 5 || countPlayer == 5) reset();
    }
  });
});

let playRound = (playerChoice, computerChoice) => {
  //winning condition
  if (
    (playerChoice == "Paper" && computerChoice == "Rock") ||
    (playerChoice == "Scissor" && computerChoice == "Paper") ||
    (playerChoice == "Rock" && computerChoice == "Scissor")
  ) {
    changeImage(playerChoice, computerChoice);
    ++countPlayer; 
    message.textContent = `Congrats! ${playerChoice} beats ${computerChoice}`;
  }
  // draw condition
  else if (playerChoice == computerChoice) {
    changeImage(playerChoice, computerChoice);
    message.textContent = `You both choose ${playerChoice}`;
  }
  // losing condition
  else {
    changeImage(playerChoice, computerChoice);
    ++countComputer;
    message.textContent = `Oh no! ${computerChoice} beats ${playerChoice}`;
  }
};

const changeImage= (playerChoice, computerChoice)=> {
  //change player image
  playerImage.firstElementChild.remove();
  const newPlayerImage = document.createElement("img");
  newPlayerImage.setAttribute("src", `images/${playerChoice}Right.png`);
  playerImage.appendChild(newPlayerImage);

  //change computer image
  computerImage.firstElementChild.remove();
  const newComputerImage = document.createElement("img");
  newComputerImage.setAttribute("src", `images/${computerChoice}.png`);
  computerImage.appendChild(newComputerImage);
}

const reset = () => {
  if (countComputer > countPlayer) message.textContent = losingMessage;
  else message.textContent = winningMessage;
  countComputer = 0;
  countPlayer = 0;
  choices.removeEventListener("click");
};
