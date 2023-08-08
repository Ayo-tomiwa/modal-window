'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll
  ('.show-modal');


const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

let i = 0;
for (; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', function
    () {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden');

    // modal.style.display = 'block'
  });


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
