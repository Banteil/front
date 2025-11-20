const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const wrap = document.querySelector(".wrap");
const box = document.querySelectorAll(".box");
const index = 1;

next.addEventListener("click", (e) => {
  wrap.style.transform = `translateX(-${300 * index}px)`;
});

prev.addEventListener("click", (e) => {
  wrap.style.transform = `translateX(-${300 * 0}px)`;
});
