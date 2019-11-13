  //DECLARACION DE VARIABLES GLOBALES
   var stateDropDownMoreFilters = "OFF";
   var textBottonDropDownMoreFilters = "Otros filtros";
  var  stateRotateLongitudBtnMoreFilters = "Metros";
   //PROCESOS GLOBALES CUANDO SE CARGA EL DOM
  document.getElementById('textBottonDropDownMoreFiltersHtml').innerHTML = textBottonDropDownMoreFilters;

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

function dropDownMoreFilters(){
  if (stateDropDownMoreFilters == "OFF"){
    var aggClassDropDownMoreFilters = document.getElementById("more-filters-interna-proyectos");
    aggClassDropDownMoreFilters.classList.add("content-mid-filter-search-despegable") ;
    stateDropDownMoreFilters =  "ON";
    //------------------------------------------------
    textBottonDropDownMoreFilters = "Cerrar filtros"
    document.getElementById('textBottonDropDownMoreFiltersHtml').innerHTML = textBottonDropDownMoreFilters;
    //------------------------------------------------
          var removeClassSectionDropDownMoreFilters = document.getElementById("section-drop-down-more-filters");
      removeClassSectionDropDownMoreFilters.classList.remove("pdd-top-drop-down-more-filters");
    //------------------------------------------------
    var removeClassDpsNoneNot= document.getElementById("label-btn-input-not");
    removeClassDpsNoneNot.classList.remove("dsp-none")
    var removeClassDpsNoneYes= document.getElementById("label-btn-input-yes");
    removeClassDpsNoneYes.classList.remove("dsp-none")
    var removeClassDpsNoneApto= document.getElementById("label-btn-input-apto");
    removeClassDpsNoneApto.classList.remove("dsp-none")
    var removeClassDpsNoneCasa= document.getElementById("label-btn-input-casa");
    removeClassDpsNoneCasa.classList.remove("dsp-none")

    }else if (stateDropDownMoreFilters == "ON") { 
      var removeClassDropDownMoreFilters = document.getElementById("more-filters-interna-proyectos");
      removeClassDropDownMoreFilters.classList.remove("content-mid-filter-search-despegable");
      stateDropDownMoreFilters = "OFF";
    //------------------------------------------------
      var textBottonDropDownMoreFilters = "Otros filtros"
      document.getElementById('textBottonDropDownMoreFiltersHtml').innerHTML = textBottonDropDownMoreFilters;
    //------------------------------------------------
          var aggClassSectionDropDownMoreFilters = document.getElementById("section-drop-down-more-filters");
                aggClassSectionDropDownMoreFilters.classList.add("pdd-top-drop-down-more-filters") ;
          //------------------------------------------------
    var removeClassDpsNoneNot= document.getElementById("label-btn-input-not");
    removeClassDpsNoneNot.classList.add("dsp-none")
    var removeClassDpsNoneYes= document.getElementById("label-btn-input-yes");
    removeClassDpsNoneYes.classList.add("dsp-none")
    var removeClassDpsNoneApto= document.getElementById("label-btn-input-apto");
    removeClassDpsNoneApto.classList.add("dsp-none")
    var removeClassDpsNoneCasa= document.getElementById("label-btn-input-casa");
    removeClassDpsNoneCasa.classList.add("dsp-none")
    }
}
   function rotateLongitudBtnMoreFilters() {
    if(stateRotateLongitudBtnMoreFilters == "Metros"){
        document.getElementById("imageLongitudBtnMoreFilters").src="../assets/images/Group 1657.svg"
        stateRotateLongitudBtnMoreFilters = "Pies"
    }else if (stateRotateLongitudBtnMoreFilters == "Pies"){
           document.getElementById("imageLongitudBtnMoreFilters").src="../assets/images/Group 1471.svg"
      stateRotateLongitudBtnMoreFilters = "Metros"
    }
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
