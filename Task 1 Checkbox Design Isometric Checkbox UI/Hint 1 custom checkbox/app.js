const btn = document.querySelector(".btn-checkbox");
const span = document.querySelector(".dote");

btn.addEventListener("click", (e) => {
  if (btn.checked == true) {
    span.style.left = "30px";
    btn.parentElement.style.background = "royalblue";
  } else {
    span.style.left = "0px";
    btn.parentElement.style.background = "#aaa";
  }
});
