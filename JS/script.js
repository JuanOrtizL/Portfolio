/*Navbar */

let menuIcon=document.querySelector('#menu-icon');
let nav= document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x-circle');
    nav.classList.toggle('active');

}

/*Scroll reveal*/ 

ScrollReveal({
    reset:true,
    distance:'80px',
    duration: 2000,
    delay: 200

});

ScrollReveal().reveal('.home-content, .heading ', { origin:'left' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1', { origin:'right' });
ScrollReveal().reveal('.about-img', { origin:'top' });

/* Typed JS*/
const typed= new Typed('.multiple-text',{
    strings:['Backend Developer', 'FullStack Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay: 1000,
    loop:true,
    showCursor:true,
    cursorChar:'♛'
});

 // Función para cargar el contenido de las secciones
 function cargarContenido(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('contenido-principal').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el contenido:', error));
  }
  
  // Carga el contenido inicial al cargar la página
  window.onload = function() {
    cargarContenido('../Vista/About.html');
  };


