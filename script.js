const nav_buttons=document.querySelector('.nav');
let button=nav_buttons.querySelector('.nav-link_active');
nav_buttons.addEventListener('click',(event)=>{
    if (event.target===nav_buttons || event.target===button) return;
    button.classList.remove('nav-link_active');
    button=event.target;
    button.classList.add('nav-link_active');
})