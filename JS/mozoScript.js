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
