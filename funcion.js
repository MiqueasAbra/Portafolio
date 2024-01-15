const btnLeerMas = document.querySelector("#btn-leer-mas");
const btnCerrar = document.querySelector("#btncerrar");
const modal = document.querySelector("#modal");
btnLeerMas.addEventListener("click" , ()=>
{
    modal.showModal();
})
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
let sections = document.querySelectorAll('section');
let navLinks = document.quierySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.quierySelector('header nav a[href*=' + id+ ']').classList.add('active');
            });
        }
    });
    let header = document.querySelector('header');
    
    header.classList.toggle('activo', window.scrollY > 100);
}