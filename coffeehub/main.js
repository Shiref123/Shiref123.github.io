const cart = document.querySelector('.landing header .option .image');
const open = document.querySelector('.open');
const x = document.querySelector('.open .head i');
const toggle = document.querySelector('.landing header i');
const ul = document.querySelector('.landing header ul');
const option = document.querySelector('.landing header .option');

// Function to close the list
const windowWidth = window.innerWidth;
    if (windowWidth < 819) {
function closeList() {
    ul.style.display = 'none';
    option.style.display = 'none';
    toggle.classList.remove('fa-xmark');
    toggle.classList.add('fa-bars-staggered');
}

toggle.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent closing when clicking on the icon
    toggle.classList.toggle('fa-bars-staggered');
    toggle.classList.toggle('fa-xmark');

    const windowWidth = window.innerWidth;
    if (windowWidth < 819) {
        if (toggle.classList.contains('fa-bars-staggered')) {
            closeList();
        } else if (toggle.classList.contains('fa-xmark')) {
            ul.style.display = 'flex';
            option.style.display = 'flex';
        }
    }
});

// Event listener to close list when clicking anywhere on the page
document.addEventListener('click', (event) => {
    const target = event.target;
    const windowWidth = window.innerWidth;
    if (windowWidth < 819 && !target.closest('.landing header')) {
        closeList();
    }
});
    }

// Event listener to close list when an item is selected in ul or option
ul.addEventListener('click', closeList);
option.addEventListener('click', closeList);

cart.addEventListener('click',()=>{
    open.style.width ='90%';
    open.style.height ='60%';
});
x.addEventListener('click',()=>{
    open.style.width ='0%';
    open.style.height ='0%';
});
function showMsg(){
    let product = document.querySelector('.pro');
    let msg = document.createElement('div');
    msg.classList.add('msg');
    msg.innerHTML =`
    Added
    `;
    product.appendChild(msg);
    setTimeout(() => {
        msg.remove();
    },5000);
    msg.addEventListener('click',()=>{
        open.style.width ='90%';
        open.style.height ='60%';
    });
}
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


let products = [
    {
        id:1,
        name:'Cappuccino',
        image:'4.png',
        price:35,
    },
    {
        id:2,
        name:'Ice Coffee',
        image:'5.png',
        price:30,
    },
    {
        id:3,
        name:'Frappuccino',
        image:'6.png',
        price:40,
    },
    {
        id:4,
        name:'Caffe Mocha',
        image:'7.png',
        price:25,
    },
    {
        id:5,
        name:'Caffe Macchiata',
        image:'8.png',
        price:28,
    },
    {
        id:6,
        name:'Coffe',
        image:'4.png',
        price:33,
    }
];
let listCards =[];
const allpro = document.querySelector('.pro .allpro');
function initApp(){
    products.forEach((value,key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('product');
        newDiv.innerHTML = `
        <div class="image">
        <img src="../coffeehub/image/${value.image}" alt=""></div>
        <div class="detals">
                    <h4>${value.name}</h4>
                    <p>${value.price}</p>
                    <button onclick="addToCard(${key}),showMsg()">add to cart</button>
                </div>
        `;
        allpro.appendChild(newDiv);
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
const openpro = document.querySelector('.openpro');
let total = document.querySelector('.open .calc div span');
let quantity = document.querySelector('.quantity');

function reloadCard(){
    openpro.innerHTML = '';
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
            <img src="../coffeehub/image/${value.image}" alt=""></div>
            <h4>${value.name}</h4>
            <div class="edit">
            <button class="plus" onclick="changeQuantity(${key},${value.quantity + 1})">+</button>
            <span class="number">${value.quantity}</span>
            <button class="minus" onclick="changeQuantity(${key},${value.quantity - 1})">-</button>
            </div>
            <i class="fa-solid fa-trash-can delete" onclick="deleteProduct(${key})"></i>
            `;
            openpro.appendChild(newDiv);
        }
    })
    total.innerHTML = totalPrice.toLocaleString();
    quantity.innerHTML = count;

}
    function deleteProduct(key){
    
        delete listCards[key];
        reloadCard();
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
