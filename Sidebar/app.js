const closeBtn = document.querySelector('.close-toggle');
const showBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.container');

showBtn.addEventListener('click', function(){
    sidebar.classList.toggle('show-btn');
});

closeBtn.addEventListener('click', function(){
    sidebar.classList.toggle('show-btn');
});
