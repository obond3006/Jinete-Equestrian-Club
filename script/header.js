// Burger menu

(function() {
    const burgerBtn = document.querySelector('.burger');
    const burgerMenu = document.querySelector('.burger-links');
    const header = document.querySelector('.header__container')

    function openBurger () {
        burgerBtn.classList.toggle('active');
        burgerMenu.classList.toggle('active');
        header.classList.toggle('active');       
    }

    burgerBtn.onclick = openBurger;
})()