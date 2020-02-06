const playerSelectorHTML = document.getElementById("playerSelector")
const singlePlayerScoreHTML = document.getElementById("singlePlayerScore");
const diceImageHTML = document.getElementById("diceImage");
const scoreRequiredTextHTML = document.getElementById("scoreRequiredText");
const scoreToWinInputHTML = document.getElementById("scoreToWinInput");

const rollStartButtonHTML = document.getElementById("rollStartButton");

// No. Player Game Selector
const onePButtonHTML = document.getElementById("1PButton");
const twoPButtonHTML = document.getElementById("2PButton");

// Player Score Table
const p1ScoreTableHeaderHTML = document.getElementById("p1ScoreTableHeader")
const p1ScoreTableCounterHTML = document.getElementById("p1ScoreTableCounter")

const p2ScoreTableHeaderHTML = document.getElementById("p2ScoreTableHeader")
const p2ScoreTableCounterHTML = document.getElementById("p2ScoreTableCounter")

// Player Stats...
const p1StatsTableHeaderHTML = document.getElementById("p1StatsTableHeader");
const p1WinsHTML = document.getElementById("p1Wins");
const p1OnesHTML = document.getElementById("p1Ones");
const p1TwosHTML = document.getElementById("p1Twos");
const p1ThreesHTML = document.getElementById("p1Threes");
const p1FoursHTML = document.getElementById("p1Fours");
const p1FivesHTML = document.getElementById("p1Fives");
const p1SixesHTML = document.getElementById("p1Sixes");

const p2StatsTableHeaderHTML = document.getElementById("p2StatsTableHeader");
const p2WinsHTML = document.getElementById("p2Wins");
const p2OnesHTML = document.getElementById("p2Ones");
const p2TwosHTML = document.getElementById("p2Twos");
const p2ThreesHTML = document.getElementById("p2Threes");
const p2FoursHTML = document.getElementById("p2Fours");
const p2FivesHTML = document.getElementById("p2Fives");
const p2SixesHTML = document.getElementById("p2Sixes");

let winFlag = false;
let loseFlag = false;

let scoreToWin;

let rollValue;

let numPlayers = 0;
let currentPlayer = 0;

let spScore = 0;
let spWins = 0;
let spOnes = 0;
let spTwos = 0;
let spThrees = 0;
let spFours = 0;
let spFives = 0;
let spSixes = 0;

let p1Score = 0;
let p1Wins = 0;
let p1Ones = 0;
let p1Twos = 0;
let p1Threes = 0;
let p1Fours = 0;
let p1Fives = 0;
let p1Sixes = 0;

let p2Score = 0;
let p2Wins = 0;
let p2Ones = 0;
let p2Twos = 0;
let p2Threes = 0;
let p2Fours = 0;
let p2Fives = 0;
let p2Sixes = 0;

const screenRefresh = () => {
    console.log("screenRefresh FUNCTION")
    onePButtonHTML.hidden = false;
    twoPButtonHTML.hidden = false;
    winFlag = false;
    loseFlag = false;
    p1ScoreTableHeaderHTML.hidden = true;
    playerSelectorHTML.hidden = true;
    p2ScoreTableHeaderHTML.hidden = true;
    p1ScoreTableCounterHTML.hidden = true;
    singlePlayerScoreHTML.hidden = true;
    p2ScoreTableCounterHTML.hidden = true;
    diceImageHTML.hidden = true;
    scoreRequiredTextHTML.hidden = true;
    scoreToWinInputHTML.hidden = true;
    rollStartButtonHTML.hidden = true;

    singlePlayerScoreHTML.textContent = 0;
    scoreToWinInputHTML.value = "";

    p1ScoreTableCounterHTML.textContent = 0;
    p2ScoreTableCounterHTML.textContent = 0;
}

const numPlayerCheck = () => {
    console.log("numPlayer FUNCTION")
    onePButtonHTML.hidden = true;
    twoPButtonHTML.hidden = true;

    currentPlayer = 1;

    if (numPlayers == 1) { // Start Single Player Mode
        console.log("numPlayer FUNCTION 1 Player Game")
        p2StatsTableHeaderHTML.hidden = true;

        p2WinsHTML.hidden = true;
        p2OnesHTML.hidden = true;
        p2TwosHTML.hidden = true;
        p2ThreesHTML.hidden = true;
        p2FoursHTML.hidden = true;
        p2FivesHTML.hidden = true;
        p2SixesHTML.hidden = true;

    } else { // Start 2 Player Mode
        console.log("numPlayer FUNCTION 2 Player Game")
        p2StatsTableHeaderHTML.hidden = false;

        p2WinsHTML.hidden = false;
        p2OnesHTML.hidden = false;
        p2TwosHTML.hidden = false;
        p2ThreesHTML.hidden = false;
        p2FoursHTML.hidden = false;
        p2FivesHTML.hidden = false;
        p2SixesHTML.hidden = false;

        p2WinsHTML.textContent = p2Wins;
        p2OnesHTML.textContent = p2Ones;
        p2TwosHTML.textContent = p2Twos;
        p2ThreesHTML.textContent = p2Threes;
        p2FoursHTML.textContent = p2Fours;
        p2FivesHTML.textContent = p2Fives;
        p2SixesHTML.textContent = p2Sixes;

    }
    p1WinsHTML.textContent = p1Wins;
    p1OnesHTML.textContent = p1Ones;
    p1TwosHTML.textContent = p1Twos;
    p1ThreesHTML.textContent = p1Threes;
    p1FoursHTML.textContent = p1Fours;
    p1FivesHTML.textContent = p1Fives;
    p1SixesHTML.textContent = p1Sixes;

    winningNumberSelect();
}

