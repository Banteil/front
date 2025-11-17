// 함수 표현식
const showMsg = function () {
  console.log("안녕하세요");
};
showMsg();

const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(5, 3));

const showDialog = function (greeting, name) {
  console.log(`${greeting}, ${name}`);
};
showDialog("hello", "kim");

//함수 선언하기 전 호출 : hoisting
console.log(multiply2(2, 4));
function multiply2(x, y) {
  return x * y;
}

console.log(z);
var z = 5;

// console.log(k); //ReferenceError: Cannot access 'k' before initialization
// let k = 10; //호이스팅 안됨

// 함수 표현식은 호이스팅 안됨
// multiply3(8, 9); //ReferenceError: Cannot access 'multiply3' before initialization
// const multiply3 = function (x, y) {
//   return x * y;
// };
