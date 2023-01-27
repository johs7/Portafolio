const header=document.querySelector('header');

window.addEventListener('scroll', function(){
header.classList.toggle('sticky', window.scrollY > 0);


}
);
const scroll = new SmoothScroll('a[href*="#"]');
speed:800;

let menu=document.querySelector('#menu-icon');
let navlist=document.querySelector('.navlist');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};
  const sr=ScrollReveal({
    distance:'145px',
    duration:2500,
    reset:true,
  });

  sr.reveal('.home-text,.row p,.home_img,.s-two,.s-three,.s-six,.s-seven,.s-ten,.s-eleven,.row-two,.row-three,.sub-box'
  ,{delay:900,origin:'left'});

  sr.reveal('.acerca,.s-four,.s-five,.s-eigth,.s-nine,.row-four,.row-five'
  ,{delay:900,origin:'left'});

  sr.reveal('.heading,.col',{delay:900,origin:'left'});