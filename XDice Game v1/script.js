// console.log(Math.ceil(Math.random()*6));
const playerStatus = document.getElementById("playerStatus")
const score = document.getElementById("score");
const diceImage = document.getElementById("diceImage");
const textSpace = document.getElementById("textSpace");
const button = document.getElementById("roll");

const winningScoreInput = document.getElementById("winningScoreInput");

// pics for spinDice
/*
let dicePics = [
    "img/dice1.png",
    "img/dice2.png",
    "img/dice3.png",
    "img/dice4.png",
    "img/dice5.png",
    "img/dice6.png"
];
*/

let winningScore;

let rollValue;
let pointScored = 0;;

let numPlayers = 0;
let currentPlayer = 1;

let p1Score = 0;
let p2Score = 0;

const startGame = () => {
    playerStatus.textContent = `Player ${currentPlayer}`;
    score.textContent = 0;
    diceImage.hidden = true;
    textSpace.textContent = "Enter the score needed to win..."
    winningScoreInput.hidden = false;
    button.textContent = "Roll";
}

const diceRoll = () => {

    diceImage.hidden = false;

    /*
    for (let i = 0; i < 100; i++) {
        setTimeout(function(){                          // Research Timeout more
            rollValue = Math.ceil(Math.random()*6);
            diceImage.src = dicePics[rollValue];
        }, 1000)
    }
    */
    
    rollValue = Math.ceil(Math.random()*6);
    console.log(rollValue);

    switch(rollValue){
        case 1:
            diceImage.src = "img/dice1.png";
            break;
        case 2:
            diceImage.src = "img/dice2.png";
            break;
        case 3:
            diceImage.src = "img/dice3.png";
            break
        case 4:
            diceImage.src = "img/dice4.png";
            break
        case 5:
            diceImage.src = "img/dice5.png";
            break
        case 6:
            diceImage.src = "img/dice6.png";
            break
        default:
            console.log("Error Getting Dice Number");
    }
}

function spinDice() {
    console.log("Visually Roll Dice");
}

const winOrLose = () => {
    scoreAddition();
    if (rollValue == 1) {;
        console.log(`Player ${currentPlayer} Rolled a 1 and Loses! - Score Reset`)
        playerStatus.textContent = "You Lost!"
        button.textContent = "Start Again"
        score.textContent = 0;
        pointScored = 0;
        // winningScoreInput.value = "";
        
    } else if (pointScored > (winningScore - 1)) {
        console.log(`Player ${currentPlayer} WINS with a score of ${pointScored}`);
        playerStatus.textContent = "Winner!"
        score.textContent = pointScored;
        button.textContent = "Start Again"
        pointScored = 0;
        // winningScoreInput.value = "";
       
    } else {
        console.log(`Player ${currentPlayer}'s Score Is: ${pointScored}, Carry On`);
        score.textContent = pointScored;
    }
}

const scoreAddition = () => {
    diceRoll();
    pointScored += rollValue;
}

startGame();

button.addEventListener('click', () => {

    if (winningScoreInput.value == "") {
        textSpace.textContent = "Input Cannot Be Empty, Enter the score needed to win...";
    } else if (winningScoreInput.value >= 2) {
        if (playerStatus.textContent == "Winner!" || playerStatus.textContent == "You Lost!"){
            winningScore = winningScoreInput.value;
            textSpace.textContent = `${winningScore} Wins!`;
            winningScoreInput.value = "";
            startGame();
        } else if (playerStatus.textContent == "Player 1") {
            winningScore = winningScoreInput.value;
            textSpace.textContent = `Score ${winningScore} Or Above To Win!`;
            winningScoreInput.hidden = true;
            winOrLose();
        } else {
            winningScoreInput.hidden = true;
            winOrLose();
        }
    } else {
        console.log("Here 3")
        textSpace.textContent = "Invalid Entry, Enter a number greater than 1 needed to win...";
    }

    /*
    if (playerStatus.textContent == "Winner!" || playerStatus.textContent == "You Lost!"){
        startGame();
    } else {
        winOrLose();
    }
    */
})