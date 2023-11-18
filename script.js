const nav_buttons=document.querySelector('.nav');
const buttons=document.querySelectorAll('.nav-link');
let button=nav_buttons.querySelector('.nav-link_active');
const h=document.documentElement.clientHeight;

// nav_buttons.addEventListener('click',(event)=>{
    // if (event.target===nav_buttons || event.target===button) return;
    // button.classList.remove('nav-link_active');
    // button=event.target;
    // button.classList.add('nav-link_active');
// })

window.addEventListener('scroll', () => {
    button.classList.remove('nav-link_active');
    if (scrollY <= h){
        button=buttons[0]
    }
    else if (scrollY<=h*2){
        button=buttons[1]
    }
    else if (scrollY<=h*3){
        button=buttons[2]
    }
    else if (scrollY<=h*4){
        button=buttons[3]
    }
    else if (scrollY<=h*5){
        button=buttons[4]
    }
    button.classList.add('nav-link_active');
});