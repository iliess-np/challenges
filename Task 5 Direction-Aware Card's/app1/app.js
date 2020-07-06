const marker = document.querySelector("#marker");
const item = document.querySelectorAll("nav a");

function indecator(e) {
  marker.style.left = e.offsetLeft + "px";
  marker.style.width = e.offsetWidth + "px";
}

item.forEach((el) => {
  el.addEventListener("click", (e) => {
    indecator(e.target);
  });
});