const winningNumberSelect = () => {
    console.log("winningNumberSelect FUNCTION")
    scoreRequiredTextHTML.hidden = false;
    scoreRequiredTextHTML.textContent = "Enter the score needed to win...";

    /*
    scoreToWinInputHTML.value = "";
    console.log(`Score To Win INPUT ${scoreToWinInputHTML.textContent}`);
    */

    scoreToWinInputHTML.hidden = false;

    rollStartButtonHTML.hidden = false;
    rollStartButtonHTML.textContent = "Start";

    numPlayerLayout();
}

const numPlayerLayout = () => {
    console.log("numPlayerLayout FUNCTION")
    playerSelectorHTML.hidden = false;

    if (numPlayers == 1) {
        console.log("numPlayerLayout FUNCTION 1 Player Game")
        // playerSelectorHTML.textContent = "Single Player";
        playerSelectorHTML.textContent = "Single Player";
        singlePlayerScoreHTML.hidden = false;

    } else {
        console.log("numPlayerLayout FUNCTION 2 Player Game")
        playerSelectorHTML.textContent = "Player 1 to Start";
        p1ScoreTableHeaderHTML.hidden = false;
        p1ScoreTableCounterHTML.hidden = false;
        p2ScoreTableHeaderHTML.hidden = false;
        p2ScoreTableCounterHTML.hidden = false;

    }
}

const winOrLose = () => {
    console.log("winOrLose FUNCTION")
    scoreAddition();
    if (rollValue == 1) {
        console.log("winOrLose FUNCTION 1 Rolled")
        playerSelectorHTML.textContent = `Player ${currentPlayer} Lost!`;
        loseFlag = true;
        rollStartButtonHTML.textContent = "Start Again";
        // NEW
        if (numPlayers == 1) {
            console.log("winOrLose FUNCTION Single Player")
            spScore = 0;
            singlePlayerScoreHTML.hidden = true;
            scoreRequiredTextHTML.hidden = true;    
        } else if (currentPlayer == 1) {
            console.log("winOrLose FUNCTION Player 1 Loses")
            p1Score = 0;
            p2Score = 0;
            p2Wins += 1;
        } else {
            console.log("winOrLose Function Player 2 Loses")
            p1Score = 0;
            p2Score = 0;
            p1Wins += 1;
        }
        updateStats();

    } else if (spScore > (scoreToWin - 1)) {
        playerSelectorHTML.textContent = `Player ${currentPlayer} Wins!`;
        winFlag = true;
        singlePlayerScoreHTML.textContent = spScore;
        scoreRequiredTextHTML.hidden = true;
        rollStartButtonHTML.textContent = "Start Again";
        // NEW
        if (numPlayers == 1) {
            spScore = 0;
            p1Wins = p1Wins + 1;
        } else if (currentPlayer == 1) {
            p1Score = 0;
            p2Score = 0;
            p1Wins += 1;
        } else {
            p1Score = 0;
            p2Score = 0;
            p2Wins += 1;
        }
        updateStats();

    } else {
        // NEW
        if (numPlayers == 1) {
            singlePlayerScoreHTML.textContent = spScore;

        } else if (currentPlayer == 1) {
            p1ScoreTableCounterHTML.textContent = p1Score;
            currentPlayer = 2;
        } else {
            p2ScoreTableCounterHTML.textContent = p2Score;
            currentPlayer = 1;
        }
        updateStats();
    }

}

const scoreAddition = () => {
    console.log("scoreAddition FUNCTION")
    diceRoll();
    if (numPlayers == 1) {
        console.log('scoreAddition Single Player')
        spScore += rollValue;
    } else {
        // Temp Code for 2 Player
        if (currentPlayer == 1) {
            console.log('scoreAddition Player 1 Values - Change Player')
            p1Score += rollValue;
            // currentPlayer = 2;
            playerSelectorHTML.textContent = "Player 2's Turn";
        } else {
            console.log('scoreAddition Player 2 Values - Change Player')
            p2Score += rollValue;
            // currentPlayer = 1;
            playerSelectorHTML.textContent = "Player 1's Turn";
        }
    }

}

