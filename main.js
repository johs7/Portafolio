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
  sr.reveal('.home-text',{delay:700,origin:'bottom'});
  sr.reveal('.home_img',{delay:700,origin:'top'});

  sr.reveal('.acerca',{delay:700,origin:'left'});

  sr.reveal('.heading,.col',{delay:700,origin:'left'});