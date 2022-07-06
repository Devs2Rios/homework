// -------------------------------------------------------------------------
// Coding challenge 10 - Part 7 #2
// -------------------------------------------------------------------------
'use strict';
// -------------------------------------------------------------------------
// HTML elements
// -------------------------------------------------------------------------
const modal = document.querySelector('.modal'),
  overlay = document.querySelector('.overlay'),
  bOpenModal = document.querySelectorAll('.show-modal'),
  bCloseModal = document.querySelector('.close-modal');
// -------------------------------------------------------------------------
// Make the modal windows work
// -------------------------------------------------------------------------
// Utility
const openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  },
  closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };
// Global events
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    event.target.blur(); // Remove focus from an element
    event.preventDefault();
    closeModal();
  }
});
// Element events
for (const btn of bOpenModal) btn.addEventListener('click', openModal);
bCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
// -------------------------------------------------------------------------
