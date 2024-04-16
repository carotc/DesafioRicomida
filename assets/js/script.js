
 // funcionCarrusel...
document.querySelector('#my-carousel').addEventListener('slide.bs.carousel', event => {
  document.querySelectorAll(".indicador").forEach(element => {
    element.classList.toggle("active");
  })
})
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// funcionalertaenviarcorreo
$( "#enviarCorreo" ).on( "click", function() {
  alert( "El correo fue enviado correctamente" );
} );

// funciondobleclick rojo
var divdbl = $("h4").on("dblclick", function() {
      $(this).toggleClass("dbl");
    });

// funcionaparecer-desaparecer
    $(document).ready(function() {
      $(".card-text").hide();   
      $(document).ready(function() {
      $(".card-title").on("click", function() {
        $(this).siblings(".card-text").toggle();
       });
    });
   });
 
