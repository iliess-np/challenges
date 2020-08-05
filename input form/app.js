const text = document.querySelector(".text");
const email = document.querySelector(".email");
const textArea = document.querySelector(".text-area ");

function moveText() {
  text.setAttribute("id", "moveMe");
}
function textBack() {
  var x = text.nextElementSibling.value;
  if (x == "") {
    text.removeAttribute("id");
  }
}
function moveEmail() {
  email.setAttribute("id", "moveMe");
}
function emailBack() {
  var x = email.nextElementSibling.value;
  if (x == "") {
    email.removeAttribute("id");
  }
}
function moveArea() {
  textArea.setAttribute("id", "moveMe");
}
function areaBack() {
  var x = textArea.nextElementSibling.value;
  if (x == "") {
    textArea.removeAttribute("id");
  }
}
