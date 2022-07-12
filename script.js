'use strict';

const btnShowModel = document.querySelectorAll('.show-modal');
const btnCloseModel = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const showModel = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for (let i = 0; i < 3; i++) {
    btnShowModel[i].addEventListener('click', showModel);
}

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModel.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }
})
