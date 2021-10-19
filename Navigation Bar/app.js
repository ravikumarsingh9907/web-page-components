const Btn = document.querySelector('.Btn');
const ShowNavList = document.querySelector('.nav-list');

Btn.addEventListener('click', function() {
    ShowNavList.classList.toggle('show-list');
})
