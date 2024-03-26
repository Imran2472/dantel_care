let menubar = document.querySelector('.menu-bar')
let ul = document.querySelector('ul')
let nav = document.querySelector('nav')

menubar.onclick = () =>{
    menubar.classList.toggle('fa-close')
    ul.classList.toggle('active');
}
window.onscroll = () =>{
    ul.classList.remove('active');
    menubar.classList.remove('fa-close')


    if(window.scrollY > 0){
        nav.classList.add('active');
    }else{
        nav.classList.remove('active');

    }
}
