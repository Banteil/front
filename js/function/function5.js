// 콜백함수 : 함수를 다른 함수의 매개변수로 전달, 전달된 함수 호출 가능
// function ask(question, yes, no) {
//   confirm(question) ? yes() : no();
// }

// function showOk() {
//   alert("동의 하셨습니다.");
// }

// function showCancel() {
//   alert("취소 하셨습니다.");
// }

// ask("동의하십니까?", showOk, showCancel);

// const foo = function (func) {
//   func();
// };

// foo(() => {
//   console.log("함수를 전달인자로 전달");
// });

function callTenTimes(callback) {
  for (let index = 0; index < 10; index++) {
    callback();
  }
}

const callback = () => console.log("함수 호출");
callTenTimes(callback);
