'using strict';

// selecting the elements:
// writing to select the name of the id
// THESE ARE DOM ELEMENTS
const score0El = document.querySelector('#score--0');
// passing in the Id as an argument
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');
// buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

const init = function () {
    // starting conditions
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active'); //bc we need one active as we start;
    player1El.classList.remove('player--acive');
}
init();

switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    // switch to the next player
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

//Rolling Dice Functionality
btnRoll.addEventListener('click', function () {
    if (playing) {
        //1. Generate random diceroll
        const dice = Math.trunc(Math.random() * 6) + 1

        //2. Display Dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        // console.log(dice);

        //3. Check for rolled is 1: if true, switch to the next player.
        if (dice !== 1) {
            //add the dice to the current score.
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
})

btnHold.addEventListener('click', function () {
    if (playing) {
        console.log('Hold Button');

        //1. Add current score to active player's score
        scores[activePlayer] += currentScore;

        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        //2. Check if Player's score >= 100;
        if (scores[activePlayer] >= 100) {
            //Finish the game
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            //3. Switch to the next player.
            switchPlayer();
        }
    }
})

// first attempt
/*
btnNew.addEventListener('click', function () {

    // set scores to zero
    document.getElementById(`score--0`).textContent = 0;
    document.getElementById(`score--0`).textContent = 0;

    // set score tracker to zero
    scores[0] = 0;
    scores[1] = 1;

    // reset the html properties
    document.querySelector(`.player--0`).classList.remove('player--winner');
    document.querySelector(`.player--0`).classList.add('player--active');
    document.querySelector(`.player--1`).classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.add('player--active');

    // set current scores to zero
    document.getElementById(`current--0`).textContent = 0;
    document.getElementById(`current--1`).textContent = 0;
})
*/

btnNew.addEventListener('click', init); //init will be called on click
