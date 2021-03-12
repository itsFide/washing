// Input mask
const selector = document.querySelector(".phone__input")
const im = new Inputmask("+(99)-999-999-9999", {
	showMaskOnHover: false
})
im.mask(selector)