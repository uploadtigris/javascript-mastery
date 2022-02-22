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


score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;

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
    //1. Generate random diceroll
    const dice = Math.trunc(Math.random() * 6) + 1

    //2. Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    console.log(dice);

    //3. Check for rolled is 1: if true, switch to the next player.
    if (dice !== 1) {
        //add the dice to the current score.
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        switchPlayer();
    }
})

btnHold.addEventListener('click', function () {
    console.log('Hold Button');

    //1. Add current score to active player's score
    score[activePlayer] += currentScore;
    document.getElementById(`current--${activePlayer}`).textContent = scores[activePlayer];

    //2. Check if Player's score >= 100;
    //Finish the game

    //3. Switch to the next player.
    switchPlayer();
})
