import home from './home'
import menu from './menu'
import about from './about'

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const aboutBtn = document.querySelector('#about');

function clear() {
    document.querySelector('.page').remove();
}

homeBtn.addEventListener('click', function() {
    clear();
    home();
});

menuBtn.addEventListener('click', function() {
    clear();
    menu();
});

aboutBtn.addEventListener('click', function() {
    clear();
    about();
});

home();