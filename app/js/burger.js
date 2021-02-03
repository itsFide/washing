// Burger-menu 
function burgerMenu() {
    let burger = document.querySelector('.burger');
    let menu = document.querySelector('.menu__list');
      burger.addEventListener('click', () => {
        menu.classList.toggle('active');
        burger.classList.toggle('active-burger');
      });   
};
burgerMenu();