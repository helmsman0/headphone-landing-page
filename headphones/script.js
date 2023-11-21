function slider(anything){
    document.querySelector('.one').src = anything;
};

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onClick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

const sr = ScrollReveal({
    distance:'65px',
    duration:'2600',
    delay:'450',
    reset:true
});
sr.reveal('.home-img',{ delay:200, origin:'top'});
sr.reveal('.home-text',{ delay:450, origin:'left'});
sr.reveal('.main',{ delay:550, origin:'left'});
sr.reveal('.bottom',{ delay:100, origin:'bottom'});