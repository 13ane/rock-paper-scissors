//DOM elements
body = document.querySelector(`body`);
resultBox = document.createElement(`div`);
resultBox.classList.add(`resultBox`)
//test = document.createTextNode(`Testing`)
//result.appendChild(test)
body.appendChild(resultBox)
result = document.createElement(`div`)
result.classList.add(`result`)
resultBox.appendChild(result)

//CONSTANTS list
const rock = document.getElementsByClassName(`rock`)
const btn = document.getElementsByTagName(`button`)
const btnArray = Array.from(btn);

//BUTTONS to work
btnArray.forEach(btn => {
    btn.addEventListener(`click`, () => playRound(btn.className,getComputerChoice()))
});

//FUNCTION test
function test () {alert(btn.className)}

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
        {return console.log(`Player Wins!`),
        test = document.createTextNode(`Player Wins!`),
        result.appendChild(test), 
        playerScore++}
    if ((computerSelection === `scissors` && playerSelection === `paper`)
    || (computerSelection === `paper` && playerSelection === `rock`)
    || (computerSelection === `rock` && playerSelection === `scissors`))
        {return console.log(`Computer Wins!`), 
        computerScore++}
    if ((computerSelection === playerSelection))
    {return console.log(`Draw!`)}
    }

//function to replace text
function displayResult (result) {

}
    
    //let playerSelection = `rock` //prompt(Rock, Paper or Scissors?).toLowerCase()
    //let computerSelection = getComputerChoice()
    
    //console.log(computerSelection)
    //console.log(playerSelection)
    //console.log(playRound(playerSelection,computerSelection))
    
    //LOOP five rounds
    //SCORE five rounds amended into game()
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
    

