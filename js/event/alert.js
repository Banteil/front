//알림창 보여주기 클릭 시 알림창 보여주기
const box = document.querySelector(".alert-box");
const close = box.querySelector(".close");
const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  box.style.display = "block";
});

close.addEventListener("click", (e) => {
  box.style.display = "none";
});
