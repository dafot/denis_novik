
document.addEventListener("DOMContentLoaded", () => {

    const toolbar = document.querySelector('.toolbar');
    const footer = document.querySelector('footer');
    const hero = document.querySelector('.hero');    
    const burgerMenu = document.querySelector('.burger-menu');
    const menuList = document.querySelector('.menu__list');

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        menuList.classList.toggle('active');
    })
})