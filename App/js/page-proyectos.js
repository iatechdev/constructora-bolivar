// alert('hola');
//domCargado
(function() {

  var primer_elemento_galeria = document.getElementsByClassName('proyecto-img-galeria');
  var menuLink = primer_elemento_galeria[0];
  console.log(menuLink);
  primer_elemento_galeria[0].className += ' img-select';


 
 })();

 function cambiarImagen(){
    alert('imagen nueva');
}