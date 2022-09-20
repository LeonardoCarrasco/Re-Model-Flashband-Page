let iconBar = document.querySelector('#bar-icon');

let menuContainer = document.querySelector(".container-menu");

let body = document.getElementsByTagName('body');


    iconBar.addEventListener('click',()=>{
        menuContainer.classList.toggle('active');
    })     
        
