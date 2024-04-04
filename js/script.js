const navbarNav=document.querySelector('.navbar-nav');
const hamburgermenu=document.querySelector('#hamburger-menu');
hamburgermenu.addEventListener('click' ,function(){
navbarNav.classList.toggle('active')

document.addEventListener('click', function(e){
if(!navbarNav.contains(e.target)&&!hamburgermenu.contains(e.target)){
    navbarNav.classList.remove('active')
}
});
});
const produkImg=document.querySelectorAll('.product-img');
const modal=document.querySelector('.modal');

const modalContainer=document.querySelector('.modal-container');
const closeIcon=document.querySelector('.close-icon');

produkImg.forEach ((btn) =>{
    btn.onclick=(e)=>{
        modal.style.display="flex"
        e.preventDefault();
    }
})
closeIcon.addEventListener('click',function(e){
    modal.style.display="none"
    e.preventDefault()
});
const navbar=document.querySelector('.navbar');
modal.addEventListener('click',function(e){
    if(!modalContainer.contains(e.target)){
        modal.style.display='none'
   
    }
   
});

const searchButton=document.querySelector('.search-button');
const searchForm=document.querySelector('.search-form');
searchButton.addEventListener('click',function(e){
   searchForm.classList.toggle('active');
   e.preventDefault();
})
document.addEventListener('click',function(e){

    if(!searchButton.contains(e.target)&&!searchForm.contains(e.target)){
        searchForm.classList.remove('active');
        
    }
})

const cartForm=document.querySelector('.cart-form');
const cartButton=document.querySelector('.cart-button');
cartButton.addEventListener('click', function(e){
cartForm.classList.toggle('active')
e.preventDefault();
});
window.onclick=(e)=>{
    if(!cartButton.contains(e.target)&& !cartForm.contains(e.target)){
        cartForm.classList.remove('active')
       
    }
}


