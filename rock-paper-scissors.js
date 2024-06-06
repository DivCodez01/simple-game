let scores = {
    wins: 0,
    loses: 0,
    ties: 0
};

const result = document.querySelector(".result");

let { wins, loses, ties } = scores;

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
        wins += 1;
    } else if (result == "You lose.") {
        loses += 1;
    } else {
        ties += 1;
    }
    console.log(`Wins: ${wins}, Loses: ${loses}, Ties: ${ties}`);
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