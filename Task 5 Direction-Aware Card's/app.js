const marker = document.querySelector("#marker");
const item = document.querySelectorAll(".wraper");

function indecator(e) {
  marker.style.left = e.offsetLeft + "px";
  marker.style.top = e.offsetTop + "px";
  marker.style.width = e.offsetWidth + "px";
  marker.style.height = e.offsetHeight + "px";
}
item.forEach((el) => {
  el.addEventListener("mouseover", (e) => {
    indecator(e.target);
  });
});
