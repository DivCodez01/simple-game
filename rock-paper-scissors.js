document.title = "ROCK-PAPER-SCISSORS GAME"

let scores = JSON.parse(localStorage.getItem("scores")) || {
    wins: 0,
    loses: 0,
    ties: 0
};
console.log(scores);

const playersResult = document.querySelector(".players-result");
const playersOut = document.querySelector(".out-players");
const playersScores = document.querySelector(".players-scores");
const resetButton = document.querySelector(".reset-score-button");
const autoPlay = document.querySelector(".auto-play-button");

Array.from(document.querySelectorAll('.player-button'))
    .forEach(playButton => {
        let playerName = playButton.firstElementChild.getAttribute("alt");
        playButton.addEventListener("click", (ev) => {
            playGround(playerName)
            console.log(playerName)
        })
    })


playersScores.innerHTML = `Wins: ${scores.wins}, Loses: ${scores.loses}, Ties: ${scores.ties}`;

function playGround(player) {
    const computerplay = computerPlayer();
    let result = '';

    if (player == 'rock') {

        if (computerplay == 'rock') {
            result = 'Tie.'
        } else if (computerplay == 'paper') {
            result = 'You lose.'
        } else if (computerplay == 'scissors') {
            result = 'You win.'
        }
    } else if (player == 'paper') {
        if (computerplay == 'rock') {
            result = 'You win.'
        } else if (computerplay == 'paper') {
            result = 'Tie.'
        } else if (computerplay == 'scissors') {
            result = 'You lose.'
        }
    } else if (player == 'scissors') {
        if (computerplay == 'rock') {
            result = 'You lose.'
        } else if (computerplay == 'paper') {
            result = 'You win.'
        } else if (computerplay == 'scissors') {
            result = 'Tie.'
        }
    }

    if (result == 'You win.') {
        scores.wins += 1;
    } else if (result == "You lose.") {
        scores.loses += 1;
    } else {
        scores.ties += 1;
    }

    playersResult.innerHTML = result;
    playersOut.innerHTML = `You 
    <img src='images/${player}Img.jfif' alt='${player}'/>  
    <img src='images/${computerplay}Img.jfif' alt='${computerplay}'/> 
    Computer`

    playersScores.innerHTML = `Wins: ${scores.wins}, Loses: ${scores.loses}, Ties: ${scores.ties}`;

    localStorage.setItem("scores", JSON.stringify(scores));
    console.log(`Wins: ${scores.wins}, Loses: ${scores.loses}, Ties: ${scores.ties}`)
}

function computerPlayer() {
    let gameRandom = Math.random();

    if (gameRandom >= 0 && gameRandom < 1 / 3) {
        return 'rock';
    } else if (gameRandom >= 1 / 3 && gameRandom < 2 / 3) {
        return 'paper';
    } else if (gameRandom >= 2 / 3 && gameRandom <= 1) {
        return 'scissors';
    }
}

resetButton.addEventListener("click", function (ev) {
    localStorage.clear();
    scores.wins = 0;
    scores.loses = 0;
    scores.ties = 0;
    playersScores.innerHTML = `Wins: ${scores.wins}, Loses: ${scores.loses}, Ties: ${scores.ties}`;
})

let isAutoPlay = false;
let autoPlayTime;

autoPlay.addEventListener("click", function (ev) {
    // autoPlay.classList.toggle('computerPlay');

    // if (autoPlay.classList.contains("computerPlay")) {
    //     autoPlayTime = setInterval(() => {
    //         autoPlayAI();
    //     }, 1200);
    // } else {
    //     clearInterval(autoPlayTime);
    //     autoPlayAI();
    // }

    if (!isAutoPlay) {
        autoPlayTime = setInterval(autoPlayAI, 1200);
        isAutoPlay = true;
    } else {
        clearInterval(autoPlayTime);
        isAutoPlay = false;
    }
})

function autoPlayAI() {
    const playerRandom = Math.floor(Math.random() * 3) + 1;

    if (playerRandom == 1) {
        player = 'rock';
    } else if (playerRandom == 2) {
        player = 'paper';
    } else {
        player = 'scissors';
    }
    playGround(player)
}