const diceRoll = () => {
    console.log("diceRoll FUNCTION")
    rollValue = Math.ceil(Math.random() * 6);
    displyDiceImage();
}

const displyDiceImage = () => {
    console.log("displayDiceImage FUNCTION")
    if (currentPlayer == 1) {
        console.log('displayDiceImage Player 1')
        switch (rollValue) {
            case 1:
                diceImageHTML.src = "img/dice1.png";
                p1Ones = p1Ones + 1;
                break;
            case 2:
                diceImageHTML.src = "img/dice2.png";
                p1Twos = p1Twos + 1;
                break;
            case 3:
                diceImageHTML.src = "img/dice3.png";
                p1Threes = p1Threes + 1;
                break
            case 4:
                diceImageHTML.src = "img/dice4.png";
                p1Fours = p1Fours + 1;
                break
            case 5:
                diceImageHTML.src = "img/dice5.png";
                p1Fives = p1Fives + 1;
                break
            case 6:
                diceImageHTML.src = "img/dice6.png";
                p1Sixes = p1Sixes + 1;
                break
            default:
                console.log("Error Getting Dice Number");
        }
    } else {
        console.log('displayDiceImage Player 2')
        switch (rollValue) {
            case 1:
                diceImageHTML.src = "img/dice1.png";
                p2Ones = p2Ones + 1;
                break;
            case 2:
                diceImageHTML.src = "img/dice2.png";
                p2Twos = p2Twos + 1;
                break;
            case 3:
                diceImageHTML.src = "img/dice3.png";
                p2Threes = p2Threes + 1;
                break
            case 4:
                diceImageHTML.src = "img/dice4.png";
                p2Fours = p2Fours + 1;
                break
            case 5:
                diceImageHTML.src = "img/dice5.png";
                p2Fives = p2Fives + 1;
                break
            case 6:
                diceImageHTML.src = "img/dice6.png";
                p2Sixes = p2Sixes + 1;
                break
            default:
                console.log("Error Getting Dice Number");
        }
    }

}

const updateStats = () => {
    console.log("updateStats FUNCTION")
    if (numPlayers == 1) {
        console.log('updateStats FUNCTION 1 Player')
        p1WinsHTML.textContent = p1Wins;
        p1OnesHTML.textContent = p1Ones;
        p1TwosHTML.textContent = p1Twos;
        p1ThreesHTML.textContent = p1Threes;
        p1FoursHTML.textContent = p1Fours;
        p1FivesHTML.textContent = p1Fives;
        p1SixesHTML.textContent = p1Sixes;
    } else {
        console.log('updateStats FUNCTION Both Players')
        p1WinsHTML.textContent = p1Wins;
        p1OnesHTML.textContent = p1Ones;
        p1TwosHTML.textContent = p1Twos;
        p1ThreesHTML.textContent = p1Threes;
        p1FoursHTML.textContent = p1Fours;
        p1FivesHTML.textContent = p1Fives;
        p1SixesHTML.textContent = p1Sixes;

        p2WinsHTML.textContent = p2Wins;
        p2OnesHTML.textContent = p2Ones;
        p2TwosHTML.textContent = p2Twos;
        p2ThreesHTML.textContent = p2Threes;
        p2FoursHTML.textContent = p2Fours;
        p2FivesHTML.textContent = p2Fives;
        p2SixesHTML.textContent = p2Sixes;
    }
}

// ********************
//
// Game Starts Here....
//
// ********************
screenRefresh();
onePButtonHTML.addEventListener('click', () => {
    console.log("1 Player Game Button Pressed")
    numPlayers = 1;
    numPlayerCheck();
})

twoPButtonHTML.addEventListener('click', () => {
    console.log("2 Player Game Button Pressed")
    numPlayers = 2;
    numPlayerCheck();
})

// Check for button press...
rollStartButtonHTML.addEventListener('click', () => {

    if (scoreToWinInputHTML.value == "") {
        consile.log("Input is Blank")
        scoreRequiredTextHTML.textContent = "Input Cannot Be Empty, Enter the score needed to win...";
    } else if (scoreToWinInputHTML.value >= 2) {
        console.log("ROLL BUTTON Valid input enetered")
        diceImageHTML.hidden = false;
        rollStartButtonHTML.textContent = "Roll";

        if (winFlag == false && loseFlag == false) {
            console.log("ROLL BUTTON Win or Lose Flag not set")
            scoreToWin = scoreToWinInputHTML.value;
            scoreRequiredTextHTML.textContent = `Score ${scoreToWin} Or Above To Win!`;
            scoreToWinInputHTML.hidden = true;
            winOrLose();
        } else {
            console.log("ROLL BUTTON Win or Lose flag WAS set")
            screenRefresh();
        }
    } else {
        console.log("Not a valid input!")
        scoreRequiredTextHTML.textContent = "Invalid Entry, Enter a number greater than 1 needed to win...";
    }
})