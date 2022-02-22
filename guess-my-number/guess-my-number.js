'use strict';
/*
// how to select an element
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector(secretNumber').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 0;
*/

//Event Listeners
//Only called when the event happens.
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; //it's good to keep our score in the code.
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //no input
    if (!guess) {
        // document.querySelector('.message').textContent = 'No Number!';
        displayMessage('No Number!');
    } else if (guess === secretNumber) {
        displayMessage('Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }


        //when guess is wrong.
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');

            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You Lost the Game!')
            document.querySelector('.score').textContent = 0;
        }
    }
    //     else if (guess > secretNumber) {
    //         if (score > 1) {
    //             document.querySelector('.message').textContent = 'Too High!';
    //             score--;
    //             document.querySelector('.score').textContent = score;
    //         } else {
    //             document.querySelector('.message').textContent = 'You Lost the Game!';
    //             document.querySelector('.score').textContent = 0;
    //         }
    //     }
    //     //guess is too low
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too Low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You Lost the Game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    const secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start Guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})
