//Computer choice option 1
function getComputerChoice() {
   let computerchoice = Math.floor(Math.random() * 3)
   switch (computerchoice) {
    case 0:
        return `Rock`
    case 1:
        return `Paper`
    case 2:
        return `Scissors        `
   }}

//Computer choice option 2
function getComputerChoice2() {
    let choice = ["Rock", "Paper", "Scissors"];
    let randomRPS = choice[Math.floor(Math.random() * choice.length)];
    return randomRPS;
}


    const playerSelection = getComputerChoice2();
    const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Paper") {
      return "You lose! Paper beats Rock";
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
      return "You win! Paper beats Rock";
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
      return "You win! Rock beats Scissors";
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
      return "You lose! Rock beats Scissors";
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
      return "You lose! Scissors beats Paper";
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
      return "You win! Scissors beats Paper";
    } else  {
      return "Draw";}}
     
      console.log(getComputerChoice())
      console.log(getComputerChoice2())
      console.log(playRound(playerSelection, computerSelection));