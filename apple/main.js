let image = document.querySelector(".phone");
let container = document.querySelector(".container");
let h2 = document.querySelector(".contant .text h2");
let p = document.querySelector(".contant p");
function home(ph,color,hh,pp){
    image.src = ph;
    container.style.background = color;
    h2.innerHTML = hh;
    p.innerHTML = pp
}
//-----------------------------------------------------------------------------------------------
let btnFilter = document.querySelectorAll('.btn-filter a');

// Assuming you have already defined btnFilter and card variables
const filterCards = (e) => {
    let card = document.querySelectorAll('.all');
    // Remove the 'active' class from the previously active element
    const prevActive = document.querySelector('.active');
    if (prevActive) {
        prevActive.classList.remove('active');
    }

    // Add 'active' class to the clicked filter button
    e.target.classList.add('active');
    console.log(e.target.dataset);
    // Get the data-name from the active element
    const activeDataName = e.target.dataset.name;
    console.log(card.dataname);
    card.forEach(item => {
        // Hide all items
        item.style.display = 'none';
        // Show items based on the filter
        if (item.dataset.name === activeDataName || activeDataName === 'all') {
            item.style.display = 'block';
        }
    });
};

btnFilter.forEach(a => a.addEventListener('click', filterCards));
//-------------------------------------------------------------------------------------------------------------
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

//-------------------------------------------------------------------------------------------------------------------------------------------------


let itemsFilter = document.querySelector('.items-filter');
let myproducts = document.querySelector('.myproducts');
let quantity = document.querySelector('.quantity');
let total = document.querySelector('.total span');

let products = [
    {
        id:1,
        name:'i phone 13 pro',
        image:'images1.jpeg',
        price:200,
        dataname:'phones',
        detal:'Apple Store or online at apple, you can score sweet carrier deals.'
    },
    {
        id:2,
        name:'i phone 13',
        image:'images2.jpeg',
        price:250,
        dataname:'phones',
        detal:'Apple Store or online at apple, you can score sweet carrier deals.'
    },
    {
        id:3,
        name:'i phone 14 pro max',
        image:'images3.jpg',
        price:299,
        dataname:'phones',
        detal:'Apple Store or online at apple, you can score sweet carrier deals.'
    },
    {
        id:4,
        name:'i phone 12 pro',
        image:'images4.jpeg',
        price:140,
        dataname:'phones',
        detal:'Apple Store or online at apple, you can score sweet carrier deals.'
    },
    {
        id:5,
        name:'i phone 14 pro ',
        image:'images5.jpg',
        price:300,
        dataname:'phones',
        detal:'Apple Store or online at apple, you can score sweet carrier deals.'
    },
    {
        id:6,
        name:'i phone 12 pro max',
        image:'images6.jpg',
        price:255,
        dataname:'phones',
        detal:'Apple Store or online at apple, you can score sweet carrier deals.'
    },
    {
        id:7,
        name:'i pad pro',
        image:'images7.jpg',
        price:120,
        dataname:'pads',
        detal:'Apple Store or online at apple, you can score sweet carrier deals.'
    },
    {
        id:8,
        name:'i pad plus',
        image:'images8.jpg',
        price:299,
        dataname:'pads',
        detal:'Apple Store or online at apple, you can score sweet carrier deals.'
    },
    {
        id:9,
        name:'i pad 5 plus',
        image:'images9.jpg',
        price:185,
        dataname:'pads',
        detal:'Apple Store or online at apple, you can score sweet carrier deals.'
    },
    {
        id:10,
        name:'apple watch 8 altra',
        image:'images14.jpeg',
        price:99,
        dataname:'watchs',
        detal:'Apple Store or online at apple, you can score sweet carrier deals.'
    },
    {
        id:11,
        name:'apple watch 7 altra',
        image:'images16.jpeg',
        price:105,
        dataname:'watchs',
        detal:'Apple Store or online at apple, you can score sweet carrier deals.'
    },
    {
        id:12,
        name:'apple pods pro',
        image:'images10.jpeg',
        price:120,
        dataname:'pods',
        detal:'Apple Store or online at apple, you can score sweet carrier deals.'
    },
    {
        id:13,
        name:'apple pods',
        image:'images11jpg.jpg',
        price:125,
        dataname:'pods',
        detal:'Apple Store or online at apple, you can score sweet carrier deals.'
    },
    {
        id:14,
        name:'apple pods pro',
        image:'images12.jpeg',
        price:140,
        dataname:'pods',
        detal:'Apple Store or online at apple, you can score sweet carrier deals.'
    },
    {
        id:15,
        name:'mac book air',
        image:'images13.jpeg',
        price:420,
        dataname:'mac',
        detal:'Apple Store or online at apple, you can score sweet carrier deals.'
    },
    {
        id:16,
        name:'mac book air 14',
        image:'images14.jpg',
        price:450,
        dataname:'mac',
        detal:'Apple Store or online at apple, you can score sweet carrier deals.'
    },
    {
        id:17,
        name:'mac book air 15',
        image:'images15.jpeg',
        price:400,
        dataname:'mac',
        detal:'Apple Store or online at apple, you can score sweet carrier deals.'
    }
    
]

