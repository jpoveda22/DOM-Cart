var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  let priceUnit = document.querySelector("#cart > tbody > tr > td.pu > span").innerText;
  let quantity = document.querySelector("#cart > tbody > tr > td.qty > label > input[type=number]").value; 
  let priceUnitTimesQuantity = priceUnit * quantity;
  return priceUnitTimesQuantity;
}

let emptyPrice = [] 
function calcAll() {

for(let i=0; i<document.querySelectorAll("tr.product").length; i++){
  let prodCost = document.querySelectorAll("tr.product .pu span")[i].innerHTML * document.querySelectorAll(".qty input")[i].value;
  document.querySelectorAll(".subtot span")[i].innerText = prodCost;
  emptyPrice.push(prodCost);
   let grandTotal = emptyPrice.reduce((a,b) => a + b);
   document.querySelector("body > h2 > span").innerHTML = grandTotal;  
} 
 }


$calc.onclick = calcAll;





