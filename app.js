const list = document.querySelector('.navbar__list');
const menuIcon = document.querySelector('.navbar__menu-icon');
menuIcon.addEventListener('click', () => {
    list.style.transform = 'translateX(0%)';
});

const closeButton = document.querySelector('.navbar__close');

closeButton.addEventListener('click', () => {
    list.style.transform = 'translateX(-100%)';
});