let listCards =[];
function initApp(){
    products.forEach((value,key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item','all');
        newDiv.dataset.name = value.dataname;
        newDiv.innerHTML = `
        <div class="image">
        <img src="../apple/image/${value.image}" alt=""></div><hr>
        <h4>${value.name}</h4>
        <h6>${value.price} $</h6>
        <p>${value.detal}</p>
        <button onclick="addToCard(${key}),showMsg()"> add to cart </button>
        `;
        itemsFilter.appendChild(newDiv);
    })
}
initApp();

function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    myproducts.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value,key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value !=null){
            let newDiv = document.createElement('div');
            newDiv.classList.add('myproduct');
            newDiv.setAttribute('id',`myproduct${key}`);
            newDiv.innerHTML = `
            <div class="image">
            <img src="../apple/image/${value.image}" alt=""></div>
            <h4>${value.name}</h4>
            <div class="edit">
            <button class="plus" onclick="changeQuantity(${key},${value.quantity + 1})">+</button>
            <span class="number">${value.quantity}</span>
            <button class="minus" onclick="changeQuantity(${key},${value.quantity - 1})">-</button>
            </div>
            <i class="fa-solid fa-trash-can delete" onclick="deleteProduct(${key})"></i>
            `;
            myproducts.appendChild(newDiv);
        }
    })
    total.innerHTML = totalPrice.toLocaleString();
    quantity.innerHTML = count;

}
function deleteProduct(key){
    
    delete listCards[key];
    reloadCard();
    console.log(listCards);
}
function changeQuantity(key, quantity){
    if(quantity ==0){
        delete listCards[key];
    }
    else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}




let iconCart = document.querySelector('.cart-icon');
let myitems = document.querySelector('.myitems');
let xIcon = document.querySelector('.myitems .headmy i');



iconCart.addEventListener('click',function(){
    myitems.style.transform='translateX(0)';
});
xIcon.addEventListener('click',function(){
    myitems.style.transform='translateX(5000px)';
});


const button = document.querySelector('.up');


window.onscroll = () =>{
  if (window.scrollY >= 600 ) {
    button.style.display ="block";
  }else{
    button.style.display ="none";

  }
}
button.addEventListener("click",()=>{
  window.scrollTo({
    left:0,
    top:0,
  })
})
function showMsg(){
    let product = document.querySelector('.products');
    let msg = document.createElement('div');
    msg.classList.add('msg');
    msg.innerHTML =`
    <i class="fa-solid fa-circle-check"></i> 
    product added
    `;
    product.appendChild(msg);
    setTimeout(() => {
        msg.remove();
    },5000)
}
