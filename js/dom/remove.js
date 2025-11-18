const h1 = document.querySelector("h1");
console.log(h1);
//h1.remove();
//document.body.removeChild(h1);
// h1.addEventListener("mouseover", (e) => {
//   e.target.remove();
// });

// h1 제거 버튼 클릭 시 제거
const btn1 = document.createElement("button");
btn1.textContent = "삭제";
document.body.appendChild(btn1);
btn1.addEventListener("click", (e) => {
  h1.remove();
  //   e.target.remove();
});

// h1요소의 클래스 제거
// 1) removeAttribute("제거속성명")
// 2) classList.remove() : 클래스 전용
const btn2 = document.createElement("button");
btn2.textContent = "클래스 삭제";
document.body.appendChild(btn2);
btn2.addEventListener("click", (e) => {
  // h1.removeAttribute("class");
  h1.classList.remove("header");
  //h1.classList.toggle("header");
});

const btn3 = document.createElement("button");
btn3.textContent = "img alt 삭제";
document.body.appendChild(btn3);
btn3.addEventListener("click", (e) => {
  const img = document.querySelector("img");
  img.removeAttribute("alt");
});
