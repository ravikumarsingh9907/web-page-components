// For Sidebar
const closeBtn = document.querySelector('.close-btn');
const showBtn = document.querySelector('.toggle-btn');
const sidebar = document.querySelector('.container');
const contact = document.querySelector("#contact");
const service = document.querySelector("#service");
const home = document.querySelector("#home");
const list = document.querySelector(".content-down");

// For Login page
const ToggleBtn = document.querySelector('.login-btn');
const Section = document.querySelector('.main-section-2');
const CloseBtn = document.querySelector('.close-btn-2');

//Sidebar Toggle func.
showBtn.addEventListener('click', function(){
    sidebar.classList.toggle('show-btn');
});

closeBtn.addEventListener('click', function(){
    sidebar.classList.toggle('show-btn');
});

//Login Toggle func.
ToggleBtn.addEventListener('click', () => {
   Section.classList.toggle('showlinks-2');
});

CloseBtn.addEventListener('click', () => {
   Section.classList.toggle('showlinks-2');
});

// menu list toggle func 
list.addEventListener('click', function(){
    sidebar.classList.toggle('show-btn');
});

// small window search menu 

const openToggle = document.querySelector(".open-search");
const closeToggle = document.querySelector(".small-search-close-btn");
const openSearch = document.querySelector(".small-search-sec");

openToggle.addEventListener('click', () => {
    openSearch.classList.toggle('show-small-search');
});

closeToggle.addEventListener('click', () => {
    openSearch.classList.toggle('show-small-search');
});
