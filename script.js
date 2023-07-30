
let getComputerChoice = () => {
    // generating random number from 0 to 2
  let computerChoice = Math.floor(Math.random() * 3);
    //changing 0 1 2 to Rock Paper Scissors
    switch(computerChoice){
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        default:
            return "Scissors"
}
};

console.log(getComputerChoice());
