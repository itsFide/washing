let burger = document.querySelector('.burger')
let menu = document.querySelector('.mobile-menu')
// Мобильное меню бургер
function burgerMenu() {
    
    burger.addEventListener('click', () => {
      if (!menu.classList.contains('active')) {
        menu.classList.add('active')
        burger.classList.add('active-burger')
      } else {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
      }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
      if (window.innerWidth > 660) {
          menu.classList.remove('active')
          burger.classList.remove('active-burger')
      }
    })
}
burgerMenu()
let mobileLink = document.querySelectorAll('.mobile-menu-link');
mobileLink.forEach((event)=>{
  event.addEventListener('click',(e)=>{
    clearCurrent();
    e.preventDefault();
    event.classList.add('current-item')
    menu.classList.remove('active')
    burger.classList.remove('active-burger') 
  })
})
function clearCurrent(){
  mobileLink.forEach((event)=>{
    event.classList.remove('current-item')
  })
}
// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 500 
  if ( window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
// window.addEventListener('scroll', fixedNav)
