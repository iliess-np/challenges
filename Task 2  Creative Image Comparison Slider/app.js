const bg = document.querySelector(".container"); //.container::before width 100%
const bgBF = document.querySelector(".container-before"); //.container::before width 100%
const phone = document.querySelector(".img-phone"); //.img-phone::before width 600px
const phoneBF = document.querySelector(".img-phone-before"); //.img-phone::before width 600px
const bar = document.querySelector("#bar");

bgBF.style.width = bar.value + "%";
phoneBF.style.width = bar.value + "%";

bar.oninput = function () {
  bgBF.style.width = this.value + "%";
  phoneBF.style.width = this.value + "%";
};
