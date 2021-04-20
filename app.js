const hamburger = document.querySelector ('.header .nav .navl .hamburger');
const mobile_menu = document.querySelector ('.header .nav .navl ul');
const menu_item = document.querySelectorAll('.header .nav .navl ul li a');
const header = document.querySelector ('.header .container');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll',()=>{
    varscrollposition = window.scrollY;
    if(varscrollposition > 250){
        header.style.backgroundColor = '#29323c';
    }
    else{
        header.style.backgroundColor = 'transparent';
    }
});
menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});