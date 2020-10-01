

function mostrarBebidas(){
  console.log('lasbebidas')
}
function popUp(){

  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function popUp2(){

  var popup = document.getElementById("myPopup2");
  popup.classList.toggle("show");
  const div = document.getElementsByTagName("body");
    for (var i = 0; i < div.length; i++) {
      div[i].addEventListener('click', cerrarPopup);
  }
}

function cerrarPopup(){
  var popup = document.getElementById("myPopup2");
  if(popup.classList.contains("show")){
    popup.classList.remove("show");
  }
}

var accordionItemHeaders = document.querySelectorAll(".accordion_item_header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {        
        var currentlyActiveAccordionItemHeader = document.querySelector(".accordion_item_header.active");
        if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader ) {
            currentlyActiveAccordionItemHeader.classList.toggle("active");
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }

        accordionItemHeader.classList.toggle("active");
        var accordionItemBody = accordionItemHeader.nextElementSibling;
        if(accordionItemHeader.classList.contains("active")){
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else{
            accordionItemBody.style.maxHeight = 0;
        }
    });
});


var foodsText = document.querySelector(".title-text .foods");
var foodsForm = document.querySelector("form.foods");
var foodsBtn = document.querySelector("label.foods");
var drinksBtn = document.querySelector("label.drinks");
var drinksLink = document.querySelector("form .drinks-link a");
drinksBtn.onclick = (()=>{
        foodsForm.style.marginLeft = "-50%";
        foodsText.style.marginLeft = "-50%";
});
foodsBtn.onclick = (()=>{
  foodsForm.style.marginLeft = "0%";
  foodsText.style.marginLeft = "0%";
});
drinksLink.onclick = (()=>{
  drinksBtn.click();
  return false;
});