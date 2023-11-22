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
console.log(h)
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
    console.log(scrollY)
    
    button.classList.add('nav-link_active');
});




const burger_button=document.querySelector('.mobile-button');
const burger_button_img=burger_button.querySelector('img');
const mobile_menu=document.querySelector('.mobile-nav');
const mobile_buttons=document.querySelectorAll('.mobile-nav .nav-link');
const body=document.querySelector('body');

burger_button.onclick=()=>{
    if (burger_button.getAttribute('clicked')==='false'){
        burger_button_img.setAttribute('src','/images/close_menu.png')
        burger_button.setAttribute('clicked','true')
        mobile_menu.classList.remove('hide')
        body.classList.add('menu-open')
    }
    else if(burger_button.getAttribute('clicked')==='true'){
        burger_button_img.setAttribute('src','/images/mobile_menu.png')
        burger_button.setAttribute('clicked','false')
        mobile_menu.classList.add('hide')
        body.classList.remove('menu-open')
    }
}

mobile_menu.addEventListener('click',(event)=>{
    if (event.target===mobile_menu) return;
    console.log(1)
    burger_button_img.setAttribute('src','/images/mobile_menu.png');
    burger_button.setAttribute('clicked','false');
    mobile_menu.classList.add('hide');
    body.classList.remove('menu-open')
})
