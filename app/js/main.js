// Select 
const select = new Select('#select', {
    placeholder: 'Выберите элемент',
    selectedId: '1',
    data: [
        {id: '1', value: 'React'},
        {id: '2', value: 'Angular'},
        {id: '3', value: 'Vue'},
        {id: '4', value: 'React Native'},
        {id: '5', value: 'Next'},
        {id: '6', value: 'Nest'}
    ],
    onSelect(item) {
        const input = document.querySelector('.hidden__input')
        input.value = item.value
    } 
})


// Slick
$('.slick__fullscreen').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    nextArrow : '<div class="slick-arrow slick__next"><img src="./img/right-arrow.svg" alt=""></div>',
    prevArrow : '<div class="slick-arrow slick__prev"><img src="./img/left-arrow.svg" alt=""></div>'
});