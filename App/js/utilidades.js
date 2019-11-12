// let imageRotateCurrencyState = 1;



function cambiarImagenMoneda() {

    if(event.currentTarget.dataset.moneda == "0"){
        document.getElementById("imageCurrency").src="../assets/images/Component 1677 – 1.png";
        event.currentTarget.setAttribute('data-moneda','1');
        // event.currentTarget.dataset.moneda = ''
    }else{
        document.getElementById("imageCurrency").src="../assets/images/Component 1678 – 1.svg";
        event.currentTarget.setAttribute('data-moneda','0');
    }
    //0-USD data atributo
    //1-COP data atributo



    // if (imageRotateCurrencyState==1)
    //         {
    //              document.getElementById("imageCurrency").src="../assets/images/Component 1677 – 1.png";
    //              imageRotateCurrencyState = imageRotateCurrencyState + 1;
    //         }
    // else    {
    //             document.getElementById("imageCurrency").src="../assets/images/Component 1678 – 1.svg";
    //             imageRotateCurrencyState = 1;
    //         }
}