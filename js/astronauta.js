$(document).ready(function( $ ) {
  var audio = $("#audio")[0];
  var $contenedor = $("#contenedor");
  $contenedor.mouseenter(function() {
    audio.play();
  });
  $contenedor.mouseleave(function() {
    audio.pause();
  });
});
