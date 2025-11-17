// 조건문, 반복문
// true : 0 제외 숫자, '문자', [], {}
// false : 0, '', null, undefined, NaN(Not a Number)

const date = new Date();
let hour = date.getHours();

console.log(hour < 12 ? "오전" : "오후");

const num1 = Number("123");
console.log(typeof num1);
console.log(isNaN(Number("abc")));
console.log(isNaN(num1));
