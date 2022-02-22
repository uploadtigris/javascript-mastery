'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', function () {
        console.log('button clicked');
        modal.classList.remove('hidden');
        //do not use a '.' selector as you are just passing hidden.
        overlay.classList.remove('hidden');
    });

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
//closeModal function executes only after the btn is clicked.

