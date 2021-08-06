const menuButton = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__responsive-menu');
const closeMenu = document.querySelector('.menu__close');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
});

closeMenu.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
});
