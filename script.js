var plus_btns = document.querySelectorAll(".plus");
var minus_btns = document.querySelectorAll(".minus");
var total = document.getElementById("total");
var prices = document.querySelectorAll(".price");
//console.log(minus_btns);
//console.log(plus_btns);
var like_btns = document.querySelectorAll(".like");
var delete_btns = document.querySelectorAll(".delete");

function sum() {
  var somme = 0;
  for (let i = 0; i < prices.length; i++) {
    somme = somme + Number(prices[i].innerHTML);
    total.innerHTML = somme;
  }
}
function inc(e) {
  var cible = e.target;
  var div = cible.parentElement;
  var paragraph = div.querySelector("p");
  var value = Number(paragraph.innerHTML);
  value++;
  paragraph.innerHTML = value;
  //multiplying price with quantity
  var tr = div.parentElement.parentElement;
  var unit_price = tr.querySelector(".unitPrice");
  var up = Number(unit_price.innerHTML);
  var price = tr.querySelector(".price");
  price.innerHTML = value * up;
  sum();
}

function dec(e) {
  var cible = e.target;
  var div = cible.parentElement;
  var paragraph = div.querySelector("p");
  var value = Number(paragraph.innerHTML);
  if (value > 0) {
    value--;
  }
  paragraph.innerHTML = value;
  var tr = div.parentElement.parentElement;
  var unit_price = tr.querySelector(".unitPrice");
  var up = Number(unit_price.innerHTML);
  var price = tr.querySelector(".price");
  price.innerHTML = value * up;
  sum();
}

function changecolor(e) {
  var cible = e.target;
  if (cible.style.color !== "red") {
    cible.style.color = "red";
  } else {
    cible.style.color = "gray";
  }
}
function deleteRow(e) {
  var cible = e.target;
  var tr = cible.parentElement.parentElement.parentElement;
  tr.remove();
  var price = tr.querySelector(".price");
  sum();
}
for (let i = 0; i < plus_btns.length; i++) {
  plus_btns[i].addEventListener("click", inc);
}
for (let i = 0; i < minus_btns.length; i++) {
  minus_btns[i].addEventListener("click", dec);
}
for (let i = 0; i < like_btns.length; i++) {
  like_btns[i].addEventListener("click", changecolor);
}

for (let i = 0; i < delete_btns.length; i++) {
  delete_btns[i].addEventListener("click", deleteRow);
}
