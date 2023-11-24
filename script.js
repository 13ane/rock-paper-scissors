//DOM elements
body = document.querySelector(`body`);

resultBox = document.createElement(`div`);
body.appendChild(resultBox);
resultBox.classList.add(`resultBox`);

result = document.createElement(`div`);
resultBox.appendChild(result);
result.classList.add(`result`);

greet = document.createTextNode(`Wanna Play?`);
result.appendChild(greet);

compScore = document.createElement(`div`);
body.appendChild(compScore);
compScore.classList.add(`compScore`);
compScoreText = document.createTextNode(`Computer Score:`);
compScore.appendChild(compScoreText)

compScoreCard = document.createElement(`div`);
compScore.appendChild(compScoreCard);
compPoints = document.createTextNode(0);
compScoreCard.appendChild(compPoints);

playerScoreH = document.createElement(`div`);
body.appendChild(playerScoreH);
playerScoreH.classList.add(`playerScore`);
playerScoreText = document.createTextNode(`Player Score:`);
playerScoreH.appendChild(playerScoreText)

playerScoreCard = document.createElement(`div`);
playerScoreH.appendChild(playerScoreCard);
playerPoints = document.createTextNode(0);
playerScoreCard.appendChild(playerPoints);


//CONSTANTS list
const btn = document.getElementsByTagName(`button`);
const btnArray = Array.from(btn);

//BUTTONS to work
btnArray.forEach(btn => {
    btn.addEventListener(`click`, () => playRound(btn.className,getComputerChoice()))
});

//GET computer choice random generation
function getComputerChoice () {
    let options = [`rock`, `paper`, `scissors`];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
    }
    //console.log(getComputerChoice())
    
    //PLAY single round
    let playerScore = 1
    let computerScore = 1
    
function playRound(playerSelection, computerSelection) {
    if ((playerSelection === `scissors` && computerSelection === `paper`)
    || (playerSelection === `paper` && computerSelection === `rock`)
    || (playerSelection === `rock` && computerSelection === `scissors`))
        {return console.log(`Player Wins!`),
        announcer(`Player Wins!`), replacePlayerScore(playerScore),
        playerScore++};
    if ((computerSelection === `scissors` && playerSelection === `paper`)
    || (computerSelection === `paper` && playerSelection === `rock`)
    || (computerSelection === `rock` && playerSelection === `scissors`))
        {return console.log(`Computer Wins!`), 
        announcer(`Computer Wins!`), replaceCompScore(computerScore),
        computerScore++};
    if ((computerSelection === playerSelection))
    {return console.log(`Draw!`), displayResult(`Draw!`)};
    }

//RESULT replace function
function displayResult (message) {
    resultBox.removeChild(result);
    result = document.createElement(`div`);
    a = document.createTextNode(message);
    result.appendChild(a);
    resultBox.appendChild(result);
    };

//SCORE replace functions
function replaceCompScore (score) {
    compScoreCard.removeChild(compPoints);
    compPoints = document.createElement(`div`);
    a = document.createTextNode(score);
    compPoints.appendChild(a);
    compScoreCard.appendChild(compPoints);
    };

function replacePlayerScore (score) {
    playerScoreCard.removeChild(playerPoints);
    playerPoints = document.createElement(`div`);
    a = document.createTextNode(score);
    playerPoints.appendChild(a);
    playerScoreCard.appendChild(playerPoints);
    };

//LOOP five rounds
function announcer (message) {
    if (computerScore < 5 && playerScore < 5)
    {displayResult(message)};
    if (computerScore === 5)
    {displayResult(`GAME OVER SKYNET WINS!`), playerScore = 0, computerScore = 0};
    if (playerScore === 5)
    {displayResult(`GAME OVER YOU LIVE!`), playerScore = 0, computerScore = 0};
};

//SCORE five rounds amended into game()
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt(`Enter Rock, Paper or Scissors`).toLowerCase();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    };
    if (playerScore > computerScore)
    {return `You Win!`}
    else if (playerScore < computerScore)
    {return `You Lose!`}
    else {return `Draw!`};
    };
    

