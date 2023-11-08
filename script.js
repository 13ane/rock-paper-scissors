//GET computer choice random generation
function getComputerChoice () {
let options = [`rock`, `paper`, `scissors`];
let choice = options[Math.floor(Math.random() * options.length)];
return choice;
}
//console.log(getComputerChoice())

//PLAY single round
let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection) {
if ((playerSelection === `scissors` && computerSelection === `paper`)
|| (playerSelection === `paper` && computerSelection === `rock`)
|| (playerSelection === `rock` && computerSelection === `scissors`))
{return console.log(`Player Wins!`), playerScore++} //ADDED score counters
if ((computerSelection === `scissors` && playerSelection === `paper`)
|| (computerSelection === `paper` && playerSelection === `rock`)
|| (computerSelection === `rock` && playerSelection === `scissors`))
{return console.log(`Computer Wins!`), computerScore++}
if (playerSelection === computerSelection)
{return `Draw!`}
if (playerSelection === undefined)
{return `Typo!`}
}

const playerSelection = `rock` //prompt(Rock, Paper or Scissors?).toLowerCase()
const computerSelection = getComputerChoice()

console.log(computerSelection)
console.log(playerSelection)
//console.log(playRound(playerSelection,computerSelection))

//LOOP five rounds
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt(`Enter Rock, Paper or Scissors`).toLowerCase();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore)
    {return `You Win!`}
    else if (playerScore < computerScore)
    {return `You Lose!`}
    else {return `Draw!`}
}

//SCORE five rounds amended into game()
