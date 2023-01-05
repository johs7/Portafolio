const header=document.querySelector('header');

window.addEventListener('scroll', function(){
header.classList.toggle('sticky', window.scrollY > 0);


}
);
const scroll = new SmoothScroll('a[href*="#"]');
speed:800;