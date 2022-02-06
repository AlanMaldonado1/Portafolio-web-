window.onscroll = function(){
    const scroll = document.documentElement.scrollTop;
    const header = document.getElementById("header");
    const boton = document.getElementById("btn-menu");
    if(scroll>20){
        header.classList.add("nav-JS");
        boton.classList.add("btn-menu-JS");
    }else if(scroll<20){
        header.classList.remove("nav-JS");
        boton.classList.remove("btn-menu-JS");
    }
}

const menu = document.getElementById("header");
const nav = document.getElementById("nav");
const boton = document.getElementById("btn-menu").addEventListener("click", mostrarMenu);
function mostrarMenu(){
    menu.classList.toggle("move-content");
    nav.classList.toggle("move-nav");
    console.log("click")
}

window.addEventListener("resize", (e)=>{
    if(window.innerWidth > 760){
        menu.classList.remove("move-content");
        nav.classList.remove("move-nav");
    }
});

const botonModal = document.querySelector("#contacto");
const botonCerrarModal = document.querySelector("#modal-close");
const modal = document.querySelector("#modal");
botonModal.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.add("mostrar-modal");
});
botonCerrarModal.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.remove("mostrar-modal");
});

