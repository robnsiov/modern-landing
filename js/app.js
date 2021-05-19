
let _ = document;
let header = _.querySelector('header');
let toggle = _.querySelector('.toggle');
let menu = _.querySelector('.menu');
let lastMenu = _.querySelector('.last-menu');
let firstMenu = _.querySelector('.first-menu');
toggle.addEventListener('click', ()=>{
    menu.classList.toggle('change');
    header.classList.toggle('change-bg');
    lastMenu.classList.toggle('last-m');
    firstMenu.classList.toggle('first-m');
})