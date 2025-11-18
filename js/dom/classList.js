//h1 요소의 클래스명 전부 가져오기
const h1 = document.querySelector("h1");
console.log(h1.classList);

//one > four 변경
h1.classList.replace("one", "four");

//five 추가
h1.classList.add("five");

//one 없으면 추가, 있으면 제거
h1.classList.toggle("one");

//h1 클래스명 제거
h1.classList.remove("header");
