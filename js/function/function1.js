// // 함수(단독) == 메소드(객체 내에 포함)
// function name(params) {}
// const func = function () {};
// const func1 = () => {}; : 람다식

// 1. 파라미터 없는 함수
function showMsg() {
  console.log("안녕하세요");
}
showMsg();

// 2. 파라미터 있는 함수, 매개변수 기본값(파라미터 없을 경우 기본값)
function multiply(a, b = 5) {
  console.log(a, b);
  // b = b || 5;
  // 기본값 주는 형태
  return a * b;
}
console.log(multiply(2));

function showDialog(greeting, name) {
  console.log(`${greeting}!! ${name}`);
}
showDialog("안녕", "길동아");

// 3. 함수 안에 함수
function a() {
  function b() {
    console.log("b function");
  }
  b();
  if (true) {
    function c() {
      console.log("c function");
    }
    c();
  }
}

a();
