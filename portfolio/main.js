let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}
let themetoggler = document.querySelector('#theme-toggler');
themetoggler.onclick = () =>{
    
    themetoggler.classList.toggle('fa-moon');
    themetoggler.classList.toggle('fa-sun');

    if(themetoggler.classList.contains('fa-sun')){
        document.body.classList.add('active1');
    }
    else{
        document.body.classList.remove('active1');
    }
}