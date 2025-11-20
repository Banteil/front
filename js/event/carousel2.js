const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const carousel = document.querySelector(".carousel");
const slideBox = carousel.querySelectorAll(".slide-box");
let index = 0;

next.addEventListener("click", (e) => {
  if (index >= slideBox.length - 1) return;
  index++;
  carousel.style.transform = `translateX(-${100 * index}vw)`;
});

prev.addEventListener("click", (e) => {
  if (index <= 0) return;
  index--;
  carousel.style.transform = `translateX(-${100 * index}vw)`;
});
