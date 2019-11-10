let imageRotateCurrencyState = 1;
let imageRotateCurrencyTwoState = 1;
let imageRotateLengthState = 1;



function imageRotateCurrency() {

    if (imageRotateCurrencyState==1)
            {
                 document.getElementById("imageCurrency").src="../assets/images/Component 1677 – 1.png";
                 imageRotateCurrencyState = imageRotateCurrencyState + 1;
            }
    else    {
                document.getElementById("imageCurrency").src="../assets/images/Component 1678 – 1.svg";
                imageRotateCurrencyState = 1;
            }
}

function imageRotateCurrencyTwo() {

    if (imageRotateCurrencyTwoState==1)
            {
                 document.getElementById("imageCurrencyTwo").src="../assets/images/Component 1677 – 1.png";
                 imageRotateCurrencyTwoState = imageRotateCurrencyTwoState + 1;
            }
    else    {
                document.getElementById("imageCurrencyTwo").src="../assets/images/Component 1678 – 1.svg";
                imageRotateCurrencyTwoState =  1;
            }
}
function imageRotateLength() {
    if (imageRotateLengthState==1)
    {
         document.getElementById("imagesLength").src="../assets/images/Group 1657.svg";
         imageRotateLengthState = imageRotateLengthState + 1;
    }
else    {
        document.getElementById("imagesLength").src="../assets/images/Group 1471.svg";
        imageRotateLengthState= 1;
    }
}
