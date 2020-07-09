function more() {
  let i = 0;
  while (i < 100) {
    const container = document.querySelector(".container");
    let stars = document.createElement("span");
    let posleft = Math.floor(Math.random() * window.innerWidth);
    let height = Math.floor(Math.random() * 100) + 100;

    stars.style.left = posleft + "px";
    stars.style.height = height + "px";

    let duration = Math.random() * 1;
    stars.style.animationDuration = duration + "s";

    container.appendChild(stars);
    i++;
  }
}
more();
