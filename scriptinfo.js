//Computer choice option 1
//function getComputerChoiceSwitch() {
//   let computerchoice = Math.floor(Math.random() * 3)
//   switch (computerchoice) {
//    case 0:
//        return `rock`
//    case 1:
//        return `paper`
//    case 2:
//        return `scissors        `
//   }}
//console.log(getComputerChoice())

//Computer choice option 2
function getComputerChoiceArray() {
    let choice = [`rock`, `paper`, `scissors`];
    let randomRPS = choice[Math.floor(Math.random() * choice.length)];
    return randomRPS;
}
//console.log(getComputerChoiceArray())

    const playerSelection = `Rock`.toLowerCase();
    const computerSelection = getComputerChoiceArray();
    

function playRound(playerSelection, computerSelection) {
    if (playerSelection == `rock` && computerSelection == `paper`) {
      return `You lose! Paper beats Rock`;
    } else if (playerSelection == `paper` && computerSelection == `rock`) {
      return `You win! Paper beats Rock`;
    } else if (playerSelection == `rock` && computerSelection == `scissors`) {
      return `You win! Rock beats Scissors`;
    } else if (playerSelection == `scissors` && computerSelection == `rock`) {
      return `You lose! Rock beats Scissors`;
    } else if (playerSelection == `paper` && computerSelection == `scissors`) {
      return `You lose! Scissors beats Paper`;
    } else if (playerSelection == `scissors` && computerSelection == `paper`) {
      return `You win! Scissors beats Paper`;
    } else if (playerSelection ==computerSelection){
      return `Draw`;}
      else {
        `Whoops!`
      }}
      console.log(computerSelection);
      console.log(playerSelection);
      console.log(playRound(playerSelection, computerSelection));