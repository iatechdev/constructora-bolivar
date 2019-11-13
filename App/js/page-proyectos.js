// alert('hola');
//domCargado
(function() {
  var primer_elemento_galeria = document.getElementsByClassName(
    "proyecto-img-galeria"
  );
  var menuLink = primer_elemento_galeria[0];
  console.log(menuLink);
  primer_elemento_galeria[0].className += " img-select";



    // Get the checkbox
    let checkBox = document.getElementById("cbx");
    let mapaElement = document.getElementById("mapa-busqueda");
    let listaResultado = document.getElementById("lista-resultado");
  
    
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      mapaElement.classList.remove("d-none");
      listaResultado.classList.add("d-none");
    } else {
      mapaElement.classList.add("d-none");
      listaResultado.classList.remove("d-none");
    }



})();

function cambiarImagen(srcImage) {
  var imagenSeleccionadaPrincipal = document.getElementById(
    "img-principal-seleccionada"
  );

  var elements = document.getElementsByClassName("proyecto-img-galeria");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove("img-select");
  }

  event.currentTarget.className += " img-select";
  imagenSeleccionadaPrincipal.setAttribute("src", srcImage);
}

function imageRotateCurrency() {
  if (imageRotateCurrencyState == 1) {
    document.getElementById("imageCurrency").src =
      "../assets/images/Component 1677 – 1.png";
    imageRotateCurrencyState = imageRotateCurrencyState + 1;
  } else {
    document.getElementById("imageCurrency").src =
      "../assets/images/Component 1678 – 1.svg";
    imageRotateCurrencyState = 1;
  }
}

function myFunction() {
  var element = document.getElementById("content-frm-busqueda-avanzada-mobile");
  element.classList.toggle("mystyle");
}

function mostrarMasFiltros() {
  var element = document.getElementById("masFiltros");
  element.classList.toggle("mystyle");
}

function checked() {
  // Get the checkbox
  let checkBox = document.getElementById("cbx");
  var mapaElement = document.getElementById("mapa-busqueda");
  var listaResultado = document.getElementById("lista-resultado");

  

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    mapaElement.classList.remove("d-none");
    listaResultado.classList.add("d-none");
  } else {
    mapaElement.classList.add("d-none");
    listaResultado.classList.remove("d-none");
  }
}
