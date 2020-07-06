const bar = document.querySelector("#bar");
const progress = document.querySelector(".progress");
const bg = document.querySelector(".container");

progress.innerHTML = bar.value + "%";
progress.style.fontSize = parseInt(bar.value) + 20 + "px";
bg.style.width = bar.value + "%";

bar.oninput = function () {
  progress.innerHTML = this.value + "%";
  bg.style.width = this.value + "%";
  progress.style.fontSize = parseInt(this.value) + 20 + "px";
};
