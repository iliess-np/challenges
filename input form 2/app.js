const fNamespan = document.querySelector(".fName");
const lNamespan = document.querySelector(".lName");
const emailspan = document.querySelector(".email");
const telspan = document.querySelector(".tel");
const messagespan = document.querySelector(".message");

function moveFName() {
  fNamespan.setAttribute("id", "moveme");
}
function removeFName() {
  const x = fNamespan.nextElementSibling.value;
  if (x == "") {
    fNamespan.removeAttribute("id");
  }
}
///////////////////
function moveLName() {
  lNamespan.setAttribute("id", "moveme");
}
function removeLName() {
  const x = lNamespan.nextElementSibling.value;
  if (x == "") {
    lNamespan.removeAttribute("id");
  }
}
///////////////////
function moveEmail() {
  emailspan.setAttribute("id", "moveme");
}
function removeEmail() {
  const x = emailspan.nextElementSibling.value;
  if (x == "") {
    emailspan.removeAttribute("id");
  }
}
///////////////////
function moveTel() {
  telspan.setAttribute("id", "moveme");
}
function removeTel() {
  const x = telspan.nextElementSibling.value;
  if (x == "") {
    telspan.removeAttribute("id");
  }
}
///////////////////
function moveMessage() {
  messagespan.setAttribute("id", "movemessage");
}
function removeMessage() {
  const x = messagespan.nextElementSibling.value;
  if (x == "") {
    messagespan.removeAttribute("id");
  }
}
