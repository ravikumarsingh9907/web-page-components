const ToggleBtn = document.querySelector('.btn1');
const Section = document.querySelector('.main-section');
const CloseBtn = document.querySelector('.close-btn');

ToggleBtn.addEventListener('click', () => {
   Section.classList.toggle('showlinks');
});

CloseBtn.addEventListener('click', () => {
   Section.classList.toggle('showlinks');
});
