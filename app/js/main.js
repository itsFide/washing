// Slider
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints:{
      320:{
        slidesPerView:1,
      },
      700:{
        slidesPerView:2,
      },
      900:{
        slidesPerView:3,
      }
    },
    effect: 'slide',
    slidesPerView:3,
    // Navigation arrows
    spaceBetween: 40,
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


let problemItem = document.querySelectorAll('.problem-item');
problemItem.forEach((event)=>{
    event.addEventListener('click', ()=>{
        clearClass();
        event.classList.add('active');
    })
})
function clearClass(){
    problemItem.forEach((event)=>{
        event.classList.remove('active')
    })
}
// custom select
let selectWrapper = document.querySelector('.mobile-select-wrapper');
let selectItems = document.querySelectorAll('.mobile-problem-item');
let mainItem = document.querySelector('.main-item')
let mainItemHeight = mainItem.clientHeight;


selectItems.forEach((event)=>{
  mainItem.addEventListener('click', (e)=>{
    selectWrapper.classList.toggle('hidden');
    mainItem.classList.toggle('active')
  })
  
  event.addEventListener('click',()=>{
    mainItem.innerHTML = ''
    
    selectWrapper.classList.add('hidden')
    mainItem.insertAdjacentHTML('beforeend', event.outerHTML);
  })
})