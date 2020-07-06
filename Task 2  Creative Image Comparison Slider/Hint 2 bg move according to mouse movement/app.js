const img3 = document.querySelector(".img-3");

function moveme(e) {
  const x = e.clientX + "px";
  img3.style.left = x;
}
