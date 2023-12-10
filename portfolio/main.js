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
let nums = document.querySelectorAll(".box .num");
let spans = document.querySelectorAll(".bar .barr");
let preBar = document.querySelectorAll('.progress h3 span');
let about = document.querySelector(".about");
let started = false;
window.onscroll = function(){
    if(window.scrollY >= about.offsetTop){
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
        preBar.forEach((p) => {
            p.textContent = p.dataset.pre;
        })
        if(!started){
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
    else{
        spans.forEach((span) => {
            span.style.width = 0;
        });
        preBar.forEach((p) => {
            p.textContent = '0%';
        })
        if(started){
            nums.forEach((num) => backCount(num));
        }
        started = false;
    }
};
function startCount(el){
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count);
        }
    },1000/goal);
}
function backCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        if (el.textContent > 0) {
            el.textContent--;
        } else {
            clearInterval(count);
        }
    }, 1000 / goal);
}

