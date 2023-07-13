const rockEl = document.getElementById("rock")
const paperEl = document.getElementById("paper")
const scissorEl = document.getElementById("scissor")
const whoWin = document.getElementById("who-win");
const score = document.getElementById("score");

let rock = "rock";
let scissor = "scissor";
let paper = "paper";

let computerMove;
let computerMoveIcon;
let playerMove;
let whoWins = '';
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

rockEl.addEventListener("click", ()=>{
    playerMove = rock;
    let computerMoveIs = checkComputerMove();
    screenUpdate(playerMove, computerMoveIcon,checkWinner(playerMove,computerMoveIs));
    
});

paperEl.addEventListener("click", ()=>{
    playerMove = paper;
    let computerMoveIs = checkComputerMove();
    screenUpdate(playerMove, computerMoveIcon,checkWinner(playerMove,computerMoveIs));
});

scissorEl.addEventListener("click", ()=>{
    playerMove = scissor;
    let computerMoveIs = checkComputerMove();
    screenUpdate(playerMove, computerMoveIcon,checkWinner(playerMove,computerMoveIs));
});

function checkComputerMove(){
    let computerMove  = Math.floor(Math.random() * 100) + 1;
    if(computerMove < 33){
        computerMoveIcon = rock;
    }else if(computerMove > 33 && computerMove < 66){
        computerMoveIcon = paper;
    }else{
        computerMoveIcon = scissor;
    }
    return computerMoveIcon;
}

function checkWinner(playerMove, computerMoveIcon){
    if(playerMove == rock && computerMoveIcon == scissor ||
       playerMove == paper && computerMoveIcon == rock ||
       playerMove == scissor && computerMoveIcon == paper
    ){
        whoWins = "You win! ";
        playerScore ++;
        return whoWins;
    } else if( playerMove == rock && computerMoveIcon == paper ||
        playerMove == paper && computerMoveIcon == scissor ||
        playerMove == scissor && computerMoveIcon == rock){
        whoWins = "Computer win! ";
        computerScore ++;
        return whoWins;
    } else if(playerMove == computerMoveIcon){
        whoWins = "Tie";
        tieScore ++;
        return whoWins;
    }
}

function screenUpdate(playerMove, computerMoveIcon, whoWon){
    whoWin.innerText = `${whoWon} ${playerMove} ${computerMoveIcon}`;
    score.innerText = `Your Win: ${playerScore}   Tie: ${tieScore}        Computer Win: ${computerScore}`;
}